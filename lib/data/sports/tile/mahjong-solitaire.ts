import type { Sport } from "@/lib/types";

export const mahjongSolitaire: Sport = {
  id: "mahjong-solitaire",
  slug: "mahjong-solitaire",
  name: "Mahjong Solitaire",
  officialName: "Mahjong Solitaire (Shanghai / Turtle)",
  aliases: ["Shanghai", "Taipei Mahjong", "Turtle Mahjong", "Chinese Solitaire"],
  shortDescription:
    "Single-player tile-matching puzzle using 144 mahjong tiles stacked in symmetric layouts (Turtle, Dragon, Pyramid) — clear all tiles by removing matched pairs. Not related to traditional multiplayer mahjong (except tile set). Iconic Windows Mahjong Titans (2007) + Microsoft's included Solitaire pack.",
  longDescription:
    "Mahjong Solitaire is a single-player tile-matching puzzle game — despite the name, unrelated to traditional 4-player Chinese mahjong except for using its 144-tile set (36 characters + 36 dots + 36 bamboos + 16 winds + 12 dragons + 8 flowers + seasons). Tiles are stacked in symmetric layout patterns (most famously the 'Turtle' layout: 4-layer pyramid + horizontal + vertical tails; also 'Dragon', 'Pyramid', 'Cascade' layouts). Player removes matched pairs of identical tiles (except flowers/seasons which match any flower/season) — but only tiles that are 'free' (no tile above, no tile immediately left AND right). Goal: clear all 144 tiles. Not always solvable — random shuffling can produce dead layouts. Invented by Brodie Lockard 1981 (as 'Mah-Jongg' for PLATO computer system, University of Illinois). Popularised by Nintendo Shanghai 1986 + Microsoft Windows 3.1 (1990) which shipped Mahjong Solitaire. Microsoft Mahjong Titans (Windows Vista 2007 + Windows 7) reached hundreds of millions of players. Competitive speedrun scene exists (fastest time to clear standard Turtle layout) on Speedrun.com. Free browser + mobile app variants have hundreds of millions of downloads.",
  category: "tile-games",
  subCategory: "single-player tile-matching puzzle",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Brodie Lockard, University of Illinois)",
  estimatedOrigin: "Invented 1981 by Brodie Lockard on PLATO computer system; popularised by Nintendo Shanghai 1986 + Windows 3.1 1990",
  players: { min: 1, max: 1, note: "Single-player only." },
  equipment: [
    { name: "144-tile mahjong set", description: "Standard Chinese mahjong 144-tile set — physical or digital." },
    { name: "PC / mobile / browser", description: "Most commonly played digitally; Windows built-in Mahjong Titans, mobile apps, browser-based free versions." },
    { name: "Layout template (Turtle, Dragon, Pyramid)", description: "Various symmetric stack layouts define starting position." },
  ],
  duration: { approximateMinutes: 20, structure: "Standard Turtle solve 10-30 min for casual player; speedrun sub-3 min possible." },
  objective: "Clear all 144 tiles by removing matched pairs of free (accessible) tiles.",
  matchStructure: "Single puzzle solve; typically play multiple layouts per session.",
  basicRules: [
    { title: "Remove matched pairs of free tiles", body: "Match two identical tiles that are both 'free' (no tile above, no tile immediately left AND right blocking)." },
    { title: "Flowers + seasons match any flower/season", body: "Flowers (4 flowers) + seasons (4 seasons) can match any other flower/season — flexible pair rule." },
    { title: "Not always solvable", body: "Random shuffling may produce dead layouts — some digital versions guarantee solvable start; others don't." },
  ],
  advancedRules: [
    { title: "Undo + hint features (digital)", body: "Most digital versions offer Undo (rewind moves) + Hint (highlight next match) — used or disabled per user preference." },
    { title: "Timer + score modes", body: "Free versions typically un-timed; competitive versions timed for high-score." },
    { title: "Layout variety (Turtle / Dragon / Pyramid / custom)", body: "Different layouts change difficulty + strategy." },
  ],
  scoring: {
    summary: "Standard: clear all 144 tiles = win. Time + move count tracked for high-score.",
    winCondition: "Clear all 144 tiles.",
    breakdown: [{ action: "Puzzle solved", points: "Win + time/move recorded" }, { action: "Dead layout", points: "Restart or new layout" }],
  },
  penalties: [
    { title: "Dead layout (no valid moves)", body: "Cannot continue; restart layout or shuffle." },
    { title: "Invalid match attempt", body: "Nothing happens; move not counted." },
  ],
  positions: [{ name: "Mahjong Solitaire Player", role: "Solo puzzle-solver.", count: 1 }],
  officiating: { officials: ["None — self-contained puzzle"], summary: "No officials; Speedrun.com moderators for competitive time verification." },
  governingBodies: [
    { name: "Speedrun.com (community speedrun leaderboards)", founded: 2013, headquarters: "worldwide (community-run)" },
  ],
  majorCompetitions: [
    { name: "Speedrun.com Mahjong Solitaire leaderboards", frequency: "ongoing", founded: 2015, region: "worldwide (community)" },
  ],
  countriesPlayed: ["global — universally available via Windows + mobile + browser"],
  famousAthletes: ["Brodie Lockard (inventor, 1981)", "Community speedrunners"],
  records: [
    { title: "Invented 1981 by Brodie Lockard", holder: "Brodie Lockard", value: "First implementation as 'Mah-Jongg' on PLATO computer system at University of Illinois", year: 1981 },
    { title: "Windows Mahjong Titans (Vista 2007)", holder: "Microsoft", value: "Windows Vista + 7 shipped Mahjong Titans, reaching hundreds of millions of installed users", year: 2007 },
    { title: "Nintendo Shanghai 1986", holder: "Activision / Sunsoft", value: "Nintendo Shanghai (1986) popularised the game beyond PLATO — signature 'Shanghai' brand", year: 1986 },
  ],
  variants: ["turtle-layout", "dragon-layout", "pyramid-layout", "cascade-layout", "custom-layouts"],
  relatedSports: ["mahjong", "sichuan-mahjong", "solitaire-klondike", "shanghai"],
  skills: ["pattern recognition", "spatial reasoning", "planning ahead (tile-removal order)", "matching-pair memory"],
  strategies: [
    { title: "Match higher-layer tiles first when possible", body: "Prefer matching top-layer tiles first — frees more tiles below for future matches." },
    { title: "Save flexible flowers/seasons", body: "Flowers + seasons can match any other flower/season — save them for late-game when stuck." },
    { title: "Avoid opening buried triples", body: "Matching one of 3 identical tiles buried behind others can leave last one stuck — check accessibility first." },
  ],
  terminology: [
    { term: "Turtle", meaning: "Most iconic layout — 4-layer pyramid + horizontal + vertical tails" },
    { term: "Free tile", meaning: "Tile with no tile above + not blocked on both left AND right sides" },
    { term: "Flowers / Seasons", meaning: "Flexible-pair tiles" },
    { term: "Dead layout", meaning: "No valid moves remain but not all tiles removed" },
    { term: "Shanghai", meaning: "Original branded name for the digital game" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Small layout + hints enabled", body: "Small 20-30 tile puzzles + hint system on." }] },
    { level: "intermediate", steps: [{ title: "Full Turtle no-hints", body: "Standard 144-tile Turtle layout without hints." }] },
    { level: "advanced", steps: [{ title: "Speedrun sub-3 min / complex layouts", body: "Speedrun Turtle sub-3 min; solve challenging layouts (Cascade, custom)." }] },
  ],
  faq: [
    { question: "Is Mahjong Solitaire the same as Chinese mahjong?", answer: "No — despite using the same 144-tile set, they are completely different games. Chinese mahjong is a 4-player rummy-like tile game. Mahjong Solitaire is a single-player tile-matching puzzle invented in 1981 by Brodie Lockard." },
    { question: "Are all Mahjong Solitaire puzzles solvable?", answer: "Not always. Random shuffling can produce dead layouts (no valid final matches). Most digital versions offer 'guaranteed solvable' modes that ensure at least one solution path exists from start." },
  ],
  wikipediaTitle: "Mahjong solitaire",
  sources: [{ label: "Wikipedia — Mahjong solitaire", url: "https://en.wikipedia.org/wiki/Mahjong_solitaire", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default mahjongSolitaire;
