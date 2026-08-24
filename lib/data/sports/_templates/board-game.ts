import type { Sport } from "@/lib/types";

/**
 * Template — BOARD GAME (chess, go, monopoly, backgammon, catan, xiangqi,
 * shogi, ...).
 *
 * Field expectations:
 *   REQUIRED : players, equipment (board+pieces), objective, matchStructure,
 *              basicRules (setup + turn + victory), scoring, variants,
 *              terminology, learningPaths, faq, sources
 *   OPTIONAL : field (only if it's a large physical game), officiating
 *              (tournament rules), majorCompetitions
 *   N/A      : positions, penalties, fouls (in the sports sense)
 */
export const TEMPLATE_BOARD_GAME: Partial<Sport> = {
  id: "TODO_slug",
  slug: "TODO_slug",
  name: "TODO_Name",
  aliases: [],
  shortDescription: "TODO one-sentence blurb.",
  longDescription: "TODO paragraph.",

  category: "board-games", // or "mind-sports" for chess/go/shogi/etc.
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "TODO_ISO2",
  estimatedOrigin: "TODO year — publisher / inventor",

  players: { min: 2, max: 4, note: "TODO" },
  equipment: [
    { name: "TODO_board", description: "TODO" },
    { name: "TODO_pieces / cards / dice", description: "TODO" },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "TODO_turn-by-turn until victory condition",
  },
  objective: "TODO_paragraph — what you are trying to do.",
  matchStructure: "TODO_paragraph — setup → turn cycle → end game.",

  basicRules: [
    { title: "Setup", body: "TODO_how the board and pieces are arranged." },
    { title: "Turn structure", body: "TODO_what a player does on their turn." },
    { title: "Movement / actions", body: "TODO" },
    { title: "Victory condition", body: "TODO_how the game ends." },
  ],
  advancedRules: [
    { title: "TODO_edge case", body: "TODO" },
  ],
  scoring: {
    summary: "TODO — points, elimination, first-to-goal, area control.",
    winCondition: "TODO",
  },

  governingBodies: [
    { name: "TODO_e.g. FIDE / Hasbro / publisher", acronym: "TODO", founded: 1900, website: "https://TODO" },
  ],
  majorCompetitions: [
    { name: "TODO_World Championship", frequency: "annual", founded: 1900 },
  ],
  countriesPlayed: ["TODO_ISO2"],
  famousAthletes: ["TODO_top player 1", "TODO"],

  variants: ["TODO-variant-slug"],
  relatedSports: [],

  skills: ["strategic thinking", "TODO", "TODO"],
  strategies: [
    { title: "TODO strategy", body: "TODO" },
  ],

  terminology: [
    { term: "TODO", meaning: "TODO" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "TODO", body: "TODO" }] },
    { level: "intermediate", steps: [{ title: "TODO", body: "TODO" }] },
  ],
  faq: [
    { question: "TODO?", answer: "TODO." },
  ],

  wikipediaTitle: "TODO",
  sources: [
    { label: "Wikipedia — TODO", url: "https://en.wikipedia.org/wiki/TODO", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
