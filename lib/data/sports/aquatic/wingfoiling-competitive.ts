import type { Sport } from "@/lib/types";

export const wingfoilingCompetitive: Sport = {
  id: "wingfoiling-competitive",
  slug: "wingfoiling-competitive",
  name: "Wing Foiling (Wingfoil / Wing SUP)",
  officialName: "International Wingfoil Association (IWFA) / GWA Wingfoil World Tour",
  aliases: ["Wingfoiling", "Wingsurfing", "Wing SUP", "Wing Foil"],
  shortDescription:
    "Fastest-growing water sport 2020s — handheld inflatable wing (like small kite held in hands) powers rider standing on foil board that lifts above water on hydrofoil at speed; blends elements of windsurfing + kitesurfing + hydrofoil surfing; GWA Wing World Tour since 2021; Olympic sport at LA 2028 (Formula Kite category).",
  longDescription:
    "Wing Foiling (also called wingfoiling, wingsurfing, or wing SUP) is the fastest-growing water sport of the 2020s — using a handheld inflatable wing to power a rider standing on a hydrofoil-equipped board that lifts above the water at speed. The wing is a large inflatable arc (typically 3-8 sq meters) with two handles — the rider holds it in their hands like a small kite (no lines to a fixed harness point), moves it to catch wind + generate lift + thrust; the foil board underneath uses a submerged hydrofoil wing on a mast that lifts the board 30-60 cm above the water surface once critical speed (~15 kph) is reached. Origins: (1) 1980s Tom Magruder pioneered 'wind wing' concept but too early; (2) 2011 Slingshot Sports launched 'Wing SUP' as niche curiosity; (3) 2018-2019 Slingshot Slingwing + Duotone Foilwing + Naish Wing-Surfer + F-One Swing launched modern era; (4) 2020 COVID lockdowns + massive foil-board improvements caused explosive growth; (5) 2021 first GWA Wingfoil World Tour launched by Global Wingsports Association. Advantages over kitesurfing: (a) No fixed lines to shore; (b) Rider can drop wing in water without losing gear; (c) Foil board self-launches; (d) Faster to learn than kitesurfing; (e) Works in wider wind range (10-30 knots). Advantages over windsurfing: (a) Wing packs tiny for travel; (b) Lightweight rig; (c) Hydrofoil enables cruising in light wind. Modern competition disciplines: (i) Freestyle — judged aerial tricks + rotations + flips + wing-body interactions; (ii) Racing — course racing around buoys, sometimes 15-30 km distance; (iii) Big Air — highest jump measurements via Woo Sports meter; (iv) Freeride — slalom + Grand Slam formats. GWA Wingfoil World Tour visits 6-10 stops annually (Tarifa Spain, Fuerteventura Canaries, Leucate France, Cape Verde, Sardinia, Mauritius). Olympic wing foiling: World Sailing added Formula Kite (kitefoiling) 2024 Paris; wing foiling under evaluation for LA 2028. Notable athletes: Balz Müller (Switzerland — freestyle innovator), Titouan Galea (France — GWA Racing World Champion), Camille Bouyer (France — women's champion), Malo Guénolé (France — Big Air specialist), Chris MacDonald (USA), Kai Lenny (USA — waterman legend, wing foil crossover).",
  category: "aquatic-sports",
  subCategory: "wind-powered hydrofoil water sport",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "summer", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA + France (Slingshot Sports USA + Naish Hawaii + F-One France pioneered modern gear 2018-2019)",
  estimatedOrigin: "Early wind-wing concepts 1980s; modern wing foiling launched 2018-2019 by Slingshot + Naish + F-One; GWA World Tour 2021",
  players: { min: 1, max: 1, note: "Individual sport; racing has multi-rider heat starts." },
  equipment: [{ name: "Inflatable wing (3-8 sq m)", description: "Handheld inflatable arc-shaped wing with 2 handles; sizes 3-8 sq meters; brands include F-One, Duotone, Naish, Cabrinha, Ozone." }, { name: "Foil board", description: "Lightweight board 4-6 ft long with foil mast mounted underneath; volumes 40-120 liters for freestyle vs beginner." }, { name: "Hydrofoil (mast + fuselage + wings)", description: "Underwater foil system: aluminum/carbon mast 60-90cm + front wing (main lift) + rear stabilizer wing; brands include Axis, Cabrinha, Armstrong." }, { name: "Wetsuit + impact vest + leash", description: "Wetsuit for water temperature; impact vest for foil safety; leash tethering rider to board." }, { name: "Helmet (competition + big air)", description: "Helmet strongly recommended for competitive + big air; some GWA events require." }],
  duration: { approximateMinutes: 90, structure: "Freeride session 60-180 min; competition heat 15-30 min; race 20-60 min." },
  objective: "Master handheld wing propulsion + hydrofoil balance for cruising, tricks, racing, or jumps.",
  matchStructure: "Freestyle: judged 60-sec heats. Racing: fleet-start course races around buoys. Big Air: measured jump heights via Woo Sports meter.",
  basicRules: [
    { title: "Wing held in hands (no lines to fixed point)", body: "Rider holds wing by 2 handles; no fixed lines to harness or shore; wing can be dropped in water without losing gear." },
    { title: "Foil requires minimum ~15 kph to lift board", body: "Hydrofoil provides lift only above minimum speed threshold; at rest board floats normally on water." },
    { title: "Right-of-way rules like windsurfing + kitesurfing", body: "Starboard tack has right-of-way over port tack; leeward has right-of-way over windward when on same tack." },
    { title: "Freestyle judged on execution + difficulty + variety", body: "GWA Freestyle scoring rewards trick variety, execution cleanness, difficulty rating, and use of wing handling in tricks." },
  ],
  scoring: { summary: "Freestyle: 0-100 judge scores across execution + difficulty + variety. Racing: course completion time. Big Air: measured jump height in meters via Woo Sports device.", winCondition: "Freestyle: highest total judge score. Racing: fastest course time. Big Air: highest measured jump." },
  positions: [{ name: "Wing foiler (Rider)", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Head Judge (Freestyle)", "4 Freestyle Judges", "Race Committee (Racing)", "Timekeepers", "Safety Boat Crew"], summary: "GWA + IWFA certified officials at World Tour events." },
  governingBodies: [{ name: "Global Wingsports Association (GWA)", founded: 2021, headquarters: "Sardinia, Italy" }, { name: "International Wingfoil Association (IWFA)", founded: 2021, headquarters: "Netherlands" }, { name: "World Sailing (Olympic path)", founded: 1907, headquarters: "London, UK" }],
  majorCompetitions: [{ name: "GWA Wingfoil World Tour", frequency: "annual (6-10 stops)", founded: 2021, region: "worldwide (Tarifa Spain, Fuerteventura, Leucate France, Cape Verde, Sardinia, Mauritius)" }, { name: "GWA Wingfoil World Championships (season crown)", frequency: "annual", founded: 2021, region: "final GWA stop" }, { name: "Wing Foil World Cup (IWFA)", frequency: "annual", founded: 2022, region: "Europe" }, { name: "Big Air Kite Wing (Cape Town)", frequency: "annual", founded: 2020, region: "Cape Town, South Africa" }],
  countriesPlayed: ["FRA (dominant pro scene)", "ESP", "ITA", "USA", "AUS", "DEU", "GBR", "PRT", "CHE", "CPV", "MUS", "worldwide coastal + lake"],
  famousAthletes: ["Titouan Galea (France — GWA Racing World Champion)", "Camille Bouyer (France — GWA Women's World Champion)", "Balz Müller (Switzerland — Freestyle innovator)", "Malo Guénolé (France — Big Air specialist)", "Chris MacDonald (USA — pioneer)", "Kai Lenny (USA — waterman legend + wing crossover)"],
  records: [
    { title: "Fastest-growing water sport 2020s", holder: "Global wingfoil community", value: "Wing foiling recognized as fastest-growing water sport of 2020s — user base grew ~10x from 2020 to 2024 per industry estimates", year: 2024 },
    { title: "First GWA Wingfoil World Tour 2021", holder: "Global Wingsports Association", value: "First GWA Wingfoil World Tour launched 2021 with 5 stops; expanded to 10 stops by 2024 covering all major wingfoil regions", year: 2021 },
    { title: "Big Air jumps 20m+ measured", holder: "Various pro wingfoilers", value: "Top wingfoil pros regularly measure jumps 20+ meters (65+ feet) via Woo Sports meter — approaching kitesurfing Big Air standards", year: 2024 },
  ],
  variants: ["wing-foiling-freestyle-tricks", "wing-foiling-racing-course", "wing-foiling-big-air-jumps", "wing-foiling-downwinder-long-distance", "wing-surfing-no-foil-board-flat-water", "wing-snow-winter-crossover"],
  relatedSports: ["kitesurfing", "windsurfing", "hydrofoil-surfing", "stand-up-paddleboard-sup"],
  skills: ["wing handling (both hands + wing angle control)", "foil balance + pumping", "tack + gybe transitions", "trick execution (jumps + rotations + wing tricks)"],
  wikipediaTitle: "Wing foiling",
  sources: [{ label: "Wikipedia — Wing foiling", url: "https://en.wikipedia.org/wiki/Wing_foiling", publisher: "Wikipedia" }, { label: "GWA Wingfoil Tour", url: "https://www.gwakite.com/wingfoiltour", publisher: "Global Wingsports Association" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default wingfoilingCompetitive;
