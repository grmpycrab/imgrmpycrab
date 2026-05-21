import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Times New Roman", "serif"],
        slab: ["var(--font-slab)", "Georgia", "serif"],
        display: ["var(--font-display)", "Times New Roman", "serif"],
      },
      colors: {
        bg: "var(--bg)",
        "bg-elev": "var(--bg-elev)",
        "bg-elev-2": "var(--bg-elev-2)",
        fg: "var(--fg)",
        "fg-dim": "var(--fg-dim)",
        "fg-faint": "var(--fg-faint)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
      },
      borderColor: {
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
      },
    },
  },
  plugins: [],
};

export default config;
