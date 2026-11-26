import { MISSIONS } from './season20.js';
import { initVoicePlayer } from './voice-player.js';
import { ZONES, CHAPTERS, zoneFor, chapterFor, portalMap, worldHero, chapterStory, branchEcho, conclusion, bonusPanel, directorForm, finalLetterForm, miniPattern } from './worlds.js';
import { mountLiveFinale, unmountLiveFinale } from './finale-live.js';
import { configureLiveShare, renderLiveShare, refreshLiveShare, handleLiveShare, notifyLiveRoute, shutdownLiveShare } from './live-share.js';
const cfg=window.OHANA_CONFIG||{},root=document.getElementById('app'),N=MISSIONS.length;
const e=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad=n=>String(n).padStart(2,'0');
const types=[['dispatch','✉','DISPATCH'],['registry','♙','REGISTRY'],['surveillance','◉','SURVEILLANCE'],['laboratory','◇','LABORATORY'],['annex','✦','ANNEX']];
const typeName=k=>types.find(x=>x[0]===k)?.[2]||k;
const one=d=>MISSIONS.find(x=>x.id===Number(d));
const url=()=>{try{return decodeURIComponent((location.hash||'#/dashboard').slice(1))}catch{return '/dashboard'}};
const go=p=>{if(location.hash!=='#'+p)location.hash='#'+p;else render()};
const START=Date.UTC(2026,10,25,5); // 00:00 November 25 EST; automatic daily unlock.
const openTime=n=>START+(n-1)*86400000;
const dateStr=n=>new Date(openTime(n)).toLocaleString('en-US',{timeZone:'America/New_York',month:'long',day:'numeric',hour:'numeric',minute:'2-digit'})+' Eastern';
let client=null,snapshot=null,busy=false,notice='',noticeBad=false,selected='player',vaultContent=null,hintText={},loginError='';
let worldCache={},worldLoading={},miniSession=null,movieStarted=false;
async function loadWorld(day){
 if(!prepared()||worldCache[day]||worldLoading[day]||(role()==='player'&&!allow(day)))return;
 worldLoading[day]=true;
 try{worldCache[day]=await rpc('ohana_world',{p_action:'get',p_day:day});
  if(url().includes('/'+day)||url()==='/dashboard')render();
 }catch(err){worldCache[day]={error:err.message||String(err)};if(url().includes('/'+day))render();}
 finally{delete worldLoading[day]}
}
function worldRecord(day){return worldCache[day]||null}
const profile=()=>snapshot?.profile||{solved_days:[],gate_steps:{},fragments:{},hint_tiers:{},vault_unlocked:false};
const solved=n=>(profile().solved_days||[]).includes(Number(n));
const stage=n=>solved(n)?3:Number(profile().gate_steps?.['d'+n]||0);
const serverNow=()=>Date.parse(snapshot?.server_time||'')||Date.now();
const prepared=()=>snapshot?.season_version===20;
const allow=n=>solved(n)||((snapshot?.test_mode||serverNow()>=openTime(n))&&(n===1||solved(n-1)));
const nextCase=()=>MISSIONS.find(m=>allow(m.id)&&!solved(m.id))||MISSIONS.find(m=>!solved(m.id))||MISSIONS.at(-1);
const count=()=>profile().solved_days?.length||0;
const alertMsg=(msg,bad=false)=>{notice=msg;noticeBad=bad};
const toast=()=>{if(!notice)return '';const s='<div class="toast '+(noticeBad?'bad':'')+'" role="status">'+e(notice)+'</div>';notice='';return s};
const stat=(a,b)=>'<div class="stat"><small>'+e(a)+'</small><strong>'+e(b)+'</strong></div>';
const role=()=>snapshot?.role||'player';
function shell(content,here=''){const admin=role()==='admin',links=admin?[['/admin','⌂ CONTROL'],['/world-editor/1','✎ STORY EDITOR'],['/director/1','✦ PREVIEW'],['/finale-rehearsal','▶ FINALE']]:[['/dashboard','⌂ HOME'],['/worlds','✧ WORLDS'],['/cases','◇ CHAPTERS'],['/board','◈ COLLECTIBLES'],['/vault','♡ STORYBOOK']];
 root.innerHTML='<div class="shell"><header class="top"><a class="identity" href="#'+(admin?'/admin':'/dashboard')+'"><img alt="" src="emblem.svg"><span>PROJECT OHANA-626<small>THE ENCHANTED MULTIVERSE / 2026</small></span></a><nav class="top-nav">'+links.map(([u,t])=>'<a class="nav-pill '+(here===u?'active':'')+'" href="#'+u+'">'+t+'</a>').join('')+'<a class="nav-pill" href="training.html">◉ TRAINING</a><button class="tiny" data-act="logout">EXIT</button></nav></header>'+toast()+(!prepared()?'<div class="warning"><strong>DIRECTOR SETUP REQUIRED:</strong> the November 25–December 14 database migration has not been run yet. The 20-day puzzle answers cannot be checked until Wyatt updates Supabase. The training simulator still works. <a href="training.html">Open training ↗</a></div>':'')+'<main>'+content+'</main><footer>20 MAGICAL ADVENTURES / NOV 25 – DEC 14 / MADE BY WYATT FOR BUNNY ♡</footer></div>';
 refreshLiveShare(admin?'admin':'player');
}
function login(){unmountLiveFinale();root.innerHTML='<div class="login-wrap"><section class="login-intro"><div class="kicker">A MAGICAL INVITATION / FROM WYATT TO BELLA</div><h1>TWENTY DAYS.<br><span class="accent">FIVE WORLDS.</span></h1><p>Hey Bunny! Wyatt made you an adventure. Stitch has tangled up the magical worlds, the memories are vanishing, and you are the only one who can help. Explore, solve the mysteries, laugh at the chaos, and discover the surprise on December 14.</p><span class="tag">NOV 25 – DEC 14, 2026 / FOR BELLA ♡</span><div style="margin-top:22px"><a class="secondary" href="training.html">✦ PRACTICE IN THE TRAINING SIMULATOR ↗</a></div></section><section class="form-card"><div class="kicker">WELCOME TO THE STORYBOOK</div><h2>Your adventure is waiting.</h2><p>Choose your identity and enter your existing game password.</p>'+(loginError?'<div class="toast bad">'+e(loginError)+'</div>':'')+'<form id="login-form"><div class="role-select"><label><input type="radio" name="agent" value="player" '+(selected==='player'?'checked':'')+'> BELLA / BUNNY</label><label><input type="radio" name="agent" value="admin" '+(selected==='admin'?'checked':'')+'> WYATT / DIRECTOR</label></div><label class="field-label" for="login-pass">YOUR SECRET PASSWORD</label><input id="login-pass" type="password" class="field" name="pass" autocomplete="current-password" minlength="6" required placeholder="Enter your password"><button class="cta" type="submit">OPEN THE STORYBOOK ↗</button></form><p style="margin-top:15px;font-size:.72rem">A private game for Bella. No emails are sent by this website.</p></section></div>';}

