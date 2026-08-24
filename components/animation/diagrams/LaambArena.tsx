import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * Laamb / Senegalese wrestling sand arena — a raised sand ring surrounded
 * by the crowd, with two wrestlers facing off. In the modern "laamb avec
 * frappe" version, boxing-style punches are allowed alongside grappling.
 */
export function LaambArena() {
  return (
    <DiagramCanvas
      title="A Senegalese wrestling arena"
      description="A shallow sand ring — a wrestler wins by making any part of the opponent's body other than the feet touch the sand. Modern laamb also allows bare-fist strikes."
      aspect="1/1"
      legend={[
        { color: "#facc15", label: "Sand ring" },
        { color: "#1f2937", label: "Crowd" },
        { color: "#ef4444", label: "Wrestler A" },
        { color: "#3b82f6", label: "Wrestler B" },
      ]}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Stadium bowl */}
        <rect x="0" y="0" width="100" height="100" fill="#1f2937" />

        {/* Crowd texture — concentric dashed rings */}
        {[46, 42, 38].map((r, i) => (
          <circle key={`c-${i}`} cx="50" cy="50" r={r} fill="none" stroke="#94a3b8" strokeOpacity="0.35" strokeWidth="0.3" strokeDasharray="0.6 0.6" />
        ))}

        {/* Sand ring */}
        <circle cx="50" cy="50" r="30" fill="#facc15" stroke="white" strokeWidth="0.6" />
        {/* Fetish patterns / gris-gris markings */}
        <circle cx="50" cy="50" r="26" fill="none" stroke="white" strokeWidth="0.3" strokeDasharray="1 0.8" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="white" strokeWidth="0.3" strokeDasharray="1 0.8" />
        <line x1="50" y1="20" x2="50" y2="80" stroke="white" strokeWidth="0.3" strokeDasharray="1 0.8" />

        {/* Wrestlers */}
        <g transform="translate(41, 50)">
          <circle r="4.5" fill="#ef4444" stroke="white" strokeWidth="0.5" />
          <text y="1.6" textAnchor="middle" fontSize="4" fill="white" fontWeight="800" fontFamily="ui-sans-serif, system-ui">
            A
          </text>
        </g>
        <g transform="translate(59, 50)">
          <circle r="4.5" fill="#3b82f6" stroke="white" strokeWidth="0.5" />
          <text y="1.6" textAnchor="middle" fontSize="4" fill="white" fontWeight="800" fontFamily="ui-sans-serif, system-ui">
            B
          </text>
        </g>

        {/* Referee */}
        <circle cx="50" cy="68" r="2.4" fill="white" stroke="#0f172a" strokeWidth="0.4" />
        <text x="50" y="75" textAnchor="middle" fontSize="2.4" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          referee
        </text>

        {/* Callouts */}
        <text x="50" y="14" textAnchor="middle" fontSize="3" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          WIN: opponent's back, knee, hand or head hits the sand
        </text>
        <text x="50" y="92" textAnchor="middle" fontSize="2.6" fill="#94a3b8" fontFamily="ui-sans-serif, system-ui">
          the crowd surrounds the ring on every side
        </text>
      </svg>
    </DiagramCanvas>
  );
}
