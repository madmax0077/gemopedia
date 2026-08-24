import type { Sport } from "@/lib/types";

/**
 * Template — PARTY GAME (charades, codenames, werewolf, pictionary,
 * musical chairs, hide-and-seek, tag, ...).
 *
 * Field expectations:
 *   REQUIRED : players (group size), equipment (materials or "none"),
 *              objective, matchStructure, basicRules, terminology (light),
 *              variants, learningPaths, faq
 *   OPTIONAL : governingBodies (rare — some like tag have national assocs)
 *   N/A      : field, positions, officiating, penalties, scoring (loose)
 */
export const TEMPLATE_PARTY_GAME: Partial<Sport> = {
  id: "TODO_slug",
  slug: "TODO_slug",
  name: "TODO_Name",
  aliases: [],
  shortDescription: "TODO one-sentence blurb.",
  longDescription: "TODO paragraph.",

  category: "party-games", // or "playground-games"
  sportType: "team", // or "individual"
  indoorOutdoor: "both",
  isOlympic: false,
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "TODO_ISO2",
  estimatedOrigin: "TODO",

  players: { min: 4, max: 20, note: "TODO ideal size" },
  equipment: [
    { name: "TODO_materials (or none)", description: "TODO" },
  ],
  duration: {
    approximateMinutes: 15,
    structure: "TODO",
  },
  objective: "TODO_paragraph.",
  matchStructure: "TODO_paragraph.",

  basicRules: [
    { title: "TODO", body: "TODO" },
    { title: "TODO", body: "TODO" },
    { title: "TODO", body: "TODO" },
  ],
  scoring: {
    summary: "TODO — usually first-team-to-N points or last-player-standing.",
    winCondition: "TODO",
  },

  countriesPlayed: ["TODO_ISO2"],
  variants: ["TODO-variant-slug"],
  relatedSports: [],
  skills: ["quick thinking", "TODO"],

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
};
