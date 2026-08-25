import type { Sport } from "@/lib/types";

export const gilliDanda: Sport = {
  id: "gilli-danda",
  slug: "gilli-danda",
  name: "Gilli Danda",
  officialName: "Gilli Danda (गिल्ली-डंडा)",
  aliases: ["Guli Danda", "Dandi Biyo (Nepal)", "Tipcat (English)", "Lipa (Poland)", "Tolo (Turkey)"],
  shortDescription:
    "Ancient South Asian street sport. 2 sticks: DANDA (longer stick 60cm) + GILLI (smaller tapered stick 10cm). Player strikes GILLI's tapered end to launch it airborne, then hits it far. Precursor to cricket + baseball. Documented 2500+ years ago. Traditional rural Indian game; declining as urbanization limits open space.",
  longDescription:
    "Gilli Danda (गिल्ली-डंडा, 'small stick + stick') is ANCIENT SOUTH ASIAN STREET SPORT played across INDIA + PAKISTAN + BANGLADESH + NEPAL + SRI LANKA + AFGHANISTAN for 2500+ YEARS. Considered PRECURSOR to CRICKET + BASEBALL. 2 STICKS: DANDA (longer stick ~60cm, held like bat) + GILLI (smaller tapered/oval stick ~10cm, both ends narrowed). GAMEPLAY: (1) Player hits GILLI's tapered end with DANDA — GILLI FLIPS INTO AIR. (2) Player STRIKES gilli mid-air with danda to send it FAR AWAY. (3) OPPONENTS try to catch gilli (out) or throw it back to hitting area. SCORING: distance measured in DANDA-LENGTHS from center. Multi-player variants + team variants exist. Also called TIPCAT in English (documented 14th-century Europe), LIPA in Poland, TOLO in Turkey — game diffused along ancient trade routes. Cultural staple of RURAL INDIAN CHILDHOOD but DECLINING dramatically as URBAN LIFE limits open playing spaces. FEATURED in movies (film 'Slumdog Millionaire' scene). GILLI DANDA FEDERATION OF INDIA formed 2005 to revive + standardize. Some championships in Punjab + Haryana. Considered CULTURAL HERITAGE worth preservation.",
  category: "traditional-cultural-sports",
  subCategory: "traditional South Asian street sport (2-stick striking game)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "regional",
  countryOfOrigin: "IN",
  regionOfOrigin: "South Asia (India, Pakistan, Bangladesh, Nepal, Sri Lanka)",
  estimatedOrigin: "Documented 2500+ years ago in South Asian texts; documented in Europe as 'tipcat' 14th century; considered precursor to cricket/baseball",
  players: { min: 2, max: 10, note: "1 batter vs multiple fielders (like baseball) OR team variants." },
  field: { surfaceName: "open field / street", dimensions: "any open area (~50m × 50m minimum)", description: "Traditional: village open ground or street; formal: designated marked circle with fielding area." },
  equipment: [
    { name: "Danda (longer stick)", description: "60cm wooden stick, ~2cm diameter" },
    { name: "Gilli (smaller tapered stick)", description: "10cm wooden stick, both ends tapered" },
    { name: "Marking chalk (optional)", description: "For circle boundaries" },
  ],
  duration: { approximateMinutes: 30, structure: "Informal: as long as players enjoy; formal matches ~30-60 min." },
  objective: "Hit gilli farthest from center; score points equal to distance in danda-lengths.",
  basicRules: [
    { title: "Batter stands in circle with danda + gilli", body: "Circle typically 3-4m diameter." },
    { title: "Strike gilli's tapered end → gilli launches upward", body: "First critical skill: making gilli airborne." },
    { title: "Hit gilli mid-air with danda", body: "Send it as far as possible into fielding area." },
    { title: "If FIELDER CATCHES gilli in air = batter OUT", body: "Similar to baseball." },
    { title: "Fielder throws gilli back toward circle", body: "If lands in circle = batter OUT." },
    { title: "SCORE = distance in danda-lengths from circle to gilli landing", body: "Batter measures + calls out." },
  ],
  scoring: {
    summary: "Distance in danda-lengths from center circle to gilli landing.",
    breakdown: [
      { action: "Distance measured in danda-lengths", points: "1 point per danda-length" },
      { action: "Multiple hits per turn allowed (up to 3 in some variants)", points: "Cumulative distance" },
      { action: "Caught in air", points: "Batter out; no score" },
      { action: "Gilli returned to circle", points: "Batter out; no score" },
    ],
    winCondition: "Highest cumulative score after all players' turns.",
  },
  governingBodies: [
    { name: "Gilli Danda Federation of India", founded: 2005, headquarters: "India" },
  ],
  majorCompetitions: [
    { name: "Regional Gilli Danda championships (Punjab, Haryana)", frequency: "annual", founded: 2005, region: "India" },
  ],
  countriesPlayed: ["IN", "PK", "BD", "NP", "LK", "AF", "TR", "PL"],
  famousAthletes: ["Traditional community game; no famous international athletes"],
  variants: [
    "traditional-South-Asian-village-form",
    "team-gilli-danda-organized-variant",
    "tipcat-European-variant",
    "lipa-Polish-variant",
    "tolo-Turkish-variant",
    "dandi-biyo-Nepalese-variant-national-game-of-Nepal",
  ],
  relatedSports: ["cricket", "baseball", "tipcat", "lapta-Russian"],
  skills: ["hand-eye coordination", "striking technique", "distance judgment", "fielding + catching"],
  strategies: [
    { title: "Master the flip stroke first", body: "Getting gilli airborne consistently is fundamental." },
    { title: "Distance vs accuracy trade-off", body: "Big hits risk fielder catch; controlled hits safer." },
  ],
  terminology: [
    { term: "Danda (डंडा)", meaning: "Longer stick used as bat (~60cm)." },
    { term: "Gilli (गिल्ली)", meaning: "Smaller tapered stick struck by danda (~10cm)." },
    { term: "Circle", meaning: "Marked area from which batter plays." },
    { term: "Dandi Biyo", meaning: "Nepalese variant; national game of Nepal." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Any 2 wooden sticks + open ground", body: "Zero-cost traditional game." },
      { title: "Learn from South Asian elders or online videos", body: "Traditional rural game." },
    ]},
    { level: "intermediate", steps: [
      { title: "Join local community events (India + diaspora)", body: "Community festivals + fairs." },
    ]},
    { level: "advanced", steps: [
      { title: "Gilli Danda Federation of India tournaments", body: "Some organized competition." },
    ]},
  ],
  faq: [
    { question: "What is Gilli Danda?", answer: "ANCIENT SOUTH ASIAN STREET SPORT played 2500+ years ago. 2 sticks: DANDA (longer, held like bat) + GILLI (smaller tapered). Strike gilli's tapered end to launch airborne, then hit it far. Fielders try to catch or return to circle. Scoring = distance in danda-lengths. Considered PRECURSOR to CRICKET + BASEBALL. Also called TIPCAT (English, 14th c.), LIPA (Polish), TOLO (Turkish). Cultural staple of rural Indian childhood; DECLINING due to urbanization limiting open space." },
    { question: "How is Gilli Danda related to cricket?", answer: "GILLI DANDA is considered PRECURSOR to cricket + baseball. Basic mechanic (stick hits object; fielders catch/return) shared. Cricket + baseball evolved in ENGLAND + USA with heavier equipment + larger fields + team structure. Gilli Danda predates cricket by 2000+ years. Cricket + baseball rules evolved for LARGER SPACES + PROFESSIONAL structure; Gilli Danda remained ACCESSIBLE community game. Some cricket-playing regions (India, Pakistan, Bangladesh) preserve Gilli Danda as CULTURAL HERITAGE alongside cricket." },
    { question: "Why is Gilli Danda declining?", answer: "URBAN LIFE limits open playing spaces — GILLI DANDA needs ~50m × 50m field. Urban children play cricket in smaller streets/spaces. Preference for STANDARDIZED sports (cricket) with international competition + television. Educational focus on cricket + STATIONARY academic pursuits. RURAL INDIA still plays but even rural youth increasingly play cricket. PRESERVATION efforts: Gilli Danda Federation of India (2005), cultural fairs, schools promoting. Considered ENDANGERED cultural sport worth preservation." },
  ],
  wikipediaTitle: "Gilli danda",
  sources: [
    { label: "Wikipedia — Gilli danda", url: "https://en.wikipedia.org/wiki/Gilli_danda", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
