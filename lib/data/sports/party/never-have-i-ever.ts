import type { Sport } from "@/lib/types";

export const neverHaveIEver: Sport = {
  id: "never-have-i-ever",
  slug: "never-have-i-ever",
  name: "Never Have I Ever",
  officialName: "Never Have I Ever",
  aliases: ["NHIE", "10 Fingers"],
  shortDescription:
    "Party game where players take turns saying 'NEVER HAVE I EVER [experience]' — anyone who HAS done that thing drinks/loses a finger/loses a point. Reveals surprising experiences among group. Popular COLLEGE + adult party game. Multiple format variations: '10 fingers' (last player with fingers wins), drinking game version, app-based. Growing popularity via TikTok + Netflix show 'Never Have I Ever' (2020-2024).",
  longDescription:
    "Never Have I Ever (NHIE) is PARTY GAME where players take turns saying 'NEVER HAVE I EVER [experience]' — anyone in group who HAS done that thing loses (finger, drink, point, life, etc. depending version). Reveals SURPRISING EXPERIENCES among group members — often used for GETTING TO KNOW people or humorously EMBARRASSING friends. Origins uncertain — modern form ~mid-late 20th century American youth culture. Popular COLLEGE + ADULT PARTY game. GAMEPLAY VARIATIONS: (1) '10 FINGERS' VERSION: everyone starts with 10 fingers up; when caller says 'NHIE X', anyone who has done X puts a finger down. First to lose all fingers loses; or LAST WITH FINGERS wins. (2) DRINKING GAME VERSION: those who've done the thing take a sip. (3) COMPETITIVE POINT VERSION: track scores. (4) VULNERABLE/BONDING VERSION: no scoring, just sharing. Modern format popularized via NETFLIX'S 'NEVER HAVE I EVER' (2020-2024, Mindy Kaling show — 4 seasons), which brought sport into mainstream teen consciousness. Multiple APP VERSIONS provide preset prompts (Never Have I Ever app, various party game apps). Related games: TRUTH OR DARE, WOULD YOU RATHER, TWO TRUTHS AND A LIE, SPYFALL. CAN RANGE from tame (bathroom singing) to risqué (romantic experiences). Best played among close-ish friends who trust each other; awkward with strangers.",
  category: "party-games",
  subCategory: "revelation-based social party game with experience callouts",
  sportType: "team",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "global",
  countryOfOrigin: "US",
  regionOfOrigin: "USA (modern form ~mid-late 20th century youth culture)",
  estimatedOrigin: "Modern form ~mid-late 20th century American youth culture; popularized further by Netflix 'Never Have I Ever' show 2020-2024",
  players: { min: 3, max: 15, note: "Best with 4-10 players; scales to larger groups." },
  field: { surfaceName: "any social setting", dimensions: "any group arrangement", description: "Living room, party, camping trip, sleepover — informal setting." },
  equipment: [
    { name: "No equipment required — just people", description: "Free" },
    { name: "Optional: cards with prompts", description: "€10-20" },
    { name: "Optional: app version (Never Have I Ever app + others)", description: "Free/freemium" },
    { name: "Optional: drinks (for drinking version)", description: "Party dependent" },
  ],
  duration: { approximateMinutes: 30, structure: "As long as players enjoy; typically 15-60 min." },
  objective: "Have fun; social bonding; reveal surprising group experiences.",
  basicRules: [
    { title: "Players sit in circle", body: "Any comfortable arrangement." },
    { title: "One player says 'NEVER HAVE I EVER...' + describes experience", body: "e.g., 'Never have I ever been to Europe' or 'Never have I ever eaten sushi'." },
    { title: "Anyone in group who HAS done that thing loses (finger, drink, point, life)", body: "Consequences vary by version." },
    { title: "Rotate around circle; each player takes turn", body: "Or free-form calling." },
    { title: "'10 fingers' version: first to lose all fingers loses OR last with fingers wins", body: "Competitive endpoint." },
    { title: "DRINKING VERSION: those who've done thing take sip", body: "Adult party version." },
    { title: "PASSING VERSION: no penalty, just share experiences", body: "Bonding version." },
  ],
  scoring: {
    summary: "Version-dependent — fingers, drinks, points, or just sharing.",
    breakdown: [
      { action: "Someone did what caller said 'never have I ever'", points: "Loser puts finger down / drinks / loses point" },
      { action: "All fingers down (10-finger version)", points: "First to lose = loser; last with fingers = winner" },
      { action: "Bonding version (no penalty)", points: "0 — social sharing only" },
    ],
    winCondition: "10-finger version: last player with fingers up wins.",
  },
  governingBodies: [
    { name: "No governing body — informal social game", founded: 0, headquarters: "n/a" },
  ],
  majorCompetitions: [
    { name: "No competitions — informal social game only", frequency: "n/a", founded: 0, region: "n/a" },
  ],
  countriesPlayed: ["Global — played worldwide in social settings, especially US/UK/college campuses"],
  famousAthletes: ["No competitive scene — recreational social game only"],
  variants: [
    "never-have-i-ever-classic-10-fingers-version",
    "never-have-i-ever-drinking-adult-version",
    "never-have-i-ever-sharing-non-competitive-bonding-version",
    "never-have-i-ever-competitive-points-version",
    "app-based-versions-preset-prompts",
    "card-deck-versions-purchased-prompts",
  ],
  relatedSports: ["truth-or-dare", "would-you-rather", "two-truths-and-a-lie", "spin-the-bottle", "cards-against-humanity"],
  skills: ["creative + provocative prompt writing", "social awareness (limits)", "reading group dynamics"],
  strategies: [
    { title: "Vary prompts — mix tame, silly, revealing, provocative", body: "Keep game engaging." },
    { title: "Read group comfort — adjust prompt intensity accordingly", body: "Youth vs adult very different." },
    { title: "10-finger version — save 'safe' prompts you know most people HAVE done for revenge", body: "Strategic elimination." },
    { title: "Target specific players to reveal their experiences", body: "Directed callouts fun." },
  ],
  terminology: [
    { term: "Never Have I Ever", meaning: "Starting phrase for each prompt." },
    { term: "10 Fingers", meaning: "Version where players start with 10 fingers up + lose fingers." },
    { term: "Finger down", meaning: "Sign you did the thing called out." },
    { term: "NHIE", meaning: "Abbreviation." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Just play — no learning curve", body: "Universal accessibility." },
      { title: "Establish group consent + limits before starting", body: "Communication prevents issues." },
    ]},
  ],
  faq: [
    { question: "What is Never Have I Ever?", answer: "PARTY GAME where players take turns saying 'NEVER HAVE I EVER [experience]' — anyone in group who HAS done that thing loses (finger, drink, point, life). REVEALS SURPRISING experiences among group. Popular COLLEGE + ADULT party game. Multiple format variations: '10 FINGERS' (last with fingers wins), DRINKING GAME, COMPETITIVE POINTS, or non-competitive BONDING version. Popularized further by NETFLIX'S 'NEVER HAVE I EVER' (Mindy Kaling show, 2020-2024). Social entertainment; NOT COMPETITIVE at core." },
    { question: "How is Never Have I Ever different from Truth or Dare?", answer: "TRUTH OR DARE = ONE PERSON at a time answers question or performs dare, chosen by another player. NEVER HAVE I EVER = ONE PERSON says a prompt; ALL PLAYERS reveal whether they've done that thing. NHIE reveals EXPERIENCES you have had; TRUTH OR DARE reveals THOUGHTS you have (or requires ACTIONS). NHIE more egalitarian — everyone responds equally to each prompt vs TD's spotlight on one at a time. Both popular teen/party games. Similar cultural functions — social bonding, revelation, fun." },
    { question: "Is Never Have I Ever appropriate for all ages?", answer: "VERSION-DEPENDENT. FAMILY-FRIENDLY version: prompts like 'never have I ever eaten sushi' or 'never have I ever been to Disneyland' or 'never have I ever ridden a horse'. ADULT version: prompts about relationships, embarrassing moments, wild adventures, alcohol/substance experiences. TEEN version usually somewhere between — light exploration of experiences. KEY IS GROUP CONSENSUS + APPROPRIATE PROMPTS for context. Modern app versions often have separate 'family-friendly' vs 'adult' modes. Cultural appropriateness varies by country/generation. Popular slumber party game for youth (tame prompts); popular drinking game for adults (risqué prompts)." },
  ],
  wikipediaTitle: "Never have I ever",
  sources: [
    { label: "Wikipedia — Never have I ever", url: "https://en.wikipedia.org/wiki/Never_have_I_ever", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
