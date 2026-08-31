import type { Sport } from "@/lib/types";

export const jaiAlaiBasque: Sport = {
  id: "jai-alai-basque",
  slug: "jai-alai-basque",
  name: "Jai Alai (Basque Pelota)",
  officialName: "International Federation of Basque Pelota (FIPV)",
  aliases: ["Cesta Punta", "Fastest Ball Sport", "Basque Pelota"],
  shortDescription:
    "Basque ball sport played in three-walled fronton court using cesta (curved wicker basket) strapped to hand; players hurl hard rubber pelota at 300 km/h+ against front wall; fastest ball sport in world (Guinness confirmed 302 km/h); historic betting scene Miami + Connecticut USA; Basque national game.",
  longDescription:
    "Jai Alai (Basque: 'happy festival'), also called Cesta Punta, is the fastest ball sport in the world — Guinness World Record-confirmed pelota speeds of 302 km/h (188 mph). Played in a three-walled 'fronton' court (front wall 'frontis' + left side wall 'pared izquierda' + back wall 'rebote'), typically 60m long × 15m wide × 12m high — largest ball court in professional sport. Signature equipment: cesta (curved wicker basket ~65cm long) strapped to right hand — extends player's reach + enables catching + hurling ball at extreme velocity. Ball ('pelota', 'pilota') is 5cm hard rubber core wrapped in goatskin, ~125-140g. Two players or two-team doubles face off — one team serves by bouncing ball on ground + hurling off cesta into frontis; opposing team must catch + return before ball bounces twice. Point scored when opponent fails legal return, ball leaves court, or double-bounces. Games typically played to 7 or 9 points. Origins: (1) Traced to Basque country (northern Spain + southwestern France) ~13th century; earliest pelota forms; (2) Cesta invented ~1850s by Juan Dithurbide in Sainte-Pée-sur-Nivelle, France; (3) Codified as modern Cesta Punta professional sport late 1800s; (4) Massive expansion to Cuba (Havana Fronton 1900s), Mexico, Philippines, and USA (Miami Jai Alai 1926-2019, Dania Beach 1953, Hartford CT, Bridgeport CT — professional Frontons with pari-mutuel betting); (5) Peak popularity 1970s-80s USA before decline due to legal gambling changes; (6) Miami Jai Alai (Magic City Fronton) closed 2019 ending US pro era; only US professional venue remaining is limited seasonal play. Basque heartland still thrives: Federation of Basque Pelota (FIPV) governs; Jai Alai Frontón Astelena in Eibar + Frontón Adarraga in Logroño active pro circuits. Notable players: Joseba Ezkurra (Basque legend), Xala (Xabier Zabaleta — 2000s multiple World Champion), Ogueta (10x World Champion 1980s-90s), Erik (Miami era star), Bolívar (Cuban legend of 1950s Havana). World Championships since 1952 (biennial). Also part of Pan American Games since 1990.",
  category: "traditional-cultural-sports",
  subCategory: "Basque three-walled pelota with wicker basket cesta",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "medieval", popularity: "regional",
  countryOfOrigin: "ES",
  regionOfOrigin: "Basque Country (northern Spain + southwestern France)",
  estimatedOrigin: "Pelota traced to Basque region ~13th century; cesta invented 1850s Sainte-Pée-sur-Nivelle France by Juan Dithurbide; modern Cesta Punta codified late 1800s; FIPV founded 1929",
  players: { min: 1, max: 4, note: "1v1 singles or 2v2 doubles ('paired' teams)." },
  equipment: [{ name: "Cesta (curved wicker basket)", description: "Curved wicker basket ~65cm long strapped to player's right hand via leather glove; used to catch + hurl ball." }, { name: "Pelota (hard rubber ball)", description: "5cm hard rubber core wrapped in goatskin; ~125-140g; capable of reaching 300+ km/h." }, { name: "Fronton court (60 × 15 × 12m)", description: "Three-walled court with front wall (frontis), left side wall, back wall (rebote); largest professional ball court in sport." }, { name: "Helmet (mandatory since injuries)", description: "Padded helmet mandatory since deaths + serious injuries from pelota impacts; standard equipment." }, { name: "Long pants + team-colored jersey", description: "Traditional white pants + team-colored jersey shirt; identifies competing teams/players." }],
  duration: { approximateMinutes: 30, structure: "Game 7 or 9 points; typically 15-30 min; tournament full evening 6-10 games." },
  objective: "Score more points than opponent by returning ball successfully; ball must strike front wall + return within court boundaries without double-bouncing.",
  matchStructure: "Round-robin or elimination format; individual games 7 or 9 points; players/teams rotate in-and-out (Quiniela format common).",
  basicRules: [
    { title: "Ball must strike front wall (frontis) on serve + return", body: "Every serve + return shot must hit the front wall directly (not other walls first)." },
    { title: "Return ball before double-bounce (on either wall)", body: "Ball may bounce once on floor before return; two bounces = point to server team." },
    { title: "Cesta catches + hurls in single motion (no holding)", body: "Ball must be caught + released from cesta in one continuous motion; holding ball in cesta = fault." },
    { title: "Court out-of-bounds lines = fault", body: "Ball landing outside court boundaries or hitting protective netting = fault (point to opponent)." },
    { title: "Quiniela rotation (multi-team format)", body: "Common Fronton format: 8 teams rotate in-and-out of court playing single points; winner stays, loser rotates to end of queue." },
  ],
  scoring: { summary: "1 point per successful play against opponent; games typically 7 or 9 points; Quiniela pari-mutuel format used for pro betting.", winCondition: "First to 7 or 9 points (specified per game)." },
  positions: [{ name: "Delantero (Front-court player)", role: "Doubles: player positioned closer to front wall; primary offensive shooter.", count: 1 }, { name: "Zaguero (Back-court player)", role: "Doubles: player positioned deeper in court; retrieval + long-shot specialist.", count: 1 }, { name: "Individual player (singles)", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Chief Referee (Juez)", "Line Judges (2-4)", "Scorer"], summary: "FIPV certified officials at World Championships + Fronton officials at pro leagues." },
  governingBodies: [{ name: "International Federation of Basque Pelota (FIPV)", founded: 1929, headquarters: "San Sebastián, Spain (Basque Country)" }, { name: "Federación Española de Pelota (Spain)", founded: 1928, headquarters: "Madrid, Spain" }, { name: "Fédération Française de Pelote Basque (France)", founded: 1921, headquarters: "Anglet, France" }],
  majorCompetitions: [{ name: "World Basque Pelota Championships (FIPV)", frequency: "quadrennial", founded: 1952, region: "rotating (Spain, France, Mexico, USA, Argentina)" }, { name: "Pan American Games — Basque Pelota", frequency: "quadrennial", founded: 1990, region: "Americas" }, { name: "Frontón Astelena Eibar Pro Circuit", frequency: "annual", founded: 1904, region: "Eibar, Basque Country, Spain" }, { name: "Miami Jai Alai (defunct 2019)", frequency: "annual (until 2019)", founded: 1926, region: "Miami, Florida, USA" }],
  countriesPlayed: ["ESP (Basque heartland)", "FRA (French Basque)", "MEX", "PHL (Philippines historic)", "USA (historic Miami + Connecticut Frontons; largely defunct 2019)", "ARG", "CUB (Havana Fronton historic; now defunct)", "URY", "CHL"],
  famousAthletes: ["Joseba Ezkurra (Basque legend)", "Xala/Xabier Zabaleta (2000s multi World Champion)", "Ogueta (10x World Champion 1980s-90s)", "Erik (Miami-era USA star)", "Bolívar (1950s Cuban legend)", "Panpi (2010s champion)"],
  records: [
    { title: "Fastest ball sport — 302 km/h (188 mph) confirmed", holder: "Guinness World Records", value: "Jai Alai holds Guinness World Record for fastest ball sport — pelota measured at 302 km/h (188 mph) confirmed multiple times", year: 2013 },
    { title: "Miami Jai Alai closed 2019 ending US pro era", holder: "Magic City Casino Miami", value: "Miami Jai Alai (Magic City Fronton) closed permanently December 2019 ending US professional jai alai era after 93 years", year: 2019 },
    { title: "Largest ball court in professional sport (60m)", holder: "Basque Pelota Fronton", value: "Standard cesta punta Fronton court measures 60m long × 15m wide × 12m high — largest professional ball court in world", year: 2024 },
  ],
  variants: ["cesta-punta-fronton-3-wall-60m", "trinquete-4-wall-shorter-court", "pelota-mano-bare-hand-variant", "pala-corta-wooden-paddle-variant", "share-eskuz-3-wall-doubles"],
  relatedSports: ["squash", "racquetball", "handball-american", "pelota-valenciana"],
  skills: ["cesta catch-and-hurl technique", "wall angle reading", "positioning (delantero vs zaguero)", "extreme reflexes for 300km/h returns"],
  wikipediaTitle: "Jai alai",
  sources: [{ label: "Wikipedia — Jai alai", url: "https://en.wikipedia.org/wiki/Jai_alai", publisher: "Wikipedia" }, { label: "Federación Internacional de Pelota Vasca", url: "https://www.fipv.net", publisher: "FIPV" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default jaiAlaiBasque;
