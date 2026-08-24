import type { Sport } from "@/lib/types";

/**
 * Template — TABLETOP RPG / WARGAME (D&D, Pathfinder, Call of Cthulhu,
 * Warhammer 40k, Bolt Action, X-Wing, ...).
 *
 * Field expectations:
 *   REQUIRED : players (party / opposed armies), equipment (rulebook +
 *              dice / miniatures / character sheets), objective,
 *              matchStructure, basicRules, sportSpecific (system, dice
 *              mechanic, GM role, army composition)
 *   OPTIONAL : majorCompetitions (tournament wargames only), famousAthletes
 *              (tournament champions or legendary GMs)
 *   N/A      : field (highly variable), positions, officiating (GM is
 *              built-in), penalties, scoring (usually narrative)
 */
export const TEMPLATE_RPG_WARGAME: Partial<Sport> = {
  id: "TODO_slug",
  slug: "TODO_slug",
  name: "TODO_Name",
  aliases: [],
  shortDescription: "TODO one-sentence blurb.",
  longDescription: "TODO paragraph.",

  category: "tabletop-rpg", // or "wargames"
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "TODO_ISO2",
  estimatedOrigin: "TODO_year — designer / publisher",

  players: { min: 2, max: 8, note: "GM + party of 3-6 / 1v1 or army-vs-army" },
  equipment: [
    { name: "TODO_rulebook", description: "TODO" },
    { name: "TODO_dice", description: "TODO" },
    { name: "TODO_miniatures / character sheets / tokens", description: "TODO" },
  ],
  duration: {
    approximateMinutes: 240,
    structure: "TODO_multi-hour sessions; campaigns run for months/years",
  },
  objective: "TODO_paragraph.",
  matchStructure: "TODO_paragraph.",

  basicRules: [
    { title: "Character / army creation", body: "TODO" },
    { title: "Turn structure", body: "TODO" },
    { title: "Dice mechanic", body: "TODO" },
    { title: "Combat resolution", body: "TODO" },
  ],
  advancedRules: [
    { title: "TODO_edge case", body: "TODO" },
  ],
  scoring: {
    summary: "TODO — narrative / victory points / last-army-standing.",
    winCondition: "TODO",
  },

  majorCompetitions: [
    { name: "TODO_tournament (wargames only)", frequency: "annual", founded: 1990 },
  ],
  countriesPlayed: ["TODO_ISO2"],
  variants: ["TODO-variant-slug"],
  relatedSports: [],
  skills: ["storytelling", "tactics", "TODO"],

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
  sportSpecific: {
    system: "TODO_e.g. d20 / d10 pool / percentile",
    publisher: "TODO",
    edition: "TODO",
  },
};
