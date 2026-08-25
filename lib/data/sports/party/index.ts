import type { Sport } from "@/lib/types";

import { charades } from "./charades";
import { cluedo } from "./cluedo";
import { codenames } from "./codenames";
import { guessWho } from "./guess-who";
import { headsUp } from "./heads-up";
import { hotPotato } from "./hot-potato";
import { jenga } from "./jenga";
import { mafia } from "./mafia";
import { mouseTrap } from "./mouse-trap";
import { neverHaveIEver } from "./never-have-i-ever";
import { operation } from "./operation";
import { pictionary } from "./pictionary";
import { spyfall } from "./spyfall";
import { truthOrDare } from "./truth-or-dare";
import { twoTruthsAndALie } from "./two-truths-and-a-lie";

/** Party games category — Charades, Codenames, Cluedo, Werewolf/Mafia, Two Truths and a Lie, Pictionary, Truth or Dare, Never Have I Ever, Spyfall, Jenga, Operation, Guess Who?, Mouse Trap, Hot Potato, Heads Up!. */
export const PARTY_GAMES: Sport[] = [
  charades,
  cluedo,
  codenames,
  guessWho,
  headsUp,
  hotPotato,
  jenga,
  mafia,
  mouseTrap,
  neverHaveIEver,
  operation,
  pictionary,
  spyfall,
  truthOrDare,
  twoTruthsAndALie,
];
