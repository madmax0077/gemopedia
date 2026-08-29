import type { Sport } from "@/lib/types";

export const dragonBoat500m: Sport = {
  id: "dragon-boat-500m",
  slug: "dragon-boat-500m",
  name: "Dragon Boat 500m",
  officialName: "IDBF Dragon Boat World Championships — 500m Race",
  aliases: ["Dragon Boat Sprint", "IDBF 500m", "DB 500"],
  shortDescription:
    "Standardized flat-water sprint race in traditional Chinese dragon boat (11.6 m, 20 paddlers + drummer + steer); 500 m distance is the most-contested premier event at IDBF (International Dragon Boat Federation) World Championships since 1995.",
  longDescription:
    "Dragon Boat 500m is the premier standardized sprint race distance in international dragon boat racing, governed by the International Dragon Boat Federation (IDBF, founded 1991, headquartered Hong Kong). The traditional Chinese dragon boat is a 11.6 m long, 1.16 m wide narrow-hulled paddling boat with dragon-head bow + dragon-tail stern, crewed by 20 paddlers + 1 drummer (at bow, drives pace) + 1 sweeper/steer (at stern with steering oar). Standard IDBF race distances: 200 m (sprint), 500 m (premier), 1,000 m (endurance), 2,000 m (marathon). 500 m races typically last ~1:50-2:15 depending on gender + level. IDBF World Championships biennial (since 1995), Club Crew World Championships (CCWC) biennial. Regional strongholds: China (dominant traditionally + modernly), Canada (esp. Toronto + Vancouver — huge amateur scene), Hong Kong, Malaysia, Singapore, USA, Germany, Netherlands, Philippines. Also huge cancer-survivor community rowing (Breast Cancer Survivor Dragon Boat movement, founded Vancouver 1996). Includes divisions: Open (mixed gender), Women's, Mixed, Junior (U18/U16), Masters (35+, 45+, 55+, 65+), Adaptive (PARA-dragon boat).",
  category: "aquatic-sports",
  subCategory: "traditional Chinese paddling — sprint",
  sportType: "team", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "summer", era: "ancient", popularity: "regional",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (traditional origins ~2,000 years); modern IDBF competition since 1991",
  estimatedOrigin: "Traditional Chinese dragon boat racing ~500 BCE (associated with Qu Yuan legend); IDBF founded 1991",
  players: { min: 22, max: 22, note: "20 paddlers + drummer + steer = 22 crew total per boat." },
  equipment: [{ name: "Traditional Chinese dragon boat", description: "11.6 m long × 1.16 m wide narrow hull; dragon head + tail." }, { name: "Standardized IDBF paddle", description: "Single-blade paddle, IDBF spec (blade + shaft dimensions regulated)." }, { name: "Drum + drummer at bow", description: "Drives paddle cadence + team synchronization." }, { name: "Steering oar (stern sweep)", description: "Long stern oar for steering; sweeper stands at back." }],
  duration: { approximateMinutes: 3, structure: "500m race ~1:50-2:15 depending on gender + level; heats, semis, finals within event day." },
  objective: "Cross 500m finish line fastest.",
  matchStructure: "Heats → semifinals → A/B/C finals typical (6+ lanes per heat).",
  basicRules: [
    { title: "Standardized IDBF boat + paddle spec", body: "IDBF regulates boat + paddle dimensions strictly for fair competition." },
    { title: "22 crew (20 paddlers + drummer + steer)", body: "Must have full crew of 22 for standard boat; smaller boats (10-crew) for some events." },
    { title: "False start rules", body: "First false start = warning; second = DQ." },
    { title: "Lane discipline required", body: "Must remain in lane; lane infringement = DQ." },
  ],
  scoring: { summary: "Fastest crossing to nearest 0.01s.", winCondition: "First boat to cross finish line." },
  positions: [{ name: "Paddler (positions 1-20, pairs)", role: "10 pairs (port + starboard); front pair sets pace.", count: 20 }, { name: "Drummer", role: "Bow-mounted drummer sets cadence + coordinates crew.", count: 1 }, { name: "Sweeper/Steersperson", role: "Stern steering oar; responsible for boat direction + safety.", count: 1 }],
  officiating: { officials: ["Chief Referee", "Starter", "Course Marshals", "Finish Judges"], summary: "IDBF-sanctioned technical panel." },
  governingBodies: [{ name: "IDBF (International Dragon Boat Federation)", founded: 1991, headquarters: "Hong Kong" }, { name: "European Dragon Boat Federation (EDBF)", founded: 1990, headquarters: "Europe" }, { name: "Asian Dragon Boat Federation", founded: 1993, headquarters: "Asia" }],
  majorCompetitions: [{ name: "IDBF World Nations Championships", frequency: "biennial", founded: 1995, region: "rotating global" }, { name: "IDBF Club Crew World Championships (CCWC)", frequency: "biennial", founded: 2004, region: "rotating" }, { name: "Hong Kong International Dragon Boat Races", frequency: "annual", founded: 1976, region: "Hong Kong (birthplace of modern international competition)" }],
  countriesPlayed: ["CHN", "HKG", "CAN", "USA", "MYS", "SGP", "PHL", "GER", "GBR", "AUS", "TWN"],
  famousAthletes: ["Chinese national team (multi-time World Champions)", "Canadian national team (dominant Western team)", "German + Ukrainian national teams (dominant European)"],
  records: [
    { title: "IDBF founded 1991", holder: "IDBF", value: "International Dragon Boat Federation founded 1991 in Hong Kong", year: 1991 },
    { title: "Dragon boat tradition ~2,500 years", holder: "traditional China", value: "Dragon boat racing traditionally associated with Qu Yuan legend (278 BCE) — ~2,500 years traditional practice", year: 2024 },
  ],
  variants: ["10-crew-small-boat", "22-crew-standard-boat", "200m-sprint", "1000m-endurance", "2000m-marathon"],
  relatedSports: ["canoe-sprint", "outrigger-canoe-va-a", "rowing"],
  skills: ["synchronized paddling", "cadence discipline", "power endurance", "team unity"],
  wikipediaTitle: "Dragon boat",
  sources: [{ label: "Wikipedia — Dragon boat", url: "https://en.wikipedia.org/wiki/Dragon_boat", publisher: "Wikipedia" }, { label: "IDBF official", url: "https://www.idbf.org", publisher: "International Dragon Boat Federation" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default dragonBoat500m;
