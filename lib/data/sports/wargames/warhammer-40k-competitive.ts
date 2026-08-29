import type { Sport } from "@/lib/types";

export const warhammer40kCompetitive: Sport = {
  id: "warhammer-40k-competitive",
  slug: "warhammer-40k-competitive",
  name: "Warhammer 40,000 Competitive",
  officialName: "Warhammer 40,000 (10th Edition) — Competitive Matched Play",
  aliases: ["Warhammer 40K Tournament Play", "WH40K Competitive", "40K Matched Play"],
  shortDescription:
    "Games Workshop's flagship science-fantasy tabletop miniatures wargame in competitive tournament format (currently 10th Edition 2023-); WCW (World Championships of Warhammer) crowns global champion annually with $50K+ prize pool.",
  longDescription:
    "Warhammer 40,000 Competitive (Matched Play) is the tournament-format variant of Games Workshop's flagship 40K miniatures wargame — currently in its 10th Edition (launched June 2023). Set in the grim-dark 41st millennium featuring 20+ playable factions (Space Marines, Chaos Space Marines, Necrons, Orks, Aeldari, T'au, Tyranids, Genestealer Cults, Adepta Sororitas, Imperial Knights, Death Guard, Thousand Sons, Custodes, Grey Knights, World Eaters, Leagues of Votann, Emperor's Children (re-released 2025), etc.). Competitive format uses standardized points (typically 2,000 points/side, occasionally 1,000/1,250/3,000) with pre-agreed Chapter Approved missions (Leviathan mission pack 2024-25, Pariah Nexus 2025-26). Signature global championship: World Championships of Warhammer (WCW), founded 2023, invite-only for top 128 players from regional circuits — 2024 Atlanta champion Richard Siegler (USA, Grey Knights); 2025 crowned in Atlanta again. Continental circuits: US Grand Tournament (LGT + Championship of Chicago + Adepticon), UK (WTC UK team format, London GT), European Team Championship (ETC — team format of 8 players per country), Australia. Publications: Warhammer Community + Goonhammer (community analysis + tournament reports).",
  category: "wargames",
  subCategory: "sci-fi miniatures wargame (competitive)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (Games Workshop, Nottingham, 1987)",
  estimatedOrigin: "Warhammer 40K first published 1987; 10th Edition Jun 2023; WCW inaugural Aug 2023",
  players: { min: 2, max: 2, note: "Head-to-head 1v1 (individual); team formats (ETC) 8v8 country vs. country." },
  equipment: [{ name: "Painted miniatures army (Games Workshop or 3rd party)", description: "Typically 30-100 miniatures per 2,000 pt army." }, { name: "Core Rules 10th Edition (free digital)", description: "Warhammer Community free rules PDF." }, { name: "Codex + Detachment rules book", description: "Faction-specific rules; some free (Index cards) via WHCom." }, { name: "Terrain-heavy 60\"x44\" table", description: "Dense line-of-sight-breaking terrain critical to competitive balance." }, { name: "Dice, tape measure, tokens", description: "Standard tabletop equipment." }],
  duration: { approximateMinutes: 180, structure: "Tournament game: 2h 45min–3h with chess clock; 5 rounds per event day typical." },
  objective: "Score more Victory Points than opponent by capturing Primary + Secondary Mission objectives.",
  matchStructure: "5-6 round Swiss + top-cut single-elimination playoff; individual tournaments 1-3 days, WCW 4 days.",
  basicRules: [
    { title: "5-round game with chess clock", body: "Each player has ~60-70 minute clock; game ends at time or round 5." },
    { title: "Primary + Secondary Missions", body: "Primary = fixed objective-holding; Secondary = variable per mission pack." },
    { title: "Movement + Shooting + Charge + Fight phases", body: "IGOUGO structure per turn (I-Go-U-Go); Command Phase for stratagems." },
    { title: "Stratagems (CP-costed abilities)", body: "Command Points spent on tactical Stratagems per turn." },
  ],
  advancedRules: [
    { title: "List-building meta (points-costed)", body: "2,000 pt standard; keyword synergies + Detachment rules define army style." },
    { title: "Line-of-sight (true LoS)", body: "Model-to-model true LoS; terrain critical to competitive balance." },
    { title: "Mission Pack rotation", body: "Games Workshop rotates official mission packs annually (Leviathan 2023-24, Pariah Nexus 2024-25)." },
    { title: "Balance updates (Munitorum Field Manual)", body: "Points-cost updates + Nerfs published quarterly via Warhammer Community." },
  ],
  scoring: { summary: "Victory Points (0-100 typical): 45 max Primary + 40 max Secondary + up to 15 Painting/other.", winCondition: "Higher Victory Point total; tiebreakers = held objectives + kills." },
  positions: [{ name: "General (Warlord)", role: "Named Warlord character - army centerpiece.", count: 1 }],
  officiating: { officials: ["Tournament Organizer", "Judges (rules referees)", "Head Judge"], summary: "TO + judge team enforces rules; MTG-style penalty system (warning → game loss → DQ)." },
  governingBodies: [{ name: "Games Workshop (publisher + WCW organizer)", founded: 1975, headquarters: "Nottingham, UK" }, { name: "WCW (World Championships of Warhammer)", founded: 2023, headquarters: "USA" }, { name: "ETC (European Team Championship)", founded: 2001, headquarters: "Europe" }],
  majorCompetitions: [{ name: "World Championships of Warhammer (WCW)", frequency: "annual", founded: 2023, region: "Atlanta, USA (2023-25)" }, { name: "Adepticon", frequency: "annual", founded: 2003, region: "Chicago, USA" }, { name: "European Team Championship (ETC)", frequency: "annual", founded: 2001, region: "rotating European venues" }, { name: "London Grand Tournament (LGT)", frequency: "annual", founded: 2000, region: "London, UK" }],
  countriesPlayed: ["USA", "GBR", "AUS", "GER", "FRA", "POL", "ESP", "ITA", "CAN", "JPN"],
  famousAthletes: ["Richard Siegler (USA — WCW 2024 champion)", "Nick Nanavati (USA — multi-time top-cut)", "Jack Harpster (USA)", "Andrew Gonyo (USA)", "James Karch (USA)", "Louie Rowe (USA)"],
  records: [
    { title: "10th Edition launch 2023", holder: "Games Workshop", value: "10th Edition of Warhammer 40K launched June 2023 (Leviathan boxset)", year: 2023 },
    { title: "WCW 2024 Champion — Richard Siegler", holder: "Richard Siegler (USA)", value: "Won World Championships of Warhammer 2024 with Grey Knights, Atlanta", year: 2024 },
    { title: "Warhammer 40K 37+ years running", holder: "Games Workshop", value: "First published 1987 (Rogue Trader); 10 editions across 37+ years", year: 2024 },
  ],
  variants: ["kill-team", "warhammer-40k-crusade", "combat-patrol", "spearhead"],
  relatedSports: ["warhammer-age-of-sigmar", "kill-team", "horus-heresy", "warcry"],
  skills: ["list-building meta-analysis", "objective play prioritization", "chess-clock time management", "rules mastery + judge appeals"],
  strategies: [
    { title: "Objective-first mentality", body: "Prioritize Primary Score capture over kill-counts — most events won on objectives, not table-clearing." },
    { title: "Clock discipline", body: "Chess-clock time is a resource; slow-play is the #1 competitive issue." },
  ],
  wikipediaTitle: "Warhammer 40,000",
  sources: [{ label: "Wikipedia — Warhammer 40,000", url: "https://en.wikipedia.org/wiki/Warhammer_40,000", publisher: "Wikipedia" }, { label: "Warhammer Community official", url: "https://www.warhammer-community.com", publisher: "Games Workshop" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default warhammer40kCompetitive;
