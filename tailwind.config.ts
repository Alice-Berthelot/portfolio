import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)"],
        content: ["var(--font-content)"],
      },
      colors: {
        charcoal: "#0F111C",
        "dark-charcoal": "#0d0e12",
        "ghost-white": "#EBEDFF",
        "regal-blue": "#8591C2",
      },
      boxShadow: {
        header: "0 0 10px 0 rgba(0, 0, 0, 0.4)",
      },
    },
  },
} satisfies Config;
