// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1A1A2E',
        'dark-lighter': '#2A2A40',
        accent: '#00F891',
        'accent-dark': '#00B066',
        'text-light': '#E0E0E0',
        'text-muted': '#A0A0A0',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backdropFilter: {
          'none': 'none',
          'blur': 'blur(80px)', // Pode usar qualquer valor de desfoque
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;