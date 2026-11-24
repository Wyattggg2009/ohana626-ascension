# OHANA-626 — PHONE-READY ESCAPE ROOM

## What's changed

- Twin thumbsticks: left = walk/strafe; right = turn camera
- Swipe anywhere on the main 3D scene to look around
- Big **USE** button when you face a nearby door or terminal
- Phone-sized buttons for MAP, HELP, EXIT and code entry
- Safe-area spacing for iPhone screen cutouts and bottom bars
- Portrait and landscape layouts; landscape is recommended for the most immersive view
- Reduced canvas rendering resolution and adjusted frame rate on phones for performance
- Mobile controls reset safely when a panel opens or the app switches away
- The 15 Supabase date locks and the December 14 live event are unchanged

## GitHub installation (Chromebook / browser only)

1. Open https://github.com/Wyattggg2009/ohana626-ascension
2. KEEP your current `config.js`. It contains your working Supabase connection.
3. **Easiest option:** extract PHONE-READY-PATCH.zip, then replace only `escape-world.js` and `escape-world.css` in the GitHub repository root. Commit both changes.
4. **Full replacement option:** extract PHONE-READY-FULL-WEBSITE.zip and upload its contained website files to the repository root, preserving folders. It intentionally excludes `config.js`. Commit changes.
5. Once GitHub Pages deploys, refresh the game on your phone. If the old version persists, close/reopen the browser tab or clear the site's cache.
6. Log in as Wyatt and use the existing WALKABLE FACILITY rehearsal. Bella's actual doors still unlock on their scheduled dates.

## Using the phone controls

- LEFT joystick: drag up/down to walk forward/back; left/right to strafe
- RIGHT joystick: drag left/right to turn
- Swipe main scene: turn your view
- USE: open the door or examine a device when you are close enough
- MAP: quick travel to available rooms
- HELP: full controls; EXIT: return to website
- Tap a code field to type the answer with your phone keyboard

**Offline preview:** Download OHANA626-PHONE-READY-ESCAPE-ROOM-PREVIEW.html and open it in Chrome or another modern browser. It uses mock state, reveals all room entrances for rehearsal, and does not change Bella's account. Some browsers restrict local HTML previews; in that case use Wyatt's rehearsal on the GitHub Pages website after installing.

## Testing / limitations

The walkthrough was tested with browser emulation at 390x844, 360x740, 320x568, and 844x390. Joystick movements, simultaneous pointers, MAP/HELP interactions, and app syntax passed. Real phone Safari and Android hardware have not yet been independently tested. Sound remains dependent on browser audio permissions. This upgrade does not change Supabase SQL, and no private keys are included.
