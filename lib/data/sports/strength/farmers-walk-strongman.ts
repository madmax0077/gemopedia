import type { Sport } from "@/lib/types";

export const farmersWalkStrongman: Sport = {
  id: "farmers-walk-strongman",
  slug: "farmers-walk-strongman",
  name: "Farmer's Walk",
  officialName: "Farmer's Walk (Strongman)",
  aliases: ["Farmers Carry", "Loaded Carry", "Farmer's Hold"],
  shortDescription:
    "Strongman event carrying two heavy implements (up to 175 kg / side) over a set course (~20 m) in fastest time — tests grip, core, posture and speed under load.",
  longDescription:
    "Farmer's Walk (also Farmer's Carry) is a foundational strongman event where competitors pick up two heavy weighted implements (traditionally 'farmer handles' with weights up to 150-175 kg / 330-385 lb per hand) and carry them over a fixed distance (typically 15-25 meters) in the shortest time. Formats: (a) Fixed-weight sprint (fastest time); (b) Weight-for-max (longest distance carried with progressive weight). Also common in CrossFit and general fitness training as a full-body conditioning tool. Grip is the most common limiting factor; posture (upright torso, engaged core) and stride mechanics dictate speed. World records for max weight exceed 200 kg per hand for short distances. Regular WSM + Arnold Classic + Giants Live event. Notable dominants: Brian Shaw, Žydrūnas Savickas, Eddie Hall, Rob Kearney, Mitchell Hooper. Also part of Highland Games in modified form.",
  category: "strength-sports",
  subCategory: "loaded carry event",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (agricultural roots); modern strongman event 1980s",
  estimatedOrigin: "Traditional farming carry; strongman event since ~1980s",
  players: { min: 1, max: 1 },
  equipment: [{ name: "Farmer handles (2)", description: "Steel handle implements loaded with plates." }, { name: "Chalk / hooks", description: "Grip aids (per rule set)." }],
  duration: { approximateMinutes: 1, structure: "Single heat, typically under 20 seconds sprint." },
  objective: "Carry both implements over set distance in fastest time (or farthest at fixed weight).",
  matchStructure: "Individual timed sprint; drop = event over (or restart per rules).",
  basicRules: [
    { title: "Both implements carried simultaneously", body: "One in each hand throughout the course." },
    { title: "Course must be fully covered", body: "Cross finish line with both implements still gripped." },
    { title: "Timing starts at pickup", body: "Clock starts on first lift attempt." },
  ],
  scoring: { summary: "Time-based sprint OR max distance for weight.", winCondition: "Fastest full-course time." },
  positions: [{ name: "Strongman athlete", role: "Sole competitor.", count: 1 }],
  governingBodies: [{ name: "World's Strongest Man", founded: 1977, headquarters: "USA/UK" }, { name: "Giants Live", founded: 2009, headquarters: "UK" }],
  majorCompetitions: [{ name: "World's Strongest Man Farmer's Walk", frequency: "annual", founded: 1977, region: "worldwide" }, { name: "Arnold Strongman Classic", frequency: "annual", founded: 2002, region: "Columbus, Ohio" }],
  famousAthletes: ["Brian Shaw", "Žydrūnas Savickas", "Eddie Hall", "Mitchell Hooper", "Rob Kearney", "Tom Stoltman"],
  records: [
    { title: "175 kg per hand event standard", holder: "WSM Farmer's Walk", value: "Standard WSM competition weight 150-175 kg per hand", year: 2024 },
  ],
  relatedSports: ["atlas-stones-wsm", "log-lift-wsm", "yoke-walk", "deadlift"],
  skills: ["grip strength", "core stability", "gait mechanics under load", "explosive first steps"],
  wikipediaTitle: "Farmer's walk",
  sources: [{ label: "Wikipedia — Farmer's walk", url: "https://en.wikipedia.org/wiki/Farmer%27s_walk", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default farmersWalkStrongman;
