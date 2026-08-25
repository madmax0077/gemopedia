import type { Metadata } from "next";
import type { Sport } from "@/lib/types";

/** Base site URL — override with NEXT_PUBLIC_SITE_URL for staging / production. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gemopedia.online";
export const SITE_NAME = "Gemopedia";
export const SITE_TAGLINE = "Every game. Explained.";

export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

/** Sport-page metadata factory — everything on the record influences SEO. */
export function sportMetadata(sport: Sport): Metadata {
  const title = `${sport.name} — how it works, rules, scoring & terminology`;
  const description =
    sport.shortDescription.length > 155
      ? `${sport.shortDescription.slice(0, 152)}…`
      : sport.shortDescription;

  return {
    title,
    description,
    keywords: buildKeywords(sport),
    alternates: { canonical: `/sports/${sport.slug}` },
    openGraph: {
      title: `${sport.name} — Gemopedia`,
      description,
      url: absoluteUrl(`/sports/${sport.slug}`),
      siteName: SITE_NAME,
      type: "article",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${sport.name} — Gemopedia`,
      description,
    },
  };
}

function buildKeywords(sport: Sport): string[] {
  const kw = new Set<string>([
    sport.name.toLowerCase(),
    `${sport.name.toLowerCase()} rules`,
    `${sport.name.toLowerCase()} scoring`,
    `how does ${sport.name.toLowerCase()} work`,
    `what is ${sport.name.toLowerCase()}`,
    sport.category.replace(/-/g, " "),
  ]);
  sport.aliases?.forEach((a) => kw.add(a.toLowerCase()));
  sport.variants?.forEach((v) => kw.add(v.replace(/-/g, " ")));
  return [...kw];
}

/* -------------------------------------------------------------------------- */
/*  JSON-LD builders — emit as <script type="application/ld+json"> from       */
/*  server components so crawlers see it on first render.                      */
/* -------------------------------------------------------------------------- */

interface JsonLdBreadcrumbItem {
  label: string;
  href: string;
}

export function breadcrumbJsonLd(items: JsonLdBreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: absoluteUrl(it.href),
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

/** Sport → schema.org "Thing" with sameAs and about links. */
export function sportJsonLd(sport: Sport) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: absoluteUrl(`/sports/${sport.slug}`),
    headline: `${sport.name} — how it works`,
    description: sport.shortDescription,
    inLanguage: "en",
    articleSection: sport.category,
    datePublished: sport.lastVerified,
    dateModified: sport.lastVerified,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    about: {
      "@type": "Thing",
      name: sport.name,
      alternateName: sport.aliases,
      description: sport.longDescription ?? sport.shortDescription,
    },
  };
}
