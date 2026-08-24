import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * Classic 4-3-3 football formation — 1 goalkeeper, 4 defenders, 3 midfielders,
 * 3 forwards. Labelled so a total beginner can see who does what.
 */
export function FootballFormation433() {
  const players: { x: number; y: number; label: string; role: "gk" | "def" | "mid" | "att" }[] = [
    { x: 8, y: 65, label: "GK", role: "gk" },
    { x: 25, y: 20, label: "RB", role: "def" },
    { x: 25, y: 48, label: "CB", role: "def" },
    { x: 25, y: 82, label: "CB", role: "def" },
    { x: 25, y: 110, label: "LB", role: "def" },
    { x: 55, y: 35, label: "CM", role: "mid" },
    { x: 55, y: 65, label: "CDM", role: "mid" },
    { x: 55, y: 95, label: "CM", role: "mid" },
    { x: 85, y: 25, label: "RW", role: "att" },
    { x: 85, y: 65, label: "ST", role: "att" },
    { x: 85, y: 105, label: "LW", role: "att" },
  ];

  const colour = (r: string) =>
    r === "gk" ? "#f59e0b" : r === "def" ? "#3b82f6" : r === "mid" ? "#a855f7" : "#ef4444";

  return (
    <DiagramCanvas
      title="4-3-3 formation"
      description="The most-used modern formation — a back four, three central midfielders, and a front three of two wingers and a striker."
      aspect="16/10"
      legend={[
        { color: "#f59e0b", label: "Goalkeeper" },
        { color: "#3b82f6", label: "Defenders" },
        { color: "#a855f7", label: "Midfielders" },
        { color: "#ef4444", label: "Forwards" },
      ]}
    >
      <svg viewBox="0 0 100 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="100" height="130" fill="#166534" />
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x="0" y={i * 13} width="100" height="6.5" fill="black" opacity="0.05" />
        ))}
        <rect x="2" y="2" width="96" height="126" fill="none" stroke="white" strokeWidth="0.6" />
        <line x1="2" y1="65" x2="98" y2="65" stroke="white" strokeWidth="0.5" strokeDasharray="1 0.8" />

        <text x="50" y="10" textAnchor="middle" fontSize="4" fill="white" opacity="0.35" fontFamily="ui-sans-serif, system-ui">
          opposition goal →
        </text>
        <text x="50" y="127" textAnchor="middle" fontSize="4" fill="white" opacity="0.35" fontFamily="ui-sans-serif, system-ui">
          own goal →
        </text>

        {players.map((p) => (
          <g key={`${p.x}-${p.y}`}>
            <circle cx={p.x} cy={p.y} r="4.4" fill={colour(p.role)} stroke="white" strokeWidth="0.5" />
            <text
              x={p.x}
              y={p.y + 1.3}
              textAnchor="middle"
              fontSize="3.2"
              fontWeight="800"
              fill="white"
              fontFamily="ui-sans-serif, system-ui"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </DiagramCanvas>
  );
}
