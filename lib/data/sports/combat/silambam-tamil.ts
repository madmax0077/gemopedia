import type { Sport } from "@/lib/types";

export const silambamTamil: Sport = {
  id: "silambam-tamil",
  slug: "silambam-tamil",
  name: "Silambam",
  officialName: "Silambam Fencing (World Silambam Association)",
  aliases: ["Silambam Kalai", "Tamil Stick Fighting", "Silambaattam"],
  shortDescription:
    "Ancient Tamil (South Indian) martial art specializing in bamboo staff (silambam kambu) fencing + choreographed stick spinning; roots ~1st millennium BCE Chera-Chola-Pandya era; World Silambam Association (WSA) sanctions modern competitive tournaments across kata (form) + sparring divisions.",
  longDescription:
    "Silambam is an ancient Tamil (South Indian) martial art originating in the Kurinji region (Western Ghats) of Tamil Nadu, historically associated with the Chera, Chola, and Pandya dynasties (~1st millennium BCE onward). The core discipline focuses on bamboo staff (silambam kambu / silambattai) fencing with staffs typically 4-6 feet long, combined with intricate choreographed spinning + rhythmic footwork. Silambam includes both unarmed (kai silambam) + weaponised sub-disciplines (staff, deer horns/maan kombu, sword-shield/vaal veechi, whip/surul pattai, sickle, urumi flexible sword). Now governed by the World Silambam Association (WSA, founded 2008, HQ Chennai) + Silambam Asia + national federations across India, Malaysia (huge Tamil diaspora scene), Singapore, USA, Sri Lanka, UK. Competition categories: (1) Kai Silambam (form/kata), (2) Silambam Fencing (sparring with padded staffs), (3) Silambam Fanciful Play (choreographed multi-person routines), (4) Weapon forms. UNESCO-recognized Tamil intangible cultural heritage. Considered ancestor to many Southeast Asian stick-fighting arts (Krabi Krabong, Silat, Escrima influenced by Tamil trade routes).",
  category: "combat-sports",
  subCategory: "Tamil bamboo-staff martial art",
  sportType: "individual", indoorOutdoor: "both",
  isOlympic: false, isParalympic: false, isProfessional: false,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "IN",
  regionOfOrigin: "Tamil Nadu, India (Western Ghats, Kurinji region)",
  estimatedOrigin: "~1st millennium BCE Chera-Chola-Pandya era; Sangam-era Tamil literature references",
  players: { min: 1, max: 2, note: "Kata (solo); Fencing (pairs); Fanciful Play (2-8 person groups)." },
  equipment: [{ name: "Silambam kambu (bamboo staff, 4-6 ft)", description: "Traditional bamboo staff; competition padded versions for sparring." }, { name: "Protective gear (fencing)", description: "Head guard, chest protector, gloves, groin guard for sparring." }, { name: "Traditional cotton uniform (veshti + turban)", description: "Traditional attire during demonstrations + cultural events." }],
  duration: { approximateMinutes: 4, structure: "Kata: 2-3 min performance; Fencing bout: 3 min rounds." },
  objective: "Kata: highest judge score for form/technique/rhythm; Fencing: most legal contact points within time limit.",
  matchStructure: "Kata: solo performance judged. Fencing: bracketed elimination bouts.",
  basicRules: [
    { title: "Legal target zones", body: "Torso + arms + legs above knee; head/groin illegal (except kai silambam)." },
    { title: "Padded staff for competition", body: "Rattan/foam-padded staffs prevent injury during sparring." },
    { title: "Point contact scoring", body: "1-3 points per clean contact by staff tip or sweep." },
  ],
  scoring: { summary: "Kata: 5-judge panel 0-10 scoring; Fencing: point-contact tally within round.", winCondition: "Kata: highest score. Fencing: most points at time." },
  positions: [{ name: "Silambam practitioner (Vaathiyar student → Aasan → Guru)", role: "Solo or paired competitor.", count: 1 }],
  governingBodies: [{ name: "World Silambam Association (WSA)", founded: 2008, headquarters: "Chennai, Tamil Nadu, India" }, { name: "Silambam Asia", founded: 2010, headquarters: "Malaysia" }],
  majorCompetitions: [{ name: "WSA World Silambam Championships", frequency: "biennial", founded: 2010, region: "Chennai + rotating global" }, { name: "Silambam Asia Championship", frequency: "annual", founded: 2010, region: "Kuala Lumpur (rotating)" }],
  countriesPlayed: ["IND", "MYS", "SGP", "LKA", "USA", "GBR", "CAN", "AUS"],
  famousAthletes: ["Silambam Aasan (masters — regional lineage-based)", "Anbanandan (WSA co-founder)"],
  records: [
    { title: "UNESCO Tamil intangible heritage", holder: "UNESCO / Tamil Nadu", value: "Silambam recognized as Tamil intangible cultural heritage; safeguarding measures active", year: 2020 },
    { title: "WSA founded 2008", holder: "World Silambam Association", value: "WSA founded 2008 to formalize international competitive silambam", year: 2008 },
  ],
  relatedSports: ["krabi-krabong", "arnis-escrima-kali", "kalaripayattu-championship", "bo-jutsu"],
  skills: ["staff spinning technique", "footwork patterns", "rhythmic coordination", "distance judgment"],
  wikipediaTitle: "Silambam",
  sources: [{ label: "Wikipedia — Silambam", url: "https://en.wikipedia.org/wiki/Silambam", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default silambamTamil;
