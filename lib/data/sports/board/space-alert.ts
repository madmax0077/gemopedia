import type { Sport } from "@/lib/types";

export const spaceAlert: Sport = {
  id: "space-alert",
  slug: "space-alert",
  name: "Space Alert",
  officialName: "Space Alert",
  aliases: [],
  shortDescription:
    "UNIQUE REAL-TIME COOPERATIVE SPACESHIP CREW MICRO-GAME by VLAADA CHVÁTIL (also Codenames, Dungeon Petz, Through the Ages) + CGE (Czech Games Edition), 2008. 1-5 players are the crew of a small spaceship on a 10-minute survey mission — but the mission has THREATS (aliens, meteors, malfunctions) triggered on a REAL-TIME AUDIO SOUNDTRACK. Players must PROGRAM their actions in advance to defend the ship. Then the game 'plays out' with predicted actions — HILARIOUS + INTENSE + often disastrous! Iconic game design; cerebral cooperative + party crossover.",
  longDescription:
    "SPACE ALERT is a UNIQUE REAL-TIME COOPERATIVE SPACESHIP CREW MICRO-GAME designed by VLAADA CHVÁTIL (Czech designer of Codenames, Dungeon Petz, Through the Ages, Galaxy Trucker, Mage Knight) + published by CGE (Czech Games Edition), 2008. 1-5 PLAYERS ARE THE CREW of a small SURVEY SPACESHIP on a 10-MINUTE MISSION scanning an unknown sector — BUT the mission has THREATS (aliens, meteors, energy waves, malfunctions) triggered on a REAL-TIME AUDIO SOUNDTRACK. THE MISSION SOUNDTRACK PLAYS in real-time (10 minutes) and announces: 'Time T+1... Threat: 1 White Alien attacking Red Zone!' + 'Time T+3... Data transfer opportunity!' + 'Time T+8... Communication is now disrupted...' PLAYERS SIMULTANEOUSLY + PANICKED must PROGRAM their actions in ADVANCE — each player has an ACTION QUEUE of TURN CARDS (Turn 1 through Turn 12); they place face-down cards for what their character will do EACH TURN (Move to Blue Zone, Fire main gun, Change shields, Refuel reactor, Look at radar, etc.). All 5 players program simultaneously in real time. AFTER THE 10-MINUTE MISSION AUDIO ENDS, the game 'PLAYS OUT' — reveal actions in order + resolve automatically. Did you predict correctly? Or did the alien land in Red Zone while you were rebooting reactor?! HILARIOUS + INTENSE + often DISASTROUSLY WRONG!  Score based on ship survival + damage to threats. VARIABLE MISSIONS via mission audio tracks (multiple included; expansions add more). Iconic game design — 100% cooperative but rewards forward planning + team communication + trust. Considered ONE OF THE MOST INNOVATIVE game designs of the 2000s. Only 30 min per game (including 10 min mission + 15 min planning + 5 min resolution). Cerebral cooperative + party crossover. Praise from designers + reviewers as 'genre-defining.'",
  category: "board-games",
  subCategory: "cooperative / real-time / spaceship / Vlaada Chvátil / Czech Games Edition",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "CZ",
  regionOfOrigin: "Czech Republic (CGE, Prague)",
  estimatedOrigin: "2008 first edition; multiple expansions since (2010 The New Frontier, 2019 5th Anniversary)",
  players: { min: 1, max: 5, note: "1-5 players cooperative. Solo mode uses fewer characters." },
  field: {
    surfaceName: "Standard tabletop",
    dimensions: "Small game (~40cm × 40cm)",
    description: "Home tabletop; requires small space + speakers/headphones for mission audio.",
  },
  equipment: [
    { name: "Space Alert base game ($30 USD)", description: "Retail; includes mission audio CD + all cards" },
    { name: "Space Alert: The New Frontier expansion ($20)", description: "New missions + threats + rules" },
    { name: "Digital mission audio (from Amazon/CGE)", description: "MP3/streaming for missions" },
    { name: "Timer or phone (10-min mission audio)", description: "Real-time clock critical" },
  ],
  duration: { approximateMinutes: 30, structure: "10 min mission audio + 15 min pre-planning + 5 min resolution = ~30 min per game." },
  objective: "Cooperatively survive 10-minute mission by pre-planning each crew member's actions to counter threats. Score based on damage dealt to threats vs damage taken to ship.",
  basicRules: [
    { title: "Setup: draw random mission audio, place threat cards face-down on tracks", body: "Prepare 10-minute run." },
    { title: "Real-time 10-minute mission: audio announces threats + events at specific times", body: "Frantic real-time listening + planning." },
    { title: "Each player simultaneously programs actions on turn track cards", body: "Place action cards face-down in slots (Turn 1-12)." },
    { title: "Coordinate with team; who's firing? Who's fixing shields? Who's boarding shuttle?", body: "Frenzied real-time communication." },
    { title: "After mission audio ends, reveal actions + resolve simultaneously per turn", body: "Watch the disaster unfold." },
    { title: "Score = damage dealt vs damage taken; higher = better mission", body: "No traditional win/lose; graded performance." },
  ],
  scoring: {
    summary: "Score based on damage dealt to threats vs damage sustained.",
    breakdown: [
      { action: "Damage dealt to internal + external threats", points: "+1 per damage" },
      { action: "Ship damage sustained", points: "-1 per damage" },
      { action: "Mission survived (ship still alive)", points: "Bonus points" },
      { action: "Threat destroyed", points: "+points based on threat difficulty" },
    ],
    winCondition: "Higher score = better mission. No traditional win/lose; graded on survival + damage.",
  },
  governingBodies: [
    { name: "Czech Games Edition (publisher)", founded: 2007, headquarters: "Prague, Czech Republic" },
    { name: "BoardGameGeek (community tracking)", founded: 2000, headquarters: "USA" },
  ],
  majorCompetitions: [
    { name: "CGE demos + Essen Spiel exhibitions", frequency: "annual", founded: 2008, region: "worldwide" },
  ],
  countriesPlayed: ["CZ", "US", "GB", "DE", "FR", "IT", "ES", "SE", "PL", "AU", "CA", "BR", "JP", "NL"],
  famousAthletes: [
    "Vlaada Chvátil (CZ) — Designer",
    "Radek Boxan (CZ) — Illustrator",
  ],
  variants: [
    "space-alert-2008-original",
    "space-alert-the-new-frontier-2010-expansion",
    "space-alert-5th-anniversary-2019-updated-edition",
    "codenames-2015-later-vlaada-chvatil-mega-hit",
    "galaxy-trucker-2007-earlier-vlaada-chvatil-real-time",
  ],
  relatedSports: ["nemesis", "space-alert-hall", "arkham-horror-lcg", "pandemic-legacy-season-1", "gloomhaven"],
  skills: ["real-time communication under pressure", "forward planning (10 min ahead)", "coordination + trust", "audio comprehension", "team optimization"],
  strategies: [
    { title: "Assign role-per-player (gunner, engineer, shieldman, etc.)", body: "Specialization > everyone doing everything." },
    { title: "Communicate loudly during planning", body: "Real-time chaos requires yelling." },
    { title: "Assume the worst; add redundant plans", body: "Missions never go as planned." },
    { title: "Backup + robots as insurance", body: "Cover unexpected damage." },
    { title: "Play same mission repeatedly to learn", body: "Iterative improvement per mission." },
  ],
  terminology: [
    { term: "Mission", meaning: "10-minute audio-driven scenario." },
    { term: "Action card", meaning: "Face-down turn card determining crew action." },
    { term: "Zone (Blue/White/Red)", meaning: "Ship compartments." },
    { term: "Threat", meaning: "External or internal enemy attacking ship." },
    { term: "Bonus card", meaning: "Card played to modify action." },
    { term: "Special action", meaning: "Complex multi-turn action." },
    { term: "Reactor", meaning: "Ship power source; needs refuel." },
    { term: "Shield", meaning: "Zone-specific defense; needs charging." },
    { term: "Gun (main + secondary)", meaning: "Weapons vs threats." },
    { term: "Trajectory", meaning: "Threat track showing incoming enemy timing." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy Space Alert ($30)", body: "Small game with big depth." },
      { title: "Play tutorial mission (short + simple)", body: "Learn action + audio." },
    ]},
    { level: "intermediate", steps: [
      { title: "Play advanced missions in real-time", body: "Higher difficulty scenarios." },
    ]},
    { level: "advanced", steps: [
      { title: "Add The New Frontier expansion", body: "More missions + threats + rules." },
    ]},
  ],
  faq: [
    { question: "What is Space Alert?", answer: "UNIQUE REAL-TIME COOPERATIVE SPACESHIP CREW MICRO-GAME by VLAADA CHVÁTIL (also Codenames, Galaxy Trucker) + CGE (Czech Games Edition), 2008. 1-5 players are the crew of a spaceship on a 10-minute survey mission — but the mission has THREATS (aliens, meteors, malfunctions) triggered on a REAL-TIME AUDIO SOUNDTRACK. Players must PROGRAM their actions in advance to defend ship. Then the game 'plays out' with predicted actions — HILARIOUS + INTENSE + often disastrous! Iconic game design; cerebral cooperative + party crossover." },
    { question: "Is Space Alert too hard for casual players?", answer: "IT'S CHAOTIC + INTENSE + REWARDING. 10-minute real-time missions with 5 people yelling + programming actions is stressful but hilarious. Tutorial mission is FRIENDLY. Missions scale from Easy → Hard. Best for: (1) groups who like puzzles + planning; (2) friends who can communicate under pressure; (3) fans of Codenames + cooperative games. NOT FOR: quiet players + those who dislike real-time or noise. Playtime is ~30 min so failure is inexpensive. HIGHLY RECOMMENDED for adventurous gaming groups." },
  ],
  wikipediaTitle: "Space Alert",
  sources: [
    { label: "CGE — Space Alert", url: "https://czechgames.com/en/space-alert/", publisher: "Czech Games Edition" },
    { label: "BoardGameGeek — Space Alert", url: "https://boardgamegeek.com/boardgame/38453/space-alert", publisher: "BoardGameGeek" },
  ],
  lastVerified: "2026-08-27",
  confidence: "verified",
};
