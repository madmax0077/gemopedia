import type { Sport } from "@/lib/types";

export const xWingMiniatures: Sport = {
  id: "x-wing-miniatures",
  slug: "x-wing-miniatures",
  name: "Star Wars: X-Wing Miniatures Game",
  officialName: "Star Wars: X-Wing Miniatures Game (2nd Edition)",
  aliases: ["X-Wing", "X-Wing 2.0", "SW X-Wing"],
  shortDescription:
    "Fast-play tabletop starfighter dogfight miniatures game (pre-painted 1/270 scale ships); 2nd Edition (2018) by AMG/Atomic Mass Games. Signature dial-based simultaneous-movement combat + Rebel/Imperial/Scum/Republic/Separatist/Resistance/First Order factions.",
  longDescription:
    "Star Wars: X-Wing Miniatures Game is a fast-play tabletop dogfight miniatures game published originally by Fantasy Flight Games (2012) and since 2020 by Atomic Mass Games (AMG, a subsidiary of Asmodee). 2nd Edition launched September 2018; multiple System Open Series tournaments annually + World Championships. Uses pre-painted 1/270 scale plastic starfighter miniatures (X-wings, TIE Fighters, Y-wings, A-wings, B-wings, Millennium Falcon, Slave I, ARC-170, Vulture droids, etc.) representing all 7 Star Wars canon eras: Original Trilogy (Rebel/Imperial), Prequel (Republic/Separatist), Sequel (Resistance/First Order), Scum & Villainy. Signature mechanic: 'movement dial' — each player secretly assigns a maneuver dial to each ship (speed + turn/bank/K-turn), then reveals simultaneously in reverse-pilot-skill order → ships move, then attack in normal pilot-skill order. Attacks use custom attack + defense dice with focus/target-lock/evade tokens. Ship-building meta uses points-costed pilot cards + upgrade cards. Typical tournament game: 200-point squad, 75-min chess clock, mission = destroy opponent's squad or hold objectives. Iconic squads/pilots: Luke Skywalker, Wedge Antilles, Darth Vader, Boba Fett, Poe Dameron, Kylo Ren. Competitive scene very active; AMG has released rebalance updates + new First Player Turn Order changes 2022-24.",
  category: "wargames",
  subCategory: "starfighter dogfight miniatures game",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Fantasy Flight Games, Minnesota); now AMG (Georgia)",
  estimatedOrigin: "1st Ed. 2012 by FFG; 2nd Ed. 2018; AMG took over from FFG in 2020",
  players: { min: 2, max: 2, note: "1v1 head-to-head; team formats exist (Rebel vs Empire day events)." },
  equipment: [{ name: "Pre-painted plastic starfighter minis", description: "1/270 scale ships (X-wings, TIEs, etc.); ~$15-30 per expansion." }, { name: "Maneuver dials (per ship)", description: "Cardboard/plastic dial with maneuvers per ship type." }, { name: "Movement templates + range ruler", description: "Cardstock movement templates + range 1/2/3 ruler." }, { name: "Attack + defense dice (custom)", description: "Red attack + green defense dice per ship." }, { name: "Focus / target-lock / evade tokens", description: "Action + condition tokens." }, { name: "3'x3' tabletop mat", description: "Standard 3'x3' battlefield." }],
  duration: { approximateMinutes: 75, structure: "Tournament game 75 min chess clock; typically 6 rounds Swiss + top-cut." },
  objective: "Destroy opponent's squad OR hold more Mission Objectives (event-dependent).",
  matchStructure: "Standard 200-point squads (2nd Ed.); tournament Swiss + top-cut single-elim.",
  basicRules: [
    { title: "Simultaneous maneuver-dial reveal", body: "Both players secretly assign maneuvers, then reveal + move in reverse-pilot-skill order." },
    { title: "Attack in ascending pilot-skill order", body: "Lower pilot skill moves first, but higher pilot skill attacks first." },
    { title: "Actions (Focus / Target Lock / Evade / Barrel Roll / Boost)", body: "After movement, ships perform 1 action based on ship + upgrades." },
    { title: "Range 1/2/3 defines shot bonuses", body: "Range 1 = +1 attack die; Range 3 = +1 defense die." },
  ],
  advancedRules: [
    { title: "Squad-building with upgrade cards", body: "Ship + pilot + upgrade cards; upgrade slots per ship (talent, torpedo, missile, crew, etc.)." },
    { title: "Points balance updates quarterly", body: "AMG publishes points-cost updates on X-Wing app + website." },
    { title: "System Open Series (SOS) tournament format", body: "Global 6-8 major event circuit + World Championship." },
  ],
  scoring: { summary: "Destroy enemy squad (score by destroyed ship points) OR objective-based missions.", winCondition: "Destroy all enemy ships OR highest score at time limit." },
  positions: [{ name: "Squad commander (player)", role: "Controls squad of 3-8 ships typically.", count: 1 }],
  governingBodies: [{ name: "Atomic Mass Games (AMG, current publisher)", founded: 2019, headquarters: "Georgia, USA" }, { name: "Fantasy Flight Games (original publisher 2012-2020)", founded: 1995, headquarters: "Minnesota, USA" }],
  majorCompetitions: [{ name: "X-Wing World Championship", frequency: "annual", founded: 2013, region: "Minnesota (FFG-era) / rotating (AMG-era)" }, { name: "System Open Series", frequency: "annual (6-8 events)", founded: 2015, region: "worldwide" }, { name: "Coruscant Invitational", frequency: "annual", founded: 2019, region: "worldwide (invite-only top 32)" }],
  countriesPlayed: ["USA", "GBR", "GER", "POL", "FRA", "AUS", "ESP", "ITA", "CAN"],
  famousAthletes: ["Nand Torfs (BEL — World Champion 2015)", "Paul Heaver (USA — 3x World Champion)", "Andrew Yelton (USA — 2019 World Champion)"],
  records: [
    { title: "Paul Heaver 3x World Champion", holder: "Paul Heaver (USA)", value: "3x X-Wing World Champion (2013, 2014, 2016) — most all-time", year: 2016 },
    { title: "X-Wing 2nd Edition launch 2018", holder: "Fantasy Flight Games", value: "2nd Edition launched September 2018; overhauled squad-building + faction rules", year: 2018 },
    { title: "AMG takeover from FFG 2020", holder: "Atomic Mass Games / Asmodee", value: "AMG took over X-Wing from FFG in 2020 (as part of Asmodee restructuring)", year: 2020 },
  ],
  variants: ["x-wing-epic-huge-ships", "x-wing-scenarios"],
  relatedSports: ["star-wars-legion", "star-wars-armada", "star-wars-shatterpoint"],
  skills: ["maneuver prediction", "squad-building meta", "table positioning", "dice odds management"],
  wikipediaTitle: "Star Wars: X-Wing Miniatures Game",
  sources: [{ label: "Wikipedia — Star Wars: X-Wing Miniatures Game", url: "https://en.wikipedia.org/wiki/Star_Wars:_X-Wing_Miniatures_Game", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default xWingMiniatures;
