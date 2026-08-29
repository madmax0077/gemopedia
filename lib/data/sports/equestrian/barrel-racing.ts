import type { Sport } from "@/lib/types";

export const barrelRacing: Sport = {
  id: "barrel-racing",
  slug: "barrel-racing",
  name: "Barrel Racing",
  officialName: "Barrel Racing (Women's Professional Rodeo Association)",
  aliases: ["Barrels", "Cloverleaf Barrel Racing", "WPRA Barrels"],
  shortDescription:
    "Timed rodeo event where a mounted rider (usually female) runs a cloverleaf pattern around 3 barrels as fast as possible — the primary women's professional rodeo event; sanctioned by WPRA + contested at NFR alongside men's events.",
  longDescription:
    "Barrel Racing is a rodeo event where a mounted rider guides their horse around three barrels arranged in a cloverleaf pattern — around each barrel + back to the start line — in the fastest time. It emerged in the 1930s-40s as a women's rodeo event when male-dominated events (bull riding, bronc riding) excluded women. The Women's Professional Rodeo Association (WPRA) was founded 1948 as women's dedicated professional circuit; today it governs professional barrel racing with the NFR (National Finals Rodeo, Las Vegas December) as season climax. Elite times: sub-15 seconds on standard courses; sub-16 seconds on more spread-out patterns. The event demands exceptional horse-rider partnership + tight cornering technique. Legendary racers: Charmayne James (US — 11× WPRA World Champion 1984-1993 riding legendary horse Scamper; the sport's GOAT), Sherry Cervi (US — 4× World Champion 1995-2013), Hailey Kinsel (US — 3× WPRA World Champion 2018-2020 with mare DM Sissy Hayday), Nellie Miller (US — 2017 champion). Prize money at NFR level: winners can earn $150K-$250K per season.",

  category: "equestrian-sports",
  subCategory: "rodeo timed event — cloverleaf pattern",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",

  countryOfOrigin: "US",
  regionOfOrigin: "United States (American West + Southwest); primary women's rodeo event",
  estimatedOrigin: "Emerged 1930s-40s as women's rodeo event; WPRA founded 1948; became NFR event 1959; global growth via US expansion 2000s+",

  players: { min: 1, max: 1, note: "Individual timed event; horse + rider pair." },
  field: {
    surfaceName: "Arena — sand/dirt surface",
    dimensions: "3 barrels arranged in cloverleaf pattern; typical distances: 60ft (18m) between first two barrels + 90ft (27m) between second + third + 105ft (32m) between third + start line.",
    description: "Standard rodeo arena with 3 barrels arranged in cloverleaf pattern. Rider chooses first barrel to circle (right or left). Race starts + ends at same line; timing electronic at start/finish.",
  },
  equipment: [
    { name: "Quarter horse / barrel racing horse", description: "American Quarter Horse dominant breed; also Paint, Appaloosa. Specialized breeding for compact + explosive turning ability. Elite horses valued $50K-$500K+; top mounts can reach $1M+." },
    { name: "Barrel racing saddle", description: "Standard western saddle modified for barrel racing: deep seat, high cantle, extended horn for balance in tight turns. Weight typically 10-15 kg." },
    { name: "Split-ear headstall + snaffle bit", description: "Standard western horsemanship; bit choice varies by horse temperament + rider preference." },
    { name: "Cowboy boots + jeans + shirt", description: "Traditional western attire; some events require full western dress." },
    { name: "Helmet (junior + youth divisions)", description: "Mandatory in junior + youth WPRA events; increasingly common in adult professional level." },
    { name: "3 rodeo barrels", description: "Standardized 55-gallon steel drums; arranged in cloverleaf pattern; typical distances specified by WPRA rules." },
  ],
  duration: {
    approximateMinutes: 1,
    structure: "Individual run: 15-25 seconds. Full event: 50-200+ competitors run through in single session (2-4 hours total).",
  },
  objective:
    "Complete cloverleaf pattern around 3 barrels in shortest time. Touching or knocking barrels = penalties/disqualification.",
  matchStructure:
    "Individual timed runs. Rider starts at line, circles barrel 1 (right or left preference), then barrel 2 (opposite direction), then barrel 3 (top of cloverleaf), then sprint back to start line. Electronic timing precise to hundredths of a second. Rankings: fastest cumulative times across multiple rounds/rodeos.",

  basicRules: [
    { title: "Cloverleaf pattern", body: "3 barrels arranged in cloverleaf: 2 barrels + 1 turnaround barrel. Rider chooses first barrel (right or left); pattern is then fixed." },
    { title: "Fastest time wins", body: "Electronic timing at start + finish; times recorded to hundredths of a second." },
    { title: "Barrel penalties", body: "Touching barrel = 5-second penalty. Knocking barrel over = disqualification (5-second penalty in some events; DQ in WPRA)." },
    { title: "Pattern completion required", body: "Must complete full 3-barrel pattern; incomplete pattern = no time." },
    { title: "Start line electronic beam", body: "Timer starts when horse's nose crosses start line; ends when horse's nose recrosses same line." },
    { title: "Standard pattern distances", body: "First barrel 60ft (18m) from start; second barrel 90ft (27m) from first; third barrel 105ft (32m) from second. Adjustments for smaller arenas." },
    { title: "WPRA age divisions", body: "Youth (under 18), Amateur, Professional. Prize money increases with division." },
  ],
  advancedRules: [
    { title: "Cloverleaf pattern direction choice", body: "Rider selects whether to circle first barrel left or right; determines rest of pattern. Practical + tactical decision." },
    { title: "Best-of-2 runs (some events)", body: "Some championships use 2-run format; best time counts. Encourages calculated risk." },
    { title: "Pattern verification", body: "Timer verifies pattern completion; barrel judges confirm no barrel touching penalties." },
    { title: "Weather-adjusted patterns", body: "Rain or wind can affect surface; pattern distances may adjust. Judges announce changes pre-event." },
    { title: "WPRA senior barrel", body: "Age-group barrel racing (40+ women's category) with separate rankings." },
    { title: "Slack + Perf split", body: "NFR: some competitors run 'slack' (morning) vs. 'perf' (evening main show); different arena conditions can affect times." },
  ],
  scoring: {
    summary: "Fastest time wins. Penalties: 5-sec per barrel touch (DQ for knock-over in WPRA). Ties broken by best run in prior round.",
    winCondition: "Fastest cumulative time across all rounds wins. Season: cumulative winnings determine WPRA World Champion.",
    breakdown: [
      { action: "Base time (pattern completed)", points: "Time in seconds" },
      { action: "Barrel touch penalty", points: "+5 seconds" },
      { action: "Barrel knock-over (WPRA)", points: "Disqualification" },
      { action: "Pattern failure", points: "No time recorded" },
      { action: "Season standings", points: "Cumulative winnings across all WPRA events" },
      { action: "NFR World Champion", points: "Season winner (WPRA)" },
    ],
  },
  penalties: [
    { title: "Touching barrel", body: "5-second penalty added to time." },
    { title: "Knocking barrel over", body: "Disqualification in WPRA; 5-second penalty in some events." },
    { title: "Incomplete pattern", body: "No time recorded; entry fee forfeited." },
    { title: "False start", body: "Warning; DQ if repeated." },
    { title: "Illegal equipment (rules varies)", body: "DQ from event." },
    { title: "Horse abuse (rule violation)", body: "Warning to DQ + fine + potential ban." },
  ],

  positions: [
    { name: "Rider", role: "Guides horse through cloverleaf pattern.", count: 1 },
    { name: "Horse", role: "Physical + technical performer; often the more famous of the pair.", count: 1 },
    { name: "Trainer / coach", role: "Long-term partnership building + between-run advice." },
    { name: "Groomer / handler", role: "Horse care + preparation between runs." },
  ],
  officiating: {
    officials: ["Chief Judge", "Timing Judges (electronic backup)", "Barrel Judges (count touches/knocks)", "Timekeeper"],
    summary: "WPRA-certified officials at professional events; electronic timing + barrel judges track penalties. Ties broken by prior-round performance.",
  },

  governingBodies: [
    { name: "Women's Professional Rodeo Association (WPRA)", founded: 1948, headquarters: "Colorado Springs, USA", website: "https://wpra.com" },
    { name: "Professional Rodeo Cowboys Association (PRCA) — hosts NFR", founded: 1936, headquarters: "Colorado Springs, USA", website: "https://prca.com" },
    { name: "Canadian Barrel Racing Association", founded: 1990, headquarters: "Airdrie, Canada" },
    { name: "National Barrel Horse Association (NBHA)", founded: 1992, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "National Finals Rodeo (NFR) — Barrel Racing", frequency: "annual (December)", founded: 1959, region: "Las Vegas, USA" },
    { name: "American Rodeo (barrel racing)", frequency: "annual", founded: 2013, region: "Arlington, Texas" },
    { name: "Cheyenne Frontier Days — Barrel Racing", frequency: "annual (July)", founded: 1897, region: "Cheyenne, Wyoming" },
    { name: "Calgary Stampede — Barrel Racing", frequency: "annual (July)", founded: 1912, region: "Calgary, Canada" },
    { name: "WPRA World Standings + Circuit", frequency: "season-long", founded: 1948, region: "worldwide" },
    { name: "NBHA World Championship", frequency: "annual", founded: 1992, region: "Perry, Georgia" },
  ],
  countriesPlayed: ["US", "CA", "AU", "MX", "BR", "AR"],
  famousAthletes: [
    "Charmayne James (US — 11× WPRA World Champion 1984-1993; considered GOAT with legendary horse Scamper)",
    "Sherry Cervi (US — 4× WPRA World Champion 1995+1999+2010+2013)",
    "Hailey Kinsel (US — 3× WPRA World Champion 2018-2020 with mare DM Sissy Hayday)",
    "Nellie Miller (US — WPRA World Champion 2017)",
    "Kimmie Wall (US — WPRA World Champion 2016)",
    "Britany Diaz Fleck (US — multiple NFR appearances)",
    "Lisa Lockhart (US — 12+ NFR appearances)",
    "Mary Burger (US — 5× WPRA circuit champion)",
    "Molli Montgomery (US — modern era WPRA champion)",
    "Charmayne James's Scamper (US — the horse; considered greatest barrel racing horse ever)",
  ],
  records: [
    { title: "Most WPRA Barrel Racing World Championships", holder: "Charmayne James (US)", value: "11 world championships 1984-1993; unmatched dominance", year: 1993 },
    { title: "Legendary horse Scamper", holder: "Charmayne James's Scamper", value: "10 of 11 championships aboard Scamper; horse inducted ProRodeo Hall of Fame", year: 1993 },
    { title: "Fastest recorded barrel race time (single run)", holder: "Various", value: "Sub-13-second runs recorded on faster courses (accelerating patterns)", year: 2020 },
    { title: "First WPRA Barrel Racing at NFR", holder: "WPRA", value: "NFR added Barrel Racing 1959; became major sport for women in rodeo", year: 1959 },
    { title: "Season earnings record", holder: "Multiple", value: "Top WPRA barrel racers earn $250K-$400K per season", year: 2023 },
    { title: "Horse valuation record", holder: "Top barrel racing prospects", value: "$500K-$1M+ for elite young horses with proven bloodlines", year: 2023 },
  ],

  variants: ["wpra-professional-cloverleaf", "nbha-amateur-standing-pattern", "junior-barrel-racing-youth", "flag-race-alternative-timed"],
  relatedSports: ["rodeo", "pole-bending", "team-penning", "reining", "cutting-horse", "equestrian-jumping"],

  skills: [
    "horse-rider partnership + trust",
    "tight-turn technique + counter-rotating",
    "consistent pattern memorization",
    "pace management (max speed + control)",
    "horsemanship (weight distribution + rein cues)",
    "fitness (short bursts + rapid recovery for multi-round events)",
    "horse care + preparation (nutrition + rehabilitation)",
  ],
  strategies: [
    { title: "Horse selection is 60% of the sport", body: "Elite barrel racing horses are born + bred specifically. Right horse can shave 1-2 seconds off pattern; wrong horse can't be trained to elite level." },
    { title: "First barrel decides the pattern", body: "Rider chooses first barrel direction; commits to left-first or right-first. Depends on horse tendency + arena setup." },
    { title: "Tight turn technique", body: "Turn as tight as possible around barrels without touching. Elite riders touch pocket of saddle horn to barrel without disturbing it." },
    { title: "Speed comes from straightaways", body: "Between barrels: sprint at full speed. Only decelerate for turn; accelerate immediately after. Managed acceleration = 0.2 seconds saved." },
    { title: "Pattern-specific horse training", body: "Horses trained cloverleaf pattern until muscle memory perfect. Barrel racers ride pattern 100+ times per week in season." },
    { title: "Horse conditioning + rest", body: "Cross-training + rest days critical. Elite barrel horses ride 2-3 events per weekend + rest between; over-riding leads to injury + burnout." },
    { title: "Study top runners' footage", body: "Video analysis of Kinsel, Cervi, James; understand pattern approach + turn technique + horse selection." },
  ],

  terminology: [
    { term: "Cloverleaf", meaning: "3-barrel pattern in shape of cloverleaf; standard barrel racing arrangement." },
    { term: "Pocket", meaning: "Space between horse + barrel during turn; skilled riders hit tight pocket without touching." },
    { term: "Turn", meaning: "Circle around each barrel; primary technical element." },
    { term: "Straightaway", meaning: "Sprint between barrels; where max speed is generated." },
    { term: "Rate", meaning: "Horse's ability to check speed before turn; essential for tight turns." },
    { term: "WPRA", meaning: "Women's Professional Rodeo Association; primary sanctioning body." },
    { term: "NFR", meaning: "National Finals Rodeo (Las Vegas December); season climax." },
    { term: "Slack", meaning: "Morning session at NFR; times can differ from evening 'perf' session." },
    { term: "Perf", meaning: "Evening performance at NFR; primary competition slot." },
    { term: "Quarter Horse", meaning: "Dominant breed for barrel racing; explosive turning ability + compact build." },
    { term: "Scamper", meaning: "Charmayne James's legendary horse; 10 of 11 championships aboard." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn horsemanship first", body: "Master western riding basics: stopping, turning, changing leads. 2-5 years of general horsemanship before attempting barrel racing." },
      { title: "Train a suitable horse", body: "Quarter horse with athletic build + willing temperament; some horses natural barrel racers, others aren't suited. Trainer evaluation critical." },
      { title: "Enter local jackpot barrel races", body: "Community-level barrel races = entry points. NBHA + local associations run entry-level events for beginners + youth." },
    ] },
    { level: "intermediate", steps: [
      { title: "Compete at NBHA + regional events", body: "National Barrel Horse Association runs graduated circuit; earn points + prize money at intermediate level." },
      { title: "Invest in trained barrel racing horse", body: "$25K-$100K for competitive intermediate horse; $100K-$500K for elite prospect. Horse quality is decisive factor." },
      { title: "Cross-train with proven barrel racing trainer", body: "Structured coaching essential; barrel racing techniques subtle + accumulated wisdom matters." },
    ] },
    { level: "advanced", steps: [
      { title: "Qualify for WPRA + NFR", body: "Season earnings + placement determine WPRA world standings. Top 15 in season earnings qualify for NFR in December." },
      { title: "Sponsorships + horse breeding", body: "Elite barrel racers earn through combination: prize money + sponsorships + horse breeding fees + clinics. Diversified income." },
      { title: "Multi-year career + business", body: "Long careers (10-20+ years) possible with careful horse management + business acumen. Retirement often includes horse breeding + training + clinics." },
    ] },
  ],

  faq: [
    { question: "What is Barrel Racing?", answer: "A timed rodeo event where a mounted rider (usually female) runs a cloverleaf pattern around 3 barrels as fast as possible. Emerged in 1930s-40s as women's rodeo event; codified 1948 with WPRA (Women's Professional Rodeo Association) founding. Contested at NFR (National Finals Rodeo, Las Vegas December) as primary women's rodeo event. Elite times: sub-15 seconds on standard courses." },
    { question: "Who is the greatest barrel racer?", answer: "Charmayne James (US) — undisputed GOAT. 11× WPRA World Champion 1984-1993 (10 of 11 aboard legendary horse Scamper). Unmatched dominance in the sport's history. Modern era: Hailey Kinsel (3× champion 2018-2020 with mare DM Sissy Hayday), Sherry Cervi (4× champion 1995-2013). James + Scamper considered greatest horse-rider partnership in rodeo history." },
    { question: "How much does a competitive barrel racing horse cost?", answer: "Wide range: (1) Entry-level trained horse: $10K-$25K. (2) Regional-level competitive horse: $25K-$75K. (3) Professional-level competitive horse: $75K-$250K. (4) Elite NFR-level horse: $250K-$1M+. Elite prospect yearlings (unproven potential) can sell $50K-$200K. Horse quality is the primary driver of success at professional levels — not rider talent alone." },
    { question: "Is Barrel Racing dangerous?", answer: "Moderate risk. Riders at high speeds (35-40+ mph) taking tight turns; falls happen. Common injuries: knee + hip + back injuries; concussions from falls; broken bones. Helmets increasingly common though not universally required in adult professional level. Youth + junior events mandate helmets. Horse injuries (leg + tendon) also concern; retirement from injury common at elite level." },
    { question: "Is Barrel Racing only for women?", answer: "Traditionally yes at professional level (WPRA-sanctioned). Men + women both compete in amateur + youth + open events; NBHA + community rodeos are gender-neutral. WPRA is the women-only professional sanctioning body. Some rodeo associations run men's barrel racing at amateur level. NFR barrel racing remains women-only." },
    { question: "How much can barrel racers earn?", answer: "Top WPRA racers: $150K-$400K per season including NFR winnings + prize money. Season earnings for top-15 finalists: $50K-$250K. Champion of NFR: additional $200K-$300K in winnings. Sponsorships + horse breeding fees + clinics add income. Total top earners: $500K-$1M+ annually. Journeyman WPRA cardholders: $20K-$60K annually. Horse + travel + entry fees can consume $30K-$100K annually." },
  ],

  wikipediaTitle: "Barrel racing",
  sources: [
    { label: "Women's Professional Rodeo Association (WPRA)", url: "https://wpra.com", publisher: "WPRA" },
    { label: "Professional Rodeo Cowboys Association — Barrel Racing", url: "https://prca.com", publisher: "PRCA" },
    { label: "Wikipedia — Barrel racing", url: "https://en.wikipedia.org/wiki/Barrel_racing", publisher: "Wikipedia" },
    { label: "National Barrel Horse Association", url: "https://nbha.com", publisher: "NBHA" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
