import type { Sport } from "@/lib/types";

export const baccarat: Sport = {
  id: "baccarat",
  slug: "baccarat",
  name: "Baccarat",
  officialName: "Baccarat",
  aliases: ["Punto Banco", "Chemin de Fer", "Baccarat Banque"],
  shortDescription:
    "The Bond-favoured casino card game — bet on Player, Banker or Tie, aiming for a two- or three-card total closest to 9.",
  longDescription:
    "Baccarat is a comparing card game that originated in 15th-century Italy (from the Italian baccara, 'zero') and was refined in France in the 19th century. Its modern casino form — Punto Banco — is a fixed-rule game where players wager on one of three outcomes: Player, Banker, or Tie. Cards are drawn according to a rigid tableau (no strategic decisions), face cards and 10s count as 0, and the winning hand is the one closest to a total of 9. Baccarat is Macau's number-one casino game — it accounts for over 80% of all Macau gaming revenue — and is best known globally through James Bond, who plays chemin de fer (a strategic French cousin) in the original Ian Fleming novels.",

  category: "casino-games",
  subCategory: "comparing card game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: false,
  season: "year-round",
  era: "early-modern",
  popularity: "global",

  countryOfOrigin: "IT",
  regionOfOrigin: "Italy (baccara); popularised in France by Napoleon-era aristocracy",
  estimatedOrigin: "15th century Italy; modern casino Punto Banco standardised mid-20th century",

  players: { min: 1, max: 14, note: "One dealer + up to 14 seated bettors in classic Punto Banco. Cards are still dealt to two hands: Player and Banker." },
  equipment: [
    { name: "Six or eight standard 52-card decks", description: "Shuffled together in a dealing shoe. Baccarat uses no jokers." },
    { name: "Baccarat table", description: "Large, kidney-shaped, seating up to 14 punters with three betting boxes each (Player, Banker, Tie)." },
    { name: "Card shoe", description: "Multi-deck holder from which cards are dealt face down." },
    { name: "Chips", description: "Casino chips; high-roller baccarat rooms use large-denomination plaques." },
    { name: "Commission markers", description: "The dealer tracks 5% commission on Banker wins for settlement." },
  ],
  duration: {
    approximateMinutes: 1,
    structure: "One coup (hand) is ~30-60 seconds. Sessions run open-ended.",
  },
  objective: "Bet on which hand — Player or Banker — will be closer to a total of 9, or that both will tie.",
  matchStructure:
    "Players place bets on Player, Banker or Tie (plus optional side bets). The dealer draws two cards each for Player and Banker from the shoe. Card values are added — face cards and 10s = 0, aces = 1, others face value — and only the units digit counts (so 7 + 8 = 15 = 5). If either hand totals 8 or 9, it's a 'natural' and the coup ends. Otherwise, a third card is drawn to each hand according to a fixed tableau. The hand closer to 9 wins.",

  basicRules: [
    { title: "Card values", body: "Ace = 1. Numeric cards = face value (2-9). 10s and face cards (J/Q/K) = 0. Suits are irrelevant." },
    { title: "Hand total", body: "Total = sum of card values modulo 10 (only the units digit). So a hand of Q + 7 = 7, or 7 + 8 = 15 → 5." },
    { title: "Natural win", body: "If either hand totals 8 or 9 on the first two cards, it's a natural and no third card is drawn." },
    { title: "Third card rule — Player", body: "If Player's first two cards total 0-5, Player draws a third card. If 6 or 7, Player stands." },
    { title: "Third card rule — Banker", body: "Banker's third-card rule depends on Player's third card and Banker's own two-card total — a fixed table with no strategic input." },
    { title: "Bets and payouts", body: "Player win: 1:1. Banker win: 1:1 minus 5% commission. Tie: 8:1 or 9:1 depending on house. Push on tie for Player/Banker bets." },
  ],
  advancedRules: [
    { title: "No-commission baccarat", body: "Some tables pay Banker even money except when Banker wins with 6 (paid 1:2), reducing house edge slightly and speeding play." },
    { title: "Punto Banco vs Chemin de Fer", body: "Punto Banco = all decisions dictated by the house tableau (played as pure gamble). Chemin de Fer = players themselves take turns as the Banker and may choose whether to draw a third card." },
    { title: "Mini and Midi baccarat", body: "Smaller versions with only one dealer and a smaller table; faster dealing, lower minimums." },
    { title: "Side bets", body: "Perfect Pair (matching cards), Dragon Bonus (paying scaled bonuses for large wins), and Panda 8 / Dragon 7 (specific 3-card totals) all carry much higher house edges." },
  ],
  scoring: {
    summary: "House edge (main bets): Banker 1.06%, Player 1.24%, Tie 14.36% (at 8:1). Best strategic play: always bet Banker.",
    breakdown: [
      { action: "Banker win", points: "0.95:1", note: "1:1 minus 5% commission." },
      { action: "Player win", points: "1:1", note: "No commission." },
      { action: "Tie", points: "8:1", note: "Push on Player/Banker; some casinos pay 9:1." },
    ],
    winCondition: "The hand closer to 9 wins. Ties push the Player/Banker bets and pay the Tie bet.",
  },

  officiating: {
    officials: ["Dealer", "Caller (large tables)", "Pit boss"],
    summary: "In classic Punto Banco, three casino employees run the game: a caller announces the coup and manages cards, and two dealers manage bets and pay commissions.",
  },
  countriesPlayed: ["MO", "US", "GB", "MC", "AU", "PH", "SG", "KR", "IT", "FR"],
  famousAthletes: [
    "Akio Kashiwagi (legendary Japanese high roller)",
    "Kerry Packer (Australian media mogul and baccarat whale)",
    "Terrance Watanabe (largest US baccarat loser)",
  ],

  variants: ["chemin-de-fer", "baccarat-banque", "mini-baccarat", "punto-banco", "ez-baccarat"],
  relatedSports: ["blackjack", "poker", "roulette", "sic-bo"],

  skills: ["bankroll management", "session discipline", "understanding house edge"],
  strategies: [
    { title: "Always bet Banker", body: "Banker has the lowest house edge (1.06%) — mathematically optimal for any single bet, despite the 5% commission." },
    { title: "Avoid Tie bets", body: "Tie carries a 14%+ house edge — 10× worse than Player or Banker." },
    { title: "Ignore streak-following", body: "Each coup is independent; 'trend' cards showing recent Banker/Player patterns don't affect future coups." },
    { title: "Bankroll rules", body: "Set a session limit, walk away when reached; never chase losses in a fixed-edge game." },
  ],

  terminology: [
    { term: "Punto", meaning: "The Player bet (Italian for 'point')." },
    { term: "Banco", meaning: "The Banker bet." },
    { term: "Coup", meaning: "One complete deal/round." },
    { term: "Natural", meaning: "A two-card total of 8 or 9 — instant win." },
    { term: "Chemin de Fer", meaning: "The French railroad version — the shoe passes around the table like a train." },
    { term: "Commission", meaning: "The 5% fee on Banker wins that funds the house edge." },
    { term: "Shoe", meaning: "The card-dealing box holding 6 or 8 shuffled decks." },
    { term: "Whale", meaning: "A very-high-stakes baccarat player — Macau attracts many." },
    { term: "Trend card", meaning: "A displayed record of recent coups — visual aid, no predictive value." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn the three bets", body: "Player, Banker, Tie — that's the entire betting decision in Punto Banco." },
      { title: "Card values", body: "Face cards and 10s = 0; aces = 1; others face value; only units digit counts." },
      { title: "Watch a session", body: "Sit at a live baccarat table for 30 minutes without betting — see the flow, tableau, and commission handling." },
      { title: "Bet Banker only", body: "Play conservatively at low-stakes tables to learn table etiquette before increasing bet sizes." },
    ] },
    { level: "intermediate", steps: [
      { title: "Understand the tableau", body: "Memorise when the Banker draws or stands — not required to play, but demystifies the game." },
      { title: "Bankroll rules", body: "Use flat-betting or a modest Martingale variant only with strict stop-losses." },
      { title: "Learn variant differences", body: "Try chemin de fer or no-commission baccarat once to see how decisions and payouts change house edge." },
    ] },
  ],
  faq: [
    { question: "Which is the best bet in baccarat?", answer: "Banker — 1.06% house edge, the lowest of any main casino bet. Player is 1.24%, Tie is 14.4% (or 4.85% at 9:1 payout, still much worse)." },
    { question: "Is baccarat a game of skill?", answer: "No. Once bets are placed the dealer follows a fixed tableau — there is no player decision. All 'strategy' amounts to bet selection, bet size, and session management." },
    { question: "Why do casinos take 5% commission on Banker wins?", answer: "The Banker hand wins slightly more often than the Player (about 45.86% vs 44.62%). Without the 5% commission, Banker would be a positive-expectation bet — the commission converts the edge to the house." },
    { question: "How is baccarat different from blackjack?", answer: "Baccarat has no player decisions; blackjack has many (hit, stand, double, split). Baccarat targets 9; blackjack targets 21. Baccarat is much simpler to learn but offers no skill component to reduce the house edge." },
  ],

  wikipediaTitle: "Baccarat",
  sources: [
    { label: "Wikipedia — Baccarat (card game)", url: "https://en.wikipedia.org/wiki/Baccarat_(card_game)", publisher: "Wikipedia" },
    { label: "Wizard of Odds — Baccarat", url: "https://wizardofodds.com/games/baccarat/", publisher: "Wizard of Odds" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
  sportSpecific: {
    houseEdge: { Banker: "1.06%", Player: "1.24%", Tie8to1: "14.36%", Tie9to1: "4.85%" },
    payouts: { Banker: "0.95:1", Player: "1:1", Tie: "8:1 or 9:1" },
  },
};
