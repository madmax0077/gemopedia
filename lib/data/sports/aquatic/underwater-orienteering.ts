import type { Sport } from "@/lib/types";

export const underwaterOrienteering: Sport = {
  id: "underwater-orienteering",
  slug: "underwater-orienteering",
  name: "Underwater Orienteering",
  officialName: "CMAS Underwater Orienteering (Confédération Mondiale des Activités Subaquatiques)",
  aliases: ["Sub-Aquatic Orienteering", "Sport Diving", "Underwater Navigation"],
  shortDescription:
    "Competitive scuba discipline governed by CMAS — divers navigate underwater courses using magnetic compass + fin-kick counting for distance; multiple events including individual course, group course, distance, star; World Championships since 1967; strongest scenes Czech Republic, Russia, Ukraine, Germany, Belarus.",
  longDescription:
    "Underwater Orienteering (also called Sport Diving) is a competitive scuba diving discipline where divers navigate predetermined underwater courses using a magnetic compass mounted on wrist + counting fin kicks for distance measurement — no GPS, no visual landmarks in visibility often reduced to 3-10 meters. Governed globally by CMAS (Confédération Mondiale des Activités Subaquatiques — World Underwater Federation, founded 1959 by Jacques Cousteau + others), the sport dates to 1950s Soviet + Central European origins as military diving skill formalized into competitive sport. First World Championships 1967 (Zvíkov, Czechoslovakia). Multiple competition events: (1) Individual — Solo diver navigates 650m course with 5 buoys as checkpoints; scored on time + accuracy of surfacing at each buoy; (2) M1 — 5-buoy course with mandatory sequence; time-scored; (3) M2 — 4-buoy course with penalties for missed buoys; (4) M3 (Star course) — 3 buoys in star pattern; must surface at exact center location; (5) Team — 3 divers navigate together, must surface within 6m of each other; (6) Distance — 1,000m straight-line swim with compass; scored on straight-line accuracy; (7) Group Speed — team of 5 divers navigate 800m course; time + all-team-together requirement. Equipment specific: (a) Compass — CMAS-approved magnetic compass mounted on wrist board; (b) Distance meter — mechanical device measuring fin-kicks or towed distance wheel; (c) Standard scuba gear (BCD, regulator, tank, fins, mask, wetsuit); (d) Underwater slate for course notes. Competition venues: 3-5m depth pools OR shallow lake courses; visibility usually ~3m. Strongholds: (1) Czech Republic (dominant historic — Jaromír Ondráček multiple world champion); (2) Russia (major national scene); (3) Ukraine; (4) Belarus; (5) Germany; (6) France; (7) Poland; (8) South Korea; (9) China (emerging). World Championships biennial; European Championships alternate years. Also part of World Games (multi-sport event for non-Olympic sports) since 1997. Underwater orienteering is 'niche' but has produced numerous world-class Eastern European athletes with careers spanning decades. Notable: Jaromír Ondráček (Czech multi-time World Champion), Petra Ledecká-Hollubová (Czech Women's Champion), Yuri Shepeliuk (Ukraine), Aleksandr Shokhov (Russia).",
  category: "aquatic-sports",
  subCategory: "competitive scuba navigation with compass + distance measurement",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "niche",
  countryOfOrigin: "CZ",
  regionOfOrigin: "Central Europe + USSR (Czech + Soviet 1950s military diving origins; codified into sport 1960s)",
  estimatedOrigin: "1950s Czech + Soviet military diving skill; codified as sport 1960s; first World Championships 1967 Zvíkov Czechoslovakia; CMAS founded 1959",
  players: { min: 1, max: 5, note: "1 for individual events; 3 for team; 5 for group speed event." },
  equipment: [{ name: "Magnetic compass (CMAS-approved wrist mount)", description: "CMAS-approved magnetic compass on wrist board or console; primary navigation tool." }, { name: "Distance meter (mechanical fin-kick counter or wheel)", description: "Mechanical device counting fin kicks OR towed distance wheel; measures traveled distance in meters." }, { name: "Scuba gear (BCD + regulator + tank + fins + mask + wetsuit)", description: "Standard scuba equipment; tank typically 12L 200 bar for course duration ~30-60 min." }, { name: "Underwater slate + pencil", description: "For pre-descent course notes + real-time calculations." }, { name: "CMAS-approved buoys (course markers)", description: "Surface buoys marking checkpoints; competitors must surface within specified radius." }],
  duration: { approximateMinutes: 45, structure: "Individual event 30-60 min underwater; team relay 20-45 min; distance event 20-40 min." },
  objective: "Navigate underwater course accurately + quickly using compass + distance measurement; surface at correct locations within tolerance.",
  matchStructure: "Individual events: solo navigate specified course. Team events: 3-5 divers navigate together maintaining group cohesion + accuracy.",
  basicRules: [
    { title: "No GPS, no visual landmarks — compass + kick-count only", body: "Navigation uses only magnetic compass bearing + counted fin kicks (or mechanical distance meter); no GPS, no visual landmarks (visibility often <10m)." },
    { title: "Buoy checkpoints must be surfaced within tolerance", body: "Course buoys mark checkpoints; competitor must surface within specified radius (typically 5-10m) of each buoy in correct sequence." },
    { title: "Time + accuracy combined for scoring", body: "Scoring combines completion time with accuracy of surfacing points; time penalties added for missed buoys or wrong sequence." },
    { title: "Team events require group cohesion (surface within 6m of each other)", body: "Team + group events require all divers surface within 6m of each other at each checkpoint; team disqualified if any diver breaks formation." },
    { title: "CMAS-approved equipment mandatory", body: "All compasses, distance meters, and scuba gear must meet CMAS equipment standards for competition legality." },
  ],
  scoring: { summary: "Time-based competition with accuracy penalties: base time + time penalties for buoy misses or wrong sequence; lowest total time wins.", winCondition: "Lowest total time (base + penalties) after completing course." },
  positions: [{ name: "Individual diver (solo events)", role: "Sole competitor.", count: 1 }, { name: "Team member (team events)", role: "One of 3-5 divers moving as coordinated group.", count: 5 }, { name: "Support crew (surface + safety)", role: "Boat/shore support monitoring + safety.", count: 3 }],
  officiating: { officials: ["Chief Referee", "Course Judges (at each buoy)", "Timekeepers", "Safety Divers", "Equipment Inspector"], summary: "CMAS certified officials at World + European Championships." },
  governingBodies: [{ name: "CMAS (Confédération Mondiale des Activités Subaquatiques)", founded: 1959, headquarters: "Rome, Italy" }],
  majorCompetitions: [{ name: "CMAS Underwater Orienteering World Championships", frequency: "biennial", founded: 1967, region: "rotating (Czech, Russia, Germany, France, Ukraine, Belarus)" }, { name: "European Underwater Orienteering Championships", frequency: "biennial (alternating years to World)", founded: 1965, region: "rotating Europe" }, { name: "World Games — Sport Diving", frequency: "quadrennial", founded: 1997, region: "rotating (International World Games Association)" }],
  countriesPlayed: ["CZE (dominant historic)", "RUS", "UKR", "BLR", "DEU", "FRA", "POL", "AUT", "HUN", "SVK", "KOR (emerging)", "CHN (emerging)"],
  famousAthletes: ["Jaromír Ondráček (Czech Republic — multiple World Champion)", "Petra Ledecká-Hollubová (Czech Republic — Women's Champion)", "Yuri Shepeliuk (Ukraine — multiple World medalist)", "Aleksandr Shokhov (Russia)"],
  records: [
    { title: "First World Championships 1967 Zvíkov Czechoslovakia", holder: "CMAS", value: "First Underwater Orienteering World Championships held 1967 in Zvíkov, Czechoslovakia — origin nation as inaugural host", year: 1967 },
    { title: "Included in World Games since 1997", holder: "International World Games Association", value: "Underwater Orienteering (as 'Sport Diving') included in World Games since 1997 — multi-sport event for non-Olympic disciplines", year: 1997 },
    { title: "Czech dominance historic + present", holder: "Czech Republic Federation", value: "Czech Republic historically dominant nation in Underwater Orienteering — home of first World Championships + numerous multi-time individual World Champions", year: 2024 },
  ],
  variants: ["individual-m1-5-buoy-course", "individual-m2-4-buoy-penalty-format", "star-course-m3-center-precision", "team-3-diver-cohesion", "group-speed-5-diver-relay", "distance-1000m-straight-line"],
  relatedSports: ["scuba-diving-recreational", "orienteering-land-based", "finswimming-championship", "freediving-no-limits"],
  skills: ["compass navigation underwater", "kick-count distance calibration", "buoyancy control at speed", "team formation swimming"],
  wikipediaTitle: "Underwater orienteering",
  sources: [{ label: "Wikipedia — Underwater orienteering", url: "https://en.wikipedia.org/wiki/Underwater_orienteering", publisher: "Wikipedia" }, { label: "CMAS Sport Diving", url: "https://www.cmas.org/sports/underwater-orientation", publisher: "CMAS" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default underwaterOrienteering;
