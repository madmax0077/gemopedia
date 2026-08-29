import type { Sport } from "@/lib/types";

export const cestaPunta: Sport = {
  id: "cesta-punta",
  slug: "cesta-punta",
  name: "Cesta Punta",
  officialName: "Cesta Punta (Jai Alai)",
  aliases: ["Jai Alai (competition form)", "Cesta"],
  shortDescription:
    "The fastest ball sport in the world — Basque pelota modality using a long curved wicker basket (cesta) to hurl a hard rubber pelota at up to 300 km/h against a 3-wall fronton. 2v2 doubles; a Basque signature; boomed in Miami/Manila casinos 1930s-80s.",
  longDescription:
    "Cesta Punta is a Basque pelota modality — commonly known internationally as 'jai alai' (Basque for 'merry festival') — played with a long curved wicker basket (cesta) strapped to the dominant hand. Considered the fastest ball sport in the world: professionals have recorded pelota speeds exceeding 300 km/h (188 mph), and the sport once held the Guinness World Record for fastest projectile in sport. Played on a three-wall fronton (fronton with front wall, side wall, back wall — 45-60 m long, 10 m wide, 12 m high front wall). Ball is a hard rubber-cored, goatskin-covered pelota (~125 g, hard as a rock). 2v2 doubles is the competition format (though 1v1 exists for exhibition). Cesta lets player scoop + hurl the ball in one motion — cesta was invented in French Basque country ~1857 by Gantxiki. Boomed in the United States (Miami, Connecticut, Rhode Island) + Philippines (Manila) 1930s-1980s as pari-mutuel casino sport; declined after gambling laws changed. Still popular in French Basque Country, Spain (Basque + Navarra), Mexico (Tijuana), Argentina, Cuba. Federated under the FIPV; a Barcelona 1992 Olympic demonstration sport.",
  category: "racket-paddle-sports",
  subCategory: "Basque pelota (long wicker basket)",
  sportType: "team", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "19th-century", popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "French + Spanish Basque Country",
  estimatedOrigin: "Cesta invented ~1857 in French Basque country by Gantxiki; codified as competition sport late 19th century",
  players: { min: 2, max: 4, note: "Competition: 2v2 doubles. Exhibition/quiniela: 1v1." },
  equipment: [
    { name: "Cesta (wicker basket)", description: "Long curved chestnut-frame basket ~55-70 cm, strapped to dominant hand; hand-woven Spanish chestnut + reed. Custom-made per player." },
    { name: "Pelota (goatskin-covered rubber ball)", description: "~125 g, ~65 mm diameter, hard as baseball; can reach 300+ km/h." },
    { name: "Fronton (three-wall court)", description: "45-60 m long × 10 m wide × 12 m high front wall; side + back walls all in play." },
    { name: "White helmet + trousers", description: "Mandatory helmet due to ball speed; traditional white uniform." },
  ],
  duration: { approximateMinutes: 30, structure: "Match: first to 7, 9, or 15 points (partido variant) or quiniela round-robin (1v1 elimination); 30-60 min typical." },
  objective: "Score points by winning rallies — pelota must strike front wall above falta line + land in fair zone before second bounce.",
  matchStructure: "2v2 doubles partido: first to point target. Also quiniela: 8 players in round-robin elimination — winner of each rally continues; losers rotate.",
  basicRules: [
    { title: "Cesta scoop + hurl in one motion", body: "Ball must be caught + hurled in single continuous motion — extended holding is a fault." },
    { title: "Serve to front wall above falta line", body: "Serve must strike above falta line, land in fair zone." },
    { title: "Return before second bounce", body: "Rally continues until player fails to return, hits below falta, or out of bounds." },
  ],
  advancedRules: [
    { title: "Chulas (short-hop shots)", body: "Ball rebounding low off front wall must be caught by chest-height cesta scoop." },
    { title: "Dejadas (drop shots)", body: "Soft dead-drops just off front wall force opponent to sprint forward." },
    { title: "Quiniela rotation format", body: "In quiniela, 8 players/pairs rotate through rally-eliminated queue; winner earns point each rally." },
  ],
  scoring: {
    summary: "Point per rally won. Partido to point target; quiniela to fixed total.",
    winCondition: "Reach point target in partido; win most rallies in quiniela.",
    breakdown: [{ action: "Rally won", points: "1 point" }],
  },
  penalties: [
    { title: "Falta (short serve)", body: "Serve fails to clear falta line → point conceded." },
    { title: "Extended cesta hold", body: "Ball held too long in basket → point conceded." },
    { title: "Boteproño (second bounce)", body: "Failure to return before second bounce → point to opponent." },
  ],
  positions: [
    { name: "Delantero (front-court)", role: "Covers front rallies + chulas; explosive volleys.", count: 1 },
    { name: "Zaguero (back-court)", role: "Covers deep rallies + typically serves + returns long shots.", count: 1 },
  ],
  officiating: { officials: ["Juez principal", "Juez de línea (line judges)", "Anotador (scoreboard)"], summary: "Main referee + line judges + score keeper." },
  governingBodies: [
    { name: "Federación Internacional de Pelota Vasca (FIPV)", founded: 1929, headquarters: "Pamplona, Spain" },
    { name: "Fédération Française de Pelote Basque (FFPB)", founded: 1921, headquarters: "Bayonne, France" },
    { name: "Federación Española de Pelota", founded: 1924, headquarters: "Madrid, Spain" },
  ],
  majorCompetitions: [
    { name: "World Basque Pelota Championships (Cesta Punta)", frequency: "quadrennial", founded: 1952, region: "worldwide" },
    { name: "Barcelona 1992 Olympic Demonstration (Cesta Punta)", frequency: "one-off", founded: 1992, region: "Olympic" },
    { name: "Miami Jai-Alai (pari-mutuel league)", frequency: "seasonal", founded: 1926, region: "USA (declining)" },
  ],
  countriesPlayed: ["FR", "ES", "MX", "AR", "CU", "PH", "US", "IT", "UY"],
  famousAthletes: ["Joey Cornblit (Miami jai-alai legend)", "Bengoa (multi-time World Champion)", "Gorka Ezkurdia (World Champion)"],
  records: [
    { title: "Fastest ball sport (300+ km/h)", holder: "Cesta punta professionals", value: "Recorded pelota speeds exceeding 300 km/h (188 mph); once Guinness World Record for fastest projectile in sport", year: 1979 },
    { title: "One of ~14 Basque pelota modalities", holder: "FIPV", value: "Recognised as premier long-cesta modality of Basque pelota", year: 1929 },
    { title: "Barcelona 1992 Olympic demo", holder: "IOC", value: "Featured as demonstration sport at Barcelona 1992 Olympics", year: 1992 },
  ],
  variants: ["cesta-punta-partido", "cesta-punta-quiniela", "remonte", "share-cesta"],
  relatedSports: ["basque-pelota", "jai-alai", "pala", "xare", "frontenis"],
  skills: ["cesta catch-and-hurl technique", "explosive shoulder rotation", "court coverage sprint", "spin-and-angle reading"],
  strategies: [
    { title: "Chula + dejada mix", body: "Alternate high-speed drives with soft dejadas to break opponent rhythm + expose position." },
    { title: "Serve to opponent's back-hand-side wall", body: "Awkward cesta angle on backhand-side deep serve = weak return." },
    { title: "Front + back rotation on cross-court", body: "Delantero + Zaguero must swap sides on cross-court balls; miscommunication = free point." },
  ],
  terminology: [
    { term: "Cesta", meaning: "The curved wicker basket + name of the discipline" },
    { term: "Punta", meaning: "'Point' — refers to the pointed tip of the cesta" },
    { term: "Jai Alai", meaning: "'Merry festival' in Basque — global marketing name of the sport" },
    { term: "Chula", meaning: "Low-rebound zone / low-scoop shot" },
    { term: "Dejada", meaning: "Soft drop shot near front wall" },
    { term: "Partido / Quiniela", meaning: "Doubles set match / 8-player rotation format" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Cesta catch + hurl mechanics", body: "Practise catch + hurl in one motion; safety gear + soft ball for beginners." }] },
    { level: "intermediate", steps: [{ title: "Serve variations + 3-wall angles", body: "Develop deep + short serves; learn side-wall rebound angles." }] },
    { level: "advanced", steps: [{ title: "Championship partido tactics + quiniela rotation", body: "Master partido rally patterns + quiniela survival strategy." }] },
  ],
  faq: [
    { question: "Is cesta punta the same as jai alai?", answer: "Cesta punta is the specific Basque pelota modality using the long curved wicker basket. Jai alai is the global marketing name popularised in Miami/Manila casinos — essentially the same sport in competition form. Some purists distinguish traditional 'cesta punta' from the pari-mutuel 'jai alai' entertainment form." },
    { question: "How fast is the ball in cesta punta?", answer: "Professional cesta punta pelotas routinely exceed 200 km/h and have been measured over 300 km/h (188 mph) — once held Guinness World Record for fastest projectile in sport." },
  ],
  wikipediaTitle: "Jai alai",
  sources: [{ label: "Wikipedia — Jai alai", url: "https://en.wikipedia.org/wiki/Jai_alai", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default cestaPunta;
