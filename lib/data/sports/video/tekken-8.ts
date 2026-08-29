import type { Sport } from "@/lib/types";

export const tekken8: Sport = {
  id: "tekken-8",
  slug: "tekken-8",
  name: "Tekken 8",
  officialName: "Tekken 8",
  aliases: ["T8", "鉄拳8"],
  shortDescription:
    "Bandai Namco 3D fighting game (Jan 26, 2024 PS5/Xbox Series/PC) — Kazuya vs Jin story finale; Heat System replaces Rage Art; 32 launch characters + 4 Year-1 DLC. Signature EVO 2024 game; Tekken World Tour esports circuit.",
  longDescription:
    "Tekken 8 is Bandai Namco's 2024 mainline 3D fighting game — released January 26, 2024 for PS5, Xbox Series X/S, and PC (Steam). Directed by Katsuhiro Harada (series producer) + Kohei Ikeda (director). Continues the Mishima Saga — Kazuya Mishima vs. Jin Kazama epic finale after Tekken 7 cliffhanger. Signature 'Heat System': timed offensive mode (activated via Heat Burst button or specific normals) grants unique Heat Engagers + Heat Smashes + damage bonuses for ~10-15 sec of aggressive play. Replaces Tekken 7's Rage Drives with more offensive-focused Heat mechanics. 32 launch characters (all series veterans + new: Reina, Azucena, Victor Chevalier). 4 Year-1 DLC (Eddy Gordo, Lidia Sobieska, Heihachi, Clive Rosfield — first FF-crossover). Modes: Story (movie-style + arcade), Arcade Quest (single-player custom-avatar RPG mode), Online Ranked / Tournament, Ghost Battle (AI-vs-AI). Signature EVO 2024 game (surpassed Street Fighter 6 in EVO 2024 entrant count for many majors). 2M+ units first week. Tekken World Tour (TWT) esports circuit annually. Praised for offensive Heat System + presentation; some criticism for online netcode + character balance.",
  category: "video-games",
  subCategory: "3D fighting game",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Bandai Namco Studios, Tokyo)",
  estimatedOrigin: "Released Jan 26, 2024 for PS5/Xbox Series/PC — 8th mainline Tekken",
  players: { min: 1, max: 2, note: "Single-player Story/Arcade Quest + 1v1 online + local versus." },
  equipment: [
    { name: "PS5, Xbox Series X/S, PC (Steam)", description: "Cross-play across all platforms; PC is competitive standard." },
    { name: "Fight stick / Hitbox / controller", description: "Pro players use arcade sticks or hitboxes; Tekken traditionally friendly to gamepad." },
  ],
  duration: { approximateMinutes: 10, structure: "Match ~2-5 min; tournament set (best-of-3 games first-to-3 wins) ~15-25 min; grand final best-of-5 ~30-45 min." },
  objective: "In fighting mode: reduce opponent HP to zero; in tournament: win most sets. Story: complete Mishima Saga finale.",
  matchStructure: "Fighting Ground: 1v1 versus / arcade / training. Online Ranked / Tournament. TWT format: single-elim / double-elim brackets.",
  basicRules: [
    { title: "Heat System (timed offensive mode)", body: "Heat Burst button or Heat Engager normal → 10-15 sec Heat state with unique attacks + Heat Smashes + damage bonuses." },
    { title: "Rage state at low HP", body: "Below 20% HP → Rage state; use once per round for Rage Art (cinematic super)." },
    { title: "3D sidestep movement", body: "Sidestep + sidewalk for 3D positioning to avoid linear attacks." },
  ],
  advancedRules: [
    { title: "Heat Engagers vs Heat Bursts", body: "Certain normals activate Heat with cancel-into-Heat Engager combos; Heat Burst is standalone Heat activator." },
    { title: "Heat Smash + Heat Dash", body: "In Heat: use Heat Smash for cinematic finisher or Heat Dash to cancel + continue combo." },
    { title: "Wall + floor break mechanics", body: "Some stages have breakable walls + floors that extend combos into new areas + big damage." },
  ],
  scoring: {
    summary: "Win 2/3 (Ranked) or 3/5 (Tournament) rounds to win game/set.",
    winCondition: "Reduce opponent HP to zero required rounds.",
    breakdown: [{ action: "Round win", points: "Bo3 or Bo5" }, { action: "Set win", points: "Advance in bracket" }],
  },
  penalties: [
    { title: "Ring out (some stages)", body: "Fall off stage edge = instant round loss (Beach + Roof stages)." },
    { title: "Ki Charge / launch punish", body: "Whiffed attack punished into launcher combo — enormous damage." },
    { title: "Wall / floor break combo extension", body: "Loss of extra damage from breakable stage elements." },
  ],
  positions: [{ name: "Fighter (32 launch + 4+ DLC characters)", role: "Solo character per match; Custom Avatar in Arcade Quest.", count: 1 }],
  officiating: { officials: ["Tekken World Tour Referees", "EVO Referees", "Anti-cheat + report system"], summary: "Tournament refs + online moderation." },
  governingBodies: [
    { name: "Bandai Namco Entertainment", founded: 2006, headquarters: "Tokyo, Japan" },
    { name: "Tekken World Tour (TWT) organiser", founded: 2017, headquarters: "Tokyo, Japan" },
  ],
  majorCompetitions: [
    { name: "Tekken World Tour (TWT)", frequency: "annual multi-event", founded: 2017, region: "global (multi-region)" },
    { name: "EVO — Tekken 8 main game", frequency: "annual", founded: 1996, region: "Las Vegas, USA" },
    { name: "TWT Global Finals", frequency: "annual", founded: 2017, region: "global finals" },
  ],
  countriesPlayed: ["JP", "KR", "US", "PK", "FR", "GB", "DE", "MX", "BR", "SG", "TW", "PH"],
  famousAthletes: ["Arslan Ash (Arslan Siddique, PAK) — dominant TWT champion", "Knee (Bae Jae-min, KOR) — Tekken legend", "Anakin (Hoa Luu, USA)", "Chikurin (JPN)", "JDCR (Kim Hyun-jin, KOR)"],
  records: [
    { title: "2M+ units first week", holder: "Bandai Namco", value: "2 million+ units shipped in first week — series fastest-selling launch", year: 2024 },
    { title: "EVO 2024 entrant leader", holder: "EVO", value: "Tekken 8 surpassed Street Fighter 6 in entrant count at several EVO 2024 majors", year: 2024 },
    { title: "Arslan Ash TWT dominance", holder: "Arslan Ash (PAK)", value: "Multiple TWT world championship titles + first Pakistani esports world champion", year: 2024 },
  ],
  variants: ["tekken-8-standard", "tekken-8-deluxe", "tekken-8-ultimate", "tekken-8-year-1-pass"],
  relatedSports: ["tekken-7", "tekken-tag-tournament-2", "street-fighter-6", "virtua-fighter", "dead-or-alive-6"],
  skills: ["3D sidestep spacing", "Heat System resource management", "launcher punish knowledge", "wall + floor combo optimisation"],
  strategies: [
    { title: "Sidestep + spacing control", body: "Master 3D sidestep to avoid linear attacks + create whiff punishes." },
    { title: "Heat System burst window", body: "Time Heat activation for maximum damage bursts + wall carry setups." },
    { title: "Character-specific launcher punish", body: "Each launcher combo is character-specific — matchup knowledge = free damage on whiff." },
  ],
  terminology: [
    { term: "Heat", meaning: "Timed offensive mode with bonus damage + special attacks" },
    { term: "Heat Burst / Engager / Smash", meaning: "Heat activation methods + finisher" },
    { term: "Rage / Rage Art", meaning: "Low-HP super state + cinematic super attack" },
    { term: "Sidestep / Sidewalk", meaning: "3D lateral movement" },
    { term: "Launcher", meaning: "Attack that pops opponent into juggle-combo state" },
    { term: "Wall / Floor Break", meaning: "Breakable stage element extending combos" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Arcade Quest single-player", body: "Learn character basics + Heat System via single-player mode." }] },
    { level: "intermediate", steps: [{ title: "Ranked climb to Bushin (10+ Dan)", body: "Play Ranked; climb through Dan ranks; learn matchups." }] },
    { level: "advanced", steps: [{ title: "TWT / EVO tournament competition", body: "Compete in regional TWT events + qualify for majors." }] },
  ],
  faq: [
    { question: "How does Tekken 8 Heat System differ from Tekken 7 Rage?", answer: "Tekken 7's Rage Art / Rage Drive activated once per round below 20% HP. Tekken 8's Heat System activates any time via Heat Burst or Heat Engager normals, granting 10-15 sec of enhanced attacks + damage — more offensive, more strategic depth than reactive Rage." },
    { question: "Is Tekken 8 more offensive than Tekken 7?", answer: "Yes — Heat System + Heat Engagers + Heat Smashes are designed to reward aggressive play + create more back-and-forth momentum swings. Defensive turtling is less viable than in Tekken 7's more spacing-focused meta." },
  ],
  wikipediaTitle: "Tekken 8",
  sources: [{ label: "Wikipedia — Tekken 8", url: "https://en.wikipedia.org/wiki/Tekken_8", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default tekken8;
