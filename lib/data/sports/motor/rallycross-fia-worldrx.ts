import type { Sport } from "@/lib/types";

export const rallycrossFiaWorldRx: Sport = {
  id: "rallycross-fia-worldrx",
  slug: "rallycross-fia-worldrx",
  name: "Rallycross (FIA World RX)",
  officialName: "FIA World Rallycross Championship (World RX)",
  aliases: ["World RX", "FIA Rallycross", "Rally-X"],
  shortDescription:
    "Short-track mixed-surface (tarmac + gravel) motorsport blending rally + circuit racing — 6 cars race for ~6 laps with mandatory 'joker lap' detour; 4WD 600HP RX2/Supercar-class vehicles; FIA World RX Championship since 2014; electric era (RX1e) launched 2022.",
  longDescription:
    "Rallycross is a short-track mixed-surface (typically 60% tarmac + 40% gravel) motorsport combining rally + circuit-racing elements. Origins in the UK (1967) — invented as televised weather-independent version of rally when a UK Robert Reed-organized event at Lydden Hill Circuit needed TV-friendly rally format. Format: 4-6 cars race door-to-door for ~6 laps on 1-1.5 km short circuit with mandatory 'joker lap' — a slightly longer alternate route that each driver must take exactly once during the race (typically adds 2-3 seconds; strategic timing decision). Modern vehicles: World RX Supercar class = 4WD 600HP 2.0L turbocharged engines, 0-60 mph in ~1.9 seconds — faster acceleration than F1. Multiple support classes: RX2 (spec 300HP), RX1e (electric — since 2022), Super1600 (2WD), TouringCar (front-wheel). FIA World Rallycross Championship inaugurated 2014 (upgraded from European Championship since 1973); recent champions include Petter Solberg (NOR — 2014, 2015 WC + former WRC world champion), Mattias Ekström (SWE — 2016 WC + DTM champion), Johan Kristoffersson (SWE — dominant modern era, 5x WC 2017-2018 + 2021-2023), Timmy Hansen (SWE — 2019 WC), Timur Timerzyanov (RUS). Signature venues: Lydden Hill (UK — birthplace), Höljes (Sweden — 'Magic Weekend' 40,000+ fans), Loheac (France), Cape Town (South Africa), Barcelona-Catalunya (Spain), Buxtehude/Nürburgring (Germany). Electric era: World RX transitioned to RX1e (electric) 2022+ — 500kW / 680HP electric Supercars; environmental credentials + massive torque.",
  category: "motor-sports",
  subCategory: "mixed-surface short-track motorsport (rally + circuit)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "summer", era: "20th-century", popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (Lydden Hill Circuit 1967 — Robert Reed television format)",
  estimatedOrigin: "Invented 1967 at Lydden Hill UK; European Championship 1973; FIA World Championship 2014; RX1e electric era 2022",
  players: { min: 4, max: 6, note: "4-6 cars per race heat; individual driver + car." },
  equipment: [{ name: "World RX Supercar (4WD 600HP 2.0L turbo)", description: "Custom Group A rally-derived chassis (Peugeot 208, Volkswagen Polo, Audi S1, Ford Fiesta bases); 0-60 mph in ~1.9s." }, { name: "RX1e electric Supercar (from 2022)", description: "500kW/680HP electric Supercars replaced combustion Supercar class 2022+." }, { name: "Rally + circuit-specific tires", description: "Michelin/Cooper hard-compound tires for tarmac + gravel mixed use." }, { name: "Full FIA safety cage + HANS device", description: "Standard rally safety cage + Head-and-Neck Support restraint." }, { name: "Joker lap detour section", description: "Mandatory alternate longer track segment each driver must take exactly once per race." }],
  duration: { approximateMinutes: 5, structure: "Race: 6 laps × ~30-40 seconds per lap = ~3-4 minutes; event = qualifying + semifinals + final ~4-6 hours." },
  objective: "Finish race first with 4-6 laps completed + joker lap taken exactly once.",
  matchStructure: "Round: 4 qualifying heats + 2 semifinals + 1 final; season = ~10-12 rounds across 8-10 months.",
  basicRules: [
    { title: "6 laps + mandatory joker lap once", body: "Race is ~6 laps with joker lap detour — driver must take joker exactly once (timing strategic)." },
    { title: "Mixed-surface (tarmac + gravel)", body: "~60% tarmac / 40% gravel typical; teams choose tire compound accordingly." },
    { title: "4-6 cars per race", body: "4 cars in qualifying heats; 6 cars in semifinals + final." },
    { title: "Contact allowed but penalized if reckless", body: "Rubbing legal + expected; reckless contact = stewards' penalty or DQ." },
    { title: "Championship points across season", body: "Points scored per race + qualifying result; season champion by aggregate." },
  ],
  scoring: {
    summary: "Race finishing position scores championship points; season total = World Championship.",
    winCondition: "Highest World Championship season points across ~10-12 rounds.",
    breakdown: [{ action: "1st in final", points: "+30" }, { action: "2nd", points: "+27" }, { action: "3rd", points: "+25" }, { action: "Qualifying position bonuses", points: "+1 to +12" }],
  },
  positions: [{ name: "Driver", role: "Sole driver per car.", count: 1 }, { name: "Pit crew + engineers", role: "Between-race support + car prep.", count: 8 }],
  officiating: { officials: ["Race Director", "Chief Steward", "Stewards Panel", "Timekeeper", "Course Marshals"], summary: "FIA certified officials." },
  governingBodies: [{ name: "Fédération Internationale de l'Automobile (FIA)", founded: 1904, headquarters: "Paris, France" }, { name: "World RX (championship promoter)", founded: 2014, headquarters: "Barcelona, Spain (originally London)" }],
  majorCompetitions: [{ name: "FIA World Rallycross Championship (World RX)", frequency: "annual (~10-12 rounds)", founded: 2014, region: "worldwide (Europe majority + South Africa + occasional Americas)" }, { name: "FIA European Rallycross Championship (Euro RX)", frequency: "annual", founded: 1973, region: "Europe" }, { name: "American Rallycross (ARX)", frequency: "annual (2018-2020)", founded: 2018, region: "USA" }, { name: "Global Rallycross (GRC)", frequency: "annual (2011-2017)", founded: 2011, region: "USA" }],
  countriesPlayed: ["NOR", "SWE (dominant)", "GBR", "FRA", "GER", "USA", "RUS", "LVA", "FIN", "ZAF", "ESP"],
  famousAthletes: ["Johan Kristoffersson (SWE — 5x World RX Champion 2017-2018, 2021-2023 — dominant modern era)", "Petter Solberg (NOR — 2014, 2015 World RX Champion + WRC 2003 World Champion)", "Mattias Ekström (SWE — 2016 World RX Champion + DTM champion)", "Timmy Hansen (SWE — 2019 WC)", "Ken Block (USA — Global RX icon 2010s; died 2023)"],
  records: [
    { title: "Johan Kristoffersson 5x World RX Champion", holder: "Johan Kristoffersson (SWE)", value: "5-time FIA World Rallycross Champion (2017, 2018, 2021, 2022, 2023) — most world titles in Rallycross history", year: 2023 },
    { title: "World RX Supercar 0-60 mph 1.9 seconds", holder: "World RX Supercar class", value: "World RX Supercar 4WD 600HP 0-60 mph in ~1.9 seconds — faster acceleration than F1", year: 2021 },
    { title: "Invented 1967 Lydden Hill UK", holder: "Robert Reed / Lydden Hill Circuit", value: "Rallycross invented 1967 at Lydden Hill Circuit UK as televised weather-independent rally alternative", year: 1967 },
    { title: "RX1e electric era 2022+", holder: "World RX / FIA", value: "World RX transitioned Supercar class to RX1e electric 2022 — 500kW/680HP electric Supercars; environmental milestone", year: 2022 },
  ],
  variants: ["world-rx-supercar-4wd-600hp", "rx1e-electric-2022-plus", "rx2-spec-class-300hp", "super1600-2wd-junior", "touring-car-fwd-class"],
  relatedSports: ["world-rally-championship-wrc", "formula-1", "nascar", "gymkhana"],
  skills: ["mixed-surface car control (grip vs. slip transitions)", "joker lap strategic timing", "start-line launch (0-60 in 1.9s)", "wheel-to-wheel contact management", "handbrake turn technique"],
  wikipediaTitle: "World Rallycross Championship",
  sources: [{ label: "Wikipedia — World Rallycross Championship", url: "https://en.wikipedia.org/wiki/World_Rallycross_Championship", publisher: "Wikipedia" }, { label: "FIA World RX official", url: "https://www.fiaworldrallycross.com", publisher: "FIA World Rallycross" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default rallycrossFiaWorldRx;
