import type { Sport } from "@/lib/types";

export const airRifle10m: Sport = {
  id: "air-rifle-10m",
  slug: "air-rifle-10m",
  name: "10 m Air Rifle",
  officialName: "10 metre Air Rifle (ISSF)",
  aliases: ["Olympic Air Rifle", "10m AR", "Luftgewehr"],
  shortDescription:
    "ISSF-federated precision shooting from 10 m standing position with 4.5 mm (.177 caliber) air rifle at 10-ring paper target. Winter + Summer Olympic event since 1984; individual + mixed team formats. Abhinav Bindra (IND) + Zhu Qinan (CHN) signature champions.",
  longDescription:
    "10 metre Air Rifle is an ISSF precision shooting event fired from standing position at 10 m distance with 4.5 mm (.177 caliber) air-powered rifle at a paper 10-ring target. Center bullseye = 10 points; ISSF international rules use decimal scoring (10.0 - 10.9 in finals for X-ring precision). One of the oldest ISSF Olympic disciplines — introduced 1984 Los Angeles for men + 1984 for women; both continue on current Olympic programme along with newer 10 m Air Rifle Mixed Team (introduced Tokyo 2020). Qualifying round: 60 shots in 75 min. Final: top 8 in ISSF elimination format — 24 shots, progressive elimination based on lowest cumulative shot every 2 shots after shot 10. Target 10-ring is 0.5 mm diameter (about pinhead size at 10 m). Air rifles are single-shot pre-charged pneumatic (PCP) or spring-piston type. Trigger pull minimum 500 g. Shooting jacket + trousers + boots are all standardised. India's Abhinav Bindra became first individual Indian Olympic gold medallist at Beijing 2008 in 10 m Air Rifle. Zhu Qinan (CHN) won Athens 2004 gold; Alin Moldoveanu (ROU) London 2012; Niccolò Campriani (ITA) Rio 2016; William Shaner (USA) Tokyo 2020 (all men); Sheileen Waibel/Nina Christen dominant recent women.",
  category: "precision-sports",
  subCategory: "ISSF air rifle (10 m standing)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: true, isParalympic: true, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "major",
  countryOfOrigin: "DE",
  regionOfOrigin: "Germany + Central Europe (ISSF Munich)",
  estimatedOrigin: "Air rifle target shooting formalised early 20th century; ISSF 10 m format codified 1966; Olympic since Los Angeles 1984",
  players: { min: 1, max: 2, note: "Individual event; Mixed Team = 1 man + 1 woman pair." },
  equipment: [
    { name: "10 m Air Rifle (4.5 mm / .177 cal)", description: "PCP or spring-piston air rifle; strict ISSF weight limit (5.5 kg incl. sights); mechanical or open sights only (no optics)." },
    { name: "Air pellet 4.5 mm", description: "Precision .177 caliber lead pellet; standard weight class." },
    { name: "10-ring paper / electronic target", description: "Modern Olympic uses electronic scoring — 0.5 mm 10-ring at 10 m." },
    { name: "Shooting jacket + trousers + boots", description: "Stiffened match jacket; ISSF standardised specifications for weight, thickness, stiffness." },
    { name: "Sight (diopter / aperture)", description: "Iron aperture sight only; no telescope or magnifying optics." },
  ],
  duration: { approximateMinutes: 75, structure: "Qualifying: 60 shots in 75 min. Final: ~35 min elimination bracket." },
  objective: "Achieve highest total score by placing shots as close to target center as possible.",
  matchStructure: "Qualifying (60 shots) → top 8 → Final (24-shot elimination format).",
  basicRules: [
    { title: "Standing unsupported position only", body: "Shooter stands, rifle unsupported (no bipod/rest); can rest cheek on stock, elbow on hip." },
    { title: "Integer scoring qualifying (1-10)", body: "Qualifying uses integer scoring; Final uses decimal (10.9 max per shot)." },
    { title: "60 shots qualification, 75 min", body: "Includes preparation + shot time; own pace within window." },
  ],
  advancedRules: [
    { title: "Final elimination format", body: "8 finalists shoot 2-shot series; after 3rd series, lowest-cumulative shooter eliminated every 2 shots. Last 2 shoot for gold." },
    { title: "Equipment inspection", body: "Rifle weight, trigger pull, jacket/trousers stiffness all checked; failure = DSQ." },
    { title: "Mixed Team format (Tokyo 2020+)", body: "1 man + 1 woman team; combined qualifying score; Bronze + Gold matches." },
  ],
  scoring: {
    summary: "Qualifying: sum of integer 1-10 per shot × 60 = /600 max. Final: sum of decimal 10.9 per shot.",
    winCondition: "Highest final total wins; in eliminating final, last shooter standing wins.",
    breakdown: [{ action: "Bullseye 10.9 (finals)", points: "10.9" }, { action: "Ring 1-10 integer (qualifying)", points: "1-10" }],
  },
  penalties: [
    { title: "Time-limit violation", body: "Shot fired after time = score not counted." },
    { title: "Equipment failing inspection", body: "DSQ if uncorrectable." },
    { title: "Foot position violation", body: "Warning; repeat = point deduction." },
  ],
  positions: [{ name: "10 m Air Rifle Shooter", role: "Solo standing shooter.", count: 1 }],
  officiating: { officials: ["ISSF Chief Range Officer", "Jury of Appeal", "Timekeeper", "Equipment Inspector", "Electronic Target Operator"], summary: "ISSF Jury oversees; equipment strictly inspected pre-match; electronic targets provide real-time scoring." },
  governingBodies: [
    { name: "International Shooting Sport Federation (ISSF)", founded: 1907, headquarters: "Munich, Germany" },
    { name: "USA Shooting", founded: 1995, headquarters: "Colorado Springs" },
    { name: "National Rifle Association of India", founded: 1951, headquarters: "New Delhi" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games — 10 m Air Rifle (M, W, Mixed Team)", frequency: "quadrennial", founded: 1984, region: "worldwide (Olympic)" },
    { name: "ISSF World Championships", frequency: "quadrennial", founded: 1897, region: "worldwide" },
    { name: "ISSF World Cup — 10 m Air Rifle", frequency: "~4-6 events annually", founded: 1986, region: "worldwide" },
    { name: "Commonwealth Games — 10 m Air Rifle", frequency: "quadrennial", founded: 1966, region: "Commonwealth" },
  ],
  countriesPlayed: ["DE", "CN", "IN", "RU", "US", "IT", "AT", "CH", "HU", "SI", "KR", "JP", "FR"],
  famousAthletes: ["Abhinav Bindra (IND) — Beijing 2008 gold (first individual Indian Olympic gold)", "Zhu Qinan (CHN) — Athens 2004 gold", "Alin Moldoveanu (ROU) — London 2012 gold", "Niccolò Campriani (ITA) — Rio 2016 gold", "William Shaner (USA) — Tokyo 2020 gold", "Nina Christen (SUI)", "Sheileen Waibel (AUT)"],
  records: [
    { title: "Abhinav Bindra Beijing 2008", holder: "Abhinav Bindra (IND)", value: "First individual Olympic gold medal for India — won men's 10 m Air Rifle at Beijing 2008", year: 2008 },
    { title: "Olympic since Los Angeles 1984", holder: "IOC", value: "10 m Air Rifle men + women both introduced at LA 1984 Olympics", year: 1984 },
    { title: "Mixed Team debut Tokyo 2020", holder: "IOC", value: "10 m Air Rifle Mixed Team format added at Tokyo 2020 Olympics", year: 2020 },
  ],
  variants: ["10m-air-rifle-mens", "10m-air-rifle-womens", "10m-air-rifle-mixed-team", "10m-air-rifle-para-sh1", "10m-air-rifle-para-sh2"],
  relatedSports: ["10m-air-pistol", "50m-rifle-3-positions", "smallbore-rifle", "shooting-sports"],
  skills: ["breath control", "trigger control (light-pull)", "core stability standing", "sight-picture consistency", "match temperament"],
  strategies: [
    { title: "Trigger break during natural pause", body: "Break trigger during natural respiratory pause — 3-5 sec optimal window per shot cycle." },
    { title: "Consistent hold pattern", body: "Same stance, hold, cheek weld shot-to-shot; small drift = lost decimals." },
    { title: "Final elimination pacing", body: "Manage adrenaline during eliminating final — mental composure often decides gold." },
  ],
  terminology: [
    { term: "PCP / spring-piston", meaning: "Pre-charged pneumatic / spring-driven air rifle types" },
    { term: "Diopter sight", meaning: "Aperture iron sight (no optics allowed)" },
    { term: "10.9", meaning: "Max decimal score per shot in ISSF finals" },
    { term: "Elimination final", meaning: "Progressive shooter elimination final format" },
    { term: "Mixed Team", meaning: "1 man + 1 woman team format (Olympic since 2020)" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Club range + basic stance", body: "Learn standing position + basic breath/trigger control." }] },
    { level: "intermediate", steps: [{ title: "Regional matches, 550+ in 60-shot", body: "Compete regionally; target 550+/600 qualifying scores." }] },
    { level: "advanced", steps: [{ title: "ISSF World Cup / Olympic qualifying", body: "Elite training + 620+/632 max qualifying; compete at ISSF WC + Olympic qualifier events." }] },
  ],
  faq: [
    { question: "How small is the 10 m Air Rifle bullseye?", answer: "The 10-ring at 10 m is 0.5 mm in diameter — smaller than a pinhead at that distance. Elite shooters routinely put 60 shots all in the 10 ring (600/600 possible)." },
    { question: "Is 10 m Air Rifle in the Olympics?", answer: "Yes — men's + women's individual events since 1984, mixed team since Tokyo 2020. Also Paralympic (SH1 + SH2 classifications for shooters with different physical capabilities)." },
  ],
  wikipediaTitle: "10 metre air rifle",
  sources: [{ label: "Wikipedia — 10 metre air rifle", url: "https://en.wikipedia.org/wiki/10_metre_air_rifle", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default airRifle10m;
