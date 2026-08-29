import type { Sport } from "@/lib/types";

export const reviveBoardGame: Sport = {
  id: "revive-board-game",
  slug: "revive-board-game",
  name: "Revive (board game)",
  officialName: "Revive",
  aliases: [],
  shortDescription:
    "Aporta Games post-apocalyptic 2-4 player euro (Kai Starck / Helge Meissner / Anna & Adam Wisniewski, 2022) — reawakening 5 clans on a ravaged Earth via variable player powers, card programming, artifact combos, and modular tech tree. 90-150 min; 12+.",
  longDescription:
    "Revive is a heavy euro-strategy board game designed by Kai Starck, Helge Meissner, and Anna & Adam Wisniewski — published by Aporta Games (Norway) with international distribution by Pegasus Spiele + Meeple Space in 2022. Set in a post-apocalyptic future where 5 clans (Kadobo Order, Reef, Iron Titans, Hemis Empire, Dwellers) are awakening from cryogenic sleep to reclaim a ravaged Earth. 2-4 players compete over 5 rounds; each player picks 1 of 5 asymmetric clans, each with distinct starting resources, powers, and specialisations. Turn-based actions: each turn player takes 2 of 5 available actions (Explore, Populate, Machine, Contact, Rest) which are on a rondel that unlocks progressively via a personal 'awakening' track. Card programming — players draft cards each round + play them to gain artifacts, tech tokens, energy. Modular map hex tiles; asymmetric clan boards; combo-rich artifact system. 90-150 min play time; complexity 4.0/5 on BGG. Ranked in BGG Top 100 within a year of release; nominated for Kennerspiel des Jahres 2023 (Connoisseur Game of the Year) — did not win but shortlisted. Deluxe Kickstarter edition + expansion 'The Deep' (2024) added.",
  category: "board-games",
  subCategory: "heavy euro (post-apocalyptic)",
  sportType: "mixed", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "NO",
  regionOfOrigin: "Norway (Aporta Games) + Germany (Pegasus Spiele)",
  estimatedOrigin: "Released 2022 by Aporta Games; expansion 'The Deep' released 2024",
  players: { min: 2, max: 4, note: "Optimal 3-4 player; solo mode available via Automa deck." },
  equipment: [
    { name: "Modular hex map tiles", description: "Assembled per game for variable board setup." },
    { name: "5 asymmetric clan boards", description: "Kadobo Order, Reef, Iron Titans, Hemis Empire, Dwellers." },
    { name: "Rondel action tokens", description: "5-action rondel unlocking via awakening track." },
    { name: "Artifact + tech tokens", description: "Artifact deck + progression tokens." },
    { name: "Card programming decks", description: "Draft + play card system per round." },
  ],
  duration: { approximateMinutes: 120, structure: "90-150 min for 3-4 players; ~120 min average." },
  objective: "Score most Victory Points across 5 rounds via territory expansion, awakening completion, tech tree, and artifact combos.",
  matchStructure: "5 rounds; each round: draft cards → take 2 rondel actions → resolve endgame conditions.",
  basicRules: [
    { title: "5 asymmetric clans", body: "Each clan has unique starting resources + power + specialisation strategy." },
    { title: "Rondel 5 actions", body: "Each turn = 2 of 5 actions (Explore, Populate, Machine, Contact, Rest); rondel unlocks via awakening track." },
    { title: "5-round game", body: "Fixed 5 rounds; endgame VP scoring on final round + Awakening bonus." },
  ],
  advancedRules: [
    { title: "Card programming + draft", body: "Draft + play cards each round to trigger actions + gain artifact + tech tokens." },
    { title: "Awakening track progression", body: "Fill awakening slots to unlock more rondel actions + endgame VP bonus." },
    { title: "Artifact combo scoring", body: "Chain artifact + tech tokens for exponential VP scoring in Turn 5." },
  ],
  scoring: {
    summary: "Sum Victory Points from territory, awakening, tech tree, artifact combos.",
    winCondition: "Most VP after 5 rounds.",
    breakdown: [
      { action: "Territory expansion", points: "Variable VP per hex" },
      { action: "Awakening slots filled", points: "VP + rondel unlocks" },
      { action: "Artifact combo chains", points: "Exponential VP in Turn 5" },
    ],
  },
  penalties: [
    { title: "Missed action opportunity", body: "No penalty; strategic depth requires efficient action selection." },
    { title: "Blocked expansion territory", body: "Positional play matters; players can block opponent expansion." },
  ],
  positions: [{ name: "Clan Leader", role: "Solo player leading one of 5 asymmetric clans through Earth reclamation.", count: 1 }],
  officiating: { officials: ["Group consensus; no formal officials"], summary: "Player-managed rules enforcement." },
  governingBodies: [
    { name: "Aporta Games", founded: 2016, headquarters: "Trondheim, Norway" },
    { name: "Pegasus Spiele", founded: 1993, headquarters: "Friedberg, Germany" },
  ],
  majorCompetitions: [
    { name: "Kennerspiel des Jahres 2023 (Connoisseur Game shortlist)", frequency: "annual", founded: 2011, region: "Germany / German-speaking world" },
    { name: "Board Game Geek Top 100 (post-release)", frequency: "ongoing", founded: 2000, region: "global (community)" },
  ],
  countriesPlayed: ["NO", "DE", "US", "GB", "FR", "IT", "ES", "PL", "AU", "BR"],
  famousAthletes: ["Kai Starck (designer)", "Helge Meissner (designer)", "Anna & Adam Wisniewski (designers)"],
  records: [
    { title: "Kennerspiel des Jahres 2023 nominee", holder: "Aporta Games", value: "Shortlisted for Kennerspiel des Jahres 2023 (Connoisseur Game of the Year)", year: 2023 },
    { title: "BGG Top 100 within one year", holder: "Aporta Games", value: "Entered Board Game Geek Top 100 rankings within one year of release", year: 2023 },
    { title: "The Deep expansion 2024", holder: "Aporta Games", value: "First expansion 'The Deep' released 2024 adding underwater exploration + new clan", year: 2024 },
  ],
  variants: ["revive-standard", "revive-deluxe-kickstarter", "revive-the-deep-expansion"],
  relatedSports: ["ark-nova", "brass-birmingham", "great-western-trail", "gaia-project"],
  skills: ["action programming", "asymmetric clan strategy", "combo scoring optimization", "map positioning"],
  strategies: [
    { title: "Awakening track prioritisation", body: "Fill awakening slots early to unlock more rondel actions — snowballs card + tech tempo." },
    { title: "Artifact combo focus", body: "Pick artifact + tech token combinations that chain in Turn 5 for exponential VP." },
    { title: "Clan-specific opener", body: "Each clan has distinct opening: Kadobo — awakening race; Reef — expansion; Iron Titans — machine tech; Hemis — card control; Dwellers — territory." },
  ],
  terminology: [
    { term: "Awakening", meaning: "Player track unlocking rondel actions + VP" },
    { term: "Rondel", meaning: "5-action wheel each turn" },
    { term: "Artifact", meaning: "Combo-scoring token from cards" },
    { term: "Tech tree", meaning: "Progression track granting powers + VP" },
    { term: "Clan", meaning: "One of 5 asymmetric player factions" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Kadobo Order intro clan", body: "Kadobo has clearest strategy — good learning clan." }] },
    { level: "intermediate", steps: [{ title: "All 5 clans + card combo depth", body: "Play each clan; learn artifact + tech combo scoring." }] },
    { level: "advanced", steps: [{ title: "Tournament + The Deep expansion", body: "Elite-level clan-specific optimization + expansion content." }] },
  ],
  faq: [
    { question: "How long does a game of Revive take?", answer: "90-150 minutes for 3-4 players; 60-90 minutes for 2 players. Rulebook-heavy first game may take longer as players learn the systems." },
    { question: "Is Revive good for beginners?", answer: "Not really — it's a heavy euro at 4.0/5 complexity on BGG. Requires familiarity with modern eurogames (Ark Nova, Terra Mystica). Kadobo Order clan is the recommended starting clan for learning." },
  ],
  wikipediaTitle: "Revive (board game)",
  sources: [{ label: "BoardGameGeek — Revive", url: "https://boardgamegeek.com/boardgame/332772/revive", publisher: "BoardGameGeek" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default reviveBoardGame;
