import type { Sport } from "@/lib/types";

export const redBullAirRace: Sport = {
  id: "red-bull-air-race",
  slug: "red-bull-air-race",
  name: "Red Bull Air Race",
  officialName: "Red Bull Air Race World Championship",
  aliases: ["RBAR", "Red Bull Air Race World Series"],
  shortDescription:
    "Elite aerobatic air-racing championship (2003-2019) featuring aerobatic aircraft racing through inflatable pylon gates at ~370 km/h, pulling up to 12G; discontinued after 2019 season, 17 rounds spanning global iconic venues.",
  longDescription:
    "The Red Bull Air Race World Championship was an elite international air-racing series operated by Red Bull GmbH from 2003 to 2019, featuring highly modified aerobatic aircraft (Edge 540 V3, MXS-R, Zivko Edge) racing individually against the clock through a slalom-style course of inflatable pylons (Air Gates) at speeds up to 370 km/h (230 mph), enduring g-forces up to 12G. Two classes: Master Class (elite ~14-16 pilots) + Challenger Class (feeder series). Iconic venues: Abu Dhabi, Cannes, Detroit, Budapest (Danube river), Perth, Rio de Janeiro, Chiba Bay (Japan). Championship crowned annually via cumulative points. Notable champions: Paul Bonhomme (GBR, 3x champion 2009+2010+2015), Kirby Chambliss (USA, 2004+2006), Mike Mangold (USA, 2005+2007), Peter Besenyei (HUN, 2003 inaugural), Hannes Arch (AUT, 2008), Martin Šonka (CZE, 2018), Yoshihide Muroya (JPN, 2017 — first non-European/American winner). Series ended after 2019 season (Chiba Final) after Red Bull ceased sanctioning. Modern successor: Air Race World Championship (independent, launched 2024 with virtual + potentially live events).",
  category: "air-sports",
  subCategory: "aerobatic racing",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "AT",
  regionOfOrigin: "Austria (Red Bull, Salzburg); global venues",
  estimatedOrigin: "Founded 2003; championship 2003-2019 (17 seasons)",
  players: { min: 1, max: 1, note: "One pilot per race attempt; ~14-16 Master Class pilots per season." },
  equipment: [{ name: "Edge 540 V3 aerobatic aircraft", description: "Primary racing aircraft; ~408 kg dry weight, 550 hp Lycoming AEIO-540." }, { name: "MXS-R aircraft", description: "Alternative modified racer." }, { name: "Air Gates (inflatable pylons)", description: "25 m tall inflatable pylons defining slalom course." }, { name: "G-suit + helmet", description: "Pilot protective equipment for high-G maneuvers." }],
  duration: { approximateMinutes: 1, structure: "Individual race run ~60-80 seconds per pilot." },
  objective: "Complete pylon-defined course in fastest error-free time; penalties for gate infractions.",
  matchStructure: "Qualifying + head-to-head knockout brackets (Round of 14 → Round of 8 → Final 4); cumulative championship points per season.",
  basicRules: [
    { title: "Course = inflatable Air Gates in prescribed order", body: "Pilots must pass gates in correct order + orientation." },
    { title: "Time penalties for infractions", body: "Hitting pylons = +2s; incorrect gate = DQ from run." },
    { title: "G-force limits monitored", body: "Exceeding 12G = potential penalty/blackout DQ." },
    { title: "Vertical Turn Manoeuvre (VTM) mandatory", body: "Course includes signature 90-degree bank knife-edge segments." },
  ],
  scoring: { summary: "Championship = cumulative points across all rounds; individual race = fastest lap wins.", winCondition: "Season championship = pilot with most cumulative points." },
  positions: [{ name: "Master Class pilot", role: "Elite competition class.", count: 14 }, { name: "Challenger Class pilot", role: "Feeder-series pilot competing in shorter Challenger Cup.", count: 12 }],
  governingBodies: [{ name: "Red Bull GmbH (organizer 2003-2019)", founded: 1987, headquarters: "Fuschl am See, Austria" }, { name: "FAI (Fédération Aéronautique Internationale — sanctioning)", founded: 1905, headquarters: "Lausanne, Switzerland" }],
  majorCompetitions: [{ name: "Red Bull Air Race World Championship (discontinued)", frequency: "annual (2003-2019)", founded: 2003, region: "worldwide rotating venues" }],
  countriesPlayed: ["USA", "GBR", "AUT", "HUN", "CZE", "JPN", "AUS", "ESP", "BRA"],
  famousAthletes: ["Paul Bonhomme (GBR — 3x champion)", "Kirby Chambliss (USA — 2x champion)", "Peter Besenyei (HUN — inaugural champion 2003)", "Hannes Arch (AUT — 2008 champion)", "Martin Šonka (CZE — 2018 champion)", "Yoshihide Muroya (JPN — 2017 champion)"],
  records: [
    { title: "Paul Bonhomme 3-time champion", holder: "Paul Bonhomme (GBR)", value: "2009 + 2010 + 2015 World Champion; retired 2015 with 19 race wins (record)", year: 2015 },
    { title: "Series discontinued after 2019", holder: "Red Bull", value: "Final race Chiba, Japan Sept 2019; Martin Šonka won final race; Matt Hall (AUS) won 2019 championship", year: 2019 },
  ],
  variants: ["air-race-world-championship-2024"],
  relatedSports: ["formation-aerobatics", "world-aerobatic-championship", "unlimited-air-racing"],
  skills: ["low-altitude precision flying", "G-force tolerance (up to 12G)", "spatial awareness at 370 km/h", "sub-second reaction timing"],
  wikipediaTitle: "Red Bull Air Race World Championship",
  sources: [{ label: "Wikipedia — Red Bull Air Race World Championship", url: "https://en.wikipedia.org/wiki/Red_Bull_Air_Race_World_Championship", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default redBullAirRace;
