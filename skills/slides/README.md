# slides — responsive React presentation engine

A local engine for building premium presentation decks. The runnable app lives in
**`assets/`**.

## Run it

```bash
cd assets
npm install
npm run dev
```

Opens the deck at **`/`**. The deck owns numeric hashes (`#1`, `#2`…) for its slides.

`npm run build` bundles a production build; `npm run preview` serves it.

## Where things live (in `assets/src/`)

| Path | What |
| --- | --- |
| `components/` | The building-block components — CountUp, TiltCard, Marquee, Bento, Split, StatGrid, VisualDashboard, Accordion, Comparison, Tabs, Timeline, CodeWindow, BrowserFrame, Charts (Bar/Line/Donut), SpotlightCard. **Add new ones here.** |
| `deck/` | The presentation engine + chrome — `Deck` (paged nav, dock, rail, presenter, draw, auto-play), `Slide`, `Build` (click/auto reveals), `Reveal`, `DeckContext`, `icons`. |
| `styles/tokens.css` | The `:root` design tokens — **edit this to re-theme everything** (color, type, radius, depth, motion). |
| `styles/base.css` | Responsive base, atmosphere, motion, and the dock/rail chrome CSS. |
| `App.tsx` | The deck (composed from `<Slide>`/`<Bento>`/… ). |

## Add a component

1. Create it in `src/components/MyThing.tsx`. Use `var(--…)` tokens (no raw hex);
   for on-scroll/auto motion, read `useDeck()` and copy the pattern in
   `CountUp.tsx` / `VisualDashboard.tsx`.
2. Use it in a deck via `App.tsx`.

Theme everything by editing `styles/tokens.css`.
