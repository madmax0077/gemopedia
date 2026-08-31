import type { Sport } from "@/lib/types";

export const wavelengthSocialGuessing: Sport = {
  id: "wavelength-social-guessing",
  slug: "wavelength-social-guessing",
  name: "Wavelength (Social Guessing Party Game)",
  officialName: "Wavelength — Palm Court / CMYK Games (2019)",
  aliases: ["Wavelength"],
  shortDescription:
    "Innovative social guessing party game 2019 by Wolfgang Warsch team + CMYK Games — teams try to guess where opponent's clue falls on hidden dial between 2 opposite concepts (e.g., 'Hot ↔ Cold', 'Weird ↔ Normal'); combines subjective judgment + team communication; won 2020 Kennerspiel des Jahres nomination; huge word-of-mouth hit 2019-2022.",
  longDescription:
    "Wavelength is an innovative social party game published 2019 by CMYK Games (designed by Wolfgang Warsch, Alex Hague, Justin Vickers) — sometimes described as 'the ideal social party game' due to unique gameplay that generates fun discussions about subjective judgments + shared cultural understanding. Considered one of most-praised party games of late 2010s/early 2020s. 4-12 players in 2 teams. Central mechanic: (1) Physical rotating dial mechanism reveals a hidden 'target zone' spanning ~20° of 180° arc; only the 'psychic' (active player) sees the target; (2) Card is drawn showing 2 opposite concepts on spectrum (e.g., 'Hot ↔ Cold', 'Weird ↔ Normal', 'Talent to be born with ↔ Talent to be learned', 'Big Deal ↔ No Big Deal', 'Overrated ↔ Underrated'); (3) Psychic must give a CLUE — an example concept that lies at the position of the target zone on the spectrum (e.g., if target is at ~70% toward 'Hot' on Hot↔Cold spectrum, might say 'A jalapeño'); (4) Rest of psychic's team then discusses + collectively rotates a pointer to guess where they think the target zone is; (5) Opposing team then decides if target is to the LEFT or RIGHT of psychic team's guess ('left-right bet'); (6) Scoring: psychic team scores 4 pts (bullseye), 3 pts, 2 pts, or 0 pts based on how close pointer is to target zone; opposing team scores 1 pt if correct left-right bet + 0 if wrong. Games play to 10 pts. Signature strategic depth: (a) Clue-giving is deceptively hard — must find example precise enough to guide team but broad enough to survive interpretation; (b) Team discussion phase generates fascinating debates about subjective judgments; (c) Opposing team's left-right bet creates second-guessing meta-layer. Won 2020 Kennerspiel des Jahres nomination (Germany's most prestigious game award); recognized in numerous 'best of 2019' lists (BoardGameGeek, Dice Tower, Shut Up & Sit Down). Popular expansions + variants: (a) Wavelength Deep — 2nd edition with new cards; (b) Wavelength Refresh — expanded card set 2022; (c) Digital app version + Cards Against Humanity partnership; (d) Custom card generators. Modern popular culture: featured heavily in Dice Tower + YouTube board game reviews; Kickstarter+ crowdfunding success; sold ~500K copies worldwide 2019-2023. Ideal for mixed-experience groups + adult game nights; often played at wedding parties + corporate team-building.",
  category: "party-games",
  subCategory: "social guessing party game with hidden target spectrum",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (CMYK Games publisher — New York; Wolfgang Warsch designer team Vienna Austria)",
  estimatedOrigin: "Published 2019 by CMYK Games; designed by Wolfgang Warsch + Alex Hague + Justin Vickers; won 2020 Kennerspiel des Jahres nomination",
  players: { min: 2, max: 12, note: "2-12 players in 2 teams; best at 6-10 players." },
  equipment: [{ name: "Wavelength dial mechanism (rotating disc + reveal window)", description: "Physical rotating dial with hidden target zone (~20° of 180° arc); only 'psychic' sees target through window; team pointer separately rotates." }, { name: "Spectrum concept cards (200+ in base set)", description: "200+ cards each showing 2 opposite concepts (e.g., Hot↔Cold, Weird↔Normal, Overrated↔Underrated); draw one per round." }, { name: "Team score tracker + team pieces", description: "Physical score tracker + team markers for pt tallies (games to 10 pts)." }],
  duration: { approximateMinutes: 30, structure: "Single game 20-45 min; play multiple back-to-back; long sessions 2-3 hours." },
  objective: "Score more team points than opponent by guessing where psychic's clue falls on hidden spectrum + winning left-right bets.",
  matchStructure: "Teams alternate psychic role; each turn: reveal spectrum + hidden target → psychic gives clue → team guesses → opponents left-right bet → score; games to 10 pts.",
  basicRules: [
    { title: "Psychic gives clue that lies at target position on spectrum", body: "Active team's psychic sees hidden target zone on 180° spectrum + gives verbal clue example that (in their judgment) matches target's position between 2 concept extremes." },
    { title: "Team discusses + collectively guesses position", body: "Rest of psychic's team openly discusses + collectively rotates pointer to guess where they think target zone is on spectrum." },
    { title: "Opposing team bets 'left or right' of pointer", body: "Opposing team decides if target is to LEFT or RIGHT of psychic team's guessed position; earns 1 pt if correct." },
    { title: "Score 4/3/2/0 pts based on bullseye proximity", body: "Psychic team scores: 4 pts (bullseye, target inside pointer), 3 pts (one zone away), 2 pts (two zones away), 0 pts (three+ zones away)." },
    { title: "First to 10 pts wins", body: "Team that reaches 10 pts first wins the game." },
  ],
  scoring: { summary: "Psychic team: 4/3/2/0 pts per round based on guess proximity to target. Opposing team: 1 pt if correct left-right bet, 0 if wrong. Games to 10 pts.", winCondition: "First team to reach 10 pts." },
  positions: [{ name: "Psychic (rotating role)", role: "Only player who sees hidden target; gives clue example.", count: 1 }, { name: "Team Guesser (2-5)", role: "Team members who discuss + guess pointer position.", count: 5 }, { name: "Opposing Bettor (2-5)", role: "Opposing team members who make left-right bet.", count: 5 }],
  officiating: { officials: ["Casual: self-officiated", "Digital app tracks scores automatically"], summary: "Casual play self-officiated; no formal competitive scene." },
  governingBodies: [{ name: "CMYK Games (publisher)", founded: 2018, headquarters: "New York, USA" }, { name: "Wolfgang Warsch + Alex Hague + Justin Vickers (designers)", founded: 2019, headquarters: "USA + Austria" }],
  majorCompetitions: [{ name: "Kennerspiel des Jahres 2020 (nominee)", frequency: "one-time award", founded: 2020, region: "Germany" }, { name: "BoardGameGeek Golden Geek 2019 Best Party Game (nominee)", frequency: "one-time award", founded: 2019, region: "USA" }, { name: "Various convention play at PAX Unplugged + Origins + Gen Con", frequency: "annual", founded: 2019, region: "USA conventions" }],
  countriesPlayed: ["USA (dominant)", "GBR", "CAN", "DEU (nominated Kennerspiel)", "FRA", "AUS", "JPN", "worldwide tabletop community"],
  famousAthletes: ["Wolfgang Warsch (co-designer)", "Alex Hague (co-designer)", "Justin Vickers (co-designer)", "Various YouTube board game reviewers (Dice Tower, Shut Up & Sit Down) who popularized the game"],
  records: [
    { title: "Won 2020 Kennerspiel des Jahres nomination", holder: "CMYK Games", value: "Wavelength won 2020 Kennerspiel des Jahres (Connoisseur Game of the Year) nomination — Germany's most prestigious board game award recognition", year: 2020 },
    { title: "Sold ~500K copies 2019-2023", holder: "CMYK Games", value: "Wavelength sold approximately 500,000 copies worldwide 2019-2023 — massive hit for party game category", year: 2023 },
    { title: "Innovative subjective-judgment mechanic", holder: "Wolfgang Warsch + design team", value: "Wavelength introduced innovative subjective-judgment guessing mechanic — recognized as novel party game design pushing genre forward", year: 2019 },
  ],
  variants: ["wavelength-original-2019", "wavelength-refresh-2022-expanded-cards", "wavelength-deep-2nd-edition-new-cards", "wavelength-digital-app-with-cards-against-humanity", "custom-card-generator-community-content"],
  relatedSports: ["codenames-guessing-party", "just-one-cooperative-word", "concept-game-guessing", "dixit-imagination-cards"],
  skills: ["clue-giving precision (broad enough + specific enough)", "team discussion facilitation", "subjective concept mapping", "opponent psychology (left-right bet)"],
  wikipediaTitle: "Wavelength (board game)",
  sources: [{ label: "Wikipedia — Wavelength (board game)", url: "https://en.wikipedia.org/wiki/Wavelength_(board_game)", publisher: "Wikipedia" }, { label: "CMYK Games", url: "https://cmyk.games", publisher: "CMYK" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default wavelengthSocialGuessing;
