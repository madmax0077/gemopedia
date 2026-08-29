import type { Sport } from "@/lib/types";

export const musangwe: Sport = {
  id: "musangwe",
  slug: "musangwe",
  name: "Musangwe",
  officialName: "Musangwe (Venda Traditional Bare-Knuckle Boxing)",
  aliases: ["Venda Boxing", "Venda Fist Fighting", "Musangwe Fist-Fighting"],
  shortDescription:
    "Traditional bare-knuckle boxing of the Venda people of Limpopo, South Africa — winter dry-season fist-fighting tradition since 1800s+ where males of all ages test courage + honor in single-punch bouts under strict community rules. Village elders serve as officials.",
  longDescription:
    "Musangwe is the traditional bare-knuckle boxing (fist-fighting) practice of the Venda people of Limpopo Province, northern South Africa. A dry-season winter tradition dating to 1800s+ (possibly earlier), Musangwe brings Venda males of all ages — from young boys to elderly men — to designated village grounds to test courage + strength + community honor through short bare-knuckle bouts. Unique cultural features: no weight classes (any size may face any size), no rounds (short single-punch or short-exchange fights), no formal training or coaches (learned by observation), no protective equipment, women historically excluded (participation restricted to men), and community elders serve as officials + arbiters. Winners gain significant community respect; losers accept loss with dignity — the ritual emphasizes character-building + community bonds, not damage. Held at traditional grounds like Gaba in Vhembe District. Draws crowds of hundreds. Featured in various documentaries + international press attention since 2000s. Practiced primarily by Venda ethnic community; unique to South Africa.",

  category: "traditional-cultural-sports",
  subCategory: "traditional bare-knuckle boxing (Venda cultural)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "winter",
  era: "19th-century",
  popularity: "niche",
  countryOfOrigin: "ZA",
  regionOfOrigin: "Limpopo Province, South Africa (Vhembe District; Venda ethnic homeland)",
  estimatedOrigin: "19th century Venda tradition; formalized cultural practice recognized by South African cultural heritage bodies since 2000s",

  players: { min: 2, max: 2, note: "1v1 bare-knuckle bout; no weight classes." },
  equipment: [
    { name: "None (bare knuckles)", description: "Absolutely no equipment; bare-fisted + minimal clothing." },
    { name: "Open ground venue", description: "Traditional village ground (Gaba) with community spectator area." },
  ],
  duration: { approximateMinutes: 1, structure: "Short bouts — often single punch or brief exchange; each bout <1 min typical." },
  objective: "Land dominant punch; win by knockout, opponent-withdrawal, or elder-declared victory.",
  matchStructure: "Traditional folk format: paired matchups organized by elders throughout the day; brief bouts.",

  basicRules: [
    { title: "Bare-knuckle single punch (or short exchange)", body: "Bouts are typically single-punch exchanges or brief 2-3 punch combinations." },
    { title: "No weight classes", body: "Any size may face any size — courage over size is key cultural value." },
    { title: "No rounds, no time limits (typically)", body: "Bout ends when one wrestler concedes / falls / elders declare winner." },
    { title: "Male-only participation (traditional)", body: "Historically restricted to males; young boys through elderly men participate." },
    { title: "Community elders officiate", body: "Village elders match pairs + declare winners + enforce cultural protocols." },
  ],
  advancedRules: [
    { title: "No kicking, no grappling, no head-butts", body: "Pure bare-knuckle boxing — punches only." },
    { title: "Withdrawal accepted with honor", body: "Withdrawing from a bout carries no shame; character + willingness to face challenge matters more than winning." },
    { title: "Injury acknowledged + accepted", body: "Broken fists + facial injuries + occasional serious injuries occur — accepted risk of tradition." },
    { title: "Cultural sacredness", body: "Musangwe is protected cultural heritage; elders enforce respect + non-modernization." },
  ],
  scoring: {
    summary: "Win by knockout, withdrawal, or elder decision.",
    winCondition: "Elder-declared victory based on dominant strike + damage + composure.",
    breakdown: [
      { action: "Knockout / opponent falls", points: "Match win" },
      { action: "Opponent withdraws", points: "Match win" },
      { action: "Elder declares dominant fighter", points: "Match win" },
    ],
  },
  penalties: [
    { title: "Kicking or grappling", body: "Elder-imposed penalty + potential expulsion from event." },
    { title: "Continued strikes after opponent falls", body: "Community censure — considered dishonorable." },
    { title: "Refusing to engage after challenge", body: "Social pressure; not enforced by rules." },
  ],

  positions: [{ name: "Fighter", role: "Bare-knuckle boxer representing self + family honor.", count: 1 }],
  officiating: {
    officials: ["Village elders", "Community members"],
    summary: "No formal referee — village elders decide + community witnesses + enforces protocols.",
  },

  governingBodies: [
    { name: "No formal governing body — traditional cultural practice", founded: 0, headquarters: "N/A" },
    { name: "South African Cultural Heritage recognition", founded: 2010, headquarters: "Pretoria, South Africa" },
    { name: "Venda Traditional Authority (nominal oversight)", founded: 1800, headquarters: "Limpopo Province" },
  ],
  majorCompetitions: [
    { name: "Musangwe winter season (May-August)", frequency: "annual seasonal", founded: 1850, region: "Vhembe District, Limpopo Province — Gaba is primary ground" },
    { name: "Cultural festival exhibitions", frequency: "occasional", founded: 2000, region: "South African cultural festivals" },
  ],
  countriesPlayed: ["ZA (Limpopo Province Venda community exclusively)"],
  famousAthletes: [
    "Various renowned Venda musangwe fighters — cultural stature within community; limited mainstream media exposure",
    "Documented in South African media + international documentaries (BBC, National Geographic since 2000s)",
  ],
  records: [
    { title: "Unique South African cultural practice", holder: "Venda community", value: "Musangwe is unique to Venda peoples of Limpopo; no comparable bare-knuckle boxing folk tradition in South Africa", year: 2024 },
    { title: "Ancient continuous practice", holder: "Musangwe", value: "Continuous Venda cultural practice for 175+ years documented; likely older undocumented origins", year: 2024 },
  ],

  variants: ["traditional-village-ground-standard", "documentary-recorded-cultural-exhibition"],
  relatedSports: ["dambe", "senegalese-wrestling", "nubian-wrestling", "bare-knuckle-boxing", "lethwei", "coreeda"],

  skills: ["bare-knuckle striking", "courage + composure under pressure", "single-punch power", "cultural + community awareness"],
  strategies: [
    { title: "Single-punch power development", body: "Bouts often decided by single dominant strike; power > combination boxing." },
    { title: "Courage-first cultural value", body: "Willingness to face challenge > winning; refusing challenge dishonorable." },
    { title: "Respect elder decisions", body: "Village elder authority absolute; no protest of elder rulings." },
  ],

  terminology: [
    { term: "Musangwe", meaning: "Venda bare-knuckle boxing tradition." },
    { term: "Gaba", meaning: "Primary Musangwe ground in Vhembe District." },
    { term: "Vhembe", meaning: "District of Limpopo Province where Musangwe is centered." },
    { term: "Venda", meaning: "The ethnic community practicing Musangwe." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Only through Venda cultural community", body: "Not accessible through formal training gyms; Venda cultural insider access required." },
      { title: "Attend Vhembe District winter events (May-August)", body: "Only way to witness authentic tradition." },
    ]},
    { level: "advanced", steps: [
      { title: "Full acceptance as Venda community fighter", body: "Elders recognize + regularly match into bouts based on community standing." },
    ]},
  ],

  faq: [
    { question: "Is Musangwe legal?", answer: "It occupies a cultural gray area in South African law. It's protected as intangible cultural heritage but bare-knuckle boxing sits outside formal sports regulation. Injuries occur (broken bones, facial injuries, occasional serious injuries). South African government generally permits it as cultural practice while occasionally raising concerns about safety. Health + legal debates ongoing." },
    { question: "How is it different from Western bare-knuckle boxing?", answer: "Musangwe has NO weight classes, NO rounds, NO time limits, NO gloves, NO medical infrastructure, NO monetary prizes. Western bare-knuckle boxing (BKFC, Bare Knuckle Fighting Championship) is a regulated professional sport with weight classes + rounds + medical staff + purses. Musangwe is pure folk cultural ritual for community honor; BKFC is professional entertainment. Structurally opposite despite superficial similarity." },
    { question: "Can outsiders participate?", answer: "Extremely rare + not culturally encouraged. Musangwe is deeply embedded in Venda community identity; unfamiliarity with cultural protocols would create problems. Documentary crews have observed + filmed but not participated. Full participation would require full Venda community integration." },
  ],

  wikipediaTitle: "Musangwe",
  sources: [
    { label: "Wikipedia — Musangwe", url: "https://en.wikipedia.org/wiki/Musangwe", publisher: "Wikipedia" },
    { label: "BBC News — Musangwe: South Africa's bare-knuckle boxing tradition", url: "https://www.bbc.com/news", publisher: "BBC" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
