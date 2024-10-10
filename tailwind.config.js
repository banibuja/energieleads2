/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        satoshi: ["Satoshi", "Satoshi Placeholder", "sans-serif"],
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        pulseShrinkGrow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.7)' }, 
        },
      },
      animation: {
        pulseShrinkGrow: 'pulseShrinkGrow 1.5s ease-in-out infinite',
      },
      backdropBlur: {
        '24': '24px', 
      },
    },
  },
  plugins: [],
};
