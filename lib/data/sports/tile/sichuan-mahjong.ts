import type { Sport } from "@/lib/types";

export const sichuanMahjong: Sport = {
  id: "sichuan-mahjong",
  slug: "sichuan-mahjong",
  name: "Sichuan Mahjong",
  officialName: "Sichuan Mahjong (Blood Battle)",
  aliases: ["Xuezhan Dao Di", "Blood Battle to the End", "Chengdu Mahjong"],
  shortDescription:
    "Fast-paced Sichuan-province regional variant of Chinese mahjong — uses 108 tiles (no winds/dragons), 'Blood Battle to the End' rule (play continues after first win), simple 3-suit hands. Iconic in Chengdu tea-house culture; popular in Chinese diaspora.",
  longDescription:
    "Sichuan Mahjong (四川麻将) is a Sichuan-provincial regional variant of Chinese mahjong — specifically the 'Xuezhan Dao Di' (Blood Battle to the End) form popularised in Chengdu tea-house culture. Distinctive features: uses only 108 tiles (dropping winds + dragons from standard 136-tile set) — only 3 suits: dots, bamboos, characters (1-9 in each × 4 copies = 108). All hands must be single-suit ('Qing Yi Se' — pure one-suit) — a defining constraint. 'Blood Battle to the End' rule: game continues even after first player declares mahjong; remaining players keep playing until second + third winners also declare, only then does hand end. This creates continuous pressure + strategic depth. Scoring uses 'Fan' multipliers + 'Guazi' (seed) point system. Popular in Chengdu, Chongqing, and among Sichuanese diaspora worldwide. Online platforms like QQ Mahjong + Tencent's specific Sichuan Mahjong app have hundreds of millions of players. Distinct from other regional variants: Hong Kong Mahjong (uses full 136-tile set), Riichi (Japanese, different scoring), Cantonese, Shanghai variants.",
  category: "tile-games",
  subCategory: "regional Chinese mahjong (Sichuan)",
  sportType: "mixed", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (Sichuan Province — Chengdu, Chongqing)",
  estimatedOrigin: "Regional variant emerged mid-20th century; codified as 'Xuezhan Dao Di' late 20th century; online boom 2000s+",
  players: { min: 4, max: 4, note: "Strict 4-player game." },
  equipment: [
    { name: "108-tile Sichuan mahjong set", description: "1-9 × 3 suits (dots, bamboos, characters) × 4 copies = 108. NO winds or dragons." },
    { name: "Chip / Fan tokens", description: "Scoring markers." },
    { name: "Mahjong table (auto-shuffling common)", description: "Traditional table or automatic shuffling table (very common in Chengdu tea-houses)." },
  ],
  duration: { approximateMinutes: 30, structure: "Single hand ~10-15 min; typical session multiple hands over 2-4 hrs (tea-house tradition all-day)." },
  objective: "Form 4 sets + 1 pair from tiles (14 tiles total) all in single suit (Qing Yi Se); win by drawing self-drawn or opponent-discarded winning tile.",
  matchStructure: "4-player hand-based rounds. Blood Battle: game continues until 3rd of 4 players declares mahjong.",
  basicRules: [
    { title: "Single-suit hands mandatory", body: "All winning hands must be pure one-suit (dots only, bamboos only, or characters only)." },
    { title: "108 tiles (no winds/dragons)", body: "Only numbered suit tiles 1-9 × 3 suits × 4 copies." },
    { title: "Blood Battle continuation", body: "After first player declares mahjong, remaining players continue; hand ends only after 3rd of 4 declares." },
  ],
  advancedRules: [
    { title: "Fan (multiplier) scoring", body: "Winning hand's Fan value multiplies score — pure sequences, all-triplets, all-terminals, etc. add Fan." },
    { title: "Ding Que (declare suit) rule", body: "Each player declares which suit they will NOT collect at start; commits to 2 of 3 suits for their hand." },
    { title: "Gang (kong) exposed vs concealed", body: "Exposed Kong from discard vs concealed Kong from draw scored differently." },
  ],
  scoring: {
    summary: "Fan × base points; multiple winners in Blood Battle share pot.",
    winCondition: "Complete valid 4-sets-plus-pair single-suit hand.",
    breakdown: [{ action: "Self-drawn win (Zi Mo)", points: "Base × Fan multiplier from all 3 opponents" }, { action: "Winning off discard (Rong)", points: "Base × Fan from discarding player" }],
  },
  penalties: [
    { title: "Wrong suit collection (Ding Que violation)", body: "Cannot win; Ding Que declaration binding." },
    { title: "False mahjong declaration", body: "Penalty per house rules; often lose hand + pay other 3." },
    { title: "Losing tiles at Blood Battle end", body: "Un-declared players pay based on remaining tile value." },
  ],
  positions: [{ name: "Sichuan Mahjong Player", role: "Solo player at 4-player table.", count: 1 }],
  officiating: { officials: ["Group consensus"], summary: "No formal officials." },
  governingBodies: [
    { name: "Chengdu Mahjong Association (regional)", founded: 1990, headquarters: "Chengdu, Sichuan, China" },
  ],
  majorCompetitions: [
    { name: "Chengdu Sichuan Mahjong Championship", frequency: "annual", founded: 1995, region: "Chengdu / Sichuan" },
    { name: "Tencent QQ Sichuan Mahjong online tournaments", frequency: "ongoing", founded: 2005, region: "China + diaspora online" },
  ],
  countriesPlayed: ["CN (Sichuan/Chongqing)", "HK", "TW", "MY", "SG", "US (Chinese diaspora)", "CA", "AU"],
  famousAthletes: ["Regional champions of Chengdu tournaments"],
  records: [
    { title: "Chengdu tea-house tradition", holder: "Chengdu culture", value: "Chengdu tea-houses (茶馆) are iconic all-day Sichuan mahjong venues — cultural landmark", year: 1980 },
    { title: "Online player base", holder: "Tencent QQ Mahjong", value: "Hundreds of millions of daily active Sichuan Mahjong players on QQ + Tencent apps", year: 2010 },
  ],
  variants: ["xuezhan-dao-di-blood-battle", "hu-ba-hu", "chengdu-standard", "chongqing-mahjong"],
  relatedSports: ["mahjong", "hong-kong-mahjong", "riichi-mahjong", "cantonese-mahjong"],
  skills: ["tile counting + probability", "single-suit hand planning", "Ding Que commitment strategy", "Blood Battle continuation pressure"],
  strategies: [
    { title: "Ding Que declaration wisely", body: "Declare Ding Que based on early tile draw — commit to strongest 2 suits based on initial hand." },
    { title: "Aggressive claim (Peng/Gang) tempo", body: "In Blood Battle, tempo matters — aggressive Peng/Gang claims force opponents to adapt faster." },
    { title: "Winning position vs single-suit locked", body: "Once locked into single suit via Ding Que, watch closely for winning tile from any opponent's discard." },
  ],
  terminology: [
    { term: "Xuezhan Dao Di", meaning: "'Blood Battle to the End' rule variant" },
    { term: "Qing Yi Se", meaning: "'Pure one-suit' — mandatory single-suit hand" },
    { term: "Ding Que", meaning: "Declare which suit will NOT collect" },
    { term: "Fan", meaning: "Scoring multiplier for hand types" },
    { term: "Peng / Gang", meaning: "Claim discarded tile for triplet / quadruplet" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Standard 4-player Sichuan hand", body: "Learn single-suit hands + Ding Que basics." }] },
    { level: "intermediate", steps: [{ title: "Blood Battle strategy + Fan optimisation", body: "Play Blood Battle continuation; optimise Fan-multiplier hands." }] },
    { level: "advanced", steps: [{ title: "Chengdu tournament / online high-Fan hands", body: "Compete in regional tournaments or online Tencent Sichuan Mahjong ranked queues." }] },
  ],
  faq: [
    { question: "Why does Sichuan Mahjong not use winds/dragons?", answer: "Sichuan variant deliberately simplifies — only 3 numbered suits, no winds (East/South/West/North) or dragons (Red/Green/White). Speeds up gameplay + forces single-suit strategy. Distinctive Sichuanese regional identity." },
    { question: "What is Blood Battle to the End (Xuezhan Dao Di)?", answer: "Standard mahjong ends after first player declares mahjong. Sichuan's Blood Battle rule: game continues, remaining 3 players keep playing until 3rd (of 4) also declares — creates continuous pressure + multi-winner pot sharing. Only the last one (Da Bao) pays." },
  ],
  wikipediaTitle: "Mahjong",
  sources: [{ label: "Wikipedia — Mahjong", url: "https://en.wikipedia.org/wiki/Mahjong", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default sichuanMahjong;
