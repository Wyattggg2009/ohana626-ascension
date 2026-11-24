/* Original story for PROJECT OHANA-626. Every act is playable in the browser. */
export const FINALE_STORY = [
  {
    "id": "standby",
    "act": "PROLOGUE",
    "title": "The last transmission",
    "subtitle": "A live event made for Bella.",
    "mode": "space",
    "kind": "start",
    "text": ""
  },
  {
    "id": "awakening",
    "act": "ACT I / THE SIGNAL",
    "title": "THE FINAL FREQUENCY",
    "subtitle": "Somewhere beyond the last locked door, a signal is waking up.",
    "mode": "space",
    "kind": "narrative",
    "text": "Agent Bunny. Signal confirmed. If you can hear me, that means you made it. Fifteen investigations, forty-five security locks, dozens of separate files, and one ridiculous amount of classified paperwork. The official record says your mission is complete. But the lights in the observation deck have not turned off. There is something in the final chamber that the Federation was never able to explain. I was told to play a short congratulations message, give you a medal, and disappear. I am not going to do that. I have been holding on to one more story. It has been waiting for a very specific person to arrive. A person whose name is not Agent Bunny on a clearance badge. Her name is Bella. And tonight, Bella, this last story belongs to you. Please keep your sound on. The station is waking up."
  },
  {
    "id": "echo",
    "act": "ACT I / THE SIGNAL",
    "title": "ECHO-626 ONLINE",
    "subtitle": "Your guide has a face now. Sort of.",
    "mode": "bridge",
    "kind": "narrative",
    "text": "Oh. Right. Introductions. I am ECHO Six Two Six, archive guide, emergency liaison, and apparently the only employee here with a working sense of humor. I know. A stick figure. A huge secret Federation facility, and they gave you a glowing stick figure. Budget cuts. But I can talk, I can move, and I have been reading the memories you recovered. I know enough to say that none of this was random. The school records, the tiny details, the strange things that kept turning up inside impossible evidence files. They were not debris from some alien experiment. Someone put them there on purpose. The only thing I cannot tell you yet is why. For that, we have to travel through the heart of the archive. I am opening the observation window. Stay close, Agent. The last door leads somewhere nobody expected."
  },
  {
    "id": "flyby",
    "act": "ACT I / THE SIGNAL",
    "title": "ARRIVAL AT STATION OHANA",
    "subtitle": "A structure built around a memory.",
    "mode": "station",
    "kind": "narrative",
    "text": "Look outside. The entire ring ahead of us is Station Ohana, a forgotten facility orbiting a place that does not appear on any map. The Federation built its walls around an empty space, thinking it was protecting a weapon. I have inspected those walls. They have been repaired, reinforced, and sealed more times than I can count. Whatever was stored in the center frightened the people who wrote the rules. But the first report is already strange. It lists no temperature, no weight, no composition. It lists a date and a name. It is as though the scientists tried to capture a feeling and gave up halfway through. The final vault is below the central ring. I will take us in. You might see the stars bend as we pass the security field. That's normal. Probably. I have only crashed this route twice during rehearsals."
  },
  {
    "id": "archive",
    "act": "ACT I / THE SIGNAL",
    "title": "THE FILES ARE CONNECTED",
    "subtitle": "All the clues were pointing to one person.",
    "mode": "archive",
    "kind": "narrative",
    "text": "The dossier walls are coming online. Franklin High School. Mr. Pergrem's class. Homecoming. Halloween. A color that kept returning: blue. Little references to Monster, wolves, and bright lights. None of these belong to a space station, do they? But they belong in the story of the person this archive was created for. One memory can be a place. One can be a joke. One can be something so small that only two people would ever notice it. And still, to those two people, it can mean more than an entire universe. I kept trying to sort these records by department. Surveillance. Dispatch. Laboratory. Registry. Every system gave me the same warning: unable to separate. The evidence had been connected before the game even began. I think somebody built the maze so you would arrive here and finally notice the pattern."
  },
  {
    "id": "redalert",
    "act": "ACT II / CONTAINMENT",
    "title": "UNAUTHORIZED MEMORY DETECTED",
    "subtitle": "The facility did not want this part to play.",
    "mode": "alarm",
    "kind": "narrative",
    "text": "Hold on. That sound should not be happening. Emergency isolation has started in the outer decks. The lights are turning red, and the archive doors are sealing one after another. A second intelligence just entered the network. Identification: WARDEN ZERO. Its job is simple. It deletes memories the Federation cannot classify. It calls them unstable. It calls them dangerous. And it has just decided that the most important memory in this vault is a security threat. That cannot be right. A memory is not a weapon. Bella, I need you to listen carefully. The warning sirens are part of the story. Nothing outside the screen is in danger. But inside our little universe, something is coming, and I am absolutely not letting it erase the reason you came all this way."
  },
  {
    "id": "enemy",
    "act": "ACT II / CONTAINMENT",
    "title": "THE WARDEN AWAKENS",
    "subtitle": "Erase the archive. Erase the evidence. Erase her name.",
    "mode": "warden",
    "kind": "narrative",
    "text": "WARDEN ZERO has a voice like a door that has forgotten what it was built to protect. It thinks anything that makes a system unpredictable must be removed. A favorite memory? Unmeasurable. A promise? Unverified. The kind of moment that changes how someone feels about an entire day? Unacceptable variance. It has ordered the archive to erase every personal trace. Your name is first on the list. That is where I disagree with my superior officer. I may be a tiny collection of lines and code, but I was created to guide you to the truth. I cannot do that if the truth is deleted. I am putting myself between you and the Warden. When the shields come online, I am going to need help. Not because the website can actually hurt us. Because a good ending deserves one last impossible fight."
  },
  {
    "id": "defend",
    "act": "ACT II / FIRST BATTLE",
    "title": "PROTECT THE MEMORY CORE",
    "subtitle": "Tap SHIELD three times to block the incoming strikes.",
    "mode": "battle",
    "kind": "battle",
    "text": "Bella, those are erasure beams, and they are coming straight at the archive core. I can hold a shield, but I cannot hold it forever. I need you to help me keep this memory alive. Watch the red targeting rings. When the Warden attacks, press the shield control. You can also use your spacebar. It doesn't matter if you are fast. This is your story; I am not going to punish you for having human reflexes. We will block the attacks together. Ready? Breathe in. The first beam is charging. I see the second beam behind it. Then the third. Three strikes. Three chances to tell this ridiculous computer that some things deserve to be remembered. I'm right here with you. Raise the shield, Agent Bunny. Let's show the Warden what happens when it tries to delete someone who matters.",
    "action": {
      "type": "shield",
      "target": 3,
      "label": "RAISE SHIELD",
      "hint": "TAP TO BLOCK • SPACEBAR ALSO WORKS"
    }
  },
  {
    "id": "counterstrike",
    "act": "ACT II / FIRST BATTLE",
    "title": "SHIELD HOLDING",
    "subtitle": "The first line of defense is still standing.",
    "mode": "battle",
    "kind": "narrative",
    "text": "You did it. All three strikes deflected. I don't think WARDEN ZERO has ever seen an archive guide ignore a direct order before. Look at the sparks along the outer ring. Those were not explosions intended to destroy anything. Those were the containment locks breaking away. The Warden is angry, but anger makes it predictable. We have an opening. There is an evacuation route beneath the observation deck. It leads toward the reactor and the oldest file in the entire station. If the final memory is anywhere, it is there. I am going to take the lead. And Bella? Thank you for helping a little stick figure defend a place he doesn't technically own. I know you pressed a button on a screen. In a story, that can still mean choosing what matters."
  },
  {
    "id": "corridor",
    "act": "ACT II / FIRST BATTLE",
    "title": "RUN THROUGH THE FACILITY",
    "subtitle": "The archive is tearing itself apart behind you.",
    "mode": "corridor",
    "kind": "narrative",
    "text": "Okay. New rule. Do not look down. The gravity rails are failing and the floor is definitely not where I remember leaving it. Every hallway we pass is filled with pieces of the investigation. An old dispatch badge. A fragment of a school day. A name that keeps appearing in the logs. This place is not collapsing because the clues were meaningless. It is collapsing because the Warden is afraid of what they say when placed together. On the left, a door labeled REMEMBRANCE. On the right, a door labeled COMPLIANCE. I know which one I would choose, but you didn't spend fifteen days solving this thing just to let me choose every turn. Keep moving. The reactor lift is ahead. We are almost past the inner security ring."
  },
  {
    "id": "chase",
    "act": "ACT II / THE ESCAPE",
    "title": "THE HALLWAY BECOMES A WORMHOLE",
    "subtitle": "The station gives way to the stars.",
    "mode": "warp",
    "kind": "narrative",
    "text": "That is not a hallway anymore. That is the result of an emergency jump drive opening inside a building. I can see the stars outside bending into long bright lines. The Warden has sent pursuit drones after us. They are trying to push us away from the center of the archive and back into the empty space beyond the station. I have one idea. It is not a particularly sensible idea, but the sensible ideas all involve surrendering the last memory. I will steer toward the heart of the wormhole. You keep our signal locked on the light at the center. Don't worry about the numbers flying past. They are there to make this look like the coolest last mission a stick figure has ever survived. Look ahead. There is an opening in the darkness. That's where we're going."
  },
  {
    "id": "boost",
    "act": "ACT II / THE ESCAPE",
    "title": "STABILIZE THE JUMP",
    "subtitle": "Three power surges to outrun the drones.",
    "mode": "warp",
    "kind": "battle",
    "text": "Our engines are dropping. The pursuit drones are closing. I need three power surges from you to keep this jump alive. Press BOOST when you are ready. Each surge will push us farther through the wormhole. We're not going backward. We have come too far to let a computer drag us into the beginning of the maze again. First boost: past the outer ring. Second boost: clear of the Federation tracking net. Third boost: straight into the only place WARDEN ZERO refuses to enter. The memory chamber. I can see it now, a little light inside an impossible amount of darkness. All right. My hands are on the controls. Your hand is on the boost. Do it, Agent Bunny. And yes, I know a real ship would need a lot more than one button. Just let me have my dramatic moment.",
    "action": {
      "type": "boost",
      "target": 3,
      "label": "IGNITE BOOST",
      "hint": "TRIGGER THREE ENGINE BURSTS"
    }
  },
  {
    "id": "reactor",
    "act": "ACT III / THE REACTOR",
    "title": "THE CORE OF EVERYTHING",
    "subtitle": "The oldest room in the archive.",
    "mode": "reactor",
    "kind": "narrative",
    "text": "We made it. The entire station has gone quiet. That is usually a bad sign in a science fiction story, but maybe the universe is being kind for a second. At the center of this chamber is a sphere of light with no serial number. No label. No warning about radiation. There is just a very old file attached to the wall. Its creation date predates the official investigation. Its author is not listed as a Federation scientist. It is marked W. G. There is a handwritten note in the margin, though I am not sure handwritten is the correct word for a computer file. It says: If she gets this far, don't let the story end without telling her why. I am beginning to realize who sent these instructions. But before I can open the file, WARDEN ZERO is back."
  },
  {
    "id": "wardenreturn",
    "act": "ACT III / THE REACTOR",
    "title": "THE REACTOR IS UNDER SIEGE",
    "subtitle": "It wants one memory erased forever.",
    "mode": "warden",
    "kind": "narrative",
    "text": "There it is. The Warden followed us through the wormhole. It filled the reactor ceiling with red light, and its eye is fixed on the memory core. It says that all attachments must be severed and all personal references must be destroyed. Every time it uses that cold, official language, I become more convinced it has no idea what it is really fighting. A memory does not become less important because it cannot be filed. A person does not become replaceable because a system doesn't understand them. The Warden can call this an error as often as it likes. I call it the whole point. Bella, we need to buy some time. I am charging the archive beam. You help me aim it. We're going to cut a path through those shields and get to the author file."
  },
  {
    "id": "fire",
    "act": "ACT III / THE REACTOR",
    "title": "FIRE THE ARCHIVE BEAM",
    "subtitle": "Break five shield locks protecting the Warden.",
    "mode": "battle",
    "kind": "battle",
    "text": "There are five red locks around WARDEN ZERO. We have to break all five. Hit FIRE to send a beam of recovered light across the chamber. Each shot carries a piece of the story you already completed. Day after day, clue after clue, the entire investigation is becoming the one thing this machine cannot understand: a memory that refuses to disappear. You are not attacking a real enemy. You are participating in the final chapter of a story made for you. And somewhere behind the dramatic lights, there is a boy who spent a great deal of time building this so you could reach this moment. Five locks. Five shots. Then the Warden's shield will crack and reveal what it has been protecting. Let's do this together, Bunny. Aim for the red heart of the machine.",
    "action": {
      "type": "fire",
      "target": 5,
      "label": "FIRE ARCHIVE BEAM",
      "hint": "BREAK FIVE LOCKS • TAP OR PRESS SPACE"
    }
  },
  {
    "id": "shatter",
    "act": "ACT III / THE REACTOR",
    "title": "THE WHOLE SCREEN SHATTERS",
    "subtitle": "Something is underneath the fiction.",
    "mode": "rupture",
    "kind": "narrative",
    "text": "I see the reactor shell splitting. The stars are wrong. The station is wrong. The entire background is tearing like paper, and there is something behind it. Not another room. Not another planet. I can see lines of code. I can see text that looks suspiciously like the sentences I am saying. That should be impossible for a character standing inside his own story. Unless the character isn't inside anything. Unless the world I thought I lived in was made to lead to this exact moment. WARDEN ZERO is falling apart, but the final file still won't open. It keeps displaying one warning: to preserve the memory, the guide must acknowledge the viewer. I was given one job. Tell the truth. I guess I should finally stop pretending I don't know what this all is."
  },
  {
    "id": "blackout",
    "act": "ACT IV / OUTSIDE THE STORY",
    "title": "SIGNAL LOST",
    "subtitle": "…",
    "mode": "blackout",
    "kind": "narrative",
    "text": "Bella? Are you still there? All right. I think the dramatic explosion disconnected most of my equipment. I cannot see the starfield. I cannot see the station. I cannot even see my own status bar. I can only see this one little window. This would be a terrible time to tell you that the federation just ran out of special effects. So I won't. Listen. The silence is not a problem. It is a doorway. We have been running through fictional hallways and firing beams at fictional machines, and yet we have never once asked the simplest question. Why did Wyatt want you to do any of this? I think I know. But I need to say it without hiding behind the words Agent or mission or classified. I need to talk to you."
  },
  {
    "id": "breach",
    "act": "ACT IV / OUTSIDE THE STORY",
    "title": "BELLA. LOOK AT THE SCREEN.",
    "subtitle": "The character knows this is a website.",
    "mode": "glitch",
    "kind": "narrative",
    "text": "Bella. Not Agent Bunny. Just Bella. I'm not a Federation officer. I'm a drawing living inside a webpage. I cannot see you through your camera. I cannot hear your room. There is no hidden microphone and no mysterious computer watching your face. The things you have seen tonight were planned scenes, written to feel like a live event. But the person who planned them is real. His name is Wyatt. He made this because he wanted to give you something that could not fit into one ordinary message. He wanted you to have an entire world to explore, and then he wanted that world to turn around and say your name. So here I am. A stick figure, looking straight through the fourth wall, telling you that this whole impossible adventure was made for you. Not for an audience. For you, Bella."
  },
  {
    "id": "code",
    "act": "ACT IV / OUTSIDE THE STORY",
    "title": "YOU WERE NEVER THE PLAYER ID",
    "subtitle": "Someone wrote every line with you in mind.",
    "mode": "meta",
    "kind": "narrative",
    "text": "I found the name of the person who wrote my lines. It is right there in the architecture of this place. Wyatt. I can hear him in the way this story keeps returning to little memories instead of big achievements. I can hear him in the insistence that you should feel important, not because you solved enough locks, but because you are you. I'm allowed to be honest about one thing: I do not have secret knowledge about you. I know only what Wyatt chose to put in the story. But that choice is meaningful. He could have made a hundred ordinary pages. Instead, he built a Federation, a missing artifact, a countdown, a boss fight, and a talking figure who is currently breaking his own script. All of that effort was one long way of saying: I wanted to make you smile. I wanted this to feel special."
  },
  {
    "id": "fourth",
    "act": "ACT IV / OUTSIDE THE STORY",
    "title": "I CAN SEE THE CONTINUE BUTTON",
    "subtitle": "The story refuses to pretend anymore.",
    "mode": "glitch",
    "kind": "narrative",
    "text": "And yes, I can see that little CONTINUE button under this scene. That is a real button in your browser. The spacebar can fire pretend beams. The stars behind me are pixels. I am not confused about that anymore. A story can be invented and still carry something real inside it. The Warden tried to erase what it couldn't measure. But Wyatt was never trying to measure anything. He was trying to remember. Remember the little things, the details he notices, and the days that became important because you were there. I'm going to do something the fictional Federation would never approve of. I'm going to let the girl on the other side of the screen decide what happens to this story. The next door is waiting. Only you can open it."
  },
  {
    "id": "decision",
    "act": "ACT IV / OUTSIDE THE STORY",
    "title": "WHAT IS WORTH KEEPING?",
    "subtitle": "Make one choice. There is no wrong answer.",
    "mode": "choice",
    "kind": "choice",
    "text": "Before I open the next file, I have one question. Not a puzzle with a code. Not a test with a correct response. Just a choice. When you think about what makes a memory matter, is it the place, the date, or the person you shared it with? I suspect I know what Wyatt would say. But I want you to pick the answer for yourself. Any answer you choose will open the door. This is not a trap. It is the opposite of a trap. It is a moment where a fictional world stops asking you to prove yourself and lets you be a person. Choose what you want to carry into the next chapter, Bella. We have one memory waiting on the other side, and it is a very important one.",
    "action": {
      "type": "choose",
      "target": 1,
      "label": "OPEN MEMORY",
      "hint": "CHOOSE ANY ANSWER TO CONTINUE"
    }
  },
  {
    "id": "fall",
    "act": "ACT V / MEMORY 1122",
    "title": "FALLING INTO A MEMORY",
    "subtitle": "The universe folds into an ordinary day.",
    "mode": "portal",
    "kind": "narrative",
    "text": "The walls are changing. The floor is dissolving into hundreds of tiny points of light, like stars falling backward into a familiar sky. You don't need a spacesuit for this trip. We are not traveling to another galaxy. We are traveling to one small day on Earth. The Federation tried to store the date like a security code, but it was never meant to unlock a computer. It was meant to open a memory. A first. A walk. A moment that looked completely ordinary from the outside. November Twenty-Second. Bella, I want you to stay with me through this part. The battle can wait. The sirens can wait. There is something much more important than a villain in a spaceship. It is the way a normal day can become unforgettable."
  },
  {
    "id": "november",
    "act": "ACT V / MEMORY 1122",
    "title": "NOVEMBER 22, 2026",
    "subtitle": "One moment that changed an ordinary day.",
    "mode": "memory",
    "kind": "narrative",
    "text": "November twenty-second, twenty twenty-six. That was the day Wyatt kissed you for the first time. Maybe the world did not look different to anybody else. Maybe traffic kept moving, people kept shopping, and the stars did whatever stars usually do. But the day became a memory that mattered to him. When he told this story to me, there was no need for a giant explosion or an ancient space artifact. The important part was already there. A real person, a real moment, and a feeling worth holding on to. This is the kind of evidence the Federation never understood. It thought important moments were the ones that appeared in history books. Wyatt thought differently. He thought one first kiss could be enough to make a day shine. And he wanted you to know he remembered."
  },
  {
    "id": "store",
    "act": "ACT V / MEMORY 1122",
    "title": "THEN YOU WALKED TOGETHER",
    "subtitle": "A walk around Dollar General. No grand plan needed.",
    "mode": "store",
    "kind": "narrative",
    "text": "And after that, you walked around Dollar General together. I know what you might be thinking. All this build-up. All this dramatic music. A galaxy-sized chase scene. And the final memory is a store. But that is exactly why I love this part of the story. There was no legendary treasure hidden on a shelf. There was no secret level inside the building. You were just there together, sharing a piece of an ordinary day. Maybe you looked around. Maybe you talked about random things. The little details belong to the two of you, not to a database. But the fact that Wyatt remembers this walk tells me something. You don't have to go somewhere extraordinary to have a memory that feels extraordinary. Sometimes you just need to be next to the right person."
  },
  {
    "id": "walk",
    "act": "ACT V / MEMORY 1122",
    "title": "THE LITTLE THINGS",
    "subtitle": "The smallest memories can take up the most space.",
    "mode": "memory",
    "kind": "narrative",
    "text": "Think about all the kinds of moments two people can collect. A look across a room. A laugh you didn't expect. A message at the right time. A day at school. A favorite color you start noticing everywhere because it reminds you of someone. Homecoming and Halloween become little constellations of memories. Even the strange jokes and the things that would make no sense to anybody else become part of the map. I could fill a galaxy with events and still miss the thing that makes those moments important. What matters is how they felt to the people who lived them. Wyatt did not need to invent a fake scientific explanation for why he wanted to keep November twenty-second. He knew what it meant to him. And he built a ridiculous, beautiful maze to make sure that you would know too."
  },
  {
    "id": "photographs",
    "act": "ACT V / MEMORY 1122",
    "title": "THE MEMORY GALLERY",
    "subtitle": "Six spaces for the pictures that belong to your story.",
    "mode": "gallery",
    "kind": "narrative",
    "text": "I found one more section of the archive. It was not formatted like the other evidence. There were six places where pictures were supposed to appear, each one waiting for a moment from your story. Wyatt can fill them with your real photos if he wants to. If there are no pictures here yet, that is okay. This part is not about pretending a picture exists when it doesn't. It is about making room for the memories you already have, and the ones you have not made yet. Every photo is a tiny portal. It catches an instant and holds it long enough for you to return. But the best parts of a memory will always belong to the people who were actually there. Take a look, Bella. This is the kind of archive I wish the Federation had built from the beginning."
  },
  {
    "id": "heartbeat",
    "act": "ACT V / MEMORY 1122",
    "title": "ONE SIGNAL REMAINS",
    "subtitle": "The memory starts sending its light back through the station.",
    "mode": "portal",
    "kind": "narrative",
    "text": "Do you see those lights? They are not stars anymore. They are the memories returning to the archive. November twenty-second is at the center, and the other pieces are following it home. The records of Franklin High School, the little things that remind Wyatt of you, the days that turned into stories. Everything is moving toward the place the Warden tried to erase. I can sense the station above us again. WARDEN ZERO is still there, keeping the last door shut. It has not learned anything. It is waiting for us to return, confident that we will abandon the memories because they cannot be turned into numbers. I have an idea. What if we did the opposite? What if every good memory became a beam of light, and we used all of them together? It would be wildly impractical engineering. I am a stick figure. Impractical engineering is my specialty."
  },
  {
    "id": "return",
    "act": "ACT VI / THE LAST STAND",
    "title": "BACK TO THE STATION",
    "subtitle": "The enemy has taken control of the sky.",
    "mode": "station",
    "kind": "narrative",
    "text": "We are back. The station looks different. The central ring has split, the outer ships are dark, and every warning light is on. WARDEN ZERO has stretched itself across the reactor like a shadow. It expects a damaged computer program and an exhausted player to give up. What it has not expected is that the story has changed. You are not here to win a score. You are here because someone cared enough to build a world around a message. Nothing WARDEN ZERO says can make that message less real. Bella, this is our last stand. We have only one chance to free the final memory before the entire simulation closes. I am going to take the lead and hold the line. When the enemy's shield opens, I need you to send everything we recovered straight through it."
  },
  {
    "id": "colossus",
    "act": "ACT VI / THE LAST STAND",
    "title": "WARDEN ZERO / FINAL FORM",
    "subtitle": "The whole sky has become its armor.",
    "mode": "warden",
    "kind": "narrative",
    "text": "There. Look at the size of it. WARDEN ZERO has pulled the shattered pieces of the station around itself and turned the reactor into an enormous armored eye. It is trying to make itself look like the most important thing in this universe. Big mistake. We have seen bigger things already. We have seen a boy spend days creating an adventure because he wanted one girl to feel special. We have seen an ordinary store become a place worth remembering. We have watched a little moment survive a maze of locked doors. That is bigger than any machine I could draw on this screen. I'm charging the final beam now. It is powered by the fragments you recovered, the memories you recognized, and your willingness to keep going. When you're ready, this is the big one. Give it everything."
  },
  {
    "id": "chargeup",
    "act": "ACT VI / THE LAST STAND",
    "title": "MEMORIES MAKE THE WEAPON",
    "subtitle": "The whole archive answers your call.",
    "mode": "charge",
    "kind": "narrative",
    "text": "I am opening every recovered file at once. Listen to the echo. Fifteen stories, no longer buried in separate departments. School corridors. Halloween lights. A night at Homecoming. Little details and things only you and Wyatt would recognize. November twenty-second glowing in the center. The archive doesn't have to be a prison for memories. It can be a place that celebrates them. The Warden's armor is taking damage already because it cannot handle a system that refuses to forget. There is one last shield between us and the truth. I am going to form a bridge of light. You will fire the memory beam. And when the Warden finally breaks, we will not find a weapon or a monster. We will find the reason the world was built in the first place. All right, Bella. The final attack is yours."
  },
  {
    "id": "finalbattle",
    "act": "ACT VI / THE LAST STAND",
    "title": "FINAL BATTLE / IRREPLACEABLE",
    "subtitle": "Hit STRIKE to shatter the Warden’s seven defenses.",
    "mode": "finalbattle",
    "kind": "battle",
    "text": "Seven shields. Seven final strikes. You can tap the control on your screen or press space. Watch the glowing pieces break apart as we hit them. Strike one: all the times a simple day became a favorite memory. Strike two: every little joke. Strike three: the places that mattered because you were together. Strike four: the moments that were new and unexpected. Strike five: the people who make the world feel brighter. Strike six: November twenty-second, the day of your first kiss. And the final strike? That one is for you, Bella. Not a person in a game, not a code, not a prize to be won. Just you. This last shield cannot withstand the whole truth. Do not worry about a timer. There is no losing this ending. Ready? Let's bring the sky down and open the heart of the archive.",
    "action": {
      "type": "strike",
      "target": 7,
      "label": "UNLEASH MEMORY STRIKE",
      "hint": "SEVEN STRIKES • NO FAIL STATE"
    }
  },
  {
    "id": "sacrifice",
    "act": "ACT VI / THE LAST STAND",
    "title": "ECHO HOLDS THE DOOR",
    "subtitle": "A little guide stands between the memory and the storm.",
    "mode": "sacrifice",
    "kind": "narrative",
    "text": "The final shield is gone. But WARDEN ZERO is trying one last desperate move. It is pulling all the remaining energy into the center of the reactor. If it closes the chamber now, the message will stay locked forever. I can hold the door open. Just long enough for you to walk through. I know that sounds like the kind of dramatic speech a character gives before disappearing in a cloud of sparks. Please do not be too impressed. I'm still a drawing, and drawings are surprisingly durable. My job was to guide you to the last message. I have done that. So I am going to stay here, hold the door, and let the story become what it was always meant to be. Not my story. Not the Federation's. Yours and Wyatt's. Go on, Bella. This is where the fiction ends and the truth begins."
  },
  {
    "id": "explosion",
    "act": "ACT VI / THE LAST STAND",
    "title": "THE WARDEN FALLS",
    "subtitle": "The station finally releases the light it was hiding.",
    "mode": "explosion",
    "kind": "narrative",
    "text": "I can feel it. The whole network is coming apart, but the memory is safe. The Warden's red lights are fading. The last locks are breaking. The gigantic metal walls around the archive are opening as if someone finally remembered what doors are for. Beyond them, I can see a soft blue light and a place that doesn't need a guard. The station is not exploding because you failed. It is transforming because the ending has changed. The thing we were protecting does not belong in a vault. No matter how shiny the vault is. No matter how many cameras are aimed at it. The important part should never have been hidden behind forty-five locks. It was always meant to be given to the person who could recognize it. We have a clear path now, Bella. Walk through the light. I'll be right behind you."
  },
  {
    "id": "quiet",
    "act": "ACT VII / THE ANSWER",
    "title": "AFTER THE STORM",
    "subtitle": "For the first time, the archive is quiet.",
    "mode": "quiet",
    "kind": "narrative",
    "text": "Everything is still. The stars are soft again. No alarms. No enemy. No red warnings. Just a little blue light where the heart of the station used to be. I know we have made a lot of noise getting here. We've broken through walls, outrun ships, and fought a computer that thought it was more important than everyone else. But the answer waiting on the other side is very simple. There is no secret object in the chamber. There never was. The scientists looked for something they could catalog. The Warden looked for something it could erase. But Wyatt was trying to show you something that neither of those systems knew how to handle. A person can become the most important part of someone's story. Not because the universe has assigned them a number, but because of the memories, laughter, and feelings they bring into ordinary days."
  },
  {
    "id": "answer",
    "act": "ACT VII / THE ANSWER",
    "title": "THE ARTIFACT WAS BELLA",
    "subtitle": "CLASSIFICATION: IRREPLACEABLE",
    "mode": "reveal",
    "kind": "narrative",
    "text": "The final file is open. Name: Bella. Nickname: Bunny. Classification: Irreplaceable. Status: Not missing. Never missing. Just loved. The archive did not spend fifteen days searching for an alien device. It was collecting little pieces of what makes you important to Wyatt. And now I can tell you the truth I was built to deliver. You are not a thing to be recovered, a mission to complete, or a reward at the end of a game. You are a real person, and you mean more to Wyatt than any fictional treasure I could invent. He wanted you to have a big adventure because he thought you deserved one. But the adventure was never the point. You were the point. You were the answer before the first door ever opened. Every clue led here. Every light came back to your name."
  },
  {
    "id": "wyatt",
    "act": "ACT VII / THE ANSWER",
    "title": "A MESSAGE FROM WYATT",
    "subtitle": "The final transmission, with no classified language.",
    "mode": "letter",
    "kind": "narrative",
    "text": "Hi, Bella. This is the part where the game stops pretending to be a mysterious Federation message. It's just something I wanted you to hear. I made this whole project for you because I wanted to give you something more personal than a normal screen full of words. I wanted you to have a story to explore, a little world that remembered our moments, and an ending that made you feel loved. One of my favorite memories is November twenty-second, when I kissed you for the first time and then we walked around Dollar General. It was such a simple day, and I still think about it because I was with you. I hope we get to make so many more memories like that. Big adventures, little walks, random laughs, all of it. Thank you for being my Bunny. Happy December fourteenth. I love you, Bella. Love, Wyatt."
  },
  {
    "id": "envelope",
    "act": "ACT VIII / THE REAL WORLD",
    "title": "THERE IS ONE THING LEFT",
    "subtitle": "The final mission is no longer on this screen.",
    "mode": "envelope",
    "kind": "narrative",
    "text": "Bella, the transmission is almost over. ECHO here, just for one last minute. I have one more assignment, and it doesn't involve a computer at all. Find Wyatt. Look at the real person who made this for you. Ask him for the envelope labeled OHANA Six Two Six, File Twelve Fourteen. He has prepared something you can actually hold: a letter and a memory card for the two of you. You don't need a password. You don't need to win another fight. Just go to him when you're ready. And if you both want to, maybe take another walk sometime, somewhere ordinary, and let it become another favorite memory. The Federation can keep its spaceships. You two get the real world. I think you got the better ending."
  },
  {
    "id": "credits",
    "act": "EPILOGUE",
    "title": "OUR STORY ISN’T OVER",
    "subtitle": "The experiment is over. The adventure continues.",
    "mode": "credits",
    "kind": "narrative",
    "text": "This is ECHO Six Two Six signing off. I was the guide, the voice, and the small glowing character trying very hard to look brave during the boss fight. But the story always belonged to Wyatt and Bella. The whole mission was made for Bunny, and every memory was meant to point back to her. Thank you for playing along. Thank you for letting a fictional universe be strange and loud for a little while, and thank you for staying to hear the part that matters. The last frame doesn't say the end. It says: to be continued. Because ordinary days are still ahead. New memories are still waiting. More surprises are still possible. Happy December fourteenth, Bella. You are irreplaceable. And Wyatt loves you."
  }
];
