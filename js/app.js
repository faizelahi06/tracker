import {INTERVIEW_DATA,SCENARIO_DATA} from './embedded-data.js';
import {initAuth,login,isUnlocked,lock} from './auth.js';
import {loadCurriculum,curriculum,initialProgress} from './curriculum.js';
import {getAll,put,del,dumpDB,restoreDB} from './db.js';
import {initRouter,labels,navigate} from './router.js';
import {nextTopic,missingPrereqs,blocked} from './prerequisites.js';
import {scheduleFirst,recordReview,buckets} from './review-engine.js';
import {metrics,weakness,stageCompletion,last30Study} from './analytics.js';
import {barChart,lineChart,donutChart} from './charts.js';
import {exportBackup,importBackup} from './backup.js';
import {createCommit,history,diffDraft,latestSnapshot,exportSnapshot} from './commits.js';
import {el,toast,modal,card,empty} from './ui.js';
import {connectDrive,uploadToDrive,driveConnected} from './drive.js';
import {learningIntelligence,recommendInterviewQuestions} from './intelligence.js';

const $=s=>document.querySelector(s);let state={},questions=[],scenarios=[],route='command',timer={seconds:0,running:false,id:null,start:null};
const navOrder=['command','intelligence','today','learning','review','labs','simulator','study','habits','interview','interviewStudio','questionBook','vault','analytics','weekly','settings'];
let resourcesLoaded=false;
async function loadResources(){
  if(resourcesLoaded)return;
  await loadCurriculum();
  questions=INTERVIEW_DATA;
  scenarios=SCENARIO_DATA;
  resourcesLoaded=true;
}
async function boot(){
  bindLogin();
  try{
    await initAuth();
    if(isUnlocked())await showApp();
  }catch(e){
    console.error('Authentication initialization failed:',e);
    $('#loginError').textContent=e?.message||'Authentication initialization failed.';
  }
}
function bindLogin(){
  const form=$('#loginForm');
  if(!form)throw new Error('Login form is missing from index.html');
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const error=$('#loginError'),button=e.submitter;
    error.textContent='Checking password…';
    if(button)button.disabled=true;
    try{
      const ok=await login($('#loginPassword').value);
      if(!ok){
        error.textContent='Incorrect password.';
        $('#loginPassword').focus();
        $('#loginPassword').select();
        return;
      }
      error.textContent='Password accepted. Loading portal…';
      await showApp();
      error.textContent='';
    }catch(err){
      console.error('Login error:',err);
      error.textContent=`Login failed: ${err?.message||'unknown error'}`;
    }finally{
      if(button)button.disabled=false;
    }
  });
}
async function showApp(){
  await loadResources();
  await loadState();
  $('#login').classList.add('hidden');
  $('#app').classList.remove('hidden');
  renderNav();
  bindGlobal();
  initRouter(async r=>{route=r;await render(r)});
}
function renderNav(){const n=$('#nav');n.replaceChildren(...navOrder.map(r=>el('button',{class:'nav-btn',text:labels[r],onClick:()=>navigate(r),'data-route':r})))}
function bindGlobal(){
  $('#lockPortal').onclick=()=>{lock();location.reload()};
  $('#menuBtn').onclick=()=>document.querySelector('.sidebar').classList.toggle('open');
  $('#quickSession').onclick=()=>navigate('today');
  const themeButtons=[...document.querySelectorAll('.theme-btn')],savedTheme=localStorage.getItem('tracka.theme')||'default';
  document.body.dataset.theme=savedTheme;
  const syncThemeButtons=themeName=>themeButtons.forEach(b=>b.classList.toggle('active',b.dataset.theme===themeName));
  syncThemeButtons(savedTheme);
  themeButtons.forEach(b=>b.onclick=()=>{document.body.dataset.theme=b.dataset.theme;localStorage.setItem('tracka.theme',b.dataset.theme);syncThemeButtons(b.dataset.theme)});
  initFocusDock();
}

const FOCUS_QUOTES=[
  'Clarity comes from testing what you think you know.',
  'A packet capture is evidence. A guess is only a hypothesis.',
  'Small, repeatable sessions beat occasional heroic effort.',
  'Mastery means you can explain it, test it, break it and repair it.',
  'When troubleshooting, change one variable and preserve the evidence.',
  'The goal is not to finish topics. The goal is to become operational.',
  'If you cannot explain the path, you cannot reliably troubleshoot the failure.',
  'Practice recall before rereading. Retrieval exposes the real gap.',
  'Build proof: diagrams, configs, captures, logs and clear explanations.',
  'A strong engineer narrows scope before reaching for commands.',
  'Consistency protects momentum when motivation is unreliable.',
  'Learn the normal state deeply; anomalies become easier to recognize.'
];
let focusTimerState={seconds:25*60,initial:25*60,running:false,timer:null};

function initFocusDock(){
  const dock=$('#focusDock');if(!dock||dock.dataset.bound==='1')return;dock.dataset.bound='1';
  const clock=$('#focusClock'),objective=$('#focusObjective'),quote=$('#focusQuote');
  const renderClock=()=>{const m=Math.floor(focusTimerState.seconds/60),s=focusTimerState.seconds%60;clock.textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;document.title=focusTimerState.running?`${clock.textContent} · TRACK A`:'TRACK A — Execution Command Center'};
  const randomQuote=()=>{let q=FOCUS_QUOTES[Math.floor(Math.random()*FOCUS_QUOTES.length)];if(q===quote.textContent&&FOCUS_QUOTES.length>1)q=FOCUS_QUOTES[(FOCUS_QUOTES.indexOf(q)+1)%FOCUS_QUOTES.length];quote.textContent=q};
  const stop=()=>{focusTimerState.running=false;if(focusTimerState.timer){clearInterval(focusTimerState.timer);focusTimerState.timer=null}renderClock()};
  const start=()=>{if(focusTimerState.running)return;focusTimerState.running=true;dock.classList.add('active-session');focusTimerState.timer=setInterval(()=>{if(focusTimerState.seconds>0){focusTimerState.seconds--;renderClock()}else{stop();dock.classList.remove('active-session');toast('Focus block complete. Record evidence and do a short recall before moving on.')}},1000);renderClock()};
  $('#focusDockToggle').onclick=()=>dock.classList.toggle('open');
  $('#focusDockClose').onclick=()=>dock.classList.remove('open');
  $('#focusStart').onclick=start;$('#focusPause').onclick=stop;
  $('#focusReset').onclick=()=>{stop();focusTimerState.seconds=focusTimerState.initial;dock.classList.remove('active-session');renderClock()};
  dock.querySelectorAll('[data-focus-min]').forEach(b=>b.onclick=()=>{stop();const min=+b.dataset.focusMin;focusTimerState.initial=focusTimerState.seconds=min*60;dock.querySelectorAll('[data-focus-min]').forEach(x=>x.classList.toggle('active',x===b));renderClock()});
  objective.value=localStorage.getItem('tracka.focusObjective')||'';objective.oninput=()=>localStorage.setItem('tracka.focusObjective',objective.value);
  $('#newQuote').onclick=randomQuote;
  const deepBtn=$('#deepFocusToggle');
  deepBtn.onclick=()=>{document.body.classList.toggle('deep-focus');deepBtn.textContent=document.body.classList.contains('deep-focus')?'Exit Deep Focus':'Enter Deep Focus'};
  const distractionInput=$('#quickDistraction'),distractionList=$('#quickDistractionList');
  const getDistractions=()=>{try{return JSON.parse(localStorage.getItem('tracka.quickDistractions')||'[]')}catch{return []}};
  const drawDistractions=()=>{const items=getDistractions().slice(-3).reverse();distractionList.replaceChildren(...items.map(x=>el('div',{class:'quick-distraction-item',text:x})))};
  distractionInput.onkeydown=e=>{if(e.key==='Enter'&&distractionInput.value.trim()){const items=getDistractions();items.push(distractionInput.value.trim());localStorage.setItem('tracka.quickDistractions',JSON.stringify(items.slice(-20)));distractionInput.value='';drawDistractions();toast('Distraction parked. Return to the current objective.')}};
  document.addEventListener('keydown',e=>{if(e.altKey&&e.key.toLowerCase()==='f'){e.preventDefault();dock.classList.toggle('open')}});
  drawDistractions();randomQuote();renderClock()
}

async function loadState(){let p=await getAll('progress');if(!p.length){p=initialProgress();for(const x of p)await put('progress',x)}state={progress:p,studyLogs:await getAll('studyLogs'),habits:await getAll('habits'),interviews:await getAll('interviews'),notes:await getAll('notes'),reviews:await getAll('reviews'),labs:await getAll('labs'),scenarios:await getAll('scenarios'),weeklyReviews:await getAll('weeklyReviews'),parking:await getAll('parking'),recordings:await getAll('recordings'),dailyTasks:await getAll('dailyTasks'),questionBook:await getAll('questionBook')};if(!state.labs.length){for(let i=1;i<=8;i++)await put('labs',{id:i,status:'Not Started',evidence:'',rca:''});state.labs=await getAll('labs')}}
async function refresh(){await loadState();await render(route)}
function setSaved(text='Saved'){$('#saveState').textContent=text;setTimeout(()=>$('#saveState').textContent='Saved',900)}
async function render(r){
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.route===r));
  $('#pageTitle').textContent=labels[r];$('#pageSubtitle').textContent=subtitles[r]||'';
  const v=$('#view');v.replaceChildren(el('div',{class:'empty',text:'Loading…'}));
  try{
    const node=await pages[r]();
    const shell=el('div',{class:`module-shell module-${r}`});
    shell.append(node);v.replaceChildren(shell);
    enhanceRelevantControls(shell,r);
    v.focus();document.querySelector('.sidebar').classList.remove('open')
  }catch(e){console.error(e);v.replaceChildren(el('div',{class:'callout danger',text:`Unable to render page: ${e.message}`}))}
}

