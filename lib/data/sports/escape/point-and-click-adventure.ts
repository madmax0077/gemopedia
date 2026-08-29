import type { Sport } from "@/lib/types";

export const pointAndClickAdventure: Sport = {
  id: "point-and-click-adventure",
  slug: "point-and-click-adventure",
  name: "Point-and-Click Adventure Games",
  officialName: "Point-and-Click Adventure Genre",
  aliases: ["Adventure Games", "Graphic Adventures", "P&C Adventures"],
  shortDescription:
    "Classic puzzle-driven video game genre using mouse-click interactions to solve inventory + dialogue + environmental puzzles; pioneered by LucasArts (Monkey Island, Grim Fandango) and Sierra (King's Quest); modern renaissance via Wadjet Eye + Daedalic + Amanita Design.",
  longDescription:
    "Point-and-click adventures are a puzzle-oriented video game genre defined by the player using a mouse-driven cursor to interact with a 2D or 3D scene, combining verbs (look, use, take, talk) with inventory items to solve narrative-driven puzzles. Golden era: 1987-1998 dominated by LucasArts SCUMM engine games (Maniac Mansion 1987, Secret of Monkey Island 1990, Day of the Tentacle 1993, Grim Fandango 1998) and Sierra On-Line (King's Quest series, Space Quest, Leisure Suit Larry, Quest for Glory). Decline in early 2000s as action + 3D genres dominated. Revival via Telltale Games (Sam & Max, Walking Dead — 2004-2018), Wadjet Eye Games (Blackwell series, Unavowed), Daedalic Entertainment (Deponia), Amanita Design (Machinarium, Samorost), and modern indie renaissance including Thimbleweed Park (2017 by Ron Gilbert), Return to Monkey Island (2022 by Ron Gilbert). Related to escape rooms + narrative games. Popular streaming category. Speed-runnable competitive scene exists on speedrun.com. Cross-platform: PC/Mac original, extensive mobile/iOS/Android ports.",
  category: "escape-immersive",
  subCategory: "video game genre (adventure)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (LucasArts, Sierra); modern indie global (Czech, German, UK)",
  estimatedOrigin: "Genre defined 1987 (Maniac Mansion, LucasArts SCUMM engine)",
  players: { min: 1, max: 1 },
  equipment: [{ name: "Computer / mobile device", description: "Mouse/touch input primary." }, { name: "Game itself (Steam/GOG/mobile stores)", description: "Modern digital distribution." }],
  duration: { approximateMinutes: 480, structure: "Single narrative playthrough 8-15 hours; some longer." },
  objective: "Solve narrative puzzles + advance story to reach ending(s).",
  matchStructure: "Single-player narrative campaign; no direct competition (except speedrun leaderboards).",
  basicRules: [
    { title: "Point-click cursor interaction", body: "Player clicks scene elements + inventory to trigger verbs (look/use/take/talk)." },
    { title: "Inventory-based puzzle chains", body: "Combine items in inventory + use on scene objects to progress." },
    { title: "Dialogue trees + narrative branching", body: "Some games feature branching dialogue outcomes." },
  ],
  scoring: { summary: "Story completion; some games track score (Sierra style) or morality (Telltale)." },
  positions: [{ name: "Player-character", role: "Single protagonist per game.", count: 1 }],
  governingBodies: [{ name: "Speedrun.com", founded: 2014, headquarters: "worldwide" }, { name: "Adventure Game Studio community", founded: 1997, headquarters: "worldwide" }],
  majorCompetitions: [{ name: "AGS Awards", frequency: "annual", founded: 2000, region: "worldwide (indie community)" }, { name: "Speedrun.com adventure leaderboards", frequency: "ongoing", founded: 2014, region: "worldwide" }],
  famousAthletes: ["Ron Gilbert (Monkey Island creator)", "Tim Schafer (Grim Fandango)", "Roberta Williams (Sierra King's Quest)", "Jane Jensen (Gabriel Knight)", "Dave Grossman (Day of the Tentacle)"],
  records: [
    { title: "Grim Fandango 1998 landmark", holder: "LucasArts / Tim Schafer", value: "Grim Fandango (1998) — final SCUMM-era LucasArts adventure classic", year: 1998 },
    { title: "Return to Monkey Island 2022 revival", holder: "Ron Gilbert / Terrible Toybox", value: "Return to Monkey Island (2022) — Ron Gilbert's return to franchise after 31 years", year: 2022 },
  ],
  relatedSports: ["escape-room-standard", "visual-novel", "puzzle-hunt", "walking-simulator"],
  skills: ["lateral thinking", "inventory logic", "narrative attention", "puzzle-chain reasoning"],
  wikipediaTitle: "Point-and-click adventure game",
  sources: [{ label: "Wikipedia — Point-and-click adventure game", url: "https://en.wikipedia.org/wiki/Point-and-click_adventure_game", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default pointAndClickAdventure;
