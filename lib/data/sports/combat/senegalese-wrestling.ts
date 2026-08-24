import type { Sport } from "@/lib/types";

export const senegaleseWrestling: Sport = {
  id: "senegalese-wrestling",
  slug: "senegalese-wrestling",
  name: "Senegalese Wrestling",
  officialName: "Laamb",
  aliases: ["Lutte sénégalaise", "Laamb-tsé"],
  shortDescription:
    "Senegal's national sport — a bare-fisted wrestling contest that combines throws, sweeps and open-hand strikes to force the opponent off their feet.",
  longDescription:
    "Laamb wrestling (from the Serer word 'làmb') is the most popular spectator sport in Senegal, drawing crowds that outstrip football. The 'laamb avec frappe' variant (with striking) permits open-hand blows to the face and body; the 'laamb sans frappe' variant (pure wrestling) does not. A bout is won by throwing the opponent so that any part of their body other than the feet touches the sand — including the hands, knees or back. Bouts are steeped in ritual: pre-fight mysticism (juju charms, gris-gris amulets), traditional drumming (sabar) and elaborate ceremonial entrances precede a contest that is usually over in less than a minute.",

  category: "combat-sports",
  subCategory: "folk wrestling",
  sportType: "individual",
  indoorOutdoor: "outdoor",
  isOlympic: false,
  isProfessional: true,
  season: "year-round",
  era: "ancient",
  popularity: "regional",

  countryOfOrigin: "SN",
  regionOfOrigin: "Senegal (Serer and Wolof communities)",
  estimatedOrigin: "Pre-colonial (centuries-old village tradition)",

  players: { note: "1 vs 1 in a sand arena." },
  field: {
    surfaceName: "arena",
    dimensions: "Sand-covered circular arena, typically 20–30 m across; major bouts staged in football stadiums.",
    description: "A soft sand-covered circular ring — the pounding sand cushions falls but tires legs; wrestlers wear a traditional loincloth ('nguimb') and often protective amulets.",
  },
  equipment: [
    { name: "Nguimb", description: "The traditional wrestling loincloth." },
    { name: "Gris-gris", description: "Protective amulets and charms worn by wrestlers." },
  ],
  duration: {
    approximateMinutes: 20,
    structure: "Bouts have no fixed time — most last under 3 minutes; major title bouts scheduled up to 20 minutes.",
  },
  objective: "Force any part of your opponent's body other than the feet to touch the sand.",
  matchStructure:
    "Ceremony precedes the bout — drumming, entrance dances, prayers. The wrestlers face off and engage; the first fall ends the bout. In the 'avec frappe' variant, both grappling and open-hand striking are used from the outset.",

  basicRules: [
    { title: "How to win", body: "Force any body part other than the feet to touch the sand — a full throw, sweep or takedown. Even hands touching down (a 'chute sur les mains') wins the bout." },
    { title: "Striking (variant)", body: "In the 'avec frappe' variant, open-hand strikes are legal; closed fists, elbows and knees are not." },
    { title: "Grabbing the nguimb", body: "The traditional loincloth is a legal handhold; grabbing skin, hair or amulets is a foul." },
  ],
  advancedRules: [
    { title: "Ceremonial phase", body: "The pre-fight ritual (bakk / mystical preparation) is culturally as important as the bout itself — televised bouts allow up to 40 minutes for it." },
    { title: "Marabout support", body: "Marabouts (religious leaders) prepare mystical protections for wrestlers; this is officially discouraged but culturally ubiquitous." },
  ],
  scoring: {
    summary: "First fall wins. There are no points — the bout ends the moment one wrestler is thrown.",
    winCondition: "First wrestler to force the opponent onto the sand (anything but the feet) is declared champion.",
  },

  positions: [
    { name: "Bagnere / Wrestler", role: "The competitor." },
    { name: "Marabout", role: "Spiritual coach who prepares the wrestler's charms and rituals." },
  ],
  officiating: {
    officials: ["Chief referee", "Judges around the arena", "Cultural elders as ceremonial officials"],
    summary: "Modern professional laamb has a formal referee and judges; the ceremonial phase is overseen by community elders.",
  },

  governingBodies: [
    { name: "Comité National de Gestion (CNG) de Lutte", founded: 1994, headquarters: "Dakar, Senegal" },
  ],
  majorCompetitions: [
    { name: "Roi des Arènes (King of the Arena)", frequency: "irregular", region: "Senegal", note: "The most prestigious title in Senegalese wrestling — currently held by the winner of the most recent title bout." },
  ],
  countriesPlayed: ["SN", "GM", "GN", "ML", "MR"],
  famousAthletes: ["Mohamed Ndao 'Tyson'", "Yékini (Yakhya Diop)", "Balla Gaye 2", "Modou Lô", "Bombardier"],

  variants: ["laamb-sans-frappe", "laamb-avec-frappe"],
  relatedSports: ["mongolian-wrestling", "sumo", "boxing"],

  skills: ["explosive throwing", "grip strength", "psychological preparation", "sand-arena footwork", "spiritual discipline"],

  terminology: [
    { term: "Laamb", meaning: "The Senegalese word for wrestling." },
    { term: "Nguimb", meaning: "The traditional wrestling loincloth." },
    { term: "Bakk", meaning: "The pre-fight ceremonial preparation and entrance dance." },
    { term: "Gris-gris", meaning: "Protective amulets worn by the wrestlers." },
    { term: "Roi des Arènes", meaning: "'King of the Arena' — the sport's premier title." },
  ],

  learningPaths: [{ level: "beginner", steps: [
    { title: "What is Senegalese wrestling?", body: "A bare-fisted folk wrestling sport — throw your opponent onto the sand to win.", anchor: "hero" },
    { title: "With or without striking", body: "Two variants — 'avec frappe' allows open-hand strikes, 'sans frappe' is pure wrestling.", anchor: "variants" },
    { title: "First fall wins", body: "The moment any part of the body other than the feet touches the sand, the bout is over.", anchor: "rules" },
    { title: "The ritual", body: "Pre-fight ceremony (bakk) is as important as the bout itself — drumming, dancing and gris-gris amulets.", anchor: "advanced-rules" },
  ] }],
  diagrams: [
    {
      id: "laamb-arena",
      title: "The sand arena",
      component: "laamb-arena",
      slot: "playing-area",
    },
  ],
  faq: [
    { question: "How popular is laamb in Senegal?", answer: "It is the country's most popular spectator sport — bigger than football. Top bouts fill Dakar's Demba Diop stadium and are televised nationally." },
    { question: "Is it dangerous?", answer: "The striking variant carries injury risk (open-hand blows to the head). Sand cushions falls, and there is no time limit for recovery between bouts." },
  ],

  sources: [
    { label: "CNG de Lutte — Reglement", publisher: "Comité National de Gestion de Lutte" },
    { label: "Britannica — Senegalese wrestling", publisher: "Encyclopaedia Britannica", url: "https://www.britannica.com/sports/lutte-sénégalaise" },
  ],
  lastVerified: "2026-08-20",
  confidence: "verified",
};
