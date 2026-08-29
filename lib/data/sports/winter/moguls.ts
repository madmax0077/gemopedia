import type { Sport } from "@/lib/types";

export const moguls: Sport = {
  id: "moguls",
  slug: "moguls",
  name: "Mogul Skiing",
  officialName: "Freestyle Skiing Moguls (FIS)",
  aliases: ["Moguls", "Mogul", "Mogul Freestyle"],
  shortDescription:
    "Winter Olympic freestyle skiing discipline in which skiers descend a steep bump-covered course (about 250m long) executing two mid-course aerial jumps — judged on turns, air, and speed; also contested as Dual Moguls (head-to-head) at World Cup + World Championships.",
  longDescription:
    "Mogul Skiing is a freestyle skiing discipline where competitors descend a steep, groomed course covered with regular bumps ('moguls') while executing two mid-course aerial jumps. Judges score technical turn quality (50%), aerial jumps (25%), and speed (25%). Moguls became a demonstration sport at Calgary 1988 Winter Olympics and full medal event at Albertville 1992. Dual Moguls (head-to-head bracket format) is a World Cup + World Championships discipline but not Olympic. Courses are typically 250m long with 27-30° pitch; bumps are 1-2m tall in regular pattern. Legendary skiers: Jean-Luc Brassard (Canada — 1994 Olympic gold + iconic style), Janne Lahtela (Finland — 2002 Olympic gold), Mikael Kingsbury (Canada — considered greatest ever with Olympic gold 2018 + 4× World Championship gold + record World Cup wins), Hannah Kearney (US — 2010 Olympic gold), Perrine Laffont (France — 2018 Olympic gold), Justine Dufour-Lapointe (Canada — 2014 Olympic gold).",

  category: "winter-sports",
  subCategory: "freestyle skiing — bump-course descent",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (evolved from 1960s hot-dog skiing); FIS World Cup 1980; Olympic Albertville 1992",
  estimatedOrigin: "Evolved from 1960s freestyle 'hot-dog' skiing US; FIS World Cup 1980; Olympic demo Calgary 1988; medal event Albertville 1992",

  players: { min: 1, max: 2, note: "Individual scoring; Dual Moguls is 2-skier head-to-head (World Cup only, not Olympic)." },
  field: {
    surfaceName: "Snow mogul course — steep bump-covered slope with 2 jump features",
    dimensions: "250m long × 20-25m wide; 27-30° average pitch; 2 jumps at ~1/3 + 2/3 down course",
    description: "Purpose-built + groomed course with regular pattern of 1-2m bumps; 2 kicker jumps constructed mid-course. Snow condition critical for consistent scoring.",
  },
  equipment: [
    { name: "Freestyle mogul skis", description: "Short (155-175cm), narrow (65-70mm underfoot), stiff for edge grip in bumps; specialty brands (Head, Rossignol)." },
    { name: "Bindings + boots", description: "Standard alpine bindings + Flex 90-110 boots; must allow rapid absorption + response." },
    { name: "Poles", description: "Standard alpine ski poles; used for planting + rhythm through bumps." },
    { name: "Helmet + goggles (mandatory)", description: "FIS-approved helmet; wide-vision goggles." },
    { name: "Team suit", description: "Aerodynamic ski suit; team-branded." },
  ],
  duration: { approximateMinutes: 1, structure: "Each run: 30-40 seconds. Competition: qualifying + final (best score wins) = 3-4 hours." },
  objective: "Score maximum points from judges by executing clean turns through moguls + 2 aerial jumps + fast descent time.",
  matchStructure: "Individual: qualifying (best of 2 runs) → final round (single run). Dual Moguls (World Cup): head-to-head brackets; whoever scores higher advances. Olympic uses individual format only.",

  basicRules: [
    { title: "Descend groomed mogul course", body: "Course marked with cones + gates; must stay within corridor." },
    { title: "Execute 2 mandatory jumps", body: "2 kicker jumps constructed mid-course; both must be executed for full score." },
    { title: "Judged 0-100 by 7 judges", body: "5 turns judges + 2 air judges; top + bottom scores dropped." },
    { title: "Scoring: 50% turns + 25% air + 25% speed", body: "FIS standard scoring formula since 2005." },
    { title: "Fall = major deduction", body: "Falls result in significant score deduction; often 20-40 point loss." },
    { title: "Miss a jump = major deduction", body: "Not executing both jumps = major deduction; can put athlete out of medal contention." },
  ],
  advancedRules: [
    { title: "Turn quality criteria", body: "Judges look for: absorption (soft knees), aggressive line, clean edge, upper-body stability, consistent rhythm." },
    { title: "Aerial trick difficulty", body: "Higher-difficulty aerials (backflips, spins, twists) score more air points. Elite skiers do double flips or 720° spins." },
    { title: "Speed pacing", body: "Faster time = more speed points, but too fast = loss of turn control. Elite skiers balance carefully." },
    { title: "Dual Moguls bracket", body: "World Cup + World Championships have Dual Moguls: 2 skiers race side-by-side; higher-scored run advances. Elimination brackets." },
    { title: "Weather adjustments", body: "Judges may adjust for changing snow conditions; harder snow = harder to absorb." },
    { title: "Style consistency", body: "Judges reward consistency across whole course; not just top or bottom sections." },
  ],
  scoring: {
    summary: "0-100 total: Turns 50 pts + Air 25 pts + Speed 25 pts. Judges score 0-10 in each category; top + bottom dropped; middle averaged.",
    winCondition: "Highest score in final round wins. World Cup season: cumulative points across rounds.",
    breakdown: [
      { action: "Perfect run (extremely rare)", points: "95-100" },
      { action: "Excellent run", points: "85-95" },
      { action: "Good competitive run", points: "70-85" },
      { action: "Standard finish", points: "50-70" },
      { action: "Fall or missed jump", points: "20-50 depending on severity" },
    ],
  },
  penalties: [
    { title: "Fall on course", body: "Major score deduction (15-30 pts typical)." },
    { title: "Missed jump execution", body: "Major deduction (10-25 pts)." },
    { title: "Off-course line", body: "Warning; DQ if severe." },
    { title: "Illegal equipment (non-FIS spec)", body: "DQ from event." },
    { title: "Unsportsmanlike conduct", body: "Warning; DQ for serious offenses." },
  ],

  positions: [
    { name: "Competitor", role: "Individual athlete executing scored run.", count: 1 },
    { name: "Coach + team support", role: "Between-run advice; equipment tuning; nutrition." },
    { name: "Judges (5 turn + 2 air)", role: "Score each run independently.", count: 7 },
  ],
  officiating: {
    officials: ["Head Judge", "5 Turn Judges", "2 Air Judges", "Chief of Competition", "Timekeeper"],
    summary: "FIS-certified officials; independent scoring dropped high/low; head judge oversees + rules on ambiguous calls.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Ski (FIS)", founded: 1924, headquarters: "Oberhofen, Switzerland", website: "https://fis-ski.com" },
    { name: "US Ski + Snowboard", founded: 1904, headquarters: "Park City, USA", website: "https://usskiandsnowboard.org" },
    { name: "Freestyle Canada", founded: 1974, headquarters: "Ottawa, Canada" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games (Moguls)", frequency: "quadrennial", founded: 1992, region: "worldwide" },
    { name: "FIS Freestyle Ski World Championships", frequency: "biennial", founded: 1986, region: "worldwide" },
    { name: "FIS Freestyle World Cup — Moguls + Dual Moguls", frequency: "annual (10-15 rounds)", founded: 1980, region: "worldwide winter circuit" },
    { name: "X Games (Winter)", frequency: "annual", founded: 1998, region: "Aspen (USA) — occasional moguls" },
  ],
  countriesPlayed: ["CA", "US", "FR", "JP", "AU", "NO", "SE", "FI", "RU", "BE", "CH", "CN", "KZ"],
  famousAthletes: [
    "Mikael Kingsbury (Canada — 2018 Olympic gold + 4× World Championship gold + record 82 World Cup wins; considered greatest ever)",
    "Jean-Luc Brassard (Canada — 1994 Olympic gold + iconic style)",
    "Janne Lahtela (Finland — 2002 Olympic gold)",
    "Hannah Kearney (US — 2010 Olympic gold + 3× World Champion)",
    "Perrine Laffont (France — 2018 Olympic gold; women's dominant modern)",
    "Justine Dufour-Lapointe (Canada — 2014 Olympic gold; famous sister trio)",
    "Ikuma Horishima (Japan — 2018 Olympic bronze + long career)",
    "Alex Bilodeau (Canada — 2010+2014 Olympic gold; back-to-back)",
    "Chloe Dufour-Lapointe (Canada — Olympic silver + multiple World Cup)",
    "Jaelin Kauf (US — modern Olympic silver + World Cup dominant)",
  ],
  records: [
    { title: "Most World Cup wins (men)", holder: "Mikael Kingsbury (Canada)", value: "82 World Cup wins (record); 10+ overall World Cup titles", year: 2023 },
    { title: "Most Olympic Moguls golds (women)", holder: "Multiple (Kearney, Laffont, Dufour-Lapointe)", value: "1 gold each; sport is competitive across nations", year: 2022 },
    { title: "Back-to-back Olympic golds (men)", holder: "Alex Bilodeau (Canada)", value: "Gold at Vancouver 2010 + Sochi 2014", year: 2014 },
    { title: "First Olympic Moguls medal", holder: "Albertville 1992", value: "Full medal debut; Edgar Grospiron (France) gold", year: 1992 },
    { title: "Kingsbury dominance", holder: "Mikael Kingsbury (Canada)", value: "Over 15-year career: Olympic gold + 4 World Championship golds + record 82 World Cup wins", year: 2023 },
  ],

  variants: ["fis-standard-moguls-single", "fis-dual-moguls-head-to-head", "junior-moguls-shorter-course"],
  relatedSports: ["freestyle-skiing", "aerials", "halfpipe-skiing", "slopestyle-skiing", "ski-cross", "alpine-skiing"],

  skills: ["absorption technique (soft knees through bumps)", "aggressive line + rhythm", "aerial trick execution", "speed vs. control balance", "physical fitness (short intense bursts)", "mental focus (30-second all-in)"],
  strategies: [
    { title: "Nail the top section", body: "First 5-6 bumps set the rhythm; establishes turn score. Elite skiers hit these with precision." },
    { title: "Attack the moguls, don't survive them", body: "Judges reward aggressive line; too passive = low turn scores." },
    { title: "Perfect the 2 jumps", body: "Both jumps must be executed cleanly. Choose difficulty level matching your consistency — a landed medium trick beats a crashed hard trick." },
    { title: "Speed balance", body: "Too slow = low speed score; too fast = lose control. Elite skiers ski just below their edge of control." },
    { title: "Recover from small errors", body: "Judges reward runs with clean recoveries; obvious struggle costs more than smooth adjustment." },
    { title: "Study top skiers (Kingsbury)", body: "Video analysis of elite skiers; learn absorption + rhythm + jump execution from world's best." },
  ],

  terminology: [
    { term: "Moguls", meaning: "Regular bumps in ski course; 1-2m tall in pattern." },
    { term: "Absorption", meaning: "Soaking up bump impact with soft knees + hips." },
    { term: "Kicker", meaning: "Constructed jump feature on course." },
    { term: "Line", meaning: "Chosen path down the course through bumps." },
    { term: "Turn score", meaning: "50% of total; based on technique + rhythm + line." },
    { term: "Air score", meaning: "25% of total; based on aerial difficulty + execution." },
    { term: "Speed score", meaning: "25% of total; based on descent time." },
    { term: "Dual Moguls", meaning: "Head-to-head bracket format; World Cup only, not Olympic." },
    { term: "Backflip", meaning: "Common elite aerial trick." },
    { term: "Cork 720", meaning: "Off-axis 2-spin trick; higher difficulty." },
    { term: "Kingsbury", meaning: "Mikael Kingsbury (CA); sport's GOAT with record 82 World Cup wins." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master intermediate alpine skiing first", body: "Moguls requires solid alpine base. 3-5 years alpine before mogul training." },
      { title: "Progress through terrain park + small bumps", body: "Start on small mogul fields; graduate to steeper + larger courses over years." },
      { title: "Join competitive freestyle team", body: "US Ski + Snowboard, Freestyle Canada, national federations offer development pipelines from age 8-10." },
    ]},
    { level: "intermediate", steps: [
      { title: "Compete at regional events", body: "USASA + regional national championships build ranking + technique." },
      { title: "Learn aerial tricks (backflip, spins)", body: "Progressive: 180 → 360 → back layout → back full → back double." },
      { title: "Physical training", body: "Explosive leg power + absorption training critical. Weight training + plyometrics." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at FIS World Cup", body: "Top pathway to Olympic squad; requires podium finishes at World Cup events." },
      { title: "National team selection", body: "National federation trials + World Cup ranking determine Olympic squad." },
      { title: "Master multiple aerial variations", body: "Elite skiers know 5-10 different tricks + can adapt to conditions + judges." },
    ]},
  ],

  faq: [
    { question: "Is Mogul Skiing in the Olympics?", answer: "Yes — since Albertville 1992 (demonstration Calgary 1988). Both men's + women's individual events. Dual Moguls is NOT Olympic despite being in World Cup + World Championships since 2000s. Notable Olympic champions: Mikael Kingsbury (Canada 2018), Alex Bilodeau (Canada back-to-back 2010+2014), Hannah Kearney (US 2010), Perrine Laffont (France 2018)." },
    { question: "How are moguls scored?", answer: "0-100 total. Formula: 50% Turns + 25% Air + 25% Speed. 5 turn judges + 2 air judges score each run independently (0-10 in each category). Top + bottom scores dropped; middle averaged. Falls = major deduction (20-40 pts typical). Missed jumps = major deduction. Perfect runs are 95-100 (extremely rare); competitive scores usually 75-90." },
    { question: "Who is the greatest mogul skier?", answer: "Mikael Kingsbury (Canada) — undisputed GOAT. 2018 Olympic gold + 4× World Championship gold + record 82 FIS World Cup wins across 15+ year career. Considered impossible to match his dominance. Others: Jean-Luc Brassard (Canada 1994 gold + iconic style), Hannah Kearney (US 2010 gold + 3× World Champion), Perrine Laffont (France 2018 gold)." },
    { question: "How are moguls different from other freestyle disciplines?", answer: "Moguls: descend bump course + 2 aerial jumps. Aerials: single massive jump from ramp; no bump course. Halfpipe: aerial tricks in U-shape halfpipe (no bumps). Slopestyle: multiple features + rails through park. Ski Cross: 4-way head-to-head racing. Moguls is the endurance + rhythm-focused freestyle discipline; other disciplines emphasize aerial acrobatics or racing." },
    { question: "How dangerous is mogul skiing?", answer: "Moderate risk. Common injuries: ACL/MCL tears from awkward landings; back injuries from absorption impact; concussions from jump falls. Mandatory helmets reduce head injury risk. Less catastrophic than downhill or halfpipe but chronic wear-and-tear common; many skiers retire from accumulated joint damage." },
  ],

  wikipediaTitle: "Mogul skiing",
  sources: [{ label: "FIS — Moguls", url: "https://fis-ski.com/en/freestyle-skiing/moguls", publisher: "FIS" }, { label: "Wikipedia — Mogul skiing", url: "https://en.wikipedia.org/wiki/Mogul_skiing", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
