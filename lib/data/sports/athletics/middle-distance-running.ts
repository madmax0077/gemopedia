import type { Sport } from "@/lib/types";

export const middleDistanceRunning: Sport = {
  id: "middle-distance-running",
  slug: "middle-distance-running",
  name: "Middle-Distance Running",
  officialName: "Middle-Distance Running (800m + 1500m)",
  aliases: ["800m", "1500m", "Mile Run"],
  shortDescription:
    "Track events from 800m to 1500m (plus the classic Mile) requiring both raw speed and aerobic endurance — decided by tactical racing and late-race kicks.",
  longDescription:
    "Middle-distance events straddle the anaerobic-aerobic boundary. The 800m (2 laps) requires 400m sprint speed at 2 laps; the 1500m + Mile add tactical racing. Roger Bannister's 3:59.4 sub-4 mile (1954) was one of sport's iconic barriers. Modern top athletes include Kelvin Kiptum (KEN, marathon), Faith Kipyegon (KEN, 1500m WR), and Jakob Ingebrigtsen (NOR, dominant on both distances). Kenya + Ethiopia + Great Britain dominate the medal counts.",

  category: "athletics",
  subCategory: "middle-distance track running (800m to 1500m)",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "global",

  countryOfOrigin: "GR",
  regionOfOrigin: "Ancient Greece (originally 4-stadion race at Olympics)",
  estimatedOrigin: "Ancient Olympics 776 BCE (dolichos race); 800m at first modern Olympics 1896; Mile records tracked since 1852",

  players: { min: 1, max: 12, note: "Championship: up to 12 in finals. Diamond League: 12-15 elite fields." },
  field: {
    surfaceName: "Athletics track",
    dimensions: "400m oval, 8-9 lanes",
    description: "Synthetic Mondo track; 800m = 2 laps, 1500m = 3.75 laps, Mile (1609.34m) = ~4 laps." },
  equipment: [
    { name: "Middle-distance spikes", description: "5-6 spikes; lighter than sprint spikes but with more plate rigidity than long-distance." },
    { name: "Race bib + timing chip", description: "Individual bib for identification + chip for split timing." },
    { name: "Racing kit", description: "Lightweight singlet + shorts (150g total); aerodynamic yet breathable." },
    { name: "Pacemakers (Diamond League)", description: "Non-scoring 'rabbits' set pace for first 400-600m in record-attempt races." },
  ],
  duration: {
    approximateMinutes: 3,
    structure: "800m: ~1:40-2:00. 1500m: ~3:26-4:00. Mile: ~3:43-4:00. Championship: heats → semis → final over 3-4 days." },

  objective:
    "Finish first across the line. Championship + Olympic finals typically decided in the final 200m 'kick'.",
  matchStructure:
    "Heats → semi-finals → final. Diamond League: single race with elite field of 12-15.",

  basicRules: [
    { title: "Lane assignments (800m)", body: "First 300m of 800m run in assigned lanes; break for inside rail after 300m mark." },
    { title: "Common start (1500m + Mile)", body: "1500m + Mile use common start with all runners on same line." },
    { title: "No lane infringement", body: "Runners must not step onto inside lane in curves." },
    { title: "Photofinish", body: "Chest crossing line first wins; measured to 0.001 second." },
    { title: "Anti-doping", body: "WADA + AIU testing year-round." },
  ],
  advancedRules: [
    { title: "Pacemakers", body: "Legal in Diamond League + specific record attempts; must exit race after set distance." },
    { title: "Waveflight (Wavelights)", body: "LED lights on rail pace record attempts — legal since 2019." },
    { title: "Push + trip protection", body: "Contact + pushing = warning or DQ if intentional." },
    { title: "Boxing in", body: "Rule prohibiting deliberately blocking runner from passing." },
  ],
  scoring: {
    summary: "Time; ranked by fastest finish.",
    winCondition: "First across finish line.",
    breakdown: [
      { action: "Final placement", points: "1st = gold + prize" },
      { action: "World record", points: "Ratified after wind + course compliance" },
      { action: "Personal best", points: "Individual milestone" },
    ],
  },
  penalties: [
    { title: "Lane infringement", body: "DQ." },
    { title: "Pushing / obstruction", body: "DQ if intentional." },
    { title: "Doping violation", body: "2-4 year ban + record annulment." },
  ],

  positions: [
    { name: "Runner", role: "Individual competitor.", count: 1 },
  ],
  officiating: {
    officials: ["Track referee", "Starter", "Lap counter (1500m)", "Photofinish operator"],
    summary: "World Athletics-certified officials manage races + call fouls in real time.",
  },

  governingBodies: [
    { name: "World Athletics", founded: 1912, headquarters: "Monaco", website: "https://worldathletics.org" },
  ],
  majorCompetitions: [
    { name: "Olympic Games (800m + 1500m)", frequency: "every 4 years", founded: 1896, region: "rotating" },
    { name: "World Athletics Championships", frequency: "biennial", founded: 1983, region: "rotating" },
    { name: "Diamond League", frequency: "annual (14 meets)", founded: 2010, region: "global" },
    { name: "Wanda Diamond League Final", frequency: "annual", founded: 2010, region: "rotating" },
  ],
  countriesPlayed: ["KE", "ET", "GB", "NO", "US", "MA", "DZ", "AU", "DE", "PL"],
  famousAthletes: [
    "Jakob Ingebrigtsen (NOR, 1500m Olympic gold + 5000m gold Paris 2024)",
    "Faith Kipyegon (KEN, 3× 1500m Olympic gold + WR 3:49.11)",
    "Josh Kerr (GB, 1500m World Champion 2023)",
    "Emmanuel Wanyonyi (KEN, 800m Olympic gold 2024)",
    "David Rudisha (KEN, 800m WR 1:40.91)",
    "Hicham El Guerrouj (MOR, 1500m + Mile WRs still standing)",
  ],
  records: [
    { title: "800m men's WR", holder: "David Rudisha (KEN)", value: "1:40.91 (London 2012)", year: 2012 },
    { title: "800m women's WR", holder: "Jarmila Kratochvilova (CZS)", value: "1:53.28 (1983)", year: 1983 },
    { title: "1500m men's WR", holder: "Hicham El Guerrouj (MOR)", value: "3:26.00 (Rome 1998)", year: 1998 },
    { title: "1500m women's WR", holder: "Faith Kipyegon (KEN)", value: "3:49.04 (Paris 2024)", year: 2024 },
    { title: "Mile men's WR", holder: "Hicham El Guerrouj (MOR)", value: "3:43.13 (Rome 1999)", year: 1999 },
    { title: "First sub-4 mile", holder: "Roger Bannister (GB)", value: "3:59.4 (Oxford, May 6 1954)", year: 1954 },
  ],

  variants: ["mile-run", "3000m-steeplechase", "indoor-800m", "indoor-1500m"],
  relatedSports: ["long-distance-running", "sprint", "cross-country"],

  skills: [
    "aerobic + anaerobic power balance",
    "tactical racing + positioning",
    "kick / finish sprint capability",
    "pace judgment",
    "mental toughness in oxygen debt",
  ],
  strategies: [
    { title: "Sit + kick", body: "Stay in top 3 through 1200m; unleash 55-second final 400m for championship wins." },
    { title: "Front-run for records", body: "For WR attempts: run every lap on target pace with pacemakers." },
    { title: "Bell lap surge", body: "Final lap (bell rings) demands full anaerobic commitment." },
    { title: "Avoid boxing", body: "Position on outside of lane 1 to avoid getting trapped behind pack." },
  ],

  terminology: [
    { term: "Kick", meaning: "Final sprint burst in last 200-400m." },
    { term: "Sit", meaning: "Following runners without leading; conserves energy." },
    { term: "Boxed in", meaning: "Trapped behind runners with no room to move up." },
    { term: "Bell lap", meaning: "Final lap; announced by bell rung by track official." },
    { term: "Rabbit / pacemaker", meaning: "Runner setting fast early pace for record attempts." },
    { term: "PB / PR", meaning: "Personal best / personal record." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Build aerobic base (30-40 miles/week)", body: "6-12 month base-building before specific track work." },
        { title: "Add track workouts", body: "400m repeats + 800m intervals develop middle-distance skills." },
        { title: "Race locally", body: "State + regional 800m/1500m races build competition experience." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Sub-1:50 800m or sub-3:45 1500m", body: "NCAA D1 level; scholarship-worthy performances." },
        { title: "Qualify for national trials", body: "Meet World Athletics standards + national trials." },
        { title: "Join Diamond League circuit", body: "Sub-1:44 800m or sub-3:32 1500m opens the DL circuit." },
      ],
    },
  ],

  faq: [
    { question: "Is the Mile still contested?", answer: "Yes — the Mile (1609.34m) remains iconic though 1500m is the Olympic distance. Bowerman Mile at Prefontaine + Fifth Avenue Mile keep it alive." },
    { question: "Fastest amateur target?", answer: "Sub-2:00 800m + sub-4:20 mile = highly competitive amateur." },
    { question: "How is 800m different from 1500m tactically?", answer: "800m = essentially a controlled sprint; often front-run. 1500m = tactical with early jockeying + explosive kick." },
    { question: "Why is Bannister's sub-4 iconic?", answer: "First to break psychological 4-minute barrier May 6 1954; 30+ men broke 4 minutes within a year, proving the psychological wall." },
  ],

  sources: [
    { label: "Wikipedia — Middle-distance running", url: "https://en.wikipedia.org/wiki/Middle-distance_running", publisher: "Wikipedia" },
    { label: "World Athletics 800m", url: "https://worldathletics.org/records", publisher: "World Athletics" },
  ],
  wikipediaTitle: "Middle-distance running",
  lastVerified: "2026-08-29",
  confidence: "verified",
};
