import type { Sport } from "@/lib/types";

export const trampolining: Sport = {
  id: "trampolining",
  slug: "trampolining",
  name: "Trampoline Gymnastics",
  officialName: "Trampoline Gymnastics (Olympic discipline)",
  aliases: ["Trampolining", "Trampoline", "Individual Trampoline"],
  shortDescription:
    "Olympic gymnastics discipline in which athletes perform routines of twisting, somersaulting aerial skills on a competition trampoline, judged on difficulty, execution, and time of flight.",
  longDescription:
    "Trampoline gymnastics evolved from George Nissen and Larry Griswold's invention of the modern trampoline in 1936. Competitive trampolining was born in the 1940s; the first World Championship was held in 1964. Trampoline joined the Olympic program at Sydney 2000 as men's + women's individual events. Judged on Difficulty (D-score), Execution (E-score), Horizontal Displacement (H-score), and Time of Flight (T-score), routines require 10 aerial elements executed with extreme precision. China, Belarus, Great Britain, and Canada dominate the podium at Worlds and Olympic Games.",

  category: "gymnastics",
  subCategory: "Olympic gymnastics discipline (aerial-acrobatic)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "US",
  regionOfOrigin: "Iowa, USA (George Nissen + Larry Griswold, University of Iowa, 1936)",
  estimatedOrigin: "Modern trampoline invented 1936; competitive trampolining 1940s; first World Championship 1964; Olympic debut Sydney 2000",

  players: { min: 1, max: 4, note: "Individual (Olympic), Synchronised (2 people), Team, Double Mini events." },
  field: {
    surfaceName: "Competition trampoline (Ultimate Model)",
    dimensions: "Bed 4.28 × 2.14 m; frame 5.05 × 2.91 m; springs 118 total; bed height 1.15 m from floor",
    description: "String-bed (nylon strings 6mm) or web-bed trampoline; 4 marker Xs on the bed to define scoring center." },
  equipment: [
    { name: "Competition trampoline", description: "Eurotramp Ultimate 4×4 model FIG-approved." },
    { name: "Athletic gymnastics attire", description: "Leotard (women), sleeveless singlet (men), gymnastics trousers/shorts." },
    { name: "Trampoline shoes", description: "Thin-soled slipper-like shoes for grip + safety." },
    { name: "Safety mats", description: "Foam end mats surround the trampoline frame." },
    { name: "Spotters", description: "4-6 trained spotters positioned at trampoline perimeter." },
  ],
  duration: {
    approximateMinutes: 5,
    structure: "Per routine: ~20 seconds of aerial skills (10 skills). Full competition: 4-6 hours across preliminaries + finals." },

  objective:
    "Execute two routines (compulsory + voluntary) each of 10 different skills to maximize D-score (difficulty), E-score (execution), H-score (positional accuracy), and T-score (time in air).",
  matchStructure:
    "Preliminary round: 1 compulsory + 1 voluntary routine. Semi-final: 1 voluntary. Final: 1 voluntary. Cumulative scores determine podium.",

  basicRules: [
    { title: "10-skill routine", body: "Must perform exactly 10 different skills in one continuous routine (no repeats, no pauses)." },
    { title: "Bed control", body: "Must land inside the 4×2 m bed; touching frame/springs = deduction; sitting out = 0 for skill." },
    { title: "Time of Flight", body: "Digital sensor measures total time in air across 10 skills (~15-19 seconds for elite men)." },
    { title: "Compulsory routine", body: "Prelim only — set skills required by FIG code (backwards + forwards somersaults + one twist)." },
    { title: "Voluntary routine", body: "Athlete-designed 10-skill routine optimized for D-score." },
  ],
  advancedRules: [
    { title: "D-score cap", body: "No cap technically — Chinese men routinely open above 18 in D-score (world-class routines)." },
    { title: "E-score deductions", body: "Every body position (tuck, pike, straight, twist) deviation deducted 0.1-0.5 per skill." },
    { title: "H-score (horizontal)", body: "Landing outside the center X = up to 1.0 deduction per skill." },
    { title: "Synchronized event", body: "2 athletes on 2 trampolines must land within 0.2 seconds of each other." },
  ],
  scoring: {
    summary: "Sum of D + E + H + T scores per routine. Two routines added for total.",
    winCondition: "Highest cumulative score after preliminary + final routines.",
    breakdown: [
      { action: "D-score (difficulty)", points: "sum of skill difficulty values (18+ elite)" },
      { action: "E-score (execution)", points: "10.0 max; deductions 0.1-0.5 per skill" },
      { action: "H-score (horizontal)", points: "10.0 max; deductions for off-center landings" },
      { action: "T-score (time)", points: "seconds of flight time (17-19 elite)" },
    ],
  },
  penalties: [
    { title: "Frame/spring touch", body: "-1.0 per touch; break in routine = routine ends." },
    { title: "Falling off", body: "Routine terminated at that skill; scores 0 for remaining skills." },
    { title: "Missing a skill", body: "Routine invalidated if all 10 required skills not performed." },
  ],

  positions: [
    { name: "Athlete", role: "Performs the routine solo (or paired for Sync).", count: 1 },
    { name: "Coach", role: "Guides + calls skills from sideline pit." },
    { name: "Spotter", role: "Safety at trampoline perimeter." },
  ],
  officiating: {
    officials: ["FIG Chief Judge", "5-7 Execution Judges", "2 Difficulty Judges", "H-scoring system operator"],
    summary: "FIG Trampoline Committee sanctions all international competitions; 9-11 judges score each routine per FIG Code of Points.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Gymnastique (FIG)", founded: 1881, headquarters: "Lausanne, Switzerland", website: "https://fig-gymnastics.com" },
  ],
  majorCompetitions: [
    { name: "Olympic Games", frequency: "every 4 years", founded: 2000, region: "rotating host cities" },
    { name: "FIG Trampoline World Championships", frequency: "biennial (annual in some years)", founded: 1964, region: "rotating" },
    { name: "FIG Trampoline World Cup Series", frequency: "5-6 events per year", founded: 1998, region: "global circuit" },
    { name: "European Championships", frequency: "biennial", founded: 1969, region: "Europe" },
  ],
  countriesPlayed: ["CN", "GB", "CA", "BY", "RU", "JP", "US", "FR", "PT", "AU", "GE", "DE"],
  famousAthletes: [
    "Dong Dong (CN, Olympic gold 2012, silver 2016)",
    "Rosannagh MacLennan (CA, 2× Olympic gold 2012+2016)",
    "Ivan Litvinovich (BY, Olympic gold 2020)",
    "Bryony Page (GB, Olympic silver 2016, gold 2024)",
    "Uladzislau Hancharou (BY, Olympic gold 2016)",
  ],
  records: [
    { title: "Highest men's D-score at Worlds", holder: "Zhu Xueying (CN)", value: "~18.6", year: 2022 },
    { title: "Longest single Time of Flight", holder: "Ivan Litvinovich", value: "19.2 seconds (10 skills)", year: 2020 },
    { title: "Most Olympic golds", holder: "Rosannagh MacLennan (CA)", value: "2 (London 2012 + Rio 2016)", year: 2016 },
  ],

  variants: ["synchronised-trampoline", "double-mini-trampoline", "tumbling", "power-tumbling"],
  relatedSports: ["gymnastics", "diving", "acrobatic-gymnastics", "aerials-freestyle-skiing"],

  skills: [
    "aerial spatial awareness + body control",
    "twisting + somersaulting technique",
    "landing precision + bed centering",
    "body-line tightness (pike, tuck, straight)",
    "power + explosive push-off",
  ],
  strategies: [
    { title: "Build D-score incrementally", body: "Add one triple twist or double-back per year; safer than jumping in difficulty." },
    { title: "Center every landing", body: "H-score deductions add up — precise bed centering worth 0.5+ per routine." },
    { title: "Compete conservatively at Worlds", body: "Reduced D-score with perfect execution beats risky routines with 8.5 E-scores." },
    { title: "Sync training over separate skills", body: "Sync partner familiarity worth 0.5+ per routine in synchronized event." },
  ],

  terminology: [
    { term: "D-score", meaning: "Difficulty score — sum of skill values across 10 skills." },
    { term: "E-score", meaning: "Execution score — starts at 10.0, deducts for form errors." },
    { term: "H-score", meaning: "Horizontal displacement score — landing accuracy." },
    { term: "T-score", meaning: "Time of Flight score — seconds in air across 10 skills." },
    { term: "Rudy", meaning: "Front somersault with 1.5 twists." },
    { term: "Fliffis", meaning: "Double somersault with twist(s) — foundational trampoline skill." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Join a British Gymnastics club", body: "Recreational trampoline sessions widely available at community gyms + gymnastics clubs." },
        { title: "Master seat drops + front/back drops", body: "Basic body-position drops teach bed control + safe landing." },
        { title: "Learn basic somersault (tuck)", body: "Progression: seat drop → back drop → back pull-over → tuck somersault." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Attend FIG-sanctioned regional meets", body: "State + regional trampoline meets are entry points to national ranking." },
        { title: "Build a legal 10-skill routine", body: "Coach + Delegate certify D-scores per Code of Points." },
        { title: "Compete internationally", body: "FIG World Cup Series is the global qualifying circuit for Worlds + Olympics." },
      ],
    },
  ],

  faq: [
    { question: "Is trampolining safe?", answer: "At competition level with certified coaches + trampolines, injury rates are lower than gymnastics or diving. Recreational backyard trampolines are dramatically more dangerous." },
    { question: "How high do elite trampolinists jump?", answer: "8-10 meters above the bed at peak — the equivalent of a 3-story building." },
    { question: "Is trampoline gymnastics on TV?", answer: "Yes — Olympic broadcasts cover all Trampoline finals; World Championships stream on FIG YouTube." },
    { question: "When did trampoline join the Olympics?", answer: "Sydney 2000 as men's + women's individual trampoline. Synchronized + Double-Mini remain non-Olympic." },
  ],

  sources: [
    { label: "Wikipedia — Trampolining", url: "https://en.wikipedia.org/wiki/Trampolining", publisher: "Wikipedia" },
    { label: "FIG Trampoline Code of Points", url: "https://www.gymnastics.sport/site/rules/tra.pdf", publisher: "FIG" },
    { label: "British Gymnastics Trampoline", url: "https://www.british-gymnastics.org/disciplines/trampoline", publisher: "British Gymnastics" },
  ],
  wikipediaTitle: "Trampolining",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
