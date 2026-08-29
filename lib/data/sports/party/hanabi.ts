import type { Sport } from "@/lib/types";

export const hanabi: Sport = {
  id: "hanabi",
  slug: "hanabi",
  name: "Hanabi",
  officialName: "Hanabi (2010, Antoine Bauza, Cocktail Games / Abacus Spiele)",
  aliases: ["Hanabi: A Fireworks Party"],
  shortDescription:
    "A landmark cooperative card game where 2-5 players hold cards facing outward — you see everyone else's hand but not your own — and use limited hints to build stacks of colored fireworks. 2013 Spiel des Jahres winner.",
  longDescription:
    "Hanabi is a 2010 cooperative card game designed by Antoine Bauza (7 Wonders, Ghost Stories) and originally published in France by Cocktail Games. The game reverses the normal card-game paradigm — you hold your cards facing outward so all other players can see them, but you cannot see your own. The team collectively tries to build 5 firework stacks (5 suits: red, yellow, green, blue, white; numbers 1-5) in ascending order. On your turn, you either: (a) give a color OR number clue about one card to another player (using a limited pool of 8 clue tokens), (b) discard a card to regain a clue token, or (c) play a card from your hand hoping it advances a firework stack. Mistakes accumulate 'fuse' tokens; 3 fuses = game over. Won 2013 Spiel des Jahres and became a benchmark for cooperative game design. Multiple variants exist: Hanabi Deluxe (tiles), Hanabi Rainbow (6th suit), Hanabi Multicolour. Widely studied in AI research (self-play cooperation is a challenging problem).",
  category: "party-games",
  subCategory: "cooperative card / deduction (2-5 players)",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (Cocktail Games); international via R&R Games, Abacus Spiele",
  estimatedOrigin: "Published 2010; Spiel des Jahres 2013 winner",
  players: { min: 2, max: 5, note: "3-4 is optimal; 5 hardest due to smaller hand size." },
  field: {
    surfaceName: "Shared table with firework stacks + clue/fuse tokens",
    dimensions: "5 firework stacks (color) + discard pile + hand cards",
    description: "Central play area with 5 firework color stacks; each player holds cards facing outward on the table." },
  equipment: [
    { name: "50 firework cards", description: "5 colors × 10 cards each (3× '1', 2× '2/3/4', 1× '5')." },
    { name: "8 clue tokens (blue chips)", description: "Regenerate on discard; spent for hints." },
    { name: "3 fuse tokens (red)", description: "Accumulate on misplay; 3 = game over." },
    { name: "Card holders (optional)", description: "Helps hold cards facing outward." },
    { name: "Rainbow expansion cards (optional)", description: "6th color for harder variants." },
  ],
  duration: { approximateMinutes: 30, structure: "Play until deck exhausted + one final round; ~25-35 min." },
  objective:
    "Collectively build 5 color-stacked fireworks (1→5 in each color) for maximum score of 25 (perfect); without accumulating 3 fuse tokens.",
  matchStructure:
    "Deal cards face-out (5 cards for 2-3p, 4 cards for 4-5p). Each turn take exactly 1 action: (1) Give clue (spend 1 blue token), (2) Discard (regain 1 blue token, draw new), (3) Play card (advance stack OR add 1 red fuse). Continue until deck exhausts + one final round OR 3rd fuse triggers game end.",
  basicRules: [
    { title: "Cards face outward", body: "You never see your own cards; teammates see yours." },
    { title: "Three action choices", body: "Clue, discard, OR play — exactly one per turn." },
    { title: "Clues are strict", body: "'Point to ALL red cards' or 'ALL twos in your hand' — cannot lie or partial." },
    { title: "Playing a card", body: "If it's the next number for its color stack, it plays; else adds fuse + discards." },
    { title: "3 fuses = game over", body: "Game ends immediately at 3rd fuse; score whatever fireworks completed." },
  ],
  advancedRules: [
    { title: "Meta-conventions", body: "Community developed 'H-conventions': implicit rules about what clue orders mean." },
    { title: "Rainbow variant", body: "6th color acts as 'any color' clue-wise; much harder." },
    { title: "Hanabi 5's", body: "Only 1 copy of each '5' — protecting them is critical." },
    { title: "Bombs = fuses", body: "Some editions call fuse 'bomb tokens'." },
    { title: "Score levels", body: "Score 25 = 'legendary'; 20-24 = 'excellent'; 15-19 = 'honorable'." },
  ],
  scoring: {
    summary: "Total value of top card of each of 5 firework stacks = score (max 25 = perfect).",
    winCondition: "Highest possible score (25 = perfect); no true 'winning' vs losing — cooperative achievement.",
    breakdown: [
      { action: "Each completed firework (5-card stack)", points: "+5 (max)" },
      { action: "Partial firework (top card)", points: "Top card value (1-4)" },
      { action: "3 fuses triggered", points: "Game ends, score whatever built" },
    ],
  },
  penalties: [
    { title: "Misplay", body: "Wrong card played = 1 fuse token." },
    { title: "Discarded critical card (like a 5)", body: "That color stack cannot be completed." },
    { title: "Communication outside allowed clues", body: "Convention violation (self-enforced)." },
  ],
  positions: [
    { name: "Player", role: "Manages own hand blindly, gives clues, plays or discards.", count: 5 },
  ],
  officiating: { officials: ["None"], summary: "Self-enforced conventions." },
  governingBodies: [
    { name: "Cocktail Games", founded: 2004, headquarters: "France" },
    { name: "R&R Games (US publisher)", founded: 1997, headquarters: "USA" },
    { name: "Abacus Spiele (DE publisher)", founded: 1990, headquarters: "Germany" },
  ],
  majorCompetitions: [
    { name: "Spiel des Jahres 2013 (Winner)", frequency: "once", founded: 2013, region: "Germany" },
    { name: "Hanabi AI Challenge (research)", frequency: "annual", founded: 2019, region: "worldwide academic — DeepMind + others" },
  ],
  countriesPlayed: ["FR", "DE", "US", "GB", "IT", "ES", "JP", "AU", "CN"],
  famousAthletes: [
    "Antoine Bauza (designer, 7 Wonders + Takenoko)",
    "Christophe Swal (art)",
  ],
  records: [
    { title: "Spiel des Jahres 2013", holder: "Hanabi", value: "Winner", year: 2013 },
    { title: "Best-known perfect score frequency", holder: "Various experienced groups", value: "25/25 achieved by expert teams in ~30-40% of games", year: 2020 },
    { title: "DeepMind's Hanabi AI benchmark", holder: "Facebook AI Research + Google", value: "State-of-the-art self-play AI ~24.9/25 average", year: 2022 },
  ],
  variants: ["Hanabi Rainbow (6-color)", "Hanabi Deluxe (tiles)", "Hanabi Multicolour", "Superflash (harder rules)"],
  relatedSports: ["the-mind", "the-crew", "sky-team", "codenames-duet"],
  skills: [
    "deductive reasoning",
    "clue efficiency",
    "convention-following",
    "memory (tracking what's been said + discarded)",
    "team synchronization",
  ],
  strategies: [
    { title: "Learn H-conventions", body: "Community standardized 'first playable = next play' etc. Huge score boost." },
    { title: "Protect fives", body: "Never discard a 5 unless the stack is already complete." },
    { title: "Number clues efficient", body: "'ONE' clue can indicate multiple playable cards." },
    { title: "Don't hoard clues", body: "8 clues is often not enough — discard to regenerate." },
    { title: "Late-game count", body: "Track remaining deck + which cards essential to reach 25." },
  ],
  terminology: [
    { term: "H-group conventions", meaning: "Community-standardized meaning of clue orders." },
    { term: "Fuse", meaning: "Red token accumulated on misplay; 3 = game over." },
    { term: "Clue token", meaning: "Blue chip; spent to give hint, regenerated on discard." },
    { term: "Playable card", meaning: "Card that would advance a stack next." },
    { term: "Critical card", meaning: "Card whose loss makes score-25 impossible (e.g. all 5s)." },
    { term: "Finesse", meaning: "Advanced convention: single clue plays 2 cards." },
  ],
  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play once with no conventions", body: "Learn the mechanics + limitations." },
        { title: "Score 15+ = solid rookie", body: "Anything above 15 is good for first plays." },
        { title: "Learn basic H-conventions", body: "Reference the online H-Group primer for standard clue meanings." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Master H-group finesse", body: "Coordinated clues that play 2-3 cards from one hint." },
        { title: "Play rainbow variant", body: "6-color variant is significantly harder." },
        { title: "Compete in Hanab.live online", body: "Community-run online play with expert players." },
      ],
    },
  ],
  faq: [
    { question: "How is Hanabi different from Codenames?", answer: "Both cooperative with limited communication, but Hanabi is deduction + memory driven, whereas Codenames is word-association." },
    { question: "Can I play Hanabi with 2 players?", answer: "Yes — 2-player Hanabi is challenging but rewarding; use 5-card hands." },
    { question: "What's the H-Group?", answer: "The Hyphen-ated Group is an online community that standardized advanced Hanabi conventions for optimal play." },
    { question: "How long to master?", answer: "~10-20 games to feel comfortable; 50+ games with H-Group conventions to reach expert level." },
    { question: "Is there a good online version?", answer: "Yes — Hanab.live is the free official community platform with lobbies + tutorials." },
  ],
  sources: [
    { label: "BoardGameGeek — Hanabi", url: "https://boardgamegeek.com/boardgame/98778/hanabi", publisher: "BGG" },
    { label: "Wikipedia — Hanabi (card game)", url: "https://en.wikipedia.org/wiki/Hanabi_(card_game)", publisher: "Wikipedia" },
    { label: "H-Group conventions", url: "https://hanabi.github.io", publisher: "H-Group community" },
    { label: "Hanab.live", url: "https://hanab.live", publisher: "Hanab.live" },
  ],
  wikipediaTitle: "Hanabi (card game)",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
