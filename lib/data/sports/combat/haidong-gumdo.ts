import type { Sport } from "@/lib/types";

export const haidongGumdo: Sport = {
  id: "haidong-gumdo",
  slug: "haidong-gumdo",
  name: "Haidong Gumdo",
  officialName: "Haidong Gumdo (해동검도)",
  aliases: ["Korean sword art", "海東劍道"],
  shortDescription:
    "Modern Korean sword art founded 1982 by Kim Jeong Ho + Na Han-Il — focuses on Ssanggeom (two-sword forms), Bemgi (cutting rolled straw), and Gyeokgeom (choreographed multi-opponent). Governed by World Haidong Gumdo Federation (WHDGF) since 1996.",
  longDescription:
    "Haidong Gumdo ('Way of the Eastern Sea Sword') is a modern Korean sword martial art formalised in 1982 by Kim Jeong Ho + Na Han-Il, claiming lineage to ancient Goguryeo warrior traditions (historical continuity disputed by scholars). Three competition disciplines: Bonguk-geombeop (solo forms), Bemgi (target cutting on rolled straw or tatami mats soaked in water), and Gyeokgeom (choreographed multi-opponent sparring with wooden swords). Distinct from Kumdo (Korean Kendo) — Haidong Gumdo uses no armoured sparring but does include live-blade cutting at black-belt level after 3-4 years wooden-sword training. Governed by World Haidong Gumdo Federation (WHDGF, founded 1996, HQ Anyang, South Korea) with 50+ member countries; also active European Haidong Gumdo Cup since 2003.",
  category: "combat-sports",
  subCategory: "Korean sword martial art",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "KR",
  regionOfOrigin: "South Korea (national; HQ Anyang)",
  estimatedOrigin: "Founded 1982 by Kim Jeong Ho + Na Han-Il; international WHDGF 1996",
  players: { min: 1, max: 4, note: "Solo forms + cutting; up to 4 in choreographed multi-opponent gyeokgeom." },
  equipment: [
    { name: "Mokgeom (wooden sword)", description: "Solid oak/hickory practice sword — used white belt through 1st dan." },
    { name: "Jingum (live blade)", description: "Traditional Korean straight-blade sword with sheath — for bemgi cutting after black-belt." },
    { name: "Cutting mats (jimmul/tatami)", description: "Water-soaked rolled straw/tatami targets mounted on stands." },
    { name: "Dobok uniform", description: "Traditional Korean black-top/white-bottom uniform with belt colour rank." },
  ],
  duration: { approximateMinutes: 5, structure: "Form events 3-5 min; cutting 60-90 sec; sparring 3-min rounds." },
  objective: "Demonstrate form precision, target-cut cleanliness, or defeat multi-opponent choreography.",
  matchStructure: "Three disciplines: Bonguk-geombeop (solo forms), Bemgi (cutting), Gyeokgeom (choreographed sparring with wooden swords).",
  basicRules: [
    { title: "Weapon respect protocol", body: "Formal bow to shomen + opponent before drawing sword." },
    { title: "Live blade only at black-belt", body: "Students train wooden mokgeom 1-2 years, jingum unsharpened 1-2 more, live blade after black-belt certification." },
    { title: "Cutting judged on cleanliness", body: "Bemgi scored on clean cuts through 5 targets max per run." },
  ],
  advancedRules: [
    { title: "Ssanggeom (two-sword) forms", body: "Advanced practitioners study dual-sword kata." },
    { title: "Multi-opponent gyeokgeom", body: "Choreographed 3-attacker scenarios with retreat + spinning cut sequences." },
  ],
  scoring: {
    summary: "Forms judged 0-10 by 5 judges (drop high/low, avg middle 3); cutting scored on target cleanliness.",
    winCondition: "Highest median form score, cleanest cut sequence, or best choreographed sparring.",
    breakdown: [
      { action: "Clean bemgi cut", points: "Full score per target" },
      { action: "Form technique", points: "0-10 per judge" },
    ],
  },
  penalties: [
    { title: "Uncontrolled cutting", body: "Missed/dropped sword = 0 score for run." },
    { title: "Broken form etiquette", body: "Failure to bow/sheath correctly = 1-pt deduction per infraction." },
    { title: "Unsafe sword handling", body: "Live-blade point toward observer = instant DQ + safety review." },
  ],
  positions: [{ name: "Gumdo-in (practitioner)", role: "Solo forms, target cutter, choreographed sparring partner.", count: 1 }],
  officiating: {
    officials: ["Chief referee (jujung-simpan)", "5 form judges", "3 cutting judges", "Timekeeper", "Safety officer for live-blade"],
    summary: "5 judges score forms independently (drop high/low, avg middle 3); cutting scored + video review.",
  },
  governingBodies: [
    { name: "World Haidong Gumdo Federation (WHDGF)", founded: 1996, headquarters: "Anyang, South Korea" },
    { name: "Korea Haidong Gumdo Association", founded: 1982, headquarters: "Anyang, South Korea" },
  ],
  majorCompetitions: [
    { name: "World Haidong Gumdo Championships", frequency: "biennial", founded: 1997, region: "global (host rotates)" },
    { name: "Korea National Championships", frequency: "annual", founded: 1985, region: "South Korea" },
    { name: "European Haidong Gumdo Cup", frequency: "annual", founded: 2003, region: "Europe" },
  ],
  countriesPlayed: ["KR", "US", "GB", "DE", "FR", "NL", "AU", "AR", "MX"],
  famousAthletes: ["Kim Jeong Ho (Korea) — co-founder + 10th dan honorary grandmaster", "Na Han-Il (Korea) — co-founder"],
  records: [
    { title: "WHDGF founding", holder: "World Haidong Gumdo Federation", value: "Now 50+ member countries; HQ Anyang, South Korea", year: 1996 },
    { title: "Highest dan rank", holder: "Kim Jeong Ho (co-founder)", value: "10th dan, honorary grandmaster", year: 2020 },
  ],
  variants: ["ssanggeom-two-sword", "gyeokgeom-multi-opponent"],
  relatedSports: ["kendo", "kumdo", "iaido", "kobudo"],
  skills: ["sword grip", "cutting mechanics", "choreographed sparring", "solo form precision"],
  strategies: [
    { title: "Bemgi target-flow", body: "Down-diagonal → reverse-cut → horizontal cut for max cleanliness across 5 targets." },
    { title: "Ssanggeom offset", body: "Lead sword attacks; trailing sword covers centreline." },
    { title: "Gyeokgeom retreat-cut", body: "Retreat 3 steps drawing attackers, explode forward with rising diagonal cut + spinning back-cut." },
  ],
  terminology: [
    { term: "Bemgi", meaning: "Target cutting on rolled straw/tatami" },
    { term: "Ssanggeom", meaning: "Two-sword form" },
    { term: "Gyeokgeom", meaning: "Choreographed sparring" },
    { term: "Mokgeom", meaning: "Wooden practice sword" },
    { term: "Jingum", meaning: "Live-blade sword" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "White belt basics", body: "Grip (jabgeom), stances (jaseh), basic strikes, sword etiquette." }] },
    { level: "intermediate", steps: [{ title: "Coloured belt forms", body: "Ssanggeom two-sword forms, mokgeom drills, cutting fundamentals." }] },
    { level: "advanced", steps: [{ title: "Black belt (dan grading)", body: "Live-blade cutting, gyeokgeom multi-opponent, teaching methodology." }] },
  ],
  faq: [
    { question: "Is Haidong Gumdo the same as Kumdo?", answer: "No — Kumdo (Kendo) uses shinai + armour with Japanese roots. Haidong Gumdo is independent Korean sword system with live-blade cutting + forms, no armoured sparring." },
    { question: "Can I do live-blade cutting as a beginner?", answer: "No — students train wooden mokgeom 1-2 years, unsharpened jingum 1-2 more, live-blade only after black-belt under supervision." },
  ],
  wikipediaTitle: "Haidong Gumdo",
  sources: [{ label: "Wikipedia — Haidong Gumdo", url: "https://en.wikipedia.org/wiki/Haidong_Gumdo", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default haidongGumdo;
