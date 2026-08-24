import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * A buzkashi / kokpar field — a huge open ground with two flag circles
 * ("hallal") at each end. Riders must carry the goat carcass around the
 * far flag and drop it into their own scoring circle (the "hallal" or
 * "circle of justice").
 */
export function BuzkashiField() {
  return (
    <DiagramCanvas
      title="A buzkashi playing field"
      description="Open steppe — no fixed dimensions. Riders start in the middle, pick up the boz (goat carcass), gallop around the far flag, and drop it inside their own hallal (scoring circle) for a point."
      aspect="16/8"
      legend={[
        { color: "#a16207", label: "Steppe" },
        { color: "#22c55e", label: "Hallal (scoring circle)" },
        { color: "#ef4444", label: "Flag (turn point)" },
      ]}
    >
      <svg viewBox="0 0 200 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Ground */}
        <rect x="0" y="0" width="200" height="100" fill="#a16207" />
        {/* Dust patches */}
        {[
          [40, 30], [70, 80], [140, 25], [160, 70],
        ].map(([cx, cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx="8" ry="3" fill="black" opacity="0.06" />
        ))}

        {/* Left hallal (scoring circle) */}
        <circle cx="30" cy="50" r="12" fill="#22c55e" fillOpacity="0.55" stroke="white" strokeWidth="0.7" />
        <circle cx="30" cy="50" r="4" fill="none" stroke="white" strokeWidth="0.4" strokeDasharray="1 0.6" />
        <text x="30" y="72" textAnchor="middle" fontSize="3" fill="white" fontWeight="800" fontFamily="ui-sans-serif, system-ui">
          hallal (Team A)
        </text>

        {/* Right hallal */}
        <circle cx="170" cy="50" r="12" fill="#22c55e" fillOpacity="0.55" stroke="white" strokeWidth="0.7" />
        <circle cx="170" cy="50" r="4" fill="none" stroke="white" strokeWidth="0.4" strokeDasharray="1 0.6" />
        <text x="170" y="72" textAnchor="middle" fontSize="3" fill="white" fontWeight="800" fontFamily="ui-sans-serif, system-ui">
          hallal (Team B)
        </text>

        {/* Centre flags */}
        <g transform="translate(100, 50)">
          <line x1="0" y1="-8" x2="0" y2="8" stroke="white" strokeWidth="0.6" />
          <polygon points="0,-8 6,-6 0,-4" fill="#ef4444" />
        </g>

        {/* Far turn flag */}
        <g transform="translate(100, 15)">
          <line x1="0" y1="-6" x2="0" y2="6" stroke="white" strokeWidth="0.6" />
          <polygon points="0,-6 6,-4 0,-2" fill="#ef4444" />
        </g>

        {/* Boz drop trajectory */}
        <path d="M 100 50 Q 130 30 100 15 Q 60 20 30 50" fill="none" stroke="#0ea5e9" strokeWidth="0.6" strokeDasharray="2 1.4" />
        <text x="70" y="14" fontSize="2.6" fill="#0ea5e9" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          rider route (pick up → far flag → own hallal)
        </text>

        {/* Sample horsemen */}
        {[
          [110, 55], [95, 60], [90, 48], [125, 40], [140, 60], [80, 44],
        ].map(([x, y], i) => (
          <g key={`r-${i}`} transform={`translate(${x}, ${y})`}>
            <ellipse rx="2.2" ry="1.4" fill="#5b3a10" />
            <circle cx="0" cy="-1.5" r="0.9" fill="#0f172a" />
          </g>
        ))}

        <text x="100" y="94" textAnchor="middle" fontSize="2.6" fill="white" fontFamily="ui-sans-serif, system-ui">
          no fixed size — traditionally an open plain
        </text>
      </svg>
    </DiagramCanvas>
  );
}
