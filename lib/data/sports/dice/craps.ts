import type { Sport } from "@/lib/types";

export const craps: Sport = {
  id: "craps",
  slug: "craps",
  name: "Craps",
  officialName: "Craps",
  aliases: ["Bank Craps", "Casino Craps"],
  shortDescription:
    "Fast-paced dice game in which players wager on the outcome of two dice rolled across a specially marked table, with dozens of betting options ranging from safe pass line bets to long-shot 'hard-way' proposition bets.",
  longDescription:
    "Craps is a dice game where players make wagers on the outcome of the roll (or series of rolls) of a pair of dice. Bank Craps, the version played in casinos worldwide, evolved in early 20th-century USA from the older 'Hazard'. The game centres on the 'shooter' who rolls a pair of dice against a wall on a long felt table. On the initial 'come-out roll,' a 7 or 11 is a win for pass-line bettors; 2, 3, or 12 is 'craps' — a loss. Any other total (4, 5, 6, 8, 9, 10) becomes the 'point,' and the shooter continues rolling until they either hit the point again (pass wins) or roll a 7 (pass loses). Craps has some of the best odds in a casino (0.6% house edge on 'don't pass with 5x odds'), plus dozens of side bets. It's culturally iconic — the loud cheering, ritualised betting, and 'hot table' folklore have made it a Vegas centrepiece.",

  category: "casino-games",
  subCategory: "dice / casino",
  sportType: "mixed",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "USA (developed from British Hazard in early 20th century)",
  estimatedOrigin: "Bank Craps codified by John H. Winn c. 1907 in New Orleans / New York; evolved from 12th-century Arabic 'Al-Zar' via English Hazard",

  players: { min: 1, max: 20, note: "Casino craps supports up to ~20 players around the table simultaneously; one shooter at a time." },
  field: {
    surfaceName: "craps table",
    dimensions: "3.6 m long × 1.4 m wide (12 ft × 4.5 ft), padded felt.",
    description: "Rectangular felt table with printed layout: pass/don't pass lines, come/don't come, place numbers, field, proposition (centre), and hardways.",
  },
  equipment: [
    { name: "Pair of dice", description: "Two precision 19mm casino dice, matched serial numbers, transparent." },
    { name: "Chips", description: "Casino chips of various denominations." },
    { name: "Puck", description: "Marker showing whether table is 'ON' (point established) or 'OFF' (come-out roll)." },
    { name: "Stickman's stick", description: "Long curved stick used by the dealer to move dice." },
  ],
  duration: {
    approximateMinutes: 5,
    structure: "Each 'roll cycle' lasts 1-15 minutes depending on how many rolls before a 7-out; a session can be hours.",
    note: "Longest recorded roll: Patricia Demauro in 2009 held the dice for 154 rolls (4 hours 18 minutes) without a 7-out at Borgata, Atlantic City.",
  },
  objective: "Wager profitably on the outcome of dice rolls — either as a 'right' bettor (pass line, come) or 'wrong' bettor (don't pass, don't come).",
  matchStructure:
    "A 'come-out roll' starts the game. Pass line bets win on 7 or 11, lose on 2/3/12. Any other roll (4, 5, 6, 8, 9, 10) sets the 'point.' The shooter keeps rolling until they roll the point again (pass wins) or roll a 7 (pass loses, dice pass to next shooter). Between come-out rolls, players can make dozens of additional bets: come, don't come, place, field, hardway, big 6/8, hop bets, horn bets, etc. Each has its own payout and house edge.",

  basicRules: [
    { title: "Come-out roll", body: "Puck is OFF. Pass line wins on 7 or 11; loses on 2, 3, 12. Any other total (4, 5, 6, 8, 9, 10) becomes the 'point.'" },
    { title: "Point established", body: "Puck flipped to ON. Shooter rolls again — hitting the point wins pass line; rolling 7 loses (7-out)." },
    { title: "Dice pass", body: "After a 7-out, dice pass clockwise to the next shooter." },
    { title: "Two dice must hit the back wall", body: "Both dice must bounce off the padded back wall for the roll to count." },
    { title: "Bet placement", body: "Different bets are placed by the player directly (self-service) or handed to the dealer to place." },
  ],
  advancedRules: [
    { title: "Free odds bet", body: "After a point is established, you can back your pass line bet with 'true odds' — paying at true probability (0% house edge). Casinos typically allow 3x-5x-10x odds; some (like Sam's Town) offer 100x." },
    { title: "Come and don't come bets", body: "Behave like pass/don't pass but can be placed anytime after the come-out." },
    { title: "Hardway bets", body: "Bet a specific number will be rolled as a pair before it's rolled 'easy' or a 7 appears. Hard 6/8 pays 9:1; hard 4/10 pays 7:1." },
    { title: "Proposition bets (one-roll)", body: "Any Seven (4:1, 16.67% house edge), Any Craps (7:1, 11.11%), Yo (11) 15:1 (11.11%). All are sucker bets." },
    { title: "Big Red / Any 7 forbidden", body: "By tradition, don't say 'seven' at the table — it's considered bad luck when a shooter is rolling." },
  ],
  scoring: {
    summary: "Wins pay based on the bet placed and outcome; expressed as odds (e.g., 2:1) and house edge percentage.",
    breakdown: [
      { action: "Pass line", points: "1:1 payout; house edge 1.41%" },
      { action: "Don't pass", points: "1:1 payout; house edge 1.36%" },
      { action: "Free odds (behind pass, 3x-5x-10x)", points: "True odds; 0% house edge on the odds portion" },
      { action: "Place 6 or 8", points: "7:6; house edge 1.52%" },
      { action: "Hardway 6 or 8", points: "9:1; house edge 9.09%" },
      { action: "Any Seven", points: "4:1; house edge 16.67%", note: "Worst bet on the table." },
      { action: "Field bet", points: "1:1 (2:1 for 2, 3:1 for 12); house edge 5.56%" },
    ],
    winCondition: "Cumulative bankroll wins/losses over your session; there is no single 'game' to win in casino craps.",
  },

  officiating: {
    officials: ["Boxman", "Stickman", "Two Dealers", "Floor Supervisor"],
    summary: "Four casino staff manage a craps table: the Boxman (banker), Stickman (moves dice, announces bets), and two Dealers (handle bets on each end).",
  },
  governingBodies: [
    { name: "Nevada Gaming Control Board", founded: 1955, headquarters: "Carson City, USA", website: "https://gaming.nv.gov/" },
    { name: "New Jersey Division of Gaming Enforcement", founded: 1977, headquarters: "Trenton, USA", website: "https://www.nj.gov/oag/ge/" },
    { name: "UK Gambling Commission", founded: 2005, headquarters: "Birmingham, UK", website: "https://www.gamblingcommission.gov.uk/" },
  ],
  majorCompetitions: [
    { name: "World Series of Craps (Las Vegas)", frequency: "annual", founded: 2013, region: "USA (Las Vegas)" },
    { name: "Golden Arm Award (shooters holding dice 60+ minutes)", frequency: "ongoing", founded: 1989, region: "worldwide" },
  ],
  countriesPlayed: ["US", "GB", "MC", "AU", "MO", "SG", "PH", "CA", "DE", "FR"],
  famousAthletes: [
    "Patricia Demauro — 154-roll record (4h 18min), May 2009, Borgata Atlantic City",
    "The Captain (author Frank Scoblete) — 148-roll roll, 2005, Atlantic City",
    "Stanley Fujitake — 118-roll roll, 1989, California Hotel Las Vegas (first Golden Arm)",
  ],
  records: [
    { title: "Longest recorded craps roll", holder: "Patricia Demauro", value: "154 rolls, 4h 18min, Borgata Atlantic City", year: 2009 },
    { title: "Previous record holder", holder: "The Captain (Frank Scoblete)", value: "148 rolls, Atlantic City", year: 2005 },
    { title: "First 'Golden Arm'", holder: "Stanley Fujitake", value: "118 rolls, California Hotel Las Vegas", year: 1989 },
  ],

  variants: ["street-craps", "hazard", "high-point-craps", "new-york-craps", "simplified-craps"],
  relatedSports: ["hazard", "yahtzee", "sic-bo", "farkle"],

  skills: [
    "probability & odds calculation",
    "bankroll management",
    "reading table etiquette",
    "quick mental math for payouts",
    "self-control (avoiding sucker bets)",
  ],
  strategies: [
    { title: "Pass line + free odds", body: "Take max free odds behind pass line — this is the lowest overall house edge play." },
    { title: "Avoid proposition bets", body: "Any Seven (16.67%), Horn (12.5%), and Hardway (9-11%) have terrible odds; stick to pass/come + odds." },
    { title: "Don't pass 'wrong' betting", body: "Don't pass with odds has the LOWEST house edge but is unpopular — you're betting against the shooter." },
    { title: "Fixed loss limit", body: "Set a session bankroll and quit at 50% loss — craps variance is severe." },
  ],

  terminology: [
    { term: "Shooter", meaning: "Player currently rolling the dice." },
    { term: "Come-out roll", meaning: "First roll of a new betting cycle." },
    { term: "Point", meaning: "Number established on come-out (4, 5, 6, 8, 9, 10) that the shooter tries to repeat before rolling 7." },
    { term: "Seven-out", meaning: "Rolling 7 after a point is established — ends the shooter's turn; pass line loses." },
    { term: "Pass line", meaning: "The most basic bet: wins if shooter makes the point or rolls 7/11 on come-out." },
    { term: "Don't pass", meaning: "Opposite of pass; wins if shooter 7-outs or rolls 2/3 on come-out (12 pushes)." },
    { term: "Free odds", meaning: "Additional bet behind pass/don't pass paid at true odds — 0% house edge." },
    { term: "Craps", meaning: "Rolling 2, 3, or 12 on come-out — loses for pass line." },
    { term: "Yo (Yo-leven)", meaning: "Rolling 11; also a common one-roll proposition bet." },
    { term: "Hardway", meaning: "A pair — e.g., 4-4 for hard 8. Betting the number comes as a pair before an 'easy' way or a 7." },
    { term: "Snake eyes", meaning: "Rolling 1-1 (a 2)." },
    { term: "Boxcars", meaning: "Rolling 6-6 (a 12)." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn pass line", body: "Bet pass line; win on 7/11 come-out, lose on 2/3/12, otherwise chase the point." },
      { title: "Understand the puck", body: "OFF = come-out roll; ON = point established." },
      { title: "Take free odds", body: "Always back pass line with maximum free odds — it's the best bet in the casino." },
      { title: "Table etiquette", body: "Don't touch other players' bets; don't say 'seven' during a roll; tip the dealers." },
    ] },
    { level: "intermediate", steps: [
      { title: "Come bets", body: "Once you're comfortable with pass, add come bets to have multiple points working." },
      { title: "Place vs buy bets", body: "Place bets on 6/8 offer good value (1.52%); avoid buy bets under $25." },
      { title: "Bankroll discipline", body: "Set win/loss limits; a normal session bankroll is 20-30× your base bet." },
      { title: "Avoid all propositions", body: "Never place hardway, horn, any-seven, or field bets on impulse." },
    ] },
    { level: "advanced", steps: [
      { title: "Dice control (controversial)", body: "Some players claim 'setting' and 'controlled shooting' can influence outcomes — evidence is very weak, but a subculture exists." },
      { title: "5-Count / conservative strategies", body: "Wait 5 rolls before betting on a shooter to avoid short rolls." },
      { title: "Table game selection", body: "Play at casinos offering 10x/20x/100x odds (Cromwell, Sam's Town) for lowest edge." },
    ] },
  ],
  faq: [
    { question: "What are the best odds in craps?", answer: "Pass line (1.41%) or don't pass (1.36%) — both improved dramatically by taking free odds (0% edge on odds portion). At 100x odds, overall edge drops to about 0.02%." },
    { question: "Why don't people say 'seven'?", answer: "It's a superstition — rolling a 7 after a point is established (a 'seven-out') ends the shooter's turn and loses for pass bettors. Saying the word is thought to jinx the roll." },
    { question: "What is 'craps' as a roll?", answer: "Rolling 2, 3, or 12 on the come-out roll — pass line loses; don't pass wins on 2 or 3 (pushes on 12)." },
    { question: "How do free odds work?", answer: "After a point is set, you can bet an additional multiple (3x/5x/10x/etc.) behind your pass line bet. The additional bet pays true odds — meaning zero house edge on that portion." },
    { question: "How long can one shooter roll?", answer: "There's no time limit. The record is Patricia Demauro at Borgata Atlantic City in 2009 — 154 rolls over 4 hours 18 minutes without rolling a 7." },
  ],

  wikipediaTitle: "Craps",
  sources: [
    { label: "Wikipedia — Craps", url: "https://en.wikipedia.org/wiki/Craps", publisher: "Wikipedia" },
    { label: "Nevada Gaming Control Board", url: "https://gaming.nv.gov/", publisher: "State of Nevada" },
    { label: "Wizard of Odds — Craps", url: "https://wizardofodds.com/games/craps/basics/", publisher: "Wizard of Odds" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
