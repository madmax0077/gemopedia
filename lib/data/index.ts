import type { Sport, SportCategory, SportSummary } from "@/lib/types";
/* ── Per-category authored games (one folder per category slug) ────────── */
import { ADVENTURE_SPORTS } from "./sports/adventure";
import { AIR_SPORTS } from "./sports/air";
import { AQUATIC_SPORTS } from "./sports/aquatic";
import { ATHLETICS_SPORTS } from "./sports/athletics";
import { BALL_SPORTS } from "./sports/ball";
import { BOARD_GAMES } from "./sports/board";
import { CARD_GAMES } from "./sports/card";
import { CASINO_GAMES } from "./sports/casino";
import { COMBAT_SPORTS } from "./sports/combat";
import { DICE_GAMES } from "./sports/dice";
import { EQUESTRIAN_SPORTS } from "./sports/equestrian";
import { ESCAPE_GAMES } from "./sports/escape";
import { ESPORTS_SPORTS } from "./sports/esports";
import { GYMNASTICS_SPORTS } from "./sports/gymnastics";
import { MIND_SPORTS } from "./sports/mind";
import { MOTOR_SPORTS } from "./sports/motor";
import { PARTY_GAMES } from "./sports/party";
import { PLAYGROUND_GAMES } from "./sports/playground";
import { PRECISION_SPORTS } from "./sports/precision";
import { PUZZLE_GAMES } from "./sports/puzzle";
import { RACKET_PADDLE_SPORTS } from "./sports/racket-paddle";
import { SKILL_TOYS_GAMES } from "./sports/skill-toys";
import { STRENGTH_SPORTS } from "./sports/strength";
import { TABLETOP_RPG_GAMES } from "./sports/tabletop-rpg";
import { TILE_GAMES } from "./sports/tile";
import { TRADITIONAL_SPORTS } from "./sports/traditional";
import { VIDEO_GAMES } from "./sports/video";
import { WARGAMES_GAMES } from "./sports/wargames";
import { WINTER_SPORTS } from "./sports/winter";
/* ── Compact stub packs (temporary — games get promoted to authored files) ── */
import { SPORT_STUBS } from "./sports/_stubs";
import { SPORT_STUBS_EXTENDED } from "./sports/_stubs_extended";
import { SPORT_STUBS_CARDS } from "./sports/_stubs_cards";
import { SPORT_STUBS_WORLD } from "./sports/_stubs_world";
import { SPORT_STUBS_ABSTRACT } from "./sports/_stubs_abstract";
import { SPORT_STUBS_BOARDS } from "./sports/_stubs_boards";
import { SPORT_STUBS_CARDS_EXT } from "./sports/_stubs_cards_ext";
import { SPORT_STUBS_DICE } from "./sports/_stubs_dice";
import { SPORT_STUBS_TILE } from "./sports/_stubs_tile";
import { SPORT_STUBS_RPG } from "./sports/_stubs_rpg";
import { SPORT_STUBS_WARGAMES } from "./sports/_stubs_wargames";
import { SPORT_STUBS_PUZZLES } from "./sports/_stubs_puzzles";
import { SPORT_STUBS_PLAYGROUND } from "./sports/_stubs_playground";
import { SPORT_STUBS_TRADITIONAL_EXT } from "./sports/_stubs_traditional_ext";
import { SPORT_STUBS_VIDEOGAMES } from "./sports/_stubs_videogames";
import { SPORT_STUBS_ARCADE } from "./sports/_stubs_arcade";
import { SPORT_STUBS_CASINO } from "./sports/_stubs_casino";
import { SPORT_STUBS_PARTY_EXT } from "./sports/_stubs_party_ext";
import { SPORT_STUBS_CHILDREN } from "./sports/_stubs_children";
import { SPORT_STUBS_WORDPAPER } from "./sports/_stubs_wordpaper";
import { SPORT_STUBS_ESCAPE } from "./sports/_stubs_escape";
import { SPORT_STUBS_SKILL_TOYS } from "./sports/_stubs_skill_toys";

/**
 * Master registry of every sport in Gemopedia.
 *
 * Adding a sport is 3 lines: import above, entry in this array, done.
 * Every discovery / directory / country / category page reads from here.
 * When we migrate to Postgres (see ARCHITECTURE.md §3), replace the body
 * of this file with a DB call — nothing else has to change.
 *
 * The fully-authored records live at the top; SPORT_STUBS supplies the
 * compact top-100 catalogue (see ./sports/_stubs.ts). Stubs share the
 * same Sport shape so every discovery / directory / country / category
 * page treats them identically.
 */
