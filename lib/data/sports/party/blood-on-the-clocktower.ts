import type { Sport } from "@/lib/types";

export const bloodOnTheClocktower: Sport = {
  id: "blood-on-the-clocktower",
  slug: "blood-on-the-clocktower",
  name: "Blood on the Clocktower",
  officialName: "Blood on the Clocktower",
  aliases: ["BOTC", "Clocktower"],
  shortDescription:
    "Modern social-deduction game (2022) by STEVEN MEDWAY / THE PANDEMONIUM INSTITUTE. 5-20 players in a fictional village where the Good team (villagers) tries to identify + execute the Demon before nightly kills eliminate them; Evil team tries to bluff their way to the last night. Uses a live STORYTELLER (game master) + hidden character sheets + intricate day/night phases + ~30 unique roles per script. Considered by many the deepest party/social-deduction game ever made — a Werewolf/Mafia successor that even allows DEAD players to keep playing. 60-120 min.",
  longDescription:
    "BLOOD ON THE CLOCKTOWER is a MODERN SOCIAL-DEDUCTION party game (Kickstarter 2019; retail release 2022) by STEVEN MEDWAY, published by THE PANDEMONIUM INSTITUTE. Widely regarded as one of the DEEPEST + MOST INNOVATIVE social-deduction games ever created — a spiritual successor to WEREWOLF / MAFIA / ONE NIGHT ULTIMATE WEREWOLF but with far more depth, replayability, + design elegance. GAMEPLAY: 5-20 players in a fictional VILLAGE of the town of RAVENSWOOD BLUFF. A dedicated STORYTELLER (game master, does not win/lose) hands out character cards randomly. Players are split into TOWNSFOLK (good, ~most players), OUTSIDERS (good but disruptive), MINIONS (evil), + one DEMON (evil). The GOOD team wins if the Demon is executed; the EVIL team wins if only 2 players remain alive (or specific alt conditions). DAY/NIGHT CYCLE: Each round has a NIGHT phase (players close eyes; Storyteller wakes character abilities individually) + a DAY phase (public discussion + private conversations + one player is NOMINATED + voted for execution). Executed players die but CONTINUE PLAYING as GHOSTS with limited voting power — a signature BOTC design decision that keeps everyone engaged. INFORMATION: Character abilities give players PARTIAL INFORMATION that may be TRUE or FALSE (Storyteller decides which information to give based on script + game state to keep games balanced). This creates deep BLUFFING, DEDUCTION, + STORYTELLING dynamics. SCRIPTS: The game ships with 3 official scripts — TROUBLE BREWING (25 characters, beginner), BAD MOON RISING (25 characters, intermediate — demon kills each night), + SECT & VIOLET (25 characters, advanced — information manipulation). Custom scripts + community scripts add hundreds more characters. GAME LENGTH: 60-120 min depending on player count. BEST AT 8-15 PLAYERS. WEIGHT: BGG weight ~2.7/5 but STRATEGIC DEPTH is enormous. RECEPTION: Widely praised by the social-deduction community as the DEFINITIVE modern game in the genre. BGG top-500 (peaking ~#200); massive online community; regular tournaments + streamed play. Online version at bloodontheclocktower.com. Physical box (~$150) is deluxe with wooden pieces + storyteller screen.",
  category: "party-games",
  subCategory: "social deduction / hidden roles / storyteller-led / deep party",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "AU",
  regionOfOrigin: "Australia (Steven Medway + The Pandemonium Institute)",
  estimatedOrigin: "Kickstarter 2019; retail 2022 (Pandemonium Institute)",
  players: { min: 5, max: 20, note: "5-20 players; best at 8-15. Requires 1 dedicated Storyteller (game master)." },
  field: {
    surfaceName: "Circle of chairs + Storyteller area",
    dimensions: "Living room / social space",
    description: "Players sit in a circle; Storyteller sits outside with grimoire (game info screen).",
  },
  equipment: [
    { name: "Blood on the Clocktower physical box (deluxe, ~$150)", description: "Wooden tokens + storyteller grimoire + character cards" },
    { name: "3 official scripts (Trouble Brewing, Bad Moon Rising, Sect & Violet)", description: "Character rosters" },
    { name: "Character sheet handouts", description: "Player role info" },
    { name: "Voting tokens", description: "For daytime execution votes" },
    { name: "Online version at bloodontheclocktower.com", description: "Digital play" },
  ],
  duration: { approximateMinutes: 90, structure: "60-120 min depending on player count + script." },
  objective: "Good team: identify + execute the Demon. Evil team: survive until only 2 players remain alive.",
  basicRules: [
    { title: "Storyteller distributes character cards (Townsfolk/Outsiders/Minions/Demon)", body: "Randomized roles." },
    { title: "Day/Night alternating phases; discuss during day, roles act at night", body: "Core game loop." },
    { title: "One execution per day via public nomination + vote", body: "Community decision." },
    { title: "Executed players continue playing as ghosts with 1 vote remaining", body: "Signature BOTC mechanic." },
    { title: "Storyteller feeds information (true or false) to characters per script + balance", body: "Adaptive game master." },
    { title: "Good wins by executing Demon; Evil wins when 2 players remain", body: "Multiple win conditions." },
  ],
  scoring: {
    summary: "Team-based win: Good executes Demon OR Evil reduces players to 2.",
    breakdown: [
      { action: "Good team executes the Demon", points: "Good wins" },
      { action: "Only 2 players remain alive", points: "Evil wins" },
      { action: "Specific character-triggered win conditions", points: "Alternate wins" },
    ],
    winCondition: "Whichever team achieves their objective first.",
  },
  governingBodies: [
    { name: "The Pandemonium Institute (publisher)", founded: 2019, headquarters: "Australia" },
    { name: "Blood on the Clocktower online community", founded: 2020, headquarters: "Online" },
  ],
  majorCompetitions: [
    { name: "Online BOTC tournaments (community)", frequency: "periodic", founded: 2020, region: "Global" },
    { name: "Streamed play (Twitch/YouTube)", frequency: "ongoing", founded: 2020, region: "Online" },
  ],
  countriesPlayed: ["AU", "US", "GB", "CA", "DE", "FR", "NL", "SE", "NZ"],
  famousAthletes: [
    "Steven Medway (Australian designer)",
    "The Pandemonium Institute team",
    "No Rolls Barred (BOTC streamers/content)",
  ],
  variants: [
    "trouble-brewing-script-beginner",
    "bad-moon-rising-script-intermediate",
    "sect-and-violet-script-advanced",
    "community-custom-scripts",
  ],
  relatedSports: ["werewolf", "mafia", "the-resistance-avalon", "secret-hitler", "spyfall"],
  skills: ["bluffing", "deduction", "reading players", "storyteller improvisation", "meta-game analysis"],
  strategies: [
    { title: "Good: share info liberally to build consensus", body: "Info-sharing is the good team's edge." },
    { title: "Evil: bluff a good role convincingly", body: "Claim roles + provide plausible info." },
    { title: "Storyteller: balance the game via info + kills", body: "Adaptive GM keeps games close." },
    { title: "Track claim consistency across days", body: "Bluffers slip on details." },
  ],
  terminology: [
    { term: "Storyteller", meaning: "The game master; does not win/lose but runs the game." },
    { term: "Grimoire", meaning: "Storyteller's information screen tracking all character states." },
    { term: "Townsfolk / Outsider / Minion / Demon", meaning: "The 4 character types." },
    { term: "Script", meaning: "A curated set of ~25 characters (Trouble Brewing, Bad Moon Rising, Sect & Violet)." },
    { term: "Ghost", meaning: "Executed player who continues playing with 1 vote remaining." },
    { term: "Nomination", meaning: "Public accusation triggering an execution vote during day." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Play Trouble Brewing script; experienced Storyteller helps", body: "Simplest 25-character roster." },
      { title: "Watch streamed BOTC games (No Rolls Barred, others)", body: "Learn the rhythms." },
    ]},
    { level: "intermediate", steps: [
      { title: "Try Bad Moon Rising + custom scripts", body: "Deeper roles." },
    ]},
  ],
  faq: [
    { question: "What is Blood on the Clocktower?", answer: "Modern social-deduction game (2022) by STEVEN MEDWAY / THE PANDEMONIUM INSTITUTE. 5-20 players in a fictional village where the Good team (villagers) tries to identify + execute the Demon before nightly kills eliminate them; Evil team tries to bluff their way to the last night. Uses a live STORYTELLER (game master) + hidden character sheets + intricate day/night phases + ~30 unique roles per script. Considered by many the deepest party/social-deduction game ever made — a Werewolf/Mafia successor that even allows DEAD players to keep playing. 60-120 min." },
    { question: "BOTC vs Werewolf / Mafia — which is better?", answer: "Both are social-deduction, but BOTC is FAR DEEPER + modernized. WEREWOLF/MAFIA (1980s Russian design): Simple; player-elimination-based; game ends for eliminated players (they sit out). BOTC (2022): 25-100+ unique characters per script; STORYTELLER-driven info (adaptive); dead players CONTINUE playing as ghosts (huge engagement boost); way more strategic depth. Werewolf is faster to teach + play (10-20 min) + great for casual groups. BOTC needs 60-120 min + a committed Storyteller but rewards with the DEEPEST social-deduction experience currently available. Serious social-deduction fans → BOTC. Casual groups → Werewolf/ONUW." },
  ],
  wikipediaTitle: "Blood on the Clocktower",
  sources: [
    { label: "Official — bloodontheclocktower.com", url: "https://bloodontheclocktower.com/", publisher: "Pandemonium Institute" },
    { label: "BoardGameGeek — Blood on the Clocktower", url: "https://boardgamegeek.com/boardgame/240980/blood-on-the-clocktower", publisher: "BGG" },
  ],
  lastVerified: "2026-08-28",
  confidence: "verified",
};
