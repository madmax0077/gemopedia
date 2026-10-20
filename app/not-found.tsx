import Link from "next/link";
import { CATEGORIES } from "@/lib/data/categories";

const POPULAR = [
  { slug: "cricket", name: "Cricket" },
  { slug: "association-football", name: "Football" },
  { slug: "chess", name: "Chess" },
  { slug: "kabaddi", name: "Kabaddi" },
  { slug: "sumo", name: "Sumo" },
  { slug: "formula-1", name: "Formula 1" },
];

export default function NotFound() {
  return (
    <div className="container-page pb-24 pt-10 sm:pt-16">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
        Error 404
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 dark:text-ink-50 sm:text-5xl">
        That page is out of bounds
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
        The address may be mistyped, or the page may have moved. Start from the full list of
        sports, or pick a popular one below.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/sports"
          className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-ink-900"
        >
          Browse all sports
        </Link>
        <Link
          href="/"
          className="rounded-full border border-ink-300 px-5 py-2.5 text-sm font-semibold text-ink-800 dark:border-white/20 dark:text-ink-100"
        >
          Go to the homepage
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-xl font-bold text-ink-900 dark:text-ink-50">Popular sports</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {POPULAR.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/sports/${s.slug}`}
                className="inline-flex rounded-full border border-ink-200 bg-white px-3 py-1.5 text-sm text-ink-800 hover:border-brand-400 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-bold text-ink-900 dark:text-ink-50">Browse by category</h2>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/categories/${c.slug}`}
                className="text-sm text-ink-600 underline-offset-2 hover:text-brand-600 hover:underline dark:text-ink-300 dark:hover:text-brand-300"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
