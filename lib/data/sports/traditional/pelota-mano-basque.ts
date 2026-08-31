import type { Sport } from "@/lib/types";

export const pelotaManoBasque: Sport = {
  id: "pelota-mano-basque",
  slug: "pelota-mano-basque",
  name: "Pelota Mano (Basque Bare-Hand Pelota)",
  officialName: "Fédération Internationale de Pelota Vasca (FIPV) — Pelota Mano",
  aliases: ["Esku Pilota", "Pelota Vasca a Mano", "Bare-Hand Basque Pelota"],
  shortDescription:
    "Ancient Basque bare-hand ball sport — most 'pure' pelota discipline; players strike hard rubber ball against fronton wall using only bare hands (no glove, no bat, no racquet); 1v1 or 2v2 in 30-36m walled court; premier Basque cultural sport with weekly professional matches in Bilbao + San Sebastián; requires immense hand toughening.",
  longDescription:
    "Pelota Mano (Basque: Esku Pilota, 'hand pelota') is the most 'pure' + demanding discipline of the Basque pelota family — players strike a hard rubber ball against a fronton wall using ONLY their bare hands, no glove or protection. Governed by FIPV (Fédération Internationale de Pelota Vasca) as one of pelota's oldest disciplines; the ancestral form from which all other pelota variants (jai alai, remonte, pala) descend. Traces to Basque country (northern Spain + southwestern France) 13th century + earlier — original pelota played simply by hitting ball against church walls in village squares. Modern professional Pelota Mano played in specialized courts: (1) Fronton (30-36m long × 10-12m wide, front wall + left wall + back wall — 3-walled); or (2) Trinquete (smaller 25-30m enclosed 4-walled court with sloped roof edges). Uses signature 'pelota mano' ball — small hard rubber core wrapped in kid-leather; ~50-55mm diameter, ~90-105g; hits with extreme velocity + hand shock; hand toughening critical (professional players tape hands + often develop callused + reinforced hand skin). Match formats: (a) 1v1 individual (mano-a-mano); (b) 2v2 doubles (parejas — one 'delantero' front-court + one 'zaguero' back-court per team). Games typically played to 22 or 25 points (11 or 13 in shorter formats). Points scored when: (i) opponent fails legal return; (ii) ball bounces twice; (iii) ball hits net or out-of-bounds. Professional Pelota Mano major scene: (1) LEP-Aspe + Baiko empresas (Basque promoters) — weekly professional matches broadcast on ETB (Basque public television) drawing 30-40% viewership; (2) Manomanista Championship — annual individual title (Spanish word for 'mano-a-mano'); most prestigious pelota title; recent winners include Aimar Olaizola (multiple), Juan Martínez de Irujo, Jokin Altuna, Iker Irribarria; (3) Cuatro y Medio — 'Four and a Half' individual championship on shorter court format; (4) Parejas — doubles championship. Legendary pelotaris: (1) Julián Retegi (Basque legend; 6x Manomanista Champion 1980s-90s + record 8-year champion streak); (2) Aimar Olaizola (multiple Manomanista 2000s); (3) Juan Martínez de Irujo; (4) Jokin Altuna (2020s dominant). Basque cultural centrality: (a) Every Basque village has fronton; (b) Church walls historically served as first frontons; (c) Sunday match viewing is family + village tradition. Also played historically in Latin America (Argentina, Cuba, Mexico, Philippines) but declining outside Basque heartland.",
  category: "traditional-cultural-sports",
  subCategory: "Basque bare-hand ball sport against fronton wall",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "medieval", popularity: "regional",
  countryOfOrigin: "ES",
  regionOfOrigin: "Basque Country (northern Spain + southwestern France) — 13th century origins",
  estimatedOrigin: "13th century Basque villages hitting ball against church walls; formalized modern rules late 19th century; FIPV founded 1929; modern professional era from ~1900s",
  players: { min: 1, max: 4, note: "1v1 individual (mano-a-mano) or 2v2 doubles (parejas)." },
  equipment: [{ name: "Pelota mano ball (hard rubber + leather)", description: "Small hard rubber core wrapped in kid-leather; ~50-55mm diameter, ~90-105g weight; extremely hard + fast when hit; causes hand shock." }, { name: "Hand tape + hand padding (professional)", description: "Professional pelotaris tape their striking hand extensively + wear small hand pads for shock absorption; hand toughening + callus development critical." }, { name: "Fronton court (30-36m × 10-12m, 3-wall)", description: "Standard fronton with front wall (frontis), left wall (pared izquierda), back wall (rebote); some variants use trinquete (smaller 4-wall)." }, { name: "White pants + colored shirt uniform", description: "Traditional white pants + team-colored shirt (red/blue for red/blue teams historically)." }, { name: "Rope shoes (traditional) or modern athletic shoes", description: "Historically traditional rope-soled Basque shoes (alpargatas); modern professionals wear grippy court shoes." }],
  duration: { approximateMinutes: 45, structure: "Game to 22 or 25 points; typically 30-90 min; tournament evening 4-6 hours with multiple matches." },
  objective: "Score more points than opponent by successful returns; opponents fail to return, hit ball out, or double-bounce = point.",
  matchStructure: "Serve alternates by point-winner; games play to 22, 25, or 30 depending on format; tournament formats round-robin + knockout.",
  basicRules: [
    { title: "Ball must strike front wall on serve + all returns", body: "Every serve + return shot must directly hit the front wall (frontis); hitting other walls first = fault." },
    { title: "Return ball before double-bounce", body: "Ball may bounce once on floor before return; second bounce = point to opponent." },
    { title: "Bare-hand striking only (no glove, no bat)", body: "Ball may only be struck with bare hand — no glove, no bat, no racquet; hand contact must be with palm/fingers (not fist)." },
    { title: "Out-of-bounds lines = point to opponent", body: "Ball landing outside marked court boundaries or into protective netting above = point to opponent." },
    { title: "Doubles: partners cannot both strike same ball", body: "In parejas doubles, only one partner may strike each return; if both touch = point to opponent." },
  ],
  scoring: { summary: "1 point per successful play against opponent; games to 22 or 25 points; sudden-death at final point in some formats.", winCondition: "First to specified point total (typically 22 or 25)." },
  positions: [{ name: "Delantero (Front-court player)", role: "Doubles: front-court primary offensive shooter; typically shorter faster player.", count: 1 }, { name: "Zaguero (Back-court player)", role: "Doubles: back-court deep retriever + long-shot specialist; typically stronger armed player.", count: 1 }, { name: "Individual (mano-a-mano)", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Chief Referee (Juez)", "Line Judges (2-4)", "Scorer", "Match Delegate"], summary: "FIPV certified officials at professional matches + World Championships." },
  governingBodies: [{ name: "Fédération Internationale de Pelota Vasca (FIPV)", founded: 1929, headquarters: "San Sebastián, Spain (Basque Country)" }, { name: "Federación Española de Pelota", founded: 1928, headquarters: "Madrid, Spain" }, { name: "Fédération Française de Pelote Basque", founded: 1921, headquarters: "Anglet, France" }, { name: "LEP-Aspe + Baiko empresas (Basque professional promoters)", founded: 1990, headquarters: "Basque Country, Spain" }],
  majorCompetitions: [{ name: "Manomanista Championship (Individual)", frequency: "annual", founded: 1940, region: "Basque Country, Spain" }, { name: "Cuatro y Medio Championship (Individual short-court)", frequency: "annual", founded: 1950, region: "Basque Country" }, { name: "Parejas Championship (Doubles)", frequency: "annual", founded: 1950, region: "Basque Country" }, { name: "World Basque Pelota Championships (FIPV)", frequency: "quadrennial", founded: 1952, region: "rotating international" }, { name: "Weekly professional matches ETB television", frequency: "weekly", founded: 1990, region: "Bilbao + San Sebastián + Pamplona, Basque Country" }],
  countriesPlayed: ["ESP (Basque + Navarre dominant)", "FRA (French Basque)", "MEX", "ARG (declining diaspora)", "PHL (historic)", "CUB (historic)", "USA (small Basque diaspora scene)"],
  famousAthletes: ["Julián Retegi (Basque legend — 6x Manomanista Champion 1980s-90s; 8-year record streak)", "Aimar Olaizola (multiple Manomanista 2000s)", "Juan Martínez de Irujo (multi-time champion)", "Jokin Altuna (2020s dominant)", "Iker Irribarria (recent champion)", "Xabier Zabaleta 'Xala' (jai alai + mano crossover)"],
  records: [
    { title: "Julián Retegi 6x Manomanista Champion (8-year streak)", holder: "Julián Retegi (Basque)", value: "Julián Retegi of Basque Country won 6 Manomanista Championships in 1980s-90s including record 8-year streak — considered greatest pelota mano player ever", year: 1995 },
    { title: "Most pure + oldest pelota discipline", holder: "Basque pelota tradition", value: "Pelota Mano is oldest + most 'pure' Basque pelota discipline — ancestral form from which jai alai + remonte + pala + all other variants descended", year: 1300 },
    { title: "ETB television 30-40% viewership for Sunday matches", holder: "Basque public television", value: "Professional Pelota Mano matches broadcast Sundays on ETB Basque public TV attract 30-40% viewership among Basque households — massive cultural media presence", year: 2024 },
  ],
  variants: ["mano-individual-1v1-manomanista", "mano-doubles-2v2-parejas", "cuatro-y-medio-individual-short-court", "trinquete-mano-4-wall-court-variant"],
  relatedSports: ["jai-alai-basque", "handball-american", "squash", "racquetball", "pelota-valenciana"],
  skills: ["bare-hand hitting technique (avoid injury)", "wall angle reading + shot placement", "hand toughening + callus management", "positional tactics (delantero vs zaguero)"],
  wikipediaTitle: "Basque pelota",
  sources: [{ label: "Wikipedia — Basque pelota", url: "https://en.wikipedia.org/wiki/Basque_pelota", publisher: "Wikipedia" }, { label: "FIPV Federación Internacional de Pelota Vasca", url: "https://www.fipv.net", publisher: "FIPV" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default pelotaManoBasque;
