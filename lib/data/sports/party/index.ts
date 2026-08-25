import type { Sport } from "@/lib/types";

import { charades } from "./charades";
import { cluedo } from "./cluedo";
import { codenames } from "./codenames";
import { mafia } from "./mafia";
import { neverHaveIEver } from "./never-have-i-ever";
import { pictionary } from "./pictionary";
import { spyfall } from "./spyfall";
import { truthOrDare } from "./truth-or-dare";
import { twoTruthsAndALie } from "./two-truths-and-a-lie";

/** Party games category — Charades, Codenames, Cluedo, Werewolf/Mafia, Two Truths and a Lie, Pictionary, Truth or Dare, Never Have I Ever, Spyfall. */
export const PARTY_GAMES: Sport[] = [
  charades,
  cluedo,
  codenames,
  mafia,
  neverHaveIEver,
  pictionary,
  spyfall,
  truthOrDare,
  twoTruthsAndALie,
];
