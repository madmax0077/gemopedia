import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * Curling sheet — with hog line, tee line, back line, and the concentric
 * "house" rings. Colour-coded stones show the "shot rock" and how scoring
 * is judged (only stones closer than the opposition's best count).
 */
export function CurlingSheet() {
  return (
    <DiagramCanvas
      title="A curling sheet"
      description="45.7 m long, 4.75 m wide. Only stones inside the house count — and only the ones closer than the opposition's closest stone score."
      aspect="16/5"
      legend={[
        { color: "#e0f2fe", label: "Ice" },
        { color: "#dc2626", label: "Team A stone" },
        { color: "#ca8a04", label: "Team B stone" },
        { color: "#fef2f2", label: "House" },
      ]}
    >
      <svg viewBox="0 0 300 96" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Ice */}
        <rect x="0" y="0" width="300" height="96" fill="#e0f2fe" />
        {/* Boundary */}
        <rect x="4" y="4" width="292" height="88" fill="none" stroke="#0f172a" strokeWidth="0.5" />

        {/* Hog lines */}
        <line x1="70" y1="4" x2="70" y2="92" stroke="#dc2626" strokeWidth="1" />
        <line x1="230" y1="4" x2="230" y2="92" stroke="#dc2626" strokeWidth="1" />
        {/* Tee lines */}
        <line x1="40" y1="4" x2="40" y2="92" stroke="#0f172a" strokeWidth="0.4" strokeDasharray="1 0.8" />
        <line x1="260" y1="4" x2="260" y2="92" stroke="#0f172a" strokeWidth="0.4" strokeDasharray="1 0.8" />
        {/* Back lines */}
        <line x1="16" y1="4" x2="16" y2="92" stroke="#0f172a" strokeWidth="0.4" />
        <line x1="284" y1="4" x2="284" y2="92" stroke="#0f172a" strokeWidth="0.4" />
        {/* Centre line */}
        <line x1="4" y1="48" x2="296" y2="48" stroke="#0f172a" strokeWidth="0.35" strokeDasharray="1 0.6" />

        {/* Left house */}
        <circle cx="40" cy="48" r="14" fill="#fef2f2" stroke="#dc2626" strokeWidth="0.5" />
        <circle cx="40" cy="48" r="10" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="0.4" />
        <circle cx="40" cy="48" r="6" fill="#fff7ed" stroke="#f59e0b" strokeWidth="0.4" />
        <circle cx="40" cy="48" r="2" fill="#0f172a" />

        {/* Right house (the "playing" end) */}
        <circle cx="260" cy="48" r="14" fill="#fef2f2" stroke="#dc2626" strokeWidth="0.5" />
        <circle cx="260" cy="48" r="10" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="0.4" />
        <circle cx="260" cy="48" r="6" fill="#fff7ed" stroke="#f59e0b" strokeWidth="0.4" />
        <circle cx="260" cy="48" r="2" fill="#0f172a" />

        {/* Example stones in the right-hand house — scoring situation */}
        <Stone cx={258} cy={48} team="A" />
        <Stone cx={254} cy={51} team="A" />
        <Stone cx={266} cy={44} team="B" />
        <Stone cx={272} cy={48} team="B" />
        <Stone cx={260} cy={55} team="A" />

        {/* Callouts */}
        <text x="70" y="14" textAnchor="middle" fontSize="2.6" fill="#dc2626" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          hog line
        </text>
        <text x="230" y="14" textAnchor="middle" fontSize="2.6" fill="#dc2626" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          hog line
        </text>
        <text x="40" y="72" textAnchor="middle" fontSize="2.6" fill="#0f172a" fontFamily="ui-sans-serif, system-ui">
          house
        </text>
        <text x="260" y="72" textAnchor="middle" fontSize="2.6" fill="#0f172a" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          house — scoring end
        </text>
        <text x="150" y="88" textAnchor="middle" fontSize="2.6" fill="#0f172a" fontFamily="ui-sans-serif, system-ui">
          45.7 m long · 4.75 m wide
        </text>
      </svg>
    </DiagramCanvas>
  );
}

function Stone({ cx, cy, team }: { cx: number; cy: number; team: "A" | "B" }) {
  const c = team === "A" ? "#dc2626" : "#ca8a04";
  return (
    <g>
      <circle cx={cx} cy={cy} r="1.7" fill={c} stroke="#0f172a" strokeWidth="0.3" />
      <circle cx={cx} cy={cy} r="0.8" fill="none" stroke="white" strokeWidth="0.25" />
    </g>
  );
}
