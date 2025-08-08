// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- MUDANÇA AQUI!
    autoprefixer: {},
  },
};

export default config;