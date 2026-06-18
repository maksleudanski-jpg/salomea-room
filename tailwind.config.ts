import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#101316",
        "graphite-soft": "#1C1F22",
        ink: "#1F201D",
        paper: "#EEE3D1",
        cream: "#FBF3E6",
        olive: "#66705F",
        rose: "#DCAE96",
        brass: "#B9A16F",
        wine: "#6F3F46",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Segoe UI", "Arial", "sans-serif"],
      },
      boxShadow: {
        "soft-brass": "0 28px 100px rgba(16, 19, 22, 0.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;
