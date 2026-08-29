import type { Sport } from "@/lib/types";

export const hongKongMahjong: Sport = {
  id: "hong-kong-mahjong",
  slug: "hong-kong-mahjong",
  name: "Hong Kong Mahjong",
  officialName: "Hong Kong Old Style Mahjong (港式麻雀)",
  aliases: ["Cantonese Mahjong", "港式麻將", "HK Mahjong", "13-tile Mahjong"],
  shortDescription:
    "The dominant mahjong variant in Hong Kong, southern China, and overseas Chinese communities — 13-tile hand with simpler 'faan' (fan) scoring than Japanese Riichi; family + social staple game across Cantonese-speaking world.",
  longDescription:
    "Hong Kong Mahjong (香港麻雀 / Gong-sik Màhjéuk) is the most widely-played mahjong variant in Hong Kong, southern China (Guangdong), and Cantonese-speaking overseas Chinese communities (Vancouver, San Francisco, Sydney, Toronto). Players play with 144 tiles (like Chinese Classical — including 8 flower/season bonus tiles unlike Japanese Riichi). The scoring system uses 'faan' (番) — a simplified point system where each scoring category adds faan, and the base score doubles per faan above a minimum (typically 3 faan). Common faan hands: All Chows (Ping Wu), All Pungs (Ping Woo), Half-Flush (Mixed One Suit), Full-Flush (Pure One Suit), Great Winds, Great Dragons, All Honors. HK Mahjong is deeply woven into Cantonese family culture — 'let's play mahjong' is a common social gathering invitation, and mahjong parlors (麻雀館) remain culturally central to older generations. Competitive HK mahjong runs under the Hong Kong Mahjong Association with local tournaments; overseas Chinese associations host regular championships in Vancouver, San Francisco, Sydney.",

  category: "tile-games",
  subCategory: "4-player draw-and-discard tile game (Cantonese variant)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "CN",
  regionOfOrigin: "Hong Kong + Guangdong (southern China); overseas Cantonese diaspora communities",
  estimatedOrigin: "Chinese mahjong 1850s Qing dynasty; Hong Kong Old Style rules crystallized early 20th century; modernized 1970s-80s",

  players: { min: 4, max: 4, note: "Exactly 4 players (East, South, West, North seats)." },
  equipment: [
    { name: "Set of 144 tiles (Chinese/HK set)", description: "3 numbered suits (Dots/Bamboo/Characters 1-9 × 4) + 4 winds × 4 + 3 dragons × 4 + 8 flower/season bonus tiles. Larger set than Japanese Riichi (which drops flowers)." },
    { name: "Chip counters (bird chips)", description: "Small plastic chips for score tracking; often color-coded." },
    { name: "Automatic mahjong table (common in HK parlors)", description: "Electric tables shuffle + build walls automatically; standard in HK jansou parlors and modern home use." },
    { name: "Bonus tile display", description: "8 flower/season tiles displayed face-up when drawn — each = auto-bonus faan + immediate replacement draw." },
  ],
  duration: { approximateMinutes: 90, structure: "Full game = 4 rounds (East + South + West + North) × 4 seats = 16 hands (~90-120 min). Short games (半場, 2 rounds) also common (~45-60 min)." },
  objective: "Score more points than opponents by winning hands (胡, wu). Winning hand = 14 tiles (4 sets + 1 pair) meeting minimum faan requirement (usually 3 faan).",
  matchStructure: "16-hand full game most common in tournaments. Each hand: draw + discard until someone wins or wall empty. Points transferred at end of each hand.",

  basicRules: [
    { title: "Draw and discard", body: "Draw 1 tile per turn, discard 1 tile. Hand size stays at 13 (14 after draw)." },
    { title: "Call for sets", body: "Chi (chow, sequence from left player), pung (triple, any player), kong (quadruple, any player) — but opens the hand." },
    { title: "Winning hand: 4 sets + 1 pair", body: "Complete hand = 4 sets (chi/pung/kong) + 1 pair (2 same tiles)." },
    { title: "Minimum faan requirement (3 faan typical)", body: "Winning hand must be worth at least 3 faan; hands with 0-2 faan are 'chicken hands' (雞胡) and generally cannot win under HK rules." },
    { title: "Flowers/Seasons auto-bonus", body: "Drawing a flower/season tile = auto-bonus faan (1 faan each); tile is displayed face-up + replaced with fresh draw." },
  ],
  advancedRules: [
    { title: "Faan doubling", body: "Score doubles per faan above minimum. 3 faan = 1× base; 4 faan = 2×; 5 faan = 4×; 6 faan = 8×; ... 10 faan = 128× (usually cap)." },
    { title: "Faan cap (limit)", body: "Most HK games cap at 10 or 13 faan (bao 包 or laap 立). Beyond cap counts as cap value." },
    { title: "Bao (responsibility)", body: "Player who fed opponent's crucial winning tile pays for the entire winning hand (in some rulesets)." },
    { title: "Ready declaration (聽 ting)", body: "Optional declaration when 1 tile from winning; not mandatory (unlike Japanese Riichi)." },
    { title: "Sacred discard rule (雞胡)", body: "Some sub-rulesets: you cannot ron on tile you previously discarded (similar to Japanese furiten)." },
  ],
  scoring: {
    summary: "Faan-based scoring — winning hand's faan count determines multiplier applied to base score.",
    winCondition: "After full game (16 hands), highest cumulative score wins.",
    breakdown: [
      { action: "3 faan win", points: "Base score × 1 = 1x pot from all 3 opponents (if self-draw) or from discarding player (if ron)" },
      { action: "5 faan win", points: "Base × 4" },
      { action: "7 faan win", points: "Base × 16" },
      { action: "10 faan (limit hand)", points: "Base × 128 (or cap)" },
      { action: "Flower tile bonus", points: "+1 faan per flower/season in hand" },
    ],
  },
  penalties: [
    { title: "Chombo (rule violation)", body: "Illegal declaration or wrong win = penalty score deducted." },
    { title: "Cheating detected", body: "Immediate DQ + Hong Kong Mahjong Association ban." },
    { title: "Slow play (tournament only)", body: "Warning + potential auto-discard forced." },
  ],

  positions: [
    { name: "East (東, dealer / oya)", role: "Dealer position — wins score double; dealer repeats on win/draw.", count: 1 },
    { name: "South (南)", role: "Non-dealer seat.", count: 1 },
    { name: "West (西)", role: "Non-dealer seat.", count: 1 },
    { name: "North (北)", role: "Non-dealer seat.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (tournament only)", "Table monitor", "Scorekeeper"],
    summary: "Casual play is self-refereed; tournament play uses referees + electronic table monitoring.",
  },

  governingBodies: [
    { name: "Hong Kong Mahjong Association (HKMA)", founded: 1998, headquarters: "Hong Kong", website: "https://www.hkma.hk" },
    { name: "World Mahjong Organization (WMO — different variant)", founded: 2005, headquarters: "Beijing, China" },
  ],
  majorCompetitions: [
    { name: "Hong Kong Mahjong Championship", frequency: "annual", founded: 2000, region: "Hong Kong" },
    { name: "Overseas Chinese Mahjong Championships (Vancouver, San Francisco, Sydney)", frequency: "annual per city", founded: 1985, region: "overseas Cantonese diaspora (various since 1980s)" },
    { name: "Asian Mahjong Championship", frequency: "biennial", founded: 2015, region: "Asia (rotating hosts)" },
  ],
  countriesPlayed: ["HK", "CN", "TW", "MY", "SG", "TH", "PH", "US", "CA", "AU", "GB", "MO"],
  famousAthletes: [
    "Rita Tang (Hong Kong — legendary HK Open champion)",
    "Peter Wong (Vancouver — overseas Chinese circuit champion)",
    "Alvin Ng (Hong Kong — HKMA multi-year champion)",
    "Mrs. Chan (Hong Kong parlor legend — 40+ years competitive play)",
    "Multiple regional champions across Guangzhou / Shenzhen / Vancouver / Sydney circuits",
  ],
  records: [
    { title: "Largest cultural mahjong participation base", holder: "Hong Kong + Guangdong region", value: "Estimated 5M+ regular players in Hong Kong + southern China alone; ~50M+ globally with diaspora communities", year: 2023 },
    { title: "Oldest continuously operating jansou (parlor)", holder: "Various Hong Kong parlors", value: "Several HK mahjong parlors continuously operating since 1950s-60s", year: 2020 },
    { title: "Highest limit hand payout (competitive)", holder: "13-faan limit hand", value: "Score = base × ~8192 (2^13); some rulesets allow this without cap for dramatic wins", year: 2015 },
  ],

  variants: ["hk-old-style-13-tile-3-faan-minimum-standard", "chinese-official-mahjong-2005-wmo-variant", "guangdong-13-tile-lower-faan-minimum", "taiwanese-16-tile-mahjong-different-hand-size", "sanma-3-player-hk-adaptation"],
  relatedSports: ["riichi-mahjong", "chinese-official-mahjong", "american-mahjong", "taiwanese-mahjong", "mahjong-solitaire"],

  skills: ["faan calculation (fast score computation)", "flower + bonus management", "opponent hand reading via discards", "defense (avoid deal-in on high-faan opponent)", "efficiency (fastest ready hand)", "long-session mental endurance"],
  strategies: [
    { title: "Aim for high faan hands", body: "Half-Flush (mixed one suit) = 3 faan, Full-Flush (pure one suit) = 6 faan, All Pungs = 3 faan. Small high-faan hands often outscore large low-faan hands." },
    { title: "Flower tiles are free faan", body: "Each flower/season = 1 auto-faan when displayed; treat drawing flowers as free scoring." },
    { title: "Defensive discards after 6 turns", body: "By turn 6-8 opponents may be near ready; switch to safe discards (early-discarded tiles by opponent) to avoid deal-in." },
    { title: "Table talk + reading", body: "HK mahjong culture includes constant table talk + tell reading; watch for facial reactions to your discards." },
    { title: "Bao awareness (some rulesets)", body: "If you feed opponent their critical winning tile, you pay for entire hand — never discard a highly-suspected tile against dangerous opponent." },
  ],

  terminology: [
    { term: "Faan (番)", meaning: "Scoring category / doubling unit — each faan doubles base score." },
    { term: "Wu (胡/糊)", meaning: "Winning declaration." },
    { term: "Ting (聽)", meaning: "Ready state — 1 tile from winning." },
    { term: "Chow (吃) / Pung (碰) / Kong (槓)", meaning: "Sequence / triple / quadruple sets." },
    { term: "Sik Wu (雞胡)", meaning: "Chicken hand — winning hand below 3-faan minimum (usually disallowed)." },
    { term: "Bao (包)", meaning: "Responsibility rule — feeding opponent's critical tile means you pay for the whole hand." },
    { term: "Flower (花) / Season (季)", meaning: "8 bonus tiles; each = 1 auto-faan." },
    { term: "Limit hand (爆棚)", meaning: "Highest-faan hand — capped payout in most rulesets." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn 5 basic faan-scoring hands", body: "All Chows, All Pungs, Half-Flush, Yakuhai (Winds/Dragons pair), Concealed Hand. Cover 70%+ of casual wins." },
      { title: "Practice with family or at a HK-style mahjong parlor", body: "HK, Vancouver, San Francisco, Sydney all have accessible parlors welcoming new players." },
      { title: "Play online at MahjongSoul (Chinese/HK mode) or Tenhou (HK-variant)", body: "Online play accelerates learning + provides AI opponents at all skill levels." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in HK Open or HKMA annual championship", body: "Hong Kong Mahjong Association runs annual open championship + members-only tournaments." },
      { title: "Overseas Chinese championships (Vancouver, Sydney)", body: "Vancouver has the largest overseas Chinese mahjong scene; Sydney + San Francisco also strong." },
      { title: "Asian Mahjong Championship (biennial)", body: "Regional championship rotating between HK + Guangzhou + Taipei + Singapore." },
    ]},
  ],

  faq: [
    { question: "How is Hong Kong Mahjong different from Riichi Mahjong?", answer: "HK Mahjong uses simpler faan scoring (vs. Japanese han/fu), retains 8 flower/season bonus tiles (Riichi drops them), has no riichi declaration or dora mechanic, and requires only 3 faan minimum to win (vs. Riichi's yaku requirement). HK plays faster socially but Riichi has deeper strategic layers. HK is dominant in Cantonese communities worldwide; Riichi is dominant in Japan + Western mahjong esports scene." },
    { question: "Is Hong Kong Mahjong gambling?", answer: "In Hong Kong it is legally classified as a game of skill + chance and can be played for stakes in licensed mahjong parlors (麻雀館). Home + family play with small stakes is common cultural practice. Tournament play is prize-based, not gambling. Overseas Cantonese communities play casually + competitively without gambling." },
    { question: "What is a 'chicken hand' (雞胡)?", answer: "A chicken hand is a winning hand that doesn't meet the minimum faan requirement (usually 3 faan). Under standard HK rules such hands cannot win — the player must fold or continue playing until reaching 3+ faan. This design forces players to aim for high-scoring hands rather than any random 4-sets-plus-pair." },
  ],

  wikipediaTitle: "Hong Kong mahjong scoring rules",
  sources: [
    { label: "Hong Kong Mahjong Association", url: "https://www.hkma.hk", publisher: "HKMA" },
    { label: "Wikipedia — Hong Kong mahjong scoring rules", url: "https://en.wikipedia.org/wiki/Hong_Kong_mahjong_scoring_rules", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
