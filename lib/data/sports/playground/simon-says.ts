import type { Sport } from "@/lib/types";

export const simonSays: Sport = {
  id: "simon-says",
  slug: "simon-says",
  name: "Simon Says",
  officialName: "Simon Says",
  aliases: ["Jacques a dit (French)", "O rei manda (Portuguese)"],
  shortDescription:
    "Universal children's group game — leader ('Simon') gives commands prefixed with 'Simon says' which players must follow; commands without 'Simon says' should be ignored. Players caught following non-Simon commands are eliminated; last player standing wins.",
  longDescription:
    "Simon Says is a universal children's group game played worldwide, likely dating to Roman times as 'Cicero dicit fac hoc' ('Cicero says do this'), evolving through the Middle Ages. In English, 'Simon Says' likely refers to Simon de Montfort, 13th-century English earl. Now standard in schools, parties, camps, PE classes across every country. 3+ players (best with 6-30 kids). One player is 'Simon' (leader); others are followers. Simon calls out commands like 'Simon says touch your toes' or 'Simon says jump' — players MUST follow. Alternatively, Simon may give commands WITHOUT the 'Simon says' prefix (e.g. just 'jump!') — players must NOT follow. Any player who follows a non-Simon command (or fails to follow a Simon-Says command) is OUT. Last player remaining becomes next Simon (or wins). Simon's strategy: mix genuine Simon Says commands with unprefixed trick commands, especially rapid-fire alternation to catch players. Skills: listening, quick reaction, self-control (not reacting to first word), physical coordination. Educational value — teaches following directions + listening carefully to instructions. Universal in every culture: Jacques a dit (French), Simon dice (Spanish), O rei manda (Portuguese, 'the king commands'), Kōmori (Japanese), etc. Estimated 500+ million people played Simon Says at some point in childhood.",
  category: "playground-games", subCategory: "listening / following-directions",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false, season: "year-round", era: "ancient", popularity: "global",
  countryOfOrigin: "Global (uncertain origins)", regionOfOrigin: "Ancient — Roman 'Cicero dicit fac hoc'; English 'Simon Says' likely from Simon de Montfort (13th c.)",
  estimatedOrigin: "Ancient Roman roots ('Cicero dicit fac hoc'); English 'Simon Says' from 13th-century Simon de Montfort tradition",
  players: { min: 3, max: 100, note: "Best 6-30 kids for classroom or party; can play with 3+ or up to 100+ in large group. One Simon + all others as followers." },
  field: {
    surfaceName: "any open space",
    dimensions: "Requires space for players to move + perform actions. Classroom, gym, playground, backyard, park.",
    description: "Any indoor/outdoor space with enough room for group to stand + move safely. Simon typically stands facing group so all can see + hear.",
  },
  equipment: [
    { name: "None required", description: "Zero equipment — voice only. Universal accessibility." },
    { name: "Optional props", description: "Sometimes uses items like scarves or balls for advanced variants." },
    { name: "Microphone (large groups)", description: "For amplifying Simon's voice in large gatherings, camps." },
  ],
  duration: {
    approximateMinutes: 10,
    structure: "Casual games 5-15 minutes; tournament rounds 20-30 min; can be played briefly (2-3 min) as attention-grabber activity.",
  },
  objective: "Follow only commands prefixed with 'Simon says' — ignore commands without prefix. Last player remaining wins.",
  matchStructure: "One player is Simon. Simon calls actions: 'Simon says [action]' MUST be followed; unprefixed actions must NOT be followed. Players failing to follow Simon-Says commands OR following non-Simon commands are eliminated. Continue until one player remains — that player wins + becomes next Simon.",
  basicRules: [
    { title: "Simon gives commands", body: "One player (usually adult or chosen leader) is Simon; gives verbal instructions to group." },
    { title: "'Simon says X' = do X", body: "Any command PREFIXED with 'Simon says' must be immediately followed by all players." },
    { title: "Just 'X' without prefix = do NOT do X", body: "Commands without 'Simon says' should be IGNORED — following them = eliminated." },
    { title: "Eliminated players sit out", body: "Player who follows non-Simon command OR fails Simon-Says command = out; sits or steps aside until game ends." },
    { title: "Last player wins", body: "Continue until only one player remains — that player wins the round." },
    { title: "Winner becomes next Simon", body: "Winner takes over as Simon for the next round; encourages diverse leadership + participation." },
  ],
  advancedRules: [
    { title: "Contradiction traps", body: "Simon says: 'Simon says raise your right hand!' then immediately 'Put it down!' — must keep hand raised (no Simon-says on 'put down')." },
    { title: "Rapid alternation", body: "Fast-paced 'Simon says jump! Sit down! Simon says clap! Turn around!' — tricks players into automatic response." },
    { title: "Non-action + question tricks", body: "'What's your name?' isn't Simon-Says + isn't an action; players sometimes trick themselves by answering." },
    { title: "Repeat commands acceptable", body: "'Simon says jump, jump, jump' — must jump; different from 'Simon says jump, jump' (all continues as Simon Says)." },
    { title: "Physical vs mental commands", body: "Advanced: 'Simon says think about pizza' — mental commands harder to verify; skip these typically." },
    { title: "Stop rule", body: "Some variants: unless 'Simon says stop', players continue previous action indefinitely; adds physical challenge." },
    { title: "Multi-Simon", body: "Rare variant: 2 Simons giving commands simultaneously; must follow only when BOTH say 'Simon says'." },
    { title: "Elimination replay", body: "Some casual versions: eliminated players do funny punishment task; not permanent — rejoin next round." },
  ],
  scoring: {
    summary: "No points — elimination-based. Last player remaining wins.",
    breakdown: [
      { action: "Follow Simon-Says command correctly", points: "Stay in game" },
      { action: "Follow non-Simon command (trick)", points: "Eliminated" },
      { action: "Fail to follow Simon-Says command", points: "Eliminated" },
      { action: "Last player remaining", points: "WIN — become next Simon" },
    ],
    winCondition: "Be the last player following commands correctly.",
  },
  officiating: {
    officials: ["Simon (leader) is de facto referee", "Adult supervisor (schools/camps)", "Peer judges (larger groups)"],
    summary: "Simon is judge + player; can be biased if not adult. Adult supervisors ensure fair play in schools/camps. Peer consensus decides borderline cases in casual play.",
  },
  governingBodies: [
    { name: "No formal governing body — universal folk game", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "No formal tournaments — pure children's + party game", frequency: "n/a", founded: 0, region: "n/a" },
    { name: "Simon Says Marathon Records (Guinness attempts, informal)", frequency: "occasional", founded: 2000, region: "worldwide (school events)" },
  ],
  countriesPlayed: ["Global (all countries)"],
  famousAthletes: [
    "No named professional players — universal children's game",
    "Various TV hosts + entertainers who use Simon Says in interactive segments (kids' shows worldwide)",
  ],
  records: [
    { title: "Estimated global players (ever)", holder: "worldwide childhood tradition", value: "5+ billion (nearly everyone globally plays at some point in childhood)", year: 2020 },
    { title: "Guinness record — largest Simon Says game", holder: "Various school + festival events", value: "10,000+ participants (large festivals + charity events)", year: 2015 },
    { title: "Longest continuous Simon Says session", holder: "Various charity + attention-testing events", value: "8+ hours (rare marathon events)", year: 2015 },
  ],
  variants: ["classic-Simon-Says-standard-elimination", "Jacques-a-dit-French-version", "Simon-dice-Spanish-version", "Kōmori-Japanese-version", "O-rei-manda-Portuguese-The-King-Commands", "Physical-Simon-Says-exercise-focused", "Educational-Simon-Says-lesson-integrated", "Charity-Marathon-Simon-Says-Guinness-attempts", "Adult-birthday-party-Simon-Says", "Multi-Simon-2-leaders-both-must-say"],
  relatedSports: ["follow-the-leader", "hot-potato", "red-light-green-light", "musical-chairs", "duck-duck-goose"],
  skills: ["active listening", "impulse control (not automatic-following)", "quick reaction time", "concentration + attention", "physical coordination", "leadership (as Simon)"],
  strategies: [
    { title: "For players — listen for prefix always", body: "Wait for full 'Simon says' before acting; automatic response = elimination." },
    { title: "For players — pause briefly", body: "Slight delay confirming prefix; sacrifice speed for accuracy." },
    { title: "For Simon — rapid alternation", body: "Fast pace catches automatic responders; alternate Simon-Says + non-Simon commands quickly." },
    { title: "For Simon — physical contradictions", body: "'Simon says raise right hand; put it down' — makes players think + resist automatic response." },
    { title: "For Simon — vary types", body: "Mix physical actions (jump, clap) with facial (smile, blink) with vocal (say your name) commands." },
    { title: "For Simon — read the room", body: "Adjust pace + difficulty to player age + attention span; kids respond to enthusiasm." },
  ],
  terminology: [
    { term: "Simon", meaning: "Player who is the leader giving commands." },
    { term: "Simon says", meaning: "Command prefix — actions must be followed." },
    { term: "Elimination", meaning: "Player fails command + must sit out." },
    { term: "Trick command", meaning: "Command without 'Simon says' — players who follow it are out." },
    { term: "Follow the leader", meaning: "Related game where all follow leader's actions (no elimination version)." },
    { term: "Command", meaning: "Instruction from Simon (with or without prefix)." },
    { term: "Jacques a dit", meaning: "French version — 'Jacques said'." },
    { term: "Simon dice", meaning: "Spanish version — 'Simon says'." },
    { term: "O rei manda", meaning: "Portuguese version — 'The king commands'." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play at home with family", body: "Rules explained in 30 seconds; anyone age 3+ can play. Parents Simon for young kids." },
      { title: "Try in school PE class", body: "Universal PE/preschool activity; teachers use for calm-down or attention." },
    ] },
    { level: "intermediate", steps: [
      { title: "Party host role — be a good Simon", body: "Mix pace + difficulty; keep engagement + fun without being too tricky for age group." },
      { title: "Advanced variants (contradictions, rapid-fire)", body: "For older kids + adult parties; test focus + reaction time." },
    ] },
    { level: "advanced", steps: [
      { title: "Corporate ice-breaker", body: "Use as team-building or focus-testing activity in workplace training + retreats." },
      { title: "Coach kids to be Simon", body: "Rotate Simon role to build public-speaking + leadership confidence in children." },
    ] },
  ],
  faq: [
    { question: "How do you play Simon Says?", answer: "One player is Simon (leader); others are followers. Simon gives verbal commands like 'Simon says touch your toes' — players MUST follow. If Simon says just 'touch your toes' (without prefix), players must NOT follow. Any player who follows a non-Simon command OR fails to follow a Simon-Says command is ELIMINATED (sits out). Continue until one player remains. Simple + universal children's + party game requiring only voice + open space." },
    { question: "Where does Simon Says come from?", answer: "Ancient origins uncertain. Roman version 'Cicero dicit fac hoc' ('Cicero says do this') existed in Latin. Medieval versions in various European languages. English name 'Simon Says' likely refers to Simon de Montfort (1208-1265), Earl of Leicester and de facto ruler of England 1264-65 — his commands were considered law during his brief regency. Alternative theory: Simon Magus (biblical character). Regardless of origin, game is now universal in every country under local names: Jacques a dit (France), Simon dice (Spain), O rei manda (Portugal, 'the king commands'), etc." },
    { question: "What ages can play Simon Says?", answer: "Ages 3-adult. Very young kids (3-5) need simple commands + slow pace; understanding 'Simon says' prefix rule takes practice. Ages 6-10: sweet spot — kids fully understand + enjoy trick commands. Ages 11-adult: enjoy as party game with rapid-fire alternation + physical challenges. Adults use for corporate ice-breakers + team building. Universal — every culture has version of this game played from preschool through adult parties. Elderly + disabled players can participate (Simon can adjust actions to abilities)." },
    { question: "How do you win Simon Says?", answer: "Two paths: (1) BE THE LAST PLAYER REMAINING — listen carefully for 'Simon says' prefix + resist automatic response to unprefixed commands. Skills: attention + impulse control + quick reactions. (2) BE SIMON + trick players — creative + varied commands + rapid alternation catches players. Both roles rewarded. Winner typically becomes next Simon in rotation, ensuring shared leadership + fun." },
    { question: "What are good Simon Says commands?", answer: "Physical actions kids love: jump, clap, hop on one foot, spin around, touch toes, sit down, stand up, raise arms, wiggle fingers, make silly face, bark like dog, hop like bunny, freeze in statue pose. Educational integrations: 'Simon says solve 2+2', 'Simon says name a color', 'Simon says point to something red'. Physical trickers: 'Simon says raise hand, put down' (must keep raised!). Facial commands: smile, wink, stick out tongue. Vary between physical + mental + facial for engagement." },
    { question: "What variants exist?", answer: "MULTILINGUAL: Every culture has version — Jacques a dit (France), Simon dice (Spain), O rei manda (Portugal), Kōmori (Japan), etc. PHYSICAL FOCUS: exercise version emphasizing squats, jumps, stretches. EDUCATIONAL: teacher-integrated version with subject-content commands. MULTI-SIMON: rare 2-leader variant; must follow only when both say 'Simon says'. STOP RULE: continue previous action until 'Simon says stop'. MARATHON: charity events testing endurance + focus. CONTRADICTION-focused: advanced 'Simon says do X, don't do X' traps. Every family + region customizes rules over generations." },
  ],
  wikipediaTitle: "Simon Says",
  sources: [
    { label: "Wikipedia — Simon Says", url: "https://en.wikipedia.org/wiki/Simon_Says", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "community",
};
