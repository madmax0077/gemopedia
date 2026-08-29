import type { Sport } from "@/lib/types";

export const supercross: Sport = {
  id: "supercross",
  slug: "supercross",
  name: "Supercross",
  officialName: "AMA Supercross Championship (Feld Motor Sports)",
  aliases: ["SX", "AMA Supercross", "Monster Energy Supercross"],
  shortDescription:
    "Motorcycle racing on tight man-made dirt tracks inside stadiums — jumps, whoops, rhythm sections; the top motorcycle sport in North America; annual 17-round AMA Supercross Championship broadcast to millions.",
  longDescription:
    "Supercross is a motorcycle sport in which riders race 250cc + 450cc motocross bikes on tight, purpose-built dirt tracks inside stadiums or arenas. Tracks feature massive jumps, rhythm sections, whoops (small bumps), and banked turns. Distinct from outdoor motocross (raced on natural terrain), supercross is the top motorcycle sport in North America — 17-round AMA Supercross Championship annually with Monster Energy title sponsorship. Two classes: 450SX (premier class) + 250SX (Eastern + Western regional). Season runs January-May. Legendary riders: Ricky Carmichael (US — 5× 450SX champion), James Stewart (US — 2× 450SX champion + rare feats), Jeremy McGrath (US — 7× 450SX champion; considered greatest ever), Chad Reed (Australia — 2× 450SX champion), Ryan Villopoto (US — 4× 450SX champion), Ken Roczen (Germany — 250SX champion + 450SX contender), Eli Tomac (US — 2022 AMA 450SX champion), Cooper Webb (US — 2019+2021+2023 AMA 450SX champion).",

  category: "motor-sports",
  subCategory: "motorcycle sport — stadium dirt track",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "winter",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (evolved from motocross 1970s; formalized as AMA Supercross); Feld Motor Sports promoter",
  estimatedOrigin: "Emerged from motocross 1970s US; AMA Supercross Championship formalized; Monster Energy title sponsorship since 2007",

  players: { min: 1, max: 40, note: "40 riders per gate for main event; individual competition." },
  field: {
    surfaceName: "Purpose-built dirt track inside stadium",
    dimensions: "~600m loop per lap; 20-25 laps in main event",
    description: "Portable dirt track constructed in NFL stadiums + arenas each week; typically 30,000-90,000 spectators per event.",
  },
  equipment: [
    { name: "450cc or 250cc motocross bike", description: "Purpose-built race motorcycles; Kawasaki, Honda, Yamaha, KTM, Husqvarna, Suzuki, Gas Gas. Cost $10,000-$15,000 production + $50,000-$150,000 team modifications." },
    { name: "Full protective gear", description: "Helmet + goggles + neck brace + chest protector + shoulder + elbow + knee + ankle + boots. Roost deflector optional." },
    { name: "Race gear + gloves", description: "Team-branded gear; must meet AMA specifications." },
  ],
  duration: { approximateMinutes: 20, structure: "Heat race: 8 min. Main event: 20 laps or 20 min. Full event: 3-4 hours across all classes." },
  objective: "Cross finish line first (heat qualifies for main; main event awards points).",
  matchStructure: "Weekend: practice + qualifying → heat races (top 5 qualify direct) → LCQ (last-chance qualifier) → main event. 40-rider gate; 20-lap main event awards points.",

  basicRules: [
    { title: "Gate start", body: "40-rider gate drops simultaneously at start; explosive first turn ('holeshot') critical." },
    { title: "First across finish line wins", body: "20-lap main event; position at finish = points awarded." },
    { title: "Physical contact allowed", body: "Legal side-by-side contact + rubbing; illegal bike-to-bike takeouts penalized." },
    { title: "Yellow flags = no passing", body: "Yellow flag section = riders must maintain position." },
    { title: "Points to 22nd place", body: "Points per finish position; season champion = cumulative total." },
  ],
  scoring: {
    summary: "Points per race position; season champion = highest cumulative points.",
    winCondition: "Season championship. Season champion = highest cumulative points across 17 rounds.",
    breakdown: [
      { action: "Main event win", points: "25 pts" },
      { action: "Main event 2nd", points: "22 pts" },
      { action: "Points to 22nd", points: "Descending scale" },
    ],
  },

  positions: [
    { name: "Rider", role: "Solo racer per bike.", count: 1 },
    { name: "Team mechanic + support", role: "Bike setup + strategy." },
  ],
  officiating: {
    officials: ["AMA Race Director", "Track marshals", "Timing officials", "Medical + safety teams"],
    summary: "AMA + FIM-certified officials; stewards monitor for illegal contact; medical infrastructure mandatory.",
  },

  governingBodies: [
    { name: "American Motorcyclist Association (AMA)", founded: 1924, headquarters: "Pickerington, USA" },
    { name: "Feld Motor Sports (promoter)", founded: 1974, headquarters: "Ellenton, USA", website: "https://supercrosslive.com" },
    { name: "Fédération Internationale de Motocyclisme (FIM)", founded: 1904, headquarters: "Mies, Switzerland" },
  ],
  majorCompetitions: [
    { name: "AMA Supercross Championship", frequency: "annual (17 rounds)", founded: 1974, region: "USA + Canada" },
    { name: "FIM Supercross World Championship", frequency: "annual", founded: 2022, region: "worldwide" },
    { name: "Monster Energy Cup", frequency: "annual", founded: 2011, region: "Las Vegas, USA" },
  ],
  countriesPlayed: ["US", "AU", "FR", "IT", "DE", "GB", "CA", "MX", "JP"],
  famousAthletes: [
    "Jeremy McGrath (US — 7× 450SX champion 1993-2000; considered greatest ever)",
    "Ricky Carmichael (US — 5× 450SX champion + 10× AMA National champion)",
    "James Stewart (US — 2× 450SX champion + rare feats like winning every race in a season)",
    "Ryan Villopoto (US — 4× 450SX champion 2011-2014)",
    "Chad Reed (Australia — 2× 450SX champion + longest career)",
    "Eli Tomac (US — 2022 AMA 450SX champion)",
    "Cooper Webb (US — 2019+2021+2023 AMA 450SX champion)",
    "Ken Roczen (Germany — 250SX champion + 450SX contender)",
  ],
  records: [
    { title: "Most AMA 450SX championships", holder: "Jeremy McGrath (US)", value: "7× champion 1993-2000; considered greatest ever", year: 2000 },
    { title: "AMA Supercross longevity", holder: "AMA Supercross", value: "Championship contested continuously since 1974", year: 2024 },
    { title: "Largest single-event attendance", holder: "AMA Supercross", value: "70,000+ per stadium event; total season attendance 750,000+", year: 2024 },
  ],

  variants: ["ama-450sx-premier-class", "ama-250sx-east-west-regions", "fim-supercross-world-championship-since-2022", "monster-energy-cup"],
  relatedSports: ["motocross", "endure", "flat-track", "arenacross"],

  skills: ["motorcycle control in tight spaces", "jump technique + rhythm section execution", "physical fitness (20-min races require peak conditioning)", "start explosiveness ('holeshot')", "mental focus (40-rider gate + tight racing)"],

  terminology: [
    { term: "Supercross", meaning: "Stadium-based motorcycle racing on man-made dirt tracks." },
    { term: "AMA Supercross", meaning: "American Motorcyclist Association championship — sport's top series." },
    { term: "450SX", meaning: "Premier class using 450cc bikes." },
    { term: "250SX", meaning: "Junior class using 250cc bikes; split East + West regions." },
    { term: "Holeshot", meaning: "Winning the first turn from gate start." },
    { term: "Whoops", meaning: "Series of small bumps; requires rhythm technique." },
    { term: "Main event", meaning: "20-lap championship race after heat qualification." },
    { term: "Jeremy McGrath", meaning: "7× 450SX champion; considered sport's GOAT." },
  ],

  faq: [
    { question: "What is Supercross?", answer: "Motorcycle racing on tight man-made dirt tracks inside stadiums. Riders race 450cc + 250cc motocross bikes over jumps, whoops (small bumps), and rhythm sections. Top motorcycle sport in North America — 17-round AMA Supercross Championship annually. Season runs January-May with 30,000-90,000 stadium spectators per event." },
    { question: "How is Supercross different from Motocross?", answer: "Supercross: indoor/stadium; man-made dirt tracks with jumps + whoops; tight loops. Motocross (MX): outdoor; natural terrain; larger courses; different race format. Elite riders often compete in both AMA Supercross (winter) + AMA Motocross Nationals (summer)." },
    { question: "Who is the greatest Supercross rider?", answer: "Jeremy McGrath (US) — 7× 450SX champion 1993-2000; considered greatest ever. Ricky Carmichael (US) — 5× 450SX champion + arguably second GOAT. James Stewart (US) — 2× champion + rare feats. Modern era: Eli Tomac + Cooper Webb + Chase Sexton contend." },
    { question: "Is Supercross in the Olympics?", answer: "No. Motorsports as a whole not Olympic. FIM Supercross World Championship (since 2022) is the international counterpart to AMA Supercross." },
  ],

  wikipediaTitle: "Monster Energy Supercross Championship",
  sources: [{ label: "AMA Supercross", url: "https://supercrosslive.com", publisher: "Feld Motor Sports" }, { label: "Wikipedia — Supercross", url: "https://en.wikipedia.org/wiki/Monster_Energy_AMA_Supercross_Championship", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
