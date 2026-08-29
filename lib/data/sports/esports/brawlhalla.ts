import type { Sport } from "@/lib/types";

export const brawlhalla: Sport = {
  id: "brawlhalla",
  slug: "brawlhalla",
  name: "Brawlhalla",
  officialName: "Brawlhalla",
  aliases: ["BH"],
  shortDescription:
    "Blue Mammoth Games (Ubisoft) free-to-play 2D platform fighter (Oct 17, 2017 PS4/Xbox/PC/Switch/Mobile) — 8-player brawls with 60+ Legends. Smash-like knockback + ring-out mechanics. 100M+ registered players; Brawlhalla World Championship $1M+ prize pool.",
  longDescription:
    "Brawlhalla is a free-to-play 2D platform fighter developed by Blue Mammoth Games + published by Ubisoft (acquired 2018) — released October 17, 2017 for PS4, Xbox One, PC (Steam), Nintendo Switch, iOS, Android. Cross-play across all platforms. 60+ Legends (playable characters) with unique 3-weapon combinations from a pool of 12 weapon types (Sword, Axe, Blasters, Bow, Hammer, Katars, Lance, Rocket Lance, Scythe, Spear, Gauntlets, Orb). Signature Super Smash Bros.-inspired mechanic: fight on platforms, knockback increases with damage taken, ring out enemy off stage edges. 1v1 + 2v2 competitive modes + 4-8 player casual FFA + Custom Rooms + Ranked Ladder. Cross-play + free content model made it extremely accessible. Brawlhalla World Championship (BCX) held annually since 2016 with $1M+ prize pool from 2020+; Ubisoft-funded esports circuit. 100M+ registered players + 20M+ active players. Constant collaborations: WWE, Kung Fu Panda, Shovel Knight, Adventure Time, Ben 10, Assassin's Creed, Prince of Persia, Rayman — long list of guest Legends.",
  category: "esports",
  subCategory: "2D platform fighter (F2P)",
  sportType: "team", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "21st-century", popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (Blue Mammoth Games, Atlanta) → Ubisoft",
  estimatedOrigin: "Released Oct 17, 2017 by Blue Mammoth Games; acquired by Ubisoft 2018; BCX 2016+",
  players: { min: 1, max: 8, note: "1v1 Ranked (primary competitive), 2v2 Ranked, 4-8 player FFA casual." },
  equipment: [
    { name: "PS4/PS5, Xbox One/Series, PC (Steam), Switch, iOS/Android", description: "Cross-play across all platforms — full mobile + console + PC parity." },
    { name: "Standard controller or M+KB", description: "Cross-play input-matched; controller preferred by most pros." },
  ],
  duration: { approximateMinutes: 5, structure: "Match ~2-4 min; competitive set (best-of-5 or Bo7 games) ~15-30 min." },
  objective: "Ring out opponent off stage edges; reduce enemy stocks (typically 3) to zero; win competitive set.",
  matchStructure: "1v1 Ranked (primary), 2v2 Ranked, 4-8 player FFA. Ranked bracket in tournaments (single-elim + double-elim).",
  basicRules: [
    { title: "Knockback increases with damage taken", body: "Higher damage = greater knockback = easier ring-out." },
    { title: "3 stocks per match (competitive)", body: "Each player starts with 3 stocks; ring-out = -1 stock; last-stock-standing wins." },
    { title: "Weapons pick up on stage", body: "Legends spawn with 2 weapons; can pick up items + weapons off stage during match." },
  ],
  advancedRules: [
    { title: "Signature moves + neutral attacks", body: "Each Legend + weapon combo has unique signatures (special moves) + neutral light/heavy attacks." },
    { title: "Gadgets (bombs, mines, spike bomb)", body: "Stage-spawn items that can be picked up + thrown/deployed for KO setups." },
    { title: "Dodge + shielding + edge-guard", body: "Sidestep dodges, air dodge, ledge dodge; edge-guarding = punishing enemy return from off-stage." },
  ],
  scoring: {
    summary: "Last player with stocks remaining wins match.",
    winCondition: "Reduce enemy stocks to zero.",
    breakdown: [{ action: "Ring-out KO", points: "-1 enemy stock" }, { action: "Match win", points: "+1 in Bo5/Bo7 set" }],
  },
  penalties: [
    { title: "Self-KO (walking off stage)", body: "-1 own stock — punish for poor edge control." },
    { title: "Time out (rare)", body: "Match ends with stocks + damage counting for winner." },
  ],
  positions: [{ name: "Legend (60+ characters)", role: "Solo character selection per match; 2 weapon choices per Legend.", count: 1 }],
  officiating: { officials: ["Brawlhalla Esports Referees", "Anti-cheat + report system"], summary: "Ubisoft esports team + anti-cheat + community moderation." },
  governingBodies: [
    { name: "Blue Mammoth Games (Ubisoft subsidiary)", founded: 2009, headquarters: "Atlanta, Georgia" },
    { name: "Ubisoft Entertainment SA", founded: 1986, headquarters: "Montreuil, France" },
  ],
  majorCompetitions: [
    { name: "Brawlhalla World Championship (BCX)", frequency: "annual", founded: 2016, region: "worldwide finals" },
    { name: "Brawlhalla Championship Series (BCS)", frequency: "annual multi-region", founded: 2016, region: "regional qualifiers" },
    { name: "Ubisoft Brawlhalla Pro Series", frequency: "annual", founded: 2018, region: "regional" },
    { name: "Community Grand Slam events", frequency: "monthly", founded: 2018, region: "regional" },
  ],
  countriesPlayed: ["global — universally free-to-play"],
  famousAthletes: ["Sandstorm (USA) — multi-time BCX champion", "Blew (USA)", "Sniper (USA) — 1v1 legend", "SweetieHere (USA — women's champion)", "Fenrir (SWE)"],
  records: [
    { title: "100M+ registered players", holder: "Ubisoft / Blue Mammoth", value: "Over 100 million registered players worldwide since launch", year: 2023 },
    { title: "BCX prize pool $1M+", holder: "Ubisoft", value: "Brawlhalla World Championship prize pool $1 million+ from 2020 onwards", year: 2020 },
    { title: "Ubisoft acquisition 2018", holder: "Ubisoft", value: "Ubisoft acquired Blue Mammoth Games 2018 to formalise Brawlhalla as flagship platform fighter", year: 2018 },
  ],
  variants: ["brawlhalla-1v1", "brawlhalla-2v2", "brawlhalla-8player-ffa", "brawlhalla-experimental"],
  relatedSports: ["super-smash-bros", "rivals-of-aether", "multiversus", "nickelodeon-all-star-brawl"],
  skills: ["neutral spacing + weapon-specific mixups", "edge-guard + recovery mind games", "gadget + item usage", "matchup knowledge (60+ Legends × 12 weapons)"],
  strategies: [
    { title: "Weapon-specific matchup mastery", body: "Each of 12 weapons has distinct spacing + combo game; matchup knowledge = free wins." },
    { title: "Edge-guard aggression", body: "Aggressive off-stage edge-guarding = frequent KOs at low damage." },
    { title: "Gadget zoning", body: "Use stage-spawn bombs + mines for zone control + setup KO opportunities." },
  ],
  terminology: [
    { term: "Legend", meaning: "Playable character" },
    { term: "Ring out / KO", meaning: "Knocking enemy off stage edge = -1 stock" },
    { term: "Signature", meaning: "Weapon-specific special move" },
    { term: "Neutral attack", meaning: "Standard light/heavy attack (no directional input)" },
    { term: "Dodge", meaning: "Directional dodge or air dodge for defense" },
    { term: "Gadget", meaning: "Stage-spawn item (bomb, mine, spike bomb)" },
    { term: "BCX / BCS", meaning: "Brawlhalla World Championship / Championship Series" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Free Legend rotation + FFA casual", body: "Learn basics with 6-Legend free rotation + casual 8-player FFA." }] },
    { level: "intermediate", steps: [{ title: "Ranked 1v1 climb to Diamond", body: "Ranked 1v1 climb + main 1-2 Legends deeply." }] },
    { level: "advanced", steps: [{ title: "BCS + BCX competitive", body: "Compete in Championship Series regional events + qualify for BCX." }] },
  ],
  faq: [
    { question: "How is Brawlhalla different from Super Smash Bros?", answer: "Similar platform-fighter genre (knockback + ring-out). Brawlhalla is free-to-play, fully cross-platform (PC + console + mobile), and uses different Legend/weapon system (2-weapon per Legend from 12-weapon pool). Smash Bros is Nintendo exclusive + character-focused. Brawlhalla has larger tournament prize pools ($1M+ BCX vs. Smash Ultimate community-funded majors)." },
    { question: "Is Brawlhalla completely free to play?", answer: "Yes — fully free with cosmetic + Legend-unlock monetisation. 6-Legend free weekly rotation; permanent unlocks via in-game gold (earned by play) or real-money mammoth coins. All gameplay content free; no P2W." },
  ],
  wikipediaTitle: "Brawlhalla",
  sources: [{ label: "Wikipedia — Brawlhalla", url: "https://en.wikipedia.org/wiki/Brawlhalla", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default brawlhalla;
