import type { Sport } from "@/lib/types";

export const waterPolo: Sport = {
  id: "water-polo",
  slug: "water-polo",
  name: "Water Polo",
  officialName: "Water Polo",
  aliases: ["Waterball"],
  shortDescription:
    "Aquatic team ball sport where two teams of 7 players tread water in a deep pool and try to throw the ball into the opposing goal.",
  longDescription:
    "Water polo is an aquatic team sport played in a deep pool by two teams of seven players (six field players + a goalkeeper). Players may not touch the bottom of the pool at any time, so treading water — the powerful egg-beater kick — is essential. Field players may handle the ball with one hand only (the goalkeeper may use both); attacks last a maximum of 30 seconds (shot clock). Match consists of four 8-minute quarters at the elite level, with high-scoring goals thrown from inside 5-6 metres or beyond. The modern rules were codified in Britain in the 1870s; men's water polo has been in every Summer Olympics since 1900, women's since Sydney 2000.",

  category: "aquatic-sports",
  subCategory: "team ball sport",
  sportType: "team",
  indoorOutdoor: "both",
  isOlympic: true,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "Scotland / England",
  estimatedOrigin: "1870s (Scottish and English swimming clubs); modern rules 1885",

  players: { perTeam: 7, min: 6, max: 7, substitutes: 6, note: "6 field players + 1 goalkeeper on deck; up to 6 substitutes with unlimited interchanges." },
  field: {
    surfaceName: "pool",
    dimensions: "Men: 30 m × 20 m; Women: 25 m × 20 m; minimum depth 2 m so no one can touch bottom. Goals 3 m wide × 0.9 m above water.",
    description: "Rectangular pool marked with coloured lane and distance markers. A red 2-m line (no attacker inside without the ball) and a yellow 6-m line (major fouls outside) define zones.",
  },
  equipment: [
    { name: "Water polo ball", description: "Waterproof size-5 ball (men) / size-4 (women); textured surface for grip." },
    { name: "Cap with ear guards", description: "White or blue for teams; goalkeepers wear red. Numbered 1-13 with the goalkeeper #1." },
    { name: "Water polo swimsuit", description: "Reinforced brief or knee-length suit; must resist grabbing." },
    { name: "Mouth guard", description: "Recommended for the physical contact.", optional: true },
    { name: "Goals & buoys", description: "Floating goals anchored to the pool ends; visual buoys mark 2-m, 5/6-m, and half-court lines." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Four 8-minute quarters (elite/Olympic); 3-minute break at half-time, 2-minute breaks between other quarters.",
    note: "Overtime: two 3-minute periods, then sudden-death or shootout depending on the competition.",
  },
  objective: "Score more goals than the opponent by throwing the ball into their net during four quarters of play.",
  matchStructure:
    "The game begins with a swim-off at centre — both teams sprint for the ball. Possessing team advances via passes and dribbles (pushing the ball with the head or one hand). They have a maximum 30-second shot clock to attempt a shot. On defence, players try to steal, block or force a foul. Fouls result in free throws (minor) or exclusions (major — the offender leaves for 20 seconds).",

  basicRules: [
    { title: "No touching the bottom", body: "Field players must remain afloat (treading water) throughout the match; touching the bottom is a turnover." },
    { title: "One-handed ball handling", body: "Field players may touch the ball with one hand only; the goalkeeper may use both hands inside the 5-m zone." },
    { title: "Shot clock", body: "Attacking team has 30 seconds to shoot; failure is a turnover. Reset to 20 seconds after a shot on goal that stays in play." },
    { title: "Exclusion fouls", body: "Serious defensive fouls (holding, sinking, kicking) remove the offender from the pool for 20 seconds — team plays 6v7." },
    { title: "Penalty throw (5-m)", body: "Awarded when an attacker is fouled inside the 5-m line in a scoring position — a free 5-m shot at goal." },
    { title: "Two-metre offside", body: "An attacker may not be inside the 2-m line without the ball." },
    { title: "Substitutions", body: "Unlimited flying subs during play through the re-entry zone in front of the team bench." },
  ],
  advancedRules: [
    { title: "Six-vs-five power play", body: "After an exclusion foul, the offended team enjoys 20 s of a man-up advantage — set plays are common." },
    { title: "Brutality", body: "A red card (brutality) removes a player for the entire match plus a 4-min power play." },
    { title: "Corner throw", body: "If the goalkeeper knocks a shot over their own goal-line, the attacking team takes a throw from the 2-m corner." },
    { title: "Advantage rule", body: "Referees may play advantage if calling a foul would disadvantage the attacking team." },
    { title: "Head-injury protocol", body: "Match paused for any suspected concussion; players assessed before returning." },
  ],
  scoring: {
    summary: "One goal per legal shot into the net.",
    breakdown: [
      { action: "Field goal", points: "1" },
      { action: "Penalty throw (5-m)", points: "1" },
      { action: "Direct free throw goal", points: "1", note: "Direct shots only allowed from outside 6 m." },
    ],
    winCondition: "Team with more goals at full time wins. Overtime and shootouts if tied in knockouts.",
  },
  penalties: [
    { title: "Minor foul (ordinary)", body: "Common contact — awards a free throw to the fouled team; must pass or shoot from 6 m+." },
    { title: "Major foul (exclusion)", body: "20-second removal from the pool for holding, sinking, kicking or brutal play; team plays 6v7." },
    { title: "Penalty foul (5-m)", body: "Foul that prevents a probable goal inside the 5-m area." },
    { title: "Brutality (red card)", body: "Excessive violent play — 4-minute exclusion and match ejection." },
  ],

  positions: [
    { name: "Goalkeeper (GK)", role: "Defends the goal; may use both hands inside the 5-m area.", count: 1 },
    { name: "Centre-forward / hole set", role: "Positions at 2 m in front of goal; back to the net; strong physicality.", count: 1 },
    { name: "Centre-back / hole guard", role: "Defends the hole set; typically the tallest defender.", count: 1 },
    { name: "Wings", role: "Play near the goal-lines on either side; often left- and right-handed shooters.", count: 2 },
    { name: "Drivers", role: "Perimeter attackers who initiate movement and shoot from long range.", count: 2 },
  ],
  officiating: {
    officials: ["Two referees (equal authority, on opposite sidelines)", "Two goal judges", "Two timekeepers (game and shot clocks)", "Two secretaries"],
    summary: "Two on-deck referees rule on fouls and exclusions; goal judges signal goals and corner throws. Video review is used at world-championship level.",
  },

  governingBodies: [
    { name: "World Aquatics", acronym: "WA", founded: 1908, headquarters: "Lausanne, Switzerland", website: "https://www.worldaquatics.com" },
    { name: "USA Water Polo", founded: 1978, headquarters: "Huntington Beach, USA", website: "https://usawaterpolo.org" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1900, region: "worldwide", note: "Women added in Sydney 2000." },
    { name: "World Aquatics Championships", frequency: "biennial", founded: 1973, region: "worldwide" },
    { name: "World Aquatics World Cup", frequency: "annual", founded: 1979, region: "worldwide" },
    { name: "LEN Champions League", frequency: "annual", founded: 1963, region: "Europe (club)" },
  ],
  countriesPlayed: ["HR", "IT", "HU", "RS", "ES", "GR", "US", "AU", "RU", "ME", "NL", "JP", "BR", "GE"],
  famousAthletes: [
    "Dezső Gyarmati",
    "Manuel Estiarte",
    "Tamás Kásás",
    "Alex Bowen",
    "Tania Di Mario",
    "Aleksandar Šapić",
    "Filip Filipović",
    "Maggie Steffens",
    "Sandro Sukno",
    "Rita Keszthelyi",
  ],
  records: [
    { title: "Most Olympic gold medals (men)", holder: "Hungary", value: "9", year: 2008 },
    { title: "Most Olympic gold medals (women, individual)", holder: "Maggie Steffens (USA)", value: "3", year: 2020 },
    { title: "Most FINA/WA World Championships (men)", holder: "Yugoslavia / Serbia", value: "5", year: 2022 },
  ],

  variants: ["beach-water-polo", "canoe-polo", "inner-tube-water-polo"],
  relatedSports: ["swimming", "handball", "canoe-polo"],

  skills: [
    "egg-beater treading",
    "one-hand ball handling",
    "explosive throwing power",
    "sprint swimming",
    "tactical awareness",
    "physical strength for wrestling in the water",
    "goalkeeper reflexes and vision",
  ],
  strategies: [
    { title: "Set the hole", body: "Get the ball to the centre-forward at 2 m to draw double teams and either shoot or dish out." },
    { title: "Man-up plays", body: "Set patterns after exclusion — usually 4-2 or 3-3 formation to work an open shot inside 20 seconds." },
    { title: "Press vs zone", body: "Man-to-man press disrupts perimeter passing; zone defence collapses on the hole." },
    { title: "Transition break", body: "Fast counter-attack after a save or steal — outlet the ball long to a swimming winger." },
  ],

  terminology: [
    { term: "Egg-beater", meaning: "Alternating circular leg kick that keeps players high in the water." },
    { term: "Hole set", meaning: "The centre-forward who plays with back to goal at the 2-m line." },
    { term: "Skip shot", meaning: "A shot fired to bounce off the water before hitting the goal, harder for keepers to react to." },
    { term: "Man-up", meaning: "6-on-5 offensive advantage after the defence receives an exclusion." },
    { term: "Kick-out", meaning: "Exclusion — 20-second removal from the pool for a major foul." },
    { term: "Wet pass", meaning: "Pass thrown into the water in front of the receiver so they swim onto it." },
    { term: "Dry pass", meaning: "Pass caught in the air by the receiver's hand." },
    { term: "Sprint (swim-off)", meaning: "Sprint at the start of each quarter to reach the loose ball at half-way first." },
    { term: "Two-metre line", meaning: "Red line — attackers may not enter without the ball." },
    { term: "Shot clock", meaning: "30-second attacking possession clock — down to 20 s after a saved shot that stays in play." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Egg-beater kick", body: "Learn to tread water hands-free and rise high enough to catch and pass." },
      { title: "One-handed ball handling", body: "Grip the ball with slightly cupped fingers — practise picking up from the water surface.", anchor: "basicRules" },
      { title: "Simple pass and shot", body: "Dry-pass and shot with a snapping wrist — target lower corners." },
      { title: "Field awareness", body: "Learn the 2-m, 5-m and 6-m lines." },
    ] },
    { level: "intermediate", steps: [
      { title: "Sprinting from a swim-off", body: "Head-up freestyle to reach the ball first." },
      { title: "Playing the hole", body: "Back-to-goal reception, hip roll, and quick shot on the roll." },
      { title: "Man-up patterns", body: "Learn 4-2 and 3-3 rotations for the exclusion advantage." },
      { title: "Basic defence", body: "Pressure hands and legs; time an interception on wet passes." },
    ] },
    { level: "advanced", steps: [
      { title: "Advanced shooting", body: "Skip shot, backhand, and lob over the goalkeeper." },
      { title: "Reading opponents", body: "Recognise defensive schemes (press vs zone vs drop) and select the counter." },
      { title: "Endurance conditioning", body: "Interval sets in the water — 4×8-min quarters with rapid transitions." },
    ] },
  ],
  faq: [
    { question: "How do players stay above water without touching the bottom?", answer: "They use the egg-beater kick — an alternating circular leg motion that provides constant lift with a stable trunk for using the arms." },
    { question: "Why do goalkeepers wear a different-coloured cap?", answer: "So referees, players and video can identify them; they may also use both hands and are the only players allowed to punch the ball." },
    { question: "How long is a match?", answer: "Four 8-minute quarters at the elite level (approximately 60 minutes real time with breaks); shorter at youth levels." },
    { question: "What is an 'exclusion'?", answer: "A player is sent to the penalty area for 20 seconds for a major foul; the team plays a man short until the time expires or the opponent scores." },
    { question: "Is water polo dangerous?", answer: "It's very physical — underwater grappling, holding, and kicking are common. Most bruising and scratching happens out of the referee's sight below the surface." },
  ],

  wikipediaTitle: "Water polo",
  sources: [
    { label: "Wikipedia — Water polo", url: "https://en.wikipedia.org/wiki/Water_polo", publisher: "Wikipedia" },
    { label: "World Aquatics Water Polo Rules", url: "https://www.worldaquatics.com/rules/water-polo", publisher: "World Aquatics" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