const MODULE_GUIDE={
  command:'Use this page to monitor readiness and decide where attention is needed.',
  intelligence:'Recommendations are calculated from your progress, reviews, evidence and interview results.',
  today:'Keep this screen narrow: finish the selected outcome and leave evidence before completion.',
  learning:'Use Edit for controlled topic changes. Save the draft only after reviewing changes.',
  review:'Complete overdue items first, then due-today items. Review results change future intervals.',
  labs:'Track build state, evidence and RCA. A lab is not complete until validation evidence exists.',
  simulator:'Work symptom → scope → hypotheses → tests → evidence → root cause → validation → RCA.',
  study:'Log real study work with minutes, mode, learning evidence, problems and next action.',
  habits:'Use quick buttons to record today. Partial is valid when the habit was meaningfully attempted.',
  interview:'Practice timed answers and save result, confidence, weak point and next review.',
  interviewStudio:'Record, replay, transcribe, self-review and repeat the same answer after correction.',
  questionBook:'Build a rehearsal queue using favorites, readiness state, answer outlines and review dates.',
  vault:'Store commands, filters, RCA lessons and reusable troubleshooting knowledge.',
  analytics:'Use trends to change behavior; do not optimize for decorative metrics.',
  weekly:'Review output, bottlenecks, distractions and define one corrective action for next week.',
  settings:'Manage commits, snapshots, encrypted backup, restore and optional Drive integration.'
};

function showModuleTools(route){
  const guide=MODULE_GUIDE[route]||'Use this module to manage tracked work.';
  const box=el('div',{class:'section-stack'},
    el('div',{class:'callout',text:guide}),
    el('div',{class:'control-guide-grid'},
      el('div',{class:'control-guide'},el('strong',{text:'Edit Mode'}),el('small',{text:'Highlights editable fields so you can distinguish data controls from read-only information.'})),
      el('div',{class:'control-guide'},el('strong',{text:'Button Controls'}),el('small',{text:'Short option lists are converted to direct buttons. Native selects remain available only where lists are long.'})),
      el('div',{class:'control-guide'},el('strong',{text:'Persistence'}),el('small',{text:'Use each module’s Save action. IndexedDB stores the data locally in this browser profile.'}))
    )
  );
  modal(`${labels[route]} · Controls`,box)
}

function enhanceRelevantControls(root,route){
  const buttonRoutes=new Set(['labs','habits','interview','interviewStudio','questionBook']);
  if(buttonRoutes.has(route)){
    root.querySelectorAll('select').forEach(selectEl=>{
      if(selectEl.dataset.enhanced==='1'||selectEl.multiple||selectEl.options.length>6)return;
      selectEl.dataset.enhanced='1';
      const group=el('div',{class:'segmented-control','data-module':route});
      const sync=()=>[...group.children].forEach(b=>b.classList.toggle('active',b.dataset.value===selectEl.value));
      [...selectEl.options].forEach(opt=>{
        const b=el('button',{class:'segment-btn',type:'button',text:opt.textContent||opt.value});
        b.dataset.value=opt.value;b.onclick=()=>{selectEl.value=opt.value;sync();selectEl.dispatchEvent(new Event('change',{bubbles:true}));selectEl.dispatchEvent(new Event('input',{bubbles:true}))};group.append(b)
      });
      sync();selectEl.classList.add('enhanced-select-source');selectEl.insertAdjacentElement('afterend',group)
    })
  }
  root.querySelectorAll('textarea,input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"])').forEach(x=>x.classList.add('managed-input'))
}


const subtitles={command:'Execution, evidence and readiness',intelligence:'Adaptive priorities, risks and next actions',today:'One topic. One outcome. One proof.',learning:'Dependency-ordered curriculum and mastery state',review:'Spaced revision and weak-topic recovery',labs:'Production integration evidence',simulator:'Evidence-driven incident reasoning',study:'Time, outcomes and evidence',habits:'Consistency without tracking overload',interview:'Question drills and readiness scoring',interviewStudio:'Record, review, transcribe and improve your delivery',questionBook:'Save, organize and revisit interview questions',vault:'Searchable technical memory',analytics:'Signals that change your next action',weekly:'Course correction based on evidence',settings:'Security, commits and portable backups'};
const pages={command:commandPage,intelligence:intelligencePage,today:todayPage,learning:learningPage,review:reviewPage,labs:labsPage,simulator:simulatorPage,study:studyPage,habits:habitsPage,interview:interviewPage,interviewStudio:interviewStudioPage,questionBook:questionBookPage,vault:vaultPage,analytics:analyticsPage,weekly:weeklyPage,settings:settingsPage};
function kpi(label,value,hint=''){return el('div',{class:'card kpi'},el('div',{class:'label',text:label}),el('div',{class:'value',text:value}),el('div',{class:'hint',text:hint}))}

async function intelligencePage(){
  const intel=learningIntelligence(state,curriculum()),root=el('div',{class:'section-stack'});
  root.append(el('section',{class:'intelligence-hero'},
    el('div',{},el('span',{class:'badge',text:'LOCAL INTELLIGENCE ENGINE'}),el('h2',{text:`Priority: ${intel.priority}`}),el('p',{text:intel.reason})),
    el('div',{class:'intel-score'},el('strong',{text:String(intel.activeDays)}),el('span',{text:'active days / 7'}))
  ));
  const plan=el('div',{class:'smart-plan'});
  intel.plan.forEach((x,i)=>plan.append(el('div',{class:'smart-plan-row'},el('span',{class:'plan-order',text:String(i+1)}),el('div',{},el('strong',{text:x.task}),el('small',{text:x.why})),el('span',{class:'plan-minutes',text:`${x.minutes} min`}))));
  root.append(card('Adaptive Execution Plan',plan));

  const alerts=el('div',{class:'risk-grid'},...intel.alerts.map(x=>el('div',{class:`risk-card ${x.level}`},el('strong',{text:x.title}),el('p',{text:x.message}))));
  root.append(card('Learning Risk Monitor',alerts));

  const weakBox=el('div',{class:'weak-list'});
  if(!intel.weak.length)weakBox.append(empty('No weakness signals yet. Add confidence, reviews, evidence and interview results to improve recommendations.'));
  intel.weak.slice(0,5).forEach((w,i)=>weakBox.append(el('div',{class:'weak-row'},el('span',{class:'weak-rank',text:`#${i+1}`}),el('div',{},el('strong',{text:w.topic}),el('small',{text:`${w.stage} · ${w.reasons.join(', ')}`})),el('span',{class:'weak-score',text:String(w.score)}))));
  root.append(card('Top Weakness Signals',weakBox));

  const recs=recommendInterviewQuestions(state,questions,6);
  root.append(card('Recommended Interview Drills',el('div',{class:'question-recs'},...recs.map(q=>el('div',{class:'question-rec'},el('span',{class:'badge',text:q.category}),el('strong',{text:q.question}),el('small',{text:q.reasons.length?q.reasons.join(' · '):'balanced practice'}),el('button',{class:'btn',text:'Practice',onClick:()=>navigate('interviewStudio')}))))));

  root.append(card('How the Intelligence Works',el('div',{class:'insight-grid'},
    el('div',{class:'insight'},el('strong',{text:'Dependency aware'}),el('small',{text:'New-topic recommendations follow prerequisite eligibility rather than simply choosing the next row.'})),
    el('div',{class:'insight'},el('strong',{text:'Evidence aware'}),el('small',{text:'Low confidence, failed mastery, overdue reviews and missing evidence increase weakness priority.'})),
    el('div',{class:'insight'},el('strong',{text:'Adaptive, not AI theatre'}),el('small',{text:'Recommendations are calculated locally from your actual tracker data. No secret API key or external model is required.'}))
  )));
  return root
}

