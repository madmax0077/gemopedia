import type { Sport } from "@/lib/types";

export const defendo: Sport = {
  id: "defendo",
  slug: "defendo",
  name: "Defendo",
  officialName: "Defendo (formerly Combato)",
  aliases: ["Underwood Defendo"],
  shortDescription:
    "Canadian defensive combat system founded 1963 by Grandmaster Bill Underwood — blends jiu-jitsu, judo, savate, wrestling, boxing into practical self-defence. Used by RCMP + Canadian Armed Forces; graded through 6 levels (yellow to black tab). Civilianised evolution of Underwood's WWII Combato commando system.",
  longDescription:
    "Defendo is a Canadian defensive combat system founded 1963 by Grandmaster William 'Bill' Underwood (1907-1998) — a civilianised evolution of Underwood's Combato, which he developed during WWII for Allied commandos in Britain + Canada. Blends jiu-jitsu, judo, savate, wrestling, and boxing into practical scenario-based self-defence method emphasising verbal de-escalation, joint locks, throws, weapon disarms (knife, stick, firearm from concealment). Core self-defence syllabus for Royal Canadian Mounted Police (RCMP) since 1970 + used by Canadian Armed Forces, correctional officers, and private security. Not a competitive sport — trained as scenarios (assault, weapon disarm, ground survival, multi-attacker) with graded proficiency tests through 6 coloured tabs (yellow → orange → green → blue → brown → black). Governed by CMAANA (Combined Martial Arts Academies of North America, est. 1965) + Defendo Alliance International (1990).",
  category: "combat-sports",
  subCategory: "defensive combat system",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "niche",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (national; roots in Toronto + RCMP curriculum)",
  estimatedOrigin: "Civilian Defendo founded 1963 by Bill Underwood; roots in WWII-era Combato (1940s Allied commando training)",
  players: { min: 2, max: 4, note: "1v1 or 1v multiple attackers in scenarios." },
  equipment: [
    { name: "Training weapons", description: "Rubber knife, aluminum training gun, foam stick — for weapon-disarm drills." },
    { name: "Focus pads + Thai pads", description: "Standard striking targets." },
    { name: "Uniform (optional)", description: "Traditionally civilian clothing to simulate real-world encounters; formal grading uses black uniform with rank tab on sleeve." },
    { name: "Grading tab", description: "Coloured cloth tab (yellow through black) worn on uniform sleeve indicating rank." },
  ],
  duration: { approximateMinutes: 90, structure: "Class 60-120 min; grading tests 3-6 hours per level." },
  objective: "Master practical self-defence — verbal de-escalation, joint locks, throws, weapon disarms, scenario response.",
  matchStructure: "Not competitive; trained as scenarios (assault, weapon disarm, ground survival, multi-attacker) with graded proficiency tests.",
  basicRules: [
    { title: "Verbal de-escalation first", body: "Instructor drilled to attempt verbal control before physical response." },
    { title: "Scenario-based training", body: "Realistic environments (parking lot, elevator, low-light, seated) instead of matted-gym drills." },
    { title: "Progressive resistance", body: "Partner drills escalate from compliant to fully-resisting attacks." },
  ],
  advancedRules: [
    { title: "Multi-attacker + low-light scenarios", body: "Advanced tabs face 2-3 attackers in low-light + confined spaces." },
    { title: "Use-of-force documentation", body: "Advanced curriculum includes documentation + legal justification for force." },
  ],
  scoring: {
    summary: "Grading pass/fail based on demonstrable proficiency: technique execution, tactical decision-making, controlled force application, verbal de-escalation.",
    winCondition: "Grading tab awarded after passing test.",
    breakdown: [{ action: "Grading test pass", points: "Tab awarded" }],
  },
  penalties: [
    { title: "Uncontrolled contact in drill", body: "Stop drill; retrain; repeat = removed from session." },
    { title: "Excessive force in scenario", body: "Grading failure; retrain on use-of-force continuum before retake." },
    { title: "Unsafe weapon handling", body: "Immediate dismissal + safety recertification." },
  ],
  positions: [{ name: "Practitioner", role: "Learner of defensive skills, scenario responder.", count: 1 }],
  officiating: {
    officials: ["Chief instructor", "Grading panel (2-3 senior instructors)", "Scenario role-players"],
    summary: "Grading panel evaluates technique, judgement, and force appropriateness.",
  },
  governingBodies: [
    { name: "Combined Martial Arts Academies of North America (CMAANA)", founded: 1965, headquarters: "Toronto, Ontario, Canada" },
    { name: "Defendo Alliance International", founded: 1990, headquarters: "Ontario, Canada" },
  ],
  majorCompetitions: [
    { name: "Defendo National Instructor Certification", frequency: "annual", founded: 1965, region: "Canada" },
    { name: "Defendo International Seminars", frequency: "biennial", founded: 1990, region: "global (Canada, US, Europe)" },
  ],
  countriesPlayed: ["CA", "US", "GB", "FR", "DE"],
  famousAthletes: [
    "Grandmaster William 'Bill' Underwood (Canada, 1907-1998) — founder + jiu-jitsu pioneer",
    "Louis Jani (Canada) — Underwood's protégé + long-time Defendo instructor",
  ],
  records: [
    { title: "Founding", holder: "Bill Underwood", value: "Toronto, Canada; formalised post-WWII Combato into civilian Defendo", year: 1963 },
    { title: "RCMP adoption", holder: "Royal Canadian Mounted Police", value: "Core self-defence syllabus for RCMP recruits", year: 1970 },
  ],
  variants: ["combato-military-original", "defendo-rcmp-syllabus"],
  relatedSports: ["krav-maga", "jujutsu", "judo", "wrestling"],
  skills: ["joint locks", "throws", "weapon disarms", "verbal de-escalation", "scenario response"],
  strategies: [
    { title: "Line of attack redirection", body: "Step off attacker's line, redirect momentum with parry, apply joint lock/throw from side angle." },
    { title: "Pre-emptive de-escalation", body: "Verbal control (name, boundary, exit) with hands up in fence position." },
    { title: "Weapon disarm chain", body: "Control the weapon-bearing limb first, then the weapon, then the attacker." },
  ],
  terminology: [
    { term: "Combato", meaning: "Underwood's WWII commando combat system" },
    { term: "Tab", meaning: "Coloured cloth on uniform sleeve indicating rank" },
    { term: "Fence position", meaning: "Hands-up defensive posture during verbal de-escalation" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Yellow tab basics", body: "Stance, blocks, basic strikes, escapes from grabs, verbal de-escalation." }] },
    { level: "intermediate", steps: [{ title: "Orange/green/blue tabs", body: "Joint locks, throws, weapon awareness (knife, stick, firearm), scenario response." }] },
    { level: "advanced", steps: [{ title: "Brown/black tabs (instructor)", body: "Multi-attacker, low-light scenarios, arrest-and-control, teaching, use-of-force documentation." }] },
  ],
  faq: [
    { question: "Who founded Defendo?", answer: "Grandmaster William 'Bill' Underwood (1907-1998), Canadian jiu-jitsu pioneer who developed Combato in WWII for Allied commandos, then civilianised it as Defendo in 1963." },
    { question: "Is Defendo a sport?", answer: "No — Defendo is a defensive combat art. There are no tournaments; all training is scenario-based with grading tests, not competitive matches." },
  ],
  wikipediaTitle: "Defendo",
  sources: [{ label: "Wikipedia — Defendo", url: "https://en.wikipedia.org/wiki/Defendo", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default defendo;
