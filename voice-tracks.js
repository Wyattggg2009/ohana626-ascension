// PROJECT OHANA-626 / THE SKY REMEMBERS — OPTIONAL VOICE RECORDINGS
// AI bot ECHO-626: export one MP3 per scene into voices/ (filenames below).
// Missing AI MP3 files gracefully fall back to the browser's ECHO narrator.
// All three Wyatt tracks are optional; MP3 or M4A works. Do not commit API secrets.
export const AI_VOICE_TRACKS = {
  "awakening": "voices/echo-awakening.mp3",
  "echo": "voices/echo-echo.mp3",
  "flyby": "voices/echo-flyby.mp3",
  "archive": "voices/echo-archive.mp3",
  "redalert": "voices/echo-redalert.mp3",
  "enemy": "voices/echo-enemy.mp3",
  "defend": "voices/echo-defend.mp3",
  "counterstrike": "voices/echo-counterstrike.mp3",
  "corridor": "voices/echo-corridor.mp3",
  "chase": "voices/echo-chase.mp3",
  "boost": "voices/echo-boost.mp3",
  "reactor": "voices/echo-reactor.mp3",
  "wardenreturn": "voices/echo-wardenreturn.mp3",
  "fire": "voices/echo-fire.mp3",
  "shatter": "voices/echo-shatter.mp3",
  "blackout": "voices/echo-blackout.mp3",
  "breach": "voices/echo-breach.mp3",
  "code": "voices/echo-code.mp3",
  "fourth": "voices/echo-fourth.mp3",
  "decision": "voices/echo-decision.mp3",
  "fall": "voices/echo-fall.mp3",
  "november": "voices/echo-november.mp3",
  "store": "voices/echo-store.mp3",
  "walk": "voices/echo-walk.mp3",
  "photographs": "voices/echo-photographs.mp3",
  "heartbeat": "voices/echo-heartbeat.mp3",
  "return": "voices/echo-return.mp3",
  "colossus": "voices/echo-colossus.mp3",
  "chargeup": "voices/echo-chargeup.mp3",
  "finalbattle": "voices/echo-finalbattle.mp3",
  "sacrifice": "voices/echo-sacrifice.mp3",
  "explosion": "voices/echo-explosion.mp3",
  "quiet": "voices/echo-quiet.mp3",
  "answer": "voices/echo-answer.mp3",
  "wyatt": "voices/echo-wyatt.mp3",
  "envelope": "voices/echo-envelope.mp3",
  "credits": "voices/echo-credits.mp3",
};

// Wyatt's REAL voice takes over scene 35 instead of the AI bot.
// During scenes 36 and 37, ECHO speaks first, then Wyatt adds a closing line.
// Exact text and upload instructions are in OHANA626-AUDIO-DIRECTOR-GUIDE.txt.
export const WYATT_FINALE_TRACKS = {
  wyatt: 'voiceovers/finale-wyatt.mp3',
  envelope: 'voiceovers/finale-envelope.mp3',
  credits: 'voiceovers/finale-credits.mp3',
};
