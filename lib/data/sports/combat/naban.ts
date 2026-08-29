import type { Sport } from "@/lib/types";

export const naban: Sport = {
  id: "naban",
  slug: "naban",
  name: "Naban",
  officialName: "Naban Wrestling (Burmese Traditional Wrestling)",
  aliases: ["Burmese Wrestling", "ဗမာလက်ဝှေ့ (Bama Lethwe)", "Chin Naban"],
  shortDescription:
    "Ancient Burmese traditional wrestling — grip-based standing + ground wrestling with locks, joint manipulation, and pins; long practiced by Chin ethnic minority in western Myanmar. Distinct from more-famous Lethwei striking sport (though both Burmese combat arts).",
  longDescription:
    "Naban is an ancient Burmese traditional wrestling art, particularly associated with the Chin ethnic minority in western Myanmar. Distinct from the far more internationally-known Burmese striking art LETHWEI (which allows headbutts + bare-knuckle striking), Naban is a grappling art featuring standing throws + ground wrestling + joint locks + submissions + pins. Techniques emphasize grip fighting, hip-throw takedowns, and controlling opponent on ground via locks/submissions. Practiced traditionally at Chin State cultural festivals in Myanmar. Very small international footprint — occasional cultural performances at Myanmar diaspora events; almost no Western competitive representation. Related to broader Southeast Asian wrestling family (Malaysian Silat gulat, Thai Muay Boran wrestling components) but with distinct Chin cultural identity + technique.",

  category: "combat-sports",
  subCategory: "folk wrestling (Burmese Chin ethnic tradition)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "niche",
  countryOfOrigin: "MM",
  regionOfOrigin: "Chin State + western Myanmar (Burma); Chin ethnic minority tradition",
  estimatedOrigin: "Ancient (pre-1000 AD Chin tribal tradition); continuous folk practice; no formal codification",

  players: { min: 2, max: 2, note: "1v1 wrestling match." },
  equipment: [
    { name: "Traditional Burmese longyi or shorts", description: "Minimal attire; longyi (wrapped skirt) or shorts." },
    { name: "Grass wrestling area", description: "Traditional grass ring at village festivals." },
  ],
  duration: { approximateMinutes: 10, structure: "Variable; village festivals often best-of-3 falls; no strict time limits." },
  objective: "Win by pin, submission, or throw depending on regional rule variant.",
  matchStructure: "Traditional folk format; village festivals often 2-of-3 falls with judges deciding decisive throws.",

  basicRules: [
    { title: "Grip-based standing wrestling", body: "Establish grip on opponent's body or clothing + attempt takedown." },
    { title: "Ground wrestling permitted", body: "Match continues on ground with locks + pins + submissions (unlike Cornish/Backhold which are standing-only)." },
    { title: "Legal techniques", body: "Throws, hip trips, joint locks, pinning submissions." },
    { title: "Winning conditions vary regionally", body: "Village rule variants: some emphasize pins, some submissions, some throws." },
  ],
  advancedRules: [
    { title: "Chin cultural context", body: "Traditional Chin festival wrestling incorporated into cultural ceremonies + coming-of-age rites." },
    { title: "Distinct from Lethwei", body: "Naban is grappling (no striking); Lethwei is striking (headbutts + bare-knuckle punches + kicks + elbows + knees). Both Burmese but different arts." },
    { title: "No formal international governance", body: "Practiced culturally, not organized as competitive sport internationally." },
  ],
  scoring: {
    summary: "Best-of-3 falls at village festivals; win by pin/submission/decisive throw.",
    winCondition: "Best-of-3 falls (typical folk format).",
    breakdown: [
      { action: "Pin fall", points: "1 fall" },
      { action: "Submission", points: "1 fall" },
      { action: "Decisive throw with judges' agreement", points: "1 fall" },
    ],
  },
  penalties: [
    { title: "Striking", body: "Not permitted; violation ends fall." },
    { title: "Dangerous joint hyperextension", body: "Judge intervention." },
  ],

  positions: [{ name: "Wrestler", role: "Standing grip fighting + ground wrestling + submissions.", count: 1 }],
  officiating: {
    officials: ["Village elders (judges)", "Referee"],
    summary: "Traditional festival wrestling — village elders + informal referee decide falls.",
  },

  governingBodies: [
    { name: "No formal international governing body — traditional Chin cultural sport", founded: 0, headquarters: "N/A" },
    { name: "Myanmar National Sports Committee (nominal oversight)", founded: 1948, headquarters: "Naypyidaw, Myanmar" },
  ],
  majorCompetitions: [
    { name: "Chin State Cultural Festival wrestling", frequency: "annual (traditional cultural festivals)", founded: 1900, region: "Chin State, western Myanmar" },
    { name: "Chin diaspora cultural exhibitions (India Mizoram, US Chin refugee communities)", frequency: "occasional", founded: 1990, region: "worldwide Chin diaspora" },
  ],
  countriesPlayed: ["MM (Chin State)", "IN (Mizoram + Manipur — related Chin peoples)", "US (Chin refugee diaspora)", "MY (Chin refugee community)"],
  famousAthletes: [
    "No internationally-famous practitioners — traditional cultural sport with limited international profile",
    "Village champions at Chin State cultural festivals",
  ],
  records: [
    { title: "Ancient Chin cultural tradition", holder: "Naban", value: "Continuous Chin ethnic tradition for 1000+ years; predates Burmese Buddhist unification", year: 2024 },
    { title: "Chin refugee diaspora preservation", holder: "Chin communities", value: "Chin refugees in Malaysia + US + Australia preserve Naban wrestling as cultural heritage", year: 2020 },
  ],

  variants: ["chin-village-traditional", "modernized-competitive-variant-limited"],
  relatedSports: ["lethwei", "muay-boran", "silat", "shuai-jiao", "kalarippayattu", "burmese-bando"],

  skills: ["standing grip fighting", "hip throw + takedown", "ground wrestling", "joint locks (arm + leg)", "submission escapes", "cultural festival poise"],
  strategies: [
    { title: "Grip fighting first", body: "Establish dominant grip before initiating throw." },
    { title: "Ground control after takedown", body: "Follow takedown with pin or submission attempt (unlike Cornish/backhold which are standing-only)." },
  ],

  terminology: [
    { term: "Naban", meaning: "Burmese wrestling." },
    { term: "Chin", meaning: "Ethnic minority of western Myanmar; primary Naban practitioners." },
    { term: "Longyi", meaning: "Traditional Burmese wrapped skirt garment worn by wrestlers." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Attend Chin cultural festival in Myanmar or Mizoram", body: "Traditional wrestling exhibitions at village festivals." },
      { title: "Cross-train with Silat or Shuai Jiao", body: "Similar Southeast Asian grappling traditions." },
    ]},
    { level: "advanced", steps: [
      { title: "Community leadership at Chin cultural events", body: "Village elders + champions preserve tradition." },
    ]},
  ],

  faq: [
    { question: "Is Naban the same as Lethwei?", answer: "No — Naban is grappling (throws + locks + pins), Lethwei is striking (bare-knuckle punches + kicks + elbows + knees + HEADBUTTS). Both are Burmese combat arts but structurally opposite. Lethwei has international fame; Naban is niche cultural tradition." },
    { question: "How endangered is Naban tradition?", answer: "Concerning — Myanmar political instability (2021+ military coup) has disrupted Chin State cultural practice; Chin refugee crisis has displaced practitioners. Chin diaspora communities in Malaysia + US + Australia + India try to preserve tradition. International awareness very limited." },
  ],

  wikipediaTitle: "Naban",
  sources: [
    { label: "Wikipedia — Naban", url: "https://en.wikipedia.org/wiki/Naban", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "community",
};