async function commandPage(){
  const m=metrics(state,curriculum()),weak=weakness(state,curriculum()),next=nextTopic(curriculum(),state.progress),b=buckets(state.reviews);
  const root=el('div',{class:'section-stack'});
  const quotes=[
    ['The expert in anything was once a beginner.','Helen Hayes'],
    ['Success is the sum of small efforts, repeated day in and day out.','Robert Collier'],
    ['What I cannot create, I do not understand.','Richard Feynman'],
    ['The beautiful thing about learning is that nobody can take it away from you.','B.B. King'],
    ['An investment in knowledge pays the best interest.','Benjamin Franklin'],
    ['Tell me and I forget. Teach me and I remember. Involve me and I learn.','Benjamin Franklin']
  ];
  const q=quotes[new Date().getDate()%quotes.length];
  const hero=el('section',{class:'dashboard-hero'},
    el('div',{class:'hero-copy'},
      el('div',{class:'badge',text:'LEARNING OPERATIONS'}),
      el('h2',{text:next?`Next: ${next.topic}`:'Curriculum cycle complete'}),
      el('p',{text:next?next.learn:'Use review, interview drills and integration labs to maintain mastery.'}),
      el('div',{class:'hero-actions'},
        el('button',{class:'btn primary',text:'Open Today Plan',onClick:()=>navigate('today')}),
        el('button',{class:'btn',text:'Review Queue',onClick:()=>navigate('review')}),
        el('button',{class:'btn',text:'Start Simulator',onClick:()=>navigate('simulator')})
      )
    ),
    el('div',{class:'quote-panel'},el('blockquote',{text:`“${q[0]}”`}),el('cite',{text:`— ${q[1]}`}))
  );
  root.append(hero);

  const ring=(label,value,color='var(--green)')=>el('div',{},
    el('div',{class:'progress-ring',style:`--p:${Math.max(0,Math.min(100,value))};--ring:${color}`},el('span',{class:'ring-value',text:`${Math.round(value)}%`})),
    el('div',{class:'ring-label',text:label})
  );
  root.append(card('Progress Pulse',el('div',{class:'ring-grid'},
    ring('Curriculum Progress',m.completion,'var(--green)'),
    ring('Interview Readiness',m.interviewReadiness,'var(--blue)'),
    ring('Review Completion',m.reviewRate,'var(--amber)'),
    ring('Lab Completion',m.labRate,'var(--purple)')
  )));

  root.append(el('div',{class:'grid kpis'},
    kpi('Topics Mastered',m.mastered,`${state.progress.filter(x=>x.status==='Completed').length} completed, awaiting mastery`),
    kpi('Currently Learning',m.active,'Learning + quick practice'),
    kpi('Average Confidence',m.avgConfidence.toFixed(1),'Scale 1–5'),
    kpi('Study Time · 7d',`${m.study7.toFixed(1)}h`,`${m.study30.toFixed(1)}h in 30 days`),
    kpi('Labs Completed',m.labsDone,`${m.labRate.toFixed(0)}% completion rate`),
    kpi('Study Streak',`${m.streak} days`,`Longest ${m.longestStreak}`),
    kpi('Focus Consistency',`${m.focusConsistency.toFixed(0)}%`,'Habit average'),
    kpi('Overdue Reviews',b.overdue.length,b.overdue.length?'Priority recovery work':'Review queue healthy')
  ));

  const insights=el('div',{class:'insight-grid'},
    el('div',{class:'insight'},el('strong',{text:'Recommended next action'}),el('small',{text:next?`Study ${next.topic}. It is dependency-eligible and is the next unfinished topic in the learning sequence.`:'Run a lab or review a weak topic.'})),
    el('div',{class:'insight'},el('strong',{text:'Weakest area'}),el('small',{text:weak[0]?`${weak[0].topic}: ${weak[0].reasons.join(', ')||'needs stronger evidence'}.`:'No critical weakness detected yet.'})),
    el('div',{class:'insight'},el('strong',{text:'Review pressure'}),el('small',{text:`${b.due.length} due today and ${b.overdue.length} overdue. ${b.overdue.length?'Clear overdue reviews before adding heavy new material.':'You can safely continue the curriculum.'}`}))
  );
  root.append(card('Operational Insights',insights));

  const activity=el('div',{class:'activity-grid'});
  const byDate=new Map();
  state.studyLogs.forEach(x=>{const d=(x.date||'').slice(0,10);byDate.set(d,(byDate.get(d)||0)+(+x.minutes||0))});
  for(let i=44;i>=0;i--){const d=new Date(Date.now()-i*864e5).toISOString().slice(0,10),mins=byDate.get(d)||0,level=mins>=120?4:mins>=60?3:mins>=25?2:mins>0?1:0;activity.append(el('div',{class:`activity-cell ${level?'l'+level:''}`,title:`${d}: ${mins} min`}))}
  root.append(card('45-Day Activity Map',activity));

  const charts=el('div',{class:'grid two'}),c1=el('canvas',{class:'chart'}),c2=el('canvas',{class:'chart'}),c3=el('canvas',{class:'chart'}),c4=el('canvas',{class:'chart'});
  charts.append(card('Curriculum Progress by Stage',c1),card('30-Day Study Minutes',c2),card('Weak-Topic Distribution',c3),card('Theory vs Practical Work',c4));root.append(charts);
  requestAnimationFrame(()=>{
    barChart(c1,stageCompletion(state,curriculum()));
    lineChart(c2,last30Study(state.studyLogs));
    const wd=weak.slice(0,8).map(x=>({label:x.topic,value:x.score}));
    barChart(c3,wd,{max:Math.max(100,...wd.map(x=>x.value),100)});
    const theory=state.studyLogs.filter(x=>x.mode==='Theory').reduce((s,x)=>s+(+x.minutes||0),0);
    const practical=state.studyLogs.filter(x=>x.mode!=='Theory').reduce((s,x)=>s+(+x.minutes||0),0);
    donutChart(c4,[{label:'Theory',value:theory},{label:'Practical',value:practical}]);
  });

  const achievements=[
    ['First Evidence',state.studyLogs.some(x=>x.evidence),'Save practical evidence'],
    ['7-Day Streak',m.longestStreak>=7,'Study seven consecutive days'],
    ['Lab Operator',m.labsDone>=1,'Complete an integration lab'],
    ['Interview Ready',m.interviewReadiness>=75,'Reach 75% interview readiness']
  ];
  root.append(card('Milestones',el('div',{class:'achievement-grid'},...achievements.map(x=>el('div',{class:`achievement ${x[1]?'':'locked'}`},el('strong',{text:x[1]?`Unlocked · ${x[0]}`:x[0]}),el('small',{text:x[2]}))))));
  return root
}
async function todayPage(){const t=nextTopic(curriculum(),state.progress),pm=new Map(state.progress.map(x=>[x.id,x])),rev=buckets(state.reviews);const root=el('div',{class:'section-stack'});if(!t)return empty('No eligible topic. Resolve reviews or use administrator override in Learning Path.');const prereqs=(t.prerequisites||[]).map(id=>curriculum().find(x=>x.id===id)?.topic).filter(Boolean);const focus=el('div',{class:'grid two'},card('Primary Topic',el('div',{},el('h2',{text:t.topic}),el('p',{text:t.learn}),el('div',{class:'callout',text:`Why next: it is the first non-mastered topic whose prerequisite chain is currently eligible.`}))),card('Execution Contract',el('div',{class:'list'},el('div',{class:'list-item'},el('strong',{text:'Prerequisites'}),el('small',{text:prereqs.join(', ')||'None'})),el('div',{class:'list-item'},el('strong',{text:'Quick practice'}),el('small',{text:t.practice})),el('div',{class:'list-item'},el('strong',{text:'Required evidence'}),el('small',{text:t.mastery})),el('div',{class:'list-item'},el('strong',{text:'Interview question'}),el('small',{text:pickQuestion(t).question})))));root.append(focus);const timerCard=el('div',{},el('div',{id:'timerDisplay',class:'timer',text:fmtTime(timer.seconds)}),el('div',{class:'toolbar'},el('button',{id:'startTimer',class:'btn primary',text:timer.running?'Pause':'Start Session'}),el('button',{id:'resumeTimer',class:'btn',text:'Resume'}),el('button',{id:'completeSession',class:'btn',text:'Complete Session'})),el('label',{},'Session evidence or completion note',el('textarea',{id:'sessionEvidence',placeholder:'What did you produce, prove, configure, capture or explain?'})),el('label',{},'Distraction parking lot',el('textarea',{id:'parkingText',placeholder:'Park unrelated thoughts here without switching tasks.'})));root.append(card('Focus Session',timerCard));root.append(card('Reviews Due Today',rev.due.length?el('div',{class:'list'},...rev.due.map(r=>reviewItem(r))):empty('No reviews due today.')));const todayKey=new Date().toISOString().slice(0,10);
const savedTasks=state.dailyTasks.find(x=>x.date===todayKey)||{date:todayKey,items:[
 {id:'learn',text:`Learn: ${t.topic}`,done:false},
 {id:'practice',text:`Quick practice: ${t.practice}`,done:false},
 {id:'evidence',text:`Produce evidence: ${t.mastery}`,done:false},
 {id:'review',text:`Clear ${rev.due.length+rev.overdue.length} due/overdue review item(s)`,done:false},
 {id:'interview',text:`Explain aloud: ${pickQuestion(t).question}`,done:false}
]};
const taskList=el('div',{class:'task-list'});
for(const item of savedTasks.items){const cb=el('input',{type:'checkbox'});cb.checked=!!item.done;cb.onchange=async()=>{item.done=cb.checked;await put('dailyTasks',savedTasks);setSaved('Saved')};taskList.append(el('label',{class:'task-row'},cb,el('span',{text:item.text})))}
root.insertBefore(card("Today's Execution Checklist",taskList),root.firstChild.nextSibling);
requestAnimationFrame(()=>bindTimer(t));return root}
function pickQuestion(t){const text=(t.topic+' '+t.stage).toLowerCase();const map=[['ospf','OSPF'],['dns','DNS'],['tcp','TCP/IP'],['tls','TLS/PKI'],['firewall','Firewalls'],['vpn','VPN'],['switch','Switching'],['routing','Routing']];const cat=map.find(([k])=>text.includes(k))?.[1]||'Networking fundamentals';return questions.find(q=>q.category===cat)||questions[0]}
function fmtTime(s){return [Math.floor(s/3600),Math.floor(s%3600/60),s%60].map(x=>String(x).padStart(2,'0')).join(':')}
function bindTimer(topic){const display=$('#timerDisplay'),start=$('#startTimer'),resume=$('#resumeTimer');const tick=()=>{timer.seconds++;display.textContent=fmtTime(timer.seconds)};start.onclick=()=>{document.body.classList.add('focus-mode');if(timer.running){clearInterval(timer.id);timer.running=false;start.textContent='Resume'}else{timer.running=true;timer.start??=new Date().toISOString();timer.id=setInterval(tick,1000);start.textContent='Pause'}};resume.onclick=()=>{document.body.classList.add('focus-mode');if(!timer.running){timer.running=true;timer.id=setInterval(tick,1000);start.textContent='Pause'}};$('#completeSession').onclick=async()=>{const evidence=$('#sessionEvidence').value.trim();if(!evidence)return toast('Evidence or a completion note is required.');clearInterval(timer.id);timer.running=false;const minutes=Math.max(1,Math.round(timer.seconds/60));await put('studyLogs',{date:new Date().toISOString(),stage:topic.stage,topic:topic.topic,topicId:topic.id,minutes,mode:'Quick Practice',learned:evidence,evidence,problem:'',nextAction:'',confidence:3});const park=$('#parkingText').value.trim();if(park)await put('parking',{date:new Date().toISOString(),text:park,resolved:false});document.body.classList.remove('focus-mode');timer={seconds:0,running:false,id:null,start:null};toast('Session saved with evidence.');await refresh()}}
async function learningPage(){
  const pm=new Map(state.progress.map(p=>[p.id,p])),root=el('div',{class:'section-stack'}),dirty=new Map();
  const search=el('input',{placeholder:'Search topics, stages or skills…','aria-label':'Search learning path'});
  let activeFilter='All';
  const filterBar=el('div',{class:'status-filter-bar'});
  const filters=['All','Not Started','Learning','Quick Practice','Review','Completed','Mastered'];
  const body=el('div');
  const saveBtn=el('button',{class:'btn primary',text:'Save Changes',disabled:'disabled'});
  const discardBtn=el('button',{class:'btn',text:'Discard Draft',disabled:'disabled'});
  const dirtyText=el('span',{class:'autosave-pill',text:'All changes saved'});
  const next=nextTopic(curriculum(),state.progress);
  const recommend=el('div',{class:'recommend-banner'},
    el('div',{},el('span',{class:'badge',text:'NEXT RECOMMENDATION'}),el('strong',{text:next?next.topic:'No eligible next topic'}),el('small',{text:next?`${next.stage} · ${next.learn}`:'Resolve prerequisites or review requirements.'})),
    el('div',{class:'toolbar'},el('button',{class:'btn primary',text:'Study Next Topic',onClick:()=>navigate('today')}),el('button',{class:'btn',text:'Learning Intelligence',onClick:()=>navigate('intelligence')}))
  );
  const markDirty=(id,patch)=>{dirty.set(id,{...(dirty.get(id)||{}),...patch});saveBtn.disabled=false;saveBtn.removeAttribute('disabled');discardBtn.disabled=false;discardBtn.removeAttribute('disabled');dirtyText.textContent=`Draft · ${dirty.size} topic(s) changed`};
  const makeFilterButtons=()=>{filterBar.replaceChildren();for(const f of filters){const b=el('button',{class:`filter-btn ${activeFilter===f?'active':''}`,text:f,onClick:()=>{activeFilter=f;makeFilterButtons();draw()}});filterBar.append(b)}};
  makeFilterButtons();

  const saveChanges=async()=>{
    if(!dirty.size)return;
    saveBtn.disabled=true;saveBtn.textContent='Saving…';
    try{
      for(const [id,patch] of dirty){
        const p=pm.get(id);Object.assign(p,patch);
        if(p.status==='Completed'&&!p.completedDate){p.completedDate=new Date().toISOString().slice(0,10);await scheduleFirst(id)}
        if(p.status==='Mastered'&&!(p.masteryPassed&&+p.confidence>=4&&(p.reviewCount||0)>=1)){p.status='Completed';toast('Mastered requires mastery check, confidence ≥4 and at least one completed review.')}
        await put('progress',p);
      }
      dirty.clear();setSaved('Saved');toast('Learning Path updated.');await refresh();
    }catch(err){console.error(err);toast(`Save failed: ${err.message}`);saveBtn.disabled=false;saveBtn.textContent='Save Changes'}
  };
  saveBtn.onclick=saveChanges;
  discardBtn.onclick=()=>{if(!dirty.size)return;if(confirm('Discard all unsaved Learning Path changes?')){dirty.clear();refresh()}};

  const openEditor=t=>{
    const p=pm.get(t.id),draft={...p,...(dirty.get(t.id)||{})};
    const statuses=['Not Started','Learning','Quick Practice','Review','Completed','Mastered'];
    const statusButtons=el('div',{class:'choice-grid'});let selectedStatus=draft.status||'Not Started';
    const redrawStatus=()=>{[...statusButtons.children].forEach(b=>b.classList.toggle('active',b.dataset.value===selectedStatus))};
    statuses.forEach(x=>{const b=el('button',{class:'choice-btn',text:x,type:'button'});b.dataset.value=x;b.onclick=()=>{selectedStatus=x;redrawStatus()};statusButtons.append(b)});redrawStatus();
    const confButtons=el('div',{class:'confidence-buttons'});let selectedConfidence=+(draft.confidence||1);
    const redrawConf=()=>{[...confButtons.children].forEach(b=>b.classList.toggle('active',+b.dataset.value===selectedConfidence))};
    [1,2,3,4,5].forEach(x=>{const b=el('button',{class:'confidence-btn',text:String(x),type:'button'});b.dataset.value=String(x);b.onclick=()=>{selectedConfidence=x;redrawConf()};confButtons.append(b)});redrawConf();
    const mastery=el('input',{type:'checkbox'});mastery.checked=!!draft.masteryPassed;
    const evidence=el('textarea');evidence.value=draft.evidence||'';evidence.placeholder='PCAP name, configuration file, lab result, ticket, diagram or note';
    const notes=el('textarea');notes.value=draft.notes||'';notes.placeholder='What you understood, mistakes, production lessons and follow-up questions';
    const planned=input('date');planned.value=draft.plannedDate||'';
    const editor=el('div',{class:'topic-editor'},
      el('div',{class:'editor-summary'},el('span',{class:'badge',text:t.stage}),el('h3',{text:t.topic}),el('p',{text:t.learn}),el('p',{},el('strong',{text:'Quick practice: '}),t.practice||'—'),el('p',{},el('strong',{text:'Mastery check: '}),t.mastery||'—')),
      el('label',{},'Status',statusButtons),el('label',{},'Confidence',confButtons),
      el('div',{class:'form-grid'},el('label',{},'Planned date',planned),el('label',{class:'mastery-toggle'},mastery,' Mastery check passed')),
      el('label',{},'Evidence',evidence),el('label',{},'Notes',notes)
    );
    modal(`Edit Topic · ${t.topic}`,editor,[
      {label:'Apply to Draft',kind:'primary',run:async back=>{markDirty(t.id,{status:selectedStatus,confidence:selectedConfidence,masteryPassed:mastery.checked,evidence:evidence.value,notes:notes.value,plannedDate:planned.value});back.remove();draw();toast('Topic changes added to draft.')}},
      {label:'Save Now',run:async back=>{markDirty(t.id,{status:selectedStatus,confidence:selectedConfidence,masteryPassed:mastery.checked,evidence:evidence.value,notes:notes.value,plannedDate:planned.value});back.remove();await saveChanges()}}
    ])
  };

  const toolbar=el('div',{class:'learning-control-panel'},
    el('div',{class:'learning-search'},search),
    filterBar,
    el('div',{class:'save-strip'},dirtyText,discardBtn,saveBtn)
  );
  root.append(recommend,toolbar,body);

  const draw=()=>{
    const q=search.value.toLowerCase();
    const items=curriculum().filter(t=>(activeFilter==='All'||(dirty.get(t.id)?.status||pm.get(t.id)?.status)===activeFilter)&&(`${t.stage} ${t.topic} ${t.learn}`.toLowerCase().includes(q)));
    if(!items.length){body.replaceChildren(empty('No topics match the current search and status filter.'));return}
    const table=el('table',{class:'learning-table'});table.append(el('thead',{},el('tr',{},...['Stage / Topic','Prerequisites','Status','Confidence','Mastery','Review','Actions'].map(h=>el('th',{text:h})))));
    const tb=el('tbody');
    for(const t of items){
      const p={...pm.get(t.id),...(dirty.get(t.id)||{})},miss=missingPrereqs(t,pm);
      const statusPill=el('span',{class:`status-pill status-${String(p.status||'Not Started').toLowerCase().replaceAll(' ','-')}`,text:p.status||'Not Started'});
      const conf=el('div',{class:'confidence-meter'},...[1,2,3,4,5].map(n=>el('span',{class:n<=+(p.confidence||1)?'filled':''})));
      const actions=el('div',{class:'row-actions'},
        el('button',{class:'btn small primary',text:'Edit',onClick:()=>openEditor(t)}),
        el('button',{class:'btn small',text:'Study',onClick:()=>navigate('today')}),
        el('button',{class:'btn small',text:'More',onClick:()=>modal(t.topic,el('div',{class:'section-stack'},el('p',{},el('strong',{text:'What to learn: '}),t.learn),el('p',{},el('strong',{text:'Practice: '}),t.practice||'—'),el('p',{},el('strong',{text:'Mastery: '}),t.mastery||'—'),el('p',{},el('strong',{text:'Evidence: '}),p.evidence||'None yet'),el('p',{},el('strong',{text:'Notes: '}),p.notes||'None yet')))}));
      tb.append(el('tr',{},
        el('td',{},el('span',{class:'stage-mini',text:t.stage}),el('strong',{text:t.topic}),el('small',{text:t.learn})),
        el('td',{text:miss.length?miss.map(id=>curriculum().find(x=>x.id===id)?.topic).filter(Boolean).join(', '):'Eligible'}),
        el('td',{},statusPill),el('td',{},conf),
        el('td',{},el('span',{class:`mastery-badge ${p.masteryPassed?'passed':''}`,text:p.masteryPassed?'Passed':'Pending'})),
        el('td',{text:p.nextReviewDate||'—'}),el('td',{},actions)
      ))
    }
    table.append(tb);body.replaceChildren(el('div',{class:'table-wrap managed-table'},table))
  };
  search.oninput=draw;draw();return root
}

