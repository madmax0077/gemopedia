import type { Sport } from "@/lib/types";

export const calisthenicsCompetitive: Sport = {
  id: "calisthenics-competitive",
  slug: "calisthenics-competitive",
  name: "Calisthenics (Competitive)",
  officialName: "Street Workout / Competitive Calisthenics (WSWCF)",
  aliases: ["Street Workout", "Bar Athletics", "WSWCF Freestyle"],
  shortDescription:
    "Bodyweight-strength discipline evolved from street workout culture — competitive circuits include WSWCF World Cup, ISW (International Street Workout Federation), Battle of the Bars, Kings of the Bar. Combines Freestyle (skill routines) + Set of Strength + Endurance. Rooted in NYC/Eastern-European bar-park culture.",
  longDescription:
    "Competitive Calisthenics (widely known as 'Street Workout') is a bodyweight-strength athletic discipline that evolved from NYC + Eastern European bar-park culture in the 2000s-2010s — using pull-up bars, parallel bars, and rings to execute static holds (planche, front lever, human flag, back lever), dynamic movements (muscle-up, one-arm pull-up, 360 handstand), and freestyle combos. Federated primarily by WSWCF (World Street Workout & Calisthenics Federation, founded 2011) + ISW (International Street Workout Federation) + Kings of the Bar. Major disciplines: Freestyle (choreographed skill routines judged on difficulty + execution), Set of Strength (max reps of pull-ups + dips + squats), Endurance (long-duration exercise), Battle formats (1v1 elimination). WSWCF World Cup annually since 2011 (originally Latvia/Riga; now global multi-stop tour). Signature athletes include Vadim 'Vadym' Oleynik (UKR), Bar Bros' Hannibal for King (Frank Medrano contemporary), Chris Heria (USA — Thenx / school), Frank Medrano (USA — vegan bodyweight advocate). Community remains grassroots — inclusive across ages + skill levels; low barrier to entry (free public bar parks). Distinct from CrossFit (which uses equipment beyond bodyweight).",
  category: "gymnastics",
  subCategory: "bodyweight strength (Freestyle + Sets + Endurance)",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (NYC bar-park culture) + Eastern Europe (Ukraine, Russia, Latvia)",
  estimatedOrigin: "Emerged 2000s-2010s from NYC/Eastern European bar-park subculture; WSWCF founded 2011; first World Cup 2011",
  players: { min: 1, max: 2, note: "Individual + 1v1 Battle formats." },
  equipment: [
    { name: "Bar park / pull-up bars / parallel bars", description: "Public bar parks, purpose-built calisthenics parks (Barmania, Kenguru, Kalos)." },
    { name: "Athletic clothing", description: "Loose-fit athletic wear; no specialised gear." },
    { name: "Chalk / grip aids", description: "Chalk allowed; some events regulate grip aid types." },
    { name: "Judging clipboard / scoring app", description: "WSWCF-standardised scoring." },
  ],
  duration: { approximateMinutes: 90, structure: "Freestyle routine 60-90 sec; Battle format 3-5 rounds ~15-25 min; competition day 4-8 hrs." },
  objective: "Freestyle: highest judge-scored routine (Difficulty + Execution + Creativity + Flow). Set of Strength: most reps in given exercise. Endurance: longest duration.",
  matchStructure: "Qualifying → Freestyle bracket → Battle final. Some events: Freestyle-only or Sets-only formats.",
  basicRules: [
    { title: "Freestyle: judge-scored 0-100", body: "5-judge panel scores Difficulty + Execution + Creativity + Flow." },
    { title: "Set of Strength: max reps", body: "Max muscle-ups / max pull-ups / max dips in time limit or continuous." },
    { title: "Battle: 1v1 elimination", body: "Two athletes trade freestyle rounds; judges/audience vote winner per round." },
  ],
  advancedRules: [
    { title: "Skill difficulty tiers (A-E)", body: "Skills tiered by difficulty — full planche (E), one-arm pull-up (D), muscle-up (C), etc. Higher tiers score more Difficulty points." },
    { title: "Combo bonus", body: "Chaining multiple skills without pause = combo bonus multiplier." },
    { title: "Fall / failed hold penalty", body: "Missed hold or fall = 2-5 point Execution deduction." },
  ],
  scoring: {
    summary: "Freestyle 0-100 (D+E+C+F). Sets: raw reps. Endurance: raw time.",
    winCondition: "Freestyle: highest score. Sets: most reps. Battle: majority round wins.",
    breakdown: [{ action: "Freestyle routine score", points: "0-100" }, { action: "Set of Strength reps", points: "Raw rep count" }],
  },
  penalties: [
    { title: "Fall / missed skill", body: "Execution deduction 2-5 points." },
    { title: "Failed rep (Set of Strength)", body: "Rep not counted; ROM standards strict." },
    { title: "Time over-run", body: "Deduction per second." },
  ],
  positions: [{ name: "Street Athlete / Calisthenics Practitioner", role: "Solo competitor.", count: 1 }],
  officiating: { officials: ["WSWCF-certified judges (3-5)", "Chief Judge", "Rep Counter (Sets)", "Timekeeper"], summary: "WSWCF judges score Freestyle + verify Sets rep quality (full range of motion)." },
  governingBodies: [
    { name: "World Street Workout & Calisthenics Federation (WSWCF)", founded: 2011, headquarters: "Riga, Latvia" },
    { name: "International Street Workout Federation (ISW)", founded: 2014, headquarters: "worldwide" },
    { name: "Kings of the Bar", founded: 2013, headquarters: "worldwide (event organiser)" },
  ],
  majorCompetitions: [
    { name: "WSWCF Street Workout World Cup", frequency: "annual multi-stop tour", founded: 2011, region: "worldwide" },
    { name: "Kings of the Bar World Championship", frequency: "annual", founded: 2013, region: "worldwide" },
    { name: "Battle of the Bars", frequency: "annual", founded: 2015, region: "worldwide" },
    { name: "ISW National Championships (multiple countries)", frequency: "annual", founded: 2014, region: "national circuits" },
  ],
  countriesPlayed: ["US", "UA", "RU", "LV", "PL", "DE", "GB", "FR", "IT", "BR", "MX"],
  famousAthletes: ["Vadim 'Vadym' Oleynik (UKR) — multi-WSWCF champion", "Hannibal for King (USA — NYC bar-park legend)", "Frank Medrano (USA — vegan bodyweight advocate)", "Chris Heria (USA — Thenx founder)"],
  records: [
    { title: "WSWCF World Cup since 2011", holder: "WSWCF", value: "First WSWCF Street Workout World Cup held 2011 in Latvia; annual multi-stop tour since", year: 2011 },
    { title: "NYC bar-park origins", holder: "Hannibal for King + NYC scene", value: "NYC bar-park culture (Bronx / Brooklyn / Harlem) considered foundational to modern calisthenics competitive scene", year: 2005 },
  ],
  variants: ["freestyle-calisthenics", "set-of-strength-calisthenics", "endurance-calisthenics", "battle-of-the-bars"],
  relatedSports: ["gymnastics-rings", "artistic-gymnastics", "crossfit", "parkour-competitive"],
  skills: ["bodyweight strength (planche/lever/one-arm)", "dynamic bar movement (muscle-up/360)", "endurance capacity", "combo flow + creativity"],
  strategies: [
    { title: "Signature skill in Freestyle climax", body: "Save signature high-difficulty skill (full planche press, one-arm pull-up chain) for climax to maximise Difficulty score." },
    { title: "Grip pacing for Set of Strength", body: "Pace early reps to avoid grip failure; explosive later reps for max rep count." },
    { title: "Battle format psychology", body: "Read opponent's fatigue + skill limits; drop hard skill early to force opponent into failed match." },
  ],
  terminology: [
    { term: "Muscle-up", meaning: "Pull-up to dip transition on bar/rings" },
    { term: "Planche", meaning: "Horizontal-body arm-support hold" },
    { term: "Human flag", meaning: "Horizontal body pole-hold (side)" },
    { term: "Front lever / Back lever", meaning: "Horizontal-body hanging holds" },
    { term: "Freestyle / Sets / Battle", meaning: "Three main competition formats" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Basic pull-ups + dips + push-ups", body: "Build baseline strength; first muscle-up." }] },
    { level: "intermediate", steps: [{ title: "Static holds + basic freestyle", body: "Learn front lever + back lever + basic freestyle combos." }] },
    { level: "advanced", steps: [{ title: "WSWCF World Cup / Battle format", body: "Compete in WSWCF World Cup + Battle tournaments." }] },
  ],
  faq: [
    { question: "How is competitive calisthenics different from CrossFit?", answer: "Calisthenics is bodyweight-only (bar, rings, dip station). CrossFit combines Olympic lifting + gymnastics + running + varied equipment. Calisthenics emphasises pure bodyweight mastery + freestyle creativity; CrossFit emphasises broad functional fitness + varied workouts." },
    { question: "Is competitive calisthenics in the Olympics?", answer: "No — federated by WSWCF + ISW but not on Olympic programme. IOC recognition is not currently pursued at the pace of pole sport or parkour." },
  ],
  wikipediaTitle: "Street workout",
  sources: [{ label: "Wikipedia — Street workout", url: "https://en.wikipedia.org/wiki/Street_workout", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default calisthenicsCompetitive;
