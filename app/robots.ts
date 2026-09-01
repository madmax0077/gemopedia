import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Known aggressive AI/data-mining crawlers that repeatedly re-crawl the
 * full 1500+ page catalog. Each crawl of a cold region causes CDN misses
 * that fall through to ISR durable storage and cost real money.
 * We block them explicitly while keeping the major search engines
 * (Googlebot, Bingbot, DuckDuckBot, Applebot) allowed.
 */
const BLOCKED_AI_AND_SCRAPERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "cohere-ai",
  "Google-Extended",
  "PerplexityBot",
  "Bytespider",
  "PetalBot",
  "Amazonbot",
  "Applebot-Extended",
  "ImagesiftBot",
  "CCBot",
  "DataForSeoBot",
  "SemrushBot",
  "AhrefsBot",
  "MJ12bot",
  "DotBot",
  "BLEXBot",
  "Timpibot",
  "Diffbot",
  "omgili",
  "FacebookBot",
  "Meta-ExternalAgent",
  "meta-externalagent",
  "Bytedance",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...BLOCKED_AI_AND_SCRAPERS.map((ua) => ({
        userAgent: ua,
        disallow: "/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
