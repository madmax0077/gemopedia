import type { Sport } from "@/lib/types";

export const britishBulldog: Sport = {
  id: "british-bulldog",
  slug: "british-bulldog",
  name: "British Bulldog",
  officialName: "British Bulldog",
  aliases: ["Bulldog", "Bullrush", "Bull Rush", "Red Rover (Australia — different game)", "Cocky Laura (regional)"],
  shortDescription:
    "Rough British schoolyard tag — one or two 'bulldogs' stand mid-field trying to tag runners as they charge from one safe zone to the other; tagged runners join the bulldogs.",
  longDescription:
    "British Bulldog (also Bulldog, Bullrush, or Bull Rush) is a boisterous playground running game rooted in Victorian British schoolyards. The classic form has one or two 'bulldogs' stand in the middle of a bounded area, with all other players ('runners') at one end. The bulldogs call 'British Bulldog, 1-2-3!' and the runners must sprint across to the opposite safe zone. Bulldogs tag runners as they cross; tagged runners become bulldogs. The game continues in rounds until only one runner is left — the winner. British Bulldog spread across the British Empire and remains popular in the UK, Australia, New Zealand, and Ireland. Like Red Rover, it has been banned in many British schools since the 1980s–90s due to injury risk (broken bones, dislocations, concussions) as full-body tackles historically counted as 'tags'. It survives at scout troops, rugby clubs, and family gatherings — often with tag-only (no tackle) safety rules.",

  category: "playground-games",
  subCategory: "chase / tag / bullrush game",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: false,
  season: "year-round",
  era: "19th-century",
  popularity: "regional",

  countryOfOrigin: "GB",
  regionOfOrigin: "Victorian British schools; spread across Anglosphere (UK, Ireland, Australia, NZ, Canada)",
  estimatedOrigin: "Late 19th-century British public schools; documented in 1890s + 1900s school memoirs",

  players: { min: 5, max: 40, note: "Best with 15–30; below 10 game ends in seconds, above 40 becomes chaotic." },
  field: {
    surfaceName: "Grass field, playground, rugby pitch, sports hall",
    dimensions: "Roughly 20–40 m long × 10–20 m wide, with 2–3 m safe zones at each end",
    description: "Grass strongly preferred — the historic tackle-tag version is dangerous on concrete. Bounded by natural or marked lines; safe zones at each end where runners rest.",
  },
  equipment: [
    { name: "None required", description: "Zero equipment. Sometimes cones or lines mark the field boundaries and safe zones." },
    { name: "Distinctive bibs (optional)", description: "Distinguish bulldogs from runners in large games; helps prevent friendly-fire tags." },
  ],
  duration: {
    approximateMinutes: 15,
    structure: "Continuous rounds — game ends when only 1 runner remains. Usually 10–20 minutes with 15+ starting runners.",
  },
  objective:
    "Bulldogs: tag every runner. Runners: reach the opposite safe zone without being tagged. Last runner uncaught wins the game.",
  matchStructure:
    "Field is a rectangle with a safe zone at each end. 1–2 bulldogs start in the middle; all other players are runners in one safe zone. Bulldogs call 'British Bulldog, 1-2-3!' — runners must all charge across the field to the opposite safe zone. Bulldogs tag runners mid-field. Tagged runners become bulldogs for the next crossing. Round ends when all runners have crossed (or been tagged). Runners charge back the other way. Continue until 1 runner uncaught — that runner wins.",

  basicRules: [
    { title: "Field setup", body: "Rectangle with safe zones at each end. Bulldogs start in the middle strip. All other players start in one safe zone." },
    { title: "The call", body: "Bulldogs shout 'British Bulldog, 1-2-3!' All runners must leave their safe zone and charge to the opposite one." },
    { title: "Runners must leave", body: "Once the call is made, no runner may stay in their safe zone — they must attempt to cross." },
    { title: "Tag or tackle (rule-dependent)", body: "Classic version: bulldogs must physically hold a runner off the ground for 3 seconds ('bulldog!'). Safer modern version: two-hand touch tag." },
    { title: "Tagged runner joins bulldogs", body: "Tagged runners become bulldogs immediately and help catch runners on the next crossing." },
    { title: "Safe zones are inviolable", body: "Bulldogs cannot enter the end safe zones; runners cannot be tagged once they reach one." },
    { title: "Last runner wins", body: "Game continues in alternating-direction crossings until only 1 runner is left uncaught." },
  ],
  advancedRules: [
    { title: "Two-hand-touch safety rule", body: "Modern safety-conscious version: no lifting or tackling; two-hand touch on shoulders/back suffices as tag. Recommended for under-15s + PE." },
    { title: "Hold + 'bulldog' 3-count (classic)", body: "Traditional pre-1990s rules: bulldog must lift runner off ground and count '1-2-3 bulldog!' before the runner escapes." },
    { title: "Rugby Bulldog", body: "Played by rugby teams as warmup — runners carry rugby ball; bulldogs must strip the ball or tackle to fully halt." },
    { title: "Zone Bulldog", body: "Field divided into zones; bulldogs may only operate in the middle zone; harder to catch runners." },
    { title: "British Bulldog variant with pool noodles", body: "Modern safety variant — bulldogs tag with pool noodles instead of hands; eliminates most collision injury." },
    { title: "Progressive bulldog', ", body: "Runners cross back and forth; each crossing everyone attempts, and bulldogs grow. Winner: last uncaught after all crossings." },
  ],
  scoring: {
    summary: "Elimination-based. Not points; last uncaught runner wins. Some scoring variants track how many crossings each player survived.",
    winCondition: "Last runner uncaught wins the game.",
    breakdown: [
      { action: "Successfully crossing to opposite safe zone", points: "Survive to next round" },
      { action: "Tagged by a bulldog", points: "Become a bulldog + continue playing as chaser" },
      { action: "Last runner uncaught", points: "Winner" },
    ],
  },

  positions: [
    { name: "Bulldog", role: "Mid-field chaser — tags runners as they cross.", count: 2 },
    { name: "Runner", role: "Sprints from safe zone to safe zone attempting to avoid bulldogs." },
    { name: "Adult supervisor", role: "Ensures safe play + enforces boundaries; strongly recommended for children's games." },
  ],
  officiating: {
    officials: ["Adult supervisor / PE teacher", "None in casual play"],
    summary: "No formal officiation. Given historic injury rates, adult supervision + safe rule variants (two-hand touch only) strongly recommended for children under 15.",
  },

  governingBodies: [
    { name: "No official governing body — traditional folk game", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "No formal competitions — recreational game", frequency: "n/a", founded: 0, region: "n/a" },
    { name: "Scout/Guide troops + rugby team warm-ups (informal)", frequency: "weekly", founded: 1900, region: "UK + Commonwealth" },
  ],
  countriesPlayed: ["GB", "IE", "AU", "NZ", "CA", "ZA", "US"],
  famousAthletes: [
    "No professional players — traditional playground game",
    "Historically banned from many UK schools (1980s–2000s) due to safety concerns; still popular at rugby clubs",
    "Featured as a warm-up game by many professional British rugby coaches",
  ],
  records: [
    { title: "Banned from most UK primary schools", holder: "UK Education Department + local authorities", value: "Widespread ban 1980s–2000s over injury liability", year: 2000 },
    { title: "Longest surviving Victorian-era playground game", holder: "British Bulldog", value: "130+ years continuous play (1890s–present)", year: 2020 },
    { title: "Origin school variant", holder: "Rugby School / Eton", value: "Public-school origin claimed by both", year: 1890 },
  ],

  variants: ["classic-tackle-bulldog", "two-hand-touch-safer", "rugby-bulldog-with-ball", "zone-bulldog", "pool-noodle-bulldog"],
  relatedSports: ["red-rover", "tag", "capture-the-flag", "manhunt", "rugby-union"],

  skills: [
    "sprint speed + acceleration",
    "cutting + dodging",
    "physical bravery (charging past larger players)",
    "spatial awareness (finding gaps in bulldog line)",
    "team coordination (bulldogs working together)",
  ],
  strategies: [
    { title: "For runners — run in a pack", body: "Bulldogs can only tag one runner at a time. Charging as a group of 5+ means most will make it through even if some are caught." },
    { title: "For runners — use fastest players as decoys", body: "Fast players draw bulldog attention; slower players cross while bulldogs focus elsewhere." },
    { title: "For runners — sudden cuts", body: "Bulldogs commit to a trajectory; a sudden left/right cut when they're 2 metres away frequently loses them." },
    { title: "For bulldogs — spread across field", body: "Two bulldogs at opposite edges + centre force runners into predictable narrow corridors — easier to catch." },
    { title: "For bulldogs — target the herd's edges", body: "Central runners are protected by the pack; edge runners are exposed. Attack edges." },
    { title: "For bulldogs — coordinate the tag", body: "One bulldog approaches, other cuts off escape route. Impossible to catch fast runners solo — teamwork essential." },
  ],

  terminology: [
    { term: "Bulldog", meaning: "The chaser(s) in the middle of the field." },
    { term: "Runner", meaning: "A player attempting to cross from safe zone to safe zone." },
    { term: "Safe zone / Home", meaning: "End areas where runners cannot be tagged; also 'in-goal' or 'base' regionally." },
    { term: "The call", meaning: "'British Bulldog, 1-2-3!' — the shout that starts each charge." },
    { term: "Bull Rush", meaning: "Australian variant name for the same game." },
    { term: "'Bulldog!'", meaning: "Traditional 3-count call bulldogs shouted after lifting a runner (classic rules)." },
    { term: "Cocky Laura", meaning: "Old regional English variant name (Nottinghamshire)." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Play the two-hand touch version", body: "For under-15s + first-timers: no lifting or tackling; two-hand touch on shoulders/back is a tag. Preserves the fun without injury risk." },
        { title: "Start with 1 bulldog + 8–10 runners", body: "Small group builds confidence; add players + bulldogs gradually." },
        { title: "Play on grass or padded surface", body: "Never on concrete. Grass, sand, or padded gym mat. This is a full-sprint game — falls happen." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Rugby Bulldog with ball", body: "Runners carry a rugby ball; bulldogs must strip or tackle to fully halt. Excellent rugby-team warm-up." },
        { title: "Large-group multi-bulldog play", body: "30+ players with 5+ bulldogs across a full rugby pitch — becomes a strategic challenge for bulldog coordination." },
        { title: "Coach children safely", body: "PE + scout leaders: use two-hand-touch rules, structured field, and rest breaks. British Bulldog can be safe if managed properly." },
      ],
    },
  ],

  faq: [
    { question: "Why is British Bulldog banned in schools?", answer: "Injury risk. The traditional version — where bulldogs physically tackle or lift runners — historically produced dislocations, fractures, and concussions. UK schools began banning it from the 1980s under child-safety liability rules. It survives at rugby clubs, scout troops, and family gatherings, often with safer 'two-hand-touch' rules that eliminate the tackle." },
    { question: "What's the difference between British Bulldog and Red Rover?", answer: "British Bulldog: bulldogs stand in the middle; runners charge from one safe zone to the other; tagged runners join bulldogs. Red Rover: two linked-hand lines face off; a named player charges the opposing line trying to break through. Different mechanics — but both are line-breaking / chase games with injury reputations. Confusingly, Australians sometimes call British Bulldog 'Red Rover'." },
    { question: "How many players do you need?", answer: "Minimum 5 (1 bulldog + 4 runners); ideal 15–30; maximum ~40. Too few and the game ends immediately; too many and bulldogs can't cover the field. Sweet spot for a scout troop or PE class is ~20 players." },
    { question: "Is there a safer version?", answer: "Yes — the 'two-hand-touch' variant. Bulldogs tag with a firm two-hand touch on shoulders or back; no lifting, tackling, or holding. Preserves the fun of dodging while eliminating most injury risk. Recommended for children under 15 and any mixed-age group." },
    { question: "Why the name 'British Bulldog'?", answer: "The name evokes the English Bulldog's tenacity — refusing to let go once it grabs. Classic rules required the bulldog to hold a runner up and count '1-2-3 bulldog!' — mimicking the dog's grip. The name and rules likely emerged from 1890s English public-school culture (Rugby School + Eton both claim the origin)." },
  ],

  wikipediaTitle: "British bulldog (game)",
  sources: [
    { label: "Wikipedia — British bulldog", url: "https://en.wikipedia.org/wiki/British_Bulldogs_(game)", publisher: "Wikipedia" },
    { label: "Iona and Peter Opie — 'Children's Games in Street and Playground' (1969)", publisher: "Oxford University Press" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
