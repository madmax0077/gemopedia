import type { Sport } from "@/lib/types";

export const twoRoomsAndABoom: Sport = {
  id: "two-rooms-and-a-boom",
  slug: "two-rooms-and-a-boom",
  name: "Two Rooms and a Boom",
  officialName: "Two Rooms and a Boom (Tuesday Knight Games)",
  aliases: ["2R&aB", "Two Rooms"],
  shortDescription:
    "Large-group hidden-role party game (2013, Tuesday Knight Games, designer Alan Gerding + Sean McCoy) — 6-30 players split into 2 rooms; Red Team's Bomber must be in same room as Blue Team's President at end of game timer to win; social negotiation via hostage swaps. Cult favorite in board game community.",
  longDescription:
    "Two Rooms and a Boom is a large-group hidden-role party game published in 2013 by Tuesday Knight Games (Kickstarter) — designers Alan Gerding + Sean McCoy. Designed for 6-30 players (best 12-18), it splits players into 2 separate physical rooms. Every player receives a secret role card — Red Team includes the Bomber; Blue Team includes the President; both teams include various support roles (Doctor, Spy, Gambler, Nuclear Bomb, Coyote, President's Daughter etc.). Game runs 5 rounds of decreasing length (5, 4, 3, 2, 1 minutes) — total ~15 minutes. Between rounds, each room's Leader (elected/chosen by that room) must select hostages to swap to the other room. Signature win: at the end of the final round, if the Bomber (Red) is in the SAME room as the President (Blue), Red Team wins; otherwise Blue Team wins. Complex hidden information — players may show/reveal partial or full role cards to build/undermine trust. Combines social deduction (Mafia/Werewolf) with structured hostage negotiation + physical player-movement. Rated one of the best large-group party games on BoardGameGeek (~top-100 party). Signature at board game conventions + tech-company retreats. Print-and-play version freely available; commercial box has expansion decks with more roles + factions (Gray Team, Green Team). Cult favorite in board game community; strong online-play adaptations on Discord + Zoom rose during COVID lockdowns.",
  category: "party-games",
  subCategory: "large-group hidden-role social deduction",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "niche",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Tuesday Knight Games — 2013 Kickstarter)",
  estimatedOrigin: "Kickstarter 2013; designed by Alan Gerding + Sean McCoy at Tuesday Knight Games",
  players: { min: 6, max: 30, note: "Best 12-18; supports 6-30 with role deck scaling." },
  equipment: [{ name: "Role cards (Red/Blue/Gray team members)", description: "Deck of role cards including Bomber, President, Doctor, Spy, Gambler + 20+ others." }, { name: "Timer / clock", description: "5 rounds of decreasing time (5/4/3/2/1 min); phone timer suffices." }, { name: "2 physically separate rooms/areas", description: "Two distinct physical spaces (rooms) required for authentic play; online adaptations use Zoom breakout rooms." }],
  duration: { approximateMinutes: 15, structure: "5 rounds × decreasing time (5/4/3/2/1 min) = 15 min core play + 5 min setup + reveal." },
  objective: "Red Team: end game with Bomber + President in same room. Blue Team: prevent this (keep them separate).",
  matchStructure: "5 rounds of hostage-swaps; final reveal at end.",
  basicRules: [
    { title: "Split players into 2 rooms", body: "Random or team-based split into 2 physical rooms/areas." },
    { title: "Each round: rooms elect Leader who swaps hostages", body: "Leaders of each room negotiate + swap 1-3 hostages between rooms." },
    { title: "Reveal cards partially/fully as strategic tool", body: "Players may show role cards fully or partially (color, faction only, full role) to teammates/hostages/leaders." },
    { title: "End of Round 5: check Bomber + President location", body: "If both in same room = Red wins; different rooms = Blue wins." },
  ],
  scoring: { summary: "Team win/loss binary based on end-state Bomber/President location.", winCondition: "Red: Bomber + President same room. Blue: separate rooms." },
  positions: [{ name: "Red Team member (including Bomber)", role: "Includes Bomber + Red role support cards.", count: 8 }, { name: "Blue Team member (including President)", role: "Includes President + Blue role support cards.", count: 8 }, { name: "Room Leader (elected each round)", role: "Decides hostage swaps for their room.", count: 2 }, { name: "Gray/Neutral roles (advanced)", role: "Roles that could win with either team (e.g., Nuclear Bomb, Coyote).", count: 2 }],
  governingBodies: [{ name: "Tuesday Knight Games (publisher)", founded: 2013, headquarters: "Los Angeles, California, USA" }],
  majorCompetitions: [{ name: "Community events at PAX + Origins + Gen Con + tech conferences", frequency: "sporadic", founded: 2014, region: "worldwide (conventions)" }, { name: "Online Two Rooms streams during COVID lockdowns", frequency: "peak 2020-2021", founded: 2020, region: "worldwide (Discord/Zoom)" }],
  famousAthletes: ["Alan Gerding + Sean McCoy (designers)", "Board game community champions (community-recognized)"],
  records: [
    { title: "Kickstarter funded 2013", holder: "Tuesday Knight Games", value: "Two Rooms and a Boom Kickstarter successful 2013 — funded expansion + physical + print-and-play version", year: 2013 },
    { title: "Cult classic large-group party game", holder: "BoardGameGeek", value: "Ranked top-100 party games all-time on BoardGameGeek; consistently cited as best 12-18 player game", year: 2024 },
    { title: "COVID-era online adaptations exploded", holder: "board game community", value: "2020-2021 COVID lockdowns saw Two Rooms adapted for Discord/Zoom breakout rooms — massive online play spike", year: 2020 },
  ],
  variants: ["standard-two-rooms-2013", "with-expansion-roles-nuclear-bomb-coyote-etc", "print-and-play-basic", "online-adaptation-zoom-discord"],
  relatedSports: ["mafia-classic-parlor", "the-resistance-avalon", "blood-on-the-clocktower", "secret-hitler"],
  skills: ["large-group social negotiation", "hostage-swap tactical thinking", "role-reveal timing (bluff vs. truth)", "leader election dynamics"],
  strategies: [
    { title: "Bomber + President should stay silent", body: "Key targets stay quiet — appearing as generic role — until strategic moment." },
    { title: "Trust-building via partial reveals", body: "Showing color-only or faction-only builds trust without giving critical info." },
  ],
  wikipediaTitle: "Two Rooms and a Boom",
  sources: [{ label: "BoardGameGeek — Two Rooms and a Boom", url: "https://boardgamegeek.com/boardgame/135779/two-rooms-and-boom", publisher: "BoardGameGeek" }, { label: "Tuesday Knight Games official", url: "https://tuesdayknightgames.com", publisher: "Tuesday Knight Games" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default twoRoomsAndABoom;
