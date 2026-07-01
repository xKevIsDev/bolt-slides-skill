# Bolt slides skill

A Bolt skill that builds a premium, **responsive React presentation deck** — classic
paged slides you present one at a time, with a Slidev-style floating dock + thumbnail
rail, click-builds, auto-play, annotation, and presenter mode — but each slide is a
responsive web layout (no fixed canvas, no clipping) built from a rich component
library. Follows the Agent Skills `skills/*/SKILL.md` convention.

## The skill

- **[`skills/slides/`](./skills/slides)** — `SKILL.md` (the authoring guide) + `assets/`,
  a complete Vite + React app: the paged engine + chrome, ~14 components (Bento, Split,
  StatGrid, Comparison, Tabs, Accordion, Timeline, CodeWindow, BrowserFrame,
  SpotlightCard, charts, CountUp, TiltCard, Marquee, …), and the token-driven theme.
  `assets/` is copied verbatim; only the `:root` token block and the slides themselves
  are authored per deck.

## Add it in Bolt

1. In Bolt's **Add skill from GitHub**, paste this repo's URL —
   `https://github.com/inkko44/bolt-slides-skill`.
2. The `slides` skill auto-discovers at `skills/slides/SKILL.md`.
3. Tell Bolt to use the `slides` skill and build a deck about your topic/brand.

## Run it locally

```bash
cd skills/slides/assets
npm install
npm run dev
```

`npm run dev` opens the deck at `/`. Re-theme everything by editing one `:root` block
in `assets/src/styles/tokens.css`.
