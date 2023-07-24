import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-commissioner)"],
      },
      colors: {
        primary: "hsl(181, 92%, 19%)",
        secondary: '#535E75',
        hover: "hsl(181, 92%, 25%)",
        focus: "	hsl(181, 92%, 30%)",
      },
      backgroundImage: {
        layoutbg: "url('/kusp-bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
