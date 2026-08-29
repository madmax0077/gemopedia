import type { Sport } from "@/lib/types";

export const crossbowShooting: Sport = {
  id: "crossbow-shooting",
  slug: "crossbow-shooting",
  name: "Crossbow Shooting",
  officialName: "Sport Crossbow (IAU)",
  aliases: ["Crossbow Target Shooting", "Armbrust", "Arbalète"],
  shortDescription:
    "Precision shooting with sport crossbows (10 m match / 30 m field) — IAU-federated with World Championships since 1979. Split into Match Crossbow (10 m indoor) + Field Crossbow (30 m outdoor). Swiss + Central European stronghold.",
  longDescription:
    "Crossbow Shooting is a precision shooting sport using purpose-built target crossbows — federated by the Internationale Armbrustschützen Union (IAU) with World Championships held since 1979. Two main disciplines: Match Crossbow (10 m indoor, matched to air rifle format) using lightweight recurve or compound sport crossbow, and Field Crossbow (30 m outdoor, matched to smallbore rifle format) using stronger crossbow. Third: 30 m field crossbow. Ammunition is metal-tipped 'bolts' (short arrows) rather than firearms rounds. Scored on ISSF-style 10-ring paper target: bullseye = 10 points, outer rings decreasing to 1. Match round: 40 or 60 bolts per relay; final = 24 bolts. Uniquely popular in Switzerland (national tradition), Germany, Austria, Czech Republic, Slovenia — the William Tell heritage regions. Junior + Adult + Veteran categories. Not Olympic but consistently campaigned. Distinct from hunting/tactical crossbow — sport crossbow is optimised for precision + repeatability at fixed distance, has strict weight/draw-weight limits per IAU rules.",
  category: "precision-sports",
  subCategory: "target crossbow shooting (10 m / 30 m)",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "CH",
  regionOfOrigin: "Switzerland + Central Europe (William Tell heritage)",
  estimatedOrigin: "Medieval military crossbow tradition; sport crossbow codified early 20th century Switzerland; IAU founded 1956; WC since 1979",
  players: { min: 1, max: 1, note: "Individual event; team scoring aggregate of 3-shooter squads." },
  equipment: [
    { name: "Match Crossbow (10 m)", description: "Lightweight recurve or compound crossbow with target sight; strict weight limit ~4.5 kg." },
    { name: "Field Crossbow (30 m)", description: "Stronger crossbow for outdoor 30 m; weight up to 6.75 kg." },
    { name: "Metal-tipped bolts", description: "Short (~30 cm) precision bolts; standard weight; steel/tungsten tip." },
    { name: "10-ring paper target (ISSF pattern)", description: "10-ring concentric target; center X-ring for tiebreaks." },
    { name: "Shooting jacket + spotting scope", description: "Standard match shooting jacket for stability; spotting scope for aim/adjust." },
  ],
  duration: { approximateMinutes: 90, structure: "Qualifying: 40 or 60 bolts over ~90 min. Final: 24 bolts over ~35 min." },
  objective: "Achieve highest cumulative score by placing bolts nearest to target center across all shots.",
  matchStructure: "Qualifying round (40-60 bolts) → Final (top 8, 24 bolts in ISSF-style elimination format).",
  basicRules: [
    { title: "Standing position for 10 m Match", body: "Unsupported standing shot at 10 m indoor with match crossbow." },
    { title: "Prone / kneeling / standing for 30 m Field", body: "Different sub-events use different positions; 3-position aggregate common." },
    { title: "10-ring scoring (10-1)", body: "Center hit = 10; outer rings 9, 8, 7... 1; total per round." },
  ],
  advancedRules: [
    { title: "Weight + draw-weight limits", body: "IAU limits crossbow weight (~4.5 kg Match, 6.75 kg Field), draw weight (Match ~200 N, Field ~500 N), trigger pull minimum." },
    { title: "Sight rules", body: "Diopter (aperture) sights permitted; magnifying/telescopic sights allowed in some categories; strict rules per IAU." },
    { title: "Final elimination format", body: "Finals follow ISSF elimination: shooter-by-shooter progressive elimination based on lowest cumulative shot score." },
  ],
  scoring: {
    summary: "Sum of ring scores across all bolts; tiebreak by inner-X count.",
    winCondition: "Highest cumulative score wins; ties broken by X-ring count (bullseye inner).",
    breakdown: [{ action: "Bullseye 10 (X-ring)", points: "10 (X counted for tiebreak)" }, { action: "Ring 1-10", points: "1-10 per ring" }],
  },
  penalties: [
    { title: "Overtime shot", body: "Time-limit violation: score not counted." },
    { title: "Foot-fault / equipment violation", body: "Warning; repeat = point deduction or DSQ." },
  ],
  positions: [{ name: "Crossbow Shooter", role: "Solo competitor; team aggregate scoring in team events.", count: 1 }],
  officiating: { officials: ["IAU Chief Range Officer", "Line Referees", "Scorers", "Equipment Inspector"], summary: "Chief range officer oversees; line refs monitor timing + safety; equipment inspector verifies crossbow compliance." },
  governingBodies: [
    { name: "Internationale Armbrustschützen Union (IAU)", founded: 1956, headquarters: "Switzerland" },
    { name: "Schweizer Armbrustschützenverband (SASV, Swiss)", founded: 1898, headquarters: "Switzerland" },
    { name: "Deutscher Schützenbund (Crossbow section)", founded: 1861, headquarters: "Wiesbaden, Germany" },
  ],
  majorCompetitions: [
    { name: "IAU Crossbow World Championships", frequency: "biennial", founded: 1979, region: "worldwide (Central Europe focus)" },
    { name: "IAU European Championships", frequency: "biennial (off-WC years)", founded: 1980, region: "Europe" },
    { name: "IAU Junior World Championships", frequency: "biennial", founded: 1993, region: "worldwide" },
  ],
  countriesPlayed: ["CH", "DE", "AT", "CZ", "SI", "IT", "FR", "GB", "NO", "SE", "US", "JP", "TW"],
  famousAthletes: ["Multiple IAU World Champions (Match + Field categories, Switzerland dominant)"],
  records: [
    { title: "IAU founded 1956", holder: "IAU", value: "Internationale Armbrustschützen Union established 1956 to codify international sport crossbow", year: 1956 },
    { title: "First WC 1979", holder: "IAU", value: "Inaugural Crossbow World Championships held 1979 (Match 10 m)", year: 1979 },
    { title: "Swiss national tradition (William Tell)", holder: "Switzerland", value: "Swiss crossbow shooting tradition dates to William Tell legend (1307); modern sport crossbow sport originated Switzerland late 19th century", year: 1898 },
  ],
  variants: ["match-crossbow-10m", "field-crossbow-30m", "field-crossbow-hunting-simulation"],
  relatedSports: ["target-archery", "field-archery", "air-rifle-shooting", "smallbore-rifle-shooting"],
  skills: ["breath control", "trigger control (light-pull)", "sight-picture consistency", "match temperament"],
  strategies: [
    { title: "Bolt-batch consistency", body: "Match bolts by weight + spine — 1-2 grain variance affects 10 m accuracy." },
    { title: "Trigger break rhythm", body: "Predictable trigger break during natural respiratory pause = tightest groups." },
    { title: "Sight-picture routine", body: "Consistent aiming eye position + focus depth — small changes cause 1-2 point drift." },
  ],
  terminology: [
    { term: "Bolt", meaning: "The short arrow projectile used in crossbow" },
    { term: "Match / Field Crossbow", meaning: "10 m indoor / 30 m outdoor variants" },
    { term: "IAU", meaning: "Internationale Armbrustschützen Union (world governing body)" },
    { term: "Diopter sight", meaning: "Aperture sight typical of precision shooting" },
    { term: "X-ring", meaning: "Innermost sub-10 scoring zone for tiebreak" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Club range + basic Match crossbow", body: "Learn stance, trigger control at 10 m." }] },
    { level: "intermediate", steps: [{ title: "Regional match circuit + sub-500 60-shot", body: "Compete at regional matches; target 500+/600 in 60-shot rounds." }] },
    { level: "advanced", steps: [{ title: "IAU WC / EC + Field Crossbow 30 m", body: "Compete internationally in both Match + Field disciplines." }] },
  ],
  faq: [
    { question: "Is crossbow shooting the same as archery?", answer: "Different disciplines. Archery uses a hand-drawn recurve/compound bow; crossbow shooting uses a mechanically-drawn horizontal bow with trigger release — closer to rifle shooting in trigger technique but with archery ballistics." },
    { question: "Why is crossbow shooting popular in Switzerland?", answer: "Switzerland's William Tell legend (1307 crossbow shot to save his son) is deeply cultural; Schweizer Armbrustschützenverband (Swiss Crossbow Federation) has been active since 1898; sport crossbow remains a major traditional competitive discipline in Switzerland + Alpine Central Europe." },
  ],
  wikipediaTitle: "Crossbow (sport)",
  sources: [{ label: "Wikipedia — Crossbow", url: "https://en.wikipedia.org/wiki/Crossbow", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default crossbowShooting;
