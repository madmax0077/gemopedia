import type { Sport } from "@/lib/types";

export const oceanRowing: Sport = {
  id: "ocean-rowing",
  slug: "ocean-rowing",
  name: "Ocean Rowing",
  officialName: "Ocean Rowing",
  aliases: ["Trans-Ocean Rowing", "Extreme Rowing"],
  shortDescription:
    "Extreme endurance rowing across oceans in self-contained rowing shells — Talisker Whisky Atlantic Challenge (~4,800 km Canary Islands → Antigua) is signature event; solo + pairs + fours + fives categories; typical crossing 30-90 days.",
  longDescription:
    "Ocean Rowing is an extreme endurance sport in which crews row purpose-built ocean rowing boats across oceans without support vessels — fully self-contained with food, water desalination, solar power, satellite comms, sleeping cabin, sea anchor. Signature race: Talisker Whisky Atlantic Challenge (formerly Woodvale, since 1997) — annually rowed ~4,800 km from La Gomera (Canary Islands, Spain) to Nelson's Dockyard (English Harbour, Antigua). Categories: solo, pairs, trios, fours, fives — men, women, mixed. Typical crossing: 30-60 days (elite pairs/fours) to 60-90+ days (solo). Boats are ~7-8 m sealed rowing shells with fore + aft sleeping cabins + central rowing station. Two-hour on / two-hour off rotation for multi-crew (round-the-clock rowing). Ocean Rowing Society International (ORSI) certifies solo + crewed records across all 3 major oceans (Atlantic, Pacific, Indian). Records: Fastest Atlantic solo — Fedor Konyukhov (RUS), 44 days 15 hrs (2003). Fastest Atlantic crewed — Team Broar (fours), ~35 days. Pacific + Indian Ocean crossings are much rarer + more dangerous. Sport considered one of the toughest endurance events on Earth — physical + psychological toll enormous.",
  category: "aquatic-sports",
  subCategory: "trans-ocean endurance rowing",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "niche",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (Woodvale / Talisker Challenge origin)",
  estimatedOrigin: "First recorded ocean row: Frank Samuelsen + George Harbo (Norway/USA), Manhattan to Le Havre 1896; formalised as race 1997 (Woodvale Challenge)",
  players: { min: 1, max: 5, note: "Solo, pairs, trios, fours, fives — different categories per race." },
  equipment: [
    { name: "Ocean rowing boat (~7-8 m sealed shell)", description: "Purpose-built kevlar/carbon shell with fore + aft sleeping cabins + rowing station + water desalinator + solar panels + satellite comms + sea anchor." },
    { name: "Water desalinator", description: "Reverse-osmosis desalinator produces ~20-40 L drinking water/day from seawater." },
    { name: "Solar panels + batteries", description: "Powers desalinator, navigation, sat comms." },
    { name: "Satellite tracker + EPIRB", description: "Real-time position tracker + emergency beacon; mandatory for race registration." },
    { name: "Food: freeze-dried rations + snacks", description: "60+ days of ~5,000-6,000 kcal/day per rower — extreme calorie needs." },
  ],
  duration: { approximateMinutes: 43200, structure: "Typical Atlantic crossing: 30-60 days (crewed) to 60-90+ days (solo). Round-the-clock rowing rotation." },
  objective: "Row across ocean (Atlantic / Pacific / Indian) fastest in category — from designated start port to designated finish port.",
  matchStructure: "Point-to-point ocean crossing; racing category determined by crew size. First across finish line wins.",
  basicRules: [
    { title: "No support vessel", body: "Boats are fully unassisted — no supply drops, no towing (except emergency evacuation)." },
    { title: "Continuous rotation for multi-crew", body: "Typical 2-hour on / 2-hour off (or 3/3) rotation for continuous 24/7 rowing." },
    { title: "Mandatory safety equipment", body: "EPIRB, sat phone, first aid, sea anchor, water desalinator, life raft — race scrutiny confirms compliance." },
  ],
  advancedRules: [
    { title: "Weather routing autonomy", body: "Crews receive weather routing forecasts but decide own route + sea anchor timing — bad weather is normal." },
    { title: "Categories: solo, pairs, trios, fours, fives", body: "Different crew sizes race in separate categories with different records." },
    { title: "Record certification by ORSI (Ocean Rowing Society International)", body: "Official crossing records certified by ORSI for solo, pairs, trios, fours, fives on all 3 oceans." },
  ],
  scoring: {
    summary: "First across finish line wins category; time recorded for records.",
    winCondition: "Fastest crossing in category.",
    breakdown: [{ action: "Crossing completed", points: "1st, 2nd, 3rd in category" }],
  },
  penalties: [
    { title: "External assistance beyond emergency", body: "DSQ — crossing invalidated." },
    { title: "Missed course waypoint", body: "Time penalty per race rules." },
    { title: "Safety equipment failure at scrutiny", body: "Cannot start race until remedied." },
  ],
  positions: [
    { name: "Solo Ocean Rower", role: "One person rowing continuously with sleep breaks (~2-3 hrs sleep per 24 hrs).", count: 1 },
    { name: "Pairs / Fours / Fives Crew", role: "Rowers rotate 2-on / 2-off (or similar) for continuous 24/7 rowing.", count: 2 },
  ],
  officiating: { officials: ["Race Organiser (Atlantic Campaigns for Talisker)", "Ocean Rowing Society International verifiers", "Coast Guard rescue coordination"], summary: "Race organiser tracks; ORSI verifies records; Coast Guard handles emergency response." },
  governingBodies: [
    { name: "Ocean Rowing Society International (ORSI)", founded: 1983, headquarters: "London, UK" },
    { name: "Atlantic Campaigns (Talisker Challenge organiser)", founded: 1997, headquarters: "London, UK" },
  ],
  majorCompetitions: [
    { name: "Talisker Whisky Atlantic Challenge", frequency: "annual (Dec-Feb)", founded: 1997, region: "Canary Islands → Antigua (~4,800 km)" },
    { name: "Great Pacific Race", frequency: "biennial (San Francisco → Hawaii; ~4,000 km)", founded: 2014, region: "USA → Hawaii" },
    { name: "Indian Ocean Challenge / South Africa – Australia", frequency: "occasional (unstructured record attempts)", founded: 2000, region: "Australia / South Africa route" },
  ],
  countriesPlayed: ["GB", "US", "AU", "NZ", "DE", "FR", "IE", "CA", "ZA", "NO", "SE", "PT"],
  famousAthletes: ["Fedor Konyukhov (RUS) — first solo Pacific + fastest Atlantic solo 2003", "Sean Conway (GBR) — trans-ocean adventurer", "Roz Savage (GBR) — first woman to row 3 oceans solo", "Team Broar (Atlantic fours record holders)"],
  records: [
    { title: "Fastest Atlantic solo — 44 days 15 hrs", holder: "Fedor Konyukhov (RUS)", value: "Fedor Konyukhov set solo Atlantic record 44 days 15 hrs in 2003 (broken subsequently by others; records progress every few years)", year: 2003 },
    { title: "First woman to row 3 oceans solo", holder: "Roz Savage (GBR)", value: "Rowed Atlantic (2005-06), Pacific (2008-10), Indian (2011) solo — first woman to complete all 3 solo", year: 2011 },
    { title: "First recorded ocean row 1896", holder: "Frank Samuelsen + George Harbo", value: "Norwegian-American pair rowed Manhattan → Le Havre (~5,300 km) in 55 days in 1896 — first recorded ocean row", year: 1896 },
    { title: "Talisker Challenge since 1997", holder: "Atlantic Campaigns", value: "Annual Atlantic race since 1997 (as Woodvale); ~500+ crews have crossed", year: 1997 },
  ],
  variants: ["talisker-atlantic-challenge", "great-pacific-race", "indian-ocean-solo", "ocean-rowing-fours", "ocean-rowing-solo"],
  relatedSports: ["rowing", "ocean-sailing", "long-distance-swimming", "kayak-ocean-crossing"],
  skills: ["extreme endurance rowing", "sleep-deprivation management", "boat maintenance at sea", "weather routing decision-making", "psychological resilience"],
  strategies: [
    { title: "Sea anchor + weather riding", body: "Deploy sea anchor + rest during bad weather; row hard in favourable trade winds. Timing sea anchor cycles saves days over full crossing." },
    { title: "Calorie management (5-8k kcal/day)", body: "Rowers burn 5,000-8,000 kcal/day; typically still lose 10-20 kg over crossing despite max calorie intake." },
    { title: "2-on / 2-off rotation discipline", body: "Multi-crew rotation is race-critical — even 5-10 min slippage per shift costs hours over 4-week race." },
  ],
  terminology: [
    { term: "Talisker Challenge", meaning: "Signature Atlantic ocean-rowing race" },
    { term: "Sea anchor", meaning: "Underwater parachute deployed in storms to keep boat bow-into-wind" },
    { term: "Desal (desalinator)", meaning: "Reverse-osmosis freshwater maker aboard" },
    { term: "EPIRB", meaning: "Emergency Position-Indicating Radio Beacon" },
    { term: "Cabin (fore/aft)", meaning: "Sealed sleeping compartments at boat ends" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Coastal rowing + sea-rowing basics", body: "Learn ocean-boat handling in coastal waters; complete 24-hr rows." }] },
    { level: "intermediate", steps: [{ title: "1000+ km training crossings", body: "Row multi-day coastal/short-ocean crossings; complete Talisker scrutiny + prep." }] },
    { level: "advanced", steps: [{ title: "Full Atlantic / Pacific / Indian crossing", body: "Compete in Talisker Challenge or Great Pacific Race; attempt solo record." }] },
  ],
  faq: [
    { question: "How long does it take to row across the Atlantic?", answer: "Talisker Challenge (La Gomera → Antigua, ~4,800 km) takes elite fours crews 30-40 days; pairs 40-60 days; solo rowers 60-90+ days. Weather + luck can add or subtract days." },
    { question: "Do ocean rowers have a support boat?", answer: "No — races like the Talisker Challenge are fully unassisted. Boats carry all food, water desalinator, comms, safety gear. External assistance (except emergency evacuation) = disqualification." },
  ],
  wikipediaTitle: "Ocean rowing",
  sources: [{ label: "Wikipedia — Ocean rowing", url: "https://en.wikipedia.org/wiki/Ocean_rowing", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default oceanRowing;
