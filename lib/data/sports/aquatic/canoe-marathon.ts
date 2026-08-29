import type { Sport } from "@/lib/types";

export const canoeMarathon: Sport = {
  id: "canoe-marathon",
  slug: "canoe-marathon",
  name: "Canoe Marathon",
  officialName: "Canoe Marathon (ICF)",
  aliases: ["Marathon Canoeing", "Kayak Marathon", "CM"],
  shortDescription:
    "ICF long-distance kayak + canoe racing over 20-42 km courses on rivers, lakes, and estuaries — includes running portages between paddling sections. World Championships since 1988; K1/K2/C1/C2 formats.",
  longDescription:
    "Canoe Marathon is an ICF-sanctioned long-distance canoeing + kayaking discipline. Races are typically 20-42 km on natural water — rivers, lakes, estuaries — with course legs interrupted by portages: designated sections where paddlers must exit boat, sprint carrying craft overland (200-500 m typical), then relaunch. Portages are a defining tactical element — race-changing overtake opportunities. Held in K1 (single kayak), K2 (double kayak), C1 (single Canadian canoe), C2 (double Canadian canoe) categories with men + women divisions. Junior + U23 + Masters classes at ICF World Championships. Races typically 2-4 hours in duration; requires blend of endurance paddling + explosive sprint (portages + starts) + tactical drafting (wash-hanging behind faster paddlers). ICF World Championships held annually since 1988 (formalised biennial then annual). Also popular circuits: Devizes to Westminster (UK, 200 km overnight), Molokai Challenge (Hawaii, ocean kayak surfski), Sella Descent (Spain), Vasaloppet (Sweden). Distinct from ICF sprint (200-1000 m flat-water Olympic events) + slalom (whitewater technical) — marathon is endurance-focused.",
  category: "aquatic-sports",
  subCategory: "long-distance canoe + kayak with portages",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "summer", era: "20th-century", popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "European (UK, Scandinavia, Iberia, France)",
  estimatedOrigin: "Long-distance canoe tradition since 19th century; Devizes to Westminster since 1948; ICF World Championships from 1988",
  players: { min: 1, max: 2, note: "K1/C1 single; K2/C2 doubles; some races have larger crew classes (K4)." },
  equipment: [
    { name: "Marathon K1 / K2 kayak", description: "Long (~5.2-5.4 m K1, ~6.5-7 m K2), narrow, lightweight kevlar/carbon; different from sprint kayaks — heavier, more stable for long-distance paddling." },
    { name: "Marathon C1 / C2 Canadian canoe", description: "Open-cockpit Canadian canoe; single or double paddler kneels + paddles single-blade paddle." },
    { name: "Wing paddle (K) / Single-blade (C)", description: "Kayakers use wing (asymmetric) paddles; canoeists use single-blade paddles." },
    { name: "PFD (life jacket)", description: "Mandatory in most ICF marathon races." },
  ],
  duration: { approximateMinutes: 180, structure: "Typical race 20-42 km = 2-4 hrs; some ultra-marathons 100+ km." },
  objective: "Cover course fastest — paddling water sections + portaging land sections — from start to finish line.",
  matchStructure: "Mass start (or seeded start), first across finish line wins. Portages between water sections require boat carrying.",
  basicRules: [
    { title: "Portages mandatory at designated points", body: "Exit boat, carry it across land section, relaunch at portage-out point — skipping = DSQ." },
    { title: "Drafting (wash-hanging) allowed", body: "Sitting in leader's wake to reduce paddling effort is legal + tactical." },
    { title: "First across finish line wins", body: "No timing subtleties — simple first-to-line format." },
  ],
  advancedRules: [
    { title: "Bracelet / GPS chip tagging at portages", body: "Mandatory tagging at portage-in/portage-out points to prevent shortcut cheating." },
    { title: "Feed stations", body: "Paddler receives food/water via handheld feeder — must not stop paddling significantly." },
    { title: "Team support boats banned in-course", body: "No mechanical support boats — only shore-based feeders + medical." },
  ],
  scoring: {
    summary: "First across finish line wins; time recorded for classification.",
    winCondition: "First across finish line.",
    breakdown: [{ action: "Fastest time", points: "1st place" }],
  },
  penalties: [
    { title: "Missed portage", body: "DSQ." },
    { title: "Illegal shortcut / boundary violation", body: "DSQ or time penalty." },
    { title: "Interference with other paddler", body: "Time penalty or DSQ depending on severity." },
  ],
  positions: [
    { name: "K1 / C1 paddler", role: "Solo racer.", count: 1 },
    { name: "K2 / C2 paddlers", role: "Doubles crew — bow + stern paddler coordination.", count: 2 },
  ],
  officiating: { officials: ["ICF Chief Referee", "Course Judges", "Portage Judges", "Timing Team"], summary: "Multiple course + portage judges monitor rule compliance; chief referee resolves disputes." },
  governingBodies: [
    { name: "International Canoe Federation (ICF)", founded: 1946, headquarters: "Lausanne, Switzerland" },
    { name: "European Canoe Association (ECA)", founded: 1993, headquarters: "Prague, Czech Republic" },
    { name: "British Canoeing", founded: 1936, headquarters: "Nottingham, UK" },
  ],
  majorCompetitions: [
    { name: "ICF Canoe Marathon World Championships", frequency: "annual (since 2001; biennial 1988-1999)", founded: 1988, region: "worldwide" },
    { name: "ECA Canoe Marathon European Championships", frequency: "annual", founded: 1996, region: "Europe" },
    { name: "Devizes to Westminster (DW)", frequency: "annual", founded: 1948, region: "UK (200 km overnight)" },
    { name: "Vasaloppet (Vansbrosimningen paddling variant)", frequency: "annual", founded: 1922, region: "Sweden" },
    { name: "Sella Descent (Descenso del Sella)", frequency: "annual", founded: 1930, region: "Spain (Asturias)" },
  ],
  countriesPlayed: ["GB", "SE", "ES", "PT", "FR", "DE", "DK", "HU", "AU", "ZA", "NZ", "US"],
  famousAthletes: ["Manuel Antonio Fumatxo (ESP) — multi-time WC winner", "Vanda Kiszli (HUN) — multi-time WC women's champion", "Ivan Alonso (ESP) — 2020s WC dominant"],
  records: [
    { title: "ICF World Championships since 1988", holder: "ICF", value: "Formalised ICF Canoe Marathon World Championships since 1988 (Cardiff); annual since 2001", year: 1988 },
    { title: "Devizes to Westminster tradition since 1948", holder: "DW Race Committee", value: "125-mile (200 km) overnight non-stop race; run annually since 1948", year: 1948 },
    { title: "Sella Descent — largest single-day canoe race", holder: "Federación Española de Piragüismo", value: "Descenso del Sella (Spain) attracts 1,500+ paddlers annually; largest single-day canoe race in world", year: 1930 },
  ],
  variants: ["marathon-k1", "marathon-k2", "marathon-c1", "marathon-c2", "long-distance-ocean-kayak"],
  relatedSports: ["canoe-sprint", "canoe-slalom", "outrigger-canoeing", "surfski-ocean-racing", "kayaking"],
  skills: ["endurance paddling technique", "portage transitions (sprint + boat-carry)", "wash-hanging + drafting", "long-distance pacing"],
  strategies: [
    { title: "Wash-hanging conservation", body: "Sit in wake of faster paddler 30-50% of race to conserve energy for late-race surges." },
    { title: "Portage attack", body: "Portages are best overtake windows — sprint + smooth transition can gap opponents 10-20 sec per portage." },
    { title: "Feed station micro-pacing", body: "Grab food/water fast; don't slow paddling — races often decided by 10-30 sec across full race." },
  ],
  terminology: [
    { term: "Portage", meaning: "Land section where paddlers carry boat between water segments" },
    { term: "Wash-hanging", meaning: "Drafting in wake of leader to reduce paddling effort" },
    { term: "Marathon K1/K2/C1/C2", meaning: "Solo/Doubles Kayak / Canadian Canoe categories" },
    { term: "DW", meaning: "Devizes to Westminster — iconic UK 125-mile race" },
    { term: "Wing paddle", meaning: "Asymmetric blade design used in modern kayak marathon" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "5-10 km club race", body: "Complete first short marathon race; learn portage basics." }] },
    { level: "intermediate", steps: [{ title: "20-30 km with 3-5 portages", body: "Master portage transitions + drafting technique." }] },
    { level: "advanced", steps: [{ title: "42 km ICF WC / DW 200 km", body: "Compete at ICF WC 42 km level or ultra-endurance DW 200 km." }] },
  ],
  faq: [
    { question: "How long is a canoe marathon race?", answer: "ICF standard marathon is 20-42 km for men + women; junior races 15-30 km. Ultra-endurance races like Devizes to Westminster go 200 km overnight non-stop." },
    { question: "Is canoe marathon in the Olympics?", answer: "No — only canoe sprint (200 m + 500 m + 1000 m + 5000 m) + canoe slalom are Olympic. Canoe marathon has been proposed but is not on current Olympic programme." },
  ],
  wikipediaTitle: "Canoe marathon",
  sources: [{ label: "Wikipedia — Canoe marathon", url: "https://en.wikipedia.org/wiki/Canoe_marathon", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default canoeMarathon;
