import type { Sport } from "./types";
import { fetchWikipediaImage, slugToWikiTitle, type SportHeroImage } from "./wikiImage";

/**
 * Batch-fetch Wikipedia lead images for a list of sports at build time.
 *
 * Every fetch is deduplicated + cached by Next.js for a week AND memoized
 * process-wide in `fetchWikipediaImage`, so repeated calls across pages are
 * effectively free after the first cold miss. Returned as
 * `Record<slug, image|null>` so consumers can look up by sport.slug in O(1).
 *
 * We also cap in-flight fetches at `MAX_CONCURRENCY` so that a page which
 * requests hero images for 1000+ sports (e.g. `/sports`) doesn't spawn
 * 1000+ simultaneous Wikipedia requests — which is exactly what was
 * tripping Vercel's per-page 60s timeout and Wikipedia's rate limiter,
 * causing static page generation to fail across the board.
 */
const MAX_CONCURRENCY = 8;

export async function fetchHeroImages(
  sports: Sport[],
): Promise<Record<string, SportHeroImage | null>> {
  const result: Record<string, SportHeroImage | null> = {};
  let cursor = 0;

  async function worker() {
    while (cursor < sports.length) {
      const i = cursor++;
      const s = sports[i];
      if (!s) return;
      const title = s.wikipediaTitle ?? slugToWikiTitle(s.slug);
      result[s.slug] = await fetchWikipediaImage(title);
    }
  }

  const workers = Array.from(
    { length: Math.min(MAX_CONCURRENCY, sports.length) },
    () => worker(),
  );
  await Promise.all(workers);
  return result;
}
