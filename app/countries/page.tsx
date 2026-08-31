import type { Metadata } from "next";
import Link from "next/link";
import { COUNTRIES } from "@/lib/data/countries";
import { getSportsByCountry } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sports by country — every game, every nation",
  description:
    "Discover the sports played in every country — from cricket in India to sumo in Japan, buzkashi in Afghanistan, laamb in Senegal and Aussie rules in Australia.",
  alternates: { canonical: "/countries" },
};

// Fully static SSG — no ISR reads on Vercel.
export const dynamic = "force-static";
export const revalidate = false;

export default function CountriesPage() {
  const regions = ["Asia", "Middle East", "Europe", "Africa", "North America", "South America", "Oceania"] as const;

  return (
    <div className="container-page pb-20 pt-6 sm:pt-10">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-bold text-ink-900 dark:text-ink-50 sm:text-5xl">
          Sports by country
        </h1>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
          Pick a country to see the sports that originated there or are widely played there.
          As the atlas grows, this list expands to every nation on Earth.
        </p>
      </header>

      {regions.map((region) => {
        const rows = COUNTRIES.filter((c) => c.region === region);
        if (rows.length === 0) return null;
        return (
          <section key={region} className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{region}</h2>
            <ul className="mt-3 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {rows.map((c) => {
                const count = getSportsByCountry(c.code).length;
                return (
                  <li key={c.code}>
                    <Link
                      href={`/countries/${c.code}`}
                      className="group flex items-center justify-between rounded-2xl border border-ink-200/70 bg-white px-3 py-2 text-sm text-ink-800 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-300 dark:border-white/10 dark:bg-ink-900/70 dark:text-ink-100"
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <span className="text-xl leading-none">{c.flag}</span>
                        <span className="truncate">{c.name}</span>
                      </span>
                      <span className="ml-2 shrink-0 rounded-full bg-ink-100 px-2 py-0.5 text-[11px] font-semibold text-ink-600 dark:bg-white/10 dark:text-ink-200">
                        {count}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
