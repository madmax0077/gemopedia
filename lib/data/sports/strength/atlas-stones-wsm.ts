import type { Sport } from "@/lib/types";

export const atlasStonesWsm: Sport = {
  id: "atlas-stones-wsm",
  slug: "atlas-stones-wsm",
  name: "Atlas Stones",
  officialName: "Atlas Stones",
  aliases: ["Stones of Strength", "Manhood Stones"],
  shortDescription:
    "Iconic strongman event where competitors lift 5 progressively heavier spherical stones (100-200+ kg) onto platforms of decreasing height in fastest time; signature World's Strongest Man closing event since 1986.",
  longDescription:
    "Atlas Stones (also known as Stones of Strength) is one of the most iconic events in professional strongman competition, particularly featured as the final event of World's Strongest Man (WSM) since 1986. Competitors lift 5 progressively heavier concrete/rubberized spherical stones (typically 100-200+ kg / 220-440+ lb) from ground level onto platforms of decreasing height (140 cm to 120 cm typically). Fastest total time wins; if unable to finish, most stones lifted wins. The technique combines the atlas lift (initial ground-to-lap) followed by the extension press to platform. Derived from traditional Scottish/Basque stone lifting (Manhood Stones tradition). Modern equipment: tacky (pine resin) on forearms for grip, harnessed lifting suits sometimes allowed. WSM records: Brian Shaw (USA), Žydrūnas Savickas (LTU), Eddie Hall (GBR), Tom Stoltman (GBR — current WSM champion 2021-2024) have all set stone records. Considered the ultimate test of raw functional strength + explosive lifting.",
  category: "strength-sports",
  subCategory: "strongman event",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "major",
  countryOfOrigin: "GB",
  regionOfOrigin: "Scotland (traditional roots); modern format from WSM (1986)",
  estimatedOrigin: "Traditional Scottish/Basque roots; modern strongman format 1986 (WSM finals)",
  players: { min: 1, max: 1, note: "Individual timed event." },
  equipment: [
    { name: "Atlas Stones (5)", description: "Concrete/rubber stones ranging 100-200+ kg." },
    { name: "Loading platforms", description: "Platforms at descending heights (140→120 cm typical)." },
    { name: "Tacky (pine resin)", description: "Applied to forearms for grip." },
  ],
  duration: { approximateMinutes: 1, structure: "Single timed heat; 60-90 second cap typical." },
  objective: "Lift all 5 progressively-heavier stones to their platforms in fastest time.",
  matchStructure: "One heat per competitor; stones must fully clear platform edge to count.",
  basicRules: [
    { title: "Stones must reach platforms", body: "Ground → lap → extension press to platform." },
    { title: "Ascending weight, descending platform", body: "Stones 100→200 kg on platforms 140→120 cm." },
    { title: "Fastest time or most stones wins", body: "Complete all 5 for time, or most lifted wins if no full completion." },
  ],
  scoring: {
    summary: "Time-based; ranked by finish time (or stones completed if incomplete).",
    winCondition: "Lowest total time to load all 5 stones.",
  },
  positions: [{ name: "Strongman athlete", role: "Sole competitor per heat.", count: 1 }],
  governingBodies: [{ name: "World's Strongest Man (IMG Media / Rogue Fitness)", founded: 1977, headquarters: "USA/UK" }, { name: "Strongman Champions League", founded: 2008, headquarters: "Europe" }],
  majorCompetitions: [{ name: "World's Strongest Man Finals", frequency: "annual", founded: 1977, region: "worldwide (rotating hosts)" }, { name: "Arnold Strongman Classic", frequency: "annual", founded: 2002, region: "Columbus, Ohio, USA" }],
  countriesPlayed: ["USA", "GBR", "LTU", "POL", "ISL", "UKR", "GER", "CAN"],
  famousAthletes: ["Bill Kazmaier", "Magnus Ver Magnusson", "Brian Shaw", "Žydrūnas Savickas", "Eddie Hall", "Hafþór Björnsson (The Mountain)", "Tom Stoltman", "Mitchell Hooper"],
  records: [
    { title: "Tom Stoltman WSM 4x champion", holder: "Tom Stoltman (GBR)", value: "WSM Atlas Stones + overall winner 2021, 2022, 2024, 2025", year: 2025 },
    { title: "Eddie Hall 500 kg deadlift", holder: "Eddie Hall (GBR)", value: "First-ever 500 kg deadlift (Jul 2016 Leeds) + 2017 WSM champion", year: 2017 },
  ],
  variants: ["scottish-manhood-stones", "husafell-stone", "dinnie-stones"],
  relatedSports: ["log-lift-wsm", "farmers-walk-strongman", "deadlift", "highland-games"],
  skills: ["explosive lift", "grip strength", "core stability", "leg drive"],
  strategies: [
    { title: "Efficient lap-to-lockout transition", body: "Fast hip drive out of lap position saves seconds." },
    { title: "Grip: tacky application + timing", body: "Correct tacky quantity + placement critical." },
  ],
  wikipediaTitle: "Atlas Stones",
  sources: [{ label: "Wikipedia — Atlas Stones", url: "https://en.wikipedia.org/wiki/Atlas_stones", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default atlasStonesWsm;
