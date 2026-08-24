import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * AFL oval — the enormous playing surface with four goal posts at each
 * end. The tall inner posts frame the 6-point "goal" gap; the shorter
 * outer posts frame the 1-point "behind" gap.
 */
export function AflOval() {
  return (
    <DiagramCanvas
      title="An AFL oval"
      description="The largest playing surface in team sport — usually a cricket ground during winter. Four vertical posts at each end: the tall centre two frame the 6-point goal; the shorter outer two mark the 1-point behinds."
      aspect="16/10"
      legend={[
        { color: "#166534", label: "Grass" },
        { color: "#22c55e", label: "6-pt goal gap" },
        { color: "#facc15", label: "1-pt behind gap" },
      ]}
    >
      <svg viewBox="0 0 200 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="200" height="120" fill="#052e16" />
        {/* Oval */}
        <ellipse cx="100" cy="60" rx="94" ry="55" fill="#166534" stroke="white" strokeWidth="0.5" />
        {/* Centre circle & square */}
        <circle cx="100" cy="60" r="6" fill="none" stroke="white" strokeWidth="0.4" />
        <rect x="90" y="50" width="20" height="20" fill="none" stroke="white" strokeWidth="0.3" />

        {/* 50-metre arcs */}
        <path d="M 32 60 A 38 38 0 0 0 32 60 M 32 40 A 38 38 0 0 1 32 80" fill="none" stroke="white" strokeWidth="0.3" strokeDasharray="1 0.6" />

        {/* Left goal set — 6-pt gap + 1-pt behind gaps */}
        <line x1="6" y1="52" x2="6" y2="68" stroke="#22c55e" strokeWidth="1.4" />
        <text x="10" y="61" fontSize="3" fill="#22c55e" fontWeight="800" fontFamily="ui-sans-serif, system-ui">
          6 pts
        </text>
        <g>
          <line x1="6" y1="44" x2="6" y2="52" stroke="#facc15" strokeWidth="1" />
          <line x1="6" y1="68" x2="6" y2="76" stroke="#facc15" strokeWidth="1" />
        </g>
        {/* 4 goal posts (dots for clarity) */}
        {[{ y: 44 }, { y: 52 }, { y: 68 }, { y: 76 }].map((p, i) => (
          <circle key={`lp-${i}`} cx="6" cy={p.y} r="1.2" fill="white" />
        ))}
        <text x="6" y="42" textAnchor="middle" fontSize="2.4" fill="#facc15" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          behind
        </text>
        <text x="6" y="82" textAnchor="middle" fontSize="2.4" fill="#facc15" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          behind
        </text>
        <text x="6" y="88" textAnchor="middle" fontSize="2.2" fill="#facc15" fontFamily="ui-sans-serif, system-ui">
          1 pt
        </text>

        {/* Right goal set */}
        <line x1="194" y1="52" x2="194" y2="68" stroke="#22c55e" strokeWidth="1.4" />
        <text x="190" y="61" textAnchor="end" fontSize="3" fill="#22c55e" fontWeight="800" fontFamily="ui-sans-serif, system-ui">
          6 pts
        </text>
        <line x1="194" y1="44" x2="194" y2="52" stroke="#facc15" strokeWidth="1" />
        <line x1="194" y1="68" x2="194" y2="76" stroke="#facc15" strokeWidth="1" />
        {[{ y: 44 }, { y: 52 }, { y: 68 }, { y: 76 }].map((p, i) => (
          <circle key={`rp-${i}`} cx="194" cy={p.y} r="1.2" fill="white" />
        ))}
        <text x="194" y="42" textAnchor="middle" fontSize="2.4" fill="#facc15" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          behind
        </text>
        <text x="194" y="82" textAnchor="middle" fontSize="2.4" fill="#facc15" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          behind
        </text>

        <text x="100" y="115" textAnchor="middle" fontSize="3" fill="white" fontFamily="ui-sans-serif, system-ui">
          135–185 m long · 110–155 m wide
        </text>
      </svg>
    </DiagramCanvas>
  );
}
