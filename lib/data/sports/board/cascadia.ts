import type { Sport } from "@/lib/types";

export const cascadia: Sport = {
  id: "cascadia",
  slug: "cascadia",
  name: "Cascadia",
  officialName: "Cascadia (2021, Randy Flynn, Flatout Games / AEG)",
  aliases: ["Cascadia: Rolling Hills (roll-and-write)"],
  shortDescription:
    "A puzzly tile-laying + animal-token drafting game about building Pacific Northwest ecosystems. 2022 Spiel des Jahres winner — praised as one of the most elegant modern family games.",
  longDescription:
    "Cascadia is a 2021 family/gateway tile-laying game by Randy Flynn, published by Flatout Games and AEG. Players build a shared personal wildlife park by drafting habitat tiles (5 hex-terrain types: forest, mountain, wetland, river, prairie) and 5 animal types (bear, elk, salmon, hawk, fox). On each turn, a player takes one of four tile+token pairs displayed, adds the tile to their expanding ecosystem, and places the token on a matching habitat. Score at game end: (1) largest contiguous habitat areas, (2) animal-specific scoring rules chosen at setup (each animal has 4 scoring card variants, providing enormous replayability). Cascadia won the 2022 Spiel des Jahres — the most prestigious award in board gaming. Nature-themed art by Beth Sobel + Anni Baertlein and elegant rules make it a bestseller in 40+ countries. Expansions Landmarks (2022) + Rolling Hills (2024 roll-and-write) extend the ecosystem.",
  category: "board-games",
  subCategory: "tile-laying ecosystem-building (2-4 players + solo)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Flatout Games — Seattle; AEG — Los Angeles)",
  estimatedOrigin: "Released May 2021 via Kickstarter; retail Oct 2021; Spiel des Jahres win July 2022",
  players: { min: 1, max: 4, note: "Solo variant included; 2-3 is optimal pacing." },
  field: {
    surfaceName: "Personal expanding hex ecosystem",
    dimensions: "~30-50 hex tiles per player at end of game",
    description: "Each player builds an expanding hex-tile ecosystem in front of them; central market of 4 tile+token pairs.",
  },
  equipment: [
    { name: "85 habitat tiles (hexagonal)", description: "Each tile shows 2 of 5 habitat types + slots for 1-3 animal types." },
    { name: "100 wildlife tokens", description: "20 each of bear, elk, salmon, hawk, fox." },
    { name: "5 scoring cards × 4 variants each", description: "20 scoring cards; 5 used per game (1 per animal)." },
    { name: "Starting habitat tiles", description: "3-tile starting cluster." },
    { name: "Nature tokens", description: "Bonus tokens for placement flexibility." },
    { name: "Scorepad", description: "End-game area." },
    { name: "Cloth bag", description: "Random draws for market refill." },
  ],
  duration: { approximateMinutes: 45, structure: "20 turns per player; ~30-60 min game." },
  objective:
    "Build the highest-scoring ecosystem: score from largest contiguous habitats + animal placement patterns.",
  matchStructure:
    "Setup: 5 animal scoring cards chosen (variants A/B/C/D). Each turn: (1) take one of 4 tile+token pairs from market; (2) place tile touching your ecosystem; (3) place token on a matching habitat slot; (4) refill market. Game ends when tile bag empty (~20 turns).",
  basicRules: [
    { title: "Take a tile+token pair", body: "Only 1 of the 4 displayed pairs per turn (or use a nature token for flexibility)." },
    { title: "Place the habitat tile", body: "Must touch your existing ecosystem." },
    { title: "Place the wildlife token", body: "Only on tiles showing that animal's icon." },
    { title: "Refill the market", body: "Draw new tile + token from bag; if 3+ tokens match, they must be culled + redrawn." },
    { title: "End when bag empty", body: "Score animal cards + largest habitat regions." },
  ],
  advancedRules: [
    { title: "Nature tokens", body: "Spend 1 to break tile+token pairing OR reshuffle 4 tokens; earn by placing on 'nature icon' tiles." },
    { title: "Family variant", body: "Play with simpler scoring cards (variant A) for kids." },
    { title: "Landmarks expansion", body: "Adds giant landmark tiles + new scoring." },
    { title: "Overpopulation", body: "If 4 same-color tokens appear in market, one must be culled + redrawn." },
  ],
  scoring: {
    summary: "Sum of: 5 animal scoring cards + largest contiguous habitats + nature token bonus.",
    winCondition: "Highest total score.",
    breakdown: [
      { action: "Bear scoring (A: pairs)", points: "4/11/19/27 for 1/2/3/4 pairs" },
      { action: "Elk scoring (A: line)", points: "2/5/9/13 for 1/2/3/4 elk in line" },
      { action: "Salmon scoring (A: line)", points: "2/4/8/12/17/22 for line length" },
      { action: "Hawk scoring (A: line-of-sight)", points: "2/5/8/11/14/18/22/26" },
      { action: "Fox scoring (A: unique neighbors)", points: "1 VP per unique neighbor animal" },
      { action: "Largest habitat (each of 5)", points: "1 VP per tile in longest + bonus for tying/beating others" },
      { action: "Unused nature tokens", points: "1 VP each" },
    ],
  },
  penalties: [
    { title: "No matching habitat", body: "Wildlife token cannot be placed → discarded (rare)." },
  ],
  positions: [
    { name: "Player (Ecologist)", role: "Builds personal ecosystem.", count: 4 },
  ],
  officiating: { officials: ["None"], summary: "Casual — self-officiated." },
  governingBodies: [
    { name: "Flatout Games", founded: 2019, headquarters: "Seattle, USA", website: "https://flatout.games" },
    { name: "AEG (Alderac Entertainment Group)", founded: 1993, headquarters: "Los Angeles, USA", website: "https://alderac.com" },
  ],
  majorCompetitions: [
    { name: "Spiel des Jahres 2022 (Winner)", frequency: "once", founded: 2022, region: "Germany" },
    { name: "As d'Or Jeu de l'Année 2023 (Winner)", frequency: "once", founded: 2023, region: "France" },
    { name: "Cascadia League (Board Game Arena)", frequency: "seasonal", founded: 2022, region: "online worldwide" },
  ],
  countriesPlayed: ["US", "DE", "FR", "GB", "IT", "ES", "AU", "JP", "PL", "BR"],
  famousAthletes: [
    "Randy Flynn (designer, first published game)",
    "Beth Sobel (artist)",
    "Anni Baertlein (artist)",
  ],
  records: [
    { title: "Spiel des Jahres 2022", holder: "Cascadia", value: "Winner", year: 2022 },
    { title: "Kickstarter funding", holder: "Cascadia", value: "$1.2M raised (700%+ funded)", year: 2021 },
    { title: "BGG top family game rank", holder: "Cascadia", value: "#1-3 family games 2022-2024", year: 2024 },
  ],
  variants: ["Cascadia: Landmarks (2022)", "Cascadia: Rolling Hills (2024, roll-and-write)", "Cascadia Duel (announced 2025)"],
  relatedSports: ["carcassonne", "kingdomino", "wingspan", "azul"],
  skills: [
    "spatial planning",
    "multi-objective optimization",
    "opponent-tracking (tile denial)",
    "risk vs reward tile choice",
  ],
  strategies: [
    { title: "Commit to 2-3 animal scoring paths early", body: "Trying all 5 spreads too thin — pick 2-3 to specialize." },
    { title: "Save nature tokens for late game", body: "Nature tokens are worth 1 VP each unused + break-pair versatility." },
    { title: "Habitat corridors", body: "Long single-habitat corridors easier to build than compact blobs." },
    { title: "Deny opponents key tiles", body: "In 2-player, always consider what tile helps them." },
    { title: "Study scoring card variants", body: "Variant D cards typically most punishing — plan around them." },
  ],
  terminology: [
    { term: "Habitat", meaning: "1 of 5 terrain types: forest, mountain, wetland, river, prairie." },
    { term: "Wildlife token", meaning: "1 of 5 animals: bear, elk, salmon, hawk, fox." },
    { term: "Nature token", meaning: "Bonus for placement flexibility + end-game VP." },
    { term: "Scoring card variant (A/B/C/D)", meaning: "Different scoring rules per animal for replayability." },
    { term: "Overpopulation", meaning: "3+ same-color tokens in market triggers cull." },
  ],
  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play with all Family (A) scoring cards", body: "Simplest rules; teaches core loop." },
        { title: "Focus 1 animal + 1 habitat first game", body: "Don't overwhelm yourself." },
        { title: "Draft nature tokens", body: "Take tile+token pairs on nature-token tiles when available." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Play with mixed scoring cards", body: "Random draw of A/B/C/D creates new strategic terrain." },
        { title: "Optimize turn 1", body: "Starting habitat choice + first draft heavily influences whole game." },
        { title: "Add Landmarks", body: "Landmarks expansion adds a 3rd scoring axis." },
      ],
    },
  ],
  faq: [
    { question: "How long is a game?", answer: "30 min (2 players) up to 60 min (4 players). Fastest gateway game to teach." },
    { question: "Is it good solo?", answer: "Yes — official solo variant with challenge modes is well-loved." },
    { question: "What ages?", answer: "Box says 10+, but 7-8 year olds can play easily with family scoring cards." },
    { question: "Why did it win Spiel des Jahres?", answer: "Perfect balance of simple rules, elegant design, beautiful art, high replayability, and quick play — the exact SdJ criteria." },
    { question: "Cascadia vs Wingspan?", answer: "Cascadia is lighter, shorter, more approachable. Wingspan is deeper but longer + more complex." },
  ],
  sources: [
    { label: "BoardGameGeek — Cascadia", url: "https://boardgamegeek.com/boardgame/295947/cascadia", publisher: "BGG" },
    { label: "Wikipedia — Cascadia (board game)", url: "https://en.wikipedia.org/wiki/Cascadia_(board_game)", publisher: "Wikipedia" },
    { label: "Flatout Games", url: "https://flatout.games", publisher: "Flatout Games" },
  ],
  wikipediaTitle: "Cascadia (board game)",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
