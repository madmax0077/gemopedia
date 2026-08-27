import type { Sport } from "@/lib/types";

export const jaipur: Sport = {
  id: "jaipur",
  slug: "jaipur",
  name: "Jaipur",
  officialName: "Jaipur",
  aliases: [],
  shortDescription:
    "MASTERPIECE 2-PLAYER CARD-BASED TRADING GAME by SÉBASTIEN PAUCHON + GAMEWORKS/ASMODEE (Switzerland, 2009). 2 players compete as MERCHANTS in Jaipur trying to become Maharaja's official trader by selling GOODS (Diamonds, Gold, Silver, Cloth, Spice, Leather, Camels). Draft cards from Market, sell for POINTS + BONUS TOKENS. Best-of-3 rounds. Fast 30-min games; perfect couples game + travel game. Considered THE BEST 2-PLAYER CARD GAME. Sold 1.5M+ copies. Digital app award-winning.",
  longDescription:
    "JAIPUR is a MASTERPIECE 2-PLAYER CARD-BASED TRADING GAME designed by SÉBASTIEN PAUCHON + published by GAMEWORKS (Switzerland, 2009; later distributed by ASMODEE). 2 PLAYERS compete as MERCHANTS in JAIPUR (INDIA) trying to become the MAHARAJA's OFFICIAL TRADER. Setting: 17th-century Rajasthan trading bazaar. GOODS: DIAMONDS (best), GOLD, SILVER, CLOTH, SPICE, LEATHER (worst), and CAMELS (herd currency). GAMEPLAY: MARKET of 5 face-up cards; each turn choose 1 of: (1) TAKE 1 GOOD from market (draw replacement immediately); (2) TAKE MULTIPLE GOODS (exchange hand cards + camels for equal number of Market cards); (3) TAKE ALL CAMELS from Market (add to Camel Herd — separate zone; camels are hand-limit-free); (4) SELL GOODS (all of one type; get GOLD chips = points, decreasing value; if selling 3+ get BONUS TOKENS). Each type has diminishing token values (early Diamonds worth more than late Diamonds). BONUS TOKENS for 3-card, 4-card, 5-card sales. HAND LIMIT = 7 cards (Camels don't count). Round ends when 3 goods stacks empty. Highest points wins round; player at MOST CAMELS at round end gets CAMEL BONUS (5 points). BEST-OF-3 ROUNDS wins game (called SEAL OF EXCELLENCE). Fast 30-min games; perfect couples game + travel game. Considered THE BEST 2-PLAYER CARD GAME. Sold 1.5M+ copies. DIGITAL APP (iOS/Android/Steam by Asmodee Digital) AWARD-WINNING + faithful adaptation.",
  category: "card-games",
  subCategory: "2-player / trading / set collection / Sébastien Pauchon / GameWorks",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "CH",
  regionOfOrigin: "Switzerland (GameWorks Zurich)",
  estimatedOrigin: "2009 original; 2020 App Award-winning digital version",
  players: { min: 2, max: 2, note: "Strictly 2-player." },
  field: {
    surfaceName: "Small tabletop",
    dimensions: "Small tabletop or coffee table",
    description: "Home tabletop; portable + travel-friendly.",
  },
  equipment: [
    { name: "Jaipur ($20 USD)", description: "Base game; all-in-one" },
    { name: "Jaipur digital app ($5-10)", description: "iOS/Android/Steam by Asmodee Digital" },
  ],
  duration: { approximateMinutes: 30, structure: "20-45 minutes per game (best-of-3 rounds)." },
  objective: "Win 2 of 3 rounds; each round earn most points via strategic trading of goods.",
  basicRules: [
    { title: "5 cards face-up in Market", body: "Central pool." },
    { title: "Take 1 good, take multiple (exchange), take all camels, or sell", body: "4 turn options." },
    { title: "Sell goods for gold chips (decreasing value per goods type)", body: "Early sales worth more." },
    { title: "Sell 3+ for bonus tokens", body: "Bulk sales rewarded." },
    { title: "Hand limit 7 (excluding camels)", body: "Manage cards." },
    { title: "Round ends when 3 good stacks empty; camel bonus 5 pts if you have most", body: "Race + tempo." },
  ],
  scoring: {
    summary: "Gold chip points per round; best-of-3 rounds.",
    breakdown: [
      { action: "Sell Diamonds (7,7,5,5,5)", points: "First sales worth more" },
      { action: "Sell Gold (6,6,5,5,5)", points: "" },
      { action: "Sell Silver (5,5,5,5,5)", points: "" },
      { action: "Sell Cloth (5,3,3,2,2,1,1)", points: "" },
      { action: "Sell Spice (5,3,3,2,2,1,1)", points: "" },
      { action: "Sell Leather (4,3,2,1,1,1,1,1,1)", points: "" },
      { action: "3/4/5+ good bonus (3=1-3pts, 4=4-6pts, 5+=8-10pts)", points: "Bulk sale bonus" },
      { action: "Most Camels at round end", points: "+5 point Camel Bonus" },
    ],
    winCondition: "Win 2 of 3 rounds (Seal of Excellence).",
  },
  governingBodies: [
    { name: "GameWorks (publisher)", founded: 2001, headquarters: "Zurich, Switzerland" },
    { name: "Asmodee (distributor)", founded: 1995, headquarters: "Paris, France" },
  ],
  majorCompetitions: [
    { name: "Casual + family; no formal competitions", frequency: "N/A", founded: 2009, region: "worldwide" },
    { name: "Deutscher Spiele Preis 2010 nomination", frequency: "annual", founded: 2010, region: "Germany" },
  ],
  countriesPlayed: ["CH", "US", "GB", "DE", "FR", "IT", "ES", "SE", "PL", "AU", "CA", "BR", "JP", "NL"],
  famousAthletes: [
    "Sébastien Pauchon (CH) — Designer",
    "Alexandre Roche (FR) — Illustrator",
  ],
  variants: [
    "jaipur-2009-original",
    "jaipur-app-2018-asmodee-digital",
    "jaipur-2nd-edition-2021-refresh",
    "jaipur-plus-2022-mini-expansion",
  ],
  relatedSports: ["7-wonders-duel", "star-realms", "bohnanza", "sushi-go", "codenames"],
  skills: ["opportunistic trading", "opponent hand tracking", "risk assessment (sell timing)", "market pool evaluation", "camel management"],
  strategies: [
    { title: "Sell 3+ cards for bonus tokens", body: "Bulk sales are efficient." },
    { title: "Camels: take all for +5 end bonus + hand freedom", body: "Central mechanic." },
    { title: "Sell high-value goods early (Diamonds, Gold, Silver)", body: "Early sales worth more." },
    { title: "Deny opponent by taking cards they need", body: "Interactive drafting." },
    { title: "Timing: end round when you're ahead", body: "Race conditions." },
  ],
  terminology: [
    { term: "Market", meaning: "5 face-up cards to trade." },
    { term: "Good", meaning: "Diamond/Gold/Silver/Cloth/Spice/Leather (6 types)." },
    { term: "Camel", meaning: "Herd currency; hand-limit-free." },
    { term: "Bonus Token", meaning: "Bulk sale reward (3/4/5+ goods)." },
    { term: "Seal of Excellence", meaning: "Best-of-3 rounds match win." },
    { term: "Diminishing goods", meaning: "Later sales worth fewer points." },
    { term: "Hand limit (7 excl camels)", meaning: "Card cap for goods." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Jaipur ($20)", body: "Small box; complete game." },
    ]},
    { level: "intermediate", steps: [
      { title: "Try Jaipur digital app for solo/AI practice", body: "Well-designed adaptation." },
    ]},
    { level: "advanced", steps: [
      { title: "Best-of-3 tournaments with friends", body: "Casual competitive." },
    ]},
  ],
  faq: [
    { question: "What is Jaipur?", answer: "MASTERPIECE 2-PLAYER CARD-BASED TRADING GAME by SÉBASTIEN PAUCHON + GAMEWORKS/ASMODEE (Switzerland, 2009). 2 players compete as MERCHANTS in Jaipur trying to become Maharaja's official trader by selling GOODS (Diamonds, Gold, Silver, Cloth, Spice, Leather, Camels). Draft cards from Market, sell for POINTS + BONUS TOKENS. Best-of-3 rounds. Fast 30-min games; perfect couples game + travel game. Considered THE BEST 2-PLAYER CARD GAME. Sold 1.5M+ copies. Digital app award-winning." },
    { question: "Jaipur vs 7 Wonders Duel — which 2-player game?", answer: "BOTH EXCELLENT 2-PLAYER GAMES. JAIPUR ($20, 2009): trading/drafting, 30 min, best-of-3 rounds, casual + accessible + travel-friendly. 7 WONDERS DUEL ($35, 2015): civilization card draft, 30 min, single game, deeper + more strategic. RECOMMENDATION: JAIPUR for lighter/relaxing 2-player time; 7 WONDERS DUEL for deeper strategic 2-player experience. Both are top-tier 2-player. Jaipur is more portable + travel-friendly; 7 Wonders Duel has more strategic weight." },
  ],
  wikipediaTitle: "Jaipur (board game)",
  sources: [
    { label: "GameWorks — Jaipur", url: "https://www.game-works.ch/", publisher: "GameWorks" },
    { label: "Wikipedia — Jaipur", url: "https://en.wikipedia.org/wiki/Jaipur_(board_game)", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-27",
  confidence: "verified",
};
