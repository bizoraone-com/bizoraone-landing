import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#007BFF", light: "#3D9DFF", dark: "#0056B3" },
        accent: { DEFAULT: "#00C9A7", dark: "#009E8E" },
        neutral: { light: "#F5F7FA", DEFAULT: "#6B7280", dark: "#1E293B" }
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" },
      borderRadius: { xl2: "1.25rem" },
      maxWidth: {
        '6xl': '72rem',
      }
    }
  },
  plugins: []
} satisfies Config;
