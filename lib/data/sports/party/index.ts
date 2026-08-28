import type { Sport } from "@/lib/types";

import { bloodOnTheClocktower } from "./blood-on-the-clocktower";
import { cardsAgainstHumanity } from "./cards-against-humanity";
import { charades } from "./charades";
import { cluedo } from "./cluedo";
import { codenames } from "./codenames";
import { concept } from "./concept";
import { crokinole } from "./crokinole";
import { decrypto } from "./decrypto";
import { explodingKittens } from "./exploding-kittens";
import { fibbage } from "./fibbage";
import { guessWho } from "./guess-who";
import { headsUp } from "./heads-up";
import { hotPotato } from "./hot-potato";
import { jenga } from "./jenga";
import { justOne } from "./just-one";
import { mafia } from "./mafia";
import { monikers } from "./monikers";
import { mouseTrap } from "./mouse-trap";
import { mysterium } from "./mysterium";
import { neverHaveIEver } from "./never-have-i-ever";
import { operation } from "./operation";
import { pictionary } from "./pictionary";
import { secretHitler } from "./secret-hitler";
import { skull } from "./skull";
import { spyfall } from "./spyfall";
import { taboo } from "./taboo";
import { telephone } from "./telephone";
import { theMind } from "./the-mind";
import { theResistanceAvalon } from "./the-resistance-avalon";
import { timesUp } from "./times-up";
import { truthOrDare } from "./truth-or-dare";
import { twister } from "./twister";
import { twoTruthsAndALie } from "./two-truths-and-a-lie";
import { wavelength } from "./wavelength";
import { werewolf } from "./werewolf";

/** Party games category — Charades, Codenames, Cluedo, Werewolf/Mafia, Two Truths and a Lie, Pictionary, Truth or Dare, Never Have I Ever, Spyfall, Jenga, Operation, Guess Who?, Mouse Trap, Hot Potato, Heads Up!, Twister, Taboo, Telephone, Crokinole, plus modern hits (Exploding Kittens, Cards Against Humanity, The Resistance: Avalon, Secret Hitler, Just One, Decrypto, Wavelength, Skull, The Mind, Monikers, Blood on the Clocktower, Fibbage, Concept, Time's Up!, Mysterium). */
export const PARTY_GAMES: Sport[] = [
  bloodOnTheClocktower,
  cardsAgainstHumanity,
  charades,
  cluedo,
  codenames,
  concept,
  crokinole,
  decrypto,
  explodingKittens,
  fibbage,
  guessWho,
  headsUp,
  hotPotato,
  jenga,
  justOne,
  mafia,
  monikers,
  mouseTrap,
  mysterium,
  neverHaveIEver,
  operation,
  pictionary,
  secretHitler,
  skull,
  spyfall,
  taboo,
  telephone,
  theMind,
  theResistanceAvalon,
  timesUp,
  truthOrDare,
  twister,
  twoTruthsAndALie,
  wavelength,
  werewolf,
];
