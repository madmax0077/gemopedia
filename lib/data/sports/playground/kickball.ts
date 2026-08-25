import type { Sport } from "@/lib/types";

export const kickball: Sport = {
  id: "kickball",
  slug: "kickball",
  name: "Kickball",
  officialName: "Kickball",
  aliases: ["Kick Baseball", "Soccer Baseball (Canada)"],
  shortDescription:
    "American playground + adult league team sport combining SOCCER + BASEBALL. 9-11 players per team; batter KICKS PITCHED BALL + runs bases (like baseball). Invented USA 1917. Ubiquitous US elementary school PE + growing adult recreation leagues. Governing body: WAKA + Kickball 365. Simple, accessible, social.",
  longDescription:
    "Kickball is AMERICAN PLAYGROUND + ADULT LEAGUE TEAM SPORT combining elements of SOCCER + BASEBALL. Invented USA 1917 (Ohio) as SCHOOL PE ADAPTATION for teaching baseball fundamentals without complex bat/pitch skills. Ubiquitous US ELEMENTARY SCHOOL PE. GAMEPLAY: Uses BASEBALL DIAMOND (regulation kickball diamond has bases 18m apart — smaller than baseball's 27.4m). Team at 'BAT' (KICK); other team fielding. Pitcher ROLLS large red rubber KICKBALL (~25cm diameter) toward home plate. Batter KICKS the ball then RUNS bases (1st → 2nd → 3rd → home) scoring RUN on full circuit. Fielders catch/throw player out. 9-11 players per team; typically 9 innings in adult play, fewer in school. Fielding + out rules match baseball. RULES SIMPLIFIED — no complex pitching, hitting mechanics — hence accessible to all skill levels. MASSIVE US ADULT KICKBALL SCENE — WAKA (World Adult Kickball Association) founded 1998; hundreds of city leagues; often SOCIAL RECREATION with bar sponsorship. Also popular US SUMMER CAMPS + CORPORATE TEAM BUILDING. Kickball 365 (KB365) + Major League Kickball (MLK) also organize adult leagues. In Canada, called SOCCER BASEBALL. Considered ULTIMATE ACCESSIBLE TEAM SPORT — nearly anyone can play immediately.",
  category: "playground-games",
  subCategory: "American baseball-derived kick-and-run team sport",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isProfessional: false,
  season: "summer",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Cincinnati, Ohio, 1917)",
  estimatedOrigin: "1917 Ohio, USA (Nicholas C. Seuss, school PE); WAKA founded 1998; Major League Kickball 2010s",
  players: { min: 8, max: 11, note: "9-11 per team typical; casual play more flexible." },
  field: { surfaceName: "baseball-style diamond", dimensions: "bases 18m apart (smaller than baseball)", description: "4-base diamond similar to baseball but smaller; large red rubber kickball." },
  equipment: [
    { name: "Kickball (large red rubber ball ~25cm diameter)", description: "€10-25" },
    { name: "4 bases + home plate", description: "Facility-provided" },
    { name: "No bat needed (players kick with feet)", description: "Accessibility advantage" },
  ],
  duration: { approximateMinutes: 45, structure: "Adult leagues: 7-9 innings typical (45-90 min); schools: 3-5 innings (20-40 min)." },
  objective: "Score more runs than opponent by kicking ball + running around bases.",
  basicRules: [
    { title: "Pitcher ROLLS ball toward home plate", body: "Ball must roll (not bounce) into strike zone." },
    { title: "Batter KICKS ball with foot", body: "No bat; foot-only contact." },
    { title: "Run bases (1st → 2nd → 3rd → home)", body: "Score RUN on full circuit; like baseball." },
    { title: "Fielders catch or throw player out", body: "Out rules match baseball." },
    { title: "3 outs = inning over; teams switch offense/defense", body: "Baseball structure." },
    { title: "First-degree kickers OUT if hit with ball on run (thrown at)", body: "Optional 'pegging' rule in some leagues (controversial safety issue)." },
    { title: "Some adult leagues ban pegging for safety", body: "Rule variations." },
  ],
  scoring: {
    summary: "1 run per player completing bases circuit. Team with more runs wins.",
    breakdown: [
      { action: "Full circuit around all 4 bases (RUN)", points: "1 run" },
      { action: "Home run (ball kicked over outfield fence)", points: "1 run per runner on base" },
      { action: "Team win", points: "Season standings" },
    ],
    winCondition: "More runs than opponent after regulation innings.",
  },
  governingBodies: [
    { name: "World Adult Kickball Association (WAKA)", founded: 1998, headquarters: "Reston, Virginia, USA", website: "https://www.kickball.com/" },
    { name: "Kickball 365 (KB365)", founded: 2015, headquarters: "USA" },
    { name: "Major League Kickball (MLK)", founded: 2015, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "WAKA National Championship", frequency: "annual", founded: 1998, region: "USA" },
    { name: "MLK Kickball Championship", frequency: "annual", founded: 2015, region: "USA" },
    { name: "Various city adult leagues (hundreds of US cities)", frequency: "seasonal", founded: 2000, region: "USA" },
  ],
  countriesPlayed: ["US", "CA", "MX", "GB", "AU", "PH"],
  famousAthletes: [
    "Kickball is recreational; no famous 'professional' players",
    "Some Major League Kickball features amateur stars",
  ],
  variants: [
    "kickball-standard-9v9-adult-recreational",
    "school-kickball-simplified-rules-elementary-PE",
    "coed-kickball-mixed-gender-team",
    "beach-kickball-sand-variant",
    "wiffle-kickball-hybrid-variants",
  ],
  relatedSports: ["baseball", "softball", "rounders", "cricket"],
  skills: ["kicking accuracy (for direction + power)", "running speed", "throwing", "catching", "reading pitcher's roll"],
  strategies: [
    { title: "Aim kicks — soft into gaps vs power kicks", body: "Placement more valuable than pure power." },
    { title: "Team hitting order — put contact kickers early", body: "Baseball-style lineup strategy." },
    { title: "Fielding positioning — infield vs outfield decisions", body: "Match opponents' kicking tendencies." },
    { title: "Coed rules variation — teams often gender-balanced", body: "Adjust strategy accordingly." },
  ],
  terminology: [
    { term: "Kickball", meaning: "Sport name; large red rubber ball." },
    { term: "WAKA", meaning: "World Adult Kickball Association — largest US adult league organizer." },
    { term: "Pegging", meaning: "Hitting runner with ball to record out (banned in many adult leagues)." },
    { term: "Home base / plate", meaning: "Starting/scoring base." },
    { term: "Kicker", meaning: "Player at bat position kicking the pitched ball." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Elementary school PE (US)", body: "Most Americans learn kickball as children." },
      { title: "Join adult city league (WAKA or KB365)", body: "Hundreds of US city leagues." },
    ]},
    { level: "intermediate", steps: [
      { title: "Join competitive amateur league", body: "Playoffs + championship." },
    ]},
    { level: "advanced", steps: [
      { title: "Major League Kickball or WAKA National Championship", body: "Highest-level competition." },
    ]},
  ],
  faq: [
    { question: "What is Kickball?", answer: "AMERICAN PLAYGROUND + ADULT LEAGUE TEAM SPORT combining SOCCER + BASEBALL. Invented USA 1917 (Ohio) as SCHOOL PE adaptation. Uses baseball-style diamond (bases 18m apart, smaller than baseball); 9-11 players per team. Pitcher ROLLS large red rubber ball; batter KICKS + runs bases. Score RUN on full circuit. Rules simplified — no bat, no pitching mechanics — hence ULTIMATE ACCESSIBLE team sport. Ubiquitous US elementary schools + massive ADULT LEAGUE scene (WAKA, MLK, KB365)." },
    { question: "How is Kickball different from Baseball?", answer: "KICKBALL uses FOOT contact with LARGE RUBBER BALL; BASEBALL uses BAT + hard baseball. KICKBALL smaller diamond (18m bases); BASEBALL 27.4m. KICKBALL pitcher ROLLS ball; BASEBALL pitcher THROWS. KICKBALL simpler rules — no strike/ball complex mechanics; BASEBALL complex. Kickball 7-9 innings; Baseball 9. KICKBALL RECREATIONAL/PLAYGROUND; BASEBALL PROFESSIONAL. Both use same base-running + fielding rules — Kickball simplifies pitching + hitting mechanics." },
    { question: "Is Kickball a serious adult sport?", answer: "YES — massive adult recreation industry in USA. WAKA (World Adult Kickball Association, founded 1998) has HUNDREDS of city leagues + hundreds of thousands of adult participants annually. Major League Kickball (MLK) organizes competitive leagues. Adult kickball often SOCIAL — team practices at bar, tournaments as social events. NOT a professional sport (no salaried pro players); NO Olympic recognition. But adult leagues thrive as low-barrier team sport for post-college adults. Popular with young professionals in US cities." },
  ],
  wikipediaTitle: "Kickball",
  sources: [
    { label: "WAKA — World Adult Kickball Association", url: "https://www.kickball.com/", publisher: "WAKA" },
    { label: "Wikipedia — Kickball", url: "https://en.wikipedia.org/wiki/Kickball", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
