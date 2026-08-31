import type { Sport } from "@/lib/types";

export const spinningTopsKoma: Sport = {
  id: "spinning-tops-koma",
  slug: "spinning-tops-koma",
  name: "Spinning Tops (Koma, Trompo, Beyblade)",
  officialName: "Traditional Koma / International Spin Top World Championship (INTA)",
  aliases: ["Koma", "Beigoma", "Trompo", "Peonza", "Beyblade Competitive"],
  shortDescription:
    "Traditional Japanese Koma (独楽) spinning-top games + Latin American Trompo/Peonza traditions + modern Beyblade Burst competitive scene (Takara Tomy 2015+); International Spin Top World Championship (INTA) sanctions traditional discipline.",
  longDescription:
    "Spinning tops (Japanese: Koma 独楽; Spanish: Trompo/Peonza; Chinese: 陀螺 Tuóluó) are one of the oldest global toys — archaeological evidence to 3500 BCE. Modern competitive spinning-top scene spans three interrelated disciplines: (1) Traditional Koma (Japan) — including Kenka Koma (battle top: knock opponent out of ring), Beigoma (small iron tops on cloth arena, roots in Kanto region 1600s), Zundoko Koma (spinning + music), Kata Koma (choreographed spinning tricks); governed by All Japan Spin Top Association (Nihon Koma Kyokai, founded 1988). (2) Latin American Trompo/Peonza — Colombian Trompo (throwing rope-launched wooden tops at target; recognized traditional sport; Colombia has 5+ national trompo federations); Mexican Trompo (similar rope-launched tricks); Venezuelan Perinola (cup-and-ball adjacent). (3) Beyblade Burst (Takara Tomy 2015+) — modern commercial pop-culture successor to traditional Koma; plastic/metal customizable tops with clutch-release Burst mechanic; global commercial + competitive scene through Beyblade Burst World Championship (annual since 2016); massive youth competitive scene in Japan, USA, LATAM, Asia. Signature moves: 'sleeper' (steady vertical spin), 'walker' (lateral movement), 'gyroscope' (precession tricks), 'string tricks' (yo-yo-adjacent for hand-tops). International Spin Top World Championship (INTA — Spanish 'International Top Association') sanctions traditional discipline globally. Cross-over event: 2023 International Trompo Congress (Bogotá) — first global gathering of traditional + modern top competitors.",
  category: "skill-toys",
  subCategory: "spinning-top skill sport (traditional + commercial)",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "JP",
  regionOfOrigin: "Global — Japan (Koma), Colombia (Trompo), Latin America; modern Beyblade Japan 1999-",
  estimatedOrigin: "Traditional tops ~3500 BCE archaeological evidence; Japanese Beigoma ~1600s Edo period; Beyblade 1999",
  players: { min: 1, max: 8, note: "Individual or head-to-head; Beyblade Burst battle royale can host 4-8 players." },
  equipment: [{ name: "Traditional Koma (wood + metal tip)", description: "Japanese wooden spinning top with metal tip; variants for battle, spinning, tricks." }, { name: "Beigoma (iron top)", description: "Small iron top ~5cm, spun on cloth arena (yūkuchi)." }, { name: "Trompo (Colombian rope-launched top)", description: "Wooden top with metal tip + throwing rope." }, { name: "Beyblade Burst (customizable modern top)", description: "Plastic/metal 4-part customizable top; launcher + stadium." }, { name: "Battle arena (stadium/yūkuchi)", description: "Ring or cloth arena for battle discipline." }],
  duration: { approximateMinutes: 3, structure: "Battle round: ~30 seconds to 1-2 min; freestyle routine: 2-3 min per performance." },
  objective: "Battle: knock opponent's top out of arena or last top spinning wins. Freestyle: complete trick combos for judge scoring. Duration: longest spin wins.",
  matchStructure: "Battle: single-elimination brackets; Freestyle: judged rounds; Duration: measured spins.",
  basicRules: [
    { title: "Battle: last top spinning wins", body: "Two tops launched in arena; one that stops or exits arena loses." },
    { title: "Freestyle: judge scores tricks + duration", body: "Judged on trick difficulty + duration + creativity." },
    { title: "Duration: measured continuous spin time", body: "Some events measure longest continuous spin (Guinness records exist)." },
    { title: "Beyblade Burst: additional 'Burst' point", body: "Beyblade specific — top can 'burst' apart mid-battle for bonus point." },
  ],
  scoring: { summary: "Battle: win/loss (last spinning). Freestyle: 0-10 judge scoring. Duration: measured seconds/minutes.", winCondition: "Battle: last top spinning. Freestyle: highest judge score. Duration: longest spin." },
  positions: [{ name: "Spin-top player (Beyblader / Trompista / Koma-shi)", role: "Sole competitor.", count: 1 }],
  governingBodies: [{ name: "All Japan Spin Top Association (Nihon Koma Kyokai)", founded: 1988, headquarters: "Tokyo, Japan" }, { name: "International Trompo Association (INTA)", founded: 2000, headquarters: "Colombia" }, { name: "Takara Tomy (Beyblade commercial governance)", founded: 1924, headquarters: "Tokyo, Japan" }, { name: "World Beyblade Organization (WBO — community body)", founded: 2008, headquarters: "worldwide" }],
  majorCompetitions: [{ name: "International Spin Top World Championship (INTA)", frequency: "annual", founded: 2000, region: "rotating (Colombia, Mexico, Japan)" }, { name: "Beyblade Burst World Championship (Takara Tomy)", frequency: "annual", founded: 2016, region: "Tokyo, Japan (finals)" }, { name: "All-Japan Koma Championship", frequency: "annual", founded: 1988, region: "Japan (rotating)" }, { name: "Colombian National Trompo Championship", frequency: "annual", founded: 1985, region: "Colombia (rotating)" }],
  countriesPlayed: ["JPN", "COL", "MEX", "VEN", "USA", "PHL", "PER", "ECU", "CHN"],
  famousAthletes: ["Various Japanese Koma masters (regional traditions)", "Colombian trompistas (INTA champions)", "Beyblade Burst World Champions (Japan-dominant)"],
  records: [
    { title: "Beyblade Burst World Championship since 2016", holder: "Takara Tomy", value: "Beyblade Burst World Championship held annually since 2016 in Tokyo — global commercial competitive scene", year: 2016 },
    { title: "Longest spin ~51 min (magnetic top)", holder: "various inventors", value: "Longest un-assisted spinning top (magnetic-levitation aided) exceeds 51 minutes per Guinness", year: 2020 },
    { title: "Nihon Koma Kyokai founded 1988", holder: "All Japan Spin Top Association", value: "All Japan Spin Top Association founded 1988 to preserve + promote traditional Koma", year: 1988 },
  ],
  variants: ["kenka-koma-battle-japanese", "beigoma-iron-top-japanese", "beyblade-burst-modern-commercial", "trompo-colombiano-rope-launched", "peonza-spanish-tradition", "chinese-tuoluo-whipping-top"],
  relatedSports: ["yoyo-freestyle", "kendama-competitive", "diabolo-competitive"],
  skills: ["launch technique (rope-throw / launcher)", "aiming + targeting (battle)", "trick chaining (freestyle)", "top customization (Beyblade)", "spatial awareness in arena"],
  wikipediaTitle: "Spinning top",
  sources: [{ label: "Wikipedia — Spinning top", url: "https://en.wikipedia.org/wiki/Spinning_top", publisher: "Wikipedia" }, { label: "Wikipedia — Beyblade", url: "https://en.wikipedia.org/wiki/Beyblade", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default spinningTopsKoma;
