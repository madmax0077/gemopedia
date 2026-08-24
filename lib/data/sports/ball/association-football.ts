import type { Sport } from "@/lib/types";

export const associationFootball: Sport = {
  id: "association-football",
  slug: "association-football",
  name: "Football",
  officialName: "Association Football",
  aliases: ["Soccer", "The beautiful game"],
  shortDescription:
    "The world's most popular team sport — two sides of eleven aim to score more goals than the opponent using any part of the body except the arms and hands.",
  longDescription:
    "Association football (soccer) is played by more people, in more countries, than any other organised sport on Earth. Two teams of eleven players use their feet, heads and bodies — but never their hands or arms — to move a ball into the opposing team's goal. The rules (called the Laws of the Game) are elegant enough that a child in a favela and a professional in Munich play essentially the same sport.",

  category: "ball-sports",
  subCategory: "goal-sport",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "England",
  estimatedOrigin: "1863 (codification of the Laws of the Game)",

  players: { perTeam: 11, min: 7, max: 11, substitutes: 5, note: "A match cannot continue if a team has fewer than 7 players on the pitch." },
  field: {
    surfaceName: "pitch",
    dimensions: "100–110 m long × 64–75 m wide (FIFA international standard).",
    description:
      "A rectangular grass or artificial-turf pitch marked with halfway line, centre circle, penalty areas (18-yard box), goal areas (6-yard box) and corner arcs. A goal stands at each end.",
  },
  equipment: [
    { name: "Football", description: "Circumference 68–70 cm, weight 410–450 g." },
    { name: "Goals", description: "7.32 m wide × 2.44 m high crossbar." },
    { name: "Shin guards", description: "Mandatory protective gear under socks." },
    { name: "Boots", description: "Studded footwear appropriate to the surface." },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "Two halves of 45 minutes with a 15-minute half-time.",
    note: "Referee adds stoppage time (typically 3–10 min per half). Knockout ties may go to extra time (2×15 min) and a penalty shoot-out.",
  },
  objective:
    "Score more goals than the opposing team by putting the whole ball across their goal line, between the posts and under the crossbar.",
  matchStructure:
    "The match begins with a kickoff. Play continues fluidly, restarted after infractions or the ball leaving play. At full-time the team with more goals wins; if scores are level the match may be drawn or, in knockout formats, go to extra time and penalties.",

  basicRules: [
    { title: "No handball", body: "Outfield players cannot deliberately touch the ball with the hand or arm. Only the goalkeeper may handle the ball, and only inside their own penalty area." },
    { title: "Offside", body: "An attacker is offside if any part of their head, body or feet that can legally score is nearer the opponent's goal line than both the ball AND the second-last opponent, at the moment a teammate plays the ball to them." },
    { title: "Free kicks", body: "Awarded for fouls: direct (a goal can be scored directly) or indirect (must touch another player before entering the goal)." },
    { title: "Throw-in / corner / goal kick", body: "The game is restarted from the sideline by a throw-in, or from the goal-line by a corner (defence last touched) or goal kick (attack last touched)." },
    { title: "Cards", body: "Yellow = caution; second yellow = red = sent off. Straight red for serious foul play, violent conduct or denial of a goal-scoring opportunity." },
  ],
  advancedRules: [
    { title: "VAR", body: "Video Assistant Referee reviews four match-changing situations: goals, penalties, direct red cards and mistaken identity. The on-field referee has the final call." },
    { title: "Substitution rules", body: "FIFA competitions currently allow 5 substitutions in 3 stoppages (a rule cemented after the 2020 COVID season)." },
    { title: "Advantage", body: "Rather than stop play for a foul, the referee can wave play on if the fouled team stands to gain more by continuing." },
  ],
  scoring: {
    summary: "A goal is scored when the entire ball crosses the goal line between the goalposts and under the crossbar, provided no infringement (offside, handball, foul) has been committed by the attacking team.",
    winCondition: "Most goals wins. Level scores may be a draw (league), extra time (knockout), or a penalty shoot-out (final knockout tiebreaker).",
  },
  penalties: [
    { title: "Penalty kick", body: "A direct free kick from the penalty spot (11 m) with only the goalkeeper defending — awarded for a foul by the defence inside their own penalty area." },
    { title: "Yellow card", body: "A caution for unsporting behaviour, dissent, delaying the restart, or tactical fouling." },
    { title: "Red card", body: "Sent off — the team plays on with 10 (or fewer). Two yellows in one match also produce a red." },
  ],
  fouls: [
    { title: "Direct free-kick offences", body: "Kicking, tripping, jumping at, charging, striking, pushing, tackling from behind, holding or spitting at an opponent — or handling the ball deliberately." },
    { title: "Indirect free-kick offences", body: "Playing in a dangerous manner, impeding an opponent without contact, preventing the goalkeeper releasing the ball, or offside." },
  ],
  winningConditions: ["Score more goals than the opponent in 90 minutes.", "In knockout formats, aggregate over two legs, extra time or a penalty shoot-out."],

  positions: [
    { name: "Goalkeeper", role: "The only player allowed to use their hands, and only inside their own penalty area.", count: 1 },
    { name: "Defender", role: "Stops the opposition from scoring — full-backs, centre-backs and wing-backs.", count: 4 },
    { name: "Midfielder", role: "Links defence and attack; controls the tempo of the game.", count: 4 },
    { name: "Forward", role: "Primary goal-scorer; positioned closest to the opposing goal.", count: 2 },
  ],
  officiating: {
    officials: ["Referee", "Two assistant referees (linesmen)", "Fourth official", "VAR + assistant VAR"],
    summary: "One referee is in charge of the match. Assistant referees signal offside, throw-ins and out-of-play. VAR reviews four match-changing situations via replay booth.",
    signals: [
      { name: "Goal", description: "Referee points to the centre circle." },
      { name: "Direct free kick", description: "Arm extended horizontally in the direction of the attacking team." },
      { name: "Indirect free kick", description: "Arm raised vertically above the head until the ball is next played." },
      { name: "Offside (linesman)", description: "Flag raised and pointed diagonally into the field." },
    ],
  },

  governingBodies: [
    { name: "Fédération Internationale de Football Association", acronym: "FIFA", founded: 1904, headquarters: "Zurich, Switzerland", website: "https://www.fifa.com" },
    { name: "International Football Association Board", acronym: "IFAB", founded: 1886, headquarters: "Zurich, Switzerland", website: "https://www.theifab.com" },
    { name: "Union of European Football Associations", acronym: "UEFA", founded: 1954, headquarters: "Nyon, Switzerland" },
  ],
  majorCompetitions: [
    { name: "FIFA World Cup", frequency: "quadrennial", founded: 1930, region: "worldwide" },
    { name: "UEFA Champions League", frequency: "annual", founded: 1955, region: "Europe" },
    { name: "Copa Libertadores", frequency: "annual", founded: 1960, region: "South America" },
    { name: "AFC Asian Cup", frequency: "quadrennial", founded: 1956, region: "Asia" },
    { name: "Africa Cup of Nations", frequency: "biennial", founded: 1957, region: "Africa" },
  ],
  countriesPlayed: ["GB", "BR", "AR", "DE", "FR", "ES", "IT", "PT", "NL", "IN", "JP", "US", "KR", "ZA", "SN"],
  famousAthletes: ["Pelé", "Diego Maradona", "Lionel Messi", "Cristiano Ronaldo", "Zinedine Zidane", "Marta", "Mia Hamm", "Johan Cruyff"],
  records: [
    { title: "Most FIFA World Cups (nation)", holder: "Brazil", value: "5 titles", year: 2002 },
    { title: "Most Ballon d'Or awards", holder: "Lionel Messi", value: "8 titles", year: 2023 },
    { title: "Highest-scoring club in Europe (season)", holder: "Barcelona (2011-12)", value: "191 goals", year: 2012 },
  ],

  variants: ["futsal", "beach-soccer"],
  relatedSports: ["rugby-union", "gaelic-football", "hurling"],

  skills: ["ball control", "passing", "shooting", "spatial awareness", "endurance", "teamwork"],

  terminology: [
    { term: "Hat-trick", meaning: "Three goals scored by one player in a single match." },
    { term: "Nutmeg", meaning: "Playing the ball through an opponent's legs and collecting it on the other side." },
    { term: "Clean sheet", meaning: "A match in which a team concedes no goals." },
    { term: "Corner kick", meaning: "Restart from the corner arc, awarded when the defence puts the ball behind their own goal line." },
    { term: "Bicycle kick", meaning: "An acrobatic strike where the player kicks the ball backwards while airborne." },
    { term: "Tiki-taka", meaning: "A style of play built on short, quick passes to maintain possession." },
  ],
  strategies: [
    { title: "Formations", body: "The most common are 4-3-3, 4-2-3-1 and 3-5-2; each balances defence, midfield control and forward pressure differently." },
    { title: "High press vs low block", body: "Pressing high forces mistakes near the opposition goal; sitting deep denies space and invites counter-attacks." },
    { title: "Set pieces", body: "Corners and free kicks account for 20–30% of goals at elite level. Rehearsed routines are a serious weapon." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "What is football?", body: "A team sport where you score by putting the ball into the opposition's goal, using anything but your arms and hands.", anchor: "hero" },
        { title: "The pitch", body: "Rectangular, with a goal at each end, marked penalty areas and a halfway line.", anchor: "playing-area" },
        { title: "How to score", body: "Whole ball must cross the goal line between the posts and under the crossbar.", anchor: "scoring" },
        { title: "The offside rule", body: "You can't be nearer the opponent's goal line than the second-last defender when the pass is played.", anchor: "rules" },
        { title: "Fouls & cards", body: "Yellow for cautions, red for send-offs. Two yellows = red.", anchor: "penalties" },
        { title: "Study the pitch layout", body: "Halfway line, penalty area, goal area — see them all labelled.", anchor: "playing-area" },
      ],
    },
  ],
  faq: [
    { question: "Is football and soccer the same sport?", answer: "Yes — 'soccer' is a British abbreviation of 'association', used to distinguish it from rugby football." },
    { question: "How many players are in a team?", answer: "Eleven on the pitch per side, plus substitutes on the bench (5 usually allowed in senior competitions)." },
    { question: "Can you score directly from a corner kick?", answer: "Yes — it is a rare but perfectly legal goal known as an 'olimpico'." },
  ],

  animations: [
    { id: "offside", title: "How offside works", component: "FootballOffside", description: "See exactly when a player is (and isn't) in an offside position." },
  ],

  diagrams: [
    {
      id: "football-pitch",
      title: "Pitch layout",
      component: "football-pitch",
      slot: "playing-area",
    },
    {
      id: "football-formation-433",
      title: "4-3-3 formation",
      component: "football-formation-433",
      slot: "positions",
    },
  ],

  sources: [
    { label: "Laws of the Game 2024/25", publisher: "IFAB", url: "https://www.theifab.com/laws-of-the-game" },
    { label: "FIFA Rules & Regulations", publisher: "FIFA", url: "https://www.fifa.com/en/legal/football-regulatory" },
    { label: "Britannica — Football (Soccer)", publisher: "Encyclopaedia Britannica", url: "https://www.britannica.com/sports/football-soccer" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};
