import type { Sport } from "@/lib/types";

export const fieldArchery: Sport = {
  id: "field-archery",
  slug: "field-archery",
  name: "Field Archery",
  officialName: "Field Archery",
  aliases: ["Field Round Archery", "WA Field"],
  shortDescription:
    "Outdoor archery on woodland-terrain courses with 24-target rounds at variable distances (5-60 m) — unlike static target archery, shooters roam course shooting from marked pegs on angled/uphill/downhill shots. World Archery + IFAA world championships.",
  longDescription:
    "Field Archery is an outdoor archery discipline in which archers shoot at fixed paper or 3D animal targets set at variable distances along a woodland or roughened terrain course (typically 24 targets across ~1.5-2.5 km). Unlike target archery (which uses static 30-90 m distances on flat range), field archery shots range from 5 m to 60 m, often uphill, downhill, over gullies, through tree gaps — requiring range estimation, elevation compensation, and terrain reading. World Archery (WA) Field format: 24 targets, 3 arrows per target = 72 arrows. IFAA (International Field Archery Association) format: 28 targets, 4 arrows per target = 112 arrows. Categories: Recurve, Compound, Barebow (no sights, no stabilisers), Longbow, Traditional. Both organisations run separate World Championships biennially. WA Field World Championships since 1969. Field archery is popular in Nordic + Alpine countries + North America; less mass-appeal than target archery but preferred by many recreational + hunting-adjacent shooters. Distinct from 3D archery (which uses foam animal targets exclusively).",
  category: "precision-sports",
  subCategory: "outdoor archery on terrain course",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (National Field Archery Association) / Nordic + Alpine Europe",
  estimatedOrigin: "Formalised 1930s USA (NFAA); World Archery Field World Championships since 1969",
  players: { min: 1, max: 4, note: "Individual sport; typically shot in groups of 3-4 archers rotating on each target." },
  equipment: [
    { name: "Recurve / Compound / Barebow / Longbow / Traditional bow", description: "Category-specific bow; sight + stabilisers vary by category (Barebow: none)." },
    { name: "Arrows (carbon/aluminium)", description: "Category-matched arrow spine; typical 12-24 arrows per round + spares." },
    { name: "Quiver + finger tab / release aid", description: "Hip or bow quiver; finger tab (recurve/barebow) or mechanical release (compound)." },
    { name: "Field course (24 or 28 targets)", description: "Marked terrain course with numbered pegs at each target position; wooded/hilly terrain preferred." },
  ],
  duration: { approximateMinutes: 240, structure: "24-target WA round takes ~4 hrs; 28-target IFAA round ~4-5 hrs." },
  objective: "Achieve highest cumulative score across all 24 (WA) or 28 (IFAA) targets by hitting inner-most scoring rings.",
  matchStructure: "Individual round of 24 or 28 targets; 3 or 4 arrows per target; cumulative score. Team + head-to-head match play formats also exist.",
  basicRules: [
    { title: "Shoot from marked distance peg", body: "Each target has a peg indicating distance + shooting position; shooter's feet must touch peg." },
    { title: "3 or 4 arrows per target", body: "WA: 3 arrows per target. IFAA: 4 arrows per target." },
    { title: "Scoring rings (5-6 zones)", body: "Center ring 6 (WA) or 5 (IFAA); outer rings decreasing to 1." },
  ],
  advancedRules: [
    { title: "Marked vs unmarked (distance) rounds", body: "WA Marked: peg shows distance. WA Unmarked: no distance shown — archer estimates. Unmarked is much harder." },
    { title: "Category-specific bow rules", body: "Barebow: no sight, no stabilisers > 12 inch, no clicker. Recurve/Compound: full sight + stabilisers permitted." },
    { title: "Course marshalling + safety", body: "Archers rotate on target; only one archer shoots at a time; safety zones marked." },
  ],
  scoring: {
    summary: "Sum of scoring rings hit across all target arrows.",
    winCondition: "Highest total score wins.",
    breakdown: [{ action: "Center ring hit (X or 6)", points: "6 (WA) or 5 (IFAA)" }, { action: "Outer ring", points: "1-5" }, { action: "Miss (arrow off target)", points: "0" }],
  },
  penalties: [
    { title: "Foot not touching peg", body: "Score deduction or arrow discounted." },
    { title: "Shooting out of turn", body: "Warning; repeat = point penalty." },
    { title: "Damage to target face", body: "Rounds arrows discounted if faces damaged." },
  ],
  positions: [{ name: "Field Archer", role: "Solo shooter progressing through target course.", count: 1 }],
  officiating: { officials: ["Field Judges (patrol course)", "Target Marshalls", "Scorer per group"], summary: "Field judges patrol course to enforce rules + safety; scorer per group of 3-4 archers." },
  governingBodies: [
    { name: "World Archery Federation (WA, formerly FITA)", founded: 1931, headquarters: "Lausanne, Switzerland" },
    { name: "International Field Archery Association (IFAA)", founded: 1970, headquarters: "Cardiff, UK" },
    { name: "National Field Archery Association (NFAA, USA)", founded: 1939, headquarters: "Yankton, South Dakota" },
  ],
  majorCompetitions: [
    { name: "World Archery Field World Championships", frequency: "biennial", founded: 1969, region: "worldwide" },
    { name: "IFAA World Field Archery Championships", frequency: "biennial", founded: 1972, region: "worldwide" },
    { name: "NFAA National Field Championships", frequency: "annual", founded: 1939, region: "USA" },
  ],
  countriesPlayed: ["US", "GB", "DE", "SE", "FI", "NO", "AT", "IT", "FR", "AU", "CA", "JP", "KR"],
  famousAthletes: ["Multiple World Archery Field World Champions in Recurve/Compound/Barebow categories"],
  records: [
    { title: "WA Field World Championships since 1969", holder: "World Archery", value: "WA Field World Championships since 1969 (formalised as continental + world discipline)", year: 1969 },
    { title: "IFAA established 1970", holder: "IFAA", value: "IFAA formed 1970 to codify field archery separate from FITA/WA target-archery focus", year: 1970 },
  ],
  variants: ["field-archery-recurve", "field-archery-compound", "field-archery-barebow", "field-archery-longbow", "field-archery-traditional"],
  relatedSports: ["target-archery", "3d-archery", "traditional-archery", "kyudo"],
  skills: ["distance estimation", "elevation compensation (uphill/downhill)", "wind reading in wooded terrain", "endurance walking + shooting"],
  strategies: [
    { title: "Sight-mark memorisation per distance", body: "Compound + recurve shooters memorise sight marks for every 5 m increment; unmarked rounds require quick range estimation." },
    { title: "Uphill/downhill compensation", body: "Uphill + downhill shots require aiming lower than horizontal-equivalent distance — 'gravity distance' rule." },
    { title: "Rhythm + fatigue management", body: "4-hour round on hilly terrain; conserve energy + maintain shot rhythm to prevent late-round score drift." },
  ],
  terminology: [
    { term: "Peg", meaning: "Numbered marker at each shooting position indicating distance" },
    { term: "Marked / Unmarked round", meaning: "Distance shown / hidden on peg" },
    { term: "6-ring / X-ring", meaning: "Innermost scoring ring on WA field face" },
    { term: "Bare bow", meaning: "Bow without sights, stabilisers, or clicker" },
    { term: "Gravity distance", meaning: "Effective distance for uphill/downhill compensation" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Club field course + marked distances", body: "Complete first field round on club course with marked distances." }] },
    { level: "intermediate", steps: [{ title: "Regional + national marked rounds", body: "Compete at regional/national level marked rounds; refine sight marks." }] },
    { level: "advanced", steps: [{ title: "WA / IFAA World Championships unmarked", body: "Compete internationally including unmarked rounds requiring elite range estimation." }] },
  ],
  faq: [
    { question: "How does field archery differ from target archery?", answer: "Target archery = flat range, fixed 30-90 m distances, static face. Field archery = wooded/hilly terrain course, variable 5-60 m distances, angled uphill/downhill shots, walking between targets." },
    { question: "Is field archery in the Olympics?", answer: "No — only target archery (individual recurve at 70 m, team + mixed team) is Olympic. Field archery is contested at World Games + WA Field World Championships." },
  ],
  wikipediaTitle: "Field archery",
  sources: [{ label: "Wikipedia — Field archery", url: "https://en.wikipedia.org/wiki/Field_archery", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default fieldArchery;
