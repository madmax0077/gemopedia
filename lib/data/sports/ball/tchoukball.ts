import type { Sport } from "@/lib/types";

export const tchoukball: Sport = {
  id: "tchoukball",
  slug: "tchoukball",
  name: "Tchoukball",
  officialName: "Tchoukball",
  aliases: ["Chukball"],
  shortDescription:
    "Swiss team sport invented 1970 by Dr. Hermann Brandt (biologist) to REDUCE INJURIES + PROMOTE FAIR PLAY. 7-a-side; throw ball at REBOUND FRAMES (like trampolines) at each end of court; opponent must not catch rebound. NO CONTACT, NO OFFSIDE — designed as maximally cooperative team sport. Small but passionate global following. FITB governs. WORLD CHAMPIONSHIPS since 2004.",
  longDescription:
    "Tchoukball (pronounced 'chook-ball') is SWISS TEAM SPORT invented 1970 by DR. HERMANN BRANDT (Swiss biologist + sports scientist). Brandt designed the sport based on PSYCHOLOGICAL + PHYSIOLOGICAL PRINCIPLES to REDUCE INJURIES + PROMOTE FAIR PLAY vs traditional team sports (which he analyzed as overly aggressive). GAMEPLAY: 40m × 20m indoor court; 7 PLAYERS PER TEAM. At each end of court is a 90cm × 90cm REBOUND FRAME (like small square trampoline) angled at 55°. OBJECTIVE: throw ball at rebound frame so it BOUNCES BACK; opponent team must not catch it before it hits ground OR must catch it (if they catch, no score; if fails or ball hits ground = 1 POINT to throwing team). BOTH TEAMS CAN SCORE ON EITHER FRAME (each frame is shared by both teams). NO CONTACT ALLOWED — considered central to sport's identity. NO OFFSIDE, NO STEALING BALL (from same team). Player with ball can take 3 STEPS + hold ball 3 SECONDS max. Passes required to advance ball. Ball must hit rebound frame within specific zone. If throw misses frame or opponent catches rebound = no score, ball turnover. Games typically 3 × 15 min or single 30-min period. WORLD CHAMPIONSHIPS since 2004. FITB (International Tchoukball Federation) governs. Popular SWITZERLAND, TAIWAN (surprising strong scene), SINGAPORE, HONG KONG, MACAU. Small but passionate global following. UNIQUE PHILOSOPHY of non-aggressive team sport.",
  category: "ball-sports",
  subCategory: "Swiss non-contact team ball sport with rebound frames",
  sportType: "team",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "CH",
  regionOfOrigin: "Switzerland (invented 1970 by Dr. Hermann Brandt)",
  estimatedOrigin: "1970 — invented by Dr. Hermann Brandt; FITB founded 1971; World Championships since 2004",
  players: { min: 14, max: 20, note: "7v7 on court; rosters up to 12." },
  field: { surfaceName: "indoor court", dimensions: "40m × 20m; rebound frames at each end (90cm × 90cm at 55°)", description: "Rectangular indoor court with angled rebound frame at each end (shared by both teams for scoring)." },
  equipment: [
    { name: "Tchoukball (size ~445g, similar to handball)", description: "€30-60" },
    { name: "Rebound frames (2, one at each end)", description: "€200-500 each" },
    { name: "Court markings + jerseys", description: "Standard team sport" },
  ],
  duration: { approximateMinutes: 45, structure: "3 periods × 15 min or 1 period × 30 min." },
  objective: "Score more points than opponent by throwing ball at rebound frame so opponent cannot catch it.",
  basicRules: [
    { title: "7 players per team on 40m × 20m court", body: "Both teams can score on EITHER frame (shared)." },
    { title: "Throw ball at 90cm × 90cm ANGLED REBOUND FRAME (55° tilt)", body: "Ball bounces back into court." },
    { title: "1 POINT if opponent doesn't catch rebound before it hits ground", body: "OR opponent fails to catch cleanly." },
    { title: "NO CONTACT allowed — sport designed for non-aggression", body: "Central philosophical principle." },
    { title: "3 STEPS max with ball + 3 SECONDS holding max", body: "Encourages passing." },
    { title: "Missed throw (ball misses frame) = no score, turnover", body: "Precision required." },
    { title: "3 CONSECUTIVE PASSES ONLY before shooting", body: "Fast-paced, no stalling." },
  ],
  scoring: {
    summary: "1 point per successful rebound not caught by opponent.",
    breakdown: [
      { action: "Successful throw at frame + opponent doesn't catch cleanly", points: "1 point" },
      { action: "Opponent catches rebound cleanly", points: "0 points, turnover" },
      { action: "Throw misses frame or lands out of bounds", points: "0 points, turnover to opponent" },
      { action: "Ball caught by same team = no score, turnover", points: "0 points" },
    ],
    winCondition: "More points than opponent at end of game.",
  },
  governingBodies: [
    { name: "Fédération Internationale de Tchoukball (FITB)", founded: 1971, headquarters: "Geneva, Switzerland", website: "https://tchoukball.org/" },
  ],
  majorCompetitions: [
    { name: "Tchoukball World Championships", frequency: "every 2 years", founded: 2004, region: "worldwide" },
    { name: "Asian Tchoukball Championship", frequency: "every 2 years", founded: 2005, region: "Asia (Taiwan dominant)" },
    { name: "Swiss League", frequency: "annual", founded: 1975, region: "Switzerland" },
  ],
  countriesPlayed: ["CH", "TW", "SG", "HK", "MO", "IT", "GB", "US", "CA", "AU"],
  famousAthletes: [
    "Various Swiss + Taiwanese tchoukball champions (small elite pool)",
  ],
  variants: [
    "tchoukball-standard-7v7-indoor",
    "beach-tchoukball-3v3-sand-outdoor-variant",
    "tchoukball-junior-youth-modified",
    "wheelchair-tchoukball-adapted",
  ],
  relatedSports: ["handball", "netball", "volleyball", "basketball"],
  skills: ["throwing accuracy at rebound frame", "positional awareness", "quick passing", "spatial vision"],
  strategies: [
    { title: "Both teams share frames — attack unexpected angles", body: "Unlike normal sports with fixed goals per team." },
    { title: "Fast passing to open shooters", body: "3-step + 3-second limit forces speed." },
    { title: "Positional coverage — anticipate rebounds", body: "Defense = catching rebounds, not intercepting throws." },
    { title: "Vary throw angles — high, low, angled rebounds harder to catch", body: "Trajectory variation key." },
  ],
  terminology: [
    { term: "Tchoukball", meaning: "Sport name (invented 1970, phonetic 'chook-ball')." },
    { term: "Frame / Trampoline", meaning: "90cm × 90cm angled rebound apparatus." },
    { term: "FITB", meaning: "Fédération Internationale de Tchoukball — governing body since 1971." },
    { term: "Rebound", meaning: "Ball bouncing back from frame after throw." },
    { term: "Non-contact rule", meaning: "Central philosophical principle — no physical contact ever." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Find tchoukball club — Switzerland, Taiwan, Singapore, Hong Kong strongest", body: "Small but passionate global community." },
      { title: "Handball or netball background helpful", body: "Throwing + positioning skills transfer." },
    ]},
    { level: "intermediate", steps: [
      { title: "Join national league (Swiss League oldest)", body: "Structured competition." },
    ]},
    { level: "advanced", steps: [
      { title: "National team + World Championships (biennial)", body: "Small elite pool globally." },
    ]},
  ],
  faq: [
    { question: "What is Tchoukball?", answer: "SWISS TEAM SPORT invented 1970 by DR. HERMANN BRANDT (biologist) to REDUCE INJURIES + PROMOTE FAIR PLAY. 7 players per team throw ball at 90cm × 90cm ANGLED REBOUND FRAME (55°) at each end of court. Score if opponent doesn't catch rebound. BOTH TEAMS CAN SCORE ON EITHER FRAME (shared). NO CONTACT ALLOWED, NO OFFSIDE, NO STEALING FROM SAME TEAM. Considered ONE OF PUREST TEAM SPORT PHILOSOPHIES. Small but passionate global following. WORLD CHAMPIONSHIPS since 2004. Strong Switzerland, Taiwan, Singapore." },
    { question: "Why was Tchoukball invented?", answer: "Dr. HERMANN BRANDT (Swiss biologist + sports scientist) analyzed traditional team sports psychologically + physically. He concluded most were OVERLY AGGRESSIVE + INJURY-PRONE. Designed TCHOUKBALL specifically to: (1) ELIMINATE CONTACT (no injuries from tackles/collisions). (2) ELIMINATE STEALING (encourages team play, not confrontation). (3) SHARE GOALS (both teams score on either frame — no 'us vs them' territorial mentality). (4) EMPHASIZE PASSING + SKILL (3-step, 3-second limits force teamwork). Sport embodies COOPERATIVE COMPETITION philosophy — deeply intentional design vs organic sport evolution." },
    { question: "Is Tchoukball in the Olympics?", answer: "NOT ON OLYMPIC PROGRAM. IOC RECOGNIZED sport. Featured at WORLD GAMES (multi-sport for non-Olympics). SMALL GLOBAL BASE outside Switzerland + Taiwan makes Olympic case difficult; IOC prefers wider participation. Sport's philosophy of non-aggression + gender-neutral rules is UNIQUE — potential future consideration if participation grows. Currently WORLD CHAMPIONSHIPS (biennial since 2004) are highest-level competition." },
  ],
  wikipediaTitle: "Tchoukball",
  sources: [
    { label: "FITB — Fédération Internationale de Tchoukball", url: "https://tchoukball.org/", publisher: "FITB" },
    { label: "Wikipedia — Tchoukball", url: "https://en.wikipedia.org/wiki/Tchoukball", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-25",
  confidence: "verified",
};
