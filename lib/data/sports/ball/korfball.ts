import type { Sport } from "@/lib/types";

export const korfball: Sport = {
  id: "korfball",
  slug: "korfball",
  name: "Korfball",
  officialName: "Korfball / Korfbal",
  aliases: ["Dutch Basketball", "Kortbal"],
  shortDescription:
    "Dutch mixed-gender team sport invented 1902 by Nico Broekhuysen. 8 players per team (4 men + 4 women each) score by shooting ball through 3.5m elevated basket (korf). UNIQUE — only major team sport designed for MANDATORY MIXED-GENDER play. Popular Netherlands, Belgium, Taiwan, small international scene. IWGA World Games sport.",
  longDescription:
    "Korfball (KORFBAL in Dutch) is DUTCH MIXED-GENDER TEAM SPORT invented 1902 by NICO BROEKHUYSEN (Amsterdam school teacher inspired by Swedish 'ringboll'). 8 PLAYERS PER TEAM — 4 MEN + 4 WOMEN each = 4 MEN + 4 WOMEN ON FIELD. UNIQUE — ONLY MAJOR TEAM SPORT DESIGNED FOR MANDATORY MIXED-GENDER PLAY. Emphasizes GENDER EQUALITY in sport. GAMEPLAY: 40m × 20m rectangular field divided into 2 ZONES. Each team's 4 players (2 men + 2 women) start in each zone; SWITCH ZONES every 2 goals. Score by shooting BALL through 3.5m ELEVATED BASKET (KORF, cylinder without backboard) on top of pole. Men GUARD MEN + women GUARD WOMEN (defenders block same-gender attackers). NO RUNNING WITH BALL — passing + pivoting only (like netball). NO DRIBBLING. NO STEALING from same team (rules encourage passing). SCORES typical 15-25 goals per game. Considered STRATEGIC + PASS-DRIVEN. WORLD CHAMPIONSHIPS since 1978. IWGA WORLD GAMES SPORT (multi-sport for non-Olympics). IOC recognized. Popular NETHERLANDS (massive — 500+ clubs), BELGIUM, TAIWAN (surprising strong scene — top-4 in worlds), UK, GERMANY, CATALONIA. Small but growing international. Considered PROGRESSIVE sport.",
  category: "ball-sports",
  subCategory: "mixed-gender team ball sport with elevated basket",
  sportType: "team",
  indoorOutdoor: "both",
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "NL",
  regionOfOrigin: "Netherlands (Amsterdam, invented 1902 by Nico Broekhuysen)",
  estimatedOrigin: "1902 — invented by Nico Broekhuysen (Amsterdam school teacher inspired by Swedish 'ringboll'); Dutch Korfball Association 1903; IKF founded 1933",
  players: { min: 16, max: 20, note: "8 on field per team (4 men + 4 women mandatory)." },
  field: { surfaceName: "rectangular field (grass, turf, or indoor)", dimensions: "40m × 20m divided into 2 zones", description: "Divided into 2 equal zones; 3.5m elevated basket at each end." },
  equipment: [
    { name: "Korfball (leather ball, size 5, ~445g)", description: "€25-60" },
    { name: "Korf (elevated basket, 3.5m pole, cylindrical basket no backboard)", description: "Facility-provided" },
    { name: "Court markings + jerseys", description: "Standard team sport" },
  ],
  duration: { approximateMinutes: 60, structure: "2 halves × 30 min; halftime break." },
  objective: "Score more goals than opponent by shooting ball through opponent's elevated basket.",
  basicRules: [
    { title: "8 players per team — 4 men + 4 women (MANDATORY)", body: "Only mixed-gender team sport enforced by rules." },
    { title: "Field divided into 2 zones; 4 players (2 men + 2 women) per zone", body: "Switch zones every 2 goals." },
    { title: "Score by shooting ball through 3.5m elevated basket (korf)", body: "No backboard; cylindrical." },
    { title: "NO RUNNING WITH BALL — pass + pivot only (like netball)", body: "No dribbling." },
    { title: "NO STEALING — pass ball to teammates (encourages team play)", body: "Defensive movement to intercept passes." },
    { title: "MEN DEFEND MEN, WOMEN DEFEND WOMEN", body: "Same-gender guarding required by rules." },
    { title: "'DEFENDED' rule prohibits shooting while covered", body: "Encourages movement + passing." },
  ],
  scoring: {
    summary: "1 goal (ball through basket) = 1 point. Team with more goals wins.",
    breakdown: [
      { action: "Goal (ball through basket from any distance)", points: "1 point" },
      { action: "Penalty shot for fouls", points: "1 shot" },
    ],
    winCondition: "More goals than opponent after 60 min.",
  },
  governingBodies: [
    { name: "International Korfball Federation (IKF)", founded: 1933, headquarters: "Utrecht, Netherlands", website: "https://www.ikf.org/" },
    { name: "Koninklijke Nederlandse Korfbal Verbond (KNKV, Netherlands)", founded: 1903, headquarters: "Netherlands" },
  ],
  majorCompetitions: [
    { name: "IKF World Korfball Championship", frequency: "every 4 years", founded: 1978, region: "worldwide" },
    { name: "IWGA World Games (korfball since 1985)", frequency: "every 4 years", founded: 1985, region: "worldwide" },
    { name: "Dutch Korfball League (top club)", frequency: "annual", founded: 1946, region: "Netherlands" },
    { name: "European Korfball Championship", frequency: "every 4 years", founded: 1998, region: "Europe" },
  ],
  countriesPlayed: ["NL", "BE", "TW", "GB", "DE", "PT", "CZ", "HU", "PL", "AU"],
  famousAthletes: [
    "Kim Dolstra (Netherlands) — Legend, multiple world champion",
    "Erik Wolsink (Netherlands) — Dutch star",
    "Tjyy Chuen Yang (Taiwan) — Taiwanese elite player",
  ],
  variants: [
    "korfball-standard-8v8-outdoor-full-field",
    "beach-korfball-4v4-sand-outdoor-format",
    "u-korfball-6v6-junior-format",
    "wheelchair-korfball-adapted",
    "indoor-korfball-standard-modern-form-most-play",
  ],
  relatedSports: ["basketball", "netball", "handball"],
  skills: ["shooting accuracy (no backboard)", "passing coordination", "team spatial awareness", "defensive positioning"],
  strategies: [
    { title: "Pass-driven offense — no dribbling", body: "Constant motion + support." },
    { title: "Zone rotation every 2 goals critical", body: "Fresh legs; positional discipline." },
    { title: "Same-gender defense means matching physical style", body: "Different pairings emerge." },
    { title: "Shooting from distance — no backboard makes long shots harder", body: "Positional shot selection matters." },
  ],
  terminology: [
    { term: "Korf", meaning: "Dutch for 'basket' — the target." },
    { term: "Korfbal", meaning: "Dutch spelling of korfball." },
    { term: "IKF", meaning: "International Korfball Federation — governing body since 1933." },
    { term: "Defended", meaning: "Rule state prohibiting shot when covered." },
    { term: "Zone switch", meaning: "Every 2 goals, teams rotate zones." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Find korfball club — Netherlands, Belgium, UK, Taiwan strongest", body: "500+ Dutch clubs; sparser elsewhere." },
      { title: "Basketball/netball skills transfer well", body: "Passing + shooting fundamentals." },
    ]},
    { level: "intermediate", steps: [
      { title: "Join national club league", body: "Structured mixed-gender team play." },
    ]},
    { level: "advanced", steps: [
      { title: "Dutch Korfball League contract", body: "Top-level pro." },
      { title: "National team + World Championships", body: "IKF Worlds every 4 years." },
    ]},
  ],
  faq: [
    { question: "What is Korfball?", answer: "DUTCH MIXED-GENDER TEAM SPORT invented 1902 by NICO BROEKHUYSEN. 8 PLAYERS PER TEAM = 4 MEN + 4 WOMEN each (MANDATORY). UNIQUE — only major team sport designed for MANDATORY MIXED-GENDER play. Score by shooting ball through 3.5m elevated basket (korf) — cylindrical, no backboard. Field 40m × 20m divided into 2 zones; players switch every 2 goals. Men defend men, women defend women. NO DRIBBLING — pass + pivot only. WORLD CHAMPIONSHIPS since 1978. Massive Netherlands + Belgium + Taiwan (surprising strong scene)." },
    { question: "How is Korfball different from Basketball?", answer: "KORFBALL uses 3.5m ELEVATED BASKET (CYLINDER, NO BACKBOARD); BASKETBALL uses 3.05m hoop with BACKBOARD. KORFBALL 8v8 (4M+4W each) MIXED-GENDER MANDATORY; BASKETBALL 5v5 SINGLE-GENDER. KORFBALL NO DRIBBLING; BASKETBALL dribbling core. KORFBALL zone-based (switch every 2 goals); BASKETBALL free movement. KORFBALL SAME-GENDER GUARDING; BASKETBALL any-position guarding. KORFBALL 60 min (2×30); BASKETBALL 48 min NBA (4×12). Different sports despite superficial similarity of shooting into elevated target." },
    { question: "Is Korfball in the Olympics?", answer: "NOT CURRENTLY. Korfball featured as DEMONSTRATION SPORT at 1920 ANTWERP + 1928 AMSTERDAM Olympics but never permanent. IOC RECOGNIZED sport. Featured at IWGA WORLD GAMES (multi-sport for non-Olympics) since 1985. IKF actively lobbies for Olympic inclusion citing gender equality (mixed-gender team sport unique). Challenges: SMALL GLOBAL BASE outside Netherlands/Taiwan; IOC preference for larger participation numbers. Growing international scene may support future inclusion bid." },
  ],
  wikipediaTitle: "Korfball",
  sources: [
    { label: "IKF — International Korfball Federation", url: "https://www.ikf.org/", publisher: "IKF" },
    { label: "Wikipedia — Korfball", url: "https://en.wikipedia.org/wiki/Korfball", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
