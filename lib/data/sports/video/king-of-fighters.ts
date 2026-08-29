import type { Sport } from "@/lib/types";

export const kingOfFighters: Sport = {
  id: "king-of-fighters",
  slug: "king-of-fighters",
  name: "The King of Fighters",
  officialName: "The King of Fighters XV (SNK)",
  aliases: ["KOF", "KOF XV", "The King of Fighters", "SNK KOF"],
  shortDescription:
    "SNK's flagship 3v3 team-format 2D fighter (since 1994) — dominant in Latin America + China + Mexico + Southeast Asia; KOF XV (2022) revived the series as a Capcom Cup-tier esport with 100K+ USD prize pools.",
  longDescription:
    "The King of Fighters (SNK, first release 1994 on Neo Geo) is a 2D fighting game series notable for its 3v3 team format — each player picks 3 characters and cycles through them across a match. The series began with KOF '94 as an SNK crossover unifying characters from Fatal Fury, Art of Fighting, Ikari Warriors, and Psycho Soldier. Legendary entries include KOF '98 (widely considered the greatest KOF), KOF 2002, KOF XIII (2010 return to sprite art), and KOF XV (February 2022, current esport). KOF's biggest scene has always been outside Japan — Mexico + Latin America especially treat KOF as a national pastime with dedicated LAN scenes since the arcade era. China also has massive KOF communities. KOF XV has emerged as a Capcom Cup-tier esport with SNK World Championship (annual since 2022), $100K-200K prize pools, and Latin American players like Xiaohai (China) and El Rosa (Mexico) dominant. EVO always features KOF as a main-stage or side event.",

  category: "video-games",
  subCategory: "2D fighting game (3v3 team format)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (SNK, Osaka); massive Latin American + Chinese scenes",
  estimatedOrigin: "KOF '94 released August 1994 on Neo Geo; annual sequels 1994-2003; XI + XII + XIII 2005-2010; XIV 2016; XV February 2022",

  players: { min: 2, max: 2, note: "1v1 in-tournament; each player controls 3 characters (team of 3) sequentially." },
  field: {
    surfaceName: "2D fighting stage (digital arena)",
    dimensions: "Standard 2D fighter stage — ~5 character-widths across",
    description: "20+ themed stages across KOF entries; SNK's signature stage art + music since 1994 is a series hallmark.",
  },
  equipment: [
    { name: "Gaming PC / PS5 / PS4 / Xbox Series X", description: "Cross-platform via PSN + Steam; PS5 + PC standard for tournaments." },
    { name: "Arcade stick (HORI, Qanba, Razer Panthera)", description: "SNK's Neo Geo heritage still favors arcade sticks in top play." },
    { name: "Standard controller / Hitbox", description: "PS5 DualSense + Hitbox leverless controllers both viable." },
    { name: "In-game characters + team selection", description: "40+ characters in KOF XV: Kyo, Iori, Terry, Andy, Mai, Athena, Chizuru, Leona, Ralf, Clark, Robert, Ryo, King, Yuri, Vice, Mature, Blue Mary, Yashiro, Shermie, Chris, K', Maxima, Kula, Angel, and many more." },
  ],
  duration: { approximateMinutes: 8, structure: "Best-of-3 sets in tournament; each set = 3v3 team battle (up to 3 rounds); matches ~5-15 min per set." },
  objective: "Defeat all 3 of opponent's characters using your 3-character team.",
  matchStructure: "3v3 team format — Player 1 sends first character; Player 2 sends first character; loser sends next character until all 3 characters on one team are defeated. First to defeat all 3 wins the set.",

  basicRules: [
    { title: "3-character team", body: "Each player picks 3 characters + selects the order they will be sent out." },
    { title: "4-button system", body: "Weak Punch (A), Weak Kick (B), Strong Punch (C), Strong Kick (D). Simpler than 6-button Street Fighter." },
    { title: "Power gauge", body: "Builds up to 5 stocks (KOF XV); each stock fuels supers, EX moves, MAX Mode, or Climax Super." },
    { title: "MAX Mode", body: "Consumes 1 stock for temporary damage/combo buff; enables MAX-cancels for extended combos." },
    { title: "Climax Super", body: "3-stock hyper cinematic super; game-ending damage." },
  ],
  advancedRules: [
    { title: "Character rotation", body: "Losing character 1 forces you to send character 2 with any earned power stocks intact (partial resource carryover)." },
    { title: "EX Special moves", body: "Enhanced special moves cost 0.5 stock; add damage + priority + hit properties." },
    { title: "Shatter Strike (KOF XV)", body: "Universal armor-piercing counter attack; costs 1 stock; creates wall bounce for combo extension." },
    { title: "Guard cancel roll + Guard cancel blowback", body: "Defensive escape moves that cost 1 stock; interrupt opponent's blockstring." },
    { title: "Team order strategy", body: "Order matters — pick anchor character (best solo winner) last to close out sets." },
  ],
  scoring: {
    summary: "Team elimination — first player to defeat all 3 of opponent's characters wins the set.",
    winCondition: "Wipe all 3 opponent characters. Tournament set is best-of-3 or best-of-5.",
    breakdown: [
      { action: "Character defeated", points: "1 elimination" },
      { action: "Team wipe (3 eliminations)", points: "1 set win" },
      { action: "Perfect (no damage) round", points: "Bragging rights + Guts damage buff for next round" },
    ],
  },
  penalties: [
    { title: "Cheating / third-party mods", body: "Tournament DQ + SNK ban." },
    { title: "Ring-out (some KOF entries)", body: "Not applicable in modern KOF XV — no ring-out mechanic." },
    { title: "Unsportsmanlike conduct at LAN", body: "Warning → DQ; enforced by SNK World Championship or EVO officials." },
  ],

  positions: [
    { name: "Point character", role: "First character sent out; typically fast + safe pressure character.", count: 1 },
    { name: "Middle character", role: "Mid-battle swap; often a battery-building character or damage dealer.", count: 1 },
    { name: "Anchor character", role: "Last character; highest solo winning potential + best comeback super access.", count: 1 },
  ],
  officiating: {
    officials: ["Head referee / TO (tournament organizer)", "Bracket runners", "Streamer/observer at featured matches"],
    summary: "Tournament format — TO adjudicates disputes; no real-time on-screen referee.",
  },

  governingBodies: [
    { name: "SNK Corporation (game developer + esports operator)", founded: 1978, headquarters: "Osaka, Japan", website: "https://www.snk-corp.co.jp" },
    { name: "EVO Championship Series", founded: 1996, headquarters: "USA (Sony/RTS-owned)" },
    { name: "SNK World Championship (official circuit)", founded: 2022, headquarters: "Japan (SNK)" },
  ],
  majorCompetitions: [
    { name: "SNK World Championship (KOF XV)", frequency: "annual", founded: 2022, region: "worldwide (regional qualifiers + finals)" },
    { name: "EVO Championship Series (Las Vegas — KOF main or side)", frequency: "annual (August)", founded: 1996, region: "worldwide" },
    { name: "Copa Latinoamericana (LATAM circuit)", frequency: "annual", founded: 2020, region: "Latin America (Mexico + Chile + Argentina + Brazil dominant)" },
    { name: "OMEGA KOF Championships (China)", frequency: "annual", founded: 2010, region: "China (KOF community is massive)" },
  ],
  countriesPlayed: ["MX", "CL", "AR", "BR", "CN", "TW", "JP", "US", "KR", "FR", "IT", "ES"],
  famousAthletes: [
    "Xiaohai (Zeng Zhuojun, China — KOF XIV EVO champion; multiple SNK World Championship top-3)",
    "El Rosa (Mexico — SNK World Championship 2022 KOF XV winner)",
    "MadKof (Mexico — KOF XV top competitor)",
    "Kula (Chile — LATAM KOF star)",
    "Guerra (Chile — long-time KOF pro)",
    "Yuki Wolf (Japan — legendary KOF '98 player)",
    "Reynald (USA — KOF XIII EVO 2013 champion)",
  ],
  records: [
    { title: "Largest KOF EVO field", holder: "KOF XIII at EVO 2013", value: "~500 entrants — highest for series since arcade era", year: 2013 },
    { title: "First non-Latin American SNK World Championship (KOF XV)", holder: "El Rosa (Mexico)", value: "Mexican dominance continued at SNK's flagship official event", year: 2022 },
    { title: "Longest continuously running fighting game series (annual releases)", holder: "The King of Fighters", value: "10 consecutive annual releases 1994-2003 — unmatched in fighting game history", year: 2003 },
  ],

  variants: ["kof-xv-2022-current", "kof-xiv-2016-3d-transition", "kof-xiii-2010-sprite-classic-revival", "kof-2002-um-classic-community-favorite", "kof-98-um-fe-arcade-era-goat"],
  relatedSports: ["street-fighter", "tekken", "guilty-gear", "fatal-fury", "samurai-shodown", "mortal-kombat"],

  skills: ["team composition + order selection", "character matchup depth (40+ characters)", "power stock resource management", "hop / short-hop / super-jump movement mastery", "corner combo optimization", "reaction throws + tech mixups"],
  strategies: [
    { title: "Team order matters", body: "Weakest solo character mid; strongest solo character last (anchor) to close out sets with full resources." },
    { title: "Battery + user pairing", body: "Pair a battery character (builds meter quickly) with a stock user (Climax Super finisher)." },
    { title: "Hop mixups", body: "KOF's short hop is faster than full jump — devastating overhead mixup with fast normals; core offensive tool." },
    { title: "Corner damage optimization", body: "Combos deal 40-60% more damage in corner; push opponent to corner then hard-punish." },
    { title: "Bait then whiff-punish supers", body: "Blocking is safer than dodging in KOF; bait opponent supers on block, then whiff-punish with your own super for maximum damage." },
  ],

  terminology: [
    { term: "MAX Mode", meaning: "Damage/combo buff mode; costs 1 stock." },
    { term: "Climax Super", meaning: "3-stock hyper cinematic super; game-ending damage." },
    { term: "Hop / Short Hop", meaning: "Fast controllable jump — signature KOF movement." },
    { term: "Guard Cancel Roll", meaning: "1-stock defensive escape roll from blockstring." },
    { term: "Anchor", meaning: "Last character in your team; typically strongest solo pick." },
    { term: "Shatter Strike (XV)", meaning: "1-stock universal counter with wall-bounce; combo extender." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn KOF XV tutorial + trials", body: "In-game tutorial + character trials teach hop movement + team format + stock system." },
      { title: "Master 1 character across the team", body: "Pick 3 easy characters (Kyo, Terry, Ryo, Athena) and learn 1 combo per position." },
      { title: "Play online ranked to Master+ rank", body: "KOF XV ranked mode has clear tier progression; climb to Master rank for competitive matches." },
    ]},
    { level: "advanced", steps: [
      { title: "Compete in local weeklies + LATAM tournaments", body: "Latin America has the largest KOF scene; Mexican weeklies are strongest training ground." },
      { title: "Qualify for SNK World Championship regional", body: "SNK's official circuit runs regional qualifiers (LATAM, Asia, EMEA, NA) into World Finals." },
      { title: "EVO / EVO Japan KOF main event", body: "KOF is a periodic EVO main or side stage event; Latin American players dominate international brackets." },
    ]},
  ],

  faq: [
    { question: "Which KOF is the best?", answer: "KOF '98 (Ultimate Match) is widely considered the greatest KOF for competitive play — perfect balance + iconic roster + refined mechanics. KOF 2002 UM is a close second. KOF XIII (2010) is the peak sprite-art entry. KOF XV (2022) is the current tournament flagship. Many pro players play multiple entries simultaneously." },
    { question: "Why is KOF so popular in Latin America?", answer: "The KOF series arrived in Latin America via Neo Geo arcade cabinets in the 1990s and became deeply embedded in Mexican + Central American + South American arcade culture. KOF '98 in particular is treated as a national pastime in Mexico with dedicated weekly LAN tournaments continuing today. LATAM players consistently dominate international KOF competition." },
    { question: "How is KOF different from Street Fighter or Tekken?", answer: "KOF's unique feature is 3v3 team format — each player picks 3 characters and cycles through them. This makes team composition + order strategy central. KOF also has faster movement (short hops), a 4-button system (vs. Street Fighter's 6), and a Neo Geo-era arcade feel that distinguishes it from more modern designs like Tekken 8 or Street Fighter 6." },
  ],

  wikipediaTitle: "The King of Fighters",
  sources: [
    { label: "SNK Corporation", url: "https://www.snk-corp.co.jp", publisher: "SNK" },
    { label: "Wikipedia — The King of Fighters", url: "https://en.wikipedia.org/wiki/The_King_of_Fighters", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
