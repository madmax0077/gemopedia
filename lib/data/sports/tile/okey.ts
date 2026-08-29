import type { Sport } from "@/lib/types";

export const okey: Sport = {
  id: "okey",
  slug: "okey",
  name: "Okey",
  officialName: "Okey (Turkish Rummy)",
  aliases: ["Turkish Okey", "Ikili Okey"],
  shortDescription:
    "Turkish 4-player tile-based rummy game using 106 numbered tiles (1-13 in 4 colors + 2 jokers) — form runs + sets to be first to complete hand. National pastime in Türkiye; wildly popular online + in coffeehouses.",
  longDescription:
    "Okey is a Turkish 4-player tile-based rummy game — considered a Turkish national pastime alongside tavla (backgammon). Uses a 106-tile set: numbers 1-13 in 4 colors (red, yellow, black, blue) — 2 copies each = 104 tiles + 2 jokers ('sahte okey'). Each player receives 14 or 15 tiles; players form runs (sequential same-color) + sets (same-number different-color) of 3+ tiles. First player to declare all tiles arranged in valid runs/sets wins. Distinctive rule: the 'gösterge' (indicator) tile flipped at start determines which tile becomes the 'okey' (wildcard) — the tile one higher than gösterge. Two jokers can also substitute. Variants include Ikili Okey (2v2 partnership) + Çanak Okey (bowl okey with betting). Online platforms Mynet Okey + OKEY.com have millions of daily players in Türkiye. Related to Romanian rummy + international rummy family; distinct branding + rules.",
  category: "tile-games",
  subCategory: "tile-based rummy (Turkish)",
  sportType: "mixed", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "TR",
  regionOfOrigin: "Türkiye",
  estimatedOrigin: "Emerged mid-20th century in Türkiye; possibly evolved from Rummikub-family; national pastime by 1980s",
  players: { min: 2, max: 4, note: "Typically 4-player; 2v2 partnership + 3-player + solo variants exist." },
  equipment: [
    { name: "106-tile Okey set", description: "1-13 in 4 colors × 2 copies + 2 jokers = 106 tiles; typically plastic or wood." },
    { name: "4 tile racks", description: "Each player has personal rack to hold tiles concealed." },
    { name: "Tile-bag", description: "Central bag for drawing + discarding tiles." },
  ],
  duration: { approximateMinutes: 30, structure: "Hand ~15-30 min; typical session multiple hands over 1-2 hrs." },
  objective: "Be first to arrange all tiles into valid runs (sequential same-color) + sets (same-number different-color) of 3+ tiles.",
  matchStructure: "Multi-hand session; winner of each hand scores points; overall winner by cumulative score.",
  basicRules: [
    { title: "14/15-tile hand", body: "Each player draws 14 tiles (dealer 15) at start." },
    { title: "Draw + discard turn", body: "Player draws 1 tile from bag or previous discard, then discards 1 to their right." },
    { title: "Runs + sets of 3+ tiles", body: "Form same-color sequential runs (5-6-7 red) or same-number different-color sets (7-red, 7-yellow, 7-black)." },
    { title: "First to arrange all tiles wins hand", body: "Declare 'Okey!' when all tiles arranged in valid runs + sets." },
  ],
  advancedRules: [
    { title: "Gösterge + Okey (wildcard)", body: "Gösterge tile flipped at start; tile one higher = 'okey' wildcard (substitutes any tile)." },
    { title: "2 jokers substitute", body: "2 physical jokers in set also substitute; harder to remove." },
    { title: "Çanak (bowl) betting variant", body: "Betting variant where each hand's winner takes pot; popular in coffeehouses." },
  ],
  scoring: {
    summary: "Winner scores; losers penalised by tiles remaining. Detailed rules vary regionally.",
    winCondition: "First to arrange all tiles in valid runs + sets wins hand.",
    breakdown: [{ action: "Hand win", points: "Winner scores; often 2 pts. Losers penalised for un-declared tiles." }],
  },
  penalties: [
    { title: "Un-declared tiles at hand end", body: "Losers penalised for un-declared tiles (each tile = 1 pt against)." },
    { title: "Wrong declaration", body: "Invalidated + penalty per house rules." },
  ],
  positions: [{ name: "Okey Player", role: "Solo player forming tile combinations to win hand.", count: 1 }],
  officiating: { officials: ["Group consensus"], summary: "No formal officials." },
  governingBodies: [
    { name: "Türkiye Okey Federasyonu (informal)", founded: 2005, headquarters: "Türkiye" },
  ],
  majorCompetitions: [
    { name: "Turkish Okey Championship (Mynet Okey, ÇANAK Okey Turnuvası)", frequency: "annual (online + live)", founded: 2000, region: "Türkiye" },
  ],
  countriesPlayed: ["TR", "DE (Turkish diaspora)", "NL", "US", "AU"],
  famousAthletes: ["Top Mynet Okey players; not centrally tracked."],
  records: [
    { title: "Turkish national pastime", holder: "Türkiye", value: "Considered one of Türkiye's two most-played national games (with tavla)", year: 1980 },
    { title: "Mynet Okey online dominance", holder: "Mynet", value: "Mynet Okey (mynet.com) — largest online Okey platform, millions of daily active players in Türkiye", year: 2000 },
  ],
  variants: ["ikili-okey", "canak-okey", "3-player-okey", "5-player-okey"],
  relatedSports: ["rummikub", "kalooki", "romanian-rummy", "mahjong", "tavla-backgammon"],
  skills: ["hand-planning + tile combinatorics", "opponent-discard reading", "jjker usage timing"],
  strategies: [
    { title: "Save okey wildcards for closing", body: "Use okey/jokers to complete last elusive combination when close to declaring." },
    { title: "Read opponent's discards for hand shape", body: "Opponent discards reveal which colors/numbers they don't need — infer their hand shape." },
    { title: "Aggressive discarding vs holding", body: "Balance discarding tiles that opponents might need vs. holding for own combos." },
  ],
  terminology: [
    { term: "Gösterge", meaning: "Indicator tile at start" },
    { term: "Okey", meaning: "Wildcard tile (one higher than gösterge) or 'declared victory' call" },
    { term: "Sahte Okey", meaning: "Physical joker tiles" },
    { term: "Çanak", meaning: "Bowl / betting variant" },
    { term: "El", meaning: "Turkish for 'hand' (game round)" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Basic 4-player game", body: "Learn draw + discard + basic runs + sets." }] },
    { level: "intermediate", steps: [{ title: "Okey wildcard tactics + partnership Ikili", body: "Learn wildcard timing + 2v2 partnership signaling." }] },
    { level: "advanced", steps: [{ title: "Çanak betting variant + tournament play", body: "Advanced tournament strategy + betting tactics." }] },
  ],
  faq: [
    { question: "How does Okey differ from Rummikub?", answer: "Similar tile-rummy family. Okey uses 106 Turkish-branded tiles + concealed rack; Rummikub uses 106 tiles too but with different rules (initial-30 pts to open, table pool of shared combinations). Different flavor + regional prevalence (Okey = Türkiye; Rummikub = Israel/international)." },
    { question: "Can Okey be played online?", answer: "Yes — Mynet Okey + OKEY.com + similar Turkish platforms host millions of daily online games. International players can join too though most content is Turkish-language." },
  ],
  wikipediaTitle: "Okey",
  sources: [{ label: "Wikipedia — Okey", url: "https://en.wikipedia.org/wiki/Okey", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default okey;
