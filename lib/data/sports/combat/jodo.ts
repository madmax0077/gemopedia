import type { Sport } from "@/lib/types";

export const jodo: Sport = {
  id: "jodo",
  slug: "jodo",
  name: "Jodo",
  officialName: "Jōdō (杖道 — 'Way of the Short Staff')",
  aliases: ["Jodo", "Jōjutsu (precursor)", "Way of the Jō"],
  shortDescription:
    "TRADITIONAL JAPANESE MARTIAL ART using the JŌ — a straight WOODEN STAFF ~128 cm long × 2.4 cm diameter. Founded in the early 17th c CE by legendary swordsman MUSŌ GONNOSUKE KATSUYOSHI (who defeated even MIYAMOTO MUSASHI in a rematch using the jō) as SHINDŌ MUSŌ-RYŪ (神道夢想流). Practiced today primarily as SEITEI JODO (12 standardized kata from ALL JAPAN KENDO FEDERATION) with partner practice — one wields JŌ, other wields BOKKEN (wooden sword). Emphasizes RANGE + LEVERAGE + REDIRECTION rather than power. Governed by AJKF; growing global following alongside kendo + iaido.",
  longDescription:
    "JŌDŌ (杖道, 'WAY OF THE SHORT STAFF') is a TRADITIONAL JAPANESE MARTIAL ART using the JŌ — a straight WOODEN STAFF approximately 128 cm long × 2.4 cm diameter (~4 feet 2 inches × 1 inch — significantly shorter than the 6-foot BŌ staff used in bōjutsu). ORIGINS: Founded in the EARLY 17TH CENTURY CE by MUSŌ GONNOSUKE KATSUYOSHI, a legendary swordsman who famously CHALLENGED MIYAMOTO MUSASHI (Japan's greatest swordsman, 1584-1645). In their FIRST DUEL Musō was defeated by Musashi's WAKIZASHI + KATANA two-sword technique. Retreating to KAMADO SHRINE in KYUSHU, Musō prayed for insight; a divine vision instructed him to 'know the DIAMETER of a round staff to strike swiftly'; he then developed the JŌ as a weapon that combined the advantages of BŌ (long staff), YARI (spear), NAGINATA (glaive), and KATANA (sword) — a versatile stick that could STRIKE, THRUST, SWEEP, HOOK, and REDIRECT. Musō then reportedly FOUGHT MUSASHI TO A DRAW in a rematch — the only fighter believed to have survived a serious duel with Musashi undefeated. Musō founded SHINDŌ MUSŌ-RYŪ (神道夢想流 — 'Way of the Divine Vision') the traditional koryu school. HISTORY: Shindō Musō-ryū became the official jō school of the KURODA CLAN of FUKUOKA + preserved for centuries. Modern reformer TAKAJI SHIMIZU (1896-1978) brought Shindō Musō-ryū to Tokyo + eventually to the ALL JAPAN KENDO FEDERATION which codified SEITEI JODO (12 standardized kata) in 1968 for widespread practice. EQUIPMENT: (1) JŌ — the STRAIGHT WOODEN STAFF (~128 × 2.4 cm), typically WHITE OAK. (2) BOKKEN — WOODEN KATANA replica used by the partner (UCHIDACHI, the 'defeated' role) in kata. (3) HAKAMA + KEIKOGI — traditional attire. (4) No bogu armor — jodo is practiced as CHOREOGRAPHED PARTNER KATA rather than free sparring. STRUCTURE: All jodo practice is PARTNER-BASED KATA (unlike solo iaido). TWO ROLES: (1) SHIJŌ / SHIDACHI — the JŌ wielder who ultimately 'wins' the kata; (2) UCHIDACHI — the SWORD wielder who represents the sword attack + is defeated by the jō. Partners rotate. SEITEI JODO 12 KATA: (1) Tsukizue, (2) Suigetsu, (3) Hissage, (4) Shamen, (5) Sakan, (6) Monomi, (7) Kasumi, (8) Tachi Otoshi, (9) Rai-Uchi, (10) Seigan, (11) Midare-Dome, (12) Ran-ai. Advanced practitioners also study 64 OKUDEN + CHUDEN kata of Shindō Musō-ryū. TECHNIQUES: STRIKES (uchi), THRUSTS (tsuki), SWEEPS (harai), HOOKS (kake), REDIRECTIONS. Emphasizes USING JŌ's LENGTH + LEVERAGE to defeat sword; using GRIP CHANGES (SLIDING THE JŌ THROUGH THE HANDS) to instantly change reach + angle. RANKS: KYU 5→1 → DAN 1→8; Renshi/Kyoshi/Hanshi titles. GOVERNING: ALL JAPAN KENDO FEDERATION (AJKF, since 1968 Seitei standardization); INTERNATIONAL KENDO FEDERATION (FIK, jodo division). Jodo is the SMALLER of the three AJKF-governed arts (kendo, iaido, jodo) but growing steadily; practiced by tens of thousands globally.",
  category: "combat-sports",
  subCategory: "Japanese pole weapon / short staff / partner kata art / Musō lineage",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "medieval",
  popularity: "niche",
  countryOfOrigin: "JP",
  regionOfOrigin: "Japan (Kyushu founding by Musō Gonnosuke; modern nationwide + global)",
  estimatedOrigin: "Early 17th century CE (Musō Gonnosuke Shindō Musō-ryū); Seitei Jodo codified 1968",
  players: { min: 2, max: 2, note: "Partner kata practice with rotating shijō (jō) + uchidachi (sword) roles." },
  field: {
    surfaceName: "Jodo dojo (wooden floor)",
    dimensions: "Standard dojo floor; partner kata performed in ~3-5m working space",
    description: "Traditional wooden dojo shared with iaido + kendo practice.",
  },
  equipment: [
    { name: "Jō (white oak straight staff, ~128 cm × 2.4 cm)", description: "The primary weapon" },
    { name: "Bokken (wooden katana replica)", description: "Used by partner uchidachi role" },
    { name: "Hakama + Keikogi + Obi", description: "Traditional attire" },
  ],
  duration: { approximateMinutes: 45, structure: "Practice sessions 45-90 min; taikai kata performances ~3-5 min per kata." },
  objective: "Perfect partner kata execution; defeat sword with staff via range + leverage + technique.",
  basicRules: [
    { title: "All practice is partner-based kata (no free sparring)", body: "Choreographed with defined winner/loser roles." },
    { title: "Roles rotate: shijō (jō) 'wins' each kata; uchidachi (sword) represents defeated attack", body: "Both partners learn both roles." },
    { title: "12 Seitei Jodo kata standardized by AJKF", body: "Universal curriculum." },
    { title: "Shindō Musō-ryū koryu adds 64 advanced kata", body: "Traditional deep path." },
    { title: "No bogu armor — safety through choreographed distance", body: "Kata is not sparring." },
    { title: "Ranks Kyu 5→1 → Dan 1→8 → Hanshi title", body: "Progression." },
  ],
  scoring: {
    summary: "Taikai judged on partner kata precision + timing + spirit for both partners.",
    breakdown: [
      { action: "Shijō (jō wielder) technique execution", points: "Judged" },
      { action: "Uchidachi (sword partner) attack quality + reception", points: "Judged" },
      { action: "Timing + distance (maai) between partners", points: "Judged" },
      { action: "Overall zanshin + spirit", points: "Judged composite" },
    ],
    winCondition: "Taikai: highest combined judge scores across kata pairs.",
  },
  governingBodies: [
    { name: "All Japan Kendo Federation (AJKF)", founded: 1952, headquarters: "Tokyo, Japan" },
    { name: "International Kendo Federation (FIK — Jodo division)", founded: 1970, headquarters: "Tokyo" },
    { name: "Shindō Musō-ryū Renshinkai (koryu preservation)", founded: 1970, headquarters: "Japan" },
  ],
  majorCompetitions: [
    { name: "All-Japan Jodo Championship", frequency: "annual", founded: 1970, region: "Japan" },
    { name: "World Jodo Championships (FIK)", frequency: "triennial", founded: 2003, region: "Global" },
    { name: "European Jodo Championships", frequency: "annual", founded: 1990, region: "Europe" },
  ],
  countriesPlayed: ["JP", "US", "GB", "DE", "FR", "IT", "NL", "SE", "AU", "BR", "CA"],
  famousAthletes: [
    "Musō Gonnosuke Katsuyoshi (17th c) — Founder; drew with Musashi in rematch",
    "Takaji Shimizu (1896-1978) — Modern reformer + AJKF influence",
    "Multiple AJKF Hanshi 8-Dan jodo masters",
  ],
  variants: [
    "seitei-jodo-12-kata-most-common-modern",
    "shindo-muso-ryu-koryu-classical-64-kata",
    "combined-jodo-with-iaido-kendo-common-practice",
  ],
  relatedSports: ["kendo", "iaido", "kyudo", "naginatajutsu", "hema-staff", "arnis-staff"],
  skills: ["jō grip changes + sliding", "range control + maai", "partner kata timing", "leverage-based redirects", "sword-defeating tactics"],
  strategies: [
    { title: "Use jō length to defeat sword's reach", body: "Range advantage." },
    { title: "Grip slides allow instant reach changes", body: "Signature jodo skill." },
    { title: "Redirect sword's line rather than block force-on-force", body: "Leverage over power." },
    { title: "Practice both shijō + uchidachi roles equally", body: "Deep understanding." },
  ],
  terminology: [
    { term: "Jōdō (杖道)", meaning: "'Way of the Short Staff' — the martial art." },
    { term: "Jō", meaning: "The 128cm straight wooden staff." },
    { term: "Bokken", meaning: "Wooden katana replica used by partner." },
    { term: "Shijō / Shidachi", meaning: "The jō wielder — 'winner' role in kata." },
    { term: "Uchidachi", meaning: "The sword wielder — 'defeated' partner role." },
    { term: "Shindō Musō-ryū", meaning: "The founding koryu school." },
    { term: "Seitei Jodo", meaning: "12 AJKF standardized kata." },
    { term: "Maai", meaning: "Distance/spacing between partners." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Join AJKF-affiliated jodo dojo (often shared with kendo/iaido)", body: "Global network but smaller than kendo." },
      { title: "Learn basic jō handling + first Seitei kata", body: "6-12 months foundation." },
    ]},
    { level: "intermediate", steps: [
      { title: "All 12 Seitei kata + Kyu ranks progression", body: "Structured pathway." },
    ]},
    { level: "advanced", steps: [
      { title: "Shindō Musō-ryū koryu + Dan + World Jodo Championships representation", body: "Elite path." },
    ]},
  ],
  faq: [
    { question: "What is Jodo?", answer: "TRADITIONAL JAPANESE MARTIAL ART using the JŌ — a straight WOODEN STAFF ~128 cm long × 2.4 cm diameter. Founded in the early 17th c CE by legendary swordsman MUSŌ GONNOSUKE KATSUYOSHI (who defeated even MIYAMOTO MUSASHI in a rematch using the jō) as SHINDŌ MUSŌ-RYŪ. Practiced today primarily as SEITEI JODO (12 standardized kata from ALL JAPAN KENDO FEDERATION) with partner practice — one wields JŌ, other wields BOKKEN (wooden sword). Emphasizes RANGE + LEVERAGE + REDIRECTION rather than power. Governed by AJKF; growing global following alongside kendo + iaido." },
    { question: "Did Musō Gonnosuke really defeat Miyamoto Musashi with the jō?", answer: "Historical evidence suggests Musō DREW rather than DEFEATED Musashi in their rematch — but this is still remarkable because MUSASHI FOUGHT ~60 KNOWN DUELS UNDEFEATED, killing many opponents. According to jodo lore, Musō was defeated by Musashi's two-sword niten-ichi-ryū in their first encounter, then RETREATED TO KAMADO SHRINE in Kyushu, meditated + received a divine vision that inspired the jō as a weapon. In their rematch (documented but not verified beyond doubt), Musō landed a strike that Musashi could not counter — but Musashi's honor was preserved by drawing the fight. Musō is thus one of the very few historical fighters believed to have SURVIVED a serious duel with Musashi. This origin story defines jodo's cultural identity + philosophical basis." },
  ],
  wikipediaTitle: "Jōdō",
  sources: [
    { label: "All Japan Kendo Federation — Jodo", url: "https://www.kendo.or.jp/en/what-is-jodo/", publisher: "AJKF" },
    { label: "Wikipedia — Jōdō", url: "https://en.wikipedia.org/wiki/J%C5%8Dd%C5%8D", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-28",
  confidence: "verified",
};
