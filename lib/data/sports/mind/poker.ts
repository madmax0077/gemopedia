import type { Sport } from "@/lib/types";

export const poker: Sport = {
  id: "poker",
  slug: "poker",
  name: "Poker",
  officialName: "Poker",
  aliases: ["Texas Hold'em (most popular variant)", "Omaha", "Seven-Card Stud"],
  shortDescription:
    "The umbrella family of betting card games — read your opponents, bet with hidden hands, and win by making the best five-card hand or by forcing everyone to fold.",
  longDescription:
    "Poker is a family of vying card games in which players bet over which hand is best according to a standard ranking of five-card combinations. It emerged in early-19th-century New Orleans from earlier French poque and German pochspiel, then spread across America aboard Mississippi riverboats and westward with the frontier. Modern tournament poker was born in Las Vegas in 1970 when Benny Binion invited the era's top players to Binion's Horseshoe for what became the World Series of Poker. The mid-2000s 'poker boom' (Chris Moneymaker's 2003 WSOP win from a $39 satellite) turned poker into a globally televised sport with televised final tables, professional pros with sponsorships, and Texas Hold'em as the flagship variant. Poker has been an IMSA-recognised mind sport since 2010.",

  category: "mind-sports",
  subCategory: "vying card game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "New Orleans (Mississippi River)",
  estimatedOrigin: "Early 19th century — modern rules formalised late 19th century; Texas Hold'em popularised 1960s Las Vegas",

  players: { min: 2, max: 10, note: "Heads-up (1v1) through full ring (9-10 players). Tournaments may run thousands of players across multiple tables." },
  equipment: [
    { name: "Standard 52-card deck", description: "Four suits (♠, ♥, ♦, ♣); no jokers in most variants. Some tables use a second deck for faster deal." },
    { name: "Chips", description: "Poker chips in tiered denominations for betting; cash games use real-money value, tournaments use non-redeemable event chips." },
    { name: "Dealer button", description: "Round disc marking the notional dealer position — rotates one seat clockwise each hand." },
    { name: "Small and big blind chips", description: "Marker chips indicating who posts the forced small/big blind bets." },
    { name: "Card protector", description: "Small weight placed on players' hole cards to prevent accidental mucking." },
  ],
  duration: {
    approximateMinutes: 3,
    structure: "One hand: ~2-5 minutes in a cash game. Multi-table tournaments run 4-14 hours (WSOP Main Event days average 12).",
  },
  objective: "Win chips by having the best five-card hand at showdown or by betting in a way that forces every other player to fold before the showdown.",
  matchStructure:
    "Every variant follows the same pattern: post any blinds/antes, deal hole cards, one or more betting rounds interspersed with community cards or additional dealt cards, then a showdown where the highest hand takes the pot (unless all opponents folded earlier). The dealer button rotates one seat clockwise each hand so every player takes turns paying the blinds and acting last.",

  basicRules: [
    { title: "Hand rankings (universal)", body: "Royal flush > Straight flush > Four of a kind > Full house > Flush > Straight > Three of a kind > Two pair > One pair > High card." },
    { title: "Betting actions", body: "Fold (surrender hand), check (pass action if no bet is live), call (match current bet), raise (increase current bet), all-in (bet all remaining chips)." },
    { title: "Blinds and antes", body: "Small blind and big blind post forced bets before cards are dealt; some events also require an ante from every player each hand." },
    { title: "Texas Hold'em flow", body: "Two hole cards each → pre-flop bet → 3 community cards ('flop') → bet → 4th community card ('turn') → bet → 5th ('river') → bet → showdown. Best 5-card hand from any combination of hole and community cards wins." },
    { title: "Showdown rules", body: "If two or more players remain after the final bet, cards are revealed and the best 5-card hand wins the pot. Tied hands split the pot." },
  ],
  advancedRules: [
    { title: "Pot-limit vs no-limit vs limit betting", body: "Limit: fixed bet size. Pot-limit: max bet = current pot size. No-limit: player can bet any remaining chips at any time (the flagship WSOP Main Event format)." },
    { title: "Side pots", body: "When a player goes all-in for less than the current bet, additional bets go into a 'side pot' that they cannot win — only the main pot up to their all-in amount is contested." },
    { title: "String bets and verbal declarations", body: "Bets must be made in one motion; verbal declarations are binding once out of turn. Cardroom rules strictly enforce these to prevent angle-shooting." },
    { title: "Tournament structure", body: "Blinds increase on a fixed clock (10-90 minute levels); players are eliminated as they lose chips; final table is typically 9 players; winner takes largest share of prize pool." },
  ],
  scoring: {
    summary: "Chip totals determine winners. In cash games, chips = money. In tournaments, prize pool distributed by finish position (top 10-15% typically paid).",
    breakdown: [
      { action: "Win pot at showdown", points: "Full pot", note: "Or split pot in case of tie." },
      { action: "Win pot pre-showdown", points: "Full pot", note: "All opponents folded." },
      { action: "Tournament finish", points: "Percentage of prize pool", note: "Winner typically gets 20-30% in large events." },
    ],
    winCondition: "Cash: highest chip total when you cash out (open-ended). Tournament: last player with chips.",
  },

  officiating: {
    officials: ["Dealer", "Floor supervisor", "Tournament director (TD)"],
    summary: "In casino play, dealers handle cards, chips and pot management. Floor supervisors resolve disputes. In tournaments, a TD applies the Tournament Directors Association (TDA) rulebook.",
  },
  governingBodies: [
    { name: "International Federation of Poker", acronym: "IFP", founded: 2009, headquarters: "Lausanne, Switzerland", website: "https://www.thefederationofpoker.org" },
    { name: "World Poker Association", acronym: "WPA", founded: 2005, headquarters: "Las Vegas, USA" },
    { name: "Tournament Directors Association", acronym: "TDA", founded: 2001, headquarters: "USA", website: "https://www.pokertda.com" },
  ],
  majorCompetitions: [
    { name: "World Series of Poker (WSOP)", frequency: "annual", founded: 1970, region: "worldwide", note: "Main Event $10,000 buy-in No-Limit Hold'em — the sport's most prestigious title." },
    { name: "World Poker Tour (WPT)", frequency: "annual", founded: 2002, region: "worldwide" },
    { name: "European Poker Tour (EPT)", frequency: "annual", founded: 2004, region: "Europe" },
    { name: "Triton Super High Roller Series", frequency: "several per year", founded: 2015, region: "worldwide", note: "Highest-stakes tour, buy-ins up to $1M+." },
    { name: "Global Poker Index (GPI)", frequency: "ongoing", founded: 2011, region: "worldwide", note: "Player of the Year rankings by tournament results." },
  ],
  countriesPlayed: ["US", "GB", "CA", "DE", "BR", "FR", "SE", "AU", "RU", "CN", "IN", "TH"],
  famousAthletes: [
    "Doyle Brunson",
    "Phil Ivey",
    "Daniel Negreanu",
    "Phil Hellmuth",
    "Chris Moneymaker",
    "Fedor Holz",
    "Vanessa Selbst",
    "Justin Bonomo",
    "Bryn Kenney",
    "Stu Ungar",
    "Erik Seidel",
  ],
  records: [
    { title: "Most WSOP bracelets", holder: "Phil Hellmuth", value: "17", year: 2024 },
    { title: "Largest single-event prize", holder: "Antonio Esfandiari (2012 Big One for One Drop)", value: "$18,346,673", year: 2012 },
    { title: "All-time tournament earnings leader", holder: "Bryn Kenney", value: "over $70 million", year: 2024 },
  ],

  variants: ["texas-holdem", "omaha", "seven-card-stud", "razz", "badugi", "chinese-poker", "five-card-draw"],
  relatedSports: ["contract-bridge", "chess", "baccarat", "blackjack"],

  skills: ["probability calculation", "hand-reading", "position awareness", "pot odds", "bankroll management", "psychological control (tilt management)"],
  strategies: [
    { title: "Position", body: "Play more hands in late position (button, cut-off) where you act last — the single most powerful advantage in poker." },
    { title: "Pot odds and equity", body: "Compare the cost of a call to the pot size and your hand's chance to improve — the mathematical spine of poker." },
    { title: "Aggression", body: "Betting and raising wins pots two ways (best hand or fold-out); calling wins only one. Winning players raise more often than they call." },
    { title: "Balanced ranges", body: "Vary your play so opponents can't put you on a specific hand — mix bluffs into your value range at a mathematically 'GTO' (game-theory optimal) frequency." },
    { title: "Bankroll management", body: "Never risk more than 5% of your bankroll on a single tournament, or 5 buy-ins on a cash-game session — variance eats undercapitalized players alive." },
  ],

  terminology: [
    { term: "Hole cards", meaning: "Your private cards, unseen by opponents until showdown." },
    { term: "Community cards", meaning: "The face-up cards shared by all players in flop-based games (Hold'em, Omaha)." },
    { term: "Blinds", meaning: "Forced bets by the two players left of the dealer button before cards are dealt." },
    { term: "Button", meaning: "The nominal dealer position — acts last post-flop, best positional advantage." },
    { term: "Flop, turn, river", meaning: "The 1st three, 4th and 5th community cards dealt in Hold'em/Omaha." },
    { term: "All-in", meaning: "Betting all remaining chips — cannot be forced out of the pot from that point." },
    { term: "Bluff", meaning: "Betting or raising with a weak hand to make opponents fold better hands." },
    { term: "Value bet", meaning: "Betting with a strong hand expecting to be called by worse hands." },
    { term: "Fold equity", meaning: "The expected value gained from opponents folding to your bet." },
    { term: "GTO", meaning: "Game-theory optimal play — an unexploitable strategy derived from Nash equilibrium." },
    { term: "Tilt", meaning: "Playing worse than usual due to emotional frustration — usually after bad beats." },
    { term: "Bad beat", meaning: "Losing a hand you were a strong favourite to win." },
    { term: "Rake", meaning: "The house fee — usually 2.5-10% of each pot capped at a small amount." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn hand rankings", body: "Memorise the 10 hand ranks from royal flush down to high card. Practise identifying hands quickly." },
      { title: "Understand betting flow", body: "Play some free / play-money hands to internalise the pre-flop / flop / turn / river structure." },
      { title: "Position and starting hands", body: "Learn a tight opening-range chart by position — the biggest single fix for losing players." },
      { title: "Pot odds", body: "Practise the '4 and 2' rule: with 2 cards to come, multiply outs by 4 for your % to hit." },
    ] },
    { level: "intermediate", steps: [
      { title: "3-betting and 4-betting", body: "When and with what range to re-raise pre-flop for value or as a bluff." },
      { title: "C-bet strategy", body: "The continuation bet after raising pre-flop — when to fire, when to check." },
      { title: "Hand-reading", body: "Narrow opponents' ranges based on their actions each street." },
      { title: "Bankroll management", body: "Study Chen and Ankenman's 'Mathematics of Poker' for variance and bankroll math." },
    ] },
    { level: "advanced", steps: [
      { title: "GTO study", body: "Use PioSolver, MonkerSolver, or GTO Wizard to study equilibrium strategies for common spots." },
      { title: "Exploitative adjustments", body: "Deviate from GTO to exploit specific opponent leaks — the difference between good and great." },
      { title: "Mental game", body: "Read Jared Tendler's 'The Mental Game of Poker' — variance-tolerance is a trainable skill." },
      { title: "Live tells", body: "For live-only players, study Zachary Elwood's 'Verbal Poker Tells' and Mike Caro's 'Book of Tells'." },
    ] },
  ],
  faq: [
    { question: "Is poker a sport or gambling?", answer: "Legally it varies by jurisdiction, but poker is recognised as a mind sport by the IMSA and IFP. It has significant skill components (game theory, hand-reading, bankroll management) which win out over long-term play — most professionals go many years profitable." },
    { question: "How much can I win playing poker professionally?", answer: "Top pros earn $1M+ annually, but a large majority of aspiring pros do not sustain a living. Bankroll management, game selection, and continuous study separate winners from losers." },
    { question: "What's the difference between cash games and tournaments?", answer: "Cash games: chips = money, blinds stay constant, you can leave anytime. Tournaments: one buy-in, blinds increase on a clock, you play until eliminated or the event ends, prize distributed by finish position." },
    { question: "Why is Texas Hold'em the most popular variant?", answer: "Two hole cards + five community cards + TV-friendly betting rounds. Since the 2003 poker boom, it has become the flagship of every major tour and the only variant many casual players know." },
    { question: "Is online poker legal in my country?", answer: "Varies widely. Legal and regulated in France, Germany, UK, Nevada, New Jersey, Ontario. Grey market in India, Brazil, Vietnam. Restricted in the US federal jurisdiction outside licensed states." },
  ],

  wikipediaTitle: "Poker",
  sources: [
    { label: "Wikipedia — Poker", url: "https://en.wikipedia.org/wiki/Poker", publisher: "Wikipedia" },
    { label: "WSOP — Official Tournament Rules", url: "https://www.wsop.com", publisher: "World Series of Poker" },
    { label: "TDA Rulebook", url: "https://www.pokertda.com", publisher: "Tournament Directors Association" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
