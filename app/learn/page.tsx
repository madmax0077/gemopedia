import type { Metadata } from "next";
import Link from "next/link";
import { getAllSports } from "@/lib/data";
import { CATEGORY_BY_SLUG } from "@/lib/data/categories";

export const metadata: Metadata = {
  title: "Learning paths — teach me any sport",
  description:
    "Progressive learning paths for every sport in the atlas. Pick a sport, pick a level (beginner, intermediate, advanced) and follow the steps.",
  alternates: { canonical: "/learn" },
};

export default function LearnHubPage() {
  const sports = getAllSports().filter((s) => (s.learningPaths?.length ?? 0) > 0);

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
                {(s.learningPaths ?? []).map((p) => p.level).join(" · ")}
              </p>
              <h2 className="mt-1 font-display text-xl font-bold">{s.name}</h2>
              <p className="mt-2 text-sm text-white/95 line-clamp-2">{s.shortDescription}</p>
              <p className="mt-3 text-xs font-medium text-white/85">Start learning →</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
