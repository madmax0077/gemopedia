import type { Sport } from "@/lib/types";

export const luchaLibre: Sport = {
  id: "lucha-libre",
  slug: "lucha-libre",
  name: "Lucha Libre",
  officialName: "Lucha Libre Mexicana",
  aliases: ["Mexican Wrestling", "Lucha", "Mexican Pro Wrestling"],
  shortDescription:
    "Mexican professional wrestling with iconic COLORED MASKS + high-flying aerial acrobatics + choreographed morality plays (Técnicos = good guys vs. Rudos = bad guys) + tag-team specialty. Second-largest pro wrestling market globally after WWE.",
  longDescription:
    "Lucha Libre is Mexican professional wrestling — a distinctive style featuring iconic COLORED MASKS (máscaras), high-flying aerial + acrobatic maneuvers (planchas, huracanranas, tope suicidas), and choreographed morality-play storytelling (Técnicos = heroes / Rudos = villains). Distinct from WWE-style American wrestling by its emphasis on aerial techniques, faster-paced smaller-fighter divisions, mask-vs-mask ('máscara contra máscara') matches where losing = unmasking + massive cultural humiliation, and family lineage (multi-generation lucha families: El Santo → El Hijo del Santo; Rey Mysterio Sr → Rey Mysterio Jr.). Two dominant promotions: CMLL (Consejo Mundial de Lucha Libre, founded 1933 — world's oldest active pro wrestling company) and AAA (Lucha Libre AAA Worldwide, founded 1992). El Santo (Rodolfo Guzmán Huerta, 1917-1984) is the sport's iconic figurehead — masked luchador + movie star + cultural symbol of Mexico. Second-largest pro wrestling market globally after WWE.",

  category: "combat-sports",
  subCategory: "professional wrestling (Mexican tradition)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "20th-century",
  popularity: "regional",
  countryOfOrigin: "MX",
  regionOfOrigin: "Mexico City, Mexico (formalized 1933 by Salvador Lutteroth; oldest continuous pro wrestling in world via CMLL)",
  estimatedOrigin: "1933 CMLL founded by Salvador Lutteroth (originally EMLL); El Santo debuted 1942; golden age 1950s-1990s; AAA founded 1992; modern era 2000s+ US crossover (Rey Mysterio → WWE)",

  players: { min: 1, max: 8, note: "Singles matches; tag team (2v2); trios (3v3 — signature Mexican format); atomicos (4v4); battle royals." },
  equipment: [
    { name: "Máscara (mask)", description: "Iconic colored mask covering entire face; luchador identity; losing mask in máscara contra máscara = career-defining humiliation." },
    { name: "Wrestling gear", description: "Colorful tights, boots, kneepads; distinctive per luchador character." },
    { name: "Wrestling ring", description: "Standard pro wrestling ring; some variants use hexagonal AAA ring." },
  ],
  duration: { approximateMinutes: 15, structure: "Singles/tag: 1-fall or 2-of-3 falls; trios: 2-of-3 falls (signature Mexican format); no time limit typically." },
  objective: "Win match via pin (3-count on shoulders), submission, count-out, or DQ; special: 'máscara contra máscara' = win by removing opponent's mask.",
  matchStructure: "Traditional Mexican format: 2-of-3 falls (dos de tres caídas) for singles + trios. First to 2 falls wins.",

  basicRules: [
    { title: "2-of-3 falls format (traditional)", body: "Best-of-3 pins/submissions; first to 2 falls wins. WWE-style 1-fall matches also common in modern era." },
    { title: "Pin = 3-count on both shoulders", body: "Referee counts to 3 while opponent's shoulders on mat." },
    { title: "Submission = opponent taps or verbally submits", body: "Standard combat sports submission." },
    { title: "Máscara (mask) rules", body: "Removing opponent's mask = automatic DQ (unless in máscara contra máscara match)." },
    { title: "Aerial + technical style", body: "Emphasis on planchas (dive attacks), huracanranas (leg-scissors takedowns), tope suicidas (suicide dives over top rope)." },
  ],
  advancedRules: [
    { title: "Máscara contra máscara (mask vs. mask)", body: "Highest-stakes match: loser unmasked live, reveals identity, career-defining humiliation. Career-endingly rare." },
    { title: "Cabellera contra cabellera (hair vs. hair)", body: "Loser's head shaved bald post-match; alternative stakes match for unmasked luchadors." },
    { title: "Máscara contra cabellera", body: "Masked luchador puts mask on line vs. unmasked opponent's hair." },
    { title: "Técnicos vs. Rudos", body: "Morality dichotomy: técnicos (heroes) follow rules; rudos (villains) cheat + rulebreak. All storylines flow through técnico/rudo dichotomy." },
    { title: "Trios (6-person tag) format", body: "Signature Mexican format: 3v3 tag; more common than 2v2 tag in CMLL programming." },
    { title: "Family lineage tradition", body: "Multi-generation lucha families: El Santo → El Hijo del Santo → El Nieto del Santo; Rey Mysterio Sr. → Rey Mysterio Jr. (WWE); Blue Demon Sr. → Blue Demon Jr." },
  ],
  scoring: {
    summary: "Win = 2 falls (traditional) or 1 fall (modern); championship matches have specific title stipulations.",
    winCondition: "Pin, submission, count-out, DQ, or (in mask/hair matches) removal of mask / haircut.",
    breakdown: [
      { action: "Pin fall", points: "1 fall" },
      { action: "Submission", points: "1 fall" },
      { action: "Count-out (opponent outside ring 20-count)", points: "1 fall" },
    ],
  },
  penalties: [
    { title: "Unauthorized mask removal", body: "DQ + potential fine + suspension." },
    { title: "Weapon use (unless stipulation)", body: "DQ." },
    { title: "Interference from outside", body: "DQ possible depending on stipulation." },
  ],

  positions: [
    { name: "Luchador (wrestler)", role: "Executes wrestling moves + storyline character.", count: 1 },
    { name: "Técnico (hero)", role: "Follows rules; heroic character; often high-flyer.", count: 1 },
    { name: "Rudo (villain)", role: "Cheats + rulebreaks + antagonistic character; often powerhouse.", count: 1 },
  ],
  officiating: {
    officials: ["Referee (in-ring)", "Ring announcer + commentator team"],
    summary: "1 referee in ring counting pins + enforcing rules; storyline may include corrupt referees.",
  },

  governingBodies: [
    { name: "Consejo Mundial de Lucha Libre (CMLL)", founded: 1933, headquarters: "Mexico City, Mexico", website: "https://www.cmll.com" },
    { name: "Lucha Libre AAA Worldwide (AAA)", founded: 1992, headquarters: "Mexico City, Mexico", website: "https://www.luchalibreaaa.com" },
    { name: "Comisión de Box y Lucha Libre (Mexico City regulatory body)", founded: 1933, headquarters: "Mexico City" },
  ],
  majorCompetitions: [
    { name: "CMLL 90 Aniversario (annual anniversary show)", frequency: "annual", founded: 1934, region: "Arena México, Mexico City" },
    { name: "AAA TripleMania (annual mega-event)", frequency: "annual", founded: 1993, region: "rotating Mexican arenas" },
    { name: "CMLL weekly shows at Arena México", frequency: "weekly (Friday)", founded: 1956, region: "Mexico City" },
    { name: "AEW/AAA + CMLL cross-promotional events", frequency: "regular (2020s+)", founded: 2020, region: "USA + Mexico" },
  ],
  countriesPlayed: ["MX", "US (Southwest + Latino markets)", "JP", "PR", "CU", "GT", "CO", "PE", "AR", "ES"],
  famousAthletes: [
    "El Santo / Rodolfo Guzmán Huerta (Mexico, 1942-1984 career; iconic masked figure + movie star; cultural symbol of Mexico)",
    "Blue Demon / Alejandro Muñoz (Mexico, El Santo's rival; iconic masked luchador)",
    "Mil Máscaras / Aarón Rodríguez (Mexico, 'Man of 1000 Masks'; global crossover)",
    "El Hijo del Santo (Mexico, El Santo's son; carried the mask 1980s+)",
    "Rey Mysterio Sr. + Rey Mysterio Jr. (Mexico → WWE crossover; iconic 619 leg-scissors)",
    "Konnan (Mexico → WCW crossover; also promoter)",
    "Perro Aguayo Jr. (Mexico, killed 2015 in-ring accident)",
    "L.A. Park (Mexico, 'La Parka' character; iconic skeleton mask)",
  ],
  records: [
    { title: "Oldest active professional wrestling company", holder: "CMLL", value: "Founded 1933 by Salvador Lutteroth (originally EMLL); 90+ years continuous operation — oldest active pro wrestling company in world", year: 2024 },
    { title: "Second-largest pro wrestling market globally", holder: "Mexico (Lucha Libre)", value: "Behind only WWE (US); estimated 1M+ live event attendance annually across CMLL + AAA + independent circuits", year: 2023 },
    { title: "El Santo cultural iconography", holder: "El Santo", value: "Buried in silver mask; culturally on par with Diego Rivera + Frida Kahlo as symbol of Mexican identity", year: 1984 },
  ],

  variants: ["cmll-traditional-2-of-3-falls", "aaa-modern-1-fall-wwe-style", "mascara-contra-mascara-stakes-match", "cabellera-contra-cabellera-hair-vs-hair", "trios-6-person-tag-signature-mexican", "reyes-y-reinas-battle-royal", "lucha-underground-us-tv-hybrid-variant"],
  relatedSports: ["professional-wrestling", "puroresu", "wwe", "aew", "lucha-underground"],

  skills: ["aerial acrobatics (planchas + huracanranas + tope suicidas)", "technical wrestling (chain wrestling + submissions)", "character work (técnico or rudo persona)", "high-work rate (fast-paced Mexican style)", "storytelling in ring", "mic work + promo skills"],
  strategies: [
    { title: "Aerial finisher culture", body: "Signature high-flying finishers (frog splash, moonsault, huracanrana) define luchador brand." },
    { title: "Character consistency", body: "Técnico or rudo alignment must be consistent across matches + interviews + storylines." },
    { title: "Trios team chemistry", body: "3-person tag matches require synchronized aerial + tag sequences." },
    { title: "Mask preservation", body: "Never lose mask; máscara defines identity + career. Losing mask = career-defining moment." },
  ],

  terminology: [
    { term: "Luchador / Luchadora", meaning: "Professional wrestler (male / female)." },
    { term: "Máscara", meaning: "The mask — iconic identity marker." },
    { term: "Técnico", meaning: "Hero / babyface wrestler." },
    { term: "Rudo", meaning: "Villain / heel wrestler." },
    { term: "Trios", meaning: "6-person tag match (3v3)." },
    { term: "Plancha", meaning: "Cross-body dive attack." },
    { term: "Huracanrana", meaning: "Leg-scissors takedown / pinning combination." },
    { term: "Tope suicida", meaning: "Suicide dive over top rope onto opponent outside ring." },
    { term: "Máscara contra máscara", meaning: "Mask-vs-mask stakes match." },
    { term: "Cabellera", meaning: "Hair (in hair-vs-hair matches)." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Train at Mexican lucha school (CMLL or AAA + independents)", body: "CMLL runs official training school in Mexico City; AAA + independents also train." },
      { title: "Debut on Mexican independent circuit", body: "Small arenas across Mexico serve as pipeline before CMLL/AAA signing." },
      { title: "Develop character + mask identity", body: "Character work + mask design + persona are as important as wrestling skill." },
    ]},
    { level: "advanced", steps: [
      { title: "Sign with CMLL or AAA", body: "Two dominant Mexican promotions; sign long-term contracts + weekly TV." },
      { title: "US crossover (WWE, AEW, ROH)", body: "US promotions actively recruit lucha talent (Rey Mysterio, Alberto El Patrón, Andrade, Konnan)." },
      { title: "Japanese puroresu circuit (NJPW, DDT)", body: "Japan has strong lucha appreciation; NJPW hosts CMLL crossover shows." },
    ]},
  ],

  faq: [
    { question: "What's the significance of masks in Lucha Libre?", answer: "Masks (máscaras) are the defining visual + cultural element of Lucha Libre. Masks give luchadors alter-ego identity — many maintain complete separation between civilian identity + masked persona (El Santo was buried in his silver mask). Losing a mask in a máscara contra máscara stakes match is career-defining humiliation. Mask designs are trademarked + iconic (Santo silver, Blue Demon blue, La Parka skeleton)." },
    { question: "How does Lucha Libre differ from WWE-style wrestling?", answer: "Lucha emphasizes: (1) MASKS + character identity, (2) HIGH-FLYING aerial acrobatics + fast-paced work, (3) TRIOS format (6-person tag) as signature, (4) 2-of-3 FALLS matches, (5) MÁSCARA/CABELLERA stakes matches. WWE is more powerhouse-focused, character-driven, 1-fall matches. Both are choreographed pro wrestling but with distinct styles + cultures." },
    { question: "Is Lucha Libre 'real'?", answer: "Lucha Libre is a scripted performance art (like all professional wrestling) — outcomes are pre-determined + storylines are planned. However, the AERIAL MOVES + PHYSICAL DEMANDS are absolutely real: luchadors sustain career-ending injuries + occasional deaths (Perro Aguayo Jr. 2015). Athletic skill is elite even though outcomes are scripted." },
  ],

  wikipediaTitle: "Lucha libre",
  sources: [
    { label: "CMLL", url: "https://www.cmll.com", publisher: "Consejo Mundial de Lucha Libre" },
    { label: "AAA", url: "https://www.luchalibreaaa.com", publisher: "Lucha Libre AAA Worldwide" },
    { label: "Wikipedia — Lucha libre", url: "https://en.wikipedia.org/wiki/Lucha_libre", publisher: "Wikipedia" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
