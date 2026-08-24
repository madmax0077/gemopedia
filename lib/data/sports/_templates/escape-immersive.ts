import type { Sport } from "@/lib/types";

/**
 * Template — ESCAPE / IMMERSIVE (escape rooms, ARGs, murder-mystery
 * evenings, immersive theatre games, treasure hunts, geocaching).
 *
 * Field expectations:
 *   REQUIRED : players (team size), equipment (venue / puzzle kit),
 *              objective, matchStructure, basicRules, variants, notable
 *              venues or instances (sportSpecific)
 *   OPTIONAL : famousAthletes (top designers / puzzle authors)
 *   N/A      : field, positions, officiating, penalties, scoring (usually)
 */
export const TEMPLATE_ESCAPE_IMMERSIVE: Partial<Sport> = {
  id: "TODO_slug",
  slug: "TODO_slug",
  name: "TODO_Name",
  aliases: [],
  shortDescription: "TODO one-sentence blurb.",
  longDescription: "TODO paragraph.",

  category: "escape-immersive",
  sportType: "team",
  indoorOutdoor: "both",
  isOlympic: false,
  era: "21st-century",
  popularity: "regional",

  countryOfOrigin: "TODO_ISO2",
  estimatedOrigin: "TODO_year — creator / venue",

  players: { min: 2, max: 12, note: "TODO ideal group size" },
  equipment: [
    { name: "TODO_venue / puzzle kit / clue set", description: "TODO" },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "TODO_single-session — usually a 45-60 minute time cap",
  },
  objective: "TODO_paragraph — what the team is trying to achieve.",
  matchStructure: "TODO_paragraph — briefing → play → debrief.",

  basicRules: [
    { title: "Setup / briefing", body: "TODO" },
    { title: "Play", body: "TODO" },
    { title: "Time cap / completion", body: "TODO" },
  ],
  scoring: {
    summary: "TODO — pass/fail on completion, or completion time + hints used.",
    winCondition: "TODO",
  },

  countriesPlayed: ["TODO_ISO2"],
  variants: [],
  relatedSports: [],
  skills: ["problem-solving", "teamwork", "TODO"],

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
    notableVenues: ["TODO_venue name"],
  },
};
