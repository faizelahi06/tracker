const DB_NAME='trackAOps', DB_VERSION=4;
const stores=['progress','studyLogs','habits','interviews','notes','reviews','labs','scenarios','weeklyReviews','commits','snapshots','parking','recordings','dailyTasks','questionBook'];
let dbp;
export function db(){if(!dbp)dbp=new Promise((res,rej)=>{const r=indexedDB.open(DB_NAME,DB_VERSION);r.onupgradeneeded=()=>{const d=r.result;for(const s of stores)if(!d.objectStoreNames.contains(s))d.createObjectStore(s,{keyPath:'id',autoIncrement:s!=='progress'});};r.onsuccess=()=>{const d=r.result;d.onversionchange=()=>d.close();res(d)};r.onerror=()=>rej(r.error)});return dbp}
export async function getAll(store){const d=await db();return new Promise((res,rej)=>{const r=d.transaction(store).objectStore(store).getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
export async function get(store,id){const d=await db();return new Promise((res,rej)=>{const r=d.transaction(store).objectStore(store).get(id);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
export async function put(store,val){const d=await db();return new Promise((res,rej)=>{const r=d.transaction(store,'readwrite').objectStore(store).put(val);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
export async function del(store,id){const d=await db();return new Promise((res,rej)=>{const r=d.transaction(store,'readwrite').objectStore(store).delete(id);r.onsuccess=()=>res();r.onerror=()=>rej(r.error)})}
export async function clear(store){const d=await db();return new Promise((res,rej)=>{const r=d.transaction(store,'readwrite').objectStore(store).clear();r.onsuccess=()=>res();r.onerror=()=>rej(r.error)})}
export async function dumpDB(){const out={};for(const s of stores)out[s]=await getAll(s);return out}
export async function restoreDB(data){for(const s of stores){await clear(s);for(const v of data[s]||[])await put(s,v)}}
export {stores};
