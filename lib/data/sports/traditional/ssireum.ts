import type { Sport } from "@/lib/types";

export const ssireum: Sport = {
  id: "ssireum",
  slug: "ssireum",
  name: "Ssireum",
  officialName: "Ssireum (씨름)",
  aliases: ["Korean Wrestling", "Belt Wrestling (Korean)"],
  shortDescription:
    "Traditional Korean wrestling. 2 wrestlers grip each other's SATBA (fabric belt) around waist + thigh, attempting to throw opponent to ground. Ancient — documented in Goguryeo tomb murals 4th century. UNESCO Immaterial Cultural Heritage 2018 (jointly with North Korea — first such joint designation). Modern professional league Korea Ssireum Association.",
  longDescription:
    "Ssireum (씨름) is TRADITIONAL KOREAN WRESTLING with ancient roots. Documented in GOGURYEO TOMB MURALS (4th century) + throughout Korean history as harvest festival + royal court sport. UNESCO IMMATERIAL CULTURAL HERITAGE 2018 — JOINTLY DESIGNATED with NORTH KOREA (first such joint inscription — historic diplomatic moment). GAMEPLAY: 2 WRESTLERS wear SATBA (fabric belt) around waist + thigh. Grip opponent's satba with both hands + attempt to THROW to ground. WIN = any body part above knee touches ground. NO PUNCHES OR KICKS. Traditional bouts on SAND CIRCLE (7-9m diameter). WEIGHT CLASSES since modernization: TAEBAEK (lightest 80-85 kg), GEUMGANG (85-90), HALLA (90-95), BAEKDU (heaviest 95+). PROFESSIONAL LEAGUE established 1983 (KOREA SSIREUM ASSOCIATION). Historical CHAMPIONS given title 'CHEONHA JANGSA' (Strongest under Heaven). GRAND CHAMPION historically received LIVE BULL as prize (dating from Joseon Dynasty). MODERN CHAMPIONSHIP: Grand Baekdu (heaviest weight). Popular NATIONAL SPORT of Korea; declining popularity due to K-pop + baseball + soccer competition for youth attention. Considered CULTURAL TREASURE. Similar to: MONGOLIAN WRESTLING (bökh), JAPANESE SUMO, TURKISH OIL WRESTLING.",
  category: "combat-sports",
  subCategory: "traditional Korean belt wrestling",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "regional",
  countryOfOrigin: "KR",
  regionOfOrigin: "Korea (Goguryeo period, ~4th century) + North Korea",
  estimatedOrigin: "Documented in Goguryeo tomb murals 4th century; harvest festival tradition Joseon Dynasty; professional league 1983; UNESCO cultural heritage 2018",
  players: { min: 2, max: 2, note: "1-vs-1 wrestling; tournament formats with brackets." },
  field: { surfaceName: "sand circle", dimensions: "7-9m diameter", description: "Traditional sand-filled circular ring; modern professional venues use raised sand pit." },
  equipment: [
    { name: "Satba (fabric belt around waist + thigh)", description: "Traditional cloth belt; red + blue for opponent identification. €30-80" },
    { name: "Wrestling shorts (traditional or modern)", description: "€20-40" },
    { name: "Sand ring (traditional)", description: "Regulated depth for cushioning falls" },
  ],
  duration: { approximateMinutes: 5, structure: "Bouts typically <5 minutes; tournament formats bracket to championship." },
  objective: "Throw opponent so any body part above knee touches ground.",
  basicRules: [
    { title: "Both wrestlers grip opponent's satba", body: "Grip: right hand on opponent's belt at waist; left hand on their thigh belt." },
    { title: "Wrestle: throws, trips, lifts to ground opponent", body: "Any body part above knee touching ground = loss." },
    { title: "NO PUNCHES, KICKS, or GRABBING OUTSIDE SATBA", body: "Pure wrestling; body-part-above-knee-first-touches loses." },
    { title: "Weight classes since modern era: 80-85, 85-90, 90-95, 95+ kg", body: "Taebaek, Geumgang, Halla, Baekdu classes." },
    { title: "Match ends immediately on valid throw", body: "No fixed rounds; sudden victory." },
    { title: "Grand Champion (Cheonha Jangsa) title historically given", body: "Traditional prize: live bull; modern: trophy + prize money." },
  ],
  scoring: {
    summary: "Immediate win by throw. Tournament format: bracket single-elimination to Grand Champion.",
    breakdown: [
      { action: "Any body part above knee touches ground", points: "Opponent loses immediately" },
      { action: "Tournament bracket win", points: "Advance to next round" },
      { action: "Grand Champion (Cheonha Jangsa)", points: "Live bull (traditional) or prize money + title" },
    ],
    winCondition: "Throw opponent so body part above knee touches ground first.",
  },
  governingBodies: [
    { name: "Korea Ssireum Association", founded: 1983, headquarters: "Seoul, Korea", website: "https://www.ssireum.or.kr/" },
    { name: "World Ssireum Federation", founded: 1985, headquarters: "Korea" },
    { name: "UNESCO Immaterial Cultural Heritage 2018", founded: 2018, headquarters: "worldwide (joint with North Korea)" },
  ],
  majorCompetitions: [
    { name: "Korean National Ssireum Championship", frequency: "annual", founded: 1983, region: "Korea" },
    { name: "Grand Baekdu (heaviest weight national championship)", frequency: "annual", founded: 1983, region: "Korea" },
    { name: "World Ssireum Championships", frequency: "biennial", founded: 1985, region: "worldwide (small circuit)" },
  ],
  countriesPlayed: ["KR", "KP", "JP (Korean diaspora)", "US (diaspora)"],
  famousAthletes: [
    "Lee Man-ki (Korea) — Legendary 1980s ssireum champion",
    "Lee Tae-hyun (Korea) — Modern champion",
    "Kim Jong-mo (Korea) — Multiple Grand Baekdu titles",
  ],
  variants: [
    "ssireum-traditional-standard-belt-wrestling",
    "junior-ssireum-youth-categories",
    "senior-ssireum-open-class",
    "amateur-ssireum-clubs",
    "professional-ssireum-KSA-league",
  ],
  relatedSports: ["sumo", "mongolian-wrestling-bokh", "turkish-oil-wrestling", "senegalese-wrestling", "wrestling-freestyle"],
  skills: ["grip strength", "hip technique for throws", "balance + posture", "cardiovascular endurance", "quick reactions"],
  strategies: [
    { title: "Hip technique fundamental — 'Batdari' throws", body: "Standard Korean ssireum throws using hip leverage." },
    { title: "Break opponent's grip while maintaining yours", body: "Wrist snap + body positioning." },
    { title: "Weight distribution + balance", body: "Never overcommit; wait for opponent's off-balance moment." },
  ],
  terminology: [
    { term: "Ssireum (씨름)", meaning: "Korean traditional wrestling." },
    { term: "Satba (샅바)", meaning: "Fabric belt around waist + thigh; both wrestlers grip opponent's." },
    { term: "Cheonha Jangsa (천하장사)", meaning: "'Strongest under Heaven' — grand champion title." },
    { term: "Batdari (밭다리)", meaning: "Outside leg throw." },
    { term: "Andari (안다리)", meaning: "Inside leg throw." },
    { term: "Deuljang (들장)", meaning: "Lifting throw." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Find Korean cultural center or ssireum club (mostly Korea/Korean diaspora)", body: "Difficult outside Korea." },
      { title: "General wrestling background helpful", body: "Basic wrestling technique transfers." },
    ]},
    { level: "intermediate", steps: [
      { title: "Ssireum University programs in Korea", body: "Formal training + competition path." },
    ]},
    { level: "advanced", steps: [
      { title: "Professional Korea Ssireum Association contract", body: "Very small pro pool globally." },
    ]},
  ],
  faq: [
    { question: "What is Ssireum?", answer: "TRADITIONAL KOREAN WRESTLING — 2 wrestlers grip each other's SATBA (fabric belt around waist + thigh) attempting to throw opponent to ground. Ancient roots documented in Goguryeo tomb murals 4th century. UNESCO IMMATERIAL CULTURAL HERITAGE 2018 (JOINTLY with North Korea — first such joint designation). Weight classes: Taebaek/Geumgang/Halla/Baekdu (80-95+ kg). Win = any body part above knee touches ground. Grand Champion title = CHEONHA JANGSA ('Strongest under Heaven'). Traditional prize live bull. Cultural treasure of Korea." },
    { question: "How is Ssireum different from Sumo?", answer: "SIMILAR CONCEPT — 1v1 wrestling, throw opponent to ground = win. DIFFERENCES: SSIREUM uses SATBA (fabric belt) for gripping; SUMO uses MAWASHI (belt) with limited gripping. Ssireum wrestlers 80-95+ kg (moderate size); SUMO 100-200 kg (much heavier). Ssireum SAND CIRCLE (7-9m); Sumo DOHYO (4.55m). Ssireum has WEIGHT CLASSES; Sumo has no weight classes (all open). Both Ancient. Both cultural treasures. Both traditional handovers of national identity. Sumo more internationally famous; Ssireum less known outside Korea." },
    { question: "Is Ssireum in the Olympics?", answer: "NOT YET. Advocates push for Olympic inclusion. WORLD SSIREUM FEDERATION organizes biennial world championships but small international circuit. Also popular in Japanese Korean diaspora + US Korean-American communities. Featured at ASIAN GAMES 2002 (Busan, Korea). Not currently on IOC recognition path. UNESCO cultural heritage designation may help long-term Olympic case." },
  ],
  wikipediaTitle: "Ssireum",
  sources: [
    { label: "Wikipedia — Ssireum", url: "https://en.wikipedia.org/wiki/Ssireum", publisher: "Wikipedia" },
    { label: "Korea Ssireum Association", url: "https://www.ssireum.or.kr/", publisher: "KSA" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
