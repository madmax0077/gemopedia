import type { Sport } from "@/lib/types";

export const canyoningTechnical: Sport = {
  id: "canyoning-technical",
  slug: "canyoning-technical",
  name: "Canyoning (Canyoneering)",
  officialName: "International Canyoning Commission (CIC) — UIAA / American Canyoneering Association (ACA)",
  aliases: ["Canyoneering (US)", "Canyoning", "Barranquismo (Spanish)", "Descenso de Cañones"],
  shortDescription:
    "Adventure sport combining hiking + swimming + rappelling + climbing to descend water-carved canyons — waterfalls (jumps), rappels (abseils), slides, tyroleans; roots in 1900s French Pyrenees; global growth 1980s+; ~50+ recorded fatalities annually.",
  longDescription:
    "Canyoning (called Canyoneering in USA) is an adventure sport combining hiking, swimming, rappelling (abseiling), scrambling, and swimming to descend water-carved canyons + gorges from top to bottom. Traces to early 1900s French + Spanish Pyrenees exploration (Édouard-Alfred Martel — French speleologist considered father of canyoning). Signature elements: (1) Rappelling down waterfalls (5-100m+ vertical); (2) Jumping into deep pools (typically 3-15m; extreme jumps 20-30m); (3) Sliding down water-polished rock chutes; (4) Swimming through gorges + subterranean water; (5) Tyrolean traverses (rope crossings over deep pools/canyons). Requires specialized wetsuit (5-7mm neoprene for cold canyon water), climbing helmet, dynamic + static ropes, harness, canyoning-specific rope-descender (Pirana, Rack, or 8-descender), canyoning-specific throw bags + rescue gear. Highly technical + dangerous — flash floods can trap groups in narrow slot canyons (August 2015 Zion National Park Keyhole Canyon flash flood killed 7 hikers; 2023 Antelope Canyon Utah flash flood); water hazards (siphons, undercuts, foot entrapments). ~50+ recorded fatalities annually globally. Governing bodies: International Canyoning Commission (CIC) under UIAA (mountaineering federation), American Canyoneering Association (ACA), Fédération Française de la Montagne et de l'Escalade (FFME). Global hotspots: French + Spanish Pyrenees (birthplace), Zion National Park + Escalante + Colorado Plateau (USA), Blue Mountains Australia, Ticino Switzerland, Sierra de Guara Spain, Cetina Canyon Croatia. No standard competitive scene (safety-critical + terrain-dependent); some Rogaine + adventure-race event formats include canyoning sections. Certification bodies: ACE (American Canyoneering Educators), FFME, CIC.",
  category: "adventure-extreme-sports",
  subCategory: "canyon descent adventure sport",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "summer", era: "20th-century", popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "France + Spain (Pyrenees; Édouard-Alfred Martel exploration early 1900s)",
  estimatedOrigin: "Early 1900s French/Spanish Pyrenees exploration (Édouard-Alfred Martel); global sport growth 1980s+",
  players: { min: 2, max: 8, note: "Minimum 2 for safety; typical guided group 4-8." },
  equipment: [{ name: "Canyoning wetsuit (5-7mm neoprene)", description: "Two-piece long john + jacket; extra thick for cold canyon water." }, { name: "Climbing helmet + canyoning-specific harness", description: "Certified helmet + canyoning harness with rear-mounted attachment for water compatibility." }, { name: "Canyoning ropes (static 8-11mm + dynamic backup)", description: "Static ropes for rappelling; dynamic ropes as backup." }, { name: "Canyoning rope-descender (Pirana / 8-descender / Rack)", description: "Water-compatible descender designed for wet ropes + variable-friction control." }, { name: "Throw bag + rescue kit", description: "Water-rescue throw bag + first aid + emergency shelter." }, { name: "Canyoning boots (water-draining sole)", description: "Specialized canyoning boots with grip + drainage." }],
  duration: { approximateMinutes: 240, structure: "Typical descent: 4-6 hours; multi-day expeditions in remote canyons possible." },
  objective: "Successfully descend canyon from top to exit; safety-first over speed.",
  matchStructure: "Guided or self-led descents; not typically competitive.",
  basicRules: [
    { title: "Weather + flash flood check mandatory", body: "Never enter slot canyons in threatening weather — flash floods can drown groups in seconds." },
    { title: "Buddy system + minimum 2 people", body: "Never canyoneer alone; team of 2+ for safety." },
    { title: "Rope + anchor inspection before every descent", body: "Every anchor + rope inspected before use; static rope only for rappels." },
    { title: "Leave-no-trace + Wilderness Act ethics", body: "Pack out all waste; some canyons restrict access to protect ecology." },
  ],
  scoring: { summary: "Not competitive; goal is safe descent + minimum-impact travel.", winCondition: "Safe exit from canyon = success." },
  positions: [{ name: "Canyoneer (participant)", role: "Team member.", count: 4 }, { name: "Trip leader / lead rappeller (guided)", role: "First down + sets anchors + coordinates group.", count: 1 }, { name: "Sweep (last down)", role: "Last person down; retrieves ropes.", count: 1 }],
  officiating: { officials: ["No competitive officials — ACE certified educators oversee training"], summary: "No competitive officials." },
  governingBodies: [{ name: "International Canyoning Commission (CIC) under UIAA", founded: 1998, headquarters: "Bern, Switzerland" }, { name: "American Canyoneering Association (ACA)", founded: 1999, headquarters: "USA" }, { name: "Fédération Française de la Montagne et de l'Escalade (FFME)", founded: 1945, headquarters: "Paris, France" }],
  majorCompetitions: [{ name: "RIC — Rencontres Internationales du Canyonisme (International Canyoning Meet)", frequency: "annual", founded: 1995, region: "rotating (France, Spain, Italy, Switzerland)" }, { name: "American Canyoneering Association Rendezvous", frequency: "annual", founded: 2000, region: "USA (rotating western states)" }],
  countriesPlayed: ["FRA", "ESP", "ITA", "CHE", "USA (Utah + Colorado + Arizona)", "AUS (Blue Mountains)", "NZL", "HRV", "MEX", "BRA"],
  famousAthletes: ["Édouard-Alfred Martel (FRA — 'father of canyoning', ~1900s)", "Rich Carlson (USA — ACA founder)", "Ram Cain + Steve Ramras (Zion NP canyoneering guides)"],
  records: [
    { title: "Deepest recorded canyon descents 800m+", holder: "Alpine canyoneering", value: "Some technical descents exceed 800m vertical (Illgraben Switzerland, Rio Verdon France, Grand Canyon Colorado tributaries)", year: 2020 },
    { title: "2015 Keyhole Canyon Zion flash flood tragedy", holder: "canyoneering safety community", value: "September 2015 flash flood in Keyhole Canyon (Zion NP, Utah) killed 7 canyoneers — one of deadliest single-day canyoneering incidents", year: 2015 },
    { title: "Martel's Padirac descent 1889", holder: "Édouard-Alfred Martel (FRA)", value: "Édouard-Alfred Martel's exploration of Gouffre de Padirac (France) 1889 considered foundational canyoning-cave-hybrid descent", year: 1889 },
  ],
  variants: ["technical-canyoneering-multi-rappel", "aquatic-canyoning-water-focused", "slot-canyon-narrow-passages", "high-alpine-canyoneering-glacier-fed"],
  relatedSports: ["caving-speleology", "rock-climbing-lead", "coasteering-uk", "canyoneering"],
  skills: ["rappelling in flowing water", "anchor building + inspection", "water-rescue technique", "flash-flood weather assessment", "hydrology reading (siphons + undercuts)"],
  wikipediaTitle: "Canyoning",
  sources: [{ label: "Wikipedia — Canyoning", url: "https://en.wikipedia.org/wiki/Canyoning", publisher: "Wikipedia" }, { label: "American Canyoneering Association", url: "https://www.canyoneering.net", publisher: "ACA" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default canyoningTechnical;
