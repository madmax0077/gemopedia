/**
 * Gemopedia — core entity model.
 *
 * This file defines the ONE schema every sport in the world is stored under.
 * The whole point of the platform (scale from 12 → 10,000+ sports without
 * touching frontend code) hinges on the rules below:
 *
 *   1. EVERY FIELD IS OPTIONAL except identity (id/slug/name). If a sport
 *      doesn't have "field dimensions" or "governing body" or "positions",
 *      just don't set it — the universal SportPage template skips empty
 *      sections automatically.
 *   2. Sub-records are STRUCTURED objects, not free text. `basicRules` is
 *      { title, body }[], `terminology` is { term, meaning }[], and so on.
 *      This lets us re-render the same data as bulleted lists, cards, or
 *      glossary tables without re-parsing.
 *   3. Cross-references use SLUGS, not object handles. `relatedSports:
 *      string[]` stores slugs and the render layer resolves them. This
 *      survives untouched when we migrate from TS files to Postgres later.
 *   4. Never add a scalar top-level column that's only relevant to one
 *      sport. Add it to `sportSpecific: Record<string, unknown>` instead
 *      so the schema stays universal.
 *
 * See ARCHITECTURE.md for the reasoning.
 */

/* -------------------------------------------------------------------------- */
/*  Reference enums — kept intentionally small; string literals rather than   */
/*  numeric enums so JSON serialisation and DB migration are trivial.         */
/* -------------------------------------------------------------------------- */

/** Coarse category for filters and hue assignment. See lib/data/categories.ts. */
export type SportCategory =
  | "ball-sports"
  | "racket-paddle-sports"
  | "combat-sports"
  | "athletics"
  | "aquatic-sports"
  | "winter-sports"
  | "motor-sports"
  | "equestrian-sports"
  | "precision-sports"
  | "strength-sports"
  | "gymnastics"
  | "adventure-extreme-sports"
  | "mind-sports"
  | "traditional-cultural-sports"
  | "esports"
  | "air-sports"
  /* ── Tabletop / games taxonomy (§8 of the world-catalogue plan) ── */
  | "board-games"
  | "card-games"
  | "dice-games"
  | "tile-games"
  | "tabletop-rpg"
  | "wargames"
  | "party-games"
  | "playground-games"
  | "puzzle-games"
  | "video-games"
  | "casino-games"
  | "escape-immersive"
  | "skill-toys";

/** Match / participation shape. */
export type SportType = "team" | "individual" | "mixed";

/** Environment in which the sport is normally played. */
export type IndoorOutdoor = "indoor" | "outdoor" | "both";

/**
 * How trustworthy the record is. Shown on every sport page so we never
 * quietly publish invented content.
 *   - verified   : cross-referenced with the sport's official governing body
 *                  or a peer-reviewed encyclopedic source.
 *   - community  : contributed by an enthusiast, checked but not primary-sourced.
 *   - historical : based on historical / archaeological sources; modern rules
 *                  may vary.
 *   - estimated  : rules approximated; primarily for very obscure regional games.
 */
export type Confidence = "verified" | "community" | "historical" | "estimated";

/** How popular the sport is worldwide. Used for surfacing and filtering. */
export type Popularity = "global" | "major" | "regional" | "niche" | "obscure";

/** Approximate era of origin — a coarse bucket, not a precise year. */
export type Era =
  | "ancient"
  | "medieval"
  | "early-modern"
  | "19th-century"
  | "20th-century"
  | "21st-century";

/* -------------------------------------------------------------------------- */
/*  Structured sub-records used by the SportPage sections.                    */
/* -------------------------------------------------------------------------- */

export interface Players {
  perTeam?: number;         // e.g. 11 for cricket, 7 for kabaddi
  min?: number;             // minimum players present at start (per team or total)
  max?: number;             // maximum players (per team or total)
  substitutes?: number;
  /** Free-text override when the numbers above can't capture it (e.g. "12 sumo divisions, 1v1"). */
  note?: string;
}

export interface Field {
  /** Descriptive name: "pitch", "court", "dohyo", "piste", "board", "octagon"… */
  surfaceName?: string;
  /** Human-readable dimensions ("22 yards × 10 ft pitch"; a court width × length). */
  dimensions?: string;
  /** Free-text description of the playing surface. */
  description?: string;
  /** Optional SVG string or component key for a top-down diagram. */
  diagram?: string;
}

