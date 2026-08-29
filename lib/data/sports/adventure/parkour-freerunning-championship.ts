import type { Sport } from "@/lib/types";

export const parkourFreerunningChampionship: Sport = {
  id: "parkour-freerunning-championship",
  slug: "parkour-freerunning-championship",
  name: "Freerunning World Championship",
  officialName: "FIG Parkour World Championships / Red Bull Art of Motion",
  aliases: ["Freerunning Championship", "AOM", "Red Bull Art of Motion", "FIG Parkour Championships"],
  shortDescription:
    "Judged freestyle parkour + freerunning competition featuring urban environment obstacle-flow routines with acrobatic tricks; premier events include Red Bull Art of Motion (2007-) + FIG Parkour World Championships (since 2020 under gymnastics federation).",
  longDescription:
    "Freerunning Championship is the judged freestyle competition discipline of parkour + freerunning — where athletes perform 60-90 second choreographed routines through urban obstacle environments demonstrating flow (fluid movement between obstacles), difficulty (advanced tricks like flips, wall spins, precision jumps), creativity, and execution. Discipline split: (1) speed parkour (fastest through a preset course, e.g., Red Bull World Run), (2) freestyle freerunning (judged for creativity/tricks). Premier events: Red Bull Art of Motion (founded 2007, held annually at scenic urban venues — Santorini, Lisbon, Yakushima, Miyajima; features $30K+ prize for freestyle world championship); FIG Parkour World Championships (since 2020 under Fédération Internationale de Gymnastique — contentious as parkour community traditionally opposed governance under gymnastics federation); NAPC (North American Parkour Championships); WFPF (World Freerunning Parkour Federation) events. Notable athletes: Jason Paul (GER, multiple AOM winners), Pasha Petkuns (LAT, 2015+2019 AOM), Dominic Di Tommaso (AUS, 2018 AOM), Krystian Kowalewski (POL), Georgia Munroe (AUS women's), Karin Berger. Parkour founded by David Belle (FRA) + Sébastien Foucan (FRA — coined 'freerunning') in Lisses, France 1980s from father Raymond Belle's parcours du combattant military obstacle training.",
  category: "adventure-extreme-sports",
  subCategory: "parkour + freerunning (competitive)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (Lisses, David Belle 1980s); modern comp since Red Bull AOM 2007",
  estimatedOrigin: "Parkour founded 1980s Lisses France; Red Bull AOM 2007; FIG Parkour Championships 2020",
  players: { min: 1, max: 1 },
  equipment: [{ name: "Athletic clothing + parkour shoes (grippy sole)", description: "e.g., Salomon 5.10, Take Flight parkour shoes." }, { name: "Urban obstacle environment", description: "Purpose-built or found urban site: rooftops, walls, precision blocks, rails, cars." }, { name: "Optional protective gear (rare)", description: "Some competitors use light knee sleeves; helmets uncommon." }],
  duration: { approximateMinutes: 2, structure: "Routines 60-90 seconds; event ~4-8 hours across preliminary + finals." },
  objective: "Perform highest technical difficulty + flow + creativity within time limit.",
  matchStructure: "Preliminaries + head-to-head brackets (some formats); judged by panel of 5-7 experts.",
  basicRules: [
    { title: "60-90 second routine (freestyle)", body: "Music-timed or verbal-timed routine on defined obstacle course." },
    { title: "Judged on Flow / Difficulty / Execution / Creativity", body: "Four-criterion judging typical." },
    { title: "Bail-outs = major deduction", body: "Aborted tricks + falls major point deductions." },
    { title: "Speed parkour = fastest through course", body: "Separate discipline: fastest course completion." },
  ],
  scoring: { summary: "Judge panel scores 4 criteria; highest combined total wins.", winCondition: "Highest total score across all criteria." },
  positions: [{ name: "Freerunner / Traceur", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Head Judge", "Discipline Judges (Flow, Difficulty, Execution, Creativity)"], summary: "5-7 judge panel per event." },
  governingBodies: [{ name: "FIG (Fédération Internationale de Gymnastique)", founded: 1881, headquarters: "Lausanne, Switzerland" }, { name: "WFPF (World Freerunning Parkour Federation)", founded: 2008, headquarters: "USA" }, { name: "Parkour Earth (community body)", founded: 2017, headquarters: "worldwide" }],
  majorCompetitions: [{ name: "Red Bull Art of Motion", frequency: "annual", founded: 2007, region: "rotating (Santorini, Lisbon, Yakushima, etc.)" }, { name: "FIG Parkour World Championships", frequency: "biennial", founded: 2020, region: "rotating" }, { name: "North American Parkour Championships", frequency: "annual", founded: 2010, region: "USA (rotating)" }],
  countriesPlayed: ["FRA", "GER", "USA", "GBR", "RUS", "LAT", "POL", "JPN", "AUS", "BRA"],
  famousAthletes: ["David Belle (FRA — founder of parkour)", "Sébastien Foucan (FRA — coined 'freerunning')", "Jason Paul (GER — multiple AOM)", "Pasha Petkuns (LAT — 2015+2019 AOM)", "Dominic Di Tommaso (AUS — 2018 AOM)"],
  records: [
    { title: "Red Bull Art of Motion since 2007", holder: "Red Bull", value: "Premier annual freerunning championship since 2007", year: 2007 },
    { title: "FIG Parkour Championships 2020 controversial", holder: "FIG", value: "Parkour community controversially split when FIG (gymnastics federation) launched Parkour Championships 2020 — Parkour Earth advocacy body founded 2017 in opposition", year: 2020 },
  ],
  variants: ["speed-parkour", "freestyle-freerunning", "chase-tag"],
  relatedSports: ["parkour-competitive", "gymnastics", "ninja-warrior", "urban-climbing"],
  skills: ["obstacle-flow reading", "acrobatic tricks", "precision landings", "spatial creativity", "risk assessment"],
  wikipediaTitle: "Parkour",
  sources: [{ label: "Wikipedia — Parkour", url: "https://en.wikipedia.org/wiki/Parkour", publisher: "Wikipedia" }, { label: "Wikipedia — Freerunning", url: "https://en.wikipedia.org/wiki/Freerunning", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default parkourFreerunningChampionship;
