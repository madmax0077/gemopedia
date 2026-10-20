import type { Metadata } from "next";
import type { Sport } from "@/lib/types";

/** Base site URL — override with NEXT_PUBLIC_SITE_URL for staging / production. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gemopedia.online";
export const SITE_NAME = "Gemopedia";
export const SITE_TAGLINE = "Every game. Explained.";

/**
 * Date of the last release that changed published content or site structure.
 *
 * Bump this by hand when shipping something a crawler should come back for —
 * new or rewritten entries, changes to what is indexable, or a rebuild of the
 * internal link graph. Do NOT replace it with `new Date()`: a build-time
 * stamp marks all ~1500 URLs as modified on every redeploy, including no-op
 * ones, and Google responds by ignoring `lastmod` on the whole site.
 */
export const SITE_CONTENT_REVISION = "2026-10-20";

/** Applied to pages that stay available to readers but are too thin to index. */
export const NOINDEX_FOLLOW = {
  index: false,
  follow: true,
  googleBot: { index: false, follow: true },
} as const;

export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

/** Fallback share image (1200x630) — see scripts/gen-og-default.mjs. */
export const DEFAULT_OG_IMAGE = {
  url: "/og-default.png",
  width: 1200,
  height: 630,
  alt: "Gemopedia — Every game. Explained.",
};

/**
 * The root layout appends " | Gemopedia" (12 characters). Search results cut
 * titles at roughly 60 characters, so the page-specific part gets 48.
 */
const TITLE_BUDGET = 48;

const PLAY_CATEGORIES = new Set(["video-games", "esports", "tabletop-rpg", "wargames"]);

/** Longest descriptive title that still fits; falls back to the bare name. */
export function sportTitle(sport: Sport): string {
  const play = PLAY_CATEGORIES.has(sport.category);
  const candidates = play
    ? [`${sport.name}: How to Play & Key Rules`, `${sport.name}: How to Play`, `${sport.name} Guide`]
    : [
        `${sport.name}: Rules, Scoring & How to Play`,
        `${sport.name}: Rules & How to Play`,
        `${sport.name} Rules & Scoring`,
        `${sport.name} Rules`,
      ];
  return candidates.find((t) => t.length <= TITLE_BUDGET) ?? sport.name;
}

/**
 * Meta descriptions read best between ~110 and 155 characters. Several
 * entries have a one-line summary shorter than that, so pad from the start of
 * the long description rather than leaving a thin snippet.
 */
export function sportDescription(sport: Sport): string {
  const short = sport.shortDescription.trim();
  let text = short;
  if (short.length < 110 && sport.longDescription) {
    const sentences = sport.longDescription.trim().split(/(?<=[.!?])\s+/);
    for (const sentence of sentences) {
      if (sentence.length === 0 || short.includes(sentence)) continue;
      const next = `${text} ${sentence}`;
      if (next.length > 155) break;
      text = next;
      if (text.length >= 110) break;
    }
  }
  return text.length > 155 ? `${text.slice(0, 152).trimEnd()}…` : text;
}

/** Sport-page metadata factory — everything on the record influences SEO. */
export function sportMetadata(
  sport: Sport,
  image?: { src: string; width?: number; height?: number } | null,
): Metadata {
  const title = sportTitle(sport);
  const description = sportDescription(sport);
  const shareImage = image?.src
    ? { url: image.src, width: image.width, height: image.height, alt: `${sport.name} — Gemopedia` }
    : DEFAULT_OG_IMAGE;

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
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${sport.name} — Gemopedia`,
      description,
      images: [shareImage.url],
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
export function sportJsonLd(sport: Sport, image?: { src: string } | null) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/sports/${sport.slug}`) },
    headline: `${sport.name} — how it works`,
    description: sportDescription(sport),
    image: [image?.src ?? absoluteUrl(DEFAULT_OG_IMAGE.url)],
    inLanguage: "en",
    isAccessibleForFree: true,
    articleSection: sport.category,
    datePublished: sport.lastVerified,
    dateModified: sport.lastVerified,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") },
    },
    about: {
      "@type": "Thing",
      name: sport.name,
      alternateName: sport.aliases,
      description: sport.longDescription ?? sport.shortDescription,
    },
  };
}
