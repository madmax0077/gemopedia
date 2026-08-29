import type { Sport } from "@/lib/types";

export const f1Academy: Sport = {
  id: "f1-academy",
  slug: "f1-academy",
  name: "F1 Academy",
  officialName: "Formula 1 Academy",
  aliases: ["F1A", "F1 Academy Championship"],
  shortDescription:
    "All-female single-seater feeder motorsport championship founded by Formula 1 in 2023 — 5 teams × 3 cars = 15 grid; support races at 7 F1 Grand Prix weekends (2024-25); managed by Susie Wolff; provides direct pathway to F1 for women drivers.",
  longDescription:
    "F1 Academy is an all-female single-seater feeder motorsport championship founded by Formula 1 (Formula One Management, FOM) in November 2022 with inaugural season 2023 — the first fully female single-seater championship organized by F1 as part of a wider commitment to increase women's participation in motorsport. Managing Director since 2023: Susie Wolff MBE (former Williams F1 development driver + wife of Mercedes team principal Toto Wolff). Format: 15 drivers across 5 teams (each team fielding 3 cars). From 2024, all 5 teams have direct branding partnerships with F1 Grand Prix racing teams (Alpine, Aston Martin, Ferrari, Haas, McLaren, Mercedes, Red Bull, VCARB, Williams). Cars are F4-spec Tatuus T-421 chassis with 1.4L Autotecnica-tuned Abarth engines producing ~165 hp. Season format: 7 rounds × 3 races per round = 21 races, all held as support races at F1 Grand Prix weekends (2024: Jeddah, Miami, Barcelona, Zandvoort, Singapore, Qatar, Abu Dhabi). Champions: Marta García (ESP, inaugural 2023 champion), Abbi Pulling (GBR, 2024 champion — awarded free Formula GB4/British F4 season prize), Chloe Chambers (USA, 2025 champion). Netflix series 'F1: The Academy' premiered 2025 following in Drive to Survive footsteps.",
  category: "motor-sports",
  subCategory: "single-seater F4-spec (all-female)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (Formula 1 / FOM, London)",
  estimatedOrigin: "Founded November 2022; inaugural season 2023",
  players: { min: 15, max: 15, note: "15 drivers × 5 teams; grid slots may vary marginally per event." },
  equipment: [{ name: "Tatuus T-421 chassis (F4-spec)", description: "FIA F4 single-seater; carbon fiber monocoque, 1.4L Autotecnica-tuned Abarth engine ~165 hp." }, { name: "Pirelli slick + wet tires", description: "F1 official supplier — Pirelli tires (same brand as F1)." }, { name: "Driver safety gear (HANS, helmet, race suit)", description: "FIA 8859-2015 helmet + HANS device + FIA 8856 race suit + boots + gloves." }],
  duration: { approximateMinutes: 30, structure: "3 races per round × ~30 min each; season 7 rounds March-December." },
  objective: "Score most championship points across 7 rounds × 3 races per round.",
  matchStructure: "Practice → Qualifying → 3 races per round; reverse-grid Race 1 + standard grid Race 2 + 3.",
  basicRules: [
    { title: "F1 support race schedule (7 rounds × 3 races)", body: "All races held as F1 GP weekend support races 2024-25." },
    { title: "F4-spec single-seater", body: "Standardized Tatuus T-421 chassis; equal cars." },
    { title: "Reverse-grid Race 1", body: "Race 1 grid = reverse of Race 2 qualifying (top 8 typically)." },
    { title: "Season prize = F4/GB4 seat for champion", body: "Champion awarded funded F4/British F4 season prize." },
  ],
  scoring: { summary: "F1-style points system per race; total across 3 races per round + season.", winCondition: "Highest championship points at end of 7-round season." },
  positions: [{ name: "Driver (15 grid)", role: "5 F1-team-branded teams × 3 drivers each.", count: 15 }, { name: "Race Engineer / Team", role: "Support team providing setup + strategy.", count: 4 }],
  officiating: { officials: ["FIA Race Director", "Stewards (3)", "Timing Officials"], summary: "FIA sanctioning + race stewards panel." },
  governingBodies: [{ name: "Formula 1 Management (FOM)", founded: 1974, headquarters: "London, UK" }, { name: "FIA (Fédération Internationale de l'Automobile)", founded: 1904, headquarters: "Paris, France" }],
  majorCompetitions: [{ name: "F1 Academy Championship", frequency: "annual", founded: 2023, region: "worldwide (F1 support race schedule)" }],
  countriesPlayed: ["Global — F1 GP support race schedule (Saudi Arabia, Miami, Spain, Netherlands, Singapore, Qatar, Abu Dhabi in 2024)"],
  famousAthletes: ["Susie Wolff MBE (Managing Director)", "Marta García (ESP — inaugural 2023 champion)", "Abbi Pulling (GBR — 2024 champion)", "Chloe Chambers (USA — 2025 champion)", "Lia Block (USA — Ken Block's daughter)", "Doriane Pin (FRA)", "Bianca Bustamante (PHL)"],
  records: [
    { title: "Marta García inaugural 2023 champion", holder: "Marta García (ESP)", value: "First-ever F1 Academy champion, 2023 season", year: 2023 },
    { title: "Abbi Pulling 2024 champion", holder: "Abbi Pulling (GBR)", value: "2024 F1 Academy champion; awarded funded British F4 season", year: 2024 },
    { title: "Netflix F1: The Academy series premiered 2025", holder: "Netflix / F1", value: "Documentary series following F1 Academy premiered on Netflix May 2025", year: 2025 },
  ],
  variants: ["f1-academy-2023-inaugural", "f1-academy-2024-team-brands", "f1-academy-2025+"],
  relatedSports: ["formula-1", "formula-2", "formula-3", "w-series", "formula-4"],
  skills: ["single-seater technique", "qualifying pace", "race craft", "media presence (F1 support paddock)"],
  wikipediaTitle: "F1 Academy",
  sources: [{ label: "Wikipedia — F1 Academy", url: "https://en.wikipedia.org/wiki/F1_Academy", publisher: "Wikipedia" }, { label: "F1 Academy official", url: "https://f1academy.com", publisher: "Formula 1" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default f1Academy;
