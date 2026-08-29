import type { Sport } from "@/lib/types";

export const infinityCodeOne: Sport = {
  id: "infinity-code-one",
  slug: "infinity-code-one",
  name: "Infinity Code One",
  officialName: "Infinity Code One (Streamlined Infinity by Corvus Belli)",
  aliases: ["Infinity CodeOne", "Infinity C1"],
  shortDescription:
    "Streamlined starter-friendly variant of Corvus Belli's Infinity — sci-fi anime-inspired skirmish miniatures wargame (~10 miniatures per side), released 2020 to lower barrier to entry vs. flagship Infinity N4; features signature reactive Automatic Reaction Orders (ARO) system.",
  longDescription:
    "Infinity Code One is a streamlined, starter-friendly variant of Corvus Belli's flagship Infinity miniatures wargame, released September 2020 to lower the barrier to entry versus the flagship Infinity N4 (Fourth Edition, 2020). Set in the far-future Human Sphere, Infinity is a sci-fi anime-inspired skirmish game featuring ~10 miniatures per side (vs. 15-20+ in N4). Signature mechanic: the Automatic Reaction Order (ARO) system — during your opponent's turn, every one of your miniatures with line-of-sight to the acting model gets a free reactive order (shoot, dodge, warning shots), creating extremely interactive turns unlike most IGOUGO wargames. Factions in Code One: PanOceania (high-tech Christian utopia), Yu Jing (Sino-Japanese hegemony), Ariadna (isolated Franco-Slavic-Scots colony), Haqqislam (Islamic humanist Neomuslim faction), Nomads (rebellious mobile-city outcasts), Combined Army (alien invaders), Aleph (transhuman AI collective + O-12 + NA2 factions in N4 only). Sixteen books + 100+ playable units. World Championship: ITS (Infinity Tournament System) global rankings + Interplanetario (Spain, since 2013) is the international championship. Design differentiators: true line-of-sight, cinematic anime aesthetic minis, D20 open-ended check system, no army points 'meta' in same way as 40K (units cost order-tokens as well as points).",
  category: "wargames",
  subCategory: "sci-fi anime skirmish miniatures game",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "ES",
  regionOfOrigin: "Spain (Corvus Belli, A Coruña, Galicia)",
  estimatedOrigin: "Infinity 1st Ed. 2005; N3 (3rd Ed.) 2014; N4 + Code One 2020",
  players: { min: 2, max: 2 },
  equipment: [{ name: "Unpainted metal / plastic Infinity minis", description: "28 mm scale; renowned for anime-inspired sculpts." }, { name: "D20 dice", description: "System uses D20 for all skill checks." }, { name: "Rulebook + army list app", description: "Free Infinity Army Builder app." }, { name: "4'x4' terrain-dense tabletop", description: "Terrain-critical — LoS defines game." }],
  duration: { approximateMinutes: 120, structure: "Code One game 90-120 min; N4 game 2.5-3 hours." },
  objective: "Complete Mission objectives + eliminate opponent's key units.",
  matchStructure: "3 turns typical; ITS mission-based; 5-round Swiss tournaments common.",
  basicRules: [
    { title: "D20 skill check system", body: "Roll under skill stat (BS/PH/WIP) modified by modifiers." },
    { title: "Automatic Reaction Order (ARO)", body: "Enemy miniatures with LoS may declare a reactive order (shoot/dodge/etc.)." },
    { title: "Order pool per turn", body: "Each player has an order pool = number of active troopers; spent as orders on units." },
    { title: "True line-of-sight", body: "Model-to-model true LoS; terrain positioning is central." },
  ],
  scoring: { summary: "Mission-based Victory Points (defined by ITS mission).", winCondition: "Higher Objective Point total after 3 turns." },
  positions: [{ name: "Lieutenant (mandatory)", role: "Command model; loss disrupts order-pool.", count: 1 }],
  governingBodies: [{ name: "Corvus Belli", founded: 1998, headquarters: "A Coruña, Galicia, Spain" }],
  majorCompetitions: [{ name: "Interplanetario", frequency: "annual", founded: 2013, region: "A Coruña, Spain" }, { name: "ITS Global Rankings (Infinity Tournament System)", frequency: "ongoing", founded: 2011, region: "worldwide" }],
  countriesPlayed: ["ESP", "USA", "GBR", "GER", "FRA", "ITA", "POL", "JPN", "AUS"],
  famousAthletes: ["Angel Giraldez (studio painter, iconic Infinity art)", "Interplanetario champions (rotating annually)"],
  records: [
    { title: "Infinity Code One launch 2020", holder: "Corvus Belli", value: "Code One launched September 2020 as streamlined entry-point variant alongside N4", year: 2020 },
    { title: "Interplanetario since 2013", holder: "Corvus Belli", value: "Annual Interplanetario World Championship at A Coruña, Spain since 2013", year: 2024 },
  ],
  variants: ["infinity-n4", "aristeia-arena-combat"],
  relatedSports: ["warhammer-40k-competitive", "warmachine", "malifaux", "star-wars-shatterpoint"],
  skills: ["terrain reading + LoS", "reactive order counter-play", "unit-composition list-building", "order economy"],
  wikipediaTitle: "Infinity (game)",
  sources: [{ label: "Wikipedia — Infinity (game)", url: "https://en.wikipedia.org/wiki/Infinity_(game)", publisher: "Wikipedia" }, { label: "Corvus Belli official", url: "https://www.corvusbelli.com", publisher: "Corvus Belli" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default infinityCodeOne;
