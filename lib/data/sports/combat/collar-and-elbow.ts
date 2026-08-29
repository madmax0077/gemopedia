import type { Sport } from "@/lib/types";

export const collarAndElbow: Sport = {
  id: "collar-and-elbow",
  slug: "collar-and-elbow",
  name: "Collar-and-Elbow",
  officialName: "Collar-and-Elbow Wrestling",
  aliases: ["Irish Collar-and-Elbow", "Coraíocht Choláir agus Uilleann"],
  shortDescription:
    "Ancient Irish traditional wrestling style — competitors begin with mandatory grip on opponent's collar (one hand) + elbow (other hand); throw for a fall wins. Dominant Irish wrestling style; brought to US 19th century + heavily influenced early American pro wrestling.",
  longDescription:
    "Collar-and-Elbow is the traditional Irish wrestling style — competitors begin every bout with a mandatory grip: one hand on opponent's collar (or nape of neck) + other hand on opponent's elbow. From this fixed 'collar-and-elbow' grip, wrestlers execute throws + trips to score falls. Dominant wrestling style in Ireland from medieval era through 20th century. Massively popularized in USA via Irish immigrant diaspora in 19th century — became one of the two dominant American wrestling styles alongside Catch-as-Catch-Can, and directly influenced early American professional wrestling development. Notable American practitioners include President Abraham Lincoln (a documented collar-and-elbow wrestler in Illinois). Modern practice: limited but preserved via Gaelic Athletic Association (GAA) cultural events + occasional Highland Games exhibitions.",
  category: "combat-sports",
  subCategory: "folk wrestling (Irish tradition)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "medieval",
  popularity: "niche",
  countryOfOrigin: "IE",
  regionOfOrigin: "Ireland (medieval origins); exported to USA via 19th-century Irish immigration",
  estimatedOrigin: "Medieval Ireland (documented 1600s+); peaked in USA 1850-1900 via Irish diaspora; influenced early American pro wrestling",
  players: { min: 2, max: 2, note: "1v1 match." },
  equipment: [
    { name: "Wrestling attire", description: "Jacket with sturdy collar historically; modern events use singlet with fabric collar." },
    { name: "Grass wrestling ring", description: "Traditional grass ring at fairs + festivals." },
  ],
  duration: { approximateMinutes: 5, structure: "Best-of-3 falls; each fall typically <1-2 min." },
  objective: "Throw opponent to back or shoulders for fall while maintaining collar-and-elbow grip.",
  matchStructure: "Best-of-3 falls; first to 2 falls wins match.",
  basicRules: [
    { title: "Start with collar + elbow grip", body: "Every match begins with mandatory grip: one hand on opponent's collar + other hand on opponent's elbow." },
    { title: "Throws + trips permitted; no ground wrestling", body: "Standing wrestling only; no ground grappling once fall scored." },
    { title: "Fall = back or shoulders on ground", body: "Wrestler whose back/shoulders touches ground first loses fall." },
    { title: "Best-of-3 falls wins", body: "First to 2 falls takes match." },
  ],
  advancedRules: [
    { title: "Grip breaking + re-establishing", body: "Grip may break during throw execution; must be re-established between attempts." },
    { title: "Leg trips permitted", body: "Own-leg tripping of opponent's stance legal; no grabbing opponent's legs." },
    { title: "Cultural context", body: "Historically featured at Irish country fairs + coming-of-age contests." },
  ],
  scoring: {
    summary: "Best-of-3 falls; back/shoulders on ground = fall.",
    winCondition: "First to 2 falls wins.",
    breakdown: [{ action: "Back/shoulder fall", points: "1 fall" }],
  },
  penalties: [
    { title: "Illegal leg grab", body: "Fall loss." },
    { title: "Striking", body: "DQ." },
  ],
  positions: [{ name: "Wrestler", role: "Grip + throw + trip.", count: 1 }],
  officiating: { officials: ["Judge / village elder"], summary: "Traditional community refereeing." },
  governingBodies: [
    { name: "Gaelic Athletic Association (GAA — nominal cultural preservation)", founded: 1884, headquarters: "Dublin, Ireland" },
    { name: "No formal international collar-and-elbow body", founded: 0, headquarters: "N/A" },
  ],
  majorCompetitions: [
    { name: "Irish traditional festivals + Gaelic Games exhibitions", frequency: "occasional", founded: 1900, region: "Ireland" },
    { name: "Historical US collar-and-elbow tournaments (1850-1900)", frequency: "historical", founded: 1850, region: "US Northeast + Midwest (Irish diaspora)" },
  ],
  countriesPlayed: ["IE", "US (historical Irish-American diaspora)", "GB", "AU (Irish diaspora)"],
  famousAthletes: [
    "Abraham Lincoln (USA, 1809-1865) — documented collar-and-elbow wrestler in Illinois before presidency; inducted National Wrestling Hall of Fame",
    "Colonel James H. McLaughlin (USA, 19th century) — collar-and-elbow champion",
    "Various Irish country champions across 19th-20th centuries",
  ],
  records: [
    { title: "Presidential wrestling", holder: "Abraham Lincoln", value: "US President Lincoln was a documented collar-and-elbow wrestler with reported 300+ match record; inducted National Wrestling Hall of Fame 1992", year: 1992 },
    { title: "American pro wrestling influence", holder: "Collar-and-Elbow", value: "Along with Catch-as-Catch-Can, one of two dominant American wrestling styles 1850-1900 that shaped early American professional wrestling", year: 1900 },
  ],
  variants: ["irish-traditional", "us-immigrant-19th-century-competitive"],
  relatedSports: ["cornish-wrestling", "backhold-wrestling", "catch-as-catch-can", "greco-roman-wrestling"],
  skills: ["collar + elbow grip maintenance", "hip throw execution", "leg trip timing", "grip breaking + re-establishing"],
  strategies: [
    { title: "Hip throw from established grip", body: "Classic finishing throw from collar-and-elbow position." },
    { title: "Grip control battle", body: "Establish stronger grip before opponent gets full grip." },
  ],
  terminology: [
    { term: "Collar", meaning: "Opponent's jacket collar or nape of neck — mandatory grip point." },
    { term: "Elbow", meaning: "Opponent's elbow — mandatory second grip point." },
    { term: "Coraíocht", meaning: "Irish Gaelic word for wrestling." },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Attend Irish cultural festivals", body: "Occasional collar-and-elbow demonstrations at GAA events." }] },
    { level: "advanced", steps: [{ title: "Cross-train with Cornish + Backhold wrestling", body: "Similar Celtic-family folk wrestling traditions." }] },
  ],
  faq: [
    { question: "Did Abraham Lincoln really wrestle?", answer: "Yes — documented collar-and-elbow wrestler in New Salem, Illinois before his political career. Reported record of ~300 matches with only 1 loss. Inducted into National Wrestling Hall of Fame 1992 as 'Outstanding American' category." },
    { question: "Is collar-and-elbow still practiced?", answer: "Rarely as competitive sport — largely displaced by freestyle + Greco-Roman + submission grappling. Cultural preservation at Irish festivals + occasional Highland Games events. Historical influence on American pro wrestling significant." },
  ],
  wikipediaTitle: "Collar-and-elbow",
  sources: [{ label: "Wikipedia — Collar-and-elbow", url: "https://en.wikipedia.org/wiki/Collar-and-elbow", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
