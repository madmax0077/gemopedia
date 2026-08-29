import type { Sport } from "@/lib/types";

export const crankworx: Sport = {
  id: "crankworx",
  slug: "crankworx",
  name: "Crankworx",
  officialName: "Crankworx World Tour",
  aliases: ["Crankworx Whistler", "King/Queen of Crankworx"],
  shortDescription:
    "Elite mountain-bike freeride festival series (est. 2004 Whistler Canada) featuring 6-8 disciplines — Slopestyle, Whip-Off, Speed & Style, Dual Slalom, Downhill, Air DH, Pump Track, Kids — with 4 global stops earning Triple/King/Queen of Crankworx overall titles. Red Bull Joyride finale at Whistler.",
  longDescription:
    "Crankworx is the elite mountain-bike freeride festival series established 2004 at Whistler, British Columbia — the birthplace of gravity-fed mountain biking. Festival format across 4 stops per year (Rotorua NZ, Innsbruck AUT, Cairns AUS, Whistler CAN); each stop hosts 6-8 disciplines over 7-10 days. Signature event is Red Bull Joyride at Whistler — the world's most technical Slopestyle contest (30+ feature jumps, drops, dirt lips) considered the 'Super Bowl of freeride MTB'. Athletes accumulate points across disciplines toward King of Crankworx + Queen of Crankworx overall titles, plus Triple Crown of Slopestyle (win all 3 major slopestyles in one season). Most decorated: Emil Johansson (Sweden, 3× Joyride, 3× King) + Jill Kintner (USA, 5× Queen). First triple-flip in competition (Nicholi Rogatkin's Cash Roll, 2016 Rotorua).",
  category: "adventure-extreme-sports",
  subCategory: "mountain bike freeride festival",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "summer",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "CA",
  regionOfOrigin: "Whistler, British Columbia, Canada",
  estimatedOrigin: "Founded 2004 at Whistler; Red Bull Joyride Slopestyle since 2011; global tour formalised with Rotorua 2015, Innsbruck 2017, Cairns 2022",
  players: { min: 1, max: 1, note: "Solo competition per discipline." },
  equipment: [
    { name: "Slopestyle bike (26\" wheels, 4\" travel)", description: "Short-travel dirt-jump frame with rear disc brake only, wide bars, single-speed — NS Bikes Metropolis, YT Play, Trek Ticket." },
    { name: "DH bike (200mm travel)", description: "Full-suspension downhill race bike (Santa Cruz V10, Trek Session, Specialized Demo) with 27.5\" or mixed-wheel." },
    { name: "Full-face helmet + goggles", description: "Certified helmet (Fox Proframe, Bell Full-9) + tear-off goggles for dust." },
    { name: "Body armour + knee/elbow pads", description: "Roost jacket, spine protector, D3O knee/elbow pads." },
  ],
  duration: { approximateMinutes: 1, structure: "Slopestyle 45-60 sec run; DH 3-6 min; Whip-Off 1 hour open session." },
  objective: "Win discipline event or accumulate overall points toward King/Queen of Crankworx.",
  matchStructure: "4 stops per season; each hosts 6-8 disciplines over 7-10 days. Athletes accumulate points toward overall King/Queen of Crankworx titles.",
  basicRules: [
    { title: "Slopestyle: 2 scored runs, best counts", body: "Judges score 0-100 on tricks + amplitude + flow." },
    { title: "DH + Dual Slalom: fastest time wins", body: "Electronic timing to 1/1000 sec." },
    { title: "Whip-Off: biggest whip wins", body: "Crowd + judge subjective vote across open session." },
  ],
  advancedRules: [
    { title: "Feature skip penalty", body: "Slopestyle run = 0 score if mandatory feature skipped." },
    { title: "Multiple pedals in Slopestyle", body: "3+ pedal strokes = 20+ pt deduction." },
    { title: "Course cut in DH", body: "Cutting course tape = time addition or DQ." },
  ],
  scoring: {
    summary: "Slopestyle 0-100 by 5-judge panel; DH by time; overall King/Queen by points across disciplines.",
    winCondition: "Highest score (Slopestyle), fastest time (DH), or crowd + judge vote (Whip-Off).",
    breakdown: [
      { action: "Slopestyle run score", points: "0-100 (best of 2 runs)" },
      { action: "DH finish", points: "Time — fastest wins" },
      { action: "Overall King/Queen", points: "Accumulated across disciplines + events" },
    ],
  },
  penalties: [
    { title: "Feature skip", body: "Slopestyle run = 0." },
    { title: "Uncontrolled crash", body: "Wheels-up-body-down = 0 that run." },
    { title: "Multiple pedal strokes (Slopestyle)", body: "-20+ pts." },
  ],
  positions: [{ name: "Rider", role: "Slopestyle / DH / Dual Slalom / Whip-Off athlete competing across disciplines.", count: 1 }],
  officiating: {
    officials: ["5-judge panel (Slopestyle)", "Chief Timing Judge (DH/Dual Slalom)", "Course Marshal", "Video review panel"],
    summary: "5 judges score Slopestyle independently; drop high/low, average middle 3. Timing events use digital electronic timing.",
  },
  governingBodies: [
    { name: "Crankworx / Whistler Sport Legacies", founded: 2004, headquarters: "Whistler, British Columbia, Canada" },
    { name: "Union Cycliste Internationale (UCI)", founded: 1900, headquarters: "Aigle, Switzerland" },
  ],
  majorCompetitions: [
    { name: "Crankworx Whistler", frequency: "annual", founded: 2004, region: "Whistler, Canada" },
    { name: "Crankworx Rotorua", frequency: "annual", founded: 2015, region: "Rotorua, New Zealand" },
    { name: "Crankworx Innsbruck", frequency: "annual", founded: 2017, region: "Innsbruck, Austria" },
    { name: "Crankworx Cairns", frequency: "annual", founded: 2022, region: "Cairns, Australia" },
    { name: "Red Bull Joyride Slopestyle", frequency: "annual", founded: 2011, region: "Whistler, Canada" },
  ],
  countriesPlayed: ["CA", "US", "NZ", "AT", "AU", "GB", "FR", "DE", "SE", "CH"],
  famousAthletes: [
    "Emil Johansson (Sweden) — 3× Red Bull Joyride winner (2019, 2021, 2022); 3× King of Crankworx (2019, 2020, 2021)",
    "Nicholi Rogatkin (USA) — first cash roll (triple flip) in competition, 2016 Rotorua",
    "Jill Kintner (USA) — 5× Queen of Crankworx (2015-2019)",
  ],
  records: [
    { title: "Most Red Bull Joyride wins", holder: "Emil Johansson (Sweden)", value: "3× Joyride winner (2019, 2021, 2022); 3× King of Crankworx overall", year: 2023 },
    { title: "First triple backflip in competition", holder: "Nicholi Rogatkin (USA)", value: "Cash Roll — world's first triple flip in competition, landed at Crankworx Rotorua", year: 2016 },
    { title: "Most Queen of Crankworx overall titles", holder: "Jill Kintner (USA)", value: "5× Queen of Crankworx (2015, 2016, 2017, 2018, 2019)", year: 2019 },
  ],
  variants: ["red-bull-joyride-slopestyle", "crankworx-whistler-air-dh"],
  relatedSports: ["mountain-biking", "downhill-mtb", "bmx", "red-bull-rampage"],
  skills: ["slopestyle tricks", "line construction", "DH racing", "dual slalom", "whip-off style"],
  strategies: [
    { title: "Signature trick + amplitude", body: "Judges reward unique or first-of-its-kind tricks (cash roll, twister) plus max air time." },
    { title: "Run construction (link vs stall)", body: "Top Slopestyle runs link 3-4 tricks without stall — flow is critical." },
    { title: "DH race line — outside berm entry", body: "Enter berms high + wide for max exit speed." },
  ],
  terminology: [
    { term: "Slopestyle", meaning: "Judged run down course of jumps + features" },
    { term: "Joyride", meaning: "Red Bull Joyride — Whistler's premier Slopestyle" },
    { term: "Triple Crown", meaning: "Win all 3 major slopestyles in one season" },
    { term: "Whip-Off", meaning: "Style-based event judged on biggest whip trick" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Bike park basics", body: "Manual, wheelie, jumps, berms, small drops — Whistler Bike Park green trails." }] },
    { level: "intermediate", steps: [{ title: "Slopestyle + racing progression", body: "Backflips, tailwhips, spins (360/720), race lines on DH, Dual Slalom seeding." }] },
    { level: "advanced", steps: [{ title: "Pro invitation (top 40 world)", body: "Triple flips, cash roll, twister, contest run construction, physical + injury management." }] },
  ],
  faq: [
    { question: "What is the biggest Crankworx event?", answer: "Crankworx Whistler (August each year, ~9 days) — birthplace of the series and features Red Bull Joyride Slopestyle finale + Fox Air DH + Canadian Open DH." },
    { question: "What is Red Bull Joyride?", answer: "The premier Slopestyle contest at Crankworx Whistler — considered the 'Super Bowl of freeride MTB' with 30+ feature jumps, drops, dirt lips." },
  ],
  wikipediaTitle: "Crankworx",
  sources: [{ label: "Wikipedia — Crankworx", url: "https://en.wikipedia.org/wiki/Crankworx", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default crankworx;
