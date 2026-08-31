import type { Sport } from "@/lib/types";

export const iceSpeedway: Sport = {
  id: "ice-speedway",
  slug: "ice-speedway",
  name: "Ice Speedway (FIM)",
  officialName: "FIM Ice Speedway World Championship",
  aliases: ["Ice Racing", "Motorcycle Ice Racing", "Ice Speedway Gladiators"],
  shortDescription:
    "Extreme motorcycle racing discipline (FIM) on 400m oval ice tracks — 500cc methanol-fueled speedway bikes with 28mm steel spikes protruding from tires; races at 130+ km/h on ice; Russia dominates; FIM World Championship since 1966.",
  longDescription:
    "Ice Speedway (also called Ice Racing) is an extreme motorcycle racing discipline governed by the Fédération Internationale de Motocyclisme (FIM), where riders race 500cc single-cylinder methanol-fueled speedway motorcycles on 400m oval ice tracks. Signature feature: motorcycle tires studded with ~120-150 pointed steel spikes (28mm long) protruding directly from the tire — providing traction on ice at speeds exceeding 130 km/h through corners at 45-60° lean angles. Bikes have no front brake, no gearbox (single-speed direct-drive), no rear suspension — pure lightweight racing machines weighing ~90-100 kg. Riders wear specialized armored suits with heavy shin guards on left leg (used for cornering — riders trail left leg for balance in left-hand corners). Racing format: heats of 4 riders × 4 laps; multiple heats + final in a Grand Prix event. FIM Ice Speedway Gladiators World Championship began 1966 (won inaugurally by Boris Samorodov of USSR). Absolutely dominated historically by Russia + USSR — over 90% of World Champion titles won by Russian riders including Nikolai Krasnikov (RUS — record 5 consecutive World Championships 2005-2009), Sergey Ivanov (RUS), Sergey Tarabanko (RUS), Daniil Ivanov (RUS — 3-time World Champion 2011-2013). Also strong: Sweden, Finland, Netherlands, Germany, Austria (Franz Zorn — top non-Russian, retired 2022 after 20+ years). Notable venues: Krasnogorsk (Russia), Berlin (Germany), Assen (Netherlands), Inzell (Germany). Season runs November-March. Extremely dangerous — fatal crashes documented multiple times per decade.",
  category: "motor-sports",
  subCategory: "extreme motorcycle ice racing",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "winter", era: "20th-century", popularity: "niche",
  countryOfOrigin: "SE",
  regionOfOrigin: "Sweden / Soviet Union (1920s Swedish origins; USSR dominance from 1960s)",
  estimatedOrigin: "First ice motorcycle racing Sweden 1920s; FIM World Championship 1966",
  players: { min: 1, max: 16, note: "Individual — 4 riders per heat; 16 riders per GP event." },
  equipment: [{ name: "Ice speedway motorcycle (500cc single, methanol)", description: "Purpose-built single-cylinder methanol-fueled bike, ~90-100 kg; no front brake, no gearbox, no rear suspension." }, { name: "Studded tires (~120-150 × 28mm steel spikes)", description: "Signature feature — steel spikes protrude directly from tire; special allow-tire construction." }, { name: "Armored riding suit + heavy left-shin guard", description: "Reinforced leathers with heavy left-shin guard for cornering." }, { name: "Helmet + boots + gloves", description: "Full protective gear." }],
  duration: { approximateMinutes: 3, structure: "Heat: 4 laps × ~40 seconds = ~2-3 min; GP event = multiple heats + final ~3-4 hours." },
  objective: "Finish heat/final in position 1 for maximum points; accumulate points across heats.",
  matchStructure: "GP format: 20 heats × 4 riders + semi-final + final; season World Championship = ~10 GP events; points aggregated for World Champion.",
  basicRules: [
    { title: "4 riders per heat × 4 laps", body: "Standard heat format on 400m oval." },
    { title: "Left-turn only oval", body: "All ice speedway ovals run counter-clockwise." },
    { title: "Points per heat position (3/2/1/0)", body: "1st = 3 pts, 2nd = 2 pts, 3rd = 1 pt, 4th = 0 pts (or FIM current 4/3/2/1)." },
    { title: "Studded tires strict spec", body: "Tire spike count + length + protrusion strictly regulated by FIM." },
    { title: "Falls: rider must NOT be in path — heat re-run if crash", body: "Safety re-run rule if crash blocks track; injury to rider means heat re-run with reserve." },
  ],
  scoring: {
    summary: "Heat points aggregated; GP event winner = highest total; World Championship = season total across ~10 GPs.",
    winCondition: "Most season points across 10 GP events.",
    breakdown: [{ action: "1st in heat", points: "+3 (or 4)" }, { action: "2nd", points: "+2 (or 3)" }, { action: "3rd", points: "+1 (or 2)" }, { action: "4th", points: "0 (or 1)" }],
  },
  positions: [{ name: "Ice speedway rider", role: "Sole competitor per heat.", count: 1 }, { name: "Mechanic + team", role: "Bike prep + tire studding between heats.", count: 3 }],
  officiating: { officials: ["Race Director", "Course Marshals", "Timekeeper", "Steward Panel", "Chief Medical Officer"], summary: "FIM certified officials + medical team on standby." },
  governingBodies: [{ name: "Fédération Internationale de Motocyclisme (FIM)", founded: 1904, headquarters: "Mies, Switzerland" }, { name: "Motorcycle Federation of Russia (MFR)", founded: 1936, headquarters: "Moscow, Russia" }],
  majorCompetitions: [{ name: "FIM Ice Speedway Gladiators World Championship", frequency: "annual (10 GP series)", founded: 1966, region: "rotating (Russia, Germany, Netherlands, Sweden)" }, { name: "European Ice Speedway Championship", frequency: "annual", founded: 1963, region: "Europe (rotating)" }, { name: "Russian Ice Speedway Championship", frequency: "annual", founded: 1935, region: "Russia (rotating)" }],
  countriesPlayed: ["RUS (dominant)", "SWE", "FIN", "NLD", "GER", "AUT", "CZE"],
  famousAthletes: ["Nikolai Krasnikov (RUS — 5 consecutive World Championships 2005-2009 record)", "Daniil Ivanov (RUS — 3x World Champion 2011-2013)", "Sergey Tarabanko (RUS — 4x World Champion 1978-1985)", "Franz Zorn (AUT — top non-Russian, 20+ year career)", "Sergey Ivanov (RUS)"],
  records: [
    { title: "Nikolai Krasnikov 5 consecutive World Championships", holder: "Nikolai Krasnikov (RUS)", value: "Record 5 consecutive FIM Ice Speedway World Championships (2005, 2006, 2007, 2008, 2009); considered greatest ever", year: 2009 },
    { title: "Russia has won 90%+ World Championships since 1966", holder: "Russian Motorcycle Federation", value: "USSR + Russia has dominated FIM Ice Speedway World Championship since 1966 — over 90% of titles won by Russian riders", year: 2024 },
    { title: "FIM World Championship since 1966", holder: "FIM", value: "First FIM Ice Speedway World Championship held 1966 in Ulyanovsk, USSR — inaugural champion Boris Samorodov (USSR)", year: 1966 },
  ],
  variants: ["individual-fim-world-championship", "team-race-championship-of-nations", "long-track-ice-racing-1000m"],
  relatedSports: ["speedway-motorcycle", "flat-track-racing", "grasstrack-racing", "ice-hockey"],
  skills: ["cornering at 45-60° lean on ice", "throttle control (no brake, no gear)", "left-leg cornering technique", "tire spike management + strategy"],
  wikipediaTitle: "Ice speedway",
  sources: [{ label: "Wikipedia — Ice speedway", url: "https://en.wikipedia.org/wiki/Ice_speedway", publisher: "Wikipedia" }, { label: "FIM official — Ice Speedway", url: "https://www.fim-live.com", publisher: "Fédération Internationale de Motocyclisme" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default iceSpeedway;
