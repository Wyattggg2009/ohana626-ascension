/* Project OHANA-626 | Fictional investigation | Public story only — no answer keys */
export const CHAPTERS = [
  {
    "id": 1,
    "date": "2026-11-30",
    "dateLabel": "November 30",
    "title": "Incident 626-A",
    "tag": "THE FIRST SIGNAL",
    "subject": "INCIDENT REPORT 626-A",
    "tagline": "Something blue has interrupted the ordinary.",
    "scene": "At 09:14, an official Federation alarm lit up the command deck. A small blue experiment disregarded seventeen direct orders and vanished with a file nobody remembers creating. The signature on that file was not a number. It was the beginning of a story.",
    "memory": "The first report said there was no cause for alarm. It then immediately admitted there was some cause for alarm. That sounds about right for Experiment 626.",
    "exhibits": {
      "dispatch": {
        "title": "THE ORIGINAL REPORT",
        "lines": [
          "At approximately 09:14 the sensors detected Experimental Lifeform 626.",
          "The incident code is 626-A, not 626-B.",
          "The first clearance bolt verifies the experiment number."
        ]
      },
      "surveillance": {
        "title": "CHROMATIC SENSOR",
        "lines": [
          "Threat status in the email: Blue.",
          "Other colors on the sensor display are decoys: RED / GREEN / AMBER.",
          "Trust the actual incident email, not the emergency display."
        ]
      },
      "laboratory": {
        "title": "CLOCK RECOVERY",
        "lines": [
          "The Federation recorded the incident at nine hours and fourteen minutes.",
          "To enter a time, remove its punctuation and keep all four digits.",
          "For example, 08:05 becomes 0805."
        ]
      },
      "registry": {
        "title": "PERSONNEL NOTE",
        "lines": [
          "Recipient: Agent Bella.",
          "Case status: OPEN.",
          "17 ignored orders. One very suspicious blue lifeform."
        ]
      }
    },
    "locks": [
      {
        "title": "EXPERIMENT IDENTIFIER",
        "prompt": "Which three-digit experiment number triggered the first alert?",
        "source": "dispatch",
        "format": "THREE DIGITS"
      },
      {
        "title": "TIMESTAMP RECONSTRUCTION",
        "prompt": "What time did the first sensor alert occur? Enter four digits, no colon.",
        "source": "laboratory",
        "format": "FOUR DIGITS"
      },
      {
        "title": "THREAT CLASSIFICATION",
        "prompt": "What color did the original email assign as the threat level?",
        "source": "surveillance",
        "format": "ONE COLOR"
      }
    ],
    "voice": "Agent Bella, this is Galactic Federation Command. On November twentieth, our scanners detected Experimental Lifeform Six Two Six at precisely zero nine fourteen. The creature has already ignored seventeen orders. Do not panic. We are, however, officially beginning to panic. Three pieces of the original report will authenticate your first case. Trust what was sent to you. Welcome to Project Ohana.",
    "icon": "✦"
  },
  {
    "id": 2,
    "date": "2026-12-01",
    "dateLabel": "December 1",
    "title": "The Bunny File",
    "tag": "PERSON OF INTEREST",
    "subject": "SURVEILLANCE UPDATE",
    "tagline": "The suspect has the nicest smile on record.",
    "scene": "A second report arrives. The investigators have a name, but they do not quite understand it. Their person of interest is listed under a small, affectionate alias. Surveillance reports a dramatic rise in smiling activity wherever she appears.",
    "memory": "The Federation calls her suspicious. Wyatt would probably call her his favorite person.",
    "exhibits": {
      "dispatch": {
        "title": "ALIAS LIST",
        "lines": [
          "PERSON OF INTEREST / Alias recorded: BUNNY.",
          "Other aliases were crossed out: COBRA, FALCON, COMET.",
          "Use the exact alias on the original Day 2 email."
        ]
      },
      "surveillance": {
        "title": "SMILE ACTIVITY",
        "lines": [
          "Anomaly detected: increased smiling activity.",
          "The signal label is SMILE, not DANGER.",
          "The scanner records this whenever the suspect enters a room."
        ]
      },
      "laboratory": {
        "title": "IDENTITY MATCH",
        "lines": [
          "The protected file identifies Agent BELLA.",
          "Alias: Bunny. Identity and alias are not the same field.",
          "For the third bolt enter the actual first name."
        ]
      },
      "registry": {
        "title": "THREAT ASSESSMENT",
        "lines": [
          "Occupation: UNKNOWN. Threat level: UNDER REVIEW.",
          "The main suspect has done nothing more alarming than make somebody smile.",
          "Classification has been moved from danger to curiosity."
        ]
      }
    },
    "locks": [
      {
        "title": "THE ALIAS",
        "prompt": "What is the person of interest’s alias?",
        "source": "dispatch",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE ANOMALY",
        "prompt": "What single word is the surveillance system measuring more of?",
        "source": "surveillance",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE IDENTITY",
        "prompt": "What is the person of interest’s real first name?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Surveillance update. A person of interest has entered the investigation. Her alias is Bunny. Nobody here can explain why every room gets a little brighter when she walks into it. Our systems detect an alarming increase in smiling. The suspect is not under arrest. She has, however, become impossible to ignore.",
    "icon": "♡"
  },
  {
    "id": 3,
    "date": "2026-12-02",
    "dateLabel": "December 2",
    "title": "Classroom Zero",
    "tag": "ORIGIN COORDINATES",
    "subject": "RECOVERED EVIDENCE #001",
    "tagline": "Some coordinates are not on a map.",
    "scene": "A location appears in the recovered records: Franklin High School. The Federation tries to classify a classroom as a dangerous anomaly. What they do not know is that two people once sat together there, talked, and started learning each other’s worlds.",
    "memory": "A room can be ordinary to everyone else and still become one of the places you would remember forever.",
    "exhibits": {
      "dispatch": {
        "title": "LOCATION RECORD",
        "lines": [
          "RECOVERED LOCATION: Franklin High School.",
          "The school identifier for this file is FRANKLIN.",
          "The Federation redacted the room but forgot the school."
        ]
      },
      "surveillance": {
        "title": "SEATING CHART",
        "lines": [
          "Two students were recorded sitting together.",
          "Relationship to investigation: early conversations.",
          "The arrangement label used by Personnel is TOGETHER."
        ]
      },
      "laboratory": {
        "title": "CLASSROOM INVENTORY",
        "lines": [
          "Witness recalls: Mr. Pergrem’s class.",
          "The teacher surname is written as PERGREM.",
          "The name survives the redaction process."
        ]
      },
      "registry": {
        "title": "ARCHIVED WITNESS",
        "lines": [
          "Location: Franklin High School.",
          "Teacher: Mr. Pergrem.",
          "The important detail: she liked sitting with him."
        ]
      }
    },
    "locks": [
      {
        "title": "SCHOOL LOCATION",
        "prompt": "Which high school appears on the Day 3 report? Use the school’s first word.",
        "source": "dispatch",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "INSTRUCTOR RECORD",
        "prompt": "What is the teacher’s last name?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "SEATING STATUS",
        "prompt": "What word describes where the two students chose to be?",
        "source": "surveillance",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Evidence recovery completed. The coordinates do not lead to another planet. They lead to Franklin High School, to Mr. Pergrem’s classroom, and to two people sitting together. Strange. There are no stolen artifacts here. Only conversations that somebody cared enough to remember.",
    "icon": "⌂"
  },
  {
    "id": 4,
    "date": "2026-12-03",
    "dateLabel": "December 3",
    "title": "Two Letters",
    "tag": "THE FIRST GREETING",
    "subject": "SECURITY BREACH",
    "tagline": "An entire timeline changes because of one tiny word.",
    "scene": "A record escaped containment. It was only three words long: “She said hi.” Command expected a coded confession. Instead, the breach revealed an ordinary beginning. Something as small as a hello can be the first frame of a much bigger story.",
    "memory": "Wyatt remembers Bella saying hi. Not because it was a spectacular moment. Because it was the beginning.",
    "exhibits": {
      "dispatch": {
        "title": "LEAKED TEXT",
        "lines": [
          "SECURITY BREACH: “She said hi.”",
          "The final spoken word is HI.",
          "Nothing else in this transcript was audible."
        ]
      },
      "surveillance": {
        "title": "LANGUAGE ANALYSIS",
        "lines": [
          "HI consists of exactly TWO letters.",
          "For numerical entry, use the number of characters, not the number of words.",
          "Spaces and punctuation are ignored by the lock."
        ]
      },
      "laboratory": {
        "title": "MEMORY INDEX",
        "lines": [
          "The first greeting is filed under BEGINNING.",
          "It was not a dramatic speech, just a simple hello.",
          "The classification code is a word, not a date."
        ]
      },
      "registry": {
        "title": "UNAUTHORIZED FOOTNOTE",
        "lines": [
          "Analysts have forgotten how clocks work.",
          "Still, nobody has forgotten that first greeting.",
          "Warning: tiny moments have a habit of becoming enormous."
        ]
      }
    },
    "locks": [
      {
        "title": "THE LEAK",
        "prompt": "What was the exact word Bella said?",
        "source": "dispatch",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "CHARACTER COUNT",
        "prompt": "How many letters are in that greeting?",
        "source": "surveillance",
        "format": "ONE DIGIT"
      },
      {
        "title": "MEMORY CLASSIFICATION",
        "prompt": "According to the Memory Index, what did that moment become?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Alert. A highly classified record has escaped. Its contents: She said hi. Command is confused. How can two letters trigger a whole incident? We have checked the clocks. They are still not working. But one thing is becoming clear. Not every extraordinary story starts with extraordinary words.",
    "icon": "✉"
  },
  {
    "id": 5,
    "date": "2026-12-04",
    "dateLabel": "December 4",
    "title": "Homecoming Frequency",
    "tag": "HIGH HAPPINESS LEVELS",
    "subject": "EVIDENCE #002",
    "tagline": "A dance. A night. A memory that stayed.",
    "scene": "Historical footage reveals Homecoming. Multiple witnesses report elevated happiness levels, a mysterious pull toward each other, and one dance filed under “emotional interference.” The Federation keeps searching for a technical explanation.",
    "memory": "Some nights feel like a little piece of a movie, especially when you are with the right person.",
    "exhibits": {
      "dispatch": {
        "title": "EVENT ARCHIVE",
        "lines": [
          "Historical reference: HOMECOMING.",
          "It was explicitly named in the fifth email.",
          "No other school event matches the recovered marker."
        ]
      },
      "surveillance": {
        "title": "CAMERA LOG",
        "lines": [
          "Event category in the archive: DANCE.",
          "The camera cannot measure feelings, just the motion of the crowd.",
          "The two of them were there together."
        ]
      },
      "laboratory": {
        "title": "EMOTION MONITOR",
        "lines": [
          "Multiple witnesses reported unusually high happiness.",
          "Scientific shorthand for the recorded emotion: JOY.",
          "The scanner reports no actual danger."
        ]
      },
      "registry": {
        "title": "FEDERATION NOTE",
        "lines": [
          "Case remains open.",
          "The alleged artifact appears to be made of moments, not metal.",
          "This is not a normal criminal investigation."
        ]
      }
    },
    "locks": [
      {
        "title": "EVENT IDENTIFICATION",
        "prompt": "Which event was mentioned in the Day 5 email?",
        "source": "dispatch",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "EVENT CATEGORY",
        "prompt": "What single word does the camera file use for the kind of event?",
        "source": "surveillance",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "EMOTIONAL FREQUENCY",
        "prompt": "What three-letter emotion does the monitor use for that night?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Historical evidence has been recovered. Homecoming. Our detectors registered unusually high levels of happiness, and frankly the science division does not know what to do with that. This is not a dangerous anomaly. It is a memory. The kind you keep playing back without needing a camera.",
    "icon": "✧"
  },
  {
    "id": 6,
    "date": "2026-12-05",
    "dateLabel": "December 5",
    "title": "Too Bright",
    "tag": "PUBLIC SAFETY INCIDENT",
    "subject": "PUBLIC SAFETY NOTICE",
    "tagline": "The only real danger might have been the flashlight.",
    "scene": "Federation Safety has received complaints. People are shining bright lights toward unsuspecting bystanders, and the report advises sunglasses. The evidence is technically a safety issue. The memory behind it is wonderfully ridiculous.",
    "memory": "Sometimes the funniest thing is the thing that went wrong while you were together.",
    "exhibits": {
      "dispatch": {
        "title": "INCIDENT COMPLAINT",
        "lines": [
          "Safety notice: BRIGHT LIGHTS directed toward bystanders.",
          "The object responsible is recorded as LIGHTS.",
          "No alien weapon has been recovered."
        ]
      },
      "surveillance": {
        "title": "WITNESS INTERVIEW",
        "lines": [
          "Witnesses were temporarily blinded.",
          "Protective equipment recommended: SUNGLASSES.",
          "The note was written with an unreasonable amount of seriousness."
        ]
      },
      "laboratory": {
        "title": "REACTION SENSOR",
        "lines": [
          "After the incident: laughter.",
          "The official reaction code is LAUGHTER.",
          "Nobody filed a real emergency; it became a shared joke."
        ]
      },
      "registry": {
        "title": "PUBLIC SAFETY",
        "lines": [
          "Federation advises wearing sunglasses.",
          "The incident is a memory, not a challenge to repeat.",
          "Please do not blind anyone for the investigation."
        ]
      }
    },
    "locks": [
      {
        "title": "THE OBJECT",
        "prompt": "What caused the overly dramatic safety report?",
        "source": "dispatch",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "SAFETY EQUIPMENT",
        "prompt": "What did the original report advise people to wear?",
        "source": "surveillance",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "FINAL REACTION",
        "prompt": "Which word describes how the incident was remembered?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Public safety notice. Several bystanders report an unexpected attack by bright lights. Sunglasses have been advised. The investigation is still open, mostly because the witnesses cannot stop laughing. Agent Bella, you are not being accused of a crime. Just making a very memorable moment with someone.",
    "icon": "☼"
  },
  {
    "id": 7,
    "date": "2026-12-06",
    "dateLabel": "December 6",
    "title": "The Blue Menace",
    "tag": "EXPERIMENT SIGHTING",
    "subject": "UNUSUAL DETECTION EVENT",
    "tagline": "Small. Blue. Friendly. Chaos. You know who.",
    "scene": "Four descriptors arrive across a scrambled channel. The Federation finally connects the signal to a familiar little blue troublemaker. But under all his chaos is the idea that family is not something you abandon.",
    "memory": "Stitch is one of Bella’s favorites. A blue mischief-maker who cares about belonging is exactly the kind of witness this story needed.",
    "exhibits": {
      "dispatch": {
        "title": "SPECIMEN FILE",
        "lines": [
          "Serial number: EXPERIMENT 626.",
          "Species designation is not necessary for this lock.",
          "The number is the entire first code."
        ]
      },
      "surveillance": {
        "title": "COLOR SPECTRUM",
        "lines": [
          "The suspect is SMALL and FRIENDLY.",
          "The verified color is BLUE.",
          "Multiple cameras falsely reported PURPLE."
        ]
      },
      "laboratory": {
        "title": "CHARACTER RECOGNITION",
        "lines": [
          "The classic fictional character is STITCH.",
          "The four reported traits: blue / friendly / small / chaotic.",
          "The third bolt asks for the character name."
        ]
      },
      "registry": {
        "title": "FEDERATION DISCLAIMER",
        "lines": [
          "626 has ignored seventeen orders.",
          "The creature may have misplaced the archive.",
          "Do not let him near the filing cabinet."
        ]
      }
    },
    "locks": [
      {
        "title": "SPECIMEN NUMBER",
        "prompt": "What experiment number is connected to this little creature?",
        "source": "dispatch",
        "format": "THREE DIGITS"
      },
      {
        "title": "SIGNAL COLOR",
        "prompt": "Which color did the Day 7 detector list?",
        "source": "surveillance",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "CHARACTER ID",
        "prompt": "Who fits all four traits in the Day 7 email?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Federation scanners have identified the source of the chaos. Small. Blue. Friendly. Absolutely incapable of following instructions. Experiment Six Two Six. Some call him Stitch. The lab is worried about what he has stolen. I am beginning to think he is trying to teach us something about who belongs in a family.",
    "icon": "✦"
  },
  {
    "id": 8,
    "date": "2026-12-07",
    "dateLabel": "December 7",
    "title": "Properties of an Artifact",
    "tag": "VALUE UNMEASURABLE",
    "subject": "ARTIFACT UPDATE",
    "tagline": "The most valuable things cannot be replaced.",
    "scene": "The Artifact Recovery Team has narrowed its findings to four properties: kind, intelligent, valuable, and extremely difficult to replace. There is still no image of the artifact. There is, however, a pattern in every witness statement.",
    "memory": "Wyatt keeps noticing Bella’s kindness, her intelligence, and that smile that makes ordinary days better.",
    "exhibits": {
      "dispatch": {
        "title": "TRAIT REPORT",
        "lines": [
          "First confirmed characteristic: KIND.",
          "A second reviewer wrote CARING beside it.",
          "For the first code use the original four-letter characteristic."
        ]
      },
      "surveillance": {
        "title": "COGNITIVE REPORT",
        "lines": [
          "Original phrasing: INTELLIGENT.",
          "The short classification code is SMART.",
          "This is not a test score. It is admiration."
        ]
      },
      "laboratory": {
        "title": "VALUE REPORT",
        "lines": [
          "Third property: VALUABLE.",
          "The fourth is “extremely difficult to replace.”",
          "The third code uses the property from the official report, not the final classification."
        ]
      },
      "registry": {
        "title": "ARTIFACT SEARCH",
        "lines": [
          "No weight recorded. No serial number.",
          "The object may not be an object.",
          "This suspicion remains classified until the finale."
        ]
      }
    },
    "locks": [
      {
        "title": "THE FIRST TRAIT",
        "prompt": "What four-letter trait appears first in the recovery report?",
        "source": "dispatch",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE SECOND TRAIT",
        "prompt": "What five-letter word does the cognitive report use?",
        "source": "surveillance",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE THIRD TRAIT",
        "prompt": "Which word from the original report describes the artifact’s worth?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Artifact update. We have a problem. The missing artifact does not behave like an artifact. It cannot be weighed, scanned, or numbered. Our records say kind, intelligent, valuable, and extremely difficult to replace. I do not yet have a name. I do have a feeling this case is getting personal.",
    "icon": "◇"
  },
  {
    "id": 9,
    "date": "2026-12-08",
    "dateLabel": "December 8",
    "title": "Four Strange Keywords",
    "tag": "THE FAVORITES INDEX",
    "subject": "PRIORITY TRANSMISSION",
    "tagline": "The records are finally talking about her world.",
    "scene": "Four unrelated words arrive in a priority transmission: Lion King, Halloween, Monster, Wolf. The Federation insists this is nonsensical. A person who knows Bella, though, can see exactly why those words belong in the same folder.",
    "memory": "A lion, a wolf, a Halloween night, and a Monster can all live in one little collection of things Bella loves.",
    "exhibits": {
      "dispatch": {
        "title": "THE FOUR KEYS",
        "lines": [
          "RECOVERED: LION KING / HALLOWEEN / MONSTER / WOLF.",
          "The Disney movie title is written as LION KING.",
          "Do not include a space when entering the code."
        ]
      },
      "surveillance": {
        "title": "ENERGY INVENTORY",
        "lines": [
          "Recovered snack and drink references include MONSTER.",
          "The energy drink entry is spelled MONSTER.",
          "This is a clue about preferences, not a recommendation to drink caffeine."
        ]
      },
      "laboratory": {
        "title": "CREATURE INDEX",
        "lines": [
          "The animal in the keywords that howls is WOLF.",
          "The other animal reference is from a Disney movie.",
          "Use the howling animal for the third lock."
        ]
      },
      "registry": {
        "title": "HOLIDAY ARCHIVE",
        "lines": [
          "Seasonal note: HALLOWEEN.",
          "The record also mentions a lion and a drink.",
          "Command remains baffled by the list."
        ]
      }
    },
    "locks": [
      {
        "title": "THE DISNEY FILE",
        "prompt": "Which movie title appears in the priority keyword list?",
        "source": "dispatch",
        "format": "MOVIE TITLE"
      },
      {
        "title": "THE DRINK FILE",
        "prompt": "Which energy drink brand appears in the recovered keywords?",
        "source": "surveillance",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE CREATURE FILE",
        "prompt": "Which animal in that list is known for howling?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Priority transmission. The Federation has intercepted four words: Lion King. Halloween. Monster. Wolf. Our analysts believe someone sat on the keyboard. I disagree. These do not look random. They look like the kind of details you learn when you pay attention to someone you really care about.",
    "icon": "☾"
  },
  {
    "id": 10,
    "date": "2026-12-09",
    "dateLabel": "December 9",
    "title": "The Last Email",
    "tag": "CONTAINMENT FAILURE",
    "subject": "EMERGENCY ALERT",
    "tagline": "The messages stop. The mission begins.",
    "scene": "The tenth email is different. The report says containment has failed and the investigation can no longer continue through email. A field operative is requested. The assigned operative is Bella. The destination is not a spaceship: it is this very website.",
    "memory": "The first ten emails were not the adventure. They were the invitation.",
    "exhibits": {
      "dispatch": {
        "title": "FINAL BULLETIN",
        "lines": [
          "CONTAINMENT HAS FAILED.",
          "The investigation can no longer continue through EMAIL.",
          "The first lock checks which communication method is ending."
        ]
      },
      "surveillance": {
        "title": "FIELD ASSIGNMENT",
        "lines": [
          "A FIELD operative is required immediately.",
          "Recipient: Agent Bella / Bunny.",
          "The Federation has officially run out of emails."
        ]
      },
      "laboratory": {
        "title": "COMMAND PHRASE",
        "lines": [
          "Last line of the original message: “Begin the investigation.”",
          "The activation word is BEGIN.",
          "The rest of the instruction is narrative, not part of the code."
        ]
      },
      "registry": {
        "title": "OFFICIAL THREAT",
        "lines": [
          "Potential consequences: confusion; more emails; additional confusion.",
          "Emergency alert issued November 29.",
          "Case window activates November 30 at 8 AM Eastern."
        ]
      }
    },
    "locks": [
      {
        "title": "THE OLD CHANNEL",
        "prompt": "Which communication channel can no longer carry the investigation?",
        "source": "dispatch",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE NEW ROLE",
        "prompt": "What kind of operative does the urgent message request?",
        "source": "surveillance",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "ACTIVATION WORD",
        "prompt": "What is the first word of the final instruction, “___ the investigation”?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Emergency alert. Containment has failed. We can no longer rely on email. Agent Bella, the only way forward is to enter the classified case system. Do not be alarmed by the number of doors. Do not trust the tiny blue creature. And under absolutely no circumstances let the Federation send you ten more emails. Begin the investigation.",
    "icon": "⚡"
  },
  {
    "id": 11,
    "date": "2026-12-10",
    "dateLabel": "December 10",
    "title": "The Block Signal",
    "tag": "PUZZLE MEMORY",
    "subject": "BLOCK BLAST PROTOCOL",
    "tagline": "Even the games she likes are part of the map.",
    "scene": "Somebody left a strange grid behind: colored tiles, perfectly fitted pieces, and a tiny instruction to make room for what matters. The block puzzle does not seem relevant until the archive cross-checks Bella’s favorite game.",
    "memory": "Block Blast is part of Bella’s world. Wyatt wanted even her little everyday favorites to have a place in the mission.",
    "exhibits": {
      "dispatch": {
        "title": "GAME TITLE",
        "lines": [
          "The verified puzzle game is BLOCK BLAST.",
          "Recorded under the code BLOCKBLAST.",
          "The title has two words; the lock ignores spaces."
        ]
      },
      "surveillance": {
        "title": "COLOR GRID",
        "lines": [
          "Recovered row: BLUE / BLUE / EMPTY.",
          "Recovered row: BLUE / EMPTY / BLUE.",
          "Count ONLY the four blue tiles."
        ]
      },
      "laboratory": {
        "title": "SCOREBOARD",
        "lines": [
          "A chain of well-placed clears is logged as a COMBO.",
          "The third clearance code is COMBO.",
          "The puzzle asks about the label, not a score."
        ]
      },
      "registry": {
        "title": "HANDLER ANNOTATION",
        "lines": [
          "Sometimes it is less about filling every space.",
          "Sometimes it is about finding how the pieces fit.",
          "File flagged as emotionally suspicious."
        ]
      }
    },
    "locks": [
      {
        "title": "GAME RECOGNITION",
        "prompt": "Which block-fitting game did the archive identify?",
        "source": "dispatch",
        "format": "GAME TITLE"
      },
      {
        "title": "GRID COUNT",
        "prompt": "How many BLUE tiles are shown in the two recovered rows?",
        "source": "surveillance",
        "format": "ONE DIGIT"
      },
      {
        "title": "SCORING LABEL",
        "prompt": "What word does the scoreboard use for chained clears?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "A new signal has appeared. It is not a military code. It is a game. Block Blast. Our engineers have stared at it for two hours and are doing terribly. Agent Bella, you might be better qualified. It turns out even the little things you enjoy leave a fingerprint in a story.",
    "icon": "▦"
  },
  {
    "id": 12,
    "date": "2026-12-11",
    "dateLabel": "December 11",
    "title": "A Very Unusual Shopping List",
    "tag": "COMFORT INDEX",
    "subject": "RECOVERED FAVORITES",
    "tagline": "Some of the nicest clues are almost ridiculous.",
    "scene": "The archive produces a list that looks like someone was hungry when they wrote it: Monster, steak, bread, chocolate. The Federation tries to identify a criminal motive. Wyatt recognizes it as the quiet, funny details that make someone herself.",
    "memory": "Love can look like remembering the big moments. It can also look like remembering what somebody likes to eat.",
    "exhibits": {
      "dispatch": {
        "title": "BEVERAGE RECORD",
        "lines": [
          "The named beverage on the list is MONSTER.",
          "The system treats it only as a keyword in a fictional clue.",
          "The first gate asks for the brand."
        ]
      },
      "surveillance": {
        "title": "BAKERY RECORD",
        "lines": [
          "Food entry 02: BREAD.",
          "Other lines in the file mention STEAK and CHOCOLATE.",
          "The second lock is the bakery item."
        ]
      },
      "laboratory": {
        "title": "DESSERT RECORD",
        "lines": [
          "The sweet entry on the list is CHOCOLATE.",
          "It is not a code for an actual purchase.",
          "Use the whole word for the third gate."
        ]
      },
      "registry": {
        "title": "PERSONAL FILE",
        "lines": [
          "Somebody wrote all these details down.",
          "Not because the Federation requested them.",
          "Because they were worth remembering."
        ]
      }
    },
    "locks": [
      {
        "title": "THE DRINK",
        "prompt": "Which beverage brand is in the recovered favorites?",
        "source": "dispatch",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE BAKERY",
        "prompt": "What food item is filed in the bakery record?",
        "source": "surveillance",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE SWEET FILE",
        "prompt": "What treat is listed in the dessert record?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Recovered favorites. The evidence team has discovered a shopping list. Monster. Steak. Bread. Chocolate. The chief inspector thinks this is a grocery delivery. I think it is proof that somebody was paying attention. The files are getting less like a criminal case and more like a love story.",
    "icon": "☕"
  },
  {
    "id": 13,
    "date": "2026-12-12",
    "dateLabel": "December 12",
    "title": "A Wolf in the Moonlight",
    "tag": "HALLOWEEN ARCHIVE",
    "subject": "MIDNIGHT TRANSMISSION",
    "tagline": "The dark is a little less scary with someone beside you.",
    "scene": "Halloween memories surface beneath a moonlit wolf emblem. What looked like a frightening signal is simply another shared chapter. The archive fills the screen with night-blue stars and enough dramatic static to make the Federation regret its entire career.",
    "memory": "Halloween, wolves, and Bella’s favorite color are all parts of the same little universe.",
    "exhibits": {
      "dispatch": {
        "title": "CALENDAR ENTRY",
        "lines": [
          "Recovered celebration: HALLOWEEN.",
          "This is the fall holiday referenced in the earlier email.",
          "The code is the holiday name."
        ]
      },
      "surveillance": {
        "title": "MOONLIT TRACKS",
        "lines": [
          "The creature marked beside the moon is a WOLF.",
          "Other candidates included lion, rabbit and fox.",
          "The howling trace is the verified clue."
        ]
      },
      "laboratory": {
        "title": "NIGHT PALETTE",
        "lines": [
          "The protected color index reads BLUE.",
          "A secondary color sample reads silver.",
          "The third lock wants the protected favorite color."
        ]
      },
      "registry": {
        "title": "FEDERATION MARGIN",
        "lines": [
          "A scary story does not have to be sad.",
          "Some nights are just another memory worth keeping.",
          "The transmission ends with a smile."
        ]
      }
    },
    "locks": [
      {
        "title": "THE HOLIDAY",
        "prompt": "Which celebration appears in the Halloween archive?",
        "source": "dispatch",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE ANIMAL",
        "prompt": "Which howling creature is marked on the moonlit tracks?",
        "source": "surveillance",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE COLOR",
        "prompt": "What is Bella’s protected favorite color in the palette?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Midnight transmission. Our scanners are picking up a wolf beneath a Halloween moon. The signal is blue. The Federation says this should be terrifying. But I keep finding traces of laughter and memories, and the more I investigate, the more I suspect the real mystery is how much someone can care about one person.",
    "icon": "☽"
  },
  {
    "id": 14,
    "date": "2026-12-13",
    "dateLabel": "December 13",
    "title": "The Date That Matters",
    "tag": "0914 FILE",
    "subject": "ANNIVERSARY ANOMALY",
    "tagline": "Some dates are worth protecting.",
    "scene": "The case clock reaches a hidden calendar file marked 09/14. The Federation calls it a scheduling irregularity. To Wyatt and Bella, it is September 14—the anniversary date at the heart of the puzzle that started all of this.",
    "memory": "A date becomes special because of who you share it with. The archive knows this one belongs to the two of you.",
    "exhibits": {
      "dispatch": {
        "title": "CALENDAR FILE",
        "lines": [
          "The anniversary month is SEPTEMBER.",
          "The numeric stamp is 09/14.",
          "The first bolt wants the month spelled out."
        ]
      },
      "surveillance": {
        "title": "DATE COUNTER",
        "lines": [
          "The protected day of the month is 14.",
          "Month = 09. Day = 14.",
          "The second bolt wants the day number only."
        ]
      },
      "laboratory": {
        "title": "RELATIONSHIP INDEX",
        "lines": [
          "The file’s final entry reads: US.",
          "The record is written for Wyatt and Bella.",
          "The third bolt asks for that two-letter word."
        ]
      },
      "registry": {
        "title": "PRIVATE NOTE",
        "lines": [
          "Not every celebration needs a huge stage.",
          "But this one was given a whole secret website.",
          "Someone really wanted the date to mean something."
        ]
      }
    },
    "locks": [
      {
        "title": "THE MONTH",
        "prompt": "What month is your anniversary in?",
        "source": "dispatch",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE NUMBER",
        "prompt": "What day of that month is recorded as the anniversary?",
        "source": "surveillance",
        "format": "TWO DIGITS"
      },
      {
        "title": "THE TWO OF YOU",
        "prompt": "Which two-letter word is in the Relationship Index?",
        "source": "laboratory",
        "format": "ONE WORD OR NUMBER"
      }
    ],
    "voice": "Classification anomaly. Someone has protected an ordinary calendar date with an extraordinary amount of security. September fourteenth. Two people, one anniversary, and a whole galaxy of evidence leading back to them. Agent Bella, there is one more personal memory hidden ahead of you. And then the truth.",
    "icon": "♥"
  },
  {
    "id": 15,
    "date": "2026-12-14",
    "dateLabel": "December 14",
    "title": "The Last Memory",
    "tag": "MEMORY 1122",
    "subject": "FINAL RECOVERY ORDER",
    "tagline": "The case is about to become something else entirely.",
    "scene": "The last recovered recording is not from the Federation. It is a memory dated November 22, 2026: a first kiss, followed by a walk around Dollar General. Nobody could have predicted that an ordinary little trip would become one of the most important scenes in Wyatt’s whole story.",
    "memory": "After this case, all fifteen evidence stamps can be assembled. What waits behind the vault is more than another puzzle.",
    "exhibits": {
      "dispatch": {
        "title": "RECOVERED DATE",
        "lines": [
          "The memory archive marks NOVEMBER 22, 2026.",
          "The four-digit short code is 1122.",
          "Keep month first, then day."
        ]
      },
      "surveillance": {
        "title": "PERSONAL RECORD",
        "lines": [
          "Event classification: FIRST KISS.",
          "The second bolt asks for the single event word KISS.",
          "The record is private in meaning, even if the file name is simple."
        ]
      },
      "laboratory": {
        "title": "STORE-FRONT CAMERA",
        "lines": [
          "After the moment, they walked around DOLLAR GENERAL.",
          "The third code is DOLLARGENERAL.",
          "Do not include a space."
        ]
      },
      "registry": {
        "title": "END OF THE FILE",
        "lines": [
          "Fifteen evidence stamps are ready to assemble.",
          "The missing artifact is still unnamed.",
          "The December 14 cinematic will explain the rest."
        ]
      }
    },
    "locks": [
      {
        "title": "THE DATE",
        "prompt": "What is the four-digit month-and-day stamp on the last memory?",
        "source": "dispatch",
        "format": "FOUR DIGITS"
      },
      {
        "title": "THE MOMENT",
        "prompt": "What one-word event is recorded as a first?",
        "source": "surveillance",
        "format": "ONE WORD OR NUMBER"
      },
      {
        "title": "THE WALK",
        "prompt": "What store did the two of them walk around afterward?",
        "source": "laboratory",
        "format": "STORE NAME"
      }
    ],
    "voice": "Final case. One more recovered memory. November twenty-second, twenty twenty-six. A first kiss. A walk around Dollar General afterward. I know that sounds ordinary. But that is what I have learned from this investigation: ordinary can mean everything when the right person is there. Agent Bella, the archive is complete. Open the vault. The real story is waiting.",
    "icon": "♡"
  }
];
export const PRELUDE_EMAILS = [
  {
    "day": 20,
    "date": "NOV 20",
    "subject": "INCIDENT REPORT 626-A",
    "body": "Agent Bella,\n\nAt approximately 09:14, Federation sensors detected unusual activity associated with Experimental Lifeform 626.\n\nAt this time there is no cause for alarm.\n\nWell... there is some cause for alarm.\n\nThe lifeform has already ignored 17 direct orders.\n\nFurther updates will follow.\n\nCase Status: OPEN\nThreat Level: Blue\n\n— Galactic Federation Investigations"
  },
  {
    "day": 21,
    "date": "NOV 21",
    "subject": "SURVEILLANCE UPDATE",
    "body": "Agent Bella,\n\nA person of interest has appeared in our investigation.\n\nKnown Alias: Bunny\nOccupation: Unknown\nThreat Level: Under Review\n\nCurrent assessment suggests this individual may be responsible for increased smiling activity in the area.\n\nAdditional investigation is ongoing.\n\n— Investigations Division"
  },
  {
    "day": 22,
    "date": "NOV 22",
    "subject": "RECOVERED EVIDENCE #001",
    "body": "Agent Bella,\n\nInvestigators have recovered the following evidence:\n\nLocation: Franklin High School\nRoom: Redacted\nInstructor: Redacted\n\nFederation analysts believe this location may be connected to the wider case.\n\nWe are requesting further authorization.\n\nCase remains active.\n\n— Galactic Federation Investigations"
  },
  {
    "day": 23,
    "date": "NOV 23",
    "subject": "SECURITY BREACH",
    "body": "Agent Bella,\n\nA classified record was accidentally released.\n\nContained within it was a single phrase:\n\n“She said hi.”\n\nThe significance of this message is currently unknown.\n\nOur analysts are working around the clock.\n\nMostly because they forgot how clocks work.\n\n— Federation Records Department"
  },
  {
    "day": 24,
    "date": "NOV 24",
    "subject": "EVIDENCE #002",
    "body": "Agent Bella,\n\nReview of historical records has identified an event of interest.\n\nReference: HOMECOMING\n\nNo further details are available.\n\nHowever, multiple witnesses reported unusually high happiness levels.\n\nInvestigation continues."
  },
  {
    "day": 25,
    "date": "NOV 25",
    "subject": "PUBLIC SAFETY NOTICE",
    "body": "Agent Bella,\n\nWe have received reports of individuals shining bright lights toward innocent bystanders.\n\nSeveral witnesses were temporarily blinded.\n\nThe incident appears connected to this investigation.\n\nYou are advised to wear sunglasses.\n\n— Federation Safety Office"
  },
  {
    "day": 26,
    "date": "NOV 26",
    "subject": "UNUSUAL DETECTION EVENT",
    "body": "Agent Bella,\n\nOur scanners have identified a recurring anomaly.\n\nDescription:\n• Blue\n• Friendly\n• Small\n• Chaotic\n\nPotential connection to Experiment 626 cannot be ruled out.\n\nPotential connection to being adorable also cannot be ruled out.\n\n— Investigations Division"
  },
  {
    "day": 27,
    "date": "NOV 27",
    "subject": "ARTIFACT UPDATE",
    "body": "Agent Bella,\n\nProgress has been made.\n\nThe missing artifact may possess the following properties:\n• Kind\n• Intelligent\n• Valuable\n• Extremely difficult to replace\n\nResearch is ongoing.\n\n— Artifact Recovery Team"
  },
  {
    "day": 28,
    "date": "NOV 28",
    "subject": "PRIORITY TRANSMISSION",
    "body": "Agent Bella,\n\nThe investigation is accelerating.\n\nRecovered keywords include:\n• Lion King\n• Halloween\n• Monster\n• Wolf\n\nAnalysts remain confused.\n\nA breakthrough may be approaching.\n\nStand by."
  },
  {
    "day": 29,
    "date": "NOV 29",
    "subject": "EMERGENCY ALERT",
    "body": "URGENT.\n\nAgent Bella,\n\nContainment has failed.\n\nThe investigation can no longer continue through email.\n\nA field operative is required immediately.\n\nReport for assignment using the attached access code.\n\nFailure to report may result in:\n• Confusion\n• More emails\n• Additional confusion\n\nBegin the investigation."
  }
];
export const INTRO_VOICE = "[CALM. SERIOUS RADIO VOICE.]\nThis is an official transmission from the Galactic Federation. Agent Bella, if you are hearing this, the case that began as an email has become something much bigger. Ten transmissions. Fifteen classified investigations. Forty-five security locks. One missing artifact.\n\n[PAPER RUSTLE, THEN A SMALL LAUGH.]\nAnd a tiny blue creature who has made a complete mess of our filing system.\n\nThe first evidence was sent to you in plain sight. A number. An alias. A school. Two little letters. A dance. Some lights that probably should have been pointed somewhere else.\n\nFrom here on, each day reveals one new case. You may read all the evidence, but the door will only open once its scheduled day arrives and you solve the three clearance questions.\n\n[SOFTER.]\nAnd Bella? If something in this archive feels familiar, that is not an accident.\n\n[PAUSE.]\nAgent Bunny... welcome to Project Ohana Six Two Six.";
export const VAULT_VOICE = "[LOW VOICE, THEN GRADUALLY WARMER.]\nAgent Bella, you did it. All fifteen cases. Every recovered stamp. Every strange message. Every time the Federation pretended the entire universe was in danger because you made somebody smile.\n\nYou have one last task. Put the fifteen evidence letters in day order. They form the family phrase that unlocks the final vault.\n\nWhen it opens, the Federation will stop talking. The sky will remember. And you will hear the part of this story that cannot be said by a fictional computer.\n\n[PAUSE.]\nThank you for following every clue. And for being the reason they exist.";
