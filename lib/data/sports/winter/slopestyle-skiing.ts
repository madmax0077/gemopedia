import type { Sport } from "@/lib/types";

export const slopestyleSkiing: Sport = {
  id: "slopestyle-skiing",
  slug: "slopestyle-skiing",
  name: "Slopestyle Skiing",
  officialName: "Freestyle Skiing Slopestyle (FIS)",
  aliases: ["Slope", "Slopestyle", "Freestyle Slopestyle"],
  shortDescription:
    "Winter Olympic freestyle skiing discipline in which skiers descend a terrain-park course of rails + jumps + creative features — scored on a single run for progression, style, amplitude + variety of tricks; debut Sochi 2014.",
  longDescription:
    "Slopestyle Skiing is a freestyle skiing discipline where competitors descend a terrain-park course containing 3-5 rail sections + 3-4 jumps, executing tricks on each feature. Judges score the overall run 0-100 on the criteria of Progression, Amplitude (height), Difficulty, Variety, and Execution. The run is 30-60 seconds long. Slopestyle debuted at the Winter Olympics in Sochi 2014 alongside its snowboarding counterpart. It's culturally the most 'freeski' discipline — closely linked to youth culture + X Games + park + pipe. Elite tricks include: switch-double-cork rotations (backward take-off + 2 flips + spins), 1440s + 1620s (4-4.5 rotations), and creative rail combinations (blindside 270° in, switch-swap out). Legendary skiers: Joss Christensen (US — 2014 Olympic gold), Nick Goepper (US — 2014+2018+2022 medals, longest podium streak), Sarah Hoefflin (Switzerland — 2018 Olympic gold), Sarah Höfflin (Switzerland), Sarah Burke (Canada — pioneer, died 2012), Alex Hall (US — 2022 Olympic gold + X Games multiple), Andri Ragettli (Switzerland — creative-trick pioneer + viral videos), Eileen Gu (China — 2022 Olympic silver in slopestyle + gold in halfpipe + big air).",

  category: "winter-sports",
  subCategory: "freestyle skiing — terrain-park run",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "winter",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "United States (evolved from snowboarding slopestyle 1990s + freeski park culture 2000s); FIS World Cup 2011; Olympic Sochi 2014",
  estimatedOrigin: "Emerged from snowboarding slopestyle + freeski park culture 1990s-2000s; X Games event from 2004; FIS World Cup 2011; Olympic debut Sochi 2014",

  players: { min: 1, max: 1, note: "Individual competition; team results at national championships." },
  field: {
    surfaceName: "Terrain park course — snow slope with rails + jumps",
    dimensions: "300-500m long course; 3-5 rail features + 3-4 jumps (each jump 15-25m gap)",
    description: "Purpose-built terrain park course; different every event; features include boxes, rails, jumps of varying sizes. Course design must challenge but not exceed athlete safety.",
  },
  equipment: [
    { name: "Freestyle park skis (twin-tip)", description: "Symmetrical tips + tails allow switch (backward) skiing; typically 155-180cm; wider underfoot (80-95mm) for landing stability." },
    { name: "Bindings + boots", description: "Standard alpine bindings; Flex 90-110 boots allowing ankle mobility for rails + jumps." },
    { name: "Mandatory helmet + optional back protector", description: "FIS-approved helmet; back protector recommended." },
    { name: "Poles (optional)", description: "Some skiers ski without poles for cleaner rail tricks; others use short poles." },
    { name: "Team suit", description: "Aerodynamic ski suit; team-branded." },
    { name: "Wide-vision goggles", description: "Wide field of view for reading features." },
  ],
  duration: { approximateMinutes: 1, structure: "Each run: 30-60 seconds. Competition: qualifying (2-3 runs) + finals (3 runs, best counts) = 3-4 hours." },
  objective: "Score highest 0-100 by executing a run with maximum progression, amplitude, difficulty, variety, and execution.",
  matchStructure: "Qualifying (2 runs; best score advances) → Final (3 runs; best single run counts). 12 finalists typical; judges score each run 0-100.",

  basicRules: [
    { title: "Descend terrain-park course", body: "Course marked with cones + banners; must stay within corridor." },
    { title: "Hit all features", body: "Course design has 6-8 features (rails + jumps); athletes should execute tricks on each." },
    { title: "Best single run counts", body: "Finals: 3 runs; best score wins. Encourages athletes to attempt harder tricks knowing 1 clean run can win." },
    { title: "Judged 0-100 by 6 judges", body: "Top + bottom scores dropped; middle 4 averaged." },
    { title: "5 scoring criteria", body: "Progression + Amplitude + Difficulty + Variety + Execution." },
    { title: "Athletes design their own runs", body: "No mandatory tricks; athletes create runs matching their skills + strategy." },
  ],
  advancedRules: [
    { title: "Progression bonus", body: "New tricks or novel combinations attempted at competition score extra 'progression' points." },
    { title: "Rail trick creativity", body: "Different rail approaches (blindside, switch, transfer) scored higher than repetitive tricks." },
    { title: "Amplitude on jumps", body: "Height + distance of jump tricks matters; higher = more scoring potential." },
    { title: "Rotation direction variety", body: "Judges reward runs with both left + right rotations + different flip axes." },
    { title: "Cork rotations + off-axis flips", body: "Off-axis rotations (corks) reward higher than pure spins." },
    { title: "Team + national selection", body: "National teams select athletes via FIS World Cup + World Championships + X Games results." },
  ],
  scoring: {
    summary: "6 judges score 0-100 on 5 criteria (Progression + Amplitude + Difficulty + Variety + Execution). Top + bottom dropped; middle 4 averaged.",
    winCondition: "Highest single-run score in finals wins. Season championship = highest points across World Cup rounds.",
    breakdown: [
      { action: "Perfect run (extremely rare)", points: "95-100" },
      { action: "Excellent run", points: "85-95" },
      { action: "Good competitive run", points: "70-85" },
      { action: "Standard finish", points: "50-70" },
      { action: "Fall or blown feature", points: "20-50" },
    ],
  },
  penalties: [
    { title: "Fall on feature", body: "Major score deduction (10-30 pts typical)." },
    { title: "Missing / skipping features", body: "Deduction; can put athlete out of medal contention." },
    { title: "Off-course line", body: "Warning; DQ if severe." },
    { title: "Illegal equipment (non-FIS spec)", body: "DQ from event." },
    { title: "Unsportsmanlike conduct", body: "Warning; DQ for serious offenses." },
  ],

  positions: [
    { name: "Competitor", role: "Individual athlete executing scored run.", count: 1 },
    { name: "Coach + team support", role: "Between-run advice; trick selection strategy." },
    { name: "Judges (6)", role: "Score each run independently 0-100.", count: 6 },
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
    { name: "Winter Olympic Games (Slopestyle)", frequency: "quadrennial", founded: 2014, region: "worldwide (Sochi 2014, Pyeongchang 2018, Beijing 2022)" },
    { name: "FIS Freestyle Ski World Championships", frequency: "biennial", founded: 2011, region: "worldwide" },
    { name: "FIS Freestyle World Cup — Slopestyle", frequency: "annual (8-12 rounds)", founded: 2011, region: "worldwide winter circuit" },
    { name: "X Games (Winter)", frequency: "annual", founded: 2004, region: "Aspen (USA)" },
    { name: "Dew Tour", frequency: "annual", founded: 2005, region: "USA" },
  ],
  countriesPlayed: ["US", "CA", "CH", "NO", "SE", "FI", "FR", "CN", "JP", "GB", "AT", "AU", "NZ"],
  famousAthletes: [
    "Alex Hall (US — 2022 Olympic gold + multiple X Games gold; modern creative trick leader)",
    "Nick Goepper (US — Olympic silver 2014+2022, bronze 2018; longest podium streak)",
    "Joss Christensen (US — 2014 Olympic gold; sport's inaugural Olympic champion)",
    "Sarah Hoefflin (Switzerland — 2018 Olympic gold)",
    "Sarah Höfflin (Switzerland)",
    "Sarah Burke (Canada — pioneer of women's freeski; died 2012)",
    "Andri Ragettli (Switzerland — X Games multiple gold + creative-trick pioneer + viral videos)",
    "Eileen Gu (China — 2022 Olympic silver in slopestyle + gold halfpipe + gold big air)",
    "Kelly Sildaru (Estonia — youngest X Games gold at 13; multiple X Games)",
    "Mathilde Gremaud (Switzerland — 2022 Olympic slopestyle silver + big air gold)",
  ],
  records: [
    { title: "Olympic debut", holder: "Sochi 2014", value: "First Winter Olympics with Slopestyle Skiing medals", year: 2014 },
    { title: "Longest podium streak (men)", holder: "Nick Goepper (US)", value: "Podium at every Olympics 2014+2018+2022", year: 2022 },
    { title: "Youngest X Games gold medalist", holder: "Kelly Sildaru (EE)", value: "X Games gold at 13 (2016)", year: 2016 },
    { title: "First slopestyle X Games", holder: "X Games", value: "Slopestyle debuted at Winter X Games 2004", year: 2004 },
    { title: "Eileen Gu multi-medal Beijing 2022", holder: "Eileen Gu (China)", value: "Gold in halfpipe + gold big air + silver slopestyle at home Olympics", year: 2022 },
  ],

  variants: ["fis-standard-slopestyle", "big-air-related-standalone-jumps", "junior-slopestyle-modified-course"],
  relatedSports: ["halfpipe-skiing", "big-air-skiing", "slopestyle-snowboarding", "freestyle-skiing", "freeride-skiing"],

  skills: ["rail technique (balance + spin exits)", "aerial trick execution (jumps)", "creative run design", "commitment (rail + jump)", "physical fitness (short intense bursts)", "mental focus (30-second all-in run)"],
  strategies: [
    { title: "Design a balanced run", body: "Judges reward variety. Mix rails + jumps + different rotation directions + different flip axes." },
    { title: "Progressive difficulty in finals", body: "Save hardest tricks for later finals runs if in medal contention; safer runs first." },
    { title: "Master 2 rail approaches", body: "Elite runs include both frontside + blindside rail approaches. Learning both requires years." },
    { title: "Commit to jumps", body: "Half-hearted jumps + rails lead to falls. Full commitment + adjustment mid-air." },
    { title: "Study run designs of top skiers", body: "Video analysis of Alex Hall + Andri Ragettli + Eileen Gu. Learn creative feature combinations." },
    { title: "Physical + mental conditioning", body: "Slopestyle demands short-burst explosive fitness + iron mental focus. Falls hurt; consistency requires practice + confidence." },
  ],

  terminology: [
    { term: "Slopestyle", meaning: "Terrain-park course discipline with rails + jumps." },
    { term: "Rail", meaning: "Metal or plastic rail feature to slide on with skis." },
    { term: "Box", meaning: "Wider flat rail feature; easier than round rails." },
    { term: "Kicker", meaning: "Jump feature with take-off ramp + landing area." },
    { term: "Cork", meaning: "Off-axis flip; combined with spin becomes 'Cork 720' etc." },
    { term: "Switch", meaning: "Backward-facing ski technique; take-off or landing." },
    { term: "Blindside", meaning: "Approaching feature on backside (harder)." },
    { term: "1440", meaning: "4 full rotations (1440°); elite trick." },
    { term: "Progression", meaning: "Bringing new/harder tricks to competition." },
    { term: "Alex Hall", meaning: "Modern slopestyle GOAT contender; 2022 Olympic gold + multiple X Games." },
    { term: "Andri Ragettli", meaning: "Swiss slopestyle creative pioneer; viral videos + multiple X Games." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Master intermediate alpine skiing", body: "Solid alpine base required. 3-5 years alpine before park training." },
      { title: "Progress through terrain park sizes", body: "Small park features → medium jumps + boxes → competition-size features. Progressive skill development." },
      { title: "Learn 180s + 360s on jumps + rails", body: "Foundation for all subsequent tricks. Practice on jumps before rails." },
    ]},
    { level: "intermediate", steps: [
      { title: "Join competitive freestyle team", body: "US Ski + Snowboard, Freestyle Canada, national federations offer development from age 10-12." },
      { title: "Add corks + technical rail tricks", body: "Cork 720 + rail tricks (butter swap, board-slide, k-fed). Progressive difficulty." },
      { title: "Compete at USASA + regional events", body: "Build ranking + technique in low-pressure competitions." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete at FIS World Cup + X Games", body: "Top pathway to Olympic squad; requires podium finishes at World Cup events." },
      { title: "Master creative rail combinations", body: "Elite runs feature multiple rail approaches + trick variations. Alex Hall + Andri Ragettli set standards." },
      { title: "National team + Olympic squad selection", body: "National federation trials + World Cup + X Games results determine Olympic team." },
    ]},
  ],

  faq: [
    { question: "Is Slopestyle Skiing in the Olympics?", answer: "Yes — since Sochi 2014. Both men's + women's events. First Olympic gold medalists: Joss Christensen (US, men) + Dara Howell (Canada, women). Recent Olympic champions: Alex Hall (US 2022), Sarah Hoefflin (Switzerland 2018), Sarah Höfflin (Switzerland). Contested alongside Slopestyle Snowboarding + Halfpipe + Big Air as modern freestyle disciplines." },
    { question: "How is Slopestyle different from Halfpipe?", answer: "Slopestyle: descend a terrain-park course (300-500m) with 3-5 rails + 3-4 jumps; execute tricks on each feature. Halfpipe: multiple hits in U-shape halfpipe; only aerial tricks; no rails. Slopestyle is more creative + variety-focused; Halfpipe is amplitude + aerial focused. Both freestyle Olympic events since 2014." },
    { question: "Who is the greatest slopestyle skier?", answer: "Multiple candidates: (1) Alex Hall (US) — 2022 Olympic gold + multiple X Games gold; modern creative-trick leader. (2) Nick Goepper (US) — podium at every Olympics 2014-2022 (silver+bronze+silver); longest streak. (3) Andri Ragettli (Switzerland) — X Games multiple gold + viral videos + creative pioneer. (4) Kelly Sildaru (Estonia) — youngest X Games gold at 13; multiple X Games. Sport is young; different criteria produce different answers." },
    { question: "How dangerous is Slopestyle Skiing?", answer: "Serious. Rails cause knee + wrist injuries. Jumps 15-25m gap can cause catastrophic falls. Common injuries: ACL/MCL tears, shoulder dislocations, concussions, back injuries. Mandatory helmets reduce head injury risk. Sarah Burke's 2012 halfpipe death (adjacent discipline) highlighted risks. Modern safety: back protectors, spinal armor, better course design. Injury rate per hour is high but sport is not among most dangerous winter sports (skeleton + luge higher)." },
  ],

  wikipediaTitle: "Slopestyle",
  sources: [{ label: "FIS — Slopestyle", url: "https://fis-ski.com/en/freestyle-skiing/slopestyle", publisher: "FIS" }, { label: "Wikipedia — Slopestyle", url: "https://en.wikipedia.org/wiki/Slopestyle", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
