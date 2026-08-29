import type { Sport } from "@/lib/types";

export const dumog: Sport = {
  id: "dumog",
  slug: "dumog",
  name: "Dumog",
  officialName: "Dumog (Filipino Wrestling)",
  aliases: ["Filipino Wrestling", "Filipino Grappling"],
  shortDescription:
    "Traditional Filipino wrestling art — grip-based standing wrestling with signature manipulation of opponent's balance via clothing + neck + limb grips. Practiced within broader Filipino martial arts (FMA) system (Kali/Escrima/Arnis) as unarmed component.",
  longDescription:
    "Dumog is the traditional Filipino wrestling art — an integral unarmed component within the broader Filipino Martial Arts (FMA) system alongside Kali/Escrima/Arnis (stick + blade). Grip-based standing wrestling with signature emphasis on manipulating opponent's balance via clothing grips + neck + limb control + off-balance takedowns. Techniques include hip throws, sweeping trips, joint locks, standing chokes. Distinct from Western wrestling by tighter cultural integration with weapon arts + practical self-defense orientation. Practiced primarily in Philippines + within FMA-affiliated schools worldwide. Contemporary Dumog often taught as component of Kali/Escrima curriculum rather than standalone sport. Limited formal competition circuit; occasional exhibition at FMA gatherings + tournaments.",
  category: "combat-sports",
  subCategory: "folk wrestling (Filipino, FMA-integrated)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "niche",
  countryOfOrigin: "PH",
  regionOfOrigin: "Philippines (indigenous martial art, various regional variants across archipelago)",
  estimatedOrigin: "Ancient Filipino tradition (pre-Spanish colonization); component of Kali/Escrima/Arnis martial systems",
  players: { min: 2, max: 2, note: "1v1 match." },
  equipment: [{ name: "Traditional Filipino attire or gi", description: "Minimal attire; grip via clothing + body." }],
  duration: { approximateMinutes: 5, structure: "Traditional folk format; short bouts to takedown or submission." },
  objective: "Take opponent to ground via grip + off-balance manipulation; submission or pin wins.",
  matchStructure: "Best-of-3 falls or single fall depending on regional variant.",
  basicRules: [
    { title: "Standing grip wrestling with clothing + limb grips", body: "Grip via jacket + neck + limbs; attempt takedown." },
    { title: "Off-balance manipulation", body: "Signature technique — small-force manipulation to break opponent's balance before throw." },
    { title: "Standing chokes + joint locks permitted", body: "Broader technique arsenal than pure Western wrestling." },
    { title: "Win by takedown + control", body: "Getting opponent to ground + maintaining top control = win." },
  ],
  advancedRules: [
    { title: "FMA integration", body: "Traditionally taught alongside stick/blade weapons; grip-fighting principles connect to weapon disarm techniques." },
    { title: "Regional variants", body: "Cebuano + Visayan + Ilocano regional Dumog variants exist with technique nuances." },
    { title: "Self-defense orientation", body: "Traditional emphasis on practical self-defense over sport format." },
  ],
  scoring: {
    summary: "Takedown + control or submission wins bout.",
    winCondition: "Takedown with control or submission.",
    breakdown: [
      { action: "Takedown + top control", points: "Match win" },
      { action: "Submission", points: "Match win" },
    ],
  },
  penalties: [{ title: "Striking (in wrestling-only variant)", body: "Fall loss." }],
  positions: [{ name: "Wrestler", role: "Grip + throw + control.", count: 1 }],
  officiating: { officials: ["Referee / instructor"], summary: "Traditional teacher-student + community refereeing." },
  governingBodies: [
    { name: "Various FMA associations (integrated Dumog)", founded: 1970, headquarters: "Philippines + international" },
    { name: "No dedicated international Dumog federation", founded: 0, headquarters: "N/A" },
  ],
  majorCompetitions: [
    { name: "FMA tournament grappling exhibitions", frequency: "occasional", founded: 2000, region: "Philippines + international FMA community" },
  ],
  countriesPlayed: ["PH", "US (Filipino diaspora + FMA schools)", "worldwide FMA community"],
  famousAthletes: [
    "Various Filipino Dumog + FMA masters — Dan Inosanto, Leo Gaje, Ernesto Presas (broader FMA)",
    "No dedicated international competitive circuit produces famous named athletes",
  ],
  records: [
    { title: "Integrated component of Filipino Martial Arts (FMA)", holder: "Dumog", value: "Core unarmed grappling component of Kali/Escrima/Arnis; taught to millions of FMA practitioners worldwide", year: 2024 },
  ],
  variants: ["cebuano-visayan-central-philippines", "ilocano-northern-luzon", "modern-fma-integrated-curriculum"],
  relatedSports: ["kali", "escrima", "eskrima", "silat", "muay-boran", "brazilian-jiu-jitsu"],
  skills: ["standing grip fighting", "off-balance manipulation", "hip throw + takedown", "standing chokes + locks"],
  strategies: [
    { title: "Off-balance before force", body: "Break opponent's balance with small-force manipulation before applying takedown force." },
    { title: "FMA weapon-transition training", body: "Grip principles + disarms integrated with stick/blade weapon training." },
  ],
  terminology: [
    { term: "Dumog", meaning: "Filipino wrestling / grappling art." },
    { term: "Kali / Escrima / Arnis", meaning: "Broader Filipino Martial Arts system integrating Dumog." },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Join FMA (Kali / Escrima) school", body: "Most FMA schools worldwide teach Dumog as component curriculum." }] },
    { level: "advanced", steps: [{ title: "Filipino instructor training + certification", body: "Direct instruction from Filipino masters in Philippines or US Filipino community." }] },
  ],
  faq: [
    { question: "Is Dumog a standalone sport?", answer: "Traditionally practiced as component of Filipino Martial Arts (FMA) rather than standalone sport. Limited standalone competition circuit — mostly taught + practiced within Kali/Escrima/Arnis curriculum." },
    { question: "How does Dumog compare to BJJ?", answer: "BJJ is Brazilian evolution of Judo — heavy ground game emphasis + guard positions. Dumog is standing-oriented Filipino tradition with clothing-grip takedowns + integration with weapon arts. Different tactical emphasis; both are grappling arts." },
  ],
  wikipediaTitle: "Dumog",
  sources: [{ label: "Wikipedia — Dumog", url: "https://en.wikipedia.org/wiki/Dumog", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
