import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      "1": "1px",
    },
    extend: {
      fontFamily: {
        title: ["var(--font-title)"],
        content: ["var(--font-content)"],
      },
      colors: {
        charcoal: "#1a2d35",
        "dark-charcoal": "#0b1316",
        "ghost-white": "#fafafa",
      },
    },
  },
  plugins: [],
} satisfies Config;
