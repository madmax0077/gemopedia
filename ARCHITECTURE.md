# Gemopedia — Architecture

> "Google Maps for sports knowledge." A visual encyclopedia designed to eventually contain **every organised sport and game in the world**.

The point of this document is to describe the *design decisions* that let one codebase host 12 sports today, 500 next quarter, and 10,000+ later — **without ever creating a `CricketPage.tsx` or `FootballPage.tsx`**.

---

## 1. Product principles (what this platform is and is not)

**Own the category** "understanding sports and games." Visitors land because they don't know how a game works and leave saying *"now I understand it."*

We **explicitly do not** compete with ESPN / Cricbuzz / SofaScore / Wikipedia. That means: no live scores, no betting, no news feed, no transfer rumours, no biography-style celebrity pages. Every screen answers *"how does this work?"* or *"what is this?"* — never *"what happened last night?"*

## 2. Data model — one entity, endless variety

Sports don't fit a single mould. Sumo has no field dimensions in metres. Chess has no equipment beyond a board. Buzkashi has no formal governing body. So the schema uses **wide, optional fields with structured sub-records** rather than a flat table with 40 required columns.

Every sport is a single record of type `Sport` (see `lib/types.ts`) with the following top-level groupings:

| Group | Purpose |
|---|---|
| **Identity** | `id`, `slug`, `name`, `officialName`, `aliases`, `shortDescription`, `longDescription` |
| **Taxonomy** | `category`, `subCategory`, `sportType`, `isTeam`, `isOlympic`, `isParalympic`, `indoorOutdoor`, `season`, `era` |
| **Origin** | `countryOfOrigin`, `regionOfOrigin`, `estimatedOrigin`, `historicalPeriod` |
| **Play** | `players`, `field`, `equipment`, `duration`, `matchStructure`, `objective` |
| **Rules** | `basicRules[]`, `advancedRules[]`, `scoring`, `penalties[]`, `fouls[]`, `winningConditions[]` |
| **People** | `positions[]`, `officiating`, `governingBodies[]` |
| **Ecosystem** | `majorCompetitions[]`, `countriesPlayed[]`, `popularity`, `variants[]`, `relatedSports[]` |
| **Learning** | `terminology[]`, `strategies[]`, `skills[]`, `learningPaths[]`, `diagrams[]`, `faq[]` |
| **Presentation** | `animations[]`, `visuals`, `heroTint` |
| **Provenance** | `sources[]`, `lastVerified`, `confidence`, `editorNote` |

**Why this shape?**

- **Optional everywhere.** A record for *Go* leaves `field.dimensions` unset. A record for *Buzkashi* leaves `governingBodies` empty. The universal template just skips empty sections — no data means no visual clutter.
- **Structured sub-records, not free text.** `basicRules[]` is an array of `{ title, body }`, so the template can render it as a bulleted list on one page and a card grid on another without re-parsing text.
- **Relations by slug**, not by ID objects. `relatedSports: string[]` and `variants: string[]` are slug arrays; the render layer looks them up. This survives untouched when we migrate from TS files to Postgres later — the shape is identical.
- **Provenance as first-class fields**, not a footer. `sources`, `lastVerified`, `confidence` (verified | community | historical | estimated) appear on every sport page so we don't accidentally publish invented content.

## 3. Storage strategy — TS today, Postgres tomorrow (same shape)

For the MVP the data lives in `lib/data/sports/*.ts` — one file per sport. This means:

- Zero infrastructure to run (no DB, no seeding).
- Static site generation → sub-100 ms pages worldwide, perfect SEO.
- Content changes are versioned in git.
- Editorial review = a normal PR.

**When we cross ~200 sports** the TS bundle gets uncomfortable and we want a CMS. Migration is a one-shot script: `types.ts` is already a valid Prisma schema in disguise (all optional, all serialisable). Read all TS files → insert to Postgres → replace the `getAllSports()` implementation with a DB call. Zero page component changes.

## 4. The universal `SportPage` template

**One React component (`app/sports/[slug]/page.tsx` + `components/sport/*`) renders every sport we will ever have.** It receives a `Sport` record and composes sections in a fixed order:

1. Hero (name, tagline, region-of-origin flag, popularity chip)
2. What is this sport?
3. Quick facts (players, duration, field, Olympic status, …) — auto-skips empty rows
4. How it works (structured objective + match structure)
5. Rules (basic + advanced, expandable)
6. Scoring
7. Playing area (with diagram if `field.diagram` present)
8. Equipment
9. Positions / roles (if any)
10. **Diagrams** (dedicated section; also inlined per slot in Playing area / Positions / Scoring / Rules / How-it-works)
11. **Interactive animation** (if the sport has one registered — otherwise the section is not rendered)
12. Penalties & fouls
13. Strategies
14. Terminology (glossary)
15. Variants (linked)
16. Major competitions
17. Countries where it is played
18. Governing bodies
19. Related sports (linked cards)
20. Learning path (beginner/advanced)
21. Sources & last-verified

Every section is a small stateless `Section` sub-component that returns `null` when its data is empty. **That's the trick**: 20 sections × N sports scale because rendering cost is proportional to *populated* fields, not the total schema.

