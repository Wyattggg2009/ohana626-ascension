#!/usr/bin/env python3
"""Generate ECHO-626's prerecorded neural voice clips from the public finale script.

Designed for GitHub Actions. Requires edge-tts and a network connection; no API key.
Usage: python tools/generate_neural_audio.py --voice en-US-AriaNeural
"""
from __future__ import annotations

import argparse
import asyncio
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / 'finale-story.js'
OUTPUT = ROOT / 'voices'
MAP = ROOT / 'voice-tracks.js'


def load_scenes():
    text = SOURCE.read_text(encoding='utf-8')
    match = re.search(r'export const FINALE_STORY =\s*(\[.*\])\s*;\s*$', text, re.DOTALL)
    if not match:
        raise RuntimeError('finale-story.js changed format; expected a JSON-compatible story array')
    return json.loads(match.group(1))


def manifest(rows):
    return """// Generated from /finale-story.js using GitHub Actions.
// AI/natural voice MP3s hosted by your GitHub Pages site.
// Re-run the voice workflow to rebuild these files when you change the script.
export const AI_VOICE_TRACKS = {
""" + ''.join(f"  {key!r}: {path!r},\n" for key,path in rows) + '};\n'


async def synthesize(voice, scene, path):
    import edge_tts

    for attempt in range(1, 4):
        try:
            if path.exists():
                path.unlink()  # Rebuild if a prior run used a different voice
            await edge_tts.Communicate(text=scene['text'], voice=voice, rate='-4%').save(str(path))
            if path.stat().st_size < 1000:
                raise RuntimeError(f'{path} was unexpectedly small')
            return
        except Exception:
            if path.exists():
                path.unlink()
            if attempt == 3:
                raise
            await asyncio.sleep(attempt * 3)


async def main(voice, dry_run=False):
    scenes = load_scenes()
    OUTPUT.mkdir(exist_ok=True)
    rows = []
    for index, scene in enumerate(scenes, start=1):
        if not scene['text'].strip():
            continue
        filename = f'{index:02d}-{scene["id"]}.mp3'
        dest = OUTPUT / filename
        rows.append((scene['id'], f'voices/{filename}'))
        print(f'{index:02d}/{len(scenes)}: {scene["title"]} -> {filename}', flush=True)
        if not dry_run:
            await synthesize(voice, scene, dest)
            await asyncio.sleep(1.0)
    if not dry_run:
        MAP.write_text(manifest(rows), encoding='utf-8')
        print(f'Done: {len(rows)} voice clips. Total bytes: {sum(x.stat().st_size for x in OUTPUT.glob("*.mp3"))}', flush=True)
    else:
        print(f'DRY RUN: would synthesize {len(rows)} clips using {voice}', flush=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--voice', default='en-US-AriaNeural')
    parser.add_argument('--dry-run', action='store_true')
    args = parser.parse_args()
    asyncio.run(main(args.voice, args.dry_run))
