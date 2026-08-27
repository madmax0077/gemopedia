import type { Sport } from "@/lib/types";

export const kravMaga: Sport = {
  id: "krav-maga",
  slug: "krav-maga",
  name: "Krav Maga",
  officialName: "Krav Maga (Hebrew: קרב מגע — Contact Combat)",
  aliases: ["Contact Combat", "IDF Combat System"],
  shortDescription:
    "ISRAELI SELF-DEFENSE + MILITARY COMBAT SYSTEM developed by IMI LICHTENFELD (1910-1998, Hungarian-Slovak-Israeli) in 1940s Bratislava + adopted by ISRAEL DEFENSE FORCES (IDF) in 1948. Non-sport combatives system emphasizing REAL-WORLD SELF-DEFENSE + rapid neutralization of threats + attacks on VULNERABLE TARGETS (eyes, throat, groin, knees). No forms/katas; scenario-based training. Global instruction via KRAV MAGA GLOBAL (KMG) + INTERNATIONAL KRAV MAGA FEDERATION (IKMF) + KRAV MAGA WORLDWIDE. Adopted by law enforcement + military worldwide.",
  longDescription:
    "KRAV MAGA is an ISRAELI SELF-DEFENSE + MILITARY COMBATIVES SYSTEM (not a traditional martial art or sport) developed by IMI (IMRICH) LICHTENFELD (1910-1998) — a Hungarian-Slovakian-Israeli boxer + wrestler who defended his Jewish neighborhood in 1930s BRATISLAVA against fascist gangs + refined the system as chief instructor for the newly-formed ISRAEL DEFENSE FORCES (IDF) after 1948. NAME: Hebrew 'קרב מגע' meaning 'CONTACT COMBAT.' PHILOSOPHY: Rapid + brutal neutralization of threats; NO RULES + NO SPORT; targeting VULNERABLE areas (eyes, throat, groin, knees); simultaneous defense + attack; awareness + de-escalation preferred; use of any available objects/environment. TECHNIQUES: Palm strikes, hammer fists, elbows, knees, low kicks, headbutts, groin strikes, eye gouges, throat strikes; escape from grabs/holds/chokes; disarming knives/guns/sticks; ground defense (get up ASAP, not BJJ-style). TRAINING: SCENARIO-BASED (multiple attackers, weapons, low light, from ground, in car); high-intensity conditioning; stress inoculation; NO KATAS/FORMS/COMPETITIONS in traditional Krav Maga. GLOBAL ORGANIZATIONS: KRAV MAGA GLOBAL (KMG) founded by EYAL YANILOV (Imi's top student); INTERNATIONAL KRAV MAGA FEDERATION (IKMF); KRAV MAGA WORLDWIDE founded by DARREN LEVINE (US, LAPD instructor); Israeli Krav International (IKI). ADOPTED BY: IDF (Israel), US SEAL Team 6, FBI, LAPD, French GIGN, Norwegian FSK + many other elite military + law enforcement units worldwide. NOT A SPORT — no competitions, no belts in traditional Israeli system (Western schools sometimes use levels/patches). CLASSES popular globally for CIVILIAN SELF-DEFENSE — women's self-defense, workplace violence, home invasion scenarios. MODERN INFLUENCE: Featured in movies (John Wick, Bourne series, Enough); popular celebrity fitness system.",
  category: "combat-sports",
  subCategory: "self-defense / military combatives / Israeli / IDF / civilian defense",
  sportType: "individual",
  indoorOutdoor: "indoor",
  isProfessional: false,
  season: "year-round",
  era: "21st-century",
  popularity: "major",
  countryOfOrigin: "IL",
  regionOfOrigin: "Bratislava (development) → Israel (formalization)",
  estimatedOrigin: "1930s Bratislava (Imi Lichtenfeld street defense); formalized 1948 IDF",
  players: { min: 1, max: 30, note: "Solo drills + partner work; classes typically 10-20." },
  field: {
    surfaceName: "Padded gym floor / any surface",
    dimensions: "Standard gym space",
    description: "Any training space; realism emphasized (parking lots, stairwells).",
  },
  equipment: [
    { name: "Athletic training clothes", description: "Comfortable movement gear" },
    { name: "Focus mitts / kick shields / body armor", description: "Partner training pads" },
    { name: "Training knives (rubber) + Training guns", description: "Weapon defense drills" },
    { name: "Mouth guard + Groin protection", description: "Contact drills protection" },
  ],
  duration: { approximateMinutes: 60, structure: "60-90 minute classes; multi-year progression." },
  objective: "Neutralize threats + escape to safety using any available means.",
  basicRules: [
    { title: "No sport rules; real-world self-defense", body: "No competitions; scenario-based training." },
    { title: "Target vulnerable areas", body: "Eyes, throat, groin, knees, joints — no restrictions." },
    { title: "Simultaneous defense + attack", body: "Defend + counter in one motion." },
    { title: "Awareness + avoidance first", body: "De-escalation preferred; fight only if necessary." },
    { title: "Use of environment/objects", body: "Keys, phone, chair — any weapon available." },
    { title: "Scenario-based training", body: "Multiple attackers, weapons, low light, from ground." },
  ],
  scoring: {
    summary: "No scoring in traditional Krav Maga — not a sport.",
    breakdown: [
      { action: "Grading levels (Western schools)", points: "Practitioner (P1-P5) → Graduate (G1-G5) → Expert (E1-E5) → Master" },
      { action: "IDF combat readiness", points: "Pass/Fail certification" },
    ],
    winCondition: "Escape threat safely + neutralize attacker if necessary.",
  },
  governingBodies: [
    { name: "Krav Maga Global (KMG)", founded: 2010, headquarters: "Netanya, Israel" },
    { name: "International Krav Maga Federation (IKMF)", founded: 1996, headquarters: "Israel" },
    { name: "Krav Maga Worldwide (KMW)", founded: 1981, headquarters: "Los Angeles, USA" },
  ],
  majorCompetitions: [
    { name: "No competitions in traditional Krav Maga", frequency: "N/A", founded: 0, region: "N/A" },
    { name: "KMG/IKMF/KMW Instructor certifications + gradings", frequency: "ongoing", founded: 1990, region: "Global" },
  ],
  countriesPlayed: ["IL", "US", "FR", "DE", "GB", "NO", "IT", "ES", "PL", "BR", "CA", "AU", "IN", "ZA"],
  famousAthletes: [
    "Imi Lichtenfeld (Hungary/Israel, 1910-1998) — Founder",
    "Eyal Yanilov (Israel) — Chief Instructor + KMG founder",
    "Darren Levine (US) — KMW founder + LAPD trainer",
    "Haim Gidon (Israel) — Israeli Krav Maga Association",
  ],
  variants: [
    "kmg-krav-maga-global-eyal-yanilov",
    "ikmf-international-krav-maga-federation",
    "kmw-krav-maga-worldwide-darren-levine",
    "iki-israeli-krav-international",
    "idf-military-krav-maga",
  ],
  relatedSports: ["boxing", "muay-thai", "brazilian-jiu-jitsu", "kickboxing", "mixed-martial-arts", "sambo"],
  skills: ["situational awareness", "explosive striking", "weapon defense", "grappling escapes", "stress management", "ground defense"],
  strategies: [
    { title: "Awareness prevents 90% of attacks", body: "See threats early, avoid." },
    { title: "Explosive counter-attack when engaged", body: "Overwhelm attacker with aggression." },
    { title: "Target vulnerable areas immediately", body: "Groin/eyes/throat = fastest neutralization." },
    { title: "Get to safe distance ASAP", body: "Escape > continue fighting." },
    { title: "Address multiple attackers with movement", body: "Never stay in one spot." },
  ],
  terminology: [
    { term: "Krav Maga (קרב מגע)", meaning: "Hebrew: 'Contact Combat'." },
    { term: "Retzev (רצף)", meaning: "Continuous combat motion — non-stop attacks." },
    { term: "Practitioner/Graduate/Expert", meaning: "Western grading system levels." },
    { term: "P1-P5, G1-G5, E1-E5", meaning: "IKMF/KMG grading levels." },
    { term: "Preemptive strike", meaning: "Attack first when threat is imminent." },
    { term: "Simultaneous defense + attack", meaning: "Core principle of Krav Maga." },
    { term: "Scenario training", meaning: "Realistic situations (parking lot, elevator, car)." },
    { term: "Weapon defense", meaning: "Techniques against knife/gun/stick." },
  ],
  learningPaths: [
    { level: "beginner", steps: [
      { title: "Find KMG/IKMF/KMW certified school", body: "Legitimate lineage matters." },
      { title: "Attend 2-3 classes/week for 6 months", body: "Build fundamentals." },
    ]},
    { level: "intermediate", steps: [
      { title: "Test for P1-P5 grades", body: "Structured progression." },
    ]},
    { level: "advanced", steps: [
      { title: "Attend instructor certification (KMG/IKMF)", body: "Teach others." },
    ]},
  ],
  faq: [
    { question: "What is Krav Maga?", answer: "ISRAELI SELF-DEFENSE + MILITARY COMBAT SYSTEM developed by IMI LICHTENFELD (1910-1998) in 1940s Bratislava + adopted by ISRAEL DEFENSE FORCES (IDF) in 1948. Non-sport combatives system emphasizing REAL-WORLD SELF-DEFENSE + rapid neutralization of threats + attacks on VULNERABLE TARGETS (eyes, throat, groin, knees). No forms/katas; scenario-based training. Global instruction via KRAV MAGA GLOBAL (KMG) + INTERNATIONAL KRAV MAGA FEDERATION (IKMF) + KRAV MAGA WORLDWIDE. Adopted by law enforcement + military worldwide." },
    { question: "Krav Maga vs BJJ vs MMA for self-defense?", answer: "KRAV MAGA IS PURE SELF-DEFENSE — no sport rules, targets vulnerable areas, weapon defense, multiple attacker scenarios; ideal for civilian defense. BJJ excels at 1-on-1 ground fighting but limited against weapons/multiple attackers/pavement. MMA covers striking + grappling in sport context but has referee/rules mindset. RECOMMENDATION: Krav Maga for pure self-defense + real-world scenarios. BJJ for ground control + fitness. MMA for combat sports competition. Best combo: Krav Maga + BJJ fundamentals for complete self-defense." },
  ],
  wikipediaTitle: "Krav Maga",
  sources: [
    { label: "Krav Maga Global — Official", url: "https://kravmaga.com/", publisher: "KMG" },
    { label: "IKMF — International Krav Maga Federation", url: "https://ikmf.com/", publisher: "IKMF" },
  ],
  lastVerified: "2026-08-27",
  confidence: "verified",
};
