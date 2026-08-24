import type { Sport } from "@/lib/types";

/**
 * Template — COMBAT SPORT (boxing, wrestling, judo, karate, taekwondo, MMA,
 * fencing, kendo, sumo, ...).
 *
 * Field expectations:
 *   REQUIRED : weight-class info (sportSpecific), techniques (advancedRules),
 *              officiating (judges), penalties/fouls, majorCompetitions,
 *              scoring (points / KO / submission / judged)
 *   OPTIONAL : positions (rare — dohyo positions in sumo), field/ring
 *   N/A      : —
 */
export const TEMPLATE_COMBAT_SPORT: Partial<Sport> = {
  id: "TODO_slug",
  slug: "TODO_slug",
  name: "TODO_Name",
  aliases: [],
  shortDescription: "TODO one-sentence blurb.",
  longDescription: "TODO paragraph.",

  category: "combat-sports",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "TODO_ISO2",
  estimatedOrigin: "TODO",

  players: { min: 2, max: 2, note: "1v1 in weight classes" },
  field: {
    surfaceName: "TODO_ring/mat/octagon/dohyo/piste",
    dimensions: "TODO",
    description: "TODO",
  },
  equipment: [
    { name: "TODO_protective gear", description: "TODO" },
    { name: "TODO_gi/gloves/kit", description: "TODO" },
  ],
  duration: {
    approximateMinutes: 12,
    structure: "TODO_e.g. Three 3-minute rounds",
  },
  objective: "TODO_paragraph.",
  matchStructure: "TODO_paragraph.",

  basicRules: [
    { title: "TODO", body: "TODO" },
  ],
  advancedRules: [
    { title: "TODO_technique or ruleset", body: "TODO" },
  ],
  scoring: {
    summary: "TODO — points / KO / submission / decision.",
    breakdown: [
      { action: "TODO_e.g. Ippon", points: "match-ending", note: "TODO" },
    ],
    winCondition: "TODO — knockout, submission, judges' decision, or technical stoppage.",
  },
  penalties: [
    { title: "TODO penalty", body: "TODO consequence" },
  ],
  fouls: [
    { title: "TODO foul", body: "TODO" },
  ],

  officiating: {
    officials: ["TODO_referee", "TODO_judges (3 or 5)"],
    summary: "TODO",
  },
  governingBodies: [
    { name: "TODO", acronym: "TODO", founded: 1900, headquarters: "TODO", website: "https://TODO" },
  ],
  majorCompetitions: [
    { name: "TODO_World Championships", frequency: "annual", founded: 1900, region: "worldwide" },
  ],
  countriesPlayed: ["TODO_ISO2"],
  famousAthletes: ["TODO", "TODO"],

  variants: [],
  relatedSports: [],

  skills: ["TODO", "TODO"],
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
  sportSpecific: { weightClasses: ["TODO_flyweight", "TODO_lightweight"] },
};
