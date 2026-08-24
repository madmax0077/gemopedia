import type { Sport } from "@/lib/types";

export const buzkashi: Sport = {
  id: "buzkashi",
  slug: "buzkashi",
  name: "Buzkashi",
  officialName: "Buzkashi (بزکشی)",
  aliases: ["Kokpar (Central Asia)", "Kok-boru (Kyrgyzstan)", "Ulak-tartysh"],
  shortDescription:
    "Central Asia's national horseback sport — riders battle to pick up a goat (or calf) carcass and carry it into a scoring circle.",
  longDescription:
    "Buzkashi is the national sport of Afghanistan and, in local variants (Kokpar, Kok-boru, Ulak-tartysh), of Kyrgyzstan, Kazakhstan, Uzbekistan and Tajikistan. Dozens of chapandaz (accomplished horsemen) fight from the saddle for possession of a headless calf or goat carcass, aiming to carry it to a designated scoring circle. It is one of the world's oldest surviving equestrian sports; the modern formalised version is called Buzkashi-e Tudabarai in Afghanistan, and Kok-boru (recognised by the World Nomad Games) in the Kyrgyz Republic. UNESCO inscribed Kok-boru on its Intangible Cultural Heritage list in 2017.",

  category: "equestrian-sports",
  subCategory: "traditional nomadic sport",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  season: "year-round",
  era: "medieval",
  popularity: "regional",

  countryOfOrigin: "AF",
  regionOfOrigin: "Central Asia",
  estimatedOrigin: "c. 10th century",

  players: { note: "Traditional Afghan Buzkashi-e Tudabarai has no fixed team size — dozens compete. Modern Kok-boru: 4 riders per side + 2 substitutes." },
  field: {
    surfaceName: "meydan / horse-field",
    dimensions: "Traditional: an open field, kilometres across. Modern Kok-boru: 200 m × 70 m with a scoring 'tai kazan' well at each end.",
    description: "In the traditional game the meydan is an open plain; in the formalised Kok-boru version a bounded pitch with clay-lined wells (tai kazan) at each end acts as goals.",
  },
  equipment: [
    { name: "Boz / Ulak", description: "The traditional 'ball' is a headless goat or calf carcass, soaked in cold water beforehand for weight and durability. Modern events increasingly use synthetic replicas." },
    { name: "Horse", description: "Highly trained Central Asian breeds — often specialised working horses that spend years mastering the game." },
    { name: "Chapan & telpak", description: "Thick padded riding coat and lambskin hat — protection against whips and other riders." },
  ],
  duration: {
    approximateMinutes: 45,
    structure: "Modern Kok-boru: 3 periods × 20 minutes. Traditional Buzkashi: continues from dawn to dusk on festival days.",
  },
  objective: "Pick up the carcass from a starting circle and deposit it in the opposing team's scoring well (Kok-boru) or return it to your own designated scoring circle (Tudabarai).",
  matchStructure:
    "Riders start in a scrum around the carcass. Whoever pulls it clear must ride — dragging or draped over the saddle — toward the scoring point while opposing riders try to whip, block or wrench it away. The rally ends when a goal is scored or the carcass leaves play.",

  basicRules: [
    { title: "The pickup", body: "The rider must lift the ~30–60 kg carcass from the ground while mounted — one of the sport's defining feats." },
    { title: "Scoring", body: "In Kok-boru, throw the carcass into the tai kazan (a raised well) at the opponent's end. In Tudabarai, ride the carcass free and drop it in your side's designated circle." },
    { title: "Contact", body: "Riders may whip each other's hands (not faces or horses), push, block and pull the carcass with their hands. Weapons and unnecessary cruelty to horses are strictly forbidden." },
  ],
  advancedRules: [
    { title: "Master rider (chapandaz)", body: "Only elite riders — chapandazi — can compete at professional level. Training takes decades." },
    { title: "Time-outs", body: "In modern Kok-boru, if the carcass is stuck in a scrum for over 90 seconds the referee restarts play." },
  ],
  scoring: {
    summary: "1 point per successful deposit of the carcass in the scoring zone.",
    winCondition: "Highest score after the period limit wins; draws are common in traditional versions.",
  },
  fouls: [
    { title: "Whipping face / horse", body: "Immediate penalty and possible expulsion." },
    { title: "Grabbing another rider's reins", body: "Fouled and possession-restart in modern formalised versions." },
  ],

  positions: [
    { name: "Chapandaz", role: "Master rider — the only riders traditionally allowed at senior level." },
    { name: "Blocker", role: "In modern Kok-boru, defensive riders whose main role is to obstruct opposition attacks." },
  ],
  officiating: {
    officials: ["Referees (modern Kok-boru: 3 on horseback)", "Elders / village judges (traditional Buzkashi)"],
    summary: "Traditional Buzkashi is largely self-policed by community elders and the reputation of the chapandazi. Modern Kok-boru has formal on-horseback referees.",
  },

  governingBodies: [
    { name: "World Ethnosport Confederation", acronym: "WEC", founded: 2015 },
    { name: "Kyrgyz Kok-Boru Federation", acronym: "KKBF", headquarters: "Bishkek, Kyrgyzstan" },
  ],
  majorCompetitions: [
    { name: "World Nomad Games", frequency: "biennial", founded: 2014, region: "Central Asia" },
    { name: "Afghan National Buzkashi Championships", frequency: "annual", region: "Afghanistan" },
  ],
  countriesPlayed: ["AF", "MN", "IN"],
  famousAthletes: ["Aziz Ahmad (Afghanistan)", "Kubatbek Iskakov (Kyrgyzstan)"],

  variants: ["kok-boru", "kokpar", "ulak-tartysh", "tudabarai", "qarajai"],
  relatedSports: ["polo", "horseball", "mongolian-wrestling"],

  skills: ["horsemanship", "explosive lifting", "grip strength", "tactical positioning", "fearlessness"],

  terminology: [
    { term: "Chapandaz", meaning: "Master horseman — the elite rider class in Buzkashi." },
    { term: "Boz", meaning: "The goat / calf carcass used as the 'ball'." },
    { term: "Tai kazan", meaning: "The raised earthen well used as a goal in modern Kok-boru." },
    { term: "Meydan", meaning: "The playing field — traditionally an open plain." },
    { term: "Tudabarai", meaning: "Traditional Afghan variant — bring the carcass free from the scrum and drop it in your circle." },
    { term: "Qarajai", meaning: "Traditional variant — carry the carcass on a circuit and deposit it in a specific point." },
  ],

  learningPaths: [{ level: "beginner", steps: [
    { title: "What is buzkashi?", body: "A horseback sport where dozens of riders battle for a headless goat carcass — Central Asia's national game.", anchor: "hero" },
    { title: "The two main styles", body: "Traditional Buzkashi (Afghanistan) and Kok-boru (Kyrgyzstan) — same core action, different rules.", anchor: "variants" },
    { title: "The pickup", body: "Lifting a 30–60 kg carcass from the saddle while riding is the sport's defining skill.", anchor: "how-it-works" },
    { title: "Scoring", body: "Kok-boru: throw it into the opponent's well. Tudabarai: bring it free and drop it in your circle.", anchor: "scoring" },
  ] }],
  diagrams: [
    {
      id: "buzkashi-field",
      title: "The playing field",
      component: "buzkashi-field",
      slot: "playing-area",
    },
  ],
  faq: [
    { question: "Is a real animal used?", answer: "Traditionally yes — a headless goat or calf carcass. Modern formalised leagues (Kok-boru at the World Nomad Games) sometimes use synthetic replicas." },
    { question: "How is it scored?", answer: "In Kok-boru the carcass is dropped into a raised earthen well at the opponent's end; in traditional Buzkashi (Tudabarai) it must be freed from the scrum and dropped in a designated circle." },
    { question: "Is buzkashi violent?", answer: "It is extremely physical — riders whip each other's hands and horses collide at speed — but weapons, face-whipping and cruelty to horses are prohibited." },
  ],

  sources: [
    { label: "UNESCO — Kok-boru", publisher: "UNESCO", url: "https://ich.unesco.org/en/RL/kok-boru-traditional-horse-game-01294" },
    { label: "World Nomad Games", publisher: "World Ethnosport Confederation" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};