/**
 * Fully authored sports come first — they win any slug collision so the
 * stubs never overwrite them. Order inside each category array is set by
 * that category's index.ts.
 */
const FULL_SPORTS: Sport[] = [
  ...BALL_SPORTS,
  ...RACKET_PADDLE_SPORTS,
  ...COMBAT_SPORTS,
  ...ATHLETICS_SPORTS,
  ...AQUATIC_SPORTS,
  ...WINTER_SPORTS,
  ...MOTOR_SPORTS,
  ...EQUESTRIAN_SPORTS,
  ...PRECISION_SPORTS,
  ...STRENGTH_SPORTS,
  ...GYMNASTICS_SPORTS,
  ...ADVENTURE_SPORTS,
  ...MIND_SPORTS,
  ...TRADITIONAL_SPORTS,
  ...ESPORTS_SPORTS,
  ...AIR_SPORTS,
  ...BOARD_GAMES,
  ...CARD_GAMES,
  ...DICE_GAMES,
  ...TILE_GAMES,
  ...TABLETOP_RPG_GAMES,
  ...WARGAMES_GAMES,
  ...PARTY_GAMES,
  ...PLAYGROUND_GAMES,
  ...PUZZLE_GAMES,
  ...VIDEO_GAMES,
  ...CASINO_GAMES,
  ...ESCAPE_GAMES,
  ...SKILL_TOYS_GAMES,
];

const STUB_SPORTS: Sport[] = [
  ...SPORT_STUBS,
  ...SPORT_STUBS_EXTENDED,
  ...SPORT_STUBS_CARDS,
  ...SPORT_STUBS_WORLD,
  ...SPORT_STUBS_ABSTRACT,
  ...SPORT_STUBS_BOARDS,
  ...SPORT_STUBS_CARDS_EXT,
  ...SPORT_STUBS_DICE,
  ...SPORT_STUBS_TILE,
  ...SPORT_STUBS_RPG,
  ...SPORT_STUBS_WARGAMES,
  ...SPORT_STUBS_PUZZLES,
  ...SPORT_STUBS_PLAYGROUND,
  ...SPORT_STUBS_TRADITIONAL_EXT,
  ...SPORT_STUBS_VIDEOGAMES,
  ...SPORT_STUBS_ARCADE,
  ...SPORT_STUBS_CASINO,
  ...SPORT_STUBS_PARTY_EXT,
  ...SPORT_STUBS_CHILDREN,
  ...SPORT_STUBS_WORDPAPER,
  ...SPORT_STUBS_ESCAPE,
  ...SPORT_STUBS_SKILL_TOYS,
];

/**
 * De-duplicate by slug. The catalog is assembled from ~15 stub files added
 * over time, and a few games (e.g. Chess as full record + a stub in a
 * different pack) can appear in more than one source. First occurrence wins
 * — fully-authored sports are listed first so they always beat their stubs.
 */
function dedupeBySlug(sports: Sport[]): Sport[] {
  const seen = new Set<string>();
  const out: Sport[] = [];
  for (const s of sports) {
    if (seen.has(s.slug)) continue;
    seen.add(s.slug);
    out.push(s);
  }
  return out;
}

export const ALL_SPORTS: Sport[] = dedupeBySlug([...FULL_SPORTS, ...STUB_SPORTS]);

const BY_SLUG: Record<string, Sport> = Object.fromEntries(ALL_SPORTS.map((s) => [s.slug, s]));

