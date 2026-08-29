import type { Sport } from "@/lib/types";

export const xare: Sport = {
  id: "xare",
  slug: "xare",
  name: "Xare",
  officialName: "Xare (Chistera Joko-Garbi)",
  aliases: ["Chistera Joko-Garbi", "Cesta-Xare"],
  shortDescription:
    "Basque pelota variant played with a loose-strung xare (small racquet with sheep-gut webbing) on a 30 m fronton — the ball is caught + held briefly before being flung against the front wall. One of ~14 modalities of Basque pelota; unique for the loose-string catch-and-throw.",
  longDescription:
    "Xare is a variant of Basque pelota played with a specialised xare — a small wooden-frame racquet strung with loose sheep-gut cords in a diamond pattern that allows the ball to briefly nest in the strings before being flung. This makes xare unique among pelota disciplines: unlike pala or the rigid cesta of jai alai, the xare permits a fleeting catch-and-throw that gives the sport its distinctive tempo. Also called Chistera Joko-Garbi in French Basque tradition (Joko-Garbi = 'clean play' — no long delay allowed on the catch, no scraping the ball off walls). Court is a 30 m open fronton or trinquete; ball is a hard leather-covered rubber pelota. Played 2v2 (doubles) — winner is first to reach set point count (35 or 50, depending on federation). One of ~14 recognised modalities of Basque pelota under the Federación Internacional de Pelota Vasca (FIPV). Historically popular in French Basque Country + Argentina (immigrant tradition); scored the sport's Olympic demonstration appearance at 1992 Barcelona (though under 'Basque pelota' umbrella).",
  category: "racket-paddle-sports",
  subCategory: "Basque pelota (chistera with loose-string catch-and-throw)",
  sportType: "team", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "19th-century", popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "French Basque Country + Spanish Basque Country + Argentina",
  estimatedOrigin: "Evolved late 19th century as chistera variant with loose-string webbing enabling catch-and-throw",
  players: { min: 4, max: 4, note: "Always played 2v2 doubles." },
  equipment: [
    { name: "Xare racquet", description: "Small wooden frame ~35 cm long, loose sheep-gut cords in diamond pattern — creates the catch-and-throw pocket." },
    { name: "Pelota (leather-covered rubber ball)", description: "~65-75 g, hard leather cover, high bounce." },
    { name: "Fronton (open one-wall court) or trinquete", description: "30 m long × 10 m wide open one-wall fronton; trinquete adds side + back wall." },
    { name: "Boinas / white attire", description: "Traditional Basque red beret + white shirt/trousers." },
  ],
  duration: { approximateMinutes: 60, structure: "Match: first to 35 or 50 points (federation-dependent); typically 60-90 min." },
  objective: "Score points by winning rallies — ball must be caught + immediately flung against the front wall within the fair zone, before landing in-bounds on rebound.",
  matchStructure: "2v2 doubles on 30 m fronton or trinquete. First team to target point count (35 in French tradition; 50 in Argentine) wins.",
  basicRules: [
    { title: "Serve to front wall", body: "Server flings ball with xare to strike front wall above the falta line + land in receiver's zone." },
    { title: "Rally continues with catch-and-throw", body: "Each player catches with xare, immediately flings against front wall in one fluid motion — no scraping, no long delay." },
    { title: "Point ends on fault / out", body: "Point ends if ball hits below falta line, out of bounds, second bounce, or held too long in xare." },
  ],
  advancedRules: [
    { title: "Joko-Garbi rule (no delay)", body: "The catch must be immediate — extended dribbling or aiming in the xare pocket is a fault (this is the sport's defining rule)." },
    { title: "Doubles positioning", body: "Front-court player covers volleys; back-court player covers deep returns + serves." },
    { title: "Chibalete (spin serve)", body: "Advanced serve variant with heavy spin, hard to return cleanly." },
  ],
  scoring: {
    summary: "Point per rally won. First team to 35 (French) or 50 (Argentine) wins.",
    winCondition: "Reach the federation-set point total before opposing team.",
    breakdown: [{ action: "Rally won", points: "1 point" }],
  },
  penalties: [
    { title: "Extended catch (Chapa)", body: "Holding the ball in xare too long → point to opponent." },
    { title: "Falta (short serve)", body: "Serve fails to reach falta line → serve replayed or point to opponent." },
    { title: "Boteproño (double bounce)", body: "Failure to return before second bounce → point to opponent." },
  ],
  positions: [
    { name: "Delantero (front-court player)", role: "Covers volleys + short rallies at front of court.", count: 1 },
    { name: "Zaguero (back-court player)", role: "Covers deep rallies + typically serves.", count: 1 },
  ],
  officiating: { officials: ["Juez principal", "Juez de línea (line judges)"], summary: "One main referee + line judges; scoreboard operator." },
  governingBodies: [
    { name: "Federación Internacional de Pelota Vasca (FIPV)", founded: 1929, headquarters: "Pamplona, Spain" },
    { name: "Fédération Française de Pelote Basque (FFPB)", founded: 1921, headquarters: "Bayonne, France" },
    { name: "Federación Argentina de Pelota", founded: 1932, headquarters: "Buenos Aires, Argentina" },
  ],
  majorCompetitions: [
    { name: "World Basque Pelota Championships", frequency: "quadrennial", founded: 1952, region: "worldwide" },
    { name: "Championnat de France de Xare", frequency: "annual", founded: 1930, region: "France (Basque)" },
  ],
  countriesPlayed: ["FR", "ES", "AR", "MX", "US", "UY"],
  famousAthletes: ["Champions of French Xare championships"],
  records: [
    { title: "One of ~14 pelota modalities", holder: "FIPV", value: "Recognised as one of the ~14 official Basque pelota modalities", year: 1929 },
    { title: "Olympic demo at Barcelona 1992", holder: "IOC", value: "Basque pelota (including xare modality) featured as demonstration sport at Barcelona 1992 Olympics", year: 1992 },
  ],
  variants: ["chistera-joko-garbi", "chistera-gran-chistera"],
  relatedSports: ["jai-alai", "cesta-punta", "pala", "frontenis", "basque-pelota"],
  skills: ["catch-and-throw timing", "wrist snap", "positional doubles play", "ball-reading (spin + rebound)"],
  strategies: [
    { title: "Front-back rotation", body: "Delantero + Zaguero must rotate on cross-court balls; miscommunication = free point." },
    { title: "Serve to backhand", body: "Serve towards opponent's backhand-side wall causes awkward xare-angle catch." },
    { title: "Chibalete off-speed disruption", body: "Mix hard-drives with spin-heavy chibalete serves to break opponent rhythm." },
  ],
  terminology: [
    { term: "Xare", meaning: "The loose-strung racquet + name of the sport" },
    { term: "Joko-Garbi", meaning: "'Clean play' — the no-delay-on-catch rule" },
    { term: "Falta", meaning: "Short serve / fault" },
    { term: "Chapa", meaning: "Illegal held catch fault" },
    { term: "Delantero / Zaguero", meaning: "Front / Back court player positions" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Xare grip + catch-and-throw drill", body: "Practise clean catch + immediate release without ball nesting." }] },
    { level: "intermediate", steps: [{ title: "Doubles positioning + serve variations", body: "Learn front/back rotation + basic + chibalete serves." }] },
    { level: "advanced", steps: [{ title: "Trinquete play + Championship-level tactics", body: "Master three-wall trinquete strategy + regional championship rally patterns." }] },
  ],
  faq: [
    { question: "How is xare different from jai alai / cesta punta?", answer: "Jai alai's cesta is a long rigid basket; xare is a short racquet with LOOSE strings that let the ball briefly nest before being flung. Xare is Joko-Garbi (clean play, no delay); jai alai allows a longer scooping motion." },
    { question: "Where is xare played?", answer: "Primarily French Basque Country (Pyrénées-Atlantiques), Spanish Basque Country, and Argentina (large Basque immigrant community). Small niche following elsewhere." },
  ],
  wikipediaTitle: "Basque pelota",
  sources: [{ label: "Wikipedia — Basque pelota", url: "https://en.wikipedia.org/wiki/Basque_pelota", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default xare;
