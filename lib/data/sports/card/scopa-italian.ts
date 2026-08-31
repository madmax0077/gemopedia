import type { Sport } from "@/lib/types";

export const scopaItalian: Sport = {
  id: "scopa-italian",
  slug: "scopa-italian",
  name: "Scopa (Italian Fishing Card Game)",
  officialName: "Federazione Italiana Gioco Scopa (FIGS)",
  aliases: ["Scopa", "Italian Sweep", "Scopone"],
  shortDescription:
    "Italy's most-played traditional card game — 40-card Italian deck; players 'sweep' (scopa) captured cards from center table; 2-player or 4-player partnership; scoring based on captured cards + 7 of coins ('settebello'); centuries-old Neapolitan origins; core Italian family + cafe pastime.",
  longDescription:
    "Scopa (Italian for 'broom') is Italy's most-played traditional card game — a fishing game (players 'fish' cards from center table by matching hand cards to totals) with signature 'sweep' bonus. Uses distinctive 40-card Italian deck (or Spanish deck) with four suits: Coins (Denari/Ori), Cups (Coppe), Swords (Spade), Clubs (Bastoni) — 10 cards per suit numbered 1-7 + three face cards Fante (Jack, value 8), Cavallo (Knight, 9), Re (King, 10). Traces to 17th century Naples; codified rules early 19th century; played across all Italy today with strong regional variants. Basic 2-player rules: (1) Deal 3 cards to each player + 4 face-up to center table; (2) On your turn, play one card from hand — if it matches value of a center card OR equals sum of multiple center cards, you capture all those cards + your played card into face-down capture pile; (3) If no match, played card stays on center; (4) Sweeping table clean = 'Scopa' = 1 bonus point; (5) When hands empty, deal 3 more; (6) When deck empty, last player to capture takes remaining center cards. Final scoring counted at end (called 'primiera'): (a) 1 point most cards captured (Carte); (b) 1 point most coins captured (Denari); (c) 1 point capturing 7 of Coins (Settebello — 'the beautiful seven'); (d) 1 point highest 'Primiera' score (best card of each suit — the 7s valued 21, other cards specific values); (e) 1 point per Scopa sweep. Game to 11 or 21 points. Variants: (i) Scopone Scientifico — 4-player partnership, 10 cards each (no center to start with), most scientific + tournament version; (ii) Scopa d'Assi — Aces sweep no matter what; (iii) Cirulla — Ligurian variant with additional scoring. Cultural cornerstone of Italian cafe + family life. FIGS (Italian Scopa Federation) governs competitive Scopone tournaments.",
  category: "card-games",
  subCategory: "Italian fishing card game with 40-card deck",
  sportType: "individual", indoorOutdoor: "indoor",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "early-modern", popularity: "regional",
  countryOfOrigin: "IT",
  regionOfOrigin: "Naples, Italy (17th century origins; spread throughout Italy)",
  estimatedOrigin: "17th century Naples; codified rules early 1800s; FIGS founded 1946",
  players: { min: 2, max: 4, note: "2 individual, or 4 partnership (Scopone form); occasionally 3 or 6." },
  equipment: [{ name: "Italian 40-card deck", description: "4 suits (Coins, Cups, Swords, Clubs); 10 cards per suit (1-7 + Fante/8 + Cavallo/9 + Re/10)." }, { name: "Regional deck variations", description: "Napoletane, Piacentine, Bergamasche, Siciliane, Trevisane, etc — regional artwork variations of same 40-card structure." }, { name: "Score sheet", description: "For tracking hands + running total to 11 or 21 points." }],
  duration: { approximateMinutes: 30, structure: "Multiple hands to reach target 11 or 21 points; each hand ~5-10 min." },
  objective: "First to 11 or 21 total points via captured cards + scopa sweeps + primiera + settebello.",
  matchStructure: "Deal 3 cards + 4 to center → play out → deal 3 more → repeat until deck empty → score hand → repeat hands until game total reached.",
  basicRules: [
    { title: "Play card matching center value OR sum of multiple center cards", body: "Played card captures single center card of same value OR captures multiple center cards summing to played value." },
    { title: "Sweep = Scopa (bonus 1 point per sweep)", body: "If your played card captures ALL remaining center cards (leaving table empty), you score 1 point Scopa bonus." },
    { title: "Face cards value 8-9-10 (Jack, Knight, King)", body: "Fante (Jack) = 8; Cavallo (Knight) = 9; Re (King) = 10." },
    { title: "End-of-deck: last capturer takes remaining center", body: "When deck exhausted + all hands played, last player/team to capture takes remaining center cards (no Scopa for this)." },
  ],
  scoring: { summary: "End-of-hand scoring: 1 pt Carte (most cards), 1 pt Denari (most coins), 1 pt Settebello (capturing 7 of Coins), 1 pt Primiera (highest suit-scoring hand), 1 pt per Scopa sweep. First to 11 or 21 wins.", winCondition: "First player/team to reach 11 or 21 points across multiple hands." },
  positions: [{ name: "Individual player (2-player Scopa)", role: "Solo competitor.", count: 1 }, { name: "Partnership (Scopone 4-player)", role: "Two teams of 2 partners facing across table.", count: 2 }],
  officiating: { officials: ["Tournament Director (competitive Scopone)"], summary: "FIGS certified for competitive Scopone tournaments." },
  governingBodies: [{ name: "Federazione Italiana Gioco Scopa (FIGS)", founded: 1946, headquarters: "Rome, Italy" }],
  majorCompetitions: [{ name: "Campionato Italiano di Scopa", frequency: "annual", founded: 1950, region: "Italy" }, { name: "Campionato di Scopone Scientifico", frequency: "annual", founded: 1960, region: "Italy" }],
  countriesPlayed: ["ITA (dominant national pastime)", "ARG (Italian diaspora)", "USA (Little Italy communities)", "CAN", "AUS", "URY", "BRA", "SMR", "CHE (Ticino)"],
  famousAthletes: ["Chiara Perricone (multi-time Italian Scopone champion 2010s)", "Various regional champions (Italian tournament scene)"],
  records: [
    { title: "Italy's most-played traditional card game", holder: "Scopa (all variants)", value: "Scopa (all variants) is Italy's most-played traditional card game — cultural cornerstone of family + cafe life", year: 2024 },
    { title: "FIGS founded 1946", holder: "Federazione Italiana Gioco Scopa", value: "Federazione Italiana Gioco Scopa (FIGS) founded 1946 in Rome — governs competitive Italian Scopone", year: 1946 },
    { title: "17th century Naples origins", holder: "Traditional Neapolitan card culture", value: "Scopa origins traced to 17th century Naples; codified early 1800s; spread throughout Italy by mid-1900s", year: 1650 },
  ],
  variants: ["scopa-2-player-basic", "scopone-scientifico-4-player-partnership", "scopa-dassi-aces-sweep", "cirulla-ligurian-variant", "scopa-de-quindici-15-target-variant", "re-bello-king-of-coins-bonus-variant"],
  relatedSports: ["briscola-italian-card", "tressette-italian-card", "cassino-english-fishing", "escoba-spanish-variant"],
  skills: ["card counting (deck memory)", "primiera strategy (7s + face cards preservation)", "scopa-denial defensive play", "partner signaling (Scopone)"],
  wikipediaTitle: "Scopa",
  sources: [{ label: "Wikipedia — Scopa", url: "https://en.wikipedia.org/wiki/Scopa", publisher: "Wikipedia" }, { label: "FIGS Federazione Italiana Gioco Scopa", url: "https://www.figs.it", publisher: "FIGS" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default scopaItalian;
