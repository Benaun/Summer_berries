import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px"
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },

    fontFamily: {
      main: "var(--font-montserrat)",
      alternative: "var(--font-montserrat-alternates)",
    },

    extend: {
      colors: {
        primary: "#10151f",
        secondary: "#475467",
        accent: {
          DEFAULT: "#362D6C",
          hover: "#79d3cc"
        },
      },
      boxShadow: {
        custom: "0px 14px 54px rgba(0,0,0,0.1)"
      },
    },
  },
  plugins: [],
} satisfies Config;
