import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/data/categories";
import { COUNTRIES } from "@/lib/data/countries";
import { getAllSports, COMPARISON_PAIRS } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

// Required for `output: "export"` — without it the build fails with
// "not configured on route /sitemap.xml with output: export".
export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  // `lastModified` is deliberately omitted unless we have a real signal for
  // it. Stamping `new Date()` on every entry told crawlers that all ~1750
  // URLs changed on each deploy, which invited a full re-crawl every time —
  // and each crawl of a cold region is what generates cache misses.
  const base: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/sports`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/categories`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/countries`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/compare`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/learn`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const sports = getAllSports().map<MetadataRoute.Sitemap[number]>((s) => ({
    url: `${SITE_URL}/sports/${s.slug}`,
    ...(s.lastVerified ? { lastModified: new Date(s.lastVerified) } : {}),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const categories = CATEGORIES.map<MetadataRoute.Sitemap[number]>((c) => ({
    url: `${SITE_URL}/categories/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const countries = COUNTRIES.map<MetadataRoute.Sitemap[number]>((c) => ({
    url: `${SITE_URL}/countries/${c.code}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const comparisons = COMPARISON_PAIRS.map<MetadataRoute.Sitemap[number]>((p) => ({
    url: `${SITE_URL}/compare/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...base, ...sports, ...categories, ...countries, ...comparisons];
}
