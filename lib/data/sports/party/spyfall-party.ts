import type { Sport } from "@/lib/types";

export const spyfallParty: Sport = {
  id: "spyfall-party",
  slug: "spyfall-party",
  name: "Spyfall",
  officialName: "Spyfall (Hobby World / Cryptozoic Entertainment)",
  aliases: ["Spy Fall", "Шпион (Shpion)"],
  shortDescription:
    "Fast (8-min) social deduction party game (2014, Hobby World, designer Alexandr Ushan) — 3-8 players; all get a card showing the same secret 'location' except one player (the Spy) who knows nothing; players ask each other questions to unmask the Spy while the Spy tries to guess the location. International hit + top party game.",
  longDescription:
    "Spyfall is a fast-paced social deduction party game published 2014 by Hobby World (Russia) — designer Alexandr Ushan — and internationally by Cryptozoic Entertainment. Designed for 3-8 players + plays in 8-minute rounds. Setup: 30+ location cards (Beach, Movie Studio, Casino, Space Station, Pirate Ship, Circus Tent, etc.) — each location has 8 identical cards (one per potential player). At round start, players are dealt cards — one player receives a 'Spy' card (unique) while all other players receive identical cards showing the same location. The location is a shared secret among non-Spies but the Spy doesn't know it. Players take turns asking each other questions to determine: (a) non-Spies asking questions to identify the Spy without giving away the location too obviously; (b) the Spy tries to deduce the location from questions/answers to blend in. At any time the Spy may call 'Stop!' + declare the location for +4 points; if wrong = other players +2 each. If time runs out (8 min) or someone accuses the Spy: (i) unanimous accusation confirmed = accuser +4, other non-Spies +2 each; (ii) wrong accusation = Spy +4. First to 6 points wins the game. Signature: extremely fast + accessible + funny; questions like 'Do you think this is a nice place?' generate absurd + strategic responses. Won multiple awards including 2015 Golden Geek Award (Best Party Game). Expanded with Spyfall 2 (2016 — different locations + 10-player support). Considered top-3 modern party games alongside Codenames + One Night Ultimate Werewolf.",
  category: "party-games",
  subCategory: "fast social deduction party game (question-and-answer)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "21st-century", popularity: "regional",
  countryOfOrigin: "RU",
  regionOfOrigin: "Russia (Hobby World, Moscow; international via Cryptozoic 2014)",
  estimatedOrigin: "Published 2014 by Hobby World (Russia); international via Cryptozoic (USA) same year",
  players: { min: 3, max: 8, note: "Best 6-8; Spyfall 2 supports up to 10-12." },
  equipment: [{ name: "Spyfall game box", description: "30+ location cards (× 8 duplicates each) + Spy cards + rules." }, { name: "Timer (typically 8 min)", description: "Round timer — phone/app suffices; official versions include timer." }, { name: "Score sheet", description: "Points tracked per round." }],
  duration: { approximateMinutes: 8, structure: "Each round: 8 min question phase + reveal; typical evening = 3-5 rounds (~1 hour)." },
  objective: "Non-Spies: identify the Spy without revealing the location. Spy: deduce the location OR go undetected.",
  matchStructure: "8-min rounds; first to 6 points wins.",
  basicRules: [
    { title: "Deal 1 Spy card + 7+ identical location cards", body: "Spy is unique; others all get same location." },
    { title: "Take turns asking questions", body: "Player asks another 'Are you a good swimmer?' (if location is beach); asked player answers + then asks next." },
    { title: "Spy may call Stop + guess location for +4", body: "At any time Spy can lock in guess for the location; +4 if correct, -0 to others; +2 to each non-Spy if wrong." },
    { title: "8-min timer OR unanimous accusation ends round", body: "If timer runs out or unanimous vote against one player, cards revealed." },
  ],
  scoring: {
    summary: "+4 points per successful outcome; +2 for correct accusation; ~3-5 rounds to reach 6 points.",
    winCondition: "First to 6 points wins overall game.",
    breakdown: [{ action: "Spy correctly guesses location", points: "+4 (Spy)" }, { action: "Non-Spies unanimously accuse correct Spy", points: "+4 (accuser), +2 (other non-Spies)" }, { action: "Spy remains unidentified at time expiry", points: "+2 (Spy)" }, { action: "Non-Spies wrongly accuse", points: "+4 (Spy)" }],
  },
  positions: [{ name: "Non-Spy (location holder)", role: "Knows location, tries to identify Spy.", count: 6 }, { name: "Spy (unique)", role: "Doesn't know location, tries to blend in + deduce.", count: 1 }],
  governingBodies: [{ name: "Hobby World (Russian publisher)", founded: 1990, headquarters: "Moscow, Russia" }, { name: "Cryptozoic Entertainment (US publisher)", founded: 2010, headquarters: "Lake Forest, California, USA" }],
  majorCompetitions: [{ name: "Community game nights + convention play", frequency: "ongoing", founded: 2015, region: "worldwide" }],
  countriesPlayed: ["RUS (birthplace)", "USA", "GER", "GBR", "FRA", "JPN", "worldwide"],
  famousAthletes: ["Alexandr Ushan (designer)", "Hobby World + Cryptozoic teams", "board game community champions"],
  records: [
    { title: "Golden Geek Best Party Game 2015", holder: "Cryptozoic / Hobby World", value: "Won 2015 BoardGameGeek Golden Geek Award for Best Party Game", year: 2015 },
    { title: "Kennerspiel Recommended List 2015", holder: "Kennerspiel des Jahres jury", value: "Included in 2015 Kennerspiel des Jahres recommended list", year: 2015 },
    { title: "Spyfall 2 published 2016 with 10-12 player support", holder: "Cryptozoic / Hobby World", value: "Spyfall 2 published 2016 with new locations + support up to 10-12 players", year: 2016 },
  ],
  variants: ["standard-spyfall-2014", "spyfall-2-more-locations-more-players-2016", "spyfall-time-travel-thematic-2017", "spyfall-online-adaptations"],
  relatedSports: ["mafia-classic-parlor", "codenames", "the-resistance-avalon", "one-night-ultimate-werewolf"],
  skills: ["question-crafting (vague enough not to reveal location, specific enough to test)", "answer-crafting (as Spy: plausible but not committal)", "reading tone + hesitation", "location deduction from questions"],
  strategies: [
    { title: "Non-Spy: ask specific questions that Spy can't fake", body: "Questions like 'Where do you usually sit?' work best in specific locations." },
    { title: "Spy: ask vague questions to fish for location", body: "Spy asks 'What's the best thing about being here?' to elicit revealing responses." },
  ],
  wikipediaTitle: "Spyfall (game)",
  sources: [{ label: "BoardGameGeek — Spyfall", url: "https://boardgamegeek.com/boardgame/166384/spyfall", publisher: "BoardGameGeek" }, { label: "Cryptozoic — Spyfall", url: "https://www.cryptozoic.com/spyfall", publisher: "Cryptozoic Entertainment" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default spyfallParty;
