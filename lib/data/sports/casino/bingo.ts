import type { Sport } from "@/lib/types";

export const bingo: Sport = {
  id: "bingo",
  slug: "bingo",
  name: "Bingo",
  officialName: "Bingo",
  aliases: ["Beano", "Housie", "Tombola", "Lotto"],
  shortDescription:
    "Number-matching game where players mark drawn numbers on a card, aiming to complete a pattern (line, house, or shape) and shout 'Bingo!' first.",
  longDescription:
    "Bingo is a game of chance in which players match randomly drawn numbers to numbers printed on a card. The first player to complete the designated pattern (line, cross, X, full house) calls out 'Bingo!' The game evolved from the 16th-century Italian lottery 'Il Gioco del Lotto d'Italia,' spread to France as 'Le Lotto' in the 1770s, and reached the USA in the 1920s as 'Beano.' It was renamed 'Bingo' by Edwin Lowe after hearing a winner shout the word by mistake, and mass-marketed with the help of mathematician Carl Leffler, who developed over 6,000 non-duplicating cards. Today Bingo is played in halls, churches (for charity), online, and on cruise ships worldwide. UK 'Housie' uses a 3×9 card of 15 numbers (1-90); US Bingo uses a 5×5 card (1-75) with a free centre space.",

  category: "casino-games",
  subCategory: "number matching / lottery",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "early-modern",
  popularity: "global",

  countryOfOrigin: "IT",
  regionOfOrigin: "Italy (Il Gioco del Lotto d'Italia 1530); modern Bingo USA 1929",
  estimatedOrigin: "1530 (Italian lottery); 1929 renamed 'Bingo' in USA by Edwin Lowe",

  players: { min: 2, max: 5000, note: "Large-hall Bingo commonly runs with hundreds of players; online Bingo can have thousands per game." },
  field: {
    surfaceName: "Bingo hall / online lobby",
    dimensions: "Hall size varies; games are called from a caller's stage or podium",
    description: "Player tables with dabbers (markers); caller with a numbered ball drawer or electronic RNG; large display of drawn numbers.",
  },
  equipment: [
    { name: "Bingo card", description: "5×5 (US, 75-ball) or 3×9 (UK, 90-ball) grid with random numbers." },
    { name: "Dauber / dabber", description: "Ink stamper used to mark called numbers on paper cards." },
    { name: "Bingo blower / cage", description: "Machine that randomly draws numbered balls." },
    { name: "Balls (1-75 or 1-90)", description: "Numbered ping-pong-style balls drawn one at a time." },
    { name: "Caller", description: "Announcer who reads out each drawn number with the traditional call-language." },
  ],
  duration: {
    approximateMinutes: 10,
    structure: "Each individual game 5-15 minutes; a hall session runs 20-30 games over 2-4 hours.",
    note: "Coverall (blackout) games take longest.",
  },
  objective: "Be the first to complete the winning pattern (a line, X, corners, or full card) with called numbers and shout 'Bingo!' to claim the prize.",
  matchStructure:
    "Players purchase one or more cards. The caller (or RNG) draws numbers at random and announces them one at a time. Players mark matching numbers on their cards. When a player completes the designated pattern for the game (one line, two lines, full house, X, corners, letter shape, etc.), they shout 'Bingo!' The caller verifies the card, and if correct, the player claims the prize.",

  basicRules: [
    { title: "Buy your cards", body: "Cards cost £/$ 1-10 each depending on venue; buy multiple cards to increase chances." },
    { title: "Mark called numbers", body: "As the caller announces each number, dab it on your card if present." },
    { title: "Winning pattern", body: "Games can be one line, two lines, full house (blackout), X, four corners, or other patterns — announced before each game." },
    { title: "Call 'Bingo!' quickly", body: "You must call out before the next number is drawn — otherwise you may lose the win." },
    { title: "Verification", body: "The caller or staff verifies your card matches what's been drawn." },
  ],
  advancedRules: [
    { title: "US 75-ball vs UK 90-ball", body: "75-ball: 5×5 card with letters B-I-N-G-O over columns; free centre. 90-ball: 3×9 with 15 numbers per card; win on 1 line, 2 lines, or full house." },
    { title: "Speed / Quick Bingo", body: "Faster call rate (every 2-3 seconds) and simpler patterns." },
    { title: "Coverall / Blackout", body: "Cover every number on the card — high jackpot, low probability." },
    { title: "Progressive jackpots", body: "Prize grows if not won within N calls; carries over to next session." },
    { title: "Online bingo auto-daub", body: "Online cards auto-mark; players just watch and wait for the auto-'Bingo' call." },
  ],
  scoring: {
    summary: "Prize awarded to first player completing the pattern; multiple winners split the pot.",
    breakdown: [
      { action: "1-line win (90-ball)", points: "Base prize, typically 10-20% of pool" },
      { action: "2-line win (90-ball)", points: "Larger prize, 20-30% of pool" },
      { action: "Full house (blackout)", points: "Largest prize, 50-70% of pool" },
      { action: "Progressive jackpot", points: "Variable — can be tens of thousands of £/$" },
    ],
    winCondition: "First player to complete the pattern and successfully call 'Bingo!' wins.",
  },

  officiating: {
    officials: ["Caller / Bingo Master", "Verifier / Floorwalker", "Cashier"],
    summary: "Live halls have a caller (announces numbers, verifies cards) and floorwalkers (help players). Online is fully automated.",
    signals: [
      { name: "'Two Fat Ladies' (88)", description: "UK bingo calling tradition — numbers have nicknames." },
      { name: "'Legs Eleven' (11)", description: "UK bingo call for the number 11." },
      { name: "'Kelly's Eye' (1)", description: "UK bingo call for the number 1." },
    ],
  },
  governingBodies: [
    { name: "The Bingo Association (UK)", founded: 1998, headquarters: "Lutterworth, UK", website: "https://bingo-association.co.uk/" },
    { name: "National Independent Bingo Alliance (USA)", founded: 1995, headquarters: "USA" },
    { name: "UK Gambling Commission", founded: 2005, headquarters: "Birmingham, UK", website: "https://www.gamblingcommission.gov.uk/" },
  ],
  majorCompetitions: [
    { name: "National Bingo Game (UK)", frequency: "daily", founded: 1986, region: "UK — 400+ clubs" },
    { name: "Mecca Bingo National Games", frequency: "weekly", region: "UK" },
    { name: "Bingo World Championship (Sun City, Rio)", frequency: "annual", founded: 2018, region: "USA" },
  ],
  countriesPlayed: ["GB", "US", "IT", "ES", "AU", "CA", "NL", "PH", "IE", "ZA", "BR", "SE"],
  famousAthletes: [
    "N/A — casual pastime; some influential callers and hall owners historically",
  ],
  records: [
    { title: "Largest Bingo game (Guinness)", holder: "Bingo Kaskarrada, Bilbao", value: "70,080 players simultaneously", year: 2009 },
    { title: "Largest single Bingo prize", holder: "Christina Grimmie's grandmother (Deal or No Deal casino, UK)", value: "£1.1 million online jackpot", year: 2012 },
    { title: "First 'Bingo' shouted (etymology)", holder: "Anonymous player, Edwin Lowe's game", value: "The winner accidentally shouted 'Bingo!' instead of 'Beano!' in 1929", year: 1929 },
  ],

  variants: ["housie-90-ball", "us-75-ball", "80-ball-bingo", "30-ball-speed-bingo", "coverall", "u-pick-em"],
  relatedSports: ["lotto", "keno", "tambola"],

  skills: [
    "attention span",
    "quick number recognition",
    "multitasking (managing multiple cards)",
    "reflexes (calling 'Bingo!' quickly)",
  ],
  strategies: [
    { title: "More cards, higher chance", body: "Playing more cards linearly increases win probability — but you must be able to track them all." },
    { title: "Off-peak sessions", body: "Fewer players = higher individual win chance for the same buy-in." },
    { title: "Tippett's theory (90-ball)", body: "The longer a coverall game runs, the closer drawn numbers cluster around 45 (the mean). Marginal effect only." },
    { title: "Granville's system (75-ball)", body: "Balance low/high, odd/even, and B-I-N-G-O column numbers on your cards. Statistically debatable, culturally popular." },
  ],

  terminology: [
    { term: "Dabber / Dauber", meaning: "Ink stamper used to mark numbers on a paper card." },
    { term: "Caller", meaning: "The announcer who reads each drawn number." },
    { term: "House / Full house", meaning: "Winning by covering all numbers on the card." },
    { term: "Line", meaning: "Winning by covering all numbers in a single row (or column)." },
    { term: "Blackout / Coverall", meaning: "US term for covering the entire card." },
    { term: "Wild number", meaning: "Optional rule: a random number acts as wild, allowing any matching digit." },
    { term: "Kelly's Eye / Legs Eleven / Two Fat Ladies", meaning: "Traditional UK bingo call nicknames for 1, 11, and 88." },
    { term: "Progressive", meaning: "A jackpot that grows across sessions until won." },
    { term: "Speed bingo", meaning: "Fast-paced variant with rapid calls and simpler patterns." },
    { term: "Six-pack / nine-pack", meaning: "Buying multiple cards printed on a single strip." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Understand the card", body: "US: 5×5 with B-I-N-G-O over columns and a free centre. UK: 3×9 with 15 numbers." },
      { title: "Follow the caller", body: "Numbers are called one at a time; dab the matching numbers on your card." },
      { title: "Know the pattern", body: "Before each game the caller announces what pattern wins (line, 2 lines, full house, X)." },
      { title: "Shout 'Bingo!' immediately", body: "Call out as soon as you complete the pattern — before the next number is drawn." },
    ] },
    { level: "intermediate", steps: [
      { title: "Manage multiple cards", body: "Play 4-8 cards at once by aligning them and dabbing systematically." },
      { title: "Recognise call language", body: "Learn traditional UK calls (Kelly's Eye = 1, Legs Eleven = 11)." },
      { title: "Session strategy", body: "Save budget for progressive jackpot games; play cheap early games for warm-up." },
    ] },
    { level: "advanced", steps: [
      { title: "Card selection", body: "Buy strips with balanced number distributions (Granville / Tippett heuristics)." },
      { title: "Online play", body: "Auto-daub lets you play 30+ cards; focus on chat games and side promotions." },
      { title: "Charity vs commercial venues", body: "Charity bingo often has better prize ratios; commercial halls have larger jackpots but higher house cut." },
    ] },
  ],
  faq: [
    { question: "Where does the name 'Bingo' come from?", answer: "In 1929, US entrepreneur Edwin Lowe saw a game called 'Beano' at a carnival. At his own house game, a winner accidentally shouted 'Bingo!' instead of 'Beano!' and Lowe adopted the name." },
    { question: "What are the odds of winning at Bingo?", answer: "Depends on players and cards. In a hall of 100 players each with 1 card, your chance is roughly 1/100 per game. Buying more cards improves your odds linearly." },
    { question: "Is Bingo a game of skill or luck?", answer: "Pure luck. The only skill is managing multiple cards accurately and calling quickly." },
    { question: "Why do UK numbers have nicknames?", answer: "British bingo halls developed rhyming or descriptive nicknames (Kelly's Eye = 1, Legs Eleven = 11, Two Fat Ladies = 88) to make the calls entertaining and memorable." },
    { question: "What is the difference between US and UK Bingo?", answer: "US: 5×5 card, 75 balls, letters B-I-N-G-O over columns, free centre. UK ('Housie'): 3×9 card, 90 balls, wins on 1 line, 2 lines, and full house." },
  ],

  wikipediaTitle: "Bingo (British version)",
  sources: [
    { label: "Wikipedia — Bingo (US)", url: "https://en.wikipedia.org/wiki/Bingo_(American_version)", publisher: "Wikipedia" },
    { label: "Wikipedia — Bingo (UK)", url: "https://en.wikipedia.org/wiki/Bingo_(British_version)", publisher: "Wikipedia" },
    { label: "The Bingo Association (UK)", url: "https://bingo-association.co.uk/", publisher: "Bingo Association" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
