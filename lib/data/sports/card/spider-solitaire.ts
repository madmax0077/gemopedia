import type { Sport } from "@/lib/types";

export const spiderSolitaire: Sport = {
  id: "spider-solitaire",
  slug: "spider-solitaire",
  name: "Spider Solitaire",
  officialName: "Spider Solitaire",
  aliases: ["Spider"],
  shortDescription:
    "Solitaire card game using 2 STANDARD DECKS (104 cards). Build 8 complete runs (K→A) same suit to win. 3 difficulty levels: 1 suit (easy), 2 suits (medium), 4 suits (hard). Popularized by MICROSOFT WINDOWS 98 as SPIDER SOLITAIRE. More complex than Klondike; medium-hard win rates.",
  longDescription:
    "Spider Solitaire is SOLITAIRE CARD GAME using 2 STANDARD DECKS (104 cards). Considered one of the MOST POPULAR SOLITAIRE VARIANTS after Klondike + FreeCell. Origins uncertain (likely 19th century); popularized globally by MICROSOFT WINDOWS 98 SPIDER SOLITAIRE (bundled). GOAL: Build 8 COMPLETE RUNS (K→Q→J→10→9→8→7→6→5→4→3→2→A) SAME SUIT — completed run automatically removed. 3 DIFFICULTY LEVELS: (1) 1 SUIT (spades × 8, ~90% win rate — easy). (2) 2 SUITS (spades + hearts × 4 each, ~50% win rate). (3) 4 SUITS (13 of each, ~30% win rate — hard). SETUP: 10 TABLEAU COLUMNS (54 cards face-down; top card face-up); 50 CARDS remain as STOCK. Play tableau builds DOWN by rank (any suit); COMPLETED SAME-SUIT RUNS auto-removed. When stuck, deal 10 more cards from stock (1 to each column). All columns must have at least 1 card for stock deal. WIN = all 8 same-suit runs collected. Harder than Klondike + more strategic. Cult classic + universally installed via Windows.",
  category: "card-games",
  subCategory: "single-player solitaire (2 decks)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "global",
  countryOfOrigin: "US",
  regionOfOrigin: "Uncertain 19th century; Microsoft Windows 98 globalized",
  estimatedOrigin: "Uncertain 19th century origins; Microsoft Windows 98 Spider Solitaire 1998 for global popularization",
  players: { min: 1, max: 1, note: "Single-player only." },
  field: { surfaceName: "table + card layout", dimensions: "10 columns needing ~3ft × 1.5ft space", description: "10 tableau columns + stock pile." },
  equipment: [
    { name: "2 standard 52-card decks (104 cards total)", description: "€5-15" },
    { name: "Or digital app (Microsoft Solitaire Collection, Spider Solitaire.app)", description: "Free" },
  ],
  duration: { approximateMinutes: 20, structure: "10-30 min per game; 4-suit longer." },
  objective: "Build 8 complete K→A runs same suit; runs auto-removed upon completion.",
  basicRules: [
    { title: "Setup: 10 tableau columns (4 with 6 cards + 6 with 5 cards, all face-down; top face-up)", body: "50 cards remain as stock; dealt 10 more when stuck." },
    { title: "Tableau built DOWN by rank (any suit)", body: "Red 7 on Black 8 legal; Red 7 on Red 8 also legal (unlike Klondike)." },
    { title: "Move sequences of SAME-SUIT descending runs together", body: "Multi-card moves allowed for same-suit sequences." },
    { title: "Empty column can hold any card", body: "No King restriction." },
    { title: "COMPLETED SAME-SUIT K→A run auto-removed", body: "13 cards; goal 8 total (8 × 13 = 104 cards)." },
    { title: "Stock deal: 10 cards (1 per column); all columns need card", body: "5 stock deals available (50 stock cards ÷ 10)." },
  ],
  scoring: {
    summary: "Win/lose. Windows tracks games won + moves + time.",
    breakdown: [
      { action: "Suit sequence completed", points: "Progress toward win (8 needed)" },
      { action: "Windows scoring", points: "500 pts start - 1 per move + 100 per suit completed" },
      { action: "Time bonus", points: "Faster wins score higher" },
    ],
    winCondition: "All 8 same-suit K→A runs completed + removed.",
  },
  governingBodies: [
    { name: "No official governing body", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "Microsoft Solitaire Collection Star Club", frequency: "ongoing", founded: 2016, region: "worldwide" },
    { name: "Spider Solitaire online rankings", frequency: "ongoing", founded: 1998, region: "worldwide" },
  ],
  countriesPlayed: ["global — via Microsoft Windows"],
  famousAthletes: ["Universal cardless solitaire; no famous players"],
  variants: [
    "spider-1-suit-easy",
    "spider-2-suit-medium",
    "spider-4-suit-hard-standard",
    "spiderette-simplified-half-deck-variant",
    "spiderwort-fewer-tableau-columns",
    "gigantic-spider-3-decks-156-cards",
    "microsoft-spider-solitaire-bundled",
  ],
  relatedSports: ["klondike-solitaire", "freecell", "solitaire", "yukon"],
  skills: ["multi-step planning", "same-suit prioritization", "space management", "sequence anticipation"],
  strategies: [
    { title: "Prioritize same-suit sequences", body: "Mixed sequences can't complete runs; build same-suit whenever possible." },
    { title: "Keep empty columns for maneuvering", body: "Empty columns allow moving mixed-suit stacks apart." },
    { title: "Delay stock deals when possible", body: "Only 5 stock deals; save until truly stuck." },
    { title: "Watch for buried Kings", body: "Kings needed at bottom of runs; extract early." },
  ],
  terminology: [
    { term: "Suit run", meaning: "K→A complete run in single suit; auto-removed." },
    { term: "Tableau", meaning: "10 columns of cards." },
    { term: "Stock", meaning: "Remaining cards dealt 10 at time when stuck." },
    { term: "Suit level", meaning: "1/2/4 = number of distinct suits in play." },
    { term: "Foundation", meaning: "Off-play area for completed runs (auto-managed)." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play Microsoft Solitaire Collection Spider (free Windows)", body: "Start 1-suit easy." },
      { title: "Progress to 2-suit medium after 20-30 wins", body: "Learn tactics." },
    ]},
    { level: "intermediate", steps: [
      { title: "4-suit spider (hard)", body: "Requires deep planning." },
    ]},
    { level: "advanced", steps: [
      { title: "Speed solving + win rate improvement", body: "Track statistics in Microsoft app." },
    ]},
  ],
  faq: [
    { question: "What is Spider Solitaire?", answer: "SOLITAIRE CARD GAME using 2 STANDARD DECKS (104 cards). Build 8 COMPLETE RUNS (K→A) SAME SUIT to win — completed run auto-removed. 3 DIFFICULTY LEVELS: 1 SUIT (~90% win rate easy), 2 SUITS (~50% medium), 4 SUITS (~30% hard). 10 tableau columns + stock deals. Popularized by MICROSOFT WINDOWS 98 SPIDER SOLITAIRE. More complex + strategic than Klondike." },
    { question: "How hard is 4-suit Spider Solitaire?", answer: "HARDEST STANDARD SPIDER VARIANT. Win rate WITH PERFECT PLAY: ~30% (analysis by computer solvers). Average human ~5-15% wins. Requires DEEP PLANNING (5-10 moves ahead) + optimal same-suit sequence building + stock deal timing. Compare: 1-suit ~90% win; 2-suit ~50%; 4-suit ~30%. Considered TEST OF SOLITAIRE MASTERY. 4-SUIT MICROSOFT SPIDER STATUS SYMBOL for card game hobbyists — 100+ streak achievement notable." },
    { question: "How is Spider different from Klondike?", answer: "SPIDER = 2 DECKS (104 cards), 10 COLUMNS, BUILD SAME-SUIT RUNS K→A, foundations auto-managed. KLONDIKE = 1 DECK (52 cards), 7 COLUMNS, BUILD FOUNDATIONS A→K BY SUIT, tableau built DOWN ALTERNATING COLOR. Spider more strategic + longer games; Klondike shorter + more luck-based. Both universally popular via Microsoft Windows bundles." },
  ],
  wikipediaTitle: "Spider (solitaire)",
  sources: [
    { label: "Wikipedia — Spider (solitaire)", url: "https://en.wikipedia.org/wiki/Spider_(solitaire)", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
