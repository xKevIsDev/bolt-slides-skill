# Bolt deck skills

Bolt skills for building premium presentation decks, following the Agent Skills
`skills/*/SKILL.md` convention. Each skill lives in `skills/<name>/` with a
`SKILL.md` (the authoring guide) and an `assets/` template Bolt copies verbatim.

All three skills share the **same `:root` design-token vocabulary**, so a brand
themed once looks identical across them.

## Skills

| Skill | Engine | Best for |
| --- | --- | --- |
| **[`skills/slides/`](./skills/slides)** | [Slidev](https://sli.dev) (Vue) | Live-presented decks (projector, clicker, PDF). Fixed-canvas. |
| **[`skills/deck/`](./skills/deck)** | Vite + React, **paged** | Live-presented decks that are responsive + interactive, with the Slidev dock/rail UI but no Slidev. |
| **[`skills/webdeck/`](./skills/webdeck)** | Vite + React, **scroll** | A deck shared as a **link** and scrolled (pitch microsite, narrative page). |

Rough guide: present live → `slides` or `deck`; send a URL → `webdeck`.

## Add them in Bolt

1. In Bolt's **Add skill from GitHub**, paste this repo's URL —
   `https://github.com/inkko44/bolt-slides-skill`.
2. All three skills are auto-discovered (`skills/slides`, `skills/deck`,
   `skills/webdeck`).
3. Tell Bolt which skill to use and build a deck about your topic/brand.

Each `SKILL.md` has Bolt copy its `assets/*` to the project root, edit only the
`:root` token block to theme it, delete the throwaway starter, and author the real
deck. The React skills run with `npm install && npm run dev`; the Slidev skill
serves on `:3030`.

> The navigation chrome and engine in each skill are **locked** (copied
> byte-for-byte); the whole look re-themes by editing one `:root` token block.
