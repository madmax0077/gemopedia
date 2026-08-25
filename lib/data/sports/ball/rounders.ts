import type { Sport } from "@/lib/types";

export const rounders: Sport = {
  id: "rounders",
  slug: "rounders",
  name: "Rounders",
  officialName: "Rounders",
  aliases: ["English Rounders", "Irish Rounders"],
  shortDescription:
    "British bat-and-ball team sport. DIRECT ANCESTOR OF BASEBALL + SOFTBALL. Played on diamond with 4 bases; batters hit ball + run bases. 9 players per team. Popular UK (schools), Ireland (national sport with distinct rules). Ancient — documented 1744. UK version 2 innings; Irish version 3.",
  longDescription:
    "Rounders is BRITISH BAT-AND-BALL TEAM SPORT considered DIRECT ANCESTOR OF BASEBALL + SOFTBALL. Documented in 1744 English book 'A Little Pretty Pocket-Book' as 'BASE-BALL' — same sport later called rounders in England, evolved into modern baseball in America (with rules formalization by Alexander Cartwright 1845). Played on DIAMOND with 4 BASES; batters HIT BALL + RUN BASES. 9 PLAYERS PER TEAM. Two significant regional versions with DIFFERENT RULES: (1) ENGLISH ROUNDERS (Rounders England, ~500 clubs) — smaller diamond, softer ball, 2 innings, 15-a-side possible. (2) IRISH ROUNDERS (Gaelic Athletic Association, cultural preservation) — larger diamond, faster ball, 3 innings, 9-a-side. Considered NATIONAL FOLK GAME of both England + Ireland. Popular in UK SCHOOLS as PE curriculum sport. Ireland's Gaelic Athletic Association manages Irish rounders alongside hurling + Gaelic football. Score by running around 4 bases (RUN scored on full circuit). Bat is narrow cylinder (thinner than baseball). Ball smaller than baseball/softball (~7.5cm diameter). Fielders can catch bat + throw players out at bases. Small international scene but growing — especially in Britain + Ireland with recreational leagues + youth programs. Considered accessible + inclusive sport for schools.",
  category: "ball-sports",
  subCategory: "British bat-and-ball team sport (baseball ancestor)",
  sportType: "team",
  indoorOutdoor: "outdoor",
  isProfessional: false,
  season: "summer",
  era: "19th-century",
  popularity: "regional",
  countryOfOrigin: "GB",
  regionOfOrigin: "England (documented 1744); parallel evolution in Ireland",
  estimatedOrigin: "Documented 1744 in England as 'base-ball'; ancestor of modern baseball (Cartwright 1845 formalization); Rounders England 1943; GAA Irish rounders 1884",
  players: { min: 6, max: 15, note: "9v9 typical; English rounders can be 15-a-side; Irish rounders 9-a-side." },
  field: { surfaceName: "diamond", dimensions: "English: smaller diamond ~12m sides; Irish: larger ~20m sides", description: "4-base diamond; batter at home post; 4 posts at corners." },
  equipment: [
    { name: "Rounders bat (narrow cylindrical, ~46cm)", description: "€15-40" },
    { name: "Rounders ball (small, ~7.5cm diameter)", description: "€5-15" },
    { name: "4 bases/posts + bases + batting square", description: "Facility-provided" },
  ],
  duration: { approximateMinutes: 60, structure: "English: 2 innings each team; Irish: 3 innings; game 45-90 min typical." },
  objective: "Score more RUNS (bases run around back to home) than opponent.",
  basicRules: [
    { title: "9 players per team (or 15 in English rounders variant)", body: "Batting team vs fielding team; alternating innings." },
    { title: "Batter hits ball with narrow cylindrical bat", body: "Different from baseball's baseball bat." },
    { title: "Run around 4 bases counter-clockwise", body: "Score 1 RUN for completing circuit." },
    { title: "Fielders throw player out at bases (like baseball)", body: "Or catch bat for out." },
    { title: "English rounders: 2 innings each team; Irish rounders: 3 innings", body: "Regional rule differences." },
    { title: "Innings end after certain number of outs (3-6 depending version)", body: "Return to bat." },
  ],
  scoring: {
    summary: "Runs scored by completing circuit around 4 bases.",
    breakdown: [
      { action: "Full circuit around all 4 bases (RUN)", points: "1 run" },
      { action: "Half-run (partial base advancement rules variant)", points: "0.5 (English variant)" },
      { action: "Home run (ball hit over boundary + full circuit)", points: "1 run (English) or 1 run (Irish)" },
    ],
    winCondition: "More runs than opponent after all innings.",
  },
  governingBodies: [
    { name: "Rounders England", founded: 1943, headquarters: "Sheffield, England", website: "https://roundersengland.co.uk/" },
    { name: "Gaelic Athletic Association (GAA) — Irish Rounders", founded: 1884, headquarters: "Dublin, Ireland" },
    { name: "National Rounders Board (Ireland)", founded: 1949, headquarters: "Dublin, Ireland" },
  ],
  majorCompetitions: [
    { name: "Rounders England National Championships", frequency: "annual", founded: 1943, region: "England" },
    { name: "Irish Rounders All-Ireland Championship (GAA)", frequency: "annual", founded: 1934, region: "Ireland" },
    { name: "UK Youth Rounders", frequency: "annual", founded: 1970, region: "UK schools" },
  ],
  countriesPlayed: ["GB", "IE", "US (schools)", "AU (schools)", "NZ (schools)"],
  famousAthletes: [
    "Various English + Irish rounders champions (small elite pool; recreational sport)",
  ],
  variants: [
    "english-rounders-Rounders-England-15-per-side-possible-2-innings",
    "irish-rounders-GAA-9-per-side-3-innings-larger-diamond",
    "school-rounders-modified-basic-PE-curriculum",
    "junior-rounders-youth-formats",
  ],
  relatedSports: ["baseball", "softball", "cricket", "stoolball"],
  skills: ["batting accuracy (narrow bat)", "running speed between bases", "throwing accuracy", "catching"],
  strategies: [
    { title: "Positional hitting — narrow bat requires precision", body: "Different from baseball's wider hit zone." },
    { title: "Speed on base paths critical", body: "Smaller diamond = tighter base decisions." },
    { title: "Fielding + throwing accuracy for outs", body: "Small ball harder to catch." },
    { title: "English vs Irish rule familiarity", body: "Regional variants have different tactical implications." },
  ],
  terminology: [
    { term: "Rounder", meaning: "Complete circuit around all 4 bases (=1 run)." },
    { term: "Home post", meaning: "Batter's starting/ending base." },
    { term: "Backstop", meaning: "Fielder behind batter (like catcher)." },
    { term: "Bowler", meaning: "Player throwing ball to batter (like pitcher)." },
    { term: "Batting square", meaning: "Area where batter stands." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "UK/Ireland schools traditionally teach rounders as PE", body: "Most British schools include rounders in curriculum." },
      { title: "Buy basic rounders bat + ball ($25-40)", body: "Adaptable to any open field." },
    ]},
    { level: "intermediate", steps: [
      { title: "Join Rounders England club (~500 clubs)", body: "Structured adult recreational play." },
      { title: "Or Irish Rounders GAA (Gaelic Athletic Association)", body: "Cultural sport structure." },
    ]},
    { level: "advanced", steps: [
      { title: "National championships (small elite pool)", body: "England or Ireland competitive path." },
    ]},
  ],
  faq: [
    { question: "What is Rounders?", answer: "BRITISH BAT-AND-BALL TEAM SPORT considered DIRECT ANCESTOR OF BASEBALL + SOFTBALL. Documented in 1744 English book as 'base-ball' — same game later called rounders in England, evolved into modern baseball in America (Cartwright 1845). Played on 4-base DIAMOND; batters hit ball + run bases. 9 players per team. TWO REGIONAL VERSIONS: ENGLISH ROUNDERS (2 innings, smaller diamond) + IRISH ROUNDERS (GAA-managed, 3 innings, larger diamond). Popular UK schools + Irish tradition. Considered accessible + inclusive PE curriculum sport." },
    { question: "How is Rounders different from Baseball?", answer: "ROUNDERS is BASEBALL'S ANCESTOR — but distinct modern sports. ROUNDERS uses NARROW CYLINDRICAL BAT (~46cm); BASEBALL uses WIDER TAPERED BAT (~106cm). ROUNDERS smaller ball (~7.5cm); BASEBALL bigger (~7.4cm) but denser. ROUNDERS smaller diamond (~12m sides English); BASEBALL 27.4m sides. ROUNDERS 2-3 innings; BASEBALL 9 innings. ROUNDERS 1 run per circuit; BASEBALL 1 run per home + variations for RBIs. ROUNDERS bowler bowls slower/underhand; BASEBALL pitcher throws hard overhand. ROUNDERS RECREATIONAL/SCHOOL sport; BASEBALL PROFESSIONAL global." },
    { question: "Is Rounders popular in America?", answer: "NOT AS ROUNDERS. Rounders effectively became BASEBALL in America through 1800s rule evolution (Alexander Cartwright's 1845 formalization). Americans don't play 'rounders' — they play baseball + softball, direct descendants. Rounders remains distinctly BRITISH/IRISH sport. Some American schools teach kickball (similar concept), which some scholars consider a variant. Modern rounders is niche outside UK + Ireland, though appearing in some Commonwealth country schools (Australia, New Zealand)." },
  ],
  wikipediaTitle: "Rounders",
  sources: [
    { label: "Rounders England", url: "https://roundersengland.co.uk/", publisher: "Rounders England" },
    { label: "Wikipedia — Rounders", url: "https://en.wikipedia.org/wiki/Rounders", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