function reviewItem(r){const t=curriculum().find(x=>x.id===r.topicId);const row=el('div',{class:'list-item'},el('strong',{text:t?.topic||`Topic ${r.topicId}`}),el('small',{text:`Due ${r.dueDate} · Review ${r.round}`}),el('div',{class:'toolbar'}));for(const result of ['Forgot','Weak','Partial','Strong'])row.lastChild.append(el('button',{class:'btn',text:result,onClick:async()=>{await recordReview(r,result);const p=state.progress.find(x=>x.id===r.topicId);p.reviewCount=(p.reviewCount||0)+1;if(result==='Strong'&&p.status==='Completed'&&p.confidence>=4&&p.masteryPassed)p.status='Mastered';else if(['Forgot','Weak'].includes(result))p.status='Review';await put('progress',p);toast('Review recorded.');await refresh()}}));return row}
async function reviewPage(){const b=buckets(state.reviews),root=el('div',{class:'grid three'});for(const [name,arr] of [['Overdue',b.overdue],['Due Today',b.due],['Upcoming',b.upcoming.slice(0,15)]])root.append(card(name,arr.length?el('div',{class:'list'},...arr.map(reviewItem)):empty(`No ${name.toLowerCase()} reviews.`)));return root}
async function labsPage(){const names=['Enterprise Campus Build','OSPF Production Lab','Firewall Segmentation','Infrastructure Services Incident','NAT Published Service','HTTPS Failure Chain','VPN Up / No Traffic','Timed Production Outage'];const root=el('div',{class:'grid two'});for(let i=0;i<names.length;i++){const l=state.labs.find(x=>x.id===i+1)||{id:i+1,status:'Not Started',evidence:'',rca:''},sel=el('select',{},...['Not Started','Building','Fault Injection','Troubleshooting','Completed'].map(x=>el('option',{value:x,text:x,selected:l.status===x?'selected':null}))),ev=el('textarea',{placeholder:'Evidence: configs, PCAP, logs, diagram…'}),rca=el('textarea',{placeholder:'RCA: timeline, trigger, root cause, fix, prevention…'});ev.value=l.evidence||'';rca.value=l.rca||'';const save=async()=>{l.status=sel.value;l.evidence=ev.value;l.rca=rca.value;await put('labs',l);setSaved('Saving…')};sel.onchange=save;ev.onchange=save;rca.onchange=save;root.append(card(names[i],el('div',{class:'section-stack'},sel,ev,rca)))}return root}
async function simulatorPage(){const root=el('div',{class:'section-stack'}),sel=el('select',{},...scenarios.map(s=>el('option',{value:s.id,text:s.name}))),body=el('div');root.append(el('div',{class:'toolbar'},sel),body);const draw=()=>{const s=scenarios.find(x=>x.id==sel.value),saved=state.scenarios.find(x=>x.scenarioId===s.id)||{};const evidence=el('div',{class:'list'},...s.evidence.map(x=>el('div',{class:'list-item',text:x})));const fields=['Define symptom','Define scope','Identify dependencies','Form hypotheses','Select tests','Record evidence','Identify root cause','Propose fix','Validate recovery','Write RCA'];const flow=el('div',{class:'scenario-flow'});fields.forEach((f,i)=>{const ta=el('textarea',{placeholder:f});ta.value=saved.answers?.[i]||'';flow.append(el('label',{class:'scenario-step'},f,ta))});const reveal=el('button',{class:'btn',text:'Reveal Root Cause',onClick:()=>modal('Hidden Root Cause',el('div',{class:'callout warn',text:s.rootCause}))});const save=el('button',{class:'btn primary',text:'Save Investigation',onClick:async()=>{const answers=[...flow.querySelectorAll('textarea')].map(x=>x.value);await put('scenarios',{...(saved.id?{id:saved.id}:{}),scenarioId:s.id,date:new Date().toISOString(),answers,mistakes:answers.filter(x=>!x.trim()).length});toast('Investigation saved.');await refresh()}});body.replaceChildren(el('div',{class:'grid two'},card('Incident Context',el('div',{},el('h3',{text:s.name}),el('p',{text:s.complaint}),el('div',{class:'callout',text:s.symptoms}),el('h3',{text:'Available Evidence'}),evidence,reveal)),card('Investigation Workflow',el('div',{},flow,el('div',{class:'toolbar'},save))))) };sel.onchange=draw;draw();return root}
async function studyPage(){const root=el('div',{class:'section-stack'}),form=el('form',{class:'card form-grid'});const fields={date:input('datetime-local'),stage:input('text'),topic:input('text'),minutes:input('number'),mode:select(['Theory','Quick Practice','Review','Troubleshooting','Interview Drill','Integration Lab']),learned:textarea(),evidence:textarea(),problem:textarea(),nextAction:textarea(),confidence:select(['1','2','3','4','5'])};fields.date.value=new Date().toISOString().slice(0,16);for(const[k,v]of Object.entries(fields))form.append(el('label',{},labelize(k),v));form.append(el('button',{class:'btn primary',type:'submit',text:'Save Study Session'}));form.onsubmit=async e=>{e.preventDefault();const o={};for(const[k,v]of Object.entries(fields))o[k]=v.value;if(!o.topic||!o.minutes)return toast('Topic and minutes are required.');o.minutes=+o.minutes;o.confidence=+o.confidence;await put('studyLogs',o);toast('Study session saved.');await refresh()};const list=state.studyLogs.length?tableFrom(state.studyLogs.slice().reverse().slice(0,50),['date','topic','minutes','mode','evidence','nextAction']):empty('No study sessions yet.');root.append(form,card('Recent Sessions',list));return root}
async function habitsPage(){const root=el('div',{class:'section-stack'}),names=['Sleep Target','Gym / Exercise','Walk / Movement','Main Study Session','Practical Lab','Active Recall / Revision','Communication Practice','Distraction Control'],today=new Date().toISOString().slice(0,10),h=state.habits.find(x=>x.date===today)||{date:today,values:{}};const form=el('form',{class:'card form-grid'});for(const n of names){const s=select(['','Yes','Partial','No','N/A']);s.value=h.values[n]||'';form.append(el('label',{},n,s));s.onchange=()=>h.values[n]=s.value}form.append(el('label',{},'Notes',textarea(h.notes||'')),el('button',{class:'btn primary',type:'submit',text:'Save Today'}));form.onsubmit=async e=>{e.preventDefault();const vals=Object.values(h.values).filter(x=>x&&x!=='N/A'),score=vals.length?vals.reduce((a,x)=>a+(x==='Yes'?1:x==='Partial'?.5:0),0)/vals.length:0;h.score=score;h.notes=form.querySelector('textarea').value;await put('habits',h);toast('Habits saved.');await refresh()};root.append(form,card('Recent Habit Scores',state.habits.length?tableFrom(state.habits.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,30),['date','score','notes']):empty('No habit data yet.')));return root}
async function interviewPage(){
  const root=el('div',{class:'section-stack'}),controls=el('div',{class:'toolbar'}),body=el('div');
  const category=select(['All',...new Set(questions.map(q=>q.category))]),random=el('button',{class:'btn primary',text:'Random Question'}),timed=el('button',{class:'btn',text:'Timed Answer Mode'});
  controls.append(category,random,timed);root.append(controls,body);
  let current=null,countdownId=null,mediaRecorder=null,chunks=[],recordingBlob=null,stream=null;
  const stopTracks=()=>{stream?.getTracks().forEach(t=>t.stop());stream=null};
  const show=q=>{
    current=q;recordingBlob=null;
    const answer=textarea(),weak=textarea(),conf=select(['1','2','3','4','5']),result=select(['Weak','Acceptable','Strong']),next=input('date'),clock=el('div',{class:'timer',text:'02:00'});
    const recStatus=el('span',{class:'autosave-pill',text:'Recorder idle'});
    const audioPreview=el('audio',{controls:'controls',class:'recording-preview'});audioPreview.hidden=true;
    const recordBtn=el('button',{class:'btn',type:'button',text:'Record Audio'});
    const stopBtn=el('button',{class:'btn',type:'button',text:'Stop Recording',disabled:'disabled'});
    const saveRecording=el('button',{class:'btn',type:'button',text:'Save Recording Locally',disabled:'disabled'});
    const driveBtn=el('button',{class:'btn',type:'button',text:'Upload to Google Drive',disabled:'disabled'});
    recordBtn.onclick=async()=>{
      try{
        stream=await navigator.mediaDevices.getUserMedia({audio:true});
        chunks=[];mediaRecorder=new MediaRecorder(stream);
        mediaRecorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};
        mediaRecorder.onstop=()=>{recordingBlob=new Blob(chunks,{type:mediaRecorder.mimeType||'audio/webm'});audioPreview.src=URL.createObjectURL(recordingBlob);audioPreview.hidden=false;saveRecording.disabled=false;driveBtn.disabled=false;recStatus.textContent=`Ready · ${(recordingBlob.size/1024).toFixed(0)} KB`;stopTracks()};
        mediaRecorder.start();recordBtn.disabled=true;stopBtn.disabled=false;recStatus.textContent='Recording…';
      }catch(err){toast(`Microphone unavailable: ${err.message}`)}
    };
    stopBtn.onclick=()=>{if(mediaRecorder?.state==='recording'){mediaRecorder.stop();recordBtn.disabled=false;stopBtn.disabled=true}};
    saveRecording.onclick=async()=>{
      if(!recordingBlob)return;
      await put('recordings',{questionId:q.id,question:q.question,category:q.category,date:new Date().toISOString(),mime:recordingBlob.type,blob:recordingBlob});
      toast('Recording saved in this browser.');await refresh();
    };
    driveBtn.onclick=async()=>{
      if(!recordingBlob)return;
      try{
        const clientId=localStorage.getItem('tracka.googleClientId')||'';
        if(!driveConnected())await connectDrive(clientId);
        const stamp=new Date().toISOString().replace(/[:.]/g,'-'),ext=recordingBlob.type.includes('ogg')?'ogg':'webm';
        const file=await uploadToDrive(recordingBlob,`TrackA-Interview-${q.id}-${stamp}.${ext}`,recordingBlob.type);
        toast(`Uploaded to Drive: ${file.name}`);
      }catch(err){toast(err.message)}
    };
    const save=el('button',{class:'btn primary',text:'Save Interview Result',onClick:async()=>{
      await put('interviews',{questionId:q.id,category:q.category,question:q.question,answer:answer.value,weakPoint:weak.value,confidence:+conf.value,result:result.value,nextReviewDate:next.value,date:new Date().toISOString()});
      toast('Interview result saved.');await refresh()
    }});
    body.replaceChildren(card(q.category,el('div',{class:'section-stack'},
      el('h2',{text:q.question}),clock,
      card('Audio Practice Recorder',el('div',{class:'section-stack'},el('div',{class:'toolbar'},recordBtn,stopBtn,saveRecording,driveBtn,recStatus),audioPreview,el('small',{text:'Recordings stay in IndexedDB unless you explicitly upload them. Google Drive upload requires your own OAuth Client ID configured in Settings.'}))),
      el('label',{},'Answer summary',answer),el('label',{},'Weak point',weak),
      el('div',{class:'form-grid'},el('label',{},'Confidence',conf),el('label',{},'Result',result),el('label',{},'Next review',next)),save
    )));
    timed.onclick=()=>{clearInterval(countdownId);let sec=120;clock.textContent=fmtTime(sec);countdownId=setInterval(()=>{sec--;clock.textContent=fmtTime(Math.max(0,sec));if(sec<=0)clearInterval(countdownId)},1000)}
  };
  random.onclick=()=>{const pool=questions.filter(q=>category.value==='All'||q.category===category.value);show(pool[Math.floor(Math.random()*pool.length)])};
  random.click();
  root.append(card('Saved Recordings',state.recordings.length?tableFrom(state.recordings.slice().reverse().slice(0,20).map(r=>({date:r.date,category:r.category,question:r.question,size:`${(r.blob?.size/1024||0).toFixed(0)} KB`})),['date','category','question','size']):empty('No local interview recordings yet.')));
  root.append(card('Recent Practice',state.interviews.length?tableFrom(state.interviews.slice().reverse().slice(0,20),['date','category','question','confidence','result','weakPoint']):empty('No interview results yet.')));
  return root
}

