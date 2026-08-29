import type { Sport } from "@/lib/types";

export const redRover: Sport = {
  id: "red-rover",
  slug: "red-rover",
  name: "Red Rover",
  officialName: "Red Rover",
  aliases: ["British Bulldog (Australia — related variant)", "Forcing the City Gates (China — related)"],
  shortDescription:
    "Two teams face off holding hands in linked lines — 'Red Rover, Red Rover, send [name] on over!' — the summoned player charges the opposing line trying to break through.",
  longDescription:
    "Red Rover is a playground team game especially popular across the English-speaking world since the mid-19th century. Two teams line up facing each other about 10 metres apart, each holding hands to form an unbroken chain. One team calls 'Red Rover, Red Rover, send [player's name] on over!' The named player from the opposing team charges the calling team's line, aiming to break through any pair of linked hands. If they break through, they take one player back to their team. If they fail (the line holds), they join the calling team. The game continues until one team has all the players. Red Rover has been banned in many schools since the 1990s due to injury risk — dislocated shoulders, broken arms, facial injuries — and is a classic case-study in playground-game risk assessment. It survives in family gatherings, summer camps, and organized team-building settings with padded modifications.",

  category: "playground-games",
  subCategory: "team charge / line-breaking game",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "summer",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "GB",
  regionOfOrigin: "British Isles; spread across Anglosphere (USA, Canada, Australia, New Zealand)",
  estimatedOrigin: "Documented from mid-19th century Britain; spread with British Empire to colonies; American variant popular from 1900",

  players: { min: 8, max: 30, note: "Best with 12–20 players; too few = quick game, too many = unwieldy lines." },
  field: {
    surfaceName: "Grass field, playground, gym floor",
    dimensions: "Two lines ~10 m apart; line length depends on team size (roughly 1 m per player)",
    description: "Ideally grass or soft surface — players charge at full sprint and collide with linked hands. Historically played on any open area; modern safety guidance recommends grass or padded gym floor only.",
  },
  equipment: [
    { name: "None required", description: "Just players, hands, and a bounded field. Some safer modern variants use pool noodles or padded barriers instead of hands." },
    { name: "Team markers (optional)", description: "Coloured bibs or armbands help distinguish teams in large groups." },
  ],
  duration: {
    approximateMinutes: 15,
    structure: "Continuous — game ends when one team has all the players (usually 15–30 minutes with 10-a-side).",
  },
  objective:
    "Break through the opposing team's linked-hand line when your name is called (or hold your line unbroken when the enemy charges). Last team with players standing wins.",
  matchStructure:
    "Two teams (~equal size) line up facing each other 10 m apart, holding hands in linked chains. Team A calls 'Red Rover, Red Rover, send [Bob] on over!'. Bob charges from Team B toward Team A's line at full speed. If Bob breaks through any pair of clasped hands, he picks one Team A player to take back to Team B. If Bob fails to break through, he joins Team A. Teams alternate calls. Game ends when one team has zero players.",

  basicRules: [
    { title: "Two teams in facing lines", body: "Teams stand ~10 m apart in two straight lines. All players in each team hold hands tightly with neighbours — no gaps." },
    { title: "Call the challenge", body: "One team chants: 'Red Rover, Red Rover, send [player's first name] on over!' — named player must run." },
    { title: "Charge the line", body: "Named player sprints across the gap and tries to break through any pair of clasped hands on the opposing line." },
    { title: "Break through = take a captive", body: "Successful break: charger picks one player from the broken team to take back to their own side." },
    { title: "Fail to break = join enemy team", body: "Line held: charger stays with the calling team." },
    { title: "Teams alternate calling", body: "After each charge, the other team calls a new name. Alternation ensures fairness." },
    { title: "Game ends when a team is empty", body: "Last team with players standing wins. Usually 15–30 minutes with 10-a-side start." },
  ],
  advancedRules: [
    { title: "Two-hand-grip rule", body: "Players must grip with both hands (interlocked fingers or wrist-grip), not just one — makes the line harder to break, safer than a single-finger clasp." },
    { title: "Charge angle rule", body: "Some rules require the charger to run at the visible gap between two specific players — no head-first tackling one player." },
    { title: "No arm-block", body: "Defenders cannot raise their arms to clothesline the charger — hands must stay at natural height." },
    { title: "Padded variant (modern camps)", body: "Instead of linked hands, defenders hold pool noodles or padded barriers together. Charger tries to bull through — much safer." },
    { title: "Multiple simultaneous chargers", body: "Some rules allow calling multiple names ('send Sarah AND Tom!') for team dynamics." },
    { title: "Chinese variant 'Forcing the City Gates'", body: "Similar mechanic in Chinese tradition — 拉城门 — two lines of children with gate-shaped hands." },
  ],
  scoring: {
    summary: "Team-based headcount. Each successful break transfers 1 player; each failed break also transfers 1 player. Team that empties opponent wins.",
    winCondition: "First team to reduce opponent to zero players wins.",
    breakdown: [
      { action: "Charger breaks through line", points: "+1 player transfer to charger's team" },
      { action: "Line holds against charge", points: "+1 player transfer to defender's team (the charger)" },
      { action: "Opposing team reaches zero", points: "Game over — calling team wins" },
    ],
  },

  positions: [
    { name: "Line defender", role: "Hold hands with neighbours; brace and don't break the chain." },
    { name: "Charger", role: "Sprint across the gap when named; attempt to break through the enemy line." },
    { name: "Caller (rotating)", role: "Team member who chants the 'Red Rover' call and names the target." },
    { name: "Adult supervisor", role: "Monitors for dangerous tackles + calls illegal charges; ideally required in modern settings." },
  ],
  officiating: {
    officials: ["Adult supervisor (PE class, camp)", "None in casual friend play"],
    summary: "No formal officiation. Given injury risk, adult supervision strongly recommended — especially with children under 10 or mixed ages/sizes.",
  },

  governingBodies: [
    { name: "No official governing body — traditional folk game", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "No formal competitions — recreational game", frequency: "n/a", founded: 0, region: "n/a" },
    { name: "Youth camps + PE (informal)", frequency: "seasonal", founded: 1900, region: "Anglosphere" },
  ],
  countriesPlayed: ["GB", "US", "CA", "AU", "NZ", "IE", "ZA"],
  famousAthletes: [
    "No professional players — recreational game",
    "Banned or restricted in many US + UK schools since 1990s due to injury statistics",
  ],
  records: [
    { title: "First documented mention", holder: "British children's game literature", value: "Mid-19th-century England", year: 1855 },
    { title: "Notable school bans", holder: "Various US school districts", value: "Removed from PE curricula in 1990s–2010s injury-liability sweep", year: 2000 },
    { title: "Australian rules variant name", holder: "Australian playground tradition", value: "Called 'British Bulldog' in Australia (related but distinct game)", year: 1900 },
  ],

  variants: ["red-rover-classic", "british-bulldog-australian", "forcing-the-city-gates-chinese", "padded-pool-noodle-variant"],
  relatedSports: ["british-bulldog", "capture-the-flag", "tag", "tug-of-war", "manhunt"],

  skills: [
    "sprint speed + acceleration",
    "collision awareness + safe body position",
    "grip strength (for defenders)",
    "teamwork + line discipline",
    "risk assessment (choosing which gap to charge)",
  ],
  strategies: [
    { title: "For chargers — pick the weakest grip", body: "Look at the opposing line — which two players have loose or awkward grips? Charge that pair, not the strongest." },
    { title: "For chargers — lower centre of gravity", body: "Charge with knees bent, shoulders low, and split the hands from below. Higher head charges break arms more easily." },
    { title: "For defenders — brace + interlock", body: "Interlock fingers or grip wrists; brace against a nearby anchor player (large / strong)." },
    { title: "For defenders — anticipate the target", body: "Watch the charger's eyes — they'll telegraph which gap they're aiming for. Reinforce that pair a half-second before impact." },
    { title: "For the team — call weakest opponents", body: "Strategy target: call the smallest/slowest players from the enemy team; they're least likely to break through when they run." },
    { title: "Positioning strong players at gap ends", body: "Anchor the strongest players at the ends of the line — the natural weak points where chargers aim for angle-in breaks." },
  ],

  terminology: [
    { term: "Red Rover", meaning: "The traditional call — origin obscure; possibly nautical (a 'rover' was a pirate/wanderer)." },
    { term: "Charge", meaning: "The sprint from one line to the opposing line." },
    { term: "Break through", meaning: "Successfully splitting a pair of clasped hands with body force." },
    { term: "Anchor", meaning: "The largest/strongest player positioned at line ends or key spots." },
    { term: "British Bulldog", meaning: "Related but distinct game — one player in middle vs. running crowd; called Red Rover in Australia." },
    { term: "Forcing the City Gates", meaning: "Chinese equivalent — 拉城门 — same mechanic in traditional Chinese playground." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play with age-matched groups", body: "Never mix wildly different sizes — a 12-year-old charging a 6-year-old's line = injury. Age brackets ±2 years." },
        { title: "Start with pool-noodle variant", body: "Modern safer version — defenders hold pool noodles instead of linking hands. Same fun, no dislocations." },
        { title: "Teach safe collision technique", body: "Charge with body low, shoulder down, hit the gap not the person; defenders brace, don't raise arms." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Adult team-building version", body: "Corporate team-building companies run padded Red Rover as an icebreaker; great for adult play." },
        { title: "Strategic full-strength play", body: "With mature athletic players + safety awareness + adult supervision: play the traditional linked-hands version." },
        { title: "Coach youth versions", body: "PE teachers + camp counsellors: design age-appropriate variants that keep the fun while managing risk." },
      ],
    },
  ],

  faq: [
    { question: "Why is Red Rover banned in some schools?", answer: "Injury rate. Full-speed collision of a running child with the clasped hands of two others causes dislocated shoulders, broken arms, chipped teeth, and facial injuries. Many US and UK school districts banned it from PE in the 1990s–2000s following liability concerns. It survives in family, camp, and after-school settings — often in safer padded variants." },
    { question: "What's the difference between Red Rover and British Bulldog?", answer: "Red Rover: two teams in linked-hand lines; named charger tries to break line. British Bulldog: one or two 'bulldogs' in the middle try to tag runners crossing between two safe zones. They're often confused (especially in Australia where 'British Bulldog' can refer to both). Both are line-breaking games with injury reputations." },
    { question: "How many players do you need?", answer: "Minimum 8 (4 per team); ideal 12–20 (6–10 per team); maximum ~30. Too few and the game ends in 5 minutes; too many and line management becomes chaotic. Sweet spot for a school class or camp cabin is 15–20." },
    { question: "Is there a safer version?", answer: "Yes — the 'pool noodle' variant, where defenders hold pool noodles or padded barriers between them instead of clasping hands, preserves the fun of charging + breaking through while eliminating most injury risk. Popular at modern summer camps and adult team-building." },
    { question: "Where does the name 'Red Rover' come from?", answer: "Origin uncertain. Some sources suggest nautical roots ('rover' = pirate/wanderer; 'red' = fierce). Others cite an 1840s British children's rhyme with the phrase. The exact meaning has been lost — but the alliterative chant made it memorable and durable." },
  ],

  wikipediaTitle: "Red rover",
  sources: [
    { label: "Wikipedia — Red rover", url: "https://en.wikipedia.org/wiki/Red_rover", publisher: "Wikipedia" },
    { label: "Iona and Peter Opie — 'Children's Games in Street and Playground' (1969)", publisher: "Oxford University Press" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
