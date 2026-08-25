# Gemopedia

> **Every game. Explained.**
>
> A visual encyclopedia of the world's sports and games — free, ad-free, sourced.

Gemopedia is designed to be the reference-grade answer to *"how does this sport work?"* — from cricket and football to kabaddi, sumo, hurling, sepak takraw, chess, buzkashi and Formula 1. Every sport gets a standardised page with rules, scoring, illustrated diagrams, animations and a learning path.

## Why this exists

The web is drowning in **live scores** and **breaking news** but is surprisingly bad at explaining *how a sport actually works*. Gemopedia owns that category and only that category:

- ❌ No live scores. No news. No betting.
- ✅ Just: what is this sport, how do you play it, how is it scored, and where did it come from?

## Getting started

```bash
npm install
npm run dev
# → http://localhost:3200
```

Static-export ready — deploy to Vercel with zero config.

## Project layout

```
game-atlas/
├── ARCHITECTURE.md          ← read this first
├── app/
│   ├── page.tsx             ← homepage
│   ├── sports/[slug]/       ← universal SportPage template
│   ├── categories/[slug]/
│   ├── countries/[code]/
│   ├── compare/[pair]/
│   ├── learn/               learn hub
│   ├── sitemap.ts
│   ├── robots.ts
│   └── layout.tsx
├── components/
│   ├── SportPage.tsx        ← the one and only sport-content template
│   ├── SportsDirectory.tsx  ← filterable directory
│   ├── SportCard.tsx
│   ├── Header.tsx / Footer.tsx / AtlasLogo.tsx
│   └── animation/
│       ├── AnimationCanvas.tsx    playback shell (play/pause/scrub)
│       ├── DiagramCanvas.tsx      static illustration frame + legend
│       ├── primitives.tsx         Player, Ball, Field, Zone, Arrow…
│       ├── sport/                 composed animations (CricketLBW, FootballOffside, KabaddiRaid, SumoDohyo)
│       ├── diagrams/              static SVG diagrams (fields, formations, courts, boards)
│       ├── registry.tsx           animation registry (string → component)
│       └── DiagramRegistry.tsx    diagram registry (string → component)
└── lib/
    ├── types.ts             ← the Sport entity (the source of truth)
    ├── seo.ts               ← metadata + JSON-LD builders
    └── data/
        ├── index.ts         ← master registry + query helpers
        ├── categories.ts
        ├── countries.ts
        └── sports/*.ts      ← one file per sport
```

## Adding a new sport (the whole checklist)

1. Create `lib/data/sports/<slug>.ts` exporting a `Sport` record.
2. Import it and add it to the `ALL_SPORTS` array in `lib/data/index.ts`.
3. (optional) If it has an interactive animation:
   - Write a composed animation in `components/animation/sport/`
   - Register it in `components/animation/registry.tsx`
   - Reference the key from the sport's `animations` field.

That's it. The `/sports/<slug>` page renders automatically. The sitemap, category page, country page and comparison eligibility all update on the next build.

## Sports in this MVP (14)

Across every continent and category:

- **Asia** — Cricket, Kabaddi, Sumo, Sepak Takraw, Buzkashi
- **Africa** — Senegalese Wrestling
- **Europe** — Association Football, Hurling, Formula 1, Chess
- **North America** — Basketball, Curling
- **South America** — Capoeira
- **Oceania** — Australian Rules Football

## Roadmap (post-MVP)

See `ARCHITECTURE.md` §10 for the honest list of what's *deliberately not built yet*:

- CMS UI (currently authored as TS files — will migrate to Postgres + Prisma at ~200 sports)
- Interactive vector world map (v2)
- Full-text cross-sport search index (Fuse.js at MVP scale, Meili at 500+)
- Personalised learning progress (needs auth)
- Interactive rule simulator (the animation engine can already support it — needs UX)

## Scaling promise

The whole architecture is designed around one rule: **you can add 10,000 sports without touching any page component.** See `ARCHITECTURE.md` §9 for the migration path from TS files → Postgres → search index → CMS.

## Search-engine indexing

- **Google** — discovers URLs via `app/sitemap.ts`, which is submitted once in Google Search Console.
- **Bing / Yandex / DuckDuckGo / Seznam / Naver** — pinged instantly via the [IndexNow](https://www.indexnow.org/) protocol.

### IndexNow automation

The site owns an IndexNow key committed at `public/85f339b64ac4ab92a0a387fda539513f.txt`. Whenever content in `app/`, `lib/`, `public/` or `next.config.*` changes on `main`, `.github/workflows/indexnow.yml` waits ~3 minutes for the Vercel deploy to finish and then runs `scripts/notify-indexnow.mjs`, which:

1. Fetches `https://www.gemopedia.online/sitemap.xml`
2. Extracts every `<loc>` URL
3. POSTs them in 500-URL chunks to `https://api.indexnow.org/indexnow` (the aggregator that fans out to Bing, Yandex, DuckDuckGo, etc.)

Run it manually too:

```bash
npm run notify-indexnow                  # push every URL in the sitemap
ONLY_CHANGED=true npm run notify-indexnow # only URLs with <lastmod> in the last 48h
```

To rotate the key: pick a new 32-char hex string, rename the `public/<key>.txt` file, then update `INDEXNOW_KEY` in both `scripts/notify-indexnow.mjs` and `.github/workflows/indexnow.yml`.

## Analytics

Two analytics streams run in production:

1. **Vercel Analytics** (`@vercel/analytics/next`) — first-party, cookie-less, always on.
2. **Google Analytics 4** — added via the official `@next/third-parties/google` wrapper. Only mounts when the `NEXT_PUBLIC_GA_ID` env variable is set, so local dev stays quiet unless you explicitly enable it.

### Enable Google Analytics

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com). Copy the **Measurement ID** (format `G-XXXXXXXXXX`) from the Web data stream.
2. In Vercel: **Project Settings → Environment Variables → Add**
   - Name: `NEXT_PUBLIC_GA_ID`
   - Value: your `G-XXXXXXXXXX`
   - Environments: check Production, Preview, and Development
3. Redeploy (Vercel does this automatically after saving env vars, or trigger via **Deployments → ⋯ → Redeploy**).
4. Locally: copy `.env.local.example` to `.env.local` and paste the same ID.
5. Verify: open the site in an incognito window, then in GA4 go to **Reports → Realtime** — you should see 1 active user within ~30 seconds.

The `<GoogleAnalytics />` component from `@next/third-parties/google` handles route-change tracking automatically for the App Router, so no extra hooks are needed.
