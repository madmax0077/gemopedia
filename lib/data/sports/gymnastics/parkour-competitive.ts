import type { Sport } from "@/lib/types";

export const parkourCompetitive: Sport = {
  id: "parkour-competitive",
  slug: "parkour-competitive",
  name: "Parkour (Competitive)",
  officialName: "Parkour / Freerunning (Competitive)",
  aliases: ["Freerunning", "L'Art du Déplacement", "Traceur competition"],
  shortDescription:
    "Discipline of efficient movement through urban/natural environments via running, vaulting, climbing, jumping — competitive circuit includes FIG Parkour (Speed + Freestyle), FISE, Red Bull Art of Motion, Kings of Parkour. Founded by Yamakasi (Lisses, France) 1997-2000. FIG-recognised 2018; World Championships debut 2020.",
  longDescription:
    "Parkour is a movement discipline founded by David Belle + Sébastien Foucan + the Yamakasi collective in Lisses, France (late 1980s-1990s), influenced by David Belle's father Raymond Belle's 'méthode naturelle' military training. Practitioners ('traceurs') traverse urban + natural environments as efficiently as possible via running, vaulting, climbing, jumping, precision landings. Freerunning is the more acrobatic + expressive variant (championed by Sébastien Foucan). Competitively formalised through: FIG Parkour (Fédération Internationale de Gymnastique adopted parkour as discipline 2018 despite Parkour Earth pushback) with Speed Run + Freestyle events at FIG Parkour World Championships (inaugural 2020 Tokyo → 2022 Sofia → 2024 Kitakyushu → 2026 upcoming); FISE Freerunning; Red Bull Art of Motion (annual invitational); Kings of Parkour. Speed events time athletes through obstacle course; Freestyle events judge tricks, flow, difficulty. Parkour community remains politically divided — Parkour Earth (traceur-founded federation) vs FIG governance dispute ongoing.",
  category: "gymnastics",
  subCategory: "urban movement (Speed + Freestyle)",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (Lisses, Île-de-France — Yamakasi + David Belle)",
  estimatedOrigin: "Emerged 1988-2000 from Raymond Belle's méthode naturelle → David Belle + Yamakasi; FIG-adopted 2018; WC debut 2020",
  players: { min: 1, max: 1, note: "Individual competition; teams compete for national scoring." },
  equipment: [
    { name: "Athletic clothing + parkour shoes", description: "Lightweight, high-friction rubber-sole shoes (specialised brands: Take Flight, Ollo, Cariuma)." },
    { name: "Competition obstacle course", description: "Custom-built course with rails, walls, vaults, precision jumps, cat-leaps — Speed vs Freestyle course designs differ." },
    { name: "No protective equipment (typically)", description: "Traceurs typically compete without pads/helmets; competition rules require some safety features on specific tricks." },
  ],
  duration: { approximateMinutes: 5, structure: "Speed run 30-60 sec; Freestyle run 60-90 sec; competition day 3-6 hrs total." },
  objective: "Speed: fastest time from start to finish. Freestyle: highest judge-scored run based on difficulty, execution, creativity, flow.",
  matchStructure: "Qualifying → Semifinal → Final. Speed: single-elimination bracket typically. Freestyle: highest judge-scored run wins Final.",
  basicRules: [
    { title: "Speed: fastest time wins", body: "Timed run start to finish; missing obstacle checkpoint = penalty or DSQ." },
    { title: "Freestyle: judge score (0-100)", body: "5-judge panel scores Difficulty + Execution + Creativity + Flow + Amplitude." },
    { title: "Falls / bails penalised", body: "Falls reduce Freestyle execution score dramatically; Speed penalties per rules." },
  ],
  advancedRules: [
    { title: "Line reading + shortcut discovery", body: "In Speed, athletes discover fastest lines during practice; some courses allow multiple lines." },
    { title: "Freestyle trick difficulty scale", body: "Judges reward gainer-flash-kicks, double-fronts, off-axis flips + creative combos over simple tricks." },
    { title: "FIG vs Parkour Earth governance", body: "Community split — some athletes boycott FIG events; some support them. Governance dispute unresolved." },
  ],
  scoring: {
    summary: "Speed: fastest time. Freestyle: judge-scored 0-100.",
    winCondition: "Speed: fastest final time. Freestyle: highest final score.",
    breakdown: [{ action: "Speed round win", points: "Advance in bracket" }, { action: "Freestyle top-3", points: "Podium finish" }],
  },
  penalties: [
    { title: "Fall / bail (Freestyle)", body: "Execution score deduction; potentially run-ending." },
    { title: "Missed checkpoint (Speed)", body: "Time penalty or DSQ per rules." },
    { title: "Unsafe trick (excessive risk)", body: "Judge discretion to reduce score." },
  ],
  positions: [{ name: "Traceur (Speed) / Freerunner (Freestyle)", role: "Solo competitor.", count: 1 }],
  officiating: { officials: ["FIG-certified judges", "Course Director", "Chief Timekeeper", "Video Review Judge"], summary: "FIG judges score Freestyle; timekeepers + course director validate Speed." },
  governingBodies: [
    { name: "Fédération Internationale de Gymnastique (FIG)", founded: 1881, headquarters: "Lausanne, Switzerland" },
    { name: "Parkour Earth (traceur-founded federation)", founded: 2017, headquarters: "UK / global (community-run)" },
    { name: "Red Bull Art of Motion organisers", founded: 2007, headquarters: "Salzburg, Austria" },
  ],
  majorCompetitions: [
    { name: "FIG Parkour World Championships", frequency: "biennial", founded: 2020, region: "worldwide" },
    { name: "Red Bull Art of Motion", frequency: "annual", founded: 2007, region: "worldwide invitational" },
    { name: "FISE World Series — Freerunning", frequency: "annual multi-stop", founded: 2018, region: "worldwide" },
    { name: "Kings of Parkour", frequency: "annual", founded: 2015, region: "worldwide" },
  ],
  countriesPlayed: ["FR", "GB", "US", "JP", "RU", "DE", "IT", "ES", "BR", "AU", "CA"],
  famousAthletes: ["David Belle (FR) — founder", "Sébastien Foucan (FR/GB) — Freerunning founder", "Jason Paul (DE) — Red Bull AoM champion", "Pasha Petkuns (LAT) — trick pioneer", "Dominic Di Tommaso (AUS) — AoM winner"],
  records: [
    { title: "FIG WC debut Tokyo 2020", holder: "FIG", value: "Inaugural FIG Parkour World Championships held Tokyo 2020", year: 2020 },
    { title: "Red Bull AoM annual since 2007", holder: "Red Bull", value: "Red Bull Art of Motion invitational held annually since 2007 — signature freerunning event", year: 2007 },
    { title: "FIG adoption 2018", holder: "FIG", value: "FIG officially adopted parkour as gymnastics discipline 2018 despite Parkour Earth community opposition", year: 2018 },
  ],
  variants: ["parkour-speed-run", "parkour-freestyle", "freerunning"],
  relatedSports: ["gymnastics", "trampoline", "tumbling", "acrobatic-gymnastics", "cheerleading"],
  skills: ["spatial awareness + landing precision", "explosive vault + wall-run technique", "aerial trick execution", "flow + line creativity"],
  strategies: [
    { title: "Speed: shortest safe line", body: "Optimise line via risk-vs-time tradeoff; over-committing to shortcuts = DSQ risk." },
    { title: "Freestyle: signature trick placement", body: "Save signature trick for high-amplitude moment mid-run; judges reward peak amplitude + creative combos." },
    { title: "Course practice + memorisation", body: "Memorise course topology in practice; reduce hesitation to save race-time seconds." },
  ],
  terminology: [
    { term: "Traceur / Traceuse", meaning: "Parkour practitioner (male / female)" },
    { term: "Vault (kong / dash / speed / lazy)", meaning: "Techniques for crossing obstacles" },
    { term: "Precision jump", meaning: "Jump to specific narrow landing spot" },
    { term: "Cat-leap", meaning: "Jump to hang-on-wall landing" },
    { term: "Flow", meaning: "Judge criterion — smooth transitions between movements" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "ADD (art du déplacement) fundamentals", body: "Ground techniques, rolls, basic vaults." }] },
    { level: "intermediate", steps: [{ title: "Wall-runs, cat-leaps, precisions", body: "Master intermediate movement + first tricks." }] },
    { level: "advanced", steps: [{ title: "FIG WC / Red Bull AoM competition-level", body: "Compete in Speed + Freestyle events; develop signature tricks." }] },
  ],
  faq: [
    { question: "What is the difference between parkour and freerunning?", answer: "Parkour (David Belle) emphasises efficient movement — fastest path A to B. Freerunning (Sébastien Foucan) adds acrobatic tricks + expressiveness — 'movement as art'. FIG Parkour competition has both: Speed (parkour) + Freestyle (freerunning-adjacent)." },
    { question: "Is parkour in the Olympics?", answer: "Not yet — FIG has campaigned for Olympic inclusion but not on current programme. Parkour Earth (traceur community federation) opposes FIG governance + Olympic push, creating governance dispute." },
  ],
  wikipediaTitle: "Parkour",
  sources: [{ label: "Wikipedia — Parkour", url: "https://en.wikipedia.org/wiki/Parkour", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default parkourCompetitive;
