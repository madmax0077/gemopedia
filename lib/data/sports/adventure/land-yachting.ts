import type { Sport } from "@/lib/types";

export const landYachting: Sport = {
  id: "land-yachting",
  slug: "land-yachting",
  name: "Land Yachting",
  officialName: "Land Yachting (Sand Yachting / Land Sailing)",
  aliases: ["Land Sailing", "Sand Yachting", "Char à Voile", "Blokart"],
  shortDescription:
    "Wind-powered three-wheeled 'yacht' with rigid sail — raced on hard beaches, dry lake beds, and open flat land. Ancient origins (Chinese 6th century wind-powered wheelbarrows); modern sport formalized 1900s Belgium. Speed record 202.9 km/h set on Ivanpah 2009 by Greenbird.",
  longDescription:
    "Land Yachting (Land Sailing, Sand Yachting, French 'Char à Voile') is a wind-powered land sport where a rigid-sail three-wheeled 'yacht' is raced across hard flat surfaces — beaches, dry lake beds, salt flats, and open plains. Distinct from kite buggy by using RIGID SAIL (like sailboat) instead of kite. Ancient origins: Chinese 6th-century sail-powered wheelbarrows + medieval European wind carts. Modern sport formalized ~1900 by Belgian brothers Louis + Pierre Dumont (patented modern land yacht 1898). Massively popular in France's northern beaches (Belgian border, Berck-sur-Mer, Le Touquet) since 1910s. World speed sailing record: 202.9 km/h (126 mph) set by Greenbird (UK) at Ivanpah Dry Lake Bed, Nevada, March 2009 — one of fastest wind-powered vehicles ever. Modern classes: Class 2 (open, largest), Class 3, Class 5 (smallest), and BLOKART (portable small class popular for casual play). International Federation for Sand and Land Yachting (FISLY) governs.",
  category: "adventure-extreme-sports",
  subCategory: "wind-powered land vehicle (rigid sail)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "regional",
  countryOfOrigin: "BE",
  regionOfOrigin: "Belgium + France (northern beaches Belgian-French border); ancient Chinese wheelbarrow ancestors",
  estimatedOrigin: "Chinese 6th century wind-powered wheelbarrows; medieval European wind carts; modern sport formalized 1898 by Louis + Pierre Dumont (Belgium); FISLY founded 1962",
  players: { min: 1, max: 1, note: "Individual sport; solo pilot in yacht." },
  equipment: [
    { name: "Land yacht (3-wheeled)", description: "Aluminum/steel frame; rigid sail on mast; single steerable front wheel + 2 rear wheels; low-slung pilot seat." },
    { name: "Rigid sail", description: "Fabric sail on aluminum/carbon spar; various classes have specified sail areas (2.5m² for Blokart, 7.4m² Class 5, larger for Class 2 + 3)." },
    { name: "Helmet + safety gear", description: "Standard safety at high speeds." },
  ],
  duration: { approximateMinutes: 30, structure: "Race format: 20-45 minute races." },
  objective: "Fastest race time or highest speed run (recreational + competitive).",
  matchStructure: "Race courses on beach or flat terrain; class-based races.",
  basicRules: [
    { title: "Wind-powered rigid sail", body: "Sail catches wind + generates thrust; pilot manages sail trim + steering." },
    { title: "Steering via foot pedals + sail trim", body: "Foot pedals steer front wheel; sail trim adjusts direction + speed." },
    { title: "Class-based competition", body: "Class 2 (open, largest), Class 3, Class 5, Blokart (portable) — regulated for fair racing." },
    { title: "Race courses on flat firm terrain", body: "Beach, dry lake bed, salt flat, grass field with permission." },
  ],
  advancedRules: [
    { title: "Racing tactics (windward-leeward)", body: "Sailing tactics translate to land yachting — can sail upwind at ~45° angle to wind." },
    { title: "Speed sailing record attempts", body: "Ivanpah Dry Lake Bed hosts annual speed events; Greenbird (UK) holds 202.9 km/h world record 2009." },
    { title: "Wind range 8-40 knots", body: "Sail area adjusted for wind conditions; too little wind = no motion, too much = safety risk." },
  ],
  scoring: {
    summary: "Race position or speed record.",
    winCondition: "Fastest race time.",
    breakdown: [
      { action: "Race finish position", points: "1st, 2nd, etc." },
      { action: "Speed sailing max km/h", points: "Speed sailing record" },
    ],
  },
  penalties: [{ title: "Course cut", body: "Time penalty." }],
  positions: [{ name: "Pilot (land yacht sailor)", role: "Solo pilot controlling sail + steering.", count: 1 }],
  officiating: { officials: ["Race committee", "Course marshals", "Timekeepers"], summary: "Sailing-like race officiating." },
  governingBodies: [
    { name: "Fédération Internationale de Sand et Land Yachting (FISLY)", founded: 1962, headquarters: "France", website: "https://www.fisly.org" },
    { name: "North American Land Sailing Association (NALSA)", founded: 1972, headquarters: "USA" },
    { name: "Fédération Française de Char à Voile (FFCV)", founded: 1979, headquarters: "France" },
  ],
  majorCompetitions: [
    { name: "Land Yachting World Championships", frequency: "biennial", founded: 1962, region: "rotating hosts" },
    { name: "European Land Yachting Championships", frequency: "biennial", founded: 1970, region: "European beaches" },
    { name: "Ivanpah Speed Sailing (NALSA)", frequency: "annual", founded: 1975, region: "Ivanpah Dry Lake Bed, Nevada, USA" },
    { name: "Char à Voile World Cup (France)", frequency: "annual", founded: 1980, region: "French northern beaches" },
  ],
  countriesPlayed: ["FR", "BE", "NL", "GB", "US", "AU", "NZ", "DE", "IT", "ES", "AE"],
  famousAthletes: [
    "Greenbird team (UK)", // world speed record holders
    "Various World Championship class winners across FISLY history",
    "Peter Ainsworth (UK, Greenbird pilot) — 202.9 km/h world speed record 2009",
  ],
  records: [
    { title: "World speed sailing record (land)", holder: "Greenbird (UK, Peter Ainsworth)", value: "202.9 km/h (126 mph) at Ivanpah Dry Lake Bed, March 26, 2009 — one of fastest wind-powered vehicles ever recorded", year: 2009 },
    { title: "Belgian-French coast century-long tradition", holder: "Char à Voile", value: "French/Belgian northern coast has practiced land yachting continuously since 1910s; oldest continuous land yachting culture worldwide", year: 2024 },
  ],
  variants: ["class-2-largest-open", "class-3-mid-size", "class-5-smaller", "blokart-portable-small-class"],
  relatedSports: ["kite-buggy", "sailing", "ice-yachting", "iceboating"],
  skills: ["sail trim (rigid sail management)", "steering via foot pedals + sail", "wind reading", "high-speed control", "racing tactics (sailing-derived)"],
  strategies: [
    { title: "Sailing tactics apply", body: "Land yachting uses same tactics as sailing: windward, leeward, tacks, jibes." },
    { title: "Sail size for wind conditions", body: "Larger sail for lighter wind, smaller for stronger; class regulations limit size in competition." },
    { title: "Speed sailing straight-line commitment", body: "Speed record attempts require full commitment + straight line + no directional correction." },
  ],
  terminology: [
    { term: "Char à Voile", meaning: "French for land yacht / land sailing." },
    { term: "Blokart", meaning: "Small portable land yacht class." },
    { term: "FISLY", meaning: "International governing body (Fédération Internationale de Sand et Land Yachting)." },
    { term: "Ivanpah", meaning: "Nevada dry lake bed — primary US speed sailing venue." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Start with Blokart (portable small class)", body: "Blokart is beginner-friendly + widely available at coastal + beach venues." },
      { title: "Take lesson at French/Belgian beach char à voile school", body: "French northern beaches have century-old land yachting instruction culture." },
    ]},
    { level: "advanced", steps: [
      { title: "FISLY class-based competition", body: "Class 2 (largest, fastest) is competitive apex; requires expensive custom yacht." },
      { title: "Speed sailing at Ivanpah or Belgian Coast", body: "Straight-line speed record attempts." },
    ]},
  ],
  faq: [
    { question: "How is land yachting different from kite buggy?", answer: "Land yacht uses RIGID SAIL (like sailboat) on mast; kite buggy uses flying KITE for power. Land yacht rigid sail is more predictable + slightly slower + easier to learn racing. Kite buggy can go higher speeds + more freestyle potential but harder to master + more dangerous. Different equipment, different skill sets, related but distinct sports." },
    { question: "How fast can land yachts go?", answer: "Recreational cruising: 30-50 km/h. Competitive racing: 60-100 km/h. Speed sailing world record: 202.9 km/h (126 mph) by Greenbird at Ivanpah 2009 — among fastest wind-powered vehicles ever. Speeds depend heavily on wind strength + terrain + yacht class." },
  ],
  wikipediaTitle: "Land sailing",
  sources: [
    { label: "FISLY", url: "https://www.fisly.org", publisher: "FISLY" },
    { label: "Wikipedia — Land sailing", url: "https://en.wikipedia.org/wiki/Land_sailing", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
