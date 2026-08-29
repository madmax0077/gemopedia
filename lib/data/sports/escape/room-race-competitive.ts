import type { Sport } from "@/lib/types";

export const roomRaceCompetitive: Sport = {
  id: "room-race-competitive",
  slug: "room-race-competitive",
  name: "Competitive Escape Room Racing",
  officialName: "Escape Room Competition (Red Bull Escape Room / Red Bull Mind Gamers)",
  aliases: ["Escape Room Championship", "Live Escape Racing", "Red Bull Mind Gamers"],
  shortDescription:
    "Teams (typically 4) race identical or mirrored escape-room sets in fastest completion time; premier events include Red Bull Mind Gamers World Final and TERPECA (Top Escape Rooms Enthusiasts' Choice Awards).",
  longDescription:
    "Competitive escape room racing is the sport-format extension of the live escape-room genre, in which teams (typically 4-6 players) compete head-to-head in identical, mirrored, or standardized escape rooms with the fastest total time (or highest puzzle-completion count within a time cap) winning. Key sanctioning: Red Bull Mind Gamers (founded 2016; global tournament series 2017-2019 with World Final at MIT; format returned virtually 2020+); TERPECA (Top Escape Rooms Enthusiasts' Choice Awards, founded 2017 — annual awards ranking best rooms globally); ERChampionship.com (US-based); ExitGames Fest (Europe). Team roles emerge: searcher, puzzler, communicator, timer. Modern competitive rooms feature ~40-60 min duration, 6-10 puzzle chains, mixture of physical, mental, math/logic + narrative reveal. Growing esports crossover with 'digital escape rooms' (browser-based, Zoom-mediated). Notable teams: The Logic Escapes Me (UK community), Room Escape Artist (US critics), various regional pro tournament winners.",
  category: "escape-immersive",
  subCategory: "competitive escape room",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "AT",
  regionOfOrigin: "Austria/Global (Red Bull); USA (TERPECA)",
  estimatedOrigin: "First escape rooms Japan 2007 (SCRAP); competitive format Red Bull Mind Gamers 2016",
  players: { min: 4, max: 6, note: "Typical team size 4-6." },
  equipment: [{ name: "Standardized escape room set", description: "Identical/mirrored physical room with puzzles, locks, props." }, { name: "Timer + audio-visual feed", description: "For officials + spectators." }],
  duration: { approximateMinutes: 45, structure: "Time cap ~40-60 min; winning team = fastest completion or most puzzles solved." },
  objective: "Solve all puzzles + open final lock to 'escape' in fastest time.",
  matchStructure: "Head-to-head heats OR simultaneous mirrored rooms with objective ranking by time.",
  basicRules: [
    { title: "Standardized identical rooms", body: "All teams face identical (or verified-mirror) room layout + puzzles." },
    { title: "Time cap enforced", body: "Rooms end at cap; ranking = escaped teams first (by time), then non-escaped by puzzles solved." },
    { title: "No external help / outside communication", body: "Rooms sealed; hint quotas standardized (e.g., 3 hints per team costing time penalties)." },
  ],
  scoring: { summary: "Time-based ranking; hint penalties added to completion time.", winCondition: "Fastest team to complete room OR most puzzle stages if no team escapes." },
  positions: [{ name: "Team captain/communicator", role: "Coordinates puzzle assignments + hint requests.", count: 1 }, { name: "Puzzle solver", role: "Focus on logic + math/word puzzles.", count: 2 }, { name: "Searcher", role: "Physical exploration + prop discovery.", count: 1 }],
  governingBodies: [{ name: "Red Bull Mind Gamers", founded: 2016, headquarters: "Salzburg, Austria" }, { name: "TERPECA", founded: 2017, headquarters: "USA (community-run)" }],
  majorCompetitions: [{ name: "Red Bull Mind Gamers World Final", frequency: "biennial", founded: 2016, region: "MIT (Boston) / rotating" }, { name: "TERPECA Awards", frequency: "annual", founded: 2017, region: "worldwide (community-voted)" }],
  countriesPlayed: ["USA", "GBR", "DEU", "HUN", "JPN", "AUT"],
  famousAthletes: ["Ally & David Spitz (Room Escape Artist)", "The Logic Escapes Me (UK community)"],
  records: [
    { title: "Red Bull Mind Gamers 2017 World Final winners", holder: "MIT-hosted world final", value: "First-ever escape-room world final Salzburg → MIT circuit", year: 2017 },
    { title: "TERPECA #1 Room 2023", holder: "'Ferryman' (Lock & Key Escape, Norway)", value: "TERPECA 2023 #1-ranked escape room globally", year: 2023 },
  ],
  relatedSports: ["escape-room-standard", "puzzle-hunt", "point-and-click-adventure"],
  skills: ["parallel puzzle solving", "team communication", "spatial reasoning", "time management"],
  wikipediaTitle: "Escape room",
  sources: [{ label: "Wikipedia — Escape room", url: "https://en.wikipedia.org/wiki/Escape_room", publisher: "Wikipedia" }, { label: "TERPECA official", url: "https://www.terpeca.com", publisher: "TERPECA" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default roomRaceCompetitive;
