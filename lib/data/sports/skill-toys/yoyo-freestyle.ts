import type { Sport } from "@/lib/types";

export const yoyoFreestyle: Sport = {
  id: "yoyo-freestyle",
  slug: "yoyo-freestyle",
  name: "Yo-Yo Freestyle (Competitive)",
  officialName: "World Yo-Yo Contest (WYYC) Freestyle Championship",
  aliases: ["Competitive Yo-Yo", "WYYC", "World Yo-Yo Championship"],
  shortDescription:
    "Competitive yo-yo freestyle where players perform choreographed 3-minute music-synced routines judged on technical execution + performance; World Yo-Yo Contest (WYYC) held annually since 1932 across 5 divisions (1A/2A/3A/4A/5A).",
  longDescription:
    "Competitive yo-yo freestyle is a global performance sport where players (called yo-yoers or players) perform choreographed 3-minute music-synced routines using yo-yos, judged on technical difficulty, execution cleanliness, and performance/showmanship. Governed by the International Yo-Yo Federation (IYYF, founded 2007) and administered by regional national associations. Signature event: World Yo-Yo Contest (WYYC), founded 1932 in London (initially by Louie Marx / Duncan Yo-Yo Co.), currently held annually in rotating global cities (Prague 2024, Prague 2025 → Prague-based post-2022). Five main divisions: 1A (Single Handed String Tricks — most popular), 2A (Two Handed Looping — dual looping/reverse tricks), 3A (Two Handed String Tricks), 4A (Off-String — yo-yo detached from string), 5A (Counterweight — free weight on end of string). Signature tricks: Trapeze, Kwyjibo, Shockwave, Boingy-Boing, Suicide, Boomerang, Iron Whip. Modern unresponsive yo-yos (with concave/H-shape rims, ball-bearing axles) enable multi-minute spins. Top players: Gentry Stein (USA — 3x 1A world champion), Evan Nagao (USA — 2019 1A champion), Shinya Kido (JPN), Hank Freeman (USA), Ann Connolly (USA — pioneering women champion), Rei Iwakura (JPN — 5x 4A champion), Betty Gallegos (multiple pan-am winner). Yo-yo brands: YoYoFactory, One Drop, C3yoyodesign, Duncan, YoYoJam, Werrd.",
  category: "skill-toys",
  subCategory: "yo-yo (competitive freestyle)",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "US",
  regionOfOrigin: "USA/Global; WYYC founded London 1932 by Duncan",
  estimatedOrigin: "Yo-yo ~500 BCE origin (Greek/Chinese); modern WYYC founded 1932 in London",
  players: { min: 1, max: 1, note: "Individual freestyle; some pairs/team events at regional levels." },
  equipment: [{ name: "Competition yo-yo (per division)", description: "1A: unresponsive full-metal; 2A: responsive plastic; 3A: two matched unresponsive; 4A: off-string wide-body; 5A: counterweight-adapted." }, { name: "Yo-yo string (100% polyester or blend)", description: "Standard replaceable string; consumable." }, { name: "Ball bearing + response pads", description: "Bearing (KonKave, gold-plated) + silicone/CBC pads for responsiveness." }],
  duration: { approximateMinutes: 3, structure: "Freestyle routine 3:00 exactly; music-timed cutoff." },
  objective: "Perform highest technical difficulty + cleanest execution + best performance choreographed to music.",
  matchStructure: "Preliminary (2:00) → Semi-Final (3:00) → Final (3:00). Judged by panel of 3-5 international judges.",
  basicRules: [
    { title: "3-minute music-timed freestyle", body: "Player performs choreographed routine to selected music." },
    { title: "Judged by TES (technical) + PES (performance)", body: "Technical Execution Score + Performance Execution Score by panel." },
    { title: "Yo-yo change allowed", body: "Player may swap yo-yos mid-routine for different trick styles." },
    { title: "Deductions for missed catches / breaks", body: "Deductions per drop, snag, restart, or yo-yo out-of-play." },
  ],
  scoring: { summary: "TES (technical): 0-10; PES (performance): 0-10; combined weighted; highest total wins.", winCondition: "Highest combined judge score after final freestyle." },
  positions: [{ name: "Yo-yo player", role: "Sole competitor.", count: 1 }],
  officiating: { officials: ["Head Judge", "Technical Judges (3-5)", "Performance Judges", "Detriment Judges"], summary: "3-5 judge panel per division; head judge resolves discrepancies." },
  governingBodies: [{ name: "IYYF (International Yo-Yo Federation)", founded: 2007, headquarters: "worldwide (Tokyo administrative)" }, { name: "USNYYA (USA National Yo-Yo Association)", founded: 1993, headquarters: "USA" }, { name: "Japan Yo-Yo Association", founded: 1997, headquarters: "Japan" }],
  majorCompetitions: [{ name: "World Yo-Yo Contest (WYYC)", frequency: "annual", founded: 1932, region: "Prague (post-2022); previously rotating Orlando/Tokyo/Reykjavik" }, { name: "US National Yo-Yo Contest", frequency: "annual", founded: 1993, region: "Chico, California" }, { name: "European Yo-Yo Championship (EYYC)", frequency: "annual", founded: 2001, region: "Europe (rotating)" }, { name: "Japan National (JN)", frequency: "annual", founded: 1997, region: "Japan (rotating)" }],
  countriesPlayed: ["USA", "JPN", "CZE", "PHL", "TWN", "KOR", "MEX", "AUS", "GER", "GBR", "SVK"],
  famousAthletes: ["Gentry Stein (USA — 3x 1A World Champion)", "Evan Nagao (USA — 2019 1A)", "Shinya Kido (JPN)", "Rei Iwakura (JPN — 5x 4A)", "Ann Connolly (USA — pioneering women)", "Hank Freeman (USA)", "Betty Gallegos (MEX)", "Jake Elliott (USA)"],
  records: [
    { title: "WYYC founded 1932", holder: "Duncan / Louie Marx", value: "First World Yo-Yo Contest held 1932 in London; oldest competitive skill-toy event", year: 1932 },
    { title: "Gentry Stein 3x World Champion", holder: "Gentry Stein (USA)", value: "3x 1A World Yo-Yo Contest Champion (2014, 2016, 2018) — most modern 1A titles", year: 2018 },
    { title: "Rei Iwakura 5x 4A Champion", holder: "Rei Iwakura (JPN)", value: "5x 4A (Off-String) World Yo-Yo Contest Champion — most 4A titles all-time", year: 2024 },
  ],
  variants: ["1a-single-string", "2a-two-handed-looping", "3a-two-handed-string", "4a-off-string", "5a-counterweight"],
  relatedSports: ["kendama-competitive", "diabolo-competitive", "spinning-tops-competitive"],
  skills: ["string tension management", "trick chaining", "music-choreography timing", "hand independence (2A/3A)", "spin conservation"],
  wikipediaTitle: "World Yo-Yo Contest",
  sources: [{ label: "Wikipedia — World Yo-Yo Contest", url: "https://en.wikipedia.org/wiki/World_Yo-Yo_Contest", publisher: "Wikipedia" }, { label: "IYYF official", url: "https://www.iyyf.org", publisher: "International Yo-Yo Federation" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default yoyoFreestyle;
