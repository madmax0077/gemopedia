import type { Sport } from "@/lib/types";

export const cornishWrestling: Sport = {
  id: "cornish-wrestling",
  slug: "cornish-wrestling",
  name: "Cornish Wrestling",
  officialName: "Cornish Wrestling (Wrastling)",
  aliases: ["Wrestling in Cornwall", "Cornish Wrastling"],
  shortDescription:
    "Ancient jacket-wrestling style from Cornwall, England (documented back to Bronze Age) — competitors wear tough canvas jackets, grip only above waist, throw for 'back' (flat back landing) to win. One of world's oldest continuous wrestling traditions; Cornish diaspora spread it to US mining regions.",
  longDescription:
    "Cornish Wrestling ('wrastling' locally) is an ancient jacket-wrestling style from Cornwall, southwestern England — with documented history back to Bronze Age Cornish tin miners + Celtic tradition. Competitors wear tough canvas jackets, grip each other only above the waist (arms + jacket only, no leg holds), and score 'backs' — a fall counting only when opponent lands flat on back with 3 pin-points (both shoulders + one hip, or both hips + one shoulder) touching ground simultaneously. Historically the sport of choice at Cornish fêtes + Furry Days + Whitsun festivals. Cornish miners emigrating to gold-rush regions (California, Australia, South Africa, Wisconsin, Montana) in 19th century brought Cornish Wrestling with them — small pockets survive in mining diaspora communities. Cornish Wrestling Association (CWA) governs modern sport with ~30 tournaments annually across Cornwall + occasional international events. Grand Bard status in Gorsedh Kernow (Cornish cultural body) awarded to champion wrestlers.",

  category: "combat-sports",
  subCategory: "folk wrestling (jacket-grip Celtic tradition)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "summer",
  era: "ancient",
  popularity: "niche",
  countryOfOrigin: "GB",
  regionOfOrigin: "Cornwall, southwestern England (Celtic-origin, documented Bronze Age)",
  estimatedOrigin: "Bronze Age Celtic Cornish tradition; documented since medieval era; competitive circuit formalized 20th century by Cornish Wrestling Association (CWA)",

  players: { min: 2, max: 2, note: "1v1 wrestling match." },
  equipment: [
    { name: "Canvas wrestling jacket", description: "Tough short canvas jacket — main grip surface; must be loose enough for opponent to grip." },
    { name: "Wrestling shorts or trousers", description: "Modest lower-body cover." },
    { name: "Grass wrestling ring", description: "Traditional grass ring (18-20ft diameter); rope or chalk boundary." },
  ],
  duration: { approximateMinutes: 10, structure: "3 rounds × 3 minutes; first to 2 backs wins (2-of-3 falls)." },
  objective: "Throw opponent to 'a back' — flat back landing with 3 pin-points touching ground simultaneously.",
  matchStructure: "3 rounds × 3 minutes; 2-of-3 falls (backs) wins; if no back scored, judges score on 'sticklers' + 'flat backs' + 'shoulders'.",

  basicRules: [
    { title: "Wear canvas jacket (mandatory)", body: "Grip only on jacket + arms; no bare-skin grips; jacket provides handles + grip surface." },
    { title: "Grip only above the waist", body: "No leg holds; no tackles below waist; grip only opponent's jacket + arms." },
    { title: "Score by throwing to 'a back'", body: "Opponent must land flat on back with 3 of 4 pin-points touching ground simultaneously (both shoulders + one hip, or both hips + one shoulder)." },
    { title: "Alternative scoring: 'sticklers'", body: "Judges (called 'sticklers') award partial scores for throws that don't achieve full back; used in absence of clean back." },
    { title: "3-round match with 2-of-3 falls win", body: "First wrestler to score 2 backs wins match; if 3 rounds elapse without decisive falls, judges decide on best throws." },
  ],
  advancedRules: [
    { title: "Legal throws", body: "Hip throws (heaves), leg trips using own leg to trip opponent's leg (but not gripping opponent's leg), sweeping trips, and jacket-driven takedowns." },
    { title: "Illegal actions", body: "No striking, no leg grips, no head-first throws that could injure spine, no waist-belt grips." },
    { title: "Sticklers judging", body: "3 sticklers (judges) score bout — traditional Cornish term for wrestling judges." },
    { title: "Jacket grip management", body: "Loose vs. tight grip strategy; jacket-tearing (grip failing) resets position." },
    { title: "Grand Bard recognition", body: "Champion wrestlers may be recognized as Grand Bard of Gorsedh Kernow (Cornish cultural body)." },
  ],
  scoring: {
    summary: "Wins by 2-of-3 backs; alternative sticklers scoring for partial throws.",
    winCondition: "First to 2 backs (2-of-3 falls) wins.",
    breakdown: [
      { action: "Back (clean throw, 3 of 4 points flat)", points: "1 fall" },
      { action: "Sticklers score (partial throw)", points: "Judge points (no fall)" },
    ],
  },
  penalties: [
    { title: "Striking", body: "DQ." },
    { title: "Grip below waist", body: "Warning → point loss → DQ." },
    { title: "Head-spike throw", body: "DQ for safety." },
  ],

  positions: [{ name: "Wrestler ('wrastler')", role: "Throws opponent using jacket + arm grips + hip/leg trips.", count: 1 }],
  officiating: {
    officials: ["3 Sticklers (judges)", "1 Ring referee"],
    summary: "3 sticklers score bout + 1 ring referee ensures rules compliance.",
  },

  governingBodies: [
    { name: "Cornish Wrestling Association (CWA)", founded: 1923, headquarters: "Cornwall, England", website: "https://www.cornishwrestling.co.uk" },
    { name: "Gorsedh Kernow (Cornish cultural recognition body)", founded: 1928, headquarters: "Cornwall" },
  ],
  majorCompetitions: [
    { name: "Cornish Grand Championship", frequency: "annual", founded: 1930, region: "rotating Cornish villages" },
    { name: "Falmouth Regatta wrestling", frequency: "annual (August)", founded: 1900, region: "Falmouth, Cornwall" },
    { name: "Bodmin Riding + Heritage Day wrestling", frequency: "annual", founded: 1950, region: "Bodmin, Cornwall" },
    { name: "Cornish diaspora exhibitions (California, Australia, Wisconsin)", frequency: "occasional", founded: 1850, region: "worldwide Cornish mining diaspora communities" },
  ],
  countriesPlayed: ["GB (Cornwall + smaller Devon presence)", "US (California, Wisconsin, Montana mining regions)", "AU (Cornish diaspora)", "ZA (Cornish mining diaspora)"],
  famousAthletes: [
    "Wladislaus 'Wolf' Cukert (Cornwall, multiple champion mid-20th century)",
    "Andrew Ball (Cornwall, contemporary CWA champion)",
    "Multi-generation Cornish wrestling families in Cornish villages",
    "Cornish diaspora champions in California + Wisconsin mining towns 19th century",
  ],
  records: [
    { title: "One of world's oldest continuous wrestling traditions", holder: "Cornish Wrestling", value: "Bronze Age documented origins; continuous folk wrestling for 3000+ years; among the oldest continuously-practiced wrestling styles worldwide alongside Sumo + Mongolian Bokh", year: 2024 },
    { title: "Mining diaspora export", holder: "Cornish Wrestling", value: "Spread with Cornish miners to California + Wisconsin + Montana + Australia + South Africa gold-rush regions 19th century; some pockets survived into 20th century", year: 1900 },
    { title: "Grand Bard recognition", holder: "Cornish wrestlers", value: "Champion wrestlers may be awarded Grand Bard status in Gorsedh Kernow — highest Cornish cultural recognition", year: 2020 },
  ],

  variants: ["cwa-standard-modern", "traditional-cornish-furry-day-village-variant", "diaspora-california-cornish-19th-century-variant"],
  relatedSports: ["devon-wrestling", "gouren", "cumberland-wrestling", "backhold-wrestling", "glima", "schwingen", "yagli-gures", "sumo"],

  skills: ["jacket grip management", "hip throw (heave) execution", "leg trip timing (own leg only)", "grip breaking + counter-grip", "balance + base defense", "throw execution for full back landing"],
  strategies: [
    { title: "Grip battle preparation", body: "Establish dominant grip on opponent's jacket collar + sleeve before initiating throw." },
    { title: "Hip heave execution", body: "Classic Cornish throw — get hip below opponent's center of gravity + lift + rotate for clean back." },
    { title: "Leg trip counter", body: "When gripped, use own leg to trip opponent's stance before their throw initiates." },
    { title: "Broken grip recovery", body: "If jacket grip broken, reset immediately; don't over-commit to compromised throw." },
  ],

  terminology: [
    { term: "Wrastling", meaning: "Local Cornish spelling of wrestling." },
    { term: "A back", meaning: "Clean throw = fall — 3 of 4 pin-points flat on ground." },
    { term: "Sticklers", meaning: "Judges (traditional Cornish term)." },
    { term: "Heave", meaning: "Hip throw — classic Cornish attack." },
    { term: "Furry Day", meaning: "Traditional Cornish festival where wrestling contests held (Helston Furry Dance day)." },
    { term: "Gorsedh Kernow", meaning: "Cornish cultural body recognizing bardic + athletic achievements." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join Cornish Wrestling Association (CWA)", body: "CWA runs training in Cornish villages + regional camps." },
      { title: "Attend Cornish festivals + Furry Days", body: "Traditional wrestling exhibition at Cornish fêtes." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete for Cornish Grand Championship", body: "Annual pinnacle of Cornish Wrestling competition." },
      { title: "Cross-train with Gouren (Breton wrestling)", body: "Similar Celtic jacket-wrestling tradition in Brittany, France." },
    ]},
  ],

  faq: [
    { question: "How is Cornish Wrestling different from Freestyle/Greco-Roman?", answer: "Cornish uses jacket grips + tight above-waist rules — no leg attacks, no ground wrestling. Freestyle/Greco-Roman are Olympic mat wrestling with different grip rules + ground wrestling emphasis. Cornish scores only 'backs' (full back-to-mat throws) — much stricter fall standard than most wrestling. Cornish is folk tradition; Freestyle/Greco-Roman are international competitive sports." },
    { question: "Is Cornish Wrestling related to Breton Gouren?", answer: "Yes — both are Celtic jacket-wrestling styles with common ancestry. Breton Gouren + Cornish Wrestling + Cumberland/Westmoreland Wrestling share Celtic + Anglo-Saxon roots. All use jacket grips + emphasize hip throws. Contemporary CWA + Fédération de Gouren cooperate on cross-cultural events." },
    { question: "Is Cornish Wrestling extinct?", answer: "No — actively practiced through Cornish Wrestling Association (CWA) with ~30 tournaments annually across Cornwall. Small but continuous participation ~200-500 active wrestlers. Cornish diaspora pockets in California + Wisconsin + Australia largely died out early-mid 20th century, though occasional heritage revival events occur." },
  ],

  wikipediaTitle: "Cornish wrestling",
  sources: [
    { label: "Cornish Wrestling Association", url: "https://www.cornishwrestling.co.uk", publisher: "CWA" },
    { label: "Wikipedia — Cornish wrestling", url: "https://en.wikipedia.org/wiki/Cornish_wrestling", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
