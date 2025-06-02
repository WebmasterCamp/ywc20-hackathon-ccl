/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1s infinite',
        'float-more-delayed': 'float 3s ease-in-out 2s infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'slide-in': 'slide-in 1s ease-out',
        'pop-in': 'pop-in 0.5s cubic-bezier(0.26, 0.53, 0.74, 1.48)',
        'pop-in-delayed': 'pop-in 0.5s cubic-bezier(0.26, 0.53, 0.74, 1.48) 0.1s',
        'pop-in-more-delayed': 'pop-in 0.5s cubic-bezier(0.26, 0.53, 0.74, 1.48) 0.2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'pop-in': {
          '0%': {
            transform: 'scale(0)',
            opacity: '0'
          },
          '80%': {
            transform: 'scale(1.1)',
            opacity: '0.8'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        }
      },
      transitionTimingFunction: {
        'smooth-scroll': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} 