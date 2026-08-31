import type { Sport } from "@/lib/types";

export const tarotFrench: Sport = {
  id: "tarot-french",
  slug: "tarot-french",
  name: "French Tarot (Jeu de Tarot)",
  officialName: "Fédération Française de Tarot (FFT)",
  aliases: ["Jeu de Tarot", "Tarot Français", "French Tarot Nouveau"],
  shortDescription:
    "Popular French trick-taking card game using 78-card Tarot Nouveau deck (52 standard + 4 additional queens + 21 numbered trumps + Excuse) — most-played card game in France; 3/4/5 players; bidding-based with strategy comparable to Bridge; FFT tournament circuit since 1973.",
  longDescription:
    "French Tarot (Jeu de Tarot) is the most-played card game in France (~5-10 million players) and one of the classic trick-taking games of Europe, distinct from divination tarot despite sharing the deck. Played with the 78-card Tarot Nouveau deck (French Tarot design) — 4 suits × 14 cards (Ace through 10 + Jack + Knight + Queen + King) + 21 numbered trump cards (called 'Atouts' 1-21) + 1 special card called L'Excuse (Fool). Played with 3, 4, or 5 players (5-player = classical form with 2 partnerships forming dynamically each hand). Bidding phase: players bid to be the Preneur (declarer taker) at increasing contract levels: Prise → Garde → Garde Sans (le chien) → Garde Contre (le chien). Higher bids = higher stakes + higher scoring/loss. Preneur plays alone against remaining players; if 5-player game, Preneur may 'call the King' (name a specific king, whoever holds it becomes secret ally for that hand). Card-point scoring based on face cards: King=4.5, Queen=3.5, Knight=2.5, Jack=1.5, all other cards=0.5. Preneur needs specific point threshold based on Bouts (special cards: Excuse, Trump 1 'Petit', Trump 21 'Monde') held: with 3 Bouts need 36 pts, 2 Bouts=41, 1 Bout=51, 0 Bouts=56. Governing body: Fédération Française de Tarot (FFT, founded 1973). FFT French Championships annual + European Championships (with Belgian, Swiss federations). Approximately 12,000 FFT federated club members + estimated 5-10 million casual players nationally. Considered by aficionados to have strategic depth on par with Bridge.",
  category: "card-games",
  subCategory: "78-card French trick-taking bidding game",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "19th-century", popularity: "regional",
  countryOfOrigin: "FR",
  regionOfOrigin: "France (developed from Italian tarocchi ~1500s; French Tarot Nouveau standardized 1930s)",
  estimatedOrigin: "Descended from Italian tarocchi ~15th century; French Tarot Nouveau deck design 1930s; FFT federation 1973",
  players: { min: 3, max: 5, note: "3, 4, or 5 players — 5-player game is classical form (with dynamic partnerships)." },
  equipment: [{ name: "78-card Tarot Nouveau deck", description: "56 standard cards (4 suits × 14 including Knight) + 21 numbered trump 'Atouts' + Excuse (Fool)." }, { name: "Score sheet + pen", description: "Complex scoring; typically hand-tracked." }, { name: "Card table + 3-5 chairs", description: "Standard card table setup." }],
  duration: { approximateMinutes: 90, structure: "Tournament session: 8-16 hands ~1-2 hours; casual game: 4-8 hands ~1 hour." },
  objective: "Preneur (declarer taker) tries to reach point threshold based on Bouts held; defenders try to prevent it.",
  matchStructure: "Each hand: (1) Deal, (2) Bidding, (3) 'Chien' (kitty) reveal, (4) Preneur discards to chien, (5) 18-trick play, (6) Score calculation.",
  basicRules: [
    { title: "Bidding: Prise → Garde → Garde Sans → Garde Contre", body: "Progressive bid levels; higher bid = higher scoring multiplier." },
    { title: "Preneur takes chien (kitty)", body: "Winning bidder takes 6-card chien into hand + discards 6 cards face-down (Garde Sans/Contre = chien untouched)." },
    { title: "Trumps (Atouts) can only be played to trump", body: "Must follow suit if possible; if not, must play trump if held." },
    { title: "Point threshold based on Bouts held", body: "Preneur needs 36/41/51/56 points depending on 3/2/1/0 Bouts held." },
  ],
  advancedRules: [
    { title: "L'Excuse — Fool card special", body: "Excuse can never be captured; played as inability to follow suit + returns to your team." },
    { title: "Petit au bout", body: "Winning last trick with Petit (Trump 1) = +10 bonus points; losing Petit at last = -10 points." },
    { title: "Handful (Poignée) — showing large trump hand", body: "Player holding 10+ trumps can declare 'Poignée' for bonus points." },
    { title: "Chelem (Slam)", body: "Winning all 18 tricks = huge bonus; declared or not." },
    { title: "5-player: 'Call the King' partnership", body: "Preneur names a King; whoever holds it becomes secret ally for that hand." },
  ],
  scoring: {
    summary: "Base score depends on gap between required + actual points × contract level multiplier (Prise=1, Garde=2, Garde Sans=4, Garde Contre=6); + bonuses (Petit au bout, Poignée, Chelem).",
    winCondition: "Highest cumulative points at end of session.",
    breakdown: [{ action: "Contract fulfilled", points: "(25 + point difference) × multiplier" }, { action: "Petit au bout (winning last with Petit)", points: "+10 × multiplier" }, { action: "Chelem (all 18 tricks)", points: "+200 (undeclared) or +400 (declared)" }],
  },
  positions: [{ name: "Preneur (Declarer taker)", role: "Winning bidder plays solo.", count: 1 }, { name: "Défenseurs (Defenders)", role: "All other players form ad-hoc defense.", count: 3 }, { name: "Dealer (rotating)", role: "Deals cards.", count: 1 }],
  officiating: { officials: ["Tournament Director", "Table Judges"], summary: "FFT certified officials at major events." },
  governingBodies: [{ name: "Fédération Française de Tarot (FFT)", founded: 1973, headquarters: "Nemours, France" }, { name: "Fédération Européenne de Tarot", founded: 1988, headquarters: "Europe (multi-country)" }],
  majorCompetitions: [{ name: "Championnat de France de Tarot (FFT French Championship)", frequency: "annual", founded: 1973, region: "France (rotating)" }, { name: "European Tarot Championship", frequency: "biennial", founded: 1988, region: "Europe (FRA/BEL/CHE/ITA)" }, { name: "Grand Prix FFT circuit", frequency: "monthly", founded: 1980, region: "France" }],
  countriesPlayed: ["FRA (dominant, ~5-10M players)", "BEL", "CHE (Suisse Romande)", "CAN (Quebec)"],
  famousAthletes: ["Jean-Marie Muller (FFT multi-time French Champion)", "FFT club champions rotating annually"],
  records: [
    { title: "5-10M French players — most-played card game in France", holder: "FFT / French card-playing public", value: "Estimated 5-10 million active tarot players in France — most-played card game nationally", year: 2024 },
    { title: "FFT founded 1973", holder: "Fédération Française de Tarot", value: "FFT founded 1973 to standardize French Tarot rules + run tournaments nationally", year: 1973 },
  ],
  variants: ["french-tarot-standard-4-player-fft", "french-tarot-5-player-classical", "french-tarot-3-player-family", "italian-tarocchi-cognate", "german-königrufen-cognate", "hungarian-tarokk-cognate"],
  relatedSports: ["bridge", "skat-german", "pinochle", "italian-tarocchi"],
  skills: ["bidding valuation", "counting trumps + bouts", "partnership signaling (defenders)", "Chien management (which cards to discard)", "endgame trump-count"],
  strategies: [
    { title: "Contract selection based on Bouts + trumps", body: "Higher bids (Garde Sans/Contre) profitable only with very strong trump hand or when 'Chien' is expected weak." },
    { title: "Defender signals via card-play", body: "Defenders coordinate via which cards they follow with — signaling long/short suits." },
  ],
  wikipediaTitle: "French Tarot",
  sources: [{ label: "Wikipedia — French Tarot", url: "https://en.wikipedia.org/wiki/French_Tarot", publisher: "Wikipedia" }, { label: "FFT official", url: "https://www.fftarot.fr", publisher: "Fédération Française de Tarot" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default tarotFrench;
