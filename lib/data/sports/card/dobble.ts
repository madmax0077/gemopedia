import type { Sport } from "@/lib/types";

export const dobble: Sport = {
  id: "dobble",
  slug: "dobble",
  name: "Dobble",
  officialName: "Dobble (Spot It! in North America)",
  aliases: ["Spot It!", "Spot It"],
  shortDescription:
    "Real-time visual perception card game (Asmodee, 2009) where players race to spot the ONE matching symbol between any two cards from 55 cards each with 8 symbols. 5 different mini-games (Twin Twin, Tower, Well, Hot Potato, Poisoned Gift). Perfect for family + educational use. 20M+ copies sold.",
  longDescription:
    "Dobble (marketed as Spot It! in North America) is a real-time visual-perception card game published by Asmodee (Play Factory subsidiary), designed by Denis Blanchot + Jacques Cottereau, released 2009. Each of 55 circular cards has 8 symbols; any two cards share exactly one common symbol (mathematically based on projective geometry using order 7). Players race to spot + call out the matching symbol first. Comes with 5 different mini-game rulesets: (1) Twin Twin — pass card to opponent when you spot match; (2) Tower — draw + call match to add to your tower; (3) Well — call match to discard card into center well; (4) Hot Potato — pass card to opponent to force them to spot; (5) Poisoned Gift — call match to add card to opponent's collection. Themed versions include Dobble Kids, Dobble Harry Potter, Dobble Star Wars, Dobble Numbers/Letters. Excellent educational tool for pattern recognition, visual attention, and speed reading. 20M+ copies sold globally as of 2024. Perfect quick 5-15 minute play; ages 6+.",
  category: "card-games",
  subCategory: "real-time visual-perception card game",
  sportType: "mixed",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (Asmodee / Play Factory)",
  estimatedOrigin: "Released 2009 by Play Factory (later Asmodee); rebranded Spot It! for North America 2011",
  players: { min: 2, max: 8, note: "2-8 players; best with 3-6." },
  equipment: [
    { name: "55 Dobble cards", description: "Circular cards each with 8 symbols; any 2 cards share exactly 1 symbol." },
    { name: "Metal storage tin", description: "Compact travel-friendly metal container." },
    { name: "Rulebook with 5 mini-games", description: "Twin Twin, Tower, Well, Hot Potato, Poisoned Gift." },
  ],
  duration: { approximateMinutes: 15, structure: "5-15 min per mini-game round." },
  objective: "Fastest player to spot the ONE matching symbol between two cards wins each interaction; game victory conditions per mini-game.",
  matchStructure: "5 mini-games: Twin Twin (fastest), Tower (build collection), Well (empty hand), Hot Potato (avoid collection), Poisoned Gift (give away collection).",
  basicRules: [
    { title: "Each 2 cards share exactly 1 symbol", body: "Projective geometry ensures every pair of cards has exactly one common symbol." },
    { title: "Spot + call out the symbol first", body: "Race to visually identify + verbally name the shared symbol." },
    { title: "5 different game modes", body: "Choose Twin Twin / Tower / Well / Hot Potato / Poisoned Gift ruleset per round." },
  ],
  advancedRules: [
    { title: "Team play + educational adaptations", body: "Can be played in teams; educational use for children learning symbols/vocabulary." },
    { title: "Themed variants", body: "Dobble Kids, Harry Potter, Star Wars, Numbers, Alphabet, and dozens of licensed themes." },
  ],
  scoring: {
    summary: "Varies by mini-game — cards collected/discarded win/lose depending on ruleset.",
    winCondition: "Depends on mini-game: most cards (Tower), fewest cards (Well), avoid cards (Hot Potato), give-away all (Poisoned Gift).",
    breakdown: [
      { action: "Correct match call", points: "Card gained/discarded per ruleset" },
      { action: "Fastest reaction", points: "Wins the contested pair" },
    ],
  },
  penalties: [
    { title: "Wrong symbol call", body: "Some mini-games penalise wrong call (take extra card, skip next turn)." },
    { title: "Simultaneous match", body: "Fastest verbal call wins; group judges disputed calls." },
  ],
  positions: [{ name: "Player", role: "Visual perception racer.", count: 1 }],
  officiating: { officials: ["Group consensus for close calls; no formal officials"], summary: "Family/party game; no formal officiating." },
  governingBodies: [
    { name: "Asmodee Group", founded: 1995, headquarters: "Guyancourt, France" },
    { name: "Play Factory", founded: 2000, headquarters: "France" },
  ],
  majorCompetitions: [
    { name: "Not applicable — casual family/party game", frequency: "n/a", founded: 2009, region: "n/a" },
  ],
  countriesPlayed: ["FR", "DE", "GB", "US", "IT", "ES", "JP", "AU", "BR"],
  famousAthletes: ["Denis Blanchot + Jacques Cottereau (designers)"],
  records: [
    { title: "20M+ copies sold globally", holder: "Asmodee", value: "20 million+ copies sold worldwide as of 2024", year: 2024 },
    { title: "Projective geometry design", holder: "Denis Blanchot", value: "Card design based on projective geometry order-7 finite plane ensuring exactly one match per pair", year: 2009 },
  ],
  variants: ["dobble-classic", "dobble-kids", "dobble-harry-potter", "dobble-star-wars", "dobble-numbers"],
  relatedSports: ["spot-it", "set-card-game", "uno"],
  skills: ["visual perception", "pattern recognition", "reaction speed", "vocabulary recall"],
  strategies: [
    { title: "Scan grid systematically", body: "Beginners scan grid systematically; experts learn perceptual shortcuts to spot the match instantly." },
    { title: "Verbal quickness practice", body: "Not enough to see it — must say symbol name fast. Practice English/local-language symbol name recall." },
    { title: "Focus + peripheral vision", body: "Use peripheral vision to scan symbol positions while foveally checking centre." },
  ],
  terminology: [
    { term: "Dobble", meaning: "Original French name (spelling of 'double')" },
    { term: "Spot It!", meaning: "North American branded name" },
    { term: "Match", meaning: "The one shared symbol between two cards" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Kids/family intro", body: "Start with Twin Twin — simplest mini-game." }] },
    { level: "intermediate", steps: [{ title: "All 5 mini-games rotation", body: "Cycle through all 5 to find favourite." }] },
    { level: "advanced", steps: [{ title: "Educational + speed-focused play", body: "Use in classroom; time-attack speed rounds." }] },
  ],
  faq: [
    { question: "Is Dobble the same as Spot It?", answer: "Yes — same game. Dobble is the original French name (used in Europe + rest of world); Spot It! is the North American branded name (Blue Orange Games license)." },
    { question: "Why does every card share exactly one symbol?", answer: "The card design uses projective geometry of order 7 — a mathematical finite plane where each pair of lines/cards intersects at exactly one point/symbol." },
  ],
  wikipediaTitle: "Dobble",
  sources: [{ label: "Wikipedia — Dobble", url: "https://en.wikipedia.org/wiki/Dobble", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default dobble;
