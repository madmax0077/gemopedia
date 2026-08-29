import type { Sport } from "@/lib/types";

export const mahjongRiichi: Sport = {
  id: "mahjong-riichi",
  slug: "mahjong-riichi",
  name: "Riichi Mahjong (Japanese Mahjong)",
  officialName: "Riichi Mahjong (Japanese Rules)",
  aliases: ["Japanese Mahjong", "Riichi", "Reach Mahjong"],
  shortDescription:
    "Modern 4-player Japanese variant of mahjong with signature 'riichi' declaration + rich scoring system based on yaku (winning-hand patterns); premier online + live tournament scene via Tenhou, Mahjong Soul + WRC (World Riichi Championship).",
  longDescription:
    "Riichi Mahjong (Japanese Mahjong) is the modern 4-player Japanese variant of the classic Chinese mahjong tile game, distinguished by its signature 'riichi' declaration mechanic (a player declares that their hand is one tile from winning, locking their hand + betting 1000 points for a bonus if they win). The game uses 136 tiles: 3 numbered suits × 9 × 4 (Man/Souzu/Pinzu 108 tiles) + 4 wind tiles × 4 (East/South/West/North 16 tiles) + 3 dragon tiles × 4 (Red/Green/White 12 tiles). Winning hand = 4 sets (chii/pon/kan) + 1 pair (13+1 tiles), scored by 'yaku' (winning patterns) accumulating fan (doubles). Signature yaku: Riichi (concealed hand + reach), Pinfu, Tanyao, Yakuhai, Iipeikou, Chinitsu (flush), Tenhou (heavenly hand — dealer's first-turn win). Scoring uses fan + fu system with 'han' equivalents up to Yakuman (highest hand). Modern popularity exploded via online platforms Tenhou (2006, Japan) + Mahjong Soul (2018, Yostar) + M-League Japan Professional League (2018), which crowned Kazuya Suzuki (Suphx AI creator connection) + top pros like Rui Hasegawa, Suzuki Taro, Ai Uehara, Chiba Kanoko. World Riichi Championship (WRC) since 2014, biennial rotating host (Vegas 2014, Vegas 2017, Vienna 2022, Kyoto 2025). Also huge fan base via anime + manga (Akagi, Saki, Ten, Legendary Gambler Tetsuya).",
  category: "tile-games",
  subCategory: "Japanese variant of mahjong",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (developed early 20th century from Chinese mahjong)",
  estimatedOrigin: "Standardized ~1900-1935 in Japan; modern Reach rules 1950s+",
  players: { min: 4, max: 4, note: "Standard 4-player; 3-player Sanma variant exists." },
  equipment: [{ name: "Riichi mahjong set (136 tiles)", description: "3 suits × 9 numbers × 4 + 4 winds × 4 + 3 dragons × 4 = 136 tiles." }, { name: "Riichi sticks (bets)", description: "1000-point sticks used to declare riichi." }, { name: "Dora indicator tile", description: "Bonus indicator flipped from wall." }, { name: "Score sticks / online client", description: "Score tracking; modern online play dominates." }],
  duration: { approximateMinutes: 60, structure: "East + South round (Hanchan) ~50-60 min; East-only (Tonpuusen) ~25-30 min." },
  objective: "Score most points across a Hanchan (East + South rounds) via winning hands.",
  matchStructure: "4 players seated at wind positions (E/S/W/N); dealer rotates; East round + South round = 8 hands typical.",
  basicRules: [
    { title: "13-tile hand + draw 1 → 14 → discard 1", body: "Standard turn: draw + form winning hand of 4 sets + 1 pair, or discard." },
    { title: "Riichi declaration", body: "Concealed hand 1 tile from win: declare riichi + bet 1000 pts + expose next winning tile." },
    { title: "Chii (sequence) / Pon (triplet) / Kan (quad) melds", body: "Melds may be called from discards but forfeit some yaku bonuses." },
    { title: "Yaku required to win", body: "Must have at least 1 yaku to declare a winning hand." },
  ],
  advancedRules: [
    { title: "Fan (Han) + Fu scoring", body: "Yaku + dora contribute Han; base points × 2^Han × Fu = final score." },
    { title: "Dora bonus tiles", body: "Dora indicator reveals bonus tiles; each dora in hand = +1 han." },
    { title: "Yakuman (limit hands)", body: "Rare max-value hands (Daisangen, Kokushi Musou, Suuankou) score full 32,000 (mangan × 4)." },
    { title: "Chombo (foul)", body: "Declaring win with invalid hand = -8000 point penalty + hand restart." },
  ],
  scoring: {
    summary: "Han + Fu based; base = Fu × 2^(Han+2); doubled if dealer wins; final adjusted per riichi bets + honba.",
    winCondition: "Highest points at end of Hanchan (East + South rounds).",
    breakdown: [{ action: "Mangan (5-7 Han)", points: "8000 non-dealer / 12000 dealer" }, { action: "Haneman (6-7 Han)", points: "12000 / 18000" }, { action: "Baiman (8-10 Han)", points: "16000 / 24000" }, { action: "Yakuman (13+ Han)", points: "32000 / 48000" }],
  },
  penalties: [{ title: "Chombo (foul win)", body: "Invalid win declaration = -8000 point penalty + hand restart (or -4000 non-dealer per rules variant)." }],
  positions: [{ name: "Dealer (East)", role: "Dealer position rotates; wins 1.5x scoring.", count: 1 }, { name: "Non-dealer (South/West/North)", role: "Rotating non-dealer positions.", count: 3 }],
  governingBodies: [{ name: "European Mahjong Association (EMA)", founded: 2005, headquarters: "Europe" }, { name: "World Riichi Championship (WRC)", founded: 2014, headquarters: "rotating" }, { name: "M-League (Japan pro)", founded: 2018, headquarters: "Japan" }, { name: "Japan Professional Mahjong Renmei (JPML)", founded: 1981, headquarters: "Japan" }],
  majorCompetitions: [{ name: "World Riichi Championship (WRC)", frequency: "biennial", founded: 2014, region: "rotating (Vegas, Vienna, Kyoto)" }, { name: "M-League Japan Professional League", frequency: "annual", founded: 2018, region: "Tokyo" }, { name: "European Riichi Mahjong Championship (ERMC)", frequency: "biennial", founded: 2008, region: "Europe (rotating)" }],
  countriesPlayed: ["JPN", "CHN", "USA", "FRA", "GER", "GBR", "AUT", "CZE", "NLD"],
  famousAthletes: ["Kazuya Suzuki", "Rui Hasegawa (M-League)", "Suzuki Taro", "Ai Uehara (women's pro)", "Chiba Kanoko", "Kondo Seiichi (M-League MVP)"],
  records: [
    { title: "M-League founded 2018", holder: "M-League / Cyberagent", value: "M-League — Japan's first pro Riichi Mahjong league founded 2018 by Cyberagent (huge popularity boost)", year: 2018 },
    { title: "Suphx AI achieves 10-dan level 2020", holder: "Microsoft Research Asia Suphx AI", value: "Microsoft Suphx AI reached 10-dan level on Tenhou platform, surpassing top human pros (2020)", year: 2020 },
  ],
  variants: ["riichi-hanchan-full", "riichi-tonpuusen-east-only", "sanma-3player-riichi", "kansai-rules-variant"],
  relatedSports: ["mahjong-chinese", "mahjong-hong-kong", "sichuan-mahjong", "mahjong-solitaire"],
  skills: ["yaku memorization", "tile efficiency", "opponent tile reading", "riichi timing + push/fold judgment", "point-count optimization"],
  strategies: [
    { title: "Push-fold discipline", body: "Knowing when to push for hand completion vs. fold on opponent's riichi is core competitive edge." },
    { title: "Efficiency-first hand building", body: "Speed to tenpai (1 tile from win) often beats going for high-value hands." },
  ],
  wikipediaTitle: "Japanese mahjong",
  sources: [{ label: "Wikipedia — Japanese mahjong", url: "https://en.wikipedia.org/wiki/Japanese_mahjong", publisher: "Wikipedia" }, { label: "M-League official", url: "https://m-league.jp", publisher: "M-League" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default mahjongRiichi;
