import type { Sport } from "@/lib/types";

export const pickleballDoublesTournament: Sport = {
  id: "pickleball-doubles-tournament",
  slug: "pickleball-doubles-tournament",
  name: "Pickleball Doubles Tournament (Pro)",
  officialName: "PPA Tour Pro Doubles / MLP (Major League Pickleball) Doubles",
  aliases: ["Pro Pickleball Doubles", "PPA Doubles", "MLP Doubles"],
  shortDescription:
    "Elite doubles pickleball tournament format — fastest-growing sport in USA (2020-2025) — governed by PPA Tour + Major League Pickleball; $10M+ prize pools + Netflix docs; APP (Association of Pickleball Players) + IFP (International Federation of Pickleball) sanctioning.",
  longDescription:
    "Pickleball Doubles Tournament (Pro-level) is the elite competitive format of pickleball — the fastest-growing sport in the USA (48.3M+ players 2023 per SFIA) and one of the fastest-growing globally 2020-2025. Governed at pro level by PPA Tour (Professional Pickleball Association, founded 2018) + Major League Pickleball (MLP, founded 2021 by Steve Kuhn — team-format leagues with celebrity/franchise investors incl. Tom Brady, Kevin Durant, Michael B. Jordan, Kim Clijsters, Aaron Rodgers, Naomi Osaka). Also APP (Association of Pickleball Players, founded 2019) + IFP (International Federation of Pickleball, founded 2010 — governs amateur + international). PPA + MLP merged 2024 into United Pickleball Association (UPA) with unified $10M+ combined prize pools. Doubles is the premier format at all levels (Mixed Doubles, Men's Doubles, Women's Doubles). Game: 11 points win-by-2 (some tournaments 15 or 21 win-by-2). Signature top players: Ben Johns (USA — considered GOAT, 15+ Grand Slam titles), Anna Leigh Waters (USA — 15-year-old prodigy, multi-time #1), Anna Bright, Catherine Parenteau, JW Johnson, Jay Devilliers, Federico Staksrud, Tyson McGuffin, Riley Newman, Zane Navratil, Christian Alshon.",
  category: "racket-paddle-sports",
  subCategory: "doubles paddle sport (competitive)",
  sportType: "team", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (invented Bainbridge Island, WA 1965; pro tour 2018+)",
  estimatedOrigin: "Invented 1965 Bainbridge Island, WA by Joel Pritchard + Bill Bell + Barney McCallum; PPA founded 2018; MLP 2021; UPA merger 2024",
  players: { min: 4, max: 4, note: "Standard doubles = 2 pairs; single-team singles + mixed doubles also played." },
  equipment: [{ name: "Pickleball paddle (solid graphite / carbon fiber)", description: "Regulated max 24\" total length + 17\" width; typically composite or carbon-fiber face." }, { name: "Perforated plastic ball", description: "Yellow perforated ball (indoor lighter, outdoor heavier); regulated by USA Pickleball." }, { name: "20\" × 44\" court with 34\" middle net", description: "Standard court size (smaller than tennis)." }, { name: "7\" kitchen (non-volley zone)", description: "7' non-volley zone on both sides of net (\"kitchen\") — no volleys from inside." }],
  duration: { approximateMinutes: 30, structure: "Match: best-of-3 games to 11 win-by-2 (some to 15/21); ~30-45 min per match." },
  objective: "First team to 11 points (win by 2) in best-of-3 games format.",
  matchStructure: "Round-robin group play → single-elimination bracket; pro tour Grand Slam events → World Championship.",
  basicRules: [
    { title: "11 points win-by-2 (best of 3)", body: "Standard scoring; some tournaments 15 or 21 win-by-2." },
    { title: "Serve underhand + diagonal", body: "Serve must be underhand + arm swing below waist; served diagonally to opponent's service box." },
    { title: "Two-bounce rule at serve", body: "Served ball must bounce once on opponent side, then returned must bounce once on serving side before volleying allowed." },
    { title: "Kitchen (non-volley zone) rule", body: "No volleys from inside 7' non-volley zone; must bounce ball first if inside kitchen." },
    { title: "Only serving team scores (traditional) or rally-scoring (some leagues)", body: "Traditional: only serving team scores. MLP: rally-scoring (either team scores)." },
  ],
  scoring: {
    summary: "11-point games (traditional) or rally-scoring (MLP); win by 2.",
    winCondition: "First team to 11 pts win-by-2 in best-of-3 games (or MLP round wins).",
    breakdown: [{ action: "Point", points: "+1" }, { action: "Ace serve", points: "+1" }, { action: "Missed serve", points: "loss of serve (no point)" }],
  },
  penalties: [{ title: "Kitchen foot fault", body: "Volleying while touching kitchen line = point to opponent." }, { title: "Service foot fault", body: "Serving while stepping over baseline = point to opponent." }],
  positions: [{ name: "Doubles player (backhand + forehand court)", role: "2 players per team; often specialized as 'left-handed player' + 'right-handed player' for backhand dominance.", count: 2 }],
  officiating: { officials: ["Chair Umpire", "Line Judges (4-8)", "Referee"], summary: "Chair umpire + line judges at pro events; casual = self-officiated." },
  governingBodies: [{ name: "United Pickleball Association (UPA — post-2024 merger of PPA + MLP)", founded: 2024, headquarters: "USA" }, { name: "USA Pickleball (USAP — national body)", founded: 1984, headquarters: "USA" }, { name: "IFP (International Federation of Pickleball)", founded: 2010, headquarters: "USA" }, { name: "APP (Association of Pickleball Players)", founded: 2019, headquarters: "USA" }],
  majorCompetitions: [{ name: "PPA Tour Grand Slams", frequency: "monthly (~30 events/yr)", founded: 2018, region: "USA (rotating)" }, { name: "MLP (Major League Pickleball)", frequency: "3-4 events/yr", founded: 2021, region: "USA (rotating)" }, { name: "US Open Pickleball Championships", frequency: "annual", founded: 2016, region: "Naples, Florida, USA" }, { name: "World Pickleball Championships (IFP)", frequency: "annual", founded: 2015, region: "worldwide (rotating)" }],
  countriesPlayed: ["USA (dominant)", "CAN", "GBR", "AUS", "IND", "MEX", "ESP", "GER", "FRA", "JPN"],
  famousAthletes: ["Ben Johns (USA — considered GOAT, 15+ Grand Slam titles)", "Anna Leigh Waters (USA — teen prodigy #1)", "Anna Bright (USA)", "Catherine Parenteau (CAN → USA)", "JW Johnson", "Jay Devilliers", "Federico Staksrud (ARG)", "Tyson McGuffin"],
  records: [
    { title: "Ben Johns 15+ Grand Slam titles", holder: "Ben Johns (USA)", value: "15+ combined singles + doubles + mixed Grand Slam titles; considered pickleball GOAT", year: 2024 },
    { title: "Anna Leigh Waters teen prodigy", holder: "Anna Leigh Waters (USA)", value: "Reached PPA women's #1 as a teenager (age 15); multi-time Grand Slam winner + $1M+ earnings by age 17", year: 2024 },
    { title: "48.3M+ USA players 2023 SFIA", holder: "SFIA", value: "48.3M+ pickleball players in USA per 2023 SFIA report — fastest-growing sport in USA for 3rd straight year", year: 2023 },
    { title: "UPA merger 2024", holder: "United Pickleball Association", value: "PPA + MLP merged into United Pickleball Association in 2024 with combined $10M+ prize pools", year: 2024 },
  ],
  variants: ["mens-doubles", "womens-doubles", "mixed-doubles", "singles-pickleball", "mlp-team-format"],
  relatedSports: ["tennis", "table-tennis", "badminton", "paddle-tennis", "padel"],
  skills: ["dinking (soft kitchen play)", "third-shot drop", "ATP (around-the-post) shots", "team communication + poaching", "reset from defense to offense"],
  strategies: [
    { title: "Third-shot drop mastery", body: "Third shot after serve/return should be soft kitchen-drop to force opponent to bend; controls net position." },
    { title: "Aggressive stacking", body: "Left-handed player stacks on right; both team members swap sides for backhand-dominance." },
  ],
  wikipediaTitle: "Pickleball",
  sources: [{ label: "Wikipedia — Pickleball", url: "https://en.wikipedia.org/wiki/Pickleball", publisher: "Wikipedia" }, { label: "PPA Tour official", url: "https://www.ppatour.com", publisher: "PPA Tour" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default pickleballDoublesTournament;
