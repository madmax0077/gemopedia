import type { Sport } from "@/lib/types";

export const mahjong: Sport = {
  id: "mahjong",
  slug: "mahjong",
  name: "Mahjong",
  officialName: "Mahjong",
  aliases: ["麻雀 (Máquè)", "麻将 (Májiàng)", "Mah-Jongg"],
  shortDescription:
    "Chinese four-player tile game — arrange 14 tiles into four sets and a pair before your opponents, using draws, discards, and locked melds.",
  longDescription:
    "Mahjong (麻将) is a tile-based game developed in the Qing dynasty of China around the mid-19th century and now played by hundreds of millions worldwide. Using a set of 144 engraved tiles — three numbered suits, three honour groups, and optional flowers/seasons — four players compete to be the first to complete a winning hand of 14 tiles arranged as four sets (pungs, chows or kongs) plus a pair. The game combines draw-and-discard tactics, memory and probability with distinctly regional scoring; the major variants are Chinese Classical (the original), Hong Kong Old Style, Japanese Riichi (the most competitively played), American (played with jokers), Vietnamese, and Taiwanese 16-tile. Since 2002 the World Mahjong Organization has run the World Mahjong Championship in Chinese Official rules.",

  category: "tile-games",
  subCategory: "draw-and-discard tile game",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "CN",
  regionOfOrigin: "Ningbo / lower Yangtze region, China",
  estimatedOrigin: "Mid-19th century Qing dynasty; exported to Japan, Korea and the West in the 1920s",

  players: { min: 4, max: 4, note: "Traditionally exactly 4 players. Three-player 'sanma' and two-player variants exist regionally." },
  equipment: [
    { name: "Set of 144 tiles", description: "36 dots (bamboo pips), 36 bamboo (sticks), 36 characters (Chinese numerals) — three suited groups of 4 × 1-9. 28 honour tiles: 4 winds × 4 (East/South/West/North), 3 dragons × 4 (Red/Green/White). Optional 8 flowers/seasons." },
    { name: "Square table", description: "Four players seated at the four sides — East, South, West, North." },
    { name: "Wall walls / racks", description: "In Riichi mahjong, players use plastic racks; in Chinese Classical, tiles are built into a physical 'wall' by the players." },
    { name: "Dice", description: "Two or three dice used to determine dealer and starting wall position." },
    { name: "Betting tokens / point sticks", description: "Riichi mahjong uses point sticks worth 100/1000/5000/10000 points; casinos may use chips." },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "One 'hand' (game) is ~10-20 minutes. A full match is typically an 'east round' (4 hands) or a 'half game' (hanchan, 8 hands).",
  },
  objective: "Be the first to complete a legal winning hand of 14 tiles — usually four sets (pungs, chows or kongs) plus a pair — with enough scoring value (fu/han/faan) to satisfy the ruleset's minimum requirement.",
  matchStructure:
    "Tiles are shuffled face-down and stacked into a 'wall'. Each player draws 13 tiles to start (the dealer, East, draws 14). Turns proceed counter-clockwise: draw one tile, then discard one. Players may call 'pung' (claim a discard to complete three-of-a-kind), 'chow' (three consecutive in one suit, from left neighbour only), or 'kong' (four-of-a-kind, from any discard). When a player completes their hand they call 'mahjong' and reveal it for scoring.",

  basicRules: [
    { title: "Winning hand structure (most variants)", body: "4 sets + 1 pair = 14 tiles. Sets are pung (three same), kong (four same), or chow (three consecutive in one suit)." },
    { title: "Draws and discards", body: "On your turn draw one tile from the wall, then discard one face-up. Discarded tiles are visible information for everyone." },
    { title: "Calling discards", body: "Any player can 'pung' a discard to lock in a triplet. Only the next player (or with kong, anyone) can 'chow' to complete a run. Called sets are exposed on the table." },
    { title: "Kong management", body: "A kong (four-of-a-kind) draws an extra 'replacement tile' from the dead wall — keeping the hand at 14 tiles." },
    { title: "Hand closed or open", body: "A hand with no called sets is 'closed' (concealed) and scores more. Calling any discard opens the hand." },
    { title: "Minimum hand requirement", body: "Different variants require different minimum scores (Hong Kong Old Style: 3 faan minimum; Riichi: 1 han or riichi call; Chinese Official: 8 points)." },
  ],
  advancedRules: [
    { title: "Riichi (Japanese)", body: "A closed-hand player one tile from winning may declare 'riichi', wagering 1000 points to lock their hand and score a bonus if they win." },
    { title: "Furiten (Riichi)", body: "A player cannot win on a tile they have previously discarded — creates 'discipline discards'." },
    { title: "Dora (Riichi)", body: "Bonus tiles indicated by a face-up 'dora indicator'; each dora tile in the winning hand adds +1 han." },
    { title: "Special hands (yaku)", body: "Complex hands — thirteen orphans, seven pairs, nine gates, big three dragons — score jackpot values." },
    { title: "Chombo penalty", body: "Winning with an illegal hand (missing yaku, wrong count) incurs a penalty payment to all opponents." },
  ],
  scoring: {
    summary: "Wildly variant-dependent. Chinese Official: 8-point minimum. Riichi: han × fu → points. Hong Kong: faan × doubling. American: hand pattern lookup table.",
    breakdown: [
      { action: "Simple win (open hand)", points: "Base + set bonuses" },
      { action: "Concealed win + riichi (Japanese)", points: "×2-4" },
      { action: "Special yaku (thirteen orphans, etc.)", points: "Yakuman / limit hand" },
      { action: "Self-draw win (tsumo/zimo)", points: "All 3 opponents pay" },
    ],
    winCondition: "First player to declare a legal winning hand meeting the minimum score. Some variants also allow washouts (all-pass) and dealer redeals.",
  },

  officiating: {
    officials: ["Referee (tournament)", "Recorder (Riichi Pro League)"],
    summary: "Casual mahjong is self-officiated; disputes are settled by table consensus or the dealer. Professional Riichi events (M-League, Japan) and Chinese Official world championships use referees and time controls.",
  },
  governingBodies: [
    { name: "World Mahjong Organization", acronym: "WMO", founded: 2005, headquarters: "Beijing, China" },
    { name: "European Mahjong Association", acronym: "EMA", founded: 2005, headquarters: "Copenhagen, Denmark", website: "https://mahjong-europe.org" },
    { name: "Japan Professional Mahjong League", acronym: "JPML", founded: 1981, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "World Mahjong Championship", frequency: "biennial", founded: 2002, region: "worldwide", note: "Uses Chinese Official rules." },
    { name: "World Riichi Championship", frequency: "biennial", founded: 2014, region: "worldwide", note: "Uses Japanese Riichi rules." },
    { name: "M-League", frequency: "annual", founded: 2018, region: "Japan", note: "Japan's top pro Riichi league — televised." },
    { name: "European Mahjong Championship", frequency: "biennial", founded: 2005, region: "Europe" },
  ],
  countriesPlayed: ["CN", "JP", "TW", "HK", "KR", "VN", "US", "GB", "DE", "NL", "SG", "TH"],
  famousAthletes: [
    "Koji Idutsu (Japan pro Riichi legend)",
    "Naoki Suzuki (JPML)",
    "Mai Hatsune",
    "Sekigami Kazuya (JPML Chairman)",
    "Zhao Yi (2010 WMC champion)",
  ],

  variants: ["riichi-mahjong", "hong-kong-mahjong", "chinese-classical-mahjong", "american-mahjong", "taiwanese-mahjong", "sanma"],
  relatedSports: ["rummikub", "gin-rummy", "canasta", "mahjong-solitaire"],

  skills: ["tile efficiency", "wait recognition", "opponent reading", "risk management", "memory"],
  strategies: [
    { title: "Tile efficiency (Riichi)", body: "Every turn, choose the discard that maximises the number of tiles that improve your shanten (distance to winning)." },
    { title: "Defence via discard reading", body: "Analyse opponents' discards to infer their waiting tiles and avoid dealing into them (deal-in prevention)." },
    { title: "Speed vs value trade-off", body: "Slower higher-scoring hands can be worth more, but faster low-value hands prevent opponents from developing their own." },
    { title: "Dealer bonus", body: "Dealer wins score 1.5× and stays dealer if they win — chase dealer wins in East round." },
  ],

  terminology: [
    { term: "Pung (碰)", meaning: "Three identical tiles forming a set." },
    { term: "Kong (槓)", meaning: "Four identical tiles — draws a replacement tile." },
    { term: "Chow (吃)", meaning: "Three consecutive tiles in one suit (e.g. 4-5-6 bamboo)." },
    { term: "Pair (对)", meaning: "The two-tile pair completing a standard winning hand." },
    { term: "Tsumo / Zimo", meaning: "Self-drawn winning tile — all 3 opponents pay." },
    { term: "Ron / Hu", meaning: "Winning off an opponent's discard — only the discarder pays." },
    { term: "Riichi", meaning: "Japanese declaration of a ready hand — 1000-point wager for potential bonus." },
    { term: "Dora", meaning: "Bonus indicator tile — each dora in the winning hand +1 han." },
    { term: "Yaku", meaning: "Named scoring pattern in Riichi (e.g. Tanyao, Pinfu, Chinitsu)." },
    { term: "Han / Faan / Fu", meaning: "Point counters in Riichi/Hong Kong/Chinese Classical scoring systems." },
    { term: "Shanten", meaning: "Number of tile changes needed to reach a ready (tenpai) hand." },
    { term: "Tenpai", meaning: "One tile away from winning — 'ready'." },
    { term: "Furiten", meaning: "Riichi rule preventing you from winning on a tile you previously discarded." },
    { term: "Chombo", meaning: "Illegal winning declaration — incurs a penalty payment." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Recognise the tiles", body: "36 dots + 36 bamboo + 36 characters + 16 winds + 12 dragons + 8 flowers = 144." },
      { title: "Basic winning shape", body: "4 sets (pung/chow/kong) + 1 pair. Practise arranging 14 random tiles into a legal hand." },
      { title: "First variant", body: "Start with Hong Kong Old Style or Riichi — simple point structures ideal for beginners." },
      { title: "Draw-and-discard flow", body: "Play a full hand focusing purely on 'draw one, discard one' turn structure." },
    ] },
    { level: "intermediate", steps: [
      { title: "Efficient discards (tile efficiency)", body: "Learn shanten counting and always discard the tile leaving the most 'accepting' tiles." },
      { title: "Yaku memorisation (Riichi)", body: "Memorise the 30 common yaku and their han values." },
      { title: "Opening theory", body: "Recognise standard opening patterns — pinfu, tanyao, chinitsu shapes." },
    ] },
    { level: "advanced", steps: [
      { title: "Defence (Riichi)", body: "Read opponents' discards to predict waits; play safe tiles when threatened." },
      { title: "Bet sizing (score management)", body: "In match play, use position and score gap to decide when to push for a big hand vs settle for cheap wins." },
      { title: "Watch pro play", body: "Study M-League / JPML broadcasts — 20+ years of tournament footage available on YouTube." },
    ] },
  ],
  faq: [
    { question: "Is mahjong gambling?", answer: "Depending on the ruleset and country. Traditional Chinese mahjong is often played for stakes (small chips), while tournament Riichi and Chinese Official are strictly point-based, no money exchanged. Illegal for real money in mainland China but permitted in Macau." },
    { question: "Which mahjong variant should I learn first?", answer: "Riichi (Japanese) is the most popular internationally, has the deepest strategic literature, and is played competitively on many online platforms (Tenhou, Mahjong Soul, RiichiCity). Hong Kong Old Style is simpler and popular in Chinese-speaking regions." },
    { question: "Is mahjong the same as mahjong solitaire?", answer: "No — mahjong solitaire (the tile-matching game on Windows / iPhone) uses the same tiles but is a completely different single-player pattern-matching puzzle, invented in 1981." },
    { question: "How long does one game take?", answer: "One 'hand' (round of dealing) is ~10-20 minutes. A full hanchan (half-game, 8 hands) takes ~2 hours." },
    { question: "What are those flower tiles for?", answer: "In most variants, flowers/seasons are bonus tiles — they don't count in the winning hand but score bonus points and trigger extra draws. Some rulesets omit them entirely." },
  ],

  wikipediaTitle: "Mahjong",
  sources: [
    { label: "Wikipedia — Mahjong", url: "https://en.wikipedia.org/wiki/Mahjong", publisher: "Wikipedia" },
    { label: "Riichi Book — European Mahjong Association", url: "https://mahjong-europe.org/portal/", publisher: "EMA" },
    { label: "World Mahjong Organization — Chinese Official Rules", url: "http://www.mahjongnews.com/rules_chineseofficial.pdf", publisher: "WMO" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
  sportSpecific: {
    majorVariants: ["Chinese Classical", "Chinese Official / MCR", "Hong Kong Old Style", "Japanese Riichi", "American (National Mah Jongg League)", "Taiwanese 16-tile", "Vietnamese", "Sanma (3-player)"],
    tileCount: 144,
  },
};
