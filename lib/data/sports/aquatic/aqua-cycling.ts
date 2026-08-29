import type { Sport } from "@/lib/types";

export const aquaCycling: Sport = {
  id: "aqua-cycling",
  slug: "aqua-cycling",
  name: "Aqua Cycling (Aquabike)",
  officialName: "Aqua Cycling / Aquabike Fitness",
  aliases: ["Poolbiking", "Aquaspinning", "Hydrospinning"],
  shortDescription:
    "Fitness + rehabilitation activity of pedaling stationary aqua-bikes in chest-deep pool water — combines cardio, resistance training, and low-impact joint-safe movement. Growing group-fitness class format in Europe + North America. Not competitive; measured on class attendance/rehab progress.",
  longDescription:
    "Aqua Cycling (also called Aquabike, Poolbiking, Aquaspinning, or Hydrospinning) is a fitness + rehabilitation activity where participants pedal stationary aqua-bikes in chest-deep pool water. Combines cardio, resistance training, and low-impact joint-safe movement — 30-50% less joint impact than land cycling with similar calorie burn (~400-600 kcal/hour) due to water resistance. Developed 2008 by Italian doctors for post-injury rehab; commercialised by Poolbiking (Italy) + Hydrorider + Aquabike. Now a growing group-fitness class format in Europe + North America. Not a competitive sport — instructor certification programs via Aquatic Exercise Association (AEA, USA, since 2012) + European Aquatic Association (EAI, Italy). Aqua-bikes are stainless-steel or aluminum weighted frames that sink to the pool floor; buoyancy supports the rider.",
  category: "aquatic-sports",
  subCategory: "aquatic fitness (stationary aqua-bike)",
  sportType: "mixed",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "regional",
  countryOfOrigin: "IT",
  regionOfOrigin: "Italy (developed by Italian doctors for rehab; commercialised 2008 by Poolbiking)",
  estimatedOrigin: "Developed 2008 by Italian medical + fitness industry; AEA formal certification 2012",
  players: { min: 1, max: 20, note: "Solo rehab or 10-20 bike group class." },
  equipment: [
    { name: "Aqua-bike (Poolbiking / Hydrorider / Aquabike)", description: "Waterproof stainless-steel or aluminum bike frame with weighted base, adjustable seat + handlebar, fixed-gear or resistance flywheel." },
    { name: "Aqua shoes", description: "Non-slip water shoes for pool deck + bike pedal grip." },
    { name: "Water dumbbells / resistance gloves", description: "Foam dumbbells (buoyant) or webbed gloves for arm-work intervals during class." },
    { name: "Swimwear (competition-cut recommended)", description: "Fitted swimwear reduces drag when pedaling." },
  ],
  duration: { approximateMinutes: 45, structure: "Class 30-60 min; rehab session 20-45 min." },
  objective: "Improve cardio + rehab injury via low-impact water-resisted pedaling.",
  matchStructure: "Group class format (10-20 bikes) or solo rehab session — 30-60 min workouts alternating pedaling cadences, arm-work, and interval bursts.",
  basicRules: [
    { title: "Chest-deep water", body: "Water at chest level allows non-swimmers; feet can touch floor if needed." },
    { title: "Anchored aqua-bike", body: "Bikes sink to floor; weighted frame prevents drift during class." },
    { title: "Instructor-led choreography", body: "Music-timed cadences + intervals; instructor cues arm-work + resistance changes." },
  ],
  advancedRules: [
    { title: "Cadence pyramid intervals", body: "Warm up 60 RPM → 80 → 100 → 110 → 100 → 80 → 60 across 30 min." },
    { title: "Beat-drop HIIT", body: "30-sec sprint / 60-sec recovery intervals synced to music beat drops." },
  ],
  scoring: {
    summary: "Fitness/rehab metric: heart rate, calorie burn (~400-600 kcal/hour), range-of-motion recovery.",
    winCondition: "Not applicable — fitness class, not competition.",
    breakdown: [{ action: "Session completion", points: "Fitness progress" }],
  },
  penalties: [
    { title: "Improper bike setup", body: "Seat too high/low = knee strain; instructor corrects during first class." },
    { title: "Chlorine exposure", body: "Rinse skin + swimwear post-class; prolonged chlorine can dry skin." },
    { title: "Slip on pool deck", body: "Non-slip aqua shoes recommended; barefoot on wet tile is fall hazard." },
  ],
  positions: [{ name: "Rider", role: "Pedals aqua-bike in chest-deep water for cardio/rehab.", count: 1 }],
  officiating: { officials: ["Certified aqua-cycling instructor (AEA / EAI)", "Lifeguard on duty"], summary: "Not competitive; instructor + lifeguard supervise class." },
  governingBodies: [
    { name: "Aquatic Exercise Association (AEA)", founded: 1984, headquarters: "Nokomis, Florida, USA" },
    { name: "European Aquatic Association (EAI)", founded: 2000, headquarters: "Milan, Italy" },
  ],
  majorCompetitions: [
    { name: "AEA International Aquatic Fitness Conference", frequency: "annual", founded: 1989, region: "USA (fitness convention)" },
    { name: "EAI European Fitness Convention", frequency: "annual", founded: 2005, region: "Europe" },
  ],
  countriesPlayed: ["IT", "US", "GB", "FR", "DE", "ES", "NL", "CA", "AU"],
  famousAthletes: ["Poolbiking (Italy) — original commercial developer + trainer network"],
  records: [
    { title: "First commercial aqua-bike class", holder: "Poolbiking (Italy)", value: "Italian company commercialised the format", year: 2008 },
    { title: "First AEA aqua-cycling certification", holder: "Aquatic Exercise Association", value: "First formal instructor certification program (USA)", year: 2012 },
  ],
  variants: ["poolbiking-brand", "hydrorider-brand", "aquabike-brand"],
  relatedSports: ["aquagym", "water-aerobics", "spinning", "swimming"],
  skills: ["cadence control", "water-resistance pedaling", "upper-body integration", "instructor cueing"],
  strategies: [
    { title: "Cadence pyramid", body: "Warm up 60 RPM → 80 → 100 → 110 → 100 → 80 → 60 across 30 min; water resistance scales with cadence." },
    { title: "Upper body + arm-work integration", body: "Every 5 min break from pedaling to do 60 sec arm exercises with water dumbbells or resistance." },
    { title: "Beat-drop intervals", body: "Music-driven 30-sec sprint / 60-sec recovery intervals for HIIT-style burn." },
  ],
  terminology: [
    { term: "Cadence", meaning: "Pedal strokes per minute (RPM)" },
    { term: "Aqua-bike", meaning: "Stationary bike designed for pool use" },
    { term: "Chest-deep water", meaning: "Pool depth at rider chest level for balance + buoyancy" },
    { term: "Buoyancy support", meaning: "Water reduces joint load 30-50% vs land cycling" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "First class", body: "Bike setup, basic pedal + arm coordination, breathing." }] },
    { level: "intermediate", steps: [{ title: "Regular attendance / rehab program", body: "Cadence intervals, resistance-band arm work, form correction." }] },
    { level: "advanced", steps: [{ title: "Instructor certification (AEA / EAI)", body: "Teaching methodology, class choreography, rehab progression, ADA/adaptive." }] },
  ],
  faq: [
    { question: "Do aqua bikes float?", answer: "No — aqua bikes are stainless-steel or aluminum weighted frames that sink and rest on the pool floor. Water buoyancy supports the rider but the bike itself is anchored." },
    { question: "Do I need to swim?", answer: "No — chest-deep water means feet can touch the floor. Non-swimmers welcome; life-jacket optional for extra confidence." },
  ],
  wikipediaTitle: "Aqua cycling",
  sources: [{ label: "Wikipedia — Aqua cycling", url: "https://en.wikipedia.org/wiki/Aqua_cycling", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default aquaCycling;
