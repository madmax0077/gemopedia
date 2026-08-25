import type { Sport } from "@/lib/types";

export const tuho: Sport = {
  id: "tuho",
  slug: "tuho",
  name: "Tuho",
  officialName: "Tuho (투호)",
  aliases: ["Pitch-Pot", "Toko (Japanese)", "Touhu (Chinese origin)"],
  shortDescription:
    "Ancient East Asian throwing game — players throw arrows/sticks into narrow-necked jar or pot from distance. Originated CHINA (Zhou Dynasty ~1046 BCE); spread to KOREA + JAPAN. In Korea, popular ROYAL COURT + folk game; still played traditional holidays. Similar to horseshoes / cornhole conceptually. Elegant, minimalist, cultural preservation focus.",
  longDescription:
    "Tuho (투호, 'throwing pot') is ANCIENT EAST ASIAN THROWING GAME — players THROW ARROWS or SPECIAL STICKS into a NARROW-NECKED JAR or POT from set distance. ORIGINATED CHINA in ZHOU DYNASTY (~1046 BCE) as royal court amusement; spread to KOREA + JAPAN via cultural exchange over centuries. In KOREA, became ROYAL COURT GAME (documented Joseon Dynasty 1392-1897) + FOLK GAME played at seasonal festivals. In JAPAN, TOKO practiced by NOBILITY + AT ROYAL COURT during HEIAN PERIOD. GAMEPLAY: (1) Pot placed 2-5m away from throwing line. (2) Players take turns throwing 10-12 arrows/sticks into pot's NECK OR SIDE HANDLES (varies by version). (3) Points scored based on where arrow lands (center = highest; handles = medium; miss = 0). (4) First to 20-30 points wins OR most points after set rounds. TRADITIONALLY: bamboo arrows into copper jar. MODERN: wooden arrows into decorative pot. ELEGANT + MINIMALIST game reflecting East Asian aesthetic sensibility. CULTURAL PRESERVATION emphasis: played traditional Korean holidays (Chuseok, Seollal), Japanese cultural events. Not organized competitively at international level. Similar CONCEPT: HORSESHOES (Western), CORNHOLE (American), PÉTANQUE (French). Considered cultural heritage worth preservation.",
  category: "traditional-cultural-sports",
  subCategory: "traditional East Asian throwing game (arrow into pot)",
  sportType: "individual",
  indoorOutdoor: "both",
  isProfessional: false,
  season: "year-round",
  era: "ancient",
  popularity: "regional",
  countryOfOrigin: "CN",
  regionOfOrigin: "China (Zhou Dynasty ~1046 BCE); spread to Korea + Japan",
  estimatedOrigin: "Chinese origins ~1046 BCE (Zhou Dynasty royal court); spread to Korea + Japan via cultural exchange over centuries; Korean/Japanese royal court tradition",
  players: { min: 2, max: 8, note: "Individual play; small groups typical." },
  field: { surfaceName: "any flat area", dimensions: "throwing distance 2-5m; pot ~30cm tall + narrow neck", description: "Traditional: elegant lacquered pot; distance marked with line." },
  equipment: [
    { name: "Tuho pot (narrow-necked jar with side handles)", description: "€30-150 traditional or replica" },
    { name: "Arrows (bamboo or wooden, 10-12)", description: "€20-50 for set" },
    { name: "Throwing line marker", description: "String or chalk" },
  ],
  duration: { approximateMinutes: 20, structure: "Games 20-40 min; multiple rounds." },
  objective: "Throw arrows into pot from distance; score points based on where arrow lands.",
  basicRules: [
    { title: "Pot placed 2-5m from throwing line", body: "Distance varies by version + skill." },
    { title: "Take turns throwing arrows (10-12 per round)", body: "Each player throws all arrows before next player." },
    { title: "Scoring: center of pot (highest), side handles (medium), miss (0)", body: "Some variants score bouncing arrows differently." },
    { title: "Traditional Korean scoring: pot mouth = 5 pts, side ear = 3 pts", body: "Variants exist." },
    { title: "First to 20-30 points wins OR most after set rounds", body: "Rules vary by tradition + occasion." },
  ],
  scoring: {
    summary: "Points based on where arrow lands in/on pot. Traditional Korean: mouth 5 pts, side ear 3 pts.",
    breakdown: [
      { action: "Arrow in center of pot mouth", points: "5 pts (traditional Korean)" },
      { action: "Arrow in side handle/ear", points: "3 pts" },
      { action: "Arrow miss", points: "0 pts" },
      { action: "First to 20-30 or set-round total", points: "Win" },
    ],
    winCondition: "First to target points OR most points after set rounds.",
  },
  governingBodies: [
    { name: "No official governing body", founded: 0, headquarters: "n/a" },
    { name: "Cultural preservation organizations (Korea, Japan, China)", founded: 1980, headquarters: "regional" },
  ],
  majorCompetitions: [
    { name: "Cultural festival events (Chuseok, Seollal, Japanese cultural events)", frequency: "annual", founded: 1000, region: "East Asia" },
  ],
  countriesPlayed: ["KR", "CN", "JP", "TW", "VN"],
  famousAthletes: ["Traditional cultural game; no famous players"],
  variants: [
    "chinese-touhu-original-form",
    "korean-tuho-royal-court-adaptation",
    "japanese-toko-Heian-period-court-variant",
    "seasonal-festival-tuho-community-form",
    "modern-cultural-preservation-tuho",
  ],
  relatedSports: ["horseshoes", "cornhole", "petanque", "quoits", "washer-toss"],
  skills: ["throwing accuracy", "distance judgment", "wrist control", "focus"],
  strategies: [
    { title: "Practice consistent throwing technique", body: "Underhand vs sidearm — find personal preference." },
    { title: "Read wind + distance", body: "Small adjustments in distance/wind significant." },
  ],
  terminology: [
    { term: "Tuho (투호)", meaning: "'Throwing pot' — Korean name." },
    { term: "Touhu (投壶)", meaning: "Original Chinese name." },
    { term: "Toko (投壺)", meaning: "Japanese name." },
    { term: "Pot mouth", meaning: "Center opening; highest points." },
    { term: "Side ears / handles", meaning: "Pot's side attachments; medium points." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Buy replica tuho set ($50-150) — Asian cultural stores online", body: "Traditional pot + arrows." },
      { title: "Play at Korean/Japanese cultural festivals", body: "Traditional context + community learning." },
    ]},
    { level: "intermediate", steps: [
      { title: "Master different distances + scoring variants", body: "Various traditions." },
    ]},
  ],
  faq: [
    { question: "What is Tuho?", answer: "ANCIENT EAST ASIAN THROWING GAME — players throw arrows or sticks into narrow-necked pot from 2-5m distance. Originated CHINA (Zhou Dynasty ~1046 BCE) as royal court game; spread to KOREA (Joseon Dynasty royal court + folk game) + JAPAN (Heian period court game). Scoring based on where arrow lands. Similar to CORNHOLE or HORSESHOES conceptually. Cultural heritage of East Asia; played at seasonal festivals. Not organized competitively internationally." },
    { question: "How is Tuho different from Cornhole?", answer: "SIMILAR CONCEPT — throw projectile at target scoring points. TUHO uses ARROWS/STICKS into NARROW POT; CORNHOLE uses BEAN BAGS onto TILTED WOODEN BOARD with hole. TUHO ancient (3000+ years); CORNHOLE modern (formalized 1990s Ohio/Kentucky). CORNHOLE has ORGANIZED PROFESSIONAL LEAGUE (American Cornhole League ACL); TUHO cultural preservation only. Both scoring games; both accessible. Different cultural backgrounds — Tuho East Asian courtly elegance; Cornhole American backyard casual." },
    { question: "Is Tuho still played?", answer: "PRIMARILY CULTURAL PRESERVATION context. Not popular as active sport. Played at: KOREAN HOLIDAYS (Chuseok autumn harvest, Seollal Lunar New Year), JAPANESE CULTURAL EVENTS, CHINESE HERITAGE FESTIVALS, MUSEUM DEMONSTRATIONS. Not organized competitively; no professional tuho scene. Educational value for children learning East Asian traditions. Considered ENDANGERED cultural heritage — preserved intentionally through cultural centers + festivals rather than living sport." },
  ],
  wikipediaTitle: "Tuho",
  sources: [
    { label: "Wikipedia — Tuho (game)", url: "https://en.wikipedia.org/wiki/Tuho", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
