import type { Sport } from "@/lib/types";

/**
 * Template — CARD GAME (poker variants, bridge, rummy, uno, hearts, ...).
 *
 * Field expectations:
 *   REQUIRED : players, equipment (deck), objective, matchStructure,
 *              basicRules (deal + play + score), scoring, variants,
 *              terminology, learningPaths, faq, sources
 *   OPTIONAL : officiating (tournament rules for bridge/poker),
 *              majorCompetitions
 *   N/A      : field, positions, penalties/fouls
 */
export const TEMPLATE_CARD_GAME: Partial<Sport> = {
  id: "TODO_slug",
  slug: "TODO_slug",
  name: "TODO_Name",
  aliases: [],
  shortDescription: "TODO one-sentence blurb.",
  longDescription: "TODO paragraph.",

  category: "card-games",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  era: "early-modern",
  popularity: "global",

  countryOfOrigin: "TODO_ISO2",
  estimatedOrigin: "TODO",

  players: { min: 2, max: 8, note: "TODO ideal count" },
  equipment: [
    { name: "TODO_deck (standard 52 / tarot / custom)", description: "TODO" },
    { name: "TODO_chips / score-sheet", description: "TODO", optional: true },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "TODO_hand structure (dealt hands → tricks / rounds → showdown)",
  },
  objective: "TODO_paragraph — what you are trying to do.",
  matchStructure: "TODO_paragraph — deal → bidding/betting → play → scoring.",

  basicRules: [
    { title: "The deal", body: "TODO_how cards are dealt." },
    { title: "Turn / trick / round structure", body: "TODO" },
    { title: "Bidding / betting", body: "TODO", },
    { title: "Winning the hand", body: "TODO" },
  ],
  advancedRules: [
    { title: "TODO_edge case", body: "TODO" },
  ],
  scoring: {
    summary: "TODO — points per trick / hand ranking / chip stacks.",
    winCondition: "TODO",
  },

  governingBodies: [
    { name: "TODO", acronym: "TODO", founded: 1900, website: "https://TODO" },
  ],
  majorCompetitions: [
    { name: "TODO_World Championship", frequency: "annual", founded: 1900 },
  ],
  countriesPlayed: ["TODO_ISO2"],
  famousAthletes: ["TODO"],

  variants: ["TODO-variant-slug"],
  relatedSports: [],

  skills: ["probability", "TODO", "TODO"],
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
