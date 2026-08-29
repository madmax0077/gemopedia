import type { Sport } from "@/lib/types";

export const wheelchairRugby: Sport = {
  id: "wheelchair-rugby",
  slug: "wheelchair-rugby",
  name: "Wheelchair Rugby",
  officialName: "Wheelchair Rugby (World Wheelchair Rugby - WWR)",
  aliases: ["Murderball", "Quad Rugby", "WCR"],
  shortDescription:
    "Paralympic contact team sport — 4v4 hybrid rugby-basketball-handball in specialized armored wheelchairs; players hit each other's wheelchairs to disrupt; contested at Paralympics since Sydney 2000; nicknamed 'Murderball'.",
  longDescription:
    "Wheelchair Rugby (nicknamed 'Murderball' from the eponymous 2005 Oscar-nominated documentary) is a Paralympic contact team sport — 4v4 hybrid rugby-basketball-handball played by athletes with impairments to all 4 limbs (quadriplegic athletes primarily). Invented in Canada in 1976 to fill a gap for quadriplegic athletes who couldn't play wheelchair basketball (which requires hand function). Players use specialized armored wheelchairs with wide bumpers designed for wheelchair-to-wheelchair contact. Ball is carried on lap or bounced/passed. Score by carrying ball across opponent's try line — 4-wheel contact required. World Wheelchair Rugby (WWR) has governed since 2010. Paralympic since Sydney 2000. USA + Australia + Canada + Great Britain + Japan dominate. Legendary players: Andy Cohn (US — dominant player 2000s), Ryley Batt (Australia — 3× Paralympic gold), Chuck Aoki (US — long career + Paralympic silver), Bryce Alman (Canada — 2× Paralympic bronze).",

  category: "ball-sports",
  subCategory: "paralympic contact team sport — hybrid rugby-basketball in wheelchairs",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: true,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (Winnipeg 1976); WWR governs since 2010; Paralympic since Sydney 2000",
  estimatedOrigin: "Invented Winnipeg Canada 1976 by quadriplegic athletes seeking rugby-like alternative; WWR founded 2010; Paralympic Sydney 2000",

  players: { perTeam: 4, min: 4, max: 4, substitutes: 8, note: "4v4 on court; 12-person roster; classification system limits team total to 8 points." },
  field: {
    surfaceName: "Basketball court",
    dimensions: "FIBA basketball court: 28m × 15m; 8m-wide try line at each end",
    description: "Standard basketball court; goal areas 1.75m deep at each end; small key area under try line.",
  },
  equipment: [
    { name: "Armored sport wheelchair", description: "Purpose-built with wide bumpers designed for wheelchair collisions. Offensive chairs = maneuverable + fast; Defensive chairs = wide + collision-resistant. Cost $3,000-$8,000." },
    { name: "Volleyball (standard)", description: "Regulation volleyball; adapted for handling by athletes with limited hand function." },
    { name: "Athletic apparel", description: "Standard sport gear." },
    { name: "Anti-tip devices + protective straps", description: "Prevent tips + secure athletes in chair." },
  ],
  duration: { approximateMinutes: 32, structure: "4 × 8-min quarters; running clock; overtime periods if tied." },
  objective: "Carry volleyball across opponent's try line with 4 wheels of chair crossing simultaneously.",
  matchStructure: "4 quarters × 8 min. Continuous play; possession changes on turnover. Standard basketball court + rules structure.",

  basicRules: [
    { title: "4 vs 4", body: "4 players per side; 8-person bench for substitutions." },
    { title: "Classification points limit", body: "On-court 4 players' total classification cannot exceed 8 points (0.5-3.5 per player)." },
    { title: "Score = 4 wheels over try line", body: "Ball-carrier must cross try line with all 4 wheels of chair simultaneously = 1 point." },
    { title: "Ball carried on lap or bounced", body: "Ball may be carried, bounced, or passed. Must bounce or pass every 10 seconds." },
    { title: "10-second inbounds rule", body: "After inbounds, team has 10 seconds to advance ball past mid-court." },
    { title: "12-second attack rule", body: "Attack must reach opponent's key area within 12 seconds of inbounding." },
    { title: "40-second possession rule", body: "Team must score within 40 seconds of possession or turnover." },
    { title: "Physical contact required", body: "Wheelchair-to-wheelchair contact is core to defense; illegal only if wheels come off ground." },
  ],
  scoring: {
    summary: "1 point per try (4 wheels over try line). Higher score wins.",
    winCondition: "Higher try count at end of regulation; overtime for tied games.",
    breakdown: [
      { action: "Try (4 wheels over line)", points: "1" },
      { action: "Overtime try", points: "1 (may end sudden death)" },
    ],
  },

  positions: [
    { name: "High-pointer (3.0-3.5 points)", role: "Primary ball carrier + goal scorer.", count: 1 },
    { name: "Mid-pointer (1.5-2.5 points)", role: "Versatile role.", count: 1 },
    { name: "Low-pointer (0.5-1.0 points)", role: "Defensive specialist; wide bumper chair.", count: 2 },
  ],
  officiating: {
    officials: ["2 Referees (on-court)", "Scorer + Timekeeper", "12-second operator + 40-second operator"],
    summary: "3-5 officials per game; WWR-certified for international events.",
  },

  governingBodies: [
    { name: "World Wheelchair Rugby (WWR)", founded: 2010, headquarters: "Canada", website: "https://worldwheelchair.rugby" },
    { name: "US Quad Rugby Association", founded: 1988, headquarters: "USA" },
    { name: "Great Britain Wheelchair Rugby", founded: 1999, headquarters: "UK" },
  ],
  majorCompetitions: [
    { name: "Summer Paralympic Games (Wheelchair Rugby)", frequency: "quadrennial", founded: 2000, region: "worldwide" },
    { name: "IWRF World Championships", frequency: "biennial (previously quadrennial)", founded: 1995, region: "worldwide" },
    { name: "IWRF Continental Championships", frequency: "biennial", founded: 2005, region: "regional" },
    { name: "USA Quad Rugby National Championship", frequency: "annual", founded: 1988, region: "USA" },
  ],
  countriesPlayed: ["US", "AU", "CA", "GB", "JP", "NZ", "DE", "FR", "SE", "BR", "DK", "BE", "CH"],
  famousAthletes: [
    "Ryley Batt (Australia — 3× Paralympic gold 2012+2016 + 2020; longest dominant era)",
    "Chuck Aoki (US — long career + multiple Paralympic silver)",
    "Andy Cohn (US — dominant player 2000s)",
    "Josh Wheeler (US — Paralympic gold + Hall of Fame)",
    "Bryce Alman (Canada — 2× Paralympic bronze)",
    "Kae Kuroda (Japan — modern Paralympic contender)",
    "Aaron Roux (Canada — multi-time Paralympic medal)",
    "Ricky Betar (Australia — Paralympic gold 2020)",
  ],
  records: [
    { title: "Most Paralympic wheelchair rugby gold", holder: "USA + Australia (tied leaders)", value: "Multiple Paralympic golds each; competitive across nations", year: 2020 },
    { title: "Australian dominance recent era", holder: "Australia", value: "3 consecutive Paralympic golds London 2012 + Rio 2016 + Tokyo 2020", year: 2021 },
    { title: "Sport nickname", holder: "Wheelchair Rugby", value: "Nicknamed 'Murderball' from 2005 Oscar-nominated documentary", year: 2005 },
    { title: "Paralympic debut", holder: "Sydney 2000", value: "Full medal event debut", year: 2000 },
    { title: "Sport invention", holder: "Winnipeg 1976", value: "Invented by quadriplegic athletes seeking alternative to wheelchair basketball", year: 1976 },
  ],

  variants: ["wwr-standard-4v4-wheelchair-rugby", "quad-rugby-league-clubs", "junior-wheelchair-rugby"],
  relatedSports: ["wheelchair-basketball", "rugby-league", "rugby-union", "handball"],

  skills: ["wheelchair mobility + physicality", "one-handed passing + ball handling (many players have limited hand function)", "physical + mental toughness (contact sport)", "positional play + spacing", "team system + coordination"],

  terminology: [
    { term: "Wheelchair Rugby", meaning: "4v4 paralympic hybrid rugby-basketball played in armored wheelchairs." },
    { term: "Murderball", meaning: "Sport's colorful nickname; also 2005 Oscar-nominated documentary." },
    { term: "WWR", meaning: "World Wheelchair Rugby; world governing body since 2010." },
    { term: "IWRF", meaning: "International Wheelchair Rugby Federation (predecessor)." },
    { term: "Classification", meaning: "Player rating 0.5-3.5 by physical function; team total limited to 8 points." },
    { term: "Try line", meaning: "8m-wide goal line at each end; 4 wheels over = 1 point." },
    { term: "Try", meaning: "Score; ball-carrier crosses try line with all 4 wheels." },
    { term: "Ryley Batt", meaning: "Australian; 3× Paralympic gold; sport's dominant modern player." },
    { term: "Andy Cohn", meaning: "US; dominant player 2000s + Hall of Fame." },
  ],

  faq: [
    { question: "What is Wheelchair Rugby?", answer: "A Paralympic contact team sport — 4v4 hybrid rugby-basketball-handball played by athletes with impairments to all 4 limbs (quadriplegic athletes primarily). Nicknamed 'Murderball' from the 2005 Oscar-nominated documentary. Players use specialized armored wheelchairs with wide bumpers designed for wheelchair-to-wheelchair contact. Score by carrying ball across opponent's try line — 4 wheels must cross simultaneously. Paralympic since Sydney 2000." },
    { question: "How is Wheelchair Rugby different from Wheelchair Basketball?", answer: "Wheelchair Rugby: 4v4 hybrid rugby-basketball-handball; try line scoring; contact-heavy including deliberate wheelchair collisions. Wheelchair Basketball: 5v5 basketball in wheelchairs; standard hoop + court; less physical contact. Wheelchair Rugby specifically designed for quadriplegic athletes; Wheelchair Basketball has more player mobility." },
    { question: "Who is the greatest wheelchair rugby player?", answer: "Ryley Batt (Australia) — 3× Paralympic gold (2012+2016+2020); longest dominant era in the sport. Others: Chuck Aoki (US — long career + multiple Paralympic silver), Andy Cohn (US — dominant player 2000s), Josh Wheeler (US — Paralympic gold + Hall of Fame)." },
    { question: "Is Wheelchair Rugby in the Olympics?", answer: "No, but at every Summer Paralympics since Sydney 2000. One Paralympic gold medal event (open — men + women compete together in mixed teams). Paralympic Games run alongside Olympic Games in same host city." },
  ],

  wikipediaTitle: "Wheelchair rugby",
  sources: [{ label: "World Wheelchair Rugby", url: "https://worldwheelchair.rugby", publisher: "WWR" }, { label: "Wikipedia — Wheelchair rugby", url: "https://en.wikipedia.org/wiki/Wheelchair_rugby", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
