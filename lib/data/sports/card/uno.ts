import type { Sport } from "@/lib/types";

export const uno: Sport = {
  id: "uno",
  slug: "uno",
  name: "Uno",
  officialName: "UNO",
  aliases: ["Crazy Eights (predecessor)"],
  shortDescription:
    "Family shedding card game with a custom 108-card deck — match colour or number, use action cards to disrupt opponents, and shout 'UNO!' when you have one card left.",
  longDescription:
    "UNO is a shedding-style card game played with a custom 108-card deck, invented by Merle Robbins in Reading, Ohio in 1971. Players (2-10) race to be first to shed all cards from their hand by playing a card matching the top of the discard pile in colour or number, or by playing a wild or action card. Action cards — Skip, Reverse, Draw Two, Wild, Wild Draw Four — add strategic variety. A player about to play their second-to-last card must shout 'UNO!' or be penalised with two cards drawn. Points are scored by the round winner based on cards left in opponents' hands; games are played to 500 points. UNO is one of the best-selling family games in the world and has been produced by Mattel since 1992.",

  category: "card-games",
  subCategory: "shedding game",
  sportType: "mixed",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "Reading, Ohio, USA",
  estimatedOrigin: "1971 (invented by Merle Robbins); mass-produced from 1972; Mattel purchase 1992",

  players: { min: 2, max: 10, note: "Best with 4-6 players; the game scales but strategy differs significantly at 2v2 vs 6+." },
  field: {
    surfaceName: "table",
    dimensions: "Any flat surface — living-room floor or table.",
    description: "A face-down draw pile and a face-up discard pile in the middle; each player has a hand of 7 cards.",
  },
  equipment: [
    { name: "UNO deck", description: "108 cards: 76 number cards (0-9 in four colours) + 24 action cards (Skip, Reverse, Draw Two × 2 per colour) + 8 Wild cards (4 Wild + 4 Wild Draw Four)." },
    { name: "Score pad", description: "Optional pen and paper to track round scores toward the 500-point win.", optional: true },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "A single round lasts 5-15 minutes; a full game to 500 points takes 30-60 minutes.",
    note: "House-rule 'stacking' (Draw Two on Draw Two) is not in the official rules but universally played.",
  },
  objective: "Be the first player to shed all cards from your hand; over multiple rounds, be the first to reach 500 points.",
  matchStructure:
    "Deal 7 cards to each player. Turn the top card face-up on the discard pile to start play. Players take turns clockwise (until a Reverse) playing a card that matches the discard pile by colour, number, or symbol, or play a Wild. If unable to play, draw a card; if playable, play it immediately (optional). When a player is down to one card, they must shout 'UNO!'. The first player to shed all cards wins the round and scores the value of every opponent's remaining hand.",

  basicRules: [
    { title: "Match colour or number", body: "You must play a card that matches the top discard by colour or number/symbol." },
    { title: "Wild cards", body: "Wild cards may be played on any card; the player choosing the colour for the next play." },
    { title: "Action cards", body: "Skip — next player misses a turn. Reverse — direction of play flips. Draw Two — next player draws 2 and misses a turn. Wild Draw Four — next player draws 4 and misses a turn." },
    { title: "Draw when you can't play", body: "If no card in your hand matches, draw one from the pile; play it immediately if legal." },
    { title: "Shouting UNO", body: "When you have one card left, you must shout 'UNO!'. If caught not doing so before the next player's turn, you draw two cards as a penalty." },
    { title: "Round ends", body: "When a player plays their last card. Score the value of all cards remaining in opponents' hands." },
  ],
  advancedRules: [
    { title: "Wild Draw Four legality", body: "Officially a player may only play a Wild Draw Four if they hold no matching-colour card. Challenges are permitted — if you don't have a matching card, the challenger draws 6; if you do, you draw 4." },
    { title: "Wild card at start", body: "If a Wild is flipped as the starting card, the first player chooses the colour." },
    { title: "Wild Draw Four at start", body: "Return the Wild Draw Four to the deck and flip a new card." },
    { title: "House rule: stacking", body: "Not official — some groups allow stacking Draw Two on Draw Two (or Draw Four on Draw Four); if not blocked, all penalties add." },
    { title: "House rule: '7-0 rule'", body: "Playing a 7 lets you swap hands with any opponent; playing a 0 rotates all hands in the direction of play." },
  ],
  scoring: {
    summary: "Round winner scores the total value of every opponent's remaining hand.",
    breakdown: [
      { action: "Number cards (0-9)", points: "face value", note: "0 = 0 pts, 9 = 9 pts." },
      { action: "Action cards (Skip, Reverse, Draw Two)", points: "20 each" },
      { action: "Wild / Wild Draw Four", points: "50 each" },
    ],
    winCondition: "First player to reach 500 points across multiple rounds wins the game.",
  },

  officiating: {
    officials: ["Self-officiated (Mattel Tournament Rules for competition play)"],
    summary: "Recreational play is self-officiated. UNO Tournament Rules add strict interpretations for professional competition.",
  },
  governingBodies: [
    { name: "Mattel, Inc. (rights holder)", founded: 1945, headquarters: "El Segundo, USA", website: "https://www.mattelgames.com/en-us/games/uno" },
    { name: "UNO Championship Series", founded: 2006, headquarters: "worldwide (Mattel-run)" },
  ],
  majorCompetitions: [
    { name: "UNO Championship Series", frequency: "irregular", founded: 2006, region: "USA (Mattel-run)", note: "Prize money up to $200,000." },
    { name: "UNO National Championship (India / other countries)", frequency: "annual", founded: 2018, region: "national" },
  ],
  countriesPlayed: ["US", "IN", "GB", "DE", "FR", "JP", "MX", "BR", "CA", "AU", "IT", "ES"],
  famousAthletes: [
    "N/A — casual family game; no widely-recognised competitive player base",
  ],
  records: [
    { title: "Best-selling card game (worldwide)", holder: "Mattel", value: "150+ million decks sold", year: 2021 },
    { title: "Number of variants / themed editions", holder: "Mattel", value: "150+ themes (Star Wars, Marvel, etc.)", year: 2023 },
  ],

  variants: ["uno-attack", "uno-dare", "uno-flash", "uno-flip", "uno-splash", "uno-showdown", "uno-quatro", "dos"],
  relatedSports: ["crazy-eights", "mau-mau", "dos", "phase-10"],

  skills: [
    "hand management",
    "colour selection strategy",
    "reading opponents",
    "timing action cards",
    "quick reaction (calling UNO)",
    "risk assessment (Wild Draw Four legality)",
  ],
  strategies: [
    { title: "Save Wilds", body: "Hold Wild and Wild Draw Four for the endgame; deploy when you have UNO to prevent counter-play." },
    { title: "Colour-focus", body: "Try to reduce your hand to one dominant colour so any matching card can be played." },
    { title: "Reverse against skipping opponents", body: "Play Reverse to send a Skip or Draw Two back toward the previous opponent." },
    { title: "Bait a UNO call", body: "Sometimes purposely fail to shout UNO to bait opponents into miscalling — controversial house tactic." },
  ],

  terminology: [
    { term: "UNO!", meaning: "The mandatory shout when you have one card left in your hand." },
    { term: "Wild", meaning: "Card playable on any colour; player chooses the next colour." },
    { term: "Wild Draw Four", meaning: "Highest-power card — opponent draws 4 and misses a turn; may be challenged." },
    { term: "Skip", meaning: "Action card — next player misses a turn." },
    { term: "Reverse", meaning: "Action card — direction of play flips (2-player game = Skip effect)." },
    { term: "Draw Two", meaning: "Action card — next player draws 2 cards and misses a turn." },
    { term: "Stacking (house rule)", meaning: "Playing Draw Two on Draw Two; not in official rules but common." },
    { term: "Colour change", meaning: "After a Wild, the next play must match the chosen colour or a Wild." },
    { term: "Round", meaning: "One deal-to-shed cycle; the game is played over multiple rounds to 500 points." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn the deck", body: "Familiarise yourself with the 4 colours, 0-9 numbers and 5 action cards." },
      { title: "Match colour or number", body: "Practise recognising a legal play quickly." },
      { title: "Call UNO", body: "Remember to shout 'UNO!' before playing your second-to-last card." },
      { title: "Play a full 500-point game", body: "Get used to scoring and rotating dealer." },
    ] },
    { level: "intermediate", steps: [
      { title: "Save Wilds", body: "Hold Wild Draw Fours for when you have UNO." },
      { title: "Count opponents' cards", body: "Track opponents' hand sizes and colour focus." },
      { title: "Read the table", body: "Anticipate which colour to change to based on opponents' hand size." },
      { title: "Understand challenges", body: "Learn when to challenge a Wild Draw Four (risk vs reward)." },
    ] },
    { level: "advanced", steps: [
      { title: "Endgame management", body: "In the last few turns, order your plays so a Skip or Reverse lands on the right opponent." },
      { title: "Multi-round strategy", body: "Score-management in tournaments — sometimes force a game-out earlier to close." },
      { title: "House rule adaptations", body: "Adjust to '7-0' or 'stacking' rule variants if the group plays them." },
    ] },
  ],
  faq: [
    { question: "What if I forget to shout UNO?", answer: "If another player catches you before the next player's turn, you must draw 2 cards as a penalty." },
    { question: "Can I stack Draw Twos?", answer: "Not officially — the rules say the next player draws 2 and misses a turn. Stacking is a very common house rule but confirmed as unofficial by Mattel in 2019." },
    { question: "What happens in a 2-player game with Reverse?", answer: "In 2-player games, a Reverse acts as a Skip — the player who plays it takes another turn." },
    { question: "How is the winner decided?", answer: "First player to reach 500 points cumulatively over multiple rounds wins the game." },
    { question: "Can I play a Wild Draw Four whenever?", answer: "Officially only when you have no matching-colour card. Opponents may challenge — if you legally could have played a matching card, you draw 4; if you couldn't, the challenger draws 6." },
  ],

  wikipediaTitle: "Uno (card game)",
  sources: [
    { label: "Wikipedia — Uno (card game)", url: "https://en.wikipedia.org/wiki/Uno_(card_game)", publisher: "Wikipedia" },
    { label: "Mattel — Official UNO Rules", url: "https://service.mattel.com/instruction_sheets/42003pr.pdf", publisher: "Mattel" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
