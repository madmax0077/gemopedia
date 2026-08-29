import type { Sport } from "@/lib/types";

export const bingoCompetitive: Sport = {
  id: "bingo-competitive",
  slug: "bingo-competitive",
  name: "Competitive Bingo",
  officialName: "World Bingo Tournament / National Bingo Association (NBA-UK) Championship",
  aliases: ["Bingo Tournament", "Tournament Bingo", "Big Bingo Championship"],
  shortDescription:
    "Sanctioned prize-tournament bingo competition using 75-ball (US) or 90-ball (UK) formats; premier events include National Bingo Association UK Championships + World Bingo Tournament (Vegas); big-money jackpot events at $250K+ prize.",
  longDescription:
    "Competitive Bingo is the sanctioned tournament format of bingo — the classic number-matching game with roots in 16th-century Italian lottery (Il Giuoco del Lotto d'Italia) → French Le Lotto → American Beano → renamed Bingo by Edwin S. Lowe in 1929. Two dominant formats: (1) 75-ball American Bingo — 5×5 card with free center square, patterns include lines/diagonals/full-house/special shapes; (2) 90-ball UK/British Bingo — 9×3 card with 3-line/2-line/full-house patterns. Modern competitive tournament scene organized by National Bingo Association UK (NBA-UK, founded 1987 — UK bingo hall syndicate; oversees UK National Game with £2M+ weekly jackpots), USA Bingo Association (USBA), Global Bingo Alliance. Signature events: World Bingo Tournament (Las Vegas, since 2010), NBA-UK National Championship, National Bingo Game (UK, since 1986 — linked-hall daily game across UK). Modern high-stakes online bingo tournaments through Buzz Bingo (UK), Mecca Bingo (UK), Tombola. Online bingo is a multi-billion pound industry (UK online bingo alone £750M+ 2023). Tournament format: multiple sessions, jackpots for specific pattern completions in fewest calls (rapid-fire), with prize pools up to $250K+ for major events.",
  category: "casino-games",
  subCategory: "number-matching game (competitive tournament)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "19th-century", popularity: "regional",
  countryOfOrigin: "IT",
  regionOfOrigin: "Italy (Il Giuoco del Lotto d'Italia ~16th century); modern US Bingo 1929",
  estimatedOrigin: "Italian lottery tradition ~1530; modern US Bingo named 1929 by Edwin S. Lowe; competitive tournaments 1980s+",
  players: { min: 1, max: 5000, note: "Individual play but tournament sessions can have 100-5000+ concurrent players." },
  equipment: [{ name: "Bingo cards (75-ball or 90-ball)", description: "US: 5×5 with free center; UK: 9×3 layout with 15 numbers per card." }, { name: "Bingo daubers / markers", description: "Ink daubers or electronic tablets for marking called numbers." }, { name: "Bingo ball hopper + electronic randomizer", description: "Air-blower ball randomizer or certified electronic RNG." }, { name: "Electronic bingo terminals (modern)", description: "Modern venues use electronic terminals tracking many cards simultaneously." }],
  duration: { approximateMinutes: 120, structure: "Tournament session ~2-3 hrs; multi-day events for major championships." },
  objective: "Complete winning pattern (line/full-house/special) in fewest calls to win jackpot.",
  matchStructure: "Session-based; multiple games per session; jackpots per pattern; overall tournament winners via aggregate score or specific jackpot wins.",
  basicRules: [
    { title: "Match called numbers on card", body: "As numbers are called, players mark corresponding squares." },
    { title: "First to complete pattern calls 'Bingo'", body: "First player to complete winning pattern calls 'Bingo' and wins that game." },
    { title: "Pattern verification required", body: "Winning card verified by tournament officials; false calls = disqualification from that game." },
    { title: "Progressive jackpots for rare patterns", body: "Rare patterns (Full House in ≤42 calls, etc.) win progressive jackpots." },
  ],
  scoring: { summary: "Game-by-game (fastest to complete pattern wins that game's prize); tournament aggregate scoring by wins or jackpot values.", winCondition: "Complete winning pattern first (single game) or highest tournament aggregate winnings." },
  positions: [{ name: "Bingo Player", role: "Sole competitor at each terminal/card.", count: 1 }, { name: "Bingo Caller", role: "Officially calls numbers; certified role.", count: 1 }, { name: "Floor Officials", role: "Verify wins + prevent false claims.", count: 3 }],
  officiating: { officials: ["Chief Caller (Master of Ceremonies)", "Floor Officials (verifiers)", "Tournament Director"], summary: "Certified callers + verifiers per venue." },
  governingBodies: [{ name: "National Bingo Association UK (NBA-UK)", founded: 1987, headquarters: "London, UK" }, { name: "USA Bingo Association (USBA)", founded: 1995, headquarters: "USA" }, { name: "Global Bingo Alliance", founded: 2010, headquarters: "worldwide" }],
  majorCompetitions: [{ name: "World Bingo Tournament (Las Vegas)", frequency: "annual", founded: 2010, region: "Las Vegas, Nevada, USA" }, { name: "NBA-UK National Bingo Championship", frequency: "annual", founded: 1988, region: "UK (rotating bingo halls)" }, { name: "National Bingo Game UK (linked-hall)", frequency: "daily", founded: 1986, region: "UK (linked halls)" }],
  countriesPlayed: ["GBR (huge market)", "USA", "AUS", "CAN", "ESP", "SWE", "PHL"],
  famousAthletes: ["Individual competitive bingo player IDs typically not publicized (games are pattern-based; skill = number of cards managed + reaction speed)"],
  records: [
    { title: "Named 'Bingo' 1929 by Edwin S. Lowe", holder: "Edwin S. Lowe (USA)", value: "Toy salesman renamed 'Beano' to 'Bingo' 1929 after excited player yelled 'Bingo!' instead of 'Beano!' — reshaped modern industry", year: 1929 },
    { title: "UK online bingo £750M+ 2023", holder: "UK Gambling Commission", value: "UK online bingo alone generated £750M+ gross gaming yield in 2023 per UKGC report", year: 2023 },
    { title: "NBA-UK National Game since 1986", holder: "NBA-UK", value: "UK's linked-hall National Bingo Game runs daily since 1986 with £2M+ weekly jackpots", year: 1986 },
  ],
  variants: ["75-ball-us-bingo", "90-ball-uk-british-bingo", "30-ball-speed-bingo", "80-ball-us-bingo", "electronic-online-bingo"],
  relatedSports: ["keno", "lottery", "raffle-draws"],
  skills: ["multi-card tracking", "pattern recognition speed", "reaction speed to called numbers", "concentration in loud venue"],
  wikipediaTitle: "Bingo (British version)",
  sources: [{ label: "Wikipedia — Bingo (British version)", url: "https://en.wikipedia.org/wiki/Bingo_(British)", publisher: "Wikipedia" }, { label: "Wikipedia — Bingo (American version)", url: "https://en.wikipedia.org/wiki/Bingo_(American_version)", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default bingoCompetitive;
