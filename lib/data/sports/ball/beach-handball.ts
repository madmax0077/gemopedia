import type { Sport } from "@/lib/types";

export const beachHandball: Sport = {
  id: "beach-handball",
  slug: "beach-handball",
  name: "Beach Handball",
  officialName: "Beach Handball (International Handball Federation)",
  aliases: ["Sand Handball", "Handeball", "Beach Handeball"],
  shortDescription:
    "Sand version of team handball — 4-a-side, two 10-minute sets scored separately, spectacular in-air goals worth 2 points instead of 1; contested at Beach Games + Youth Olympic Games.",
  longDescription:
    "Beach Handball evolved from summer training kickabouts among Italian and Egyptian handball players in the early 1990s, with the first international tournament held in 1994 (Italy). The International Handball Federation (IHF) adopted it as a discipline in 2001. The game is famed for its 'spectacular goal' bonus — any goal from a spinning in-air move (Kempa flight, 360°, or fadeaway) scores 2 points instead of 1, so acrobatic technique rather than raw shooting is rewarded. Each match is played as two 10-minute sets scored separately; a set winner earns 1 match point, ties broken by golden-goal 'shoot-out' rather than aggregate. It debuted at the World Games (Duisburg 2005) and the Youth Olympic Games (Buenos Aires 2018); an ANOC World Beach Games event. Croatia, Brazil, Norway, and Germany dominate the modern era.",

  category: "ball-sports",
  subCategory: "team handball variant on sand",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "20th-century",
  popularity: "major",

  countryOfOrigin: "IT",
  regionOfOrigin: "Italy + Egypt (early 1990s Mediterranean summer training); IHF adoption 2001",
  estimatedOrigin: "Emerged early 1990s Italy; first international 1994; IHF discipline 2001; Youth Olympic Games 2018",

  players: { perTeam: 4, min: 4, max: 4, substitutes: 6, note: "4-a-side (1 GK + 3 outfield); unlimited flying substitutions from bench of 6." },
  field: {
    surfaceName: "Sand court",
    dimensions: "27 m × 12 m; 6 m goal-area arcs at each end",
    description: "Fine, level sand at least 40 cm deep; goals 3 m wide × 2 m high; 6 m goal-area arcs from which only the goalkeeper may play.",
  },
  equipment: [
    { name: "Beach handball ball", description: "Slightly smaller + softer than indoor: circumference 54–56 cm women / 54–56 cm men; sand-grip surface." },
    { name: "Team kit", description: "Bibs or sleeveless jerseys; historic controversy over women's uniforms — IHF rules now permit shorts (2021 update)." },
    { name: "Barefoot", description: "Players play barefoot; tape allowed for ankles/toes." },
    { name: "Goalkeeper distinguishing kit", description: "GK wears different colour; also plays as attacker (4th outfield when attacking with numerical advantage)." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "2 sets × 10 minutes with 5-minute break; each set scored independently; ties broken by golden goal shoot-out.",
  },
  objective:
    "Win both sets (best of two 10-min games). Each set is a separate mini-match. Level 1–1 in sets goes to a golden-goal shootout in a sequence of one-on-one attacks.",
  matchStructure:
    "Each match = 2 sets × 10 min. Set winner gets 1 match point; 2–0 = decisive; 1–1 → 'Shoot-Out' overtime (alternating 1v1 attacks vs. keeper). No overall aggregate — winning either set 10–1 or 12–11 counts the same.",

  basicRules: [
    { title: "4 vs 4 (incl. GK)", body: "1 goalkeeper + 3 outfield players per team." },
    { title: "Two independent 10-min sets", body: "Each set is its own game with a winner; overall winner = won more sets (2–0 or 1–1 → shoot-out)." },
    { title: "Spectacular goal = 2 points", body: "Goals scored from an in-air spin (360°), fadeaway shot, kempa flight (mid-air catch + shoot), or by the goalkeeper score 2 points instead of 1. This is the defining rule." },
    { title: "3-second + 3-step rule", body: "Ball-carrier may hold 3 seconds or take 3 steps before dribbling / passing / shooting." },
    { title: "Goal-area exclusive to GK", body: "Only the goalkeeper may play the ball inside the 6-m arc; attackers may leap in but must release before landing." },
    { title: "Passive play forbidden", body: "Referee signals 'passive' if attacking team fails to attempt to score within ~6 passes — turnover if not remedied." },
    { title: "No fixed number of substitutions", body: "Rolling subs during play from a bench of 6." },
  ],
  advancedRules: [
    { title: "Kempa (in-flight assist)", body: "Attacker jumps into the goal area to catch a pass mid-air and shoot before landing — both catch + shoot count as 'spectacular' → 2 points." },
    { title: "Goalkeeper as 4th outfield attacker", body: "The GK may run out to join attacks (empty net) creating 4v3 numerical advantage; goals scored by GK from open play count 2 points." },
    { title: "Shoot-Out overtime rules", body: "If sets tied 1–1: 5-round alternating 1v1 GK-vs-attacker shootout; sudden death after tied 5 rounds." },
    { title: "Yellow card + 2-min suspension + red card system", body: "Similar to indoor: warning → 2-min suspension (team plays down) → dismissal." },
    { title: "No offside rule", body: "Same as beach soccer — encourages fast breaks + aerial play." },
  ],
  scoring: {
    summary: "Regular goal = 1 pt. 'Spectacular' goal (spin/fadeaway/kempa/GK) = 2 pts. Set winner gets 1 match point; best of 2 sets.",
    winCondition: "Win 2 of 2 sets (2–0), OR win Shoot-Out overtime after 1–1 set split.",
    breakdown: [
      { action: "Regular goal", points: "1 pt" },
      { action: "Spectacular goal (spin, fadeaway, kempa, GK)", points: "2 pts" },
      { action: "Penalty goal (7 m)", points: "1 pt" },
      { action: "Set win", points: "1 match point (best of 2)" },
      { action: "Shoot-out overtime win", points: "Match victory" },
    ],
  },
  penalties: [
    { title: "Yellow card", body: "Warning; verbal + card shown." },
    { title: "2-minute suspension", body: "Player + team play short-handed 2 minutes; substitution allowed after." },
    { title: "Red card", body: "Dismissal for game; typically after 3 suspensions or serious foul." },
    { title: "7-metre penalty", body: "Awarded for foul preventing clear goal chance; 1v1 vs. GK from 7 m." },
    { title: "Passive play turnover", body: "Referee signals passive; ball turnover if team fails to attempt shot." },
  ],

  positions: [
    { name: "Goalkeeper", role: "Only player in goal-area; also joins attack as 4th outfield for numerical advantage.", count: 1 },
    { name: "Defender (specialist)", role: "Sits back near own goal to prevent counter-attacks.", count: 1 },
    { name: "Playmaker / Pivot", role: "Central creator; sets up spectacular goals with lobbed passes.", count: 1 },
    { name: "Wing / Runner", role: "Attacking finisher; specialises in spin + kempa shots.", count: 1 },
  ],
  officiating: {
    officials: ["2 Court Referees", "1 Scorer/Timekeeper", "1 Delegate"],
    summary: "IHF beach handball uses 2 co-equal referees on court plus table officials for time + scoresheet; delegate oversees compliance.",
  },

  governingBodies: [
    { name: "International Handball Federation (IHF)", founded: 1946, headquarters: "Basel, Switzerland", website: "https://ihf.info" },
    { name: "European Handball Federation (EHF)", founded: 1991, headquarters: "Vienna, Austria", website: "https://eurohandball.com" },
  ],
  majorCompetitions: [
    { name: "IHF Beach Handball World Championships", frequency: "biennial", founded: 2004, region: "worldwide" },
    { name: "European Beach Handball Championships", frequency: "biennial", founded: 2000, region: "Europe" },
    { name: "World Games (Beach Handball)", frequency: "quadrennial", founded: 2005, region: "worldwide (host city)" },
    { name: "Youth Olympic Games (from 2018)", frequency: "quadrennial", founded: 2018, region: "worldwide" },
    { name: "ANOC World Beach Games", frequency: "quadrennial", founded: 2019, region: "worldwide" },
  ],
  countriesPlayed: ["HR", "BR", "NO", "DE", "IT", "ES", "HU", "GR", "PT", "PL", "AR", "US", "OM", "TN"],
  famousAthletes: [
    "Marija Vukčević (Croatia — multi-time World Championship medalist)",
    "Alexandra do Nascimento (Brazil — legend of both indoor + beach handball)",
    "Ana Karolina (Brazil — spectacular-goal specialist)",
    "Håkon Meland (Norway — top male scorer)",
    "Iva Šoić (Croatia — women's world champion multiple)",
  ],
  records: [
    { title: "Most Beach Handball World Championship titles (women)", holder: "Brazil", value: "4 titles (2006, 2008, 2010, 2014)", year: 2014 },
    { title: "Most Beach Handball World Championship titles (men)", holder: "Croatia + Brazil (tied 2)", value: "Croatia + Brazil each 2 titles as of 2024", year: 2024 },
    { title: "Youth Olympic debut", holder: "IHF + IOC", value: "First contested at Buenos Aires 2018 Youth Olympics", year: 2018 },
    { title: "IHF rule change on uniforms", holder: "IHF", value: "Women's shorts allowed instead of bikini bottoms — 2021 rule update after Norway protest", year: 2021 },
  ],

  variants: ["ihf-beach-handball", "recreational-3-a-side", "youth-modified"],
  relatedSports: ["handball", "beach-soccer", "beach-volleyball", "basketball"],

  skills: [
    "aerial technique (kempa, spin, fadeaway)",
    "quick sand movement + change of direction",
    "goalkeeper anticipation on 1v1s",
    "creative passing (setup lobbed passes for kempa)",
    "conditioning on soft surface",
  ],
  strategies: [
    { title: "Hunt spectacular goals", body: "2-point goals are the difference. Set up spins + kempa flights whenever open — a 6–4 spectacular win beats a 10–8 regular win." },
    { title: "Goalkeeper as 4th attacker", body: "Pull GK forward for a 4v3; often generates a 2-point GK goal or fast return-to-goal for defence." },
    { title: "Set-scored strategy", body: "Sets are independent — a big lead in set 1 doesn't help set 2. Manage energy across the whole match." },
    { title: "Force turnovers into transition", body: "Fast breaks from GK saves create instant 4v3 opportunities before defence resets." },
    { title: "Passive-play awareness", body: "Referee's passive signal = ~15 seconds to shoot. Don't get caught over-passing near the 6-m line." },
  ],

  terminology: [
    { term: "Kempa", meaning: "In-flight catch + shoot — attacker leaps into goal-area, catches lobbed pass, shoots before landing." },
    { term: "Spin (360°)", meaning: "Attacker rotates fully in the air before releasing shot — scores 2 pts." },
    { term: "Fadeaway", meaning: "Backwards-jumping shot — scores 2 pts." },
    { term: "GK goal", meaning: "Goalkeeper scores from open play — scores 2 pts." },
    { term: "Set", meaning: "One of two 10-minute mini-matches within the overall game." },
    { term: "Shoot-Out", meaning: "Golden-goal overtime — 1v1 attacks vs. GK when sets tied 1–1." },
    { term: "Passive play", meaning: "Attacking without attempting to score; referee warns then turnover." },
    { term: "IHF", meaning: "International Handball Federation — world governing body." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play indoor handball first", body: "Base technique + rules transfer directly; beach adds the sand + spectacular-goal layer." },
      { title: "Practise catching in the air", body: "Kempa catches are core beach handball; work on jumping + catching + landing without releasing the ball." },
      { title: "Sand court fitness", body: "Sand drills — lateral shuffles, short sprints, jump-and-land — build the specific conditioning." },
    ] },
    { level: "advanced", steps: [
      { title: "Master 360° spin shots", body: "Rotate one full turn in the air + release accurately. Beach specialists train these hundreds per week." },
      { title: "Join national federation", body: "IHF national federations host summer beach circuits; qualifying meets → European + World Championship squads." },
      { title: "Compete at World Games / Beach Games", body: "Highest recognition outside Olympic pathway; strong showings can lead to Youth Olympic + potential Olympic inclusion." },
    ] },
  ],

  faq: [
    { question: "Why are some goals worth 2 points?", answer: "Beach Handball rewards spectacle. Any goal scored from a spinning in-air move (360°, fadeaway, kempa flight, or goalkeeper open-play goal) counts 2 points instead of 1. This transforms tactics — teams hunt 'spectacular' shots rather than safe finishes." },
    { question: "How does the two-set format work?", answer: "Each match is TWO independent 10-minute sets. Each set has its own scoreline; the set winner gets 1 match point. Win both sets = 2–0 win. Split 1–1 → 5-round golden-goal Shoot-Out (1v1 attacker vs. GK). Aggregate score across sets doesn't matter." },
    { question: "Is Beach Handball in the Olympics?", answer: "Not yet as a full Olympic sport, but debuted at the Youth Olympic Games (Buenos Aires 2018) and is contested at the ANOC World Beach Games. IHF has pursued full Olympic inclusion since 2010; possible addition at LA 2028 or Brisbane 2032." },
    { question: "What was the 2021 women's uniform controversy?", answer: "At the 2021 European Championship, Norway's women's team wore shorts instead of the mandatory bikini bottoms; the European Handball Federation fined them €1,500. Global backlash — including from Pink and IOC — led to IHF rule change in October 2021 permitting shorts. Considered a turning point in women's sport uniform policy." },
  ],

  wikipediaTitle: "Beach handball",
  sources: [
    { label: "IHF — Beach Handball rules", url: "https://ihf.info/", publisher: "IHF" },
    { label: "Wikipedia — Beach handball", url: "https://en.wikipedia.org/wiki/Beach_handball", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
