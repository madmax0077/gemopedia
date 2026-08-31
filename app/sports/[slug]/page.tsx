import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSports, getSport } from "@/lib/data";
import { SportPage } from "@/components/SportPage";
import { breadcrumbJsonLd, faqJsonLd, sportJsonLd, sportMetadata } from "@/lib/seo";
import { CATEGORY_BY_SLUG } from "@/lib/data/categories";
import { fetchWikipediaImage, slugToWikiTitle } from "@/lib/wikiImage";

interface RouteParams {
  params: { slug: string };
}

// Fully static SSG — no ISR reads on Vercel.
// All sports are known at build time; any unknown slug 404s immediately.
export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  return getAllSports().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const sport = getSport(params.slug);
  if (!sport) return { title: "Sport not found" };
  return sportMetadata(sport);
}

export default async function Page({ params }: RouteParams) {
  const sport = getSport(params.slug);
  if (!sport) return notFound();

  const cat = CATEGORY_BY_SLUG[sport.category];

  // Pull the hero photo from Wikipedia at build time (cached for a week).
  const wikiTitle = sport.wikipediaTitle ?? slugToWikiTitle(sport.slug);
  const heroImage = await fetchWikipediaImage(wikiTitle);

  const jsonLd = [
    sportJsonLd(sport),
    breadcrumbJsonLd([
      { label: "Gemopedia", href: "/" },
      { label: "Sports", href: "/sports" },
      { label: cat.name, href: `/categories/${cat.slug}` },
      { label: sport.name, href: `/sports/${sport.slug}` },
    ]),
    ...(sport.faq && sport.faq.length > 0 ? [faqJsonLd(sport.faq)] : []),
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      <SportPage sport={sport} heroImage={heroImage} />
    </>
  );
}
