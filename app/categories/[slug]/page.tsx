import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, CATEGORY_BY_SLUG } from "@/lib/data/categories";
import { getSportsByCategory } from "@/lib/data";
import { SportCard } from "@/components/SportCard";
import { breadcrumbJsonLd } from "@/lib/seo";
import type { SportCategory } from "@/lib/types";

interface RouteParams { params: { slug: string } }

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

export default function CategoryPage({ params }: RouteParams) {
  const cat = CATEGORY_BY_SLUG[params.slug as SportCategory];
  if (!cat) return notFound();

  const sports = getSportsByCategory(cat.slug);

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
          {sports.map((s) => (
            <SportCard key={s.slug} sport={s} showCategory={false} />
          ))}
        </div>
        {sports.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-ink-300 p-8 text-center text-sm text-ink-500 dark:border-ink-700">
            No sports yet in this category — the catalog is growing weekly.
          </div>
        )}
      </div>
    </>
  );
}
