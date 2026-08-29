import type { Sport } from "@/lib/types";

export const shootingSport: Sport = {
  id: "shooting-sport",
  slug: "shooting-sport",
  name: "Sport Shooting",
  officialName: "Sport Shooting (ISSF disciplines)",
  aliases: ["Target Shooting", "Precision Shooting", "ISSF Shooting"],
  shortDescription:
    "Umbrella term for competitive precision shooting sports — rifle, pistol, shotgun, and running-target disciplines governed by ISSF, with 15 events at each Olympic Games.",
  longDescription:
    "Sport shooting encompasses over 50 distinct disciplines using rifles, pistols, and shotguns at ranges from 10m indoor to 1000+ yards outdoor. The ISSF (founded 1907) governs Olympic events (15 medals at Paris 2024). US IPSC (practical pistol), NRA High Power Rifle, and international events like Camp Perry (Ohio) form the global calendar. Air rifle 10m, pistol 25m, and rifle 50m 3-position are core Olympic events; women's air rifle has featured every Olympics since 1984. China, USA, Russia, and Germany dominate the medal tables.",

  category: "precision-sports",
  subCategory: "Olympic precision shooting umbrella",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "CH",
  regionOfOrigin: "Switzerland (Swiss Federal Shooting Festival 1824 predates ISSF)",
  estimatedOrigin: "Formal target shooting competitions from 1820s; ISSF founded 1907; first modern Olympic event 1896 (Athens)",

  players: { min: 1, max: 6, note: "Individual + team events; Olympic events primarily individual + mixed-team air rifle." },
  field: {
    surfaceName: "Shooting range",
    dimensions: "10 m (air rifle/pistol) to 300 m (fullbore rifle) to 1000+ m (long-range)",
    description: "Fixed indoor ranges + outdoor shooting stalls with paper or electronic targets." },
  equipment: [
    { name: "Air rifle (10 m)", description: "Anschutz, Feinwerkbau, Walther; .177 cal; 4.5 mm pellets." },
    { name: "Sport pistol (25 m)", description: ".22 LR precision pistol; Walther, Pardini, Morini." },
    { name: "Free rifle (50 m 3-pos)", description: "Anschutz 2013 or similar bolt-action .22." },
    { name: "Shotgun (skeet/trap)", description: "12ga over-under; Perazzi, Beretta, Krieghoff." },
    { name: "Shooting jacket + trousers", description: "Stiff leather for standing/kneeling stability." },
    { name: "Electronic target scoring", description: "Sius Ascor + Meyton systems for Olympic-level scoring." },
  ],
  duration: {
    approximateMinutes: 90,
    structure: "Qualification 60-90 min. Finals 30-45 min. Each event: 40-120 shots." },

  objective:
    "Score maximum decimal points across qualification + finals. Highest total wins.",
  matchStructure:
    "Qualification round → top 8 to finals → shoot-off if tied. Each event has distinct shot counts (40, 60, 120 shots).",

  basicRules: [
    { title: "Range safety", body: "Never point loaded firearm anywhere except downrange; loading/unloading only on command." },
    { title: "Shot timing", body: "Fixed time per shot in qualification (typically 60-120s); rapid-fire events have specific sequences." },
    { title: "Decimal scoring (finals)", body: "Finals scored 10.0-10.9 (up from 10) for closer margins." },
    { title: "Equipment inspection", body: "All firearms + clothing checked pre-competition for compliance." },
    { title: "Loading only at firing point", body: "Firearms cleared until 'Load' command." },
  ],
  advancedRules: [
    { title: "Decimal scoring", body: "10-point ring measured to nearest 0.1 (10.0-10.9) in finals only." },
    { title: "Timed positions (3-position)", body: "Kneeling → Prone → Standing sequence; different times per position." },
    { title: "Finals shootoff", body: "Sudden-death shot-by-shot elimination of lowest shooter until winner remains." },
    { title: "Anti-doping", body: "WADA rules apply; propranolol + beta blockers explicitly banned in shooting sports." },
  ],
  scoring: {
    summary: "Points from concentric target rings (1-10 typical; 10.0-10.9 decimal in finals).",
    winCondition: "Highest cumulative score across qualification + finals.",
    breakdown: [
      { action: "Inner 10 ring hit", points: "10 pts (integer) / 10.9 (decimal)" },
      { action: "Outer ring", points: "1-9 pts depending on distance from center" },
      { action: "Miss target", points: "0 pts" },
    ],
  },
  penalties: [
    { title: "Late shot", body: "0 for that shot (fired after time limit)." },
    { title: "Wrong target", body: "0 for that shot + potential DQ if repeated." },
    { title: "Safety violation", body: "Immediate DQ + potential lifetime ban." },
  ],

  positions: [
    { name: "Shooter", role: "Individual competitor.", count: 1 },
    { name: "Team member (team events)", role: "Contributes score to team total.", count: 3 },
    { name: "Coach", role: "Advises between shots; equipment support." },
  ],
  officiating: {
    officials: ["Chief Range Officer", "Statistical Office", "Equipment Control judges"],
    summary: "ISSF-licensed officials run all Olympic + World events; national federations for domestic competitions.",
  },

  governingBodies: [
    { name: "International Shooting Sport Federation (ISSF)", founded: 1907, headquarters: "Munich, Germany", website: "https://www.issf-sports.org" },
    { name: "USA Shooting (US federation)", founded: 1995, headquarters: "Colorado Springs, USA", website: "https://www.usashooting.org" },
    { name: "British Shooting", founded: 2005, headquarters: "Bisley, UK", website: "https://britishshooting.org.uk" },
  ],
  majorCompetitions: [
    { name: "Olympic Games (15 shooting events)", frequency: "every 4 years", founded: 1896, region: "rotating" },
    { name: "ISSF World Championships", frequency: "annual + 4-year Grand World", founded: 1897, region: "rotating" },
    { name: "ISSF World Cup Series", frequency: "annual (5-7 events)", founded: 1986, region: "global" },
    { name: "Camp Perry National Matches", frequency: "annual (July-Aug)", founded: 1907, region: "Ohio, USA" },
  ],
  countriesPlayed: ["CN", "US", "IN", "DE", "RU", "IT", "FR", "HU", "KR", "AU", "GB", "AT"],
  famousAthletes: [
    "Abhinav Bindra (IN, first Indian individual Olympic gold, air rifle 2008)",
    "Kim Rhode (US, 6× Olympic medalist shotgun)",
    "Ralf Schumann (DE, 3× Olympic gold rapid-fire pistol)",
    "Nathan Hales (GB, Olympic gold Paris 2024)",
    "Amanda Furrer (US, 5× Olympian rifle events)",
  ],
  records: [
    { title: "Most Olympic shooting golds", holder: "Carl Osburn (US)", value: "5 golds (1912-1924)", year: 1924 },
    { title: "Highest possible air rifle 10m finals score", holder: "Various", value: "260+ decimal (out of 261)", year: 2019 },
    { title: "First Indian individual Olympic gold", holder: "Abhinav Bindra", value: "Air Rifle 10m, Beijing 2008", year: 2008 },
  ],

  variants: ["olympic-trap", "double-trap", "practical-shooting-ipsc", "biathlon-shooting", "high-power-rifle"],
  relatedSports: ["skeet-shooting", "trap-shooting", "biathlon", "modern-pentathlon-shooting"],

  skills: [
    "trigger control + sight alignment",
    "breath + heartbeat management",
    "position stability (standing, kneeling, prone)",
    "wind + light-condition assessment",
    "mental focus (30-120 shots)",
  ],
  strategies: [
    { title: "Consistent hold + release", body: "Same trigger squeeze rhythm every shot; even 0.1 sec variation costs points." },
    { title: "Between-shot recovery", body: "Rest arm/breathing 3-5 seconds between qualification shots to prevent fatigue." },
    { title: "Position experimentation", body: "3-position events require optimizing each stance separately." },
    { title: "Mental visualization", body: "Top shooters visualize perfect shots between physical attempts." },
  ],

  terminology: [
    { term: "Sight picture", meaning: "Alignment of front + rear sights with target." },
    { term: "Group", meaning: "Cluster of shots on target — tighter = more accurate." },
    { term: "Decimal scoring", meaning: "10.0-10.9 subdivisions of 10-ring in Olympic finals." },
    { term: "Cross-fire", meaning: "Shot on wrong target — 0 for shooter + potential penalty." },
    { term: "String", meaning: "Sequence of consecutive shots in a rapid-fire event." },
    { term: "Zero", meaning: "Adjustment of sights so shots hit intended point of aim." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Join a certified range", body: "USA Shooting + NRA certified ranges offer safety courses + first-time-shooter classes." },
        { title: "Try air rifle first", body: "Low recoil, low noise, low cost ($500 setup); teaches fundamentals." },
        { title: "Enter youth or club competitions", body: "Local air rifle + pistol leagues weekly." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Compete at National Championships", body: "USA Shooting Nationals + JOC + Camp Perry." },
        { title: "Enter ISSF World Cup qualifier", body: "National federation nomination + qualification score standards." },
        { title: "Aim for Olympic team", body: "National trials + Olympic quota via WC ranking." },
      ],
    },
  ],

  faq: [
    { question: "Is shooting an Olympic sport?", answer: "Yes — 15 shooting events at every Summer Olympics since 1896. 3-position rifle, air pistol, skeet, trap, and mixed team events." },
    { question: "Is sport shooting dangerous?", answer: "No — highly regulated with among the lowest injury rates of any sport. Ear/eye protection + range safety officers make competitive shooting extremely safe." },
    { question: "Do I need my own gun?", answer: "Most ranges offer rentals + training equipment. Serious competitors invest $2K-$15K in personal firearms + accessories." },
    { question: "How is Olympic shooting scored?", answer: "Qualification: integer (1-10). Finals: decimal (10.0-10.9). Ranked by cumulative decimal score in finals." },
  ],

  sources: [
    { label: "Wikipedia — ISSF shooting events", url: "https://en.wikipedia.org/wiki/ISSF_shooting_events", publisher: "Wikipedia" },
    { label: "ISSF official", url: "https://www.issf-sports.org", publisher: "ISSF" },
    { label: "USA Shooting", url: "https://usashooting.org", publisher: "USA Shooting" },
  ],
  wikipediaTitle: "Shooting sports",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
