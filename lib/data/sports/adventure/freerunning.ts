import type { Sport } from "@/lib/types";

export const freerunning: Sport = {
  id: "freerunning",
  slug: "freerunning",
  name: "Freerunning",
  officialName: "Freerunning",
  aliases: ["FR", "Free Running"],
  shortDescription:
    "The acrobatic, flip-heavy cousin of parkour â€” vault, flip, and spin through urban obstacles, judged on flow, difficulty, and creativity in competitions like the Red Bull Art of Motion.",
  longDescription:
    "Freerunning was coined by British athlete SÃ©bastien Foucan for the 2003 Channel 4 documentary Jump London. Where parkour prioritises efficient movement (David Belle's original discipline), freerunning explicitly embraces acrobatics â€” cork screws, flips, wall spins â€” as expressive movement. FIG (FÃ©dÃ©ration Internationale de Gymnastique) recognized parkour/freerunning as an official discipline in 2018 and hosts World Championships since 2020. The Red Bull Art of Motion series remains the highest-profile freerunning competition.",

  category: "adventure-extreme-sports",
  subCategory: "acrobatic urban movement discipline",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "major",

  countryOfOrigin: "GB",
  regionOfOrigin: "London, UK (SÃ©bastien Foucan; Parkour parent discipline in Lisses, France)",
  estimatedOrigin: "Term coined 2003 (Jump London documentary); Red Bull Art of Motion 2007; FIG recognition 2018",

  players: { min: 1, max: 1, note: "Individual runs; some team choreography events. Freerunning has no traditional 'match' format." },
  field: {
    surfaceName: "Urban terrain or purpose-built spot",
    dimensions: "Variable â€” competition courses ~100 m Ã— 30 m",
    description: "Rooftops, walls, rails, planters, benches, staircases, and custom-built parkour spots." },
  equipment: [
    { name: "Grip shoes", description: "Barefoot-adjacent shoes with high friction; K-Swiss Ariake, Feiyue, or minimalist trainers." },
    { name: "Athletic clothing", description: "Flexible clothing; loose track pants + tank top standard for freedom of motion." },
    { name: "Chalk (optional)", description: "For competition palm grip on rails and walls." },
  ],
  duration: {
    approximateMinutes: 2,
    structure: "Competition run: 60-120 seconds through obstacle course. Training sessions: 2-4 hours." },

  objective:
    "In competition: score maximum points across a 60-90 second run judged on Difficulty, Execution, Flow, and Creativity. In training: master a movement vocabulary + link it to specific spots.",
  matchStructure:
    "Competition format (FIG + Red Bull AoM): 60-120 second solo runs on an obstacle course. Judges score each run out of 100. Best-of-2 or best-of-3 runs per athlete determines placement.",

  basicRules: [
    { title: "Movement vocabulary", body: "Vaults (kong, dash, thief, speed), flips (front, back, side, gainer), wall runs, and precisions." },
    { title: "Flow", body: "Continuous movement without hesitation or fall-outs; flow scoring dominant." },
    { title: "Difficulty", body: "Bigger drops, longer gaps, more rotations = higher difficulty scores." },
    { title: "Creativity", body: "Novel obstacle interactions and unique tricks rewarded above generic flips." },
    { title: "No 'fouls'", body: "Freerunning has no defensive rules â€” only self-imposed safety." },
  ],
  advancedRules: [
    { title: "Landings", body: "Precision landings (both feet, no wobble) worth more than rolling landings." },
    { title: "Combo bonuses", body: "Linking 3+ tricks without ground touch = combo multiplier." },
    { title: "Course-specific challenges", body: "Red Bull AoM courses have named line requirements (e.g., 'must clear the fountain gap')." },
    { title: "Judge panels", body: "5-7 judge panels at major events; drop high + low for average." },
  ],
  scoring: {
    summary: "Points out of 100 across 4 categories (Difficulty, Execution, Flow, Creativity). Judged by expert panel.",
    winCondition: "Highest cumulative or best single run score.",
    breakdown: [
      { action: "Difficulty (skill level)", points: "0-25 pts" },
      { action: "Execution (technique)", points: "0-25 pts" },
      { action: "Flow (continuity)", points: "0-25 pts" },
      { action: "Creativity (originality)", points: "0-25 pts" },
    ],
  },
  penalties: [
    { title: "Fall / touchdown", body: "-5 to -10 pts depending on severity." },
    { title: "Missed line", body: "Partial score voided for that segment." },
  ],

  positions: [
    { name: "Traceur / Freerunner", role: "The performing athlete.", count: 1 },
    { name: "Course designer", role: "Sets the competition obstacles." },
    { name: "Judge", role: "Scores runs across the 4 categories." },
  ],
  officiating: {
    officials: ["FIG-certified judges", "Head Judge", "Course designer"],
    summary: "FIG Parkour Technical Committee sanctions World Championships; Red Bull uses invited pro-athlete judge panels.",
  },

  governingBodies: [
    { name: "FÃ©dÃ©ration Internationale de Gymnastique (FIG)", founded: 1881, headquarters: "Lausanne, Switzerland", website: "https://fig-gymnastics.com/parkour" },
    { name: "Parkour Earth (independent alternative body)", founded: 2017, headquarters: "London, UK", website: "https://parkour.earth" },
  ],
  majorCompetitions: [
    { name: "FIG Parkour World Championships", frequency: "annual", founded: 2020, region: "rotating" },
    { name: "Red Bull Art of Motion", frequency: "annual", founded: 2007, region: "Santorini, Greece + rotating" },
    { name: "World Freerunning Parkour Federation (WFPF) events", frequency: "seasonal", founded: 2008, region: "USA + Europe" },
  ],
  countriesPlayed: ["FR", "GB", "RU", "US", "JP", "PL", "SE", "BR", "DE", "CH"],
  famousAthletes: [
    "SÃ©bastien Foucan (FR/GB, coined 'freerunning')",
    "Jason Paul (DE, 3Ã— Red Bull AoM champion)",
    "Pavel Petkuns (LV, Red Bull AoM 2014 winner)",
    "Dimitris Kyrsanidis (GR, FIG World Champion)",
    "Erica Madrid (US, top female freerunner)",
  ],
  records: [
    { title: "Largest single-drop (comp)", holder: "Ryan Doyle", value: "5 m onto crash mat with cork screw", year: 2018 },
    { title: "Longest gainer flip distance", holder: "Simon Nogueira", value: "~7 m gainer full-twist", year: 2019 },
  ],

  variants: ["parkour", "tricking", "art-du-deplacement"],
  relatedSports: ["parkour", "tricking", "gymnastics", "trampolining"],

  skills: [
    "spatial awareness + aerial control",
    "explosive plyometric power",
    "grip strength + finger strength",
    "creativity + line-reading",
    "fear management",
  ],
  strategies: [
    { title: "Master fundamentals first", body: "6 months on precision jumps, kong vaults, and safety rolls before attempting flips." },
    { title: "Progressive flip training", body: "Trampoline â†’ foam pit â†’ grass â†’ mats â†’ concrete â€” never skip stages." },
    { title: "Line-linking", body: "String 5+ tricks into one continuous line for competition flow scoring." },
    { title: "Scout your spots", body: "Test every obstacle 3-5 times before committing to a competition line." },
  ],

  terminology: [
    { term: "Traceur", meaning: "A practitioner of parkour/freerunning (masc; traceuse fem)." },
    { term: "Kong vault", meaning: "Hands-first dive over an obstacle, feet tucked between arms." },
    { term: "Cat leap", meaning: "Landing hands-first on a vertical surface after a jump." },
    { term: "Precision", meaning: "Standing jump landing on a specific target (rail, ledge)." },
    { term: "Cork screw", meaning: "Horizontal flip with off-axis rotation â€” signature freerunning move." },
    { term: "Bail", meaning: "Aborting a trick mid-air; safe bail = save the run." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Join a parkour gym", body: "Structured foam-pit training with certified coaches (Tempest Freerunning, APEX Movement)." },
        { title: "Master 5 vaults + safety roll", body: "Speed, kong, thief, dash, and lazy vaults; PK roll to absorb landings." },
        { title: "Add basic flips on trampoline", body: "Back tuck + front flip on soft surfaces before ever attempting on ground." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Compete at local jams", body: "Global parkour community hosts monthly 'jams' â€” try amateur competition." },
        { title: "Enter FIG Parkour Nationals", body: "Progress through national ranking to FIG World Championship." },
        { title: "Qualify for Red Bull AoM", body: "Video submissions + regional finals qualify for the annual finals in Santorini." },
      ],
    },
  ],

  faq: [
    { question: "What's the difference between parkour and freerunning?", answer: "Parkour prioritises efficiency (David Belle's original discipline). Freerunning embraces acrobatics and creativity (SÃ©bastien Foucan's evolution). FIG combines both." },
    { question: "Is freerunning dangerous?", answer: "Yes â€” injury rates comparable to gymnastics and skateboarding. Falls from height + wall impacts are the main risks. Proper training reduces risk significantly." },
    { question: "Do I need to be flexible?", answer: "Not initially â€” most fundamentals require power + coordination. Flexibility helps with flips + creative movement." },
    { question: "Is freerunning in the Olympics?", answer: "Not yet. FIG has recognized it as a discipline since 2018 and is pushing for 2028 LA inclusion, though the community is divided on this." },
  ],

  sources: [
    { label: "Wikipedia â€” Freerunning", url: "https://en.wikipedia.org/wiki/Freerunning", publisher: "Wikipedia" },
    { label: "FIG Parkour", url: "https://www.gymnastics.sport/site/pages/disciplines/pk.php", publisher: "FIG" },
    { label: "Red Bull Art of Motion", url: "https://www.redbull.com/int-en/event-series/red-bull-art-of-motion", publisher: "Red Bull" },
  ],
  wikipediaTitle: "Freerunning",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
