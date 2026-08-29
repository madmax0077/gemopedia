import type { Sport } from "@/lib/types";

export const galaga: Sport = {
  id: "galaga",
  slug: "galaga",
  name: "Galaga",
  officialName: "Galaga",
  aliases: ["Gyaraga", "Galaga '88"],
  shortDescription:
    "Namco's 1981 fixed-shooter arcade classic — pilot a Fighter at the bottom of the screen and blast waves of alien Bosses while dodging their tractor beams.",
  longDescription:
    "Galaga released in 1981 by Namco as a sequel to Galaxian (1979) and became one of the highest-earning arcade games of all time. Its innovation was the 'tractor beam' Boss Galaga that could capture your fighter — rescue it to dual-fighter mode with double firepower. Galaga defined the fixed-shooter genre, sold millions of arcade cabinets, and remains playable in every subsequent Namco/Bandai compilation. The game has a hardcore competitive speedrun and high-score scene tracked by Twin Galaxies since the early 1980s.",

  category: "video-games",
  subCategory: "fixed-shooter arcade classic",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "JP",
  regionOfOrigin: "Tokyo, Japan (Namco)",
  estimatedOrigin: "Released September 1981 by Namco; ported to Atari 7800, NES, and modern platforms since.",

  players: { min: 1, max: 2, note: "1-2 alternating single-player at arcade; solo home ports." },
  field: {
    surfaceName: "Vertical arcade screen",
    dimensions: "224 × 288 pixels (portrait)",
    description: "Star-field background; Fighter locked to bottom lane, aliens fly in Attack Wave patterns from top." },
  equipment: [
    { name: "Arcade cabinet or emulator", description: "Original Galaga cabinet, home ports (NES, PSX, Switch), or MAME emulator." },
    { name: "8-way joystick + fire button", description: "Or D-pad + button on controllers." },
  ],
  duration: {
    approximateMinutes: 10,
    structure: "Casual game: 10-20 minutes. Marathon high-score runs: 30+ hours (world records reach 40+ hours)." },

  objective:
    "Survive as long as possible while destroying incoming aliens for points. High-score contest; no end-state.",
  matchStructure:
    "Waves of 3 alien types (Bees, Butterflies, Bosses) enter formation, then attack in swoops. Every 3-4 stages: Challenging Stage (bonus round). Extra lives at 30,000 + 100,000 pts.",

  basicRules: [
    { title: "Movement", body: "Fighter locked to horizontal axis at bottom; move left/right only." },
    { title: "Fire", body: "One button. Fighter has 2 bullets on-screen max; capturing bonus fighter enables dual fire (4 bullets)." },
    { title: "Lives", body: "3 lives start. Extra life at 30,000 + 100,000 pts (dip-switch configurable)." },
    { title: "Formation entry", body: "Aliens enter in swooping patterns — hitting them during entry gives points but no capture." },
    { title: "Boss capture", body: "Bosses fire green tractor beam; if it hits your Fighter, you lose a life but the Fighter is captured. Kill the capturing Boss to rescue and gain dual Fighter." },
  ],
  advancedRules: [
    { title: "Challenging Stage", body: "Every 3rd stage: aliens fly patterns without firing; hit all 40 for 10K bonus (Perfect)." },
    { title: "Wave patterns", body: "255 unique wave patterns; recognizing them lets you pre-fire." },
    { title: "Rank up", body: "After 20 waves, difficulty caps; high-score runs can loop indefinitely." },
  ],
  scoring: {
    summary: "Points per alien type; bonus for capturing + destroying with dual fighter.",
    winCondition: "High score; competitive world records tracked by Twin Galaxies.",
    breakdown: [
      { action: "Bee (in formation)", points: "50 pts" },
      { action: "Butterfly (in formation)", points: "80 pts" },
      { action: "Boss (in formation)", points: "150 pts" },
      { action: "Challenging Stage perfect", points: "10,000 pts" },
    ],
  },

  officiating: {
    officials: ["Twin Galaxies referees"],
    summary: "Twin Galaxies has maintained the official Galaga world-record leaderboards since 1982.",
  },

  governingBodies: [
    { name: "Bandai Namco (rights holder)", founded: 1955, headquarters: "Tokyo, Japan", website: "https://bandainamco.com" },
    { name: "Twin Galaxies (score verifier)", founded: 1981, headquarters: "USA", website: "https://twingalaxies.com" },
  ],
  majorCompetitions: [
    { name: "Galaga Marathon (KTG event)", frequency: "annual", founded: 2010, region: "Kong Off arcade events" },
    { name: "Twin Galaxies World Records", frequency: "year-round", founded: 1982, region: "online submission" },
  ],
  countriesPlayed: ["US", "JP", "GB", "DE", "CA", "AU"],
  famousAthletes: [
    "Andrew Laidlaw (US, 40-hour marathon record holder)",
    "Perry Rodgers (US, TG record holder)",
    "Phil Day (GB, competitive arcade)",
    "Armando Gonzalez (US, Galaga world champion)",
  ],
  records: [
    { title: "Highest Galaga score", holder: "Andrew Laidlaw", value: "21,024,910 pts", year: 2020 },
    { title: "Longest Galaga marathon", holder: "Phil Day", value: "40+ hours single game", year: 2015 },
    { title: "Perfect Challenging Stages consecutively", holder: "Perry Rodgers", value: "20 consecutive perfect stages", year: 2005 },
  ],

  variants: ["gaplus", "galaga-88", "galaxian", "galaga-legions"],
  relatedSports: ["galaxian", "space-invaders", "pac-man", "dig-dug"],

  skills: [
    "hand-eye coordination + reflex",
    "pattern memorization",
    "controlled tractor-beam capture timing",
    "endurance for marathon runs",
  ],
  strategies: [
    { title: "Sacrifice for dual fighter", body: "Intentionally get captured by first Boss and destroy the same Boss on its next pass to gain dual fighter early." },
    { title: "Memorize formation entry", body: "The first 4 stages have identical alien entry patterns — pre-fire at the entry points." },
    { title: "Prioritize Boss kills in formation", body: "Bosses are worth 150 pts in formation vs. 400 pts swooping — but swooping ones fire tractors." },
    { title: "Don't shoot Challenging Stage aliens twice", body: "One bullet per alien; missing the last one voids the 10K perfect bonus." },
  ],

  terminology: [
    { term: "Tractor beam", meaning: "Green beam fired by Bosses that captures your Fighter." },
    { term: "Dual Fighter", meaning: "Double Fighter formation after rescuing a captured Fighter — 4-bullet capacity." },
    { term: "Challenging Stage", meaning: "Every third stage; bonus round without firing enemies." },
    { term: "Rank", meaning: "Difficulty tier that scales with stage count." },
    { term: "Kill screen", meaning: "Galaga has no true kill screen — the game runs indefinitely." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play Galaga Legions on Switch/Xbox", body: "Modern rerelease with the classic mode + tutorials." },
        { title: "Learn Challenging Stage patterns", body: "Practice hitting all 40 aliens on the first Challenging Stage." },
        { title: "Master tractor rescue", body: "Get captured intentionally on stage 3, then destroy the same Boss for dual fighter." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Watch WR runs on YouTube", body: "Andrew Laidlaw's WR footage shows optimal rank management + pattern optimization." },
        { title: "Submit to Twin Galaxies", body: "Record verified footage + submit for official leaderboard recognition." },
        { title: "Prep for marathon endurance", body: "40-hour runs require sleep-deprivation training + custom controllers." },
      ],
    },
  ],

  faq: [
    { question: "How can I play Galaga today?", answer: "Bandai Namco Museum on Switch/PS4/Xbox, Arcade1Up cabinet, or MAME emulator with legally obtained ROM." },
    { question: "Is Galaga endless?", answer: "Yes — after wave 20 difficulty caps and the game loops indefinitely. Records are set by marathon play." },
    { question: "What's the double-fighter trick?", answer: "Let a Boss capture your Fighter, then kill that Boss on its next pass to rescue — you now fly with 4-bullet double-fighter." },
    { question: "Is Galaga considered a classic?", answer: "Yes — inducted into the Video Game Hall of Fame (2013) and cited as one of the most influential arcade games ever made." },
  ],

  sources: [
    { label: "Wikipedia — Galaga", url: "https://en.wikipedia.org/wiki/Galaga", publisher: "Wikipedia" },
    { label: "Twin Galaxies Galaga leaderboard", url: "https://www.twingalaxies.com/game/galaga", publisher: "Twin Galaxies" },
    { label: "Namco Museum (Switch)", url: "https://www.bandainamcoent.com/games/namco-museum", publisher: "Bandai Namco" },
  ],
  wikipediaTitle: "Galaga",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