## 5. Reusable animation engine (the differentiator)

Per section 8, this is what makes Gemopedia better than "read the rules on Wikipedia." Instead of hand-rolling an SVG per sport, we compose **animation primitives**:

`Field`, `Court`, `Ring`, `Player`, `Ball`, `Zone`, `Arrow`, `Trajectory`, `AnimationCanvas` (the play/pause + step scrubber shell).

Any sport-specific animation (`CricketLBW`, `FootballOffside`, `KabaddiRaid`, `SumoDohyo`, `F1PitStop`, `ChessCastling`, …) is a short React component composing those primitives. **A new sport with a new animation is ~80 lines of JSX, not a bespoke SVG artboard.**

Sports register their animations in `sport.animations[]`:
```ts
animations: [
  { id: "lbw", title: "How LBW works", component: "CricketLBW", description: "…" }
]
```
The SportPage looks up the component in an animation registry and renders it. **Adding an animation for a new sport is: (a) write the composed component, (b) register it, (c) reference it from the sport record. No page code changes.**

## 6. Discovery = data queries, not hand-built pages

Every discovery page is a query over the same catalog:

- `/sports` — filterable directory (by category, country, olympic status, indoor/outdoor, team/individual, era).
- `/categories/[slug]` — filter by `sport.category === slug`.
- `/countries/[code]` — filter by `sport.countryOfOrigin === code` OR `sport.countriesPlayed.includes(code)`.
- `/compare/[a]-vs-[b]` — render two records into a diff-style layout.
- `/learn/[slug]` — reads `sport.learningPaths` and renders steps.

**Adding a new category = adding one entry to `lib/data/categories.ts`.** The page already exists.

## 7. SEO architecture

Every page ships with:

- **Semantic HTML** (real `<article>`, `<section>`, `<nav>`, `<h1>` hierarchy).
- **`generateMetadata`** returning `{ title, description, canonical, openGraph, twitter, alternates }` — computed from the sport record.
- **JSON-LD structured data** — `SportsOrganization`, `Sport` (via `@type: "Thing"` with `sameAs`), `FAQPage` for the FAQ section, `BreadcrumbList` for navigation. Emitted server-side so crawlers see it instantly.
- **XML sitemap** listing every sport, category, country, comparison and learning path.
- **Canonical URLs.** Sports live at `/sports/[slug]`; every alias path (e.g. `/football`) 301-redirects to canonical.
- **No thin programmatic-SEO pages.** Comparison pages only exist for pairs that share a category (so `/compare/chess-vs-cricket` doesn't get generated unless it's editorially useful — currently we only compare within-category pairs to keep quality high).

## 8. Component system

- `components/layout/*` — Header, Footer, Container, Section, Breadcrumbs.
- `components/cards/*` — SportCard, CategoryCard, CountryCard, ConceptCard.
- `components/sport/*` — the 20 SportPage sections.
- `components/animation/primitives/*` — Field, Player, Ball, Arrow, Zone, Trajectory, AnimationCanvas.
- `components/animation/sport/*` — composed animations.
- `components/animation/diagrams/*` — static illustrated SVG diagrams, registered in `DiagramRegistry.tsx`, placed on the page via each sport's `diagrams[]` with a `slot` (`playing-area`, `positions`, `scoring`, `rules`, `how-it-works`, or the default `diagrams` section).
- `components/compare/*` — the compare layout + row helpers.

Every card in the codebase has the **same visual DNA** — rounded 2xl, subtle border, gradient hue derived from the sport's category. Design tokens live in `tailwind.config.ts`.

## 9. Scalability checkpoints

| Scale | Change required |
|---|---|
| **1 → 100 sports** | Drop TS files in `lib/data/sports/`. Everything else already works. |
| **100 → 500 sports** | Add pagination + filter combinator to `/sports`. Move animation components to dynamic import. |
| **500 → 2,000 sports** | Split data into JSON, add build-time index for search, add ISR on sport pages. |
| **2,000 → 10,000+ sports** | Migrate to Postgres + Prisma using the migration script; add search index (SQLite FTS or Meili); add an editor CMS on top of the same schema. |

Nothing above requires rewriting any page component — that's the whole point of the design.

## 10. What is deliberately *not* built yet

Being explicit so scope stays honest:

- ❌ CMS UI — data authored as TS files; a proper Postgres-backed admin comes at the 200-sports mark.
- ❌ Full interactive rule simulator with drag-and-drop test scenarios — the animation engine can support it; the UX for "is this offside?" interactive scenarios ships in v2.
- ❌ Interactive vector world map — the country pages exist and the country grid is on the homepage; the SVG world map with click-to-drill is a v2 feature (heavy asset, deserves a dedicated iteration).
- ❌ Cross-sport global search — client-side search is stubbed with a link to `/sports`; a real search index (Fuse.js at MVP, Meili later) is a v2 iteration.
- ❌ Personalised learning progress — the learning-path pages exist; persisting user progress needs auth, which is v2.

Everything above is *supported* by the schema and the routing — it's a feature build-out, not an architecture change.
