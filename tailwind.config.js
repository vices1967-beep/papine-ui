/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0a",
          light: "#f9fafb",
        },
        surface: {
          DEFAULT: "#111111",
          light: "#ffffff",
        },
        muted: {
          DEFAULT: "#2E3B32",
          light: "#E0E7E2",
        },
        accent: {
          DEFAULT: "var(--accent-color, #00A835)",
          soft: "var(--accent-color-soft, #00A83522)",
          strong: "var(--accent-color-strong, #00B945)",
        },
        text: {
          DEFAULT: "#EDEDED",
          light: "#222222",
          muted: "#BFC7C2",
          mutedLight: "#555555",
        },
      },
      boxShadow: {
        glow: "0 0 10px rgba(0,168,53,0.3)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
}