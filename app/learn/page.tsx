import type { Metadata } from "next";
import Link from "next/link";
import { getAllSports, toSportSummary } from "@/lib/data";
import { CATEGORY_BY_SLUG } from "@/lib/data/categories";

export const metadata: Metadata = {
  title: "Learning paths — teach me any sport",
  description:
    "Progressive learning paths for every sport in the atlas. Pick a sport, pick a level (beginner, intermediate, advanced) and follow the steps.",
  alternates: { canonical: "/learn" },
};

// Fully static SSG — no ISR reads on Vercel.
export const dynamic = "force-static";
export const revalidate = false;

/** Tiles rendered before deferring to the directory. */
const LEARN_LIMIT = 60;

export default function LearnHubPage() {
  const withPaths = getAllSports().filter((s) => (s.learningPaths?.length ?? 0) > 0);
  // Project to just the four fields the tiles render, cap the list, and trim
  // the description to what `line-clamp-2` can show. Mapping every full
  // `Sport` record serialised the whole catalog into the RSC payload — ~1.6 MB
  // for a page of link tiles.
  const sports = withPaths.slice(0, LEARN_LIMIT).map((s) => ({
    slug: s.slug,
    name: s.name,
    category: s.category,
    shortDescription: toSportSummary(s).shortDescription,
    levels: (s.learningPaths ?? []).map((p) => p.level).join(" · "),
  }));

  return (
    <div className="container-page pb-20 pt-6 sm:pt-10">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-bold text-ink-900 dark:text-ink-50 sm:text-5xl">
          Teach me a sport
        </h1>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
          Progressive step-by-step paths — the fastest way to go from "I don't understand this
          game" to "now I do." Every path lives inside its sport page, right after the diagrams.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sports.map((s) => {
          const cat = CATEGORY_BY_SLUG[s.category];
          return (
            <Link
              key={s.slug}
              href={`/sports/${s.slug}#learn`}
              className={`rounded-3xl border border-ink-200/70 bg-gradient-to-br ${cat.hue.from} ${cat.hue.to} p-5 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-ink-700/70`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
                {s.levels}
              </p>
              <h2 className="mt-1 font-display text-xl font-bold">{s.name}</h2>
              <p className="mt-2 text-sm text-white/95 line-clamp-2">{s.shortDescription}</p>
              <p className="mt-3 text-xs font-medium text-white/85">Start learning →</p>
            </Link>
          );
        })}
      </div>

      {withPaths.length > sports.length && (
        <div className="mt-8">
          <Link
            href="/sports"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-300 bg-white/70 px-4 py-2 text-xs font-semibold text-ink-800 transition hover:border-brand-400 dark:border-white/10 dark:bg-ink-900/50 dark:text-ink-100"
          >
            Showing {sports.length} of {withPaths.length} guided sports — browse the full directory →
          </Link>
        </div>
      )}
    </div>
  );
}
