import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/data/categories";
import { getSportsByCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sport categories — from ball sports to mind sports",
  description:
    "Browse Gemopedia by category — ball sports, combat sports, motor sports, mind sports, traditional sports and more.",
  alternates: { canonical: "/categories" },
};

// Fully static SSG — no ISR reads on Vercel.
export const dynamic = "force-static";
export const revalidate = false;

export default function CategoriesPage() {
  return (
    <div className="container-page pb-20 pt-6 sm:pt-10">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 dark:text-ink-50 sm:text-5xl">
          Sport categories
        </h1>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
          The top-level categories that cover every organised sport and game on Earth. Categories
          are how the atlas grows — new sports slot into the same taxonomy without touching
          frontend code.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {CATEGORIES.map((c) => {
          const count = getSportsByCategory(c.slug).length;
          return (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="hover-lift ring-glow group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-white shadow-soft dark:border-white/10 dark:bg-ink-900/70"
            >
              <div
                className={`relative h-24 bg-gradient-to-br ${c.hue.from} ${c.hue.to} p-4 text-white`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                <div className="relative">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85">
                    {count} sport{count === 1 ? "" : "s"}
                  </p>
                  <h2 className="mt-1 font-display text-lg font-bold leading-tight">{c.name}</h2>
                </div>
              </div>
              <p className="p-4 text-sm leading-relaxed text-ink-600 line-clamp-3 dark:text-ink-300">
                {c.short}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
