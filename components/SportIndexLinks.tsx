import Link from "next/link";

export type IndexLink = { slug: string; name: string };

/**
 * A compact A–Z index of every sport in scope.
 *
 * The card grids on /sports, /categories/[slug] and /countries/[code] are
 * capped (60 cards) because rendering the whole catalog produced multi-MB
 * pages that Vercel billed as ISR reads. That cap also cut the crawlable
 * link graph down to 60 URLs while the sitemap still advertised ~1500, so
 * most sport pages had no internal links pointing at them — which is a
 * reliable route to "Crawled/Discovered — currently not indexed".
 *
 * This restores the full link graph at roughly 1/60th the cost: a plain
 * text link is ~70 bytes against ~4.6 KB for a card, so all ~1500 links
 * add ~100 KB instead of ~7 MB. On /sports the names are already in the
 * payload for client-side filtering, so only the markup is new.
 */
export function SportIndexLinks({
  sports,
  heading = "Every sport A–Z",
  description,
}: {
  sports: IndexLink[];
  heading?: string;
  description?: string;
}) {
  if (sports.length === 0) return null;

  const groups = new Map<string, IndexLink[]>();
  for (const s of [...sports].sort((a, b) => a.name.localeCompare(b.name))) {
    // Anything not starting with a letter is grouped under "#".
    const first = s.name.trim().charAt(0).toUpperCase();
    const key = /[A-Z]/.test(first) ? first : "#";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(s);
  }

  return (
    <section aria-labelledby="sport-index" className="mt-14 border-t border-ink-200/70 pt-8 dark:border-white/10">
      <h2
        id="sport-index"
        className="font-display text-xl font-bold text-ink-900 dark:text-ink-50"
      >
        {heading}
      </h2>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
        {description ?? `Full index of all ${sports.length} sports and games.`}
      </p>

      <div className="mt-6 space-y-6">
        {[...groups.entries()].map(([letter, items]) => (
          <div key={letter}>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400 dark:text-ink-500">
              {letter}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
              {items.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/sports/${s.slug}`}
                    className="text-sm text-ink-600 underline-offset-2 hover:text-brand-600 hover:underline dark:text-ink-300 dark:hover:text-brand-300"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
