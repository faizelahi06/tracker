# TRACK A — Learning Operations Command Center

Static, local-first technical learning operations dashboard for GitHub Pages.

## Login
Use the configured portal password supplied separately by the project owner.

## Advanced build additions
- Corrected weighted curriculum progress: Not Started 0%, Learning 20%, Quick Practice 45%, Review 65%, Completed 80%, Mastered 100%.
- Progress Pulse rings for curriculum, interview readiness, review completion, and lab completion.
- 45-day activity heatmap.
- Operational insights: next action, weakest area, and review pressure.
- 30-day study trend, stage progress, weakness distribution, and theory/practical charts.
- Study milestones and streak monitoring.
- Four optional visual themes plus Classic.
- Local looping focus ambience; playback only starts after a user click.
- Existing IndexedDB persistence, prerequisite engine, review engine, labs, simulator, interview center, vault, commits, snapshots, and encrypted backup remain available.

## GitHub Pages deployment
1. Extract the ZIP.
2. Push all files and folders to the root of the `main` branch.
3. In GitHub repository Settings → Pages, set Source to **GitHub Actions**.
4. Open the Actions tab and allow the included `Deploy static site to Pages` workflow to complete.
5. Open the generated Pages URL.

All runtime paths are relative, so project-site URLs such as `username.github.io/repository-name/` are supported.

## Security boundary
This is a static client-side application. Authentication and local locking are access controls for the browser environment, not server-grade identity security. IndexedDB data is local to the browser profile and origin. Use encrypted exports for portable backups.


## Pro fixed build
This build repairs Learning Path editing with an explicit dirty-state + Save Changes workflow. Status, confidence, mastery-check and evidence fields are persisted to IndexedDB, then the dashboard reloads metrics from saved data.

### Daily execution
The Today page generates a five-part execution checklist from the current dependency-eligible topic, its practice task, mastery evidence, review pressure and an interview explanation prompt.

### Interview recording
The Interview Center can record microphone audio with MediaRecorder, preview it, save it in IndexedDB, and optionally upload it to Google Drive.

For Drive upload:
1. Create a Google Cloud OAuth 2.0 Client ID of type Web application.
2. Add the exact GitHub Pages origin, for example `https://USERNAME.github.io`, to Authorized JavaScript origins.
3. Enable Google Drive API for that Google Cloud project.
4. Paste only the OAuth Client ID into Settings & Backup → Google Drive Integration.
5. Connect Drive and explicitly upload a recording.

The app requests `drive.file` scope. OAuth access tokens are held in memory for the current page session.

### AI security
No OpenAI or other secret API key is embedded in this static build. A GitHub Pages application cannot safely keep a provider API secret because browser source and network requests are visible to users. Use a server-side proxy or serverless backend before adding secret-backed AI calls.


## Interview Studio build

New primary sections:
- Interview Practice Studio: video+audio or audio-only recording, local playback, editable transcript, self-review, confidence/result scoring, local IndexedDB recording library, deletion, and optional explicit Google Drive upload.
- Interview Question Book: searchable categorized question bank, favorites, readiness state, answer outlines, notes/weak points, next-review dates, and practice queue.
- Answer frameworks: technical explanation, troubleshooting reasoning, and behavioral STAR structure.
- Three-round practice routine: cold answer, correct/compress, pressure retest.

### Transcription behavior
The Studio uses the browser SpeechRecognition API when the browser exposes it. Support varies by browser and platform, and recognition may use the browser vendor's speech service. The transcript field is always editable, so users can correct or paste a transcript manually. Recordings themselves remain local in IndexedDB unless the user explicitly uploads one to Google Drive.

### Media permissions
Camera and microphone recording require a secure context. GitHub Pages provides HTTPS, so deployed Pages sites meet this browser requirement. On local development, use `http://localhost`, not a random `file://` path.

### Removed
The ambient music/focus sound feature and its packaged audio asset were removed.


## Intelligent Learning Command Center upgrade

Added a local Learning Intelligence engine that uses real tracker data instead of a remote API:
- dependency-aware next-topic recommendation
- adaptive daily execution plan
- review-debt prioritization
- weakness scoring from confidence, mastery checks, overdue reviews and missing evidence
- learning-risk alerts for consistency, study volume, review debt and weak interview clusters
- recommended interview drills based on recent results and Question Book state
- transparent explanation of why each recommendation was produced

This intelligence layer runs fully in the browser. No OpenAI API key or external AI secret is embedded.


## IndexedDB schema repair
This build upgrades the local database schema to version 4. The migration creates any missing stores, including `questionBook`, `recordings`, and `dailyTasks`, while preserving existing stores and data. Existing version-3 browser databases are upgraded automatically on first load.


## UI Control Edition
The Learning Path was redesigned for direct control:
- status filters are buttons instead of a dropdown
- topic rows are aligned to a fixed managed table grid
- Status and Confidence are visual read-only indicators in the table
- Edit opens a focused control panel with button-based status and confidence selection
- More opens topic details, practice, mastery, evidence and notes
- Study opens the Today execution flow
- changes use an explicit Draft → Save Changes workflow
- Discard Draft safely removes unsaved edits
- topic recommendation and Learning Intelligence actions are always visible
- responsive control layout and consistent column sizing


## Visible UI V2
This build includes a global shell redesign, button-based theme switching, button-based Learning Path filters and editing, UI V2 build marker, and cache-busted CSS/JS asset URLs for GitHub Pages deployments.


## Full UI V3 — all modules
This build applies one shared control and alignment system across every routed module:
Command Center, Learning Intelligence, Today, Learning Path, Review Queue, Labs,
Troubleshooting Simulator, Study Log, Habits, Interview Center, Interview Practice Studio,
Interview Question Book, Knowledge Vault, Analytics, Weekly Review, and Settings & Backup.

Global changes:
- every module gets Refresh, Edit Mode, and More controls
- short dropdowns are converted into synchronized button groups
- long selectors remain native controls where buttons would create clutter
- editable inputs are visually highlighted in Edit Mode
- module-specific grids, cards, forms, tables, simulator steps, labs, analytics, settings,
  interview tools and mobile layouts receive dedicated alignment rules
- FULL UI V3 build marker and ui3 cache-busting asset URLs are included


## Professional Focus UI V4
This revision removes the repetitive global Refresh/Edit/More bar that had been applied to every module.
Controls are now context-sensitive:
- button groups only for short, frequent choices in Labs, Habits, Interview Center, Interview Studio and Question Book
- native selectors retained where a dropdown is more efficient
- Learning Path keeps its dedicated draft/edit/save workflow
- module layouts retain their own purpose-specific structures

Added:
- floating focus clock with 25/50/90 minute presets
- start, pause and reset controls
- persistent current-focus objective
- randomized learning and engineering quotes
- subtle grid and radial background aesthetics
- calm glass treatment and module-specific accent styling
- Focus UI V4 marker and cache-busted assets


## Polish V5
Fixed night theme contrast, hidden visual scrollbars while preserving scrolling, hover/focus-only theme palette, removed visible build badge, added Deep Focus mode, quick distraction parking lot, and Alt+F focus dock shortcut.
