# Bolt deck skills

Bolt skills for building premium presentation decks. Each skill lives in its own
top-level folder containing a `SKILL.md` (the authoring guide) and an `assets/`
template that Bolt copies verbatim.

## Skills

- **[`slides/`](./slides)** — premium [Slidev](https://sli.dev) decks: a fixed,
  hand-tuned navigation UI + a bespoke theme designed per request. `slides/assets/`
  is a complete, ready-to-run Slidev project (chrome, layouts, components, CSS).

## Add it in Bolt

1. In Bolt's **Add skill from GitHub**, paste this repo's URL —
   `https://github.com/inkko44/bolt-slides-skill`.
2. The **skill folder** auto-detects as `slides`.
3. Tell Bolt to use the `slides` skill and build a deck about your topic/brand.

Per `slides/SKILL.md`, Bolt copies `slides/assets/*` to the project root, edits only
the `:root` token block to theme it, deletes the throwaway starter `slides.md`, and
authors the real deck. `npm install && npm run dev` serves it on `:3030`.

> The whole look re-themes by editing one `:root` block in
> `slides/assets/styles/index.css`. The navigation chrome
> (`slides/assets/global-bottom.vue`) is locked — copied byte-for-byte.
