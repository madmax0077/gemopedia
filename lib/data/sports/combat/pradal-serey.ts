import type { Sport } from "@/lib/types";

export const pradalSerey: Sport = {
  id: "pradal-serey",
  slug: "pradal-serey",
  name: "Pradal Serey",
  officialName: "Kun Khmer / Pradal Serey",
  aliases: ["Kun Khmer", "Khmer Boxing", "ប្រដាល់សេរី"],
  shortDescription:
    "Cambodian traditional stand-up striking martial art — full-contact with punches, kicks, knees, elbows + clinch. Ancestor of Muay Thai; contested cultural precedence. Governed internationally by IFMA-adjacent Cambodian Boxing Federation. Popularized post-1990s Cambodia + international K-1 crossover fighters.",
  longDescription:
    "Pradal Serey (also called Kun Khmer, 'Khmer Boxing') is Cambodia's traditional full-contact stand-up striking martial art — features punches, kicks, knees, elbows, and clinch work. Cambodian scholars + culture officials argue Pradal Serey predates + is the ancestor of Muay Thai (Thailand disputes this) — both descend from ancient Southeast Asian pankration-style combat depicted on Angkor Wat + Bayon temple reliefs. Distinct from Muay Thai in preferred kicks (Khmer favor push/roundhouse; Thai favor low + roundhouse), elbow techniques (Khmer emphasize elbows more), and pre-fight ritual (kun kru dance similar to wai khru). Governed nationally by Cambodian Boxing Federation + internationally through International Federation of Muaythai Amateur (IFMA)-adjacent bodies. Notable Cambodian promotions: SEATV Kun Khmer + Chnat Yuthakos. International K-1 crossover fighters include Eh Phoutong, Ot Phuthong, and Vann Chandy.",
  category: "combat-sports",
  subCategory: "traditional stand-up striking",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "regional",
  countryOfOrigin: "KH",
  regionOfOrigin: "Cambodia (Angkor era origins depicted on temple reliefs)",
  estimatedOrigin: "Ancient roots depicted on Angkor Wat + Bayon reliefs (9th-13th century); modern competition format post-1990s revival",
  players: { min: 2, max: 2, note: "1v1 match." },
  equipment: [
    { name: "10oz-12oz gloves", description: "Standard boxing gloves." },
    { name: "Mongkhon (headband) + prajioud (armband)", description: "Traditional pre-fight ritual accessories similar to Muay Thai." },
    { name: "Boxing ring", description: "Standard 4-rope ring." },
  ],
  duration: { approximateMinutes: 15, structure: "5 rounds × 3 min with 2-min rest." },
  objective: "Defeat opponent by KO, TKO, or decision using strikes + clinch.",
  matchStructure: "5 rounds of 3 min with 2-min rest; pre-fight kun kru dance ritual; 10-point must scoring.",
  basicRules: [
    { title: "Punches + kicks + knees + elbows legal", body: "Full-contact striking to head + body." },
    { title: "Clinch work permitted", body: "Clinch + knees + limited standing sweeps allowed." },
    { title: "Pre-fight kun kru ritual", body: "Dance ceremony honouring teacher + spirits before bout." },
  ],
  advancedRules: [
    { title: "10-point must scoring", body: "Judges score each round; damage + dominance weighted." },
    { title: "Standing 8-count", body: "Referee gives 8-count on knockdown." },
  ],
  scoring: {
    summary: "10-point must per round; KO/TKO/decision win.",
    winCondition: "KO, TKO, or higher scorecard total.",
    breakdown: [{ action: "Round win", points: "10-9 or 10-8 (with knockdown)" }],
  },
  penalties: [
    { title: "Groin/rabbit strike", body: "Warning + point deduction." },
    { title: "Excessive holding", body: "Verbal warning; repeat = point deduction." },
    { title: "Post-bell attack", body: "Point deduction or DQ." },
  ],
  positions: [{ name: "Nak pradal (boxer)", role: "Stand-up striker with kicks, punches, knees, elbows.", count: 1 }],
  officiating: { officials: ["Mat referee", "3 judges (10-point must)", "Timekeeper", "Ringside doctor"], summary: "Referee enforces safety + count; judges score independently." },
  governingBodies: [
    { name: "Cambodian Boxing Federation", founded: 1961, headquarters: "Phnom Penh, Cambodia" },
    { name: "International Kun Khmer Federation (IKKF)", founded: 2010, headquarters: "Phnom Penh, Cambodia" },
  ],
  majorCompetitions: [
    { name: "SEATV Kun Khmer promotion", frequency: "weekly", founded: 2004, region: "Cambodia" },
    { name: "SEA Games Kun Khmer", frequency: "biennial", founded: 2023, region: "Southeast Asia (Cambodia hosted debut)" },
    { name: "Chnat Yuthakos Kun Khmer", frequency: "monthly", founded: 2010, region: "Cambodia" },
  ],
  countriesPlayed: ["KH", "TH", "LA", "FR", "US", "AU"],
  famousAthletes: [
    "Eh Phoutong (Cambodia) — Kun Khmer legend, K-1 crossover",
    "Ot Phuthong (Cambodia) — Kun Khmer champion",
    "Vann Chandy (Cambodia) — international representative",
  ],
  records: [
    { title: "SEA Games debut (2023 Cambodia host)", holder: "Cambodia", value: "Cambodia introduced Kun Khmer to SEA Games as host nation 2023", year: 2023 },
    { title: "Historical documentation on Angkor reliefs", holder: "Angkor era Cambodia", value: "Combat techniques matching modern Pradal Serey depicted on Angkor Wat + Bayon temple reliefs (9th-13th century)", year: 1200 },
  ],
  variants: ["kun-khmer", "pradal-serey-traditional"],
  relatedSports: ["muay-thai", "lethwei", "muay-boran", "kickboxing"],
  skills: ["kicks", "punches", "elbows", "knees", "clinch"],
  strategies: [
    { title: "Elbow dominance in clinch", body: "Khmer boxers favor elbow strikes in clinch more than Thai counterparts." },
    { title: "Push-kick teep control", body: "Long push-kicks maintain range + off-balance opponent." },
    { title: "Kun kru mental focus", body: "Pre-fight ritual centres athlete + intimidates opponent." },
  ],
  terminology: [
    { term: "Pradal Serey", meaning: "Cambodian name meaning 'free fighting'" },
    { term: "Kun Khmer", meaning: "Alternative Cambodian name meaning 'Khmer martial art'" },
    { term: "Kun kru", meaning: "Pre-fight ritual dance honouring teacher" },
    { term: "Mongkhon", meaning: "Traditional headband worn in pre-fight ritual" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Basic stance + kicks", body: "Learn stance, teep push-kick, roundhouse kick, jab-cross." }] },
    { level: "intermediate", steps: [{ title: "Elbow + knee integration", body: "Add elbow strikes + knees; clinch entries + escapes." }] },
    { level: "advanced", steps: [{ title: "Full-contact sparring + competition", body: "SEATV Kun Khmer amateur circuit + international IFMA amateur qualifying." }] },
  ],
  faq: [
    { question: "How is Pradal Serey different from Muay Thai?", answer: "Both descend from ancient SE Asian combat + share ring, gear, clinch. Khmer boxers favor elbow strikes + push-kicks more; Muay Thai favors low-kick + Thai-style clinch knees. Pre-fight ritual is similar (kun kru vs wai khru)." },
    { question: "Which came first — Pradal Serey or Muay Thai?", answer: "Contested. Cambodian cultural authorities argue Pradal Serey predates Muay Thai based on Angkor era temple reliefs; Thai federation disputes this and points to independent Thai lineage. Both share common ancient SE Asian pankration roots." },
  ],
  wikipediaTitle: "Kun Khmer",
  sources: [{ label: "Wikipedia — Kun Khmer", url: "https://en.wikipedia.org/wiki/Kun_Khmer", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default pradalSerey;
