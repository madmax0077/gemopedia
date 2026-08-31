import type { Sport } from "@/lib/types";

export const cribbageStandard: Sport = {
  id: "cribbage-standard",
  slug: "cribbage-standard",
  name: "Cribbage (Standard)",
  officialName: "American Cribbage Congress (ACC) / British Cribbage",
  aliases: ["Crib", "Noddy (historic)"],
  shortDescription:
    "17th century English card game invented by poet Sir John Suckling (~1630) — 2/3/4 players use 52-card deck + pegged 121-point track board to score combinations (15s, pairs, runs, flushes); 'crib' side-hand mechanic unique; still major pub game in UK + military tradition in USA.",
  longDescription:
    "Cribbage (traditionally called 'Crib') is a 17th century English card game invented ~1630 by poet + courtier Sir John Suckling — the 'noddy' game he modified became modern Cribbage. Played by 2, 3, or 4 players using a standard 52-card deck + a unique wooden 'crib board' with 121 peg holes (60 forward, 60 return, 1 winning) used to track scores by pegging. Each player is dealt 6 cards (2-player) or 5 cards (3/4-player), then discards 1-2 cards into the 'crib' (side hand) which belongs to the dealer for extra scoring. Play phase: alternate playing cards face-up counting toward running total (target 31); scoring combinations during play (pairs, runs, 15s, 31s). After play, count phase: each hand + the crib scored for combinations: 15s (any cards summing to 15 = 2 pts), pairs (2 pts, triples 6, quads 12), runs (3+ sequential = 3-8 pts), flushes (4-in-hand flush = 4 pts, 5 with crib), 'His Nobs' (Jack matching upcard suit = 1 pt). First to peg 121 wins. Signature: '19' is impossible (folklore: 'the perfect Cribbage impossibility'). Considered UK's national pub card game + huge in US military tradition (originated in Royal Navy officer's messes 1700s; carried to US Navy submarine crews — traditional game on US Navy submarines to this day). Governing bodies: American Cribbage Congress (ACC, founded 1979, ~10,000 members in USA + Canada), International Cribbage Association (informal). ACC Grand National annually. UK: UK Cribbage Federation events. Notable: J.M. Barrie played Cribbage; also famously featured in Charles Dickens's 'The Old Curiosity Shop'.",
  category: "card-games",
  subCategory: "17th century English pegged-scoring card game",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "medieval", popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "England (Sir John Suckling ~1630)",
  estimatedOrigin: "Invented ~1630 by Sir John Suckling; ACC founded 1979 USA",
  players: { min: 2, max: 4, note: "2 players standard; 3-player + 4-player partnership variants." },
  equipment: [{ name: "Standard 52-card deck", description: "Any standard playing card deck." }, { name: "Cribbage board (121-hole pegging track)", description: "Traditional wooden board with 121 peg holes (60 forward, 60 return, 1 win); pair of pegs per player." }, { name: "Score pegs (2 per player)", description: "Two pegs per player: back peg marks previous score, front peg current." }],
  duration: { approximateMinutes: 30, structure: "Game: ~15-45 min; tournament session multiple games ~2-4 hours." },
  objective: "First player to peg 121 points on cribbage board wins.",
  matchStructure: "Individual games; tournament: knockout brackets + Swiss.",
  basicRules: [
    { title: "Deal 6 (2p) or 5 (3-4p) cards", body: "Each player discards 1-2 to 'crib' (side hand belonging to dealer)." },
    { title: "Cut upcard (starter card)", body: "Cut top of remaining deck; upcard becomes 'starter' scored with each hand." },
    { title: "Play phase: count to 31", body: "Alternate playing cards face-up, counting running total; score combos (pairs, runs, 15s, 31)." },
    { title: "Count phase: score hand + crib (dealer's extra)", body: "Each hand + crib scored for combos: 15s, pairs, runs, flushes, His Nobs." },
    { title: "Peg 121 to win", body: "First to peg 121 = win; failure to score = 'muggins' can steal points (if agreed)." },
  ],
  advancedRules: [
    { title: "'His Nobs' — Jack matching starter suit = 1 pt", body: "Bonus point for Jack in hand matching starter card's suit." },
    { title: "'His Heels' — Jack turned as starter = 2 pts (dealer)", body: "Dealer scores 2 for turning Jack as starter card." },
    { title: "Muggins ('steal points') rule (optional)", body: "If opponent fails to peg combo they earned, opposing player can 'muggins' + take those points." },
    { title: "Nineteen impossible", body: "Folklore: hand cannot score exactly 19; scoring '19-hand' means 0 points." },
  ],
  scoring: {
    summary: "Points accumulated by pegging combinations during play + count phases; first to 121 wins.",
    winCondition: "First to peg 121 pts.",
    breakdown: [{ action: "15 (cards summing to 15)", points: "+2" }, { action: "Pair", points: "+2" }, { action: "Three of a kind", points: "+6" }, { action: "Four of a kind", points: "+12" }, { action: "Run of 3+ sequential cards", points: "+3 to +8" }, { action: "4-card flush in hand", points: "+4 (or +5 with matching starter)" }, { action: "His Nobs (Jack matching starter suit)", points: "+1" }, { action: "31 in play phase", points: "+2" }, { action: "Last card in play phase (Go)", points: "+1" }],
  },
  positions: [{ name: "Cribbage player", role: "Sole competitor (or partner in 4-player partnership).", count: 1 }, { name: "Dealer (rotating)", role: "Deals + gets crib bonus.", count: 1 }],
  officiating: { officials: ["Tournament Director", "Table Judges"], summary: "ACC / regional federation officials at events." },
  governingBodies: [{ name: "American Cribbage Congress (ACC)", founded: 1979, headquarters: "USA (rotating)" }, { name: "UK Cribbage Federation (community)", founded: 1990, headquarters: "UK" }, { name: "International Cribbage Association (informal)", founded: 2000, headquarters: "worldwide" }],
  majorCompetitions: [{ name: "ACC Grand National", frequency: "annual", founded: 1979, region: "USA (rotating)" }, { name: "ACC Tournament of Champions", frequency: "annual", founded: 1985, region: "USA" }, { name: "UK Cribbage League Championship", frequency: "annual", founded: 1995, region: "UK" }],
  countriesPlayed: ["GBR (birthplace, pub tradition)", "USA (military + ACC)", "CAN (huge scene)", "AUS", "NZL"],
  famousAthletes: ["Sir John Suckling (inventor ~1630)", "Michael Fetchik (USA — multi-time ACC Grand National champion)", "Regional US ACC + UK champions"],
  records: [
    { title: "Invented ~1630 by Sir John Suckling", holder: "Sir John Suckling (GB)", value: "Cribbage invented ~1630 by English poet + courtier Sir John Suckling; developed from earlier 'noddy' game", year: 1630 },
    { title: "US Navy submarine tradition (~1900+)", holder: "US Navy submarines", value: "Cribbage traditionally carried aboard US Navy submarines — considered permanent submarine tradition since ~1900; USS Barb WWII cribbage board displayed as artifact", year: 1900 },
    { title: "ACC founded 1979 with ~10,000 US members", holder: "American Cribbage Congress", value: "American Cribbage Congress founded 1979; ~10,000 active members in USA + Canada; largest global cribbage federation", year: 1979 },
  ],
  variants: ["standard-2-player-cribbage", "3-player-cribbage", "4-player-partnership-cribbage", "5-card-cribbage-shorter-game-61-points", "seven-card-cribbage-solo"],
  relatedSports: ["euchre-canadian", "whist", "pinochle", "bridge"],
  skills: ["combination-recognition (15s + pairs + runs)", "crib strategy (dealer vs. non-dealer discarding)", "pegging count management", "starter card probability assessment"],
  wikipediaTitle: "Cribbage",
  sources: [{ label: "Wikipedia — Cribbage", url: "https://en.wikipedia.org/wiki/Cribbage", publisher: "Wikipedia" }, { label: "American Cribbage Congress", url: "https://www.cribbage.org", publisher: "ACC" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default cribbageStandard;
