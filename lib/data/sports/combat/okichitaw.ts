import type { Sport } from "@/lib/types";

export const okichitaw: Sport = {
  id: "okichitaw",
  slug: "okichitaw",
  name: "Okichitaw",
  officialName: "Okichitaw (Plains Cree martial art)",
  aliases: ["Nihiyawew combat art"],
  shortDescription:
    "Modern Canadian Indigenous martial art founded 1997 by George J. Lépine (Cree) — synthesises Plains Cree warrior traditions with taekwondo, hapkido, judo, Chinese Chuan Fa. Features gunstock war-club, spear, tomahawk, knife, empty-hand joint locks with Cree-language commands.",
  longDescription:
    "Okichitaw is a modern Canadian Indigenous martial art founded 1997 by George J. Lépine (Cree Nation) — a synthesis drawing on Plains Cree warrior traditions with technical influences from taekwondo, hapkido, judo, and Chinese Chuan Fa. Preserved + taught through the Canadian Aboriginal Martial Arts Association (CAMAA, HQ Toronto). Features traditional Cree weapons: gunstock war-club (mostos-pikagan), spear (cistahaskwan), tomahawk (cikahikan), knife (mohkomanis), plus bow and unarmed joint-lock/throw techniques. Commands and terminology in Cree language. Practiced as payskisikaw (forms), kisiwak (partnered drills), and controlled sparring with foam/rubber training weapons. Not competitive tournament-based — ranking through Arrows + Feathers grading levels assessed on technical proficiency, cultural understanding, and Cree-language fluency.",
  category: "combat-sports",
  subCategory: "Indigenous Canadian martial art",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "niche",
  countryOfOrigin: "CA",
  regionOfOrigin: "Plains region (Cree Nation, Canada)",
  estimatedOrigin: "Founded 1997 by George J. Lépine (Cree); CAMAA preservation body",
  players: { min: 1, max: 4, note: "1 for forms; 2 for drills; up to 4 for multi-opponent scenarios." },
  equipment: [
    { name: "Gunstock war-club (mostos-pikagan)", description: "Wooden club shaped like rifle stock with pointed spike/blade at the hook — Plains signature weapon." },
    { name: "Tomahawk (cikahikan)", description: "Small hand-axe for close combat + throwing; often ceremonial with beadwork." },
    { name: "Spear (cistahaskwan)", description: "Wooden shaft with stone/metal head, 5-7 feet long, thrown or thrust." },
    { name: "Training weapons (foam/rubber)", description: "Safety weapons for sparring drills." },
    { name: "Ceremonial regalia", description: "Traditional Cree clothing for grading + demonstrations." },
  ],
  duration: { approximateMinutes: 90, structure: "Class 90-120 min; grading tests 2-4 hours per level." },
  objective: "Master technical curriculum + cultural knowledge; progress through Arrows + Feathers grading levels.",
  matchStructure: "Practiced as forms (payskisikaw), partnered drills (kisiwak), and controlled sparring with rubber/foam training weapons — no formal tournament circuit.",
  basicRules: [
    { title: "Cree-language commands", body: "Class instruction + technique names in Cree language." },
    { title: "Cultural elder involvement", body: "Grading includes cultural knowledge testing by elders." },
    { title: "Foam/rubber training weapons only", body: "Live weapons used only in advanced demonstrations under strict supervision." },
  ],
  advancedRules: [
    { title: "Multi-opponent scenarios", body: "Advanced students face 2-3 attacker choreographed sequences." },
    { title: "Mounted-combat concepts", body: "Advanced curriculum includes historic Plains mounted-warrior tactics." },
  ],
  scoring: {
    summary: "Not a tournament sport; ranking via Arrow + Feather grading levels (First Arrow → Warrior's Feathers).",
    winCondition: "Grading pass/fail assessed on technique + cultural knowledge.",
    breakdown: [{ action: "Level advancement", points: "Grading pass" }],
  },
  penalties: [
    { title: "Uncontrolled contact", body: "Immediate stop + safety review; repeat = dismissal." },
    { title: "Disrespect of ceremony", body: "Serious cultural infraction — removal from grading until cultural counsel." },
    { title: "Weapon safety breach", body: "Instant class dismissal + retraining." },
  ],
  positions: [{ name: "Warrior (Nihiyawew)", role: "Practitioner — armed + unarmed combat, cultural steward.", count: 1 }],
  officiating: {
    officials: ["Head instructor (Okimah)", "Senior students (Onikanew)", "Cultural elder (for ceremony)"],
    summary: "Instructor-led; grading includes cultural knowledge testing by elders.",
  },
  governingBodies: [{ name: "Canadian Aboriginal Martial Arts Association (CAMAA)", founded: 1997, headquarters: "Toronto, Ontario, Canada" }],
  majorCompetitions: [
    { name: "Aboriginal Sports Circle demonstrations", frequency: "annual", founded: 1998, region: "Canada" },
    { name: "Pan-Am Indigenous Games (demonstration)", frequency: "quadrennial", founded: 1990, region: "Americas" },
  ],
  countriesPlayed: ["CA", "US"],
  famousAthletes: ["George J. Lépine (Canada, Cree) — founder + grandmaster of Okichitaw"],
  records: [
    { title: "Founding", holder: "George J. Lépine", value: "Founded in Toronto, Canada; recognised by Indigenous cultural preservation programs", year: 1997 },
    { title: "First public demonstration", holder: "George J. Lépine", value: "Toronto Pan-Am Indigenous Games demonstration event", year: 1998 },
  ],
  variants: ["traditional-plains-cree-combat", "modern-camaa-syllabus"],
  relatedSports: ["hapkido", "judo", "taekwondo", "kung-fu"],
  skills: ["gunstock war-club", "spear", "tomahawk", "joint locks", "Cree cultural knowledge"],
  strategies: [
    { title: "Gunstock trap-and-strike", body: "Use the hooked end of war-club to trap opponent's weapon or limb, follow with striking end (weighted head) to the temple." },
    { title: "Tomahawk hook-throw", body: "Feint high with tomahawk, hook neck/ankle and pull to off-balance, follow with grounded finishing strike." },
    { title: "Spear circle defence", body: "Rotate spear in figure-8 pattern to keep multiple attackers at bay while retreating to defensible terrain." },
  ],
  terminology: [
    { term: "Nihiyawew", meaning: "Cree word for 'warrior'" },
    { term: "Mostos-pikagan", meaning: "Gunstock war-club" },
    { term: "Cistahaskwan", meaning: "Spear" },
    { term: "Cikahikan", meaning: "Tomahawk" },
    { term: "Okimah", meaning: "Head instructor/chief" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "First Arrow", body: "Basic footwork, empty-hand strikes, weapon familiarity, Cree greetings + terminology." }] },
    { level: "intermediate", steps: [{ title: "Middle Arrows", body: "Gunstock war-club forms, tomahawk drills, hapkido joint locks, spear thrust-and-parry." }] },
    { level: "advanced", steps: [{ title: "Warrior's Feathers", body: "Multi-opponent scenarios, mounted-combat concepts, ceremony leadership, teaching authorisation." }] },
  ],
  faq: [
    { question: "Is Okichitaw a traditional Indigenous art?", answer: "Okichitaw is a modern synthesis that draws on Plains Cree warrior traditions but was formally systematised in 1997 by George J. Lépine (Cree). Traditional Cree combat was not codified as a single 'art' — Okichitaw revives and structures those techniques." },
    { question: "Is it tournament-based?", answer: "No — Okichitaw is preserved as cultural + practical art with grading levels but no international tournament circuit." },
  ],
  wikipediaTitle: "Okichitaw",
  sources: [{ label: "Wikipedia — Okichitaw", url: "https://en.wikipedia.org/wiki/Okichitaw", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "community",
};

export default okichitaw;
