import type { Sport } from "@/lib/types";

export const handball: Sport = {
  id: "handball",
  slug: "handball",
  name: "Handball",
  officialName: "Team Handball (Olympic Handball)",
  aliases: ["Team handball", "European handball", "Olympic handball"],
  shortDescription:
    "7-a-side indoor team sport where players pass, dribble and throw a small ball, trying to score goals into a 3-metre-wide goal — fast, physical and continuous.",
  longDescription:
    "Handball (team handball) is a fast, high-scoring indoor team sport played by two seven-player teams (six court players + a goalkeeper). Players pass, dribble and shoot a small ball into a goal 3 m wide × 2 m tall, defended by a goalkeeper. A match consists of two 30-minute halves and typically ends 25-35 goals to a side. Modern rules were codified in Germany and Scandinavia in the 1910s-20s (outdoor 11-a-side) and the smaller 7-a-side indoor version pioneered in Denmark became the Olympic format from Munich 1972. Handball is one of the most-watched sports in Europe (especially Germany, France, Denmark, Spain, Sweden, Norway) and increasingly popular globally.",

  category: "ball-sports",
  subCategory: "indoor team ball",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "DK",
  regionOfOrigin: "Denmark / Germany / Scandinavia",
  estimatedOrigin: "Late 1890s (outdoor); 7-a-side indoor codified in Denmark in the 1910s-20s",

  players: { perTeam: 7, min: 5, max: 7, substitutes: 7, note: "6 court players + 1 goalkeeper; unlimited flying substitutions during play." },
  field: {
    surfaceName: "court",
    dimensions: "40 m × 20 m court; goals 3 m wide × 2 m high; goal area (6-m line) is a semi-circle only the goalkeeper may enter.",
    description: "Indoor court with two goals at each end. A 6-m goalkeeper area (D-zone) surrounds each goal; a 7-m penalty line and 9-m dashed 'free-throw' line arc outside it.",
  },
  equipment: [
    { name: "Handball", description: "Small leather-cover ball, size 3 (men, 58-60 cm) / size 2 (women)." },
    { name: "Resin / wax", description: "Sticky resin applied to hands to improve grip; banned in some leagues (Denmark since 2019)." },
    { name: "Court shoes", description: "Non-marking indoor sports shoes with strong lateral support." },
    { name: "Goalkeeper kit", description: "Long-sleeved jersey and pants, sometimes padded elbows and knees." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Two 30-minute halves with a 10-minute half-time; time stops for injuries, penalties and coach challenges.",
    note: "Knockout ties tied after regulation play two 5-minute extra periods, then a second set if still level, then 5-round penalty shootouts.",
  },
  objective: "Score more goals than the opponent by throwing the ball into the opposing net during regulation time (and any extra periods).",
  matchStructure:
    "Play begins at centre with a throw-off. Attacking players advance by dribbling and passing (max 3 steps without a bounce; 3 seconds holding the ball) and shoot from outside the 6-m goalkeeper area. On a turnover the defence launches a counter-attack. Fouls stop play with free throws (from 9-m line) or 7-m penalty throws for clear scoring chances denied.",

  basicRules: [
    { title: "Three-step rule", body: "A player holding the ball can take at most three steps before either passing, shooting, or bouncing (like basketball dribbling)." },
    { title: "Three-second rule", body: "A player may hold the ball for a maximum of three seconds before playing it." },
    { title: "Goalkeeper area", body: "Only the goalkeeper may stand inside the 6-m arc. Outfield players entering the area while playing the ball cause a turnover." },
    { title: "Legal shooting", body: "Shots are taken by jumping over the 6-m line and releasing before landing inside it." },
    { title: "Fouls & contact", body: "Wrapping, holding or hitting an opponent's arms is a foul. Play continues if the fouled team keeps possession (advantage)." },
    { title: "7-m penalty throw", body: "Awarded when a clear scoring chance is illegally prevented; a 1v1 shot from 7 m against the keeper." },
    { title: "Ball out of play", body: "Play restarts with a throw-in over the sideline or a goal-throw by the goalkeeper if the ball goes over the end line off the attacking side." },
  ],
  advancedRules: [
    { title: "Passive play", body: "Referees signal 'passive play' if the attack stalls; the team then has 6 more passes before losing possession." },
    { title: "Suspensions", body: "Rough or repeated fouls draw a 2-minute suspension — the offending team plays a player short." },
    { title: "Disqualification (red card)", body: "Serious foul or three 2-minute suspensions result in disqualification; the team may substitute after the 2-minute penalty is served." },
    { title: "Team timeouts", body: "Each team has three 60-second timeouts per match (max 2 per half)." },
    { title: "Empty net attack", body: "Since 2016, teams may substitute the goalkeeper for a 7th outfield player without waiting for the goalkeeper to leave the field, enabling 7v6 offensive play." },
  ],
  scoring: {
    summary: "One point per goal — a goal scored when the entire ball crosses the goal line inside the goal.",
    breakdown: [
      { action: "Field goal", points: "1" },
      { action: "Penalty throw (7-m)", points: "1" },
      { action: "Free throw goal (9-m)", points: "1" },
    ],
    winCondition: "Team with more goals at full time wins. Knockout ties play extra time, then extra-extra time, then penalty shootouts.",
  },
  penalties: [
    { title: "Yellow card", body: "Verbal warning for a foul; max one per player and three per team per match." },
    { title: "2-minute suspension", body: "Player must leave the court for two minutes; the team plays a man short." },
    { title: "Red card / disqualification", body: "Player is removed from the match; team plays 2 minutes short then replaces the player." },
    { title: "7-m penalty throw", body: "Awarded when a clear scoring chance is illegally denied." },
  ],

  positions: [
    { name: "Goalkeeper (GK)", role: "Defends the goal; may play the ball with any body part inside the goal area.", count: 1 },
    { name: "Left / right wing (LW/RW)", role: "Attacks from wide positions using acute-angle shots.", count: 2 },
    { name: "Left / right back (LB/RB)", role: "Long-range shooters and playmakers.", count: 2 },
    { name: "Centre back / playmaker (CB)", role: "Runs the attack; sets up team-mates.", count: 1 },
    { name: "Pivot / line player", role: "Plays with back to the goal, on or near the 6-m line — screens defenders and finishes short-range chances.", count: 1 },
  ],
  officiating: {
    officials: ["Two referees (equal authority)", "Timekeeper", "Scorer"],
    summary: "Two on-court referees share equal authority; they use standardised arm signals for fouls, goals, suspensions and passive play warnings.",
  },

  governingBodies: [
    { name: "International Handball Federation", acronym: "IHF", founded: 1946, headquarters: "Basel, Switzerland", website: "https://www.ihf.info" },
    { name: "European Handball Federation", acronym: "EHF", founded: 1991, headquarters: "Vienna, Austria", website: "https://www.eurohandball.com" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1972, region: "worldwide" },
    { name: "IHF World Championship", frequency: "biennial", founded: 1938, region: "worldwide" },
    { name: "European Handball Championship", frequency: "biennial", founded: 1994, region: "Europe" },
    { name: "EHF Champions League", frequency: "annual", founded: 1993, region: "Europe (club)" },
  ],
  countriesPlayed: ["DK", "DE", "FR", "ES", "NO", "SE", "HR", "HU", "SI", "IS", "RS", "MK", "PL", "QA", "EG", "TN"],
  famousAthletes: [
    "Nikola Karabatić",
    "Mikkel Hansen",
    "Ivano Balić",
    "Daniel Narcisse",
    "Kiril Lazarov",
    "Ólafur Stefánsson",
    "Anja Andersen",
    "Cristina Neagu",
    "Andrea Lekić",
    "Nora Mørk",
  ],
  records: [
    { title: "Most IHF World Championships (men)", holder: "France", value: "6", year: 2023 },
    { title: "Most IHF World Championships (women)", holder: "USSR / Russia", value: "4", year: 2007 },
    { title: "Highest single-match goals (men, Olympic)", holder: "Sweden vs Egypt", value: "44-25 (Barcelona 1992)", year: 1992 },
  ],

  variants: ["beach-handball", "wheelchair-handball", "field-handball"],
  relatedSports: ["basketball", "water-polo", "netball"],

  skills: [
    "throwing power and accuracy",
    "jumping and leaping",
    "explosive lateral speed",
    "hand-eye coordination",
    "spatial awareness in traffic",
    "close-quarters ball handling",
  ],
  strategies: [
    { title: "3-3 defence", body: "Three defenders in a line at 6-m, three at 9-m; balanced against outside shooters and pivots." },
    { title: "5-1 defence", body: "Five in the 6-m arc, one advanced at 9-m to disrupt the playmaker — best against skilled centre backs." },
    { title: "6-0 defence", body: "All six defenders on the 6-m line — used against powerful wings and pivots." },
    { title: "Fast break", body: "Immediate outlet pass after a save or turnover to score before the defence resets." },
    { title: "7-vs-6 attack", body: "Replace goalkeeper with 7th outfield player to gain an extra attacker; risks empty-net goals on turnovers." },
  ],

  terminology: [
    { term: "Pivot", meaning: "Line player who plays with back to goal near the 6-m arc, screening defenders." },
    { term: "9-metre line", meaning: "Dashed arc where most free throws are taken; also called the 'free-throw line'." },
    { term: "Fast break", meaning: "Immediate counter-attack after gaining possession before the defence sets up." },
    { term: "Wing shot", meaning: "Acute-angle shot from a wing player, often jumping wide to open the angle." },
    { term: "Hip shot / jump shot", meaning: "Attacking shot released from mid-air after jumping over the 6-m line." },
    { term: "Passive play", meaning: "Referee signal that the attack must shoot within 6 passes." },
    { term: "Sieben-Meter (7-m)", meaning: "Penalty throw from 7 metres — 1v1 vs the goalkeeper." },
    { term: "Body check", meaning: "Blocking an opponent with the trunk of the body (torso) — legal if done with a firm stance." },
    { term: "Time-out (T)", meaning: "60-second team timeout, signalled by the referee via a green card." },
    { term: "Empty net", meaning: "The unguarded net when the goalkeeper is subbed for an extra attacker." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "The three-step rule", body: "Learn to count steps while carrying the ball; bounce to reset the count.", anchor: "basicRules" },
      { title: "Basic pass and catch", body: "Chest pass, bounce pass and one-handed overhead pass." },
      { title: "Standing shot", body: "Set feet, wind back, snap wrist through — practise against a wall." },
      { title: "6-metre discipline", body: "Learn to jump the line without stepping on it." },
    ] },
    { level: "intermediate", steps: [
      { title: "Jump shot", body: "Full three-step approach; jump vertically over the 6-m line and release." },
      { title: "Pivot play", body: "Practise back-to-goal reception, screen setting and quick pivot shots." },
      { title: "Wing shot angles", body: "Move wide, then release cross-body to open the goalkeeper's blind side." },
      { title: "Defensive stance", body: "Feet shoulder-width, low centre of gravity, hands active." },
    ] },
    { level: "advanced", steps: [
      { title: "Reading defensive schemes", body: "Adjust between 6-0, 5-1 and 3-2-1 depending on the attacker's shooting range." },
      { title: "7-vs-6 tactics", body: "Time the goalkeeper substitution and defend the empty-net risk." },
      { title: "Set plays", body: "Screen-and-roll variations with pivot and back-court players." },
    ] },
  ],
  faq: [
    { question: "How is team handball different from 'American handball'?", answer: "American handball is a solo racquet-free wall game (like squash with the hand). Team handball is a full-court, 7-a-side goal-scoring team sport — the Olympic version." },
    { question: "Are shots really that hard?", answer: "Elite men shoot at 100+ km/h (60+ mph) — comparable to a hockey slap-shot." },
    { question: "Where is handball most popular?", answer: "Germany, France, Denmark, Norway, Sweden, Iceland, Spain, Croatia, Serbia, Hungary, Slovenia, Egypt and Qatar." },
    { question: "Can outfield players enter the 6-metre area?", answer: "They may pass through it but not touch the ground inside while playing the ball or attempting to gain positional advantage." },
    { question: "How do overtime and shootouts work?", answer: "Two 5-min extra periods; if still tied, a second set of 5-min periods; if still tied, best-of-5 penalty shots and then sudden death." },
  ],

  wikipediaTitle: "Handball",
  sources: [
    { label: "Wikipedia — Handball", url: "https://en.wikipedia.org/wiki/Handball", publisher: "Wikipedia" },
    { label: "IHF Rules of the Game", url: "https://www.ihf.info/regulations-documents", publisher: "International Handball Federation" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
