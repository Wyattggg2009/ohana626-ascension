# PROJECT OHANA-626 / THE WALKABLE FEDERATION FACILITY

**A browser-rendered first-person escape room added to the complete original 15-day investigation and December 14 cinematic live event.**

## What is here

- Walkable first-person, perspective-rendered science-fiction corridor with 15 doors.
- One physical investigation chamber behind each door, with **Dispatch, Surveillance, Personnel Registry, Laboratory, a mission hologram, and a three-bolt security gate**.
- Door seals visibly change state from SEALED → ACTIVE → RECOVERED.
- Date restriction: Door 01 November 30, 2026 at **8 AM Eastern**, followed by one new day daily through December 14, 2026. Requires previous case completion. Cleared rooms remain accessible.
- The three bolt codes are checked by the existing **Supabase `ohana_door` RPC**; the website does not contain the answers.
- Hub terminals access the original evidence board, prelude, forensic tools, archives, radio transmissions and Black Box. The classic pages remain available and the walk location is restored when you return.
- The final physical vault opens the existing meta-key page, which leads to the existing 38-scene **THE SKY REMEMBERS** live event once Bella unlocks it.
- A 15-door transit directory lets the player jump to **already available** rooms without bypassing date locks.
- Wyatt has a **Director Rehearsal** entrance that allows exploration of rooms but **cannot submit Bella's puzzle answers or change her progress**.
- Keyboard controls and touchscreen buttons, drag-to-look, optional original interface beeps, responsive layouts and browser-local notebook.
- Browser Canvas 2D perspective animation (2.5D) — **not a filmed 3D game or video**; needs no PC app installations.

## Set up (Chromebook / GitHub Pages / no terminal)

1. **Back up the existing website** before replacing files (GitHub keeps previous commits, too).
2. Download `OHANA626-WALKABLE-FULL-GITHUB-WEBSITE.zip` and open/extract it in Chromebook Files.
3. Open your **existing** GitHub repository: `https://github.com/Wyattggg2009/ohana626-ascension`.
4. **KEEP `config.js` exactly as it is on your live site.** The ZIP deliberately does NOT include it.
5. Select the extracted **website root files**, including the two new files `escape-world.js` and `escape-world.css`. On GitHub choose **Add file → Upload files**, select the files, confirm the matching existing files will be replaced, and **Commit changes**. Files need to live at the repository root, beside your existing `config.js`, NOT inside a folder.
6. Keep the existing nested workflow paths `.github/workflows/build-neural-narration.yml` and `tools/generate_neural_audio.py` from the ZIP. They are optional; GitHub's upload interface can be awkward for folders. If they already exist, there's no need to upload them again. If not, use **Add file → Create new file**, enter the full relative path, paste its content and commit.
7. Once GitHub Pages finishes deploying, open `https://wyattggg2009.github.io/ohana626-ascension/` and press **Ctrl+Shift+R**.
8. Log in as Wyatt, select **WALK THE FIFTEEN-DOOR ESCAPE ROOM** on his Command Center. This is a rehearsal; the real Bella progress is unchanged.
9. Log in as Bella to test normal play: she'll enter the walkable facility by default. Before November 30, rooms will be date-locked; her existing Prelude terminal remains accessible.
10. To test future rooms **as Bella**, Wyatt can enable the existing Test Mode; previous-day completion is still required. **Disable Test Mode** before Bella plays. Do not use the Admin reset unless you explicitly want to erase Bella's progress.

## Preview without affecting your live website

Download and open `OHANA626-ESCAPE-ROOM-OFFLINE-PREVIEW.html` directly in Chrome. It is one self-contained page without Supabase. All 15 doors are rehearsable and the data is a local copy. Codes can't be submitted; test puzzles on the real site.

## Moving around

- **W / ↑** forward, **S / ↓** back, **A / D** strafe, **← / →** turn, **Shift** run.
- **Drag** your pointer on the screen to look around. **E / Space** to interact with a nearby door or terminal.
- **M** opens map; **Escape** closes terminals. Touchscreen buttons appear on touch devices.
- At the far end of the corridor, approach the large final vault to open the existing vault screen.
- Use **MAP** → **TRAVEL** to move to a day you've unlocked; a sealed room cannot be entered early.

## Important notes

- This upgrade modifies only static HTML/CSS/JS. It does **not** require new Supabase tables or SQL. The existing server's `ohana_state`, `ohana_door`, `ohana_hint`, and `ohana_vault` RPCs must already work.
- The existing 38-scene December 14 event, AI voice generator, case lore and printable surprise are retained.
- The ZIP has no `config.js`, no passwords and no private SQL, so don't delete your existing one.
- GitHub Pages code and photos are public. Never publish passwords, Supabase secret keys, a service-role key, or private images you don't want public.
- The world uses client-side door visuals for presentation. **Supabase remains the authority** for puzzle validation and unlocking; do not use browser JS as a security boundary.
- If you are using a previous project version without the 3-bolt escape-room Supabase functions, you will need your original escape-room SQL upgrade, but if your existing 45-lock game works you need **no additional SQL**.
