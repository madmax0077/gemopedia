import type { Sport } from "@/lib/types";

export const skiCross: Sport = {
  id: "ski-cross",
  slug: "ski-cross",
  name: "Ski Cross",
  officialName: "Ski Cross / Skicross (FIS)",
  aliases: ["Skicross", "SX", "Boardercross-Ski", "Motocross on Skis"],
  shortDescription:
    "Head-to-head 4-skier races down a course with jumps, banked turns, and rollers — the winner of each 4-person heat advances through elimination brackets to the final; contested at Winter Olympics since Vancouver 2010.",
  longDescription:
    "Ski Cross is a freestyle skiing discipline in which 4 skiers race simultaneously down a specifically designed course featuring rolling terrain, banked turns, jumps, and berms. First to the finish wins; the top 2 advance in single-elimination brackets. Course designs are inspired by BMX + Motocross, with 30–50 seconds of high-speed racing full of contact, aerials, and passing opportunities. Ski Cross developed from the alpine skiing world in the 1990s, contested first at Winter X Games (1998), then added to FIS World Cup (2003), then to the Winter Olympics at Vancouver 2010. It has since produced some of winter sport's most dramatic moments — including Michael Schmid's 2010 Olympic gold, Kelsey Serwa's 2018 gold, and Alex Fiva's 2022 gold-medal photo finish. Physical + mental demands are intense: skiers must maintain top speed while managing 3 competitors within meters, executing racing lines through complex terrain. Dominant nations: Canada, France, Sweden, Switzerland, USA.",

  category: "winter-sports",
  subCategory: "freestyle skiing — head-to-head racing",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "US",
  regionOfOrigin: "United States (evolved from BMX/motocross-inspired ski courses); first X Games 1998; FIS World Cup 2003",
  estimatedOrigin: "Evolved 1990s USA + Europe from mogul/racing hybrid concepts; Winter X Games debut 1998; FIS World Cup 2003; Olympic debut Vancouver 2010",

  players: { min: 4, max: 4, note: "Individual sport but 4 skiers race simultaneously in each heat; single-elimination brackets." },
  field: {
    surfaceName: "Snow ski cross course",
    dimensions: "1,000-1,300 m long with 15-20 features (jumps, berms, rollers, banked turns); typically 200-300 m vertical drop",
    description: "Purpose-built course with rolling terrain, banked turns, small + medium jumps, rollers (uphill bumps), berms. Similar to Motocross track but on snow. 30-50 seconds race time.",
  },
  equipment: [
    { name: "Ski Cross skis", description: "Modified alpine race skis; slightly wider + more forgiving than pure race skis; typically 190-215cm for men, 185-205cm for women." },
    { name: "Bindings", description: "Race-tuned alpine bindings; DIN 12-16 typical." },
    { name: "Ski boots", description: "Race-stiff (Flex 130-150); allow rapid response for course terrain." },
    { name: "Mandatory helmet + goggles", description: "FIS-approved hard-shell helmet; goggles with wide field of view." },
    { name: "Back protector + mandatory pads", description: "Spine protector; some events require additional torso pads." },
    { name: "Poles", description: "Standard alpine poles; used for pushing + balance in turns." },
    { name: "Race suit", description: "Aerodynamic suit; ski cross allows less restrictive fit than pure alpine racing for improved terrain movement." },
  ],
  duration: {
    approximateMinutes: 1,
    structure: "Each heat: 30-50 seconds. Full event: qualification time trial + 16-heat elimination brackets = 3-4 hours total.",
  },
  objective:
    "Cross the finish line first in your 4-skier heat. Top 2 advance to next round; single-elimination brackets from Round of 32 (or 16) through Final of 4.",
  matchStructure:
    "Qualification: individual time trial down the course; top 32 (or 16) advance to heats. Heats: 4 skiers race simultaneously; top 2 advance. Bracket runs: Round of 32 → 16 → 8 → 4 → 2 → Big Final (top 4) + Small Final (5th-8th). Winner of Big Final = gold.",

  basicRules: [
    { title: "4 skiers per heat", body: "Randomly seeded from qualification times; race simultaneously down the course." },
    { title: "First 2 to finish advance", body: "Top 2 in each heat move to next round; bottom 2 eliminated (or race in consolation for 5th-8th)." },
    { title: "Contact allowed", body: "Skier-to-skier contact permitted; officials monitor for intentional pushing/hooking (illegal)." },
    { title: "Passing on any part of course", body: "No lane restrictions; skiers may pass anywhere as long as no intentional interference." },
    { title: "Falling = elimination", body: "Fallen skier may continue if able but rarely competitive; typically eliminated." },
    { title: "Course-specific line choice", body: "Skiers choose their own lines through course; different lines suit different skier styles." },
    { title: "Aerial competence required", body: "Course jumps require aerial control; skiers must land clean to maintain speed." },
  ],
  advancedRules: [
    { title: "Intentional interference = disqualification", body: "Officials review video for pushing, elbowing, or blocking; DQ if intentional." },
    { title: "Photo finish decisions", body: "Video review at finish line for close calls (sub-0.01-second margins possible)." },
    { title: "Restart on false start", body: "If starting gate malfunctions or skier fires early, restart allowed." },
    { title: "Weather conditions delay", body: "High winds, poor visibility, or dangerous course conditions cause postponement." },
    { title: "Team relay format (some events)", body: "Some non-Olympic events feature team ski cross with 2 skiers per team; not currently in Olympic program." },
    { title: "Qualification format changes", body: "Some events use bracket-only (no qualification time trial); others include time-trial seeding." },
  ],
  scoring: {
    summary: "Elimination-based: top 2 of 4 in each heat advance. Winner of Big Final wins gold; second silver; third bronze.",
    winCondition: "Win Big Final (heat of 4 finalists). No points-based scoring during heats; pure racing.",
    breakdown: [
      { action: "Finish 1st in heat", points: "Advance to next round" },
      { action: "Finish 2nd in heat", points: "Advance to next round" },
      { action: "Finish 3rd in heat", points: "Eliminated (or Small Final for 5-8 places)" },
      { action: "Finish 4th in heat", points: "Eliminated" },
      { action: "Big Final 1st", points: "Gold medal" },
      { action: "Big Final 2nd", points: "Silver medal" },
      { action: "Big Final 3rd", points: "Bronze medal" },
    ],
  },
  penalties: [
    { title: "Intentional interference / blocking", body: "Immediate disqualification; can also affect ranking through subsequent events." },
    { title: "Cutting course", body: "Disqualification if skier goes outside marked course boundaries." },
    { title: "False start", body: "Warning first; DQ on second offense within event." },
    { title: "Illegal equipment", body: "DQ before or after race if equipment doesn't meet FIS standards." },
  ],

  positions: [
    { name: "Competitor", role: "Individual racer; 4 per heat.", count: 1 },
    { name: "Coach + team support", role: "Between-heat advice; course strategy; equipment tuning." },
    { name: "Race officials + technical delegates", role: "Ensure course + equipment compliance." },
  ],
  officiating: {
    officials: ["Chief Race Director", "Course judges (multiple stations)", "Video review official", "Timekeeper + starter"],
    summary: "FIS-certified officials; video review for contact + line calls; typically 8+ officials for major event.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Ski (FIS)", founded: 1924, headquarters: "Oberhofen, Switzerland", website: "https://fis-ski.com" },
    { name: "US Ski + Snowboard", founded: 1904, headquarters: "Park City, USA", website: "https://usskiandsnowboard.org" },
    { name: "Alpine Canada", founded: 1978, headquarters: "Ottawa, Canada" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games (Ski Cross)", frequency: "quadrennial", founded: 2010, region: "worldwide (Vancouver 2010, Sochi 2014, Pyeongchang 2018, Beijing 2022)" },
    { name: "FIS Freestyle Ski World Championships", frequency: "biennial", founded: 2005, region: "worldwide" },
    { name: "FIS Ski Cross World Cup", frequency: "seasonal (8-12 events)", founded: 2003, region: "worldwide winter circuit" },
    { name: "X Games (Winter)", frequency: "annual", founded: 1998, region: "Aspen (USA)" },
  ],
  countriesPlayed: ["CA", "CH", "FR", "SE", "US", "AT", "DE", "NO", "FI", "IT", "SI", "AU", "GB", "CZ", "SK"],
  famousAthletes: [
    "Michael Schmid (Switzerland — Olympic gold Vancouver 2010; sport's founding star)",
    "Ashleigh McIvor (Canada — Olympic gold Vancouver 2010; first women's champion)",
    "Marielle Thompson (Canada — Olympic gold Sochi 2014)",
    "Kelsey Serwa (Canada — Olympic gold Pyeongchang 2018 + silver 2014)",
    "Alex Fiva (Switzerland — Olympic gold Beijing 2022)",
    "Fanny Smith (Switzerland — multiple World Cup gold + Olympic bronze)",
    "Sandra Naeslund (Sweden — multi-time World Cup overall + Olympic gold 2022)",
    "Brady Leman (Canada — Olympic gold 2018)",
    "Kevin Drury (Canada — X Games multiple gold)",
    "Bastien Midol (France — multiple World Cup podiums)",
  ],
  records: [
    { title: "Olympic debut", holder: "Vancouver 2010", value: "First Winter Olympics with Ski Cross medals", year: 2010 },
    { title: "Most Olympic Ski Cross golds (nation)", holder: "Canada", value: "Multiple Olympic golds since 2010 (Schmid + others)", year: 2022 },
    { title: "Sandra Naeslund's 2021 season", holder: "Sandra Naeslund (SE)", value: "8 wins in 12 World Cup starts — record dominance", year: 2021 },
    { title: "Beijing 2022 dramatic finishes", holder: "Multiple races", value: "Photo-finish + crash-filled finals; sport's peak spectacle", year: 2022 },
    { title: "Sport's rapid growth", holder: "FIS", value: "From X Games event to Olympic medals in 12 years (1998-2010)", year: 2010 },
  ],

  variants: ["fis-standard-ski-cross", "team-ski-cross-non-olympic", "boardercross-snowboard-equivalent"],
  relatedSports: ["snowboard-cross", "alpine-skiing", "skier-cross", "mogul-skiing", "downhill-mountain-biking"],

  skills: [
    "high-speed alpine racing technique",
    "aerial control (jumps + rollers)",
    "close-quarters racing awareness",
    "line-choice strategy (through course)",
    "physical durability (contact + crashes)",
    "mental focus (4-way pressure races)",
    "quick recovery (multiple heats in one day)",
  ],
  strategies: [
    { title: "Nail the start", body: "First to lead into first turn = decisive advantage. Explosive start out of gate + first 100m defines heat." },
    { title: "Corner racing lines", body: "Inside line = shortest but tight; outside = longer but more speed. Choose based on opponents' positioning." },
    { title: "Aerial control", body: "Small aerials in course can gain 0.1s; land clean or lose 0.5s. Practice course-specific jumps." },
    { title: "Physical contact", body: "Legal contact for positioning; illegal for blocking. Elite skiers use body position + subtle push at contact points." },
    { title: "Watch for passing lanes", body: "Course design creates specific passing opportunities. Study course video pre-race to plan passing zones." },
    { title: "Manage energy across heats", body: "Multiple heats per day; conserve energy on cruising sections; peak effort on decisive sections." },
    { title: "Reserve big move for Big Final", body: "Get to Final of 4 first; then use hardest passing move only in Big Final for maximum reward." },
  ],

  terminology: [
    { term: "Heat", meaning: "Single race between 4 skiers; top 2 advance." },
    { term: "Big Final", meaning: "Final race between top 4 skiers; determines gold, silver, bronze." },
    { term: "Small Final", meaning: "Race between 5th-8th place finishers; determines 5-8 positions." },
    { term: "Berm", meaning: "Banked turn in ski cross course." },
    { term: "Roller", meaning: "Uphill bump in course; requires timing for speed maintenance." },
    { term: "Photo finish", meaning: "Close finish requiring video review; can be decided by <0.01 seconds." },
    { term: "Interference call", meaning: "Officiating decision on illegal contact; can lead to disqualification." },
    { term: "Qualification (Time Trial)", meaning: "Individual timed run down course; seeds skiers into brackets." },
    { term: "Big Air", meaning: "Large jump in course; typically 15-20 meters horizontal distance." },
    { term: "SX", meaning: "Common abbreviation for Ski Cross." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master intermediate alpine skiing first", body: "Ski cross requires solid alpine racing base. 3-5 years alpine before attempting course training." },
      { title: "Ski small terrain parks + rollers", body: "Get comfortable with jumps + banked turns + rollers in relaxed setting before competition." },
      { title: "Join local ski club with racing program", body: "US Ski Team, Alpine Canada, national federations offer development pipelines." },
    ] },
    { level: "intermediate", steps: [
      { title: "Compete at regional events", body: "Nor-Am Cup + USASA + regional national championships build ranking + technique." },
      { title: "Study course + line-selection", body: "Video analysis of top skiers' line choices; understand where speed accumulates + loses." },
      { title: "Add contact-training", body: "Practice close-quarters skiing with training partners; learn legal contact positioning." },
    ] },
    { level: "advanced", steps: [
      { title: "Compete at FIS World Cup + X Games", body: "Top pathway to Olympic squad; World Cup podium finishes required for Olympic team." },
      { title: "Nation-team selection", body: "National federation trials + World Cup ranking determine Olympic squad composition." },
      { title: "Target Olympic gold", body: "4-year Olympic cycle dedication; Vancouver 2010 was first Olympics — Winter 2026 (Milano-Cortina) awaits current stars." },
    ] },
  ],

  faq: [
    { question: "Is Ski Cross in the Olympics?", answer: "Yes — since Vancouver 2010. Both men's + women's events. First Olympic golds: Michael Schmid (Switzerland, men) + Ashleigh McIvor (Canada, women). Since then: Canada has dominated with multiple golds (Marielle Thompson 2014, Kelsey Serwa + Brady Leman 2018); Switzerland won 2022 (Fiva + Naeslund from Sweden)." },
    { question: "How is Ski Cross different from Downhill Skiing?", answer: "Ski Cross: 4-way head-to-head racing on shorter course (1,000-1,300m) with jumps + banked turns + berms; elimination format. Downhill: individual timed race on much longer course (2,000-4,000m) with pure racing lines; time-based scoring. Ski Cross is BMX-inspired + spectacle-focused; Downhill is pure speed. Both alpine but different disciplines." },
    { question: "Who is the greatest Ski Cross athlete?", answer: "Multiple candidates: (1) Michael Schmid (Switzerland) — sport's founding star + Vancouver 2010 gold. (2) Kelsey Serwa (Canada) — Olympic gold 2018 + silver 2014 + multiple World Cup wins. (3) Sandra Naeslund (Sweden) — dominant 2020s; Olympic gold 2022 + record 8-win 2021 season. (4) Marielle Thompson (Canada) — Olympic gold 2014 + multiple World Cup overall titles. Different eras produce different answers." },
    { question: "How dangerous is Ski Cross?", answer: "Very serious. Head-to-head racing with contact + aerials at 40-60 mph on hard-packed snow. Common injuries: ACL/MCL tears, shoulder dislocations, spine fractures from bad landings, concussions. Some fatalities in training (Sarah Burke's halfpipe death, similar in style, highlighted risks). Mandatory helmets, back protectors, and safety fencing reduce risk but don't eliminate it. Injury rate per hour is among highest in Winter Olympics." },
    { question: "Why is contact allowed?", answer: "Ski Cross' identity — the head-to-head + close-quarters racing IS the sport. Officials distinguish legal contact (bodily positioning for line choice) from illegal interference (intentional pushing/blocking). Video review handles ambiguous calls; DQs for intentional violations. Small contact rewards physical + tactical racers over pure speed specialists." },
  ],

  wikipediaTitle: "Ski cross",
  sources: [
    { label: "FIS — Ski Cross", url: "https://fis-ski.com/en/freestyle-skiing/ski-cross", publisher: "FIS" },
    { label: "Wikipedia — Ski cross", url: "https://en.wikipedia.org/wiki/Ski_cross", publisher: "Wikipedia" },
    { label: "Olympic.org — Freestyle skiing", url: "https://olympics.com/", publisher: "IOC" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
