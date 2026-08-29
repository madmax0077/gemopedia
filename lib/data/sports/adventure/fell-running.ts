import type { Sport } from "@/lib/types";

export const fellRunning: Sport = {
  id: "fell-running",
  slug: "fell-running",
  name: "Fell Running",
  officialName: "Fell Running (Mountain / Hill Running)",
  aliases: ["Fell Racing", "Hill Running", "Mountain Running (British)"],
  shortDescription:
    "Traditional British off-road mountain running on FELLS (upland moors) of northern England + Scotland + Wales — self-navigating cross-country races over unmarked mountain terrain since 1800s Guides Races. Bob Graham Round (66-mile Lake District round of 42 peaks) is signature challenge.",
  longDescription:
    "Fell Running is a traditional British off-road running discipline over unmarked fell (upland moor + mountain) terrain, primarily in northern England (Lake District, Yorkshire Dales, Pennines), Scotland (Highlands), and Wales (Snowdonia). Distinct from marked trail running by SELF-NAVIGATION requirements: fell races have start + finish + checkpoints but no marked route between; runners choose their own line across mountain terrain using map + compass. Documented since 1800s Cumbrian Guides Races (originally exhibitions at Grasmere Sports + Highland Games). Governing body: Fell Runners Association (FRA, England + Wales) and Scottish Hill Runners (Scotland). Signature challenges: BOB GRAHAM ROUND (Lake District 66-mile round of 42 peaks in 24 hours; ~2500 completers since 1932), RAMSAY ROUND (Scottish Highlands 58-mile round of 24 Munros in 24 hours), PADDY BUCKLEY ROUND (Snowdonia 61-mile round). Fell running culture is stoic + minimalist + self-sufficient — 'fell runners' are a distinct subculture within British ultra-running.",

  category: "adventure-extreme-sports",
  subCategory: "off-road mountain running (self-navigating cross-country)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "Northern England + Scotland + Wales (Lake District, Pennines, Yorkshire Dales, Highlands, Snowdonia)",
  estimatedOrigin: "19th century Cumbrian Guides Races + Highland Games exhibitions; Bob Graham Round established 1932; Fell Runners Association founded 1970",

  players: { min: 1, max: 1, note: "Individual sport; races open to hundreds; individual finish times ranked." },
  equipment: [
    { name: "Fell running shoes (aggressive lug + drainage)", description: "Studded/lugged shoes for grip on grass + mud + rock; e.g. Inov-8, La Sportiva, Salomon fell/trail models." },
    { name: "Map + compass (mandatory)", description: "OS 1:25,000 maps + Silva compass; navigation is core skill." },
    { name: "Waterproof jacket + emergency kit", description: "Mandatory kit in Category A races (long/exposed courses): waterproof, hat, gloves, whistle, emergency food, bivvy bag." },
    { name: "GPS watch (optional)", description: "Modern runners often carry Garmin/Coros GPS but must still use map for navigation compliance." },
  ],
  duration: { approximateMinutes: 60, structure: "Short races: 30-90 min. Category A long races: 4-8 hours. Round challenges (Bob Graham etc.): 15-24 hours." },
  objective: "Complete course fastest from start to finish through required checkpoints.",
  matchStructure: "Races graded by distance + climb + navigation demand (Category A/B/C + Short/Medium/Long).",

  basicRules: [
    { title: "Cross-country from start to finish (self-navigate)", body: "Course has start + checkpoints + finish; runners choose line between them (unmarked)." },
    { title: "Categories by distance + climb", body: "Short (<6mi), Medium (6-12mi), Long (>12mi). Category A (steep climb + navigation), B (moderate), C (less demanding)." },
    { title: "Checkpoints must be visited in order", body: "Missing checkpoint = DQ; strict compliance." },
    { title: "Mandatory kit for Category A races", body: "Waterproof jacket + hat + gloves + whistle + emergency rations + bivvy bag; race organizer may inspect at start." },
    { title: "Weather-independent (mostly)", body: "Fell runners run through fog + rain + snow; races only cancelled for lightning or extreme storm." },
  ],
  advancedRules: [
    { title: "Bob Graham Round (BGR)", body: "24-hour Lake District round: 42 peaks + 66 miles + ~27,000ft climb; established 1932 by Bob Graham. Membership of Bob Graham 24 Hour Club upon successful completion (~2500 completers)." },
    { title: "Ramsay Round (Scotland)", body: "Scottish equivalent: 24 Munros + 58 miles + 28,500ft climb in 24 hours." },
    { title: "Paddy Buckley Round (Wales)", body: "Snowdonia equivalent: 47 peaks + 61 miles + 28,000ft climb in 24 hours." },
    { title: "British Fell Championship", body: "FRA-organized series of championship races across UK." },
    { title: "Self-sufficient culture", body: "Traditional fell running culture emphasizes minimalism, no support crew (for individual races), stoicism through discomfort." },
  ],
  scoring: {
    summary: "Fastest time completes course; ranked by finish time.",
    winCondition: "Fastest time wins.",
    breakdown: [
      { action: "Total finish time", points: "Fastest wins" },
      { action: "Missed checkpoint", points: "DQ" },
    ],
  },
  penalties: [
    { title: "Missed checkpoint", body: "DQ." },
    { title: "Kit inspection failure", body: "DQ + potential race day removal." },
    { title: "Cutting a mandatory route section", body: "DQ + potential future race ban." },
  ],

  positions: [{ name: "Fell runner", role: "Individual cross-country mountain runner.", count: 1 }],
  officiating: {
    officials: ["Race director", "Marshals at checkpoints", "Timekeepers", "Kit inspectors"],
    summary: "Marshals at checkpoints record runner numbers + times; kit inspections at start of Category A races.",
  },

  governingBodies: [
    { name: "Fell Runners Association (FRA)", founded: 1970, headquarters: "England + Wales", website: "https://www.fellrunner.org.uk" },
    { name: "Scottish Hill Runners (SHR)", founded: 1983, headquarters: "Scotland" },
    { name: "Welsh Fell Runners Association (WFRA)", founded: 1990, headquarters: "Wales" },
    { name: "World Mountain Running Association (WMRA, international body)", founded: 1984, headquarters: "Sondrio, Italy" },
  ],
  majorCompetitions: [
    { name: "British Fell Championship (FRA series)", frequency: "annual (6 races)", founded: 1972, region: "England + Wales" },
    { name: "Bob Graham Round (individual challenge)", frequency: "year-round attempts (annual attempts ~200)", founded: 1932, region: "Lake District, England" },
    { name: "Scottish Championship (SHR)", frequency: "annual", founded: 1985, region: "Scotland" },
    { name: "World Mountain Running Championships (WMRA)", frequency: "annual", founded: 1985, region: "rotating international hosts" },
    { name: "Grasmere Sports guides races (historic annual)", frequency: "annual (August)", founded: 1852, region: "Grasmere, Lake District" },
    { name: "Ben Nevis Race", frequency: "annual (September)", founded: 1937, region: "Fort William, Scotland (up + down UK's highest mountain)" },
  ],
  countriesPlayed: ["GB (dominant)", "IE", "US (some diaspora + WMRA affiliation)", "IT (WMRA-affiliated)", "NZ (mountain running affiliated)", "AU"],
  famousAthletes: [
    "Joss Naylor (England, 1936-) — legendary Lake District fell runner; 214 Wainwrights in 7 days (1986); 40+ years dominant BGR-era",
    "Bob Graham (England, 1889-1966) — created Bob Graham Round 1932 (42 peaks / 66 miles / 24 hours)",
    "Kilian Jornet (Spain) — modern-era fastest BGR (12h30m 2018) + Paddy Buckley + Ramsay records",
    "Billy Bland (England) — fell running icon 1970s-80s + BGR record 13h53m 1982 (held 36 years)",
    "Nicky Spinks (England) — women's BGR record + double BGR (extended endurance)",
    "Kenny Stuart (England) — 1980s champion + national record holder",
  ],
  records: [
    { title: "Bob Graham Round record (male)", holder: "Kilian Jornet (Spain)", value: "12:30 (2018) — 42 peaks + 66 miles + 27,000ft in 12.5 hours; broke Billy Bland's 36-year record", year: 2018 },
    { title: "Bob Graham Round record (female)", holder: "Beth Pascall (England)", value: "14:34 (2022) — female record", year: 2022 },
    { title: "Continuous Bob Graham Round Club", holder: "BGR completers", value: "~2500 successful completers since 1932 (as of 2024); highly selective community", year: 2024 },
    { title: "Joss Naylor's 214 Wainwrights in 7 days", holder: "Joss Naylor (England)", value: "1986 — all 214 Wainwright fell summits of Lake District in 7 days; iconic achievement", year: 1986 },
  ],

  variants: ["short-fell-race-under-6-miles", "medium-6-to-12-miles", "long-over-12-miles", "cat-a-mandatory-kit-steep-nav", "bob-graham-round-individual-24-hour-challenge", "welsh-1000m-peaks-race-multi-mountain"],
  relatedSports: ["trail-running", "ultra-marathon", "mountain-running-wmra", "orienteering", "skyrunning"],

  skills: ["off-road running (grass + mud + rock + heather)", "map + compass navigation (self-navigation)", "mountain-terrain descent technique (fast + safe)", "endurance (steep climbs at pace)", "weather + terrain reading", "mental resilience (fog + rain + long solo hours)"],
  strategies: [
    { title: "Line choice > raw speed", body: "Fastest runners often win via superior line choice through terrain vs. brute pace on suboptimal routes." },
    { title: "Descent technique", body: "Fast fell descents require aggressive commitment + reading terrain; separates elite fell runners from road runners." },
    { title: "Weather awareness", body: "Sudden fog + rain can transform navigation; carry map/compass + know how to use." },
    { title: "Kit discipline for Category A", body: "Never leave mandatory kit despite weight penalty; can save life in emergency." },
  ],

  terminology: [
    { term: "Fell", meaning: "British upland/moor/mountain terrain (from Old Norse 'fjall')." },
    { term: "Bob Graham Round (BGR)", meaning: "Signature 24-hour Lake District round of 42 peaks + 66 miles." },
    { term: "Wainwrights", meaning: "The 214 Lake District fell summits catalogued by Alfred Wainwright." },
    { term: "Munro", meaning: "Scottish mountain over 3,000ft (914m); 282 Munros total in Scotland." },
    { term: "Cat A", meaning: "Category A race — steep, navigation-demanding, mandatory kit required." },
    { term: "Guides Race", meaning: "Historical Grasmere Sports guides' race — origin of modern fell running." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join local fell running club", body: "UK fell running clubs (Ambleside, Borrowdale, Keswick, Bowland etc.) welcome beginners." },
      { title: "Start with short/medium Cat C races", body: "FRA calendar has hundreds of races graded by difficulty." },
      { title: "Learn navigation basics (map + compass)", body: "Essential fell running skill; take navigation course." },
    ]},
    { level: "advanced", steps: [
      { title: "Complete Cat A long races (>12 miles + steep + nav)", body: "Progression to more challenging fell races." },
      { title: "Attempt Bob Graham Round (24-hour Lake District challenge)", body: "Signature individual challenge; membership of BGR Club upon success." },
      { title: "Ramsay Round (Scotland) or Paddy Buckley Round (Wales)", body: "Additional 24-hour rounds for BGR completers." },
    ]},
  ],

  faq: [
    { question: "How is fell running different from trail running?", answer: "Fell running is UNMARKED (self-navigate with map/compass); trail running is typically MARKED. Fell running is UK-specific tradition on unmarked upland terrain; trail running is broader international category on trails. Fell running culture emphasizes minimalism + self-sufficiency; trail running (especially US) can be commercialized + heavily supported. Physical demands overlap (off-road + hilly) but navigation demand distinguishes fell running." },
    { question: "What is the Bob Graham Round?", answer: "The Bob Graham Round (BGR) is a Lake District round of 42 peaks + 66 miles + ~27,000ft climb — must be completed in 24 hours or less to qualify. Established 1932 when Bob Graham (Keswick hotelier) completed it in 23h39m as a personal challenge. Since 1971 the Bob Graham 24 Hour Club has ~2500 successful completers. Kilian Jornet holds the male record 12h30m (2018); Beth Pascall the female record 14h34m (2022). Iconic UK ultra-running challenge." },
    { question: "Is fell running dangerous?", answer: "Elevated risk from mountain terrain: falls, hypothermia in weather changes, navigation errors leading to being lost + exposure. Fatalities occur but rare (~1-2 per year across UK). Mandatory kit + navigation skill + weather awareness essential. Bob Graham + long solo attempts carry highest risk. Modern GPS + rescue teams significantly improved safety vs. 1970s-80s era." },
  ],

  wikipediaTitle: "Fell running",
  sources: [
    { label: "Fell Runners Association", url: "https://www.fellrunner.org.uk", publisher: "FRA" },
    { label: "Bob Graham 24 Hour Club", url: "https://www.bobgrahamclub.org.uk", publisher: "BG Club" },
    { label: "Wikipedia — Fell running", url: "https://en.wikipedia.org/wiki/Fell_running", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
