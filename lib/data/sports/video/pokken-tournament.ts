import type { Sport } from "@/lib/types";

export const pokkenTournament: Sport = {
  id: "pokken-tournament",
  slug: "pokken-tournament",
  name: "Pokkén Tournament",
  officialName: "Pokkén Tournament DX",
  aliases: ["Pokkén", "ポッ拳"],
  shortDescription:
    "Fighting game (Bandai Namco + Pokémon Company, arcade 2015 / Wii U 2016 / Switch 'DX' 2017) using Tekken engine — 1v1 Pokémon battles alternate between Field Phase (3D movement) and Duel Phase (2D fighting) with 21 playable Pokémon.",
  longDescription:
    "Pokkén Tournament is a fighting game developed by Bandai Namco Studios (Tekken team) + The Pokémon Company — released to Japanese arcades July 2015, Wii U March 2016 (global), and Nintendo Switch as 'Pokkén Tournament DX' September 2017 with all 21 fighters + support Pokémon unlocked. Distinct from standard fighting games: rounds alternate Field Phase (open 3D movement) and Duel Phase (2D fighting plane) triggered by Phase Shift attacks. Synergy Burst mechanic acts as super mode once per round. Featured at EVO Championship Series 2016 + 2017; Pokémon World Championship added Pokkén division 2016-2019 (discontinued after). Combined Wii U + Switch DX sales ~3.5M as of 2020.",
  category: "video-games",
  subCategory: "fighting game (Pokémon crossover)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Bandai Namco Studios)",
  estimatedOrigin: "Arcade 2015; Wii U 2016; Switch DX 2017; EVO featured 2016-2017; Pokémon Worlds 2016-2019",
  players: { min: 2, max: 2, note: "1v1 match." },
  equipment: [
    { name: "Nintendo Switch (DX version)", description: "Current console version; Wii U original 2016 release now unsupported for online." },
    { name: "Pokkén Tournament Pro Pad", description: "Official 8-button arcade-style controller." },
    { name: "Nintendo Switch Pro Controller", description: "Standard competitive option for Switch DX." },
  ],
  duration: { approximateMinutes: 5, structure: "Bo3 match ~5-7 min; Bo5 ~10-15 min; each round 90 sec." },
  objective: "Reduce opponent's HP to zero across best-of rounds; use Synergy Burst once per round.",
  matchStructure: "Best-of-3 or best-of-5 rounds; each round 90 sec. Rounds alternate Field Phase (3D) and Duel Phase (2D) triggered by Phase Shift attacks.",
  basicRules: [
    { title: "Alternating Field + Duel Phase", body: "Phase Shift attack transitions between 3D and 2D combat planes." },
    { title: "Synergy Burst once per round", body: "Super mode transformation available once per round." },
    { title: "Support Pokémon selection", body: "Choose 1 of 2 pre-selected support Pokémon per round." },
  ],
  advancedRules: [
    { title: "Universal defense (counter, grab, block)", body: "Rock-paper-scissors defense system across all characters." },
    { title: "Phase Shift juggle timing", body: "Frame-perfect combos link damage across phase transitions." },
  ],
  scoring: {
    summary: "Best-of rounds; damage-based KO or higher HP at time out; Synergy Burst mechanic (super mode) once per round.",
    winCondition: "KO opponent, higher HP at time-out, or 2 round wins (Bo3) / 3 round wins (Bo5).",
    breakdown: [
      { action: "Round win (KO)", points: "1 round" },
      { action: "Round win (HP at time-out)", points: "1 round" },
    ],
  },
  penalties: [
    { title: "Timeout", body: "Higher HP wins the round when 90-sec timer expires." },
    { title: "Tournament rule violation", body: "Play! Pokémon rules — collusion, unsportsmanlike conduct = DQ; illegal controller = round loss." },
  ],
  positions: [{ name: "Fighter (Trainer)", role: "Player controlling 1 Pokémon fighter + 2 support Pokémon (choose 1 per round).", count: 1 }],
  officiating: {
    officials: ["Play! Pokémon Tournament Organizer", "Head Judge", "Floor Judges", "Stream Referees"],
    summary: "Play! Pokémon certified tournaments; regionals fed into Worlds qualification.",
  },
  governingBodies: [
    { name: "Bandai Namco Entertainment", founded: 1955, headquarters: "Tokyo, Japan" },
    { name: "The Pokémon Company International", founded: 1998, headquarters: "Bellevue, Washington, USA" },
    { name: "Play! Pokémon", founded: 2003, headquarters: "Bellevue, Washington, USA" },
  ],
  majorCompetitions: [
    { name: "Pokémon World Championships (Pokkén)", frequency: "annual (2016-2019)", founded: 2016, region: "global" },
    { name: "EVO Championship Series", frequency: "annual", founded: 1996, region: "global (Pokkén featured 2016-2017)" },
    { name: "Regional Video Game Championships (VGC/Pokkén)", frequency: "monthly", founded: 2016, region: "North America, EU, LatAm, Oceania" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "MX", "AU", "KR"],
  famousAthletes: [
    "AZ Hayamiya (Japan) — 2016 first Pokkén World Champion",
    "Bogaboo (Mexico) — 2019 Pokkén World Champion",
  ],
  records: [
    { title: "First Pokémon fighting game at EVO", holder: "EVO Championship Series", value: "Pokkén at EVO 2016, 2017; official Pokémon Worlds 2016-2019", year: 2016 },
    { title: "Most Pokémon Worlds titles (Pokkén)", holder: "Various", value: "Pokkén World Champion crowned annually 2016-2019, then discontinued", year: 2019 },
    { title: "Wii U + Switch lifetime sales", holder: "Nintendo / Bandai Namco", value: "~3.5 million combined worldwide", year: 2020 },
  ],
  variants: ["pokken-tournament-arcade", "pokken-tournament-dx-switch"],
  relatedSports: ["pokemon-scarlet-violet", "pokemon-video-games", "tekken", "smash-bros"],
  skills: ["frame timing", "phase shift juggles", "support pair selection", "matchup adaptation"],
  strategies: [
    { title: "Phase Shift juggle", body: "Land Phase Shift attack in Duel Phase, continue combo in Field Phase for extended damage." },
    { title: "Support Pokémon zoning", body: "Deploy support (Sylveon healing, Fennekin fire pillar) to force corner or wake-up pressure." },
    { title: "Burst timing", body: "Save Synergy Burst for round-2/3; use during opponent's whiffed super or after successful block." },
  ],
  terminology: [
    { term: "Field Phase", meaning: "Open 3D movement plane" },
    { term: "Duel Phase", meaning: "2D fighting plane" },
    { term: "Phase Shift", meaning: "Attack that transitions between phases" },
    { term: "Synergy Burst", meaning: "Once-per-round super mode transformation" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Movement + Phase Shift basics", body: "Y/X/A/B button roles, phase shift attack recognition, defensive counter." }] },
    { level: "intermediate", steps: [{ title: "Character mastery + support Pokémon", body: "Frame-perfect combos, phase shift juggles, universal defense." }] },
    { level: "advanced", steps: [{ title: "Tournament meta + Burst timing", body: "Match-up chart, Burst Attack conversion, adaptation to opponent patterns." }] },
  ],
  faq: [
    { question: "How is Pokkén different from Smash Bros?", answer: "Pokkén is a 1v1 fighting game with health bars, blocks, throws, and rounds — closer to Tekken. Smash is platform-fighter with percentages + stock lives." },
    { question: "How many Pokémon are playable?", answer: "21 fighters in Pokkén Tournament DX (Switch), including Charizard, Pikachu, Lucario, Machamp, Chandelure, Weavile, Gardevoir, Mewtwo, Blastoise, Aegislash, Empoleon, Braixen, Gengar, Sceptile, Garchomp, Scizor, Darkrai, Decidueye." },
  ],
  wikipediaTitle: "Pokkén Tournament",
  sources: [{ label: "Wikipedia — Pokkén Tournament", url: "https://en.wikipedia.org/wiki/Pokk%C3%A9n_Tournament", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default pokkenTournament;
