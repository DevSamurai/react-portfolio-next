/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      openSans: ["Open Sans", "var(--font-open-sans)"],
      handwriting: ["Caveat", "var(--font-caveat)"],
      headline: ["Poppins", "var(--font-poppins)"],
    },
  },
  plugins: [],
};
