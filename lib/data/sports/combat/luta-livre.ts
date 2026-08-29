import type { Sport } from "@/lib/types";

export const lutaLivre: Sport = {
  id: "luta-livre",
  slug: "luta-livre",
  name: "Luta Livre",
  officialName: "Luta Livre (Luta Livre Esportiva / Luta Livre Submission)",
  aliases: ["Luta Livre Esportiva", "LLE", "Brazilian Catch Wrestling", "No-Gi Grappling (Brazilian style)"],
  shortDescription:
    "Brazilian no-gi submission grappling style — the 'poor man's alternative' to gi-based Brazilian Jiu-Jitsu; born from catch wrestling roots in 1920s Rio de Janeiro; produced Brazilian MMA icons Marco Ruas, Pedro Rizzo, and Renato 'Babalu' Sobral.",
  longDescription:
    "Luta Livre (Portuguese: 'free fighting') is a Brazilian no-gi submission grappling martial art with roots in early-20th-century catch-as-catch-can wrestling. Founded in the 1920s by Euclydes 'Tatu' Hatem, a catch-wrestler in Rio de Janeiro, Luta Livre developed as a working-class alternative to Brazilian Jiu-Jitsu — which required an expensive gi and was associated with the wealthy Gracie family. Its practitioners trained in shorts and rashguards (no gi), emphasizing speed, submissions, and no-gi grappling that had to be effective without cloth grips. The 1980s–90s saw legendary rivalries between Luta Livre and BJJ (the 'Luta Livre vs. Jiu-Jitsu' vale-tudo wars), producing iconic fighters like Marco Ruas (UFC 7 tournament winner 1995), Pedro Rizzo, Renato Sobral, and Hugo Duarte. Split into two branches: Luta Livre Esportiva (sport version — no strikes) and Luta Livre Vale Tudo (with strikes — evolved into modern MMA). The sport's most influential figure post-1990s is Roberto Leitão (grandmaster / lineage holder). Today Luta Livre survives in Brazil + Germany + a small global community; contested at ADCC, NAGA, and Luta Livre-specific tournaments.",

  category: "combat-sports",
  subCategory: "Brazilian no-gi submission grappling",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",

  countryOfOrigin: "BR",
  regionOfOrigin: "Rio de Janeiro, Brazil (1920s working-class origin); modern global via Germany + MMA scene",
  estimatedOrigin: "1920s Rio de Janeiro (Euclydes 'Tatu' Hatem — catch-wrestling lineage); MMA prominence 1990s (Marco Ruas UFC 7 1995); modern global growth via German Luta Livre gyms 2000s",

  players: { min: 2, max: 2, note: "1v1 submission grappling; team affiliations for training + competition." },
  field: {
    surfaceName: "Grappling mat (no gi)",
    dimensions: "8 × 8 m padded area typical; ADCC-style circular or rectangular ring",
    description: "Standard grappling tatami; no ring ropes. Boundaries: circle or rectangle; being pushed out results in restart.",
  },
  equipment: [
    { name: "Rashguard + shorts", description: "MMA-style tight rashguard + board shorts; no gi. This is the defining equipment difference from BJJ." },
    { name: "Mouthguard", description: "Mandatory at competition; optional in training." },
    { name: "Ear protection (optional)", description: "Wrestling-style ear guards for training to prevent cauliflower ear." },
    { name: "Barefoot", description: "No shoes; wrestling / BJJ tradition." },
  ],
  duration: {
    approximateMinutes: 8,
    structure: "Standard match: 8 min single round for adults. Championship + super-fights: 10–15 min. Overtime submission-only rounds if tied.",
  },
  objective:
    "Submit opponent (tap-out via choke or joint lock) OR score more points via takedowns, sweeps, and control positions.",
  matchStructure:
    "Match starts standing. Fighters engage — takedowns, sweeps, ground grappling, submissions. Round runs 8 min (or per event rules). Ends: submission (tap-out = automatic win), points decision, or referee stoppage. Overtime submission-only round if tied.",

  basicRules: [
    { title: "No-gi grappling", body: "No cloth to grip — must use body control, over/under hooks, wrist grips. Sweat becomes a factor." },
    { title: "Submissions win instantly", body: "Any legitimate submission (choke, joint lock) = automatic win via tap-out." },
    { title: "No striking (Esportiva version)", body: "Sport Luta Livre = pure grappling. Vale-Tudo version historic — allowed strikes; evolved into MMA." },
    { title: "Points for takedowns / sweeps / positions", body: "2 pts takedown, 2 pts sweep, 3 pts mount / back mount, 4 pts back-mount with hooks. Similar to BJJ scoring." },
    { title: "Advantage points for near-submissions", body: "Judges award advantages for genuine submission threats or dominant near-scores; tiebreaker in decisions." },
    { title: "Time limit tied = points win", body: "If no submission, higher points win. If tied, advantages; if still tied, overtime submission-only round." },
    { title: "All submissions legal", body: "Heel hooks, neck cranks, twisters — full submission set unlike sport BJJ (which restricts some)." },
  ],
  advancedRules: [
    { title: "Heel hook + rotational leg attacks legal", body: "Unlike traditional gi BJJ, Luta Livre permits heel hooks + rotating leg attacks. Signature technique." },
    { title: "Neck cranks + spinal attacks legal", body: "Cranks + twisters allowed — Catch Wrestling heritage." },
    { title: "Slam DQs (some rulesets)", body: "Slamming out of submission attempts may be prohibited in some events; check specific ruleset." },
    { title: "Stand-up if stalled", body: "Referee stands up fighters if 30–60 sec of ground stalling; reset in center." },
    { title: "Overtime rules", body: "Ties often go to submission-only overtime rounds (5 min); if still tied, judges' decision." },
    { title: "Weight classes (per event)", body: "Standard weight brackets: -66, -73, -82, -92, -102, +102 kg for men; adjusted for women's events." },
  ],
  scoring: {
    summary: "Submission = automatic win. Points: 2 takedown / sweep, 3 mount, 4 back mount with hooks. Advantages tiebreak. Time expires = higher points.",
    winCondition: "Submission (tap-out) OR highest points at time OR advantages if tied OR overtime submission-round win.",
    breakdown: [
      { action: "Submission (choke, joint lock)", points: "Automatic win" },
      { action: "Takedown", points: "2 pts" },
      { action: "Sweep", points: "2 pts" },
      { action: "Mount", points: "3 pts" },
      { action: "Back mount with hooks", points: "4 pts" },
      { action: "Near-submission attempt", points: "1 advantage (tiebreaker)" },
      { action: "Referee stand-up penalty", points: "1 penalty vs. stalling fighter" },
    ],
  },
  penalties: [
    { title: "Ground stalling", body: "Warning + referee stand-up; repeated = penalty point." },
    { title: "Illegal submission (varies by event)", body: "Some events prohibit certain neck cranks or heel hooks; penalty to DQ." },
    { title: "Slamming out of submission (some rulesets)", body: "May be prohibited to prevent injury; penalty if enforced." },
    { title: "Unsporting behavior", body: "Warning to DQ." },
  ],

  positions: [
    { name: "Standing (feet)", role: "Takedown / clinch phase; hand-fighting + shots." },
    { name: "Guard (bottom)", role: "Defensive; sweep + submission from bottom." },
    { name: "Side control (top)", role: "Dominant top position; setup submissions." },
    { name: "Mount", role: "Dominant sitting position; +3 pts." },
    { name: "Back mount", role: "Highest scoring position; +4 pts with both hooks in." },
  ],
  officiating: {
    officials: ["1 Referee (mat control + submission calls)", "2 Judges (scoring cards)", "1 Timekeeper"],
    summary: "Referee + 2 judges; ADCC-style scoring for tournament decisions. Luta Livre-specific events may adjust; ADCC rules widely adopted.",
  },

  governingBodies: [
    { name: "Federação Brasileira de Luta Livre", founded: 1994, headquarters: "Rio de Janeiro, Brazil" },
    { name: "German Luta Livre Federation (DLLV)", founded: 2000, headquarters: "Germany" },
    { name: "International Luta Livre Federation", founded: 2010, headquarters: "Brazil + Germany joint" },
  ],
  majorCompetitions: [
    { name: "ADCC Submission Wrestling World Championship", frequency: "biennial", founded: 1998, region: "worldwide (not Luta Livre-specific but LL fighters compete)" },
    { name: "Brazilian Luta Livre Championships", frequency: "annual", founded: 1994, region: "Brazil" },
    { name: "European Luta Livre Championships", frequency: "annual", founded: 2005, region: "Europe (Germany dominant)" },
    { name: "NAGA (North American Grappling Association) events", frequency: "monthly", founded: 1995, region: "USA + international" },
    { name: "Historic Luta Livre vs. BJJ vale-tudo events", frequency: "sporadic", founded: 1980, region: "Rio de Janeiro" },
  ],
  countriesPlayed: ["BR", "DE", "US", "NL", "FR", "IT", "GB", "JP", "AR", "PT"],
  famousAthletes: [
    "Euclydes 'Tatu' Hatem (BR, founder of Luta Livre 1920s)",
    "Marco Ruas (BR, UFC 7 tournament winner 1995; 'The King of the Streets')",
    "Pedro Rizzo (BR, longtime UFC heavyweight contender; Luta Livre trained)",
    "Renato 'Babalu' Sobral (BR, UFC + Strikeforce standout)",
    "Hugo Duarte (BR, historic Luta Livre vs. BJJ war participant)",
    "Cristiano Marcello (BR, Luta Livre + BJJ black belt hybrid)",
    "Nicolas Renier (FR, European Luta Livre champion)",
    "Andreas Schmidt (DE, German Luta Livre pioneer)",
    "Roberto Leitão (BR, grandmaster + lineage holder post-1990s)",
  ],
  records: [
    { title: "Founding of Luta Livre", holder: "Euclydes 'Tatu' Hatem", value: "1920s Rio de Janeiro — catch wrestling adaptation for working-class Brazilians", year: 1928 },
    { title: "Marco Ruas UFC 7 tournament win", holder: "Marco Ruas", value: "UFC 7 tournament winner Sept 1995 — established Luta Livre in MMA", year: 1995 },
    { title: "Historic Luta Livre vs. BJJ vale-tudo wars", holder: "Rio de Janeiro fighters", value: "1980s–90s underground fights + televised confrontations", year: 1990 },
    { title: "German Luta Livre growth", holder: "DLLV Germany", value: "Post-2000 Germany became second-largest Luta Livre country", year: 2015 },
  ],

  variants: ["luta-livre-esportiva-no-strikes", "luta-livre-vale-tudo-with-strikes-historic", "modern-luta-livre-mma-adjacent"],
  relatedSports: ["brazilian-jiu-jitsu", "catch-wrestling", "sambo", "mixed-martial-arts", "judo"],

  skills: [
    "no-gi grappling control (no cloth grips)",
    "leg-lock system (heel hooks, kneebars)",
    "submission chains",
    "explosive takedowns",
    "sweep from guard",
    "cardio + intensity (8 min high-effort)",
  ],
  strategies: [
    { title: "Legs are legit weapons", body: "Luta Livre attacks legs relentlessly. Straight ankle locks, heel hooks, kneebars — chain them together." },
    { title: "Sweat + control", body: "No gi means sweaty grips. Study wrestling hand-fighting + control positions without cloth crutches." },
    { title: "Aggressive stand-up", body: "Sport events reward action. Push pace; force takedown OR submission attempt; avoid points-decision creep." },
    { title: "Cross-train wrestling", body: "Wrestling takedown skills are the standing weakness of pure Brazilian grapplers. Investment pays huge dividends." },
    { title: "Neck attacks + twisters", body: "Legal in Luta Livre; unfamiliar to sport-BJJ opponents. Signature Catch-heritage attacks." },
    { title: "Study 1990s vale-tudo footage", body: "Marco Ruas + Hugo Duarte fights reveal Luta Livre's practical combat identity — different from modern sport." },
  ],

  terminology: [
    { term: "Luta Livre", meaning: "'Free fighting' — Portuguese; refers to no-gi submission grappling." },
    { term: "Esportiva", meaning: "'Sport' — no-strikes version." },
    { term: "Vale-Tudo", meaning: "'Anything goes' — historic version with strikes; evolved into MMA." },
    { term: "Chave de Braço", meaning: "'Arm key' — armbar." },
    { term: "Mata Leão", meaning: "'Lion Killer' — rear naked choke." },
    { term: "Triângulo", meaning: "Triangle choke." },
    { term: "Guarda", meaning: "Guard position (defensive)." },
    { term: "Raspagem", meaning: "Sweep." },
    { term: "Passagem de Guarda", meaning: "Guard pass." },
    { term: "Tatu", meaning: "'Armadillo' — nickname of founder Euclydes Hatem." },
    { term: "Luta Livre vs. BJJ", meaning: "The historic rivalry between Luta Livre + Brazilian Jiu-Jitsu (1980s–90s Rio)." },
    { term: "ADCC", meaning: "Abu Dhabi Combat Club — top no-gi submission grappling championship where LL fighters compete." },
  ],

  learningPaths: [
    {
      level: "beginner",
      steps: [
        { title: "Find a Luta Livre gym", body: "Rare outside Brazil + Germany. In Brazil: São Paulo + Rio dojos. In Germany: DLLV network. Elsewhere: cross-train BJJ (no-gi) + wrestling." },
        { title: "Learn no-gi wrestling fundamentals", body: "No-gi grappling foundation — cross-face, underhooks, guillotine choke. First 6 months: stand-up + basic ground control." },
        { title: "Add leg-lock system", body: "Luta Livre's specialty. Straight ankle lock, heel hook (careful), kneebar. Progress carefully — heel hooks cause serious knee injury." },
      ],
    },
    {
      level: "advanced",
      steps: [
        { title: "Compete at NAGA + Grappling Industries", body: "No-gi tournaments open to Luta Livre — apply your training in live matches." },
        { title: "Compete at ADCC trials + qualifiers", body: "Elite no-gi submission grappling — every Luta Livre practitioner's Olympic-equivalent goal." },
        { title: "Cross to MMA", body: "Luta Livre's practical grappling transfers directly to MMA. Many modern Brazilian MMA fighters carry Luta Livre lineage." },
      ],
    },
  ],

  faq: [
    { question: "What is Luta Livre?", answer: "A Brazilian no-gi submission grappling martial art founded in 1920s Rio de Janeiro. It was developed as a working-class alternative to Brazilian Jiu-Jitsu (which required expensive gis). Luta Livre practitioners train in shorts + rashguards, emphasizing speed, leg locks, and no-gi grappling. Its most famous practitioners include Marco Ruas (UFC 7 winner 1995) and Pedro Rizzo (longtime UFC contender)." },
    { question: "How is Luta Livre different from BJJ?", answer: "Similarities: submission grappling with points scoring; both effective. Differences: (1) No gi — Luta Livre is always no-gi; BJJ has both gi + no-gi. (2) All submissions legal — Luta Livre permits heel hooks, neck cranks, twisters that many BJJ events restrict. (3) Cultural: Luta Livre was working-class; BJJ was upper-class historically. Modern gap: BJJ became a global sport; Luta Livre remained niche. Modern grapplers often cross-train both." },
    { question: "Is Luta Livre used in MMA?", answer: "Yes — extensively. Marco Ruas won UFC 7 tournament (1995) as a Luta Livre practitioner. Pedro Rizzo (Luta Livre) was UFC heavyweight top contender for years. Modern Brazilian MMA still has strong Luta Livre lineage. The heel hook + leg-lock system that dominated 2010s MMA came partly through Luta Livre + Catch Wrestling." },
    { question: "Where can I train Luta Livre?", answer: "Brazil (Rio + São Paulo — home of the sport). Germany (DLLV — largest overseas presence). Small communities in Netherlands, France, Portugal, USA. In North America, cross-train no-gi BJJ + wrestling + attend Luta Livre seminars when available. Nick Sasaki (US) + others teach Luta Livre-adjacent seminars." },
    { question: "What was the Luta Livre vs. BJJ rivalry?", answer: "1980s–90s Rio de Janeiro saw intense (and sometimes violent) rivalry between Luta Livre and BJJ schools. Underground vale-tudo fights + televised confrontations (Hugo Duarte vs. Gracie family). Rooted in class differences (Luta Livre = poorer schools; BJJ = wealthier Gracie family) + technical differences. The rivalry produced modern MMA — many fighters cross-trained and the strongest survived. Rivalry has cooled since MMA absorbed both." },
    { question: "Who founded Luta Livre?", answer: "Euclydes 'Tatu' Hatem — a 1920s Rio de Janeiro catch-wrestler. He trained in the international catch wrestling style prevalent in 1920s carnivals and pro-wrestling circuits, then adapted it for Brazilian working-class students who couldn't afford BJJ's expensive gis. Modern lineage descends through Roberto Leitão (grandmaster) and his students." },
  ],

  wikipediaTitle: "Luta livre",
  sources: [
    { label: "Wikipedia — Luta livre", url: "https://en.wikipedia.org/wiki/Luta_livre", publisher: "Wikipedia" },
    { label: "German Luta Livre Federation (DLLV)", url: "https://dllv.de", publisher: "DLLV" },
    { label: "Marco Ruas — UFC 7 tournament win (1995)", publisher: "UFC records" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
