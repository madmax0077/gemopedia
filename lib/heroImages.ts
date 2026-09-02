import type { Sport } from "./types";
import { fetchWikipediaImage, slugToWikiTitle, type SportHeroImage } from "./wikiImage";

/**
 * The only field a card grid actually renders (see `SportCard`).
 *
 * `SportHeroImage` also carries `width`, `height`, `pageUrl`, `title` and
 * `extract` — and `extract` is a full Wikipedia summary paragraph. Passing
 * the whole record into a 1500-card grid serialised ~1 MB of text that
 * nothing rendered, which showed up directly as Vercel ISR Reads.
 * Detail pages still use the full `SportHeroImage` for photo attribution.
 */
export type CardHeroImage = { src: string };

/**
 * Same as {@link fetchHeroImages} but projected down to `{ src }`.
 *
 * Always call this with the *full* `Sport[]` (so `wikipediaTitle` overrides
 * still resolve correctly) and project the sports themselves to
 * `SportSummary` separately. The full records stay server-side and never
 * cross the serialisation boundary.
 */
export async function fetchCardHeroImages(
  sports: Sport[],
): Promise<Record<string, CardHeroImage | null>> {
  const full = await fetchHeroImages(sports);
  const out: Record<string, CardHeroImage | null> = {};
  for (const [slug, img] of Object.entries(full)) {
    out[slug] = img?.src ? { src: img.src } : null;
  }
  return out;
}

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
