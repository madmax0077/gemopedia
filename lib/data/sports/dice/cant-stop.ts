import type { Sport } from "@/lib/types";

export const cantStop: Sport = {
  id: "cant-stop",
  slug: "cant-stop",
  name: "Can't Stop",
  officialName: "Can't Stop",
  aliases: ["Sid Sackson Can't Stop"],
  shortDescription:
    "Sid Sackson 2-4 player push-your-luck dice classic (1980) — roll 4 dice, pair them into column advancers on a numbered board (2-12); stop or press-your-luck to advance more, but bust = lose all round progress. Iconic gateway push-your-luck design.",
  longDescription:
    "Can't Stop is a 2-4 player push-your-luck dice game designed by Sid Sackson — one of the most iconic push-your-luck game designs in history, originally published 1980 by Parker Brothers, currently in print by Ravensburger + Eagle-Gryphon Games. Uses 4 six-sided dice + board with 11 columns numbered 2-12 (representing possible dice-sum outcomes). Column height reflects statistical probability: column 7 is tallest (13 spaces — most likely sum), 2 + 12 shortest (3 spaces — least likely). Players race to claim 3 columns (reaching the top of 3 different columns). Turn: roll all 4 dice, pair into 2 sums (e.g., dice 3+4=7 + dice 2+5=7 = both advance column 7); place white 'runner' pawns on chosen columns. Continue rolling — must place a runner each roll that produces a valid sum matching an existing runner column OR spare column. If you can't advance any active runner column, you BUST and lose all round progress. Choose to STOP any turn to bank runner positions as permanent gains. First to claim 3 columns wins. Bus mnemonic push-your-luck design; still consistently ranked BGG Top 500 four decades on.",
  category: "dice-games",
  subCategory: "push-your-luck dice classic",
  sportType: "mixed", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Sid Sackson design)",
  estimatedOrigin: "Designed by Sid Sackson; first published 1980 by Parker Brothers; multiple reprints since",
  players: { min: 2, max: 4, note: "Best with 3-4 players." },
  equipment: [
    { name: "4 six-sided dice", description: "Standard d6 dice." },
    { name: "Board with 11 columns (2-12)", description: "Column heights vary by probability — 7 tallest (13 spaces), 2/12 shortest (3 spaces)." },
    { name: "White runner pawns (3 per player)", description: "Temporary round markers." },
    { name: "Colored marker pawns (per player)", description: "Permanent column-progress markers per player." },
  ],
  duration: { approximateMinutes: 30, structure: "Game 30-45 min typically." },
  objective: "Claim 3 columns by reaching top of each; first to 3 columns wins.",
  matchStructure: "Turn-based; each turn is push-your-luck sequence until player STOPS or BUSTS.",
  basicRules: [
    { title: "Roll 4 dice, pair into 2 sums", body: "After each roll, arrange 4 dice into 2 pairs; each pair sum indicates a column to advance." },
    { title: "Max 3 runners per turn", body: "Up to 3 columns can have active runners in one round." },
    { title: "Bust = lose all round progress", body: "If unable to advance any active runner column (or open new one within 3-column limit), lose all runners." },
  ],
  advancedRules: [
    { title: "Column ownership on claim", body: "Reaching column top permanently claims it; other players cannot advance that column further." },
    { title: "Column probability curve", body: "Column 7 = 6/36 probability per roll = tallest; 2/12 = 1/36 each = shortest. Understanding curve = core skill." },
    { title: "STOP timing decision", body: "Every roll after establishing a runner, decide: STOP (bank progress) or PUSH (risk bust)." },
  ],
  scoring: {
    summary: "First to claim 3 columns wins.",
    winCondition: "3 columns claimed.",
    breakdown: [{ action: "Column claim", points: "1 column-win each" }],
  },
  penalties: [
    { title: "Bust", body: "All round runners removed; permanent column-progress preserved." },
    { title: "Stopping too early", body: "Lower expected value than pushing when odds favor." },
  ],
  positions: [{ name: "Can't Stop Player", role: "Solo player racing to claim 3 columns.", count: 1 }],
  officiating: { officials: ["Group consensus"], summary: "No formal officials." },
  governingBodies: [
    { name: "Ravensburger (current publisher)", founded: 1883, headquarters: "Ravensburg, Germany" },
    { name: "Eagle-Gryphon Games (US publisher)", founded: 1999, headquarters: "Idaho, USA" },
  ],
  majorCompetitions: [
    { name: "Not applicable — casual classic", frequency: "n/a", founded: 1980, region: "n/a" },
  ],
  countriesPlayed: ["US", "DE", "GB", "FR", "IT", "ES", "JP", "AU", "BR"],
  famousAthletes: ["Sid Sackson (designer)"],
  records: [
    { title: "Published 1980", holder: "Parker Brothers", value: "First published 1980 by Parker Brothers; multiple reprints since", year: 1980 },
    { title: "Sid Sackson design legacy", holder: "Sid Sackson", value: "One of Sid Sackson's most enduring designs alongside Acquire; consistently BGG Top 500 four decades later", year: 2020 },
    { title: "Iconic push-your-luck template", holder: "Board game design", value: "Considered defining push-your-luck design; template referenced by many later push-your-luck games", year: 2000 },
  ],
  variants: ["cant-stop-standard", "cant-stop-express-shorter-columns"],
  relatedSports: ["farkle", "zombie-dice", "yahtzee", "quixx"],
  skills: ["probability estimation", "risk-reward decision-making", "opponent-column blocking"],
  strategies: [
    { title: "Focus on middle columns (6, 7, 8)", body: "Higher probability columns (7 tallest but easiest to advance) — commit early; harder short columns (2, 3, 11, 12) worth targeting when close to claim." },
    { title: "Block opponent claims", body: "If opponent 1-2 spaces from claiming a column, race to top first to permanently block." },
    { title: "Stop threshold vs push threshold", body: "Statistical rule of thumb: STOP if bust probability > 40%; PUSH if < 30%." },
  ],
  terminology: [
    { term: "Runner", meaning: "Temporary white pawn tracking round progress" },
    { term: "Bust", meaning: "Failing to advance any runner = lose round progress" },
    { term: "Claim / Column-top", meaning: "Reaching column top = permanent ownership" },
    { term: "Push-your-luck", meaning: "Genre named for game's core decision loop" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Focus on 6, 7, 8 columns", body: "Learn probability curve; safe columns to advance." }] },
    { level: "intermediate", steps: [{ title: "Mixed short + long column strategy", body: "Balance middle-column safety with short-column claim races." }] },
    { level: "advanced", steps: [{ title: "Expected-value push/stop calculation", body: "Calculate exact bust vs advance probability per turn." }] },
  ],
  faq: [
    { question: "How does Can't Stop compare to Yahtzee?", answer: "Both are dice games but different genres. Yahtzee is scorecard-based (fill categories per game). Can't Stop is race-based (claim 3 columns) with iconic push-your-luck decision loop at every turn." },
    { question: "Is Can't Stop mostly luck?", answer: "Push-your-luck games balance luck (dice) + skill (decision-making). Better players consistently outperform worse players over 5-10 game sessions — probability estimation + stop-vs-push discipline matters." },
  ],
  wikipediaTitle: "Can't Stop (board game)",
  sources: [{ label: "BoardGameGeek — Can't Stop", url: "https://boardgamegeek.com/boardgame/41/cant-stop", publisher: "BoardGameGeek" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default cantStop;
