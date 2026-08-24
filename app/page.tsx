import Link from "next/link";
import type { Metadata } from "next";
import {
  COMPARISON_PAIRS,
  getAllSports,
  getFeaturedSports,
  getSport,
  getSportsByCategory,
  getTrendingConcepts,
  getUnusualSports,
} from "@/lib/data";
import { CATEGORIES, CATEGORY_BY_SLUG } from "@/lib/data/categories";
import { COUNTRIES } from "@/lib/data/countries";
import { SportCard } from "@/components/SportCard";
import { categoryIcon } from "@/lib/icons";
import { fetchHeroImages } from "@/lib/heroImages";

export const metadata: Metadata = {
  title: "Gemopedia — Every game. Explained.",
  description:
    "A visual encyclopedia of the world's sports and games — rules, scoring, diagrams and animations for cricket, football, kabaddi, sumo, chess, F1, hurling, sepak takraw, buzkashi and more.",
  alternates: { canonical: "/" },
};

export default async function Homepage() {
  const featured = getFeaturedSports(6);
  const unusual = getUnusualSports(6);
  const trending = getTrendingConcepts();
  const allSports = getAllSports();

  // Pull real Wikipedia lead photos for the two card grids in parallel.
  // These are cached by Next.js for a week, so subsequent renders are free.
  const cardImages = await fetchHeroImages([...featured, ...unusual]);
  const totalSports = allSports.length;
  const countryCount = new Set(
    allSports.flatMap((s) => [s.countryOfOrigin, ...(s.countriesPlayed ?? [])].filter(Boolean)),
  ).size;
  const diagramCount = allSports.reduce((n, s) => n + (s.diagrams?.length ?? 0), 0);
  const animationCount = allSports.reduce((n, s) => n + (s.animations?.length ?? 0), 0);

  const marqueeSports = [...allSports, ...allSports];

  return (
    <div className="relative">
      {/* ────────────────────────────  HERO  ──────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        {/* Aurora background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 opacity-30 blur-3xl animate-aurora-x dark:opacity-40" />
          <div className="absolute -right-40 top-20 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-sky-400 via-emerald-400 to-teal-400 opacity-25 blur-3xl animate-aurora-y dark:opacity-35" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-ink-950 dark:via-ink-950/60" />
        </div>

        {/* Grid texture, faded */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-radial opacity-70" />

        <div className="container-page pb-16 pt-12 sm:pt-20 md:pt-28">
          {/* Announcement chip */}
          <div className="mx-auto w-fit">
            <p className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-800 shadow-soft dark:text-ink-100">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-emerald-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live · a visual encyclopedia of the world's sports
            </p>
          </div>

          {/* Headline */}
          <h1 className="mx-auto mt-6 max-w-5xl text-balance text-center font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink-900 dark:text-ink-50 sm:text-6xl md:text-[5rem] lg:text-[5.75rem]">
            Every game.
            <br />
            <span className="text-gradient">Explained visually.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-balance text-center text-base leading-relaxed text-ink-700 dark:text-ink-200 sm:mt-6 sm:text-lg md:text-xl">
            Cricket, kabaddi, sumo, F1, hurling, buzkashi, chess, sepak takraw —{" "}
            <span className="text-ink-900 dark:text-white">
              rules, scoring, diagrams and animations for every sport on Earth.
            </span>{" "}
            Free. Ad-free. Sourced.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/sports"
              className="btn-shimmer group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-soft-lg transition hover:shadow-glow dark:from-white dark:via-ink-50 dark:to-white dark:text-ink-900"
            >
              <span className="relative z-10">Explore {totalSports} sports</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="/countries"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-ink-800 shadow-soft transition hover:border-brand-300 hover:text-ink-950 dark:text-ink-100 dark:hover:text-white"
            >
              <span className="text-lg leading-none">🌍</span>
              Browse by country
            </Link>
            <Link
              href="/compare"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-3 text-sm font-medium text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
            >
              Compare two sports →
            </Link>
          </div>

          {/* Trust chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-ink-500 dark:text-ink-400">
            <TrustChip label="No sign-up · No paywall" />
            <TrustChip label="Sourced from official rulebooks" />
            <TrustChip label="Every sport verified" />
          </div>

          {/* Live stat bar */}
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCell value={totalSports} label="sports" hue="from-indigo-500 to-sky-500" />
            <StatCell value={CATEGORIES.length} label="categories" hue="from-emerald-500 to-teal-500" />
            <StatCell value={countryCount} label="countries" hue="from-amber-500 to-rose-500" />
            <StatCell value={diagramCount + animationCount} label="diagrams & animations" hue="from-fuchsia-500 to-violet-500" />
          </div>
        </div>

        {/* Marquee of sport names */}
        <div className="border-y border-ink-200/50 bg-white/40 py-3 backdrop-blur-sm dark:border-white/5 dark:bg-ink-900/40">
          <div className="pointer-events-none relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track gap-8 pr-8">
              {marqueeSports.map((s, i) => (
                <span
                  key={`${s.slug}-${i}`}
                  className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-ink-600 dark:text-ink-300"
                >
                  <span className="text-base">{s.countryOfOrigin ? "" : ""}</span>
                  {s.name}
                  <span className="text-ink-300 dark:text-ink-600">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────  FEATURED  ───────────────────── */}
      <Section
        eyebrow="Featured sports"
        title="Start here"
        subtitle="Global favourites plus a couple of surprises — each one a full guide with diagrams and animations."
      >
        <div className="cards-grid">
          {featured.map((s) => (
            <SportCard key={s.slug} sport={s} heroImage={cardImages[s.slug]} />
          ))}
        </div>
      </Section>

      {/* ─────────────────────  CATEGORIES  ───────────────────── */}
      <Section
        eyebrow="Categories"
        title="Every kind of sport"
        subtitle={`${CATEGORIES.length} top-level categories cover the entire universe of organised games.`}
      >
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {CATEGORIES.map((c) => {
            const count = getSportsByCategory(c.slug).length;
            return (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                className="hover-lift ring-glow group relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-soft dark:border-white/10 dark:bg-ink-900/70"
              >
                <div className={`relative h-16 bg-gradient-to-br ${c.hue.from} ${c.hue.to}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.5),transparent_55%)]" />
                  <span className="absolute right-3 top-2.5 text-2xl drop-shadow">
                    {categoryIcon(c.icon)}
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold tracking-tight text-ink-900 dark:text-ink-50">
                    {c.name}
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-ink-500">
                    {count} sport{count === 1 ? "" : "s"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ─────────────────────  COUNTRIES  ───────────────────── */}
      <Section
        eyebrow="World map"
        title="Explore by country"
        subtitle="What do they play in Mongolia? What sport started in Bahia? Pick a country to find out."
      >
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8">
          {COUNTRIES.slice(0, 24).map((c) => (
            <Link
              key={c.code}
              href={`/countries/${c.code}`}
              className="group flex items-center gap-2 rounded-2xl border border-ink-200/70 bg-white/90 px-3 py-2.5 text-sm text-ink-800 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-ink-950 dark:border-white/10 dark:bg-ink-900/70 dark:text-ink-100 dark:hover:text-white"
            >
              <span className="text-lg leading-none">{c.flag}</span>
              <span className="truncate">{c.name}</span>
              <span className="ml-auto text-ink-300 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100 dark:text-ink-600">
                →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/countries"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-300 bg-white/70 px-4 py-2 text-xs font-semibold text-ink-800 backdrop-blur-sm transition hover:border-brand-400 dark:border-white/10 dark:bg-ink-900/50 dark:text-ink-100"
          >
            See all {COUNTRIES.length} countries →
          </Link>
        </div>
      </Section>

      {/* ─────────────────────  UNUSUAL  ───────────────────── */}
      <Section
        eyebrow="Never heard of these?"
        title="Discover something new"
        subtitle="Regional and traditional sports you won't find on the front page of ESPN — and yet millions play them."
      >
        <div className="cards-grid">
          {unusual.map((s) => (
            <SportCard key={s.slug} sport={s} heroImage={cardImages[s.slug]} />
          ))}
        </div>
      </Section>

      {/* ─────────────────────  TRENDING  ───────────────────── */}
      <Section
        eyebrow="Trending concepts"
        title="One rule, one click"
        subtitle="Jump straight to the specific rule you always wondered about."
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trending.map((c) => {
            const sport = getSport(c.sportSlug);
            const cat = sport ? CATEGORY_BY_SLUG[sport.category] : undefined;
            return (
              <li key={c.title}>
                <Link
                  href={c.href}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-ink-200/70 bg-white px-4 py-3.5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-300 dark:border-white/10 dark:bg-ink-900/70"
                >
                  <div className="min-w-0">
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                        cat ? "text-brand-600 dark:text-brand-300" : "text-ink-500"
                      }`}
                    >
                      {sport?.name}
                    </p>
                    <p className="mt-0.5 truncate text-base font-semibold text-ink-900 dark:text-ink-50">
                      {c.question}
                    </p>
                  </div>
                  <span className="shrink-0 text-lg text-ink-300 transition group-hover:translate-x-0.5 group-hover:text-brand-500 dark:text-ink-600">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* ─────────────────────  ANIMATIONS SHOWCASE  ───────────────────── */}
      <Section
        eyebrow="See it, don't just read it"
        title="Interactive explanations"
        subtitle="Every animation is composed from the same primitive engine — Player, Ball, Field, Zone, Arrow — which is why we can build them for any sport."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { slug: "cricket", label: "LBW", note: "Cricket's most-argued rule, animated.", hue: "from-emerald-500 to-teal-500" },
            { slug: "association-football", label: "Offside", note: "The line that decides the goal.", hue: "from-sky-500 to-indigo-500" },
            { slug: "kabaddi", label: "Raid", note: "One breath, six defenders, one point.", hue: "from-amber-500 to-rose-500" },
          ].map((a) => (
            <Link
              key={a.slug}
              href={`/sports/${a.slug}#animations`}
              className="hover-lift ring-glow group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-ink-900/70"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.hue}`}
              />
              <p
                className={`inline-block rounded-full bg-gradient-to-br ${a.hue} bg-clip-text text-[11px] font-bold uppercase tracking-[0.16em] text-transparent`}
              >
                {a.label}
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-ink-900 dark:text-ink-50">
                {getSport(a.slug)?.name}
              </p>
              <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{a.note}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-300">
                Watch it
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ─────────────────────  COMPARE  ───────────────────── */}
      <Section
        eyebrow="Compare"
        title="Two sports, side by side"
        subtitle="Every comparison is curated — no auto-generated spam pages."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {COMPARISON_PAIRS.slice(0, 6).map((p) => {
            const a = getSport(p.aSlug)!;
            const b = getSport(p.bSlug)!;
            const catA = CATEGORY_BY_SLUG[a.category];
            const catB = CATEGORY_BY_SLUG[b.category];
            return (
              <Link
                key={p.slug}
                href={`/compare/${p.slug}`}
                className="hover-lift ring-glow group overflow-hidden rounded-3xl border border-ink-200/70 bg-white shadow-soft dark:border-white/10 dark:bg-ink-900/70"
              >
                <div className="relative grid grid-cols-2 text-sm font-semibold text-white">
                  <div className={`relative bg-gradient-to-br ${catA.hue.from} ${catA.hue.to} px-4 py-3.5`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
                    <span className="relative">{a.name}</span>
                  </div>
                  <div className={`relative bg-gradient-to-br ${catB.hue.from} ${catB.hue.to} px-4 py-3.5 text-right`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
                    <span className="relative">{b.name}</span>
                  </div>
                  <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-700 shadow-soft dark:bg-ink-900 dark:text-ink-100">
                    vs
                  </span>
                </div>
                <p className="p-4 text-sm text-ink-700 dark:text-ink-200">{p.rationale}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ─────────────────────  EDITORIAL CLOSER  ───────────────────── */}
      <section className="container-page pb-24 pt-6">
        <div className="relative overflow-hidden rounded-3xl border border-ink-200/70 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-8 text-white shadow-soft-lg dark:border-white/10 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-brand-500 to-emerald-500 opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-500 to-amber-500 opacity-30 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
              Editorial standards
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Sourced. Verified. Explained.
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              Every sport entry ships with a "last verified" date, a confidence tag, and links to
              the sport's official rulebook. We're building this to be reference-grade — the sort of
              page you send to a friend who's just asked <em>"what is LBW?"</em>.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@gemopedia.dev"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-soft transition hover:bg-ink-100"
              >
                Suggest a sport →
              </a>
              <Link
                href="/sports"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Browse the atlas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function Section({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-page py-14 sm:py-16">
      <header className="mb-8 max-w-3xl">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300">
          <span className="inline-block h-px w-6 bg-brand-400" />
          {eyebrow}
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 dark:text-ink-50 sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-base leading-relaxed text-ink-600 dark:text-ink-300">
            {subtitle}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}

function TrustChip({ label }: { label: string }) {
  return (
    <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 dark:text-ink-200">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      {label}
    </span>
  );
}

function StatCell({
  value,
  label,
  hue,
}: {
  value: number;
  label: string;
  hue: string;
}) {
  return (
    <div className="hover-lift group relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white/70 p-4 text-center shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-ink-900/60">
      <span
        className={`pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-br ${hue} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
      />
      <p
        className={`font-display text-3xl font-bold bg-gradient-to-br ${hue} bg-clip-text text-transparent sm:text-4xl`}
      >
        {value}
      </p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-500 dark:text-ink-400">
        {label}
      </p>
    </div>
  );
}
