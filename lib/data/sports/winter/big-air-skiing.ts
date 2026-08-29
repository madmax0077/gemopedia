import type { Sport } from "@/lib/types";

export const bigAirSkiing: Sport = {
  id: "big-air-skiing",
  slug: "big-air-skiing",
  name: "Big Air Skiing",
  officialName: "Freestyle Skiing Big Air (FIS)",
  aliases: ["Big Air", "Ski Big Air", "Freestyle Big Air"],
  shortDescription:
    "Winter Olympic freestyle skiing discipline where skiers execute a single massive aerial trick from a specialized ramp — judged on trick difficulty + amplitude + execution + landing; Olympic debut Beijing 2022.",
  longDescription:
    "Big Air Skiing is a freestyle skiing discipline where competitors execute a single massive aerial trick from a specialized purpose-built ramp (kicker). Airborne height reaches 8-12m; total airtime 2-3 seconds. Judges score each jump 0-100 based on Difficulty, Amplitude, Execution, and Landing. Different from Aerials (which uses a different ramp and specific mandated flips), Big Air incorporates the full range of freestyle skiing tricks — spins, corks, flips, grabs, and creative variations. Big Air debuted at the Winter Olympics in Beijing 2022 alongside Big Air Snowboarding. Beijing's iconic 'Big Air Shougang' venue at a decommissioned steel mill made global news. Elite tricks: switch double cork 1620 (backward take-off + 2 flips + 4.5 spins = 6 rotations total), 1980s (5.5 spins), various grab combinations. Legendary skiers: Birk Ruud (Norway — 2022 Olympic gold), Alex Hall (US — 2022 Olympic gold in slopestyle + Big Air World Cup wins), Eileen Gu (China — 2022 Olympic gold in Big Air at home Olympics; iconic moment), Mathilde Gremaud (Switzerland — 2022 Olympic gold in Big Air).",

  category: "winter-sports",
  subCategory: "freestyle skiing — single-trick aerial ramp",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (X Games 1999 debut for snowboarding); FIS World Cup 2011 for skiing; Olympic Beijing 2022",
  estimatedOrigin: "X Games 1999 (snowboarding); freeski Big Air emerged 2000s; FIS World Cup 2011; Olympic debut Beijing 2022",

  players: { min: 1, max: 1, note: "Individual competition; team results at national championships." },
  field: {
    surfaceName: "Purpose-built kicker + landing hill (in-stadium urban setting common)",
    dimensions: "Kicker: 4-5m vertical launch; Landing hill: 30-40° pitch, 60-80m long; Total airborne 8-12m",
    description: "Iconic modern designs are urban (Beijing 2022 Shougang decommissioned steel mill; Kuala Lumpur snow dome). Constructed snow ramp launches skier; landing on steep purpose-built hill.",
  },
  equipment: [
    { name: "Freestyle Big Air skis (twin-tip)", description: "Symmetrical tips + tails allow switch (backward) skiing; typically 155-180cm; wider underfoot (80-95mm) for landing stability." },
    { name: "Bindings + boots", description: "Standard alpine bindings; Flex 90-110 boots allowing ankle mobility." },
    { name: "Mandatory helmet + back protector", description: "FIS-approved helmet; back protector highly recommended." },
    { name: "Poles (optional)", description: "Some skiers ski without poles; others use short poles." },
    { name: "Team suit + wide-vision goggles", description: "Aerodynamic ski suit; wide field of view goggles." },
  ],
  duration: { approximateMinutes: 1, structure: "Each jump: 3-4 seconds. Competition: qualifying (2-3 jumps) + finals (3 jumps, best 2 counted) = 3-4 hours." },
  objective: "Score maximum points from judges by executing high-difficulty aerial tricks with amplitude + clean execution + stable landing.",
  matchStructure: "Qualifying (2 jumps × top scores) → Final (3 jumps × best 2 sum). 12 finalists typical.",

  basicRules: [
    { title: "Launch from kicker", body: "Standardized ramp launches skier 4-5m upward." },
    { title: "Execute single trick per jump", body: "One trick per jump; scored 0-100. Multiple jumps in competition (3 finals, best 2)." },
    { title: "Judged 0-100 by 6 judges", body: "Top + bottom scores dropped; middle 4 averaged." },
    { title: "4 scoring criteria", body: "Difficulty + Amplitude + Execution + Landing." },
    { title: "Best 2 of 3 jumps counted (Olympic + World Cup)", body: "Finals scoring uses best 2 jumps; encourages variety + progressive difficulty." },
    { title: "Fall = 0 landing score", body: "Falls dramatically reduce score; can eliminate athlete from medal contention." },
  ],
  advancedRules: [
    { title: "Difficulty factor", body: "Formal difficulty factor for trick complexity; higher-rotation + off-axis flips score more." },
    { title: "Amplitude score", body: "Height + distance from kicker matter; higher = more scoring potential." },
    { title: "Execution + Landing", body: "Clean execution mid-air + stable 2-foot landing critical; adjustments visible = deduction." },
    { title: "Best 2 of 3 rule tactics", body: "In finals, athletes may attempt hardest trick on 3rd jump if leading; safer strategy if just needing to hold position." },
    { title: "Progression bonus", body: "New tricks or novel combinations attempted at competition score extra 'progression' points." },
    { title: "Standalone or combined discipline", body: "Some events combine Big Air with Slopestyle for overall park champion; Olympic events are separate." },
  ],
  scoring: {
    summary: "0-100 per jump: Difficulty + Amplitude + Execution + Landing. Best 2 jumps summed in finals. 6 judges independent; top + bottom dropped; middle 4 averaged.",
    winCondition: "Highest 2-jump sum in finals wins.",
    breakdown: [
      { action: "Perfect single jump (extremely rare)", points: "95-100" },
      { action: "Excellent jump", points: "85-95" },
      { action: "Good competitive jump", points: "70-85" },
      { action: "Standard jump", points: "50-70" },
      { action: "Fall / crashed jump", points: "10-30" },
      { action: "2-jump final sum (elite)", points: "170-190+" },
    ],
  },
  penalties: [
    { title: "Fall on landing", body: "0 landing score; often 0 total for that jump." },
    { title: "Missed jump", body: "0 for that jump; can retry (but risks medal)." },
    { title: "Off-course line", body: "Warning; DQ if severe." },
    { title: "Illegal equipment (non-FIS spec)", body: "DQ from event." },
    { title: "Unsportsmanlike conduct", body: "Warning; DQ for serious offenses." },
  ],

  positions: [
    { name: "Competitor", role: "Individual athlete executing scored jump.", count: 1 },
    { name: "Coach + team support", role: "Between-jump advice; trick selection strategy." },
    { name: "Judges (6)", role: "Score each jump independently 0-100.", count: 6 },
  ],
  officiating: {
    officials: ["Head Judge", "6 Scoring Judges", "Competition Chief", "Timekeeper"],
    summary: "FIS-certified judges; independent scoring dropped high/low; head judge oversees + rules on ambiguous calls.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Ski (FIS)", founded: 1924, headquarters: "Oberhofen, Switzerland", website: "https://fis-ski.com" },
    { name: "US Ski + Snowboard", founded: 1904, headquarters: "Park City, USA", website: "https://usskiandsnowboard.org" },
    { name: "Freestyle Canada", founded: 1974, headquarters: "Ottawa, Canada" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games (Big Air Skiing)", frequency: "quadrennial", founded: 2022, region: "worldwide (Beijing 2022 debut)" },
    { name: "FIS Freestyle Ski World Championships", frequency: "biennial", founded: 2011, region: "worldwide" },
    { name: "FIS Freestyle World Cup — Big Air", frequency: "annual (5-8 rounds)", founded: 2011, region: "worldwide winter circuit" },
    { name: "X Games (Winter)", frequency: "annual", founded: 2004, region: "Aspen (USA)" },
    { name: "Air + Style", frequency: "annual", founded: 1993, region: "Innsbruck (originally); international" },
  ],
  countriesPlayed: ["US", "NO", "SE", "CN", "CH", "CA", "FR", "AT", "SI", "JP", "GB", "FI", "AU"],
  famousAthletes: [
    "Birk Ruud (Norway — 2022 Olympic gold; modern men's champion)",
    "Eileen Gu (China — 2022 Olympic gold in Big Air + gold halfpipe + silver slopestyle; iconic Beijing moment)",
    "Mathilde Gremaud (Switzerland — 2022 Olympic gold + multiple X Games)",
    "Alex Hall (US — Big Air World Cup wins + 2022 slopestyle Olympic gold)",
    "Andri Ragettli (Switzerland — X Games multiple gold + creative-trick pioneer)",
    "Henrik Harlaut (Sweden — Big Air X Games multiple gold + pioneering nose-butter tricks)",
    "Colby Stevenson (US — 2022 Olympic silver Big Air)",
    "Kelly Sildaru (Estonia — youngest X Games gold; multiple events)",
    "Tess Ledeux (France — 2022 Olympic silver Big Air; women's contender)",
    "Fabian Bösch (Switzerland — X Games multiple)",
  ],
  records: [
    { title: "Olympic debut", holder: "Beijing 2022", value: "First Winter Olympics with Big Air Skiing medals", year: 2022 },
    { title: "Iconic Beijing venue", holder: "Big Air Shougang", value: "Beijing 2022 held at decommissioned steel mill site; visually iconic", year: 2022 },
    { title: "Eileen Gu Olympic sweep", holder: "Eileen Gu (China)", value: "Gold Big Air + gold halfpipe + silver slopestyle at home Olympics 2022", year: 2022 },
    { title: "First quad cork 1980 in competition", holder: "Various (2020s)", value: "Elite tricks continually progressing; 1980s (5.5 rotations) common at 2020s elite level", year: 2023 },
  ],

  variants: ["fis-standard-big-air", "x-games-big-air-invitational", "junior-big-air-modified"],
  relatedSports: ["slopestyle-skiing", "halfpipe-skiing", "aerials", "freestyle-skiing", "big-air-snowboarding"],

  skills: ["explosive take-off timing", "in-air spatial awareness + rotation control", "precise 2-foot landing", "flip + twist + spin combinations", "creative trick invention", "physical + mental fitness (high consequence)"],
  strategies: [
    { title: "Best-2-of-3 tactics", body: "Land 2 solid jumps; save hardest trick for 3rd if needed. Don't crash all 3 chasing perfection." },
    { title: "Progressive difficulty", body: "Attempt hardest trick when confident of landing. Difficulty × execution matters." },
    { title: "Distinct tricks", body: "Judges reward variety across 2 counted jumps; different flip axes or rotation directions." },
    { title: "Master 2-3 elite tricks reliably", body: "Better to nail 2-3 consistent hard tricks than have 10 tricks with unreliable landing." },
    { title: "Physical + mental conditioning", body: "Big Air demands explosive fitness + iron mental focus. Falls hurt; consistency requires practice + confidence." },
    { title: "Study top skiers", body: "Video analysis of Birk Ruud + Eileen Gu + Andri Ragettli. Learn trick selection + landing technique." },
  ],

  terminology: [
    { term: "Big Air", meaning: "Single massive aerial trick freestyle discipline." },
    { term: "Kicker", meaning: "Purpose-built ramp launching skier upward." },
    { term: "1620", meaning: "4.5 rotations (1620°); benchmark elite trick." },
    { term: "1980", meaning: "5.5 rotations (1980°); ultra-elite trick." },
    { term: "Cork", meaning: "Off-axis flip; combined with spin becomes 'Cork 720' etc." },
    { term: "Switch", meaning: "Backward-facing take-off or landing." },
    { term: "Grab", meaning: "Holding ski with hand during trick." },
    { term: "Difficulty factor", meaning: "Numerical multiplier for trick complexity." },
    { term: "Shougang", meaning: "Beijing 2022 Big Air venue; decommissioned steel mill site." },
    { term: "Best 2 of 3", meaning: "Finals scoring: best 2 jumps summed." },
    { term: "Eileen Gu", meaning: "Chinese star; Beijing 2022 triple-medalist." },
    { term: "Birk Ruud", meaning: "Norwegian star; 2022 Olympic Big Air gold." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master intermediate alpine skiing", body: "Solid alpine base required. 3-5 years alpine before park training." },
      { title: "Progress through terrain park sizes", body: "Small park features → medium jumps → competition-size kickers. Progressive skill development." },
      { title: "Learn 180s + 360s in air", body: "Foundation for all subsequent tricks. Practice on progressive jumps." },
    ]},
    { level: "intermediate", steps: [
      { title: "Join competitive freestyle team", body: "US Ski + Snowboard, Freestyle Canada, national federations offer development from age 10-12." },
      { title: "Add corks + technical air tricks", body: "Cork 720 + double corks + switch tricks. Progressive difficulty." },
      { title: "Compete at USASA + regional events", body: "Build ranking + technique in low-pressure competitions." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at FIS World Cup + X Games", body: "Top pathway to Olympic squad; requires podium finishes at World Cup events." },
      { title: "Master 1620+ tricks reliably", body: "Elite men's requires switch double cork 1620 or double cork 1440 with grab. Elite women's: switch double cork 1440." },
      { title: "National team + Olympic squad selection", body: "National federation trials + World Cup + X Games results determine Olympic team." },
    ]},
  ],

  faq: [
    { question: "Is Big Air Skiing in the Olympics?", answer: "Yes — Winter Olympic debut at Beijing 2022. Both men's + women's events. First Olympic gold medalists: Birk Ruud (Norway, men) + Eileen Gu (China, women). Contested at iconic Big Air Shougang venue (decommissioned steel mill site). Now permanent Olympic event alongside Slopestyle + Halfpipe + Ski Cross + other freestyle disciplines." },
    { question: "How is Big Air different from Aerials?", answer: "Aerials: uses different ramp geometry + specific mandated flip tricks (Full, Double Full, Triple Full variations); traditional freestyle discipline since 1994 Olympics. Big Air: uses freestyle Slopestyle-style ramp; incorporates full range of park tricks (spins, corks, flips, grabs, switch); recent Olympic addition. Big Air is culturally closer to X Games; Aerials more traditional gymnastics-based." },
    { question: "How is Big Air different from Slopestyle?", answer: "Slopestyle: descend a full terrain-park course (300-500m) with 3-5 rails + 3-4 jumps; execute tricks on each feature. Big Air: single MASSIVE jump from ramp; ONE trick judged. Both freestyle Olympic events but distinct focus. Slopestyle requires variety + creativity through course; Big Air requires perfecting one huge trick." },
    { question: "Who is the greatest big air skier?", answer: "Multiple candidates: (1) Eileen Gu (China) — 2022 Olympic Big Air gold + halfpipe gold + slopestyle silver; iconic moment at Beijing home Olympics. (2) Birk Ruud (Norway) — 2022 Olympic gold + multiple World Cup. (3) Alex Hall (US) — Big Air World Cup wins + 2022 slopestyle gold. (4) Mathilde Gremaud (Switzerland) — 2022 Olympic gold + multiple X Games. Sport is very young at Olympic level; all these are contemporary." },
  ],

  wikipediaTitle: "Big air (skiing)",
  sources: [{ label: "FIS — Big Air", url: "https://fis-ski.com/en/freestyle-skiing/big-air", publisher: "FIS" }, { label: "Wikipedia — Big air", url: "https://en.wikipedia.org/wiki/Big_air", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
