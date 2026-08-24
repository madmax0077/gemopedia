import type { Sport } from "@/lib/types";

import { charades } from "./charades";
import { cluedo } from "./cluedo";
import { codenames } from "./codenames";
import { mafia } from "./mafia";
import { pictionary } from "./pictionary";
import { twoTruthsAndALie } from "./two-truths-and-a-lie";

/** Party games category — Charades, Codenames, Cluedo, Werewolf/Mafia, Two Truths and a Lie, Pictionary. */
export const PARTY_GAMES: Sport[] = [
  charades,
  cluedo,
  codenames,
  mafia,
  pictionary,
  twoTruthsAndALie,
];
