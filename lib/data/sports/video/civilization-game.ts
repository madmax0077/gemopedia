import type { Sport } from "@/lib/types";

export const civilizationGame: Sport = {
  id: "civilization-game",
  slug: "civilization-game",
  name: "Civilization",
  officialName: "Sid Meier's Civilization (series)",
  aliases: ["Civ", "CivVI", "CivVII"],
  shortDescription:
    "The definitive turn-based 4X strategy series — build a civilization from a single settler in 4000 BCE to space colonisation, competing with rivals through diplomacy, culture, science, or conquest.",
  longDescription:
    "Created by Sid Meier and released by MicroProse in 1991, Civilization pioneered the 4X (eXplore, eXpand, eXploit, eXterminate) turn-based strategy genre. Now on its seventh mainline entry (Civ VII, 2025), the series has sold 60+ million copies. Players lead one of ~50 historical leaders (Cleopatra, Gandhi, Napoleon, etc.), guiding their empire from the Stone Age to the Information/Space age through hundreds of turns, researching technologies, founding cities, waging wars, or pursuing peaceful cultural/scientific victories.",

  category: "video-games",
  subCategory: "turn-based 4X strategy series",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Baltimore, Maryland (Firaxis Games; originally MicroProse)",
  estimatedOrigin: "First release 1991 by MicroProse; Civ VII released February 2025 by Firaxis / 2K Games",

  players: { min: 1, max: 12, note: "Single-player vs AI standard; multiplayer up to 12 humans; hotseat + play-by-cloud modes." },
  field: {
    surfaceName: "Procedurally generated world map",
    dimensions: "Duel (44×26 hexes) to Huge (128×80 hexes)",
    description: "Hexagonal tile grid with terrain (grassland, desert, mountains, coast) + resources + wonders.",
  },
  equipment: [
    { name: "Gaming PC / console", description: "PC (Steam, Epic), PS5, Xbox Series X, Nintendo Switch. Civ VI runs on iPad + iPhone." },
    { name: "Mouse + keyboard", description: "Preferred input; controller supported on console." },
  ],
  duration: {
    approximateMinutes: 600,
    structure: "Standard game: 8-12 hours across 500 turns. Marathon: 40+ hours. Multiplayer: 3-6 hours (Online speed).",
  },

  objective:
    "Win by achieving one of six victory conditions before rivals: Science (launch Mars mission), Culture (attract tourists), Domination (capture all capitals), Religion (convert world), Diplomatic (win 20 Diplomatic Points), or Score (highest at turn limit).",
  matchStructure:
    "Each turn: move units, produce buildings/units in cities, choose research, manage diplomacy. Turns advance simultaneously in multiplayer or sequentially in single-player. Game progresses through 6 eras (Ancient → Information). Victory triggered when one condition is met.",

  basicRules: [
    { title: "Founding cities", body: "Move a Settler to a good tile (fresh water, resources) and Found City. Each city works surrounding hexes for yield." },
    { title: "Research", body: "Choose a technology from the tech tree each turn — accumulate Science points to unlock it." },
    { title: "Movement", body: "Units have 2-4 movement points per turn; terrain and roads affect cost. Only one military unit per hex." },
    { title: "Combat", body: "Melee: attacker and defender both take damage. Ranged: attackers shoot without retaliation. Terrain and unit type provide bonuses." },
    { title: "Diplomacy", body: "Declare Friendship, alliances, trade luxury resources, or declare war (incurs warmonger penalty)." },
  ],
  advancedRules: [
    { title: "District placement (VI)", body: "Cities specialise via districts (Campus, Commercial, Theater) with adjacency bonuses from terrain." },
    { title: "Great People", body: "Earn Great Scientists/Artists/Engineers via specialty districts; each provides a one-time boost." },
    { title: "Governors (VI)", body: "Assign 7 governors with unique promotions across cities." },
    { title: "Civics tree", body: "Parallel to tech tree — unlocks government types, wonders, and policy cards." },
  ],
  scoring: {
    summary: "In Score Victory, tally points from techs, wonders, population, and religion. Other victories are binary.",
    winCondition: "First to achieve any Victory condition wins; otherwise highest Score at turn 500 (Standard) wins.",
    breakdown: [
      { action: "Wonder built", points: "5-20 Score" },
      { action: "Tech researched", points: "1-3 Score" },
      { action: "Population per city", points: "1 per Citizen" },
    ],
  },

  positions: [
    { name: "Leader", role: "Historical figure with unique ability + agenda; player controls empire.", count: 1 },
    { name: "Advisors", role: "AI helpers in Civ VII (military, science, culture) — replaced Governors." },
  ],
  officiating: {
    officials: ["Tournament directors (GOTM community)"],
    summary: "No formal officiating for single-player; multiplayer tournaments (Play Your Damn Turn, HoF, GOTM) use community moderators.",
  },

  governingBodies: [
    { name: "Firaxis Games (developer)", founded: 1996, headquarters: "Sparks, Maryland, USA", website: "https://firaxis.com" },
  ],
  majorCompetitions: [
    { name: "Play Your Damn Turn (PYDT) tournaments", frequency: "year-round", founded: 2010, region: "online" },
    { name: "Civilization Hall of Fame (HoF)", frequency: "monthly", founded: 2002, region: "online single-player scoring" },
    { name: "Game of the Month (GOTM)", frequency: "monthly", founded: 2003, region: "online" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "RU", "PL", "BR", "AU", "JP", "KR", "CA", "SE", "CN"],
  famousAthletes: [
    "Marbozir (streamer + Deity player)",
    "PotatoMcWhiskey (YouTube educator)",
    "TheSaxyGamer (competitive multiplayer)",
    "Filthy (streamer + Civ modder)",
    "PitTheFool (top HoF player)",
  ],
  records: [
    { title: "Highest Civ VI score", holder: "Various HoF entries", value: "60000+ Score on Deity difficulty", year: 2023 },
    { title: "Fastest Science Victory", holder: "HoF Speed Run", value: "Turn 155 on Standard speed", year: 2022 },
    { title: "Total franchise sales", holder: "Sid Meier's Civilization series", value: "60+ million copies", year: 2024 },
  ],

  variants: ["civilization-vi", "civilization-vii", "civilization-revolution", "beyond-earth", "freeciv"],
  relatedSports: ["age-of-empires", "stellaris", "endless-legend", "old-world"],

  skills: [
    "strategic long-term planning",
    "resource-optimization + math",
    "historical + geographic knowledge",
    "diplomatic negotiation",
    "spatial city-planning (district adjacency)",
  ],
  strategies: [
    { title: "Found capital by turn 1-2", body: "Move your settler max 1-2 tiles — losing turns to found delays growth exponentially." },
    { title: "Plan district adjacencies", body: "In Civ VI, a Campus adjacent to 3 mountains produces 6+ Science; plan cities around geography." },
    { title: "Pillage for gold", body: "Pillaging enemy tiles restores unit health + gives gold — key for cavalry-based war economies." },
    { title: "Boost science with Eurekas", body: "Complete tech Eurekas (build 3 archers → Archery in half time) to snowball tech advantage." },
  ],

  terminology: [
    { term: "4X", meaning: "eXplore, eXpand, eXploit, eXterminate — the strategy genre Civ pioneered." },
    { term: "Deity", meaning: "The highest difficulty level; AI gets massive bonuses." },
    { term: "Warmonger", meaning: "Diplomatic penalty for aggressive war declarations." },
    { term: "Eureka / Inspiration", meaning: "Civ VI boost triggers that give 50% science/civic progress." },
    { term: "Great Person", meaning: "Historical figures earned via districts (Isaac Newton, Homer, etc.)." },
    { term: "Wonder", meaning: "Unique building constructible once per game (Pyramids, Great Wall, Space Elevator)." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play the tutorial", body: "Civ VII's tutorial teaches basics in ~2 hours; Prince difficulty is balanced for new players." },
        { title: "Master one civilization first", body: "Pick a strong beginner Civ (Rome, Japan, Egypt) and learn its bonuses before rotating." },
        { title: "Watch PotatoMcWhiskey Let's Plays", body: "His narrated Deity runs are the most-cited Civ tutorial content on YouTube." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Climb to Deity", body: "Beat AI on King → Emperor → Immortal → Deity in sequence." },
        { title: "Try Multiplayer + PYDT", body: "Human-vs-human dramatically changes optimal play; PYDT (async multiplayer) suits busy players." },
        { title: "Speedrun for HoF", body: "Sub-turn-150 Science victories require ruthless optimization — join CivFanatics HoF for challenges." },
      ],
    },
  ],

  faq: [
    { question: "Which Civ game should I start with?", answer: "Civ VI (mature, cheap, deep) if you want depth; Civ VII (2025, new mechanics with 3 Ages) for the latest experience." },
    { question: "How long does a game take?", answer: "Standard speed on a Standard map: 8-12 hours. Online speed multiplayer: 3-6 hours. Marathon single-player: 40+ hours." },
    { question: "Is there competitive Civ?", answer: "Yes — PYDT tournaments and Civ Hall of Fame speedruns are the main competitive scenes, though smaller than RTS/MOBA circuits." },
    { question: "One more turn?", answer: "The infamous curse of Civ — 'just one more turn' regularly turns into 6 more hours. You have been warned." },
  ],

  sources: [
    { label: "Wikipedia — Civilization (series)", url: "https://en.wikipedia.org/wiki/Civilization_(series)", publisher: "Wikipedia" },
    { label: "Civ VII official site", url: "https://civilization.2k.com/civ-vii/", publisher: "2K Games" },
    { label: "CivFanatics Forums", url: "https://forums.civfanatics.com/", publisher: "CivFanatics" },
  ],
  wikipediaTitle: "Civilization (series)",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
