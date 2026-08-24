import type { Sport } from "@/lib/types";

/**
 * Template — INDIVIDUAL SPORT (athletics, swimming, cycling, gymnastics,
 * individual winter events, most adventure sports).
 *
 * Field expectations:
 *   REQUIRED : records[], majorCompetitions[], famousAthletes[], scoring
 *   OPTIONAL : officiating, field, equipment
 *   N/A      : positions, penalties (usually — some events do have DQ rules)
 */
export const TEMPLATE_INDIVIDUAL_SPORT: Partial<Sport> = {
  id: "TODO_slug",
  slug: "TODO_slug",
  name: "TODO_Name",
  aliases: [],
  shortDescription: "TODO one-sentence blurb.",
  longDescription: "TODO paragraph.",

  category: "athletics", // change per game
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "TODO_ISO2",
  estimatedOrigin: "TODO",

  players: { min: 1, max: 1, note: "TODO context (e.g. heats of 8)" },
  field: {
    surfaceName: "TODO_track/pool/course",
    dimensions: "TODO",
    description: "TODO",
  },
  equipment: [
    { name: "TODO_equipment", description: "TODO" },
  ],
  duration: {
    approximateMinutes: 10,
    structure: "TODO_e.g. Heats → semis → final",
  },
  objective: "TODO_paragraph — what you are trying to do.",
  matchStructure: "TODO_paragraph — round structure and finals format.",

  basicRules: [
    { title: "TODO", body: "TODO" },
  ],
  scoring: {
    summary: "TODO — time-based / distance-based / judged.",
    winCondition: "TODO — fastest time / longest distance / highest judged score.",
  },

  officiating: {
    officials: ["TODO_starter", "TODO_judge"],
    summary: "TODO",
  },
  governingBodies: [
    { name: "TODO", acronym: "TODO", founded: 1900, headquarters: "TODO", website: "https://TODO" },
  ],
  majorCompetitions: [
    { name: "Olympic Games", frequency: "quadrennial", founded: 1896, region: "worldwide" },
    { name: "TODO_World Championships", frequency: "annual", founded: 1900, region: "worldwide" },
  ],
  countriesPlayed: ["TODO_ISO2"],
  famousAthletes: ["TODO", "TODO"],
  records: [
    { title: "TODO_world record", holder: "TODO", value: "TODO", year: 2020 },
  ],

  variants: [],
  relatedSports: [],

  skills: ["TODO", "TODO"],

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
