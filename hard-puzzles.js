// OHANA-626 BLACK-LEVEL EVIDENCE / Public data only. Answers live in private Supabase.
const EXTRA={
7:{room:'registry',title:'Wolf-track verification annex',text:'Only one track has a COBALT pawprint, a HOWLING signal and VERIFIED status. Append its species initial.',lines:['WOLF — COBALT • HOWLING • VERIFIED','FOX — AMBER • SILENT • VERIFIED','HOUND — COBALT • HOWLING • SPOOF'],instruction:'Append the initial of the only matching species.'},
11:{room:'registry',title:'Ohana classification annex',text:'The real artifact status has freely chosen bonds, reciprocal protection, and no expiration. Append the matching status initial.',lines:['ASSET — chosen NO • protects NO • expires YES','FAMILY — chosen YES • protects YES • expires NO','VISITOR — chosen YES • protects NO • expires YES'],instruction:'Append the first letter of the only matching status.'}
};
const e=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const table=(head,records)=>'<div class="ledger-scroll"><table class="forensic-table"><thead><tr>'+head.map(h=>'<th>'+e(h)+'</th>').join('')+'</tr></thead><tbody>'+records.map(r=>'<tr>'+r.map(v=>'<td>'+e(v)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
const p=x=>'<p class="forensic-text">'+e(x)+'</p>';
const section=(title,contents)=>'<section class="forensic-block"><h3>'+e(title)+'</h3>'+contents+'</section>';
export function upgradeChapters(stories,rawCases){
 return stories.map((story,i)=>{
 const d=i+1,base=rawCases[i];if(!base||base.id!==d)throw Error('Missing Federation file '+d);
 const hard={...base,addon:EXTRA[d]||base.addon};
 const key=(17+9+d)%26;
 const A='Compare BOTH authorized fields in Personnel with Dispatch. Apply NORMAL/MIRROR orientation, then rotate the resulting letters FORWARD by K = (17 ignored orders + 9 incident hour + '+d+' case number) mod 26. A=0; wrap past Z.';
 const B='Reject the quarantined frame. ADD each Laboratory clock offset to its camera minute. Sort four valid frames in Personnel reel order. Then apply ATBASH to characters 2 and 4 ONLY (A↔Z, B↔Y, C↔X).';
 const C='Read only the authorized Dispatch batch. Follow the Personnel sector route. '+(d%3===1?'Compute |A−B| for each sector.':d%3===2?'Compute the LAST DIGIT of (A+B) for each sector.':'Compute the LAST DIGIT of (A×B) for each sector.')+' Append the side-annex marker if required. Finally append (sum of FOUR base digits + '+d+' case number + 17 ignored orders) mod 10 as a CHECK DIGIT.';
 let doorC=base.doors[2].prompt;
 if(d===7)doorC=doorC.replace('secret /classified annex mentioned in the Registry margin','Wolf-track verification annex in Personnel Registry');
 if(d===11)doorC=doorC.replace('/archive/ohana annex','Ohana classification annex in Personnel Registry');
 const locks=[
 {title:'A / FORGED IDENTITIES',prompt:base.doors[0].prompt+' '+A,format:'ENCRYPTED BADGE / 4–5 LETTERS',sources:['dispatch','registry']},
 {title:'B / BROKEN TIME',prompt:base.doors[1].prompt+' '+B,format:'FOUR ENCRYPTED GLYPHS',sources:['surveillance','laboratory','registry']},
 {title:'C / REACTOR & ANNEX',prompt:doorC+' '+C,format:'POWER CODE + ANNEX + CHECK DIGIT',sources:hard.addon?['dispatch','laboratory','registry',hard.addon.room]:['dispatch','laboratory','registry']}
 ];
 return {...story,hard,locks,exhibits:Object.fromEntries(['dispatch','surveillance','laboratory','registry'].map(k=>[k,{title:hard[k].title}]))};
 });
}
export function evidencePanel(chapter,k){
 const c=chapter.hard,x=c[k];let out=p(x.intro);
 if(k==='dispatch'){
  out+=section('INTERCEPTED TRANSMISSION MATRIX',table(['TRANSMISSION','CALLSIGN','CLEARANCE','SEAL'],x.rows.map(r=>[r.id,r.caller,r.level,r.seal])));
  out+=section('AUTHORIZED BATCH',p(x.batch+' — only this batch has trustworthy Laboratory specimens.'));
 }
 if(k==='registry'){
  out+=section('AUTHENTICATION',table(['CALLSIGN','CLEARANCE','SEAL ORIENTATION','FILM REEL'],[[x.caller,x.clearance,x.mirror?'MIRROR':'NORMAL',x.reel]]));
  out+=section('POWER ROUTE',p(x.order.join(' → ')));
  out+=section('CIPHER HANDBOOK',p('CASE '+chapter.id+': Caesar-shift the oriented seal FORWARD by (17 + 9 + '+chapter.id+') mod 26. This calculation uses the 17 ignored orders and the 09:14 incident hour from the first Federation email.')+p('For the camera glyphs, AFTER sorting the corrected reel, Atbash only glyphs TWO and FOUR: A becomes Z, B becomes Y, etc.'));
 }
 if(k==='surveillance'){
  out+=section('UNSORTED CAMERA REEL',table(['CAMERA','RECORDED MINUTE','CHANNEL','GLYPH'],x.frames.map(r=>[r.camera,r.minute,r.channel,r.glyph])));
  out+=p('Every camera lies by a different number of minutes. Reject the quarantined channel and use Laboratory offsets before reading the remaining filmstrip.');
 }
 if(k==='laboratory'){
  out+=section('CHANNEL AUTHENTICATION',table(['QUARANTINED','VERIFIED'],[[x.blocked,x.valid]]));
  out+=section('CAMERA CLOCK CORRECTIONS',table(['CAMERA','ADD OFFSET (MIN)'],x.calibration.map(r=>[r.camera,r.offset>0?'+'+r.offset:r.offset])));
  out+=section('SPECIMEN VAULT',table(['SECTOR','BATCH','A','B'],x.samples.map(r=>[r.sector,r.batch,r.a,r.b])));
  out+=p('File '+chapter.id+' power rule: '+(chapter.id%3===1?'absolute difference |A−B|.':chapter.id%3===2?'last digit of A+B.':'last digit of A×B.')+' Follow the Registry sector route and keep only authorized-batch rows.');
  out+=p('Final check digit = (sum of the FOUR sector digits + '+chapter.id+' + 17) mod 10. Append it AFTER the annex marker.');
 }
 if(c.addon?.room===k){
  const a=c.addon;out+=section('SIDE ANNEX / '+a.title,p(a.text)+a.lines.map(p).join('')+'<p class="forensic-protocol">'+e(a.instruction)+'</p>');
 }
 return out;
}