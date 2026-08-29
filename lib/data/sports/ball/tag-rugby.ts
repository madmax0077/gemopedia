import type { Sport } from "@/lib/types";

export const tagRugby: Sport = {
  id: "tag-rugby",
  slug: "tag-rugby",
  name: "Tag Rugby",
  officialName: "Tag Rugby (World Rugby / International Tag Federation)",
  aliases: ["Tag", "Oz Tag (Australian variant)", "Try Tag", "Non-Contact Rugby"],
  shortDescription:
    "Non-contact rugby — instead of tackling, defenders pull a velcro tag from ball-carriers' hips; typically 6-a-side, popular as school + mixed-gender social sport, and the World Rugby-endorsed entry pathway into rugby union.",
  longDescription:
    "Tag Rugby (also 'Try Tag' in the UK, 'Oz Tag' in Australia, 'Tag' generically) is a non-contact rugby variant where tackling is replaced by pulling a Velcro-attached tag or flag from the ball-carrier's hip. Its origins trace to 1990s Australia (as a way for former rugby league players to keep playing without tackle risk); Perry Haddock is credited as the developer of the modern Oz Tag rules. World Rugby endorses Tag Rugby as an entry-level introduction to rugby union — child-safe, mixed-gender, and low-equipment. The sport is played in 60+ countries; Ireland (150,000+ participants), UK, Australia, France, and Italy have organized leagues. Typical format: 6-a-side (some variants 5 or 7), 2 × 20-min halves, no kicking (in most rulesets), no scrums or lineouts. Scoring: 1 point per try (touchdown behind opposing goal line). It is contested at the World Games (Try Tag) and is a growing recreational + competitive discipline.",

  category: "ball-sports",
  subCategory: "non-contact rugby variant",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "AU",
  regionOfOrigin: "Australia (Oz Tag 1990s); popularized globally via Irish + UK schools + World Rugby endorsement",
  estimatedOrigin: "1990s Australia (Perry Haddock — Oz Tag pioneer); UK 'Try Tag' 2000s; Irish schools mass adoption 2005; World Rugby endorsement 2010",

  players: { perTeam: 6, min: 6, max: 6, substitutes: 6, note: "6-a-side standard (Oz Tag + most international); 5-a-side + 7-a-side variants; unlimited flying substitutions." },
  field: {
    surfaceName: "Grass or artificial turf field",
    dimensions: "70 m × 50 m typical; in-goal areas 5 m deep",
    description: "Smaller than full rugby pitch (~70% size); allows fast pace + more scoring. Rectangular field with try lines at each end.",
  },
  equipment: [
    { name: "Tag belt", description: "Velcro-attached elastic belt with 2 tags on each hip; sonic-style breakaway design." },
    { name: "Rugby ball (size 4 or 5)", description: "Standard rugby ball; slightly smaller size 4 for youth + women's games." },
    { name: "Mouthguard (recommended)", description: "Non-contact but incidental collisions possible." },
    { name: "Cleats or turf shoes", description: "Depends on surface; molded cleats for grass, turf shoes for artificial." },
    { name: "Team jerseys", description: "Numbered; color contrast between teams." },
    { name: "No pads, no scrum caps", description: "No protective equipment; non-contact nature makes it unnecessary." },
  ],
  duration: {
    approximateMinutes: 40,
    structure: "2 × 20-min halves with 5-min break; running clock (some competitive events use stopping clock in last 2 min).",
  },
  objective:
    "Score more tries than opponent by carrying ball across opposing try line. Non-contact — no tackling, no scrums, no lineouts; play is stopped by tag-pull.",
  matchStructure:
    "Kick-off starts each half. Team with ball tries to advance to opposing try line via passing (backward or lateral only) + running. When ball-carrier's tag is pulled → tackle count (usually 6-tag limit); if 6th tag pulled without try, ball turnover. Continuous play; no scrums, lineouts, or restarts from kicking.",

  basicRules: [
    { title: "6 vs 6 (Oz Tag standard)", body: "6 players per side; 5-a-side + 7-a-side international variants exist." },
    { title: "Tag pull = tackle equivalent", body: "Defender pulls a Velcro tag from ball-carrier's belt; ball-carrier must stop + play the ball (pass or place)." },
    { title: "6 tags then turnover", body: "Attacking team has 6 tag-pulls to score. 6th tag without try = ball turned over. Similar to rugby league's 6-tackle rule." },
    { title: "Backward passes only", body: "Standard rugby rule: ball may only be passed backward or laterally. Forward pass = penalty." },
    { title: "No kicking (most rulesets)", body: "Most Tag variants: NO kicking allowed. Some competitive versions allow limited kicking." },
    { title: "No contact", body: "No tackling, blocking, shepherding, or holding. Physical contact = penalty." },
    { title: "Try = 1 point", body: "Ball-carrier grounded across try line = 1 point (try). No conversion kick in most Tag variants." },
    { title: "Play resumes with 'roll ball' or 'tap'", body: "After tag pull: ball-carrier rolls ball back to teammate OR taps ball on ground + passes. Fast continuous play." },
  ],
  advancedRules: [
    { title: "Mixed-gender rules", body: "Many social/leagues require 2 women + 4 men (or reverse) on the field simultaneously. Encourages inclusive play." },
    { title: "Off-side + advantage rules", body: "Defensive players must be behind attacker at tag point; violation = 5-metre penalty." },
    { title: "Try-line defense", body: "Defenders may not intercept diving over try line; but tags count normally." },
    { title: "6-tag turnover exception (10-tag variant)", body: "Some international events use 10-tag turnover — more attacking possessions per team." },
    { title: "Half-back distribution", body: "Player who receives ball from roll-ball is designated 'half-back' for that play; standard Rugby League terminology." },
    { title: "Try Tag competition format", body: "World Rugby-endorsed format with international tournaments + Try Tag World Championships (biennial)." },
  ],
  scoring: {
    summary: "1 point per try (grounded ball across try line). No conversions or field goals.",
    winCondition: "Higher try count at end of regulation; overtime alternating possessions if tied at competitive events.",
    breakdown: [
      { action: "Try (ball grounded across try line)", points: "1" },
      { action: "Some youth variants: 2-point try + 1-point conversion", points: "2 + 1 conversion (rare)" },
      { action: "Penalty try (defender obstruction near line)", points: "1" },
    ],
  },
  penalties: [
    { title: "Forward pass", body: "Turnover — opposition given ball at spot of pass." },
    { title: "Contact / obstruction", body: "5-metre penalty; repeat = warning + sin bin (2-min suspension)." },
    { title: "Off-side (defender not behind attacker)", body: "5-metre penalty against defense." },
    { title: "Delay of game", body: "Referee restart at spot; second offense = penalty." },
    { title: "Sin bin (2 minutes)", body: "For repeated fouls; team plays down a player." },
    { title: "Dangerous play", body: "Penalty + potential sin bin/red card." },
  ],

  positions: [
    { name: "Half-back / Scrum-half", role: "Receives ball from tag-play; primary distributor.", count: 1 },
    { name: "Runner (attacker)", role: "Multiple positions; carries ball + tries to break defensive line.", count: 3 },
    { name: "Winger", role: "Wide receiver + finisher; typically fastest players.", count: 2 },
    { name: "Defender (all)", role: "All players defend; try to pull tags before tries." },
  ],
  officiating: {
    officials: ["1 Referee (on-field)", "2 Touch judges (competitive events)"],
    summary: "1 referee for casual / school games; 3-official crew for tournaments. Referee controls all decisions on the field.",
  },

  governingBodies: [
    { name: "World Rugby (endorses)", founded: 1886, headquarters: "Dublin, Ireland", website: "https://world.rugby" },
    { name: "International Tag Federation (ITF)", founded: 2000, headquarters: "Australia", website: "https://internationaltag.com" },
    { name: "Irish Rugby Football Union (largest Tag Rugby program globally)", founded: 1879, headquarters: "Dublin, Ireland" },
    { name: "Oz Tag International", founded: 1992, headquarters: "Sydney, Australia" },
  ],
  majorCompetitions: [
    { name: "Try Tag / Tag Rugby World Championships", frequency: "biennial", founded: 2004, region: "worldwide (Australia, Ireland, UK typical hosts)" },
    { name: "Oz Tag World Cup", frequency: "quadrennial", founded: 2004, region: "worldwide" },
    { name: "Irish Tag Rugby Championships", frequency: "annual", founded: 2005, region: "Ireland (largest national league)" },
    { name: "UK Tag Rugby Nationals", frequency: "annual", founded: 2008, region: "UK" },
    { name: "European Tag Rugby Championships", frequency: "biennial", founded: 2010, region: "Europe" },
  ],
  countriesPlayed: ["AU", "IE", "GB", "FR", "IT", "US", "CA", "NZ", "ZA", "AR", "JP", "SG", "DE", "ES"],
  famousAthletes: [
    "No individual professional players — Tag Rugby is amateur/semi-pro",
    "Perry Haddock (Australia — developer of Oz Tag modern rules)",
    "Irish national team — dominant at multiple World Championships",
    "Australian Oz Tag national team — sport's founding country",
    "England Tag Rugby — competitive at European + World level",
  ],
  records: [
    { title: "Largest national Tag Rugby program", holder: "Ireland (Irish Rugby Football Union)", value: "150,000+ participants annually across schools + adult leagues", year: 2020 },
    { title: "Most Oz Tag World Cup titles", holder: "Australia", value: "Multiple titles since inaugural 2004 event", year: 2020 },
    { title: "World Rugby endorsement", holder: "World Rugby", value: "Formally endorsed Tag Rugby as entry-level pathway 2010", year: 2010 },
    { title: "60+ countries playing", holder: "International Tag Federation", value: "60+ member nations playing Tag Rugby at some level", year: 2023 },
  ],

  variants: ["oz-tag-australian", "try-tag-british-irish", "world-rugby-tag-standard", "mixed-gender-tag", "school-tag-modified", "wheelchair-tag-rugby"],
  relatedSports: ["rugby-union", "rugby-league", "rugby-sevens", "touch-rugby", "flag-football", "gaelic-football"],

  skills: [
    "backward passing accuracy",
    "spatial awareness (finding gaps)",
    "quick footwork + change of direction",
    "tag-pull technique (defense)",
    "conditioning (near-constant movement)",
    "team communication (calling plays + defensive alignment)",
  ],
  strategies: [
    { title: "Attack the space, not the player", body: "Non-contact means defenders can't physically stop runners. Attack gaps in defensive line; use pace + angles rather than power." },
    { title: "Spread the field", body: "6 attackers across 50m width creates 1v1 mismatches. Isolate fastest player on slowest defender." },
    { title: "6-tag countdown awareness", body: "6-tag turnover means late-count tags = try-scoring urgency. Plan attacks to peak at tags 3-5, not tag 6." },
    { title: "Defensive line integrity", body: "Non-contact defense = maintain straight defensive line + tag ball-carriers before they break through. Line breaks = tries." },
    { title: "Roll-ball speed", body: "Fast roll-ball after tag = defender not set = attacking numerical advantage. Slow roll-ball allows defense to reset." },
    { title: "Communicate + call", body: "Loud + constant team communication about defender positions + attacking options. Non-contact = talking replaces physicality." },
  ],

  terminology: [
    { term: "Tag", meaning: "The Velcro flag attached to ball-carrier's belt; pulled to end play." },
    { term: "Tag pull", meaning: "Defender removes tag from ball-carrier's belt." },
    { term: "Try", meaning: "Ball grounded across opposing try line; scoring play worth 1 point." },
    { term: "Roll ball", meaning: "Ball-carrier places ball on ground behind them after tag; play resumes with half-back pickup." },
    { term: "Tap ball", meaning: "Alternative restart: ball-carrier taps ball on ground + passes." },
    { term: "Half-back", meaning: "Player who receives ball from roll-ball; primary distributor." },
    { term: "6-tag rule", meaning: "6 tag-pulls without a try = ball turnover; standard Oz Tag rule." },
    { term: "Off-side", meaning: "Defender ahead of ball-carrier at tag point; illegal position." },
    { term: "Advantage", meaning: "Referee lets play continue after infringement if attacking team benefits." },
    { term: "Sin bin", meaning: "2-minute suspension for repeated fouls or dangerous play." },
    { term: "Oz Tag", meaning: "Australian variant name; also the pioneering modern format." },
    { term: "Try Tag", meaning: "British/Irish variant name; equivalent to Oz Tag." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join a school or community tag league", body: "Especially popular in Ireland (school programme) + UK + Australia. Most towns have adult social leagues." },
      { title: "Learn passing + tag-pull basics", body: "Backward pass technique + Velcro tag-pull are 2 core skills. 30-min practice makes competent." },
      { title: "Play mixed-gender social leagues", body: "Great intro — inclusive, non-contact, family-friendly. Most adult leagues are mixed by rule." },
    ] },
    { level: "advanced", steps: [
      { title: "Compete at national championships", body: "Ireland + Australia + UK have serious national circuits with strong teams." },
      { title: "Try national team selection", body: "Sport is amateur but international teams are competitive; open tryouts often held pre-Championships." },
      { title: "Consider Rugby Union cross-over", body: "Tag Rugby is World Rugby's endorsed entry pathway — many Tag players progress to full rugby union." },
    ] },
  ],

  faq: [
    { question: "How is Tag Rugby different from Rugby Union?", answer: "Tag Rugby is NON-CONTACT — instead of tackling, defenders pull tags from ball-carriers' hips. Also: no scrums, no lineouts, no kicking (in most rulesets), no protective pads, smaller field (70×50m vs. 100×70m), 6 per side vs. 15. Faster pace, safer, mixed-gender-friendly. Ideal introduction to rugby for kids + non-contact-preferring adults." },
    { question: "How is Tag Rugby different from Touch Rugby?", answer: "Very similar but different tackle mechanic. Touch Rugby: defender must physically TOUCH ball-carrier with an open hand — no equipment. Tag Rugby: defender must PULL a Velcro tag from ball-carrier's belt. Touch is Australian-origin; Tag has both Oz Tag (Australian) and Try Tag (British/Irish) lineages. Rules overlap 90%+. World Rugby endorses both as entry pathways." },
    { question: "Is Tag Rugby only for children?", answer: "Not at all. While it's excellent for children (safe, mixed-gender, non-contact), adult social + competitive leagues thrive globally. Ireland has 150,000+ adult participants annually. Corporate + university + community adult leagues in UK, Australia, US, Canada, France, Italy. It's a legitimate adult sport with international competitions." },
    { question: "Is Tag Rugby in the Olympics?", answer: "No. Rugby Sevens is Olympic (since Rio 2016). Tag Rugby is contested at the World Games + biennial Tag Rugby World Championships. Not currently pursuing Olympic inclusion — World Rugby positions Tag as an entry-level pathway rather than a top-tier competitive discipline." },
    { question: "Where is Tag Rugby most popular?", answer: "Ireland — 150,000+ participants annually (biggest per-capita program globally). Australia — sport's country of origin; large national league. UK — 50,000+ adult players in London alone. Growing rapidly in France, Italy, USA, Canada, South Africa. World Rugby endorsement (2010) has accelerated global adoption." },
  ],

  wikipediaTitle: "Tag rugby",
  sources: [
    { label: "World Rugby — Tag Rugby", url: "https://world.rugby/", publisher: "World Rugby" },
    { label: "Oz Tag International", url: "https://internationaltag.com", publisher: "International Tag Federation" },
    { label: "Wikipedia — Tag rugby", url: "https://en.wikipedia.org/wiki/Tag_rugby", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
