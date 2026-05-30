import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0E0E0C',
        night: '#16170F',
        gold: '#C8A24B',
        goldlight: '#E3C77A',
        olive: '#6B7245',
        ivory: '#F4EFE6',
        warmgray: '#A9A498',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-jost)', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
    },
  },
  plugins: [],
};

export default config;
