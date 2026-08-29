import type { Sport } from "@/lib/types";

export const streetFighter6: Sport = {
  id: "street-fighter-6",
  slug: "street-fighter-6",
  name: "Street Fighter 6",
  officialName: "Street Fighter 6",
  aliases: ["SF6", "ストリートファイター6"],
  shortDescription:
    "Capcom 2D fighting game (Jun 2, 2023 PS4/PS5/Xbox Series/PC) — Drive Impact / Drive Rush / Drive Parry Drive Gauge system; World Tour single-player + Battle Hub online + Fighting Ground. Signature EVO game 2023-24; 4M+ units first year.",
  longDescription:
    "Street Fighter 6 is Capcom's 2023 mainline 2D fighting game — released June 2, 2023 for PS4, PS5, Xbox Series X/S, and PC (Steam). Development led by Takayuki Nakayama (director) + Shuhei Matsumoto (producer). Signature 'Drive System' Drive Gauge (6-stock resource) enables Drive Impact (armored break), Drive Rush (dash-cancel pressure), Drive Parry (universal parry), Drive Reversal (wake-up escape), Drive Overdrive (EX moves), and Drive Burnout (empty gauge stun state). Three modes: Fighting Ground (traditional arcade + online), World Tour (open-world action-RPG single-player where player creates custom fighter), Battle Hub (social online lobby with retro arcade cabinet minigames). Roster 18 launch characters + 12+ DLC (Rashid, A.K.I., Ed, Akuma, M. Bison, Terry Bogard, Mai Shiranui, Elena, Sagat, C. Viper, etc. through Year 3). Signature EVO 2023 + 2024 main game. 4M+ units first year. Won Best Fighting Game at The Game Awards 2023. Community-praised for balance + control accessibility (Modern Controls simplify inputs).",
  category: "video-games",
  subCategory: "2D fighting game",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Capcom, Osaka)",
  estimatedOrigin: "Released Jun 2, 2023 for PS4/PS5/Xbox Series/PC",
  players: { min: 1, max: 2, note: "Single-player World Tour + 1v1 online + local versus." },
  equipment: [
    { name: "PS4, PS5, Xbox Series X/S, PC (Steam)", description: "Cross-play across all platforms; PC is competitive standard." },
    { name: "Fight stick / Hitbox / controller", description: "Pro players use arcade sticks or hitboxes; Modern Controls make gamepad viable." },
  ],
  duration: { approximateMinutes: 10, structure: "Match ~2-5 min; tournament set (best-of-3 games, first-to-2 wins) ~10-15 min; grand final ~30 min." },
  objective: "In fighting mode: reduce opponent HP to zero; in tournament: win most sets. World Tour: level up custom fighter + defeat masters.",
  matchStructure: "Fighting Ground: 1v1 versus / arcade / training. Online Ranked / Casual. Tournament format: single-elimination best-of-3 sets (winners) + best-of-5 (grand final).",
  basicRules: [
    { title: "Drive Gauge (6 stocks)", body: "Central resource for Drive Impact, Drive Rush, Drive Parry, EX moves. Empty gauge = Burnout stun state." },
    { title: "Modern vs Classic controls", body: "Classic: 6-button (LP/MP/HP/LK/MK/HK) with motion inputs. Modern: 4-button with auto-combos + button-hold specials for accessibility." },
    { title: "Super Arts + Level 1/2/3", body: "Super Meter charges from damage + Drive spending; use for Level 1/2/3 Super Arts + Critical Art." },
  ],
  advancedRules: [
    { title: "Drive Impact (armored break)", body: "Armored attack — absorbs 1 hit, breaks opponent guard, causes crumple in corner." },
    { title: "Drive Parry (universal parry)", body: "Universal parry via 2P button — refunds Drive Gauge on successful parry." },
    { title: "Drive Rush (cancel pressure)", body: "Cancel normals into dash for extended combos + pressure; drains Drive Gauge fast." },
    { title: "Perfect Parry timing", body: "Frame-perfect Drive Parry = full frame advantage + refunds full Drive Gauge." },
  ],
  scoring: {
    summary: "Win 2 rounds to win game; win 2 games to win set.",
    winCondition: "Reduce opponent HP to zero twice.",
    breakdown: [{ action: "Round win", points: "Best of 3" }, { action: "Set win", points: "Advance in tournament bracket" }],
  },
  penalties: [
    { title: "Ring out / KO", body: "Round loss to opponent." },
    { title: "Burnout state", body: "Empty Drive Gauge → stunned by heavy attack, wall-splat vulnerable." },
    { title: "Round loss to counter-hit combo", body: "Full combo damage." },
  ],
  positions: [{ name: "Fighter (18 launch + 12+ DLC characters)", role: "Solo character selection per match; custom Avatar in World Tour.", count: 1 }],
  officiating: { officials: ["EVO / Capcom Cup Referees", "Anti-cheat + report system"], summary: "Tournament refs + online moderation." },
  governingBodies: [
    { name: "Capcom Co., Ltd.", founded: 1979, headquarters: "Osaka, Japan" },
    { name: "Capcom Pro Tour (CPT) organiser", founded: 2013, headquarters: "Osaka, Japan" },
  ],
  majorCompetitions: [
    { name: "Capcom Cup", frequency: "annual", founded: 2013, region: "global finals" },
    { name: "Capcom Pro Tour (CPT)", frequency: "annual multi-event", founded: 2013, region: "global (multi-region)" },
    { name: "EVO — Street Fighter 6 main game", frequency: "annual", founded: 1996, region: "Las Vegas, USA" },
  ],
  countriesPlayed: ["JP", "US", "KR", "FR", "GB", "DE", "MX", "BR", "SG", "TW", "PH"],
  famousAthletes: ["MenaRD (Saul Leonardo Mena Segundo, DOM) — 2× Capcom Cup Champion", "Punk (Victor Woodley, USA)", "Daigo Umehara (JPN)", "Chris Wong (Justakid, JPN)"],
  records: [
    { title: "4M+ units first year", holder: "Capcom", value: "4 million+ units shipped + digitally sold in first year", year: 2024 },
    { title: "TGA 2023 Best Fighting Game", holder: "Capcom", value: "Won Best Fighting Game at The Game Awards 2023", year: 2023 },
    { title: "EVO 2023 signature main game", holder: "EVO", value: "Debuted as EVO 2023 main game — massive tournament turnout", year: 2023 },
  ],
  variants: ["sf6-standard", "sf6-deluxe", "sf6-ultimate", "sf6-year-1-pass", "sf6-year-2-pass", "sf6-year-3-pass"],
  relatedSports: ["street-fighter-5", "street-fighter-3-third-strike", "tekken-8", "mortal-kombat-1", "guilty-gear-strive"],
  skills: ["frame-perfect input", "Drive Gauge management", "matchup knowledge (character-specific)", "adaptation + mental stack"],
  strategies: [
    { title: "Drive Gauge economy", body: "Don't burn Drive Rush too aggressively — Burnout state can lose entire round." },
    { title: "Perfect Parry vs Drive Impact", body: "Learn when to parry vs. Drive Impact — wrong call = full punish combo." },
    { title: "Character-specific matchup knowledge", body: "Each 18-character matchup has distinct pressure + counter-play patterns; top-tier requires all 18 known." },
  ],
  terminology: [
    { term: "Drive Gauge / Drive System", meaning: "6-stock resource enabling Impact/Rush/Parry/EX" },
    { term: "Burnout", meaning: "Empty Drive Gauge stunned state" },
    { term: "Drive Impact", meaning: "Armored breakthrough attack" },
    { term: "Perfect Parry", meaning: "Frame-perfect parry refunding full Drive Gauge" },
    { term: "Modern / Classic Controls", meaning: "Accessible simplified vs traditional 6-button control schemes" },
    { term: "Level 1/2/3 Super Art", meaning: "Meter-cost cinematic super attacks" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "World Tour + Modern Controls", body: "Learn character basics via World Tour single-player + Modern Controls scheme." }] },
    { level: "intermediate", steps: [{ title: "Battle Hub Casual + Ranked climb", body: "Play Ranked; climb to Gold+; learn matchups." }] },
    { level: "advanced", steps: [{ title: "CPT / EVO local competition", body: "Regional Capcom Pro Tour events + qualify for majors." }] },
  ],
  faq: [
    { question: "What is Modern Controls in SF6?", answer: "Modern Controls simplifies traditional 6-button motion inputs into 4-button with auto-combos + button-hold specials. Reduces max damage by ~20% vs Classic Controls but is much more accessible for new players. Fully tournament-legal — many top players even use Modern for certain characters." },
    { question: "How does SF6 compare to SF5?", answer: "SF6 replaces SF5's V-System with the Drive System (unified 6-stock gauge for all defensive + offensive tools). Adds World Tour single-player + Battle Hub social lobby. Modern Controls is new. Broadly considered a significant improvement over SF5 in gameplay depth + accessibility + presentation." },
  ],
  wikipediaTitle: "Street Fighter 6",
  sources: [{ label: "Wikipedia — Street Fighter 6", url: "https://en.wikipedia.org/wiki/Street_Fighter_6", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default streetFighter6;
