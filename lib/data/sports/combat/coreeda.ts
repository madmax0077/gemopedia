import type { Sport } from "@/lib/types";

export const coreeda: Sport = {
  id: "coreeda",
  slug: "coreeda",
  name: "Coreeda",
  officialName: "Coreeda (Aboriginal Australian Wrestling)",
  aliases: ["Aboriginal Wrestling", "Australian Aboriginal Grappling"],
  shortDescription:
    "Traditional Aboriginal Australian wrestling practiced by indigenous nations across Australia for 60,000+ years — competitors wrestle within circle drawn on ground; loser is one whose foot leaves circle. Revitalized in 2000s via Coreeda Association of Australia to preserve indigenous cultural sport.",
  longDescription:
    "Coreeda is the traditional Aboriginal Australian wrestling art — practiced by indigenous nations across Australia for an estimated 60,000+ years, making it one of the world's oldest continuous wrestling traditions. Etymology from the Yuin Aboriginal language of southeastern Australia. Historically practiced at inter-tribal gatherings, coming-of-age ceremonies, and celebrations. Distinctive feature: wrestlers compete within a circle drawn on the ground (a 'jarradarra'), and the wrestler whose foot leaves the circle first loses the round. Loss also occurs by throw to back or submission. Revitalized in the 2000s by the Coreeda Association of Australia, which developed formalized competitive ruleset while preserving indigenous cultural context. Now practiced through school programs + cultural festivals + Australian indigenous games. Weight classes exist. Featured at Indigenous NAIDOC Week events + occasional exhibition matches in Australian combat sports.",

  category: "combat-sports",
  subCategory: "folk wrestling (Aboriginal Australian indigenous tradition)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "niche",
  countryOfOrigin: "AU",
  regionOfOrigin: "Australia — practiced by Aboriginal nations across the continent for 60,000+ years",
  estimatedOrigin: "60,000+ years continuous Aboriginal cultural practice; formalized modern competitive ruleset via Coreeda Association of Australia founded ~2000",

  players: { min: 2, max: 2, note: "1v1 wrestling match within traditional circle." },
  equipment: [
    { name: "Traditional or modern athletic attire", description: "Historically indigenous body paint + minimal attire; modern events use athletic shorts + shirts." },
    { name: "Circular wrestling ring (jarradarra)", description: "Traditional circle drawn on ground with sand or chalk; modern events use fixed 3-5 meter circle." },
  ],
  duration: { approximateMinutes: 5, structure: "Best-of-3 rounds; each round <1 minute typical." },
  objective: "Win rounds by (1) forcing opponent's foot outside circle, (2) throwing opponent to back, or (3) submission.",
  matchStructure: "Best-of-3 rounds within circular ring.",

  basicRules: [
    { title: "Wrestle within jarradarra (circle)", body: "Match takes place inside circular ring; foot outside circle = round loss." },
    { title: "Legal actions", body: "Throws, hip trips, submissions (limited joint locks), pushing opponent outside circle." },
    { title: "Round win conditions (any of)", body: "(1) Force opponent's foot outside circle, (2) throw opponent flat to back, (3) submission tap or verbal submission." },
    { title: "Best-of-3 rounds wins match", body: "First to 2 round wins takes match." },
  ],
  advancedRules: [
    { title: "Circle boundary strategy", body: "Push opponent toward boundary strategically; use body positioning + throws to force step-out." },
    { title: "No striking, no dangerous joint hyperextension", body: "Pure grappling; safety-oriented modern ruleset." },
    { title: "Cultural context integration", body: "Modern events include Welcome to Country + indigenous cultural context; wrestlers respect ancestral tradition." },
    { title: "Weight classes (formalized)", body: "Modern Coreeda Association has ~5 weight classes for youth + adult competition." },
  ],
  scoring: {
    summary: "Best-of-3 rounds; win by circle-exit + back-throw + submission.",
    winCondition: "First to 2 rounds wins.",
    breakdown: [
      { action: "Force opponent's foot outside circle", points: "1 round" },
      { action: "Throw opponent flat to back", points: "1 round" },
      { action: "Submission", points: "1 round" },
    ],
  },
  penalties: [
    { title: "Striking (any form)", body: "DQ." },
    { title: "Dangerous joint hyperextension", body: "Warning / DQ." },
  ],

  positions: [{ name: "Wrestler", role: "Grip + throw + push opponent outside circle.", count: 1 }],
  officiating: {
    officials: ["Referee", "Judges (2-3)"],
    summary: "Modern formalized Coreeda events have referee + judges; traditional cultural exhibitions self-refereed.",
  },

  governingBodies: [
    { name: "Coreeda Association of Australia", founded: 2000, headquarters: "Sydney, Australia", website: "https://www.coreeda.org" },
    { name: "Aboriginal Sport & Recreation Australia", founded: 1980, headquarters: "Canberra, Australia" },
  ],
  majorCompetitions: [
    { name: "Coreeda National Championship", frequency: "annual", founded: 2005, region: "rotating Australian cities" },
    { name: "NAIDOC Week Coreeda exhibitions", frequency: "annual (July)", founded: 2010, region: "Australia-wide indigenous festivities" },
    { name: "Australian Indigenous Games (multi-sport, includes Coreeda)", frequency: "biennial", founded: 2015, region: "rotating Australian venues" },
  ],
  countriesPlayed: ["AU (indigenous + broader community)"],
  famousAthletes: [
    "Various indigenous Australian champions across youth + adult divisions",
    "Aboriginal cultural leaders + elders leading revitalization",
    "Named champions primarily within Aboriginal community; limited mainstream media exposure",
  ],
  records: [
    { title: "Among world's oldest continuous wrestling traditions", holder: "Coreeda / Aboriginal wrestling", value: "60,000+ years continuous Aboriginal cultural practice — potentially the oldest wrestling tradition on Earth alongside Sumo + Mongolian Bokh", year: 2024 },
    { title: "Modern revitalization success", holder: "Coreeda Association of Australia", value: "Since 2000 founding, successfully introduced Coreeda into Australian schools + Aboriginal cultural programs + national championships", year: 2024 },
  ],

  variants: ["traditional-cultural-ceremonial", "coreeda-association-modern-formalized-rules", "school-youth-program-variant"],
  relatedSports: ["glima", "sumo", "backhold-wrestling", "gouren", "khridoli", "musangwe"],

  skills: ["circle boundary awareness", "throw execution", "hip trip + takedown", "grappling in confined space", "cultural + ceremonial context"],
  strategies: [
    { title: "Boundary control", body: "Position yourself facing center of circle; opponent naturally moves toward boundary." },
    { title: "Push + trip combination", body: "Combine push (toward boundary) with hip trip to send opponent outside." },
    { title: "Cultural respect", body: "Traditional matches begin with acknowledgement of Country + ancestors; modern events preserve this." },
  ],

  terminology: [
    { term: "Jarradarra", meaning: "The circular wrestling ring / ground." },
    { term: "Coreeda", meaning: "The wrestling art itself (Yuin Aboriginal language)." },
    { term: "NAIDOC Week", meaning: "National Aborigines and Islanders Day Observance Committee — annual indigenous celebration featuring Coreeda." },
    { term: "Welcome to Country", meaning: "Traditional Aboriginal opening ceremony often preceding Coreeda matches." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Contact Coreeda Association of Australia", body: "Association runs training programs + workshops in Sydney + Aboriginal communities." },
      { title: "Attend NAIDOC Week Coreeda exhibitions", body: "Annual July events across Australia feature Coreeda demonstrations." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at Coreeda National Championship", body: "Annual pinnacle event across weight classes + age divisions." },
      { title: "Represent Coreeda at Australian Indigenous Games", body: "Biennial multi-sport indigenous games." },
    ]},
  ],

  faq: [
    { question: "How old is Coreeda really?", answer: "Aboriginal cultural continuity in Australia extends 60,000+ years — one of the longest continuous human cultures on Earth. Wrestling was documented in early European colonial contact accounts + oral tradition. It's likely one of the oldest continuous wrestling traditions worldwide, comparable to Sumo (Japan) + Mongolian Bokh + Turkish Yağlı Güreş." },
    { question: "Is Coreeda open to non-indigenous participants?", answer: "Yes — the modern Coreeda Association of Australia welcomes all participants + treats it as inclusive Australian cultural sport. Indigenous heritage is celebrated + preserved through opening ceremonies + cultural context, but competitive participation is open. School programs actively engage non-indigenous students in indigenous cultural sport." },
    { question: "How is Coreeda different from Sumo?", answer: "Both use circular ring + step-out losing condition. Coreeda also allows throws to back + submissions (more grappling variety). Sumo has strict weight-mass advantage + ceremonial ritual + professional sport structure. Coreeda is folk cultural tradition with weight classes + more inclusive weight range. Both are ancient circle-wrestling traditions." },
  ],

  wikipediaTitle: "Coreeda",
  sources: [
    { label: "Coreeda Association of Australia", url: "https://www.coreeda.org", publisher: "Coreeda Association" },
    { label: "Wikipedia — Coreeda", url: "https://en.wikipedia.org/wiki/Coreeda", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
