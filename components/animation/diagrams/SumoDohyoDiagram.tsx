import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * The sumo dohyō — the elevated clay ring bordered by tawara. Static
 * technical view (complements the animated push-out).
 */
export function SumoDohyoDiagram() {
  return (
    <DiagramCanvas
      title="The dohyō"
      description="A 4.55 m circle of packed clay bordered by rice-straw bales (tawara), set on a raised platform. Two shikiri-sen white lines mark the starting positions."
      aspect="16/12"
      legend={[
        { color: "#8a5a1d", label: "Platform" },
        { color: "#d3a76a", label: "Clay top" },
        { color: "#a06a1e", label: "Tawara" },
      ]}
    >
      <svg viewBox="0 0 100 78" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Base platform */}
        <rect x="8" y="8" width="84" height="62" rx="2" fill="#8a5a1d" />
        {/* Clay top */}
        <rect x="14" y="12" width="72" height="54" rx="1.5" fill="#d3a76a" />
        {/* Ring — 4.55 m circle */}
        <circle cx="50" cy="39" r="19" fill="#e8c58f" stroke="#a06a1e" strokeWidth="1.4" strokeDasharray="1.2 1" />
        {/* Starting lines (shikiri-sen) */}
        <line x1="45" y1="38" x2="48.5" y2="38" stroke="white" strokeWidth="0.7" />
        <line x1="51.5" y1="38" x2="55" y2="38" stroke="white" strokeWidth="0.7" />
        {/* Salt corners */}
        <circle cx="24" cy="39" r="1.2" fill="white" opacity="0.55" />
        <circle cx="76" cy="39" r="1.2" fill="white" opacity="0.55" />

        {/* Callouts */}
        <text x="50" y="8" textAnchor="middle" fontSize="3.6" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui" style={{ paintOrder: "stroke", stroke: "#0f172a", strokeWidth: 0.6 }}>
          4.55 m ring diameter
        </text>
        <text x="50" y="76" textAnchor="middle" fontSize="2.8" fill="#0f172a" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
          Platform 5.7 m square · 66 cm high
        </text>

        {/* Arrows for the tawara */}
        <line x1="70" y1="24" x2="63" y2="30" stroke="white" strokeWidth="0.4" />
        <text x="72" y="23" fontSize="2.4" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          tawara
        </text>
      </svg>
    </DiagramCanvas>
  );
}
