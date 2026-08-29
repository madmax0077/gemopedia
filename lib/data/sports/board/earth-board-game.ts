import type { Sport } from "@/lib/types";

export const earthBoardGame: Sport = {
  id: "earth-board-game",
  slug: "earth-board-game",
  name: "Earth (board game)",
  officialName: "Earth",
  aliases: [],
  shortDescription:
    "Inside Up Games engine-building tableau card game (Maxime Tardif, 2023) — players build tableau of 320+ unique cards (fauna, flora, climate, ecosystem) forming personal ecosystem. Very fluid engine-building; ranks in BGG Top 100. 90-min play; 1-5 players.",
  longDescription:
    "Earth is a tableau-building engine card game designed by Maxime Tardif — published by Inside Up Games (Canada) in 2023 following successful Kickstarter that raised $2M+ from 40,000+ backers. 1-5 players build a personal 4×4 tableau of unique cards from a base + expansion pool totalling 320+ unique cards spanning Fauna (animals), Flora (plants), Climate (weather effects), Ecosystem (biome-modifiers), and Events. Each turn, one of 4 actions: Plant, Compost, Water, Grow — each triggers a chain of activations from cards in your tableau (island-style combo triggering). Building the tableau creates an engine where cards feed each other resources + points. Signature 'green' aesthetic with real-world species art. Ranked BGG Top 100 within a year of release. Nominated for Golden Geek Award 2024 Best Strategy Game. Solo mode is exceptional. Expansion 'Abundance' (2024) added 100+ new cards. Design is celebrated for accessibility (easy-to-learn) + depth (endless combo strategy variety). Comparable to Ark Nova + Terraforming Mars for engine-building enthusiasts but faster + more thematic (real Earth ecosystems).",
  category: "board-games",
  subCategory: "engine-building tableau card game",
  sportType: "mixed", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (Inside Up Games, Quebec)",
  estimatedOrigin: "Kickstarted 2022 ($2M+ raised); released 2023 by Inside Up Games; expansion 'Abundance' 2024",
  players: { min: 1, max: 5, note: "Solo (excellent) + 2-5 competitive; scales cleanly across player counts." },
  equipment: [
    { name: "320+ unique cards (Fauna/Flora/Climate/Ecosystem/Event)", description: "Base game + Abundance expansion; each card unique with distinct rules text." },
    { name: "4×4 tableau spaces per player", description: "Personal player board with 16 tableau slots." },
    { name: "Resource tokens (sprout, soil, tree)", description: "Physical tokens tracking resources." },
    { name: "Terrain + Ecosystem tiles", description: "Modular biome tiles adding location bonuses." },
    { name: "Automa deck (solo)", description: "Solo variant with automated opponent." },
  ],
  duration: { approximateMinutes: 90, structure: "60-120 min depending on player count; ~90 min average for 3-4 players." },
  objective: "Build tableau engine to score maximum VP through combos of fauna, flora, climate, ecosystem, and endgame achievements.",
  matchStructure: "Each turn: pick 1 of 4 actions (Plant/Compost/Water/Grow), trigger tableau chain. Game ends when player fills 16-card tableau. Final VP scoring by tableau combos + achievements.",
  basicRules: [
    { title: "4 turn actions: Plant / Compost / Water / Grow", body: "Each turn one of 4 actions triggers chain of card activations from your tableau." },
    { title: "Tableau builds via 16-slot personal board", body: "Play cards to your 4×4 board; each triggers own + adjacent card activations." },
    { title: "Endgame trigger: fill 16 tableau slots", body: "When first player fills all 16 slots, current round completes then endgame." },
  ],
  advancedRules: [
    { title: "Chain combo triggering", body: "Playing a card can trigger nearby cards, which trigger further cards — chain reactions score compound VP." },
    { title: "Terrain + Ecosystem tile placement", body: "Modular tiles under your tableau provide location-based bonuses (Forest, Wetland, Grassland, etc.)." },
    { title: "Endgame Achievement cards", body: "Public + secret Achievement cards score bonus VP for specific tableau shapes / types." },
  ],
  scoring: {
    summary: "Sum tableau VP + Achievement bonuses + resource conversion.",
    winCondition: "Highest total VP after endgame trigger.",
    breakdown: [
      { action: "Card VP", points: "1-8 per card" },
      { action: "Chain combo activations", points: "Multi-card cascade VP" },
      { action: "Achievement cards", points: "Bonus 5-15 VP each" },
    ],
  },
  penalties: [
    { title: "Unable to trigger chain", body: "Turn produces low output; must adapt tableau planning." },
    { title: "Tableau shape mismatch to Achievements", body: "Missed endgame Achievement bonus if tableau doesn't fit criteria." },
  ],
  positions: [{ name: "Naturalist / Ecosystem Builder", role: "Solo tableau-builder competing on VP.", count: 1 }],
  officiating: { officials: ["Group consensus"], summary: "Player-managed rules; game rules are unambiguous." },
  governingBodies: [
    { name: "Inside Up Games", founded: 2019, headquarters: "Montreal, Quebec, Canada" },
  ],
  majorCompetitions: [
    { name: "Golden Geek Award 2024 Best Strategy Game (nominee)", frequency: "annual", founded: 2006, region: "global (BGG community)" },
    { name: "Board Game Geek Top 100 (post-release)", frequency: "ongoing", founded: 2000, region: "global (BGG community)" },
  ],
  countriesPlayed: ["CA", "US", "GB", "DE", "FR", "IT", "ES", "AU", "BR", "JP"],
  famousAthletes: ["Maxime Tardif (designer)", "Andrew Bosley (artist)"],
  records: [
    { title: "$2M+ Kickstarter 2022", holder: "Inside Up Games", value: "Raised $2 million+ from 40,000+ backers on Kickstarter in 2022 — one of largest card-game Kickstarters", year: 2022 },
    { title: "BGG Top 100 within one year", holder: "Inside Up Games", value: "Ranked BGG Top 100 within one year of release", year: 2024 },
    { title: "Abundance expansion 2024", holder: "Inside Up Games", value: "First expansion 'Abundance' added 100+ new cards + new mechanics in 2024", year: 2024 },
  ],
  variants: ["earth-standard", "earth-kickstarter-deluxe", "earth-abundance-expansion"],
  relatedSports: ["ark-nova", "wingspan", "terraforming-mars", "everdell"],
  skills: ["tableau engine building", "combo chain design", "achievement targeting", "action efficiency planning"],
  strategies: [
    { title: "Chain engine early", body: "First 4-6 cards should form a chainable core — Fauna feeding Flora feeding Ecosystem — that scales combo output for the rest of the game." },
    { title: "Achievement-targeted tableau shape", body: "Read public Achievements early; shape tableau to hit 2-3 of them for endgame VP jackpot." },
    { title: "Grow action rush endgame", body: "When your tableau is 10+ cards, Grow-action turns produce massive VP; time endgame trigger to maximise Grow returns." },
  ],
  terminology: [
    { term: "Fauna", meaning: "Animal cards" },
    { term: "Flora", meaning: "Plant cards" },
    { term: "Climate / Ecosystem", meaning: "Weather + biome modifier cards" },
    { term: "Chain trigger", meaning: "Cascading card activations from action" },
    { term: "Tableau", meaning: "4×4 personal card board" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Solo Automa game", body: "Learn 4 actions + basic chain triggers vs Automa deck." }] },
    { level: "intermediate", steps: [{ title: "2-3 player + Achievement targeting", body: "Compete vs. friends; learn to target public Achievements." }] },
    { level: "advanced", steps: [{ title: "5 player + Abundance expansion + Golden Geek-level play", body: "Full 5-player games + all expansion content + combo-optimisation strategies." }] },
  ],
  faq: [
    { question: "How does Earth compare to Wingspan?", answer: "Both are nature-themed engine-builders. Wingspan focuses exclusively on birds; Earth spans all ecosystems (fauna, flora, climate). Earth has more chain-combo depth, longer play time (90 min vs. 60 min), and more strategic complexity. Wingspan is more accessible; Earth is more strategically rich." },
    { question: "Is Earth a solo-friendly game?", answer: "Yes — Earth is widely praised as one of the best solo board games of 2023. Automa deck provides genuine challenge; game scales cleanly to solo without feeling like an adaptation." },
  ],
  wikipediaTitle: "Earth (board game)",
  sources: [{ label: "BoardGameGeek — Earth", url: "https://boardgamegeek.com/boardgame/350184/earth", publisher: "BoardGameGeek" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default earthBoardGame;
