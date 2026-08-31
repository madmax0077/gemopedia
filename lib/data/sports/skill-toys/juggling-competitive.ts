import type { Sport } from "@/lib/types";

export const jugglingCompetitive: Sport = {
  id: "juggling-competitive",
  slug: "juggling-competitive",
  name: "Juggling (Competitive)",
  officialName: "International Jugglers' Association (IJA) Championships",
  aliases: ["Toss Juggling", "Object Manipulation", "Competitive Juggling"],
  shortDescription:
    "Circus + skill discipline where practitioners toss + catch 3+ objects (balls, clubs, rings) in patterns; competitive scene with IJA (International Jugglers' Association) Championships since 1947; disciplines include Numbers Juggling, Freestyle, Combat Juggling, Passing, Diabolo, Devilstick.",
  longDescription:
    "Juggling is one of the oldest object-manipulation skill disciplines — with archaeological evidence back to ~2000 BCE in ancient Egypt (Beni Hassan tomb paintings show women juggling 3 balls). Modern competitive juggling scene centered on the International Jugglers' Association (IJA, founded 1947, USA — world's oldest juggling organization). Six main competitive disciplines: (1) Numbers Juggling — most objects juggled continuously (world records: 12 balls (Alex Barron GBR 2011); 9 clubs (Anthony Gatto USA 2006); 13 rings (Albert Lucas USA 2002)); (2) Freestyle Juggling — judged routines emphasizing trick creativity + execution; (3) Combat Juggling — pairs face off with 3 clubs each, attempt to disrupt opponent's pattern; (4) Passing — 2+ jugglers pass clubs between each other in choreographed patterns; (5) Diabolo — Chinese yo-yo-adjacent juggling prop; (6) Devilstick / Contact Staff — long stick manipulated between two hand-sticks. Notable events: IJA Championships (annual since 1947 — USA, major venue), European Juggling Convention (EJC — annual since 1978, largest juggling gathering globally with 3,000-6,000 attendees), World Juggling Federation (WJF) Championships (2004+, focus on numbers + technical), IJA Individual Prop + Team Championships. Legendary jugglers: Anthony Gatto (USA — considered greatest technical juggler ever, 7 world records still standing including 7 clubs 45 min, 9 clubs flash), Enrico Rastelli (Italy — 1920s legend), Michael Kara (Circus historian), Sergei Ignatov (Russia — 11 rings), Vova Galchenko (Ukraine — modern star), Alex Barron (UK — 12 ball world record). Cross-over into circus (Cirque du Soleil hires elite jugglers). Also popular flow arts adaptation: Contact Juggling (crystal balls, popularized by Michael Moschen).",
  category: "skill-toys",
  subCategory: "object manipulation skill discipline",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "EG",
  regionOfOrigin: "Global — Ancient Egypt archaeological evidence ~2000 BCE; modern competitive USA 1947",
  estimatedOrigin: "Ancient origins ~2000 BCE (Egyptian Beni Hassan tomb paintings); IJA founded 1947 USA; EJC 1978",
  players: { min: 1, max: 8, note: "Individual for most disciplines; Passing 2-8; Combat pairs 2." },
  equipment: [{ name: "Juggling balls (Beanbag, Stage, Silicon)", description: "Standard 3-ball juggling; competition-grade beanbags or silicon balls." }, { name: "Juggling clubs (typically 20-24 inch)", description: "Wood or plastic clubs with weighted handles; branded (Renegade, Play, Henry's)." }, { name: "Juggling rings (28-30 cm)", description: "Flat plastic/wood rings; higher difficulty for numbers." }, { name: "Diabolo (Chinese yo-yo)", description: "Bell-shaped spinning prop on 2-handstick string." }, { name: "Devilstick / Contact Staff", description: "Long stick manipulated between two hand-sticks." }],
  duration: { approximateMinutes: 3, structure: "Freestyle: 2-3 min routine; Numbers: continuous until drop (unlimited); Combat: rounds until knockout." },
  objective: "Numbers: juggle most objects longest. Freestyle: highest judge score. Combat: force opponent to drop first.",
  matchStructure: "Individual routines OR head-to-head brackets (combat/passing).",
  basicRules: [
    { title: "Object throw + catch pattern", body: "Object must leave hand + be caught back; ground-contact = drop." },
    { title: "Numbers: qualifying by minimum-time or minimum-catches", body: "Qualifying: e.g., 12+ catches with 12 balls (WJF standard)." },
    { title: "Freestyle: judged on difficulty + execution + creativity", body: "Panel scoring 0-10 across categories." },
    { title: "Combat: force opponent drop", body: "Combat Juggling: 3 clubs vs. 3 clubs; opponent must maintain their pattern; drops = points to opponent." },
  ],
  scoring: { summary: "Numbers: qualifying + longest streak. Freestyle: judge scores. Combat: point-per-drop.", winCondition: "Discipline-specific." },
  positions: [{ name: "Juggler (competitor)", role: "Sole practitioner (or paired for passing/combat).", count: 1 }],
  officiating: { officials: ["Chief Judge", "Freestyle Judges (5-panel)", "Numbers Judges (count catches)", "Combat Referee"], summary: "IJA/WJF certified officials at competitions." },
  governingBodies: [{ name: "International Jugglers' Association (IJA)", founded: 1947, headquarters: "USA (rotating)" }, { name: "World Juggling Federation (WJF)", founded: 2004, headquarters: "USA" }, { name: "European Juggling Association (EJA — organizes EJC)", founded: 1978, headquarters: "Europe (rotating)" }],
  majorCompetitions: [{ name: "IJA Championships (Individual + Team)", frequency: "annual", founded: 1947, region: "USA (rotating cities)" }, { name: "European Juggling Convention (EJC)", frequency: "annual", founded: 1978, region: "Europe (rotating; largest juggling gathering globally, 3-6K attendees)" }, { name: "WJF World Championships", frequency: "annual", founded: 2004, region: "USA (rotating)" }],
  countriesPlayed: ["USA", "GBR", "GER", "RUS", "FRA", "ITA", "JPN", "UKR", "AUS", "worldwide"],
  famousAthletes: ["Anthony Gatto (USA — considered greatest ever, 7 world records)", "Alex Barron (GBR — 12 ball world record 2011)", "Enrico Rastelli (ITA — 1920s legend, 10 balls)", "Sergei Ignatov (RUS — 11 rings)", "Vova Galchenko (UKR)", "Albert Lucas (USA — 13 rings)", "Michael Moschen (USA — contact juggling pioneer)"],
  records: [
    { title: "Alex Barron 12-ball world record 2011", holder: "Alex Barron (GBR)", value: "First juggler to flash 12 balls (23 consecutive catches) — recorded 2011; current world record for numbers juggling", year: 2011 },
    { title: "Anthony Gatto — 7 world records still standing", holder: "Anthony Gatto (USA)", value: "Widely considered greatest technical juggler ever; still holds 7 world records including 7 clubs 45 min endurance", year: 2006 },
    { title: "IJA founded 1947 — oldest juggling organization", holder: "International Jugglers' Association", value: "IJA founded 1947 in Pittsburgh, USA — world's oldest continuously-running juggling organization; 77+ years", year: 2024 },
    { title: "Ancient origins ~2000 BCE Egyptian tombs", holder: "ancient Egyptian civilization", value: "Beni Hassan tomb paintings ~2000 BCE show women juggling 3 balls — oldest documented juggling evidence", year: -2000 },
  ],
  variants: ["numbers-juggling", "freestyle-juggling", "combat-juggling-pairs", "passing-juggling-team", "diabolo-juggling", "devilstick-flow", "contact-juggling"],
  relatedSports: ["kendama-competitive", "yoyo-freestyle", "diabolo-competitive", "circus-arts"],
  skills: ["cascade + fountain pattern muscle memory", "peripheral vision + rhythmic timing", "hand-eye coordination", "trick chaining + choreography", "prop-specific technique (each prop different)"],
  wikipediaTitle: "Juggling",
  sources: [{ label: "Wikipedia — Juggling", url: "https://en.wikipedia.org/wiki/Juggling", publisher: "Wikipedia" }, { label: "IJA official", url: "https://www.juggle.org", publisher: "International Jugglers' Association" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default jugglingCompetitive;
