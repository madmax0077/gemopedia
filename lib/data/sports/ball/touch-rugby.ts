import type { Sport } from "@/lib/types";

export const touchRugby: Sport = {
  id: "touch-rugby",
  slug: "touch-rugby",
  name: "Touch Rugby",
  officialName: "Touch (Federation of International Touch)",
  aliases: ["Touch", "Touch Football (Australian NRL variant)", "Touchie"],
  shortDescription:
    "Non-contact 6-a-side rugby league variant where defenders touch ball-carriers instead of tackling — Australian-origin recreational + competitive sport contested at World Cup every 4 years since 1988.",
  longDescription:
    "Touch Rugby (or just 'Touch') is a non-contact 6-a-side rugby league variant where defenders end play by touching the ball-carrier with an open hand rather than tackling. Codified in Australia in 1968 (Sydney), it emerged from rugby league pre-season training + informal games. The Federation of International Touch (FIT) was founded 1985 to govern globally; Touch World Cup contested every 4 years since 1988. Australia dominates internationally (won every men's + women's title since inception). Distinct from Tag Rugby (which uses removable flags) — Touch uses just physical contact. Fast, tactical, inclusive: standard format is 6-a-side with 6-touch rule (6 touches = turnover), 2 × 20-min halves, mixed-gender friendly. Australia has 500,000+ registered players; sport is major in NZ, England, Scotland, South Africa, Fiji, US.",

  category: "ball-sports",
  subCategory: "rugby league variant — non-contact 6-a-side",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "major",
  countryOfOrigin: "AU",
  regionOfOrigin: "Australia (Sydney 1968 codification); FIT founded 1985; Touch World Cup from 1988",
  estimatedOrigin: "Codified Sydney Australia 1968 from rugby league training games; FIT founded 1985; first World Cup 1988",

  players: { perTeam: 6, min: 6, max: 6, substitutes: 8, note: "6 per side; unlimited flying substitutions from bench of 8; total roster 14." },
  field: {
    surfaceName: "Rectangular grass or artificial turf field",
    dimensions: "70m × 50m (FIT standard); 5m in-goal areas at each end; playing area 60m × 50m",
    description: "Rectangular field with try lines at each end + touch lines on sides. Similar to rugby field but smaller.",
  },
  equipment: [
    { name: "Rugby-shape ball (size 4 or 5)", description: "Same as rugby union/league; slightly softer for women's + junior games." },
    { name: "Team jerseys", description: "Numbered; color contrast between teams; sleeveless permitted." },
    { name: "Mouthguard (recommended)", description: "Non-contact but incidental contact possible; mouthguard prudent." },
    { name: "Cleats or turf shoes", description: "Depends on surface." },
    { name: "No protective gear", description: "No pads or scrum caps; non-contact nature makes them unnecessary." },
  ],
  duration: { approximateMinutes: 40, structure: "2 × 20-min halves with 5-min break; running clock; some formats time-limited with sudden death." },
  objective: "Score more touchdowns than opposition by carrying ball across opposing try line.",
  matchStructure: "Kick-off starts each half; team with ball tries to advance to opposing try line; 6-touch rule = 6 touches then turnover; touchdown = 1 point.",

  basicRules: [
    { title: "6 vs 6", body: "6 per side; unlimited flying substitutions." },
    { title: "Touch = tackle equivalent", body: "Defender must physically TOUCH ball-carrier with open hand; play stops immediately." },
    { title: "6-touch rule", body: "Attacking team has 6 touches to score. 6th touch without touchdown = ball turnover." },
    { title: "Backward passes only", body: "Standard rugby rule: ball may only be passed backward or laterally." },
    { title: "No kicking", body: "Kicking not permitted in FIT rules (unlike rugby league)." },
    { title: "No contact", body: "No tackling, blocking, shepherding. Illegal contact = penalty." },
    { title: "Touchdown = 1 point", body: "Ball grounded across try line = 1 touchdown. No conversions." },
    { title: "Play resumes with 'roll ball'", body: "After touch: ball-carrier rolls ball back with foot to teammate ('half'); fast continuous play." },
  ],
  advancedRules: [
    { title: "Mixed-gender rules", body: "FIT Mixed division: 3 women + 3 men on field simultaneously; encourages inclusive play." },
    { title: "Off-side + roll-ball infringements", body: "Defensive players must retreat 5m before touch reset; violation = 5m penalty." },
    { title: "Touchdown-line try", body: "Ball-carrier must ground ball; leaping try over line requires ball touching ground before line." },
    { title: "Discipline system", body: "Sin bin (5 min) for repeated infringements; red card for serious offenses." },
    { title: "World Cup format", body: "8-team elimination format at Touch World Cup; typically Australia, NZ, England, South Africa, Scotland, US, Cook Islands, Wales." },
    { title: "Playing halves", body: "Half-back is player receiving ball from roll-ball; primary distributor." },
  ],
  scoring: {
    summary: "1 point per touchdown. Higher touchdown count wins.",
    winCondition: "Higher touchdown count at end of regulation; some formats: sudden-death overtime.",
    breakdown: [
      { action: "Touchdown (ball grounded across try line)", points: "1" },
      { action: "Penalty try (defender obstruction near line)", points: "1" },
    ],
  },
  penalties: [
    { title: "Forward pass", body: "Turnover — opposition ball at spot." },
    { title: "Contact / illegal touch", body: "5m penalty; repeated = warning + sin bin (5 min)." },
    { title: "Off-side (defender not retreated 5m)", body: "5m penalty." },
    { title: "Delay of game", body: "Referee restart at spot." },
    { title: "Sin bin (5 minutes)", body: "For repeated fouls." },
  ],

  positions: [
    { name: "Half-back (dummy-half)", role: "Receives ball from roll-ball; primary distributor.", count: 1 },
    { name: "Runner (attacker) — Middle", role: "Central attacker; creates gaps.", count: 1 },
    { name: "Runner — Wing (2)", role: "Wide attackers; finish tries.", count: 2 },
    { name: "Runner — Link (2)", role: "Bridge between middle + wing.", count: 2 },
  ],
  officiating: {
    officials: ["1 Referee (on-field)", "2 Touch judges (competitive events)"],
    summary: "1 referee for casual games; 3-official crew for FIT competitive tournaments.",
  },

  governingBodies: [
    { name: "Federation of International Touch (FIT)", founded: 1985, headquarters: "Auckland, New Zealand", website: "https://internationaltouch.org" },
    { name: "Touch Football Australia", founded: 1978, headquarters: "Canberra, Australia" },
    { name: "England Touch Association", founded: 1998, headquarters: "England" },
    { name: "Touch NZ", founded: 1975, headquarters: "New Zealand" },
  ],
  majorCompetitions: [
    { name: "Touch World Cup", frequency: "quadrennial", founded: 1988, region: "worldwide" },
    { name: "Touch Trans-Tasman (Australia vs NZ)", frequency: "annual", founded: 1985, region: "AUS + NZ" },
    { name: "European Touch Championships", frequency: "biennial", founded: 1996, region: "Europe" },
    { name: "Australian NRL Touch Football League", frequency: "annual", founded: 1978, region: "Australia" },
  ],
  countriesPlayed: ["AU", "NZ", "GB", "ZA", "US", "FJ", "SG", "JP", "FR", "IT", "ES", "SC", "WLS", "IE", "CK", "SA"],
  famousAthletes: [
    "No individual global stars — Touch is amateur/semi-pro",
    "Australian national team dominant since inception",
    "Peter Bell (Australia — long career + coaching)",
    "New Zealand Ferns — women's team consistent runners-up",
  ],
  records: [
    { title: "Most Touch World Cups (men + women + mixed)", holder: "Australia", value: "Won every men's + women's + mixed World Cup since 1988", year: 2023 },
    { title: "Largest national program", holder: "Touch Football Australia", value: "500,000+ registered players", year: 2020 },
    { title: "First Touch World Cup", holder: "FIT", value: "First held Australia 1988; quadrennial since", year: 1988 },
  ],

  variants: ["fit-standard-touch-6v6", "australian-mixed-3+3", "school-touch-modified", "junior-touch-younger-age-groups", "beach-touch-recreational"],
  relatedSports: ["rugby-league", "rugby-union", "tag-rugby", "flag-football", "gaelic-football"],

  skills: ["backward passing", "spatial awareness (finding gaps)", "quick footwork + evasion", "touch technique (defense)", "conditioning (near-constant movement)", "team communication"],
  strategies: [
    { title: "Attack the space", body: "Non-contact means defenders can't physically stop runners. Attack gaps; use pace + angles." },
    { title: "Spread the field", body: "6 attackers across 50m width creates 1v1 mismatches." },
    { title: "6-touch countdown", body: "6-touch turnover means late-count touches = try-scoring urgency. Peak attacks at touches 4-5." },
    { title: "Defensive line integrity", body: "Non-contact defense = maintain straight defensive line + touch ball-carriers before break-through." },
    { title: "Roll-ball speed", body: "Fast roll-ball = defense not set = numerical advantage. Slow roll-ball allows defense to reset." },
  ],

  terminology: [
    { term: "Touch", meaning: "Physical contact ending play; defender's open-hand contact." },
    { term: "Touchdown", meaning: "Ball grounded across try line; 1 point." },
    { term: "Roll ball", meaning: "Ball-carrier rolls ball back with foot after touch; restart mechanic." },
    { term: "Half-back / Dummy-half", meaning: "Player receiving ball from roll-ball; primary distributor." },
    { term: "6-touch rule", meaning: "6 touches without touchdown = ball turnover." },
    { term: "FIT", meaning: "Federation of International Touch; world governing body." },
    { term: "Mixed division", meaning: "Mixed-gender teams; 3 women + 3 men on field simultaneously." },
    { term: "Sin bin", meaning: "5-minute suspension for repeated fouls." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join school or community touch league", body: "Australia + NZ + UK + South Africa have organized adult + youth leagues." },
      { title: "Learn passing + touch basics", body: "Backward pass + open-hand touch are core skills; 30-min practice makes competent." },
      { title: "Play mixed-gender social leagues", body: "Inclusive, non-contact, family-friendly. Most adult leagues include mixed division." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at national championships", body: "Australian NRL Touch League + NZ + UK national championships." },
      { title: "National team selection", body: "Open tryouts before Touch World Cup; competitive across men + women + mixed." },
    ]},
  ],

  faq: [
    { question: "How is Touch different from Tag Rugby?", answer: "Very similar but different tackle mechanic. Touch (Australian origin): defender must physically TOUCH ball-carrier with open hand — no equipment. Tag Rugby: defender must PULL a Velcro tag from ball-carrier's belt. Rules overlap 90%+. World Rugby endorses both as entry pathways." },
    { question: "Is Touch in the Olympics?", answer: "No. Touch World Cup every 4 years is the sport's peak international event. Rugby Sevens is Olympic; Touch has not been included. FIT has explored Olympic pathway but not currently active." },
    { question: "Where is Touch most popular?", answer: "Australia (500,000+ players — sport's origin + largest program), New Zealand, England (50,000+), Scotland, South Africa, Fiji, US (growing). Australia dominates internationally — won every World Cup title." },
    { question: "Can I play Touch as an adult?", answer: "Yes — adult social + competitive leagues thrive in Australia + NZ + UK + South Africa. Corporate + university + community leagues extremely common. Mixed-gender leagues encourage inclusive play. Excellent fitness activity + low injury risk." },
  ],

  wikipediaTitle: "Touch (sport)",
  sources: [{ label: "Federation of International Touch", url: "https://internationaltouch.org", publisher: "FIT" }, { label: "Wikipedia — Touch (sport)", url: "https://en.wikipedia.org/wiki/Touch_(sport)", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
