import type { Sport } from "@/lib/types";

import { cardsAgainstHumanity } from "./cards-against-humanity";
import { charades } from "./charades";
import { cluedo } from "./cluedo";
import { codenames } from "./codenames";
import { crokinole } from "./crokinole";
import { decrypto } from "./decrypto";
import { explodingKittens } from "./exploding-kittens";
import { guessWho } from "./guess-who";
import { headsUp } from "./heads-up";
import { hotPotato } from "./hot-potato";
import { jenga } from "./jenga";
import { justOne } from "./just-one";
import { mafia } from "./mafia";
import { monikers } from "./monikers";
import { mouseTrap } from "./mouse-trap";
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
import { truthOrDare } from "./truth-or-dare";
import { twister } from "./twister";
import { twoTruthsAndALie } from "./two-truths-and-a-lie";
import { wavelength } from "./wavelength";
import { werewolf } from "./werewolf";

/** Party games category — Charades, Codenames, Cluedo, Werewolf/Mafia, Two Truths and a Lie, Pictionary, Truth or Dare, Never Have I Ever, Spyfall, Jenga, Operation, Guess Who?, Mouse Trap, Hot Potato, Heads Up!, Twister, Taboo, Telephone, Crokinole, plus modern hits (Exploding Kittens, Cards Against Humanity, The Resistance: Avalon, Secret Hitler, Just One, Decrypto, Wavelength, Skull, The Mind, Monikers). */
export const PARTY_GAMES: Sport[] = [
  cardsAgainstHumanity,
  charades,
  cluedo,
  codenames,
  crokinole,
  decrypto,
  explodingKittens,
  guessWho,
  headsUp,
  hotPotato,
  jenga,
  justOne,
  mafia,
  monikers,
  mouseTrap,
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
  truthOrDare,
  twister,
  twoTruthsAndALie,
  wavelength,
  werewolf,
];
