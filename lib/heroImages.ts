import type { Sport } from "./types";
import { fetchWikipediaImage, slugToWikiTitle, type SportHeroImage } from "./wikiImage";

/**
 * Batch-fetch Wikipedia lead images for a list of sports at build time.
 *
 * Every fetch is deduplicated + cached by Next.js for a week (see
 * fetchWikipediaImage), so repeated calls across pages are effectively
 * free after the first cold miss. Returned as `Record<slug, image|null>`
 * so consumers can look up by sport.slug in O(1).
 */
export async function fetchHeroImages(
  sports: Sport[],
): Promise<Record<string, SportHeroImage | null>> {
  const entries = await Promise.all(
    sports.map(async (s) => {
      const title = s.wikipediaTitle ?? slugToWikiTitle(s.slug);
      const img = await fetchWikipediaImage(title);
      return [s.slug, img] as const;
    }),
  );
  return Object.fromEntries(entries);
}
