import type { Sport } from "@/lib/types";

export const senegaleseWrestlingLaamb: Sport = {
  id: "senegalese-wrestling-laamb",
  slug: "senegalese-wrestling-laamb",
  name: "Senegalese Wrestling (Laamb)",
  officialName: "Comité National de Gestion de la Lutte (CNG) — Senegal",
  aliases: ["Laamb", "Lutte Sénégalaise", "Njom", "Laamb ju Sereer"],
  shortDescription:
    "National sport of Senegal (larger than football domestically) — traditional Serer + Wolof + Diola wrestling; modern Laamb Avec Frappe adds bare-fist punching; huge outdoor stadium spectacle 30,000+ fans; superstar champions become national heroes; economic engine of Senegal.",
  longDescription:
    "Senegalese Wrestling (Laamb, Wolof for 'wrestling') is the national sport of Senegal — larger in domestic popularity, prize money, and mass appeal than football. Traces back centuries to traditional Serer + Wolof + Diola ethnic-group wrestling traditions in Senegal, Gambia, and Casamance. Two modern forms: (1) Traditional Laamb Sans Frappe (without hitting) — pure wrestling; grappling to throw opponent to ground; ancient form still practiced; (2) Laamb Avec Frappe (with hitting) — modern professional form allowing bare-fist punching between grappling exchanges; created 1920s-30s by fusion with Western boxing; dominant modern professional form. Elite Laamb bouts held in stadiums (Stade Léopold Sédar Senghor, Dakar; Stade Iba Mar Diop) with 30,000-60,000+ live spectators + national TV. Match structure: (a) Pre-fight rituals ('bakks') — champions in colorful loincloths perform ceremonial dance-boasts with drummers + griots reciting lineage; (b) Actual wrestling — win by throwing opponent to ground (any body part except foot touching); (c) Post-fight ceremony. Champions accumulate massive purse ($100,000-$500,000+ per premier bout — enormous by Senegalese standards); top wrestlers become national mega-celebrities + political influencers. Legendary champions: Yékini (Yakhya Diop — 5-year undefeated 2002-2007 as 'King of Kings'), Balla Gaye 2 (dethroned Yékini 2012), Modou Lo (current king 2019+), Bombardier (Serigne Ousmane Ndiaye), Mbaye Guèye (traditional legend), Reug Reug (rising 2024). CNG (National Wrestling Council) governs since 1994. Major promotions: Gaston Productions, Luc Nicolaï Productions, Comité National de Gestion (CNG). Recent international broadcast + African diaspora popularity growing. Economic engine — direct employment of 1000s + gaming/betting economy massive.",
  category: "combat-sports",
  subCategory: "Senegalese national wrestling + boxing hybrid",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "SN",
  regionOfOrigin: "Senegal (Serer + Wolof + Diola traditions; modern Laamb Avec Frappe 1920s-30s)",
  estimatedOrigin: "Traditional ethnic-group wrestling centuries; modern professional Laamb Avec Frappe 1920s-30s; CNG founded 1994",
  players: { min: 1, max: 2 },
  equipment: [{ name: "Traditional loincloth (nguimb)", description: "Colorful traditional cloth loincloth; often heavily decorated with amulets + gris-gris." }, { name: "Amulets + gris-gris (traditional charms)", description: "Traditional protective charms worn by wrestlers; blessed by marabout religious teachers." }, { name: "Sand-filled outdoor arena (or stadium)", description: "Traditional sand-floor arena; large modern events in stadiums with sand or dirt center." }, { name: "Traditional drum + griot accompaniment", description: "Bakks (pre-fight ceremonies) accompanied by traditional Wolof drummers + griots reciting fighter lineage." }],
  duration: { approximateMinutes: 30, structure: "Elite bout: ceremonial 30-90 min + actual wrestling 5-20 min; typically ends decisively via throw." },
  objective: "Throw opponent to ground (any body part except foot touching) to win.",
  matchStructure: "Single elimination-style challenge matches; no rounds — continuous until decisive throw or referee stoppage.",
  basicRules: [
    { title: "Throw opponent to ground = win", body: "Any body part above knee touching ground = decisive victory." },
    { title: "Laamb Avec Frappe allows punching between grapples", body: "Modern professional form: bare-fist punches legal between grappling exchanges." },
    { title: "Traditional bakks pre-fight ceremony mandatory", body: "Ceremonial dance-boasts + drumming + griot lineage-recitation precede all elite bouts." },
    { title: "Traditional amulets + gris-gris accepted", body: "Wrestlers wear traditional protective charms; part of cultural tradition." },
  ],
  scoring: { summary: "Binary decisive throw wins; no points system.", winCondition: "Throw opponent to ground OR referee stoppage." },
  positions: [{ name: "Laamb wrestler (Lutteur)", role: "Sole competitor.", count: 1 }, { name: "Marabout (spiritual advisor)", role: "Religious teacher who blesses amulets + provides spiritual support.", count: 1 }, { name: "Traditional drummers + griot (ceremonial)", role: "Bakks ceremony accompaniment.", count: 5 }],
  officiating: { officials: ["Chief Referee (Arbitre)", "Field Judges", "CNG Officials"], summary: "CNG certified officials at professional Laamb bouts." },
  governingBodies: [{ name: "Comité National de Gestion de la Lutte (CNG)", founded: 1994, headquarters: "Dakar, Senegal" }, { name: "Fédération Sénégalaise de Lutte + Disciplines Associées", founded: 1960, headquarters: "Dakar, Senegal" }],
  majorCompetitions: [{ name: "Roi des Arènes (King of the Arenas)", frequency: "annual", founded: 1970, region: "Dakar, Senegal — Stade Léopold Sédar Senghor" }, { name: "Championship of Champions", frequency: "annual", founded: 1980, region: "Senegal (rotating)" }, { name: "Individual champion challenge matches", frequency: "ongoing", founded: 1990, region: "Senegal — major stadium events" }],
  countriesPlayed: ["SEN (dominant national sport)", "GMB", "MRT", "MLI", "GIN", "SEN diaspora France + USA"],
  famousAthletes: ["Yékini (Yakhya Diop) — undefeated King of Kings 2002-2007", "Balla Gaye 2 — dethroned Yékini 2012, dominant modern-era King", "Modou Lo — current king 2019+", "Bombardier (Serigne Ousmane Ndiaye) — 1990s-2000s legend", "Mbaye Guèye — traditional era legend", "Reug Reug — rising star 2024"],
  records: [
    { title: "Yékini undefeated 2002-2007", holder: "Yékini (Yakhya Diop)", value: "Yékini reigned undefeated as 'King of Kings' Laamb champion 2002-2007 (5+ years) — considered greatest Laamb legend of modern era", year: 2007 },
    { title: "Laamb larger than football in Senegal", holder: "Senegalese sports economy", value: "Laamb generates larger domestic revenue + attention than football in Senegal — considered #1 domestic sport by all metrics", year: 2024 },
    { title: "Elite bout purses $100K-$500K+", holder: "CNG + private promoters", value: "Premier Laamb bouts generate $100,000-$500,000+ purse per fighter — enormous by Senegalese economic standards; makes champions national mega-celebrities", year: 2024 },
  ],
  variants: ["laamb-sans-frappe-traditional-pure-wrestling", "laamb-avec-frappe-modern-with-punching", "serer-wrestling-ethnic-tradition", "wolof-wrestling-njom-tradition"],
  relatedSports: ["glima-icelandic", "kushti-pehlwani-indian", "sumo", "mongolian-wrestling-bokh"],
  skills: ["throw setup (Njom traditional techniques)", "bakks ceremonial performance", "punch-defense between grapples (Avec Frappe)", "cultural + spiritual preparation"],
  wikipediaTitle: "Senegalese wrestling",
  sources: [{ label: "Wikipedia — Senegalese wrestling", url: "https://en.wikipedia.org/wiki/Senegalese_wrestling", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default senegaleseWrestlingLaamb;
