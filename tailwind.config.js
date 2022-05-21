module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  safelist: [
    { pattern: /^(top|left)-[[3-6][0-9]|70%]$/ },
    { pattern: /^-translate-(x|y)-[-[3-6][0-9]|70%]$/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
