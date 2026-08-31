import type { Sport } from "@/lib/types";

export const ulamaMesoamerican: Sport = {
  id: "ulama-mesoamerican",
  slug: "ulama-mesoamerican",
  name: "Ulama (Ancient Mesoamerican Ball Game)",
  officialName: "Ulama (Traditional Mesoamerican Rubber-Ball Game)",
  aliases: ["Ulamaliztli (Nahuatl)", "Pok-a-Tok (Mayan)", "Pelota Mixteca", "Ollamalitzli"],
  shortDescription:
    "Ancient Mesoamerican rubber-ball game (~1650 BCE origins) — oldest ball sport in the Americas; still played today in Sinaloa/Oaxaca Mexico as Ulama with 3 disciplines: Ulama de Cadera (hip), Ulama de Antebrazo (forearm), Ulama de Palo (stick); ceremonial + political significance for Aztec/Maya civilizations; declared Mexican intangible heritage 2019.",
  longDescription:
    "Ulama (Nahuatl: Ulamaliztli, 'the game of the rubber ball') is the ancient Mesoamerican rubber-ball game and the oldest continuously-played ball sport in the Americas — with archaeological evidence dating to ~1650 BCE (Paso de la Amada, Chiapas, Mexico). Played by all major Mesoamerican civilizations: Olmec, Maya (Pok-a-Tok/Pitz), Zapotec, Toltec, Aztec (Ulamaliztli). Over 1,300 ball courts identified across Mesoamerica — most famous at Chichén Itzá (Yucatán, Mexico — Great Ball Court is largest at 168m × 70m), Uxmal, Tikal, Monte Albán, El Tajín. Ceremonial + political significance: game symbolized cosmic battle between light + dark, day + night, life + death; often involved elite competitors + occasionally ended in ritual sacrifice of losing team captain (Maya + Aztec eras). Modern surviving traditional version played in Sinaloa + Oaxaca states of Mexico by ~5,000-8,000 active practitioners in 3 disciplines: (1) Ulama de Cadera (hip ball) — 4-5 kg solid rubber ball struck exclusively with hips (never hands/feet); traditional 60m × 8m court; teams of 2-5; (2) Ulama de Antebrazo (forearm) — smaller ball struck with padded forearms; (3) Ulama de Palo (stick) — smallest ball struck with wooden bat. Declared Mexican intangible cultural heritage 2019. Federación Mexicana de Juegos y Deportes Autóctonos y Tradicionales (FMJDAT, founded 1974) governs surviving traditions. Traditional ball court features raised stone ring at 5-8m height (Maya) — putting ball through ring = automatic decisive victory (documented as extremely rare feat).",
  category: "traditional-cultural-sports",
  subCategory: "ancient Mesoamerican rubber-ball game (oldest in Americas)",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "ancient", popularity: "niche",
  countryOfOrigin: "MX",
  regionOfOrigin: "Mesoamerica (Mexico/Guatemala/Honduras/Belize) — Olmec + Maya + Aztec heartlands",
  estimatedOrigin: "Archaeological evidence ~1650 BCE (Paso de la Amada, Chiapas); continuous tradition to present via Sinaloa + Oaxaca; Mexican intangible heritage 2019",
  players: { min: 2, max: 10, note: "Teams typically 2-5 per side; ancient Maya games could feature 7-11 per side." },
  equipment: [{ name: "Solid rubber ball (2-4 kg — hip; smaller for forearm + stick)", description: "Made from Mesoamerican rubber tree (Castilla elastica); solid rubber; heavy + dangerous — impacts caused injuries + deaths historically." }, { name: "Fajero (heavy leather hip belt)", description: "Traditional protective hip belt worn in Ulama de Cadera to strike ball; can be 3-5 kg." }, { name: "Traditional court (60m × 8m sand/dirt)", description: "Modern surviving courts are typically dirt/sand; ancient Maya courts were stone-paved I-shaped." }, { name: "Ball court markers (analmas — end zones)", description: "Traditional end zones marked at each end of court." }],
  duration: { approximateMinutes: 90, structure: "Traditional match: play to agreed score (8 or 15 points); ~1-3 hours." },
  objective: "Score more points than opponent by successfully returning ball across court dividing line without infractions.",
  matchStructure: "Points scored (raya) when opponent commits infraction; play to agreed target (typically 8 or 15).",
  basicRules: [
    { title: "Hip-only contact (Ulama de Cadera)", body: "Ball may only be struck with hips (protected by leather fajero belt); hands/feet/head = infraction." },
    { title: "Forearm contact (Ulama de Antebrazo)", body: "Ball struck with padded forearms only." },
    { title: "Stick contact (Ulama de Palo)", body: "Wooden bat used to strike smallest ball." },
    { title: "Points scored via infractions (raya)", body: "Opposing team scores when your team commits infraction (wrong body part, out-of-bounds, missed return, ball touching ground twice)." },
    { title: "Ancient: through-ring shot = automatic win", body: "Maya rules: putting ball through 5-8m high stone ring = automatic decisive victory (documented extremely rare)." },
  ],
  scoring: {
    summary: "Points (raya) scored by opponent's infractions; first team to agreed target (8 or 15) wins.",
    winCondition: "Reach agreed point target (typically 8 or 15) before opponent.",
  },
  positions: [{ name: "Ulamero (Ulama player)", role: "Team member.", count: 3 }, { name: "Captain (Xolme)", role: "Team leader.", count: 1 }],
  officiating: { officials: ["Judge (Tequihua)", "Line Judges", "Score Keeper"], summary: "Traditional community judges + FMJDAT officials at modern events." },
  governingBodies: [{ name: "Federación Mexicana de Juegos y Deportes Autóctonos y Tradicionales (FMJDAT)", founded: 1974, headquarters: "Mexico City, Mexico" }, { name: "Instituto Nacional de Antropología e Historia (INAH) — heritage protection", founded: 1939, headquarters: "Mexico City" }],
  majorCompetitions: [{ name: "Torneo Nacional de Juegos Autóctonos (Mexican National Traditional Games Tournament)", frequency: "annual", founded: 1970, region: "Mexico (rotating states — Sinaloa + Oaxaca dominant)" }, { name: "Encuentro de Ulama de Cadera (Sinaloa)", frequency: "annual", founded: 2000, region: "Mazatlán + El Quelite, Sinaloa" }],
  countriesPlayed: ["MEX (Sinaloa + Oaxaca)", "USA (Chicano communities)", "GTM (traditional Maya regions)"],
  famousAthletes: ["Modern Sinaloa + Oaxaca traditional Ulamerlos (regional players preserving tradition)", "Ancient legendary players: named in Popol Vuh (Mayan sacred book) — Hero Twins Hunahpú + Xbalanqué played the ball game in the Underworld"],
  records: [
    { title: "Oldest continuously played ball sport (~3,600+ years)", holder: "Mesoamerican tradition", value: "Ulama traces to ~1650 BCE Paso de la Amada — oldest continuously-played ball sport in the Americas, ~3,600+ years", year: -1650 },
    { title: "Mexican Intangible Heritage 2019", holder: "SEP/INAH Mexico", value: "Ulama declared Mexican intangible cultural heritage 2019 for federal protection", year: 2019 },
    { title: "Great Ball Court Chichén Itzá — largest ever", holder: "Maya civilization", value: "Great Ball Court at Chichén Itzá (Yucatán) is largest ever built — 168m × 70m — with 8m stone rings", year: 900 },
  ],
  variants: ["ulama-de-cadera-hip", "ulama-de-antebrazo-forearm", "ulama-de-palo-stick", "pok-a-tok-mayan-classical", "pitz-yucatec-mayan", "ulamaliztli-aztec-nahuatl"],
  relatedSports: ["pelota-mixteca", "pok-ta-pok-guatemalan-revival", "aztec-tlachtli"],
  skills: ["hip-strike technique (with fajero)", "spatial + court awareness", "team coordination", "endurance across 1-3 hour matches", "ball reading + trajectory"],
  wikipediaTitle: "Ulama (game)",
  sources: [{ label: "Wikipedia — Ulama (game)", url: "https://en.wikipedia.org/wiki/Ulama_(game)", publisher: "Wikipedia" }, { label: "Wikipedia — Mesoamerican ballgame", url: "https://en.wikipedia.org/wiki/Mesoamerican_ballgame", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default ulamaMesoamerican;
