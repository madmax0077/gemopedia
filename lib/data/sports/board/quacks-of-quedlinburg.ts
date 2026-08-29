import type { Sport } from "@/lib/types";

export const quacksOfQuedlinburg: Sport = {
  id: "quacks-of-quedlinburg",
  slug: "quacks-of-quedlinburg",
  name: "The Quacks of Quedlinburg",
  officialName: "Die Quacksalber von Quedlinburg (2018, Wolfgang Warsch, Schmidt Spiele)",
  aliases: ["Quacksalber", "Quacks"],
  shortDescription:
    "A push-your-luck bag-building game where 2-4 players are quack doctors brewing potions by drawing chips from their bag — draw too many cherry bombs and the pot explodes. 2018 Kennerspiel des Jahres winner.",
  longDescription:
    "The Quacks of Quedlinburg is a bag-building push-your-luck game designed by Wolfgang Warsch, published by Schmidt Spiele in 2018. Players are 17th-century charlatans concocting potions to sell at the market. Each round, all players simultaneously draw ingredient chips from personal bags and place them along a spiral in their pot; each chip's number is the steps advanced. Cherry-bomb chips are the risk — if their cumulative total exceeds 7, the pot explodes and the player loses either the round's victory points or coins (their choice). At round end, players earn coins based on final position + VPs based on scoring spaces reached, then spend coins on new chips from a marketplace of 9 differently-colored ingredients (each with unique end-of-round effects). Rulebook has 4 ingredient sets (Books 1-4) providing enormous variety. Kennerspiel des Jahres winner 2018; expansions (Herb Witches 2019, Alchemists 2021) add ranked chips + new colors. Widely considered the modern gold standard for push-your-luck.",
  category: "board-games",
  subCategory: "push-your-luck bag-building (2-4 players)",
  sportType: "mixed",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "DE",
  regionOfOrigin: "Germany (Schmidt Spiele, designed by Wolfgang Warsch)",
  estimatedOrigin: "Published Oct 2018 Spiel Essen; English North Star Games; won Kennerspiel des Jahres July 2018",
  players: { min: 2, max: 4, note: "Optimal at 3-4; solo variant added in expansions." },
  field: {
    surfaceName: "Personal spiral pot boards + shared marketplace",
    dimensions: "1 spiral pot per player (50+ spaces) + shared central marketplace + scoring board",
    description: "Each player has a spiral pot board; shared marketplace displays ingredient chips available for purchase.",
  },
  equipment: [
    { name: "4 pot boards (spiral)", description: "Personal spiral tracks where ingredient chips are placed each round." },
    { name: "~150 ingredient chips", description: "9 colors (white/orange/purple/yellow/green/black/blue/red + neutral), each with unique effect." },
    { name: "Rulebooks 1-4", description: "Four sets of ingredient rules for variety." },
    { name: "Fortune-teller cards", description: "One drawn per round; provides temporary bonus/rule." },
    { name: "Rat markers", description: "Trailing players catch up via rats." },
    { name: "Ruby tokens", description: "Bonus resource, spent for pot upgrades or extra draws." },
    { name: "4 cloth bags", description: "Hold each player's chips for random draw." },
    { name: "Scoring track + coin/VP tokens", description: "Track final scores + intermediate rewards." },
  ],
  duration: { approximateMinutes: 60, structure: "Fixed 9 rounds; each round ~5-7 min; ~45-75 min total." },
  objective:
    "After 9 rounds, score the most Victory Points by successfully brewing high-value potions without exploding your pot too often.",
  matchStructure:
    "9 rounds. Each round: (1) draw fortune-teller card; (2) simultaneous chip-draws — keep drawing or stop; (3) evaluate explosions (>7 cherry bombs); (4) resolve position-based rewards (coins/VPs/rubies); (5) resolve chip effects; (6) shop for new chips + upgrade pot.",
  basicRules: [
    { title: "Draw chips one at a time", body: "Reach into bag, pull chip, place on next spiral space (moving forward by chip's value)." },
    { title: "Stop or continue", body: "After each chip, decide to stop or draw again." },
    { title: "Explosion at >7 cherry bombs", body: "If cumulative cherry-bomb value exceeds 7, pot explodes." },
    { title: "Choose VP OR coins after explosion", body: "Exploded players get either coins OR victory points that round, not both." },
    { title: "Score at end of round", body: "Furthest advanced on spiral → best rewards; last players get 'rat' catch-up." },
    { title: "Buy 1-2 new chips per round", body: "Spend coins at marketplace based on last-round performance." },
  ],
  advancedRules: [
    { title: "Chip effects", body: "Each color has unique triggered effect (green: extra draw; yellow: skip draw; blue: rubies; etc)." },
    { title: "Ingredient set variety", body: "Rulebooks 1-4 rotate chip effects, offering high replay value." },
    { title: "Fortune-teller cards", body: "Round-specific bonus card affects all players (e.g., 'green chips worth +1')." },
    { title: "Pot upgrades", body: "Spend 2 rubies to move starting position forward one space." },
    { title: "Rat token", body: "Trailing players start with rats (each = 1 free spiral space this round)." },
  ],
  scoring: {
    summary: "9 rounds of potion brewing; total VP wins.",
    winCondition: "Highest VP after 9 rounds.",
    breakdown: [
      { action: "Furthest on spiral (round)", points: "Coins + VP based on position reached" },
      { action: "Chip effects (green, black, purple)", points: "Bonus coins/VP/rubies" },
      { action: "Ruby-based scoring bonuses", points: "+1-3 VP per ruby (variable)" },
      { action: "Explosion penalty", points: "Choose either coins OR VP, not both" },
    ],
  },
  penalties: [
    { title: "Pot explosion", body: "Lose choice of coins or VP for the round." },
    { title: "Over-buying", body: "Cannot buy chips you cannot afford." },
  ],
  positions: [
    { name: "Quack Doctor (Player)", role: "Manages own bag, pot, coins, rubies, chips.", count: 4 },
  ],
  officiating: { officials: ["None"], summary: "Casual game — self-officiated." },
  governingBodies: [
    { name: "Schmidt Spiele", founded: 1907, headquarters: "Berlin, Germany", website: "https://schmidtspiele.de" },
    { name: "North Star Games (English publisher)", founded: 2005, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "Kennerspiel des Jahres 2018 (Winner)", frequency: "once", founded: 2018, region: "Germany" },
    { name: "Spiel Essen demo tournaments", frequency: "annual", founded: 2018, region: "Essen, Germany" },
  ],
  countriesPlayed: ["DE", "US", "GB", "FR", "IT", "ES", "AU", "JP"],
  famousAthletes: [
    "Wolfgang Warsch (designer, also Wavelength, Ganz Schön Clever)",
    "Menzel + Klemens Franz (art)",
  ],
  records: [
    { title: "Kennerspiel des Jahres 2018", holder: "Wolfgang Warsch", value: "Winner", year: 2018 },
    { title: "Deutscher Spiele Preis 2018", holder: "The Quacks of Quedlinburg", value: "1st place", year: 2018 },
    { title: "Sales", holder: "Schmidt Spiele", value: "1M+ copies sold globally by 2022", year: 2022 },
  ],
  variants: ["Quacks: Herb Witches (2019 expansion)", "Quacks: Alchemists (2021 expansion)", "Quacks Duel (2024, 2-player standalone)"],
  relatedSports: ["orleans", "clank", "dominion", "wingspan"],
  skills: [
    "risk assessment",
    "probability estimation",
    "long-term bag composition",
    "opportunity cost (VP vs coins)",
    "reading opponents' buys",
  ],
  strategies: [
    { title: "Buy cherry-bomb removers early", body: "Yellow/orange/red chips reduce explosion risk in later rounds." },
    { title: "Focus one color path", body: "Green (chain draws) or Purple (rubies) offer highest single-strategy payoff." },
    { title: "Push in early rounds", body: "Early explosions cost less; late-round explosions cost most." },
    { title: "Buy 2 cheap chips over 1 expensive", body: "Bag dilution + double effects usually outperform one big chip." },
    { title: "Track cherry-bomb count", body: "Know how many cherry bombs left in bag to estimate explosion risk." },
  ],
  terminology: [
    { term: "Pot", meaning: "Personal spiral board for placing drawn chips." },
    { term: "Cherry bomb (white)", meaning: "Dangerous chip; explodes pot at cumulative >7." },
    { term: "Bag", meaning: "Cloth bag holding all your ingredients." },
    { term: "Ruby", meaning: "Bonus resource, used for pot upgrades + potion effects." },
    { term: "Rat", meaning: "Catch-up mechanic for trailing players." },
    { term: "Fortune-teller", meaning: "Round modifier card drawn each round." },
  ],
  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play with Rulebook 1", body: "Simplest chip effects; explains push-your-luck cleanly." },
        { title: "Learn cherry-bomb counts", body: "Base game has 4/2/1 cherry bombs (values 1/2/3)." },
        { title: "Buy 1 chip per round confidently", body: "Skip overthinking; feel the flow." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Switch to Rulebooks 2-4", body: "Higher variance chip effects; deeper strategy." },
        { title: "Master ruby management", body: "Save rubies for pot upgrades + explosion insurance." },
        { title: "Play with expansions", body: "Herb Witches + Alchemists add ranked chips + new colors." },
      ],
    },
  ],
  faq: [
    { question: "How long is a game?", answer: "45-75 minutes for 4 players; 30-45 for 2 players." },
    { question: "Is Quacks family-friendly?", answer: "Yes — box says age 10+, but 8-year-olds can play. Great for families." },
    { question: "How much luck is there?", answer: "High short-term variance from bag draws, but strong long-term strategy in bag composition + chip effects." },
    { question: "Is it Kennerspiel or Spiel des Jahres?", answer: "Won Kennerspiel des Jahres 2018 (the 'advanced' category), not Spiel des Jahres." },
    { question: "Best expansion to start with?", answer: "Herb Witches (adds ranked chips + new colors) is the essential first expansion." },
  ],
  sources: [
    { label: "BoardGameGeek — Quacks of Quedlinburg", url: "https://boardgamegeek.com/boardgame/244521/quacks-quedlinburg", publisher: "BGG" },
    { label: "Wikipedia — The Quacks of Quedlinburg", url: "https://en.wikipedia.org/wiki/The_Quacks_of_Quedlinburg", publisher: "Wikipedia" },
    { label: "Kennerspiel des Jahres", url: "https://www.spiel-des-jahres.de/en/spiele/die-quacksalber-von-quedlinburg/", publisher: "Spiel des Jahres jury" },
  ],
  wikipediaTitle: "The Quacks of Quedlinburg",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
