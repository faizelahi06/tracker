import {dumpDB,restoreDB} from './db.js';import {encryptJSON,decryptJSON} from './crypto.js';
const blobToB64=blob=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result).split(',')[1]);r.onerror=()=>rej(r.error);r.readAsDataURL(blob)});
async function serialize(data){const out=structuredClone(data);out.recordings=[];for(const r of data.recordings||[]){const x={...r};if(x.blob instanceof Blob){x.blobData=await blobToB64(x.blob);x.blobType=x.blob.type;delete x.blob}out.recordings.push(x)}return out}
function b64Blob(s,type){const bin=atob(s),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new Blob([u],{type})}
function hydrate(data){data.recordings=(data.recordings||[]).map(r=>{if(r.blobData){r.blob=b64Blob(r.blobData,r.blobType||'audio/webm');delete r.blobData;delete r.blobType}return r});return data}
export async function exportBackup(pass){const pkg=await encryptJSON(await serialize(await dumpDB()),pass);download(JSON.stringify(pkg),`track-a-backup-${new Date().toISOString().slice(0,10)}.tracka`)}
export async function importBackup(file,pass){const pkg=JSON.parse(await file.text());const data=hydrate(await decryptJSON(pkg,pass));await restoreDB(data);return data}
export function download(text,name,type='application/json'){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
