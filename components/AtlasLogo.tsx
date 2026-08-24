import React from "react";

/**
 * Gemopedia logo — a compact "atlas" mark.
 *
 * Reads as a spherical globe with orbits, a bright core, and a small
 * satellite marker — hinting at "visual encyclopedia of world sports".
 * Pure SVG, colour-safe, no external assets.
 */
export function AtlasLogo({ className = "h-10 w-10" }: { className?: string }) {
  const gradId = "atlas-grad";
  const ringId = "atlas-ring";
  const shineId = "atlas-shine";
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id={ringId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
        <radialGradient id={shineId} cx="35%" cy="30%" r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="60%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer soft glow */}
      <circle cx="32" cy="32" r="30" fill={`url(#${gradId})`} opacity="0.18" />

      {/* Core sphere */}
      <circle cx="32" cy="32" r="24" fill={`url(#${gradId})`} />
      {/* Sheen highlight */}
      <circle cx="32" cy="32" r="24" fill={`url(#${shineId})`} />

      {/* Meridians */}
      <ellipse cx="32" cy="32" rx="24" ry="9" fill="none" stroke="white" strokeOpacity="0.55" strokeWidth="1.3" />
      <ellipse cx="32" cy="32" rx="9" ry="24" fill="none" stroke="white" strokeOpacity="0.55" strokeWidth="1.3" />
      <path d="M9 32c8-9 38-9 46 0" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1.2" />
      <path d="M9 32c8 9 38 9 46 0" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1.2" />

      {/* Orbit ring (tilted) */}
      <g transform="rotate(-24 32 32)">
        <ellipse cx="32" cy="32" rx="30" ry="10" fill="none" stroke={`url(#${ringId})`} strokeWidth="1.6" opacity="0.9" />
        <circle cx="62" cy="32" r="2.8" fill={`url(#${ringId})`} />
      </g>

      {/* Bright core */}
      <circle cx="32" cy="32" r="3.2" fill="white" />
      <circle cx="32" cy="32" r="1.3" fill="#0f172a" />
    </svg>
  );
}
