import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/data/categories";
import { COUNTRIES } from "@/lib/data/countries";
import { getAllSports, COMPARISON_PAIRS } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/sports`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/categories`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/countries`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/learn`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const sports = getAllSports().map<MetadataRoute.Sitemap[number]>((s) => ({
    url: `${SITE_URL}/sports/${s.slug}`,
    lastModified: s.lastVerified ? new Date(s.lastVerified) : now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const categories = CATEGORIES.map<MetadataRoute.Sitemap[number]>((c) => ({
    url: `${SITE_URL}/categories/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const countries = COUNTRIES.map<MetadataRoute.Sitemap[number]>((c) => ({
    url: `${SITE_URL}/countries/${c.code}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const comparisons = COMPARISON_PAIRS.map<MetadataRoute.Sitemap[number]>((p) => ({
    url: `${SITE_URL}/compare/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...base, ...sports, ...categories, ...countries, ...comparisons];
}
