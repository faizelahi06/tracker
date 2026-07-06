
let tokenClient=null,accessToken='';
function loadScript(src){return new Promise((res,rej)=>{if(document.querySelector(`script[src="${src}"]`))return res();const s=document.createElement('script');s.src=src;s.async=true;s.onload=res;s.onerror=()=>rej(new Error('Unable to load Google Identity Services'));document.head.appendChild(s)})}
export async function connectDrive(clientId){
  if(!clientId)throw new Error('Add your Google OAuth Client ID in Settings first.');
  await loadScript('https://accounts.google.com/gsi/client');
  return new Promise((resolve,reject)=>{
    tokenClient=google.accounts.oauth2.initTokenClient({client_id:clientId,scope:'https://www.googleapis.com/auth/drive.file',callback:r=>{if(r.error)return reject(new Error(r.error));accessToken=r.access_token;resolve(true)}});
    tokenClient.requestAccessToken({prompt:''});
  });
}
export async function uploadToDrive(blob,name,mime='application/octet-stream'){
  if(!accessToken)throw new Error('Connect Google Drive first.');
  const meta={name};
  const form=new FormData();
  form.append('metadata',new Blob([JSON.stringify(meta)],{type:'application/json'}));
  form.append('file',blob,name);
  const r=await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink',{method:'POST',headers:{Authorization:`Bearer ${accessToken}`},body:form});
  if(!r.ok)throw new Error(`Drive upload failed (${r.status})`);
  return r.json();
}
export const driveConnected=()=>!!accessToken;
