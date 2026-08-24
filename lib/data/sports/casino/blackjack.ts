import type { Sport } from "@/lib/types";

export const blackjack: Sport = {
  id: "blackjack",
  slug: "blackjack",
  name: "Blackjack",
  officialName: "Blackjack",
  aliases: ["Twenty-One", "21", "Vingt-et-Un", "Pontoon (UK variant)"],
  shortDescription:
    "The most-played casino card game — beat the dealer's hand by getting closer to 21 without going over.",
  longDescription:
    "Blackjack is a comparing card game between one or more players and a dealer, where each player competes against the dealer but not against other players. Its ancestor Vingt-et-Un ('twenty-one') was played in French casinos around 1700, and 'blackjack' — named for a promotional bonus payout on a two-card 21 of the ace of spades and a black jack — reached the United States in the 19th century. Blackjack became the first casino game with a widely-published mathematically optimal strategy (Edward O. Thorp's 1962 'Beat the Dealer'), and card counting was born the same decade. With basic strategy the house edge drops to as little as 0.5% — the lowest of any beatable casino table game — which is why it's a favourite of advantage players and the workhorse of every casino floor.",

  category: "casino-games",
  subCategory: "comparing card game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: false,
  season: "year-round",
  era: "early-modern",
  popularity: "global",

  countryOfOrigin: "FR",
  regionOfOrigin: "France (Vingt-et-Un); spread through Europe and US in the 19th century",
  estimatedOrigin: "c. 1700 France; modern casino rules established 20th century USA",

  players: { min: 1, max: 7, note: "1 dealer + up to 7 seated players; each plays against the dealer independently." },
  equipment: [
    { name: "One to eight standard 52-card decks", description: "Shuffled together in a shoe (multi-deck) or dealt from hand (single/double deck). No jokers." },
    { name: "Blackjack table", description: "Half-moon table seating up to 7 players; betting circles printed for each seat." },
    { name: "Card shoe", description: "In multi-deck games, holds pre-shuffled cards for continuous dealing." },
    { name: "Chips", description: "Casino chips of various denominations; players place bets in the printed betting circle." },
    { name: "Cut card", description: "Coloured card inserted near the back of the shoe — when reached, a reshuffle is triggered." },
  ],
  duration: {
    approximateMinutes: 1,
    structure: "One hand: ~30-60 seconds. Sessions run open-ended.",
  },
  objective: "Get a card total closer to 21 than the dealer — but without exceeding 21 (a 'bust') — to win 1:1 on your bet. A two-card 21 ('blackjack') pays 3:2 (or 6:5).",
  matchStructure:
    "Players place bets in the betting circle. The dealer deals two cards to each player and to themselves — one dealer card face-up, one face-down. Players act in turn (hit, stand, double, split, surrender) trying to reach a strong total without busting. When all players are done, the dealer reveals the hole card and plays a fixed strategy (usually 'must hit soft 17'). Player wins pay 1:1; blackjacks pay 3:2 (or 6:5).",

  basicRules: [
    { title: "Card values", body: "2-10 face value. Face cards (J/Q/K) = 10. Ace = 1 or 11, whichever gives the better hand." },
    { title: "Blackjack", body: "An ace + any 10-value card on the first two cards = blackjack (natural 21). Pays 3:2 (or 6:5 on inferior tables). Beats any dealer 21 that isn't blackjack." },
    { title: "Hit / stand", body: "Hit: take another card. Stand: keep your current total. Repeat until you stand or bust (go over 21)." },
    { title: "Double down", body: "Double your bet and take exactly one more card. Usually allowed on any two-card total; some casinos restrict to 9, 10, 11." },
    { title: "Split", body: "If your two cards are the same rank, split them into two hands with a matching second bet. Most casinos allow re-splitting to 3 or 4 hands; splitting aces usually gives only one card each." },
    { title: "Surrender", body: "In some casinos, forfeit half your bet and end the hand — before drawing any additional cards." },
    { title: "Dealer play", body: "Dealer must hit until at least a hard 17; some tables require hit on soft 17 (H17), others stand (S17). No skill involved for the dealer." },
    { title: "Bust", body: "Any hand over 21 immediately loses, regardless of the dealer's final total." },
  ],
  advancedRules: [
    { title: "Insurance", body: "When dealer shows an ace, players may bet up to half their original wager that dealer has blackjack (pays 2:1). House edge on insurance is ~7% — a sucker bet unless card-counting." },
    { title: "Even money", body: "Offered when player has blackjack and dealer shows an ace — take 1:1 immediately instead of hoping the dealer doesn't also have blackjack. Mathematically identical to insurance." },
    { title: "Late/early surrender", body: "Late (after dealer checks for blackjack) reduces house edge by ~0.08%; early (before check) by ~0.24%. Increasingly rare in modern casinos." },
    { title: "Card counting", body: "Track the ratio of high (10, J, Q, K, A) to low cards remaining. When the deck is 'high' (more 10s than average), the player edge increases. Legal but casinos may bar counters." },
  ],
  scoring: {
    summary: "Player wins pay 1:1; blackjack pays 3:2 (or 6:5). Loss = lose bet. Push (tie) = bet returned.",
    breakdown: [
      { action: "Regular win", points: "1:1" },
      { action: "Blackjack (natural 21)", points: "3:2", note: "6:5 on inferior tables — avoid these." },
      { action: "Insurance win", points: "2:1", note: "Only when dealer has blackjack." },
      { action: "Push (tie)", points: "Bet returned", note: "Only when both hands are equal totals (not counting blackjack)." },
    ],
    winCondition: "Player's final total (up to 21) beats dealer's, OR dealer busts while player didn't.",
  },

  officiating: {
    officials: ["Dealer", "Floor supervisor", "Pit boss"],
    summary: "Dealer runs the game per house rules; floor supervisor resolves disputes and comps players; pit boss manages the pit and monitors for advantage play.",
  },
  countriesPlayed: ["US", "GB", "AU", "CA", "DE", "FR", "MC", "MO", "SG", "PH"],
  famousAthletes: [
    "Edward O. Thorp (mathematician, author of 'Beat the Dealer')",
    "Ken Uston (blackjack team pioneer)",
    "The MIT Blackjack Team (Bringing Down the House)",
    "Don Johnson (won $15M in one week at Atlantic City)",
    "Stanford Wong (author of 'Professional Blackjack')",
  ],

  variants: ["spanish-21", "pontoon", "double-exposure", "blackjack-switch", "face-up-blackjack", "vingt-et-un"],
  relatedSports: ["baccarat", "poker", "casino-war"],

  skills: ["basic strategy memorisation", "bankroll management", "card counting (advantage play)", "table game selection"],
  strategies: [
    { title: "Basic strategy", body: "The mathematically optimal move for every combination of player total and dealer up-card. Reduces house edge to as low as 0.4-0.6%." },
    { title: "Rule selection", body: "Play only 3:2 blackjack tables that stand on soft 17 (S17), allow double after split (DAS), and offer late surrender. Avoid 6:5 blackjack — 8× worse house edge." },
    { title: "Card counting (Hi-Lo)", body: "Add +1 for low cards (2-6), -1 for high cards (10, A), 0 for neutrals. Divide running count by decks remaining for the 'true count'. Bet more when the true count is positive." },
    { title: "Never take insurance", body: "It's a bet on dealer's hole card being a 10 — mathematically negative unless you're counting cards." },
    { title: "Bankroll management", body: "Bring at least 40 × your top bet to a session; walk away with a set loss limit." },
  ],

  terminology: [
    { term: "Blackjack (natural)", meaning: "Two-card 21 — ace + 10-value card. Pays 3:2." },
    { term: "Hard hand", meaning: "A hand without an ace, or with an ace counting as 1 (no flexibility)." },
    { term: "Soft hand", meaning: "A hand with an ace counting as 11 (can be recounted as 1 without busting)." },
    { term: "Hit", meaning: "Request another card." },
    { term: "Stand", meaning: "Keep your current total; no more cards." },
    { term: "Double down", meaning: "Double your bet, take exactly one more card." },
    { term: "Split", meaning: "Split a pair into two separate hands, matching your bet." },
    { term: "Bust", meaning: "Total exceeds 21 — automatic loss." },
    { term: "Push", meaning: "Tie with dealer — bet is returned." },
    { term: "Shoe", meaning: "The card-dealing box holding multi-deck games." },
    { term: "H17 / S17", meaning: "'Hit soft 17' vs 'Stand on soft 17' — a critical rule that changes house edge." },
    { term: "Cut card", meaning: "The plastic card inserted near the back of the shoe triggering a reshuffle." },
    { term: "Basic strategy", meaning: "The mathematically optimal decision for every hand — memorised in table form." },
    { term: "Running count / true count", meaning: "The Hi-Lo card counting running total, adjusted for remaining decks." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Card values and hand totals", body: "Practise adding hands until it's automatic. Distinguish hard vs soft aces." },
      { title: "Basic strategy chart", body: "Print a strategy chart. Memorise it row by row — start with hard totals, then soft, then pairs." },
      { title: "Play at low-stakes tables", body: "Play $5 minimum tables to internalise decisions and table etiquette without risking much." },
      { title: "Table selection", body: "Always play 3:2 blackjack (never 6:5), S17 preferred, DAS allowed, and if possible surrender available." },
    ] },
    { level: "intermediate", steps: [
      { title: "Perfect basic strategy", body: "Practise on apps or with a friend until you can play 100 hands with zero errors." },
      { title: "Understand table variance", body: "Basic strategy is ~0.5% edge to the house — expect losing sessions. Bankroll for at least 100 hands of your top bet." },
      { title: "Study rule variations", body: "Learn how CSMs (continuous shufflers), 6:5 blackjack, and rule changes shift the house edge." },
    ] },
    { level: "advanced", steps: [
      { title: "Learn Hi-Lo counting", body: "Practise counting through a full deck in under 30 seconds. Learn true-count conversion." },
      { title: "Betting spreads", body: "Vary your bet by true count — flat bets don't beat the house even with counting." },
      { title: "Camouflage and team play", body: "Advanced counters mask their play, join teams, and manage back-off risk." },
      { title: "Advanced systems", body: "Uston SS, Halves, Wong Halves, and Omega II offer higher betting correlation for high-volume players." },
    ] },
  ],
  faq: [
    { question: "What is basic strategy?", answer: "The mathematically optimal decision for every combination of player hand and dealer up-card. Memorising a basic strategy chart reduces house edge to 0.4-0.6%." },
    { question: "Can I still count cards in modern casinos?", answer: "Yes, but casinos actively counter it: continuous shuffling machines (CSMs), unfavourable rules (6:5 blackjack, H17), deep penetration limits, and back-off (asking counters to leave). Legal, but not welcome." },
    { question: "What does 6:5 blackjack mean?", answer: "Some casinos pay only 6:5 for a natural blackjack instead of the traditional 3:2. This single change increases house edge by ~1.4%, making it 3× worse for the player. Avoid these tables." },
    { question: "Should I take insurance?", answer: "No, unless you're counting and the true count is +3 or higher. Insurance is a bet on the dealer's hole card being a 10, which has 30.8% probability — house pays 2:1, giving ~7% edge to the house." },
    { question: "Why doesn't the dealer ever have to make decisions?", answer: "Dealer follows a fixed strategy (hit until 17). This is by design — a decision-making dealer would need training and could vary the game's mechanics; the fixed strategy makes blackjack solvable via basic strategy." },
  ],

  wikipediaTitle: "Blackjack",
  sources: [
    { label: "Wikipedia — Blackjack", url: "https://en.wikipedia.org/wiki/Blackjack", publisher: "Wikipedia" },
    { label: "Wizard of Odds — Blackjack Basic Strategy", url: "https://wizardofodds.com/games/blackjack/", publisher: "Wizard of Odds" },
    { label: "'Beat the Dealer' — Edward O. Thorp", publisher: "Random House, 1962" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
  sportSpecific: {
    houseEdge: { "With basic strategy (S17, DAS, 3:2)": "0.4-0.5%", "Common casino ruleset (H17, no DAS, 6:5)": "1.5-2.2%", Insurance: "~7%" },
    optimalRules: "3:2 blackjack, S17, DAS, late surrender, split aces once, re-split all pairs to 4 hands",
  },
};
