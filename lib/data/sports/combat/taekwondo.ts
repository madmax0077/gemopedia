import type { Sport } from "@/lib/types";

export const taekwondo: Sport = {
  id: "taekwondo",
  slug: "taekwondo",
  name: "Taekwondo",
  officialName: "Taekwondo",
  aliases: ["태권도", "TKD", "The way of the foot and fist"],
  shortDescription:
    "Korean striking art defined by fast, high, spinning kicks — Olympic sport since 2000 with electronic-scored sparring.",
  longDescription:
    "Taekwondo (태권도, literally 'the way of the foot and fist') is a Korean striking martial art and Olympic combat sport. The name was coined in 1955 by General Choi Hong-hi, who synthesised earlier Korean karate-derived styles (Tang Soo Do, Kwon Bop) with traditional taekkyeon into a distinctly Korean discipline. Two major branches co-exist: the International Taekwon-Do Federation (ITF, 1966, more traditional) and World Taekwondo (WT, formerly WTF, 1973), the Olympic body. WT competition is defined by long, fast, spinning kicks — roughly 80% of scoring — worn by electronic protector scoring systems (PSS). Taekwondo debuted as an Olympic medal sport at Sydney 2000.",

  category: "combat-sports",
  subCategory: "kick-focused striking art",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: true,
  isParalympic: true,
  isProfessional: false,
  season: "year-round",
  era: "20th-century",
  popularity: "global",

  countryOfOrigin: "KR",
  regionOfOrigin: "South Korea",
  estimatedOrigin: "Name coined 1955; ITF founded 1966; WT founded 1973 (as WTF)",

  players: { min: 2, max: 2, note: "1v1 within weight classes. Team format exists in ITF; Olympic mixed-team demo since 2016." },
  field: {
    surfaceName: "field-of-play (octagon)",
    dimensions: "Octagonal contest area — 8 m across (WT senior). Older square 8 m × 8 m ring still used at some events.",
    description: "Padded matting — chung (blue) versus hong (red). Competitors wear electronic body protectors (hogu) and head guards (WT senior since 2009).",
  },
  equipment: [
    { name: "Dobok", description: "White uniform with V-neck top (WT) or open-jacket top (ITF), tied with a coloured belt." },
    { name: "Belt (ti)", description: "Coloured belt showing kup rank (10 → 1) or black-belt dan degree (1 → 9)." },
    { name: "Body protector (hogu)", description: "Electronic vest scoring valid trunk kicks — blue for chung, red for hong." },
    { name: "Head guard", description: "Electronic head guard scoring head kicks — mandatory in WT senior since 2009." },
    { name: "Forearm and shin guards", description: "Padded protection under the dobok." },
    { name: "Mouth guard, groin guard, hand guards, foot socks", description: "Additional mandatory WT competition kit." },
  ],
  duration: {
    approximateMinutes: 6,
    structure: "WT senior: best-of-three 2-minute rounds since 2022. ITF: continuous 2 × 2 minutes.",
    note: "1-minute rest between rounds. Point-gap rule ends a round early if a competitor is 12 points ahead.",
  },
  objective: "Score more points than the opponent via clean, controlled kicks and punches to the electronic hogu and head guard, winning the majority of the three 2-minute rounds.",
  matchStructure:
    "Competitors bow, enter the ring, and touch feet (WT rules changed in 2022 to a best-of-three-rounds format). Each round is 2 minutes; the athlete who scores more points wins the round. The best of three rounds wins the bout. Tied rounds are broken by golden-point overtime.",

  basicRules: [
    { title: "Legal targets", body: "Front and sides of the electronic hogu (trunk protector); the electronic head guard's front and sides. Below the belt is illegal." },
    { title: "Legal techniques", body: "Kicks with the foot below the ankle bone; punches with the front of the closed fist. Only hand strikes to the body count; punches to the head are illegal in WT." },
    { title: "Scoring", body: "Punch to body: 1. Body kick: 2. Body spinning kick: 4. Head kick: 3. Head spinning kick: 5. Points-gap ends the round at a 12-point lead (2020 rule)." },
    { title: "Electronic Protector Scoring System (PSS)", body: "Sensors in the hogu and head-guard trigger the score automatically. Since 2009 all WT senior events use PSS." },
    { title: "Video review", body: "Coach may request one instant-replay review per round — successful reviews are retained; unsuccessful ones forfeit the request." },
  ],
  advancedRules: [
    { title: "Kyong-go (warning)", body: "Minor foul — e.g. crossing the boundary line, grabbing, falling. Two kyong-go = 1 point to opponent." },
    { title: "Gam-jeom (deduction)", body: "Major foul — 1 point directly to opponent (e.g. deliberate blow to the face, throwing, punching the head)." },
    { title: "Golden point", body: "If rounds are tied, sudden-death overtime — first score wins. Body kick weighted higher than punch for tiebreaker." },
    { title: "Point gap", body: "Round ends immediately if a competitor leads by 12 points." },
  ],
  scoring: {
    summary: "Points scored electronically. Best of three 2-min rounds wins the bout.",
    breakdown: [
      { action: "Punch to body", points: "1" },
      { action: "Kick to body", points: "2" },
      { action: "Spinning kick to body", points: "4" },
      { action: "Kick to head", points: "3" },
      { action: "Spinning kick to head", points: "5" },
      { action: "Gam-jeom penalty to opponent", points: "1" },
    ],
    winCondition: "Best of three rounds; 12-point gap in a single round; opponent disqualification; retirement; or golden-point overtime.",
  },
  penalties: [
    { title: "Kyong-go (warning)", body: "Two = 1 point to opponent — for crossing boundary line, grabbing, falling, avoiding combat." },
    { title: "Gam-jeom (deduction)", body: "Direct 1 point to opponent — for deliberate face punch, spine attack, or dangerous behaviour." },
    { title: "Disqualification", body: "Ten cumulative penalties in a bout, or a serious safety violation." },
  ],

  officiating: {
    officials: ["Centre referee", "Three or four judges (electronic scoring corroborates)", "Review jury"],
    summary: "The centre referee starts, stops and monitors the bout; the electronic PSS auto-scores kicks/punches, and judges verify head kicks and technical points from ringside.",
  },
  governingBodies: [
    { name: "World Taekwondo", acronym: "WT", founded: 1973, headquarters: "Seoul, South Korea", website: "https://www.worldtaekwondo.org" },
    { name: "International Taekwon-Do Federation", acronym: "ITF", founded: 1966, headquarters: "Vienna, Austria (currently split into three ITFs after 2002)" },
    { name: "Kukkiwon (World Taekwondo Headquarters)", founded: 1972, headquarters: "Seoul, South Korea", website: "https://www.kukkiwon.or.kr" },
  ],
  majorCompetitions: [
    { name: "Summer Olympic Games", frequency: "quadrennial", founded: 2000, region: "worldwide", note: "Full medal sport since Sydney 2000." },
    { name: "World Taekwondo Championships", frequency: "biennial", founded: 1973, region: "worldwide" },
    { name: "World Taekwondo Grand Prix", frequency: "annual", founded: 2013, region: "worldwide" },
    { name: "Asian Games", frequency: "quadrennial", founded: 1986, region: "Asia" },
  ],
  countriesPlayed: ["KR", "IR", "ES", "US", "TR", "MX", "GB", "TH", "CN", "RU", "CI"],
  famousAthletes: [
    "Choi Hong-hi (ITF founder)",
    "Hadi Saei",
    "Steven Lopez",
    "Chen Zhong",
    "Jade Jones",
    "Servet Tazegül",
    "Lee Dae-hoon",
    "Milica Mandić",
    "Panipak Wongpattanakit",
  ],
  records: [
    { title: "Most Olympic taekwondo golds (male)", holder: "Hadi Saei (IRI)", value: "2 (2004, 2008) + bronze", year: 2008 },
    { title: "Most World Championship golds", holder: "Lee Dae-hoon (KOR)", value: "4", year: 2019 },
  ],

  variants: ["itf-taekwondo", "wt-taekwondo", "taekkyeon"],
  relatedSports: ["karate", "kickboxing", "muay-thai", "taekkyeon", "kung-fu-wushu"],

  skills: ["explosive speed", "flexibility", "balance", "spatial awareness", "cardiovascular endurance", "spinning technique"],
  strategies: [
    { title: "Long-range kicking", body: "Use the reach advantage of the leg to score from beyond punching distance." },
    { title: "Cut kick / push kick", body: "Interrupt opponent's forward motion with a straight push-kick to control range." },
    { title: "Head-kick baiting", body: "Draw the opponent to attack, then counter with a rewarding 3- or 5-point head kick." },
    { title: "Point management", body: "In the lead? Circle the perimeter — modern PSS scoring rewards leg speed, not aggression." },
  ],

  terminology: [
    { term: "Dobok", meaning: "The white uniform." },
    { term: "Ti", meaning: "The coloured belt tied around the dobok." },
    { term: "Kup / Dan", meaning: "Coloured-belt rank (10 → 1) then black-belt degree (1 → 9)." },
    { term: "Poomsae", meaning: "Prearranged forms — patterns of movement demonstrating fundamental techniques." },
    { term: "Kyorugi", meaning: "Sparring — the Olympic competition discipline." },
    { term: "Kyekpa", meaning: "Breaking — striking wood/tile boards to demonstrate power." },
    { term: "Chagi", meaning: "Kick — e.g. dollyo-chagi (roundhouse), yop-chagi (side kick), naeryo-chagi (axe kick)." },
    { term: "Jireugi", meaning: "Punch (Korean term)." },
    { term: "Hogu", meaning: "The electronic body protector — scores kicks by pressure sensor." },
    { term: "Kihap", meaning: "The vocal shout accompanying a technique — Korean equivalent of kiai." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Stance and guard", body: "Ap-seogi (walking stance), joochoom-seogi (horse stance), guarding position." },
      { title: "Basic kicks", body: "Ap-chagi (front kick), dollyo-chagi (roundhouse), yop-chagi (side kick), dwi-chagi (back kick)." },
      { title: "First poomsae", body: "Taegeuk Il Jang — the 18-move white-belt form." },
      { title: "Basic hand techniques", body: "Ap-jireugi (front punch), momtong makki (middle block), arae-makki (low block)." },
    ] },
    { level: "intermediate", steps: [
      { title: "Spinning kicks", body: "Bandal-chagi, dwi-huryeo-chagi (spinning hook), 540-degree kicks." },
      { title: "Advanced poomsae", body: "Taegeuk 4-8 Jang; move to the black-belt Palgwae or Yudanja series." },
      { title: "Sparring drills", body: "One-step sparring, three-step sparring, then continuous free sparring (kyorugi)." },
    ] },
    { level: "advanced", steps: [
      { title: "Competition strategy", body: "Ring craft, feint-and-score, head-kick reads under PSS scoring." },
      { title: "Breaking (kyekpa)", body: "Aerial and multi-board breaking for demonstrations and dan gradings." },
      { title: "Dan grading", body: "Poomsae, breaking, sparring and knowledge examination for 1st-4th dan; teaching qualification for higher grades." },
    ] },
  ],
  faq: [
    { question: "Taekwondo vs karate — what's the difference?", answer: "Taekwondo is Korean, kick-heavy (80%+ of scoring) with dramatic aerial and spinning kicks. Karate is Japanese/Okinawan, more even between hands and kicks with a stronger emphasis on kata and short-range strikes." },
    { question: "WT vs ITF — which should I train?", answer: "WT (World Taekwondo) is the Olympic body — if you want to compete at Olympics or major international events, train WT. ITF (International Taekwon-Do Federation) preserves the traditional Choi Hong-hi style with more hand techniques and closer contact." },
    { question: "How many weight classes at the Olympics?", answer: "Eight — four for men (-58, -68, -80, +80 kg) and four for women (-49, -57, -67, +67 kg). Non-Olympic events use eight weight classes per gender." },
    { question: "Is taekwondo effective for self-defence?", answer: "Elite taekwondoin have devastating kicks but limited hand and grappling training in Olympic-style competition. Many practitioners cross-train boxing/BJJ for a more complete self-defence base." },
  ],

  wikipediaTitle: "Taekwondo",
  sources: [
    { label: "Wikipedia — Taekwondo", url: "https://en.wikipedia.org/wiki/Taekwondo", publisher: "Wikipedia" },
    { label: "World Taekwondo — Competition Rules", url: "https://www.worldtaekwondo.org/rules/", publisher: "World Taekwondo" },
    { label: "Kukkiwon — Poomsae Standards", url: "https://www.kukkiwon.or.kr", publisher: "Kukkiwon" },
  ],
  lastVerified: "2026-08-24",
  confidence: "community",
  sportSpecific: {
    olympicWeightClasses: {
      men: ["-58 kg", "-68 kg", "-80 kg", "+80 kg"],
      women: ["-49 kg", "-57 kg", "-67 kg", "+67 kg"],
    },
    majorStyles: ["WT (Kukkiwon, Olympic)", "ITF (Choi Hong-hi tradition)", "Global Taekwondo Federation"],
  },
};
