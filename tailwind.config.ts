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
        charcoal: "#0F111C",
        "dark-charcoal": "#0d0e12",
        "ghost-white": "#EBEDFF",
      },
      boxShadow: {
        'header': '0 0 10px 0 rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
} satisfies Config;
