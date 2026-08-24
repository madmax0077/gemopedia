import type { Sport } from "@/lib/types";

export const solitaire: Sport = {
  id: "solitaire",
  slug: "solitaire",
  name: "Solitaire",
  officialName: "Klondike Solitaire (Patience)",
  aliases: ["Klondike", "Patience"],
  shortDescription:
    "Single-player card game where you arrange a shuffled deck into four ascending suit-ordered foundation piles, working from a tableau of seven descending face-down columns.",
  longDescription:
    "Solitaire (in the UK 'Patience') is a family of single-player card games in which the player attempts to sort a shuffled deck into a target arrangement. The most famous variant, Klondike, spread worldwide after being bundled with Microsoft Windows from 1990. Klondike deals 28 cards into a 7-column tableau of descending face-down count; the remaining 24 cards form the stock, dealt one or three at a time to a waste pile. The player builds four foundation piles from Ace to King (by suit) and orders tableau piles down in alternating colours. Solitaire has hundreds of variants — FreeCell (fully open cards, 100% solvability), Spider (two decks, 10 columns), Pyramid (matching pairs to 13), and many more.",

  category: "card-games",
  subCategory: "solitaire / patience",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "SE",
  regionOfOrigin: "Northern Europe (Sweden, Germany)",
  estimatedOrigin: "Early 19th century (first patience compendia in Germany 1783); Klondike popularised in the Klondike Gold Rush of 1896; Microsoft bundling 1990",

  players: { min: 1, max: 1, note: "Single-player game; multi-player 'competitive Solitaire' (Nertz) is a separate variant." },
  field: {
    surfaceName: "table",
    dimensions: "Any flat surface — physical cards or a screen.",
    description: "Tableau (7 columns, 28 face-down cards + 7 face-up), stock (24 cards), waste pile, and 4 foundation slots.",
  },
  equipment: [
    { name: "Standard 52-card deck", description: "Regular French-suited deck (spades, hearts, diamonds, clubs); no jokers." },
    { name: "Playing surface", description: "Table or app — Windows Solitaire, Solitaired.com, Microsoft Solitaire Collection, physical cards." },
  ],
  duration: {
    approximateMinutes: 8,
    structure: "Single game 3-15 minutes; a well-drawn deal can be won in 3 minutes, a stuck deal abandoned in 5-10 minutes.",
    note: "Approximately 79% of Klondike deals are solvable with perfect play; average human solve rate is ~35%.",
  },
  objective: "Move all 52 cards into the four foundation piles, sorted by suit from Ace at the bottom to King on top.",
  matchStructure:
    "Set up the tableau: 7 columns, first with 1 card, second with 2, up to the seventh with 7 cards. Only the top card of each column is face-up. The remaining 24 cards form the stock. Play by moving cards between tableau columns (in descending alternating colours), from the tableau to foundations (ascending same-suit), from stock to waste, and from waste to tableau or foundations. When you turn over a face-down card, it becomes available. Game ends when all 52 cards are on the foundations (win) or no moves remain (loss).",

  basicRules: [
    { title: "Tableau builds", body: "Build the 7 tableau piles down in alternating colours (e.g., black 8 on red 9). Only Kings may be placed in empty columns." },
    { title: "Foundation builds", body: "Build the 4 foundations up by suit, starting with Ace and ending with King." },
    { title: "Stock and waste", body: "Turn stock cards (1 or 3 at a time) to the waste pile; only the top waste card is playable." },
    { title: "Moving stacks", body: "You may move a sequence of cards from one tableau column to another as long as the sequence remains in descending alternating colours." },
    { title: "Face-down turnover", body: "When a face-down card becomes the topmost card of its column, turn it face-up." },
    { title: "Foundation-to-tableau", body: "You may take a card back from the foundation to the tableau if it helps (some variants disallow this)." },
  ],
  advancedRules: [
    { title: "Draw 1 vs Draw 3", body: "Draw 1 (turn one card at a time through the stock) is easier and higher-solvability; Draw 3 (turn 3 cards, use top) is the classic harder version." },
    { title: "Redeals", body: "Windows Solitaire Draw 3 allows unlimited redeals; Vegas Solitaire is one deal-through only." },
    { title: "Vegas scoring", body: "Pay $52 for the deck; earn $5 for each card moved to the foundations. Break-even is the whole deck." },
    { title: "Timing bonus", body: "Faster completion earns bonus score; classic Windows Solitaire timing formula rewards sub-3-minute wins." },
    { title: "Auto-complete", body: "When only foundations moves remain, most computer versions auto-play them." },
  ],
  scoring: {
    summary: "Two scoring systems: Standard (points for foundation moves and speed) or Vegas (cash equivalents).",
    breakdown: [
      { action: "Card to foundation", points: "+10 (Standard) / +$5 (Vegas)" },
      { action: "Card from waste to tableau", points: "+5 (Standard)" },
      { action: "Turn face-down card", points: "+5 (Standard)" },
      { action: "Card from foundation to tableau", points: "-15 (Standard)" },
      { action: "Time bonus (< 3 min)", points: "700,000 / time (Standard)", note: "Classic Windows formula." },
    ],
    winCondition: "Move all 52 cards to the four foundations; alternatively, hit a positive Vegas cash total.",
  },

  officiating: {
    officials: ["Self-officiated"],
    summary: "Single-player game; scoring managed by app or self-tracked.",
  },
  governingBodies: [
    { name: "Microsoft (Klondike bundling)", founded: 1975, headquarters: "Redmond, USA", website: "https://www.microsoft.com/en-us/p/microsoft-solitaire-collection" },
  ],
  majorCompetitions: [
    { name: "Microsoft Solitaire Collection Star Club", frequency: "monthly", founded: 2016, region: "worldwide (in-app)" },
  ],
  countriesPlayed: ["US", "GB", "DE", "FR", "JP", "IN", "BR", "CN", "RU", "CA", "AU", "MX"],
  famousAthletes: [
    "N/A — casual single-player game; competitive Solitaire is niche",
  ],
  records: [
    { title: "Estimated Windows Solitaire users (peak)", holder: "Microsoft", value: "400+ million users", year: 2019 },
    { title: "Fastest Klondike Solitaire completion (public record)", holder: "Various speed-runners", value: "under 30 seconds (typing keyboard shortcuts)", year: 2020 },
    { title: "Best-provably-solvable-deal", holder: "Solvers (Fanucci et al.)", value: "~79% Klondike Draw-3, ~82% Draw-1", year: 2007 },
  ],

  variants: ["klondike", "freecell", "spider", "pyramid", "tri-peaks", "yukon", "canfield", "forty-thieves", "nertz"],
  relatedSports: ["freecell", "spider-solitaire", "pyramid-solitaire"],

  skills: [
    "spatial reasoning",
    "planning several moves ahead",
    "recognising when to draw from stock vs move tableau",
    "prioritising which face-down cards to reveal first",
    "patience and persistence",
  ],
  strategies: [
    { title: "Reveal the biggest column first", body: "Prioritise moves that turn over cards from the 7-card column (most hidden cards)." },
    { title: "Don't rush foundations", body: "Sometimes keeping a low card in the tableau helps place other cards; not everything should go to foundation immediately." },
    { title: "Kings on empty columns", body: "Aim to have a King ready when a column empties — otherwise the column is dead until one arrives." },
    { title: "Track colour balance", body: "Keep alternating colours balanced in the tableau so stacks can grow." },
  ],

  terminology: [
    { term: "Tableau", meaning: "The 7 columns of cards laid out at the start." },
    { term: "Foundation", meaning: "The 4 target piles built by suit from Ace to King." },
    { term: "Stock", meaning: "The face-down pile of remaining cards after the tableau deal." },
    { term: "Waste", meaning: "The face-up pile where stock cards are turned; only the top card is playable." },
    { term: "Draw 1 / Draw 3", meaning: "Turn one card or three cards at a time from the stock." },
    { term: "Klondike", meaning: "The most famous Solitaire variant; the default game bundled with Windows." },
    { term: "Vegas rules", meaning: "One deal-through only; scoring in dollars; classic 'casino' variant." },
    { term: "Auto-move", meaning: "Automatic movement of cards to foundations when no other move affects them." },
    { term: "Stuck", meaning: "State where no legal moves remain and the game cannot be won." },
    { term: "Face-down / face-up", meaning: "Cards start face-down in tableau; turn face-up when they become the top of a column." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Deal the tableau", body: "7 columns, first with 1 card, then 2, etc., with only the top card of each face-up." },
      { title: "Build down in tableau", body: "Alternating red-black descending sequences (e.g., black 8 on red 9)." },
      { title: "Build up on foundations", body: "Same suit, ascending from Ace." },
      { title: "Play the stock", body: "Turn one (or three) at a time; use the top waste card if it fits." },
    ] },
    { level: "intermediate", steps: [
      { title: "Prioritise turnovers", body: "Play to reveal face-down cards, especially from tall columns." },
      { title: "Save Kings for empty columns", body: "Don't leave a column empty until you have a King ready." },
      { title: "Draw-3 techniques", body: "In Draw-3, plan multi-card sequences from the waste that reveal buried cards." },
      { title: "Undo strategically", body: "In app play, use undo to test moves before committing." },
    ] },
    { level: "advanced", steps: [
      { title: "Perfect play recognition", body: "Learn common patterns that make a deal unwinnable — save time." },
      { title: "Vegas optimisation", body: "Focus on high-value early foundation moves and stop when EV turns negative." },
      { title: "Timing runs (Microsoft)", body: "Keyboard-shortcut speedruns for the classic timing bonus." },
    ] },
  ],
  faq: [
    { question: "Is every Solitaire deal winnable?", answer: "No — approximately 79% of Draw-3 and 82% of Draw-1 Klondike deals are solvable with perfect play. Many casual deals hit an unwinnable state." },
    { question: "Where did Solitaire come from?", answer: "First recorded in Baltic/Nordic Europe in the late 1700s; some historians trace it further to French court games. Klondike was popularised during the 1896 Klondike Gold Rush." },
    { question: "Why is Solitaire so popular?", answer: "Since Microsoft bundled it with Windows 3.0 in 1990, it has been on nearly every PC — making it one of the most-played games in history." },
    { question: "What's the difference between Draw-1 and Draw-3?", answer: "Draw-1 turns one card from the stock at a time (easier); Draw-3 turns three cards but only the top is playable (harder, classic)." },
    { question: "Is FreeCell always winnable?", answer: "Almost — 32,000 canonical FreeCell deals in Microsoft Windows have all been solved except deal #11982." },
  ],

  wikipediaTitle: "Klondike (solitaire)",
  sources: [
    { label: "Wikipedia — Klondike (solitaire)", url: "https://en.wikipedia.org/wiki/Klondike_(solitaire)", publisher: "Wikipedia" },
    { label: "Wikipedia — Patience (game)", url: "https://en.wikipedia.org/wiki/Patience_(game)", publisher: "Wikipedia" },
    { label: "Microsoft Solitaire Collection", url: "https://www.microsoft.com/en-us/p/microsoft-solitaire-collection", publisher: "Microsoft" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
