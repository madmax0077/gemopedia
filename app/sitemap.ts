import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/data/categories";
import { COUNTRIES } from "@/lib/data/countries";
import { getAllSports, isSportIndexable, COMPARISON_PAIRS } from "@/lib/data";
import { SITE_CONTENT_REVISION, SITE_URL } from "@/lib/seo";

// Required for `output: "export"` — without it the build fails with
// "not configured on route /sitemap.xml with output: export".
export const dynamic = "force-static";
export const revalidate = false;

/**
 * Every URL carries a `lastmod`. Entries without one give a crawler no reason
 * to revisit, which is how the listing pages sat unchanged in Google's view
 * even after the link graph under them was rebuilt.
 *
 * The date comes from {@link SITE_CONTENT_REVISION} — a hand-maintained
 * release marker — rather than build time, so a redeploy that changes nothing
 * does not re-announce the whole catalog as modified.
 */
const REVISED = new Date(SITE_CONTENT_REVISION);

/** A per-page date is only a better signal than the release if it is newer. */
function lastModified(pageDate?: string): Date {
  if (!pageDate) return REVISED;
  const parsed = new Date(pageDate);
  return Number.isFinite(parsed.getTime()) && parsed > REVISED ? parsed : REVISED;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: REVISED, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/sports`, lastModified: REVISED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/categories`, lastModified: REVISED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/countries`, lastModified: REVISED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/compare`, lastModified: REVISED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/learn`, lastModified: REVISED, changeFrequency: "monthly", priority: 0.6 },
  ];

  const sports = getAllSports()
    .filter(isSportIndexable)
    .map<MetadataRoute.Sitemap[number]>((s) => ({
      url: `${SITE_URL}/sports/${s.slug}`,
      lastModified: lastModified(s.lastVerified),
      changeFrequency: "monthly",
      priority: 0.85,
    }));

  const categories = CATEGORIES.map<MetadataRoute.Sitemap[number]>((c) => ({
    url: `${SITE_URL}/categories/${c.slug}`,
    lastModified: REVISED,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const countries = COUNTRIES.map<MetadataRoute.Sitemap[number]>((c) => ({
    url: `${SITE_URL}/countries/${c.code}`,
    lastModified: REVISED,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const comparisons = COMPARISON_PAIRS.map<MetadataRoute.Sitemap[number]>((p) => ({
    url: `${SITE_URL}/compare/${p.slug}`,
    lastModified: REVISED,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...base, ...sports, ...categories, ...countries, ...comparisons];
}
