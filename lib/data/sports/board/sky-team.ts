import type { Sport } from "@/lib/types";

export const skyTeam: Sport = {
  id: "sky-team",
  slug: "sky-team",
  name: "Sky Team",
  officialName: "Sky Team (2023, Luc Rémond, Le Scorpion Masqué)",
  aliases: [],
  shortDescription:
    "A tense cooperative dice-placement game for exactly 2 players simulating landing a commercial airliner — Pilot + Co-Pilot must communicate silently. 2024 Spiel des Jahres winner.",
  longDescription:
    "Sky Team is a 2023 cooperative dice-placement game for exactly 2 players, designed by Luc Rémond and published by Le Scorpion Masqué (Canada) with distribution by Iello. Players take on the roles of Pilot and Co-Pilot working together to land a commercial airliner at one of 8+ airports (scenarios). Each round, both roll 4 dice behind their screen, and then take turns placing dice on their control panel: axis alignment, flaps, landing gear, brakes, engine, radio (air traffic), coffee, etc. Critical constraint: NO VERBAL COMMUNICATION about dice values allowed — only placement. Scenarios progressively add complications (crosswinds, iced runways, mountain approaches, mechanical failures). Won 2024 Spiel des Jahres (Germany's most prestigious game award) — heralded as one of the greatest 2-player cooperative designs. 30-minute plays with high tension. Sold 500K+ copies within first year.",
  category: "board-games",
  subCategory: "cooperative dice-placement (2-player exclusive)",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "global",
  countryOfOrigin: "CA",
  regionOfOrigin: "Canada (Le Scorpion Masqué, Montréal); Iello handled international",
  estimatedOrigin: "Released Q4 2023; Spiel des Jahres win July 2024",
  players: { min: 2, max: 2, note: "Strictly 2 players." },
  field: {
    surfaceName: "Shared cockpit control panel + approach track",
    dimensions: "~30×30 cm cockpit board + 8 approach tiles",
    description: "Shared cockpit board with dice-placement slots; approach track for descent management." },
  equipment: [
    { name: "Cockpit board", description: "Central shared control panel with dice slots for axis, engines, flaps, gear, brakes, radio, coffee." },
    { name: "8 dice (4 white pilot + 4 orange co-pilot)", description: "Rolled behind screens each round." },
    { name: "Approach tokens (radio/plane markers)", description: "Track altitude, speed, position." },
    { name: "Airport modules (8+ scenarios)", description: "YUL Montreal, LHR London, LAX Los Angeles, TFN Tenerife, etc." },
    { name: "Adverse-condition cards", description: "Wind, ice, engine failure modifiers." },
    { name: "Player screens", description: "Hide dice values (no verbal comm allowed about them)." },
  ],
  duration: { approximateMinutes: 20, structure: "~7 rounds per landing; 15-25 min per game." },
  objective:
    "Successfully land the aircraft on the runway across ~7 rounds without stalling, crashing, colliding with other planes, or overshooting.",
  matchStructure:
    "Each round: (1) both players roll 4 dice behind screen; (2) alternately place dice on cockpit slots (no verbal comm about values); (3) resolve effects — axis, altitude, approach, brakes, radio, coffee; (4) advance to next round. After ~7 rounds, land or crash.",
  basicRules: [
    { title: "No verbal communication about dice", body: "You cannot say your dice values or discuss placements." },
    { title: "Alternate placements", body: "Turn order: Pilot, Co-Pilot, Pilot, Co-Pilot, until all 8 dice placed." },
    { title: "Some slots are role-locked", body: "Pilot-only or Co-Pilot-only slots restrict who can fill them." },
    { title: "Axis alignment", body: "Sum of both Axis dice must match (equal each other)." },
    { title: "Engines balance", body: "Sum of both Engine dice must match to prevent yaw." },
    { title: "Speed + altitude constraints", body: "Approach tokens have thresholds — fail = crash." },
    { title: "Multiple crash conditions", body: "Stall, overshoot, collision, gear failure, brake failure." },
  ],
  advancedRules: [
    { title: "Coffee mechanic", body: "Placing coffee dice lets you reroll — limited to 3 coffee per game." },
    { title: "Radio priority", body: "Radio dice manage air traffic — collisions instant-fail." },
    { title: "Scenario difficulty", body: "Airports rated 1-6 stars; 6-star (Innsbruck) has mountain approach." },
    { title: "Adverse conditions", body: "Add wind cards / iced runway / engine-loss modules." },
    { title: "Legacy-lite campaign", body: "Some scenarios unlock after landing others." },
  ],
  scoring: {
    summary: "Win = successful landing (all thresholds met, aircraft on runway). Loss = crash / stall / overshoot / collide.",
    winCondition: "Land safely.",
    breakdown: [
      { action: "Successful landing at 1-star airport", points: "Beginner win" },
      { action: "Successful landing at 6-star (Innsbruck)", points: "Master win — 'Ace Pilot' achievement" },
    ],
  },
  penalties: [
    { title: "Verbal communication of values", body: "Players self-enforce — breaks the game spirit." },
    { title: "Crash conditions", body: "Stall, overshoot, collision, brake failure, gear failure, engine imbalance all cause immediate loss." },
  ],
  positions: [
    { name: "Pilot", role: "White dice; handles axis, altitude, radio, landing gear.", count: 1 },
    { name: "Co-Pilot", role: "Orange dice; handles engines, brakes, flaps, radio.", count: 1 },
  ],
  officiating: { officials: ["None"], summary: "Casual — self-officiated." },
  governingBodies: [
    { name: "Le Scorpion Masqué", founded: 2007, headquarters: "Montréal, Canada", website: "https://scorpionmasque.com" },
    { name: "Iello (international distribution)", founded: 2009, headquarters: "Nancy, France" },
  ],
  majorCompetitions: [
    { name: "Spiel des Jahres 2024 (Winner)", frequency: "once", founded: 2024, region: "Germany" },
    { name: "As d'Or Jeu de l'Année 2024 nominee", frequency: "once", founded: 2024, region: "France" },
  ],
  countriesPlayed: ["CA", "US", "FR", "DE", "GB", "IT", "ES", "AU", "JP", "BR"],
  famousAthletes: [
    "Luc Rémond (designer, first major hit)",
    "David Sitbon (art)",
  ],
  records: [
    { title: "Spiel des Jahres 2024", holder: "Sky Team", value: "Winner", year: 2024 },
    { title: "Sales", holder: "Le Scorpion Masqué", value: "500K+ copies year one", year: 2024 },
  ],
  variants: ["Sky Team: Turbulence expansion (2024)"],
  relatedSports: ["hanabi", "the-crew", "codenames-duet", "the-mind"],
  skills: [
    "silent coordination",
    "reading partner's placement patterns",
    "risk management under constraint",
    "adaptive planning per scenario",
  ],
  strategies: [
    { title: "Establish placement conventions early", body: "Even without words, patterns emerge: 'high dice always go to engines' etc." },
    { title: "Use coffee for critical rerolls", body: "Save coffee for late-game high-stakes moments." },
    { title: "Track approach tokens carefully", body: "Overshooting is easy to miss until too late." },
    { title: "Radio priority in airport scenarios", body: "LAX + LHR have heavy traffic — radio dice early." },
    { title: "Iterate: replay same scenario", body: "Each landing teaches optimal placement heuristics." },
  ],
  terminology: [
    { term: "Cockpit board", meaning: "Shared central control panel." },
    { term: "Axis", meaning: "Aircraft roll — must be balanced." },
    { term: "Approach track", meaning: "Descent path with speed/altitude thresholds." },
    { term: "Coffee", meaning: "Reroll resource, limited to 3 per game." },
    { term: "Radio", meaning: "Air traffic control slot; failing causes collisions." },
    { term: "Scenario", meaning: "One of 8+ airports with unique challenges." },
  ],
  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Start with YUL Montreal (1-star)", body: "Simplest airport; teaches core mechanics." },
        { title: "Learn axis + engine matching", body: "Getting balance right is #1 skill." },
        { title: "Establish dice-placement shorthand", body: "Silent conventions emerge across 3-5 plays." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Attempt Tenerife (fog scenario)", body: "Visibility restrictions add tension." },
        { title: "Master Innsbruck (6-star)", body: "Mountain approach forces perfect coordination." },
        { title: "Add Turbulence expansion", body: "Extends complexity + new airports." },
      ],
    },
  ],
  faq: [
    { question: "Can I play Sky Team with 3+ players?", answer: "No — the game is designed strictly for 2, and cannot scale to more." },
    { question: "How strict is the no-communication rule?", answer: "You may talk generally about strategy but NEVER reveal dice values. Self-enforce for maximum tension + fun." },
    { question: "Best airport for first play?", answer: "YUL Montreal or LHR London (both 1-star). Save Innsbruck (6-star) for veterans." },
    { question: "How does it compare to Hanabi?", answer: "Both cooperative + limited communication, but Sky Team has more mechanical crunch + thematic immersion." },
    { question: "Does it have replayability?", answer: "Yes — 8 base scenarios + adverse conditions + Turbulence expansion provide 30+ distinct landings." },
  ],
  sources: [
    { label: "BoardGameGeek — Sky Team", url: "https://boardgamegeek.com/boardgame/373106/sky-team", publisher: "BGG" },
    { label: "Wikipedia — Sky Team (board game)", url: "https://en.wikipedia.org/wiki/Sky_Team_(board_game)", publisher: "Wikipedia" },
    { label: "Le Scorpion Masqué", url: "https://scorpionmasque.com", publisher: "Le Scorpion Masqué" },
    { label: "Spiel des Jahres 2024", url: "https://www.spiel-des-jahres.de/en/spiele/sky-team/", publisher: "Spiel des Jahres jury" },
  ],
  wikipediaTitle: "Sky Team (board game)",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
