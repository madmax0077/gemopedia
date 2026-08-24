import type { Sport } from "@/lib/types";

export const fieldHockey: Sport = {
  id: "field-hockey",
  slug: "field-hockey",
  name: "Field Hockey",
  officialName: "Field Hockey",
  aliases: ["Hockey (outside North America)", "Grass Hockey"],
  shortDescription:
    "Eleven-a-side stick-and-ball team sport played on artificial turf — flick, push and hit a hard ball into a caged goal using a J-shaped stick.",
  longDescription:
    "Field Hockey is an 11-a-side team sport played with a hard ball and a J-shaped stick on a synthetic-turf pitch. Two teams try to score by directing the ball into the opponent's goal, played over four 15-minute quarters. Modern rules were formalised in England in the mid-19th century by the Hockey Association (1886), but the sport traces back thousands of years to ancient Egypt (a 4,000-year-old carving at Beni Hasan shows two players with sticks and a ball), Greece and Persia. Since the 1970s, the game is played almost exclusively on artificial turf, which favours skill and speed. Field hockey has been in every modern Olympics since 1908 (men) and 1980 (women). India dominated pre-1970s with 8 Olympic golds; the Netherlands, Germany, Australia, Belgium and Argentina now lead the world.",

  category: "ball-sports",
  subCategory: "stick-and-ball team sport",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "England (modern rules); ancient games in Egypt, Greece, Persia",
  estimatedOrigin: "Ancient origins; Hockey Association (England) 1886; International Hockey Federation founded 1924",

  players: { perTeam: 11, min: 11, max: 11, substitutes: 5, note: "10 outfield players + 1 goalkeeper (or 11 outfield in some formats). Rolling substitutions allowed." },
  field: {
    surfaceName: "hockey pitch",
    dimensions: "91.40 m × 55 m (100 yd × 60 yd). Goal: 3.66 m wide × 2.14 m high. Shooting circle: 14.63 m from goal.",
    description: "Artificial turf (mostly water-based since 1976) with a 22.9 m (25-yard) line, halfway line, and 'D' (shooting circle) marked around each goal.",
  },
  equipment: [
    { name: "Hockey stick", description: "J-shaped, wooden or composite. Flat playing side only (rounded back is illegal). Total length ~91-105 cm; heavier for defenders, lighter for attackers." },
    { name: "Hockey ball", description: "Hard plastic, 22.4-23.5 cm circumference, 156-163 g. Usually white on turf." },
    { name: "Shin guards", description: "Mandatory for all outfield players." },
    { name: "Mouthguard", description: "Mandatory in most leagues since the mid-2010s." },
    { name: "Goalkeeper equipment", description: "Full body armour: leg guards, kickers, chest pad, throat guard, helmet, gloves. Legally allowed to use any body part to stop the ball inside the circle." },
    { name: "Turf shoes", description: "Studded/multi-cleat outsoles for artificial turf grip." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Four 15-minute quarters (since 2019). Two 2-minute breaks + 10-minute half-time.",
    note: "Clock stops after every goal, penalty corner, and card. Extended time in playoffs; if tied after 60 min, 7.5-minute periods until first goal.",
  },
  objective: "Score more goals than the opposition by directing the ball into the opponent's goal from within the shooting circle.",
  matchStructure:
    "The game starts with a pass-back at the halfway line. Play flows continuously; a goal is scored only when the ball crosses the line entirely and was last touched inside the shooting circle. Play stops for out-of-bounds (side-in or back-line pass), fouls (free hits), and penalty corners/strokes. Rolling substitutions are unlimited and can happen at any time (except during penalty corners). Cards (green, yellow, red) result in temporary or permanent removal.",

  basicRules: [
    { title: "Only the flat side of the stick", body: "The rounded back is illegal. Playing the ball with the back of the stick is a foul." },
    { title: "No high sticks", body: "Sticks may not be raised above shoulder height in a way that endangers others." },
    { title: "Ball off the body", body: "Outfield players may not use their body (feet, hands, shins) to control the ball. Goalkeepers may inside their own circle." },
    { title: "Goals from inside the circle", body: "A goal only counts if the ball was touched by an attacker inside the shooting circle (D) before crossing the goal line." },
    { title: "Obstruction", body: "You may not shield the ball with your body from an opponent — a foul called obstruction." },
    { title: "Free hits", body: "Awarded for infringements outside the circle; a defender free-hit inside their own 22.9 m line has 15 m of clear space." },
    { title: "Penalty corners", body: "Awarded for defensive fouls inside the circle. Attackers set up outside the circle; defenders line up on their own back-line. Ball is injected from the back-line, then attackers may shoot." },
    { title: "Penalty strokes", body: "Awarded for deliberate fouls preventing a certain goal, or repeated fouls at penalty corners. One attacker versus goalkeeper from 6.4 m." },
  ],
  advancedRules: [
    { title: "Video review (TMO)", body: "Each team gets one video-referral per match; the video umpire reviews goal decisions, penalty corners/strokes, and cards." },
    { title: "Self-pass", body: "Since 2009, the player taking a free hit may pass to themselves and continue play — has dramatically increased tempo." },
    { title: "Aerial ball", body: "The ball may be lifted, but not dangerously. The receiving player under a high ball has the right to it." },
    { title: "Shootout tiebreaker", body: "If matches are tied after extra time, a shootout is used: attacker starts from 23 m and has 8 seconds to score against the keeper." },
    { title: "Card system", body: "Green = 2-minute suspension. Yellow = 5-10 minutes off the pitch. Red = permanent (team plays with 10)." },
  ],
  scoring: {
    summary: "1 point per goal scored inside the shooting circle. Highest score after 60 minutes wins.",
    breakdown: [
      { action: "Field goal", points: "1", note: "Any goal scored from open play, must be from inside the D." },
      { action: "Penalty corner goal", points: "1", note: "Same as field goal but often more likely — set-piece from short corner." },
      { action: "Penalty stroke goal", points: "1", note: "1v1 against the goalkeeper." },
    ],
    winCondition: "Highest score at 60 minutes. Knockout matches: golden goal in 7.5-min periods, then shootout.",
  },
  penalties: [
    { title: "Free hit", body: "Awarded for infringements outside the circle." },
    { title: "Penalty corner", body: "Awarded for defensive fouls inside the circle or deliberate defensive fouls anywhere within 22.9 m." },
    { title: "Penalty stroke", body: "For deliberate fouls preventing a probable goal, or persistent penalty-corner infringements." },
    { title: "Green card", body: "2-minute suspension." },
    { title: "Yellow card", body: "5-10 minute suspension." },
    { title: "Red card", body: "Permanent removal — team plays with 10 for the remainder." },
  ],

  positions: [
    { name: "Goalkeeper", role: "Only player allowed to use any body part inside the circle; wears full protective armour.", count: 1 },
    { name: "Sweeper / Fullback", role: "Deep defender — last line before the goalkeeper.", count: 2 },
    { name: "Halfback / Midfielder", role: "Links defence and attack; runs the most in the game.", count: 3 },
    { name: "Winger / Forward", role: "Attacking wide players — provide crosses and speed into the circle.", count: 2 },
    { name: "Striker", role: "Centre-forward — main goal-scorer, receives most crosses.", count: 1 },
    { name: "Drag flicker (penalty-corner specialist)", role: "Not a formal position but the elite penalty-corner shooter — usually the top scorer.", count: 1 },
  ],
  officiating: {
    officials: ["Two umpires (on-pitch)", "Reserve umpire", "Judge (goal decisions)", "Timing/scorer table", "Video umpire (TMO)"],
    summary: "Two umpires each control half the pitch. A video umpire reviews goals, corners and cards on request from teams (one review per match) or on their own initiative for serious incidents.",
  },
  governingBodies: [
    { name: "International Hockey Federation", acronym: "FIH", founded: 1924, headquarters: "Lausanne, Switzerland", website: "https://www.fih.hockey" },
    { name: "Hockey India", founded: 2009, headquarters: "New Delhi, India", website: "https://www.hockeyindia.org" },
    { name: "Koninklijke Nederlandse Hockey Bond (KNHB)", founded: 1898, headquarters: "Nieuwegein, Netherlands" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1908, region: "worldwide", note: "Men 1908; women 1980." },
    { name: "FIH Hockey World Cup", frequency: "quadrennial", founded: 1971, region: "worldwide" },
    { name: "FIH Pro League", frequency: "annual", founded: 2019, region: "worldwide", note: "Home-and-away round-robin between top 9 nations." },
    { name: "Champions Trophy (2012-2018)", frequency: "biennial", founded: 1978, region: "worldwide", note: "Ended 2018, replaced by Pro League." },
    { name: "Sultan Azlan Shah Cup", frequency: "annual", founded: 1983, region: "Asia" },
  ],
  countriesPlayed: ["IN", "NL", "AU", "DE", "BE", "AR", "ES", "GB", "NZ", "PK", "KR", "MY"],
  famousAthletes: [
    "Dhyan Chand (India) — 3× Olympic gold, most-celebrated player",
    "Ric Charlesworth (AUS)",
    "Teun de Nooijer (NED)",
    "Tobias Hauke (GER)",
    "Sohail Abbas (PAK) — most international goals",
    "Luciana Aymar (ARG) — 8× FIH World Player of the Year",
    "Alyson Annan (AUS)",
    "Ellen Hoog (NED)",
    "Manpreet Singh (IND)",
    "Arthur van Doren (BEL)",
  ],
  records: [
    { title: "Most Olympic gold medals (men, nation)", holder: "India", value: "8 (1928-1980)", year: 1980 },
    { title: "Most FIH World Player of the Year", holder: "Luciana Aymar (ARG)", value: "8 (2001-2013)", year: 2013 },
    { title: "Most international goals", holder: "Sohail Abbas (PAK)", value: "348 goals", year: 2013 },
  ],

  variants: ["indoor-hockey", "hockey-5s", "beach-hockey", "roller-hockey"],
  relatedSports: ["ice-hockey", "hurling", "shinty", "lacrosse", "bandy"],

  skills: ["stick handling", "trapping the ball", "reverse-stick hitting", "aerial passing", "drag flicking", "spatial awareness", "cardiovascular endurance"],
  strategies: [
    { title: "Press systems", body: "High press (attacking half), mid press, and low press (own 22-metre) — team decides where to challenge for the ball." },
    { title: "Set piece dominance", body: "Winning and defending penalty corners is often the difference — teams have dedicated 'drag flickers' who score 40%+ of goals from PCs." },
    { title: "Circle penetration", body: "Modern strategy focuses on getting to the top of the D (baseline entry) rather than centre channels; wider is safer." },
    { title: "Fast breaks and transitions", body: "Modern turf hockey rewards teams that transition quickly from defence to attack in 3-4 passes." },
    { title: "Overhead / aerial passes", body: "High-lofted passes over pressing lines — Dutch and German teams have made this an art form." },
  ],

  terminology: [
    { term: "D / Shooting circle", meaning: "Semicircle 14.63 m from goal — a goal only counts if last touched inside." },
    { term: "Penalty corner (short corner)", meaning: "Set-piece from the back-line after a defensive foul in the circle." },
    { term: "Drag flick", meaning: "Low, powerful shot at penalty corners where the ball is dragged along the ground and released with a whipping action." },
    { term: "Reverse stick", meaning: "Playing the ball on your left side by turning the stick — a difficult but essential skill." },
    { term: "Self-pass", meaning: "Free hit taken by the player themselves — legal since 2009." },
    { term: "Aerial ball", meaning: "A lofted pass over defenders — very hard to defend." },
    { term: "Green / yellow / red card", meaning: "2-min / 5-10 min / permanent suspension." },
    { term: "Third-third area", meaning: "The zone from the 22.9 m line to the back-line — mid-third strategy." },
    { term: "Sudden death shootout", meaning: "1v1 attacker-vs-keeper from 23 m with 8-second time limit — used to break ties." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Basic stick grip", body: "Left hand at the top (V-grip), right hand about 30 cm lower. Never swap hands." },
      { title: "Push and hit", body: "The push moves the ball smoothly for accuracy; the hit is more powerful for long passes/shots." },
      { title: "Trapping", body: "Cushion the ball with a soft stick position — the first skill to master before playing under pressure." },
      { title: "Basic rules game", body: "Play small-sided 5-a-side games to internalise flat-stick, circle, and no-body-contact rules." },
    ] },
    { level: "intermediate", steps: [
      { title: "Reverse stick play", body: "Practise trapping, pushing and hitting on your natural weak side." },
      { title: "Aerial ball technique", body: "Learn to loft the ball over defenders using a scoop or 3D chip." },
      { title: "Positional play", body: "Understand your role in defensive shape and attacking triangles." },
      { title: "Penalty corner basics", body: "Learn injection/trap timing and basic drag-flick or hit shots." },
    ] },
    { level: "advanced", steps: [
      { title: "Elite drag flicking", body: "Requires strength, technique and hours of daily practice — top club and national teams have dedicated flicker coaches." },
      { title: "Video analysis", body: "Study PC variations, defensive setups, and press-breaking patterns from the Pro League." },
      { title: "Tactical fitness", body: "Interval sprints and repeat-sprint capacity — hockey demands ~7 km per match at high average intensity." },
    ] },
  ],
  faq: [
    { question: "Is field hockey played on grass or turf?", answer: "Since the 1976 Montreal Olympics, top-level field hockey is played almost exclusively on artificial turf (water-based since the early 1990s). It's faster and more skill-friendly than natural grass." },
    { question: "Why can't you use the back of the stick?", answer: "Historically for safety and precision — the flat side gives more control. Ambidextrous stick play was tried in the 1960s and rejected." },
    { question: "How is field hockey different from ice hockey?", answer: "Different sport entirely. Field hockey: 11-a-side outdoor, oval-face J-shaped stick, hard rubber ball, no body checks. Ice hockey: 6-a-side indoor rink, straight two-sided stick, puck, physical body checks legal." },
    { question: "Why is India historically dominant?", answer: "India won 8 Olympic golds between 1928 and 1980. Grass-era dominance — but the 1970s switch to artificial turf and India's slower adoption led to a decline. Recent revival has put India back in world-top-6 conversation." },
    { question: "Are goalkeepers really allowed to kick the ball?", answer: "Yes — inside their own shooting circle only. They can use any body part (kickers, gloves, chest pad, helmet) to stop the ball. Outside the circle, they play like any outfield player." },
  ],

  wikipediaTitle: "Field hockey",
  sources: [
    { label: "Wikipedia — Field hockey", url: "https://en.wikipedia.org/wiki/Field_hockey", publisher: "Wikipedia" },
    { label: "FIH — Rules of Hockey", url: "https://www.fih.hockey/rules", publisher: "International Hockey Federation" },
    { label: "Hockey India — About Hockey", url: "https://www.hockeyindia.org", publisher: "Hockey India" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
