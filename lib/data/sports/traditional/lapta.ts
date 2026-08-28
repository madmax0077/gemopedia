import type { Sport } from "@/lib/types";

export const lapta: Sport = {
  id: "lapta",
  slug: "lapta",
  name: "Lapta",
  officialName: "Lapta (Russian: Лапта)",
  aliases: ["Russian Bat-and-Ball", "Russian Baseball", "Rounders (Russian)"],
  shortDescription:
    "ANCIENT RUSSIAN TRADITIONAL BAT-AND-BALL SPORT — a pre-cursor to modern baseball + rounders, documented since at least the 14TH CENTURY (birch-bark records from Novgorod). Two teams alternate BATTING + FIELDING; batter strikes small ball with wooden LAPTA (bat) and runs to opposite goal line + back, while fielders try to hit runner with the ball (SALO — the touch/tag). Peter the Great included lapta in Russian military training. Revived in Soviet era; today governed by RUSSIAN LAPTA FEDERATION (1990s). Considered the 'RUSSIAN NATIONAL GAME' by Kuprin + others; still played across Russia + former Soviet states + at village festivals.",
  longDescription:
    "LAPTA (Russian: Лапта, from 'лапоть' — a woven bast shoe / paddle-shape) is a TRADITIONAL RUSSIAN BAT-AND-BALL SPORT dating back at least to the 14TH CENTURY — one of the OLDEST DOCUMENTED BAT-AND-BALL GAMES in EASTERN EUROPE + a likely PRECURSOR / COUSIN of games like ROUNDERS, PESÄPALLO + AMERICAN BASEBALL through shared old-Europe stick-and-ball ancestors. Earliest evidence: BIRCH-BARK MANUSCRIPTS from NOVGOROD (14th c CE) depict lapta implements + rules; ARCHAEOLOGICAL FINDS at ARKHANGELSK + PERM include wooden bats. Notable historical patronage: TSAR PETER THE GREAT (1682-1725) included LAPTA in the physical training of the PREOBRAZHENSKY + SEMENOVSKY REGIMENTS — his elite guard units played lapta as combat conditioning. Russian writer ALEXANDER KUPRIN famously wrote: 'LAPTA IS SO INTERESTING, INTELLIGENT, EDUCATIONAL AND HEALTHY THAT IT COULD BE OUR NATIONAL GAME.' GAME MECHANICS: Two teams of 6-10 PLAYERS each (varies by variant) — one team BATS, the other FIELDS; alternate roles after outs. FIELD is a rectangular pitch (~40-55 m long × 25-40 m wide) with a KON (batting line) on one end and GORODA (goal line) on the other. Batting team lines up behind the kon; batter strikes ball with WOODEN LAPTA (a bat resembling a rounded-tip flat paddle, ~85 cm long, historically hand-carved from birch/oak). Ball is small hard rubber or leather-covered cork (~50 g). RULES OF PLAY: (1) One BATTER stands at kon; PITCHER (called PODAVA̅ISHCHIY) is on the batter's SAME TEAM and tosses the ball VERTICALLY UPWARD (not toward the batter — similar to pesäpallo). (2) Batter strikes ball with lapta into the field. (3) Batter RUNS from kon to the goroda goal line, and back to kon if possible — completing a full run scores 2 POINTS (single leg run = 1 point). (4) FIELDERS on defense try to CATCH the ball in the air (out) OR to HIT THE RUNNER WITH A THROWN BALL while running (called SALO — 'the salt/tag') — hit runner = out. (5) If a runner reaches the goroda but can't return safely, they wait there for next batter to hit + protect them. (6) Team accumulates points from safe runs; roles swap after outs. TWO MAIN VARIANTS: (1) MYACHIK-V-KRUG ('ball in circle' — older village form). (2) FEDERATION LAPTA (modern codified sport since 1957 Soviet standardization, refined by Russian Lapta Federation 1990s) — teams of 6, matches of 4 innings, standardized field + implements. SOVIET REVIVAL: 1957 USSR held FIRST SOVIET NATIONAL LAPTA CHAMPIONSHIP; sport was included in workers' spartakiads + military PT. POST-SOVIET: RUSSIAN LAPTA FEDERATION (Федерация Русской лапты) founded 1990s, based in MOSCOW; national championships annually since 1993; strong regional traditions in BASHKORTOSTAN, ORENBURG, ASTRAKHAN, ROSTOV, ALTAI. INTERNATIONAL: some spread to BELARUS, UKRAINE, KAZAKHSTAN, KYRGYZSTAN, GERMANY, ROMANIA. Considered by many culturally as an authentic Russian counterpart to Western baseball — pre-dating baseball by centuries + reflecting the physical culture of pre-industrial Russian villages. Traditional summer folk sport; often played at MASLENITSA (Butter Week festival) + IVAN KUPALA + village fairs. Modern efforts to include lapta in youth PE curricula + Russian sport schools.",
  category: "traditional-cultural-sports",
  subCategory: "Russian folk / bat-and-ball / pre-baseball / national heritage",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isProfessional: false,
  season: "summer",
  era: "medieval",
  popularity: "regional",
  countryOfOrigin: "RU",
  regionOfOrigin: "Russia (Novgorod archaeological finds + spread across Russian villages)",
  estimatedOrigin: "At least 14th century CE (Novgorod birch-bark records); Peter the Great popularized 1700s",
  players: { min: 6, max: 10, note: "6-10 players per team; federation lapta uses 6." },
  field: {
    surfaceName: "Rectangular grass or dirt field",
    dimensions: "~40-55 m long × 25-40 m wide; kon (batting line) + goroda (goal line)",
    description: "Simple rectangular pitch; village variants use any open ground.",
  },
  equipment: [
    { name: "Lapta (wooden bat, ~85 cm, rounded paddle shape)", description: "Historically hand-carved from birch or oak" },
    { name: "Small rubber or leather-covered cork ball (~50 g)", description: "Softer than baseball" },
    { name: "Marked kon (batting line) + goroda (goal line)", description: "Only field markings needed" },
    { name: "Traditional peasant / modern athletic attire", description: "No specialized uniform required" },
  ],
  duration: { approximateMinutes: 60, structure: "Federation lapta: 4 innings, ~60 min; village games open-ended." },
  objective: "Score most points by safely running kon-to-goroda + back; defense outs runners by catching or tagging.",
  basicRules: [
    { title: "Batter's own team pitches (vertical upward toss)", body: "Cooperative pitch to teammate." },
    { title: "Batter strikes with lapta + runs kon-to-goroda + back", body: "Full run = 2 pts; one-way stay = 1 pt." },
    { title: "Fielders can catch ball in air OR tag runner with thrown ball (Salo)", body: "Two ways to record out." },
    { title: "Runners can 'shelter' at goroda + wait for next batter", body: "Strategic waiting." },
    { title: "Teams swap after set number of outs (varies by variant)", body: "Alternating format." },
    { title: "Federation lapta: 6-player teams, 4 innings, standardized field", body: "Modern format." },
  ],
  scoring: {
    summary: "Points per successful run kon-to-goroda-to-kon (2 pts) or safe reach of goroda (1 pt).",
    breakdown: [
      { action: "Full run kon → goroda → kon safely", points: "2 pts" },
      { action: "Safe reach of goroda only", points: "1 pt" },
      { action: "Runner tagged with thrown ball (Salo)", points: "Out" },
      { action: "Fielder catches batted ball in air", points: "Out" },
      { action: "Team with more total points after innings wins", points: "Match won" },
    ],
    winCondition: "Higher total points at end of match.",
  },
  governingBodies: [
    { name: "Russian Lapta Federation (Федерация Русской лапты)", founded: 1990, headquarters: "Moscow, Russia" },
    { name: "Regional Lapta Federations (Bashkortostan, Orenburg, Rostov)", founded: 1993, headquarters: "Various" },
  ],
  majorCompetitions: [
    { name: "Russian Lapta Championship", frequency: "annual", founded: 1993, region: "Russia" },
    { name: "Soviet Lapta Championship (1957-1991)", frequency: "annual", founded: 1957, region: "USSR" },
    { name: "Regional cups (Bashkortostan, Orenburg, Altai)", frequency: "annual", founded: 1995, region: "Russia" },
  ],
  countriesPlayed: ["RU", "BY", "UA", "KZ", "KG", "DE", "RO"],
  famousAthletes: [
    "Peter the Great (Tsar, 1672-1725) — Historic patron who included lapta in military training",
    "Alexander Kuprin (writer) — Cultural advocate for lapta as national game",
    "Bashkortostan Lapta School — Modern powerhouse producing top national players",
  ],
  variants: [
    "myachik-v-krug-ancient-village-circle-form",
    "federation-lapta-modern-6v6-standardized",
    "school-lapta-youth-simplified",
    "beach-lapta-summer-adaptation",
  ],
  relatedSports: ["baseball", "rounders", "pesapallo", "cricket", "softball", "brannboll"],
  skills: ["batting with paddle-shaped lapta", "throwing accuracy (Salo tagging)", "sprinting between kon + goroda", "reading fielder positions", "team coordination"],
  strategies: [
    { title: "Batter can choose to run or stay based on fielder coverage", body: "Assess before committing." },
    { title: "Fielders throw for the runner's legs/torso — Salo tag", body: "Accuracy > power for tags." },
    { title: "Batting placement more important than power", body: "Small field rewards direction." },
    { title: "Coordinate multiple runners across kon + goroda for shelter tactics", body: "Team-based baserunning." },
  ],
  terminology: [
    { term: "Лапта (Lapta)", meaning: "The bat + the sport itself; from 'лапоть' — bast shoe / paddle shape." },
    { term: "Кон (Kon)", meaning: "Batting line — starting point for runs." },
    { term: "Города (Goroda)", meaning: "Goal line — turnaround point." },
    { term: "Подавальщик (Podavalshchik)", meaning: "Pitcher / server (from batter's own team)." },
    { term: "Сало (Salo)", meaning: "Tag with thrown ball — literally 'salt/fat'." },
    { term: "Свеча (Svecha)", meaning: "A fly ball / high hit — 'candle'." },
    { term: "Кон-мяч (Kon-myach)", meaning: "Ball caught at the kon." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join a Russian sport school or Bashkortostan-region lapta club", body: "Traditional heartlands." },
      { title: "Learn to strike with lapta paddle + basic Salo throwing", body: "Foundational skills." },
    ]},
    { level: "intermediate", steps: [
      { title: "Play regional 6v6 federation lapta", body: "Standardized modern format." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at Russian National Lapta Championship", body: "Elite Russian pathway." },
    ]},
  ],
  faq: [
    { question: "What is Lapta?", answer: "ANCIENT RUSSIAN TRADITIONAL BAT-AND-BALL SPORT — a pre-cursor to modern baseball + rounders, documented since at least the 14TH CENTURY (birch-bark records from Novgorod). Two teams alternate BATTING + FIELDING; batter strikes small ball with wooden LAPTA (paddle-shaped bat) and runs to opposite goal line + back, while fielders try to hit runner with the ball (SALO). Peter the Great included lapta in Russian military training. Revived in Soviet era; today governed by RUSSIAN LAPTA FEDERATION. Considered the 'RUSSIAN NATIONAL GAME' by Kuprin + others; still played across Russia + former Soviet states." },
    { question: "Lapta vs Baseball — what's the connection?", answer: "LAPTA + BASEBALL + ROUNDERS + PESÄPALLO likely share OLD EUROPEAN BAT-AND-BALL ANCESTRY. Lapta is DOCUMENTED SINCE THE 14th CENTURY — potentially predating similar Western European games. KEY DIFFERENCES from baseball: (1) BATTER'S OWN TEAM PITCHES to him (cooperative toss upward). (2) Ball is thrown AT the RUNNER (Salo tag) rather than to base. (3) SMALL RECTANGULAR field vs baseball's diamond. (4) Kon + Goroda structure vs 4-base circuit. Lapta was Peter the Great's chosen military training game — its heritage runs deeply in Russian physical culture." },
  ],
  wikipediaTitle: "Lapta",
  sources: [
    { label: "Wikipedia — Lapta (game)", url: "https://en.wikipedia.org/wiki/Lapta_(game)", publisher: "Wikipedia" },
    { label: "Russian Lapta Federation (russian-lapta.ru)", url: "http://russian-lapta.ru/", publisher: "RLF" },
  ],
  lastVerified: "2026-08-28",
  confidence: "verified",
};
