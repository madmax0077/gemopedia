import type { Sport } from "@/lib/types";

export const tejoColombia: Sport = {
  id: "tejo-colombia",
  slug: "tejo-colombia",
  name: "Tejo (Colombian National Sport)",
  officialName: "Tejo (Colombian National Sport, since 2000)",
  aliases: ["Turmequé", "Tejo Colombiano"],
  shortDescription:
    "National sport of Colombia (declared 2000) — throw metal disc (tejo) 20m across a clay court to hit gunpowder-filled paper packets (mechas) around a metal ring (bocín); explosions when hit; pre-Colombian indigenous origins ~500 CE; still played across Colombia in canchas de tejo (tejo courts).",
  longDescription:
    "Tejo (also historically Turmequé) is the national sport of Colombia, officially declared such by Law 613 of 4 September 2000 by the Colombian Congress. It combines a Muisca-era pre-Columbian indigenous game (~500 CE, played by Muisca people of the Bogotá Plateau) with modern gunpowder additions from Spanish colonial era (~16th century). Players throw a 680-880g metal disc (tejo, also disco) approximately 20 meters (women's + youth: shorter distances) across a clay court at an inclined clay target box (marco) featuring a metal ring (bocín, ~10cm diameter) — around which are placed 4 small folded paper packets (mechas) filled with black powder gunpowder. Scoring: (1) Mecha hit + explosion = 3 points ('bocín-mecha'), (2) tejo lands inside bocín ring = 6 points ('embocinada'), (3) closest tejo to bocín if no explosion + no embocinada = 1 point ('mano'), (4) mecha exploded + tejo also embocinada = 9 points ('moñona' — rare max). First team to reach agreed score (typically 21 or 27) wins. Traditionally played with beer (Aguila is signature brand); free-beer + tejo courts are a Colombian cultural institution. Federación Colombiana de Tejo (FEDECTEJO, founded 1971). Professional league + national tournaments across Colombia; women's + youth divisions growing. Signature: literal explosions during play — considered one of the loudest + most physically-hazardous traditional sports globally. Also played in Panama + Venezuela + US/Spain diaspora.",
  category: "traditional-cultural-sports",
  subCategory: "Colombian throwing sport with gunpowder targets",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "CO",
  regionOfOrigin: "Colombia (Muisca people, Bogotá Plateau ~500 CE); modern gunpowder era ~16th century",
  estimatedOrigin: "Muisca pre-Columbian origins ~500 CE; modern gunpowder additions ~16th century; national sport designation Sep 2000",
  players: { min: 1, max: 6, note: "Singles or teams of 2-6 per side; typical 2v2 or 3v3 casual." },
  equipment: [{ name: "Tejo (metal disc, 680-880g)", description: "Iron/steel disc; heaviest allowed 880g per FEDECTEJO rules." }, { name: "Bocín (metal ring, ~10cm)", description: "Metal ring embedded in inclined clay target box." }, { name: "Mechas (folded gunpowder packets)", description: "Small folded paper triangles ~5cm containing 1-3g black powder each; 4 placed around bocín." }, { name: "Cancha de Tejo (clay court, 20m long)", description: "Traditional clay target box + throwing area; modern courts often indoor." }],
  duration: { approximateMinutes: 60, structure: "Match: play to agreed points (typically 21 or 27); ~1-2 hours casual, ~1 hour FEDECTEJO official." },
  objective: "Reach agreed target score (21/27) first by throwing tejos at gunpowder-target combinations.",
  matchStructure: "Round-based; each player throws tejo in turn; teams alternate; explosions + embocinada score.",
  basicRules: [
    { title: "Throw underhand from 20m line (men)", body: "Women's + youth throw from shorter distances (typically 15m + 10m)." },
    { title: "Explosion when mecha hit", body: "Loud bang; safety zone enforced." },
    { title: "Point scoring (mano/mecha/embocinada/moñona)", body: "1/3/6/9 points respectively; combinations possible." },
    { title: "Turn ends when both team members thrown", body: "Alternate teams throwing." },
  ],
  scoring: {
    summary: "Points per throw outcome; first to agreed total wins.",
    winCondition: "First team to 21 or 27 points (agreed target).",
    breakdown: [{ action: "Mano (closest tejo, no explosion)", points: "+1" }, { action: "Mecha (gunpowder packet exploded)", points: "+3" }, { action: "Embocinada (tejo lands in bocín ring)", points: "+6" }, { action: "Moñona (both mecha + embocinada in one throw)", points: "+9" }],
  },
  positions: [{ name: "Tejo player (Lanzador)", role: "Player who throws tejo; sole player-role.", count: 1 }],
  officiating: { officials: ["Chief Judge (Juez)", "Court Judges", "Score Keeper"], summary: "FEDECTEJO certified officials at professional events." },
  governingBodies: [{ name: "Federación Colombiana de Tejo (FEDECTEJO)", founded: 1971, headquarters: "Bogotá, Colombia" }, { name: "Colombian Ministry of Sport (Coldeportes)", founded: 1968, headquarters: "Bogotá, Colombia" }],
  majorCompetitions: [{ name: "Copa Aguila FEDECTEJO", frequency: "annual", founded: 1980, region: "Colombia (rotating)" }, { name: "Colombian National Tejo Championship", frequency: "annual", founded: 1971, region: "Colombia (rotating)" }],
  countriesPlayed: ["COL (national sport)", "PAN", "VEN", "USA (Colombian diaspora)", "ESP (diaspora)"],
  famousAthletes: ["Regional tejo lanzadores (professional players — regional recognition; not extensively internationally profiled)"],
  records: [
    { title: "Declared Colombian National Sport 2000", holder: "Colombian Congress Law 613", value: "Tejo officially declared national sport of Colombia by Law 613 of 4 September 2000", year: 2000 },
    { title: "FEDECTEJO founded 1971", holder: "Federación Colombiana de Tejo", value: "FEDECTEJO founded 1971 to standardize + regulate tejo nationally", year: 1971 },
    { title: "Muisca pre-Columbian origins ~500 CE", holder: "Muisca people (Bogotá Plateau)", value: "Sport traces to Muisca zaque + zipa era ~500 CE; gunpowder additions ~16th century post-Spanish colonial", year: 500 },
  ],
  variants: ["mini-tejo-shorter-distance-lighter-disc", "youth-tejo", "womens-tejo", "recreational-cancha-tejo-with-beer"],
  relatedSports: ["horseshoes", "petanque", "boccia", "cornhole"],
  skills: ["throwing accuracy at distance", "spin control on tejo", "wind reading (outdoor)", "safety awareness (explosions)"],
  wikipediaTitle: "Tejo (sport)",
  sources: [{ label: "Wikipedia — Tejo (sport)", url: "https://en.wikipedia.org/wiki/Tejo_(sport)", publisher: "Wikipedia" }, { label: "FEDECTEJO", url: "https://www.fedectejo.com", publisher: "Federación Colombiana de Tejo" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default tejoColombia;