async function interviewStudioPage(){
  const root=el('div',{class:'section-stack'});
  const intro=el('div',{class:'recommend-banner'},
    el('div',{},el('strong',{text:'Interview Practice Studio'}),el('small',{text:'Record → transcribe → review → score → repeat. Audio and video stay in this browser unless you explicitly upload a file to Google Drive.'})),
    el('button',{class:'btn',text:'Open Question Book',onClick:()=>navigate('questionBook')})
  );
  root.append(intro);

  let stream=null,recorder=null,chunks=[],blob=null,mode='video',recognition=null,liveTranscript='';
  const questionSelect=el('select',{'aria-label':'Practice question'},...questions.map(q=>el('option',{value:String(q.id),text:`${q.category} — ${q.question}`})));
  const modeSelect=select(['Video + Audio','Audio Only']);
  const preview=el('video',{class:'studio-preview',controls:'controls',playsinline:'playsinline'});preview.muted=true;
  const playback=el('video',{class:'studio-preview',controls:'controls'});playback.hidden=true;
  const transcript=textarea();transcript.placeholder='Transcript appears here when browser speech recognition is available. You can always edit or paste a transcript manually.';
  const status=el('span',{class:'autosave-pill',text:'Ready'});
  const startBtn=el('button',{class:'btn primary',type:'button',text:'Start Recording'});
  const stopBtn=el('button',{class:'btn',type:'button',text:'Stop',disabled:'disabled'});
  const saveBtn=el('button',{class:'btn',type:'button',text:'Save Practice',disabled:'disabled'});
  const driveBtn=el('button',{class:'btn',type:'button',text:'Upload Recording to Drive',disabled:'disabled'});
  const confidence=select(['1','2','3','4','5']),result=select(['Weak','Acceptable','Strong']);
  const selfReview=textarea();selfReview.placeholder='What was unclear, too long, inaccurate, or poorly structured?';
  const improvement=textarea();improvement.placeholder='One specific improvement for the next attempt';

  function stopStream(){stream?.getTracks().forEach(t=>t.stop());stream=null;preview.srcObject=null}
  function stopSpeech(){try{recognition?.stop()}catch(e){}recognition=null}
  function startSpeech(){
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SR){status.textContent='Recording · transcription unavailable in this browser';return}
    recognition=new SR();recognition.continuous=true;recognition.interimResults=true;recognition.lang='en-US';
    recognition.onresult=e=>{
      let finalText=liveTranscript,interim='';
      for(let i=e.resultIndex;i<e.results.length;i++){const txt=e.results[i][0].transcript;if(e.results[i].isFinal)finalText+=txt+' ';else interim+=txt}
      liveTranscript=finalText;transcript.value=(finalText+interim).trim();
    };
    recognition.onerror=e=>{console.warn('Speech recognition:',e.error)};
    try{recognition.start()}catch(e){}
  }

  startBtn.onclick=async()=>{
    try{
      mode=modeSelect.value==='Audio Only'?'audio':'video';
      stream=await navigator.mediaDevices.getUserMedia(mode==='video'?{video:true,audio:true}:{audio:true});
      if(mode==='video'){preview.srcObject=stream;preview.hidden=false;await preview.play()}else{preview.hidden=true}
      chunks=[];blob=null;liveTranscript='';transcript.value='';
      const options=MediaRecorder.isTypeSupported('video/webm;codecs=vp8,opus')&&mode==='video'?{mimeType:'video/webm;codecs=vp8,opus'}:{};
      recorder=new MediaRecorder(stream,options);
      recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};
      recorder.onstop=()=>{
        blob=new Blob(chunks,{type:recorder.mimeType||(mode==='video'?'video/webm':'audio/webm')});
        playback.src=URL.createObjectURL(blob);playback.hidden=false;playback.muted=false;
        saveBtn.disabled=false;driveBtn.disabled=false;status.textContent=`Ready to review · ${(blob.size/1024/1024).toFixed(1)} MB`;stopStream();stopSpeech()
      };
      recorder.start(1000);startSpeech();startBtn.disabled=true;stopBtn.disabled=false;status.textContent='Recording…';
    }catch(err){stopStream();stopSpeech();toast(`Camera/microphone unavailable: ${err.message}`)}
  };
  stopBtn.onclick=()=>{if(recorder?.state==='recording'){recorder.stop();startBtn.disabled=false;stopBtn.disabled=true}};
  saveBtn.onclick=async()=>{
    if(!blob)return;
    const q=questions.find(x=>String(x.id)===questionSelect.value);
    await put('recordings',{questionId:q?.id,question:q?.question||'',category:q?.category||'',date:new Date().toISOString(),mime:blob.type,kind:mode,blob,transcript:transcript.value,selfReview:selfReview.value,improvement:improvement.value,confidence:+confidence.value,result:result.value});
    toast('Practice recording and review saved locally.');await refresh()
  };
  driveBtn.onclick=async()=>{
    if(!blob)return;
    try{
      const cid=localStorage.getItem('tracka.googleClientId')||'';
      if(!driveConnected())await connectDrive(cid);
      const ext=mode==='video'?'webm':'webm',stamp=new Date().toISOString().replace(/[:.]/g,'-');
      await uploadToDrive(blob,`TrackA-${mode}-practice-${stamp}.${ext}`,blob.type);toast('Recording uploaded to Google Drive.')
    }catch(err){toast(err.message)}
  };

  const recorderPanel=el('div',{class:'studio-grid'},
    el('div',{class:'section-stack'},
      el('label',{},'Practice question',questionSelect),el('label',{},'Recording mode',modeSelect),
      el('div',{class:'toolbar'},startBtn,stopBtn,status),preview,playback
    ),
    el('div',{class:'section-stack'},
      el('label',{},'Transcript',transcript),
      el('div',{class:'form-grid'},el('label',{},'Confidence',confidence),el('label',{},'Result',result)),
      el('label',{},'Self-review',selfReview),el('label',{},'Next-attempt improvement',improvement),
      el('div',{class:'toolbar'},saveBtn,driveBtn)
    )
  );
  root.append(card('Practice Recorder',recorderPanel));

  const framework=el('div',{class:'grid three'},
    card('Technical Answer Framework',el('ol',{class:'framework-list'},...['Define the concept precisely','Explain the mechanism or packet flow','Give a production example','State failure modes and symptoms','Explain verification and troubleshooting'].map(x=>el('li',{text:x})))),
    card('Troubleshooting Answer Framework',el('ol',{class:'framework-list'},...['Clarify symptom and scope','Check recent changes','Map dependencies','Form ranked hypotheses','Test with evidence','Fix and validate','Document RCA and prevention'].map(x=>el('li',{text:x})))),
    card('Behavioral STAR Framework',el('ol',{class:'framework-list'},...['Situation: brief context','Task: your responsibility','Action: what you personally did','Result: measurable outcome','Learning: what changed afterward'].map(x=>el('li',{text:x}))))
  );
  root.append(framework);

  const saved=state.recordings.slice().sort((x,y)=>(y.date||'').localeCompare(x.date||''));
  const list=el('div',{class:'recording-library'});
  if(!saved.length)list.append(empty('No practice recordings yet. Record one above and save it.'));
  for(const r of saved){
    const media=r.kind==='video'?el('video',{controls:'controls',class:'library-media'}):el('audio',{controls:'controls',class:'library-audio'});
    if(r.blob instanceof Blob)media.src=URL.createObjectURL(r.blob);
    const remove=el('button',{class:'btn danger',text:'Delete',onClick:async()=>{if(confirm('Delete this local practice recording?')){await del('recordings',r.id);toast('Recording deleted.');await refresh()}}});
    list.append(el('article',{class:'recording-card'},
      el('div',{class:'recording-meta'},el('strong',{text:r.question||'Practice recording'}),el('small',{text:`${r.category||'General'} · ${new Date(r.date).toLocaleString()} · ${r.kind||'audio'} · ${r.result||'Unscored'} · Confidence ${r.confidence||'—'}`})),
      media,
      r.transcript?el('details',{},el('summary',{text:'Transcript'}),el('p',{class:'transcript-text',text:r.transcript})):el('span'),
      r.selfReview?el('p',{text:`Self-review: ${r.selfReview}`}):el('span'),
      r.improvement?el('p',{text:`Next attempt: ${r.improvement}`}):el('span'),
      remove
    ))
  }
  root.append(card('Practice Recording Library',list));
  root.append(card('Practice Routine',el('div',{class:'daily-plan'},
    el('div',{class:'step'},el('span',{class:'num',text:'ROUND 1'}),el('strong',{text:'Cold answer'}),el('p',{text:'Answer without notes. Measure clarity, structure and gaps.'})),
    el('div',{class:'step'},el('span',{class:'num',text:'ROUND 2'}),el('strong',{text:'Correct and compress'}),el('p',{text:'Fix technical errors and reduce unnecessary explanation.'})),
    el('div',{class:'step'},el('span',{class:'num',text:'ROUND 3'}),el('strong',{text:'Pressure retest'}),el('p',{text:'Record again under a timer and compare against the first attempt.'}))
  )));
  return root
}

