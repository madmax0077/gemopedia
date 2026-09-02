import Link from "next/link";
import type { SportSummary } from "@/lib/types";
import type { CardHeroImage } from "@/lib/heroImages";
import { CATEGORY_BY_SLUG } from "@/lib/data/categories";
import { countryFlag, countryName } from "@/lib/data/countries";
import { categoryIcon } from "@/lib/icons";

type Props = {
  sport: SportSummary;
  showCategory?: boolean;
  /**
   * Optional Wikipedia hero image. When provided, it renders full-bleed
   * inside the card's coloured header band with a category-tinted overlay
   * so text and chips stay readable. When absent (e.g. offline dev or a
   * sport with no Wikipedia photo) the card falls back to the pure
   * gradient design.
   *
   * Deliberately narrowed to `{ src }` — the card renders nothing else, and
   * shipping the full `SportHeroImage` (which includes a Wikipedia
   * `extract` paragraph) across a large grid cost ~1 MB per listing page.
   */
  heroImage?: CardHeroImage | null;
};

/**
 * Premium sport card used in every listing.
 *
 * The header uses the sport's category gradient plus a soft radial-vignette
 * pattern to feel painterly. If a heroImage is passed, it renders as a
 * full-bleed photo beneath the gradient. On hover the whole card lifts,
 * glows in the brand hue, and the arrow slides.
 */
export function SportCard({ sport, showCategory = true, heroImage }: Props) {
  const cat = CATEGORY_BY_SLUG[sport.category];
  const players = sport.players?.perTeam
    ? `${sport.players.perTeam} per team`
    : sport.players?.min && sport.players?.max
      ? `${sport.players.min}–${sport.players.max}`
      : sport.players?.note ?? null;

  return (
    <Link
      href={`/sports/${sport.slug}`}
      className="hover-lift ring-glow group relative flex flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-soft dark:border-white/10 dark:bg-ink-900/70"
    >
      {/* Colourful hero band — 16:10 aspect keeps it consistent across grid densities */}
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${cat.hue.from} ${cat.hue.to}`}
      >
        {/* Real photo (Wikipedia) — sits underneath the tint layers. */}
        {heroImage?.src && (
          <img
            src={heroImage.src}
            alt={`${sport.name} — action photo`}
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {/* Category tint on top of the photo (only when photo present) */}
        {heroImage?.src && (
          <div
            aria-hidden
            className={`absolute inset-0 bg-gradient-to-br ${cat.hue.from} ${cat.hue.to} opacity-55 mix-blend-multiply`}
          />
        )}
        {/* Bottom fade so chips at the base stay legible over the photo */}
        {heroImage?.src && (
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
        )}

        {/* Fallback illustration when we don't have a Wikipedia photo.
            A large watermark-style category glyph + the sport's initials keeps
            the card feeling authored rather than "photo missing". */}
        {!heroImage?.src && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <span className="select-none font-display text-[7rem] leading-none text-white/25 drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)] sm:text-[8rem]">
              {categoryIcon(cat.icon)}
            </span>
          </div>
        )}
        {!heroImage?.src && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-10"
          >
            <span className="rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/95 backdrop-blur-sm">
              {sport.name}
            </span>
          </div>
        )}

        {/* Painterly light + shadow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(0,0,0,0.30),transparent_55%)]" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:22px_22px] mix-blend-overlay" />
        {/* Corner shine on hover */}
        <div className="absolute -inset-x-8 -top-8 h-24 rotate-12 bg-white/25 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3 text-white/95">
          <span className="rounded-full bg-black/25 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm">
            {cat.name}
          </span>
          {sport.isOlympic && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> Olympic
            </span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
          <span className="text-3xl drop-shadow">{countryFlag(sport.countryOfOrigin)}</span>
          {sport.popularity && (
            <span className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              {sport.popularity}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold tracking-tight text-ink-900 dark:text-ink-50 sm:text-lg">
          {sport.name}
        </h3>
        {showCategory && sport.countryOfOrigin && (
          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-ink-500 dark:text-ink-400">
            From {countryName(sport.countryOfOrigin)}
          </p>
        )}
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          {sport.shortDescription}
        </p>

        {/* Quick facts strip */}
        {(players || sport.sportType || sport.indoorOutdoor) && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {players && (
              <span className="rounded-full border border-ink-200/70 bg-ink-50/80 px-2 py-0.5 text-[10px] font-medium text-ink-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300">
                {players}
              </span>
            )}
            {sport.sportType && (
              <span className="rounded-full border border-ink-200/70 bg-ink-50/80 px-2 py-0.5 text-[10px] font-medium text-ink-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300">
                {sport.sportType === "team" ? "Team" : sport.sportType === "individual" ? "Individual" : "Mixed"}
              </span>
            )}
            {sport.indoorOutdoor && (
              <span className="rounded-full border border-ink-200/70 bg-ink-50/80 px-2 py-0.5 text-[10px] font-medium text-ink-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300">
                {sport.indoorOutdoor.replace(/-/g, " ")}
              </span>
            )}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between text-xs font-semibold text-brand-600 dark:text-brand-300">
          <span>Read the guide</span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 transition-transform duration-300 group-hover:translate-x-0.5 dark:bg-brand-900/40">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
