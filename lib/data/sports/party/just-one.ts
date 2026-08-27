import type { Sport } from "@/lib/types";

export const justOne: Sport = {
  id: "just-one",
  slug: "just-one",
  name: "Just One",
  officialName: "Just One",
  aliases: ["Just One"],
  shortDescription:
    "COOPERATIVE WORD-GUESSING PARTY GAME (2018) by LUDOVIC ROUDY + BRUNO SAUTTER, published by REPOS PRODUCTION. 3-7 players cooperatively help ONE guesser identify a mystery word by each writing ONE clue on a small dry-erase board — but IDENTICAL CLUES CANCEL OUT before shown. Won SPIEL DES JAHRES 2019 (German Game of the Year — mainstream award, biggest game prize). Considered THE MODERN CLASSIC party word game + benchmark cooperative party. 20 min. HELD BGG top-100 party.",
  longDescription:
    "JUST ONE is a COOPERATIVE WORD-GUESSING PARTY GAME (2018) designed by LUDOVIC ROUDY + BRUNO SAUTTER (France), published by REPOS PRODUCTION (Belgium). 3-7 PLAYERS cooperatively help ONE GUESSER identify a MYSTERY WORD by each writing ONE ONE-WORD CLUE on a small dry-erase board — but IDENTICAL CLUES CANCEL OUT before being shown to guesser. Simple, elegant, forces creativity. WON SPIEL DES JAHRES 2019 (GERMAN GAME OF THE YEAR — mainstream award, biggest game prize) — the FIRST cooperative game to win Spiel des Jahres. Widely considered THE MODERN CLASSIC party word game + benchmark cooperative party game. HELD BGG TOP-100 PARTY since release. 20 MIN PER GAME. GAMEPLAY: 13 ROUNDS (one per card in draw stack). Each round: (1) GUESSER draws a card + picks 1 of 5 numbered words (blindly, others see); (2) All non-guessers see the mystery word; (3) Each writes ONE ONE-WORD CLUE on their dry-erase board; (4) Non-guessers compare clues + IDENTICAL/TOO-SIMILAR clues are ERASED before showing (this is the CLEVER TWIST); (5) Guesser sees remaining clues + guesses; (6) Score: correct = 1 win, wrong = discard NEXT card too (extra penalty), skip = keep card. AFTER 13 CARDS: score = 11-13 max. GENIUS-LEVEL 12-13; excellent 10-11; good 8-9. RECEPTION: Spiel des Jahres 2019 WINNER; Golden Geek Best Family Game 2019; BGG top-100 party consistently; considered PERFECT introduction to cooperative games for non-gamers.",
  category: "party-games",
  subCategory: "cooperative word game / party / family / Spiel des Jahres 2019 winner",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (designers) / Belgium (Repos Production publisher)",
  estimatedOrigin: "Designed 2017-2018 Ludovic Roudy + Bruno Sautter; released 2018 Repos Production; Spiel des Jahres 2019",
  players: { min: 3, max: 7, note: "3-7 players; BEST AT 4-6. 3 players use variant (2 clues per person)." },
  field: {
    surfaceName: "Table for card play + dry-erase boards",
    dimensions: "~60×60cm",
    description: "Central card draw stack + guesser's seat. Each player has small dry-erase board + marker for one-word clues.",
  },
  equipment: [
    { name: "Just One base box", description: "$25 USD; 110 cards (550 words), 7 dry-erase boards + markers" },
    { name: "Just One expansion New Cards", description: "$15; more word cards" },
    { name: "Just One family + junior editions", description: "Kid-friendly variants" },
    { name: "Dry-erase boards + markers", description: "7 boards + markers included" },
    { name: "Word cards (110 cards, 550 words)", description: "5 numbered words per card" },
  ],
  duration: { approximateMinutes: 20, structure: "15-25 min per game; 13 cards per game." },
  objective: "As a team, guess as many of 13 mystery words as possible via one-word clues that don't cancel out. Score based on correct guesses.",
  basicRules: [
    { title: "Guesser draws card + picks 1 of 5 words blindly", body: "Non-guessers see the word." },
    { title: "Each non-guesser writes ONE ONE-WORD CLUE on their dry-erase board", body: "Try to be helpful but distinctive." },
    { title: "Non-guessers compare + ERASE identical/too-similar clues", body: "The clever cancellation twist." },
    { title: "Guesser sees remaining clues + guesses", body: "1 guess only." },
    { title: "Score: correct = 1 win; wrong = discard next card too (penalty)", body: "Wrong hurts double." },
    { title: "13 cards total per game", body: "Score out of 13 max." },
  ],
  scoring: {
    summary: "Cooperative team score out of 13 max. Correct = 1 win; wrong = discard next card too; skip = keep card.",
    breakdown: [
      { action: "Correct guess", points: "+1 win" },
      { action: "Wrong guess", points: "Discard NEXT card too (double penalty)" },
      { action: "Skip", points: "No score change; card returns" },
    ],
    winCondition: "Team score out of 13. 12-13 = Genius; 10-11 = Excellent; 8-9 = Good.",
  },
  governingBodies: [
    { name: "Repos Production (publisher)", founded: 2004, headquarters: "Belgium" },
    { name: "Ludovic Roudy + Bruno Sautter (designers)", founded: 2018, headquarters: "France" },
    { name: "Spiel des Jahres jury", founded: 1978, headquarters: "Germany" },
  ],
  majorCompetitions: [
    { name: "Spiel des Jahres 2019 WINNER (first coop game to win)", frequency: "annual", founded: 1978, region: "Germany" },
    { name: "Golden Geek Best Family Game 2019", frequency: "annual", founded: 2019, region: "worldwide" },
    { name: "BGG top-100 party consistently", frequency: "ongoing", founded: 2018, region: "worldwide" },
  ],
  countriesPlayed: ["FR", "BE", "DE", "US", "GB", "IT", "ES", "PL", "AU", "CA", "SE", "NL", "JP"],
  famousAthletes: [
    "Ludovic Roudy (France) — Co-designer",
    "Bruno Sautter (France) — Co-designer",
  ],
  variants: [
    "just-one-base-2018",
    "just-one-new-cards-expansion",
    "just-one-family-junior-editions",
    "just-one-3-player-variant-2-clues-per-person",
  ],
  relatedSports: ["codenames", "wavelength", "decrypto", "monikers", "the-mind"],
  skills: ["creativity", "audience reading", "word association", "team coordination"],
  strategies: [
    { title: "Avoid obvious first clues", body: "Common associations = cancellation. Think creative." },
    { title: "Personal in-jokes work", body: "Group-specific references less likely to collide." },
    { title: "Not too obscure though", body: "Guesser needs SOMETHING to work with." },
    { title: "Multi-syllable = harder to duplicate", body: "Simple words like 'red' too often duplicated." },
  ],
  terminology: [
    { term: "Guesser", meaning: "Rotating player who guesses mystery word." },
    { term: "One-word clue", meaning: "Written on dry-erase board; must be single word." },
    { term: "Cancellation", meaning: "Identical/similar clues erased before shown to guesser." },
    { term: "Skip", meaning: "Guesser passes; card returns (no penalty)." },
    { term: "Wrong guess", meaning: "Costs 2 cards (this + next discarded)." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Just One ($25)", body: "Instant learning; play immediately." },
    ]},
  ],
  faq: [
    { question: "What is Just One?", answer: "COOPERATIVE WORD-GUESSING PARTY GAME (2018) by Ludovic Roudy + Bruno Sautter, published by Repos Production. 3-7 players help ONE guesser identify a mystery word by each writing ONE clue — but IDENTICAL CLUES CANCEL OUT. WON SPIEL DES JAHRES 2019 (German Game of the Year — first coop game to win). Considered THE modern classic party word game. 20 min." },
  ],
  wikipediaTitle: "Just One (game)",
  sources: [
    { label: "Repos Production — Just One", url: "https://www.rprod.com/en/games/just-one", publisher: "Repos" },
    { label: "BoardGameGeek — Just One", url: "https://boardgamegeek.com/boardgame/254640/just-one", publisher: "BGG" },
    { label: "Wikipedia — Just One", url: "https://en.wikipedia.org/wiki/Just_One_(game)", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-27",
  confidence: "verified",
};
