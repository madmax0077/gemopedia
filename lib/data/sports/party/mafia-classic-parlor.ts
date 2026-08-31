import type { Sport } from "@/lib/types";

export const mafiaClassicParlor: Sport = {
  id: "mafia-classic-parlor",
  slug: "mafia-classic-parlor",
  name: "Mafia (Classic Parlor Game)",
  officialName: "Mafia (Мафия) / Werewolf",
  aliases: ["Werewolf", "Mafia", "Мафия"],
  shortDescription:
    "Social deduction parlor game (1986, invented by Dmitry Davidoff at Moscow State University) — village team must identify + eliminate hidden mafia team members through day-time discussion + accusation voting; night-time secret kills. Foundational game of the social deduction genre.",
  longDescription:
    "Mafia (Мафия in Russian) is the foundational social-deduction party game invented in 1986 by Dimma Davidoff (Dmitry Davidoff) at Moscow State University's Faculty of Psychology. The game consists of two teams — the majority Villagers (uninformed) + a minority Mafia (informed, know each other's identities) — playing rotating Day + Night phases moderated by a game host (Narrator/Moderator/Judge). In Night phases, Mafia collectively choose one Villager to 'kill' (that player is eliminated); in Day phases, all surviving players discuss + accuse + vote to eliminate one suspected Mafia. Villagers win when all Mafia are eliminated; Mafia win when they equal or outnumber Villagers. Signature Villager roles include: Doctor (heals 1 person per night), Sheriff/Detective (learns 1 person's alignment per night), Prostitute (blocks target from acting). Popular Mafia roles: Godfather (registers as Villager to Detective), Bomber, Kamikaze. The game is now known internationally as 'Werewolf' after the 1997 rebranding by Andrew Plotkin (uses werewolves + villagers theme). Both variants ubiquitous in board game clubs + summer camps + college dorms + programmer conferences (huge in tech + gaming culture). Modern commercial variants: Ultimate Werewolf (Bezier Games), One Night Ultimate Werewolf, Werewolves of Miller's Hollow (Lui-même Games), Secret Hitler, Avalon, Blood on the Clocktower (heavy modern successor). Considered the archetype for the entire social deduction genre; foundational influence on modern hidden-role games.",
  category: "party-games",
  subCategory: "social deduction parlor game (foundational)",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "RU",
  regionOfOrigin: "Russia / Soviet Union (Dmitry Davidoff, Moscow State University, 1986)",
  estimatedOrigin: "Invented 1986 by Dmitry Davidoff at Moscow State University; Werewolf rebrand by Andrew Plotkin 1997",
  players: { min: 7, max: 30, note: "Optimal 8-16 players; can scale to 20-30 with additional roles + moderator." },
  equipment: [{ name: "Role cards / index cards", description: "Cards indicating each player's role (Villager/Mafia/Doctor/Sheriff etc.)." }, { name: "Moderator (host, non-player)", description: "One player acts as moderator + does not participate — narrates Night phases + manages voting." }, { name: "Comfortable seating in circle", description: "Traditional circle seating for eye-contact discussion." }],
  duration: { approximateMinutes: 45, structure: "One game 30-60 min; longer with more players + more complex roles; casual sessions run 2-4 games." },
  objective: "Villagers: identify + vote to eliminate all Mafia. Mafia: reduce Villagers to equal/fewer numbers.",
  matchStructure: "Alternating Night phases (Mafia kills secretly) + Day phases (all discuss + vote-eliminate); continues until win condition met.",
  basicRules: [
    { title: "Night: Mafia secretly kill 1 Villager", body: "Moderator narrates Night; only Mafia + special-role players wake." },
    { title: "Day: All discuss + vote-eliminate 1 player", body: "Day phase = open discussion + accusations + majority vote to eliminate." },
    { title: "Village wins when all Mafia eliminated", body: "Mafia wins when they equal/outnumber Villagers." },
    { title: "Moderator role critical", body: "Moderator narrates + confirms silent role actions + prevents cheating." },
  ],
  scoring: { summary: "Team win/loss (Village team vs. Mafia team); no in-game numerical scoring.", winCondition: "Village: eliminate all Mafia. Mafia: parity with Village team." },
  positions: [{ name: "Villager (uninformed majority)", role: "Vote + discuss; may hold special roles like Doctor/Sheriff." }, { name: "Mafia (informed minority)", role: "Know each other; kill secretly at Night." }, { name: "Doctor (Villager special role)", role: "Heals 1 player per Night." }, { name: "Sheriff / Detective (Villager)", role: "Learns 1 player's alignment per Night." }, { name: "Moderator (Narrator, non-player)", role: "Runs the game; not a competitor.", count: 1 }],
  governingBodies: [{ name: "No formal governing body — community + commercial publishers", founded: 1986, headquarters: "worldwide" }],
  majorCompetitions: [{ name: "Mafia Universe Championship (MUC)", frequency: "annual", founded: 2015, region: "Online (mafiauniverse.com)" }, { name: "Community Mafia Tournaments (Reddit / Discord / forums)", frequency: "ongoing", founded: 2000, region: "worldwide (online)" }],
  countriesPlayed: ["RUS (birthplace)", "USA", "GBR", "GER", "worldwide"],
  famousAthletes: ["Dmitry 'Dimma' Davidoff (inventor)", "Andrew Plotkin (Werewolf rebrand designer)", "Ted Alspach (Bezier Games — Ultimate Werewolf publisher)"],
  records: [
    { title: "Invented 1986 by Dmitry Davidoff", holder: "Dmitry Davidoff (RUS)", value: "Mafia invented 1986 by Dmitry Davidoff at Moscow State University Faculty of Psychology — foundational social deduction game", year: 1986 },
    { title: "Werewolf rebrand 1997", holder: "Andrew Plotkin (USA)", value: "Andrew Plotkin rebranded Mafia as Werewolf 1997; hugely popularized in Anglophone world", year: 1997 },
    { title: "Ubiquitous in tech culture", holder: "programmer conferences + game dev community", value: "Mafia is famously popular at hacker conferences (DefCon), game dev meetups, programmer social events — foundational geek social game", year: 2024 },
  ],
  variants: ["classic-mafia-original-1986", "werewolf-1997-rebrand", "ultimate-werewolf-bezier-commercial", "one-night-ultimate-werewolf-15-min-variant", "secret-hitler-2016-thematic", "blood-on-the-clocktower-2018-storyteller-variant"],
  relatedSports: ["one-night-ultimate-werewolf", "secret-hitler", "the-resistance-avalon", "blood-on-the-clocktower"],
  skills: ["social deduction", "bluffing + poker face", "logical elimination", "voting coordination", "reading group dynamics"],
  strategies: [
    { title: "Villager: gather info + protect key roles", body: "Villagers must coordinate to protect Sheriff/Doctor while identifying Mafia through voting patterns." },
    { title: "Mafia: blend in + misdirect", body: "Mafia's best play is to appear as Villagers — voting with the crowd + subtly steering suspicion." },
  ],
  wikipediaTitle: "Mafia (party game)",
  sources: [{ label: "Wikipedia — Mafia (party game)", url: "https://en.wikipedia.org/wiki/Mafia_(party_game)", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default mafiaClassicParlor;
