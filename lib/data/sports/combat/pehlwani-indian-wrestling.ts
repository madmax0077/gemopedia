import type { Sport } from "@/lib/types";

export const pehlwaniIndianWrestling: Sport = {
  id: "pehlwani-indian-wrestling",
  slug: "pehlwani-indian-wrestling",
  name: "Pehlwani (Kushti — Indian Traditional Wrestling)",
  officialName: "Kushti / Pehlwani (Traditional South Asian Wrestling)",
  aliases: ["Kushti", "Kusti", "Indian Wrestling", "Malla-Yuddha"],
  shortDescription:
    "Traditional South Asian wrestling combining Persian koshti + Mughal-era grappling + ancient Vedic Malla-Yuddha; trained in earthen pit akhara; distinctive langota (loincloth) attire; still practiced traditionally + modern freestyle-fusion competitions (Hind Kesari, Rustam-e-Hind national titles).",
  longDescription:
    "Pehlwani (also called Kushti) is the traditional South Asian wrestling style that evolved during the Mughal Empire (16th-18th century) as a fusion of ancient Indian Malla-Yuddha (wrestling described in Vedic + epic texts ~1500 BCE) and Persian koshti brought by Mughal rulers. Practiced in traditional akharas (earthen wrestling pits with reddish clay soil mixed with mustard oil + turmeric + buttermilk for grip + cooling), wrestlers wear only the langota loincloth. Signature techniques include Dhak (throw), Kasota (leg trip), Chibri (armlock), Kadi (waist-hook), Dhobi Pat (fireman's carry). Training regimen (kushti) is holistic — combining strength (dand pushups, bethak squats, mudgar Indian clubs, mugdar), diet (ghee, milk, almonds, dry fruits, huge quantities), + spiritual discipline (celibacy, guru-shishya lineage). Traditional titles: Hind Kesari (Lion of India, national), Bharat Kesari (Champion of India), Rustam-e-Hind (Rustam of India). Notable historical + modern pehlwans: The Great Gama (Ghulam Mohammad, 1878-1960 — undefeated in 50+ year career, considered greatest all-time), Dara Singh (1928-2012 — Rustam-e-Hind + Bollywood star), Sushil Kumar (Olympic freestyle silver 2012 + bronze 2008; Kushti + freestyle background), Yogeshwar Dutt (Olympic bronze 2012 freestyle), Sakshi Malik (Olympic bronze 2016). Modern Kushti practiced widely across India (esp. Punjab, Haryana, Maharashtra, UP), Pakistan, Bangladesh, Nepal, Iran; enjoying revival post-2016 with government support + Dangal (2016 film) popularization. Some traditional akharas centuries old; Kolhapur, Varanasi, Delhi major centers.",
  category: "combat-sports",
  subCategory: "traditional South Asian wrestling",
  sportType: "individual", indoorOutdoor: "outdoor",
  isOlympic: false, isParalympic: false, isProfessional: true,
  season: "year-round", era: "ancient", popularity: "regional",
  countryOfOrigin: "IN",
  regionOfOrigin: "India / Pakistan (Mughal-era fusion of Vedic Malla-Yuddha + Persian koshti, 16th-18th c)",
  estimatedOrigin: "Vedic Malla-Yuddha origins ~1500 BCE; modern Pehlwani-Mughal fusion 16th-18th century",
  players: { min: 1, max: 2 },
  equipment: [{ name: "Langota (traditional loincloth)", description: "Only garment worn during traditional bouts." }, { name: "Akhara (earthen wrestling pit)", description: "Traditional pit with reddish clay + mustard oil + turmeric + buttermilk; symbolic + practical grip + cooling." }, { name: "Mudgar (Indian clubs)", description: "Traditional heavy Indian clubs for strength training; symbolic tool of Pehlwan lineage." }, { name: "Mugdar + dand + bethak", description: "Traditional bodyweight training tools (pushup variations, squats, club swings)." }],
  duration: { approximateMinutes: 15, structure: "Traditional bouts: continue until decisive throw (dhak) or submission; modern amateur ~3 × 3 min rounds." },
  objective: "Pin opponent's shoulder/back to earth (dhak) or force submission via grappling holds.",
  matchStructure: "Traditional: continuous until decisive throw; Modern amateur: 3 rounds × 3 min with judge decision.",
  basicRules: [
    { title: "Pin (dhak) to earth wins", body: "Traditional decisive victory = throwing opponent flat on back." },
    { title: "Traditional bout continues until decisive result", body: "No time limit in traditional matches; can last hours." },
    { title: "Weight classes strict (modern events)", body: "Modern competitions organized by weight (55/60/65/70/74/79/86/92/97/125 kg per freestyle-adjacent)." },
    { title: "Traditional akhara etiquette (guru + langota)", body: "Traditional akhara requires langota, salute to earth + guru; deeply ritualized." },
  ],
  scoring: { summary: "Traditional: decisive throw wins. Modern: judge scoring on takedowns + control + throws.", winCondition: "Dhak (pin) or submission; modern amateur: point decision." },
  positions: [{ name: "Pehlwan (wrestler)", role: "Sole competitor.", count: 1 }, { name: "Guru (teacher, akhara master)", role: "Trainer + often referee.", count: 1 }],
  officiating: { officials: ["Guru / Referee (akhara master)", "Village elders (traditional)", "Modern amateur referee panel"], summary: "Traditional: guru + village elders; Modern: certified referee + judges." },
  governingBodies: [{ name: "Bharatiya Kushti Dangal Sangh (Indian Wrestling Federation traditional)", founded: 1965, headquarters: "New Delhi, India" }, { name: "Wrestling Federation of India (WFI — modern freestyle governance)", founded: 1948, headquarters: "New Delhi, India" }, { name: "Traditional regional akhara sanghas", founded: 1900, headquarters: "regional" }],
  majorCompetitions: [{ name: "Hind Kesari National Championship", frequency: "annual", founded: 1958, region: "India (rotating states)" }, { name: "Bharat Kesari Dangal", frequency: "annual", founded: 1960, region: "India (rotating)" }, { name: "Rustam-e-Hind (traditional title tournament)", frequency: "annual", founded: 1900, region: "India + Pakistan (regional)" }],
  countriesPlayed: ["IND (dominant traditional)", "PAK", "IRN", "BGD", "NPL", "AFG"],
  famousAthletes: ["The Great Gama (Ghulam Mohammad, 1878-1960 — undefeated 50+ year career; considered wrestling GOAT)", "Dara Singh (1928-2012 — Rustam-e-Hind + Bollywood icon)", "Sushil Kumar (Olympic silver 2012 + bronze 2008)", "Yogeshwar Dutt (Olympic bronze 2012)", "Sakshi Malik (Olympic bronze 2016)"],
  records: [
    { title: "The Great Gama undefeated 50+ years", holder: "The Great Gama (Ghulam Mohammad)", value: "Considered wrestling GOAT — undefeated in over 5,000 bouts across 50+ year career (1878-1960); Rustam-e-Hind champion", year: 1927 },
    { title: "Dangal 2016 film popularization", holder: "Aamir Khan / Nitesh Tiwari", value: "Bollywood film 'Dangal' (2016) about Mahavir Phogat + daughters — global $340M+ box office; revived Kushti popularity", year: 2016 },
    { title: "Sushil Kumar 2x Olympic medalist", holder: "Sushil Kumar (IND)", value: "First Indian wrestler with 2 individual Olympic medals (bronze 2008 + silver 2012); Kushti + freestyle background", year: 2012 },
  ],
  variants: ["traditional-mitti-akhara-earthen-pit", "modern-freestyle-influenced-mat-wrestling", "punjabi-kushti-regional", "maharashtrian-kushti-regional"],
  relatedSports: ["wrestling-freestyle", "wrestling-greco-roman", "koshti-persian", "malla-yuddha-vedic", "sumo"],
  skills: ["akhara mud grip technique", "endurance in long bouts", "throw setup (dhak)", "clinch strength", "spiritual discipline"],
  strategies: [
    { title: "Patience + wear-down", body: "Traditional bouts favor patience — waiting for opponent to fatigue before decisive throw attempt." },
    { title: "Diet + strength discipline (khurak)", body: "Kushti diet (khurak) — ghee, milk, almonds, dry fruit — critical to sustained akhara training." },
  ],
  wikipediaTitle: "Pehlwani",
  sources: [{ label: "Wikipedia — Pehlwani", url: "https://en.wikipedia.org/wiki/Pehlwani", publisher: "Wikipedia" }],
  lastVerified: "2026-08-31",
  confidence: "verified",
};

export default pehlwaniIndianWrestling;
