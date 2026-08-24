import type { Sport } from "@/lib/types";

export const capoeira: Sport = {
  id: "capoeira",
  slug: "capoeira",
  name: "Capoeira",
  officialName: "Capoeira",
  shortDescription:
    "An Afro-Brazilian art that blends martial technique, acrobatics, dance and music — practised in a circle (roda) to the beat of the berimbau.",
  longDescription:
    "Capoeira was created by enslaved Africans in colonial Brazil in the 16th and 17th centuries. Disguised as a dance, it preserved combat techniques under the eyes of slaveholders and later evolved into a martial art / cultural expression practised in a circle called the roda, always accompanied by live music. Two practitioners ('capoeiristas') enter the roda and engage in a fluid, flowing 'jogo' — a game of kicks, sweeps, dodges and acrobatics timed to the rhythm of the berimbau. Since the mid-20th century capoeira has been formalised into two main lineages: Regional (created by Mestre Bimba) and Angola (championed by Mestre Pastinha). UNESCO inscribed capoeira on the Representative List of the Intangible Cultural Heritage of Humanity in 2014.",

  category: "combat-sports",
  subCategory: "martial art / dance",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  season: "year-round",
  era: "early-modern",
  popularity: "regional",

  countryOfOrigin: "BR",
  regionOfOrigin: "Bahia, Brazil",
  estimatedOrigin: "16th–17th century",

  players: { note: "The 'jogo' is 2 vs 2 in the roda; a full class or 'batizado' has anywhere from 10 to 100 participants." },
  field: {
    surfaceName: "roda",
    dimensions: "Circle 5–10 m across, formed by participants.",
    description: "The 'roda' (wheel) is the sacred circle in which capoeira is played. Musicians (the bateria) sit at one point of the circle; two capoeiristas enter and play at a time.",
  },
  equipment: [
    { name: "Berimbau", description: "The single-string musical bow — the 'chief' of the roda; the berimbau's rhythm dictates the speed and style of the game." },
    { name: "Atabaque, pandeiro, agogô, reco-reco", description: "Supporting percussion instruments of the bateria." },
    { name: "Abadá", description: "The white uniform trousers worn by capoeiristas, cord-belted by rank." },
  ],
  duration: {
    approximateMinutes: 5,
    structure: "A single jogo lasts 1–5 minutes; the roda continues for as long as the group has energy.",
  },
  objective:
    "There is no 'winner' in a traditional capoeira jogo — the goal is to demonstrate technique, control, musicality and respect for one's partner while dodging (esquiva), attacking with kicks, and 'answering' the other player's movements.",
  matchStructure:
    "The roda opens with the berimbau setting a rhythm. Two players 'buy' into the game (compra), enter with the ginga (the base swing) and begin the jogo. Any capoeirista may interrupt to enter the roda; two players exit as new pairs come in.",

  basicRules: [
    { title: "Ginga", body: "The fundamental swaying step — every capoeira exchange begins and returns to the ginga." },
    { title: "The berimbau rules", body: "The berimbau dictates whether the game is fast, slow, playful, aggressive, low to the ground (Angola) or upright (Regional)." },
    { title: "Respect the roda", body: "No stopping mid-jogo without an exit gesture; new players may only enter by buying the game from a musician or player." },
    { title: "Musicality", body: "Kicks, dodges and floreios (flourishes) are timed to the music — a capoeirista out of rhythm is out of place." },
  ],
  advancedRules: [
    { title: "Chamada", body: "A ritual pause — one player extends an arm in invitation; the other approaches respectfully. The chamada can be a trap or an act of trust." },
    { title: "Volta ao mundo", body: "A shared walk around the circle to reset the energy of the game." },
    { title: "Malícia", body: "Trickery and misdirection — a fundamental capoeira virtue, valued higher than raw power." },
  ],
  scoring: {
    summary: "No formal scoring — the roda is judged by mestres and peers on musicality, control, technique and axé (energy).",
    winCondition: "There is no explicit 'winner'; a well-controlled sweep or a beautifully answered attack draws the loudest cheers from the roda.",
  },

  positions: [
    { name: "Aluno / Aluna", role: "Beginner student — bare or beginner cord." },
    { name: "Formado / Graduado", role: "Graduated student — middle cords." },
    { name: "Contramestre / Contramestra", role: "Advanced student, close to teacher rank." },
    { name: "Mestre / Mestra", role: "Master — usually 15+ years of practice and community-recognised authority." },
  ],
  officiating: {
    officials: ["Mestre presiding over the roda", "Bateria (musicians) collectively regulating pace"],
    summary: "The mestre and the berimbau together control the roda; there is no sports-style referee.",
  },

  governingBodies: [
    { name: "Confederação Brasileira de Capoeira", acronym: "CBC", founded: 1992, headquarters: "Brasília, Brazil" },
    { name: "International Capoeira Federation", acronym: "FICA / FICAP" },
  ],
  majorCompetitions: [
    { name: "Games of the World Capoeira Federation", frequency: "annual", region: "worldwide" },
    { name: "Batizado & Troca de Cordas", frequency: "annual", region: "per group", note: "The graduation ceremony in which students are baptised into capoeira or promoted to new cords." },
  ],
  countriesPlayed: ["BR", "US", "GB", "PT", "DE", "FR", "JP", "MX", "IN", "AU"],
  famousAthletes: ["Mestre Bimba", "Mestre Pastinha", "Mestre Suassuna", "Mestre Camisa", "Mestre Acordeon"],

  variants: ["capoeira-angola", "capoeira-regional", "capoeira-contemporânea"],
  relatedSports: ["taekwondo", "gymnastics", "brazilian-jiu-jitsu"],

  skills: ["flexibility", "rhythm & musicality", "explosive power", "acrobatic control", "improvisation"],

  terminology: [
    { term: "Ginga", meaning: "The base rocking step that connects every movement." },
    { term: "Roda", meaning: "The circle in which capoeira is played." },
    { term: "Jogo", meaning: "A single game between two capoeiristas." },
    { term: "Bateria", meaning: "The ensemble of berimbaus, atabaque, pandeiro and other percussion." },
    { term: "Esquiva", meaning: "A dodge or evasive movement." },
    { term: "Meia-lua de compasso", meaning: "A spinning back-kick — one of capoeira's most iconic strikes." },
    { term: "Malandragem", meaning: "Streetwise cunning — a cultural virtue in capoeira." },
    { term: "Axé", meaning: "The living energy of the roda; a well-tuned roda is 'com axé'." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "What is capoeira?", body: "An Afro-Brazilian art blending martial technique, dance, music and community.", anchor: "hero" },
      { title: "The ginga", body: "The base swaying step — every capoeirista starts here.", anchor: "rules" },
      { title: "Angola vs Regional", body: "Two lineages: Angola (slow, close to the ground) and Regional (upright, faster).", anchor: "variants" },
      { title: "Enter your first roda", body: "How to buy a game, greet the berimbau and play with respect.", anchor: "rules" },
    ] },
  ],
  diagrams: [
    {
      id: "capoeira-roda",
      title: "The roda",
      component: "capoeira-roda",
      slot: "playing-area",
    },
  ],
  faq: [
    { question: "Is capoeira a martial art or a dance?", answer: "Both — capoeira was developed by enslaved Africans as martial technique disguised as dance. It has always been both." },
    { question: "Do you compete in capoeira?", answer: "There is no traditional winner in a roda. Some modern federations run scored competitions, but this is not universal." },
    { question: "Is capoeira on the UNESCO cultural heritage list?", answer: "Yes — the capoeira circle was inscribed on the Representative List of the Intangible Cultural Heritage of Humanity in 2014." },
  ],

  sources: [
    { label: "UNESCO — Capoeira Circle", publisher: "UNESCO", url: "https://ich.unesco.org/en/RL/capoeira-circle-00892" },
    { label: "Confederação Brasileira de Capoeira", publisher: "CBC" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};
