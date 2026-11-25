/* OHANA-626 live sharing: explicitly opt-in, session-code protected, stop-anytime.
   No webcam or microphone; getDisplayMedia always requires Bella's browser permission.
   If screen capture is unsupported on mobile, the live case route can still be shared.
*/
let client=null,role='',channel=null,peer=null,stream=null,viewStream=null,code='',mode='',status='',routeProvider=()=>'',pending=[],joined=false;
const ice={iceServers:[{urls:'stun:stun.l.google.com:19302'},{urls:'stun:stun1.l.google.com:19302'}]};
const e=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const roomKey=v=>'ohana-626-watch-'+String(v).replace(/[^A-Z0-9]/gi,'').toUpperCase();
const randomCode=()=>{const b=new Uint8Array(10);crypto.getRandomValues(b);return Array.from(b,v=>v.toString(16).padStart(2,'0')).join('').toUpperCase()};
const signal=async (kind,data={})=>{try{await channel?.send({type:'broadcast',event:'wire',payload:{kind,...data}})}catch{}};
export function configureLiveShare(supabaseClient,getRoute){client=supabaseClient;routeProvider=getRoute;}
export function sharingActive(){return Boolean(channel);}
export function renderLiveShare(r){role=r;const share=r==='player',active=!!channel;return '<section class="share" id="live-share"><div class="kicker">OPTIONAL / LIVE REHEARSAL LINK</div><h3>'+(share?'Let Wyatt watch your mission':'Watch Bella investigate')+'</h3><p>'+(share?'Nothing is shared unless you choose to start. For screen video, your browser asks you to select a tab or screen. You can stop at any time.':'Bella must start sharing and give you a private session code. You cannot turn her screen sharing on from here.')+'</p><p class="privacy">Screen capture may not be supported on some phones. Case View works on phones and shares only the page Bella is viewing—not her whole screen.</p>'+
 (share?'<div class="buttons"><button class="cta" data-share="screen" '+(active?'disabled':'')+'>▣ SHARE MY SCREEN (ASK FIRST)</button><button class="secondary" data-share="case" '+(active?'disabled':'')+'>◉ SHARE CASE VIEW</button><button class="secondary" data-share="stop" '+(!active?'disabled':'')+'>■ STOP SHARING</button></div><div class="session" id="share-code">'+(active?'<small>PRIVATE SESSION CODE</small><strong>'+e(code)+'</strong><button class="tiny" data-share="copy">COPY CODE</button>':'')+'</div>':
 '<div class="buttons"><input id="watch-code" class="field" style="max-width:295px" maxlength="20" autocomplete="off" placeholder="Enter Bella’s session code" aria-label="Bella’s session code"><button class="cta" data-share="join">◉ CONNECT TO BELLA</button><button class="secondary" data-share="leave">■ DISCONNECT</button></div><video id="watch-video" playsinline autoplay muted controls style="display:none"></video><div id="watch-route" class="status"></div>')+
 '<div id="watch-status" class="status" role="status">'+e(status||(share?'PRIVATE / NOT SHARING':'WAITING FOR A SESSION CODE'))+'</div></section>'}
