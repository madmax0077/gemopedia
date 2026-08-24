import type { Sport } from "@/lib/types";

export const leagueOfLegends: Sport = {
  id: "league-of-legends",
  slug: "league-of-legends",
  name: "League of Legends",
  officialName: "League of Legends",
  aliases: ["LoL", "League"],
  shortDescription:
    "Free-to-play 5v5 multiplayer online battle arena (MOBA) in which two teams of five champions each fight to destroy the opposing team's Nexus at the base of a three-lane map called Summoner's Rift.",
  longDescription:
    "League of Legends is a 5v5 multiplayer online battle arena (MOBA) game developed and published by Riot Games. It was released in October 2009 and has grown to become one of the most-played PC games in the world, with 150+ million monthly active players. Two teams of five players, each controlling a unique 'champion' (from a pool of 160+), face off on a three-lane map called Summoner's Rift. Each player earns gold and experience by killing enemy minions, jungle monsters, and champions, then spends gold on items that make their champion stronger. The team that destroys the enemy team's Nexus first wins. LoL is the top-grossing esport in history — the annual World Championship (Worlds) has been played since 2011, awarding a Summoner's Cup and multi-million-dollar prize pools. The 2022 Worlds final in San Francisco averaged 4+ million concurrent viewers.",

  category: "esports",
  subCategory: "MOBA",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "USA (Riot Games, Los Angeles)",
  estimatedOrigin: "Released October 27, 2009 (public beta April 2009); inspired by Warcraft III's DotA mod",

  players: { min: 10, max: 10, note: "5 vs 5 in ranked and pro play; ARAM (Howling Abyss) also 5v5 but on a single lane map." },
  field: {
    surfaceName: "Summoner's Rift",
    dimensions: "Rectangular 3-lane map (~1400 × 1400 game units). Top, mid, bottom lanes; jungle areas between; each team's base in opposite corners.",
    description: "Three lanes (top, mid, bot) connect the two bases (Nexuses). Each lane has 3 turrets, 2 inhibitors, and a Nexus at each end. Between lanes is the 'jungle' with neutral monsters (buffs, dragons, Baron Nashor) providing resources and objectives.",
  },
  equipment: [
    { name: "PC (Windows/Mac)", description: "Client is free; minimum specs are modest (Intel HD 4000-level GPU). Pro tournaments use ~240 Hz monitors." },
    { name: "Keyboard and mouse", description: "Fast keys and precise mouse required; gaming peripherals standard at pro level." },
    { name: "Riot Client", description: "Free game client; ~20 GB installation." },
    { name: "RP (Riot Points)", description: "Premium currency for cosmetic skins; game-changing items are earned in-match." },
  ],
  duration: {
    approximateMinutes: 30,
    structure: "Solo Queue match: 25-40 min average; ranked matches average 30 min. Professional matches: 30-45 min; BO5 series takes 3-4 hours.",
    note: "Fastest professional wins under 20 minutes; longest recorded 90+ minutes.",
  },
  objective: "Destroy the enemy team's Nexus by pushing through 3 lanes of turrets and inhibitors, working with your team of 5.",
  matchStructure:
    "Champion select: teams draft/ban champions in a specific order (bans → picks → bans → picks). Match begins with all 10 champions in their base. Players buy starting items, walk to lane assignments (top, jungle, mid, bot lane with ADC + Support), and farm minions and jungle camps for gold. As the game progresses, teams contest objectives (Dragons for buffs, Baron for empowered minions, Rift Herald), take turrets, and eventually push into the enemy base to destroy the Nexus.",

  basicRules: [
    { title: "5v5 team match", body: "Two teams of 5 unique champions face off on Summoner's Rift." },
    { title: "Destroy the Nexus", body: "Push through 3 turrets in a lane, destroy the inhibitor, then break the Nexus turrets and the Nexus itself." },
    { title: "Farm minions and jungle monsters", body: "Kill last-hit minions and jungle monsters for gold and experience." },
    { title: "Buy items", body: "Return to base (recall) to spend gold on items that increase your champion's power." },
    { title: "Objectives", body: "Contest Dragons, Rift Herald, and Baron Nashor for temporary team-wide buffs." },
    { title: "Runes and summoner spells", body: "Pre-match, players choose runes (permanent buffs) and 2 summoner spells (Flash, Ignite, Teleport, etc.)." },
    { title: "Champion mastery", body: "160+ champions, each with 4-5 abilities and a unique passive. Meta champions rotate each patch." },
  ],
  advancedRules: [
    { title: "Draft phase (ranked/pro)", body: "6 bans per team (10 total). Draft picks alternate: 1 blue → 2 red → 2 blue → 2 red → 2 blue → 1 red. Counter-picks vital." },
    { title: "Dragon soul", body: "First team to slay 4 dragons of any element earns the permanent 'Dragon Soul' buff plus stat boosts based on element (infernal, mountain, cloud, ocean, hextech, chemtech)." },
    { title: "Elder Dragon", body: "Spawns 6 min after 4th dragon. Grants execute-damage buff for 2.5 min — often winning-team-only." },
    { title: "Baron Nashor", body: "Spawns at 20 min. Grants Hand of Baron buff for 3 min: strong minion push and stats — often used to close a game." },
    { title: "Turret plates", body: "First 14 min: turrets have 5 plates each worth 160 gold. Diving under-turret is deterred by plate damage." },
    { title: "Vision and wards", body: "Wards give vision. Trinket (yellow ward, 90s), Control Ward (denies vision), Sweeper (removes ward)." },
    { title: "Role composition", body: "Standard: Top (bruiser/tank), Jungle (initiator/carry), Mid (mage/assassin), ADC (marksman), Support (utility/enchanter/engage)." },
  ],
  scoring: {
    summary: "Only match objective is destroying the enemy Nexus. Ranked ladder uses LP (League Points) and a 9-tier ranking system.",
    breakdown: [
      { action: "Kill / assist", points: "Grants gold and XP" },
      { action: "Structure gold", points: "Turret 100+ gold (team share), inhibitor 200 gold" },
      { action: "Dragon / Baron", points: "Team-wide gold and buff" },
      { action: "Ranked win/loss", points: "±LP; 100 LP promotes divisions (Iron → Bronze → Silver → Gold → Platinum → Emerald → Diamond → Master → GM → Challenger)" },
    ],
    winCondition: "Destroy the enemy Nexus. In professional Bo3/Bo5, best of 3 or 5 games decides series.",
  },

  positions: [
    { name: "Top Laner", role: "Solo top lane; usually a tanky bruiser or split-pusher.", count: 1 },
    { name: "Jungler", role: "Kills jungle monsters, ganks lanes, controls objectives (dragon/baron).", count: 1 },
    { name: "Mid Laner", role: "Solo mid lane; usually a mage or assassin; roams to influence sidelanes.", count: 1 },
    { name: "Bot Laner / ADC", role: "Ranged marksman; scales into late-game damage carry.", count: 1 },
    { name: "Support", role: "Protects ADC bot lane, sets up ganks, provides vision, engages fights.", count: 1 },
  ],
  officiating: {
    officials: ["Match Referees (LCK, LEC, LCS, LPL)", "Riot Tournament Ops", "Anti-Cheat System (Vanguard)"],
    summary: "LAN pro matches have on-site refs handling pause and cheat calls. Online cheat-detection via Riot Vanguard runs at kernel level.",
  },
  governingBodies: [
    { name: "Riot Games (developer, publisher, esports operator)", founded: 2006, headquarters: "Los Angeles, USA", website: "https://www.riotgames.com/" },
  ],
  majorCompetitions: [
    { name: "League of Legends World Championship (Worlds)", frequency: "annual (Oct-Nov)", founded: 2011, region: "rotating worldwide" },
    { name: "Mid-Season Invitational (MSI)", frequency: "annual (May)", founded: 2015, region: "worldwide" },
    { name: "LCK (Korea)", frequency: "spring + summer split", founded: 2015, region: "South Korea" },
    { name: "LPL (China)", frequency: "spring + summer split", founded: 2013, region: "China" },
    { name: "LEC (Europe)", frequency: "spring + summer + winter split", founded: 2013, region: "Europe" },
    { name: "LCS (North America)", frequency: "spring + summer split", founded: 2013, region: "North America" },
  ],
  countriesPlayed: ["KR", "CN", "US", "DE", "FR", "GB", "PL", "SE", "BR", "TW", "VN", "TR", "ES", "IT", "CA", "AU"],
  famousAthletes: [
    "Lee 'Faker' Sang-hyeok (South Korea) — 4× World Champion (2013, 2015, 2016, 2023); T1 mid laner; GOAT of LoL",
    "Jian 'Uzi' Zi-Hao (China) — legendary ADC; MSI 2018 champion",
    "Lee 'Deft' Hyuk-kyu (South Korea) — 2022 World Champion; ADC across 10-year career",
    "Choi 'Zeus' Woo-je (South Korea) — 2023 World Champion top laner",
    "Bengi (Bae Seong-woong, South Korea) — 3× World Champion jungler (SKT T1)",
    "MadLife (Hong Min-gi, South Korea) — pioneering support; legendary Blitzcrank hook artist",
    "Doublelift (Yiliang Peng, USA) — most-decorated NA ADC; 8× LCS champion",
    "Caps (Rasmus Winther, Denmark) — G2/Fnatic mid laner; MSI 2019 champion",
    "Perkz (Luka Perković, Croatia) — G2 legend, MSI 2019 champion",
  ],
  records: [
    { title: "Most World Championships", holder: "Faker (T1)", value: "4 (2013, 2015, 2016, 2023)", year: 2023 },
    { title: "Peak Worlds finals viewership", holder: "2022 Worlds Final DRX vs T1", value: "5.14M average concurrent (excl. China)", year: 2022 },
    { title: "Peak concurrent viewers (all-time)", holder: "2020 Worlds Final DAMWON vs Suning", value: "45.9M peak (incl. China)", year: 2020 },
    { title: "Longest professional match", holder: "Various", value: "1h 34min (2019, LCK Summer Playoff)", year: 2019 },
    { title: "Fastest professional victory", holder: "Team Liquid vs 100 Thieves", value: "17:45 (LCS 2019)", year: 2019 },
  ],

  variants: ["league-of-legends-summoners-rift", "aram", "teamfight-tactics", "wild-rift", "lol-arena", "urf-mode"],
  relatedSports: ["dota-2", "smite", "heroes-of-the-storm", "valorant"],

  skills: [
    "mechanical execution (last-hitting, ability combos)",
    "map awareness",
    "champion knowledge (160+ champions × 4-5 abilities)",
    "team communication (shot-calling)",
    "objective control decision-making",
    "vision game (ward placement)",
    "mental composure across 30-min matches",
  ],
  strategies: [
    { title: "Wave control", body: "Managing minion waves (freezing, slow-pushing, hard-shoving) to deny XP/gold to opponent or set up ganks." },
    { title: "Vision game", body: "Ward key jungle entrances and objectives; deny enemy vision with sweeper + control wards before dragon/baron." },
    { title: "Objective priority", body: "Trade a tower for a dragon early; grab Rift Herald for tower plate gold; save Baron for level-3 dragon soul window." },
    { title: "Composition types", body: "Choose comp with clear win condition: engage (Malphite Kennen), poke (Xerath Varus), split-push (Tryndamere), 1-3-1, or protect-the-carry." },
    { title: "Mid-late game tempo", body: "Elite teams play 'macro' — always doing SOMETHING (pressuring lane, warding, taking objective) rather than sitting still." },
  ],

  terminology: [
    { term: "CS (Creep Score)", meaning: "Number of minions/monsters last-hit; primary gold source." },
    { term: "Gank", meaning: "Jungler entering a lane to help take down enemy laners (usually via a flank)." },
    { term: "Farm", meaning: "Killing minions and jungle camps for gold/XP; 'farming safely' means avoiding fights while building income." },
    { term: "Roam", meaning: "Leaving your lane to help teammates elsewhere." },
    { term: "Trade", meaning: "Short exchange of damage between champions; positive trades take less damage than opponent." },
    { term: "Poke", meaning: "Long-range abilities that chip HP without committing." },
    { term: "Engage / Initiate", meaning: "Starting a team fight with a hard CC ability (e.g., Malphite ult)." },
    { term: "Peel", meaning: "Protecting a squishy carry from divers with CC and body-blocking." },
    { term: "ADC (AD Carry)", meaning: "Attack Damage Carry — bot lane marksman who scales into main late-game damage." },
    { term: "Support", meaning: "Bot lane partner; provides utility, vision, and engage/peel." },
    { term: "Jungle", meaning: "Non-laned player who kills jungle monsters and roams to gank lanes." },
    { term: "Baron", meaning: "Baron Nashor — 20-min jungle boss granting team-wide buff." },
    { term: "Drake / Dragon", meaning: "Elemental drakes at bot side jungle granting permanent stat buffs; 4 = Soul." },
    { term: "Recall (B)", meaning: "Teleport back to base to heal/shop (with 8-sec channel)." },
    { term: "Flash", meaning: "Summoner spell — 5m instant teleport; most-used spell in the game." },
    { term: "Ward", meaning: "Visible item placed to reveal an area of the map." },
    { term: "Ace", meaning: "Killing all 5 members of the enemy team." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Pick a role and 3 champions", body: "Choose your preferred role (Top/Jungle/Mid/ADC/Support) and stick to 3 champions to learn deeply." },
      { title: "Learn 20-min basics", body: "Farm minions to 100 CS at 20 min; don't die; ward river." },
      { title: "Runes and items", body: "Follow recommended rune pages and item paths on U.GG or OP.GG until you understand alternatives." },
      { title: "Bot / co-op vs AI", body: "Learn abilities and combos against bots before ranked queue." },
    ] },
    { level: "intermediate", steps: [
      { title: "Wave management", body: "Learn to freeze, slow-push, and hard-shove waves to control tempo." },
      { title: "Jungle timing", body: "Know spawn times: dragon 5 min, respawn 5 min; Baron 20 min, respawn 6 min; Herald 8 min." },
      { title: "Ranked ladder", body: "Play 20 placement games; climb through Iron → Silver → Gold → Platinum with focused practice." },
      { title: "Objective priority", body: "Always know: is our team taking dragon, or splitting to sidelane, or grouping mid?" },
    ] },
    { level: "advanced", steps: [
      { title: "Champion pool expansion", body: "Learn 3-5 champions per role for flexibility in draft and matchup coverage." },
      { title: "VOD review", body: "Watch pro streams (Faker, Doublelift, Caps) and review your own losses for macro mistakes." },
      { title: "Communication (5-stack)", body: "Play scrims with coaches; learn shot-calling and role-swap coordination." },
      { title: "Physical/mental training", body: "Elite pros train 8-12 hours/day + scrims; sleep, diet, hand health matter as much as game time." },
    ] },
  ],
  faq: [
    { question: "Is League of Legends free?", answer: "Yes — the game and champions are earned free via play. Cosmetic skins and RP (Riot Points) are premium purchases; nothing pay-to-win exists." },
    { question: "Who is Faker?", answer: "Lee 'Faker' Sang-hyeok is a Korean mid laner for T1. Widely considered the greatest LoL player of all time, he has won 4 World Championships (2013, 2015, 2016, 2023) — more than any other player." },
    { question: "How long is a LoL match?", answer: "Typical Solo Queue match: 25-40 minutes. Faster stomps end in 20 min; longer games can reach 60 min. Professional Bo5 series can last 3-4 hours." },
    { question: "What's the difference between LoL and Dota 2?", answer: "Both are 5v5 MOBAs derived from DotA mod. LoL is faster, more mechanics-focused, with 160+ champions and shorter matches. Dota 2 has denying, more items, hero-comp complexity, and longer matches." },
    { question: "How many champions are there?", answer: "165+ as of 2024. Riot releases ~4-6 new champions per year." },
    { question: "What's Wild Rift?", answer: "Wild Rift is a mobile version of LoL for iOS/Android — same MOBA formula but shorter (15-20 min) matches, simplified UI, and touch/joystick controls." },
  ],

  wikipediaTitle: "League of Legends",
  sources: [
    { label: "Wikipedia — League of Legends", url: "https://en.wikipedia.org/wiki/League_of_Legends", publisher: "Wikipedia" },
    { label: "Riot Games — League of Legends", url: "https://www.leagueoflegends.com/", publisher: "Riot Games" },
    { label: "LoL Esports", url: "https://lolesports.com/", publisher: "Riot Games" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