function configError(message){root.innerHTML='<main class="login-wrap"><section class="form-card"><h2>Signal interrupted</h2><p>'+e(message)+'</p><button class="cta" onclick="location.reload()">RETRY ↗</button><a class="secondary" href="training.html">PLAY TRAINING INSTEAD ↗</a></section></main>'}
async function rpc(name,args={}){if(!client)throw Error('Supabase connection unavailable.');const {data,error}=await client.rpc(name,args);if(error)throw Error(error.message||'Federation server error.');return data}
async function refresh(){snapshot=await rpc('ohana_state');render()}
function mini(m){
 const unlocked=allow(m.id),done=solved(m.id),c=chapterFor(m.id),z=c.zone;
 return '<a href="#/case/'+m.id+'" class="case '+(done?'solved':unlocked?'':'locked')+'" data-world="'+z.id+'"><span class="micro">CHAPTER '+pad(m.id)+' · '+e(m.dateLabel.toUpperCase())+'</span><span class="icon">'+z.icon+'</span><b>'+e(c.title)+'</b><small>'+e(z.short)+' · '+e(c.mission)+'</small><div class="case-foot">'+(done?'✓ STORY SPARK RESTORED':unlocked?'✦ OPEN CHAPTER':'◇ PORTAL SEALED')+'</div></a>';
}
function home(){
 const m=nextCase(),done=count(),z=zoneFor(m.id),messages=(snapshot?.notes||[]);
 const body='<section class="hero"><span class="tag">✦ A PERSONAL GIFT FROM WYATT · NOV 25 – DEC 14</span><div class="kicker" style="margin-top:17px">BELLA / BUNNY / KEEPER OF STORIES</div><h1>YOUR STORY.<br><span class="accent">YOUR MAGIC.</span></h1><p>Stitch broke the portals between five worlds. Help your favorite characters, solve real mysteries, and uncover the little things Wyatt remembered about you. Every adventure brings you closer to the movie he made just for Bella.</p><div class="hero-actions"><a class="cta" href="#/case/'+m.id+'">✦ '+(allow(m.id)?'CONTINUE YOUR ADVENTURE':'SEE YOUR NEXT CHAPTER')+' ↗</a><a class="secondary" href="#/worlds">EXPLORE WORLD MAP</a></div></section>'
 +'<div class="stats">'+stat('STORY SPARKS',done+' / 20')+stat('ARCHIVE SEALS',Math.min(60,done*3+(solved(m.id)?0:stage(m.id)))+' / 60')+stat('CURRENT WORLD',z.short)+stat('MOVIE PREMIERE','DEC 14')+'</div>'
 +portalMap({canPlay:allow,completed:solved})
 +'<div class="section-title"><span>YOUR NEXT ADVENTURE</span><a href="#/cases">ALL TWENTY CHAPTERS ↗</a></div>'
 +worldHero(m.id)
 +'<div class="world-quick-links"><a class="cta" href="#/case/'+m.id+'">ENTER CHAPTER '+pad(m.id)+' ↗</a><a class="secondary" href="#/board">VIEW YOUR STORY SPARKS</a><a class="secondary" href="training.html">✦ TRAINING GAMES</a></div>'
 +(messages.length?'<section class="sheet"><div class="kicker">♡ NOTES FROM WYATT</div><h2>Your personal messages</h2><div class="world-note-list">'+messages.slice(0,4).map(n=>'<p>'+e(n.message)+'</p>').join('')+'</div></section>':'')
 +'<div class="section-title"><span>RECENT AND UPCOMING CHAPTERS</span></div><div class="cards">'+MISSIONS.slice(Math.max(0,m.id-2),Math.min(20,m.id+3)).map(mini).join('')+'</div>'
 +'<div class="section-title"><span>OPTIONAL / WATCH TOGETHER</span></div>'+renderLiveShare('player');
 shell(body,'/dashboard');
}
function allCases(){shell('<div class="page-title"><div class="kicker">YOUR ADVENTURE / NOV 25 – DEC 14</div><h1>Twenty <span class="accent">magical chapters.</span></h1><p>New chapters arrive daily. Complete the previous main mystery, or revisit anything you have already restored.</p></div>'+ZONES.map(z=>'<div class="section-title"><span>'+z.icon+' '+e(z.name)+'</span><small>'+e(z.dates)+'</small></div><div class="cards">'+MISSIONS.slice(z.start-1,z.end).map(mini).join('')+'</div>').join(''),'/cases')}
function worldsPage(){shell('<div class="page-title"><div class="kicker">THE ENCHANTED MULTIVERSE / FIVE WORLDS</div><h1>Your magical <span class="accent">world map.</span></h1><p>Follow the portals, meet new friends, collect twenty Story Sparks and five World Keys, and unlock the movie made for Bella.</p></div>'+portalMap({canPlay:allow,completed:solved})+'<div class="section-title"><span>EVERY CHAPTER</span></div><div class="cards">'+MISSIONS.map(mini).join('')+'</div>','/worlds')}

