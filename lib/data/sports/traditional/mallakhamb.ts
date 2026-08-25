import type { Sport } from "@/lib/types";

export const mallakhamb: Sport = {
  id: "mallakhamb",
  slug: "mallakhamb",
  name: "Mallakhamb",
  officialName: "Mallakhamb (मल्लखम्ब)",
  aliases: ["Malla-khamba", "Pole Gymnastics"],
  shortDescription:
    "Traditional Indian sport combining gymnastics + yoga + wrestling on a WOODEN POLE (Mallakhamb pole), ROPE (Rope Mallakhamb), or HANGING POLE. Practiced primarily by wrestlers as training. Documented 12th century (Manasollasa text). Declared 'National Sport of India' by some states; increasing global recognition. Athletes perform aerial poses + acrobatics.",
  longDescription:
    "Mallakhamb (मल्लखम्ब, 'wrestler + pillar') is TRADITIONAL INDIAN SPORT combining GYMNASTICS + YOGA + WRESTLING performed on a WOODEN POLE, ROPE, or HANGING POLE. Documented in the 12TH-CENTURY MANASOLLASA text by KING SOMESHVARA III (Chalukya dynasty). REVIVED in 19TH CENTURY by BALAMBHATTA DADA DEODHAR (physical instructor of Peshwa Bajirao II). Originally training for WRESTLERS to develop strength, flexibility, balance, endurance. 3 MAIN VARIANTS: (1) POLE MALLAKHAMB — traditional vertical wooden pole (2.6m tall, 55cm base) mounted in ground; oiled for grip challenge. (2) ROPE MALLAKHAMB — cotton rope hanging from height; athlete performs aerial poses. (3) HANGING MALLAKHAMB — pole suspended from ceiling. Athletes wear only LANGOT (loincloth) traditionally. PERFORMANCE combines yoga poses + gymnastic contortions + acrobatic transitions. DECLARED 'STATE SPORT' by MADHYA PRADESH (2013); championship categories at NATIONAL GAMES OF INDIA. GAINING GLOBAL RECOGNITION — demonstrations at world sports events; NATIONAL MALLAKHAMB FEDERATION OF INDIA (1980); MALLAKHAMB FEDERATION OF INDIA World Championship 2019 MUMBAI (first). Considered demanding of strength, flexibility, mental focus, courage.",
  category: "traditional-cultural-sports",
  subCategory: "Indian traditional sport (pole/rope gymnastics)",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "medieval",
  popularity: "regional",
  countryOfOrigin: "IN",
  regionOfOrigin: "India (Maharashtra, Madhya Pradesh; documented in 12th-century Manasollasa)",
  estimatedOrigin: "Documented 12th-century Manasollasa; revived 19th century Balambhatta Dada Deodhar for wrestler training; modern federation 1980",
  players: { min: 1, max: 1, note: "Individual sport; team events feature multiple performers on 1 pole." },
  field: { surfaceName: "pole / rope / hanging pole", dimensions: "Pole: 2.6m tall × 55cm base; Rope: 5.5m from ceiling", description: "Traditional Indian teak wood pole, oiled for grip challenge; or hanging cotton rope; or ceiling-hung pole." },
  equipment: [
    { name: "Mallakhamb pole (teak wood, oiled)", description: "€200-500 traditional teak pole" },
    { name: "Cotton rope (Rope Mallakhamb)", description: "€50-150 hanging rope" },
    { name: "Langot (loincloth)", description: "Traditional attire; €10" },
    { name: "Modern: leotards allowed in competition", description: "Modern gymnastics attire" },
    { name: "Castor oil / camphor for pole", description: "Traditional grip preparation" },
  ],
  duration: { approximateMinutes: 3, structure: "Performance routines ~90 seconds to 3 minutes." },
  objective: "Perform sequence of yogic + gymnastic + acrobatic poses on pole/rope with strength, flexibility, precision.",
  basicRules: [
    { title: "Fixed pole (traditional) or hanging (modern variant)", body: "Different apparatus = different techniques." },
    { title: "Performance judged on difficulty + execution + artistry", body: "Similar to gymnastics scoring." },
    { title: "Athletes wear langot traditionally", body: "Modern competitions allow leotards for women + youth." },
    { title: "Pole is oiled for grip challenge", body: "Requires exceptional grip strength + technique." },
    { title: "Competition categories: sub-junior, junior, senior, veteran", body: "Age-based divisions." },
  ],
  scoring: {
    summary: "Judged on difficulty + execution + artistry. Complex scoring similar to gymnastics.",
    breakdown: [
      { action: "Difficulty score", points: "Based on skill values in routine" },
      { action: "Execution score", points: "Deductions for form breaks + falls" },
      { action: "Artistry", points: "Flow + presentation" },
    ],
    winCondition: "Highest total score in competition category.",
  },
  governingBodies: [
    { name: "Mallakhamb Federation of India", founded: 1980, headquarters: "India", website: "https://www.mallakhambfederation.org/" },
    { name: "World Mallakhamb Federation", founded: 2019, headquarters: "Mumbai, India" },
  ],
  majorCompetitions: [
    { name: "World Mallakhamb Championship", frequency: "biennial", founded: 2019, region: "worldwide (first Mumbai 2019)" },
    { name: "Indian National Mallakhamb Championship", frequency: "annual", founded: 1980, region: "India" },
    { name: "Khelo India Youth Games (Mallakhamb category)", frequency: "annual", founded: 2018, region: "India" },
  ],
  countriesPlayed: ["IN", "US (diaspora)", "GB (diaspora)", "SG", "MY", "AE"],
  famousAthletes: [
    "Balambhatta Dada Deodhar (India, 19th century) — 19th-century revivalist",
    "Uday Deshpande (India) — Modern globalization advocate",
    "Various Indian Mallakhamb champions",
  ],
  variants: [
    "pole-mallakhamb-traditional-vertical",
    "rope-mallakhamb-hanging-cotton-rope",
    "hanging-mallakhamb-ceiling-suspended-pole",
    "niradhar-mallakhamb-free-standing-pole",
    "compact-mallakhamb-shorter-pole-for-women",
    "modern-competition-mallakhamb",
  ],
  relatedSports: ["gymnastics", "kalari", "yoga", "wrestling-freestyle", "aerial-arts"],
  skills: ["grip strength", "core + upper-body strength", "flexibility (yoga background helpful)", "balance", "mental focus"],
  strategies: [
    { title: "Build grip strength progressively", body: "Oiled pole requires exceptional grip; hand conditioning essential." },
    { title: "Yoga poses foundation", body: "Many mallakhamb poses derive from yoga asanas." },
    { title: "Learn falls safely", body: "Padding + spotting essential for beginners." },
  ],
  terminology: [
    { term: "Mallakhamb (मल्लखम्ब)", meaning: "Wrestler + pillar (Sanskrit compound)." },
    { term: "Langot", meaning: "Traditional loincloth attire." },
    { term: "Pole Mallakhamb", meaning: "Traditional vertical wooden pole variant." },
    { term: "Rope Mallakhamb", meaning: "Hanging cotton rope variant." },
    { term: "Manasollasa", meaning: "12th-century Sanskrit text documenting mallakhamb." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Find mallakhamb center (mostly Maharashtra, Madhya Pradesh, Karnataka)", body: "Traditional gurus + akhadas (wrestling schools)." },
      { title: "Yoga background helpful for flexibility", body: "Many poses share roots." },
    ]},
    { level: "intermediate", steps: [
      { title: "State-level Mallakhamb Federation training", body: "Formal instruction + competition path." },
    ]},
    { level: "advanced", steps: [
      { title: "National championships + World Mallakhamb Federation events", body: "Professional level." },
    ]},
  ],
  faq: [
    { question: "What is Mallakhamb?", answer: "TRADITIONAL INDIAN SPORT combining GYMNASTICS + YOGA + WRESTLING performed on a WOODEN POLE (oiled teak, 2.6m tall), ROPE (hanging cotton), or HANGING POLE. Documented 12th-century Manasollasa text. Revived 19th century by Balambhatta Dada Deodhar as wrestler training. State sport of Madhya Pradesh (2013). Growing global recognition; first WORLD CHAMPIONSHIP 2019 Mumbai. Considered demanding of strength, flexibility, balance, courage." },
    { question: "How dangerous is Mallakhamb?", answer: "MODERATELY DANGEROUS. Falls from oiled pole cause fractures + bruises. Rope Mallakhamb has aerial fall risk. Modern competitions use PADDED FLOORS + SPOTTERS. Traditional practice at akhadas (wrestling schools) had NO PADDING — injuries common historically. Modern training progressive + safer. Risk comparable to competitive gymnastics." },
    { question: "Is Mallakhamb in the Olympics?", answer: "NOT YET. Growing recognition + first World Championship 2019 Mumbai. Advocates pushing for OLYMPIC INCLUSION (Games of the Small States of Europe demonstrated 2023). Indian government promoting via KHELO INDIA YOUTH GAMES (2018+). Not yet reached IOC recognition level. Considered candidate 20-30 year timeline for Olympic status." },
  ],
  wikipediaTitle: "Mallakhamba",
  sources: [
    { label: "Wikipedia — Mallakhamba", url: "https://en.wikipedia.org/wiki/Mallakhamba", publisher: "Wikipedia" },
    { label: "Mallakhamb Federation of India", url: "https://www.mallakhambfederation.org/", publisher: "MFI" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
