import {CURRICULUM_DATA} from './embedded-data.js';
let data=[];
export async function loadCurriculum(){data=CURRICULUM_DATA;return data}
export const curriculum=()=>data;
export function initialProgress(){return data.map(t=>({id:t.id,status:'Not Started',confidence:1,plannedDate:'',completedDate:'',nextReviewDate:'',evidence:'',notes:'',masteryPassed:false,reviewCount:0}))}
