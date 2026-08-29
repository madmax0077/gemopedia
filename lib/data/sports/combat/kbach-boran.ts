import type { Sport } from "@/lib/types";

export const kbachBoran: Sport = {
  id: "kbach-boran",
  slug: "kbach-boran",
  name: "Kbach Kun Boran",
  officialName: "Kbach Kun Boran Khmer (ក្បាច់គុនបុរាណខ្មែរ)",
  aliases: ["Bokator", "Labokkatao", "Ancient Khmer Martial Art"],
  shortDescription:
    "Ancient Khmer martial art (also called Bokator/Labokkatao) — Cambodia's traditional weapon + unarmed combat system with animal-style techniques (lion, monkey, elephant, crocodile). Practiced 1000+ years, revived post-Khmer Rouge; UNESCO Intangible Cultural Heritage 2022.",
  longDescription:
    "Kbach Kun Boran Khmer (also known as Bokator or Labokkatao) is Cambodia's ancient traditional martial art system — encompassing unarmed combat, weapons (dao/bang/dam-bang staff), and animal-style techniques (lion, monkey, elephant, crocodile, cobra, tiger, horse, dragon, bird, duck, fish). Depicted on Angkor Wat + Bayon temple reliefs dating 9th-13th century. Nearly extinct following the Khmer Rouge genocide (1975-1979) which killed most masters; revived from the 1990s under Grand Master San Kim Sean (Cambodian diaspora). Formalised competition system 2006. Distinguished from Pradal Serey by inclusion of weapons + wider technique arsenal (grappling, joint locks). Colours of krama (checkered scarf) belt indicate rank: white → green → blue → red → brown → black → gold (10th degree black). UNESCO inscribed Kun Bokator on Representative List of Intangible Cultural Heritage of Humanity in December 2022. Governed by Cambodian Bokator Federation + Kun Bokator World Federation.",
  category: "combat-sports",
  subCategory: "traditional Khmer martial art (ancient)",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "regional",
  countryOfOrigin: "KH",
  regionOfOrigin: "Cambodia (Angkor era origins)",
  estimatedOrigin: "Ancient roots depicted on Angkor Wat + Bayon reliefs (9th-13th century); revival post-1990s; UNESCO Intangible Heritage 2022",
  players: { min: 1, max: 4, note: "Solo forms + partner sparring + multi-opponent choreography." },
  equipment: [
    { name: "Krama (checkered scarf) belt", description: "Colour indicates rank: white → green → blue → red → brown → black → gold." },
    { name: "Dam-bang (long staff)", description: "Traditional 6-foot wooden staff — foundational weapon." },
    { name: "Dao (Khmer sword)", description: "Curved single-edge sword used in kata + partner practice." },
    { name: "Traditional white uniform", description: "White pants + shirt with krama belt." },
  ],
  duration: { approximateMinutes: 60, structure: "Class 60-90 min; grading tests 2-4 hours per krama level." },
  objective: "Master forms + weapons + grappling + animal-style techniques; achieve krama belt progression.",
  matchStructure: "Practiced as forms (chbap) + partner drills + light-contact sparring + weapons kata. Not primarily competition-oriented.",
  basicRules: [
    { title: "Krama belt colour hierarchy", body: "White → green → blue → red → brown → black → gold (10th degree)." },
    { title: "Animal-style technique integration", body: "10+ animal styles integrated: lion, monkey, elephant, crocodile, cobra, tiger, horse, dragon, bird, duck, fish." },
    { title: "Weapons + unarmed combined", body: "Distinguishes from Pradal Serey by including weapons + grappling." },
  ],
  advancedRules: [
    { title: "Bok Cham (partnered choreographed forms)", body: "Advanced students perform 2-4 person choreographed combat sequences." },
    { title: "Weapons kata with dam-bang + dao", body: "Traditional weapons forms tested for high-degree grading." },
  ],
  scoring: {
    summary: "Krama belt grading pass/fail; competition scoring for animal-style kata + weapons kata + light-contact sparring.",
    winCondition: "Krama belt promotion; competition — highest kata score or sparring points.",
    breakdown: [{ action: "Krama level advancement", points: "Grading pass" }],
  },
  penalties: [
    { title: "Uncontrolled contact in sparring", body: "Warning; repeat = removed from session." },
    { title: "Weapon safety breach", body: "Immediate stop + retraining." },
    { title: "Failure to honour tradition/ceremony", body: "Corrected by instructor; grading impact for serious cases." },
  ],
  positions: [{ name: "Bokatorer (practitioner)", role: "Solo forms + partner drills + weapons + light sparring.", count: 1 }],
  officiating: {
    officials: ["Grand Master + senior instructors", "Grading panel", "Cambodian federation judges for competition"],
    summary: "Grand Master + panel evaluate grading; federation judges score competition kata + sparring.",
  },
  governingBodies: [
    { name: "Cambodian Bokator Federation", founded: 2004, headquarters: "Phnom Penh, Cambodia" },
    { name: "Kun Bokator World Federation", founded: 2013, headquarters: "Phnom Penh, Cambodia" },
  ],
  majorCompetitions: [
    { name: "Cambodian National Bokator Championships", frequency: "annual", founded: 2006, region: "Cambodia" },
    { name: "SEA Games Kbach Kun Boran (2023 Cambodia)", frequency: "biennial (host-dependent)", founded: 2023, region: "SE Asia" },
    { name: "World Bokator Championships", frequency: "biennial", founded: 2013, region: "global (host rotates)" },
  ],
  countriesPlayed: ["KH", "FR", "US", "AU", "TH", "VN"],
  famousAthletes: [
    "Grand Master San Kim Sean (Cambodia/USA) — post-Khmer Rouge revival grandmaster",
    "Various Cambodian federation champions",
  ],
  records: [
    { title: "UNESCO Intangible Cultural Heritage", holder: "Kun Bokator", value: "Inscribed on UNESCO Representative List of Intangible Cultural Heritage of Humanity", year: 2022 },
    { title: "Post-Khmer Rouge revival", holder: "Grand Master San Kim Sean", value: "Revived Kbach Kun Boran from 1990s after Khmer Rouge genocide (1975-1979) killed most masters", year: 1995 },
    { title: "SEA Games debut (2023 Cambodia)", holder: "Cambodia", value: "Cambodia introduced Kbach Kun Boran to SEA Games as host nation 2023", year: 2023 },
  ],
  variants: ["bokator", "labokkatao", "kbach-kun-boran-khmer"],
  relatedSports: ["pradal-serey", "muay-thai", "silat", "krabi-krabong"],
  skills: ["unarmed strikes", "weapons handling", "grappling", "animal-style techniques", "kata precision"],
  strategies: [
    { title: "Animal-style match-up", body: "Practitioners study opponent style + select counter-animal (e.g., monkey vs elephant, cobra vs crocodile)." },
    { title: "Dam-bang range control", body: "Use 6-foot staff to maintain distance + strike from safe range." },
    { title: "Chbap form practice for muscle memory", body: "Daily kata builds automatic technique responses under stress." },
  ],
  terminology: [
    { term: "Kbach", meaning: "Khmer for 'technique' or 'style'" },
    { term: "Bokator", meaning: "Alternative name meaning 'pounding a lion'" },
    { term: "Krama", meaning: "Traditional Khmer checkered scarf used as rank belt" },
    { term: "Chbap", meaning: "Formal kata/form" },
    { term: "Bok cham", meaning: "Partnered choreographed sparring" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "White krama basics", body: "Basic stances, punches, kicks, first animal-style techniques, cultural etiquette." }] },
    { level: "intermediate", steps: [{ title: "Coloured krama progression", body: "Multiple animal styles, weapons introduction (dam-bang, dao), partner drills." }] },
    { level: "advanced", steps: [{ title: "Black + gold krama", body: "Full animal-style repertoire, weapons kata mastery, multi-opponent choreography, teaching authorisation." }] },
  ],
  faq: [
    { question: "Is Kbach Boran the same as Bokator?", answer: "Yes — Kbach Kun Boran Khmer, Bokator, and Labokkatao are used interchangeably. 'Bokator' is the widely-known international name; 'Kbach Kun Boran' is the traditional Khmer formal name." },
    { question: "How is Bokator different from Pradal Serey?", answer: "Pradal Serey is Cambodia's modern competitive kickboxing (Kun Khmer) — sport format. Bokator is the ancient comprehensive martial art system with weapons + grappling + animal-style techniques + cultural ceremony. Bokator predates Pradal Serey." },
  ],
  wikipediaTitle: "Bokator",
  sources: [{ label: "Wikipedia — Bokator", url: "https://en.wikipedia.org/wiki/Bokator", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default kbachBoran;
