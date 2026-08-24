import type { Sport } from "@/lib/types";

import { andarBahar } from "./andar-bahar";
import { baccarat } from "./baccarat";
import { bingo } from "./bingo";
import { blackjack } from "./blackjack";
import { keno } from "./keno";
import { pachinko } from "./pachinko";
import { paiGow } from "./pai-gow";
import { roulette } from "./roulette";
import { sicBo } from "./sic-bo";
import { teenPatti } from "./teen-patti";

/** Casino & gambling games category — Roulette, Blackjack, Baccarat, Sic Bo, Pai Gow, Andar Bahar, Teen Patti, Bingo, Keno, Pachinko. */
export const CASINO_GAMES: Sport[] = [
  andarBahar,
  baccarat,
  bingo,
  blackjack,
  keno,
  pachinko,
  paiGow,
  roulette,
  sicBo,
  teenPatti,
];
