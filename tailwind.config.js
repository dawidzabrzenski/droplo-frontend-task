/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-inter)"] },
      colors: {
        "bg-primary": "#fff",
        "bg-secondary": "#f9fafb",
        "border-primary": "#d0d5dd",
        "border-secondary": "#f9fafb",
        "button-primary-bg": "#7f59d9",
        "button-secondary-color-bg": "#fff",
        "button-primary-border": "#7f59d9",
        "button-secondary-border": "#d0d5dd",
        "button-primary-fg": "#fff",
        "button-secondary-fg": "#344054",
        "button-secondary-color-fg": "#6941c6",
        "button-secondary-color-border": "#d6bbfb",
        "fg-quaternary": "#667085",
        "text-primary": "#101828",
        "text-secondary": "#344054",
        "text-tertiary": "#475467",
        "text-placeholder": "#667085",
      },
      boxShadow: {
        "shadow-xs": "0 1px 2px 0 rgba(16, 24, 40, 0.5)",
      },
    },
  },
  plugins: [],
};