export function refreshLiveShare(r=role){const el=document.getElementById('live-share');if(!el)return;const holder=document.createElement('div');holder.innerHTML=renderLiveShare(r);el.replaceWith(holder.firstChild);if(viewStream){const v=document.getElementById('watch-video');if(v){v.srcObject=viewStream;v.style.display='block';v.play().catch(()=>{})}}}
function say(t){status=t;const n=document.getElementById('watch-status');if(n)n.textContent=t}
function newPeer(isHost){if(peer){try{peer.close()}catch{}}peer=new RTCPeerConnection(ice);pending=[];peer.onicecandidate=x=>{if(x.candidate)signal('ice',{candidate:x.candidate.toJSON()})};peer.onconnectionstatechange=()=>{if(peer){say('LIVE LINK: '+peer.connectionState.toUpperCase()+(mode==='case'?' / CASE VIEW':' / SCREEN VIDEO'));if(peer.connectionState==='failed')say('Video could not connect on this network. Case View may still work.')}};if(!isHost){peer.ontrack=ev=>{viewStream=ev.streams?.[0]||new MediaStream([ev.track]);let v=document.getElementById('watch-video');if(v){v.srcObject=viewStream;v.style.display='block';v.play().catch(()=>{})}say('Bella’s screen is live. She controls when sharing stops.')}}else if(stream){for(const track of stream.getTracks())peer.addTrack(track,stream)}return peer}
async function flush(){if(!peer?.remoteDescription)return;while(pending.length)try{await peer.addIceCandidate(pending.shift())}catch{}}
async function onWire({payload}){if(!payload)return;try{
 if(payload.kind==='hello'&&role==='player'){
   await signal('mode',{mode});await signal('page',{route:routeProvider()||'dashboard'});
   if(mode==='screen'&&stream){const p=newPeer(true);const offer=await p.createOffer();await p.setLocalDescription(offer);await signal('offer',{description:p.localDescription.toJSON()});}else say('Case View connected. Bella is sharing the active page only.');
 }else if(payload.kind==='offer'&&role==='admin'){
   const p=newPeer(false);await p.setRemoteDescription(new RTCSessionDescription(payload.description));const answer=await p.createAnswer();await p.setLocalDescription(answer);await signal('answer',{description:p.localDescription.toJSON()});await flush();
 }else if(payload.kind==='answer'&&role==='player'&&peer){await peer.setRemoteDescription(new RTCSessionDescription(payload.description));await flush();
 }else if(payload.kind==='ice'&&peer){if(peer.remoteDescription)await peer.addIceCandidate(new RTCIceCandidate(payload.candidate));else pending.push(new RTCIceCandidate(payload.candidate));
 }else if(payload.kind==='page'&&role==='admin'){const node=document.getElementById('watch-route');if(node)node.textContent='BELLA IS VIEWING: '+String(payload.route).replace(/^\/|#/g,'').slice(0,110);
 }else if(payload.kind==='mode'&&role==='admin'){mode=payload.mode; say(mode==='case'?'Bella is sharing Case View. No screen video is captured.':'Bella approved a screen/video share. Connecting…');
 }else if(payload.kind==='bye'&&role==='admin'){viewStream=null;if(peer){peer.close();peer=null}const v=document.getElementById('watch-video');if(v){v.srcObject=null;v.style.display='none'}say('Bella stopped sharing. This session is over.');}
 }catch(err){console.warn('OHANA live share event',err);say('Live share connection issue: '+(err?.message||'Please reconnect.'))}}
async function subscribe(){if(!client)throw Error('Log into OHANA-626 first.');channel=client.channel(roomKey(code),{config:{broadcast:{self:false}}});channel.on('broadcast',{event:'wire'},onWire);await new Promise((resolve,reject)=>{let settled=false;channel.subscribe((s)=>{if(s==='SUBSCRIBED'&&!settled){settled=true;resolve()}else if(['CHANNEL_ERROR','TIMED_OUT','CLOSED'].includes(s)&&!settled){settled=true;reject(Error('Federation live channel is unavailable.'))}})});}
async function close(sendBye=true){if(sendBye)await signal('bye');const ch=channel;channel=null;if(peer){peer.close();peer=null}if(stream){stream.getTracks().forEach(t=>t.stop());stream=null}viewStream=null;pending=[];mode='';code='';joined=false;if(ch)try{await client.removeChannel(ch)}catch{}say('SHARING OFF / PRIVATE');refreshLiveShare();}
export async function handleLiveShare(action){try{
 if(action==='copy'){if(code){await navigator.clipboard.writeText(code);say('Session code copied. Give it directly to Wyatt.')}return}
 if(action==='stop'||action==='leave'){await close();return}
 if(action==='screen'||action==='case'){
  if(role!=='player')throw Error('Only Bella can choose to share.');if(channel)await close();
  if(action==='screen'){
    if(!navigator.mediaDevices?.getDisplayMedia)throw Error('This browser cannot share its screen. Use SHARE CASE VIEW instead.');
    // Capturing is initiated directly from Bella’s click. Her browser displays a permission picker.
    stream=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:12},audio:false});
    stream.getVideoTracks()[0]?.addEventListener('ended',()=>{close().catch(()=>{})},{once:true});
  }
  mode=action==='screen'?'screen':'case';code=randomCode();await subscribe();say(mode==='screen'?'Screen approved. Share the session code with Wyatt. A visible browser sharing indicator stays on.':'Case View is active. Share this session code with Wyatt.');refreshLiveShare();return;
 }
 if(action==='join'){
   if(role!=='admin')throw Error('Director access required.');const raw=document.getElementById('watch-code')?.value?.trim().toUpperCase()||'';
   if(!/^[A-F0-9]{20}$/.test(raw))throw Error('Enter Bella’s full 20-character session code.');
   if(channel)await close();code=raw;await subscribe();joined=true;await signal('hello');say('Connection requested. Bella must already be sharing.');refreshLiveShare();return;
 }
 }catch(err){if(action==='screen'&&stream&&!channel){stream.getTracks().forEach(t=>t.stop());stream=null}say(err.message||'Live share error');refreshLiveShare();}}
export function notifyLiveRoute(route){if(role==='player'&&channel)signal('page',{route:String(route||routeProvider()).slice(0,130)})}
export function shutdownLiveShare(){return close()}
