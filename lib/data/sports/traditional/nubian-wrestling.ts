import type { Sport } from "@/lib/types";

export const nubianWrestling: Sport = {
  id: "nubian-wrestling",
  slug: "nubian-wrestling",
  name: "Nubian Wrestling",
  officialName: "Nubian Wrestling (Sudan)",
  aliases: ["Sudanese Wrestling", "Nuba Wrestling", "Nuba Fighting"],
  shortDescription:
    "Ancient wrestling tradition of the Nuba peoples of South Kordofan, Sudan — practiced for 3000+ years as central Nuba cultural sport with music, dance, ceremonial body decoration, and physical prowess demonstrations. Documented since pharaonic Egyptian era.",
  longDescription:
    "Nubian Wrestling is the ancient wrestling tradition of the Nuba peoples of the Nuba Mountains in South Kordofan, Sudan. Documented since pharaonic Egyptian era (2000-1500 BCE) with tomb carvings depicting Nubian wrestling, it's one of humanity's most ancient continuously-practiced sports (3000+ years). Wrestling is central to Nuba cultural identity — traditionally practiced at harvest festivals + weddings + inter-tribal gatherings, accompanied by drums + dance + ceremonial body decoration (ash paint + oil), and serving as young warriors' rite of passage. Bouts are grip-based standing wrestling: competitors grip each other's shorts/belts + attempt to throw for a fall (opponent's back or shoulders on ground = win). Wrestlers train from childhood + prestige of championship elevates social status significantly. Political instability + Sudanese civil wars (Darfur 2003, second civil war 1983-2005, ongoing 2023 conflict) have severely disrupted Nuba cultural practice. Some Nuba refugee diaspora communities in South Sudan + Kenya + Uganda preserve tradition; international awareness remains low despite cultural significance.",

  category: "traditional-cultural-sports",
  subCategory: "folk wrestling (Nuba African tradition, ancient)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "niche",
  countryOfOrigin: "SD",
  regionOfOrigin: "Nuba Mountains, South Kordofan, Sudan (Nuba peoples' ancestral homeland)",
  estimatedOrigin: "3000+ years continuous Nuba cultural practice; documented in pharaonic Egyptian tomb carvings 2000-1500 BCE",

  players: { min: 2, max: 2, note: "1v1 wrestling with tribal + spectator ceremony." },
  equipment: [
    { name: "Traditional shorts / belt (grip surface)", description: "Wrestlers wear shorts + belt providing grip surface." },
    { name: "Ceremonial body decoration (ash + oil)", description: "Traditional white ash paint + oil applied before match — ceremonial + practical (reduces grip)." },
    { name: "Village dance ground (arena)", description: "Traditional open-air dirt arena at Nuba villages; drums + dance accompany matches." },
  ],
  duration: { approximateMinutes: 5, structure: "Traditional single-fall matches; village ceremonies extend with music + dance context." },
  objective: "Throw opponent to back or shoulders on ground = win single-fall bout.",
  matchStructure: "Traditional folk format: single-fall bouts within cultural ceremony context (drums + dance + community celebration).",

  basicRules: [
    { title: "Standing grip wrestling from shorts/belt", body: "Competitors grip each other's shorts or belt + attempt throw." },
    { title: "Win by throwing opponent to back", body: "Opponent's back or both shoulders on ground = fall = win." },
    { title: "No striking", body: "Pure grappling; no punches or kicks." },
    { title: "Traditional ceremonial context", body: "Bouts accompanied by drums + dance + community celebration; not merely athletic contest but cultural ritual." },
  ],
  advancedRules: [
    { title: "Body oil + ash application", body: "Traditional application of ash + oil serves ceremonial + practical (reduces opponent grip) purpose." },
    { title: "Champion status prestige", body: "Village champion enjoys significant social prestige + often preferential marriage prospects + tribal leadership pathway." },
    { title: "Inter-tribal ceremonial matches", body: "Historically inter-tribal wrestling matches maintained peace + social bonds between Nuba communities." },
  ],
  scoring: {
    summary: "Single-fall bouts (throw to back).",
    winCondition: "First to score fall wins bout.",
    breakdown: [
      { action: "Throw opponent's back/shoulders to ground", points: "1 fall (match win)" },
    ],
  },
  penalties: [
    { title: "Striking", body: "Not permitted; violation of tradition." },
    { title: "Dangerous throw with intent to injure", body: "Community + village elder censure." },
  ],

  positions: [{ name: "Wrestler ('champion')", role: "Grip + throw + cultural performance representative of tribe.", count: 1 }],
  officiating: {
    officials: ["Village elders (judges)", "Traditional referee"],
    summary: "Traditional festival + community — village elders decide falls + community celebrates outcome.",
  },

  governingBodies: [
    { name: "No formal international governing body — traditional cultural tradition", founded: 0, headquarters: "N/A" },
    { name: "Sudan National Sports Council (nominal oversight)", founded: 1955, headquarters: "Khartoum, Sudan" },
    { name: "Various NGO cultural preservation efforts", founded: 2000, headquarters: "Nuba diaspora communities" },
  ],
  majorCompetitions: [
    { name: "Nuba Mountain village harvest festivals", frequency: "seasonal (traditional)", founded: 1000, region: "Nuba Mountains, South Kordofan, Sudan" },
    { name: "Nuba refugee cultural events (Kenya, Uganda, South Sudan)", frequency: "occasional", founded: 2000, region: "Nuba refugee diaspora" },
    { name: "Sudanese national wrestling events (heavily disrupted by civil war)", frequency: "when-possible", founded: 1980, region: "Sudan" },
  ],
  countriesPlayed: ["SD (Nuba Mountains + Khartoum diaspora)", "SS (South Sudan Nuba refugees)", "KE (refugee diaspora)", "UG (refugee diaspora)", "EG (historical Nubian border areas)"],
  famousAthletes: [
    "Named village champions across Nuba tribes — limited international media exposure",
    "Multi-generation Nuba wrestling families in Kadugli + Kauda regions",
    "Nuba wrestling documented in George Rodger's iconic 1949 National Geographic photographs (bringing international attention)",
  ],
  records: [
    { title: "Documented pharaonic Egyptian antiquity", holder: "Nubian Wrestling", value: "Depicted in pharaonic Egyptian tomb carvings 2000-1500 BCE; among the earliest documented wrestling art in human history", year: 2024 },
    { title: "3000+ years continuous cultural practice", holder: "Nuba peoples", value: "Continuous Nuba cultural practice for 3000+ years; core identity marker despite modern disruptions", year: 2024 },
    { title: "George Rodger 1949 photojournalism", holder: "Nuba wrestlers", value: "Rodger's 1949 National Geographic photos of Nuba wrestlers with ash-painted bodies + ceremonial context brought international attention to Nuba culture", year: 1949 },
  ],

  variants: ["nuba-traditional-village-ceremonial", "displaced-refugee-simplified-variant"],
  relatedSports: ["senegalese-wrestling", "nubian-canaria-wrestling", "african-traditional-wrestling", "sumo", "mongolian-wrestling", "yagli-gures"],

  skills: ["belt/shorts grip fighting", "hip throw execution", "balance + base defense", "ceremonial + cultural performance", "childhood training discipline"],
  strategies: [
    { title: "Grip battle for dominant hold", body: "Establish dominant belt/shorts grip before initiating throw." },
    { title: "Body oil counter", body: "Traditional oil application reduces opponent's grip on your body; counter by attacking clothing grips." },
    { title: "Cultural performance element", body: "Champion status enhanced by ceremonial + performance quality, not merely athletic outcome." },
  ],

  terminology: [
    { term: "Nuba", meaning: "The peoples of the Nuba Mountains, South Kordofan, Sudan." },
    { term: "Nubian", meaning: "Descriptor for the ancient Nubian civilization + culture (broader historical reference)." },
    { term: "Kadugli", meaning: "Central town of Nuba Mountains region; major wrestling center." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Contact Nuba diaspora cultural organizations", body: "Diaspora communities in Kenya + Uganda + US preserve tradition." },
      { title: "Study Nuba culture + history", body: "Understanding Nuba culture essential for meaningful engagement with the wrestling tradition." },
    ]},
    { level: "advanced", steps: [
      { title: "Village-level training in Nuba Mountains (when politically safe)", body: "Ongoing conflicts (2023+) make in-country training difficult; refugee diaspora training remains accessible." },
    ]},
  ],

  faq: [
    { question: "Is Nuba wrestling related to ancient Egyptian wrestling?", answer: "Depicted in pharaonic Egyptian tomb art (2000-1500 BCE), Nubian wrestlers are shown alongside Egyptian wrestling scenes — indicating cultural exchange + likely shared ancient African wrestling roots. Nuba wrestling continued as living Nuba cultural tradition while ancient Egyptian wrestling died out with pharaonic civilization; Nuba may be closest surviving descendant of ancient African wrestling traditions." },
    { question: "How is Nuba wrestling faring today?", answer: "Under severe threat. Sudanese civil wars (1983-2005), Darfur genocide (2003+), and ongoing 2023+ Sudan conflict have massively disrupted Nuba communities. Many Nuba have fled to South Sudan + Kenya + Uganda as refugees. Wrestling tradition preserved primarily through refugee diaspora + occasional in-country practice when politically safe. Cultural preservation efforts by international NGOs help." },
    { question: "Where can I see Nuba wrestling?", answer: "Difficult to access due to ongoing Sudan conflict. George Rodger's 1949 National Geographic photographs remain the most accessible historical documentation. Occasional documentary films (Leni Riefenstahl's 1970s Nuba photography books, controversial but historically documentary) show tradition. Contemporary diaspora cultural events in Kenya + Uganda + US occasionally feature exhibitions." },
  ],

  wikipediaTitle: "Nuba wrestling",
  sources: [
    { label: "Wikipedia — Nuba peoples", url: "https://en.wikipedia.org/wiki/Nuba_peoples", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "community",
};
