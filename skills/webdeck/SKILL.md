---
name: webdeck
description: >-
  Build a premium presentation as a SCROLLABLE WEBSITE — full-viewport sections,
  responsive layout that reflows (never clips), scroll-driven motion. Use this when
  a deck will be SHARED AS A LINK / viewed in a browser / scrolled: a pitch
  microsite, a narrative landing page, a sales or investor "deck" sent as a URL,
  a portfolio. (For a deck PRESENTED LIVE on a projector with a clicker, use the
  `slides` Slidev skill instead — it shares this exact theme/token system.)
  Scaffolds by COPYING the bundled Vite + React project in assets/ verbatim, then
  AUTHORS an original deck from the user's real topic/brand.
---

# Webdeck — a premium scrollable-presentation site for Bolt

A "deck" that lives at a URL and is **scrolled**, not clicked through on a
projector. Because it's a real website, it escapes the slide constraints: content
**reflows** instead of clipping, it's **responsive**, and motion is **scroll-driven**.

This skill has two halves — keep them separate:

- **The system is pre-built** — `assets/` is a complete Vite + React project
  (scroll/nav chrome, section components, primitives, the shared CSS). **Copy it
  verbatim. Never regenerate it.** This is what makes every deck look polished.
- **The content is authored fresh, every time** — the sections themselves (topic,
  structure, copy, visuals, theme) are designed from scratch for *this* request.

> **Shared theme with the `slides` skill.** `src/styles/tokens.css` is the *same*
> `:root` token vocabulary as the Slidev skill. A brand themed once looks identical
> whether it's presented live (slides) or shared as a link (webdeck).

## ⛔ Two hard rules

1. **Copy `assets/` byte-for-byte** — `Deck`, `Section`, `Reveal`, `CountUp`,
   `TiltCard`, `Marquee`, `Bento`, `Split`, `StatGrid`, `VisualDashboard`, both CSS
   files, and the config. Don't retype or paraphrase them.
2. **Author the deck from the user's REAL input — do not reskin the starter.**
   `src/App.tsx` is a throwaway that only proves it runs. **Delete its sections and
   write a new deck.** Never reuse its order, copy, placeholders, or fake names.

---

## Step 0 — Ground the deck in the user's real input

The deck is about *what the user gave you*: their topic, brand, document, or idea.
Use **real** names, positioning, and facts — never fabricate a placeholder company,
logo, or quote for a real subject. If a URL or brand is given, the theme comes from
that brand: fetch the page for its real colors/font/logo, or use the brand's known
palette, or **STOP and ask** — never silently ship a generic palette. Report which
colors/fonts you used and where they came from.

---

## Step 1 — Scaffold (copy the bundled project)

Copy `assets/` to the project root unchanged:

```
package.json  vite.config.ts  tsconfig*.json  index.html
src/main.tsx
src/App.tsx                 ← THROWAWAY. delete its sections; author the real deck.
src/styles/tokens.css       ← edit ONLY the :root block (Step 2)
src/styles/base.css         ← responsive base + atmosphere + motion + chrome (don't edit)
src/components/  Deck Section Reveal CountUp TiltCard Marquee Bento Split StatGrid VisualDashboard
```

`npm install && npm run dev` serves the deck. Verify it scrolls/snaps and the
side dot-nav + progress bar work, then build the real deck.

---

## Step 2 — Theme it (edit only the `:root` block)

All color, type, radius, depth, motion live in `src/styles/tokens.css` `:root`.
**Change values, never variable names** (every component reads them). Same contract
as the slides skill: `--bg --surface* --fg* --hair* --primary --accent --accent-ink
--radius* --shadow --glow --font-* --dur --ease* --grain --vignette --gutter*`.

- **One accent** (a 2–4 stop gradient within ~80° of hue); use it sparingly.
- **Dark vs light:** dark → near-white `--fg` on near-black `--bg`; light → set
  `html { color-scheme: light }` in base.css, near-black ink on warm white, drop
  `--glow`. Derive from the brand when given, else pick a gallery direction (same
  9-style gallery as the slides skill — dark product, editorial luxury, Swiss,
  dark technical, warm minimal, fintech, aurora glass, cinematic, paper editorial).
- **Fonts:** set `--font-head`/`--font-body` and update the `@import` at the top of
  `base.css` to load them from Google Fonts.

---

## Step 3 — Compose like the web (you already are — lean into it)

This is the format's superpower: it **is** a website, so compose each section like a
section of a world-class landing page (Linear, Vercel, Stripe, Apple, the bento era).

- **Full-bleed, asymmetric, layered.** Anchor headlines to a side with big negative
  space; bleed media to the screen edge (`Split`); stack a foreground over a
  background. Use `Bento` (asymmetric tiles) over a row of equal cards.
- **Type as composition.** Oversized fluid headlines (the `.display`/`.headline`
  atoms use `clamp()`), one word in the accent, scale carries the section.
- **Every section is full-viewport.** One idea per section, lots of breathing room.
- **Vary the rhythm.** No two adjacent sections the same shape: a centered statement
  → a `Split` → a `Bento` → a giant `figure`/`CountUp` → a `Marquee` → a quote → CTA.

