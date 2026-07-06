
import {nextTopic,missingPrereqs} from './prerequisites.js';
import {buckets} from './review-engine.js';

const day=x=>new Date(x).toISOString().slice(0,10);
const daysAgo=n=>day(Date.now()-n*86400000);
const sum=a=>a.reduce((s,x)=>s+x,0);

export function learningIntelligence(state,curriculum){
  const progress=new Map(state.progress.map(x=>[x.id,x]));
  const reviews=buckets(state.reviews||[]);
  const logs=state.studyLogs||[], interviews=state.interviews||[], labs=state.labs||[];
  const weak=[];
  for(const t of curriculum){
    const p=progress.get(t.id)||{};
    let score=0,reasons=[];
    if((p.confidence||1)<=2){score+=28;reasons.push('low confidence')}
    else if((p.confidence||1)===3){score+=14;reasons.push('medium confidence')}
    if(p.status==='Review'){score+=20;reasons.push('in review')}
    if(p.status==='Completed'&&!p.masteryPassed){score+=22;reasons.push('mastery check not passed')}
    if(p.nextReviewDate&&p.nextReviewDate<day(Date.now())){score+=18;reasons.push('review overdue')}
    if(!p.evidence&&['Completed','Mastered'].includes(p.status)){score+=12;reasons.push('missing evidence')}
    if(score)weak.push({id:t.id,topic:t.topic,stage:t.stage,score,reasons})
  }
  weak.sort((a,b)=>b.score-a.score);

  const next=nextTopic(curriculum,state.progress);
  const last7=logs.filter(x=>(x.date||'').slice(0,10)>=daysAgo(6));
  const minutes7=sum(last7.map(x=>+x.minutes||0));
  const activeDays=new Set(last7.map(x=>(x.date||'').slice(0,10))).size;
  const recentInterview=interviews.slice().sort((a,b)=>(b.date||'').localeCompare(a.date||'')).slice(0,10);
  const weakAnswers=recentInterview.filter(x=>x.result==='Weak').length;
  const incompleteLabs=labs.filter(x=>x.status!=='Completed').length;

  const alerts=[];
  if(reviews.overdue.length)alerts.push({level:'high',title:'Review debt',message:`${reviews.overdue.length} review item(s) are overdue. Clear the oldest items before heavy new learning.`});
  if(activeDays<3)alerts.push({level:'medium',title:'Consistency risk',message:`Only ${activeDays} active study day(s) in the last 7 days. Use Minimum Day mode to protect continuity.`});
  if(weakAnswers>=3)alerts.push({level:'high',title:'Interview weakness cluster',message:`${weakAnswers} of your recent answers were Weak. Re-record the same categories using structured answer frameworks.`});
  if(minutes7<180)alerts.push({level:'medium',title:'Low study volume',message:`${minutes7} minutes logged in 7 days. Protect a realistic daily block rather than compensating with one long session.`});
  if(!alerts.length)alerts.push({level:'good',title:'System stable',message:'No major learning-risk signal is currently above threshold. Continue the dependency path and scheduled reviews.'});

  let priority='New Learning',reason=next?'Next dependency-eligible curriculum item.':'Curriculum sequence has no eligible unfinished item.';
  if(reviews.overdue.length){priority='Review Recovery';reason='Overdue review debt can create false progress and should be reduced first.'}
  else if(weak[0]?.score>=45){priority='Weakness Repair';reason=`${weak[0].topic} has a high weakness score from ${weak[0].reasons.join(', ')}.`}

  const plan=[];
  if(reviews.overdue.length)plan.push({minutes:20,task:`Review ${Math.min(3,reviews.overdue.length)} overdue topic(s)`,why:'Reduce memory decay and review debt.'});
  if(weak[0])plan.push({minutes:25,task:`Repair weakness: ${weak[0].topic}`,why:weak[0].reasons.join(', ')});
  if(next)plan.push({minutes:45,task:`Learn and practice: ${next.topic}`,why:'Dependency-eligible next topic.'});
  plan.push({minutes:15,task:'Interview explanation drill',why:'Convert technical knowledge into clear spoken recall.'});
  plan.push({minutes:10,task:'End-session recall + evidence log',why:'Expose gaps and leave proof of practical work.'});

  return {next,weak:weak.slice(0,8),alerts,priority,reason,plan,minutes7,activeDays,weakAnswers,incompleteLabs,reviews};
}

export function recommendInterviewQuestions(state,questions,limit=8){
  const results=state.interviews||[],book=state.questionBook||[];
  const categoryPenalty=new Map();
  results.slice().sort((a,b)=>(b.date||'').localeCompare(a.date||'')).slice(0,30).forEach(r=>{
    const add=r.result==='Weak'?35:r.result==='Acceptable'?12:-8;
    categoryPenalty.set(r.category,(categoryPenalty.get(r.category)||0)+add);
  });
  const saved=new Map(book.map(x=>[String(x.questionId),x]));
  return questions.map(q=>{
    const b=saved.get(String(q.id))||{};let score=categoryPenalty.get(q.category)||0,reasons=[];
    if(score>0)reasons.push('weak recent category');
    if(b.status==='Needs Practice'){score+=40;reasons.push('marked needs practice')}
    if(b.nextReviewDate&&b.nextReviewDate<=day(Date.now())){score+=30;reasons.push('review due')}
    if(b.favorite){score+=5;reasons.push('favorite')}
    if(!results.some(r=>String(r.questionId)===String(q.id))){score+=8;reasons.push('not yet practiced')}
    return {...q,score,reasons};
  }).sort((a,b)=>b.score-a.score).slice(0,limit);
}