async function questionBookPage(){
  const root=el('div',{class:'section-stack'}),savedMap=new Map(state.questionBook.map(x=>[String(x.questionId),x]));
  const search=el('input',{placeholder:'Search questions, categories or notes…','aria-label':'Search interview question book'});
  const category=select(['All',...new Set(questions.map(q=>q.category))]);
  const favOnly=el('input',{type:'checkbox'}),body=el('div');
  root.append(el('div',{class:'toolbar'},search,category,el('label',{class:'inline-check'},favOnly,' Favorites only')),body);

  const draw=()=>{
    const term=search.value.toLowerCase(),cat=category.value;
    const filtered=questions.filter(q=>{
      const s=savedMap.get(String(q.id))||{};
      return (cat==='All'||q.category===cat)&&(!favOnly.checked||s.favorite)&&(`${q.question} ${q.category} ${s.notes||''}`.toLowerCase().includes(term))
    });
    const list=el('div',{class:'question-book-grid'});
    if(!filtered.length)list.append(empty('No questions match the current filters.'));
    for(const q of filtered){
      const existing=savedMap.get(String(q.id))||{questionId:q.id,favorite:false,status:'Unseen',notes:'',answerOutline:'',nextReviewDate:''};
      const fav=el('input',{type:'checkbox'});fav.checked=!!existing.favorite;
      const status=select(['Unseen','Learning','Needs Practice','Ready']);status.value=existing.status||'Unseen';
      const notes=textarea(existing.notes||'');notes.placeholder='Weak points, facts to verify, interviewer follow-ups…';
      const outline=textarea(existing.answerOutline||'');outline.placeholder='Your concise answer structure';
      const review=input('date');review.value=existing.nextReviewDate||'';
      const save=el('button',{class:'btn primary',text:'Save Question',onClick:async()=>{
        const item={...existing,questionId:q.id,question:q.question,category:q.category,favorite:fav.checked,status:status.value,notes:notes.value,answerOutline:outline.value,nextReviewDate:review.value,updatedAt:new Date().toISOString()};
        const savedId=await put('questionBook',item);item.id=savedId;savedMap.set(String(q.id),item);toast('Question saved to book.');setSaved('Saved')
      }});
      const practice=el('button',{class:'btn',text:'Practice This',onClick:()=>navigate('interviewStudio')});
      list.append(el('article',{class:'question-card'},
        el('div',{class:'question-card-head'},el('div',{},el('span',{class:'badge',text:q.category}),el('h3',{text:q.question})),el('label',{class:'favorite-toggle'},fav,' Favorite')),
        el('div',{class:'form-grid'},el('label',{},'Readiness',status),el('label',{},'Next review',review)),
        el('label',{},'Answer outline',outline),el('label',{},'Notes and weak points',notes),el('div',{class:'toolbar'},save,practice)
      ))
    }
    body.replaceChildren(list)
  };
  search.oninput=draw;category.onchange=draw;favOnly.onchange=draw;draw();

  const counts={total:questions.length,fav:state.questionBook.filter(x=>x.favorite).length,ready:state.questionBook.filter(x=>x.status==='Ready').length,practice:state.questionBook.filter(x=>x.status==='Needs Practice').length};
  root.insertBefore(el('div',{class:'grid kpis'},kpi('Question Bank',counts.total,'Built-in categorized questions'),kpi('Favorites',counts.fav,'Saved for fast access'),kpi('Ready',counts.ready,'Marked interview-ready'),kpi('Needs Practice',counts.practice,'Priority rehearsal queue')),root.firstChild);
  return root
}

