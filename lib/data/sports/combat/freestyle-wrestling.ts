import type { Sport } from "@/lib/types";

export const freestyleWrestling: Sport = {
  id: "freestyle-wrestling",
  slug: "freestyle-wrestling",
  name: "Freestyle Wrestling",
  officialName: "Freestyle Wrestling",
  aliases: ["Freestyle", "FS wrestling"],
  shortDescription:
    "Olympic wrestling style that allows attacks on both the upper and lower body — takedowns, throws, exposure and pins score points across two 3-minute periods.",
  longDescription:
    "Freestyle wrestling is one of the two international wrestling styles contested at the Summer Olympics (alongside Greco-Roman). Unlike Greco-Roman it permits holds and attacks on the legs — leg attacks, single-legs, double-legs and ankle picks are core techniques. Two wrestlers face off on a circular mat and score points for takedowns, exposure (turning the opponent's back toward the mat), pins (both shoulder blades on the mat), and pushouts. Matches consist of two 3-minute periods; the wrestler with more points wins or a pin ends the bout immediately. Freestyle originated in 19th-century North American 'catch-as-catch-can' wrestling and was included in the Olympic programme from 1904; women's freestyle joined at Athens 2004.",

  category: "combat-sports",
  subCategory: "grappling",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isProfessional: true,
  season: "year-round",
  era: "19th-century",
  popularity: "global",

  countryOfOrigin: "US",
  regionOfOrigin: "United States (catch-as-catch-can); global antiquity for wrestling itself",
  estimatedOrigin: "Modern rules mid-19th century (catch wrestling in Britain / US); Olympic 1904 (men) / 2004 (women)",

  players: { min: 2, max: 2, note: "1v1 by weight class; corner team includes coach and analytic support." },
  field: {
    surfaceName: "mat",
    dimensions: "9 m diameter circular competition zone within a 12 m protection area; foam mat 4-6 cm thick.",
    description: "Circular padded mat with a red 1 m 'passivity zone' at the edge, red central starting circle, and colour-coded corners.",
  },
  equipment: [
    { name: "Singlet", description: "One-piece Lycra suit; red or blue depending on the wrestler's corner assignment." },
    { name: "Wrestling shoes", description: "Lightweight ankle-high shoes with rubber soles for mat grip." },
    { name: "Mouthguard", description: "Recommended; mandatory in some federations for junior events." },
    { name: "Blood-stopper (rag)", description: "Wrestlers may keep a rag in their singlet strap for use on cuts.", optional: true },
    { name: "Headgear", description: "Ear-guard headgear; mandatory for youth/scholastic in some federations, optional at senior international.", optional: true },
  ],
  duration: {
    approximateMinutes: 10,
    structure: "Two 3-minute periods with a 30-second break; running clock stops only for injuries, challenges and stalling calls.",
    note: "A pin ends the match immediately; a 10-point technical superiority also ends the match.",
  },
  objective: "Pin the opponent's shoulders to the mat, achieve a 10-point technical superiority, or outscore the opponent by the end of two 3-minute periods.",
  matchStructure:
    "Wrestlers meet in the centre and shake hands. Referee starts the match with a whistle. Wrestlers grapple for takedowns and exposure points; when a wrestler is on their back with shoulders touching the mat for one second, the referee awards a pin (fall) and ends the match. If no fall, points accumulate across two periods; the wrestler with more points wins.",

  basicRules: [
    { title: "Legal holds", body: "Attacks and holds on the entire body are allowed — including the legs (unlike Greco-Roman)." },
    { title: "Illegal holds", body: "Full nelson, straight-arm bar with elbow lock, and holds that endanger the neck/spine are illegal." },
    { title: "Takedown", body: "Bringing the opponent to the mat while controlling them: 2 or 4 points depending on the position achieved." },
    { title: "Exposure (danger position)", body: "When the opponent's back is turned toward the mat at 45° or more, exposure points are awarded (2 pts)." },
    { title: "Pin (fall)", body: "Holding both shoulder blades on the mat for approximately 1 second ends the match immediately." },
    { title: "Passivity", body: "A wrestler who is not attacking may receive a passivity warning; a second results in the opponent scoring a point." },
    { title: "Pushout", body: "Forcing the opponent out of the 9 m circle earns 1 point in the current UWW rules." },
  ],
  advancedRules: [
    { title: "Technical superiority", body: "Match ends when one wrestler leads by 10 points (or 8 points in some age groups)." },
    { title: "Passivity clock", body: "Referee starts a 30-second passivity clock on a wrestler; if no attack in that time, opponent gets a point." },
    { title: "Challenge (brick)", body: "Corner may throw a red 'challenge brick' onto the mat to challenge a call; keeps the brick if the challenge succeeds." },
    { title: "Caution and 2 points", body: "For infractions (illegal hold, striking, fleeing), opponent gets 2 points and a caution is recorded; three cautions = disqualification." },
    { title: "Tie-breaking criteria", body: "If tied at the end of regulation: (1) highest single-move score, (2) fewer cautions, (3) wrestler who scored last wins." },
  ],
  scoring: {
    summary: "Points from takedowns, exposures, pushouts and reversals; pin ends immediately.",
    breakdown: [
      { action: "Takedown (no exposure)", points: "2" },
      { action: "Takedown with exposure / grand amplitude", points: "4-5", note: "Higher for throws with full body lift and back exposure." },
      { action: "Exposure (turning back toward mat 45°+)", points: "2" },
      { action: "Reversal (escape and control from underneath)", points: "1" },
      { action: "Pushout (fleeing the circle)", points: "1" },
      { action: "Passivity opponent's point", points: "1", note: "Awarded on failure of the 30-second clock." },
      { action: "Pin (fall)", points: "Match ends", note: "Both shoulder blades touching the mat for ~1 second." },
    ],
    winCondition: "Pin (fall), 10-point technical superiority, or higher score at end of two periods.",
  },
  penalties: [
    { title: "Caution", body: "For minor infractions; opponent gets 1-2 points; three cautions = DSQ." },
    { title: "Passivity", body: "First warning verbal, second warning gives opponent a point and starts the 30-second clock." },
    { title: "Illegal hold / brutality", body: "Immediate disqualification for dangerous or deliberate injury-causing holds." },
  ],

  officiating: {
    officials: ["Referee (on mat)", "Judge (mat-side)", "Chairman (mat-side, calls tied decisions)"],
    summary: "Three officials govern each bout: the referee controls the match on the mat; judge and chairman confirm scores. All three must agree for pins; majority decides other scores.",
  },
  governingBodies: [
    { name: "United World Wrestling", acronym: "UWW", founded: 1912, headquarters: "Corsier-sur-Vevey, Switzerland", website: "https://uww.org" },
    { name: "USA Wrestling", founded: 1968, headquarters: "Colorado Springs, USA", website: "https://www.teamusa.org/usa-wrestling" },
    { name: "Russian Wrestling Federation", founded: 1993, headquarters: "Moscow, Russia" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 1904, region: "worldwide", note: "Men since 1904, women since 2004." },
    { name: "World Wrestling Championships", frequency: "annual", founded: 1904, region: "worldwide" },
    { name: "European / Asian / Pan-American Championships", frequency: "annual", region: "regional" },
    { name: "Yasar Dogu (Turkey), Ali Aliev (Russia) & other classics", frequency: "annual", region: "Europe/Asia — high-level Ranking Series events" },
  ],
  countriesPlayed: ["US", "RU", "IR", "JP", "IN", "TR", "MN", "AZ", "GE", "KZ", "UZ", "CU", "PR", "NG", "SN"],
  famousAthletes: [
    "Aleksandr Karelin (Greco-Roman legend, related)",
    "Buvaisar Saitiev",
    "Jordan Burroughs",
    "Kaori Icho",
    "Saori Yoshida",
    "Kyle Snyder",
    "Abdulrashid Sadulaev",
    "Sushil Kumar",
    "Susaki Yui",
    "Helen Maroulis",
    "Sagen (Yankee) Doubek",
  ],
  records: [
    { title: "Most Olympic gold medals (women's wrestling)", holder: "Kaori Icho (JPN)", value: "4 consecutive (2004-2016)", year: 2016 },
    { title: "Most Olympic + World gold medals combined", holder: "Kaori Icho", value: "4 Olympic + 10 World = 14", year: 2016 },
    { title: "Undefeated at Olympics (Buvaisar Saitiev)", holder: "Buvaisar Saitiev (RUS)", value: "3 Olympic golds, no losses at Games", year: 2008 },
  ],

  variants: ["greco-roman-wrestling", "beach-wrestling", "grappling-uww", "belt-wrestling"],
  relatedSports: ["greco-roman-wrestling", "judo", "sambo", "brazilian-jiu-jitsu"],

  skills: [
    "explosive lower-body power",
    "hip control and posture",
    "grip strength",
    "core / bridging strength",
    "cardiovascular endurance",
    "quick angle changes",
    "pattern recognition (chain wrestling)",
  ],
  strategies: [
    { title: "Position over submission", body: "Establishing a strong stance and grip before attacking; freestyle rewards control." },
    { title: "Chain wrestling", body: "Attacking multiple techniques in sequence — single-leg → high-crotch → double." },
    { title: "Riding for turns", body: "From top position, work turns (leg lace, gut wrench) to accumulate exposure points." },
    { title: "Edge management", body: "Use the mat edge to score pushout points or force reset without losing exposure." },
  ],

  terminology: [
    { term: "Takedown", meaning: "Bringing the opponent to the mat while controlling them; scores 2 or 4 points." },
    { term: "Exposure", meaning: "The opponent's back turned toward the mat at ≥45°; scores 2 points." },
    { term: "Pin / fall", meaning: "Both shoulder blades held on the mat for ~1 second; ends the match." },
    { term: "Single-leg", meaning: "Takedown attack grabbing one leg with both hands." },
    { term: "Double-leg", meaning: "Takedown attack grabbing both legs simultaneously." },
    { term: "Gut wrench", meaning: "Top-position turn where the wrestler locks around the opponent's mid-section and rolls." },
    { term: "Leg lace", meaning: "Top-position turn wrapping the legs to invert the opponent." },
    { term: "Sprawl", meaning: "Defensive kick-back move to counter a leg attack." },
    { term: "Pushout", meaning: "Forcing the opponent out of the circle; scores 1 point." },
    { term: "Passivity", meaning: "Not actively attacking; leads to points for the opponent if repeated." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Stance & motion", body: "Learn a square stance and lateral shuffling without crossing feet." },
      { title: "Level change and shot", body: "Drop the level with knees, drive with hips into a single-leg attack." },
      { title: "Sprawl", body: "Kick legs back and drop hips to defend a shot." },
      { title: "Simple pin", body: "From top position, cross-face and half-nelson to expose the opponent's back." },
    ] },
    { level: "intermediate", steps: [
      { title: "Chain attacks", body: "Combine single-leg → high-crotch → double-leg as opponent defends." },
      { title: "Top turns", body: "Gut wrench, leg lace, and arm bar from top." },
      { title: "Defensive re-shot", body: "Answer opponent's shot with your own." },
      { title: "Match management", body: "Use passivity clock to your advantage — attack visibly." },
    ] },
    { level: "advanced", steps: [
      { title: "Set-ups", body: "Head snaps, hand-fighting, and level changes to disguise attacks." },
      { title: "Elite scrambling", body: "Convert defensive positions to offensive scores (limp-arm, whizzer, etc.)." },
      { title: "Tactical scoring", body: "Manage the last 30 seconds — hold a lead by pushing to the edge or fake attacks." },
    ] },
  ],
  faq: [
    { question: "How is freestyle different from Greco-Roman?", answer: "Greco-Roman only allows attacks above the waist — no leg attacks. Freestyle allows both upper and lower body attacks." },
    { question: "How many weight classes are there?", answer: "The Olympics contest 6 men's and 6 women's freestyle categories (2024: 57, 65, 74, 86, 97, 125 kg men and 50, 53, 57, 62, 68, 76 kg women)." },
    { question: "How does a match end early?", answer: "Pin (fall), 10-point technical superiority (8 in age-group), disqualification, or injury default." },
    { question: "What is 'the shot'?", answer: "A takedown attempt — usually a level change and drive at the opponent's legs (single- or double-leg)." },
    { question: "Why the challenge brick?", answer: "It replaces verbal appeals — the coach throws a soft brick onto the mat to signal a challenge to the referee's call." },
  ],

  wikipediaTitle: "Freestyle wrestling",
  sources: [
    { label: "Wikipedia — Freestyle wrestling", url: "https://en.wikipedia.org/wiki/Freestyle_wrestling", publisher: "Wikipedia" },
    { label: "United World Wrestling Rules", url: "https://uww.org/rules-regulations", publisher: "UWW" },
    { label: "USA Wrestling International Rules", url: "https://www.teamusa.org/usa-wrestling", publisher: "USA Wrestling" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
};
