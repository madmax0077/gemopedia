import type { Sport } from "@/lib/types";

export const wakesurfingCompetitive: Sport = {
  id: "wakesurfing-competitive",
  slug: "wakesurfing-competitive",
  name: "Competitive Wakesurfing",
  officialName: "World Wake Association (WWA) Wakesurf World Championships",
  aliases: ["Wakesurf Championship", "WWA Wakesurf", "Competitive Wake Surfing"],
  shortDescription:
    "Judged freestyle surfing on a boat's wake-wave without rope after release; WWA + Competition Wakesurf International (CWSI) crown world champions across surf/skim disciplines with trick-based scoring.",
  longDescription:
    "Competitive Wakesurfing is a judged freestyle discipline where competitors surf on the endless wave created behind a specifically designed wakesurf boat (typically MasterCraft, Malibu, Axis, Nautique, Supra V-drive inboards with weighted ballast). The rider is initially pulled up by a tow rope, then drops the rope and surfs the wave for the duration of the run. Two main board disciplines: (1) Surf-style (fatter/thicker board, more relaxed carving + turns), (2) Skim-style (thinner/faster board, aerial + technical spinning tricks). Runs are typically 45-60 seconds long, scored by judges on trick difficulty, execution, style, and variety. Governed by World Wake Association (WWA, founded 1989) + Competition Wakesurf International (CWSI, founded 2015 by top pros). Signature events: WWA Wake Surf World Championships (annual), CWSI World Championship, Nautique Masters (Orlando FL). Notable athletes: Ashley Kidd (USA, multi-time women's world champion), Sean Silveira (USA), Aaron Grace (AUS), Keenan Flegel (USA), Noah Flegel (USA — brother rivalry). Signature tricks: 360, Big Spin (540), Air (aerial), Front-Side / Back-Side Rotations, Shove-It, Body Varial.",
  category: "aquatic-sports",
  subCategory: "boat wake surfing (competitive)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "summer", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (modern origin ~2000s with weighted V-drive boats)",
  estimatedOrigin: "Modern wakesurfing emerged ~2000s; competitive scene solidified 2010s",
  players: { min: 1, max: 1, note: "Individual freestyle; team events at some regionals." },
  equipment: [{ name: "Wakesurf board (surf or skim style)", description: "Surf-style: 4'2\"-5'8\" thicker/fuller; Skim-style: 4'-4'8\" thinner + faster." }, { name: "V-drive inboard boat with ballast", description: "MasterCraft, Malibu, Axis, Nautique — 2,500-4,500 lb ballast + Surf Gate technology." }, { name: "Wakesurf rope (initial pull)", description: "Short rope 20-25 ft; released once rider is on wave." }, { name: "Life jacket + wetsuit / boardshorts", description: "USCG-approved PFD required." }],
  duration: { approximateMinutes: 1, structure: "Run 45-60 sec per attempt; event ~4-8 hrs across preliminaries + finals." },
  objective: "Perform highest-scoring trick sequence on wake wave within time limit.",
  matchStructure: "Multiple runs per competitor; best-run scoring; judges score trick difficulty + execution + variety.",
  basicRules: [
    { title: "Rope-drop within opening 5-10 sec", body: "Rider must drop rope early; scoring begins post-drop." },
    { title: "Judged on Trick Difficulty / Execution / Style / Variety", body: "Four-criterion judging typical." },
    { title: "Falls end scoring for that trick", body: "Falls immediately end current trick scoring; may recover for next attempt within time." },
    { title: "Board changes between runs allowed", body: "Riders may switch surf ↔ skim boards between runs (per event rules)." },
  ],
  scoring: { summary: "Judge panel scores 4 criteria; combined weighted; best run counts.", winCondition: "Highest single-run score across finals." },
  positions: [{ name: "Wakesurfer", role: "Sole competitor.", count: 1 }, { name: "Boat driver", role: "Maintains consistent speed (10-12 mph) + line for all riders.", count: 1 }, { name: "Spotter", role: "Coast Guard-required boat spotter.", count: 1 }],
  governingBodies: [{ name: "World Wake Association (WWA)", founded: 1989, headquarters: "Orlando, Florida, USA" }, { name: "Competition Wakesurf International (CWSI)", founded: 2015, headquarters: "USA" }],
  majorCompetitions: [{ name: "WWA Wake Surf World Championships", frequency: "annual", founded: 2010, region: "USA (rotating)" }, { name: "Nautique Masters (Orlando)", frequency: "annual", founded: 1959, region: "Orlando, FL" }, { name: "CWSI World Championships", frequency: "annual", founded: 2015, region: "USA (rotating)" }],
  countriesPlayed: ["USA", "CAN", "AUS", "GER", "MEX", "BRA", "JPN", "GBR"],
  famousAthletes: ["Ashley Kidd (USA — multi-time women's world champion)", "Sean Silveira (USA)", "Aaron Grace (AUS)", "Keenan Flegel (USA)", "Noah Flegel (USA)"],
  records: [
    { title: "WWA founded 1989", holder: "World Wake Association", value: "WWA founded 1989 — governs wakeboarding + wakesurfing; wakesurf world championships from 2010", year: 1989 },
    { title: "Wakesurf explosion 2010s", holder: "MasterCraft + Malibu + Nautique", value: "Wakesurf-specific boats with Surf Gate technology (patented 2013) enabled sport's explosion", year: 2013 },
  ],
  variants: ["surf-style-wakesurfing", "skim-style-wakesurfing"],
  relatedSports: ["wakeboarding", "surfing", "wake-skate", "boat-surfing"],
  skills: ["wave-position reading", "aerial trick technique", "board carving", "body rotation control"],
  wikipediaTitle: "Wakesurfing",
  sources: [{ label: "Wikipedia — Wakesurfing", url: "https://en.wikipedia.org/wiki/Wakesurfing", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default wakesurfingCompetitive;