export interface EquipmentItem {
  name: string;
  description?: string;
  optional?: boolean;
}

export interface Duration {
  /** Total real-world minutes a match usually lasts. */
  approximateMinutes?: number;
  /** How the match is structured (halves, innings, sets, rounds). */
  structure?: string;
  /** Any additional notes (extra time, super over, best-of-N, …). */
  note?: string;
}

export interface Rule {
  title: string;
  body: string;
}

export interface Scoring {
  summary: string;
  /** Structured breakdown for tables — optional. */
  breakdown?: { action: string; points: string; note?: string }[];
  winCondition?: string;
}

export interface Position {
  name: string;
  role: string;
  count?: number;   // how many per team
}

export interface Officiating {
  officials: string[];       // e.g. ["Umpire (2)", "Third umpire", "Match referee"]
  summary?: string;
  signals?: { name: string; description: string }[];
}

export interface GoverningBody {
  name: string;
  acronym?: string;
  founded?: number;
  headquarters?: string;
  website?: string;
}

export interface Competition {
  name: string;
  frequency?: string;   // "annual", "quadrennial", …
  founded?: number;
  region?: string;      // "worldwide" | "Europe" | "India" | …
  note?: string;
}

export interface Term {
  term: string;
  meaning: string;
}

export interface LearningStep {
  title: string;
  body: string;
  /** Optional deep-link within the page (anchor id). */
  anchor?: string;
}

