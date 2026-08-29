import type { Sport } from "@/lib/types";

export const halfMarathon: Sport = {
  id: "half-marathon",
  slug: "half-marathon",
  name: "Half Marathon",
  officialName: "Half Marathon (21.0975 km / 13.1094 miles)",
  aliases: ["Half", "HM", "21.1 km"],
  shortDescription:
    "The 21.0975 km road racing distance — a highly popular participation event bridging 10K and marathon, contested worldwide with 300+ races and elite times under 58 minutes.",
  longDescription:
    "The half marathon has exploded from a training race to a major standalone event since the 2000s. World Athletics recognized official records from 1990. Yalemzerf Yehualaw (ETH) held the women's WR at 1:03:44; Jacob Kiplimo (UGA) set the men's WR at 57:31 in Lisbon 2021. Major half marathons (Copenhagen, Valencia, Berlin, NYC, Great North Run) attract 20-40K participants. IAAF World Half Marathon Championships held biennially since 1992.",

  category: "athletics",
  subCategory: "road-race distance event (21.0975 km)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "Great Britain (Great North Run 1981; official IAAF record from 1990)",
  estimatedOrigin: "Modern half marathon standardized 1980s; IAAF records from 1990; World Championships from 1992",

  players: { min: 1, max: 40000, note: "Elite field of 30-50 + tens of thousands of mass runners in majors." },
  field: {
    surfaceName: "Road course",
    dimensions: "21.0975 km (13.1094 miles)",
    description: "AIMS-certified road courses through cities." },
  equipment: [
    { name: "Racing shoes (super-shoes)", description: "Carbon-plated racers (Vaporfly, Adios Pro) legal within 40mm sole rule." },
    { name: "Race kit + bib", description: "Singlet + shorts + electronic chip bib." },
    { name: "Nutrition", description: "1-2 gels + water/electrolyte at 5K + 15K aid stations." },
    { name: "GPS watch", description: "Split monitoring + pacing." },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "Elite: 58-70 min. Amateur: 90-150 min. Timing cut-off: 3-4 hours." },

  objective:
    "Finish the 21.0975 km course in the shortest time.",
  matchStructure:
    "Mass-start (wave-based for large fields). Point-to-point OR loop course. Aid stations every 5 km.",

  basicRules: [
    { title: "Certified distance", body: "Courses AIMS-certified for record eligibility." },
    { title: "Cut-off time", body: "Course closes after 3-4 hours; latecomers finish as pedestrians." },
    { title: "Aid stations", body: "Water + sports drink every 3-5 km." },
    { title: "Chip timing", body: "Gun time OR net time (from crossing start mat)." },
    { title: "Course markers", body: "5K/10K/15K/20K + finish; splits recorded." },
  ],
  advancedRules: [
    { title: "Elite pacemakers", body: "Legal in Diamond League + Majors; must exit at set distance." },
    { title: "Course elevation rules", body: "Net elevation loss ≤ 42m + no drop >1m/km for record eligibility." },
    { title: "Anti-doping", body: "WADA + AIU testing at all major races." },
    { title: "Age-group + gender categories", body: "5-year age brackets + male/female awards." },
  ],
  scoring: {
    summary: "Finish time; ranked overall + by age group + gender.",
    winCondition: "First across finish line (elite); age-group + gender podiums for masses.",
    breakdown: [
      { action: "Major HM winner", points: "$25K-$75K prize" },
      { action: "World Record bonus", points: "$50K+" },
      { action: "Age-group podium", points: "Recognition" },
    ],
  },
  penalties: [
    { title: "Course cutting", body: "DQ." },
    { title: "Aid station support outside", body: "Elite only: legal only from personal handlers." },
    { title: "Doping violation", body: "2-4 year ban." },
  ],

  positions: [
    { name: "Runner", role: "Individual competitor.", count: 1 },
  ],
  officiating: {
    officials: ["Race director", "Course marshals", "Timing crew"],
    summary: "AIMS + World Athletics certification for record status.",
  },

  governingBodies: [
    { name: "World Athletics", founded: 1912, headquarters: "Monaco", website: "https://worldathletics.org" },
    { name: "Association of International Marathons (AIMS)", founded: 1982, headquarters: "Rome, Italy", website: "https://aimsworldrunning.org" },
  ],
  majorCompetitions: [
    { name: "World Athletics Half Marathon Championships", frequency: "biennial", founded: 1992, region: "rotating" },
    { name: "Great North Run (UK, largest)", frequency: "annual (Sept)", founded: 1981, region: "Newcastle, UK — 60K+ runners" },
    { name: "Valencia Half Marathon", frequency: "annual (Oct)", founded: 1991, region: "Valencia, Spain — fast course" },
    { name: "Berlin Half Marathon", frequency: "annual (April)", founded: 1985, region: "Berlin, Germany" },
    { name: "United Airlines NYC Half", frequency: "annual (March)", founded: 2006, region: "New York, USA" },
  ],
  countriesPlayed: ["KE", "ET", "UG", "GB", "US", "ES", "DE", "IT", "AU", "JP"],
  famousAthletes: [
    "Jacob Kiplimo (UGA, WR 57:31 Lisbon 2021)",
    "Yalemzerf Yehualaw (ETH, WR 1:03:44 Aug 2022)",
    "Peres Jepchirchir (KEN, multiple WR)",
    "Zersenay Tadese (ERI, prior WR holder)",
    "Molly Seidel (US, Olympic marathon bronze 2020)",
  ],
  records: [
    { title: "Men's Half Marathon WR", holder: "Jacob Kiplimo (UGA)", value: "57:31 (Lisbon 2021)", year: 2021 },
    { title: "Women's Half Marathon WR", holder: "Yalemzerf Yehualaw (ETH)", value: "1:03:44 (Antrim 2022)", year: 2022 },
    { title: "Largest Half Marathon", holder: "Great North Run", value: "60,000+ participants annually", year: 2023 },
  ],

  variants: ["10-km-road-race", "marathon-running", "quarter-marathon"],
  relatedSports: ["marathon", "long-distance-running", "10-km-road-race"],

  skills: [
    "aerobic endurance",
    "lactate threshold pacing",
    "nutrition + hydration",
    "mental persistence",
    "efficient running form",
  ],
  strategies: [
    { title: "Even pacing", body: "Best HMs run with 0-2 second per km variance." },
    { title: "Negative split", body: "Second half faster than first — hardest but most successful pacing." },
    { title: "Fuel at 5K + 15K", body: "1-2 gels + electrolyte adequate for elite HM efforts." },
    { title: "Draft in the pack", body: "Save 3-5% energy in group of 5-10 runners." },
  ],

  terminology: [
    { term: "HM", meaning: "Abbreviation for Half Marathon." },
    { term: "Negative split", meaning: "Running second half faster than first." },
    { term: "PB / PR", meaning: "Personal best / personal record." },
    { term: "Cutoff time", meaning: "Race course closes after this time." },
    { term: "Elevation profile", meaning: "Cumulative uphill + downhill over 21.1 km course." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Build to 20 miles/week", body: "3 months of consistent running with 1 long run of 8-10 miles." },
        { title: "Follow a 12-week HM plan", body: "Hal Higdon or similar plans; peak at 13-mile long run." },
        { title: "Finish first HM", body: "Goal: complete in 2:15-2:30 for first-time runner." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Sub-90-minute HM", body: "Requires 40+ miles/week + tempo runs + intervals." },
        { title: "Sub-70-minute HM", body: "Elite amateur; requires 70+ miles/week + coach." },
        { title: "Enter Diamond League HM", body: "Sub-1:00 opens elite fields at Majors + WA HM Champs." },
      ],
    },
  ],

  faq: [
    { question: "How long is a half marathon?", answer: "Exactly 21.0975 km or 13.1094 miles — half the marathon distance of 42.195 km." },
    { question: "How long to train for a first half?", answer: "12-16 weeks if you can already run 3-5 miles comfortably. Complete beginners need 6+ months of base building first." },
    { question: "What's a good HM time?", answer: "Beginner: sub-2:30. Intermediate: sub-2:00. Advanced: sub-1:30. Elite: sub-1:10 (women) / sub-1:03 (men)." },
    { question: "Why is Valencia so fast?", answer: "Flat course + typically 12-15°C temps in October + excellent pacemakers make Valencia the world's fastest HM course." },
  ],

  sources: [
    { label: "Wikipedia — Half marathon", url: "https://en.wikipedia.org/wiki/Half_marathon", publisher: "Wikipedia" },
    { label: "AIMS official", url: "https://aimsworldrunning.org", publisher: "AIMS" },
  ],
  wikipediaTitle: "Half marathon",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
