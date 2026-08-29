import type { Sport } from "@/lib/types";

export const highDiving: Sport = {
  id: "high-diving",
  slug: "high-diving",
  name: "High Diving",
  officialName: "High Diving",
  aliases: ["Cliff Diving (competition form)"],
  shortDescription:
    "Extreme diving discipline from 27 m (men) / 20 m (women) platforms — divers accelerate to ~90 km/h before feet-first entry. World Aquatics event since 2013 World Champs; distinct from Red Bull Cliff Diving (which uses natural cliffs).",
  longDescription:
    "High Diving is an extreme diving discipline codified by World Aquatics (formerly FINA) with events at World Aquatics Championships since 2013 (Barcelona). Men dive from 27 m (88.5 ft) platform; women from 20 m (65.6 ft) platform — much higher than Olympic diving's 10 m platform. Divers fall for ~3 seconds, reaching entry velocities of ~85-95 km/h (53-59 mph). Entry MUST be feet-first (unlike Olympic diving's head-first entry) due to impact forces at these heights — head-first entry would risk severe spinal injury. Divers execute rotations + twists during freefall (up to 3 somersaults + 5 twists in ~3 seconds). Judged by 7-judge panel on execution + entry cleanness; scored 0-10 per judge, top + bottom dropped, sum of middle 5 × difficulty coefficient = round score. Sport is distinct from Red Bull Cliff Diving World Series (RBCDWS, 2009-present) which uses natural cliffs + fixed 27 m/21 m platforms, though many top athletes compete in both. Rhiannan Iffland (AUS) + Gary Hunt (GBR/FRA) are signature current-era champions. Not yet Olympic but consistently campaigned for inclusion.",
  category: "aquatic-sports",
  subCategory: "extreme diving (27 m / 20 m platforms)",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "summer", era: "21st-century", popularity: "major",
  countryOfOrigin: "MX",
  regionOfOrigin: "Global (rooted in Acapulco La Quebrada cliff diving tradition)",
  estimatedOrigin: "Cliff diving tradition dates centuries (Acapulco La Quebrada 1930s); formal World Aquatics discipline from 2013",
  players: { min: 1, max: 1, note: "Individual event; single dive per round; 4-5 dive competition." },
  equipment: [
    { name: "Swimwear + goggles (optional)", description: "Standard racing swimwear; goggles rarely used due to entry force." },
    { name: "27 m (men) / 20 m (women) platform", description: "Rigid stationary platform above dive pool ~5 m deep with air bubbler for surface softening." },
    { name: "Air bubbler system", description: "Compressed air injected below water surface reduces surface tension, softening ~90 km/h feet-first entry impact." },
  ],
  duration: { approximateMinutes: 5, structure: "Each dive ~3 sec airtime; full 4-5 dive competition ~2-3 hrs including judging." },
  objective: "Execute maximum-difficulty rotational + twisting dive; achieve vertical, splashless feet-first entry into pool.",
  matchStructure: "Preliminary rounds (2-3 dives) + Final (2-3 dives); scores summed across all dives.",
  basicRules: [
    { title: "Feet-first entry mandatory", body: "Entry must be feet-first — head-first entry from 20/27 m would risk severe spinal injury; head-first attempts are disallowed at these heights." },
    { title: "Judged by 7-judge panel (0-10 each)", body: "Judges score execution + entry cleanness; top + bottom dropped; middle 5 summed × difficulty coefficient = dive score." },
    { title: "Nominated dives with declared DD (difficulty degree)", body: "Diver nominates each dive pre-round; DD is fixed by rotation + twist count." },
  ],
  advancedRules: [
    { title: "Rotation + twist combinations", body: "Up to 3 somersaults (forward/backward/reverse/inward) + up to 5 twists possible in ~3 sec freefall." },
    { title: "Free position adds points", body: "'C' (free) tuck vs 'B' (pike) vs 'A' (straight) body position multipliers." },
    { title: "Failed rotation / bent entry", body: "Under-rotation or entry not-fully-vertical scored down heavily; entry within ~10° of vertical is standard." },
  ],
  scoring: {
    summary: "Sum of 5 middle judge scores (0-10) × difficulty coefficient (~2.5-5.5) per dive.",
    winCondition: "Highest total score across all round dives wins.",
    breakdown: [{ action: "Perfect 10 dive at DD 5.0", points: "5 judges × 10 × 5.0 = 250 points" }, { action: "Average execution", points: "5 judges × 6 × 4.0 = 120 points" }],
  },
  penalties: [
    { title: "Failed dive (missed rotation / body position)", body: "Judges score 0-2 per dive; heavy score deduction." },
    { title: "Head-first entry attempt", body: "Not permitted at these heights; disallowed / DSQ per event rules." },
    { title: "Balk (interrupted takeoff)", body: "Interrupted takeoff = 2-point deduction per judge." },
  ],
  positions: [{ name: "High Diver", role: "Solo competitor; 4-5 nominated dives across competition.", count: 1 }],
  officiating: { officials: ["7 World Aquatics-certified judges", "Referee", "Technical Delegate", "Scorer"], summary: "7 judges score; referee validates; technical delegate oversees safety + rules." },
  governingBodies: [
    { name: "World Aquatics (formerly FINA)", founded: 1908, headquarters: "Budapest, Hungary" },
    { name: "Red Bull Cliff Diving World Series (separate professional circuit)", founded: 2009, headquarters: "Salzburg, Austria" },
  ],
  majorCompetitions: [
    { name: "World Aquatics Championships — High Diving", frequency: "biennial (previously biennial, now annual pattern varies)", founded: 2013, region: "worldwide" },
    { name: "Red Bull Cliff Diving World Series", frequency: "annual (~7-10 stops)", founded: 2009, region: "worldwide (natural cliffs)" },
    { name: "European Aquatics Championships — High Diving", frequency: "biennial", founded: 2018, region: "Europe" },
  ],
  countriesPlayed: ["MX", "US", "AU", "GB", "CA", "FR", "IT", "ES", "CO", "CH", "CZ", "RO"],
  famousAthletes: ["Rhiannan Iffland (AUS) — dominant women's WAC + RBCDWS", "Gary Hunt (GBR/FRA) — most RBCDWS titles", "Constantin Popovici (ROU)", "Yaroslav Pashkovskii (RUS)", "Iris Schmidbauer (GER)"],
  records: [
    { title: "World Aquatics inaugural 2013", holder: "World Aquatics (FINA)", value: "High Diving debuted at 2013 Barcelona World Aquatics Championships", year: 2013 },
    { title: "Rhiannan Iffland WAC dominance", holder: "Rhiannan Iffland (AUS)", value: "Multiple WAC women's high diving gold medals (2015 onwards); also multiple RBCDWS series titles", year: 2024 },
    { title: "Gary Hunt RBCDWS record", holder: "Gary Hunt (GBR/FRA)", value: "Most Red Bull Cliff Diving World Series titles in history (9+ series wins)", year: 2024 },
    { title: "Entry velocity ~85-95 km/h", holder: "Physics", value: "27 m free-fall reaches ~85-95 km/h entry velocity — feet-first mandatory to survive safely", year: 2013 },
  ],
  variants: ["high-diving-27m-men", "high-diving-20m-women", "red-bull-cliff-diving"],
  relatedSports: ["cliff-diving", "diving", "synchronized-diving", "platform-diving-10m"],
  skills: ["aerial rotation control", "feet-first entry alignment", "psychological composure at height", "explosive vertical takeoff"],
  strategies: [
    { title: "Signature dive early", body: "Post big DD dive early to build score buffer; safer easier dives later for consistency." },
    { title: "Entry alignment prep", body: "Focus on vertical body alignment ~1 sec before entry — even small angle at 90 km/h causes big splash + score loss." },
    { title: "Wind + platform sway awareness", body: "Outdoor competitions (RBCDWS especially) — wind gusts + platform sway must be read before takeoff." },
  ],
  terminology: [
    { term: "DD", meaning: "Difficulty Degree — multiplier for dive score" },
    { term: "Somersault", meaning: "Full-body rotation (forward/backward/reverse/inward)" },
    { term: "Twist", meaning: "Axial rotation around vertical body axis" },
    { term: "Free position (C)", meaning: "Body position where diver combines tuck + pike + straight" },
    { term: "Balk", meaning: "Interrupted takeoff — deduction penalty" },
    { term: "Bubbler", meaning: "Air injection system softening water surface" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "10 m platform diving fundamentals", body: "Master Olympic-height 10 m platform + basic rotations." }] },
    { level: "intermediate", steps: [{ title: "15-20 m progression", body: "Gradually progress to 15 m + 20 m platforms; feet-first entry drills." }] },
    { level: "advanced", steps: [{ title: "27 m + high-DD combinations", body: "Full men's 27 m platform with 3 somersault + 5 twist combos; compete in WAC + RBCDWS." }] },
  ],
  faq: [
    { question: "How is high diving different from Olympic diving?", answer: "Olympic diving is 10 m platform max with head-first entry. High diving is 27 m men / 20 m women with mandatory feet-first entry (head-first would risk spinal injury). Entry velocity ~90 km/h vs. Olympic ~50 km/h." },
    { question: "Is high diving in the Olympics?", answer: "Not yet — high diving is campaigned for Olympic inclusion but not currently on the Olympic programme. It has been a World Aquatics World Championships event since 2013 Barcelona." },
    { question: "How does high diving differ from Red Bull Cliff Diving?", answer: "Same discipline essentially; World Aquatics competitions use rigid pool-side platforms with air bubbler safety; Red Bull Cliff Diving World Series uses natural rocky cliffs at scenic locations (Copenhagen, Sisikon, Polignano a Mare, etc.). Many top athletes compete in both circuits." },
  ],
  wikipediaTitle: "High diving",
  sources: [{ label: "Wikipedia — High diving", url: "https://en.wikipedia.org/wiki/High_diving", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default highDiving;
