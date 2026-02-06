// postcss.config.js

module.exports = {
  plugins: {
    // 🛑 CRITICAL FIX: The key must be a STRING and NOT a require() function. 🛑
    // This is the string key that your unique environment needs.
    "@tailwindcss/postcss": {},

    // Autoprefixer remains correct
    autoprefixer: {},
  },
};
