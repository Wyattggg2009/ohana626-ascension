// OHANA-626 private voice bridge. No MP3s, secrets, or spoiler scripts are stored in GitHub.
const FINALE_CLIPS = [
'F01_STANDBY','F02_AWAKENING','F03_ECHO','F04_FLYBY','F05_ARCHIVE','F06_REDALERT',
'F07_ENEMY','F08_DEFEND','F09_COUNTERSTRIKE','F10_CORRIDOR','F11_CHASE','F12_BOOST',
'F13_REACTOR','F14_WARDENRETURN','F15_FIRE','F16_SHATTER','F17_BLACKOUT','F18_BREACH',
'F19_CODE','F20_FOURTH','F21_DECISION','F22_FALL','F23_NOVEMBER','F24_STORE',
'F25_WALK','F26_PHOTOGRAPHS','F27_HEARTBEAT','F28_RETURN','F29_COLOSSUS','F30_CHARGEUP',
'F31_FINALBATTLE','F32_SACRIFICE','F33_EXPLOSION','F34_QUIET','F35_ANSWER','F36_WYATT',
'F37_ENVELOPE','F38_CREDITS'
];
const two = n => String(n).padStart(2,'0');
const clipPath = id => {
  if (/^SYS_[A-Z0-9_]+$/.test(id)) return 'global/'+id+'.mp3';
  if (/^D(0[1-9]|1[0-9]|20)_[A-Z0-9_]+$/.test(id)) return 'day-'+id.slice(1,3)+'/'+id+'.mp3';
  if (/^F(?:[0-9]{2}_[A-Z0-9_]+|_[A-Z0-9_]+)$/.test(id)) return 'finale/'+id+'.mp3';
  throw new Error('Invalid voice clip ID');
};
export function initVoicePlayer(client, getContext) {
  if (window.OHANA_VOICE) return window.OHANA_VOICE;
  window.OHANA_FINALE_CLIPS = FINALE_CLIPS;
  const panel = document.createElement('aside');
  panel.className='ohana-voice-dock';
  panel.setAttribute('aria-label','OHANA-626 voice player');
  panel.innerHTML = '<div class="ohana-voice-title">♡ WYATT’S VOICE <small id="ohana-voice-status" aria-live="polite">Voice is off</small></div>'+
    '<div class="ohana-voice-actions"><button type="button" id="ohana-voice-toggle" aria-pressed="false">🔊 ENABLE</button>'+
    '<button type="button" id="ohana-voice-play" title="Play or pause" aria-label="Play or pause narration">▶</button>'+
    '<button type="button" id="ohana-voice-replay" title="Replay" aria-label="Replay narration">↺</button></div>'+
    '<label class="ohana-voice-volume">Volume <input id="ohana-voice-volume" type="range" min="0" max="100" value="80" aria-label="Narration volume"></label>'+
    '<div class="ohana-voice-extras" id="ohana-voice-extras" hidden><button type="button" id="ohana-voice-explore">✦ EXPLORE</button><button type="button" id="ohana-voice-twist">✧ STORY REVEAL</button></div>';
  document.body.appendChild(panel);
  const el = id => panel.querySelector('#'+id);
  const status = msg => { el('ohana-voice-status').textContent=msg; };
  const player = new Audio();
  player.preload='none';
  player.volume=0.8;
  let enabled=false, lastClip=null, suggested=null, queue=[], serial=0, currentRoute='', routedDay=0;
  const stopAudio = () => { serial++; queue=[]; player.pause(); player.removeAttribute('src');player.load(); };
  const stop = () => { stopAudio(); status(enabled?'Ready':'Voice is off');el('ohana-voice-play').textContent='▶'; };
  const getClipUrl = async id => {
    const {data,error}=await client.storage.from('ohana-voice').createSignedUrl(clipPath(id),600);
    if (error || !data?.signedUrl) throw new Error(error?.message || 'Voice clip unavailable');
    return data.signedUrl;
  };
  async function next() {
    if (!enabled || !queue.length) return;
    const id=queue.shift(), token=++serial;
    lastClip=id;
    player.pause();
    player.removeAttribute('src');
    player.load();
    status('Loading '+id+'…');
    try {
      const url=await getClipUrl(id);
      if (token!==serial || !enabled) return;
      player.src=url;
      const promise=player.play();
      if (promise) await promise;
      if (token===serial) { status('Playing '+id.replaceAll('_',' '));el('ohana-voice-play').textContent='Ⅱ'; }
    } catch(err) {
      if (token!==serial) return;
      const blocked=err?.name==='NotAllowedError';
      status(blocked?'Tap ▶ to start audio':'Audio unavailable; check private Storage');
      if (!blocked) { console.warn('OHANA voice:',id,err?.message||err); if(queue.length) next(); }
    }
  }
  const playSequence = ids => {
    const safe=(Array.isArray(ids)?ids:[ids]).filter(Boolean);
    safe.forEach(clipPath);
    suggested=safe.at(-1)||suggested;
    if (!enabled || !safe.length) return;
    stopAudio();
    queue=[...safe];
    next();
  };
  const playClip = id => playSequence([id]);
  player.addEventListener('ended',()=>{el('ohana-voice-play').textContent='▶';if(queue.length)next();else status('Finished · Replay ↺');});
  player.addEventListener('pause',()=>{el('ohana-voice-play').textContent='▶';});
  player.addEventListener('error',()=>{if(player.src)status('Could not play MP3');});
  el('ohana-voice-toggle').addEventListener('click',()=>{
    enabled=!enabled;
    el('ohana-voice-toggle').textContent=enabled?'🔇 DISABLE':'🔊 ENABLE';
    el('ohana-voice-toggle').setAttribute('aria-pressed',String(enabled));
    if (!enabled) {stop();return;}
    status('Voice enabled');
    playSequence(['SYS_AUDIO', suggested || 'SYS_WELCOME']);
  });
  el('ohana-voice-play').addEventListener('click',async()=>{
    if (!enabled) { el('ohana-voice-toggle').click();return; }
    if(player.src) {
      if (player.paused) {
        try {await player.play();status('Playing '+(lastClip||'narration'));el('ohana-voice-play').textContent='Ⅱ';}
        catch {status('Could not start MP3');}
      } else {player.pause();status('Paused');}
    } else if (lastClip||suggested) playClip(lastClip||suggested);
  });
  el('ohana-voice-replay').addEventListener('click',()=>{
    if(!enabled){el('ohana-voice-toggle').click();return;}
    if(lastClip||suggested)playClip(lastClip||suggested);
  });
  el('ohana-voice-volume').addEventListener('input',e=>{player.volume=Number(e.target.value)/100;});
  el('ohana-voice-explore').addEventListener('click',()=>{if(routedDay)playClip('D'+two(routedDay)+'_EXPLORE');});
  el('ohana-voice-twist').addEventListener('click',()=>{if(routedDay)playClip('D'+two(routedDay)+'_TWIST');});
  function route(path) {
    if (!path || path===currentRoute) return;
    currentRoute=path;
    stopAudio();
    const ctx=getContext?.()||{};
    routedDay=0;
    const m=path.match(/^\/case\/(\d+)$/);
    const extras=el('ohana-voice-extras');
    extras.hidden=true;
    if(ctx.role!=='player') {suggested=null;status('Director preview · voice off');return;}
    if(m) {
      const d=Number(m[1]);
      if(!ctx.allow?.(d)){suggested='SYS_LOCKED';}
      else{
        routedDay=d;
        extras.hidden=false;
        el('ohana-voice-twist').disabled=Number(ctx.stage?.(d))<1;
        suggested='D'+two(d)+'_OPEN';
      }
    } else if(path==='/worlds')suggested='SYS_MAP';
    else if(path==='/dashboard'||path==='/')suggested=(Number(ctx.completed||0)>0?'SYS_RETURN':'SYS_WELCOME');
    else if(path==='/vault'&&!ctx.vaultUnlocked)suggested='SYS_VAULT';
    else suggested=null;
    if(enabled && suggested)playClip(suggested);
    else status(enabled?'Ready':'Voice is off');
  }
  window.OHANA_VOICE={playClip,playSequence,route,stop,getClipUrl,get enabled(){return enabled;}};
  return window.OHANA_VOICE;
}
