import type { Sport } from "@/lib/types";

export const iceCrossRedBullCrashedIce: Sport = {
  id: "ice-cross-red-bull-crashed-ice",
  slug: "ice-cross-red-bull-crashed-ice",
  name: "Ice Cross (Red Bull Crashed Ice)",
  officialName: "Ice Cross Downhill World Championship / ATSX Ice Cross World Tour",
  aliases: ["Ice Cross Downhill", "Red Bull Crashed Ice", "ICX"],
  shortDescription:
    "Extreme winter sport combining ice hockey skating + downhill skiing on purpose-built urban ice tracks — 4 skaters race elbow-to-elbow down 400-500m downhill course with jumps, drops, hairpin turns; Red Bull Crashed Ice founded 2000; ATSX World Championship since 2010; iconic events at Quebec City + Saint Paul + Munich.",
  longDescription:
    "Ice Cross (also called Ice Cross Downhill or ICX; branded as 'Red Bull Crashed Ice' as premier event series) is an extreme winter sport combining ice hockey skating technique with downhill skiing racing format. Athletes wear hockey skates + hockey armor + helmets, racing 4-abreast down purpose-built urban ice tracks 400-500m long with vertical drop 50-100m, featuring jumps (2-4m), banked turns, hairpins, rollers, drops, ice waves. Invented + developed by Red Bull 2000+ as urban winter spectacle; grew into World Championship series 2010+ under ATSX (All Terrain Skate Cross federation, founded 2015). Signature event: Red Bull Crashed Ice Quebec City (annually 2006-2019 + revived; ~150,000 fans on Old Quebec cobblestones); other iconic venues Saint Paul Minnesota (2010-2019), Munich (Germany), Val di Sole (Italy), Beijing 2019. Format: qualifying time trials → 4-skater elimination heats → semifinals → final. Skaters MUST wear hockey skates (not ski boots) + full body armor including reinforced shin guards + chest protector + gloves + helmet. Top speeds: 65-80 km/h (40-50 mph) with 50-100m vertical drops. Extremely dangerous — regular crashes + injuries; some career-ending. Legendary champions: Cameron Naasz (USA — 3x World Champion 2015+2016+2019), Scott Croxall (Canada — 2x WC 2013+2014), Kyle Croxall (Canada — Scott's brother, 2x WC 2011+2012), Marco Dallago (Austria — 2018 WC), Jacqueline Legere (Canada — 4x Women's WC), Amanda Trunzo (USA — women's US star). ATSX Ice Cross World Championship annually across ~4-6 events per season. Red Bull Crashed Ice event series scaled back post-2019 due to logistics + COVID; ATSX continues season-based competition.",
  category: "winter-sports",
  subCategory: "extreme urban ice downhill racing",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "winter", era: "21st-century", popularity: "regional",
  countryOfOrigin: "AT",
  regionOfOrigin: "Austria / Global (Red Bull developed sport ~2000; ATSX 2015; global World Tour venues)",
  estimatedOrigin: "Red Bull developed sport ~2000; first Red Bull Crashed Ice 2001 Stockholm; ATSX federation 2015; World Championship formalized 2010",
  players: { min: 1, max: 4, note: "4 skaters per elimination heat; individual world championship." },
  equipment: [{ name: "Ice hockey skates (specifically NOT ski boots)", description: "Full hockey skate — provides ankle support + speed on ice; brands: Bauer, CCM, True." }, { name: "Full hockey armor + reinforced pads", description: "Chest protector + shin guards (reinforced) + elbow guards + gloves + helmet with face shield." }, { name: "Race suit (over armor)", description: "Streamlined race suit — usually team/national colors." }, { name: "Ice cross track (400-500m urban course)", description: "Purpose-built ice track with jumps + drops + banked turns; 50-100m vertical drop." }],
  duration: { approximateMinutes: 1, structure: "Single run: 30-60 seconds; event: qualifying + heats + finals ~4-6 hours." },
  objective: "Finish race first (individual heat) OR set fastest qualifying time.",
  matchStructure: "Qualifying time trials → 4-skater elimination heats (top 2 advance) → semifinals → final; top 2 per heat advance.",
  basicRules: [
    { title: "4 skaters per heat — top 2 advance", body: "4-abreast elimination format; top 2 finishers per heat advance to next round." },
    { title: "Contact allowed but reckless = penalty/DQ", body: "Rubbing legal + expected; reckless take-outs = post-race stewards' review." },
    { title: "Hockey skates only (not ski boots or figure skates)", body: "Regulated skate type; standard ice hockey skates only." },
    { title: "Full body armor mandatory", body: "Helmet + chest protector + reinforced shin guards + elbow guards + gloves mandatory." },
    { title: "Championship season points aggregate", body: "ATSX World Championship = season aggregate points across 4-6 events per season." },
  ],
  scoring: {
    summary: "Race position → season points; season aggregate → World Championship.",
    winCondition: "Most season points across World Tour events.",
    breakdown: [{ action: "1st in event final", points: "+1000" }, { action: "2nd", points: "+800" }, { action: "3rd", points: "+600" }, { action: "Semifinal + Heat placements", points: "scaled points" }],
  },
  positions: [{ name: "Ice cross skater", role: "Sole competitor.", count: 1 }, { name: "Coach + support crew", role: "Between-heats support + equipment tuning.", count: 3 }],
  officiating: { officials: ["Race Director", "Course Marshals", "Timekeeper", "Stewards Panel", "Chief Medical Officer"], summary: "ATSX certified officials + medical team." },
  governingBodies: [{ name: "ATSX (All Terrain Skate Cross)", founded: 2015, headquarters: "Berlin, Germany" }, { name: "Red Bull (event promoter, Crashed Ice branding)", founded: 1987, headquarters: "Fuschl am See, Austria" }],
  majorCompetitions: [{ name: "ATSX Ice Cross World Championship", frequency: "annual (4-6 events per season)", founded: 2010, region: "rotating (Quebec, Minnesota, Munich, Beijing, Val di Sole)" }, { name: "Red Bull Crashed Ice Quebec City", frequency: "annual (2006-2019 + revived)", founded: 2006, region: "Quebec City, Canada — iconic Old Quebec urban course" }, { name: "Red Bull Crashed Ice Saint Paul", frequency: "annual (2010-2019)", founded: 2010, region: "Saint Paul, Minnesota, USA" }],
  countriesPlayed: ["USA", "CAN", "AUT", "SUI", "GER", "SWE", "FIN", "NOR", "CZE", "ITA"],
  famousAthletes: ["Cameron Naasz (USA — 3x World Champion 2015, 2016, 2019)", "Scott Croxall (CAN — 2x WC 2013, 2014)", "Kyle Croxall (CAN — 2x WC 2011, 2012; Scott's brother)", "Marco Dallago (AUT — 2018 WC)", "Jacqueline Legere (CAN — 4x Women's WC 2015-2018)", "Amanda Trunzo (USA — women's star)"],
  records: [
    { title: "Cameron Naasz 3x World Champion", holder: "Cameron Naasz (USA)", value: "3-time Ice Cross World Champion (2015, 2016, 2019); considered greatest USA ice cross athlete", year: 2019 },
    { title: "Quebec City Old Quebec urban course iconic", holder: "Red Bull Crashed Ice", value: "Red Bull Crashed Ice Quebec City (2006-2019) held on Old Quebec city cobblestones — considered greatest urban ice cross venue; drew 150,000+ spectators", year: 2019 },
    { title: "First Red Bull Crashed Ice 2001 Stockholm", holder: "Red Bull", value: "First Red Bull Crashed Ice event held 2001 in Stockholm, Sweden — launched sport as global spectacle", year: 2001 },
    { title: "ATSX federation 2015", holder: "ATSX All Terrain Skate Cross", value: "ATSX federation founded 2015 (Berlin) to govern ice cross + establish season-based World Championship", year: 2015 },
  ],
  variants: ["ice-cross-downhill-standard-4-skater-heat", "individual-time-trial", "team-relay-experimental", "womens-ice-cross-parallel-championship"],
  relatedSports: ["ice-hockey", "short-track-speed-skating", "downhill-skiing", "boardercross"],
  skills: ["ice hockey skating at 65-80 km/h", "downhill line-reading", "jump-landing technique on ice", "contact-management in 4-way traffic", "urban-course adaptation"],
  wikipediaTitle: "Ice cross downhill",
  sources: [{ label: "Wikipedia — Ice cross downhill", url: "https://en.wikipedia.org/wiki/Ice_cross_downhill", publisher: "Wikipedia" }, { label: "Red Bull Crashed Ice", url: "https://www.redbull.com/int-en/events/red-bull-crashed-ice", publisher: "Red Bull" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default iceCrossRedBullCrashedIce;
