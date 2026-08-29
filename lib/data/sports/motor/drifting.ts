import type { Sport } from "@/lib/types";

export const drifting: Sport = {
  id: "drifting",
  slug: "drifting",
  name: "Drifting",
  officialName: "Drifting (Formula DRIFT / D1 Grand Prix)",
  aliases: ["Motorsport Drifting", "Pro Drifting", "Formula Drift"],
  shortDescription:
    "Motorsport where drivers deliberately oversteer their rear-wheel-drive cars into extended controlled slides through a course — judged on angle, line, style + speed rather than raw lap times; born in 1970s Japan, professionalized as Formula DRIFT (USA) + D1 Grand Prix (Japan).",
  longDescription:
    "Drifting is a motorsport where drivers deliberately induce and maintain controlled oversteer, sending the car into sustained sideways slides through a course. Rather than being scored on lap time, drifters are judged on angle (steeper = better), line (following prescribed racing lines), style (fluidity + commitment), and speed. It originated in 1970s Japan among mountain-pass touge (touge) racers in Gunma prefecture — Keiichi Tsuchiya ('The Drift King') brought it into mainstream through Best Motoring videos in the 1980s + 90s. The first professional drifting series was Japan's D1 Grand Prix (2001); USA's Formula DRIFT (Formula D) followed in 2004. Today, Formula DRIFT is the world's most-watched drifting series (Live Motorsport TV + YouTube). Drifting cars are rear-wheel-drive with modified suspensions, hydraulic handbrakes, differential locks, and often massive turbochargers producing 800-1000+ horsepower. Legendary drivers: Keiichi Tsuchiya (JP), Ken Nomura (JP), Vaughn Gittin Jr. (US), Chris Forsberg (US), James Deane (Ireland — 4× Formula DRIFT champion).",

  category: "motor-sports",
  subCategory: "motorsport — judged oversteer competition",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Gunma prefecture mountain passes 1970s); professionalized D1 Grand Prix 2001; global Formula DRIFT 2004",
  estimatedOrigin: "Mountain-pass touge racing 1970s Japan; Keiichi Tsuchiya popularization 1980s-90s; D1 Grand Prix 2001; Formula DRIFT 2004",

  players: { min: 2, max: 2, note: "1v1 tandem battles in modern professional drifting; qualifying rounds are solo runs." },
  field: {
    surfaceName: "Purpose-built drift course (typically skidpad or short circuit)",
    dimensions: "500-1,000 m course length; typically 5-8 turns; oval or figure-8 layouts common",
    description: "Purpose-built asphalt courses; typically at existing race tracks with modified layouts featuring hard turns + long banked sweepers. Formula DRIFT rounds at Long Beach, Atlanta, New Jersey, Seattle among others.",
  },
  equipment: [
    { name: "Modified rear-wheel-drive car", description: "Common platforms: Nissan Silvia (S13/S14/S15), Nissan 350Z/370Z, Toyota GT86/Subaru BRZ, Mazda RX-7, Chevrolet Camaro, BMW E36/E46/M3. Modified for 800-1000+ HP, hydraulic handbrake, welded LSD." },
    { name: "Race harness + roll cage", description: "Full FIA-compliant safety cage; 6-point harnesses; window nets." },
    { name: "Fire suit + helmet + HANS device", description: "FIA-approved race suit; full-face helmet; head + neck support (HANS)." },
    { name: "Hydraulic handbrake", description: "Modified handbrake with hydraulic actuator for aggressive initiation of drifts." },
    { name: "Welded / mechanical LSD", description: "Rear differential locked or mechanical LSD; ensures both wheels spin equally under load." },
    { name: "Coilover suspension", description: "Adjustable coilovers with high spring rates; typically 12-16 kg/mm; alignment set for maximum grip in slide." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Individual runs: 60-90 seconds per pass. Full event: 2 days (qualifying + tandem eliminations); tandem battles = 2 runs each (one lead + one follow); best-of pair scored.",
  },
  objective:
    "Score higher than opponent in tandem battles by executing more aggressive, stylish, and controlled slides while matching (as follow driver) or leading (as lead driver) the prescribed course line.",
  matchStructure:
    "Day 1: Qualifying — solo runs scored by judges (typically top 32 advance to Day 2). Day 2: Tandem battles — 2 cars race side-by-side; first as lead driver + then as follow driver; judges score both drivers per pair; winner advances (Round of 32 → 16 → 8 → 4 → 2 → Final). Winner of Final = event champion.",

  basicRules: [
    { title: "Rear-wheel drive only", body: "Traditional pro drifting = RWD only. Some events allow AWD; Formula DRIFT is RWD only." },
    { title: "Judges score 4 criteria", body: "Angle (steeper = better), Line (following prescribed racing line), Style (fluidity + commitment + smoke), Speed (higher = better)." },
    { title: "Tandem battles", body: "2 drivers run side-by-side; first as lead (setting pace), then as follow (matching lead's line). Judges score both runs per driver; combined score decides." },
    { title: "No physical contact", body: "Cars must not touch during tandem; contact = automatic loss for offender (or replayed if unclear fault)." },
    { title: "Follow driver must mirror lead", body: "Follow driver's job is to match lead's angle + line while maintaining proximity (10-30 feet typical). Too far = disadvantage; too close + off-line = disadvantage." },
    { title: "Modified handbrake initiation", body: "Drivers use hydraulic handbrake to initiate slides + maintain angle; core skill." },
    { title: "3 lives (One More Time rule)", body: "Some events: if judges can't decide winner after tandem, One More Time (OMT) rerun. Max ~3 reruns before decision forced." },
  ],
  advancedRules: [
    { title: "Judged criteria weighting", body: "Formula DRIFT weights criteria at judges' discretion; typically Angle (30%) + Line (30%) + Style (25%) + Speed (15%)." },
    { title: "Clipping points + zones", body: "Course has designated clipping points (cars must pass close to) + clipping zones (cars must exit through). Missing = penalty." },
    { title: "Initiation criteria", body: "First 100m: judges score how aggressively + early driver initiates drift. Fast initiation + high angle = higher scores." },
    { title: "Proximity in follow", body: "Follow driver must stay within ~10-30 feet of lead; too far = 'gapping'; too close (contact risk) = penalty." },
    { title: "Line integrity", body: "Prescribed course line marked by cones + judges. Deviating > 1 car width = line penalty." },
    { title: "Overshoot penalties", body: "Losing angle + straightening mid-course = major deduction. Cars must maintain drift throughout course." },
    { title: "OMT (One More Time) rule", body: "If judges can't decide tandem winner, both drivers rerun in same lead/follow order; max 3 reruns typical." },
  ],
  scoring: {
    summary: "Judged 0-100 based on angle, line, style, speed. Tandem: both drivers scored; higher combined score wins pair. Elimination brackets from qualifying.",
    winCondition: "Win tandem final; qualifier ranking determines seeding.",
    breakdown: [
      { action: "Angle score", points: "0-30 (steeper better)" },
      { action: "Line score", points: "0-30 (course line adherence)" },
      { action: "Style score", points: "0-25 (fluidity + commitment)" },
      { action: "Speed score", points: "0-15 (higher speed better)" },
      { action: "Tandem battle victory", points: "Advance to next round" },
      { action: "Contact / straightening (lead)", points: "Penalty deduction; potential loss" },
      { action: "Gapping / losing line (follow)", points: "Penalty deduction; potential loss" },
    ],
  },
  penalties: [
    { title: "Contact between cars", body: "Automatic loss for causing driver (if clearly at fault); may result in restart if unclear." },
    { title: "Straightening", body: "Losing angle + becoming straight = major deduction; can result in 0 score for that segment." },
    { title: "Overshoot / spinning", body: "Complete spin = failed run; automatic loss." },
    { title: "Missing clipping point", body: "Penalty deduction; multiple = disqualification." },
    { title: "Gapping (follow)", body: "Following too far from lead = penalty; large gaps = disqualification." },
    { title: "Unsafe driving", body: "Warning; DQ + potential season ban for reckless behavior." },
  ],

  positions: [
    { name: "Lead driver (tandem)", role: "Sets pace + line + shows aggression.", count: 1 },
    { name: "Follow driver (tandem)", role: "Mirrors lead's angle + line; maintains proximity.", count: 1 },
    { name: "Driver (qualifying)", role: "Solo run scored 0-100.", count: 1 },
    { name: "Team + Crew", role: "Setup + maintenance + strategy between runs." },
  ],
  officiating: {
    officials: ["3-5 Judges (scoring)", "Chief Judge", "Corner marshals", "Timekeeper + starter"],
    summary: "Formula DRIFT + D1 Grand Prix: 3-5 judges score independently; averaged for final score. Chief judge oversees + rules on ambiguous calls; corner marshals monitor track integrity.",
  },

  governingBodies: [
    { name: "Formula DRIFT (Formula D)", founded: 2004, headquarters: "Long Beach, USA", website: "https://formulad.com" },
    { name: "D1 Grand Prix (Japan)", founded: 2001, headquarters: "Tokyo, Japan", website: "https://d1gp.co.jp" },
    { name: "FIA World Drift Championship (developing)", founded: 2017, headquarters: "Paris, France", website: "https://fia.com" },
  ],
  majorCompetitions: [
    { name: "Formula DRIFT Championship (Pro / Pro 2)", frequency: "annual (8-10 rounds)", founded: 2004, region: "USA + international" },
    { name: "D1 Grand Prix Championship", frequency: "annual", founded: 2001, region: "Japan + Asia" },
    { name: "King of Europe Drift ProSeries", frequency: "annual", founded: 2007, region: "Europe" },
    { name: "British Drift Championship", frequency: "annual", founded: 2007, region: "UK" },
    { name: "FIA Drift World Cup", frequency: "annual", founded: 2017, region: "worldwide (developing)" },
    { name: "Red Bull Car Park Drift", frequency: "annual", founded: 2008, region: "Middle East + international" },
  ],
  countriesPlayed: ["JP", "US", "IE", "GB", "AU", "NZ", "RU", "DE", "IT", "PL", "SA", "AE", "TH", "MY"],
  famousAthletes: [
    "Keiichi Tsuchiya (Japan — 'The Drift King'; founder + Initial D consultant)",
    "James Deane (Ireland — 4× Formula DRIFT champion 2017-2020)",
    "Vaughn Gittin Jr. (US — Formula DRIFT champion 2010)",
    "Chris Forsberg (US — 3× Formula DRIFT champion 2009+2014+2016)",
    "Ken Nomura (Japan — D1 Grand Prix champion)",
    "Dai Yoshihara (Japan/US — Formula DRIFT champion 2011)",
    "Fredric Aasbø (Norway — Formula DRIFT champion 2015 + 2020)",
    "Ryan Tuerck (US — Formula DRIFT top competitor)",
    "Chelsea DeNofa (US — Formula DRIFT top competitor)",
    "Piotr 'Weglinger' Węgliński (Poland — European Drift champion)",
  ],
  records: [
    { title: "First professional drifting series", holder: "D1 Grand Prix (Japan)", value: "Founded 2001; first pro drift series", year: 2001 },
    { title: "Formula DRIFT longest-running US series", holder: "Formula DRIFT", value: "Founded 2004; continuous annual championship since", year: 2024 },
    { title: "James Deane's 4 titles", holder: "James Deane (Ireland)", value: "4 Formula DRIFT championships 2017-2020 — most in modern era", year: 2020 },
    { title: "Longest drift distance record (Guinness)", holder: "Various", value: "80+ km continuous drift; multiple Guinness records", year: 2020 },
    { title: "Highest drift horsepower", holder: "Various pro cars", value: "1000+ HP twin-turbo builds common; some exceed 1200 HP", year: 2023 },
  ],

  variants: ["formula-drift-us-standard", "d1-grand-prix-japan", "european-drift-fia", "amateur-track-days", "underground-touge-street-illegal"],
  relatedSports: ["circuit-racing", "rallying", "autocross", "gymkhana", "motorsport-general"],

  skills: [
    "car control + throttle management",
    "handbrake + weight transfer technique",
    "line-reading + course anticipation",
    "commitment + risk management",
    "car setup + tuning understanding",
    "endurance (multiple runs per event)",
    "psychological pressure (tandem battles)",
  ],
  strategies: [
    { title: "Master the initiation", body: "First 100m of drift = judges' impression foundation. Aggressive early initiation + high angle wins scores." },
    { title: "Choose optimal line", body: "Course line marked; deviations penalized. Study course diagrams pre-event; visualize exact line." },
    { title: "Follow proximity + line", body: "As follow driver: mirror lead's angle exactly + stay 10-30 feet. Too far = gapping penalty; too close = contact." },
    { title: "Style commitment", body: "Judges reward commitment — no hesitation, no lift-offs. Full-throttle drift throughout course." },
    { title: "Manage tires + brakes", body: "Rear tires wear rapidly under drift heat + slide. Save tires for later rounds; tire management is race strategy." },
    { title: "Car setup for course", body: "Suspension + differential + tire pressures adjusted per course. Long sweepers = less compression; tight technical = firmer setup." },
    { title: "Study opponent tendencies", body: "Elite pro drift = deep tactical knowledge of opponents' preferred lines + weaknesses." },
  ],

  terminology: [
    { term: "Drift", meaning: "Extended controlled oversteer; sustained lateral sliding of car." },
    { term: "Initiation", meaning: "Beginning of drift; typically via handbrake, clutch kick, or feint." },
    { term: "Tandem battle", meaning: "Two cars racing side-by-side; each takes lead + follow role." },
    { term: "Lead driver", meaning: "Setting pace + line; must show aggression + control." },
    { term: "Follow driver", meaning: "Mirrors lead; must maintain proximity + line." },
    { term: "Gapping", meaning: "Follow driver falling too far behind lead; penalty." },
    { term: "OMT (One More Time)", meaning: "Rerun after undecided tandem; up to 3 reruns." },
    { term: "Handbrake initiate", meaning: "Using hydraulic handbrake to lock rear wheels + slide initiation." },
    { term: "Clutch kick", meaning: "Rapid clutch depress + release to induce oversteer via engine torque." },
    { term: "Feint", meaning: "Steering car opposite direction before drift initiation to increase angle." },
    { term: "LSD (Limited Slip Differential)", meaning: "Locked or mechanical differential ensuring both rear wheels turn together." },
    { term: "Touge", meaning: "Japanese mountain-pass road; drifting's origin location + underground scene." },
    { term: "Formula DRIFT", meaning: "US professional drifting series (founded 2004); world's most-watched drift championship." },
    { term: "D1 Grand Prix", meaning: "Japanese professional drifting series (founded 2001); sport's original pro series." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Start with track days + car control clinics", body: "Get comfortable with rear-wheel-drive handling at low speed on skidpads. SCCA + BMW CCA + local track day organizations offer clinics." },
      { title: "Attend local grassroots events", body: "Amateur drift days at local tracks; entry cost $50-200; drive your own car. Learn basics safely." },
      { title: "Build a starter drift car", body: "Cheap RWD platform (Nissan 240SX/Silvia, older BMW 3-series). Modify: hydraulic handbrake + welded diff + coilovers. Budget: $5,000-15,000." },
    ] },
    { level: "intermediate", steps: [
      { title: "Compete at Formula DRIFT Pro 2 / regional pros", body: "Formula DRIFT Pro 2 is amateur-transition series. Regional championships (King of Europe, Australian) offer competitive stepping stones." },
      { title: "Build competitive car", body: "$50,000-150,000 for competitive Pro 2 car with 400-700 HP + full safety." },
      { title: "Get sponsorships", body: "Local + car brand sponsorships; team support essential for cost. Social media presence + racing results build sponsor value." },
    ] },
    { level: "advanced", steps: [
      { title: "Qualify for Formula DRIFT Pro", body: "Championship-level pro series; podium finishes + wins possible for elite. Sponsorship deals reach $500K+ for top drivers." },
      { title: "Formula DRIFT world tour + D1 Grand Prix (Japan)", body: "Top pros compete across US Formula DRIFT + occasionally D1 Grand Prix + European King of Europe." },
      { title: "Content creator + brand ambassador", body: "Top drivers monetize via YouTube + Instagram + brand deals; Nissan/Toyota/BMW/Chevy backing common." },
    ] },
  ],

  faq: [
    { question: "How is drifting different from other motorsports?", answer: "Traditional motorsports (F1, NASCAR, IndyCar) score by lap time — fastest wins. Drifting scores by judges — angle, line, style, speed weighted subjectively. It's more like ice skating or gymnastics in judging structure. Cars are RWD (vs. AWD for rally + circuit); typical 800-1000+ HP; hydraulic handbrakes + welded differentials for aggressive slides. Skill set overlaps with car control but not lap-time optimization." },
    { question: "Who is the greatest drifter?", answer: "Multiple candidates: (1) Keiichi Tsuchiya (Japan) — 'The Drift King'; sport's founder + Initial D consultant. (2) James Deane (Ireland) — 4× Formula DRIFT champion 2017-2020; modern era dominant. (3) Chris Forsberg (US) — 3× Formula DRIFT champion. (4) Vaughn Gittin Jr. (US) — Formula DRIFT champion + long career. (5) Fredric Aasbø (Norway) — 2× Formula DRIFT champion. Different eras + criteria produce different answers." },
    { question: "How much does a competitive drift car cost?", answer: "Amateur starter: $5,000-15,000 (used Nissan 240SX/Silvia + welded diff + coilovers). Pro 2 competitive: $50,000-150,000 (400-700 HP + full safety cage). Pro-level Formula DRIFT: $250,000-500,000+ (1000+ HP builds + team + testing costs). Additional annual cost $100,000-300,000+ for tires + fuel + transport + team salaries." },
    { question: "Is drifting an Olympic sport?", answer: "No. FIA has explored drifting inclusion + established FIA Drift World Cup 2017. IOC has not shown interest for Olympic status. Motorsports as a whole are challenging for Olympic inclusion due to environmental + accessibility concerns. Drifting's growing global popularity + FIA sanctioning may enable future consideration." },
    { question: "Where can I watch professional drifting?", answer: "Formula DRIFT (USA) — Live Motorsport TV + YouTube + official Formula DRIFT streaming. D1 Grand Prix (Japan) — YouTube + Japan sports channels. King of Europe (Europe) + British Drift Championship + FIA Drift World Cup — YouTube + national broadcasters. Formula DRIFT has largest global audience via YouTube; 500,000+ subscribers." },
    { question: "How dangerous is drifting?", answer: "Serious. Cars traveling at 60-100+ mph in constant oversteer; contact with barriers + other cars possible. Modern safety (full cages + fire suits + HANS devices) reduces injuries dramatically. Serious crashes rare but happen. Injury rate lower than open-wheel racing but higher than typical circuit racing due to close-quarters tandem." },
  ],

  wikipediaTitle: "Drifting (motorsport)",
  sources: [
    { label: "Formula DRIFT", url: "https://formulad.com", publisher: "Formula DRIFT" },
    { label: "D1 Grand Prix (Japan)", url: "https://d1gp.co.jp", publisher: "D1 Grand Prix" },
    { label: "Wikipedia — Drifting (motorsport)", url: "https://en.wikipedia.org/wiki/Drifting_(motorsport)", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
