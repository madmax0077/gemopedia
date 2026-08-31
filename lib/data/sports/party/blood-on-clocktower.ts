import type { Sport } from "@/lib/types";

export const bloodOnClocktower: Sport = {
  id: "blood-on-clocktower",
  slug: "blood-on-clocktower",
  name: "Blood on the Clocktower",
  officialName: "Blood on the Clocktower — The Pandemonium Institute",
  aliases: ["BotC", "Clocktower", "Blood Clocktower"],
  shortDescription:
    "Landmark 5-20 player social deduction game by Steven Medway (2022) — evolution of Werewolf/Mafia with dedicated Storyteller GM, 100+ character abilities, and unique rule that dead players still participate; considered gold-standard social deduction game 2020s; explosive growth via YouTube/Twitch streams (No Rolls Barred, Big Bad Con).",
  longDescription:
    "Blood on the Clocktower is a groundbreaking social deduction game designed by Steven Medway (published 2022 by The Pandemonium Institute, Australia) — considered the definitive evolution of the Werewolf/Mafia genre + gold-standard social deduction game of the 2020s. Plays 5-20 players + 1 dedicated Storyteller (game master, similar to D&D DM). Setup: Storyteller selects a 'script' from official editions (Trouble Brewing, Bad Moon Rising, Sects & Violets are the three base editions; hundreds of community + official scripts exist) containing 22-25 possible character roles. Players randomly assigned characters split into 4 types: (a) Townsfolk (good, informational abilities); (b) Outsiders (good but with disadvantages); (c) Minions (evil helpers of Demon); (d) Demon (evil primary — usually 1 player). Each player has a spot at the physical 'grimoire' — a decorated tableau showing all character tokens face-up for Storyteller only. Gameplay alternates: (1) Night phase — Storyteller wakes players in specific order to use abilities (like Mafia's Werewolf-wakes phase but expanded to 22+ character powers); (2) Day phase — free-form discussion + accusations culminating in an execution vote; players nominate + vote to execute suspects. UNIQUE innovation: dead players remain in game — they can still speak, share information, and vote (once) — dramatically expanding late-game intrigue. Storyteller has significant discretion — chooses ability activations, provides some misleading info to enhance story (e.g., 'Drunk' character thinks they're another character; abilities may be modified by game state). Physical game deluxe edition (~$150-200) contains ornate Victorian clocktower theme materials + Grimoire; digital versions on clocktower.online + botc.app. Explosive popularity growth 2022-2024 via YouTube gameplay (No Rolls Barred UK, Adam Koebel, Big Bad Con conventions, Reddit r/BloodOnTheClocktower). Modern successor to Mafia + One Night Werewolf; genuinely reshaped social deduction expectations.",
  category: "party-games",
  subCategory: "advanced social deduction with dedicated storyteller GM",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "AU",
  regionOfOrigin: "Australia (Steven Medway designer; The Pandemonium Institute publisher)",
  estimatedOrigin: "Designed by Steven Medway 2015-2022; deluxe box published 2022; digital clocktower.online 2020; explosive popularity 2022-2024",
  players: { min: 5, max: 20, note: "5-20 players + 1 Storyteller (game master); sweet spot 12-15 players." },
  equipment: [{ name: "Blood on the Clocktower deluxe box", description: "Ornate Victorian clocktower deluxe box with Grimoire (Storyteller's tableau), character tokens, reminder tokens, vote tokens, night sheet, scripts, ~$150-200 retail." }, { name: "Grimoire (Storyteller's tableau)", description: "Decorated physical tableau where Storyteller places all character tokens face-up for their own reference; hidden from players." }, { name: "Character tokens (~150+)", description: "Round character tokens for all official characters across 3 base editions + expansions; distributed to players face-down." }, { name: "Vote tokens + reminder tokens", description: "Physical tokens for tracking votes, ability uses, and game state modifiers." }, { name: "Official + community scripts", description: "Downloadable scripts defining exactly 22-25 character roles for a given game; hundreds available online." }],
  duration: { approximateMinutes: 180, structure: "Single game 2-4 hours; teaching game ~4-5 hours; conventions run multiple back-to-back games." },
  objective: "Good team wins by executing the Demon; evil team wins by reducing good team to 2 players (or specific Demon-victory conditions).",
  matchStructure: "Alternating Night phases (private abilities) + Day phases (discussion + nomination + execution vote) until win condition met.",
  basicRules: [
    { title: "Dedicated Storyteller (GM) runs game", body: "One person acts as Storyteller — never a player; manages ability activations, provides info, moderates votes; requires significant experience for good games." },
    { title: "Dead players still participate", body: "Executed players remain in game — can speak, share info, and vote ONCE more (using vote token); dramatically extends late-game intrigue." },
    { title: "Storyteller has discretionary information powers", body: "Storyteller chooses which abilities to trigger, may provide misleading info to enhance drama (per rules), decides ambiguities." },
    { title: "Nominations require majority vote to execute", body: "Any player may nominate any player once per day; nominated players receive votes from all living players; nominee with most votes above living-players/2 threshold executed." },
    { title: "Script defines exactly which 22-25 characters possible", body: "Storyteller pre-selects script (Trouble Brewing, Bad Moon Rising, Sects & Violets, or custom) — script defines pool of characters for game; players know possible roles." },
  ],
  scoring: { summary: "Team-based binary victory — good team wins by executing the Demon; evil team wins by reducing good team to 2 or fewer players (or specific Demon abilities like Fang Gu conversion victories).", winCondition: "Demon executed = good wins; good reduced to 2 players = evil wins." },
  positions: [{ name: "Storyteller (GM)", role: "Runs game, activates abilities, provides info, moderates votes; not a player.", count: 1 }, { name: "Townsfolk (good with abilities)", role: "Majority of players; each has unique informational or utility ability; try to identify + execute Demon.", count: 8 }, { name: "Outsiders (good with disadvantages)", role: "Good aligned but with abilities that hinder good team; complicate deduction.", count: 2 }, { name: "Minions (evil helpers)", role: "Evil aligned; help Demon; have supporting abilities.", count: 2 }, { name: "Demon (primary evil)", role: "Kills 1 player per night; if killed via execution, evil loses.", count: 1 }],
  officiating: { officials: ["Storyteller (functional referee + GM combined)"], summary: "Storyteller functions as both game master + arbiter of all rule ambiguities during game." },
  governingBodies: [{ name: "The Pandemonium Institute (publisher)", founded: 2022, headquarters: "Melbourne, Australia" }],
  majorCompetitions: [{ name: "clocktower.online (community digital tournament)", frequency: "ongoing", founded: 2020, region: "worldwide online" }, { name: "No Rolls Barred (UK YouTube gameplay)", frequency: "weekly", founded: 2022, region: "UK — YouTube" }, { name: "Big Bad Con (convention play)", frequency: "annual", founded: 2011, region: "Oakland, CA, USA" }, { name: "Adam Koebel Stream Games (Twitch)", frequency: "weekly", founded: 2023, region: "USA — Twitch" }],
  countriesPlayed: ["AUS (origin)", "USA", "GBR", "CAN", "DEU", "FRA", "NLD", "worldwide via clocktower.online"],
  famousAthletes: ["Steven Medway (designer)", "No Rolls Barred cast (Grant Howitt, Mike Cule, Elis James, Ben Meredith — UK YouTube popularization)", "Adam Koebel (RPG designer + BotC streamer)"],
  records: [
    { title: "Definitive social deduction game 2020s", holder: "Blood on the Clocktower community", value: "Blood on the Clocktower recognized as gold-standard social deduction game of 2020s — surpassed Mafia + Werewolf + Secret Hitler + Avalon in serious social-deduction community", year: 2024 },
    { title: "Deluxe edition $150-200 premium tier", holder: "The Pandemonium Institute", value: "Deluxe box priced $150-200+ — premium tier social deduction game with ornate physical production values", year: 2022 },
    { title: "Dead players still vote — genre innovation", holder: "Steven Medway", value: "Blood on the Clocktower's rule that dead players still speak + vote once = genre-defining innovation for social deduction games", year: 2022 },
  ],
  variants: ["trouble-brewing-base-edition", "bad-moon-rising-2nd-edition", "sects-violets-3rd-edition", "community-scripts-hundreds", "teensyville-experimental-mini-scripts"],
  relatedSports: ["mafia-classic-parlor", "werewolf-party", "one-night-ultimate-werewolf", "secret-hitler", "the-resistance-avalon", "dungeons-and-dragons"],
  skills: ["long-form social deduction", "storyteller judgment + narrative pacing", "advanced bluffing + coalition-building", "meta-game convention knowledge (per-script)"],
  wikipediaTitle: "Blood on the Clocktower",
  sources: [{ label: "Wikipedia — Blood on the Clocktower", url: "https://en.wikipedia.org/wiki/Blood_on_the_Clocktower", publisher: "Wikipedia" }, { label: "clocktower.online", url: "https://clocktower.online", publisher: "Community Digital Platform" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default bloodOnClocktower;
