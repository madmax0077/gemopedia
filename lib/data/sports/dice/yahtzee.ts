import type { Sport } from "@/lib/types";

export const yahtzee: Sport = {
  id: "yahtzee",
  slug: "yahtzee",
  name: "Yahtzee",
  officialName: "Yahtzee",
  aliases: ["Poker Dice", "Cheerio", "Yatzy (Scandinavian)"],
  shortDescription:
    "Dice game where players roll five dice up to three times per turn and try to score in 13 different categories, aiming for the eponymous 'Yahtzee' (5 of a kind).",
  longDescription:
    "Yahtzee is a dice game invented by an anonymous Canadian couple in 1954 and popularised by Milton Bradley (now Hasbro) after they purchased the rights in 1956. Players take turns rolling five six-sided dice up to three times per turn, keeping any dice they want between rolls, and then score the final combination in one of 13 categories on their scorecard. Categories mirror poker hands (three-of-a-kind, four-of-a-kind, full house, small straight, large straight, chance) plus upper-section categories (ones through sixes with a 63-point bonus). A 'Yahtzee' is 5 of a kind, worth 50 points; additional Yahtzees earn 100-point bonuses. Yahtzee has sold over 100 million copies and remains one of the best-selling dice games ever.",

  category: "dice-games",
  subCategory: "dice / probability",
  sportType: "mixed",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (invented on a yacht by an anonymous couple)",
  estimatedOrigin: "1954 (invented); 1956 (Milton Bradley acquires rights); 1973 (E.S. Lowe sells to Milton Bradley for $1.5M)",

  players: { min: 1, max: 10, note: "Best 2-6 players; playable solo." },
  field: {
    surfaceName: "table",
    dimensions: "Any surface. Includes dice cup for rolling.",
    description: "Each player has a scorecard with 13 category slots; central rolling area with dice cup.",
  },
  equipment: [
    { name: "5 six-sided dice", description: "Standard 6-sided dice with pips 1-6." },
    { name: "Dice cup", description: "Cup for rolling to prevent influence and cheating." },
    { name: "Scorecard", description: "Paper pad with 13 categories: 1s through 6s upper section, and 7 lower categories." },
    { name: "Pencil", description: "One per player for recording scores." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "13 turns per player; typical game 20-45 minutes for 2-4 players.",
    note: "Solo play can be under 10 minutes.",
  },
  objective: "Score the most total points across 13 categories over 13 turns, maximising the value of each dice roll.",
  matchStructure:
    "On your turn, roll all 5 dice, then optionally reroll any subset up to 2 more times (3 rolls total). After your final roll, choose one unfilled category and score it — even if the score is 0 (all categories must be filled by game's end). Play continues until every player has filled all 13 categories. Total scores including upper bonus and Yahtzee bonuses determine the winner.",

  basicRules: [
    { title: "Three rolls per turn", body: "Roll all 5 dice; then reroll any dice up to 2 more times, keeping some between rolls." },
    { title: "Score one category per turn", body: "After the final roll, you MUST score in one unfilled category — even if it means a 0." },
    { title: "13 turns total", body: "Every category must be scored exactly once; the game lasts 13 turns per player." },
    { title: "Upper section bonus", body: "If your ones-through-sixes total is ≥63, add a 35-point bonus." },
    { title: "Yahtzee bonus", body: "First Yahtzee (5 of a kind) = 50 points. Each additional Yahtzee = 100-point bonus (must first score 50 in Yahtzee category)." },
    { title: "Chance", body: "'Chance' scores the sum of all 5 dice regardless of pattern." },
  ],
  advancedRules: [
    { title: "Joker rule", body: "If you roll another Yahtzee but the Yahtzee category is filled with 50 (or 0), you may score it as a Full House (25), Small Straight (30), or Large Straight (40) — even if the pattern doesn't match." },
    { title: "Small vs Large Straight", body: "Small Straight = 4 sequential dice (e.g., 2-3-4-5) = 30 points; Large Straight = 5 sequential = 40 points." },
    { title: "Full House", body: "Three of one number + two of another = 25 points." },
    { title: "Category strategy", body: "Don't burn a category too early — 0 in a slot you 'sacrificed' can lose you the game." },
    { title: "Kismet / Yahtzee Handheld", body: "Electronic variants change dice display, scoring behaviour, and add bonus categories." },
  ],
  scoring: {
    summary: "Sum of 13 category scores + upper-section bonus (if ≥63) + Yahtzee bonuses.",
    breakdown: [
      { action: "Upper section (1s-6s)", points: "Sum of dice showing that number (max 5×6 = 30 per row)" },
      { action: "Upper section bonus", points: "+35 if upper total ≥63" },
      { action: "Three of a Kind", points: "Sum of all 5 dice (if 3+ same)" },
      { action: "Four of a Kind", points: "Sum of all 5 dice (if 4+ same)" },
      { action: "Full House", points: "25 (3 of one + 2 of another)" },
      { action: "Small Straight", points: "30 (4 sequential)" },
      { action: "Large Straight", points: "40 (5 sequential)" },
      { action: "Yahtzee (5 of a kind)", points: "50" },
      { action: "Yahtzee bonus (each additional)", points: "+100" },
      { action: "Chance", points: "Sum of all 5 dice" },
    ],
    winCondition: "Highest total score across all 13 categories + bonuses wins.",
  },

  officiating: {
    officials: ["Self-officiated"],
    summary: "Recreational only — no official tournament refereeing.",
  },
  governingBodies: [
    { name: "Hasbro (rights holder since 1984)", founded: 1923, headquarters: "Pawtucket, USA", website: "https://shop.hasbro.com/en-us/product/yahtzee/E5878" },
  ],
  majorCompetitions: [
    { name: "National Yahtzee Tournament (US, historic)", frequency: "annual (1990s)", region: "USA" },
  ],
  countriesPlayed: ["US", "CA", "GB", "SE", "NO", "DK", "DE", "AU", "FR", "NL"],
  famousAthletes: ["N/A — casual family game"],
  records: [
    { title: "Total Yahtzee copies sold (all editions)", holder: "Hasbro/Milton Bradley", value: "over 100 million", year: 2020 },
    { title: "Maximum possible Yahtzee score", holder: "Mathematically calculated", value: "1,575 (perfect Joker rule play with 13 Yahtzees)", year: 2000 },
    { title: "Highest recorded score in tournament play", holder: "Various", value: "typically 300-400 range", year: 2015 },
  ],

  variants: ["yatzy", "kismet", "poker-dice", "generala", "cheerio", "triple-yahtzee"],
  relatedSports: ["farkle", "liars-dice", "poker-dice"],

  skills: [
    "probability estimation",
    "risk-reward decisions",
    "category prioritisation",
    "counting expected value",
    "recognising 'hold' vs 'reroll' patterns",
  ],
  strategies: [
    { title: "Prioritise upper bonus", body: "Aim to average 3 of each number (1×3, 2×3, ... 6×3 = 63) to secure the 35-point bonus." },
    { title: "Keep pairs for 3/4-of-a-kind", body: "After 1st roll, hold your highest pair and reroll for a triplet." },
    { title: "Straight vs Full House", body: "If you have 4 different numbers, aim for straight; if you have 2 pairs, aim for full house." },
    { title: "Yahtzee joker", body: "Once you score 50 in Yahtzee, use the joker rule aggressively — rolling another Yahtzee can score 100 bonus AND 40 in large straight." },
  ],

  terminology: [
    { term: "Yahtzee", meaning: "5 of a kind — worth 50 points; subsequent Yahtzees give +100 bonus." },
    { term: "Upper section", meaning: "Categories 1-6, scoring sum of dice matching that number." },
    { term: "Lower section", meaning: "3-of-a-kind, 4-of-a-kind, full house, small straight, large straight, Yahtzee, chance." },
    { term: "Full House", meaning: "3 of one number + 2 of another = 25 points." },
    { term: "Small Straight", meaning: "4 sequential dice = 30 points." },
    { term: "Large Straight", meaning: "5 sequential dice = 40 points." },
    { term: "Chance", meaning: "Sum of all 5 dice regardless of pattern — the 'safety' category." },
    { term: "Bonus", meaning: "+35 for upper-section total ≥63, +100 for each Yahtzee after the first." },
    { term: "Joker rule", meaning: "Extra Yahtzees can fill other lower-section categories at full value." },
    { term: "Zero out", meaning: "Scoring 0 in a category because you can't fulfil any." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn the 13 categories", body: "Six upper (ones-sixes) and seven lower (3-of-a-kind, 4-of-a-kind, full house, small straight, large straight, Yahtzee, chance)." },
      { title: "Roll and reroll", body: "Practise deciding which dice to keep after each of 3 rolls." },
      { title: "Score at the end of each turn", body: "Choose one unfilled category — even if the score is 0." },
      { title: "Recognise the Yahtzee bonus", body: "Once you get 5 of a kind, mark 50 in the Yahtzee box." },
    ] },
    { level: "intermediate", steps: [
      { title: "Aim for upper bonus", body: "Target 3+ of each of 1-6 to reach 63 upper total and earn +35 bonus." },
      { title: "Save Chance for a bad roll", body: "Don't score Chance early — use it as insurance." },
      { title: "Reroll math", body: "Learn probabilities: 4/6 chance of pairing after 3 rolls; ~4.6% chance of Yahtzee in one turn." },
      { title: "Joker use", body: "After first Yahtzee, know how to convert extras to full house / straight bonuses." },
    ] },
    { level: "advanced", steps: [
      { title: "Optimal play tables", body: "Refer to published optimal strategy tables (Cheshire Cat, Verhoeff)." },
      { title: "Category ordering", body: "Fill Yahtzee, then upper section (chase bonus), then straights, then Chance as insurance." },
      { title: "Endgame category management", body: "Balance filling low-value categories against pursuing high-value ones." },
    ] },
  ],
  faq: [
    { question: "What is the probability of rolling a Yahtzee?", answer: "About 4.6% in a single turn with all three rolls used optimally. Rolling a Yahtzee on the very first roll (5 of same) is only about 0.077% (roughly 1 in 1,296)." },
    { question: "What's the highest possible Yahtzee score?", answer: "Theoretically 1,575 — requires rolling 13 Yahtzees of 6s and using the joker rule perfectly. Realistic top-tier scores are 300-400." },
    { question: "How does the Yahtzee bonus work?", answer: "The first Yahtzee scores 50 points. Every subsequent Yahtzee (after the category is filled with 50) earns a +100 bonus AND can be scored as a full house, straight, etc. via the joker rule." },
    { question: "Can I choose not to score in a category?", answer: "No — you MUST fill one category per turn, even if it's a 0. This is what creates strategic tension." },
    { question: "Is Yahtzee the same as Yatzy?", answer: "Yatzy is the Scandinavian variant. The main differences: Yatzy has 15 categories, includes 'ones' and 'twos' pairs, and scores Yahtzee (called Yatzy) as 50 with no repeat bonus." },
  ],

  wikipediaTitle: "Yahtzee",
  sources: [
    { label: "Wikipedia — Yahtzee", url: "https://en.wikipedia.org/wiki/Yahtzee", publisher: "Wikipedia" },
    { label: "Hasbro — Yahtzee product page", url: "https://shop.hasbro.com/en-us/product/yahtzee/E5878", publisher: "Hasbro" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