export interface LearningPath {
  level: "beginner" | "intermediate" | "advanced";
  steps: LearningStep[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Source {
  label: string;
  url?: string;
  publisher?: string;
  accessed?: string;   // ISO date
}

/**
 * Reference to a composed animation component registered in
 * `components/animation/registry.tsx`. The `component` value MUST match a
 * key in that registry. The universal SportPage looks it up and renders
 * the animation section only when at least one entry exists here — so a
 * sport with no animation yet just doesn't get an animation section.
 */
export interface AnimationRef {
  id: string;
  title: string;
  component: string;
  description?: string;
}

/**
 * Reference to a STATIC illustrated diagram (SVG) registered in
 * `components/animation/DiagramRegistry.tsx`. Diagrams are always-visible
 * technical illustrations — a top-down field, a fielding-positions map, a
 * formation chart, a chessboard setup, and so on.
 *
 * `slot` decides where in the SportPage the diagram is rendered:
 *   - "playing-area" → inline in the Playing Area section
 *   - "positions"    → inline in the Positions & roles section
 *   - "scoring"      → inline in the Scoring section
 *   - "rules"        → inline right after Basic Rules
 *   - "how-it-works" → inline in the How It Works section
 *   - "diagrams"     → in the dedicated "Diagrams" section (the default)
 *
 * This is what lets us illustrate the very rule being explained without
 * making the page component sport-aware.
 */
export type DiagramSlot =
  | "playing-area"
  | "positions"
  | "scoring"
  | "rules"
  | "how-it-works"
  | "diagrams";

export interface DiagramRef {
  id: string;
  title: string;
  component: string;
  description?: string;
  slot?: DiagramSlot;
}

/* -------------------------------------------------------------------------- */
/*  Country reference — kept minimal on the Sport record (ISO codes only).    */
/*  Full country data lives in lib/data/countries.ts and is joined at render. */
/* -------------------------------------------------------------------------- */

/** ISO 3166-1 alpha-2 code, e.g. "IN", "JP", "IE". */
export type CountryCode = string;

/* -------------------------------------------------------------------------- */
/*  The Sport entity — one record per sport, per discipline, per variant.     */
/*  Discipline / variant records reference their parent via `parentSlug`.     */
/* -------------------------------------------------------------------------- */

export interface Sport {
  /* ── Identity ─────────────────────────────────────────────────────────── */
  id: string;
  slug: string;                    // URL segment (kebab-case), unique
  name: string;
  officialName?: string;
  aliases?: string[];
  shortDescription: string;        // 1 sentence — used in cards / meta description
  longDescription?: string;        // 1-3 paragraphs — used on the sport page hero body

  /* ── Taxonomy ─────────────────────────────────────────────────────────── */
  category: SportCategory;
  subCategory?: string;            // free-text, e.g. "striking martial art"
  sportType: SportType;
  indoorOutdoor?: IndoorOutdoor;
  isOlympic?: boolean;
  isParalympic?: boolean;
  isProfessional?: boolean;        // has an organised professional scene
  season?: "summer" | "winter" | "year-round";
  era?: Era;
  popularity?: Popularity;

  /* ── Origin ───────────────────────────────────────────────────────────── */
  countryOfOrigin?: CountryCode;
  regionOfOrigin?: string;         // free-text: "South Asia", "Great Britain"
  estimatedOrigin?: string;        // free-text: "circa 3rd century BCE"

  /* ── How it is played ─────────────────────────────────────────────────── */
  players?: Players;
  field?: Field;
  equipment?: EquipmentItem[];
  duration?: Duration;
  objective?: string;              // one-paragraph "what are you trying to do?"
  matchStructure?: string;         // one-paragraph "how a match unfolds"

  /* ── Rules ────────────────────────────────────────────────────────────── */
  basicRules?: Rule[];
  advancedRules?: Rule[];
  scoring?: Scoring;
  penalties?: Rule[];
  fouls?: Rule[];
  winningConditions?: string[];

  /* ── People ───────────────────────────────────────────────────────────── */
  positions?: Position[];
  officiating?: Officiating;

  /* ── Ecosystem ────────────────────────────────────────────────────────── */
  governingBodies?: GoverningBody[];
  majorCompetitions?: Competition[];
  countriesPlayed?: CountryCode[];
  famousAthletes?: string[];       // names only; profiles are out-of-scope for MVP
  records?: { title: string; holder: string; value: string; year?: number }[];

  /* ── Family of sports (cross-references, slug-based) ──────────────────── */
  parentSlug?: string;             // if this sport IS a variant/discipline
  variants?: string[];             // slugs of related variants / disciplines
  relatedSports?: string[];        // slugs of loosely related sports

  /* ── Skill & strategy ─────────────────────────────────────────────────── */
  skills?: string[];               // e.g. "hand-eye coordination", "endurance"
  strategies?: Rule[];

  /* ── Learning content ─────────────────────────────────────────────────── */
  terminology?: Term[];
  learningPaths?: LearningPath[];
  faq?: FaqItem[];

  /* ── Visual explanations ──────────────────────────────────────────────── */
  animations?: AnimationRef[];
  diagrams?: DiagramRef[];
  /** Optional Tailwind gradient stops override; falls back to the category hue. */
  heroTint?: { from: string; to: string };

  /**
   * Wikipedia article title used to pull a real editorial photo for the
   * sport hero and card. When omitted we auto-derive it from the slug (e.g.
   * "association-football" → "Association football"), which resolves for
   * most sports via Wikipedia's redirect handling. Set this explicitly when
   * the slug and the article title diverge.
   *
   * Photos are served straight from upload.wikimedia.org (Creative Commons
   * / public domain per each file's licence).
   */
  wikipediaTitle?: string;

  /* ── Provenance & editorial ───────────────────────────────────────────── */
  sources?: Source[];
  lastVerified?: string;           // ISO date (YYYY-MM-DD)
  confidence?: Confidence;
  editorNote?: string;

  /* ── Escape hatch for a scalar unique to ONE sport ────────────────────── */
  sportSpecific?: Record<string, unknown>;
}

/**
 * Lightweight projection of {@link Sport} — only the fields required to
 * render a sport card in a listing (SportCard + SportsDirectory + filters).
 *
 * WHY: the /sports page ships every sport in the catalog to the client.
 * With ~1,600+ fully-authored records, serialising the entire Sport shape
 * (with longDescription, records, basicRules, faq, learningPaths, …)
 * pushed the ISR payload past Vercel's 19 MB per-page limit
 * (FALLBACK_BODY_TOO_LARGE). This summary strips the heavy narrative
 * fields — cards + filters read strictly from these keys — bringing the
 * per-sport payload down by roughly an order of magnitude.
 *
 * Any full `Sport` object is assignable to `SportSummary` (structural
 * subtype), so callers can pass full records where a summary is expected;
 * the {@link toSportSummary} helper is the canonical projection when you
 * want the actual size savings.
 */
export type SportSummary = Pick<
  Sport,
  | "slug"
  | "name"
  | "officialName"
  | "aliases"
  | "shortDescription"
  | "category"
  | "sportType"
  | "indoorOutdoor"
  | "isOlympic"
  | "popularity"
  | "countryOfOrigin"
  | "countriesPlayed"
  | "players"
>;
