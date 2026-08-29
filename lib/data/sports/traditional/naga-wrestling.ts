import type { Sport } from "@/lib/types";

export const nagaWrestling: Sport = {
  id: "naga-wrestling",
  slug: "naga-wrestling",
  name: "Naga Wrestling",
  officialName: "Naga Wrestling (Nagaland, India)",
  aliases: ["Naga Kene", "Naga Ken", "Nagaland Traditional Wrestling"],
  shortDescription:
    "Traditional wrestling of the Naga peoples of northeastern India (Nagaland) + adjoining Myanmar — belt-grip standing wrestling practiced at annual Hornbill Festival cultural showcase + community celebrations for centuries.",
  longDescription:
    "Naga Wrestling (also 'Naga Kene' in some Naga languages) is the traditional wrestling of the Naga peoples of northeastern India (state of Nagaland) + adjoining western Myanmar. A belt-grip standing wrestling art practiced for centuries as central component of Naga cultural festivities + community bonding rituals. Each of Nagaland's 16+ recognized Naga tribes (Ao, Sumi, Angami, Lotha, Konyak, etc.) has slight variants but shared core: competitors wear traditional Naga attire with belt/waistband providing grip surface + attempt throws + trips to force opponent to ground. Central event at annual HORNBILL FESTIVAL (December, Kohima) — Nagaland's massive cultural showcase attended by 100,000+ visitors annually. Traditional wrestling forms distinct competitive category alongside other Naga games: high jump, log-pushing, sword-fighting demonstrations. Cultural revitalization + Hornbill Festival prominence has strengthened Naga wrestling profile in 21st century after some decline mid-20th century.",
  category: "traditional-cultural-sports",
  subCategory: "folk wrestling (Naga tribal tradition, northeast India)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "niche",
  countryOfOrigin: "IN",
  regionOfOrigin: "Nagaland, northeast India (Ao, Sumi, Angami, Lotha, Konyak + other Naga tribal communities)",
  estimatedOrigin: "Ancient Naga tribal tradition; continuous cultural practice; Hornbill Festival showcase since 2000",
  players: { min: 2, max: 2, note: "1v1 wrestling; tournament format at Hornbill Festival." },
  equipment: [
    { name: "Traditional Naga attire (loin cloth + belt)", description: "Distinctive Naga tribal attire with belt providing grip surface." },
    { name: "Grass wrestling area", description: "Traditional grass ring at cultural festivals + village gatherings." },
  ],
  duration: { approximateMinutes: 5, structure: "Traditional folk format; short bouts to takedown." },
  objective: "Force opponent to ground via throw or trip; opponent's back or shoulders on ground = fall.",
  matchStructure: "Best-of-3 falls (typical) or single-fall; tournament brackets at Hornbill Festival.",
  basicRules: [
    { title: "Belt/waistband grip wrestling", body: "Competitors grip each other's belt + attempt throws." },
    { title: "Fall = back or shoulders on ground", body: "Opponent falling to back/shoulders = fall = win." },
    { title: "No striking; standing wrestling only", body: "Pure grappling from standing position." },
    { title: "Traditional cultural context", body: "Bouts embedded in Naga cultural festivals + community celebrations." },
  ],
  advancedRules: [
    { title: "Tribe-specific variants", body: "Ao, Sumi, Angami, Lotha, Konyak tribes have slight rule variations reflecting tribal cultural distinctions." },
    { title: "Hornbill Festival showcase competitions", body: "Annual December tournament at Kohima's Hornbill Festival showcases best wrestlers from all Naga tribes." },
    { title: "Champion status prestige", body: "Winners gain community respect + cultural leadership recognition." },
  ],
  scoring: {
    summary: "Best-of-3 falls (typical); fall = back/shoulders on ground.",
    winCondition: "First to 2 falls wins.",
    breakdown: [{ action: "Fall (back/shoulders on ground)", points: "1 fall" }],
  },
  penalties: [{ title: "Striking", body: "Fall loss + community censure." }],
  positions: [{ name: "Wrestler", role: "Belt grip + throw + cultural performance.", count: 1 }],
  officiating: { officials: ["Village elders", "Cultural festival judges"], summary: "Traditional community + festival refereeing." },
  governingBodies: [
    { name: "Nagaland Ministry of Tourism (Hornbill Festival organizer)", founded: 2000, headquarters: "Kohima, Nagaland, India" },
    { name: "Various tribal cultural bodies", founded: 1900, headquarters: "Nagaland tribal areas" },
  ],
  majorCompetitions: [
    { name: "Hornbill Festival Wrestling (December)", frequency: "annual", founded: 2000, region: "Kohima, Nagaland" },
    { name: "Village + tribal cultural festivals (seasonal)", frequency: "seasonal", founded: 1900, region: "Nagaland villages" },
  ],
  countriesPlayed: ["IN (Nagaland + adjoining northeast Indian states)", "MM (western Myanmar Naga communities)"],
  famousAthletes: [
    "Various Nagaland tribal champions",
    "Named champions at annual Hornbill Festival wrestling",
    "Multi-generation Naga wrestling families",
  ],
  records: [
    { title: "Hornbill Festival cultural showcase", holder: "Naga Wrestling", value: "Central competitive category at annual Hornbill Festival (December, Kohima); showcases Naga culture to 100,000+ annual visitors + international tourists", year: 2024 },
    { title: "Multi-tribal wrestling tradition", holder: "Naga tribes", value: "16+ Naga tribes each preserve slight variants of wrestling; unified showcase at Hornbill Festival + Common Naga Council events", year: 2024 },
  ],
  variants: ["ao-tribe-variant", "sumi-tribe-variant", "angami-tribe-variant", "lotha-tribe-variant", "konyak-tribe-variant", "hornbill-festival-standardized-competition"],
  relatedSports: ["mongolian-wrestling", "khuresh", "bokh", "kabaddi", "khridoli", "yagli-gures"],
  skills: ["belt grip strength", "hip throw + trip execution", "balance + base defense", "cultural + festival performance"],
  strategies: [
    { title: "Belt grip dominance", body: "Establish dominant belt grip before throw initiation." },
    { title: "Cultural + festival performance", body: "Traditional context values presentation alongside outcome." },
  ],
  terminology: [
    { term: "Naga", meaning: "Ethnic group of northeast India + western Myanmar; 16+ recognized tribes." },
    { term: "Kene / Ken", meaning: "Wrestling in various Naga languages." },
    { term: "Hornbill Festival", meaning: "Annual December Naga cultural festival at Kohima; hornbill is sacred bird of Naga culture." },
    { term: "Kohima", meaning: "Capital of Nagaland state, India; Hornbill Festival venue." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Visit Nagaland during Hornbill Festival (December)", body: "Experience Naga wrestling in cultural festival context." },
      { title: "Contact Naga tribal cultural organizations", body: "Tribal cultural bodies preserve wrestling tradition." },
    ]},
    { level: "advanced", steps: [
      { title: "Tribe-specific training", body: "Full immersion in specific Naga tribe's wrestling variant + cultural context." },
    ]},
  ],
  faq: [
    { question: "What is Hornbill Festival?", answer: "Hornbill Festival is Nagaland's annual cultural showcase held every December (typically Dec 1-10) at Kohima, capital of Nagaland state. Named after the sacred hornbill bird of Naga culture, it showcases all 16+ Naga tribes' cultures including traditional wrestling, dance, music, food, crafts, and games. Attended by 100,000+ visitors annually including international tourists. Wrestling is central competitive component." },
    { question: "How does Naga wrestling relate to other Asian wrestling?", answer: "Belongs to broader Asian belt-wrestling family alongside Mongolian Bökh, Tuvan Khuresh, Korean Ssireum, Japanese Sumo, and Georgian Chidaoba. Shared characteristics: belt/waistband grips, standing wrestling, throw for fall. Naga variants have tribe-specific cultural elements not shared with other Asian styles. Cultural distinct despite structural similarities." },
  ],
  wikipediaTitle: "Naga peoples",
  sources: [{ label: "Nagaland Tourism", url: "https://www.tourismnagaland.com", publisher: "Nagaland Tourism" }],
  lastVerified: "2026-08-29",
  confidence: "community",
};
