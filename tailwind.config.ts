// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Adicione outras pastas se você tiver código Tailwind nelas, ex:
    // './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Defina suas cores personalizadas aqui
        dark: '#1A1A2E',       // Fundo escuro principal (quase preto azulado)
        'dark-lighter': '#2A2A40', // Um tom ligeiramente mais claro para cards/elementos
        accent: '#00F891',     // Um verde neon vibrante para acentos
        'accent-dark': '#00B066', // Um tom mais escuro do acento
        'text-light': '#E0E0E0', // Cor de texto clara para contraste no fundo escuro
        'text-muted': '#A0A0A0', // Cor de texto suave para descrições
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], // Uma fonte marcante para títulos
        body: ['Inter', 'sans-serif'],     // Uma fonte legível para corpo de texto
      },
      // Você pode adicionar outras extensões de tema aqui, se quiser
    },
  },
  plugins: [],
};

export default config;