export function getAllSports(): Sport[] {
  return [...ALL_SPORTS].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Project a full {@link Sport} record down to just the fields required by
 * card + directory rendering. Keeps `/sports` under Vercel's ISR page
 * budget (see `SportSummary` docs in `lib/types.ts`).
 */
export function toSportSummary(s: Sport): SportSummary {
  return {
    slug: s.slug,
    name: s.name,
    officialName: s.officialName,
    aliases: s.aliases,
    shortDescription: s.shortDescription,
    category: s.category,
    sportType: s.sportType,
    indoorOutdoor: s.indoorOutdoor,
    isOlympic: s.isOlympic,
    popularity: s.popularity,
    countryOfOrigin: s.countryOfOrigin,
    countriesPlayed: s.countriesPlayed,
    players: s.players,
  };
}

/** Same ordering as {@link getAllSports} but with the light payload. */
export function getAllSportsSummary(): SportSummary[] {
  return getAllSports().map(toSportSummary);
}

export function getSport(slug: string): Sport | undefined {
  return BY_SLUG[slug];
}

export function getSportsByCategory(category: SportCategory): Sport[] {
  return getAllSports().filter((s) => s.category === category);
}

export function getSportsByCountry(code: string): Sport[] {
  const upper = code.toUpperCase();
  return getAllSports().filter(
    (s) => s.countryOfOrigin === upper || (s.countriesPlayed?.includes(upper) ?? false),
  );
}

export function getFeaturedSports(limit = 6): Sport[] {
  const preferred = ["cricket", "association-football", "kabaddi", "sumo", "basketball", "chess", "formula-1", "capoeira"];
  const chosen = preferred.map((slug) => BY_SLUG[slug]).filter(Boolean) as Sport[];
  return chosen.slice(0, limit);
}

export function getUnusualSports(limit = 6): Sport[] {
  const preferred = ["buzkashi", "sepak-takraw", "senegalese-wrestling", "hurling", "australian-rules-football", "curling"];
  const chosen = preferred.map((slug) => BY_SLUG[slug]).filter(Boolean) as Sport[];
  return chosen.slice(0, limit);
}

export interface TrendingConcept {
  title: string;
  question: string;
  sportSlug: string;
  href: string;
}

export function getTrendingConcepts(): TrendingConcept[] {
  return [
    { title: "LBW", question: "What is LBW in cricket?", sportSlug: "cricket", href: "/sports/cricket#rules" },
    { title: "Offside", question: "What is the offside rule?", sportSlug: "association-football", href: "/sports/association-football#rules" },
    { title: "The raid", question: "How does a kabaddi raid work?", sportSlug: "kabaddi", href: "/sports/kabaddi#how-it-works" },
    { title: "Pit stop", question: "How does an F1 pit stop work?", sportSlug: "formula-1", href: "/sports/formula-1#rules" },
    { title: "Castling", question: "What is castling in chess?", sportSlug: "chess", href: "/sports/chess#rules" },
    { title: "The mark", question: "What is a mark in AFL?", sportSlug: "australian-rules-football", href: "/sports/australian-rules-football#rules" },
  ];
}

/**
 * Comparison catalog — pairs curated editorially, not generated combinatorially.
 * Per §10 of the design brief we deliberately avoid generating a page for
 * every possible pair; only editorially interesting comparisons ship as URLs.
 */
export interface ComparisonPair {
  slug: string;             // URL slug — sportA-vs-sportB
  aSlug: string;
  bSlug: string;
  headline: string;
  rationale: string;
}

export const COMPARISON_PAIRS: ComparisonPair[] = [
  {
    slug: "cricket-vs-hurling",
    aSlug: "cricket",
    bSlug: "hurling",
    headline: "Cricket vs Hurling",
    rationale: "Two bat-and-ball games born in the British Isles — one gentle, one ferociously fast.",
  },
  {
    slug: "association-football-vs-australian-rules-football",
    aSlug: "association-football",
    bSlug: "australian-rules-football",
    headline: "Football vs Australian Rules",
    rationale: "Two football codes that share a name — but almost nothing else.",
  },
  {
    slug: "sumo-vs-senegalese-wrestling",
    aSlug: "sumo",
    bSlug: "senegalese-wrestling",
    headline: "Sumo vs Senegalese Wrestling",
    rationale: "Two ancient wrestling traditions — one ceremonial, one theatrical.",
  },
  {
    slug: "chess-vs-formula-1",
    aSlug: "chess",
    bSlug: "formula-1",
    headline: "Chess vs Formula 1",
    rationale: "A mind sport and a mechanical sport — both won and lost on strategy.",
  },
  {
    slug: "kabaddi-vs-sepak-takraw",
    aSlug: "kabaddi",
    bSlug: "sepak-takraw",
    headline: "Kabaddi vs Sepak Takraw",
    rationale: "Two of Asia's most spectacular team sports.",
  },
  {
    slug: "basketball-vs-association-football",
    aSlug: "basketball",
    bSlug: "association-football",
    headline: "Basketball vs Football",
    rationale: "The two most popular team sports on Earth — compared field, ball and clock.",
  },
];

export function getComparison(slug: string): ComparisonPair | undefined {
  return COMPARISON_PAIRS.find((p) => p.slug === slug);
}
