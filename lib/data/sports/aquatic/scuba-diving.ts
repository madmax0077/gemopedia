import type { Sport } from "@/lib/types";

export const scubaDiving: Sport = {
  id: "scuba-diving",
  slug: "scuba-diving",
  name: "Scuba Diving",
  officialName: "Scuba Diving (Self-Contained Underwater Breathing Apparatus)",
  aliases: ["SCUBA", "Underwater Diving"],
  shortDescription:
    "Recreational + technical underwater diving using self-contained breathing gear — 30 million certified divers globally exploring wrecks, reefs, and cave systems from PADI Open Water to deep trimix technical dives.",
  longDescription:
    "Modern scuba diving was born when Cousteau + Gagnan invented the Aqua-Lung in 1943. PADI (Professional Association of Diving Instructors) has certified 30+ million divers since 1966. The Great Barrier Reef, Red Sea, Palau, Galapagos, and Truk Lagoon are the world's iconic dive sites. Technical scuba branches into cave diving (200+ m penetrations), wreck diving, and mixed-gas diving (trimix, rebreather) reaching 300+ m depths. Freediving is a related no-tank discipline governed by AIDA.",

  category: "aquatic-sports",
  subCategory: "recreational + technical underwater diving",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "FR",
  regionOfOrigin: "Southern France (Cousteau + Émile Gagnan invented Aqua-Lung 1943)",
  estimatedOrigin: "Aqua-Lung invented 1943; PADI founded 1966; NAUI 1960; scuba became major recreational sport 1970s",

  players: { min: 2, max: 8, note: "Always dive in buddy pairs minimum; groups of 4-8 typical with a divemaster." },
  field: {
    surfaceName: "Ocean / lake / cave / wreck",
    dimensions: "Recreational max: 40m depth. Technical: 100-300m+.",
    description: "Underwater environments from shallow reefs to deep wrecks, caves, and pelagic zones." },
  equipment: [
    { name: "SCUBA tank", description: "Aluminum 80 ft³ or steel 100+ ft³; 3000 psi standard fill." },
    { name: "Regulator + BCD", description: "First + second stage regulator; buoyancy control device (BCD) inflatable jacket." },
    { name: "Wetsuit or drysuit", description: "3-7mm wetsuit warm water; drysuit for <15°C." },
    { name: "Mask + fins + snorkel", description: "Silicone mask, adjustable fins, folding snorkel." },
    { name: "Dive computer", description: "Shearwater, Suunto, Garmin Descent — tracks depth, time, decompression." },
    { name: "SMB + reel", description: "Surface marker buoy for ascent + boat pickup." },
  ],
  duration: {
    approximateMinutes: 60,
    structure: "Recreational dive: 40-60 min. Technical dive: 2-6 hours. Cave/deep dive expedition: full-day operations." },

  objective:
    "Recreational: safely explore underwater environment; earn certification cards. Technical: complete deep/decompression/cave objectives with team.",
  matchStructure:
    "Pre-dive brief → equipment check → buddy check → descent → dive profile → ascent with safety stop → surface interval → next dive (if applicable).",

  basicRules: [
    { title: "Never dive alone", body: "Buddy system mandatory below Rescue Diver certification." },
    { title: "Ascend slow (max 9m/min)", body: "Faster ascent risks decompression sickness ('bends')." },
    { title: "Safety stop", body: "3 min at 5m on every dive to off-gas nitrogen." },
    { title: "Depth limits", body: "PADI Open Water: 18m max. Advanced: 30m. Deep Diver: 40m. Tec certifications required beyond." },
    { title: "No-decompression limits", body: "Dive computers track NDL to avoid mandatory decompression stops." },
  ],
  advancedRules: [
    { title: "Nitrox (EANx)", body: "Enriched-air (32% O2) extends bottom time; requires Nitrox certification." },
    { title: "Decompression stops", body: "Multiple 3-min stops at fixed depths for deco divers; missed stops = injury risk." },
    { title: "Mixed gas (trimix, heliox)", body: "Helium mix reduces narcosis at >50m; requires technical training." },
    { title: "Rebreather", body: "Closed-circuit system recycles exhaled air; 6-12 hour bottom times possible." },
    { title: "Cave / wreck penetration", body: "Continuous guideline (reel) required; specialized certification." },
  ],
  scoring: {
    summary: "Non-competitive recreational sport; certification cards mark progression.",
    winCondition: "Safe dive + return to surface with air remaining.",
    breakdown: [
      { action: "Certification progression", points: "OW → AOW → Rescue → DM → Instructor" },
      { action: "Notable dive achievements", points: "Deep records, cave firsts" },
    ],
  },
  penalties: [
    { title: "Reckless diving", body: "Instructor / operator can refuse further service; PADI can revoke certification." },
    { title: "Marine damage", body: "Fines under CITES + marine reserve laws (touching coral, taking artifacts)." },
  ],

  positions: [
    { name: "Buddy pair", role: "Two divers checking each other's gear + monitoring air.", count: 2 },
    { name: "Divemaster", role: "Certified leader of recreational dive groups." },
    { name: "Instructor", role: "Teaches PADI/NAUI/SSI courses + certifies students." },
    { name: "Safety diver (technical)", role: "Standby diver at depth for emergency support." },
  ],
  officiating: {
    officials: ["Dive operator safety officer", "PADI/NAUI/SSI Instructor"],
    summary: "Certifying agencies (PADI, NAUI, SSI, GUE) enforce standards; national dive federations (Netherlands, UK) hold regulatory power.",
  },

  governingBodies: [
    { name: "PADI (Professional Association of Diving Instructors)", founded: 1966, headquarters: "Rancho Santa Margarita, California, USA", website: "https://padi.com" },
    { name: "NAUI (National Association of Underwater Instructors)", founded: 1960, headquarters: "Tampa, Florida, USA", website: "https://naui.org" },
    { name: "SSI (Scuba Schools International)", founded: 1970, headquarters: "Fort Collins, Colorado, USA", website: "https://divessi.com" },
  ],
  majorCompetitions: [
    { name: "CMAS Underwater Photography World Championships", frequency: "biennial", founded: 1985, region: "rotating" },
    { name: "Freediving AIDA World Championships (related discipline)", frequency: "annual", founded: 1996, region: "rotating" },
    { name: "PADI Dive Center Awards", frequency: "annual", founded: 1990, region: "global" },
  ],
  countriesPlayed: ["AU", "EG", "TH", "ID", "MX", "US", "PH", "MV", "GB", "IT", "ES", "BR"],
  famousAthletes: [
    "Jacques Cousteau (FR, co-invented Aqua-Lung + The Silent World)",
    "Ahmed Gabr (EG, deepest scuba dive 332.35m)",
    "Herbert Nitsch (AT, freediving records)",
    "Sylvia Earle (US, marine biologist + Cousteau Society)",
    "Rich Denmark (US, cave diving legend)",
  ],
  records: [
    { title: "Deepest scuba dive", holder: "Ahmed Gabr", value: "332.35 m (Red Sea, 2014)", year: 2014 },
    { title: "Longest scuba dive", holder: "Cem Karabay", value: "142h 42m (2016)", year: 2016 },
    { title: "Deepest cave dive", holder: "Krzysztof Starnawski", value: "265m Hranice Abyss (2020)", year: 2020 },
  ],

  variants: ["freediving", "technical-diving", "cave-diving", "wreck-diving", "underwater-photography", "spearfishing"],
  relatedSports: ["freediving", "snorkeling", "underwater-hockey", "underwater-rugby", "spearfishing"],

  skills: [
    "buoyancy control (fin pivot, hover)",
    "equalization + ear pressure management",
    "gas management + rock-bottom calculation",
    "emergency response (OOG, mask flood)",
    "situational awareness in 3D environment",
  ],
  strategies: [
    { title: "Plan dive, dive plan", body: "Set max depth + bottom time before descent; stick to it." },
    { title: "Buddy check every dive", body: "BWRAF acronym: BCD, Weights, Releases, Air, Final OK." },
    { title: "Ascend slow always", body: "9m/min max + 3-min safety stop even when 'safe' by computer." },
    { title: "Log every dive", body: "Track depth + time + conditions to build experience." },
  ],

  terminology: [
    { term: "NDL (No-Decompression Limit)", meaning: "Max bottom time before mandatory decompression stops required." },
    { term: "Nitrox (EANx)", meaning: "Enriched-air mixture (32% or 36% O2) extending bottom time." },
    { term: "SAC rate", meaning: "Surface Air Consumption — measure of your gas usage efficiency." },
    { term: "Trimix", meaning: "Helium/N2/O2 breathing mix for depths >50m." },
    { term: "Bends (DCS)", meaning: "Decompression sickness — dissolved N2 bubbling out of tissues on ascent." },
    { term: "Divemaster (DM)", meaning: "Professional-level certification; leads dive groups + assists instructors." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Take a Discover Scuba course", body: "1-day resort intro dive with instructor; ~$150." },
        { title: "Complete PADI Open Water Certification", body: "3-day course, 4 open-water dives, ~$400. Lifetime cert to 18m depth." },
        { title: "Progress to Advanced Open Water", body: "5 additional adventure dives to 30m max, ~$300." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Rescue Diver + First Aid", body: "Learn to manage panicked divers, tow, ascend. Prerequisite for professional." },
        { title: "Divemaster course", body: "6+ months, 60+ dives, ~$1500. First professional cert." },
        { title: "Technical training (TDI, GUE, IANTD)", body: "Deep, trimix, cave, wreck penetrations — $1000-$5000 per level." },
      ],
    },
  ],

  faq: [
    { question: "How deep can I scuba dive?", answer: "PADI Open Water: 18m max. Advanced: 30m. Recreational Deep Diver: 40m. Tec Deep: 60-100m. World record: 332m (Ahmed Gabr, 2014)." },
    { question: "Is scuba diving safe?", answer: "Yes with proper training. Fatality rate ~1 per 200,000 dives — similar to driving. Buddy diving + safe ascent essential." },
    { question: "Can I dive with contact lenses?", answer: "Yes with soft contacts; hard contacts risk squeeze injury. Prescription masks also available." },
    { question: "How long is Open Water certification valid?", answer: "Lifetime — but many operators require a refresher if you haven't dived in 12+ months." },
  ],

  sources: [
    { label: "Wikipedia — Scuba diving", url: "https://en.wikipedia.org/wiki/Scuba_diving", publisher: "Wikipedia" },
    { label: "PADI official", url: "https://padi.com", publisher: "PADI" },
    { label: "Divers Alert Network (DAN)", url: "https://dan.org", publisher: "DAN" },
  ],
  wikipediaTitle: "Scuba diving",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
