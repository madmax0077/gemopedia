import type { Sport } from "@/lib/types";

export const aerials: Sport = {
  id: "aerials",
  slug: "aerials",
  name: "Aerial Skiing",
  officialName: "Freestyle Skiing Aerials (FIS)",
  aliases: ["Aerials", "Ski Aerials", "Freestyle Aerials"],
  shortDescription:
    "Winter Olympic freestyle skiing discipline where athletes launch from a purpose-built ramp (kicker) — executing multiple flips + twists 12-15m in the air — landing on a steep hill; judged on aerial execution + landing.",
  longDescription:
    "Aerial Skiing is a freestyle skiing discipline in which athletes launch from a specialized ramp (kicker) and perform multiple mid-air flips and twists before landing on a steep, groomed landing hill. The ramp launches skiers 4-5m upward; total airborne height reaches 12-15m; total airtime 2-3 seconds. Elite tricks: double + triple back flips with multiple twists (e.g. 'Full-Full-Full' = triple flip with one twist per flip, or 'Double Full-Full-Full' = triple flip with 2+1+1 twists = 6 total rotations). Aerials debuted as Olympic medal event at Lillehammer 1994 (women 1994; men also 1994). Judged on take-off, form (in-air position), landing (0-100 scale × difficulty factor). Legendary skiers: Nikki Stone (US — 1998 Olympic gold), Alisa Camplin (Australia — 2002 gold pioneering triple twists), Han Xiaopeng (China — 2006 Olympic gold, sport's first Chinese medal), Xu Mengtao (China — 2022 Olympic gold), Anton Kushnir (Belarus — 2014 Olympic gold), Qi Guangpu (China — 2022 Olympic gold), Alla Tsuper (Belarus — 2014 Olympic gold), Justin Schoenefeld (US — modern podium contender).",

  category: "winter-sports",
  subCategory: "freestyle skiing — aerial acrobatics from ramp",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (evolved from 1960s hot-dog skiing); FIS World Cup 1980; Olympic Lillehammer 1994",
  estimatedOrigin: "Evolved from 1960s freestyle 'hot-dog' skiing US; FIS World Cup 1980; Olympic debut Lillehammer 1994; team aerials Olympic Beijing 2022",

  players: { min: 1, max: 4, note: "Individual + team events (3-athlete mixed team at Olympics)." },
  field: {
    surfaceName: "Purpose-built kicker + steep landing hill",
    dimensions: "Kicker: 4-5m vertical launch; Landing hill: 30-37° pitch, 50m long; Total airborne 12-15m",
    description: "Constructed snow ramp (kicker) launches skier upward; skier lands on steep purpose-built landing hill with padded snow. Winter Olympic + World Cup courses have identical specifications.",
  },
  equipment: [
    { name: "Aerial skis", description: "Short (155-175cm), specialized for take-off + landing; lightweight." },
    { name: "Bindings + boots", description: "Standard alpine bindings + Flex 90-100 boots." },
    { name: "Poles", description: "Standard alpine poles; used for take-off timing + push." },
    { name: "Mandatory helmet + back protector", description: "FIS-approved helmet + spinal protection." },
    { name: "Aerial suit", description: "Aerodynamic ski suit; specific cut for in-air stability." },
  ],
  duration: { approximateMinutes: 1, structure: "Each jump: 3-4 seconds (take-off + air + landing). Competition: qualifying (2-3 jumps) + finals (2-3 jumps) = 2-3 hours." },
  objective: "Score maximum points from judges by executing high-difficulty aerial tricks with clean take-off, in-air form, and stable landing.",
  matchStructure: "Qualifying (2 jumps × top scores) → Final (2-3 jumps × top score). Team event: 3 athletes per team; combined scores decide.",

  basicRules: [
    { title: "Launch from kicker", body: "Standardized ramp launches skier 4-5m upward." },
    { title: "Perform declared trick", body: "Skier pre-declares trick before jump; judges score against declaration." },
    { title: "Judged on 3 elements", body: "Take-off + form (in-air) + landing. Each judged 0-10; multiplied by trick difficulty factor." },
    { title: "Fall / crash = 0 landing score", body: "Falls on landing eliminate landing score; often disqualify jump entirely." },
    { title: "Best jump counts (finals)", body: "Best of 2-3 jumps in final counts toward medal." },
    { title: "Trick difficulty factor (0.5-4.5)", body: "Higher-difficulty tricks earn more; multiplier applied to judge scores." },
  ],
  advancedRules: [
    { title: "Take-off criteria (0-10)", body: "Judges score: pop off ramp, body position, ski control, height gained. Bad take-off = low score for that element." },
    { title: "Form criteria (0-10)", body: "In-air body position: straight legs, tight tuck, controlled twist rotation, arm position." },
    { title: "Landing criteria (0-10)", body: "Landing stability: 2-foot landing, balance, no falls, minimal snow spray. Falls = 0 landing points." },
    { title: "Trick difficulty factor calculation", body: "Standardized formula based on flips + twists count; formula updated periodically." },
    { title: "Team event (Beijing 2022 debut)", body: "3-athlete mixed team (2 men + 1 woman or 1 man + 2 women); combined scores." },
    { title: "Weather-dependent", body: "Wind conditions critically affect jumps; events postponed if wind exceeds thresholds." },
    { title: "Progressive difficulty declaration", body: "Athletes may declare progressively harder tricks in later rounds if leading." },
  ],
  scoring: {
    summary: "0-100 total per jump: Take-off + Form + Landing scored 0-10 each; sum × trick difficulty factor. Highest single jump in finals wins.",
    winCondition: "Highest single-jump score in final wins. Team event: combined 3-athlete scores.",
    breakdown: [
      { action: "Take-off score", points: "0-10 (20% of total)" },
      { action: "Form score", points: "0-10 (50% of total)" },
      { action: "Landing score", points: "0-10 (30% of total)" },
      { action: "Trick difficulty factor", points: "0.5-4.5 multiplier" },
      { action: "Elite jump score", points: "100-140+ (highest difficulty × excellent execution)" },
      { action: "Fall / crash", points: "Effectively 0" },
    ],
  },
  penalties: [
    { title: "Fall on landing", body: "0 landing score; often 0 total score." },
    { title: "Failed jump attempt", body: "0 for that jump; can retry (no medal chance)." },
    { title: "Wrong trick executed vs. declared", body: "Judges score executed trick, but may deduct." },
    { title: "Illegal equipment (non-FIS spec)", body: "DQ from event." },
    { title: "Unsportsmanlike conduct", body: "Warning; DQ for serious offenses." },
  ],

  positions: [
    { name: "Competitor", role: "Individual athlete executing scored jump.", count: 1 },
    { name: "Team member (team event)", role: "1 of 3 in team.", count: 3 },
    { name: "Coach + team support", role: "Between-jump advice; trick selection strategy." },
    { name: "Judges (5)", role: "Score take-off, form, landing independently.", count: 5 },
  ],
  officiating: {
    officials: ["Chief Judge", "5 Scoring Judges", "Competition Chief", "Timekeeper"],
    summary: "FIS-certified judges; independent scoring; head judge oversees + rules on ambiguous calls.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Ski (FIS)", founded: 1924, headquarters: "Oberhofen, Switzerland", website: "https://fis-ski.com" },
    { name: "US Ski + Snowboard", founded: 1904, headquarters: "Park City, USA", website: "https://usskiandsnowboard.org" },
    { name: "China Ski Association", founded: 1980, headquarters: "Beijing, China" },
    { name: "Belarusian Ski Union", founded: 1962, headquarters: "Minsk, Belarus" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games (Aerials)", frequency: "quadrennial", founded: 1994, region: "worldwide" },
    { name: "FIS Freestyle Ski World Championships", frequency: "biennial", founded: 1986, region: "worldwide" },
    { name: "FIS Freestyle World Cup — Aerials", frequency: "annual (10-15 rounds)", founded: 1980, region: "worldwide winter circuit" },
    { name: "X Games (Winter)", frequency: "annual", founded: 1998, region: "Aspen (USA) — occasional aerials" },
  ],
  countriesPlayed: ["CN", "US", "BY", "AU", "CA", "RU", "CH", "UK", "FR", "SI", "EE", "KZ"],
  famousAthletes: [
    "Xu Mengtao (China — 2022 Olympic gold; women's dominant modern era)",
    "Han Xiaopeng (China — 2006 Olympic gold; sport's first Chinese Olympic gold)",
    "Qi Guangpu (China — 2022 Olympic gold; team event gold)",
    "Nikki Stone (US — 1998 Olympic gold; women's pioneer)",
    "Alisa Camplin (Australia — 2002 Olympic gold + pioneering triple twists)",
    "Anton Kushnir (Belarus — 2014 Olympic gold; men's modern legend)",
    "Alla Tsuper (Belarus — 2014 Olympic gold; women's champion)",
    "Justin Schoenefeld (US — 2022 Olympic team gold + individual podium contender)",
    "David Morris (Australia — 2014 Olympic silver + long career)",
    "Kyle Nissen (Canada — 2006 Olympic silver)",
  ],
  records: [
    { title: "Most Aerials Olympic gold medals (nation)", holder: "China", value: "Multiple Olympic golds since 2006 (Han Xiaopeng, Xu Mengtao, Qi Guangpu, team gold 2022)", year: 2022 },
    { title: "First Olympic Aerials medal", holder: "Lillehammer 1994", value: "First Olympic medal event; Andreas Schönbächler (Switzerland) + Lina Cheryazova (Uzbekistan)", year: 1994 },
    { title: "Team event Olympic debut", holder: "Beijing 2022", value: "First Winter Olympics with team aerials medal event", year: 2022 },
    { title: "Xu Mengtao career", holder: "Xu Mengtao (China)", value: "2022 Olympic gold + multiple World Championship medals + long dominant career", year: 2022 },
    { title: "Trick progression", holder: "Various", value: "Elite jumpers now perform 'Full-Full-Full' (triple flip with 3 twists) or higher-difficulty variations", year: 2020 },
  ],

  variants: ["fis-individual-aerials", "fis-team-aerials-olympic-from-2022", "junior-aerials-modified-difficulty"],
  relatedSports: ["freestyle-skiing", "moguls", "halfpipe-skiing", "big-air-skiing", "trampoline-gymnastics"],

  skills: ["explosive take-off timing", "in-air spatial awareness + rotation control", "precise 2-foot landing", "flip + twist coordination", "fear management (12-15m air)", "consistent replicability (competition demands)"],
  strategies: [
    { title: "Master the take-off", body: "Take-off determines air quality + rotation speed. Practice hundreds of jumps to perfect pop off ramp." },
    { title: "Progressive difficulty in finals", body: "Save hardest trick for final round if in medal contention; safer trick if just needing to finish." },
    { title: "Landing stability", body: "2-foot landing critical for landing score. Practice landing form until automatic." },
    { title: "Trick difficulty selection", body: "Balance difficulty factor with landing reliability. A landed medium trick often beats a crashed hard trick." },
    { title: "Physical + mental conditioning", body: "Aerials demands explosive power + mental focus. Trampoline + gymnastics + weight training + visualization." },
    { title: "Weather awareness", body: "Wind changes affect trajectory drastically. Skilled athletes adjust take-off angle + rotation timing for conditions." },
  ],

  terminology: [
    { term: "Aerials", meaning: "Freestyle skiing discipline with launched jumps + acrobatics." },
    { term: "Kicker", meaning: "Purpose-built ramp launching skier upward 4-5m." },
    { term: "Landing hill", meaning: "Steep 30-37° groomed hill; ~50m long." },
    { term: "Full", meaning: "One flip with one twist; foundational aerial trick." },
    { term: "Double Full", meaning: "One flip with two twists (720°); intermediate trick." },
    { term: "Full-Full-Full", meaning: "Triple flip with one twist per flip; elite trick." },
    { term: "Double Full-Full-Full", meaning: "Triple flip with 2+1+1 twists (6 rotations total); ultra-elite." },
    { term: "Difficulty factor", meaning: "Numerical multiplier for trick complexity; 0.5-4.5+." },
    { term: "Take-off", meaning: "Launch phase from kicker; scored 0-10." },
    { term: "Form", meaning: "In-air body position + rotation quality; scored 0-10." },
    { term: "Landing", meaning: "Descent + touchdown; scored 0-10." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Cross-train with gymnastics + trampoline", body: "Aerial awareness + rotation control most efficiently learned in gym. Most Aerials champions were gymnasts first." },
      { title: "Master intermediate alpine skiing", body: "Solid alpine base required. 3-5 years alpine before aerial training." },
      { title: "Progress through small kicker jumps", body: "Small kicker → medium → competition-size. Progressive difficulty over years." },
    ]},
    { level: "intermediate", steps: [
      { title: "Join national aerials team", body: "US Ski + Snowboard, China Ski Association, national federations offer development from age 12-14." },
      { title: "Learn single flip + basic twists first", body: "Progressive: single back layout → back full → double back layouts → double full." },
      { title: "Compete at NorAm + regional championships", body: "Build ranking + technique in low-pressure competitions." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at FIS World Cup + X Games", body: "Top pathway to Olympic squad; requires podium finishes at World Cup events." },
      { title: "Master triple flip variations", body: "Elite jumpers execute triple flips with multiple twists; requires years of dedicated training." },
      { title: "National team + Olympic squad selection", body: "National federation trials + World Cup ranking determine Olympic team." },
    ]},
  ],

  faq: [
    { question: "Is Aerial Skiing in the Olympics?", answer: "Yes — since Lillehammer 1994. Both men's + women's individual events. Team event added at Beijing 2022 (3-athlete mixed team). Notable Olympic champions: Han Xiaopeng (China 2006, first Chinese Winter Olympic gold), Xu Mengtao (China 2022), Anton Kushnir (Belarus 2014), Alla Tsuper (Belarus 2014), Nikki Stone (US 1998), Alisa Camplin (Australia 2002)." },
    { question: "How are aerials scored?", answer: "0-100+ total per jump. Judges score 3 elements 0-10 each: Take-off (20% weight) + Form (50%) + Landing (30%). Sum multiplied by trick difficulty factor (0.5-4.5). Elite jumps: 100-140 points. Fall = effectively 0. Best of 2-3 jumps counts in finals. 5 judges score independently." },
    { question: "How is Aerials different from other freestyle disciplines?", answer: "Aerials: single massive jump from ramp; no bump course; extreme aerial acrobatics. Moguls: bump course descent + 2 mid-course jumps. Halfpipe: aerial tricks in U-shape halfpipe. Slopestyle: multiple features + rails. Ski Cross: 4-way head-to-head racing. Aerials is pure aerial acrobatics — sport's biggest air + most technical spin/flip combinations." },
    { question: "How dangerous is Aerials?", answer: "Very serious. Skiers launch 12-15m in air; crashes on landing hill can be catastrophic. Common injuries: concussions, spinal fractures, ACL/MCL tears, broken bones. Mandatory helmets + back protectors reduce risk. Athletes require years of gymnastics + trampoline foundation before competitive Aerials. Injury rate is high; many careers cut short by ACL surgeries." },
    { question: "Who is the greatest aerial skier?", answer: "Multiple candidates: (1) Xu Mengtao (China) — women's dominant modern era; 2022 Olympic gold + multiple World Championship. (2) Han Xiaopeng (China) — sport's first Chinese Winter Olympic gold 2006. (3) Alisa Camplin (Australia) — 2002 Olympic gold + pioneering triple twists in women's competition. (4) Anton Kushnir (Belarus) — 2014 Olympic gold + men's technical mastery. Chinese women dominant recent era (2010s-2020s)." },
  ],

  wikipediaTitle: "Aerial skiing",
  sources: [{ label: "FIS — Aerials", url: "https://fis-ski.com/en/freestyle-skiing/aerials", publisher: "FIS" }, { label: "Wikipedia — Aerial skiing", url: "https://en.wikipedia.org/wiki/Aerial_skiing", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
