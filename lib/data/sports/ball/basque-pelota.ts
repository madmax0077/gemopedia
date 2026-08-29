import type { Sport } from "@/lib/types";

export const basquePelota: Sport = {
  id: "basque-pelota",
  slug: "basque-pelota",
  name: "Basque Pelota",
  officialName: "Pelota Vasca (FIPV)",
  aliases: ["Pelota Vasca", "Euskal Pilota", "Jai Alai (family)"],
  shortDescription:
    "Family of court sports from the Basque region where players hit a ball against a wall using hand, glove, xistera basket, or racket — 14 disciplines including jai alai, pala, cesta punta, and Basque handball; demonstration sport at Paris 1900 and Barcelona 1992 Olympics.",
  longDescription:
    "Basque Pelota (Pelota Vasca / Euskal Pilota) is a family of at least 14 distinct court sports developed in the Basque Country of Spain and France, all involving striking a ball against a wall (frontón or trinquete) using various implements: bare hands (pelota mano), leather gloves, wooden paddles (pala, paleta), or curved wicker baskets (cesta punta / jai alai, xare). Codified regionally over centuries with the FIPV governing internationally since 1929, the sport is contested at the Pelota World Championships (quadrennial since 1952) and was a demonstration sport at three Olympic Games. Cesta punta (jai alai) — famous for producing the fastest ball speeds in sport (~300 km/h) — flourished in Miami, Cuba, the Philippines, and Basque Country. Pelota mano remains the most-watched discipline in the Basque region.",

  category: "ball-sports",
  subCategory: "wall-and-court racket / hand sport family",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "medieval",
  popularity: "regional",
  countryOfOrigin: "ES",
  regionOfOrigin: "Basque Country (Spain + France); evolved from medieval French jeu de paume; codified regionally 18th-19th century; FIPV founded 1929",
  estimatedOrigin: "Medieval jeu de paume roots; Basque codification 1700s-1800s; FIPV founded San Sebastián 1929",

  players: { perTeam: 1, min: 1, max: 2, substitutes: 0, note: "Singles or doubles; teams of 2 in most disciplines (jai alai always doubles or singles)." },
  field: {
    surfaceName: "Frontón (single-wall) or Trinquete (three-wall) court",
    dimensions: "Frontón corto 30m long, 10m wide; Frontón largo 54m × 10m; Cesta punta cancha 55m × 10m × 10m high wall",
    description: "Concrete or stone playing floor; front wall (frontis), side wall (lateral), sometimes back wall (rebote); painted lines demarcate service and out-of-bounds zones.",
  },
  equipment: [
    { name: "Pelota (ball)", description: "Core of hardwood or rubber wrapped in cotton and leather; ~65g hand-ball to ~130g cesta punta ball; hardest ball in ball sports." },
    { name: "Xistera / Cesta", description: "Curved wicker basket (up to 65cm) worn on hand for cesta punta / xare / remonte." },
    { name: "Pala / Paleta", description: "Solid wooden paddle for pala corta, pala larga, paleta cuero, paleta goma." },
    { name: "Guante (leather glove)", description: "For pasaka and share disciplines." },
    { name: "Helmet", description: "Mandatory in cesta punta (ball speeds ~300 km/h)." },
  ],
  duration: { approximateMinutes: 60, structure: "First to fixed score (22 in cesta punta, 22-35 in pelota mano, varies by discipline)." },
  objective: "Strike ball against front wall so opponent cannot legally return it after one bounce (or on the fly in some disciplines).",
  matchStructure: "Race to fixed score (e.g., 22 in cesta punta; 22 in mano-individual; 30 in doubles). No time limit. Server retains service while winning points.",

  basicRules: [
    { title: "Ball must hit front wall", body: "Every strike must reach the front wall (frontis) between service and top lines." },
    { title: "Return before second bounce", body: "Opponent must return the ball before it bounces twice on the ground." },
    { title: "Server rotation on lost point", body: "Serve passes to opponent on lost point (most disciplines)." },
    { title: "Bare hand or approved implement only", body: "Discipline-specific: bare hand, glove, pala, xistera." },
  ],
  advancedRules: [
    { title: "Service rules", body: "Ball must be struck from serving box and hit the frontis between service marks; underhand serve in mano." },
    { title: "Out-of-bounds", body: "Ball landing beyond back court line, or hitting above/below marked frontis zone, is out." },
    { title: "Interference (obstáculo)", body: "Point replayed if opponent obstructs stroke; deliberate interference = fault." },
    { title: "Doubles rotation", body: "In doubles, front-court and back-court players rotate roles based on shot geometry, not strict positions." },
  ],
  scoring: {
    summary: "Point-per-rally; race to fixed target score.",
    winCondition: "First to target score (e.g., 22 pts cesta punta) wins match.",
    breakdown: [
      { action: "Rally won", points: "1" },
      { action: "Opponent fault (out, double bounce, illegal serve)", points: "1" },
    ],
  },
  penalties: [
    { title: "Fault", body: "Illegal serve, out-of-bounds, missed frontis, double bounce — point lost." },
    { title: "Warning / expulsion", body: "For unsportsmanlike conduct; rare in professional pelota." },
  ],

  positions: [
    { name: "Singles player", role: "Both server and defender; covers entire court.", count: 1 },
    { name: "Delantero (front-court)", role: "Doubles front player; attacks short returns.", count: 1 },
    { name: "Zaguero (back-court)", role: "Doubles back player; defends deep and generates power.", count: 1 },
  ],
  officiating: {
    officials: ["Juez principal (chief judge)", "Jueces de línea (line judges 2-3)", "Anotador (scorekeeper)"],
    summary: "3-5 officials at professional matches.",
  },

  governingBodies: [
    { name: "Federación Internacional de Pelota Vasca (FIPV)", founded: 1929, headquarters: "San Sebastián, Spain", website: "https://www.fipv.net" },
    { name: "Federación Española de Pelota (FEP)", founded: 1927, headquarters: "Madrid, Spain" },
    { name: "Fédération Française de Pelote Basque (FFPB)", founded: 1921, headquarters: "Bayonne, France" },
  ],
  majorCompetitions: [
    { name: "Pelota World Championships", frequency: "quadrennial", founded: 1952, region: "worldwide (14 disciplines contested)" },
    { name: "World Cup Cesta Punta", frequency: "annual", founded: 1990, region: "worldwide" },
    { name: "Manomanista Championship (pelota mano)", frequency: "annual", founded: 1940, region: "Basque Country" },
    { name: "Copa del Rey (Spain)", frequency: "annual", founded: 1945, region: "Spain" },
  ],
  countriesPlayed: ["ES", "FR", "AR", "MX", "US", "CU", "PH", "IT", "UY", "VE", "BO", "BR"],
  famousAthletes: [
    "Aimar Olaizola (Spain — multiple manomanista titles)",
    "Retegi II (Julián Retegi — 10× manomanista champion)",
    "Joxean Tolosa (Basque Country — pala legend)",
    "Egiguren VI (Spain — cesta punta star Miami)",
    "Jean-Pierre Ducassou (France — pala international)",
  ],
  records: [
    { title: "Fastest ball speed in sport", holder: "José Ramón Areitio (cesta punta)", value: "~302 km/h (188 mph) — Guinness record", year: 1979 },
    { title: "Most manomanista titles", holder: "Julián Retegi ('Retegi II', Basque)", value: "10 titles 1985-1998", year: 1998 },
    { title: "Most Pelota World Championships gold", holder: "Spain", value: "Dominant nation across most disciplines since 1952", year: 2022 },
  ],

  variants: ["pelota-mano-bare-hand", "cesta-punta-jai-alai-xistera-basket", "pala-corta-short-paddle", "pala-larga-long-paddle", "paleta-cuero-leather-ball-paddle", "paleta-goma-rubber-ball-paddle", "remonte-curved-basket", "xare-loose-string-basket", "pasaka-glove-trinquete", "frontenis-tennis-adaptation"],
  relatedSports: ["jai-alai", "frontenis", "pala", "one-wall-handball", "gaelic-handball", "squash"],

  skills: ["extreme wall-ball anticipation", "one-handed cesta control (grip/release)", "bare-hand ball tolerance (pain conditioning)", "angle geometry from front wall", "explosive footwork on stone", "power service"],
  strategies: [
    { title: "Dictate with the serve", body: "Deep, angled serve pushes opponent into back corners; short kill serves work when opponent overplays deep." },
    { title: "Play the wall angles", body: "Use lateral walls (chirlora) to create unreturnable angles; carom shots are decisive at pro level." },
    { title: "Front-court kill in doubles", body: "Delantero cuts off returns high on the wall for winners; zaguero drives from deep." },
    { title: "Mental endurance for long tantos (points)", body: "Rallies can extend 30+ strokes; conserve energy across the race to the target score." },
  ],

  terminology: [
    { term: "Frontón / Trinquete", meaning: "Single-wall / three-wall pelota courts." },
    { term: "Frontis", meaning: "The front wall — required target of every strike." },
    { term: "Xistera / Cesta", meaning: "Curved wicker basket used in cesta punta and related." },
    { term: "Tanto", meaning: "A point in pelota scoring." },
    { term: "Delantero / Zaguero", meaning: "Front / back court positions in doubles." },
    { term: "Manomanista", meaning: "Singles pelota mano championship — Basque cultural showpiece." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn on a school frontón", body: "Nearly every Basque village has an open frontón; start with rubber-ball paleta goma to spare the hands." },
      { title: "Study pelota mano technique", body: "Bare-hand striking is the discipline — begin with soft trainer ball and gradually harden." },
      { title: "Join FEP / FFPB / FIPV-affiliated club", body: "Spain, France, Argentina, Mexico, Philippines, and USA (Miami) all have clubs." },
    ]},
    { level: "advanced", steps: [
      { title: "Professional pelota mano circuit", body: "ASPE / Baiko Pilota Empresas control top pros in Basque Country; annual manomanista, four-and-a-half, and doubles titles." },
      { title: "Cesta punta Miami frontón or European circuit", body: "Miami Jai-Alai and Basque frontóns host pro cesta punta." },
      { title: "Represent nation at Pelota World Championships", body: "Every 4 years — 14 disciplines, ~15 nations compete." },
    ]},
  ],

  faq: [
    { question: "Is jai alai the same as Basque pelota?", answer: "Jai alai (cesta punta) is one specific discipline within the broader Basque pelota family. The family includes 14 codified disciplines using hands, gloves, paddles, and baskets. Pelota mano (bare-hand) is more widely played in the Basque Country than jai alai." },
    { question: "How fast is the cesta punta ball?", answer: "Around 250-300 km/h at professional level. José Ramón Areitio was Guinness-recorded at 302 km/h in 1979, making cesta punta the fastest ball sport in the world." },
    { question: "Was Basque pelota ever Olympic?", answer: "It was a full-medal sport at Paris 1900 (won by Spain) and a demonstration sport at Paris 1924, Mexico City 1968, and Barcelona 1992. It has not returned to the Olympic program." },
  ],

  wikipediaTitle: "Basque pelota",
  sources: [
    { label: "FIPV", url: "https://www.fipv.net", publisher: "Federación Internacional de Pelota Vasca" },
    { label: "Wikipedia — Basque pelota", url: "https://en.wikipedia.org/wiki/Basque_pelota", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
