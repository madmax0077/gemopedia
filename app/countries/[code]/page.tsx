import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { COUNTRIES, COUNTRY_BY_CODE } from "@/lib/data/countries";
import { getSportsByCountry } from "@/lib/data";
import { SportCard } from "@/components/SportCard";
import { fetchHeroImages } from "@/lib/heroImages";
import { breadcrumbJsonLd } from "@/lib/seo";

interface RouteParams { params: { code: string } }

export async function generateStaticParams() {
  return COUNTRIES.map((c) => ({ code: c.code }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const country = COUNTRY_BY_CODE[params.code.toUpperCase()];
  if (!country) return { title: "Country not found" };
  return {
    title: `Sports of ${country.name} — traditional, popular and national`,
    description: `Explore the sports originating from or widely played in ${country.name} — with rules, scoring, diagrams and animations for every entry.`,
    alternates: { canonical: `/countries/${country.code}` },
  };
}

export default async function CountryPage({ params }: RouteParams) {
  const country = COUNTRY_BY_CODE[params.code.toUpperCase()];
  if (!country) return notFound();

  const sports = getSportsByCountry(country.code);
  const originating = sports.filter((s) => s.countryOfOrigin === country.code);
  const played = sports.filter((s) => s.countryOfOrigin !== country.code);
  const heroImages = await fetchHeroImages(sports);

  const jsonLd = breadcrumbJsonLd([
    { label: "Gemopedia", href: "/" },
    { label: "Countries", href: "/countries" },
    { label: country.name, href: `/countries/${country.code}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-page pb-20 pt-6 sm:pt-10">
        <nav className="text-xs font-medium text-ink-500">
          <Link href="/countries" className="hover:text-ink-900 dark:hover:text-white">Countries</Link>{" "}
          › <span className="text-ink-800 dark:text-ink-200">{country.name}</span>
        </nav>
        <header className="mt-4 flex items-center gap-4">
          <span className="text-6xl leading-none">{country.flag}</span>
          <div>
            <h1 className="font-display text-4xl font-bold text-ink-900 dark:text-ink-50 sm:text-5xl">
              Sports of {country.name}
            </h1>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-ink-500">{country.region}</p>
          </div>
        </header>

        {originating.length > 0 && (
          <section className="mt-8">
            <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-ink-50">
              Originating in {country.name}
            </h2>
            <p className="text-sm text-ink-500">
              Sports whose history and codification began here.
            </p>
            <div className="mt-4 cards-grid-dense">
              {originating.map((s) => (
                <SportCard key={s.slug} sport={s} heroImage={heroImages[s.slug]} />
              ))}
            </div>
          </section>
        )}

        {played.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-ink-50">
              Widely played in {country.name}
            </h2>
            <div className="mt-4 cards-grid-dense">
              {played.map((s) => (
                <SportCard key={s.slug} sport={s} heroImage={heroImages[s.slug]} />
              ))}
            </div>
          </section>
        )}

        {sports.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-ink-300 p-8 text-center text-sm text-ink-500 dark:border-ink-700">
            We haven't documented sports for {country.name} yet — the atlas is growing weekly.
          </div>
        )}
      </div>
    </>
  );
}
