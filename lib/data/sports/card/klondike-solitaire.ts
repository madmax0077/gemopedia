import type { Sport } from "@/lib/types";

export const klondikeSolitaire: Sport = {
  id: "klondike-solitaire",
  slug: "klondike-solitaire",
  name: "Klondike Solitaire",
  officialName: "Klondike Solitaire",
  aliases: ["Klondike", "Solitaire", "Patience (UK)"],
  shortDescription:
    "Classic single-player card game. THE 'Solitaire' most people know. Named for Klondike Gold Rush (1896-99). Popularized globally by MICROSOFT WINDOWS SOLITAIRE (1990) — likely the most-played card game in history. 7 tableau piles + foundations built A → K by suit. Draw-3 (harder) or Draw-1 (easier) variants. ~30-40% win rate with skill.",
  longDescription:
    "Klondike Solitaire is THE ARCHETYPAL SOLITAIRE game — when someone says 'Solitaire' unqualified, they mean Klondike. Named for KLONDIKE GOLD RUSH (1896-1899, Yukon Canada) where miners reportedly played it. POPULARIZED GLOBALLY by MICROSOFT WINDOWS SOLITAIRE (bundled 1990 with Windows 3.0) — arguably MOST-PLAYED CARD GAME IN HISTORY (100s of millions of players). Original Windows Solitaire developed by WES CHERRY (Microsoft intern) to teach mouse dragging skills. Standard 52-card deck. SETUP: 7 TABLEAU PILES (1-7 cards descending, top face-up); FOUR FOUNDATIONS (build up A → 2 → ... → K by suit); STOCK PILE (remaining 24 cards). GAMEPLAY: move cards to build foundations A → K in suit; tableau piles built DOWN alternating COLOR (red on black on red). KINGS fill empty tableau spaces. Turn stock cards 1-at-time (DRAW-1, easier) or 3-at-time (DRAW-3, harder, standard Windows version). WIN = all cards to foundations. WIN RATE: ~80% with perfect play (draw-1); ~30-40% with skilled draw-3 (many hands unwinnable). VARIANTS: SPIDER, FREECELL, PYRAMID, YUKON, GOLF also popular. CULT CLASSIC — Microsoft Solitaire Collection still 100M+ Windows installs.",
  category: "card-games",
  subCategory: "single-player solitaire card game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "global",
  countryOfOrigin: "CA",
  regionOfOrigin: "Yukon Canada (Klondike region, 1890s)",
  estimatedOrigin: "Originated Klondike Gold Rush 1896-99; documented in Foster's Complete Hoyle 1897; Microsoft Solitaire 1990 globalized",
  players: { min: 1, max: 1, note: "Single-player only." },
  field: { surfaceName: "table + card layout", dimensions: "layout requires ~2ft × 1.5ft space", description: "7 tableau piles + 4 foundation spaces + stock/waste pile." },
  equipment: [
    { name: "Standard 52-card deck", description: "€2-10; any standard deck works" },
    { name: "Or digital app (Microsoft, Solitaired, Solitr)", description: "Free" },
  ],
  duration: { approximateMinutes: 5, structure: "3-10 min per game; unwinnable hands quicker." },
  objective: "Move all 52 cards to 4 foundations (A → K in each suit).",
  basicRules: [
    { title: "Setup: 7 tableau piles (1 card, 2 cards, ..., 7 cards)", body: "Top card face-up; rest face-down. Remaining 24 cards = stock pile." },
    { title: "Foundations built UP A → 2 → ... → K by suit", body: "One foundation per suit (4 total)." },
    { title: "Tableau piles built DOWN alternating color", body: "Red 8 on Black 9 on Red 10, etc." },
    { title: "Kings can move to empty tableau spaces", body: "Kings + sequences below start empty columns." },
    { title: "Draw from stock (1 at time = easier; 3 at time = harder)", body: "Turn stock cards; use top of waste pile." },
    { title: "Win: all cards on foundations", body: "~80% win rate draw-1; ~30-40% draw-3." },
  ],
  scoring: {
    summary: "Not competitive typically. Some scored versions (Vegas Solitaire) bet + score cards.",
    breakdown: [
      { action: "Standard scoring (Windows)", points: "10 pts per card moved to foundation; time penalty" },
      { action: "Vegas scoring", points: "$52 buy-in; $5 per card to foundation; profit if all 52" },
      { action: "Win", points: "Solving the game = success" },
    ],
    winCondition: "All 52 cards on foundations (A→K in each suit).",
  },
  governingBodies: [
    { name: "No official governing body", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "Microsoft Solitaire Collection Star Club", frequency: "ongoing", founded: 2016, region: "worldwide" },
    { name: "Speed solitaire competitions (informal)", frequency: "ongoing", founded: 1990, region: "worldwide" },
  ],
  countriesPlayed: ["global — likely most-played card game in history via Windows"],
  famousAthletes: [
    "Wes Cherry (USA) — Microsoft intern who created Windows Solitaire 1990",
    "Susan Kare (USA) — Windows Solitaire card face designer",
  ],
  variants: [
    "klondike-draw-1-easier",
    "klondike-draw-3-standard-harder",
    "vegas-solitaire-scored-money-version",
    "spider-solitaire-2-decks-suit-runs",
    "freecell-open-4-free-cells",
    "pyramid-solitaire-pair-13s",
    "yukon-solitaire-no-stock-pile",
    "golf-solitaire-tableau-to-waste",
    "microsoft-solitaire-collection-modern-collection",
  ],
  relatedSports: ["freecell", "spider-solitaire", "pyramid-solitaire", "golf-solitaire", "yukon"],
  skills: ["pattern recognition", "sequential planning", "probability assessment", "patience"],
  strategies: [
    { title: "Move Aces + 2s to foundations ASAP", body: "Frees tableau space + starts foundations." },
    { title: "Uncover face-down cards priority", body: "Every hidden card revealed opens options." },
    { title: "Don't play from stock hastily", body: "Consider tableau plays first; stock is limited." },
    { title: "Empty column reserve for Kings", body: "Don't fill with lesser cards if King coming." },
    { title: "Draw-3: know which cards are inaccessible", body: "Order of stock pile matters; some cards unreachable if not planned." },
  ],
  terminology: [
    { term: "Tableau", meaning: "7 columns of cards below foundations." },
    { term: "Foundation", meaning: "4 piles building A→K by suit." },
    { term: "Stock", meaning: "Remaining draw pile after setup." },
    { term: "Waste", meaning: "Discard pile from stock; top usable." },
    { term: "Cascade", meaning: "Tableau column of cards." },
    { term: "Draw-1 / Draw-3", meaning: "Cards flipped from stock per draw." },
    { term: "Winnable", meaning: "Hand where solution exists (varies)." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play Microsoft Solitaire (free Windows) OR Solitaired.com", body: "Universal card game — anyone plays casually." },
    ]},
    { level: "intermediate", steps: [
      { title: "Learn to see 2-3 moves ahead", body: "Improves win rate significantly." },
      { title: "Try Draw-3 for challenge", body: "Standard Windows setting; harder win rate." },
    ]},
    { level: "advanced", steps: [
      { title: "Speed solitaire (Windows tracks fastest wins)", body: "Sub-1-minute solutions possible." },
      { title: "Try Spider, FreeCell, Pyramid variants", body: "Related solitaire family." },
    ]},
  ],
  faq: [
    { question: "What is Klondike Solitaire?", answer: "THE ARCHETYPAL SOLITAIRE game — when someone says 'Solitaire,' they mean Klondike. Named for Klondike Gold Rush (1896-99). GLOBALLY POPULARIZED by MICROSOFT WINDOWS SOLITAIRE (1990) — arguably MOST-PLAYED CARD GAME IN HISTORY. Standard 52-card deck; 7 tableau piles + 4 foundations. Move cards to build foundations A→K by suit. Tableau built DOWN alternating color. Draw-1 (easier ~80% win) or Draw-3 (harder ~30-40% win)." },
    { question: "Why is Klondike Solitaire called 'Solitaire' in Windows?", answer: "MICROSOFT WES CHERRY (intern) developed Windows Solitaire 1990 based on Klondike variant. Called simply 'SOLITAIRE' rather than 'Klondike Solitaire' because Klondike is the DEFAULT most people think of. Includes DRAW-1 + DRAW-3 options. Design goal: teach WINDOWS MOUSE DRAG interactions in early GUI era. Shipped with Windows 3.0 → 3.1 → 95 → 98 → XP → and every version since. Considered PRODUCTIVITY KILLER + reason many workers learned computers. Susan Kare designed classic card faces." },
    { question: "What percentage of Klondike hands are winnable?", answer: "APPROXIMATELY 80% of DRAW-1 hands are winnable with PERFECT PLAY. APPROXIMATELY 30-40% of DRAW-3 hands winnable. Real player win rates: 40-50% DRAW-1; 5-15% DRAW-3 (without exhaustive analysis). SOME HANDS PROVABLY UNWINNABLE (mathematical fact). Some solvers analyze specific hands to prove winnable/not. Modern Microsoft Solitaire (Windows 10+) includes 'Winnable Deal' option to guarantee win possible." },
  ],
  wikipediaTitle: "Klondike (solitaire)",
  sources: [
    { label: "Wikipedia — Klondike (solitaire)", url: "https://en.wikipedia.org/wiki/Klondike_(solitaire)", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