function blocked(m){const c=chapterFor(m.id);shell('<div class="content">'+worldHero(m.id)+'<div class="sheet"><div class="chapter-eyebrow">CHAPTER '+pad(m.id)+' / PORTAL SEALED</div><h2>This portal has not opened yet.</h2><p>Opens <strong>'+e(dateStr(m.id))+'</strong>. '+(m.id>1&&!solved(m.id-1)?'Finish the preceding chapter to continue.':'')+'</p><div style="margin-top:20px"><a class="secondary" href="#/worlds">← BACK TO WORLD MAP</a></div></div></div>')}

function table(headers,rows){return '<div class="ledger-wrap"><table class="ledger"><thead><tr>'+headers.map(x=>'<th>'+e(x)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(v=>'<td>'+e(v)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>'}
function evidenceMenu(m,dir){return '<div class="evidence-menu">'+types.map(([key,icon,text])=>'<a class="folder" href="#/'+(dir?'director/evidence':'evidence')+'/'+m.id+'/'+key+'"><span>'+icon+'</span>'+text+'</a>').join('')+'</div>'}
function casePage(day,dir=false){
 const m=one(day),c=chapterFor(day);if(!m||!c){go('/cases');return}
 if(!dir&&!allow(day)){blocked(m);return}
 const rec=worldRecord(day),level=dir?0:stage(day),done=!dir&&solved(day);
 const locks=m.locks.map((x,i)=>{
   const gate=i+1,open=level===i&&!done&&!dir,complete=level>=gate&&!dir;
   return '<article class="lock '+(open?'ready':complete?'done':'')+'"><div class="kicker">ARCHIVE SEAL '+pad(gate)+' / '+(complete?'RESTORED':open?'READY':'WAITING')+'</div><h3>'+e(x.title)+'</h3><p>'+e(x.prompt)+'</p><div class="links">'+x.sources.map(v=>'<a href="#/'+(dir?'director/evidence':'evidence')+'/'+m.id+'/'+v+'">'+e(typeName(v))+' ↗</a>').join('')+'</div>'+(open?'<form id="bolt-form" data-day="'+m.id+'" data-gate="'+gate+'"><label class="field-label">'+e(x.format)+'</label><input class="field" name="guess" required autocomplete="off" spellcheck="false" autocapitalize="characters" maxlength="75" placeholder="Your decoded finding"><button class="cta" type="submit" '+(!prepared()?'disabled':'')+'>RESTORE SEAL '+gate+' ↗</button></form>':complete?'<div class="success">✓ ARCHIVE SEAL RESTORED</div>':'<p class="muted">Restore the earlier seal first.</p>')+'</article>';
 }).join('');
 const body='<div class="content">'+(dir?'<div class="warning">DIRECTOR READ-ONLY CHAPTER PREVIEW. Bella’s puzzle answers and progress are not changed.</div>':'')
 +'<div class="breadcrumbs"><a href="#/'+(dir?'admin':'worlds')+'">← '+(dir?'DIRECTOR DECK':'MAGICAL WORLD MAP')+'</a><span class="kicker">CHAPTER '+pad(m.id)+' / '+e(m.dateLabel)+'</span></div>'
 +worldHero(day,{director:dir})
 +chapterStory(day,rec,{director:dir})+(!dir?branchEcho(day,rec):'')
 +(rec?.error?'<div class="warning">PRIVATE STORY NOT AVAILABLE: '+e(rec.error)+' — Wyatt needs to install the Supabase Enchanted Multiverse SQL.</div>':'')
 +'<div class="section-title"><span>01 / SEARCH THE LOST ARCHIVE</span><small class="muted">FIVE CLASSIFIED RECORD ROOMS</small></div>'
 +'<section class="sheet"><p>The Eraser scattered coded Federation records through this world. Each department has different clues. Compare them carefully: three genuine answers will release the Story Spark.</p></section>'
 +evidenceMenu(m,dir)
 +'<div class="section-title"><span>02 / RESTORE THREE ARCHIVE SEALS</span><small class="muted">'+level+' / 3 RESTORED</small></div>'
 +'<div class="locks">'+locks+'</div>'
 +(done?'<div class="success" style="margin-top:17px"><strong>✦ STORY SPARK '+pad(day)+' RESTORED.</strong> '+conclusion(day,rec)+' <a href="#/'+(day<20?'case/'+(day+1):'vault')+'">'+(day<20?'VIEW THE NEXT CHAPTER':'GO TO THE FINAL STORYBOOK')+' ↗</a></div>':'')
 +(!dir?'<section class="sheet" style="margin-top:18px"><div class="kicker">STUCK ON AN ARCHIVE SEAL?</div><p>Three optional hints help you reason through the original five evidence files.</p><div style="margin-top:12px"><button class="secondary" data-act="hint" data-day="'+m.id+'" data-tier="'+Math.min(3,Number(profile().hint_tiers?.['d'+m.id]||0)+1)+'">UNLOCK NEXT HINT ↗</button></div><p style="margin-top:12px;white-space:pre-line">'+e(hintText[m.id]||'')+'</p></section>':'')
 +(!dir&&prepared()?bonusPanel(day,rec,miniSession):'')
 +(dir?'<div class="world-quick-links"><a class="cta" href="#/world-editor/'+day+'">✎ EDIT THIS PRIVATE CHAPTER ↗</a></div>':'')
 +'</div>';
 shell(body);loadWorld(day);
}

function evidencePage(d,k,dir=false){const m=one(d),item=m?.evidence[k];if(!item){go('/cases');return}if(!dir&&!allow(d)){blocked(m);return}const body='<div class="content"><div class="breadcrumbs"><a href="#/'+(dir?'director':'case')+'/'+m.id+'">← BACK TO CASE '+pad(m.id)+'</a><span class="kicker">'+e(typeName(k))+' / INTELLIGENCE</span></div><div class="page-title"><div class="kicker">FEDERATION RECONSTRUCTION / '+e(m.tag)+'</div><h1>'+e(item.title)+'</h1><p>'+e(item.intro)+'</p></div><div class="sheet"><div class="kicker">RECORD '+pad(m.id)+' / AUTHENTICATED DOCUMENT</div>'+table(item.columns,item.rows)+(item.samplesRows?'<h2 style="margin-top:24px">'+e(item.samplesTitle)+'</h2>'+table(item.samplesColumns,item.samplesRows):'')+'<div class="success">Records may contain decoys. Trust the written protocols, not the first matching row.</div></div><div class="section-title"><span>THE OTHER DEPARTMENTS</span></div>'+evidenceMenu(m,dir)+'<a class="cta" href="#/'+(dir?'director':'case')+'/'+m.id+'">← RETURN TO THE THREE LOCKS</a></div>';shell(body)}
function board(){
 const stamps=profile().fragments||{};
 shell('<div class="page-title"><div class="kicker">YOUR MEMORY COLLECTION / 20 STORY SPARKS</div><h1>Every world holds <span class="accent">a little magic.</span></h1><p>Restore an archive each day to earn one letter. Find bonus sparks and play the optional minigames for extra keepsakes.</p></div><div class="letter-grid">'+MISSIONS.map(m=>'<div class="'+(solved(m.id)?'lit':'')+'"><small>'+pad(m.id)+'</small><strong>'+(solved(m.id)?e(stamps['d'+m.id]||'?'):'?')+'</strong></div>').join('')+'</div>'+portalMap({canPlay:allow,completed:solved})+'<div class="section-title"><span>YOUR ADVENTURE JOURNAL</span></div><div class="cards">'+MISSIONS.map(mini).join('')+'</div>','/board')
}

function vault(){const n=count(),unlocked=!!profile().vault_unlocked;const letters=MISSIONS.map(m=>'<div class="'+(solved(m.id)?'lit':'')+'"><small>'+pad(m.id)+'</small><strong>'+(solved(m.id)?e(profile().fragments?.['d'+m.id]||'?'):'?')+'</strong></div>').join('');shell('<div class="page-title"><div class="kicker">DECEMBER 14 / THE FINAL AUTHORIZATION</div><h1>THE SKY <span class="accent">REMEMBERS.</span></h1><p>Twenty recovered memories, one final secret, and the cinematic event you’ve been working toward.</p></div><div class="stats">'+stat('MEMORIES',n+' / 20')+stat('VAULT STATUS',unlocked?'UNSEALED':'SEALED')+stat('LIVE EVENT','38 SCENES')+stat('RELEASE','DEC 14')+'</div><div class="sheet"><div class="kicker">TWENTY-LETTER MEMORY CIPHER</div><div class="letter-grid" style="margin:16px 0">'+letters+'</div>'+(unlocked?'<div class="success">FINAL VAULT UNSEALED ♡</div><a class="cta" href="#/final-transmission">▶ ENTER THE LIVE CINEMATIC FINALE</a>':n>=20?'<p>Read all twenty stamps in day order. Remove spaces.</p><form id="vault-form" style="display:grid;gap:10px;max-width:420px;margin-top:16px"><input class="field" name="key" required maxlength="30" placeholder="Twenty-letter memory phrase"><button class="cta" type="submit" '+(!prepared()?'disabled':'')+'>UNSEAL THE FINAL VAULT ↗</button></form>':'<p>Recover all twenty cases to activate the final cipher. The ending stays sealed until December 14.</p>')+'</div>'+(vaultContent?'<section class="sheet"><div class="kicker">MESSAGE RECOVERED / FROM WYATT</div><h2>'+e(vaultContent.heading||'For Bella')+'</h2><p style="white-space:pre-wrap">'+e(vaultContent.letter||'')+'</p><a class="cta" href="#/final-transmission">▶ PLAY THE LIVE EVENT</a></section>':'') ,'/vault')}
function admin(){
 const p=profile(),n=count(),events=snapshot?.events||[];
 shell('<div class="page-title"><div class="kicker">WYATT / PRIVATE DIRECTOR CONTROL</div><h1>The <span class="accent">magic workshop.</span></h1><p>Preview all twenty adventures, write Bella’s private story chapters, prepare surprises, and monitor progress. Screen sharing always requires Bella’s permission.</p></div>'
 +'<div class="stats">'+stat('STORY SPARKS',n+' / 20')+stat('CURRENT ACTIVITY',p.current_page||'NOT ONLINE')+stat('LAST UPDATE',p.last_seen?new Date(p.last_seen).toLocaleString():'UNKNOWN')+stat('TEST MODE',snapshot?.test_mode?'ON':'OFF')+'</div>'
 +'<div class="director-grid"><section class="sheet"><div class="kicker">PREVIEW THE ADVENTURE</div><h2>Every magical chapter</h2><p>View the puzzle evidence without using Bella’s player account.</p><select id="director-day" class="field" style="margin:13px 0">'+MISSIONS.map(m=>'<option value="'+m.id+'">'+pad(m.id)+' / '+e(chapterFor(m.id).title)+'</option>').join('')+'</select><div class="director-actions"><button data-act="preview" class="cta">PREVIEW CASE ↗</button><button data-act="edit-story" class="secondary">EDIT PRIVATE STORY ✎</button></div></section>'
 +'<section class="sheet"><div class="kicker">THE MOVIE MADE FOR BELLA</div><h2>December 14 finale</h2><p>Rehearse the existing interactive 38-scene finale with a new enchanted-multiverse introduction. Bella’s actual finale remains locked.</p><div style="margin-top:15px"><a class="cta" href="#/finale-rehearsal">▶ REHEARSE THE MOVIE</a></div></section>'
 +'<section class="sheet"><div class="kicker">DIRECTOR CONTROLS</div><h2>Unlocks and testing</h2><p>Test Mode bypasses the daily dates. Turn it off before Bella plays. Reset erases saved story choices, bonus badges, and main puzzle progress.</p><div class="director-actions"><button class="secondary" data-act="'+(snapshot?.test_mode?'test-off':'test-on')+'">'+(snapshot?.test_mode?'DISABLE TEST MODE':'ENABLE TEST MODE')+'</button><button class="secondary" data-act="complete">MARK SELECTED DAY DONE</button><button class="secondary" data-act="reset">RESET BELLA’S GAME</button></div></section>'
 +'<section class="sheet"><div class="kicker">PERSONAL MESSAGE / NOT AN EMAIL</div><h2>Send Bella a note in her game</h2><form id="director-note-form"><textarea class="field" name="message" required maxlength="500" rows="4" placeholder="A little message from Wyatt…"></textarea><button class="cta" type="submit">SAVE PRIVATE NOTE ♡</button></form></section>'
 +'<section class="sheet"><div class="kicker">RECENT FIELD EVENTS</div><h2>Activity journal</h2><div class="muted-list">'+events.slice(0,18).map(x=>'<p>'+e(x.event_type)+' — '+e(x.detail)+' <small>'+e(new Date(x.created_at).toLocaleString())+'</small></p>').join('')+'</div></section></div>'
 +'<div class="section-title"><span>ALL FIVE WORLDS / DIRECTOR PREVIEW</span></div>'+portalMap({canPlay:allow,completed:solved,admin:true})
 +'<div class="section-title"><span>OPTIONAL / LIVE VIEWING WITH BELLA’S CONSENT</span></div>'+renderLiveShare('admin'),'/admin')
}
function worldEditor(day){
 if(!one(day)){go('/admin');return}
 const rec=worldRecord(day);
 shell('<div class="content"><div class="breadcrumbs"><a href="#/admin">← DIRECTOR DECK</a><a href="#/director/'+day+'">PREVIEW CHAPTER '+pad(day)+' ↗</a></div>'
 +'<div class="page-title"><div class="kicker">WYATT-ONLY / PRIVATE MEMORY EDITOR</div><h1>Write Bella’s <span class="accent">surprise scenes.</span></h1><p>Write, preview, and securely store chapter stories. Nothing typed here is committed to the public GitHub repository.</p></div>'
 +'<div class="world-quick-links">'+ZONES.map(z=>'<a class="secondary" href="#/world-editor/'+z.start+'">'+z.icon+' '+e(z.short)+'</a>').join('')+'</div>'
 +'<div class="sheet"><label class="field-label">EDIT A DAY</label><select id="director-day" class="field">'+MISSIONS.map(m=>'<option value="'+m.id+'" '+(day===m.id?'selected':'')+'>'+pad(m.id)+' / '+e(chapterFor(m.id).title)+'</option>').join('')+'</select><button class="secondary" data-act="edit-story">LOAD SELECTED CHAPTER</button></div>'
 +(rec?.error?'<div class="warning">STORY EXTENSION REQUIRED: '+e(rec.error)+'</div>':'')
 +directorForm(day,rec)+finalLetterForm(day,rec)+'</div>');
 loadWorld(day);
}

function movie(preview){
 if(preview&&role()!=='admin'){go('/dashboard');return}
 if(!preview&&!profile().vault_unlocked){shell('<div class="page-title"><h1>THE MOVIE <span class="accent">IS STILL SEALED.</span></h1><p>Restore twenty Story Sparks and unlock the final storybook first.</p><a class="cta" href="#/vault">BACK TO THE STORYBOOK ↗</a></div>');return}
 if(!movieStarted){
  root.innerHTML='<section class="movie-prelude"><div><span class="chapter-eyebrow">DECEMBER 14 / A MOVIE MADE FOR BELLA</span><span class="movie-icon">🌌</span><h1>THE LAST<br><span class="accent">STORY SPARK.</span></h1><p>Twenty adventures. Five worlds. One story worth saving. Stitch, Simba, Nala, and all the worlds are waiting. Wyatt made this final chapter for Bella. ♡</p><div class="hero-actions" style="justify-content:center"><button class="cta" data-act="movie-begin">▶ BEGIN THE INTERACTIVE MOVIE</button><a class="secondary" href="#/'+(preview?'admin':'vault')+'">← BACK</a></div></div></section>';return;
 }
 root.innerHTML='';
 mountLiveFinale(root,{adminPreview:preview,secretContent:preview?{letter:worldCache[20]?.final_letter||''}:vaultContent,onExit:()=>{movieStarted=false;go(preview?'/admin':'/vault')}});
}
function render(){
 if(!snapshot){login();return}
 const p=url();const inMovie=(p==='/final-transmission'||p==='/finale-rehearsal');document.body.classList.toggle('ohana-in-movie',inMovie);if(inMovie)window.OHANA_VOICE?.stop();if(p==='/final-transmission')return movie(false);if(p==='/finale-rehearsal')return movie(true);
 movieStarted=false;unmountLiveFinale();
 if(role()==='admin'){
  if(p==='/admin'||p==='/dashboard'||p==='/')return admin();
  let m=p.match(/^\/world-editor\/(\d+)$/);if(m)return worldEditor(Number(m[1]));
  m=p.match(/^\/director\/(\d+)$/);if(m)return casePage(Number(m[1]),true);
  m=p.match(/^\/director\/evidence\/(\d+)\/(dispatch|registry|surveillance|laboratory|annex)$/);if(m)return evidencePage(Number(m[1]),m[2],true);
  return admin();
 }
 if(p==='/dashboard'||p==='/')return home();
 if(p==='/worlds')return worldsPage();
 if(p==='/cases')return allCases();
 if(p==='/board')return board();
 if(p==='/vault')return vault();
 let m=p.match(/^\/case\/(\d+)$/);if(m)return casePage(Number(m[1]));
 m=p.match(/^\/evidence\/(\d+)\/(dispatch|registry|surveillance|laboratory|annex)$/);
 if(m)return evidencePage(Number(m[1]),m[2]);go('/dashboard');
}

async function submit(form){if(form.id==='login-form'){selected=form.elements.agent.value;const email=selected==='admin'?cfg.adminEmail:cfg.playerEmail,password=form.elements.pass.value;if(!email)throw Error('Your existing login email alias is not configured.');const {error}=await client.auth.signInWithPassword({email,password});if(error)throw error;snapshot=await rpc('ohana_state');if(snapshot.role!==selected){await client.auth.signOut();snapshot=null;throw Error('This account does not match the selected role.')}worldCache={};miniSession=null;configureLiveShare(client,url);go(selected==='admin'?'/admin':'/dashboard');render();window.OHANA_VOICE?.route(url());return}
 if(form.id==='bolt-form'){if(!prepared())throw Error('The 20-day Supabase migration needs to be run first.');const d=Number(form.dataset.day),g=Number(form.dataset.gate),v=form.elements.guess.value;const res=await rpc('ohana_door',{p_day:d,p_gate:g,p_guess:v});alertMsg(res.correct?(res.day_complete?'STORY SPARK '+pad(d)+' RESTORED! ♡':'ARCHIVE SEAL '+g+' RESTORED!'):(['Stitch says: Oopsie! Check the clues again.','Not quite! Simba says to follow the evidence.','The band says: Not the right note! Try again.','That door is being stubborn. Look at the records.','The portal flickers… one more look at the clues!'][Math.floor((d-1)/4)])+' '+(res.attempts?'Attempt '+res.attempts+'.':''),!res.correct);await refresh();if(role()==='player'){const stem='D'+pad(d)+'_';window.OHANA_VOICE?.playSequence(res.correct?(res.day_complete?[stem+'SEAL_'+g+'_SUCCESS',stem+'COMPLETE',stem+'NEXT']:[stem+'SEAL_'+g+'_SUCCESS',stem+'SEAL_'+(g+1)+'_START']):[stem+'SEAL_WRONG']);}return}
 if(form.id==='final-letter-form'){
  if(role()!=='admin')throw Error('Director permission required.');
  if(!prepared())throw Error('Install the private Supabase upgrade first.');
  const value=form.elements.letter.value.trim();
  if(value.length<5)throw Error('Please enter a real letter before saving.');
  await rpc('ohana_world',{p_action:'save_letter',p_day:20,p_value:value});
  delete worldCache[20];await loadWorld(20);
  alertMsg('♡ PRIVATE FINAL MOVIE LETTER SAVED.');render();return;
 }
 if(form.id==='director-note-form'){
  if(role()!=='admin')throw Error('Director permission required.');
  await rpc('ohana_admin',{p_action:'note',p_message:form.elements.message.value});
  alertMsg('PRIVATE NOTE SAVED. Bella can see it on her dashboard.');
  await refresh();return;
 }
 if(form.id==='world-editor-form'){
  if(role()!=='admin')throw Error('Director permission required.');
  if(!prepared())throw Error('Install the Enchanted Multiverse Supabase SQL first.');
  const day=Number(form.dataset.day);
  for(const key of ['title','opening','memory','closing']){
   const value=form.elements[key].value.trim();
   if(!value)throw Error('Complete the '+key+' field.');
   await rpc('ohana_world',{p_action:'save',p_day:day,p_key:key,p_value:value});
  }
  delete worldCache[day];
  alertMsg('STORY SAVED PRIVATELY TO SUPABASE — DAY '+pad(day));
  await loadWorld(day);render();return;
 }
 if(form.id==='vault-form'){if(!prepared())throw Error('Supabase migration required.');const res=await rpc('ohana_vault',{p_key:form.elements.key.value});if(!res.ok){alertMsg(res.message||'Incorrect memory phrase.',true);render();return}vaultContent=res.content;snapshot.profile.vault_unlocked=true;alertMsg('VAULT UNSEALED — THE FINAL EVENT IS READY. ♡');render();return}
}
async function click(btn){const action=btn.dataset.act;if(action==='logout'){window.OHANA_VOICE?.stop();await shutdownLiveShare();await client?.auth.signOut();snapshot=null;worldCache={};miniSession=null;go('/dashboard');login();return}
 if(action==='movie-begin'){if(role()==='player'&&!vaultContent){const r=await rpc('ohana_vault',{p_key:''});if(r?.ok)vaultContent=r.content;}movieStarted=true;render();return}
 if(action==='edit-story'){const d=Number(document.getElementById('director-day')?.value||1);go('/world-editor/'+d);return}
 if(action==='world-choice'){
  if(role()!=='player'||!prepared())throw Error('Player story access requires the private Supabase migration.');
  const d=Number(btn.dataset.day),choice=btn.dataset.choice;
  await rpc('ohana_world',{p_action:'choose',p_day:d,p_value:choice});
  if(worldCache[d])worldCache[d].choice=choice;
  alertMsg('♡ YOUR STORY CHOICE IS SAVED.');render();window.OHANA_VOICE?.playClip('D'+pad(d)+'_CHOICE_'+choice);return;
 }
 if(action==='world-spark'){
  if(role()!=='player'||!prepared())throw Error('Unlock this chapter first.');
  const d=Number(btn.dataset.day);
  await rpc('ohana_world',{p_action:'reward',p_day:d,p_value:'spark'});
  if(worldCache[d]&&!worldCache[d].rewards.includes('spark'))worldCache[d].rewards.push('spark');
  alertMsg('✦ SECRET BONUS STORY SPARK COLLECTED!');render();window.OHANA_VOICE?.playClip('D'+pad(d)+'_BONUS_SPARK');return;
 }
 if(action==='mini-start'){
  if(role()!=='player'||!prepared())throw Error('Unlock this chapter first.');
  const d=Number(btn.dataset.day);
  miniSession={day:d,pattern:miniPattern(d),show:true,index:0};
  render();window.OHANA_VOICE?.playClip('D'+pad(d)+'_MINIGAME_START');
  window.setTimeout(()=>{if(miniSession?.day===d&&miniSession.show){
    miniSession.show=false;
    if(url()==='/case/'+d)render();
   }},2500);return;
 }
 if(action==='mini-press'){
  if(!miniSession||miniSession.show)throw Error('Start the portal memory challenge first.');
  const d=miniSession.day,g=Number(btn.dataset.symbol);
  if(miniSession.pattern[miniSession.index]!==g){
   miniSession=null;alertMsg('Stitch mixed up the runes! Try that pattern again. ♡',true);render();window.OHANA_VOICE?.playClip('D'+pad(d)+'_MINIGAME_FAIL');return;
  }
  miniSession.index++;
  if(miniSession.index===miniSession.pattern.length){
   await rpc('ohana_world',{p_action:'reward',p_day:d,p_value:'mini'});
   if(worldCache[d]&&!worldCache[d].rewards.includes('mini'))worldCache[d].rewards.push('mini');
   miniSession=null;alertMsg('✦ PORTAL MEMORY CHALLENGE COMPLETE!');render();window.OHANA_VOICE?.playClip('D'+pad(d)+'_MINIGAME_WIN');return;
  }
  render();return;
 }
 if(action==='hint'){if(!prepared())throw Error('Run the new Supabase migration first.');const d=Number(btn.dataset.day),tier=Number(btn.dataset.tier);const res=await rpc('ohana_hint',{p_day:d,p_tier:tier});hintText[d]=(hintText[d]||'')+'\n'+res.hint;alertMsg('HINT DECRYPTED: '+res.hint);await refresh();window.OHANA_VOICE?.playClip('D'+pad(d)+'_HINT_'+tier);return}
 if(action==='preview'){const d=Number(document.getElementById('director-day')?.value||1);go('/director/'+d);return}
 if(['test-on','test-off','reset','complete'].includes(action)){const explain={ 'test-on':'Enable test mode? This allows Bella to play ahead of schedule.', 'test-off':'Restore the scheduled daily locks?',reset:'Reset Bella’s case progress? This removes her solved cases and cannot be undone.',complete:'Mark the selected case complete for Bella?'};if(!window.confirm(explain[action]))return;const a={'test-on':'test_on','test-off':'test_off',reset:'reset',complete:'complete'}[action];const d=Number(document.getElementById('director-day')?.value||1);await rpc('ohana_admin',{p_action:a,p_day:d});if(a==='reset'){worldCache={};miniSession=null;}alertMsg('DIRECTOR CONTROL UPDATED.');await refresh();return}
}
root.addEventListener('submit',async ev=>{const form=ev.target.closest('form');if(!form)return;ev.preventDefault();if(busy)return;busy=true;const submitButton=form.querySelector('[type=submit]');if(submitButton)submitButton.disabled=true;try{await submit(form)}catch(err){console.error(err);if(!snapshot){loginError=err.message||String(err);login()}else{alertMsg(err.message||String(err),true);render()}}finally{busy=false;if(submitButton?.isConnected)submitButton.disabled=false}});
root.addEventListener('click',async ev=>{const shareBtn=ev.target.closest('[data-share]');if(shareBtn){await handleLiveShare(shareBtn.dataset.share);return}const btn=ev.target.closest('[data-act]');if(!btn||busy)return;busy=true;try{await click(btn)}catch(err){console.warn(err);alertMsg(err.message||String(err),true);render()}finally{busy=false}});
window.addEventListener('hashchange',()=>{if(snapshot){render();window.OHANA_VOICE?.route(url());notifyLiveRoute(url());if(role()==='player'&&prepared())rpc('ohana_track',{p_page:url()}).catch(()=>{})}});
async function boot(){if(!cfg.url||!cfg.publishableKey||!cfg.adminEmail||!cfg.playerEmail){configError('Your existing config.js is missing a valid Supabase URL, publishable key, or login aliases.');return}if(!window.supabase?.createClient){configError('The Supabase browser library did not load.');return}try{client=window.supabase.createClient(cfg.url,cfg.publishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}});initVoicePlayer(client,()=>({role:role(),stage,allow,completed:count(),vaultUnlocked:!!profile().vault_unlocked}));configureLiveShare(client,url);const {data,error}=await client.auth.getSession();if(error)throw error;if(data?.session)snapshot=await rpc('ohana_state');render();window.OHANA_VOICE?.route(url())}catch(err){console.error('OHANA startup',err);configError('Supabase connection failed: '+(err.message||err))}}
boot();
