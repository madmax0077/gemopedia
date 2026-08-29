import type { Sport } from "@/lib/types";

export const truco: Sport = {
  id: "truco",
  slug: "truco",
  name: "Truco",
  officialName: "Truco (Argentine + Brazilian + Uruguayan)",
  aliases: ["Truco Argentino", "Truco Brasileiro", "Truco Uruguayo", "Truque"],
  shortDescription:
    "South American 3-card trick-taking game with signature 'truco' escalation bidding + facial signals ('señas') between partners — Argentina + Brazil + Uruguay's most iconic card game; bar + café + family culture staple.",
  longDescription:
    "Truco is the dominant card game of Argentina, Uruguay, and southern Brazil (Rio Grande do Sul, called 'Truco Brasileiro' or 'Truque'), with strong scenes also in Paraguay + Peru. A 3-card trick-taking game played with 40-card Spanish or Italian deck, Truco features TWO signature elements that make it culturally unique: (1) FLOR + ENVIDO bidding (based on card combinations in hand) before trick play, (2) TRUCO escalation bidding during trick play (Truco → Retruco → Vale-Cuatro, each doubling stakes), and (3) SEÑAS — small facial signals (raised eyebrow = ace, wink = seven, etc.) between partners to communicate hand strength. Partnership bluffing + psychological play define Truco. Argentinian Truco (2 or 4 players) uses full envido/flor rules; Brazilian Truco (Truque) simplifies to trick-only bidding. National championships in Argentina + Brazil + Uruguay; annual World Truco Championship since 2010. Bar + café + family game — one of the highest-participation card games in South America.",

  category: "card-games",
  subCategory: "trick-taking card game (bid + signals + partnership)",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isOlympic: false,
  isParalympic: false,
  isProfessional: true,
  season: "year-round",
  era: "early-modern",
  popularity: "regional",
  countryOfOrigin: "ES",
  regionOfOrigin: "Spain (evolved from Spanish Truque game 16th century); adopted + evolved in Argentina + Brazil + Uruguay 19th-20th century",
  estimatedOrigin: "Spanish Truque 16th century; Argentinian Truco codified 19th century; Brazilian Truco variant developed 1900s; World Truco Championship 2010+",

  players: { min: 2, max: 6, note: "2v2 partnership (most common) or 4-player + 6-player variants; 1v1 for casual." },
  equipment: [
    { name: "40-card Spanish or Italian deck", description: "Deck removes 8s, 9s, 10s from standard 52; four suits (Espadas / Bastos / Copas / Oros = Swords / Clubs / Cups / Coins)." },
    { name: "Card ranking (Truco order — unusual)", description: "Ranking: Ace of Swords > Ace of Clubs > 7 of Swords > 7 of Coins > 3s > 2s > Aces (non-black) > Kings > Queens > Jacks > 7 (non-black) > 6s > 5s > 4s. This is not the standard suit ranking!" },
    { name: "Score chips or pad", description: "Track partnership scores." },
  ],
  duration: { approximateMinutes: 45, structure: "Match to 30 pts ('malas' + 'buenas' halves); ~10-15 rounds = 30-90 min." },
  objective: "First partnership to reach target score (30 pts standard, sometimes 15 or 24) wins match.",
  matchStructure: "Deal 3 cards each → optional Envido/Flor bid → trick play with Truco escalation bidding → resolve stakes → repeat until target reached.",

  basicRules: [
    { title: "Deal 3 cards to each player", body: "3 cards per player from 40-card deck." },
    { title: "Envido / Flor bidding (pre-trick)", body: "Players may bid Envido (based on 2 same-suit cards' point sum) or Flor (all 3 same suit); highest-value hand wins Envido/Flor points." },
    { title: "Truco escalation (during tricks)", body: "Any player can call 'Truco!' → tricks worth 2 pts (base 1); opponent may accept, decline (lose 1), or escalate to 'Retruco!' (3 pts), 'Vale-Cuatro!' (4 pts)." },
    { title: "Play 3 tricks", body: "Standard trick play; highest card wins (using unusual Truco card ranking)." },
    { title: "Win 2 of 3 tricks = win round", body: "Best-of-3 trick outcome + Truco escalation determine round score." },
    { title: "Señas (partner signals)", body: "Small facial signals convey hand strength: raised eyebrow = have Ace, wink = have 7, twitched nose = have 3, etc. Regional signal conventions vary." },
  ],
  advancedRules: [
    { title: "Envido point calculation", body: "2 cards same suit: pips of both + 20 = envido score. Higher envido wins bidding." },
    { title: "Flor", body: "All 3 cards same suit = Flor; automatic +3 pts; can be counter-bid up to Contra-Flor + resto." },
    { title: "Mentir (bluff)", body: "Deliberately calling Truco with weak hand to force opponent decline; core Truco psychology." },
    { title: "Bluff via señas", body: "Fake facial signal to trick opponents into folding when your hand is actually weak." },
    { title: "Malas y Buenas", body: "Score divided into first-half (Malas, 0-15) + second-half (Buenas, 16-30); different psychology per half." },
  ],
  scoring: {
    summary: "Envido/Flor pts + trick+truco pts accumulated; first to 30 wins.",
    winCondition: "First partnership to 30 pts wins.",
    breakdown: [
      { action: "Envido (2 same-suit)", points: "2 (base); 3 if declined (falta envido)" },
      { action: "Flor (3 same-suit)", points: "3 (base)" },
      { action: "Contra-Flor (respond to Flor)", points: "6 (all remaining pts to end game)" },
      { action: "Round without truco call (win 2 of 3 tricks)", points: "1" },
      { action: "Truco won", points: "2" },
      { action: "Retruco won", points: "3" },
      { action: "Vale-Cuatro won", points: "4" },
      { action: "Truco declined", points: "1 (bidder wins)" },
    ],
  },
  penalties: [
    { title: "Renege (failure to follow suit)", body: "Round loss + potential 4-pt penalty." },
    { title: "Revealed cards (accidentally showing)", body: "Round penalty." },
    { title: "Illegal señas (some tournaments)", body: "Casual play allows señas; formal tournaments may restrict." },
  ],

  positions: [
    { name: "Partner (2 per team)", role: "Partners across table; use señas to signal hand strength.", count: 2 },
  ],
  officiating: {
    officials: ["Self-refereed (casual + tournament)"],
    summary: "Casual play + most tournaments self-refereed; disputes rare due to well-known rules.",
  },

  governingBodies: [
    { name: "Confederación Argentina de Truco", founded: 1980, headquarters: "Buenos Aires, Argentina" },
    { name: "Confederação Brasileira de Truco", founded: 1990, headquarters: "Porto Alegre, Brazil" },
    { name: "Federación Uruguaya de Truco", founded: 1985, headquarters: "Montevideo, Uruguay" },
  ],
  majorCompetitions: [
    { name: "World Truco Championship", frequency: "annual", founded: 2010, region: "rotating South America (Argentina + Brazil + Uruguay)" },
    { name: "Argentine National Truco Championship", frequency: "annual", founded: 1980, region: "Argentina" },
    { name: "Brazilian Truco (Truque) National Championship", frequency: "annual", founded: 1990, region: "Rio Grande do Sul, Brazil" },
    { name: "Uruguayan National Championship", frequency: "annual", founded: 1985, region: "Uruguay" },
  ],
  countriesPlayed: ["AR", "BR", "UY", "PY", "PE", "CL", "BO", "ES (Spanish origins)"],
  famousAthletes: [
    "Various Argentine + Brazilian national champions",
    "Culturally embedded rather than star-driven; every South American café has a 'truco master'",
    "Popular characters in Argentine + Brazilian films + telenovelas play truco as social scene",
  ],
  records: [
    { title: "Largest South American card game participation", holder: "Truco", value: "Estimated 30M+ regular players in Argentina + Brazil + Uruguay + Paraguay; largest card game participation in Southern Cone", year: 2023 },
    { title: "Café / bar cultural embedding", holder: "Truco", value: "Traditional afternoon truco games are cultural institutions in every Argentine + Uruguayan + southern Brazilian bar + café", year: 2024 },
    { title: "Regional variant depth", holder: "Truco family", value: "10+ regional variants: Truco Argentino (with Flor), Truco Brasileiro (simpler), Truco Uruguayo (own conventions), Truque Paulista, and provincial variants", year: 2020 },
  ],

  variants: ["truco-argentino-full-envido-flor-standard", "truco-brasileiro-truque-simpler-no-flor", "truco-uruguayo-own-conventions", "truque-paulista-brazilian-sao-paulo-variant", "truco-6-players-3v3-partnership"],
  relatedSports: ["envido", "brisca", "briscola", "tresette", "spanish-tute"],

  skills: ["Truco card ranking memorization (unusual order)", "envido/flor calculation (2- or 3-card suit combinations)", "señas mastery (facial signal system)", "bluffing (mentir con truco)", "partnership signaling + response", "psychological play (reading opponents' bluffs)"],
  strategies: [
    { title: "Truco with weak hand (bluff)", body: "Bluff by calling Truco with weak hand; opponents may decline out of caution → win the 1 pt. Core Truco psychology." },
    { title: "Response to Truco: accept, decline, or escalate", body: "Accept = play for 2 pts; decline = lose 1 pt; escalate to Retruco = you take initiative + play for 3 pts." },
    { title: "Envido reveals hand info", body: "Envido bidding reveals partial hand info (2 same-suit cards + rough points); balance information leak vs. envido score." },
    { title: "Señas awareness (both offense + defense)", body: "Master your own señas to communicate + read opponents' señas; watch for tells." },
    { title: "First-trick sacrifice for third-trick win", body: "Sacrifice lowest card to first trick if you have strong 2nd + 3rd cards; force opponent to play higher cards early." },
  ],

  terminology: [
    { term: "Truco", meaning: "Escalation bid raising round stakes to 2 pts; declineable." },
    { term: "Retruco", meaning: "Counter-escalation to 3 pts." },
    { term: "Vale-Cuatro", meaning: "Final escalation to 4 pts." },
    { term: "Envido", meaning: "Pre-trick bid based on 2 same-suit cards' point sum." },
    { term: "Flor", meaning: "3 same-suit cards; auto +3 pts + can be counter-bid." },
    { term: "Señas", meaning: "Facial signals between partners." },
    { term: "Mentir", meaning: "To lie / bluff (Spanish); calling Truco with weak hand." },
    { term: "Malas y Buenas", meaning: "First-half + second-half of match (0-15 + 16-30)." },
  ],

  learningPaths: [
    { level: "beginner", steps: [
      { title: "Learn Truco card ranking first (unusual)", body: "Ace of Swords > Ace of Clubs > 7 of Swords > 7 of Coins > 3s > 2s > Aces (rest) > Kings > Queens > Jacks > lower. Not intuitive!" },
      { title: "Play with South American friends or in a Buenos Aires café", body: "Argentina + Brazil + Uruguay have thousands of café + bar Truco tables." },
      { title: "Start with Truco Brasileiro (simpler)", body: "Skip Flor + Envido complications; learn Truco escalation + trick play first." },
    ]},
    { level: "advanced", steps: [
      { title: "Master señas system with partner", body: "Practice facial signals + counter-signals; regional signal conventions vary." },
      { title: "Compete in Argentine or Brazilian national championships", body: "Confederación Argentina + Confederação Brasileira de Truco host annual national events." },
      { title: "World Truco Championship (annual)", body: "Rotating between Argentina, Brazil, and Uruguay; open to international competitors." },
    ]},
  ],

  faq: [
    { question: "What are 'señas'?", answer: "Señas are small facial signals used by partners to communicate hand strength without speaking. Standard señas include: raised eyebrow = 'I have an Ace of Swords or Clubs', wink = 'I have a 7', twitched mouth = 'I have a 3', shrug = 'weak hand'. Regional conventions vary — Argentine señas differ slightly from Brazilian. Señas are legitimate in casual play + most tournaments; some formal events restrict them." },
    { question: "How is Truco Brasileiro different from Truco Argentino?", answer: "Truco Brasileiro (also 'Truque') is simpler: no Envido or Flor bidding, just Truco escalation during trick play. Truco Argentino includes complex Envido (2 same-suit bidding) + Flor (3 same-suit) bidding phases before tricks. Argentine version is strategically deeper; Brazilian version is faster + more casual. Both share core Truco escalation + señas culture." },
    { question: "How popular is Truco in South America?", answer: "Extremely — Truco is the dominant card game across Argentina, Uruguay, Paraguay, and southern Brazil (Rio Grande do Sul). Estimated 30M+ regular players. Café + bar afternoon Truco games are cultural institutions; family Truco nights are weekly across the region. National championships in each country + annual World Truco Championship rotate between the top nations." },
  ],

  wikipediaTitle: "Truco",
  sources: [
    { label: "Wikipedia — Truco", url: "https://en.wikipedia.org/wiki/Truco", publisher: "Wikipedia" },
    { label: "Pagat.com — Truco Argentino", url: "https://www.pagat.com/put/truco_arg.html", publisher: "Pagat" },
  ],
  lastVerified: "2026-08-29",
  confidence: "verified",
};
