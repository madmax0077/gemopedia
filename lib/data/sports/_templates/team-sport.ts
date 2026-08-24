import type { Sport } from "@/lib/types";

/**
 * Template — TEAM SPORT (ball sports, hockey, water polo, kabaddi, ...).
 *
 * Field expectations:
 *   REQUIRED : field, players.perTeam, positions[], officiating,
 *              governingBodies[], majorCompetitions[], scoring.breakdown[]
 *   OPTIONAL : penalties, fouls, records, animations, diagrams
 *   N/A      : (all Sport fields are optional; delete unused blocks)
 *
 * Copy this file into the correct category folder, rename the export, and
 * replace every `TODO_` string.
 */
export const TEMPLATE_TEAM_SPORT: Partial<Sport> = {
  id: "TODO_slug",
  slug: "TODO_slug",
  name: "TODO_Display Name",
  officialName: "TODO_full formal name",
  aliases: ["TODO_common nickname"],
  shortDescription: "TODO_one-sentence card blurb.",
  longDescription: "TODO_1-3 paragraphs summarising the sport for the hero body.",

  category: "ball-sports", // change per game
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "TODO_ISO2",
  regionOfOrigin: "TODO_region",
  estimatedOrigin: "TODO_year — origin story",

  players: { perTeam: 11, min: 11, max: 11, substitutes: 5 },
  field: {
    surfaceName: "TODO_pitch/court/rink name",
    dimensions: "TODO_e.g. 100-110 m × 64-75 m",
    description: "TODO_surface material, markings, goal/net descriptions.",
  },
  equipment: [
    { name: "TODO_primary object (ball/puck)", description: "TODO_size & material" },
    { name: "TODO_secondary equipment", description: "TODO_role", optional: true },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "TODO_e.g. Two 45-minute halves + stoppage",
    note: "TODO_extra time / tie-break rules",
  },
  objective: "TODO_paragraph — what you are trying to do.",
  matchStructure: "TODO_paragraph — how a match unfolds start-to-end.",

  basicRules: [
    { title: "TODO rule 1", body: "TODO description" },
    { title: "TODO rule 2", body: "TODO description" },
    { title: "TODO rule 3", body: "TODO description" },
    { title: "TODO rule 4", body: "TODO description" },
  ],
  advancedRules: [
    { title: "TODO advanced rule 1", body: "TODO description" },
  ],
  scoring: {
    summary: "TODO_how points are scored.",
    breakdown: [
      { action: "TODO_e.g. Field goal", points: "1", note: "TODO context" },
    ],
    winCondition: "TODO_team with most points at end of regulation; overtime/penalties if tied.",
  },
  penalties: [
    { title: "TODO penalty", body: "TODO consequence" },
  ],
  fouls: [
    { title: "TODO foul", body: "TODO how it's called" },
  ],

  positions: [
    { name: "TODO_position", role: "TODO_role", count: 1 },
  ],
  officiating: {
    officials: ["TODO_referee", "TODO_assistant"],
    summary: "TODO_how the game is officiated.",
    signals: [{ name: "TODO signal", description: "TODO meaning" }],
  },

  governingBodies: [
    { name: "TODO", acronym: "TODO", founded: 1900, headquarters: "TODO", website: "https://TODO" },
  ],
  majorCompetitions: [
    { name: "TODO Cup", frequency: "annual", founded: 1900, region: "worldwide" },
  ],
  countriesPlayed: ["TODO_ISO2"],
  famousAthletes: ["TODO Athlete 1", "TODO Athlete 2"],
  records: [
    { title: "TODO record", holder: "TODO", value: "TODO", year: 2020 },
  ],

  variants: ["TODO-variant-slug"],
  relatedSports: ["TODO-related-slug"],

  skills: ["TODO skill 1", "TODO skill 2"],
  strategies: [
    { title: "TODO strategy", body: "TODO description" },
  ],

  terminology: [
    { term: "TODO term", meaning: "TODO meaning" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "TODO", body: "TODO" }] },
    { level: "intermediate", steps: [{ title: "TODO", body: "TODO" }] },
  ],
  faq: [
    { question: "TODO?", answer: "TODO." },
  ],

  wikipediaTitle: "TODO Wikipedia Article Title",
  sources: [
    { label: "Wikipedia — TODO", url: "https://en.wikipedia.org/wiki/TODO", publisher: "Wikipedia" },
    { label: "TODO governing body", url: "https://TODO", publisher: "TODO" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
