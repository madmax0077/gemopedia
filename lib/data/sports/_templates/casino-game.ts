import type { Sport } from "@/lib/types";

/**
 * Template — CASINO / GAMBLING GAME (roulette, blackjack, baccarat, craps,
 * bingo, keno, sic bo, pai gow, teen patti, ...).
 *
 * Field expectations:
 *   REQUIRED : players, equipment (table layout / wheel / cards), objective,
 *              matchStructure, basicRules (betting → play → payout),
 *              scoring (payout table), sportSpecific (houseEdge, oddsTable)
 *   OPTIONAL : famousAthletes (top pros for skill-based games like poker)
 *   N/A      : field, positions, officiating (dealer counts), penalties
 */
export const TEMPLATE_CASINO_GAME: Partial<Sport> = {
  id: "TODO_slug",
  slug: "TODO_slug",
  name: "TODO_Name",
  aliases: [],
  shortDescription: "TODO one-sentence blurb.",
  longDescription: "TODO paragraph.",

  category: "casino-games",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  era: "early-modern",
  popularity: "global",

  countryOfOrigin: "TODO_ISO2",
  estimatedOrigin: "TODO",

  players: { min: 1, max: 8, note: "1 dealer + N players" },
  equipment: [
    { name: "TODO_table layout", description: "TODO" },
    { name: "TODO_chips", description: "TODO" },
    { name: "TODO_cards/wheel/dice", description: "TODO" },
  ],
  duration: {
    approximateMinutes: 3,
    structure: "TODO_per-round; sessions run open-ended",
  },
  objective: "TODO_paragraph.",
  matchStructure: "TODO_paragraph.",

  basicRules: [
    { title: "Placing bets", body: "TODO" },
    { title: "Play", body: "TODO" },
    { title: "Payout", body: "TODO" },
  ],
  scoring: {
    summary: "TODO — chips won/lost per round.",
    breakdown: [
      { action: "TODO_e.g. Single number (straight up)", points: "35:1", note: "TODO" },
    ],
    winCondition: "TODO",
  },

  countriesPlayed: ["TODO_ISO2"],
  variants: ["TODO-variant-slug"],
  relatedSports: [],
  skills: ["bankroll management", "TODO"],
  strategies: [
    { title: "TODO", body: "TODO" },
  ],

  terminology: [
    { term: "TODO", meaning: "TODO" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "TODO", body: "TODO" }] },
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
  sportSpecific: {
    houseEdge: "TODO_percent",
    payouts: {
      "TODO_bet_type": "TODO_payout ratio",
    },
  },
};
