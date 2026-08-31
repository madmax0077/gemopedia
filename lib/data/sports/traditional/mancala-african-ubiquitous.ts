import type { Sport } from "@/lib/types";

export const mancalaAfricanUbiquitous: Sport = {
  id: "mancala-african-ubiquitous",
  slug: "mancala-african-ubiquitous",
  name: "Mancala (Ancient African Sowing Games)",
  officialName: "Mind Sports Olympiad + African variants — multi-federation",
  aliases: ["Oware", "Bao", "Kalah", "Congkak", "Ayo", "Wari", "Warri", "Sungka"],
  shortDescription:
    "Family of 300+ ancient African sowing games sharing 'pit-and-seed' mechanic — players distribute stones/seeds from cups on wooden board capturing opponent's seeds; oldest evidence 6th century Ethiopia + Ghana; national game of Ghana (Oware) + Zanzibar (Bao) + Philippines (Sungka); estimated 500 million+ players globally; deeply symbolic + cultural.",
  longDescription:
    "Mancala is a broad family of over 300 distinct ancient sowing games sharing the common 'pit-and-seed' mechanic — one of the oldest board game families in human history + one of the most widely played. Named from Arabic 'naqala' (to move), Mancala games are found across Africa (dominant), Middle East, South + Southeast Asia (Philippines, Indonesia), and Caribbean (via African diaspora). Archaeological evidence: (a) 6th century BCE Ethiopian holes carved in rock (Aksum region); (b) 6-7th century CE Ghana pottery boards; (c) 10th century Egyptian temple carvings; (d) Precolumbian Trinidad + Cuba boards (may predate African contact). Universal core mechanic: (1) Board with 2, 3, or 4 rows of pits/cups (typically wood, carved, ornate); (2) Players start with equal seeds distributed in own pits; (3) On turn, pick up all seeds from one own pit + 'sow' one-by-one into subsequent pits going counterclockwise (or other direction depending on variant); (4) Complex capture rules determine when own move captures opponent's seeds; (5) Game ends when one side's pits empty; player with most captured seeds wins. Major variants: (1) Oware (Ghana + West Africa) — national game of Ghana; 2×6 pits + 2 stores; considered strategically deepest; formal competitive scene with WOF (World Oware Federation); (2) Bao (East Africa + Zanzibar) — Kiswahili speakers Tanzania + Kenya + Malawi; 4×8 pits (32 total) making it most complex variant; national game of Zanzibar with 200+ year history; (3) Kalah (modern Western variant) — simplified 2×6 pits + 2 stores; popular in USA + Europe as introductory version; (4) Congkak/Sungka (Malaysia + Indonesia + Philippines) — 2×7 pits + 2 stores; women's traditional game; (5) Ayo (Yoruba Nigeria) — closely related to Oware; (6) Warri/Wari (Caribbean) — Ghana Oware brought via slavery; (7) Toguz Korgool (Central Asia — Kyrgyzstan national game) — 2×9 pits with complex capture. Mancala is 'solved' game — 2001 University of Alberta computer programs achieved perfect play (Awari-solving GAMBIT project); despite this, competitive human play remains vibrant. Mind Sports Olympiad + WOF + regional federations run tournaments. Notable champions: (i) Julius Odjidja (Ghana — multiple WOF World Champion); (ii) Ahmed Omran (Zanzibar — Bao legend); (iii) Kwame Sarpong (Ghana). ~500 million+ estimated players across Africa + Asia + diaspora — makes it possibly the world's most-played traditional board game.",
  category: "traditional-cultural-sports",
  subCategory: "family of 300+ ancient African sowing board games",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "ET",
  regionOfOrigin: "Ancient Africa (Ethiopia + Ghana earliest archaeological evidence 6th century BCE-CE)",
  estimatedOrigin: "Archaeological evidence dates to 6th century BCE Ethiopian rock-carved boards; spread through Africa + Middle East + Asia over millennia; formal competitive Oware from 1980s; World Oware Federation founded 1990s",
  players: { min: 2, max: 4, note: "Most variants 2-player; 4-player team versions exist in some regions." },
  equipment: [{ name: "Mancala board (2-4 rows of cups/pits)", description: "Traditional carved wooden board with 2-4 rows of 6-14 pits/cups each + typically 2 'store' cups at ends; ornate carved regional designs." }, { name: "Seeds/stones/shells (48-64 typical)", description: "Playing pieces: traditionally seeds (soapstone, tamarind), cowrie shells, colored stones, or beads; 48 pieces for Oware (4 per pit)." }, { name: "Score-tracking cups (2)", description: "End cups called 'stores' or 'kalahas' where each player collects captured seeds; final count determines winner." }],
  duration: { approximateMinutes: 25, structure: "Casual game 15-40 min depending on variant; competitive Oware 30-60 min with clock; Bao games can extend 2-3 hours." },
  objective: "Capture more seeds than opponent by strategic sowing + capture combinations; variant-specific capture rules.",
  matchStructure: "Turn-based sowing + capturing until one side's pits empty; game ends + remaining seeds go to appropriate player.",
  basicRules: [
    { title: "Pick up all seeds from one own pit + sow one-by-one", body: "Turn action: pick up all seeds from one pit on your side + drop one seed into each subsequent pit going around board (direction varies)." },
    { title: "Complex variant-specific capture rules", body: "Capture rules vary by variant — Oware: last seed lands in opponent pit with 2-3 seeds; Bao: complex 'nyumba' rules; Kalah: capture from opposite pit if last seed empty." },
    { title: "Game ends when one side's pits empty", body: "Game ends when one player has no seeds in own pits; remaining opponent seeds typically go to that opponent." },
    { title: "Winner = most seeds in own store at end", body: "Player with most captured seeds in their end store wins; tied games possible." },
  ],
  scoring: { summary: "Sum of captured seeds in own store at end; higher count wins.", winCondition: "More total captured seeds than opponent when game ends." },
  positions: [{ name: "Mancala player", role: "One of 2 players controlling one side of board.", count: 2 }],
  officiating: { officials: ["Tournament Arbiter", "Time Judge (competitive)"], summary: "World Oware Federation certified officials at Oware World Championships; regional variants have own arbiters." },
  governingBodies: [{ name: "World Oware Federation (WOF)", founded: 1990, headquarters: "Accra, Ghana" }, { name: "Mind Sports Olympiad (Mancala events)", founded: 1997, headquarters: "UK" }, { name: "Bao Society (Zanzibar/Tanzania)", founded: 1980, headquarters: "Zanzibar, Tanzania" }, { name: "Philippine Sungka Association", founded: 2000, headquarters: "Philippines" }],
  majorCompetitions: [{ name: "World Oware Championship", frequency: "biennial", founded: 1994, region: "rotating (Ghana, USA, Netherlands, UK)" }, { name: "Ghana National Oware Championship", frequency: "annual", founded: 1980, region: "Ghana" }, { name: "Bao World Championship (Zanzibar)", frequency: "biennial", founded: 1990, region: "Zanzibar, Tanzania" }, { name: "Mind Sports Olympiad Mancala Events", frequency: "annual", founded: 1997, region: "UK — multiple mancala variants" }, { name: "Toguz Korgool World Championship", frequency: "biennial", founded: 2010, region: "Kyrgyzstan" }],
  countriesPlayed: ["GHA (Oware national game)", "TZA (Bao)", "KEN", "MWI", "ETH", "NGA (Ayo)", "PHL (Sungka)", "MYS (Congkak)", "IDN", "IND (Pallanguzhi)", "MDG", "SEN", "KGZ (Toguz Korgool)", "worldwide African + Asian diaspora"],
  famousAthletes: ["Julius Odjidja (Ghana — multiple World Oware Champion)", "Ahmed Omran (Zanzibar — Bao legend)", "Kwame Sarpong (Ghana)", "David Sundaram (Malaysia — Sungka champion)", "Various regional variant champions"],
  records: [
    { title: "Oldest continuously-played board game family (6th century BCE evidence)", holder: "Ethiopian + Ghanaian archaeological evidence", value: "Mancala family board game evidence dates to 6th century BCE Ethiopian rock-carved boards — potentially oldest continuously-played board game family in human history", year: 500 },
    { title: "300+ distinct regional variants", holder: "Mancala family taxonomy", value: "Mancala family includes 300+ documented distinct regional variants across Africa + Middle East + Asia — largest single traditional board game family", year: 2024 },
    { title: "Awari (Oware simplified) solved by computer 2001", holder: "University of Alberta GAMBIT project", value: "Awari (simplified Oware) solved to perfect play by University of Alberta GAMBIT project 2001 — with perfect play from both sides, game ends in draw", year: 2001 },
    { title: "~500 million+ estimated players globally", holder: "Global mancala community", value: "Estimated 500 million+ mancala players globally across Africa + Asia + diaspora — possibly world's most-played traditional board game family", year: 2024 },
  ],
  variants: ["oware-ghana-2x6-pits-competitive", "bao-zanzibar-4x8-pits-most-complex", "kalah-western-simplified-2x6", "sungka-philippines-2x7-pits", "congkak-malaysia-indonesia-2x7", "toguz-korgool-kyrgyzstan-2x9", "ayo-yoruba-nigeria", "warri-caribbean-diaspora-oware", "pallanguzhi-tamil-nadu-india-womens-game"],
  relatedSports: ["chess-classical", "checkers-draughts", "go-baduk", "backgammon"],
  skills: ["sowing sequence calculation", "capture pattern recognition", "endgame tempo management", "variant-specific opening theory"],
  wikipediaTitle: "Mancala",
  sources: [{ label: "Wikipedia — Mancala", url: "https://en.wikipedia.org/wiki/Mancala", publisher: "Wikipedia" }, { label: "World Oware Federation", url: "https://oware.org", publisher: "WOF" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default mancalaAfricanUbiquitous;