### Section & component catalog
- **`Section`** — a full-viewport section. `center` for hero/statement/quote/CTA;
  `full` for edge-to-edge; `nav="Label"` names it in the dot-nav. Non-full sections
  get a max-width `.container`.
- **`Split`** — text + edge-to-edge media (`flip` swaps sides). The web feature
  section. media = an `<img>`, a color panel, or `<TiltCard><VisualX/></TiltCard>`.
- **`Bento`** — asymmetric tile grid; tiles take `c` (cols of 12), `r` (rows),
  `variant: 'accent'|'glow'`, and `fig`/`title`/`body`. Collapses to one column on
  mobile automatically.
- **`StatGrid`** — responsive proof cards; pass a `<CountUp>` as a stat `value`.
- **Atoms** (classes in base.css): `.display .headline .lead .subhead .kicker
  .figure .accent-text .rule`. All fluid.

---

## Step 4 — Responsive, not fixed (this replaces "design to the frame")

Unlike a slide (a fixed 1080×607 box that clips), a webdeck **reflows** — so the job
is to make every section look right at **any width and height** and never clip:

- **Fluid sizing.** Type uses `clamp()` (the atoms already do); use `%`, `vw`, `rem`,
  `max-width` containers — not fixed pixel widths that break on small screens.
- **It must work on mobile.** Check a narrow viewport: `Bento` and `Split` stack
  (built in); make sure headlines don't overflow and nothing needs horizontal scroll.
- **Sections grow, they don't clip.** A section is `min-height: 100vh`; if content is
  tall it simply makes the section taller (and scrolls) — never cut off. Still, keep
  **one idea per section** so each fills ~one viewport.
- **No fixed heights on content.** Let it flow. Reserve fixed dimensions for media
  panels and visual mocks only.

---

## Step 5 — Visuals & imagery

Visuals must fit the topic (same rules as the slides skill):
- **Data/SaaS** → a `.vframe` mock (dashboard/funnel/chart/KPI). `VisualDashboard`
  is an *example* — build topic-fit ones in the same shell with real, on-topic data.
- **Brand/product/editorial/real-world** → **generate images** (Bolt image gen) into
  `public/`, one consistent style descriptor across all of them; use them full-bleed
  as `Split` media or full-section backgrounds under a gradient scrim. No text in
  images. Don't link external stock.
- A `Split` or a full-bleed image section usually beats a floating card.

---

## Step 6 — Motion (scroll-driven, with restraint)

- **`Reveal`** is the core primitive — wrap a block so it rises + fades in when
  scrolled into view (`whileInView`, fires once). Use on headlines, grids, cards.
- **`CountUp`** for every hero figure / proof stat. **`VisualDashboard`** draws
  itself in. **`TiltCard`** for one hero visual. **`Marquee`** for logo/value strips.
- The ambient background (drifting spotlights + grain + vignette) is automatic per
  section. Keep it.
- **Restraint:** one or two motion ideas per section. Consistent easing (the `--ease`
  tokens / the spring in Reveal). All of it honors `prefers-reduced-motion` via the
  `<MotionConfig reducedMotion="user">` in `Deck`. Don't make a circus.

---

## Extend the system — invent new sections & components

The kit is a **floor, not a ceiling.** Author brand-new section components and
visuals whenever the topic calls for it — a `<Timeline>`, a `<Comparison>`, a
`<Pricing>`, a device mock, a map. Bespoke pieces are what make a deck look
art-directed. Only the token *names* and the chrome (`Deck`) are off-limits to
rewrite; **adding** files is encouraged. Every new piece must: use `var(--…)` tokens
only (no raw hex), compose like a web section, be responsive (works on mobile),
animate on scroll with `Reveal`/IntersectionObserver + honor reduced-motion, use
tabular figures, and add **no new dependencies** (plain React + CSS + SVG; don't
install chart/UI libs — hand-build, it looks more bespoke).

---

## Step 7 — Structure & writing

Pick an arc that fits the deck type (investor pitch, product launch, brand,
teaching, report) — structure follows content, there's no fixed arc. Open on a hero,
close on a CTA. ~7–14 sections sized to the material. Headlines short, declarative,
specific (sentence case); body 1–3 tight benefit-led sentences; 1–3 word kickers;
one idea per section. Use the user's real numbers; never invent numbers for a real
brand. Zero lorem, zero placeholder names.

---

## Definition of done (self-check)

- [ ] Chrome + components are **identical** to the bundled assets; scroll-snap, the
      dot-nav, progress bar, and keyboard nav (↑/↓/space) all work.
- [ ] The deck is **authored, not reskinned** — topic, structure, copy, names are the
      user's, with no starter leftovers (no "Northwind"/"Title").
- [ ] If a brand/URL was given, `--primary`, fonts, and logo come from that brand.
- [ ] Only the `:root` block was edited for the theme; editing `--primary` recolors
      everything incl. the chrome.
- [ ] Each section composes like a web section (full-bleed/asymmetric/bento/split),
      not a centered card row; visuals fit the topic; brand decks have generated
      `.webp` images sharing one style.
- [ ] **Responsive:** looks right on a narrow (mobile) viewport — sections stack, no
      horizontal scroll, nothing clips or overflows.
- [ ] Motion is scroll-driven and restrained; reduced-motion respected.
- [ ] `npm install && npm run dev` runs with no console errors; `npm run build`
      succeeds.
