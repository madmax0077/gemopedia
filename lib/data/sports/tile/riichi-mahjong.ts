import type { Sport } from "@/lib/types";

export const riichiMahjong: Sport = {
  id: "riichi-mahjong",
  slug: "riichi-mahjong",
  name: "Riichi Mahjong",
  officialName: "Japanese Riichi Mahjong (立直麻雀)",
  aliases: ["Japanese Mahjong", "Riichi", "リーチ麻雀", "Reach Mahjong"],
  shortDescription:
    "The dominant Japanese variant of mahjong (立直麻雀) — 4-player tile game with the signature 'riichi' declaration betting on a ready hand; heavily developed pro leagues (M.League + WRC + JPML) and cultural cornerstone of Japan since the 1920s.",
  longDescription:
    "Riichi Mahjong (立直麻雀, Rīchi Mājan) is the Japanese variant of mahjong and the most-played mahjong competitive format globally. Introduced from China to Japan in the 1920s, Riichi evolved unique rules — most famously the 'riichi' declaration where a player who has a tenpai hand (1 tile away from winning) declares riichi, bets 1000 points, and must play with all their tiles visible thereafter. Also unique: dora (bonus indicator tiles), ura-dora (hidden bonus tiles revealed after winning with riichi), sanshoku (matching sequences across suits), and complex yaku (scoring category) requirements. Any winning hand MUST have at least one yaku. The World Riichi Championship (WRC) has been held every 3 years since 2014. In Japan, the M.League (Mahjong League, launched 2018) is a fully-franchised professional league with 8 corporate-sponsored teams (KADOKAWA Sakura Knights, KONAMI Falcons, EX Furinkazan, etc.) playing 90+ matches per season, broadcast on Japanese TV and streaming. Legendary players: Suzuki Taro, Osamu Koike, Naoyuki Tokioka, Bakase (M.League MVPs), and Naoki Yasuura.",

  category: "tile-games",
  subCategory: "4-player draw-and-discard tile game (Japanese variant)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (adapted from Chinese mahjong 1920s); M.League launched Tokyo 2018",
  estimatedOrigin: "Chinese mahjong introduced to Japan 1920s; Riichi rules crystallized 1950s-60s; JPML (Japan Pro Mahjong League) 1981; M.League 2018; WRC 2014",

  players: { min: 4, max: 4, note: "Exactly 4 players (East, South, West, North seats)." },
  equipment: [
    { name: "Set of 136 tiles (Japanese set)", description: "Same as Chinese mahjong minus the 8 flower/season tiles — 34 unique tile types × 4 copies each = 136 tiles. 3 numbered suits (Man/Pin/Sou 1-9) + 4 winds + 3 dragons." },
    { name: "Point sticks (chips)", description: "Sticks worth 100, 1000, 5000, 10000 points; each player starts with 25000 points." },
    { name: "Mahjong table + racks", description: "Traditional square table with rack per seat; automatic tables (jansou parlors) shuffle + build walls electronically." },
    { name: "Dora indicator tile", description: "One tile flipped face-up on dead wall at game start; the following tile in sequence becomes 'dora' bonus." },
  ],
  duration: { approximateMinutes: 90, structure: "One 'hanchan' (full game) = 8 hands (East + South rounds × 4 seats each); ~60-90 min. Half-game ('tonpuusen') = East round only, ~30-45 min." },
  objective: "Score more points than opponents by completing winning hands (agari) — 14 tiles arranged as 4 sets (sequences or triples) + 1 pair, meeting at least one yaku requirement.",
  matchStructure: "Hanchan format (8 hands) most common in pro play. Each hand: build wall (136 tiles), players draw + discard until someone wins or all tiles drawn (draw). Points transferred at end of each hand.",

  basicRules: [
    { title: "Draw and discard", body: "Each turn: draw 1 tile from wall, discard 1 tile. Hand always has 13 tiles (14 after draw)." },
    { title: "Call for open melds", body: "Call 'chi' (sequence from left player), 'pon' (triple from any player), or 'kan' (quadruple) on opponent discards to complete sets — but hand becomes open." },
    { title: "Winning: 4 sets + 1 pair + yaku", body: "Complete hand = 4 sets (chi/pon/kan) + 1 pair. Must include at least 1 yaku (scoring category)." },
    { title: "Riichi declaration", body: "Closed hand + 1 tile from winning = declare riichi, bet 1000 points, all subsequent discards must be from newly drawn tile. Reveals commitment." },
    { title: "Dora bonus tiles", body: "Tile after dora indicator = bonus. Each dora in winning hand = +1 han (multiplier)." },
  ],
  advancedRules: [
    { title: "Yaku (scoring categories)", body: "40+ yaku categories: pinfu, tanyao, yakuhai, sanshoku, itsu, honitsu, chinitsu, chiitoitsu, kokushi musou, suuankou. Must have at least 1 to win." },
    { title: "Han + Fu scoring", body: "Score = fu (base points, 20-110) × 2^(han + 2). Higher yaku = higher han. Yakuman = 32000 point cap." },
    { title: "Ura-dora reveal", body: "Winning with riichi reveals ura-dora (bottom of dora indicator) — free bonus dora tiles counted in hand." },
    { title: "Ippatsu bonus", body: "Winning within 1 turn of declaring riichi (before any pon/kan) = 1 bonus han." },
    { title: "Furiten rule", body: "Cannot ron (win from discard) on any tile that would complete a hand you previously discarded — closes off many wins." },
    { title: "Renchan (dealer repeats)", body: "Dealer's wins or draws = dealer repeats hand + bonus counter increases pot." },
  ],
  scoring: {
    summary: "Points transferred at end of each hand based on han + fu formula. Hanchan winner = highest final score.",
    winCondition: "After 8 hands, highest point total wins the hanchan (tournament ranking + M.League points).",
    breakdown: [
      { action: "1-2 han win (basic)", points: "1000-2600 points from opponents" },
      { action: "Mangan (5 han)", points: "8000 points (non-dealer) / 12000 (dealer)" },
      { action: "Haneman (6-7 han)", points: "12000 / 18000" },
      { action: "Baiman (8-10 han)", points: "16000 / 24000" },
      { action: "Sanbaiman (11-12 han)", points: "24000 / 36000" },
      { action: "Yakuman (13+ han)", points: "32000 / 48000 (cap)" },
    ],
  },
  penalties: [
    { title: "Chombo (rule violation)", body: "Illegal declaration, wrong hand shown, or invalid win = -8000 point penalty + hand replayed." },
    { title: "Cheating detected", body: "Immediate DQ + JPML / M.League suspension." },
    { title: "Time delay (M.League only)", body: "M.League has 10-15 sec per turn timer; timeout = forced random discard." },
  ],

  positions: [
    { name: "East (親 Oya, Dealer)", role: "Dealer position — wins score double + dealer repeats on win/draw.", count: 1 },
    { name: "South (南)", role: "Non-dealer seat.", count: 1 },
    { name: "West (西)", role: "Non-dealer seat.", count: 1 },
    { name: "North (北)", role: "Non-dealer seat.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (1)", "Automatic table monitors (2)", "Scorekeeper (M.League/WRC)"],
    summary: "M.League + WRC use referees + automatic table monitoring; casual play is self-refereed among 4 players.",
  },

  governingBodies: [
    { name: "Japan Professional Mahjong League (JPML) — 日本プロ麻雀連盟", founded: 1981, headquarters: "Tokyo, Japan", website: "https://www.ma-jan.or.jp" },
    { name: "M.League (Mahjong Professional League)", founded: 2018, headquarters: "Tokyo, Japan" },
    { name: "World Riichi Championship (WRC)", founded: 2014, headquarters: "European Mahjong Association" },
    { name: "Japan Mahjong Sport League (JMSL — competing body)", founded: 2013, headquarters: "Japan" },
  ],
  majorCompetitions: [
    { name: "M.League (Japan pro league)", frequency: "annual season (Oct-Apr)", founded: 2018, region: "Japan (8 franchised teams)" },
    { name: "World Riichi Championship (WRC)", frequency: "triennial", founded: 2014, region: "worldwide (Las Vegas 2014, Barcelona 2017, Copenhagen 2022)" },
    { name: "JPML Tenpaisen (Japan open championship)", frequency: "annual", founded: 1981, region: "Japan" },
    { name: "Saikyousen (Strongest Championship, Japan)", frequency: "annual", founded: 2010, region: "Japan" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "ES", "IT", "CN", "TW", "KR", "HK", "SE"],
  famousAthletes: [
    "Osamu Koike (Japan — M.League MVP; U-NEXT Pirates)",
    "Suzuki Taro (Japan — M.League MVP; KADOKAWA Sakura Knights captain)",
    "Naoyuki Tokioka (Japan — M.League MVP; KONAMI Falcons)",
    "Bakase (Yumiko Kobayashi, Japan — female M.League star; EX Furinkazan)",
    "Naoki Yasuura (Japan — JPML champion + M.League KADOKAWA)",
    "Hisato Sasaki (Japan — WRC 2017 champion)",
  ],
  records: [
    { title: "First franchised professional mahjong league", holder: "M.League (Japan)", value: "Founded 2018 with 8 corporate teams (KADOKAWA, KONAMI, TSUYA, U-NEXT, ABEMAS, Furinkazan, Pirates, Fenix) — first fully professional mahjong league worldwide", year: 2018 },
    { title: "Largest mahjong television audience", holder: "M.League broadcast on AbemaTV + Fuji TV", value: "M.League regularly draws 200K+ concurrent viewers on AbemaTV; annual finals 500K+ across Japan", year: 2023 },
    { title: "Largest WRC field", holder: "WRC 2022 Copenhagen", value: "170+ players from 30+ countries — largest international riichi tournament ever", year: 2022 },
  ],

  variants: ["riichi-japanese-standard", "sanma-3-player-riichi", "washizu-transparent-tile-variant-hollywood-legend", "aotenjou-no-han-cap-gambling-variant"],
  relatedSports: ["hong-kong-mahjong", "chinese-official-mahjong", "american-mahjong", "taiwanese-16-tile-mahjong", "mahjong-solitaire"],

  skills: ["yaku memorization (40+ categories)", "efficiency calculation (fastest tenpai path)", "opponent reading (discard analysis)", "defense (avoiding deal-in)", "riichi declaration timing (bet management)", "long-session mental endurance (60-90 min per hanchan)"],
  strategies: [
    { title: "Efficiency vs. speed", body: "Fastest tenpai is not always best — a cheaper hand that wins first often beats a bigger hand that never completes. Balance based on score + turn count." },
    { title: "Defense: reading dangerous tiles", body: "Track opponent discards to identify tiles they need — never discard those tiles, especially against a riichi declaration." },
    { title: "Push-fold decision", body: "When opponent declares riichi, choose to keep pushing your hand (if valuable + close) or fold (discard only safe tiles). Correct decision separates pros from amateurs." },
    { title: "Riichi timing", body: "Only declare riichi when you have a high-value ready hand + open path to win + can afford the 1000-point bet." },
    { title: "Dora hunting", body: "Prioritize hands containing dora indicator tiles — free han multiplier can double score." },
  ],

  terminology: [
    { term: "Riichi (立直)", meaning: "Ready hand declaration; bet 1000 points, tiles visible thereafter." },
    { term: "Tenpai (聴牌)", meaning: "Ready state — 1 tile away from winning." },
    { term: "Agari (和了)", meaning: "Winning declaration — 4 sets + 1 pair completed." },
    { term: "Tsumo (自摸)", meaning: "Winning by self-draw (from wall)." },
    { term: "Ron (栄)", meaning: "Winning by claiming an opponent's discard." },
    { term: "Yaku (役)", meaning: "Scoring category — must have ≥1 to win." },
    { term: "Han (翻)", meaning: "Score multiplier (doubles)." },
    { term: "Dora (ドラ)", meaning: "Bonus indicator tile — each dora in winning hand = +1 han." },
    { term: "Chombo (錯和)", meaning: "Rule violation penalty (-8000 points)." },
    { term: "Yakuman (役満)", meaning: "Highest tier hand (32000 pt cap); ~13 categories qualify." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn 5 essential yaku first", body: "Riichi, Tanyao (all simples), Yakuhai (value triples), Pinfu (all sequences), Chiitoitsu (7 pairs) — these cover 80% of amateur wins." },
      { title: "Play online at Tenhou or MahjongSoul", body: "Both are free online riichi platforms with strong AI + rank matchmaking; MahjongSoul is beginner-friendliest with anime UI." },
      { title: "Study opponent discards", body: "Discipline yourself to track discards from turn 1 — reading opponent hands is the pro skill." },
    ]},
    { level: "advanced", steps: [
      { title: "Reach 9-dan on Tenhou or Saint on MahjongSoul", body: "Both platforms have rigorous rank ladders; top ranks = pro-eligible." },
      { title: "JPML entrance test (Japan)", body: "Japan's pathway to pro — annual written + practical test; ~5% acceptance rate." },
      { title: "M.League draft or WRC qualification", body: "M.League drafts JPML pros; WRC qualifies via national federation seats every 3 years." },
    ]},
  ],

  faq: [
    { question: "How is Riichi Mahjong different from Chinese or Hong Kong Mahjong?", answer: "Riichi has unique rules — the riichi declaration itself, dora + ura-dora bonuses, ippatsu bonus, strict yaku requirement (must have at least 1 to win), and no flower tiles. Scoring is calculated by han + fu (vs. HK's simpler faan system). Riichi is deeper strategically due to riichi risk-reward and dora hunting, but Hong Kong and Chinese variants are faster paced." },
    { question: "Is M.League really a big deal in Japan?", answer: "Yes — M.League launched in 2018 has become Japan's most-followed mind-sport league, broadcast on AbemaTV + Fuji TV with 200K+ concurrent viewers regularly and 500K+ for finals. Corporate teams (KADOKAWA, KONAMI, TSUYA Sound House, U-NEXT, etc.) invest millions per season. Top players earn ¥10-30M annually + sponsorship." },
    { question: "How does someone become a pro riichi player in the West?", answer: "Play online at Tenhou or MahjongSoul to build ranking. Attend European Riichi Championship + regional tournaments (US Riichi Open, UK Open). WRC qualifies via national federation each 3 years. The European Mahjong Association is the umbrella body. No Western pro league yet, but strong amateur circuit exists." },
  ],

  wikipediaTitle: "Japanese mahjong",
  sources: [
    { label: "M.League (Japan)", url: "https://m-league.jp", publisher: "M.League" },
    { label: "European Riichi Mahjong Association", url: "https://mahjong-europe.org", publisher: "EMA" },
    { label: "Wikipedia — Japanese mahjong", url: "https://en.wikipedia.org/wiki/Japanese_mahjong", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
