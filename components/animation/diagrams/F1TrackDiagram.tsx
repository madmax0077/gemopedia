import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * A generic F1 circuit schematic showing the pit lane, start-finish
 * straight, DRS activation zones and sector timing points.
 */
export function F1TrackDiagram() {
  return (
    <DiagramCanvas
      title="A Formula 1 circuit"
      description="Every F1 circuit shares the same anatomy — start-finish straight, pit lane parallel to it, 3 timed sectors and one or more DRS zones where the rear wing can open."
      aspect="16/10"
      legend={[
        { color: "#111827", label: "Track" },
        { color: "#f97316", label: "DRS zone" },
        { color: "#ef4444", label: "Start / finish" },
        { color: "#94a3b8", label: "Pit lane" },
      ]}
    >
      <svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="200" height="130" fill="#052e16" />

        {/* Track path — stylised looping circuit */}
        <path
          d="M 30 100 L 165 100 C 190 100 190 60 165 60 L 130 60 C 110 60 110 30 130 30 L 160 30 C 180 30 180 10 160 10 L 60 10 C 40 10 40 40 60 40 L 90 40 C 110 40 110 70 90 70 L 30 70 Z"
          fill="none"
          stroke="#111827"
          strokeWidth="12"
        />
        <path
          d="M 30 100 L 165 100 C 190 100 190 60 165 60 L 130 60 C 110 60 110 30 130 30 L 160 30 C 180 30 180 10 160 10 L 60 10 C 40 10 40 40 60 40 L 90 40 C 110 40 110 70 90 70 L 30 70 Z"
          fill="none"
          stroke="#334155"
          strokeWidth="10.5"
        />
        {/* Kerbs (thin dashed stripe) */}
        <path
          d="M 30 100 L 165 100 C 190 100 190 60 165 60 L 130 60 C 110 60 110 30 130 30 L 160 30 C 180 30 180 10 160 10 L 60 10 C 40 10 40 40 60 40 L 90 40 C 110 40 110 70 90 70 L 30 70 Z"
          fill="none"
          stroke="white"
          strokeWidth="0.4"
          strokeDasharray="1.5 1"
        />

        {/* DRS zone highlight (bottom straight) */}
        <line x1="50" y1="100" x2="140" y2="100" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
        <text x="95" y="112" textAnchor="middle" fontSize="4" fill="#f97316" fontWeight="800" fontFamily="ui-sans-serif, system-ui">
          DRS ZONE
        </text>

        {/* Start-finish line */}
        <g transform="translate(30 100)">
          <rect x="-1.4" y="-7" width="2.8" height="14" fill="#ef4444" />
          <text y="20" textAnchor="middle" fontSize="3.4" fill="#ef4444" fontWeight="800" fontFamily="ui-sans-serif, system-ui">
            START / FINISH
          </text>
        </g>

        {/* Pit lane (parallel to start-finish) */}
        <path d="M 32 108 L 160 108" fill="none" stroke="#94a3b8" strokeWidth="3.5" />
        <path d="M 32 108 L 160 108" fill="none" stroke="white" strokeWidth="0.3" strokeDasharray="1 1" />
        <text x="95" y="122" textAnchor="middle" fontSize="3.4" fill="#94a3b8" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          PIT LANE
        </text>

        {/* Sector markers */}
        <circle cx="65" cy="10" r="2.2" fill="#facc15" />
        <text x="65" y="6" textAnchor="middle" fontSize="3" fill="#facc15" fontWeight="700" fontFamily="ui-sans-serif, system-ui">S1</text>
        <circle cx="135" cy="30" r="2.2" fill="#facc15" />
        <text x="135" y="26" textAnchor="middle" fontSize="3" fill="#facc15" fontWeight="700" fontFamily="ui-sans-serif, system-ui">S2</text>
        <circle cx="170" cy="80" r="2.2" fill="#facc15" />
        <text x="177" y="83" textAnchor="middle" fontSize="3" fill="#facc15" fontWeight="700" fontFamily="ui-sans-serif, system-ui">S3</text>
      </svg>
    </DiagramCanvas>
  );
}
