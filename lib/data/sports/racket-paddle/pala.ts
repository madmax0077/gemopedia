import type { Sport } from "@/lib/types";

export const pala: Sport = {
  id: "pala",
  slug: "pala",
  name: "Pala",
  officialName: "Pala Larga / Pala Corta",
  aliases: ["Pala Larga", "Pala Corta", "Pelota Pala"],
  shortDescription:
    "Basque pelota variant played with a solid wooden paddle (pala) on a fronton or trinquete court — one of ~14 pelota modalities. Split into Pala Corta (short 51 cm paddle, ~500 g) + Pala Larga (long 66 cm paddle, ~750 g). Fast, hard-hitting 2v2 doubles.",
  longDescription:
    "Pala is one of the ~14 recognised modalities of Basque pelota, played with a solid one-piece wooden paddle (pala) rather than a hand, glove, or basket. Two main forms: Pala Corta ('short pala', ~51 cm / ~500 g) is the most Olympic-visible form + is played primarily in Spain; Pala Larga ('long pala', ~66 cm / ~750 g) is the older + more powerful form, played mainly in French Basque Country. Ball is a hard leather-covered pelota (~80-100 g depending on discipline). Court is a 30 m open fronton (one wall) or 30 m trinquete (three-wall). Match is 2v2 doubles. Point-scoring like all pelota: ball must strike front wall above the falta line + land in-bounds; opponent must return before second bounce. Because pala is a solid wooden paddle, hits are extremely fast (~200 km/h at pro level) — sport requires explosive wrist snap + court coverage. Federated under the FIPV (Federación Internacional de Pelota Vasca). Pala Corta was a Barcelona 1992 Olympic demonstration event; regularly featured at World Basque Pelota Championships every 4 years.",
  category: "racket-paddle-sports",
  subCategory: "Basque pelota (solid wooden paddle)",
  sportType: "team", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "19th-century", popularity: "regional",
  countryOfOrigin: "ES",
  regionOfOrigin: "Spanish + French Basque Country",
  estimatedOrigin: "Evolved 19th century; codified with two paddle lengths (corta / larga) early 20th century",
  players: { min: 4, max: 4, note: "Always played 2v2 doubles at competitive level; recreational singles possible." },
  equipment: [
    { name: "Pala (wooden paddle)", description: "Pala Corta ~51 cm / ~500 g; Pala Larga ~66 cm / ~750 g — solid one-piece hardwood (beech/hornbeam)." },
    { name: "Pelota (leather-covered ball)", description: "Hard rubber core with tightly stitched leather cover; ~80-100 g depending on discipline." },
    { name: "Fronton (one-wall) or Trinquete (three-wall)", description: "30 m long × 10-11 m wide; front wall ~10 m high with falta line + fair-zone markings." },
    { name: "White attire + red beret / sash", description: "Traditional Basque uniform for competition." },
  ],
  duration: { approximateMinutes: 60, structure: "Match: first to 35 or 40 points (federation-dependent); typically 60-90 min." },
  objective: "Score points by winning rallies — ball must hit front wall above falta line, land in fair zone, and opponent must fail to return before second bounce.",
  matchStructure: "2v2 doubles. First team to target point count (35 or 40) wins.",
  basicRules: [
    { title: "Serve to front wall above falta line", body: "Server bounces ball + strikes with pala; must clear falta line + land in receiver zone." },
    { title: "Return before second bounce", body: "Rally continues until player fails to return, hits below falta line, or out of bounds." },
    { title: "One-hand grip only", body: "Pala must be gripped one-handed at handle; two-handed grip is a fault." },
  ],
  advancedRules: [
    { title: "Pala Corta vs Pala Larga tactics", body: "Corta favours wrist speed + quick reactions; Larga favours power + reach — different court positioning." },
    { title: "Trinquete side-wall play", body: "In trinquete (three-wall), side walls create angle shots + tactical richochets." },
    { title: "Chula (low ball) targeting", body: "Advanced shot aimed at chula zone (below head-height rebound) — very hard to return with pala." },
  ],
  scoring: {
    summary: "Point per rally won. First to 35 (Corta) or 40 (Larga in some federations) wins.",
    winCondition: "Reach point total before opposing team.",
    breakdown: [{ action: "Rally won", points: "1 point" }],
  },
  penalties: [
    { title: "Falta (short serve)", body: "Serve fails to clear falta line → serve replayed or point conceded." },
    { title: "Boteproño (second bounce)", body: "Failure to return before second bounce → point to opponent." },
    { title: "Falta de pie (foot fault)", body: "Server crosses service line before hitting → fault." },
  ],
  positions: [
    { name: "Delantero (front-court)", role: "Covers volleys + short quick returns.", count: 1 },
    { name: "Zaguero (back-court)", role: "Covers deep rallies + typically serves.", count: 1 },
  ],
  officiating: { officials: ["Juez principal", "Juez de línea (line judges)", "Anotador (scoreboard)"], summary: "One main referee + line judges + score keeper." },
  governingBodies: [
    { name: "Federación Internacional de Pelota Vasca (FIPV)", founded: 1929, headquarters: "Pamplona, Spain" },
    { name: "Federación Española de Pelota", founded: 1924, headquarters: "Madrid, Spain" },
    { name: "Fédération Française de Pelote Basque (FFPB)", founded: 1921, headquarters: "Bayonne, France" },
  ],
  majorCompetitions: [
    { name: "World Basque Pelota Championships (Pala Corta / Larga)", frequency: "quadrennial", founded: 1952, region: "worldwide" },
    { name: "Campeonato de España de Pala", frequency: "annual", founded: 1935, region: "Spain" },
    { name: "Barcelona 1992 Olympic Demonstration (Pala Corta)", frequency: "one-off", founded: 1992, region: "Olympic" },
  ],
  countriesPlayed: ["ES", "FR", "AR", "MX", "US", "UY", "CL", "CU"],
  famousAthletes: ["Multiple World Basque Pelota Championship gold medallists (Pala Corta + Larga)"],
  records: [
    { title: "One of ~14 Basque pelota modalities", holder: "FIPV", value: "Officially recognised as one of the ~14 Basque pelota disciplines", year: 1929 },
    { title: "Ball speeds up to ~200 km/h", holder: "Professional players", value: "Elite pala players routinely record ball speeds of 180-200 km/h after paddle strike", year: 2010 },
  ],
  variants: ["pala-corta", "pala-larga", "paleta-cuero", "paleta-goma"],
  relatedSports: ["basque-pelota", "jai-alai", "xare", "frontenis", "paleta-argentina"],
  skills: ["explosive wrist snap", "one-handed paddle control", "court positioning", "reading ball spin + rebound"],
  strategies: [
    { title: "Attack the chula zone", body: "Aim below opponent's waist to force awkward low pala scoop — very hard to return cleanly." },
    { title: "Cross-court angle shots (trinquete)", body: "Use side walls to create wide-angle recoveries that pull opponent out of position." },
    { title: "Serve deep + wide", body: "Deep-wide serves stretch receiver + set up short-return volley opportunity for delantero." },
  ],
  terminology: [
    { term: "Pala", meaning: "The solid wooden paddle + name of the sport" },
    { term: "Pala Corta / Larga", meaning: "Short / Long paddle variant (different weights + lengths)" },
    { term: "Falta", meaning: "Fault (short serve or out-of-bounds)" },
    { term: "Chula", meaning: "Low-rebound zone difficult to return with paddle" },
    { term: "Delantero / Zaguero", meaning: "Front / Back court player" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Grip + basic serve", body: "One-handed grip mechanics + falta-clearing serve." }] },
    { level: "intermediate", steps: [{ title: "Doubles positioning + trinquete angles", body: "Front/back rotation + side-wall angle shots." }] },
    { level: "advanced", steps: [{ title: "Championship-level tactics + power development", body: "Explosive wrist snap for 180+ km/h shots + tournament rally patterns." }] },
  ],
  faq: [
    { question: "What is the difference between Pala Corta and Pala Larga?", answer: "Pala Corta uses a ~51 cm/500 g short paddle (favours speed + reactions); Pala Larga uses ~66 cm/750 g long paddle (favours power + reach). Corta is more competition-visible in Spain; Larga is more traditional in French Basque country." },
    { question: "Is Pala a form of Basque pelota?", answer: "Yes — pala is one of the ~14 official Basque pelota modalities under the FIPV, distinguished by the solid wooden paddle (vs. hand, glove, or basket)." },
  ],
  wikipediaTitle: "Basque pelota",
  sources: [{ label: "Wikipedia — Basque pelota", url: "https://en.wikipedia.org/wiki/Basque_pelota", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default pala;
