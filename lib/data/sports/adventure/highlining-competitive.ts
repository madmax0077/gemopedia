import type { Sport } from "@/lib/types";

export const highliningCompetitive: Sport = {
  id: "highlining-competitive",
  slug: "highlining-competitive",
  name: "Competitive Highlining",
  officialName: "International Slackline Association (ISA) Highlining Championship",
  aliases: ["Highline Competition", "Slackline Championship", "ISA Highlining"],
  shortDescription:
    "Highline walking is slacklining at elevation (canyons, rooftops, mountaintops); competitive scene organized by ISA (International Slackline Association) with distance + trick + speed disciplines; notable athletes include Alexander Schulz (400+ m records) + Faith Dickey + Louis Boniface.",
  longDescription:
    "Competitive highlining is the elite discipline of slacklining performed at significant elevation (highlines are typically defined as slacklines ≥15 m off the ground, over canyons, between rooftops, or across mountain gaps). Governed by the International Slackline Association (ISA, founded 2012). Disciplines: (1) longest walked highline (distance record), (2) trickline discipline (aerial acrobatics + spinning moves), (3) speed walking (fastest crossing), (4) mono-lines (single strap). Modern highlines routinely span 100-500+ m; current world record ~2,800+ m (Andes, 2023). Uses 2.5 cm / 5 cm webbing under high tension (2-5 kN). Athletes wear leash + harness; falls result in swinging catch. Signature events: ISA World Championships (biennial), Highline Meetings (Petzen Slackline Festival, Sunwapta Highline Festival). Notable athletes: Alexander Schulz (GER, multiple distance records, 400+ m highlines), Faith Dickey (USA, women's champion + first woman to cross 100+ m), Louis Boniface (FRA, trickline champion), Théo Sanson (FRA, expedition slacklines), Andy Lewis (USA, super bowl halftime slacklining 2012).",
  category: "adventure-extreme-sports",
  subCategory: "slackline / highline",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Yosemite climbers ~1979); modern global scene since 2000s",
  estimatedOrigin: "Yosemite climbers ~1979; ISA founded 2012",
  players: { min: 1, max: 1 },
  equipment: [{ name: "Highline webbing (2.5-5 cm)", description: "High-tension polyester/nylon webbing." }, { name: "Anchors + backup rigging", description: "Redundant anchors + backup lines mandatory." }, { name: "Safety leash + harness", description: "Rescue leash tethers walker to line." }, { name: "Tensioning system (pulleys)", description: "Multi-line tensioning to 2-5 kN tension." }],
  duration: { approximateMinutes: 15, structure: "Individual walk attempts; longer lines can take 20-60 min per crossing." },
  objective: "Complete crossing of specified highline in speed / distance / trickline discipline.",
  matchStructure: "Event-specific: distance (longest walked), speed (fastest crossing), trickline (judged tricks).",
  basicRules: [
    { title: "Leash attached at all times", body: "Falls result in swinging catch; leash must be attached." },
    { title: "Full crossing (foot-to-foot)", body: "Distance measured foot-to-foot; must start + finish stood on line." },
    { title: "No hand assistance from anchors mid-line", body: "Once on line, no assistance until anchor reached." },
  ],
  scoring: { summary: "Distance / speed / trick difficulty depending on discipline.", winCondition: "Longest walk, fastest crossing, or highest trickline judge score." },
  positions: [{ name: "Highliner", role: "Sole competitor.", count: 1 }],
  governingBodies: [{ name: "International Slackline Association (ISA)", founded: 2012, headquarters: "Zürich, Switzerland" }],
  majorCompetitions: [{ name: "ISA World Championships", frequency: "biennial", founded: 2015, region: "rotating global" }, { name: "Petzen Slackline Festival", frequency: "annual", founded: 2010, region: "Austria/Slovenia" }],
  countriesPlayed: ["USA", "GER", "FRA", "ITA", "CZE", "AUS", "BRA", "JPN"],
  famousAthletes: ["Alexander Schulz (GER — distance records 400+ m)", "Faith Dickey (USA — women's pioneer)", "Louis Boniface (FRA — trickline)", "Théo Sanson (FRA)", "Andy Lewis (USA — 2012 Super Bowl slackline)"],
  records: [
    { title: "Alexander Schulz 2,800+ m Andes highline 2023", holder: "Alexander Schulz (GER)", value: "2,800+ m longest highline walked (Andes, 2023) — current world record", year: 2023 },
    { title: "Faith Dickey first woman 100+ m highline", holder: "Faith Dickey (USA)", value: "First woman to walk 100+ m highline; multiple women's records", year: 2013 },
  ],
  variants: ["speed-highline", "distance-highline", "trickline-highline", "waterline-slackline"],
  relatedSports: ["slackline", "tightrope-walking", "wire-walking", "trickline"],
  skills: ["balance", "focus under exposure", "leash discipline", "harness technique", "fall recovery"],
  wikipediaTitle: "Highlining",
  sources: [{ label: "Wikipedia — Highlining", url: "https://en.wikipedia.org/wiki/Highlining", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default highliningCompetitive;
