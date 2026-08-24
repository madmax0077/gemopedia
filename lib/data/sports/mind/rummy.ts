import type { Sport } from "@/lib/types";

export const rummy: Sport = {
  id: "rummy",
  slug: "rummy",
  name: "Rummy",
  officialName: "Rummy (card game family)",
  aliases: ["Basic Rummy", "500 Rummy"],
  shortDescription:
    "Card-matching game where players draw and discard to form sets (three of a kind) and runs (three consecutive same-suit cards), aiming to shed all cards from hand.",
  longDescription:
    "Rummy is a family of matching-card games in which players draw and discard cards trying to build 'melds' — sets of 3-4 cards of the same rank or runs of 3+ consecutive same-suit cards. Once a player can lay down (or has laid down) their entire hand in valid melds, they win the round. Popular variants include Basic Rummy, Gin Rummy, Indian Rummy (13 cards, with joker), 500 Rummy, Contract Rummy, and Canasta. Rummy games originated in Mexico or the American West in the mid-19th century and spread globally. India has the largest online Rummy player base — the RummyCircle, A23, and Junglee Rummy platforms report tens of millions of players.",

  category: "mind-sports",
  subCategory: "card matching",
  sportType: "mixed",
  indoorOutdoor: "both",
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "MX",
  regionOfOrigin: "Mexico / American West",
  estimatedOrigin: "Mid-19th century (Conquian in Mexico); 'Rummy' first described in USA c. 1900",

  players: { min: 2, max: 6, note: "Best 2-4; Indian Rummy uses 2-6 players." },
  field: {
    surfaceName: "table",
    dimensions: "Any surface with room for 2-4 hands, stock and discard piles.",
    description: "Face-down stock pile in centre; face-up discard pile beside it; each player's melds laid face-up in front of them.",
  },
  equipment: [
    { name: "Standard 52-card deck", description: "One or two decks depending on variant; Indian Rummy uses 2 decks + 2 jokers." },
    { name: "Score pad", description: "Optional pen and paper to track cumulative scores.", optional: true },
  ],
  duration: {
    approximateMinutes: 15,
    structure: "Single round 5-15 minutes; a full game (target 500+ points) lasts 30-90 minutes.",
    note: "Indian Rummy tournaments run 90+ minute knockout matches.",
  },
  objective: "Form all cards in your hand into valid melds (sets and runs) and shed them before the opponent(s) do.",
  matchStructure:
    "Deal 10 cards each (2 players), 7 each (3-4 players), or 13 each (Indian Rummy). Turn one card face-up to start the discard pile. On your turn, draw one card (from stock or discard), then either lay down a meld, add to an existing meld, or simply discard. First player to shed all cards wins the round. In Gin Rummy, you knock (declare) when your unmatched cards total ≤10 points.",

  basicRules: [
    { title: "Draw and discard", body: "On your turn, take one card from the stock or the top of the discard pile, then discard one to end your turn." },
    { title: "Melds", body: "Sets = 3 or 4 cards of same rank; Runs = 3+ consecutive cards of same suit." },
    { title: "Lay off", body: "You may add cards to your own or (in some variants) opponent's melds." },
    { title: "Going out", body: "Basic Rummy: shed all cards. Gin: knock with ≤10 points in unmatched cards. Indian Rummy: two runs including one pure (no joker), plus more melds." },
    { title: "Jokers (Indian Rummy)", body: "Jokers or a randomly-cut wild card can substitute for any card in a set or run." },
  ],
  advancedRules: [
    { title: "Gin Rummy scoring", body: "Knock (10 or fewer deadwood), Gin (zero deadwood, 25 bonus), Undercut (knocker holds more deadwood than opponent — 25 bonus + opponent's deadwood)." },
    { title: "Indian Rummy validity", body: "A valid declaration requires 2 sequences (at least one 'pure' with no joker) plus additional valid sets/runs." },
    { title: "500 Rummy", body: "Play until one player reaches 500 points; melds add to points, deadwood subtracts." },
    { title: "Canasta", body: "Rummy variant using two decks with jokers as wild; melds of 7 cards ('canastas') score bonuses." },
  ],
  scoring: {
    summary: "Round winner scores value of opponents' unmelded cards; scoring rules vary by variant.",
    breakdown: [
      { action: "Basic Rummy — cards left in opponent's hand", points: "Value: A=1, 2-10 = face, J/Q/K = 10", note: "Winner takes total." },
      { action: "Gin Rummy — Gin bonus", points: "+25", note: "Awarded to a player who melds all 10 cards in one turn." },
      { action: "Indian Rummy — invalid declaration", points: "-80", note: "Player who declares incorrectly loses maximum points." },
      { action: "Canasta — meld of 7+ cards", points: "+300 (mixed) / +500 (pure)" },
    ],
    winCondition: "First player to reach the agreed target (100, 250, 500) wins the game.",
  },

  officiating: {
    officials: ["Self-officiated (online: platform-managed with anti-collusion tools)"],
    summary: "Live tournament play is managed by the operator (RummyCircle, A23, GinRummy Association) with dispute resolution rules.",
  },
  governingBodies: [
    { name: "International Rummy Federation", acronym: "IRF", founded: 2011, headquarters: "Athens, Greece" },
    { name: "United States Playing Card Company (Bicycle rules)", founded: 1867, headquarters: "Erlanger, USA" },
    { name: "All India Gaming Federation", acronym: "AIGF", founded: 2016, headquarters: "New Delhi, India" },
  ],
  majorCompetitions: [
    { name: "World Series of Rummy (WSR)", frequency: "annual", founded: 2007, region: "USA (invitational)" },
    { name: "Indian Rummy Championship (RummyCircle, A23)", frequency: "monthly", founded: 2015, region: "India" },
    { name: "European Rummy Championship", frequency: "annual", founded: 2015, region: "Europe" },
  ],
  countriesPlayed: ["IN", "US", "MX", "GB", "DE", "FR", "TR", "AR", "BR", "IT", "ES", "GR"],
  famousAthletes: [
    "N/A — casual game with growing online-pro scene",
  ],
  records: [
    { title: "Estimated Indian online Rummy players", holder: "AIGF report", value: "40+ million (2023)", year: 2023 },
    { title: "Best-selling Rummy variant book", holder: "Hoyle Books", value: "over 100 million copies (all Hoyle editions)", year: 2020 },
  ],

  variants: ["gin-rummy", "indian-rummy", "canasta", "500-rummy", "contract-rummy", "conquian", "kalooki"],
  relatedSports: ["gin-rummy", "canasta", "indian-rummy", "cribbage"],

  skills: [
    "hand management",
    "probability estimation (which cards remain in stock)",
    "reading opponent discards",
    "meld planning",
    "timing declarations",
    "risk assessment",
  ],
  strategies: [
    { title: "Track discards", body: "Note which cards have been discarded; each reduces the chance of completing certain runs." },
    { title: "Break early runs to reach Gin", body: "In Gin Rummy, sometimes it's better to break a small meld to reach zero deadwood." },
    { title: "Draw from discard sparingly", body: "Taking from the discard tells opponents what you need." },
    { title: "Freeze deadwood", body: "Discard high cards (K, Q) early to lower deadwood exposure if opponent knocks." },
  ],

  terminology: [
    { term: "Meld", meaning: "A valid combination of cards (set or run)." },
    { term: "Set / Book", meaning: "Three or four cards of the same rank." },
    { term: "Run / Sequence", meaning: "Three or more consecutive cards of the same suit." },
    { term: "Deadwood", meaning: "Unmatched cards in your hand at end of round." },
    { term: "Knock (Gin)", meaning: "Declare with 10 or fewer deadwood points." },
    { term: "Gin", meaning: "Meld all 10 cards in one turn with zero deadwood — +25 bonus." },
    { term: "Wild card / joker", meaning: "Substitutes for any card in a meld (variant-dependent)." },
    { term: "Pure sequence (Indian)", meaning: "A run without any joker substitute." },
    { term: "Lay off", meaning: "Adding to an existing meld — your own or (some variants) an opponent's." },
    { term: "Stock", meaning: "The face-down draw pile." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Deal and hand size", body: "Learn how many cards to deal for your variant (Basic 10, Indian 13, Gin 10, 500 7)." },
      { title: "Recognise melds", body: "Sets of 3+ same rank; runs of 3+ consecutive same-suit." },
      { title: "Draw-and-discard rhythm", body: "Every turn: draw one, then discard one." },
      { title: "Simple declaration", body: "Practise laying down when your hand is complete." },
    ] },
    { level: "intermediate", steps: [
      { title: "Discard tracking", body: "Watch what opponents discard; infer their melds." },
      { title: "Gin vs knock decision", body: "Assess whether to knock at 8 points deadwood or aim for Gin." },
      { title: "Wild card management", body: "In variants with jokers, know when to use them for pure sequences." },
      { title: "Multi-round scoring", body: "Learn to protect your lead by playing defensively in later rounds." },
    ] },
    { level: "advanced", steps: [
      { title: "Probability math", body: "Count remaining cards; estimate chance of completing a run." },
      { title: "Opponent reading", body: "Recognise 'safe' discards vs cards likely to complete their melds." },
      { title: "Tournament strategy", body: "Manage tempo across knockout rounds; conserve energy in easy hands." },
    ] },
  ],
  faq: [
    { question: "How do I win at Rummy?", answer: "Shed all cards from your hand by forming valid melds before opponents do — or in Gin, knock with 10 or fewer deadwood points." },
    { question: "Is Rummy legal in India?", answer: "Yes — the Supreme Court of India has ruled Rummy is a game of skill, so it's legal for real-money online play (except in a few states like Andhra Pradesh, Telangana, Tamil Nadu)." },
    { question: "What is a 'pure sequence'?", answer: "In Indian Rummy, a run of three or more consecutive same-suit cards without using a joker. At least one pure sequence is required for a valid declaration." },
    { question: "What's the difference between Gin Rummy and Indian Rummy?", answer: "Gin Rummy is a 2-player 10-card game where you knock at ≤10 deadwood. Indian Rummy is a 2-6 player 13-card game with jokers and mandatory pure sequences." },
    { question: "Is Rummy the same as Canasta?", answer: "Canasta is a Rummy variant using 2 decks + jokers, and requires 7-card 'canastas' to score bonuses. The mechanics are related but rules differ significantly." },
  ],

  wikipediaTitle: "Rummy",
  sources: [
    { label: "Wikipedia — Rummy", url: "https://en.wikipedia.org/wiki/Rummy", publisher: "Wikipedia" },
    { label: "Bicycle Cards — Rummy Rules", url: "https://bicyclecards.com/how-to-play/rummy-rum/", publisher: "United States Playing Card Company" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
