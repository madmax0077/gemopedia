import type { Config } from "tailwindcss";

/**
 * Tailwind theme for Gemopedia.
 *
 * The palette is grounded in a warm off-white / deep ink pair so the
 * sport-category accents (assigned per-sport, per-category, per-country)
 * shine without fighting the chrome. Every category maps to one of the
 * `accent-*` hues below via lib/data/categories.ts.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Inter", "sans-serif"],
        display: ["'Playfair Display'", "ui-serif", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        ink: {
          50: "#f7f7f9",
          100: "#eeeef2",
          200: "#d9d9e0",
          300: "#b8b8c4",
          400: "#82828f",
          500: "#5a5a66",
          600: "#3e3e48",
          700: "#2b2b34",
          800: "#1c1c24",
          900: "#0f0f14",
          950: "#07070b",
        },
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(15,15,20,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,15,20,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "dots-light":
          "radial-gradient(circle at 1px 1px, rgba(15,15,20,0.14) 1px, transparent 0)",
        "dots-dark":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.10) 1px, transparent 0)",
      },
      backgroundSize: {
        "grid-16": "16px 16px",
        "grid-32": "32px 32px",
        "dots-24": "24px 24px",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15, 15, 24, 0.18)",
        "soft-lg": "0 24px 60px -20px rgba(15, 15, 24, 0.28)",
        glow: "0 0 0 1px rgba(99,102,241,0.35), 0 12px 40px -12px rgba(99,102,241,0.45)",
        "glow-emerald":
          "0 0 0 1px rgba(16,185,129,0.35), 0 12px 40px -12px rgba(16,185,129,0.5)",
        "inner-glow":
          "inset 0 1px 0 0 rgba(255,255,255,0.15), inset 0 -1px 0 0 rgba(0,0,0,0.15)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "aurora-x": {
          "0%,100%": { transform: "translate3d(-10%, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(15%, 5%, 0) scale(1.15)" },
        },
        "aurora-y": {
          "0%,100%": { transform: "translate3d(10%, -8%, 0) scale(1.1)" },
          "50%": { transform: "translate3d(-15%, 10%, 0) scale(1)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ping-soft": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "80%,100%": { transform: "scale(2)", opacity: "0" },
        },
        "gradient-move": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "aurora-x": "aurora-x 18s ease-in-out infinite",
        "aurora-y": "aurora-y 22s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 40s linear infinite",
        "ping-soft": "ping-soft 2.2s cubic-bezier(0,0,0.2,1) infinite",
        "gradient-move": "gradient-move 12s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
