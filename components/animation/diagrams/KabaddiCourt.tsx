import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * Kabaddi court — 13 m × 10 m, split by a midline, with baulk, bonus
 * and lobbies labelled. Includes the seven defensive positions.
 */
export function KabaddiCourt() {
  const defenders: { x: number; y: number; label: string }[] = [
    { x: 110, y: 15, label: "LC" },
    { x: 110, y: 85, label: "RC" },
    { x: 125, y: 25, label: "LI" },
    { x: 125, y: 75, label: "RI" },
    { x: 140, y: 30, label: "Lcov" },
    { x: 140, y: 70, label: "Rcov" },
    { x: 150, y: 50, label: "ALL" },
  ];

  return (
    <DiagramCanvas
      title="The kabaddi court"
      description="13 m × 10 m. Baulk line: the raider must cross it for a legal attempt. Bonus line: cross it and return safely for a bonus point (only when 6+ defenders are on court)."
      aspect="16/8"
      legend={[
        { color: "#f59e0b", label: "Court" },
        { color: "#4ade80", label: "Bonus line" },
        { color: "#ef4444", label: "Raider" },
        { color: "#3b82f6", label: "Defender" },
      ]}
    >
      <svg viewBox="0 0 200 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Court */}
        <rect x="4" y="4" width="192" height="92" fill="#f59e0b" rx="1.5" />
        {/* Lobbies (2 m strips top/bottom) */}
        <rect x="4" y="4" width="192" height="10" fill="black" fillOpacity="0.08" />
        <rect x="4" y="86" width="192" height="10" fill="black" fillOpacity="0.08" />
        {/* Boundary */}
        <rect x="4" y="4" width="192" height="92" fill="none" stroke="white" strokeWidth="0.7" />
        {/* Midline */}
        <line x1="100" y1="4" x2="100" y2="96" stroke="white" strokeWidth="0.9" />
        {/* Baulk lines (each half, 3.75 m from midline) */}
        <line x1="65" y1="4" x2="65" y2="96" stroke="white" strokeWidth="0.7" />
        <line x1="135" y1="4" x2="135" y2="96" stroke="white" strokeWidth="0.7" />
        {/* Bonus line (only in the right half — where the raid is going) */}
        <line x1="155" y1="4" x2="155" y2="96" stroke="#4ade80" strokeWidth="0.8" strokeDasharray="1.5 1" />

        {/* Labels */}
        <text x="35" y="55" textAnchor="middle" fontSize="3.4" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          RAIDER HOME
        </text>
        <text x="180" y="55" textAnchor="middle" fontSize="3.4" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          DEFENDER HOME
        </text>
        <text x="65" y="99" textAnchor="middle" fontSize="2.4" fill="white" fontFamily="ui-sans-serif, system-ui">
          baulk
        </text>
        <text x="135" y="99" textAnchor="middle" fontSize="2.4" fill="white" fontFamily="ui-sans-serif, system-ui">
          baulk
        </text>
        <text x="155" y="99" textAnchor="middle" fontSize="2.4" fill="#4ade80" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          bonus
        </text>
        <text x="100" y="9" textAnchor="middle" fontSize="2.4" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          MIDLINE
        </text>

        {/* Raider (in own half) */}
        <g transform="translate(30, 50)">
          <circle r="3.2" fill="#ef4444" stroke="white" strokeWidth="0.5" />
          <text y="1.2" textAnchor="middle" fontSize="3" fontWeight="800" fill="white" fontFamily="ui-sans-serif, system-ui">R</text>
        </g>

        {/* Defenders (in right half) */}
        {defenders.map((d) => (
          <g key={d.label} transform={`translate(${d.x}, ${d.y})`}>
            <circle r="3" fill="#3b82f6" stroke="white" strokeWidth="0.5" />
            <text y="1.1" textAnchor="middle" fontSize="2.4" fontWeight="800" fill="white" fontFamily="ui-sans-serif, system-ui">
              {d.label}
            </text>
          </g>
        ))}

        <text x="100" y="98" textAnchor="middle" fontSize="2.4" fill="white" fontFamily="ui-sans-serif, system-ui">
          13 m × 10 m
        </text>
      </svg>
    </DiagramCanvas>
  );
}
