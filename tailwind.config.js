/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {

        'outside': '-2px -2px 2px rgba(250, 249, 246, 0.95)',       // Glow effect
        'inside': '3px 3px 5px rgba(250, 249, 246, 0.95) inset',
        'circle': '3px 2px 3px rgba(250, 249, 246, 0.90) inset',
        'line': '2px 3px 2px rgba(250, 249, 246, 0.95) inset',
        
      },

      
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // Add the scrollbar plugin
  ],
}

