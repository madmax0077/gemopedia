import type { Sport } from "@/lib/types";

export const redBullRampage: Sport = {
  id: "red-bull-rampage",
  slug: "red-bull-rampage",
  name: "Red Bull Rampage",
  officialName: "Red Bull Rampage",
  aliases: ["Rampage", "Virgin Utah Rampage"],
  shortDescription:
    "Invitation-only big-mountain freeride mountain-bike contest (est. 2001, Zion Park area Utah) — riders build their own lines down 300-500m sandstone ridges featuring 20-30m drops, canyon gaps, airtime tricks. Scored on line difficulty, technique, and style. Kurt Sorge 3× winner.",
  longDescription:
    "Red Bull Rampage is the invitation-only big-mountain freeride mountain-bike contest held annually in Virgin, Utah near Zion National Park — established 2001 as the most extreme freeride MTB event on Earth. 18-24 invited pros + their 2-4 person dig teams build custom lines down 300-500m sandstone ridges over 6-9 days of 'dig week' — no pre-built course; each rider designs unique line featuring 20-30m drops, canyon gaps, sandstone spines, and airtime tricks. Competition day: each rider gets 2 runs, best score counts. 5-judge panel (former Rampage riders + freeride veterans) scores 0-100 on line difficulty, style, amplitude, technique, control. Kurt Sorge (Canada) is the most decorated with 3 wins (2012, 2015, 2017). Cam Zink's 78-ft backflip (2014) + Szymon Godziek's first double-backflip on natural terrain (2013) are milestone tricks. Inaugural Women's Rampage held 2024, won by Robin Goomes (New Zealand). No fatalities as of 2024 despite career-altering injuries (Paul Basagoitia paralysis 2015, Kelly McGarry death 2016 offsite).",
  category: "adventure-extreme-sports",
  subCategory: "big-mountain freeride mountain bike",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "US",
  regionOfOrigin: "Virgin, Utah, USA (near Zion National Park)",
  estimatedOrigin: "Founded 2001 by Red Bull; women's event debuted 2024",
  players: { min: 1, max: 1, note: "Solo competition run; supported by 2-4 person dig team." },
  equipment: [
    { name: "Custom freeride bike (170-180mm travel)", description: "Modified freeride bike (Rocky Mountain Slayer, Norco Range, Yeti SB165) — 27.5\" wheels with reinforced frame + coil shock." },
    { name: "Full-face helmet + neck brace", description: "Certified helmet (Fox Proframe, Fasthouse) + neck brace (Leatt, Alpinestars) for cliff-drop landings." },
    { name: "Body armour (spine + chest + shoulder)", description: "Full torso protection (Leatt 6.5, Alpinestars Bionic)." },
    { name: "Digging tools", description: "Shovels, rakes, water tanks — riders + dig teams build features by hand during dig week." },
  ],
  duration: { approximateMinutes: 1, structure: "Dig week 6-9 days; competition day single day, ~30-60 sec runs per rider." },
  objective: "Ride custom-built line down sandstone ridge scoring highest 5-judge panel score.",
  matchStructure: "18-24 invited riders + 3-4 dig teams build lines over 6-9 days; competition day = each rider gets 2 runs, best score counts.",
  basicRules: [
    { title: "Invite-only field", body: "18-24 top freeride athletes selected by Red Bull based on prior results." },
    { title: "Dig-your-own-line", body: "Each rider works with 2-4 dig-team members to shape unique line down mountain." },
    { title: "2 runs, best counts", body: "Competition day each rider gets 2 timed runs; higher score wins." },
  ],
  advancedRules: [
    { title: "Line inspection walk-down", body: "Riders inspect via binoculars + walk-off before dropping." },
    { title: "Tow-in permitted for large drops", body: "Truck-tow allowed for gaining speed on major features." },
    { title: "Medevac helicopter on-site", body: "Full medical + rescue team on standby throughout event." },
  ],
  scoring: {
    summary: "5-judge panel scores 0-100 on line difficulty, style, amplitude, technique, control. Best of 2 runs counts.",
    winCondition: "Highest averaged score after 5-judge panel evaluation.",
    breakdown: [
      { action: "Line difficulty", points: "Weighted highest — unique lines score more" },
      { action: "Style + amplitude", points: "Bigger air + cleaner style = more points" },
      { action: "Trick added on drop", points: "Backflip/no-hander on 15m+ drop = bonus" },
    ],
  },
  penalties: [
    { title: "Uncontrolled crash", body: "Run scored zero if rider crashes before completing line." },
    { title: "Ejected or dropped bike", body: "Run halted; rider walks bike down; scored zero." },
    { title: "Excessive foot down / pedal", body: "Multiple foot-touches penalty; ideal is zero touches." },
  ],
  positions: [{ name: "Rider", role: "Freeride athlete + dig-team leader; solo competitive run.", count: 1 }],
  officiating: {
    officials: ["5-judge panel (former Rampage riders + freeride veterans)", "Chief judge", "Medical + rescue team", "Video review"],
    summary: "5 judges score independently; drop high/low, average middle 3; video review for close scores.",
  },
  governingBodies: [{ name: "Red Bull (event organiser)", founded: 1987, headquarters: "Fuschl am See, Austria" }],
  majorCompetitions: [
    { name: "Red Bull Rampage (Men)", frequency: "annual", founded: 2001, region: "Virgin, Utah, USA" },
    { name: "Red Bull Rampage (Women — new 2024)", frequency: "annual", founded: 2024, region: "Virgin, Utah, USA" },
  ],
  countriesPlayed: ["US", "CA", "NZ", "AU", "GB", "PL", "FR"],
  famousAthletes: [
    "Kurt Sorge (Canada) — 3× Rampage winner (2012, 2015, 2017) + 2019",
    "Cam Zink (USA) — 78-ft backflip (2014); multiple podiums",
    "Szymon Godziek (Poland) — first double-backflip on natural terrain (2013)",
    "Robin Goomes (New Zealand) — inaugural Women's Rampage winner (2024)",
    "Paul Basagoitia (USA) — paralysed in 2015 crash but returned to advocacy",
  ],
  records: [
    { title: "Most Rampage wins", holder: "Kurt Sorge (Canada)", value: "3-time Rampage winner (2012, 2015, 2017) plus 2019", year: 2019 },
    { title: "Iconic trick highlights", holder: "Various", value: "Ethan Nell 360 canyon gap; Cam Zink 78-ft backflip (2014); Szymon Godziek first double backflip on natural terrain (2013)", year: 2023 },
    { title: "First women's edition", holder: "Red Bull", value: "Inaugural Women's Rampage at Virgin, Utah — won by Robin Goomes (New Zealand)", year: 2024 },
  ],
  variants: ["red-bull-rampage-mens", "red-bull-rampage-womens-2024"],
  relatedSports: ["freeride-mountain-biking", "crankworx", "downhill-mtb", "freeride-world-tour"],
  skills: ["line-building", "cliff drops", "big-air style tricks", "sandstone terrain reading"],
  strategies: [
    { title: "Line differentiation", body: "Judges reward unique line choice — a line no other athlete uses scores higher on difficulty." },
    { title: "Signature drop + trick combo", body: "Adding signature trick off mandatory drop scores higher than clean landings." },
    { title: "Line pacing + run flow", body: "Continuous fluid line with 5-8 major features scores higher than 2-3 huge features + long stalls." },
  ],
  terminology: [
    { term: "Dig week", meaning: "6-9 pre-comp days shaping personal line by hand" },
    { term: "Line", meaning: "Chosen route down the mountain" },
    { term: "Canyon gap", meaning: "Jump across a canyon or cleft in ridge" },
    { term: "Cash roll", meaning: "Specific frontflip variation named after Rogatkin's move" },
  ],
  learningPaths: [
    { level: "beginner", steps: [{ title: "Freeride MTB baseline", body: "Bike park progression, drops (5-10m), berms, air awareness." }] },
    { level: "intermediate", steps: [{ title: "Big-mountain + Rampage-style", body: "Backflips, canyon gaps, ridge lines, no-hander/tuck-no-hander on 15m+ drops." }] },
    { level: "advanced", steps: [{ title: "Invited pro", body: "Line-building, custom feature construction, mental preparation for cliff drops, injury recovery." }] },
  ],
  faq: [
    { question: "How are riders selected?", answer: "Invite-only — Red Bull invites ~18-24 top freeride athletes based on prior Rampage performances, Slopestyle results, and video parts. No qualifiers or open entries." },
    { question: "Are there fatalities?", answer: "As of 2024 no fatalities, but multiple career-altering injuries (Paul Basagoitia paralysis 2015, Kelly McGarry death 2016 offsite, various concussions). Event uses spotters, tow-in permitted, and helicopter medevac on-site." },
  ],
  wikipediaTitle: "Red Bull Rampage",
  sources: [{ label: "Wikipedia — Red Bull Rampage", url: "https://en.wikipedia.org/wiki/Red_Bull_Rampage", publisher: "Wikipedia" }],
  lastVerified: "2026-08-29",
  confidence: "verified",
};

export default redBullRampage;
