# OHANA-626 Private Recorded Narration

This feature supports the 493 Wyatt-voice MP3 recordings for 20 chapters and the 38-scene finale, plus optional interactions.

**The public GitHub repository intentionally contains no MP3 recordings, passwords, private voice samples, final letters, or unreleased script text.** The recordings must be uploaded to a private Supabase Storage bucket named **ohana-voice**.

## Installation (Director only)

1. In the Supabase SQL Editor, execute **01_SUPABASE_PRIVATE_BUCKET_AND_POLICIES.sql** from the OHANA626 Private Voice Install Kit. It requires the existing 20-day Enchanted Multiverse schema (especially ohana_private_role, ohana_private_can_play, ohana_progress and ohana_world_choices).
2. Open **02_GOOGLE_COLAB_PRIVATE_MP3_UPLOAD.ipynb** from the kit in Google Colab. CPU runtime is sufficient. Upload the complete **OHANA626_ALL_MP3.zip**, and enter the existing Director's Supabase login email and password when prompted. It uploads all 493 MP3s quietly and skips ones already present. **Do not provide service-role/secret keys.**
3. Merge this pull request into main once storage is ready.
4. In Bella's game, click **🔊 ENABLE** once, then use **Play / Pause / Replay / Volume** from the compact speaker dock. Chapter actions trigger matching voice lines.
5. The interactive finale uses the private recorded clips for its 38 main scenes. If the signed URL cannot load, it falls back to the existing browser narrator. The director's editable private final letter is deliberately still read from Supabase, not replaced with the fixed pre-recorded F36 narration.

## Security and behavior

- Bucket **ohana-voice** must stay **PRIVATE**.
- The SQL policy restricts recordings based on Supabase Auth, existing OHANA-626 roles, daily unlocks, puzzle progress, and the final vault flag. The GitHub site never receives a secret key.
- The site requests only one time-limited signed URL per relevant voice cue; it does not preload the full library.
- On some mobile browsers, audio won't autoplay until Bella taps the voice button.
- User-facing scene subtitles in the existing movie represent its original on-screen dialogue. The new fixed voice scripts may not match them word-for-word; the private MP3 integration keeps the scene subtitle instead of showing a misleading line-synced transcript.
- This feature requires a manual Supabase setup. Merging the PR alone does **not** upload private files.
