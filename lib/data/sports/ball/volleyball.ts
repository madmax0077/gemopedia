import type { Sport } from "@/lib/types";

export const volleyball: Sport = {
  id: "volleyball",
  slug: "volleyball",
  name: "Volleyball",
  officialName: "Indoor Volleyball",
  aliases: ["Six-a-side volleyball", "Indoor volleyball"],
  shortDescription:
    "6-a-side team sport where players use hands and forearms to send a ball over a high net, aiming to ground it on the opposing side within three touches.",
  longDescription:
    "Volleyball is a team sport in which two six-player teams on opposite sides of a high central net use their hands and forearms to keep an inflated ball in the air and, ultimately, ground it in the opposing court. Each team may touch the ball a maximum of three times before returning it, and no single player may touch it twice in succession. Matches are played to the best of five sets; the first four sets are won by the team reaching 25 points first (with a 2-point margin), and a deciding fifth set is played to 15. William G. Morgan invented the game in 1895 at a YMCA in Holyoke, Massachusetts, as a lower-impact alternative to basketball. Volleyball has been part of the Summer Olympics since 1964, and its beach variant since 1996.",

  category: "ball-sports",
  subCategory: "net sport",
  sportType: "team",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "United States (Massachusetts)",
  estimatedOrigin: "1895 (William G. Morgan, YMCA)",

  players: { perTeam: 6, min: 6, max: 6, substitutes: 6, note: "6 on court + up to 6 substitutes; a specialist 'libero' back-row defender wears a distinct jersey and rotates in/out without counting as a substitution." },
  field: {
    surfaceName: "court",
    dimensions: "18 m × 9 m court; net height 2.43 m (men) / 2.24 m (women). Attack line 3 m from the net.",
    description: "Rectangular court split by a taut net across the middle. A 3-metre attack line on each side separates the front court from the back court.",
  },
  equipment: [
    { name: "Volleyball", description: "Leather or synthetic ball, 65-67 cm circumference, 260-280 g." },
    { name: "Net", description: "Mesh net 1 m tall, spanning the width of the court at 2.43 m / 2.24 m." },
    { name: "Antennae", description: "Flexible rods on either side of the net marking the vertical limit of legal ball passage." },
    { name: "Knee pads", description: "Foam-padded pads worn to protect knees during dives and digs." },
    { name: "Volleyball shoes", description: "Non-marking soles designed for lateral cutting and vertical jumping." },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "Best of 5 sets. Sets 1-4 played to 25 points (win by 2); deciding set 5 played to 15 (win by 2).",
    note: "No time limit — sets end when a team reaches the target with a 2-point margin.",
  },
  objective: "Score points by grounding the ball on the opponent's court, forcing an opponent's error, or blocking their attack; win 3 sets to take the match.",
  matchStructure:
    "A rally begins with a serve struck from behind the baseline. Both teams may touch the ball up to three times per side (typically 'pass, set, spike'). The rally ends when the ball hits the floor, goes out of bounds, is faulted, or a team violates the rules. Every rally scores a point ('rally scoring'). After each side-out, the receiving team rotates one position clockwise and a new player serves.",

  basicRules: [
    { title: "Three-touch rule", body: "Each team has a maximum of three contacts to return the ball; a block does not count as one of the three." },
    { title: "No consecutive touches", body: "No single player may touch the ball twice in succession (except a block deflection followed by a play)." },
    { title: "Rotation", body: "After winning back the serve, the receiving team rotates one position clockwise so a new player serves." },
    { title: "The serve", body: "Struck from behind the baseline with hand or arm, over the net into the opposing court. Two-touch serves are illegal; foot-faults over the baseline lose the point." },
    { title: "Net & centre-line faults", body: "Touching the net during a play is a fault; crossing the centre line under the net is illegal (though a foot partially over is allowed)." },
    { title: "Back-row attacks", body: "Back-row players may only attack the ball above the net from behind the 3-metre attack line." },
    { title: "Libero", body: "A defensive specialist who plays only in the back row, may not attack above net height and cannot serve (FIVB rule) or block." },
  ],
  advancedRules: [
    { title: "Double contact on the serve receive", body: "A team's first contact after a serve may be a double-touch (e.g., two-handed dig off the arms and hand) without penalty — but only on the very first contact." },
    { title: "Screening", body: "Server's teammates may not intentionally obstruct the receiver's view of the serve; a fault surrenders the point." },
    { title: "Substitution rules", body: "FIVB allows 6 substitutions per set; NCAA and high school rules differ. Libero rotations are unlimited and separate." },
    { title: "Video challenge", body: "Coaches may challenge ball-in/out, net touches, foot faults etc.; introduced at the top level in 2014." },
  ],
  scoring: {
    summary: "Rally-point scoring — every rally awards a point to the winning side.",
    breakdown: [
      { action: "Ball grounded on opponent's court", points: "1", note: "Includes attacks, tips, and serves." },
      { action: "Opponent hits ball out or into net", points: "1" },
      { action: "Opponent commits a fault (double, lift, net, etc.)", points: "1" },
      { action: "Ace (unreturnable serve)", points: "1", note: "Serve directly wins the point." },
    ],
    winCondition: "First team to win 3 sets wins the match. Sets 1-4 go to 25 (win by 2); the deciding 5th set to 15 (win by 2).",
  },
  penalties: [
    { title: "Yellow card", body: "Warning to a player or coach; no immediate point cost." },
    { title: "Red card", body: "Penalty — awards a point and serve to the opponent." },
    { title: "Expulsion", body: "Yellow + red held together — player leaves for the remainder of the set." },
    { title: "Disqualification", body: "Red + yellow shown separately — player leaves for the rest of the match." },
  ],

  positions: [
    { name: "Setter (S)", role: "Second contact — sets up attackers with accurate overhead passes.", count: 1 },
    { name: "Outside hitter (OH / left-side)", role: "Primary attacker; hits from position 4.", count: 2 },
    { name: "Opposite / right-side (OPP)", role: "Attacks from position 2; often the highest-scoring hitter.", count: 1 },
    { name: "Middle blocker (MB)", role: "Fast attacks from the middle and primary blocking role.", count: 2 },
    { name: "Libero (L)", role: "Back-row defensive specialist in a distinct jersey; can't attack above net height or block.", count: 1 },
  ],
  officiating: {
    officials: ["First referee (on stand at net)", "Second referee (opposite side at net base)", "Scorer", "Two or four line judges"],
    summary: "The first referee has final authority; the second referee manages substitutions, timeouts, and the second line judges. Line judges signal in/out on serves and attacks.",
  },

  governingBodies: [
    { name: "Fédération Internationale de Volleyball", acronym: "FIVB", founded: 1947, headquarters: "Lausanne, Switzerland", website: "https://www.fivb.com" },
    { name: "USA Volleyball", founded: 1928, headquarters: "Colorado Springs, USA", website: "https://usavolleyball.org" },
    { name: "Volleyball Nations League", founded: 2018, headquarters: "Lausanne, Switzerland" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1964, region: "worldwide" },
    { name: "FIVB Volleyball World Championship", frequency: "quadrennial", founded: 1949, region: "worldwide" },
    { name: "FIVB Volleyball Nations League", frequency: "annual", founded: 2018, region: "worldwide" },
    { name: "FIVB World Cup", frequency: "quadrennial", founded: 1965, region: "worldwide" },
    { name: "CEV Champions League", frequency: "annual", founded: 1959, region: "Europe (club)" },
  ],
  countriesPlayed: ["BR", "IT", "PL", "RU", "US", "CN", "JP", "KR", "FR", "RS", "TR", "IR", "AR", "DE", "CU"],
  famousAthletes: [
    "Karch Kiraly",
    "Giba (Gilberto Godoy Filho)",
    "Wilfredo León",
    "Zhu Ting",
    "Kim Yeon-koung",
    "Sergey Tetyukhin",
    "Sheilla Castro",
    "Maja Ognjenović",
    "Bartosz Kurek",
    "Ivan Zaytsev",
  ],
  records: [
    { title: "Most Olympic gold medals (men, team)", holder: "USSR / Russia (men)", value: "4", year: 2012 },
    { title: "Most FIVB World Championships (men)", holder: "USSR / Russia", value: "6", year: 1982 },
    { title: "Most consecutive World Cup wins (women)", holder: "China", value: "5", year: 2019 },
  ],

  variants: ["beach-volleyball", "sitting-volleyball", "snow-volleyball", "footvolley"],
  relatedSports: ["beach-volleyball", "sepak-takraw", "sitting-volleyball", "basketball", "handball"],

  skills: [
    "vertical jump",
    "arm swing power",
    "hand-eye coordination",
    "explosive footwork",
    "quick reaction",
    "spatial awareness",
    "communication",
  ],
  strategies: [
    { title: "5-1 offence", body: "One setter runs the offence from all rotations; used at almost every elite level." },
    { title: "6-2 offence", body: "Two setters, three attackers at all times; more offensive power at cost of coordination." },
    { title: "Reading vs commit block", body: "Blockers either watch the setter to react (reading) or commit to a specific attacker (committing) — used against strong middle attacks." },
    { title: "Serving tactics", body: "Float serves target seams and short zones; jump-topspin serves attack passers with pace." },
  ],

  terminology: [
    { term: "Ace", meaning: "A serve that scores directly without a legal return." },
    { term: "Bump / pass / dig", meaning: "Forearm pass — first contact after a serve or attack." },
    { term: "Set", meaning: "Overhead two-handed pass that positions the ball for an attacker." },
    { term: "Spike / attack / kill", meaning: "Downward hit into the opposing court that scores a point." },
    { term: "Block", meaning: "Jumping at the net to deflect an attack back into the opponent's court." },
    { term: "Rotation", meaning: "The clockwise position change after winning back the serve." },
    { term: "Rally", meaning: "The sequence of play from serve until the ball goes dead." },
    { term: "Side-out", meaning: "The receiving team winning the rally and gaining the serve." },
    { term: "Pancake", meaning: "Emergency defensive save with hand flat on the floor under the ball." },
    { term: "Joust", meaning: "Two opposing players simultaneously pushing the ball above the net." },
    { term: "Quick set", meaning: "Low, fast set (often called a '1' or 'A') to a middle attacker to beat the block." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "The passing platform", body: "Forearms together, thumbs aligned, angled to target.", anchor: "skills" },
      { title: "Overhead setting", body: "Two-handed contact above the forehead with fingers, not palms.", anchor: "terminology" },
      { title: "Underhand serve", body: "Simplest legal serve — palm strike over the net.", anchor: "basicRules" },
      { title: "Court rotation", body: "Learn the six positions and clockwise rotation after a side-out." },
    ] },
    { level: "intermediate", steps: [
      { title: "Approach and spike", body: "Three- or four-step approach with strong arm swing." },
      { title: "Overhead float serve", body: "Contact the ball with a stiff hand, no spin — knuckleball effect." },
      { title: "Blocking basics", body: "Jump timing, penetrating the net plane, seal the block with the attacker's shoulder." },
      { title: "Team defence", body: "Base positions, reading attacker angle, digging techniques." },
    ] },
    { level: "advanced", steps: [
      { title: "Systems (5-1, 6-2)", body: "Understand full team offences and their front/back-row implications." },
      { title: "Jump serve", body: "Toss, approach, and top-spin serve for power." },
      { title: "Reading attackers", body: "Watch shoulder, hip and elbow to anticipate attack direction." },
    ] },
  ],
  faq: [
    { question: "How high is the net in volleyball?", answer: "Standard FIVB heights are 2.43 m (7 ft 11⅝ in) for men and 2.24 m (7 ft 4⅛ in) for women. Junior and senior categories use different heights." },
    { question: "Can a serve touch the net?", answer: "Yes — as of 2001, a serve that clips the net and lands in play is legal (previously called a 'let' and replayed)." },
    { question: "What does the libero do?", answer: "The libero is a back-row defensive specialist who wears a different-coloured jersey, cannot attack above the net or block, and (in FIVB rules) cannot serve." },
    { question: "How long is a match?", answer: "There is no fixed time — matches typically last 60-120 minutes depending on set length. A 5-set match at the elite level can run over 2½ hours." },
    { question: "Where is volleyball most popular?", answer: "Brazil, Italy, Poland, Russia, USA, China, Japan, Serbia, Iran, and Turkey have the strongest professional leagues and national teams." },
  ],

  wikipediaTitle: "Volleyball",
  sources: [
    { label: "Wikipedia — Volleyball", url: "https://en.wikipedia.org/wiki/Volleyball", publisher: "Wikipedia" },
    { label: "FIVB Official Rulebook", url: "https://www.fivb.com/en/volleyball/thegame_glossary/officialrulesofthegames", publisher: "Fédération Internationale de Volleyball" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
