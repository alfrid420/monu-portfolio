import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#08080a",
          soft: "#0d0d10",
          card: "#111114",
          border: "#1f1f24",
        },
        lime: {
          DEFAULT: "#c6ff3c",
          soft: "#d9ff7a",
        },
        magenta: {
          DEFAULT: "#ff2f92",
          soft: "#ff7ab8",
        },
        cyan: {
          DEFAULT: "#22e5ff",
          soft: "#7af0ff",
        },
        amber: {
          DEFAULT: "#ffb020",
        },
        ink: {
          DEFAULT: "#f5f5f7",
          muted: "#9a9aa3",
          faint: "#5c5c66",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at center, var(--tw-gradient-from), transparent 70%)",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slower": "spin 70s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
