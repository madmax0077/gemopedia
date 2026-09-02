"use client";
import { useEffect, useMemo, useState } from "react";
import type { SportSummary } from "@/lib/types";
import type { CardHeroImage } from "@/lib/heroImages";
import { CATEGORIES, CATEGORY_BY_SLUG } from "@/lib/data/categories";
import { COUNTRIES } from "@/lib/data/countries";
import { SportCard } from "@/components/SportCard";

type Props = {
  sports: SportSummary[];
  /**
   * Optional pre-fetched Wikipedia hero images keyed by sport slug. Passed
   * down from the server component so every card in the directory can render
   * a real photo above its category gradient. When absent the cards fall back
   * to the gradient-only design.
   */
  heroImages?: Record<string, CardHeroImage | null>;
};

/**
 * Filterable sports directory — receives the full pre-loaded list from a
 * server component and does all filtering client-side (zero requests).
 *
 * When the catalog grows past ~500 sports we'll add server-side filtering
 * and pagination (see ARCHITECTURE.md §9); for now client-side is fast and
 * SEO-safe because the initial payload already contains everything.
 */
/**
 * How many cards to put in the DOM at once. Rendering the whole catalog
 * inflated `/sports` to ~7 MB of HTML, which Vercel bills as ISR Reads in
 * 8 KB units on every CDN miss. Filtering still runs across every sport —
 * only the visible slice is capped.
 */
const PAGE_SIZE = 60;

export function SportsDirectory({ sports, heroImages }: Props) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [country, setCountry] = useState<string>("all");
  const [type, setType] = useState<"all" | "team" | "individual">("all");
  const [olympic, setOlympic] = useState<"all" | "yes" | "no">("all");
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Country and category pages cap their own grids and link here for the full
  // list, e.g. `/sports#country=US`. A hash is used rather than a query string
  // so this page can stay statically rendered.
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const params = new URLSearchParams(hash);
    const c = params.get("country");
    const cat = params.get("category");
    if (c) setCountry(c.toUpperCase());
    if (cat) setCategory(cat);
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return sports.filter((s) => {
      if (category !== "all" && s.category !== category) return false;
      if (country !== "all") {
        const hit = s.countryOfOrigin === country || s.countriesPlayed?.includes(country);
        if (!hit) return false;
      }
      if (type !== "all" && s.sportType !== type) return false;
      if (olympic === "yes" && !s.isOlympic) return false;
      if (olympic === "no" && s.isOlympic) return false;
      if (query) {
        const hay = [
          s.name,
          s.officialName,
          ...(s.aliases ?? []),
          s.shortDescription,
          CATEGORY_BY_SLUG[s.category].name,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });
  }, [q, category, country, type, olympic, sports]);

  const anyFilter = q || category !== "all" || country !== "all" || type !== "all" || olympic !== "all";

  // Any filter change should bring the user back to the top of the results
  // rather than keeping a deep "load more" offset from the previous query.
  const resetVisible = () => setVisible(PAGE_SIZE);
  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - shown.length;

  return (
    <div>
      <div className="surface-panel p-5 sm:p-6">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-ink-400 dark:text-ink-500">
            🔎
          </span>
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); resetVisible(); }}
            placeholder="Search for cricket, LBW, sumo, buzkashi, offside, house…"
            className="w-full rounded-2xl border border-ink-200/70 bg-white pl-11 pr-4 py-3.5 text-base shadow-inner outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-ink-900 dark:text-white dark:focus:ring-brand-900/40"
          />
          {q && (
            <button
              onClick={() => { setQ(""); resetVisible(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-ink-100 px-2 py-0.5 text-xs text-ink-600 hover:bg-ink-200 dark:bg-white/10 dark:text-ink-200"
              type="button"
            >
              Clear
            </button>
          )}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <FilterSelect label="Category" value={category} onChange={(v) => { setCategory(v); resetVisible(); }}>
            <option value="all">Every category</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </FilterSelect>

          <FilterSelect label="Country" value={country} onChange={(v) => { setCountry(v); resetVisible(); }}>
            <option value="all">Every country</option>
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>{c.name}</option>
            ))}
          </FilterSelect>

          <FilterSelect label="Type" value={type} onChange={(v) => { setType(v as "all" | "team" | "individual"); resetVisible(); }}>
            <option value="all">Team or individual</option>
            <option value="team">Team</option>
            <option value="individual">Individual</option>
          </FilterSelect>

          <FilterSelect label="Olympic" value={olympic} onChange={(v) => { setOlympic(v as "all" | "yes" | "no"); resetVisible(); }}>
            <option value="all">Any</option>
            <option value="yes">Olympic</option>
            <option value="no">Non-Olympic</option>
          </FilterSelect>
        </div>

        {anyFilter && (
          <button
            type="button"
            onClick={() => { setQ(""); setCategory("all"); setCountry("all"); setType("all"); setOlympic("all"); resetVisible(); }}
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:underline dark:text-brand-300"
          >
            ← Reset all filters
          </button>
        )}
      </div>

      <p className="mt-5 text-sm font-medium text-ink-500 dark:text-ink-400">
        Showing <strong className="text-ink-900 dark:text-ink-50">{shown.length}</strong> of{" "}
        {filtered.length}
        {filtered.length !== sports.length && ` matching (${sports.length} total)`} sports
        {anyFilter && <span className="ml-1 text-ink-400">— filtered</span>}
      </p>

      <div className="mt-5 cards-grid">
        {shown.map((s) => (
          <SportCard key={s.slug} sport={s} heroImage={heroImages?.[s.slug]} />
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white/80 px-6 py-3 text-sm font-semibold text-ink-800 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-ink-950 dark:border-white/10 dark:bg-ink-900/60 dark:text-ink-100 dark:hover:text-white"
          >
            Load {Math.min(PAGE_SIZE, remaining)} more
            <span className="text-ink-400 dark:text-ink-500">({remaining} left)</span>
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="mt-6 rounded-2xl border border-dashed border-ink-300 p-8 text-center text-sm text-ink-500 dark:border-white/10 dark:text-ink-400">
          No sports match those filters. Try clearing them, or{" "}
          <a href="mailto:hello@gemopedia.dev" className="font-semibold text-brand-600 underline dark:text-brand-300">
            request this sport
          </a>{" "}
          — the catalog is growing weekly.
        </div>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500 dark:text-ink-400">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm font-normal normal-case text-ink-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-ink-900 dark:text-white dark:focus:ring-brand-900/40"
      >
        {children}
      </select>
    </label>
  );
}
