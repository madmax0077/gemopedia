import type { Sport } from "@/lib/types";

/**
 * Template — SKILL TOY (yo-yo, kendama, diabolo, juggling clubs, spinning
 * tops, hacky sack, speedcubing, ...).
 *
 * Field expectations:
 *   REQUIRED : equipment, objective, matchStructure, basicRules (starter
 *              tricks), advancedRules (progression), variants, competition
 *              format if any (majorCompetitions), famousAthletes
 *   OPTIONAL : records, governingBodies
 *   N/A      : field, positions, officiating (except competitions), penalties
 */
export const TEMPLATE_SKILL_TOY: Partial<Sport> = {
  id: "TODO_slug",
  slug: "TODO_slug",
  name: "TODO_Name",
  aliases: [],
  shortDescription: "TODO one-sentence blurb.",
  longDescription: "TODO paragraph.",

  category: "skill-toys",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  era: "ancient",
  popularity: "regional",

  countryOfOrigin: "TODO_ISO2",
  estimatedOrigin: "TODO",

  players: { min: 1, max: 1, note: "solo skill practice; competitions are timed sets" },
  equipment: [
    { name: "TODO_the toy itself", description: "TODO" },
  ],
  duration: {
    approximateMinutes: 3,
    structure: "TODO_freestyle set / trick list / time attack",
  },
  objective: "TODO_paragraph.",
  matchStructure: "TODO_paragraph.",

  basicRules: [
    { title: "Grip / starting position", body: "TODO" },
    { title: "Base trick", body: "TODO" },
  ],
  advancedRules: [
    { title: "TODO_intermediate trick", body: "TODO" },
    { title: "TODO_advanced trick / combo", body: "TODO" },
  ],
  scoring: {
    summary: "TODO — judged freestyle / trick count / speed.",
    winCondition: "TODO",
  },

  governingBodies: [
    { name: "TODO_World Federation", acronym: "TODO", founded: 1990, website: "https://TODO" },
  ],
  majorCompetitions: [
    { name: "TODO_World Championships", frequency: "annual", founded: 1990, region: "worldwide" },
  ],
  countriesPlayed: ["TODO_ISO2"],
  famousAthletes: ["TODO"],
  variants: [],
  relatedSports: [],

  skills: ["hand-eye coordination", "dexterity", "TODO"],

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
