import type { Sport } from "@/lib/types";

export const parkourFreerunningFig: Sport = {
  id: "parkour-freerunning-fig",
  slug: "parkour-freerunning-fig",
  name: "Parkour + Freerunning (FIG)",
  officialName: "Fédération Internationale de Gymnastique (FIG) — Parkour",
  aliases: ["Parkour", "Freerunning", "L'art du déplacement", "ADD", "PK"],
  shortDescription:
    "Urban movement discipline of vaulting, jumping, climbing between obstacles — parkour focuses efficiency (David Belle Lisses France 1980s), freerunning adds flips + acrobatics (Sébastien Foucan); FIG governs since 2018 with World Championships since 2018; disciplines Speedrun (fastest course) + Freestyle (scored acrobatics).",
  longDescription:
    "Parkour (French: 'course', from parcours) is an urban movement discipline of navigating between obstacles using vaults, jumps, climbs, and rolls — emphasizing EFFICIENCY (getting from A to B as directly + smoothly as possible). Founded 1980s in Lisses (Paris suburb), France, by David Belle + the Yamakasi group (including Sébastien Foucan, Châu Belle-Dinh, Yann Hnautra) inspired by David Belle's father Raymond Belle's military 'méthode naturelle' training + Vietnamese martial arts + African military obstacle courses. Freerunning is the closely related evolution — coined by Sébastien Foucan 2003 for the film 'Jump London' — that ADDS acrobatic flair (flips, spins, wall-flips) that pure parkour purists reject as inefficient. Foundational moves: (a) Vault types — kong vault (dive over obstacle hands-first), speed vault (side hurdle), lazy vault, dash vault, thief vault; (b) Precision jumps (jumping from edge landing exactly on target edge); (c) Wall runs (running up vertical walls 3-4 steps); (d) Cat leaps (jumping to hang on wall edge); (e) Roll (safety landing technique to distribute impact); (f) Flow (chaining moves smoothly). Freerunning additions: front flip, back flip, side flip, wall flip, corkscrew, various gainers. Governing body evolution: (1) 2005-2015 — grassroots + private academies (ADD Paris, PKGen UK, WFPF USA); (2) 2017 — International Parkour Federation founded but disputed; (3) 2018 — FIG (International Gymnastics Federation) claimed parkour + launched official World Championships despite parkour community backlash; controversy continues. FIG competition formats: (a) Speedrun — timed course through obstacles fastest time wins; (b) Freestyle — judged acrobatic performance in obstacle setup. World Championships since 2018 (Tokyo inaugural). Alternative: Parkour Earth (community-led federation established 2017). Legendary practitioners: David Belle (founder), Sébastien Foucan (freerunning founder), Ryan Doyle (UK World Freerunning Champion), Jason Paul (Team Farang), Damien Walters (film stunt legend), Storror crew (UK YouTube legends), Bart van der Linden.",
  category: "adventure-extreme-sports",
  subCategory: "urban movement discipline — vaulting jumping climbing",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "20th-century", popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "Lisses, Paris suburbs, France (David Belle + Yamakasi group 1980s)",
  estimatedOrigin: "David Belle + Yamakasi group formed movement Lisses France ~1988-1997; freerunning branch coined by Sébastien Foucan 2003; FIG claimed jurisdiction 2018",
  players: { min: 1, max: 1, note: "Individual discipline; team demonstrations common (Storror, Team Farang, etc)." },
  equipment: [{ name: "Athletic footwear (parkour shoes)", description: "Flat-soled grippy shoes; specialty brands include Feiyue, Ollo, Puma Etoile; must have low profile + traction." }, { name: "Loose athletic clothing", description: "Loose t-shirt + track pants or shorts allowing full movement; no bulky items." }, { name: "Urban obstacles (natural training environment)", description: "Walls, rails, rooftops, staircases, benches, gaps — parkour uses urban environment as gym." }, { name: "Competition rig / gym obstacles (FIG events)", description: "Custom competition rigs with padded landing zones + purpose-built vault stations for FIG Championships." }],
  duration: { approximateMinutes: 90, structure: "Training session 1-3 hours; competition Speedrun ~30-90 sec run; Freestyle 60 sec routines." },
  objective: "Move through obstacles as efficiently (parkour) or acrobatically (freerunning) as possible; competition = fastest time (Speedrun) or highest score (Freestyle).",
  matchStructure: "Speedrun: timed obstacle course, fastest wins. Freestyle: 60-sec routines scored by judges on execution + difficulty + creativity + flow.",
  basicRules: [
    { title: "Speedrun — fastest time through obstacle course", body: "Competitor runs pre-designed obstacle course as fast as possible; time = ranking; must complete legally (touching required checkpoints)." },
    { title: "Freestyle — judged 60-sec routine", body: "Competitor performs 60-second freestyle routine in obstacle setup; scored 0-100 across execution, difficulty, creativity, and flow." },
    { title: "Community 'traceur code' ethics (parkour purism)", body: "Traditional parkour community emphasizes efficiency, safety, respect for environment; strong debate about acrobatic flair (freerunning) diluting original ethos." },
    { title: "Landing must be controlled (no ankle collapses)", body: "Roll technique required for safe landing from height; uncontrolled landings penalized in judged competition + risk injury in training." },
  ],
  scoring: { summary: "Speedrun: race time in seconds (fastest wins). Freestyle: judged 0-100 across execution, difficulty, creativity, flow.", winCondition: "Speedrun: fastest time. Freestyle: highest total judge score." },
  positions: [{ name: "Traceur (Parkour practitioner)", role: "French term for parkour practitioner; individual sole competitor.", count: 1 }, { name: "Traceuse (female traceur)", role: "French feminine form for female practitioner.", count: 1 }],
  officiating: { officials: ["Chief Judge", "5 Freestyle Judges (execution, difficulty, creativity, flow)", "Speedrun Timekeeper", "Course Marshal"], summary: "FIG certified officials at World Championships." },
  governingBodies: [{ name: "Fédération Internationale de Gymnastique (FIG) — Parkour Committee", founded: 2018, headquarters: "Lausanne, Switzerland" }, { name: "Parkour Earth (community federation, alternative)", founded: 2017, headquarters: "worldwide distributed" }, { name: "World Freerunning + Parkour Federation (WFPF, USA)", founded: 2007, headquarters: "New York, USA" }],
  majorCompetitions: [{ name: "FIG Parkour World Championships", frequency: "biennial", founded: 2018, region: "rotating (Japan, Bulgaria, etc)" }, { name: "Red Bull Art of Motion (Freerunning)", frequency: "annual", founded: 2007, region: "rotating (Santorini Greece, Yasaka Japan)" }, { name: "Red Bull Kicking It (Speedrun)", frequency: "annual", founded: 2015, region: "rotating" }, { name: "North American Parkour Championships", frequency: "annual", founded: 2013, region: "USA + Canada" }],
  countriesPlayed: ["FRA (origin)", "GBR (Storror + strong scene)", "USA", "RUS (huge scene)", "UKR", "JPN", "AUS", "BRA", "DEU", "worldwide urban scene"],
  famousAthletes: ["David Belle (founder — France)", "Sébastien Foucan (freerunning founder — France; Casino Royale opening chase)", "Ryan Doyle (UK — 3x World Freerunning Champion)", "Jason Paul (Germany — Red Bull athlete)", "Damien Walters (UK — film stunt legend)", "Storror crew (UK — YouTube legends)", "Toby Segar (Storror)", "Callum Powell (Storror)", "Pip Andersen (UK)", "Chase Armitage (USA)"],
  records: [
    { title: "David Belle founded parkour Lisses France 1990s", holder: "David Belle + Yamakasi group", value: "David Belle + Yamakasi group founded parkour in Lisses (Paris suburb) France late 1980s-1990s — codified from father Raymond Belle's military méthode naturelle training", year: 1997 },
    { title: "FIG claimed parkour jurisdiction 2018 (community controversy)", holder: "Fédération Internationale de Gymnastique", value: "FIG (International Gymnastics Federation) unilaterally claimed governance of parkour 2018 launching official World Championships — ongoing community backlash led by Parkour Earth", year: 2018 },
    { title: "Storror YouTube 8M+ subscribers", holder: "Storror crew (UK)", value: "Storror parkour crew (UK) reached 8+ million YouTube subscribers — largest parkour content creators globally", year: 2024 },
    { title: "First FIG Parkour World Championships Tokyo 2020", holder: "Fédération Internationale de Gymnastique", value: "Inaugural FIG Parkour World Championships held Tokyo 2020 (delayed to 2020 from originally-planned 2020)", year: 2020 },
  ],
  variants: ["parkour-pure-efficiency-focus", "freerunning-acrobatic-flair", "chase-tag-competitive-parkour-format", "speedrun-fig-competition", "freestyle-fig-competition"],
  relatedSports: ["gymnastics-artistic", "ninja-warrior-obstacle-course-racing", "urban-climbing-buildering", "tricking-martial-arts-tricking"],
  skills: ["precision jump landing", "kong vault technique", "wall run + wall flip", "roll technique (safety landing)", "flow (smooth combination chaining)"],
  wikipediaTitle: "Parkour",
  sources: [{ label: "Wikipedia — Parkour", url: "https://en.wikipedia.org/wiki/Parkour", publisher: "Wikipedia" }, { label: "FIG Parkour", url: "https://www.gymnastics.sport/site/pages/disciplines/pk-history.php", publisher: "Fédération Internationale de Gymnastique" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default parkourFreerunningFig;
