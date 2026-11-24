# PROJECT OHANA-626 — THE SKY REMEMBERS

**December 14 finale / original interactive animated live event for Bella (Bunny)**

## What this includes
- 38 story chapters (37 voiced) across eight acts, 5,133 authored spoken words.
- A procedural animated Canvas 2D space setting: station flyby, holographic archive, WARDEN-0, corridor escape, wormhole, reactor siege, memory scene, emotional reveal, envelope handoff.
- Interactive shield defense, warp boost, reactor battle, and seven-hit final boss battle. There is no fail state.
- A fictional fourth-wall sequence that addresses Bella directly without accessing webcam/microphone.
- ECHO-626, a talking and mouth-animated stick-figure guide.
- Synthesized original sci-fi ambient music, impact sound effects and voice captions.
- Browser text-to-speech fallback; option to automatically generate 37 prerecorded neural speech MP3 files in GitHub Actions.
- Mobile responsive design, pause/replay/fullscreen, reduced-motion CSS, transcript and director chapter skipping.
- No new Supabase SQL changes. Existing login and server-enforced puzzle/vault access remain in place.

## REQUIRED: KEEP YOUR LIVE config.js
This ZIP deliberately does **not** contain config.js, because only your already-working GitHub version has your Supabase project URL and publishable key. **Do not delete config.js** and do not replace it with any older sample. All other website files are provided.

## Install the website (Chromebook only / no terminal)
1. Open your existing GitHub repository: https://github.com/Wyattggg2009/ohana626-ascension
2. Make sure `config.js` is already there. DO NOT delete the repository or all its files.
3. Extract the ZIP on the Chromebook. Upload/replace all **root website files** (index.html, app.js, all CSS and JS, emblem.svg, space.jpg) using GitHub **Add file → Upload files**.
4. Commit the upload to your main branch.
5. Open https://wyattggg2009.github.io/ohana626-ascension/ after the Pages deployment finishes. Hard refresh using Ctrl+Shift+R.
6. Sign in as Wyatt, open Command Center, select **LAUNCH PRIVATE DIRECTOR REHEARSAL**. You can jump between all 37 cinematic stages; it doesn't alter Bella's solved doors.
7. Bella gets the real event only via the **unlocked original vault → ENTER THE SKY REMEMBERS LIVE EVENT**. The game's existing requirements remain.

**IMPORTANT:** You must upload the extracted FILES, not just the `.zip` file. GitHub Pages does not unzip uploaded ZIPs. Preserve filenames and place website files at the repo root, alongside your existing config.js.

## Optional: Generate the 37 AI/NEURAL voice recordings (no PC installations)
The website works right away using your browser's speech engine. To use prerecorded neural speech:
1. The full ZIP contains `tools/generate_neural_audio.py` and `.github/workflows/build-neural-narration.yml`.
2. In GitHub, use **Add file → Create new file** for the exact path `tools/generate_neural_audio.py`; paste the contents of the matching extracted file and commit. Repeat for `.github/workflows/build-neural-narration.yml`. If both nested paths already exist after uploading the ZIP, do not recreate them.
3. Go to the repo **Actions** tab, choose **Generate ECHO-626 Neural Narration** and **Run workflow**. Choose a voice: Aria / Guy / Jenny / Andrew.
4. A successful action uses `edge-tts` on GitHub's runner to generate `voices/*.mp3`, updates `voice-tracks.js`, and commits them back to the same repository. No API key is needed. This depends on the external online voice service and GitHub write permissions; it may fail if either is unavailable.
5. When GitHub Pages deploys the new commit, reload the finale. It prefers the prerecorded MP3 clips; when files aren't available, it falls back to your browser's voice.

Voice track creation **has not been executed** in the supplied ZIP; the ZIP contains the generator, not 37 finished MP3 files. The scripts were dry-run verified. The 37 clips will be generated only after you successfully run the GitHub Action.

## Optional: Add real photos
- Upload photos to the repository's `photos/` folder, such as `photos/01.jpg` to `photos/06.jpg`.
- Edit `finale-photos.js`, uncomment or add ` '01':'photos/01.jpg' ` etc.
- The movie gallery will show your actual photos. Without photos, there are six artistic placeholders.
- **Privacy warning:** Everything uploaded to GitHub Pages is publicly accessible, even when the game has a password. Only upload images Bella and you are comfortable making public.

## How to rehearse without spoiling Bella's progress
- Wyatt admin account → Command Center → **DIRECTOR REHEARSAL**.
- There is a "Director Jump" selector inside **READ FULL NARRATION / VOICE OPTIONS**, so you can preview any chapter.
- During battle scenes, tap the giant action button or press **Space**. Battle can also be skipped for accessibility.
- Bella's final route is still protected in the normal UI by her server-reported `vault_unlocked` status.
- The site is static JavaScript hosted on GitHub Pages; hidden story text is inspectable by someone reading public source code. Do not publish private letters or hidden surprises directly in this repo.

## Gameplay and controls
- Start → a one-click user interaction enables sound where supported.
- Headphones recommended. Narration uses a browser voice by default, and AI MP3 if the workflow generated tracks.
- AUTO plays the next scene after ECHO finishes talking (unless an action/choice is required).
- NEXT allows skipping ahead manually; BACK rewinds; REPLAY restarts current narration; Pause pauses scene and narration.
- M toggles narration; LEFT/RIGHT navigate; SPACE triggers interactive action sequences. The onscreen buttons also work for touch.
- Read chapter transcript for accessibility and voice settings.

## Final real-world handoff
At the end, Bella sees: **Find Wyatt. Ask him for the envelope labeled OHANA-626 / FILE 1214.**
Prepare the physical envelope and printable letter offline. Do not upload the private letter to public GitHub Pages.

## Technology and scope
- Pure Canvas 2D, CSS visual effects, Web Audio sound synthesis, speech synthesis, optional AI narration MP3s.
- Designed as an *original browser-rendered interactive sci-fi event* with the energy of a live-game finale. It is **not** a filmed video or a 3D Fortnite game, and does not use any Fortnite assets or trademarks inside the experience.
- No npm, build tools, terminals, Linux, additional database migrations, tracking, microphone, camera or image generation keys required to run the website.
