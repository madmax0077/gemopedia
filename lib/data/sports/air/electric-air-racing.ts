import type { Sport } from "@/lib/types";

export const electricAirRacing: Sport = {
  id: "electric-air-racing",
  slug: "electric-air-racing",
  name: "Electric Air Racing",
  officialName: "Air Race E (Electric Aircraft Racing)",
  aliases: ["Air Race E", "eAir Racing", "Electric Aviation Racing"],
  shortDescription:
    "Emerging 2020s motorsport — electric-powered fixed-wing aircraft racing on closed courses at low altitude. Air Race E (announced 2018, first flight 2024) is inaugural international electric air racing series aiming to become 'Formula E of aviation'. Zero-emission demonstration of electric aviation potential.",
  longDescription:
    "Electric Air Racing is an emerging 2020s motorsport where electric-powered fixed-wing aircraft race on closed low-altitude courses. Air Race E is the inaugural international electric air racing series, announced 2018 by Airspeeder + Aircraft Design Research; developed with Airbus + industry partners as demonstration of electric aviation potential. First public electric race aircraft flights 2024; first competitive races expected 2025-2026. Vision parallel to Formula E for cars: zero-emission electric racing demonstrating consumer aviation electrification pathway. Aircraft: single-seater electric prototypes ~1.5MW peak power output; speeds targeting 400+ km/h. Racing format similar to Reno Air Races: pylon-marked course + heat racing + championship finals. Airspeeder EXA (2022+) flew unmanned electric multirotor 'flying car' racing as parallel development pathway. Competes conceptually with Red Bull Air Race World Championship (ceased 2019, combustion-engined) + Reno Air Races (US, continuing) for combined air racing space.",
  category: "air-sports",
  subCategory: "electric-powered aircraft racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "niche",
  countryOfOrigin: "GB",
  regionOfOrigin: "UK + Australia (Airspeeder Adelaide + Air Race E international)",
  estimatedOrigin: "Air Race E announced 2018; first public flights 2024; first races expected 2025-2026; Airspeeder EXA parallel development 2022+",
  players: { min: 1, max: 1, note: "Individual pilot per aircraft; multiple pilots race concurrently." },
  equipment: [
    { name: "Electric racing aircraft (single-seater)", description: "Custom-designed electric fixed-wing aircraft; ~1.5MW peak power output; battery-electric propulsion." },
    { name: "Pilot flight suit + helmet + emergency parachute", description: "Standard air racing safety equipment." },
    { name: "Race course (pylon-marked closed circuit)", description: "Low-altitude course with pylons marking turn gates." },
  ],
  duration: { approximateMinutes: 15, structure: "Heat races 5-8 min; championship days include qualifying + heats + finals over ~3 hours." },
  objective: "Fastest completion of pylon-marked course; win heats + progress to finals.",
  matchStructure: "Heat racing → knockout brackets → grand final (similar to Formula E ePrix format).",
  basicRules: [
    { title: "Electric fixed-wing aircraft required", body: "Only electric-powered aircraft eligible; combustion engines prohibited." },
    { title: "Low-altitude pylon course racing", body: "Course marked by pylons; must fly between pylons in prescribed direction." },
    { title: "Multiple aircraft race concurrently", body: "Grid-start heat racing similar to Formula E." },
    { title: "Safety envelope", body: "Course altitude ~10-100m; pilot ejection system + emergency parachute mandatory." },
  ],
  advancedRules: [
    { title: "Battery + power management strategy", body: "Race duration constrained by battery capacity; power management + regen equivalent decisions critical." },
    { title: "Aerodynamic efficiency", body: "Electric aircraft rely on aerodynamic efficiency due to battery weight constraints; low-drag design premium." },
    { title: "Course pylon violations", body: "Missing pylon or wrong direction = time penalty or DNF." },
  ],
  scoring: {
    summary: "Fastest heat time + qualifying time + championship series points.",
    winCondition: "Championship series points across season.",
    breakdown: [
      { action: "Heat position", points: "Championship series points (25-1)" },
      { action: "Qualifying pole position", points: "Bonus points" },
    ],
  },
  penalties: [{ title: "Pylon miss / wrong direction", body: "Time penalty or DNF." }],
  positions: [{ name: "Pilot", role: "Solo aircraft pilot.", count: 1 }],
  officiating: { officials: ["Race director", "Course marshals", "Aviation safety officers"], summary: "Standard air racing officiating + FAI aviation oversight." },
  governingBodies: [
    { name: "Air Race E organization", founded: 2018, headquarters: "UK", website: "https://www.airracee.com" },
    { name: "Fédération Aéronautique Internationale (FAI)", founded: 1905, headquarters: "Lausanne, Switzerland" },
    { name: "Airspeeder (parallel electric multirotor)", founded: 2019, headquarters: "Adelaide, Australia" },
  ],
  majorCompetitions: [
    { name: "Air Race E World Championship (inaugural)", frequency: "annual (planned)", founded: 2025, region: "worldwide rotating hosts" },
    { name: "Airspeeder EXA series (unmanned electric multirotor)", frequency: "occasional", founded: 2022, region: "Australia + international demonstration" },
  ],
  countriesPlayed: ["GB", "US", "AU", "FR", "DE", "IT", "JP (expected)"],
  famousAthletes: [
    "Various inaugural Air Race E pilots (roster forming 2024-2026)",
    "Airspeeder EXA test pilots",
  ],
  records: [
    { title: "First international electric air racing series", holder: "Air Race E", value: "Announced 2018; first flight 2024; first races expected 2025-2026 — pioneering electric aviation racing category", year: 2024 },
    { title: "Airspeeder EXA first electric flying car races", holder: "Airspeeder Adelaide", value: "First unmanned electric multirotor 'flying car' races 2022+; parallel electric aviation racing development", year: 2022 },
  ],
  variants: ["air-race-e-fixed-wing-manned", "airspeeder-exa-electric-multirotor-unmanned", "airspeeder-mk4-manned-multirotor-future"],
  relatedSports: ["red-bull-air-race", "reno-air-races", "drone-racing", "formula-e", "aerobatics"],
  skills: ["fixed-wing aircraft piloting", "high-G tolerance", "pylon racing precision + line management", "battery power management strategy", "electric aircraft systems knowledge"],
  strategies: [
    { title: "Battery-conservation racing line", body: "Optimal line + power usage extends battery race time; different from combustion racing." },
    { title: "Aerodynamic advantage", body: "Electric aircraft rely on aerodynamic efficiency; slipstream + drafting matters more." },
  ],
  terminology: [
    { term: "Air Race E", meaning: "The inaugural international electric air racing series (announced 2018)." },
    { term: "Airspeeder", meaning: "Adelaide-based electric flying car racing organization (parallel development)." },
    { term: "Pylon", meaning: "Course marker aircraft must fly between." },
    { term: "EXA", meaning: "Airspeeder unmanned multirotor racing series." },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Traditional air racing training (Reno Air Races or FAI regional)", body: "Standard air racing skills transfer to electric racing." }] },
    { level: "advanced", steps: [{ title: "Air Race E pilot recruitment", body: "Formal pilot selection process for inaugural Air Race E series." }] },
  ],
  faq: [
    { question: "Is electric air racing actually happening?", answer: "Yes — Air Race E announced 2018 with target inaugural series 2025-2026. Aircraft development completed 2023-2024; first public flights 2024. Delays compared to original 2020 plan due to battery + aircraft engineering challenges. Airspeeder EXA parallel electric multirotor racing has demonstrated technology in 2022+. First major public competitive electric air race series is imminent." },
    { question: "How does it compare to Formula E?", answer: "Parallels: both showcase electric propulsion in high-performance racing context; both aim to accelerate electric technology transfer to consumer market. Differences: air racing is fundamentally more dangerous + technically demanding than car racing; battery weight is more critical constraint in aviation; audience visibility is more challenging (aircraft distance vs. cars on track)." },
    { question: "Will electric aircraft compete with combustion in speed?", answer: "In short-duration racing YES — Air Race E targets 400+ km/h competitive with historical Red Bull Air Race speeds. In endurance yes electric has range/energy limitations vs. combustion. Air racing (short bursts) is ideal use case where electric can compete or exceed combustion; long-distance aviation remains combustion-dominant." },
  ],
  wikipediaTitle: "Air Race E",
  sources: [
    { label: "Air Race E", url: "https://www.airracee.com", publisher: "Air Race E" },
    { label: "Airspeeder", url: "https://www.airspeeder.com", publisher: "Airspeeder" },
  ],
  lastVerified: "2026-08-29",
  confidence: "community",
};
