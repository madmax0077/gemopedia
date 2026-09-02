import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, CATEGORY_BY_SLUG } from "@/lib/data/categories";
import { getSportsByCategory, toSportSummary } from "@/lib/data";
import { SportCard } from "@/components/SportCard";
import { fetchCardHeroImages } from "@/lib/heroImages";
import { breadcrumbJsonLd } from "@/lib/seo";
import type { SportCategory } from "@/lib/types";

interface RouteParams { params: { slug: string } }

/** Cards rendered before deferring to the full directory. */
const CATEGORY_LIMIT = 60;

// Fully static SSG — no ISR reads on Vercel.
export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const cat = CATEGORY_BY_SLUG[params.slug as SportCategory];
  if (!cat) return { title: "Category not found" };
  return {
    title: `${cat.name} — every sport, one place`,
    description: cat.description,
    alternates: { canonical: `/categories/${cat.slug}` },
  };
}

export default async function CategoryPage({ params }: RouteParams) {
  const cat = CATEGORY_BY_SLUG[params.slug as SportCategory];
  if (!cat) return notFound();

  const sports = getSportsByCategory(cat.slug);
  // Images resolve off the full records; only light shapes cross into the
  // rendered tree (see the note in lib/heroImages.ts).
  const heroImages = await fetchCardHeroImages(sports);
  // Cap the rendered grid — large categories (video games, board games) ran
  // to 1.3 MB of cards. The rest is one click away in the directory.
  const cards = sports.slice(0, CATEGORY_LIMIT).map(toSportSummary);

  const jsonLd = breadcrumbJsonLd([
    { label: "Gemopedia", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: cat.name, href: `/categories/${cat.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-page pb-20 pt-6 sm:pt-10">
        <nav className="text-xs font-medium text-ink-500 dark:text-ink-400">
          <Link href="/categories" className="hover:text-ink-900 dark:hover:text-white">Categories</Link>{" "}
          › <span className="text-ink-800 dark:text-ink-200">{cat.name}</span>
        </nav>
        <header
          className={`mt-4 rounded-3xl border border-ink-200/70 bg-gradient-to-br ${cat.hue.from} ${cat.hue.to} p-8 text-white shadow-lg dark:border-ink-700/70`}
        >
          <h1 className="font-display text-4xl font-bold sm:text-5xl">{cat.name}</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/95">{cat.description}</p>
        </header>
        <p className="mt-6 text-sm text-ink-500">
          <strong className="text-ink-900 dark:text-ink-50">{sports.length}</strong> sport{sports.length === 1 ? "" : "s"} in {cat.name.toLowerCase()}.
        </p>
        <div className="mt-4 cards-grid-dense">
          {cards.map((s) => (
            <SportCard
              key={s.slug}
              sport={s}
              showCategory={false}
              heroImage={heroImages[s.slug]}
            />
          ))}
        </div>
        {sports.length > cards.length && (
          <div className="mt-5">
            <Link
              href={`/sports#category=${cat.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-300 bg-white/70 px-4 py-2 text-xs font-semibold text-ink-800 transition hover:border-brand-400 dark:border-white/10 dark:bg-ink-900/50 dark:text-ink-100"
            >
              Showing {cards.length} of {sports.length} — see all in the directory →
            </Link>
          </div>
        )}
        {sports.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-ink-300 p-8 text-center text-sm text-ink-500 dark:border-ink-700">
            No sports yet in this category — the catalog is growing weekly.
          </div>
        )}
      </div>
    </>
  );
}
