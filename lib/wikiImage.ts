/**
 * Wikipedia hero-image fetch helper.
 *
 * Every sport page pulls its lead photo from Wikipedia's REST summary
 * endpoint at build time. Wikipedia serves the original files from
 * upload.wikimedia.org under Creative Commons or public-domain licences,
 * which is why we can render them directly with credit and a link back to
 * the source article.
 *
 * Usage:
 *   const img = await fetchWikipediaImage("Cricket");
 *   //  →  { src: "https://upload.wikimedia.org/…", pageUrl: "https://en.wikipedia.org/wiki/Cricket", … }
 *
 * The fetch is cached by Next.js for a week (revalidate: 7d) so a rebuild
 * or ISR call re-checks in a reasonable window. On top of that we memoize
 * every in-flight promise in a process-local Map so that the same title
 * requested by ten different pages during one build collapses to a single
 * network round-trip.
 */

import { Agent } from "undici";

export interface SportHeroImage {
  src: string;
  width: number;
  height: number;
  pageUrl: string;
  title: string;
  extract?: string;
}

/**
 * Convert a sport slug to a plausible Wikipedia article title.
 * "association-football" → "Association football"
 */
export function slugToWikiTitle(slug: string): string {
  return slug
    .split("-")
    .map((word, i) =>
      i === 0 && word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word,
    )
    .join(" ");
}

/**
 * Some development machines (particularly corporate laptops) sit behind a
 * TLS-intercepting proxy that presents a self-signed root CA. Node.js does
 * not trust it out of the box and `fetch()` throws "self-signed certificate
 * in certificate chain". To keep the developer experience smooth we relax
 * TLS validation for outbound wiki fetches when NOT in production. In
 * production this stays strict.
 */
const dispatcher =
  process.env.NODE_ENV === "production"
    ? undefined
    : new Agent({ connect: { rejectUnauthorized: false } });

/**
 * Per-process memo of in-flight/resolved promises keyed by the exact wiki
 * title. This is the single most impactful optimisation for the Vercel
 * build: without it, `/sports` (1000+ images), each `/countries/[code]`
 * page (50–300 images) and each `/categories/[slug]` page (10–200 images)
 * each spawn their own `Promise.all` of Wikipedia fetches for the same
 * sports, which is what pushes total network calls past Wikipedia's rate
 * limits and the per-page 60s timeout. With this map, the same title is
 * fetched at most once per build, regardless of how many pages ask for it.
 */
const memo = new Map<string, Promise<SportHeroImage | null>>();

/** Hard cap on how long we let a single Wikipedia summary call take. */
const REQUEST_TIMEOUT_MS = 8_000;

export async function fetchWikipediaImage(title: string): Promise<SportHeroImage | null> {
  const key = title.trim();
  const cached = memo.get(key);
  if (cached) return cached;

  const promise = (async (): Promise<SportHeroImage | null> => {
    const safe = encodeURIComponent(key.replace(/ /g, "_"));
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${safe}?redirect=true`;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch(url, {
        // Cache for a week — sport lead images barely change.
        next: { revalidate: 60 * 60 * 24 * 7 },
        headers: {
          "User-Agent":
            "GemopediaBot/1.0 (https://gemopedia.dev; hello@gemopedia.dev)",
          Accept: "application/json",
        },
        signal: controller.signal,
        // dispatcher is a valid option for Node's fetch (undici-backed).
        ...(dispatcher ? ({ dispatcher } as unknown as RequestInit) : {}),
      });
      if (!res.ok) return null;

      const data: {
        title?: string;
        extract?: string;
        thumbnail?: { source: string; width: number; height: number };
        originalimage?: { source: string; width: number; height: number };
        content_urls?: { desktop?: { page?: string } };
      } = await res.json();

      const img = data.originalimage ?? data.thumbnail;
      if (!img?.source) return null;

      return {
        src: img.source,
        width: img.width ?? 1200,
        height: img.height ?? 800,
        pageUrl:
          data.content_urls?.desktop?.page ??
          `https://en.wikipedia.org/wiki/${safe}`,
        title: data.title ?? key,
        extract: data.extract,
      };
    } catch {
      // Aborted, network error, JSON parse failure — all fall back to null so
      // the SportCard renders its gradient + glyph fallback rather than
      // failing the entire page render.
      return null;
    } finally {
      clearTimeout(timer);
    }
  })();

  memo.set(key, promise);
  return promise;
}
