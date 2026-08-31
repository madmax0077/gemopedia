import type { Sport } from "@/lib/types";

export const rubiksCubeSpeedcubing: Sport = {
  id: "rubiks-cube-speedcubing",
  slug: "rubiks-cube-speedcubing",
  name: "Speedcubing (Rubik's Cube)",
  officialName: "World Cube Association (WCA) Speedcubing Championship",
  aliases: ["Rubik's Cube Speedsolving", "WCA Speedcubing", "Cubing"],
  shortDescription:
    "Competitive discipline of solving Rubik's Cube (invented 1974 by Ernő Rubik, Hungary) + related twisty puzzles at maximum speed; governed by World Cube Association (WCA) since 2004; current 3×3 world record 3.13 seconds (Max Park USA 2023); Feliks Zemdegs (AUS) considered GOAT.",
  longDescription:
    "Speedcubing is the competitive discipline of solving Rubik's Cube (invented 1974 by Hungarian architecture professor Ernő Rubik; commercialized worldwide 1980 as Rubik's Cube) + related twisty puzzles at maximum possible speed. Modern competitive era launched 1982 with the first World Rubik's Cube Championship (Budapest, Hungary — won by Minh Thai of USA with 22.95s). Governed globally by the World Cube Association (WCA, founded 2004, HQ Netherlands). WCA regulates 17 official events across various puzzles + solving methods: (1) 3×3 (standard Rubik's Cube) — flagship event; (2) 2×2, 4×4, 5×5, 6×6, 7×7 (progressively larger cubes); (3) 3×3 Blindfolded (BLD) + Multi-Blind (memorize multiple cubes then solve blindfolded); (4) 3×3 One-Handed (OH); (5) 3×3 with Feet (retired 2020); (6) Pyraminx (tetrahedral); (7) Megaminx (dodecahedral); (8) Skewb; (9) Square-1; (10) Clock (clock-based puzzle); (11) 3×3 Fewest Moves Count (FMC — solve using minimum turns). Modern 3×3 world records: Single = 3.13 seconds (Max Park USA, WCA 2023); Average of 5 = 4.05 seconds (Yiheng Wang CHN 2024). Legendary speedcubers: Feliks Zemdegs (Australia — 6x World Champion 2013+2015+; considered GOAT), Max Park (USA — current WR holder; also autism advocacy story), Yiheng Wang (China — modern star), Mats Valk (Netherlands), Yusheng Du (China — first sub-4 sec solve 3.47s), Erik Akkersdijk (Netherlands). Solving methods: CFOP (Cross-F2L-OLL-PLL — most popular), Roux, ZZ, Petrus. World Championships biennial (WCA rotates every 2 years to different continent). ~150,000+ registered WCA competitors worldwide.",
  category: "skill-toys",
  subCategory: "twisty puzzle speedsolving",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "HU",
  regionOfOrigin: "Hungary (Ernő Rubik invented Rubik's Cube 1974 Budapest)",
  estimatedOrigin: "Rubik's Cube invented 1974; first World Championship 1982 Budapest; WCA founded 2004",
  players: { min: 1, max: 1 },
  equipment: [{ name: "Speedcube (3×3 standard, tuned for speed)", description: "Modern speedcubes engineered for speed — brands include GAN, MoYu, QiYi, YJ; ~$15-$60 for competitive-grade cube." }, { name: "StackMat timer (WCA-standard)", description: "WCA-certified touch-sensor timer with 0.01s precision + release-and-touch start protocol." }, { name: "Cube lubricant (silicone-based)", description: "Applied to internal mechanism for smooth fast turning; brands: Angstrom Gravitas, Cosmic Lubricant." }, { name: "Timer mat + Cube cover (during inspection)", description: "Inspection cover + timer mat for standardized WCA setup." }],
  duration: { approximateMinutes: 1, structure: "Single solve: 3-30 seconds; average of 5 solves computed; WCA event round takes ~30 min." },
  objective: "Solve puzzle from scrambled state to solved state as fast as possible.",
  matchStructure: "WCA rounds: 5 solves per competitor; discard fastest + slowest, average the middle 3; multiple rounds cut to finalists.",
  basicRules: [
    { title: "Standard 15-second inspection", body: "Competitor gets 15 seconds to inspect scrambled cube before solving; timer starts after 15s or when hand release." },
    { title: "StackMat timer touch-release-touch protocol", body: "Both hands on timer, release to start solve, touch back after solve to stop." },
    { title: "Average of 5 solves scoring (best-of-5)", body: "5 solves; discard fastest + slowest; average middle 3." },
    { title: "WCA regulations strictly enforced", body: "Standardized cube setup, timer, inspection, +DNF (Did Not Finish) rules." },
  ],
  scoring: { summary: "Time per solve in 0.01 seconds; Average of 5 for round ranking.", winCondition: "Fastest average of 5 (or fastest single depending on event)." },
  positions: [{ name: "Speedcuber (competitor)", role: "Sole competitor.", count: 1 }, { name: "Scrambler + Judge (WCA official)", role: "Scrambles cube per WCA regulation + judges legal solve.", count: 1 }],
  officiating: { officials: ["WCA Delegate", "Judges", "Scramblers", "Runners"], summary: "WCA certified officials at all sanctioned competitions." },
  governingBodies: [{ name: "World Cube Association (WCA)", founded: 2004, headquarters: "Amsterdam, Netherlands (registered)" }],
  majorCompetitions: [{ name: "WCA World Championships", frequency: "biennial", founded: 2003, region: "rotating continents (recent: USA, Australia, France, South Korea)" }, { name: "WCA National Championships (various countries)", frequency: "annual", founded: 2005, region: "individual countries" }, { name: "Red Bull Rubik's Cube World Cup", frequency: "annual (2018-2019)", founded: 2018, region: "Boston + rotating" }],
  countriesPlayed: ["USA", "CHN", "JPN", "AUS", "NLD", "IND", "POL", "GER", "KOR", "MEX", "worldwide"],
  famousAthletes: ["Feliks Zemdegs (AUS — 6x World Champion 2013+2015+, considered GOAT)", "Max Park (USA — current 3.13s WR + autism advocacy)", "Yiheng Wang (CHN — modern rising star; multiple avg of 5 WRs)", "Mats Valk (NLD)", "Yusheng Du (CHN — first sub-4-sec 3.47s solve 2018)", "Erik Akkersdijk (NLD)", "Minh Thai (USA — first World Champion 1982)"],
  records: [
    { title: "Max Park 3.13-second WR", holder: "Max Park (USA)", value: "Current 3×3 single Rubik's Cube World Record: 3.13 seconds (Max Park, WCA 2023) — first sub-3.2 seconds", year: 2023 },
    { title: "Yiheng Wang 4.05s average of 5 WR", holder: "Yiheng Wang (CHN)", value: "Current 3×3 Average of 5 World Record: 4.05 seconds (Yiheng Wang, 2024)", year: 2024 },
    { title: "Feliks Zemdegs 6x World Champion", holder: "Feliks Zemdegs (AUS)", value: "Feliks Zemdegs 6-time Rubik's Cube World Champion (2013, 2015, 2017, 2019 events); dominant speedcuber of 2010s decade — GOAT", year: 2019 },
    { title: "First World Championship 1982 Budapest", holder: "Ernő Rubik / World Cube Association predecessor", value: "First official World Rubik's Cube Championship 1982 in Budapest, Hungary — won by Minh Thai (USA) with 22.95s", year: 1982 },
    { title: "150,000+ registered WCA competitors globally", holder: "World Cube Association", value: "150,000+ registered competitors in WCA global database; largest twisty-puzzle sport organization ever", year: 2024 },
  ],
  variants: ["3x3-flagship", "2x2-pocket-cube", "4x4-rubiks-revenge", "5x5-professor-cube", "6x6-vcube", "7x7-vcube", "3x3-blindfolded-bld", "3x3-one-handed-oh", "3x3-fmc-fewest-moves-count", "pyraminx-tetrahedral", "megaminx-dodecahedral", "skewb", "square-1", "clock"],
  relatedSports: ["kendama-competitive", "yoyo-freestyle", "juggling-competitive"],
  skills: ["algorithm memorization (100+ algorithms for CFOP method)", "look-ahead pattern recognition", "fingertricks (finger-based fast turning)", "cube-tuning + lubrication", "mental composure under time pressure"],
  strategies: [
    { title: "CFOP method (Cross-F2L-OLL-PLL) — 80%+ elite cubers use", body: "Layer-by-layer method requiring memorization of ~78 OLL + 21 PLL algorithms; average 50-60 moves per solve." },
    { title: "Roux method (alternative)", body: "Blockbuilding method requiring fewer memorized algorithms; competitive with CFOP at elite level (Kian Mansour, Alexander Lau)." },
  ],
  wikipediaTitle: "Speedcubing",
  sources: [{ label: "Wikipedia — Speedcubing", url: "https://en.wikipedia.org/wiki/Speedcubing", publisher: "Wikipedia" }, { label: "World Cube Association official", url: "https://www.worldcubeassociation.org", publisher: "WCA" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default rubiksCubeSpeedcubing;
