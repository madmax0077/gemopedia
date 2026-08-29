import type { Sport } from "@/lib/types";

export const patchwork: Sport = {
  id: "patchwork",
  slug: "patchwork",
  name: "Patchwork",
  officialName: "Patchwork (2014, Uwe Rosenberg, Lookout Spiele)",
  aliases: ["Uwe Rosenberg's Patchwork"],
  shortDescription:
    "A tightly-tuned two-player abstract game where players buy irregular fabric polyominoes and stitch them onto their 9×9 quilt board — designed by Uwe Rosenberg in 2014, one of the most highly regarded two-player abstracts in modern hobby gaming.",
  longDescription:
    "Patchwork is a two-player abstract strategy game designed by Uwe Rosenberg and published by Lookout Spiele in 2014. Players compete to build the most valuable 9×9 quilt from irregularly-shaped polyomino pieces. Each turn a player either buys the next, next-next, or next-next-next piece from a circular market (moving the neutral 'token' past pieces they skip) or advances their time token to catch up, collecting a button per empty space passed. Buttons are spent as the currency to buy pieces and also count as end-game victory points; each empty square of the 9×9 board scores −2 points at game end, incentivizing tight packing. A '7×7' bonus button awards +7 points to the first player to fully cover a 7×7 area. The game ends when both players' time tokens reach the center. Patchwork is renowned for its elegant time-buttons dual-resource system, low luck, and 20-30 minute play time. It has spawned multiple spin-offs (Patchwork Doodle, Patchwork Express, Patchwork Americana) and consistently ranks in BoardGameGeek's top 10 two-player abstracts.",
  category: "board-games",
  subCategory: "abstract polyomino tile-drafting (2-player)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "DE",
  regionOfOrigin: "Germany (Lookout Spiele, designed by Uwe Rosenberg)",
  estimatedOrigin: "Published 2014 at Spiel Essen; English edition Mayfair Games 2014",
  players: { min: 2, max: 2, note: "Strictly two players (Doodle variant supports solo + multi)." },
  field: {
    surfaceName: "9×9 personal quilt board + shared circular piece market",
    dimensions: "9×9 grid (81 squares) per player + 33 polyomino pieces (1-6 squares each)",
    description: "Each player has a 9×9 quilt board; pieces are drafted from a circular market of 33 fabric polyominoes arranged around a central time-track spiral.",
  },
  equipment: [
    { name: "2 quilt boards (9×9)", description: "Personal boards where pieces are placed." },
    { name: "33 patch pieces", description: "Polyominoes of varying shapes with button/time costs." },
    { name: "Central time board", description: "Spiral track for the two time tokens." },
    { name: "Buttons (currency + points)", description: "Cardboard buttons in various denominations." },
    { name: "1 special '7×7' bonus tile", description: "Awarded to first to cover a 7×7 area." },
    { name: "5 single-square 'leather patches'", description: "Passed out when specific time squares are reached." },
  ],
  duration: { approximateMinutes: 25, structure: "Continuous play until both time tokens reach the center; ~25 min game length." },
  objective:
    "Score more buttons than your opponent by building the most valuable, most complete quilt — balancing piece cost, button-return frequency, and empty-square penalties.",
  matchStructure:
    "The player whose time token is behind on the spiral takes the next turn. On your turn either: (a) buy one of the three pieces available at the market position, spending buttons + advancing time, then place it on your quilt; or (b) advance your time to just past your opponent, earning 1 button per space moved.",
  basicRules: [
    { title: "Choose 1 of 3 pieces or advance time", body: "You may only buy from the next 3 pieces (clockwise from neutral token)." },
    { title: "Pay button cost", body: "Buttons on the piece = cost paid immediately from your supply." },
    { title: "Advance your time token", body: "Time cost printed on the piece = spaces you advance on the spiral." },
    { title: "Place immediately", body: "Placed pieces cannot overlap or extend off the 9×9 board." },
    { title: "Behind on time = your turn again", body: "The trailing time token always takes the next turn (can lead to consecutive turns)." },
  ],
  advancedRules: [
    { title: "Income phase", body: "When you cross a button icon on the spiral, earn buttons equal to buttons visible on your placed pieces." },
    { title: "Leather patches", body: "First player to cross each leather-patch icon on the spiral takes a 1-square piece to place immediately for free." },
    { title: "7×7 bonus", body: "First to fully cover a 7×7 contiguous area gets a +7 point bonus tile." },
    { title: "End-game scoring", body: "Buttons + 7×7 bonus − 2 per uncovered square = final score." },
  ],
  scoring: {
    summary: "End-game score = buttons on hand + 7 for 7×7 bonus (if earned) − 2 × empty squares. Highest wins.",
    winCondition: "Highest score after both players reach spiral center.",
    breakdown: [
      { action: "Buttons in supply at end", points: "+1 per button" },
      { action: "7×7 bonus tile", points: "+7 (once, first to achieve)" },
      { action: "Empty square", points: "−2 each" },
    ],
  },
  penalties: [
    { title: "Illegal placement", body: "Overlapping or off-board placements must be undone or you lose the piece." },
  ],
  positions: [
    { name: "Player (Quilter)", role: "Manages own 9×9 quilt, button supply, time token.", count: 2 },
  ],
  officiating: { officials: ["None — self-officiated"], summary: "Casual family/hobby game — no formal officials." },
  governingBodies: [
    { name: "Lookout Spiele", founded: 2001, headquarters: "Frankfurt, Germany", website: "https://lookout-spiele.de" },
    { name: "Mayfair Games (English edition, until 2018)", founded: 1981, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "BoardGameGeek Con Patchwork tournaments", frequency: "annual", founded: 2015, region: "Dallas, USA + Essen, DE" },
    { name: "Spiel Essen demo tournaments", frequency: "annual", founded: 2014, region: "Essen, Germany" },
  ],
  countriesPlayed: ["DE", "US", "GB", "FR", "JP", "IT", "ES", "AU"],
  famousAthletes: [
    "Uwe Rosenberg (designer)",
    "Tom Vasel (Dice Tower reviewer, popularized game)",
  ],
  records: [
    { title: "Highest score in casual play", holder: "Various (unofficial)", value: "50+ buttons with completed quilt + 7×7 bonus", year: 2020 },
    { title: "Sales milestone", holder: "Lookout Spiele", value: "1M+ copies sold worldwide by 2020", year: 2020 },
  ],
  variants: ["Patchwork Doodle (2018, roll-and-write)", "Patchwork Express (2017, simplified)", "Patchwork Americana (2020, extended board)"],
  relatedSports: ["azul", "cascadia", "blokus", "hive"],
  skills: [
    "spatial reasoning + tetris-like packing",
    "economic optimization (buttons vs time)",
    "tempo control (skipping time to earn buttons)",
    "opponent denial (buying pieces they want)",
  ],
  strategies: [
    { title: "Prioritize button-income pieces early", body: "Pieces with 2-3 button icons pay for themselves within 2-3 income phases." },
    { title: "Target the 7×7 bonus", body: "The +7 bonus is often the margin of victory — plan a 7×7 zone from turn 1." },
    { title: "Skip time for cash", body: "When ahead on quilt, advance time past opponent for free buttons." },
    { title: "Deny key pieces", body: "Buy pieces you don't need to prevent opponent's ideal placement." },
    { title: "Corner pieces first", body: "Fit awkward L/T-shapes into corners before mid-board." },
  ],
  terminology: [
    { term: "Quilt", meaning: "Your personal 9×9 board." },
    { term: "Button", meaning: "Currency + victory point." },
    { term: "Time token", meaning: "Marker on the shared spiral tracking your turn order + income triggers." },
    { term: "Neutral token", meaning: "Marker on the piece market showing next 3 available pieces." },
    { term: "Leather patch", meaning: "Free 1×1 piece awarded at specific spiral positions." },
    { term: "7×7 bonus", meaning: "+7 tile for first to fully cover a 7×7 area." },
  ],
  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play first game with all rules", body: "Patchwork is easy to teach — start immediately with full rules." },
        { title: "Learn piece values", body: "Every piece has a 'value ratio' = squares covered per (buttons + time)." },
        { title: "Track opponent needs", body: "Watch what pieces they need + consider blocking them." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Master 7×7 planning", body: "Plan the 7×7 zone across your first 5 pieces." },
        { title: "Time-token tempo", body: "Consecutive-turn abuse when trailing on time is the highest-level tactic." },
        { title: "Endgame calculation", body: "In the last 3 moves, calculate exact button vs empty-square math." },
      ],
    },
  ],
  faq: [
    { question: "Is Patchwork solo playable?", answer: "The base game is strictly 2-player. Patchwork Doodle (2018) is the roll-and-write variant that supports solo + multiplayer." },
    { question: "How long is a game?", answer: "20-30 minutes, making it excellent as a filler or lunch-break game." },
    { question: "Is there significant luck?", answer: "Minimal luck — piece order is set for the whole game; strategic depth comes from timing + spatial optimization." },
    { question: "Is Patchwork tournament-viable?", answer: "Not competitively played at large tournaments, but it appears in 2-player abstract circuits at cons like Spiel Essen and BGG.CON." },
  ],
  sources: [
    { label: "BoardGameGeek — Patchwork", url: "https://boardgamegeek.com/boardgame/163412/patchwork", publisher: "BGG" },
    { label: "Wikipedia — Patchwork (board game)", url: "https://en.wikipedia.org/wiki/Patchwork_(board_game)", publisher: "Wikipedia" },
    { label: "Lookout Spiele", url: "https://lookout-spiele.de", publisher: "Lookout Spiele" },
  ],
  wikipediaTitle: "Patchwork (board game)",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
