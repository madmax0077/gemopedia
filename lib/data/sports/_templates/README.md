# Category templates

Each `.ts` file in this folder is a **fill-in-the-blank scaffold** for one
category of game. They exist to make deep-fill batches predictable: instead
of authoring every game from scratch, copy the matching template, rename the
export, and replace the placeholder strings with sourced content.

## How to use

```bash
# 1. Copy the template into the right category folder.
cp lib/data/sports/_templates/team-sport.ts lib/data/sports/ball/tennis.ts

# 2. In the copied file:
#    - Rename the exported const (TEMPLATE_TEAM_SPORT → tennis)
#    - Replace every `TODO_` placeholder with real content
#    - Delete any section marked "// OPTIONAL — remove if N/A"

# 3. Wire the game into the category index.ts:
#    - Add `import { tennis } from "./tennis";`
#    - Push `tennis` into the `<CATEGORY>_SPORTS` array

# 4. If the game was previously a stub, delete its record from
#    lib/data/sports/_stubs*.ts (dedupe would keep the authored one but
#    stubs are meant to be temporary).
```

## Template ↔ category map

| Template | Categories that use it |
|---|---|
| `team-sport.ts` | ball, some traditional (kabaddi/hurling/sepak takraw), some aquatic (water polo, dragon boat) |
| `individual-sport.ts` | athletics, aquatic (swimming), winter (skating), cycling |
| `combat-sport.ts` | combat |
| `racket-sport.ts` | racket-paddle |
| `motor-sport.ts` | motor |
| `precision-sport.ts` | precision, some adventure (archery, shooting) |
| `board-game.ts` | board, mind (chess/go/shogi/xiangqi/backgammon) |
| `card-game.ts` | card, some mind (bridge, poker) |
| `casino-game.ts` | casino |
| `dice-game.ts` | dice, tile (some) |
| `party-game.ts` | party, playground, children's games |
| `puzzle-game.ts` | puzzle |
| `video-game.ts` | video, esports |
| `skill-toy.ts` | skill-toys |
| `escape-immersive.ts` | escape |
| `rpg-wargame.ts` | tabletop-rpg, wargames |

Not every category has a dedicated template — categories with < 10 games
(gymnastics, air, strength, esports) reuse the closest generic template.

## Field-fill policy (all templates)

Every game must set at minimum:

- `id`, `slug`, `name`, `shortDescription`, `category`, `sportType`
- `objective` + `matchStructure`
- `basicRules[]` (4-8 items)
- `scoring` (`summary` + `winCondition` at minimum)
- `players`, `duration`
- `equipment[]` if any
- `terminology[]` (6-15 items)
- `learningPaths[]` (beginner + intermediate)
- `faq[]` (3-6 items)
- `sources[]` (2-4 — Wikipedia + at least one other)
- `lastVerified` (today's ISO date)
- `confidence` (`"community"` on first pass; upgraded to `"verified"` in Phase 4)

Templates list category-specific fields as **REQUIRED**, **OPTIONAL** or
**N/A** in a header comment.
