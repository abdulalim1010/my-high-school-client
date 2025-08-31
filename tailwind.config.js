/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",   // Corporate Blue
        secondary: "#64748B", // Gray
        accent: "#0EA5E9",    // Sky Blue
        background: "#F8FAFC",
        text: "#1F2937",      // Dark text
      },
    },
  },
  plugins: [],
}
