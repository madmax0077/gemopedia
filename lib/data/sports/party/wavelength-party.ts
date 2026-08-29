import type { Sport } from "@/lib/types";

export const wavelengthParty: Sport = {
  id: "wavelength-party",
  slug: "wavelength-party",
  name: "Wavelength",
  officialName: "Wavelength (CMYK Games / Palm Court)",
  aliases: ["Wavelength Party Game", "WVL"],
  shortDescription:
    "Cooperative-teamwork party game (2019, CMYK Games / Palm Court) — team guesses where on a spectrum (e.g., 'Cold ↔ Hot') a Psychic teammate's clue falls; scoring based on how close guess is to hidden target dial position. 2-12 players.",
  longDescription:
    "Wavelength is a party-social deduction team game published by CMYK Games (Palm Court) in 2019, designed by Wolfgang Warsch (also of The Mind + Quacks of Quedlinburg) + Alex Hague + Justin Vickers + Nick Bentley. Uses a rotating physical dial device that shows a hidden 'target zone' to one Psychic each round; the Psychic selects a clue on a spectrum card (e.g., 'Cold ↔ Hot', 'Overrated ↔ Underrated', 'Simple ↔ Complex', 'Boring Movie ↔ Exciting Movie'), and their team tries to guess where on the dial the target zone lies based only on the Psychic's clue. Scoring: 4 points if in bullseye zone; 3 pts if adjacent; 2 pts if next; 0 if miss. Opposing team then bets Left/Right of Team's guess for bonus points. First team to 10 pts wins. Also has coop 'Wavelength Solo' mode. Won 2019 Gen Con Best Party Game + Board Game Quest Party Game of the Year; nominated for Spiel des Jahres 2020 recommendations. Considered modern classic party game with excellent replayability + high skill ceiling in Psychic clue-crafting.",
  category: "party-games",
  subCategory: "cooperative party spectrum game",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (CMYK Games, New York + Palm Court)",
  estimatedOrigin: "Published 2019 by CMYK Games (Palm Court imprint)",
  players: { min: 2, max: 12, note: "Best 4-8; 2P uses coop mode." },
  equipment: [{ name: "Wavelength dial device (physical)", description: "Rotating dial with hidden target zone; central component." }, { name: "160 spectrum cards", description: "Two-ended spectrum concepts (Cold-Hot, etc.)." }, { name: "Score track + team markers", description: "Standard scoring track." }],
  duration: { approximateMinutes: 30, structure: "~30 min per game; first team to 10 pts." },
  objective: "First team to 10 points wins.",
  matchStructure: "Teams alternate turns as Psychic + Guessers; each round: 4 pts bullseye, 3 pts adj, 2 pts next, 0 miss; opponent Left/Right bet for bonus.",
  basicRules: [
    { title: "Psychic reveals dial target secretly", body: "Psychic sees hidden target zone; team + opponent see spectrum but not target." },
    { title: "Psychic gives verbal clue on spectrum", body: "Clue = single word/phrase between the two endpoints." },
    { title: "Team guesses dial position", body: "Team discusses + places physical marker on dial." },
    { title: "Opponent Left/Right bet for bonus", body: "Opposing team bets Left or Right of Team's guess for +1 pt if correct." },
  ],
  scoring: { summary: "4 bullseye / 3 adj / 2 next / 0 miss; +1 opponent side-bet.", winCondition: "First team to 10 points." },
  positions: [{ name: "Psychic (rotating)", role: "Player who sees target + gives clue.", count: 1 }, { name: "Team member (guesser)", role: "Contributes to guess-discussion.", count: 5 }],
  governingBodies: [{ name: "CMYK Games (publisher, Palm Court imprint)", founded: 2018, headquarters: "New York, USA" }],
  majorCompetitions: [{ name: "Gen Con Wavelength tournaments", frequency: "annual", founded: 2019, region: "Indianapolis, USA" }],
  famousAthletes: ["Wolfgang Warsch (co-designer)", "Alex Hague (co-designer)", "Justin Vickers (co-designer)", "Nick Bentley (co-designer)"],
  records: [
    { title: "2019 Gen Con Best Party Game", holder: "CMYK Games", value: "Won 2019 Gen Con Best Party Game award (inaugural release)", year: 2019 },
    { title: "2020 Spiel des Jahres recommended", holder: "CMYK Games", value: "Recommended by 2020 Spiel des Jahres jury (Germany's top board game award)", year: 2020 },
  ],
  variants: ["wavelength-solo-coop", "wavelength-online-app"],
  relatedSports: ["mysterium", "codenames", "the-mind", "just-one"],
  skills: ["clue-crafting on spectrum", "reading teammates' associations", "meta-analysis (opponent Left/Right bet)"],
  wikipediaTitle: "Wavelength (game)",
  sources: [{ label: "BoardGameGeek — Wavelength", url: "https://boardgamegeek.com/boardgame/262543/wavelength", publisher: "BoardGameGeek" }, { label: "CMYK Games official", url: "https://cmyk.games", publisher: "CMYK Games" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default wavelengthParty;
