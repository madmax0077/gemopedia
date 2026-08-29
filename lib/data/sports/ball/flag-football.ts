import type { Sport } from "@/lib/types";

export const flagFootball: Sport = {
  id: "flag-football",
  slug: "flag-football",
  name: "Flag Football",
  officialName: "Flag Football (IFAF / NFL Flag)",
  aliases: ["5-on-5 Football", "Non-Contact Football", "Touch Football (related)"],
  shortDescription:
    "Non-contact gridiron football — instead of tackling, defenders pull removable flags attached to ball-carriers' hips; 5-a-side is the international standard; added to LA 2028 Olympics.",
  longDescription:
    "Flag Football is a non-contact variant of gridiron football where tackling is replaced by pulling a flag or belt from the ball-carrier's hip. Its origin trace to US military bases in the 1940s (as an injury-free way to play), spreading via school + recreational leagues from the 1970s. The International Federation of American Football (IFAF) codified the modern 5-on-5 international format in the 2000s; NFL Flag operates the largest youth league (500,000+ US participants annually). In October 2023, flag football was announced as a NEW SPORT for the LA 2028 Olympics — the sport's largest-ever platform. The 5-on-5 international format uses a 25-yard-wide × 70-yard field, three 10-minute halves, no linemen (all players are eligible receivers), and rushing quarterbacks are constrained by a 7-second clock. Elite adult players include the US women's national team (5× World Champion) and Mexico's men's team (2020s dominant). LA28 will make flag football a global stage — expected to catalyze growth from US-centric to genuinely worldwide.",

  category: "ball-sports",
  subCategory: "non-contact gridiron football variant",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "US",
  regionOfOrigin: "United States (originating on US military bases 1940s); IFAF-codified international format 2000s; Olympic debut LA 2028",
  estimatedOrigin: "US military 1940s; spread via youth + school leagues 1970s; NFL Flag founded 1994; IFAF international rules 2000s; LA 2028 Olympic debut",

  players: { perTeam: 5, min: 5, max: 5, substitutes: 7, note: "5-a-side international standard (IFAF/Olympic); NFL Flag youth typically 4-6-8 depending on age; 12-player rosters at Olympic level." },
  field: {
    surfaceName: "Grass or artificial turf field",
    dimensions: "IFAF: 25 yards wide × 70 yards long (50 field + 2 × 10 end zones); NFL Flag typically 30 × 70",
    description: "Narrower + shorter than traditional football; enables faster pace + more scoring. End zones typically 10 yards deep. Cones + markers rather than permanent lines for casual play.",
  },
  equipment: [
    { name: "Flag belt", description: "Elasticated belt with 2–3 removable flags; pulled to end play. Sonic-style breakaway design." },
    { name: "Football (junior size)", description: "Slightly smaller than NFL ball (Wilson NCAA junior size typical); easier grip." },
    { name: "Mouthguard (recommended)", description: "Non-contact but incidental collisions possible; mouthguard prudent." },
    { name: "Cleats or turf shoes", description: "Depends on surface; molded cleats for grass, turf shoes for artificial." },
    { name: "Team jerseys", description: "Numbered; color contrast between teams." },
    { name: "No pads, no helmets", description: "Distinguishes flag from tackle football; pads + helmets prohibited." },
  ],
  duration: {
    approximateMinutes: 40,
    structure: "IFAF: 2 × 20-min halves (running clock); NFL Flag: 2 × 20-min halves; playoff / championship: stopping clock in last 2 min.",
  },
  objective:
    "Score more points than opponent by advancing ball into end zone (touchdown = 6 pts), converting after (1 pt from 5-yard line, 2 pts from 10-yard line), or defensive scoring (safety = 2 pts, pick-6 = 6 pts).",
  matchStructure:
    "Coin toss determines possession. Offense has 4 downs to advance to midfield (halfway); then 4 more downs to end zone. Scoring plays trigger a convert attempt. Game ends after 2 halves; ties broken by overtime alternating possessions.",

  basicRules: [
    { title: "5 vs 5 (IFAF international standard)", body: "5 players per side; all eligible receivers (no offensive line). NFL Flag varies 4-6-8 depending on age group." },
    { title: "Flag pull ends play", body: "Defender must PULL (not swipe) a flag from ball-carrier's belt; play dead where flag pulled. No tackling, blocking, or holding permitted." },
    { title: "No blocking", body: "Offensive players may not block defenders. Screens (standing still in path) illegal — penalty." },
    { title: "7-second QB rush clock", body: "Referee counts 7 seconds; if QB hasn't handed off or passed, defense may rush. Prevents QB scrambling for extended periods." },
    { title: "4 downs to midfield, then 4 more to end zone", body: "Different from NFL's 10-yard chunks. Simpler for youth + fast pace." },
    { title: "Convert after touchdown", body: "Post-TD: 1 pt from 5-yard line (short conversion), 2 pts from 10-yard line (longer conversion)." },
    { title: "No fumble recovery", body: "Fumble = dead ball at spot of drop; possession retained. Prevents scrambles + injuries." },
    { title: "No diving to advance", body: "Ball-carrier may not dive forward to gain yards (safety rule); penalty + loss of down." },
  ],
  advancedRules: [
    { title: "Rushing the QB", body: "Only after 7-second clock expires; defender must start 7 yards from line of scrimmage. Free rush lane counting off." },
    { title: "One-hand-touch variant", body: "Some youth + international 5v5 rules count 1-hand touch instead of flag pull. Historically 'touch football' (predecessor)." },
    { title: "Fair-catch on punts (in some rulesets)", body: "Some formats allow punts + fair-catch; others no punts (fourth-down play only)." },
    { title: "Overtime alternating possessions", body: "Tied game: each team gets ball at opponent's 5 yd line; alternate possessions; team ahead after equal chances wins." },
    { title: "Screens illegal", body: "Standing still to obstruct defender = penalty. All movement + no static blocking." },
    { title: "Interception + defensive TD", body: "Defensive INT can be returned for TD (6 pts + potential convert)." },
    { title: "LA 2028 Olympic format", body: "5-on-5, 2 × 20-min halves, IFAF rules; will follow the standardized international format." },
  ],
  scoring: {
    summary: "TD 6 + convert 1 or 2; safety 2; pick-6 defensive TD 6.",
    winCondition: "Higher total score at end of regulation; overtime alternating possessions if tied.",
    breakdown: [
      { action: "Touchdown", points: "6" },
      { action: "1-pt convert (5-yd line)", points: "1" },
      { action: "2-pt convert (10-yd line)", points: "2" },
      { action: "Safety (offense downed in own end zone)", points: "2 to defense" },
      { action: "Defensive TD (pick-6, fumble recovery return)", points: "6" },
      { action: "Convert-6 (defense scores on convert attempt)", points: "2 to defense" },
    ],
  },
  penalties: [
    { title: "Flag guarding", body: "Ball-carrier prevents flag pull with arm/hand; 5-yd penalty." },
    { title: "Illegal contact / defensive holding", body: "5–10 yd penalty; automatic 1st down if defensive." },
    { title: "Screening / blocking", body: "5-yd penalty; loss of down if offensive." },
    { title: "Diving forward", body: "5-yd penalty; play does not count." },
    { title: "Rushing before 7-second count", body: "5-yd penalty against defense; automatic replay of down." },
    { title: "Unsportsmanlike conduct", body: "10-yd penalty; multiple = ejection." },
  ],

  positions: [
    { name: "Quarterback (QB)", role: "Passer + play-caller; sole ball-thrower in most rules.", count: 1 },
    { name: "Receiver (4 typically)", role: "All 4 non-QB players eligible receivers; run routes + catch passes.", count: 4 },
    { name: "Rusher (defensive)", role: "Rushes QB after 7-second count; starts 7 yards from line of scrimmage." },
    { name: "Cover defender (defensive)", role: "Guards receivers man-to-man or zone; pulls flag of ball-carrier." },
    { name: "Free safety (defensive)", role: "Deep coverage; often makes interceptions on deep routes." },
  ],
  officiating: {
    officials: ["Referee", "Line judge", "Field judge", "Umpire"],
    summary: "4-official crew for sanctioned Flag Football (IFAF + NFL Flag). Youth leagues use 2–3 officials; Olympic-level will use 4+.",
  },

  governingBodies: [
    { name: "International Federation of American Football (IFAF)", founded: 1998, headquarters: "New York, USA", website: "https://americanfootball.sport" },
    { name: "NFL Flag", founded: 1994, headquarters: "New York, USA", website: "https://nflflag.com" },
    { name: "USA Football (adult + youth)", founded: 2002, headquarters: "Indianapolis, USA", website: "https://usafootball.com" },
    { name: "Football Australia — Flag Football", founded: 2015, headquarters: "Australia" },
  ],
  majorCompetitions: [
    { name: "IFAF Flag Football World Championships", frequency: "biennial", founded: 2002, region: "worldwide" },
    { name: "Olympic Games (LA 2028)", frequency: "quadrennial", founded: 2028, region: "worldwide" },
    { name: "The World Games (Flag Football)", frequency: "quadrennial", founded: 2022, region: "worldwide" },
    { name: "NFL Flag Championships (US youth)", frequency: "annual", founded: 1995, region: "USA (500,000+ participants)" },
    { name: "European Championships", frequency: "biennial", founded: 2008, region: "Europe" },
  ],
  countriesPlayed: ["US", "MX", "CA", "AU", "GB", "DE", "IL", "AT", "DK", "PA", "SG", "JP", "IT", "BR", "IE"],
  famousAthletes: [
    "Diana Flores (Mexico — women's superstar; global ambassador; 2022 World Championship MVP)",
    "Vanita Krouch (US — women's national team captain; 5× World Champion)",
    "Bruce Mapp (US — men's Team USA elite player)",
    "Yodo Sicairos (Mexico — men's team elite QB)",
    "Darrell Doucette (US — Team USA QB; 2022 World Championship gold)",
    "Rebecca Longo (Italy — European Championship medallist)",
  ],
  records: [
    { title: "Most IFAF Women's World Championships (US)", holder: "United States", value: "5 titles (2002, 2010, 2012, 2014, 2018)", year: 2018 },
    { title: "Most IFAF Men's World Championships (US + Mexico)", holder: "US: 3 titles / Mexico: 2 titles", value: "US last title 2016; Mexico rising 2020s", year: 2022 },
    { title: "LA 2028 Olympic inclusion", holder: "IOC", value: "Announced October 2023; flag football's Olympic debut", year: 2028 },
    { title: "NFL Flag participation", holder: "NFL Flag", value: "500,000+ US youth participants annually as of 2023", year: 2023 },
    { title: "Largest single Flag Football event", holder: "NFL Flag", value: "NFL Flag Super Bowl held annually in Vegas / LA", year: 2023 },
  ],

  variants: ["5-on-5-ifaf-international", "7-on-7-us-youth", "4-on-4-nfl-flag-junior", "coed-mixed-format", "wheelchair-flag-football"],
  relatedSports: ["american-football", "canadian-football", "touch-football", "rugby-sevens", "gaelic-football"],

  skills: [
    "quarterback accuracy + quick release",
    "receiver route-running + separation",
    "flag-pulling technique (defense)",
    "spatial awareness (small field + fast pace)",
    "conditioning (short bursts + quick recovery)",
    "playbook memorization (fast-paced offenses)",
  ],
  strategies: [
    { title: "Spread the field", body: "5 receivers all eligible; spread wide creates 1v1 mismatches. Isolate best receiver on worst defender." },
    { title: "Master the 7-second QB clock", body: "QB must decide + release within 7 sec. Practice quick reads + release; slower QBs get sacked easily." },
    { title: "Defensive: pull don't swipe", body: "Pull motion downward + backward to disengage flag cleanly. Swiping = missed flags + flag guarding calls." },
    { title: "Blitz strategically", body: "Rushing after 7-sec risks giving up big plays. Blitz on obvious passing downs; drop into coverage otherwise." },
    { title: "Convert 2-pt over 1-pt at times", body: "10-yd line 2-pt conversion isn't much harder than 5-yd 1-pt; conversion analytics favor 2-pt in specific game states." },
    { title: "Screens > deep bombs (efficiency)", body: "Short quick passes + YAC (yards after catch) exploit no-block rule + generate 1st downs quickly. Emphasize slants + quick outs." },
  ],

  terminology: [
    { term: "Flag pull", meaning: "Defender removes flag from ball-carrier's belt to end play." },
    { term: "7-second clock", meaning: "QB must release ball within 7 seconds or face defensive rush." },
    { term: "1-hand touch", meaning: "Some variants use 1-hand touch instead of flag pull." },
    { term: "Convert", meaning: "Post-TD scoring attempt; 1 pt (5-yd line) or 2 pt (10-yd line)." },
    { term: "Pick-6", meaning: "Defensive interception returned for touchdown; 6 pts." },
    { term: "Screen (illegal in flag)", meaning: "Standing to obstruct defender; results in penalty." },
    { term: "Flag guard", meaning: "Ball-carrier uses arm to prevent flag pull; 5-yd penalty." },
    { term: "NFL Flag", meaning: "The largest US youth flag football organization (500,000+ participants)." },
    { term: "IFAF", meaning: "International Federation of American Football — flag football's world governing body." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join NFL Flag or local youth league", body: "US: NFL Flag has leagues in every state. Global: IFAF national federations. Ages 4-17 typical." },
      { title: "Learn 5 basic passing routes", body: "Slant, out, in, go, curl — these 5 routes cover 80% of flag football offense." },
      { title: "Master flag-pull technique", body: "Pull down + back with 2 hands; hardest defensive skill to master. Practice against moving targets." },
    ] },
    { level: "intermediate", steps: [
      { title: "Play adult recreational leagues", body: "Adult flag leagues in every major US city; European IFAF affiliates + growing." },
      { title: "Learn 7-second QB drills", body: "Elite QBs release within 3 seconds; drills replicate rush pressure to build quick decision-making." },
      { title: "Study zone + man coverages", body: "Defensive scheme recognition + adjustment separates good from great defensive backs." },
    ] },
    { level: "advanced", steps: [
      { title: "Try out for national team", body: "IFAF national teams have open tryouts; success there → World Championships + LA 2028 Olympic team." },
      { title: "Cross-train with tackle football QBs", body: "Elite flag QBs like Darrell Doucette train alongside NFL QBs during offseasons for arm + film work." },
      { title: "Target LA 2028 Olympic squad", body: "Olympic debut = generational opportunity; national federation tryouts 2027–2028 for team selection." },
    ] },
  ],

  faq: [
    { question: "Is flag football in the Olympics?", answer: "YES — Flag Football will debut at the LA 2028 Olympics (announced October 2023 by IOC). This is the sport's largest-ever platform. Expected 6 medal events (men's + women's team competitions). Both US + Mexico + Canada + Australia + several European nations expected to be competitive." },
    { question: "How is flag football different from tackle football?", answer: "Non-contact — instead of tackling, defenders pull removable flags from ball-carriers' hips. No pads, no helmets, no blocking. Smaller field (typically 25×70 vs. 100×160 for NFL), fewer players (5-a-side international vs. 11-a-side NFL), and shorter games (2 × 20-min halves vs. 4 × 15-min NFL quarters). Focus on speed, skill, and passing — not physicality." },
    { question: "How popular is flag football?", answer: "Growing rapidly. NFL Flag has 500,000+ US youth participants annually. IFAF has 60+ member nations. Mexico + US are per-capita superpowers. Diana Flores (Mexico women's star) has become a global sports celebrity. LA 2028 Olympic inclusion expected to accelerate global adoption dramatically." },
    { question: "Who is the greatest flag football player?", answer: "Modern era candidates: (1) Diana Flores (Mexico) — women's superstar + global ambassador; 2022 World Championship MVP. (2) Darrell Doucette (US) — men's Team USA QB; multiple World Championship golds. (3) Vanita Krouch (US) — women's national team captain; 5× World Champion. Sport is young; all-time GOATs will emerge post-2028 Olympics." },
    { question: "Can I play flag football as an adult?", answer: "Yes — adult recreational leagues exist in every major US city + growing internationally. IFAF sanctions adult 5-on-5 events + open tryouts for national teams. Adult flag football is much safer than tackle football (near-zero concussion + serious-injury risk) while retaining strategic depth. Excellent fitness activity." },
  ],

  wikipediaTitle: "Flag football",
  sources: [
    { label: "IFAF — Flag Football", url: "https://americanfootball.sport/flag", publisher: "IFAF" },
    { label: "NFL Flag", url: "https://nflflag.com", publisher: "NFL" },
    { label: "Wikipedia — Flag football", url: "https://en.wikipedia.org/wiki/Flag_football", publisher: "Wikipedia" },
    { label: "IOC LA 2028 sports announcement (Oct 2023)", url: "https://olympics.com/", publisher: "IOC" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