async function vaultPage(){const root=el('div',{class:'section-stack'}),search=input('search'),add=el('button',{class:'btn primary',text:'New Note'}),list=el('div',{class:'grid two'});root.append(el('div',{class:'toolbar'},search,add),list);const draw=()=>{const q=search.value.toLowerCase();const notes=state.notes.filter(n=>`${n.title} ${n.category} ${n.content} ${(n.tags||[]).join(' ')}`.toLowerCase().includes(q));list.replaceChildren(...notes.map(n=>card(n.title,el('div',{class:'note-card'},el('div',{class:'note-meta',text:`${n.category} · updated ${n.updated?.slice(0,10)||''}`}),el('p',{text:n.content}),el('div',{class:'pill-row'},...(n.tags||[]).map(t=>el('span',{class:'pill',text:t}))),el('div',{class:'toolbar'},el('button',{class:'btn',text:n.favorite?'★ Favorite':'☆ Favorite',onClick:async()=>{n.favorite=!n.favorite;await put('notes',n);await refresh()}}),el('button',{class:'btn danger',text:'Delete',onClick:async()=>{if(confirm('Delete this note?')){await del('notes',n.id);await refresh()}}}))))));if(!notes.length)list.append(empty('No notes match your search.'))};search.oninput=draw;add.onclick=()=>noteModal();draw();return root}
function noteModal(){const title=input(),category=select(['Networking commands','Cisco commands','Linux networking commands','Windows networking commands','PowerShell commands','Wireshark filters','Firewall troubleshooting','DNS troubleshooting','Routing troubleshooting','OSPF troubleshooting','TLS troubleshooting','VPN troubleshooting','Interview stories','RCA examples','Important lessons']),content=textarea(),tags=input();modal('New Knowledge Note',el('div',{class:'form-grid'},el('label',{},'Title',title),el('label',{},'Category',category),el('label',{},'Content',content),el('label',{},'Tags (comma separated)',tags)),[{label:'Save Note',kind:'primary',run:async back=>{if(!title.value.trim())return toast('Title is required.');await put('notes',{title:title.value.trim(),category:category.value,content:content.value,tags:tags.value.split(',').map(x=>x.trim()).filter(Boolean),favorite:false,created:new Date().toISOString(),updated:new Date().toISOString()});back.remove();toast('Note saved.');await refresh()}}])}
async function analyticsPage(){const m=metrics(state,curriculum()),weak=weakness(state,curriculum()),root=el('div',{class:'section-stack'});root.append(el('div',{class:'grid kpis'},kpi('Total Study Hours',m.studyHours.toFixed(1)),kpi('7-Day Study Time',`${m.study7.toFixed(1)}h`),kpi('30-Day Study Time',`${m.study30.toFixed(1)}h`),kpi('Review Completion',`${m.reviewRate.toFixed(0)}%`),kpi('Lab Completion',`${m.labRate.toFixed(0)}%`),kpi('Current Streak',`${m.streak}d`),kpi('Longest Streak',`${m.longestStreak}d`),kpi('Weak Topics',m.weakCount)));const c1=el('canvas',{class:'chart'}),c2=el('canvas',{class:'chart'});root.append(el('div',{class:'grid two'},card('Stage Mastery',c1),card('Study Trend',c2)));root.append(card('Top 5 Weak Areas',el('div',{class:'list'},...weak.slice(0,5).map(w=>el('div',{class:'list-item'},el('strong',{text:w.topic}),el('small',{text:`Why: ${w.reasons.join(', ')||'insufficient practical reinforcement'}`}),el('p',{text:`Corrective action: review the mastery check, produce evidence, and answer one interview question without notes.`}))))));requestAnimationFrame(()=>{barChart(c1,stageCompletion(state,curriculum()));lineChart(c2,last30Study(state.studyLogs))});return root}
async function weeklyPage(){const root=el('div',{class:'section-stack'}),m=metrics(state,curriculum()),weak=weakness(state,curriculum())[0],form=el('form',{class:'card form-grid'}),fields={week:input('week'),biggestWin:textarea(),bottleneck:textarea(),repeatedDistraction:textarea(),correctiveAction:textarea(),nextPriority:textarea()};for(const[k,v]of Object.entries(fields))form.append(el('label',{},labelize(k),v));const summary=`Tracked ${m.study7.toFixed(1)} study hours in the last 7 days. ${m.mastered} topics are mastered, ${m.review} require review, and ${m.labsDone} integration labs are complete. Current weakest area: ${weak?.topic||'not enough data'}.`;form.append(el('div',{class:'callout',text:summary}),el('button',{class:'btn primary',type:'submit',text:'Save Weekly Review'}));form.onsubmit=async e=>{e.preventDefault();const o={date:new Date().toISOString(),summary,metrics:m};for(const[k,v]of Object.entries(fields))o[k]=v.value;await put('weeklyReviews',o);toast('Weekly review saved.');await refresh()};root.append(form,card('Previous Reviews',state.weeklyReviews.length?tableFrom(state.weeklyReviews.slice().reverse(),['week','summary','biggestWin','bottleneck','correctiveAction','nextPriority']):empty('No weekly reviews yet.')));return root}
async function settingsPage(){const root=el('div',{class:'section-stack'}),diff=await diffDraft(),hist=await history();const commitBox=el('div',{class:'section-stack'},el('div',{class:'callout',text:'Workflow: DRAFT → REVIEW → COMMIT → LOCKED SNAPSHOT. Client-side snapshots protect against accidental changes, not a malicious user with browser access.'}),el('button',{class:'btn',text:'Review Changes',onClick:()=>modal('Draft vs Last Commit',el('div',{class:'diff',text:diff.summary.join('\n')}))}),el('button',{class:'btn primary',text:'COMMIT FINAL CHANGES',onClick:()=>passwordConfirmCommit()}));root.append(card('Final Commit System',commitBox));const historyList=hist.length?el('div',{class:'list'},...hist.map(c=>el('div',{class:'list-item'},el('strong',{text:new Date(c.timestamp).toLocaleString()}),el('small',{text:`${c.hash.slice(0,20)}… · ${c.message}`}),el('div',{class:'toolbar'},el('button',{class:'btn',text:'Export Snapshot',onClick:()=>exportSnapshot(c.snapshotId)}))))):empty('No commits yet.');root.append(card('Commit History',historyList));const backup=el('div',{class:'grid two'},card('Export Encrypted Backup',el('div',{class:'section-stack'},el('p',{text:'Encrypt all IndexedDB application data with a passphrase. The passphrase is never stored.'}),el('button',{class:'btn primary',text:'Export Backup',onClick:()=>backupExportModal()}))),card('Import Encrypted Backup',el('div',{class:'section-stack'},el('p',{text:'Import replaces current local application data after confirmation.'}),el('button',{class:'btn',text:'Import Backup',onClick:()=>backupImportModal()}))));root.append(backup);
const cid=input();cid.value=localStorage.getItem('tracka.googleClientId')||'';cid.placeholder='1234567890-....apps.googleusercontent.com';
const driveBox=el('div',{class:'section-stack'},
  el('p',{text:'Optional: configure your own Google OAuth Web Client ID to upload interview recordings directly to your Google Drive. Add this GitHub Pages origin to the OAuth client’s Authorized JavaScript origins.'}),
  el('label',{},'Google OAuth Client ID',cid),
  el('div',{class:'toolbar'},
    el('button',{class:'btn primary',text:'Save Client ID',onClick:()=>{localStorage.setItem('tracka.googleClientId',cid.value.trim());toast('Google OAuth Client ID saved locally.')}}),
    el('button',{class:'btn',text:'Connect Google Drive',onClick:async()=>{try{await connectDrive(cid.value.trim());toast('Google Drive connected for this session.')}catch(e){toast(e.message)}}})
  ),
  el('small',{text:'The OAuth access token is held in memory only. This static app requests drive.file scope, which limits access to files the app creates or opens.'})
);
root.append(card('Google Drive Integration',driveBox));return root}
function passwordConfirmCommit(){const pass=input('password'),msg=input();msg.value='Final changes';modal('Confirm Final Commit',el('div',{class:'section-stack'},el('label',{},'Portal password',pass),el('label',{},'Commit message',msg),el('div',{class:'callout warn',text:'A local immutable-style snapshot and SHA-256 integrity hash will be created. Browser owners can still clear IndexedDB or alter client code.'})),[{label:'Commit Final Changes',kind:'primary',run:async back=>{if(!await login(pass.value))return toast('Incorrect portal password.');const c=await createCommit(msg.value||'Final changes');back.remove();$('#modeBadge').textContent='COMMITTED';toast(`Committed ${c.hash.slice(0,12)}…`);await refresh()}}])}
function backupExportModal(){const p=input('password');modal('Export Encrypted Backup',el('label',{},'Backup passphrase',p),[{label:'Encrypt & Export',kind:'primary',run:async back=>{if(p.value.length<8)return toast('Use at least 8 characters.');await exportBackup(p.value);back.remove();toast('Encrypted backup exported.')}}])}
function backupImportModal(){const file=input('file'),p=input('password');file.accept='.tracka,application/json';modal('Import Encrypted Backup',el('div',{class:'section-stack'},el('label',{},'Backup file',file),el('label',{},'Backup passphrase',p)),[{label:'Import & Replace Data',kind:'danger',run:async back=>{if(!file.files[0])return toast('Choose a backup file.');if(!confirm('Replace current local data with this backup?'))return;try{await importBackup(file.files[0],p.value);back.remove();toast('Backup restored.');await refresh()}catch(e){toast('Import failed: wrong passphrase or damaged file.')}}}])}
function input(type='text'){return el('input',{type})}function textarea(value=''){const x=el('textarea');x.value=value;return x}function select(opts){return el('select',{},...opts.map(o=>el('option',{value:o,text:o})))}function labelize(s){return s.replace(/([A-Z])/g,' $1').replace(/^./,x=>x.toUpperCase())}
function tableFrom(rows,cols){const t=el('table'),head=el('tr',{},...cols.map(c=>el('th',{text:labelize(c)}))),body=el('tbody');for(const r of rows)body.append(el('tr',{},...cols.map(c=>el('td',{text:c==='score'?`${Math.round((r[c]||0)*100)}%`:String(r[c]??'—')}))));t.append(el('thead',{},head),body);return el('div',{class:'table-wrap'},t)}
boot().catch(e=>{console.error(e);document.body.textContent='Application failed to initialize. Open the browser console for details.'});
