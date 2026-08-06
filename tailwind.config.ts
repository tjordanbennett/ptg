import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ptg: {
          navy: "#021F43", // Midnight Navy — primary dark
          blue: "#0034A0", // ⚠️ guide prints #00340A (green). Treated as typo. Do not revert.
          ember: "#EB4900", // Signal Ember — primary CTA
          clear: "#80CEFF", // Clear Blue — light accent
          leaf: "#B4FF00", // Vivid Leaf — signature accent, sparingly
          slate: "#334155", // = slate-700
          steel: "#94A3B8", // = slate-400
          lightgray: "#E5E7EB", // = gray-200
          offwhite: "#F5F7F9",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        // 8px baseline is the default Tailwind scale; section rhythm helpers:
        "section-y": "8rem", // 128px desktop
        "section-y-sm": "3.5rem", // 56px mobile
      },
      transitionTimingFunction: {
        "ptg-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
