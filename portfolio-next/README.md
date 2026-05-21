# Side A / Side B — Keynt Harly Adol

A music-driven portfolio. Four tracks, four identities — developer, designer, media, researcher. Each route is a "song"; the whole page re-themes when it plays.

Stack: **Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion**.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx              Root layout, fonts (Geist, Geist Mono, Instrument Serif,
                          Newsreader, Playfair Display), wraps everything in ClientShell.
  globals.css             All theming tokens + section styles. Per-section palettes
                          are scoped via `[data-theme="..."]`.
  page.tsx                Hub (the LP sleeve + tracklist).
  developer/page.tsx      Track 01 — Compile (dark / neon-cyber).
  design/page.tsx         Track 02 — Soft Edit (warm minimal).
  media/page.tsx          Track 03 — Press Run (newsprint editorial).
  research/page.tsx       Track 04 — Citations (academic paper layout).

components/
  ClientShell.tsx         Owns the data-theme attribute, page transitions
                          (AnimatePresence), persistent Nav, Player, and Resume modal.
  Nav.tsx                 Top bar — brand, tracklist quick-jump, SFX toggle, Resume button.
  Player.tsx              Persistent music player (mock controls + seekable bar).
  Visualizer.tsx          Procedural frequency-bar visualizer, seeded per song.
                          Drop-in-replaceable with a real AnalyserNode (see notes below).
  Resume.tsx              Modal + open/close lifecycle (Esc, backdrop, body lock).
  ResumeDoc.tsx           The printable CV itself (one-page, print CSS in globals.css).
  Grain.tsx               Tiny film-grain overlay.
  Icons.tsx               Single source of truth for SVG icons.
  sections/Hub.tsx        Hub UI (album sleeve, tracklist, socials).
  sections/Developer.tsx  Section UIs — each is a "use client" component because they
  sections/Design.tsx     rely on the music context / interactions.
  sections/Media.tsx
  sections/Research.tsx

lib/
  types.ts                Section, Song, project shapes.
  songs.ts                The song-to-section mapping + routeToSection helper.
  projects.ts             Dev / design / media data (data layer, not components).
  socials.ts              External-link list shown on the Hub.
  MusicContext.tsx        Global music state — song, playing, soundOn, resume modal.

public/assets/
  keynt-portrait.jpg      Album-cover hero on the Hub sleeve.
  keynt-resume-2x2.png    2x2 ID-photo used on the resume CV.
```

## Theming

Each section uses a different palette via a single attribute on the root `<div>` in `ClientShell.tsx`:

```tsx
<div data-theme={section}>
```

The token blocks in `globals.css` (`[data-theme="developer"]`, `[data-theme="design"]`, etc.) override `--bg`, `--fg`, `--accent`, etc. — every component reads from those variables, so changing a palette is a single CSS change.

## Wiring up real audio

`Visualizer` is currently procedural so the prototype never depends on a live audio stream. To make it react to a real song:

1. Add a hidden `<audio>` element fed by your Spotify Web Playback SDK / YouTube Player API output (or a direct MP3).
2. Create an `AudioContext` and `AnalyserNode`, wire `audio → analyser → destination`.
3. Replace the procedural loop in `Visualizer.tsx` with a `requestAnimationFrame` that reads `analyser.getByteFrequencyData(arr)` into the bar heights.

Everything else (player UI, route-driven song selection) stays the same — it reads from `MusicContext`.

## Embedding the real Spotify / YouTube / Facebook items

The Media section and the Player's Spotify launch button are placeholders that match the original design without depending on live embeds. To wire them up:

- **Spotify** — drop an `<iframe src="https://open.spotify.com/embed/track/..." />` into `Player.tsx` (replace the visualizer column) or into `lede__art` in `Media.tsx`.
- **YouTube** — replace the `.yt` block in `Media.tsx` with `<iframe src="https://www.youtube.com/embed/..." />`.
- **Facebook** — paste the Facebook Page Plugin / Post Embed iframe into the `.fb-post__art` block in `Media.tsx`.

The wrappers are sized for standard 16:9 video and standard post aspect ratios, so embeds should drop in cleanly.

## Placeholders to swap before publishing

- `lib/socials.ts` — fill in real Spotify / YouTube / GitHub / email URLs.
- `components/ResumeDoc.tsx` — replace `[ replace ]` markers for email / phone / GitHub.
- `lib/projects.ts` — `DEV_PROJECTS` and `DESIGN_CASES` are placeholders. The MEDIA_CLIPS list reflects your Ang Sidlakan + Ang Subang roles; refine titles/years as needed.

## Notes

- The HTML/single-file prototype that this was ported from is in the parent project as `index.html` + `core.jsx` + `sections.jsx` etc. It's the same design, just running React via Babel-standalone instead of through Next's bundler.
- Print-to-PDF on the resume uses CSS `@media print` — open the Resume, click **Download PDF**, the browser print dialog gets a clean one-page A4.
