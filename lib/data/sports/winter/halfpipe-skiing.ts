import type { Sport } from "@/lib/types";

export const halfpipeSkiing: Sport = {
  id: "halfpipe-skiing",
  slug: "halfpipe-skiing",
  name: "Halfpipe Skiing",
  officialName: "Freestyle Skiing Halfpipe (FIS)",
  aliases: ["Ski Halfpipe", "Halfpipe Freestyle Skiing", "Ski Pipe"],
  shortDescription:
    "Olympic freestyle skiing discipline in a 22-ft-wall snow halfpipe — skiers perform aerial tricks in a scored run judged on amplitude, difficulty, execution + variety; contested at Winter Olympics since Sochi 2014.",
  longDescription:
    "Halfpipe Skiing is a freestyle skiing discipline where competitors perform aerial tricks in a snow halfpipe — a U-shaped trough with 22-foot (6.7m) vertical walls, 550 feet (168m) long. Skiers alternate between the two walls, launching into the air and performing spins, flips, and grabs (holding the ski with a hand mid-air). Judges score each run out of 100 based on Amplitude (height of air), Difficulty (trick complexity + rotations), Execution (smoothness + control), and Variety (mixing left + right rotations + different tricks). Halfpipe Skiing debuted at the Winter Olympics in Sochi 2014 (women: Maddie Bowman US gold; men: David Wise US gold). Elite tricks include the 'Double Cork 1440' (2 flips + 4 spins), 'Alley-Oop 720' (spinning against direction of travel), and 'Switch Double 1080' (backward takeoff + 3 spins). Dominant nations: US, Canada, France, Norway, Switzerland. Legendary athletes: Sarah Burke (Canada — pioneer, tragically killed 2012 in training), Simon Dumont (US), David Wise (US), Cassie Sharpe (Canada — Olympic gold 2018), Eileen Gu (China — Olympic gold 2022).",

  category: "winter-sports",
  subCategory: "freestyle skiing — aerial halfpipe",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "US",
  regionOfOrigin: "United States (evolved from snowboarding halfpipe; US ski resorts 1990s)",
  estimatedOrigin: "Evolved from snowboarding halfpipe 1990s; first X Games event 2002; Olympic debut Sochi 2014",

  players: { min: 1, max: 1, note: "Individual competition; team results calculated at national championships." },
  field: {
    surfaceName: "Snow halfpipe",
    dimensions: "168 m long × 22 ft (6.7 m) high walls × 22 m wide (Olympic superpipe)",
    description: "U-shaped snow structure with vertical walls; groomed daily; requires cold weather + massive snow-making. Only ~15 competition-grade halfpipes exist worldwide.",
  },
  equipment: [
    { name: "Twin-tip freestyle skis", description: "Symmetrical tips + tails; allow forward + backward takeoffs + landings. Typically 155-180cm long; lightweight." },
    { name: "Ski bindings", description: "Standard alpine bindings; slightly tighter than traditional to prevent releases during hard landings." },
    { name: "Ski boots", description: "Flex 90-120 (softer than alpine racing); allow ankle mobility for aerial control." },
    { name: "Ski helmet (mandatory)", description: "FIS-approved with hard shell; back-protector often integrated." },
    { name: "Back protector + spine armor", description: "Recommended for reduced spinal injury risk from hard landings." },
    { name: "Poles (optional)", description: "Some skiers ski without poles; others use short + light poles for takeoff timing." },
    { name: "Team uniform", description: "Aerodynamic ski suit; often team-branded; helmet must display country code (FIS)." },
  ],
  duration: {
    approximateMinutes: 1,
    structure: "Each run: 60–90 seconds. Competition: 2 or 3 runs; best score counts. Full event: 2–3 hours including practice + qualifying + finals.",
  },
  objective:
    "Score maximum points from judges over the length of a single run by executing tricks of highest difficulty with best execution, greatest amplitude, and most variety.",
  matchStructure:
    "Qualification round: skiers do 2 runs; best score advances. Finals: 12 finalists; each does 3 runs; best single run scored. Judges (typically 6) score each run 0-100; top + bottom scores dropped; middle 4 averaged for final score.",

  basicRules: [
    { title: "22-ft superpipe", body: "Standard: 22-foot (6.7m) vertical walls, 168m long. Older 18-ft halfpipes still used at some events." },
    { title: "2 or 3 runs per athlete", body: "Best single run counts (not average). Encourages athletes to attempt hardest tricks even if occasionally failing." },
    { title: "60-90 second run", body: "Each run typically has 4-6 hits (aerial takeoffs); athletes alternate walls." },
    { title: "Judged 0-100 by 6 judges", body: "Top + bottom scores dropped; middle 4 averaged. Reduces judge bias." },
    { title: "Scoring criteria (5 elements)", body: "Amplitude (height), Difficulty (trick complexity), Execution (technique + landing), Variety (different tricks), Progression (bringing new tricks)." },
    { title: "Falls = severe deduction", body: "Any fall (hand touch, sit-down) causes major score deduction; complete crash typically drops score by 30-50 points." },
    { title: "Athletes select own runs", body: "No mandatory tricks; athletes design their own runs. Elite skiers include 4-6 spin/flip tricks per run." },
  ],
  advancedRules: [
    { title: "Amplitude critical", body: "Height above pipe edge (typically measured in feet) is scored heavily. Elite skiers get 15-20+ feet of air." },
    { title: "Rotational combinations", body: "Named by degrees: 720° (2 spins), 900° (2.5), 1080° (3), 1260° (3.5), 1440° (4). Elite: 1440° combined with flip (Double Cork 1440)." },
    { title: "Grabs during tricks", body: "Holding ski with hand mid-trick (Mute, Japan, Safety, Lien, etc.); adds difficulty + style points. Elite tricks include grab throughout rotation." },
    { title: "Switch tricks (backward takeoffs)", body: "Backward-facing takeoff or landing; considered more difficult than forward. Elite runs include switch double + switch triple rotations." },
    { title: "Alley-Oop", body: "Spinning against direction of travel down the pipe; visually striking + technically demanding." },
    { title: "Cork rotations", body: "Off-axis flip combined with spin (Cork 720 = 1 cork + 2 spins). Elite: Double Cork 1440." },
    { title: "Progression bonus", body: "New tricks or novel combinations attempted at competition score extra 'progression' points from judges." },
  ],
  scoring: {
    summary: "6 judges score 0-100 based on Amplitude + Difficulty + Execution + Variety + Progression. Top + bottom scores dropped; middle 4 averaged.",
    winCondition: "Highest single-run score in finals wins gold. 2 runs per qualifying + 3 runs per finals typical.",
    breakdown: [
      { action: "Perfect run (elite estimate)", points: "95-100 (extremely rare)" },
      { action: "Excellent run (multiple double corks + high amplitude)", points: "85-95" },
      { action: "Good run (mostly clean, some standard tricks)", points: "75-85" },
      { action: "Standard competitive run", points: "60-75" },
      { action: "Run with 1 fall", points: "30-60 depending on quality of rest" },
      { action: "Complete crash", points: "10-30 (typically automatic bottom of field)" },
    ],
  },
  penalties: [
    { title: "Hand touch", body: "Judges deduct significantly (~5-10 pts); considered incomplete landing." },
    { title: "Sit-down fall", body: "Major deduction (~15-25 pts); considered incomplete." },
    { title: "Complete crash", body: "Massive deduction; likely bottom-of-field score." },
    { title: "Missing a hit", body: "Deduction; run incomplete." },
    { title: "Delay of run start", body: "Warning; second offense = disqualification." },
  ],

  positions: [
    { name: "Competitor", role: "Individual athlete executing scored run.", count: 1 },
    { name: "Coach", role: "Between-run advice + trick selection strategy." },
    { name: "Head judge + 5 judges", role: "Score each run 0-100 on 5 criteria." },
  ],
  officiating: {
    officials: ["Head Judge", "5-6 Scoring Judges", "Chief Referee", "Timekeeper"],
    summary: "FIS-certified judges score each run; independent scoring dropped high/low; head judge + chief referee oversee.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Ski (FIS)", founded: 1924, headquarters: "Oberhofen, Switzerland", website: "https://fis-ski.com" },
    { name: "US Ski + Snowboard", founded: 1904, headquarters: "Park City, USA", website: "https://usskiandsnowboard.org" },
    { name: "Freestyle Canada", founded: 1974, headquarters: "Ottawa, Canada", website: "https://freestylecanada.ski" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games (Halfpipe Skiing)", frequency: "quadrennial", founded: 2014, region: "worldwide (Sochi 2014, Pyeongchang 2018, Beijing 2022)" },
    { name: "FIS Freestyle Ski World Championships", frequency: "biennial", founded: 2003, region: "worldwide" },
    { name: "FIS World Cup Halfpipe", frequency: "seasonal (8-12 events)", founded: 2005, region: "worldwide winter circuit" },
    { name: "X Games (Winter)", frequency: "annual", founded: 2002, region: "Aspen (USA)" },
    { name: "Dew Tour", frequency: "annual", founded: 2005, region: "USA" },
  ],
  countriesPlayed: ["US", "CA", "FR", "NO", "CH", "CN", "JP", "AT", "GB", "SE", "FI", "IT", "RU", "NZ", "AU"],
  famousAthletes: [
    "Sarah Burke (Canada — pioneer of women's halfpipe skiing; tragically died 2012 in training)",
    "Simon Dumont (US — early progression pioneer)",
    "David Wise (US — 2× Olympic gold 2014 + 2018; 4× X Games champion)",
    "Maddie Bowman (US — Olympic gold 2014)",
    "Cassie Sharpe (Canada — Olympic gold 2018)",
    "Alex Ferreira (US — Olympic silver 2018 + gold 2022)",
    "Eileen Gu (China — Olympic gold 2022; genre-defining star)",
    "Kelly Sildaru (Estonia — youngest X Games gold medalist)",
    "Nico Porteous (New Zealand — Olympic gold 2022)",
    "Aaron Blunck (US — multiple X Games medals)",
  ],
  records: [
    { title: "Olympic debut", holder: "Sochi 2014", value: "First Winter Olympics with Halfpipe Skiing medals", year: 2014 },
    { title: "First double-cork 1440 in competition", holder: "Simon Dumont (US)", value: "Landmark trick 2005", year: 2005 },
    { title: "David Wise Olympic double-gold", holder: "David Wise (US)", value: "Halfpipe gold 2014 + 2018", year: 2018 },
    { title: "Youngest X Games champion", holder: "Kelly Sildaru (EE)", value: "Slopestyle X Games gold at 13 (2016)", year: 2016 },
    { title: "Sarah Burke Award", holder: "FIS", value: "Named after Sarah Burke; honors halfpipe pioneer", year: 2012 },
    { title: "Eileen Gu 2022 gold", holder: "Eileen Gu (China)", value: "Olympic gold Beijing 2022; galvanized Chinese winter sports investment", year: 2022 },
  ],

  variants: ["fis-superpipe-22ft", "18ft-halfpipe-historic", "big-air-skiing-related", "slopestyle-related"],
  relatedSports: ["snowboard-halfpipe", "big-air-skiing", "slopestyle-skiing", "mogul-skiing", "freestyle-skiing"],

  skills: [
    "aerial awareness + spatial rotation",
    "landing precision + shock absorption",
    "amplitude generation (edge control + timing)",
    "trick vocabulary + memorization",
    "mental focus (high-consequence sport)",
    "physical fitness (short bursts, explosive)",
  ],
  strategies: [
    { title: "Maximize amplitude first", body: "Judges reward height above pipe. Optimize takeoff angle + speed before adding rotational difficulty." },
    { title: "Progressive trick difficulty", body: "Start run with medium-difficulty tricks to build momentum; place hardest trick middle or end when confidence peaks." },
    { title: "Grab throughout rotation", body: "Adds difficulty + style. Elite tricks maintain grab throughout entire spin/flip." },
    { title: "Alternate spin directions", body: "Variety scoring rewards left + right rotations in same run. Learn both directions early in training." },
    { title: "Recover from small errors", body: "Judges reward runs with clean recoveries; obvious struggle costs more than smooth adjustment." },
    { title: "Physical + mental conditioning", body: "Halfpipe demands short-burst explosive fitness + iron mental focus. Falls hurt; consistency requires practice + confidence." },
  ],

  terminology: [
    { term: "Superpipe", meaning: "22-foot-wall halfpipe; current Olympic + World Cup standard." },
    { term: "Amplitude", meaning: "Height above pipe edge during trick; heavily scored." },
    { term: "Cork", meaning: "Off-axis flip; combined with spin becomes 'Cork 720' etc." },
    { term: "Alley-Oop", meaning: "Spin against direction of travel down pipe." },
    { term: "Switch", meaning: "Backward-facing takeoff or landing." },
    { term: "Grab", meaning: "Holding ski with hand during trick (Mute, Japan, Safety, Lien, etc.)." },
    { term: "1440", meaning: "4 full rotations (1440°); elite trick." },
    { term: "Double Cork 1440", meaning: "2 flips + 4 spins; benchmark elite trick." },
    { term: "Hit", meaning: "One aerial trick within a run; runs typically have 4-6 hits." },
    { term: "Judge", meaning: "Scores runs 0-100; 6 judges per event." },
    { term: "X Games", meaning: "Prestigious action sports competition; Halfpipe Skiing debut 2002." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master intermediate alpine skiing first", body: "Halfpipe requires solid alpine base. 2-3 years alpine before attempting freestyle progression." },
      { title: "Progress through terrain park", body: "Small features → medium jumps → 3ft mini-pipes → 8ft pipes → 12ft → 18ft → 22ft superpipe." },
      { title: "Learn 180s + 360s in air", body: "Half rotation + full rotation are foundation for all subsequent tricks. Practice on jumps before halfpipe." },
    ] },
    { level: "intermediate", steps: [
      { title: "Join local competitive team", body: "US Ski + Snowboard, Freestyle Canada, national federations offer development pipelines." },
      { title: "Add corks + grabs", body: "Cork 720 with grab; the foundational elite trick. Progress to Double Cork 720 → Double Cork 900." },
      { title: "Compete at regional events", body: "USASA, Rev Tour, junior nationals build ranking + technique in low-pressure setting." },
    ] },
    { level: "advanced", steps: [
      { title: "Compete at FIS World Cup + X Games", body: "Top pathway to Olympic squad; requires podium finishes at World Cup events." },
      { title: "Add Double Corks + 1440s", body: "Double Cork 1440 or Switch Double Cork 1080 required for elite podium contention." },
      { title: "Target Olympic qualification", body: "National federation trial results in Olympic year determine squad selection." },
    ] },
  ],

  faq: [
    { question: "Is Halfpipe Skiing in the Olympics?", answer: "Yes — since Sochi 2014. Both men's + women's events. First Olympic golds: Maddie Bowman (US, women) + David Wise (US, men). Recent Olympic champions include Cassie Sharpe (Canada 2018), Alex Ferreira (US 2022), Eileen Gu (China 2022), Nico Porteous (New Zealand 2022)." },
    { question: "How is Halfpipe Skiing different from Snowboard Halfpipe?", answer: "Same halfpipe, different equipment. Skiing: two skis (twin-tip), ski poles (usually), separate leg movement, more grab options. Snowboarding: one board, feet strapped in, unified leg movement, different trick vocabulary. Halfpipe skiing developed AFTER snowboard halfpipe (which was Olympic since 1998) — the ski version debuted at X Games 2002, Olympics 2014." },
    { question: "Who is the greatest halfpipe skier?", answer: "Contested: (1) David Wise (US) — 2× Olympic gold 2014 + 2018, 4× X Games. (2) Sarah Burke (Canada) — women's pioneer; tragically died 2012. (3) Eileen Gu (China) — 2022 Olympic gold; genre-defining star. (4) Alex Ferreira (US) — 2022 gold + multiple X Games. Different eras + criteria produce different answers; Wise + Burke are historic legends; Gu + Ferreira are current." },
    { question: "What is a 'Double Cork 1440'?", answer: "Two off-axis flips + four full rotations (1440°) combined into one trick. Requires ~15-20 feet of amplitude to complete. Considered the benchmark elite men's trick since ~2013. Very few skiers land it consistently in competition. Simon Dumont was the first to attempt in competition (2005); modern top-4 skiers all include it." },
    { question: "How dangerous is Halfpipe Skiing?", answer: "Serious — but not catastrophic per-run. Common injuries: knee (ACL/MCL), shoulder dislocation, spine fractures from hard landings, concussions. Sarah Burke's 2012 death was from a training accident with a soft base (unusual). Modern safety: mandatory helmets, back protectors, back-country avalanche training. Injury rate per hour is high but sport is not among most dangerous winter sports (skeleton, luge are higher)." },
  ],

  wikipediaTitle: "Halfpipe skiing",
  sources: [
    { label: "FIS — Freestyle Skiing Halfpipe", url: "https://fis-ski.com/en/freestyle-skiing/halfpipe", publisher: "FIS" },
    { label: "Wikipedia — Halfpipe skiing", url: "https://en.wikipedia.org/wiki/Halfpipe_skiing", publisher: "Wikipedia" },
    { label: "Olympic.org — Freestyle skiing", url: "https://olympics.com/", publisher: "IOC" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
