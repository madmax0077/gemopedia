import type { Sport } from "@/lib/types";

export const motorcycleTrials: Sport = {
  id: "motorcycle-trials",
  slug: "motorcycle-trials",
  name: "Motorcycle Trials",
  officialName: "FIM Trial World Championship",
  aliases: ["Observed Trials", "Moto Trials", "Trials", "TrialGP"],
  shortDescription:
    "Motorcycle sport where riders navigate 12-15 timed observation sections over rocks, logs, and obstacles WITHOUT putting foot down — pure balance + throttle control skill; annual FIM Trial World Championship since 1975.",
  longDescription:
    "Motorcycle Trials (Observed Trials) is a motorcycle sport in which riders navigate 12-15 timed observation sections over rocks, logs, streams, and other technical obstacles WITHOUT putting a foot down. Sport rewards balance + throttle control + technical mastery rather than speed. Penalty points ('dabs') accrued each time rider's foot touches ground; lowest total penalty wins. FIM Trial World Championship contested annually since 1975. Two classes: TrialGP (premier) + Trial 2 + Trial 3 + Trial Women + Trial 125. Bikes: purpose-built trials bikes (Beta, GasGas, Sherco, Vertigo, Montesa) — tiny fuel tanks, no seat, low-end torque, minimal suspension travel. Legendary riders: Toni Bou (Spain — 30+ world championships across indoor + outdoor; considered greatest motorcycle rider ever), Jordi Tarrés (Spain — 7× world champion; sport's early star), Yrjö Vesterinen (Finland — early 1970s pioneer). Sport highly technical + intense; not Olympic but has passionate global following particularly in Spain, UK, Japan, Australia.",

  category: "motor-sports",
  subCategory: "motorcycle sport — timed observation sections",
  sportType: "individual",
  indoorOutdoor: "both",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "GB",
  regionOfOrigin: "United Kingdom (early 1900s Scottish Six Days Trial); FIM World Championship 1975; Spanish + UK dominance",
  estimatedOrigin: "British motorcycle trials early 1900s; Scottish Six Days Trial from 1909; FIM Trial World Championship 1975",

  players: { min: 1, max: 1, note: "Individual sport; team standings from cumulative national totals." },
  field: {
    surfaceName: "Natural terrain observation sections (outdoor) + arena courses (indoor)",
    dimensions: "12-15 sections per event; each section ~50-100m of technical terrain; total ride distance ~10-15 km per day",
    description: "Outdoor: natural rocks + streams + logs. Indoor: purpose-built obstacles + boulders. FIM events combine both formats through season.",
  },
  equipment: [
    { name: "Trials bike (125cc-300cc)", description: "Purpose-built: low-end torque, no seat, tiny fuel tank (1-3 liters), minimal suspension travel. Brands: Beta, GasGas, Sherco, Vertigo, Montesa Honda." },
    { name: "Full protective gear", description: "Helmet + trials-specific gloves + boots. Less padding than motocross due to slower speeds." },
    { name: "Trials-specific tires", description: "Low pressure (5-7 psi) for maximum grip." },
    { name: "Race gear + minimal safety gear", description: "Slower speeds allow less protection; helmet + gloves + boots essential." },
  ],
  duration: { approximateMinutes: 300, structure: "Full event: 5-6 hours across 12-15 sections + timing. Season: 8-10 rounds annually." },
  objective: "Complete each section with minimum foot dabs; lowest total penalty score wins.",
  matchStructure: "Rider attempts each section once; penalty points accrue for foot dabs. Sum total penalty from all sections = final score. Lowest = winner.",

  basicRules: [
    { title: "Complete section without foot down", body: "Foot dabs = penalty points. Clean section (no dabs) = 0 points." },
    { title: "Penalty scoring", body: "1 dab = 1 point, 2 dabs = 2 points, 3+ dabs = 3 points, section failure (fall/backwards/skipped) = 5 points." },
    { title: "Lowest total wins", body: "Sum penalty across all sections; lowest wins." },
    { title: "Section markers", body: "Sections marked by ribbon boundaries; going outside = failure." },
    { title: "Time limits per section", body: "1-2 min per section; exceeding = failure." },
    { title: "Observer judges", body: "Independent observer per section verifies foot dabs + failures." },
  ],
  scoring: {
    summary: "Foot dabs = penalty points. Lowest total penalty wins.",
    winCondition: "Lowest cumulative penalty across all 12-15 sections. Season championship: cumulative round rankings.",
    breakdown: [
      { action: "Clean section (no dabs)", points: "0" },
      { action: "1 foot dab", points: "1" },
      { action: "2 foot dabs", points: "2" },
      { action: "3+ dabs or momentum stop", points: "3" },
      { action: "Fall / section failure", points: "5" },
      { action: "Elite World Championship round score", points: "5-15 total penalty typical" },
    ],
  },

  positions: [
    { name: "Rider", role: "Solo competitor.", count: 1 },
    { name: "Coach + team support", role: "Bike setup + section reading advice." },
  ],
  officiating: {
    officials: ["Observer (per section)", "Chief Steward", "Timekeeper", "Race Director"],
    summary: "Observer per section verifies dabs; independent judgment critical to fair scoring.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Motocyclisme (FIM)", founded: 1904, headquarters: "Mies, Switzerland" },
    { name: "Real Federación Motociclista Española (RFME)", founded: 1957, headquarters: "Spain" },
  ],
  majorCompetitions: [
    { name: "FIM Trial World Championship (TrialGP)", frequency: "annual (8-10 rounds)", founded: 1975, region: "worldwide" },
    { name: "X-Trial (indoor) World Championship", frequency: "annual", founded: 1993, region: "worldwide" },
    { name: "Trial des Nations", frequency: "annual", founded: 1984, region: "worldwide" },
    { name: "Scottish Six Days Trial", frequency: "annual (May)", founded: 1909, region: "Scotland" },
  ],
  countriesPlayed: ["ES", "GB", "JP", "IT", "AU", "FR", "DE", "NO", "CH", "PT", "US", "CZ"],
  famousAthletes: [
    "Toni Bou (Spain — 30+ world championships across indoor + outdoor; considered greatest motorcycle rider ever)",
    "Jordi Tarrés (Spain — 7× TrialGP world champion; sport's early star)",
    "Adam Raga (Spain — multi-time podium + rival to Bou)",
    "Yrjö Vesterinen (Finland — early 1970s pioneer)",
    "Dougie Lampkin (UK — 7× TrialGP world champion + Scottish Six Days multi-time)",
    "Sammy Miller (UK — 1960s British trials pioneer)",
    "Emma Bristow (UK — women's world champion)",
    "Kenichi Kuroyama (Japan — modern Japanese star)",
  ],
  records: [
    { title: "Most World Championships (motorcycle)", holder: "Toni Bou (Spain)", value: "30+ world championships across indoor + outdoor combined; considered greatest motorcycle rider ever", year: 2023 },
    { title: "Most TrialGP outdoor titles", holder: "Toni Bou (Spain)", value: "17+ consecutive TrialGP outdoor world titles", year: 2023 },
    { title: "Longest continuous trial event", holder: "Scottish Six Days Trial", value: "6-day trials event held annually in Scottish Highlands since 1909", year: 2024 },
  ],

  variants: ["fim-trial-world-championship-trialgp", "x-trial-indoor-world-championship", "trial-des-nations-team-event", "scottish-six-days-trial", "national-trials-championships"],
  relatedSports: ["motocross", "supercross", "endure", "off-road-motorcycle"],

  skills: ["extreme balance + throttle control", "reading terrain + line selection", "physical strength (bike control)", "focus + mental composure", "flexibility + agility"],

  terminology: [
    { term: "Trials", meaning: "Motorcycle sport with observed sections + foot-dab penalties." },
    { term: "Dab", meaning: "Foot touching ground; 1 penalty point per dab." },
    { term: "Clean", meaning: "Section completed without any dabs; 0 points." },
    { term: "Five", meaning: "Section failure penalty; 5 points." },
    { term: "TrialGP", meaning: "Premier outdoor world championship class." },
    { term: "X-Trial", meaning: "Indoor world championship." },
    { term: "Observer", meaning: "Judge stationed at each section verifying dabs + failures." },
    { term: "Toni Bou", meaning: "Spanish rider; considered greatest motorcycle rider ever with 30+ world titles." },
    { term: "Scottish Six Days", meaning: "Iconic 6-day trials event held annually in Scottish Highlands since 1909." },
  ],

  faq: [
    { question: "What is Motorcycle Trials?", answer: "A motorcycle sport where riders navigate 12-15 timed observation sections over rocks, logs, streams, and technical obstacles WITHOUT putting a foot down. Rewards balance + throttle control + technical mastery rather than speed. Penalty points ('dabs') accrued each time rider's foot touches ground; lowest total penalty wins. FIM Trial World Championship annually since 1975." },
    { question: "Who is Toni Bou?", answer: "Spanish rider considered the greatest motorcycle rider ever. Holds 30+ world championships across indoor + outdoor combined; 17+ consecutive TrialGP outdoor world titles. Rides for Repsol Honda team on Montesa Honda machinery. Dominant force in trials for over 15 years; his combined achievements exceed multi-discipline motorcycle rivals like Rossi + Márquez." },
    { question: "How is Trials different from Motocross?", answer: "Trials: slow-speed technical sections; no seat on bike; foot dabs = penalty; balance + throttle control key. Motocross: high-speed racing over jumps + berms; standard motorcycle setup; racing tactics; explosiveness key. Very different disciplines despite both being off-road motorcycle sports." },
    { question: "Is Motorcycle Trials in the Olympics?", answer: "No. Motorsports as a whole not Olympic. Sport has passionate global following in Spain, UK, Japan, Australia but no Olympic pathway pursued." },
  ],

  wikipediaTitle: "Motorcycle trials",
  sources: [{ label: "FIM Trial", url: "https://fim-live.com/en/trial", publisher: "FIM" }, { label: "Wikipedia — Motorcycle trials", url: "https://en.wikipedia.org/wiki/Motorcycle_trials", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
