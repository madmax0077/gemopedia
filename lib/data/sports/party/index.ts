import type { Sport } from "@/lib/types";

import { charades } from "./charades";
import { cluedo } from "./cluedo";
import { codenames } from "./codenames";
import { pictionary } from "./pictionary";

/** Party games category — Charades, Codenames, Cluedo, Werewolf, Two Truths and a Lie. */
export const PARTY_GAMES: Sport[] = [
  charades,
  cluedo,
  codenames,
  pictionary,
];
