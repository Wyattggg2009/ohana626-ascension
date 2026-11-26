/* OHANA-626 Enchanted Multiverse. Public world metadata and cosmetic gameplay only.
   Unreleased narratives and all real answers must stay in private Supabase tables. */
export const ZONES=[
{id:'island',name:"Stitch's Island",short:'The Island',icon:'🌺',dates:'NOV 25–28',start:1,end:4,tag:'Aloha, Agent Bunny',blurb:'A portal machine, one very mischievous experiment, and an island full of strange clues.',artifact:'The Island Key',background:'island'},
{id:'pride',name:'The Pride Lands',short:'Pride Lands',icon:'🦁',dates:'NOV 29–DEC 2',start:5,end:8,tag:'Find the missing sunrise',blurb:'Follow the trail across sunlit grasslands and help restore a kingdom of memories.',artifact:'The Sunstone',background:'pride'},
{id:'camp',name:'Camp Rock',short:'Camp Rock',icon:'🎸',dates:'DEC 3–6',start:9,end:12,tag:'The missing melody',blurb:'Search backstage, rebuild an original melody, and help save a magical performance.',artifact:'The Melody Key',background:'camp'},
{id:'kingdom',name:'The Enchanted Kingdom',short:'Enchanted Kingdom',icon:'🏰',dates:'DEC 7–10',start:13,end:16,tag:'A thousand secret doors',blurb:'Strange clocks, enchanted rooms, and clues that connect more than one world.',artifact:'The Castle Key',background:'kingdom'},
{id:'nexus',name:'The Multiverse Nexus',short:'The Nexus',icon:'✨',dates:'DEC 11–14',start:17,end:20,tag:'One final story',blurb:'The worlds collide. Find the final Story Sparks and unlock the movie made for Bella.',artifact:'The Story Key',background:'nexus'}
];
const titles=[
'The 626 Accident','The Coconut Conspiracy','Operation Galactic Chaos','The Great Island Escape',
'The Missing Sunrise','Trouble in the Grasslands','Echoes of the Past','The Sunstone Trial',
'Welcome to Camp Rock','The Missing Melody','Backstage Sabotage','The Final Encore',
'The Castle of a Thousand Doors','The Impossible Tea Party','Ice, Lanterns, and Secrets','The Forbidden Archive',
'Worlds Collide','Inside the Eraser Lab','A Smile in the Static','The Last Page'
];
const extras=[
'Repair the portal radio','Find the mischievous experiment','Rebuild a damaged signal','Escape the island laboratory',
'Track the missing light','Untangle the grasslands mystery','Explore a cave of echoes','Restore the Sunstone',
'Investigate the stage','Reconstruct the lost pattern','Find the backstage culprit','Save the final show',
'Trace the castle doors','Fix the impossible clocks','Connect two magical worlds','Unlock the forbidden archive',
'Repair the colliding portals','Break into the central lab','Discover a small bright memory','Restore every Story Spark'
];
const choiceSets=[
['Ask Stitch for help','Follow the strange signal','Inspect the portal machine'],
['Search the beach huts','Interview the witnesses','Follow the footprints'],
['Trust Stitch’s hunch','Study the lab readings','Examine the strange transmission'],
['Try the secret door','Repair the machine','Find another escape route'],
['Look for Simba','Ask Nala','Follow the sunlight'],
['Question the witnesses','Compare the footprints','Inspect the missing supplies'],
['Investigate the cave','Study the symbols','Follow the echo'],
['Protect the Sunstone','Explore the hidden path','Solve the ancient records'],
['Meet the performers','Explore backstage','Check the stage equipment'],
['Study the musical clues','Check the rehearsal schedule','Trace the missing notes'],
['Interview the crew','Search the storage room','Inspect the timetable'],
['Fix the stage lights','Rehearse the performance','Uncover the last clue'],
['Open the green door','Follow the staircase','Examine the enchanted book'],
['Fix the tea-party clock','Ask the host a question','Follow the paper trail'],
['Explore the ice portal','Follow the lanterns','Study the connection'],
['Open the archive ledger','Follow the erased clues','Inspect the control room'],
['Help Stitch','Help the Pride Lands','Help the music camp'],
['Disable the machinery','Follow the encrypted trail','Find the hidden exit'],
['Follow the light','Read the recovered memory','Listen to the static'],
['Bring the worlds together','Help the characters','Open the final storybook']
];
export const CHAPTERS=titles.map((title,i)=>({id:i+1,title,mission:extras[i],choices:choiceSets[i],zone:ZONES[Math.floor(i/4)]}));
export const zoneFor=day=>ZONES[Math.max(0,Math.min(4,Math.floor((Number(day)-1)/4)))];
export const chapterFor=day=>CHAPTERS[Number(day)-1];
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
export function portalMap({canPlay,completed,admin=false}){
 const cards=ZONES.map((z,i)=>{
 const got=Array.from({length:4},(_,k)=>completed(z.start+k)).filter(Boolean).length;
 const ready=canPlay(z.start)||got>0||admin;
 return '<a class="portal-world '+(ready?'':'portal-sealed')+'" href="#/'+(admin?'director/':'case/')+z.start+'" data-world="'+z.id+'"><span class="portal-ring"><span class="portal-icon" aria-hidden="true">'+z.icon+'</span></span><span class="portal-world-label"><strong>'+esc(z.name)+'</strong><small>'+esc(z.dates)+' · '+got+'/4 STORY SPARKS</small></span><span class="portal-lock">'+(got===4?'✓ RESTORED':ready?'ENTER WORLD ↗':'◇ SEALED')+'</span></a>';
 }).join('');
 return '<section class="universe" aria-label="Interactive magical world map"><div class="universe-heading"><span class="chapter-eyebrow">THE ENCHANTED MULTIVERSE</span><h2>Pick a portal. <em>Make a memory.</em></h2><p>Five worlds, twenty adventures, and one surprise Wyatt made just for Bella.</p></div><div class="world-constellation">'+cards+'</div><div class="world-map-caption">✦ THE WORLDS OPEN ONE CHAPTER AT A TIME · YOU CAN REPLAY COMPLETED DAYS</div></section>';
}
export function worldHero(day,{director=false}={}){
 const c=chapterFor(day),z=c.zone;
 return '<section class="world-scene" data-world="'+z.id+'"><div class="world-sky"><span class="floating-orb orb-one"></span><span class="floating-orb orb-two"></span><span class="world-large-icon">'+z.icon+'</span></div><div class="world-scene-text"><span class="chapter-eyebrow">'+esc(z.name)+' / CHAPTER '+String(day).padStart(2,'0')+'</span><h1>'+esc(c.title)+'</h1><p>'+esc(c.mission)+'</p><div class="world-tags"><span>'+esc(z.dates)+'</span><span>3 SECRET ARCHIVE SEALS</span><span>'+esc(z.artifact)+'</span></div></div></section>';
}
export function chapterStory(day,record,{director=false}={}){
 const c=chapterFor(day),z=c.zone;
 if(!record?.chapter)return '<section class="world-story pending-story"><span class="chapter-eyebrow">PRIVATE STORY CHANNEL</span><h2>Opening the storybook…</h2><p>'+(director?'Director preview requires the Supabase story extension.':'Personalized chapter scenes are delivered privately when this chapter is unlocked.')+'</p></section>';
 const s=record.chapter;
 const chosen=record.choice;
 return '<section class="world-story"><span class="chapter-eyebrow">'+esc(z.tag)+'</span><h2>'+esc(s.title||c.title)+'</h2><p>'+esc(s.opening)+'</p><div class="world-memory"><span>♡ A LITTLE NOTE FROM WYATT</span><p>'+esc(s.memory)+'</p></div>'+(director?'':'<div class="chapter-choice"><h3>What should Bella do next?</h3><div class="world-choices">'+c.choices.map((v,i)=>'<button type="button" class="world-choice '+(chosen===String.fromCharCode(65+i)?'chosen':'')+'" data-act="world-choice" data-day="'+day+'" data-choice="'+String.fromCharCode(65+i)+'" aria-pressed="'+(chosen===String.fromCharCode(65+i))+'"><span>'+String.fromCharCode(65+i)+'</span> '+esc(v)+'</button>').join('')+'</div><p class="choice-caption">'+(chosen?'♡ Your choice is remembered in the archive.':'Choose your approach. You can change it later.')+'</p></div>')+'</section>';
}
export function branchEcho(day,record){
 const previous=Number(day)-1,choice=record?.previous_choice,prior=chapterFor(previous);
 if(!prior||!['A','B','C'].includes(choice))return '';
 const characters=['Stitch','Nala','the Camp Rock crew','the castle keeper','the portal team'];
 const who=characters[Math.floor((day-1)/4)]||'your friends';
 const action=prior.choices[choice.charCodeAt(0)-65];
 return '<section class="choice-echo"><span class="chapter-eyebrow">THE WORLDS REMEMBER YOUR CHOICES</span><p><strong>'+esc(who)+'</strong> remembers that you chose to <em>'+esc(action.toLowerCase())+'</em> in the previous chapter. That decision has brought you to this part of the adventure.</p></section>';
}
export function conclusion(day,record){
 if(!record?.chapter)return '';
 return '<div class="world-conclusion"><span class="chapter-eyebrow">CHAPTER MEMORY RECOVERED</span><p>'+esc(record.chapter.closing)+'</p><span class="world-conclusion-icon">'+zoneFor(day).icon+'</span></div>';
}
export function bonusPanel(day,record,session){
 const rew=record?.rewards||[],doneMini=rew.includes('mini'),doneSpark=rew.includes('spark');
 const show=session?.day===day&&session?.show,active=session?.day===day&&!session?.show,pattern=session?.pattern||[];
 const glyphs=['✦','◇','☾','♥','✿','★'];
 return '<section class="world-bonus"><div class="chapter-eyebrow">OPTIONAL EXPLORATION · BONUS REWARDS</div><h2>Extra magic on this world</h2><p>These fun extras do not affect the 60 real mystery answers. Collect a hidden spark or test your memory in the portal machine.</p><div class="bonus-grid"><div class="bonus-tile"><strong>✿ Secret Story Spark</strong><p>One little collectible is hidden in each chapter.</p><details><summary>Inspect the strange glowing object</summary><p>A tiny spark is tucked behind the scenery. It looks like it was waiting for Bella.</p><button class="secondary" data-act="world-spark" data-day="'+day+'" '+(doneSpark?'disabled':'')+'>'+(doneSpark?'✓ SPARK COLLECTED':'✦ COLLECT THE SPARK')+'</button></details></div><div class="bonus-tile"><strong>◇ Portal Pattern Game</strong><p>Memorize the glowing runes, then tap them back in order.</p>'+(doneMini?'<div class="success">✓ PORTAL BADGE EARNED</div>':show?'<div class="memory-sequence" aria-live="polite">'+pattern.map(i=>'<span>'+glyphs[i]+'</span>').join('')+'</div><p class="muted">Remember the pattern…</p>':active?'<div class="mini-buttons">'+glyphs.map((g,i)=>'<button type="button" data-act="mini-press" data-symbol="'+i+'" aria-label="Rune '+(i+1)+'">'+g+'</button>').join('')+'</div><p class="muted" aria-live="polite">Rune '+(session.index+1)+' of '+pattern.length+'</p>':'<button class="secondary" data-act="mini-start" data-day="'+day+'">▶ START MEMORY GAME</button>')+'</div></div></section>';
}
export function directorForm(day,record){
 const c=chapterFor(day),s=record?.chapter;
 return '<section class="director-editor"><div class="chapter-eyebrow">PRIVATE / WYATT ONLY</div><h2>Story editor — Day '+day+'</h2><p>These entries are stored in Supabase, not in public GitHub. Bella sees them only after this chapter unlocks.</p><form id="world-editor-form" data-day="'+day+'"><label>Chapter title<input class="field" name="title" maxlength="300" required value="'+esc(s?.title||c.title)+'"></label><label>Opening story<textarea class="field" name="opening" maxlength="3000" rows="5" required>'+esc(s?.opening||'')+'</textarea></label><label>Personal note from Wyatt<textarea class="field" name="memory" maxlength="3000" rows="4" required>'+esc(s?.memory||'')+'</textarea></label><label>Chapter ending<textarea class="field" name="closing" maxlength="3000" rows="4" required>'+esc(s?.closing||'')+'</textarea></label><button class="cta" type="submit" '+(!s?'disabled':'')+'>SAVE FOUR FIELDS TO SUPABASE ↗</button></form></section>';
}
export function finalLetterForm(day,record){
 if(day!==20)return '';
 return '<section class="director-editor"><div class="chapter-eyebrow">PRIVATE / FINALE SURPRISE</div><h2>The actual letter in Bella’s movie</h2><p>This letter stays in the private Supabase vault. The finale will read it after Bella unlocks the twenty-letter phrase. Edit this before December 14.</p><form id="final-letter-form"><label>Wyatt’s final message to Bella<textarea class="field" name="letter" maxlength="6000" rows="9" required placeholder="Hi Bella…">'+esc(record?.final_letter||'')+'</textarea></label><button class="cta" type="submit" '+(!record?.chapter?'disabled':'')+'>SAVE PRIVATE FINALE LETTER ♡</button></form></section>';
}
export function miniPattern(day){
 const n=Math.min(7,3+Math.floor((day+2)/4)),seed=Number(day)*37+19;
 let x=seed;return Array.from({length:n},()=>{x=(x*13+7)%997;return x%6});
}
