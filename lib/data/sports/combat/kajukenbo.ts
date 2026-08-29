import type { Sport } from "@/lib/types";

export const kajukenbo: Sport = {
  id: "kajukenbo",
  slug: "kajukenbo",
  name: "Kajukenbo",
  officialName: "Kajukenbo",
  aliases: ["Ka-Ju-Ken-Bo"],
  shortDescription:
    "Hawaiian hybrid martial art created 1947 by 5 masters from Karate (KA) + Judo (JU) + Kenpo (KEN) + Boxing (BO) — one of world's first documented modern eclectic martial arts. Practical street self-defense orientation; taught internationally across all major martial arts organizations.",
  longDescription:
    "Kajukenbo is a Hawaiian hybrid martial art founded 1947 in Honolulu by five masters from different martial arts backgrounds — the name is an acronym for KA (Karate) + JU (Judo) + KEN (Kenpo/Kempo) + BO (Boxing). The founders (Peter Choo, Frank Ordonez, Joe Holck, Adriano Emperado, and Clarence Chang) trained together in the Palama Settlement gym of Honolulu for years, deliberately synthesizing a practical hybrid system for street self-defense in rough post-WWII Honolulu neighborhoods. Kajukenbo is one of the world's first documented MODERN ECLECTIC MARTIAL ARTS — predating Bruce Lee's Jeet Kune Do philosophy of style-blending. Now taught internationally with major branches: Emperado method (traditional), Wun Hop Kuen Do (Chinese-influenced), Ch'uan Fa method, Tum Pai. Practical self-defense orientation, hard-contact training, and pragmatic (not sport-oriented) focus distinguishes Kajukenbo from purer style traditions.",
  category: "combat-sports",
  subCategory: "hybrid martial art (Hawaiian eclectic)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "Honolulu, Hawaii, USA (Palama Settlement)",
  estimatedOrigin: "Founded 1947 Honolulu by 5 masters — Peter Choo + Frank Ordonez + Joe Holck + Adriano Emperado + Clarence Chang",
  players: { min: 2, max: 2, note: "1v1 sparring or self-defense practice; solo forms + kata also practiced." },
  equipment: [
    { name: "Gi (uniform)", description: "Traditional black or white gi worn by practitioners." },
    { name: "Sparring pads (gloves, shin guards, mouthguard)", description: "For contact sparring practice." },
    { name: "Traditional weapons (advanced levels)", description: "Some branches teach Okinawan + Filipino weapons at advanced levels." },
  ],
  duration: { approximateMinutes: 90, structure: "Class typically 60-90 min; sparring rounds 2-3 min; belt tests hours." },
  objective: "Self-defense competence + belt progression through curriculum + kata + sparring + self-defense scenario training.",
  matchStructure: "Not primarily sport-oriented; training format includes techniques + forms + sparring + self-defense scenarios.",
  basicRules: [
    { title: "Blended technique base (Karate + Judo + Kenpo + Boxing)", body: "Curriculum draws striking (Karate + Kenpo + Boxing) + grappling (Judo)." },
    { title: "Practical self-defense orientation", body: "Emphasis on real-world applicability over sport competition." },
    { title: "Belt system (white to black + degrees)", body: "Standard martial arts belt progression through curriculum." },
    { title: "Kata (forms) + techniques + sparring", body: "Traditional training includes all three components." },
  ],
  advancedRules: [
    { title: "Multiple branches", body: "Emperado method (traditional), Wun Hop Kuen Do (Chinese-influenced), Ch'uan Fa, Tum Pai — divergent branches with technical variations." },
    { title: "Hard-contact training tradition", body: "Historically known for very hard contact sparring, reflecting practical self-defense founding purpose." },
    { title: "Weapon integration (some branches)", body: "Advanced levels may include Okinawan (bo, nunchaku) + Filipino (kali sticks) weapons." },
  ],
  scoring: {
    summary: "Belt progression + kata competition scoring + sparring performance (not universally standardized).",
    winCondition: "Belt tests judged by masters; sparring judged by contact effectiveness.",
    breakdown: [
      { action: "Belt promotion", points: "Master evaluation" },
      { action: "Sparring performance", points: "Judged effectiveness" },
    ],
  },
  penalties: [
    { title: "Uncontrolled contact (in controlled sparring)", body: "Warning + potential dismissal from class." },
    { title: "Etiquette breach", body: "Dojo etiquette enforcement." },
  ],
  positions: [{ name: "Practitioner (Kajukenbo student)", role: "Belt-ranked practitioner learning + practicing curriculum.", count: 1 }],
  officiating: { officials: ["Master (Sifu/Sensei)", "Belt test panel"], summary: "Masters conduct instruction + belt evaluations." },
  governingBodies: [
    { name: "Kajukenbo Self-Defense Institute (Emperado method)", founded: 1947, headquarters: "Honolulu, Hawaii" },
    { name: "International Kajukenbo Association (various branches)", founded: 1970, headquarters: "USA + international" },
  ],
  majorCompetitions: [
    { name: "Kajukenbo World Championships (branch-specific)", frequency: "annual (branch-specific)", founded: 1990, region: "USA + international" },
    { name: "Regional Kajukenbo tournaments", frequency: "seasonal", founded: 1970, region: "USA + international" },
  ],
  countriesPlayed: ["US (Hawaii + Mainland)", "PH (via Filipino-Hawaiian community)", "GB", "DE", "IT", "MX", "BR", "CA", "AU"],
  famousAthletes: [
    "Adriano Emperado (USA, 1926-2009) — primary Kajukenbo founder + Emperado method leader",
    "Sonny Gascon (USA) — Kajukenbo master + practitioner",
    "Ron Salvador (USA) — Wun Hop Kuen Do branch master",
    "Various contemporary Kajukenbo masters across branches",
  ],
  records: [
    { title: "First documented modern eclectic martial art", holder: "Kajukenbo", value: "Founded 1947 by conscious style-blending of 5 masters — predates Bruce Lee's Jeet Kune Do (1967) by 20 years as documented eclectic hybrid art", year: 1947 },
    { title: "Hawaiian martial arts export", holder: "Kajukenbo", value: "Successfully exported Hawaiian martial arts tradition internationally with 100,000+ estimated practitioners worldwide across branches", year: 2024 },
  ],
  variants: ["emperado-traditional-method", "wun-hop-kuen-do-chinese-influenced", "chuan-fa-method", "tum-pai-branch"],
  relatedSports: ["karate", "judo", "kenpo", "kempo", "boxing", "mixed-martial-arts", "jeet-kune-do"],
  skills: ["striking (Karate + Boxing + Kenpo blend)", "grappling (Judo throws + basic groundwork)", "kata (forms)", "self-defense scenarios", "hard-contact sparring"],
  strategies: [
    { title: "Blend striking + grappling", body: "Core Kajukenbo philosophy — no single style suffices; must blend for street effectiveness." },
    { title: "Hard-contact training realism", body: "Emphasize realistic contact over point-sparring; prepares for real self-defense." },
  ],
  terminology: [
    { term: "Kajukenbo", meaning: "KA (Karate) + JU (Judo) + KEN (Kenpo) + BO (Boxing) — the founding acronym." },
    { term: "Sijo", meaning: "Founder title (used for Emperado)." },
    { term: "Sifu", meaning: "Instructor title (Chinese-influenced branches)." },
    { term: "Palama Settlement", meaning: "Honolulu neighborhood where Kajukenbo founded 1947." },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Find local Kajukenbo school", body: "Schools worldwide — search for branch preference (Emperado / Wun Hop Kuen Do / etc.)." }] },
    { level: "advanced", steps: [{ title: "Black belt certification + branch specialization", body: "Deep training in chosen branch + potential instructor certification." }] },
  ],
  faq: [
    { question: "How is Kajukenbo different from MMA?", answer: "Both blend styles, but MMA is competition-focused sport (UFC etc.) with rulesets; Kajukenbo is self-defense martial art tradition without primary competition orientation. Kajukenbo predates MMA by 40+ years as documented style-blending. Modern MMA fighters may cross-train Kajukenbo elements." },
    { question: "Is Kajukenbo effective for real self-defense?", answer: "Yes — founded specifically for practical Honolulu street self-defense post-WWII. Hard-contact training tradition + eclectic technique base makes Kajukenbo more practical than many pure-style traditions. Modern effectiveness depends on training quality + practitioner." },
  ],
  wikipediaTitle: "Kajukenbo",
  sources: [{ label: "Wikipedia — Kajukenbo", url: "https://en.wikipedia.org/wiki/Kajukenbo", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
