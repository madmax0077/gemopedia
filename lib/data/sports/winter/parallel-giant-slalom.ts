import type { Sport } from "@/lib/types";

export const parallelGiantSlalom: Sport = {
  id: "parallel-giant-slalom",
  slug: "parallel-giant-slalom",
  name: "Parallel Giant Slalom (Snowboard)",
  officialName: "Parallel Giant Slalom (PGS)",
  aliases: ["PGS", "Snowboard PGS"],
  shortDescription:
    "FIS alpine-snowboard head-to-head knockout race on two parallel giant-slalom courses — riders on stiff carving alpine snowboards duel through gates. Winter Olympic event since Nagano 1998 (as GS) + 2014 dual-course PGS format. Ester Ledecká + Nevin Galmarini signature Olympic champions.",
  longDescription:
    "Parallel Giant Slalom (PGS) is the premier alpine-snowboard discipline — a head-to-head knockout race format where two competitors race simultaneously down two parallel giant-slalom courses (red + blue gate sets, symmetrically set). Riders use stiff, narrow alpine snowboards + hard-shell boots (unlike freestyle boards) + carve turns through wide-radius GS gates. Combined time of both runs (one on each course) determines the round winner; loser eliminated. Bracket of 16 or 32 riders after qualifier. Winter Olympic snowboard event since Nagano 1998 (original single-course GS format); dual-course PGS format from Torino 2006 onwards. Sochi 2014 briefly split GS + PSL (parallel slalom), consolidated back to PGS only for PyeongChang 2018. Ester Ledecká (CZE) is signature athlete — won PyeongChang 2018 PGS gold (also won alpine skiing super-G gold same Games — unique dual-discipline Olympic double). Nevin Galmarini (SUI) won men's PyeongChang 2018 gold. Roland Fischnaller (ITA) is longtime World Cup leader. Distinct from freestyle snowboarding — this is a technical racing discipline requiring alpine ski-style technique on a snowboard.",
  category: "winter-sports",
  subCategory: "alpine snowboard racing (parallel dual-slalom)",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: true, isParalympic: false, isProfessional: true,
  season: "winter", era: "20th-century", popularity: "major",
  countryOfOrigin: "AT",
  regionOfOrigin: "Austrian / Swiss / Italian Alps alpine snowboard scene",
  estimatedOrigin: "Alpine snowboarding emerged 1980s; FIS World Cup PGS from 1994; Olympic since Nagano 1998",
  players: { min: 1, max: 2, note: "1v1 dual-course knockout format; qualifier + bracket of 16 or 32." },
  equipment: [
    { name: "Alpine (carving) snowboard", description: "Narrow (~24-26 cm width), stiff flex, directional shape, ~155-170 cm; often with metal edges + camber for carve grip." },
    { name: "Hard-shell alpine boots + step-in bindings", description: "Hard-shell ski-boot-like alpine boots + step-in plate bindings; unlike freestyle soft boots." },
    { name: "Helmet + goggles + speed suit", description: "FIS-mandate helmet; aerodynamic speed suit at Olympic/WC level." },
    { name: "Two parallel GS courses (red + blue gate sets)", description: "Symmetrically set giant-slalom courses side-by-side; equal gate count + line." },
  ],
  duration: { approximateMinutes: 30, structure: "Each run ~25-40 sec; qualifier + full bracket of 16 = ~90-120 min total." },
  objective: "Beat opponent by combined-run time across both courses; advance through knockout bracket to gold-medal final.",
  matchStructure: "Qualifier (single-course time trial, top 16 or 32 advance) → Knockout bracket (best of 2-run combined time per round) → Small final (bronze) + Big final (gold/silver).",
  basicRules: [
    { title: "Two parallel courses (red + blue gates)", body: "Symmetrical GS course pairs — riders swap courses between runs to equalise course conditions." },
    { title: "Combined time across 2 runs decides round", body: "Rider with faster combined 2-run time advances; other eliminated." },
    { title: "Missed gate = disqualification", body: "Skipping / straddling a gate = DSQ; opponent auto-advances." },
  ],
  advancedRules: [
    { title: "Handicap start (in later formats)", body: "Run-2 handicap: slower rider from Run 1 starts Run 2 with time deficit — first across the line wins the round." },
    { title: "False start / late start penalties", body: "Late gate exit = time penalty; false start = second attempt allowed once then DSQ." },
    { title: "Course inspection (Course setter chief)", body: "Riders inspect course pre-race; course setter chief controls difficulty + safety." },
  ],
  scoring: {
    summary: "Faster combined-time rider advances; single-elimination bracket.",
    winCondition: "Win Big Final by combined time.",
    breakdown: [{ action: "Round win", points: "Advance in bracket" }, { action: "Big Final win", points: "Gold medal" }],
  },
  penalties: [
    { title: "Missed gate", body: "DSQ — opponent auto-advances." },
    { title: "Course leaving", body: "Riding outside gate line = DSQ." },
    { title: "False start", body: "Second attempt allowed; second false start = DSQ." },
  ],
  positions: [{ name: "Alpine Snowboard Racer", role: "Solo competitor racing head-to-head knockouts.", count: 1 }],
  officiating: { officials: ["FIS Race Referee", "Chief of Course", "Gate Judges", "Timing Team"], summary: "FIS-certified race referee oversees; gate judges monitor gate contact." },
  governingBodies: [
    { name: "Fédération Internationale de Ski (FIS)", founded: 1924, headquarters: "Oberhofen, Switzerland" },
    { name: "International Snowboard Federation (ISF, defunct 2002 — absorbed into FIS)", founded: 1990, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "Winter Olympic Games — Parallel Giant Slalom Snowboard", frequency: "quadrennial", founded: 1998, region: "worldwide (Olympic)" },
    { name: "FIS Snowboard World Cup — PGS", frequency: "annual (~10 events)", founded: 1994, region: "worldwide" },
    { name: "FIS Snowboard World Championships — PGS", frequency: "biennial", founded: 1996, region: "worldwide" },
  ],
  countriesPlayed: ["AT", "IT", "CH", "DE", "CZ", "RU", "SI", "FR", "US", "JP"],
  famousAthletes: ["Ester Ledecká (CZE) — PyeongChang 2018 gold", "Nevin Galmarini (SUI) — PyeongChang 2018 gold", "Roland Fischnaller (ITA) — WC record holder", "Julia Dujmovits (AUT) — Sochi 2014 gold"],
  records: [
    { title: "Olympic debut Nagano 1998 (GS)", holder: "IOC", value: "Alpine snowboard giant slalom first Olympic in Nagano 1998; dual-course PGS format from Torino 2006", year: 1998 },
    { title: "Ledecká Olympic dual-discipline double", holder: "Ester Ledecká (CZE)", value: "PyeongChang 2018: won snowboard PGS gold + alpine skiing super-G gold same Games — first athlete ever to win Olympic golds in different snow sports same Games", year: 2018 },
    { title: "Roland Fischnaller WC longevity", holder: "Roland Fischnaller (ITA)", value: "Multiple decades of WC podium finishes in PGS; among longest-running alpine snowboard racers", year: 2024 },
  ],
  variants: ["parallel-slalom-snowboard", "single-course-gs-snowboard"],
  relatedSports: ["parallel-slalom-snowboard", "alpine-skiing-gs", "snowboard-cross", "boarder-cross"],
  skills: ["carving turn technique", "line reading through GS gates", "start explosiveness", "course-conditions adaptation"],
  strategies: [
    { title: "Aggressive first-run buffer", body: "Post fastest possible Run 1 to earn 2nd-run handicap advantage; ride conservative Run 2." },
    { title: "Gate-line optimisation", body: "Pick tightest line through gates that still preserves carving grip; over-cutting causes edge blowout." },
    { title: "Start-technique explosiveness", body: "Race-start plate press + skate-out to maximise starting velocity — first 5 sec often decides round." },
  ],
  terminology: [
    { term: "PGS", meaning: "Parallel Giant Slalom" },
    { term: "Alpine snowboard", meaning: "Narrow stiff snowboard with metal edges for carving" },
    { term: "Gate", meaning: "Course marker (offset pole pair)" },
    { term: "Handicap start", meaning: "Second-run time deficit / advantage based on first run" },
    { term: "DSQ", meaning: "Disqualification (missed gate / course-leave / false start)" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Carving basics on alpine snowboard", body: "Learn carving turns + hard-boot balance." }] },
    { level: "intermediate", steps: [{ title: "GS course + gate line", body: "Race on GS course; learn gate-line trajectory." }] },
    { level: "advanced", steps: [{ title: "PGS knockout tactics + WC-level line", body: "Optimise combined-time strategy + explosive starts." }] },
  ],
  faq: [
    { question: "How does parallel giant slalom differ from parallel slalom?", answer: "PGS uses wider gate spacing (giant slalom) = higher speed + longer turns; PSL (parallel slalom) uses tighter spacing = quicker, tighter turns. PGS is the only Olympic alpine snowboard event since 2018." },
    { question: "Are alpine snowboards different from regular snowboards?", answer: "Yes — alpine boards are narrow (~24-26 cm), stiff, directional, longer (~160-170 cm), designed for pure carving. Riders use hard-shell alpine boots + step-in plate bindings. Completely different from freestyle soft-boot setups." },
  ],
  wikipediaTitle: "Parallel giant slalom",
  sources: [{ label: "Wikipedia — Snowboarding at the Olympics", url: "https://en.wikipedia.org/wiki/Snowboarding_at_the_Winter_Olympics", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default parallelGiantSlalom;
