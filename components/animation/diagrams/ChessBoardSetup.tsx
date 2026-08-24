import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * Chess starting position — the classical initial setup on an 8×8 board.
 * White pieces on ranks 1–2, Black on ranks 7–8.
 */
export function ChessBoardSetup() {
  const pieceGlyph: Record<string, string> = {
    K: "♔", Q: "♕", R: "♖", B: "♗", N: "♘", P: "♙",
    k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟",
  };
  // 8×8 board, top row (0) = rank 8 (Black), bottom row (7) = rank 1 (White)
  const initial: string[][] = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ];
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

  return (
    <DiagramCanvas
      title="Chess starting position"
      description="The classical setup. Queens on their own colour (white queen on light, black queen on dark). Files a–h left to right, ranks 1–8 bottom to top."
      aspect="1/1"
      legend={[
        { color: "#f5e6c8", label: "Light square" },
        { color: "#8b5e34", label: "Dark square" },
      ]}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Squares */}
        {initial.map((row, rIdx) =>
          row.map((_, cIdx) => (
            <rect
              key={`sq-${rIdx}-${cIdx}`}
              x={cIdx * 12 + 2}
              y={rIdx * 12 + 2}
              width={12}
              height={12}
              fill={(rIdx + cIdx) % 2 === 0 ? "#f5e6c8" : "#8b5e34"}
            />
          )),
        )}
        {/* Board border */}
        <rect x="2" y="2" width="96" height="96" fill="none" stroke="#1e293b" strokeWidth="0.6" />

        {/* Pieces */}
        {initial.map((row, rIdx) =>
          row.map((piece, cIdx) =>
            piece ? (
              <text
                key={`p-${rIdx}-${cIdx}`}
                x={cIdx * 12 + 8}
                y={rIdx * 12 + 12.5}
                textAnchor="middle"
                fontSize="10"
                fill={piece === piece.toUpperCase() ? "white" : "#0f172a"}
                stroke={piece === piece.toUpperCase() ? "#0f172a" : "white"}
                strokeWidth="0.35"
                fontFamily="Arial, sans-serif"
              >
                {pieceGlyph[piece]}
              </text>
            ) : null,
          ),
        )}

        {/* File labels along the bottom */}
        {files.map((f, i) => (
          <text
            key={`file-${f}`}
            x={i * 12 + 8}
            y={99}
            textAnchor="middle"
            fontSize="2.4"
            fill="#475569"
            fontFamily="ui-monospace, monospace"
          >
            {f}
          </text>
        ))}
        {/* Rank labels along the left */}
        {[8, 7, 6, 5, 4, 3, 2, 1].map((r, i) => (
          <text
            key={`rank-${r}`}
            x={0.4}
            y={i * 12 + 7.5}
            textAnchor="start"
            fontSize="2.4"
            fill="#475569"
            fontFamily="ui-monospace, monospace"
          >
            {r}
          </text>
        ))}
      </svg>
    </DiagramCanvas>
  );
}
