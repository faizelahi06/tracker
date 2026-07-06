export function missingPrereqs(topic,progressMap){return (topic.prerequisites||[]).filter(id=>!['Completed','Mastered'].includes(progressMap.get(id)?.status))}
export function eligible(topic,progressMap){return missingPrereqs(topic,progressMap).length===0}
export function nextTopic(curriculum,progress){const m=new Map(progress.map(p=>[p.id,p]));return curriculum.find(t=>{const p=m.get(t.id);return p?.status!=='Mastered'&&eligible(t,m)})||null}
export function blocked(curriculum,progress){const m=new Map(progress.map(p=>[p.id,p]));return curriculum.filter(t=>m.get(t.id)?.status==='Not Started'&&missingPrereqs(t,m).length)}
