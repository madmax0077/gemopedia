import type { Metadata } from "next";
import Link from "next/link";
import { COMPARISON_PAIRS, getSport } from "@/lib/data";
import { CATEGORY_BY_SLUG } from "@/lib/data/categories";
import { countryFlag } from "@/lib/data/countries";

export const metadata: Metadata = {
  title: "Compare sports — side by side",
  description:
    "See how sports stack up head-to-head — players, field, duration, scoring, rules and popularity. Cricket vs Hurling, Football vs Aussie Rules, Sumo vs Senegalese wrestling.",
  alternates: { canonical: "/compare" },
};

// Fully static SSG — no ISR reads on Vercel.
export const dynamic = "force-static";
export const revalidate = false;

export default function CompareIndexPage() {
  return (
    <div className="container-page pb-20 pt-6 sm:pt-10">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-bold text-ink-900 dark:text-ink-50 sm:text-5xl">
          Compare sports
        </h1>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
          Editorially curated head-to-head comparisons — we don't generate every possible pair
          (that would be spammy); each comparison exists because it actually helps you understand
          something.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {COMPARISON_PAIRS.map((p) => {
          const a = getSport(p.aSlug)!;
          const b = getSport(p.bSlug)!;
          const catA = CATEGORY_BY_SLUG[a.category];
          const catB = CATEGORY_BY_SLUG[b.category];
          return (
            <Link
              key={p.slug}
              href={`/compare/${p.slug}`}
              className="group overflow-hidden rounded-3xl border border-ink-200/70 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-ink-700/70 dark:bg-ink-900/70"
            >
              <div className="grid grid-cols-2">
                <div className={`bg-gradient-to-br ${catA.hue.from} ${catA.hue.to} p-4 text-white`}>
                  <p className="text-2xl">{countryFlag(a.countryOfOrigin)}</p>
                  <p className="mt-1 font-display text-xl font-bold">{a.name}</p>
                </div>
                <div className={`bg-gradient-to-br ${catB.hue.from} ${catB.hue.to} p-4 text-white`}>
                  <p className="text-2xl">{countryFlag(b.countryOfOrigin)}</p>
                  <p className="mt-1 font-display text-xl font-bold">{b.name}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-base font-semibold text-ink-900 dark:text-ink-50">{p.headline}</p>
                <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{p.rationale}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
