import type { Sport } from "@/lib/types";

/**
 * Template — VIDEO GAME (Super Mario Bros., Pac-Man, Tetris, Minecraft,
 * League of Legends, Dota 2, ...).
 *
 * Field expectations:
 *   REQUIRED : equipment (platforms), objective, matchStructure,
 *              basicRules (controls + goals), sportSpecific (developer,
 *              publisher, engine, sequels), variants (sequels)
 *   OPTIONAL : majorCompetitions (esports scene), famousAthletes
 *              (pro players), records
 *   N/A      : field, positions, officiating (except esports), penalties
 */
export const TEMPLATE_VIDEO_GAME: Partial<Sport> = {
  id: "TODO_slug",
  slug: "TODO_slug",
  name: "TODO_Name",
  aliases: [],
  shortDescription: "TODO one-sentence blurb.",
  longDescription: "TODO paragraph.",

  category: "video-games",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "TODO_ISO2",
  estimatedOrigin: "TODO_release year — developer",

  players: { min: 1, max: 4, note: "TODO single-player / multiplayer" },
  equipment: [
    { name: "TODO_platform (console/PC/mobile)", description: "TODO" },
    { name: "TODO_controller/keyboard", description: "TODO" },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "TODO_level structure / match length",
  },
  objective: "TODO_paragraph.",
  matchStructure: "TODO_paragraph.",

  basicRules: [
    { title: "Controls", body: "TODO" },
    { title: "Objective", body: "TODO" },
    { title: "Progression", body: "TODO" },
    { title: "Winning / losing", body: "TODO" },
  ],
  scoring: {
    summary: "TODO — score / rank / medal / K/D ratio.",
    winCondition: "TODO",
  },

  majorCompetitions: [
    { name: "TODO_World Championship", frequency: "annual", founded: 2010, region: "worldwide" },
  ],
  countriesPlayed: ["TODO_ISO2"],
  famousAthletes: ["TODO pro player"],
  records: [
    { title: "TODO speedrun / high score", holder: "TODO", value: "TODO", year: 2020 },
  ],

  variants: ["TODO-sequel-slug"],
  relatedSports: [],

  skills: ["reaction time", "TODO"],
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
  sportSpecific: {
    developer: "TODO",
    publisher: "TODO",
    engine: "TODO",
    platforms: ["TODO"],
    sequels: ["TODO"],
    esportsScene: false,
  },
};
