/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rofech's original brand colors — bright yellow and black.
        'rofech-limewash': '#FFFFFF',
        'rofech-paper': '#FAFAFA',
        'rofech-stone': '#E4E4E4',
        'rofech-concrete': '#6B6B6B',
        'rofech-ink': '#000000',
        'rofech-ink-soft': '#3A3A3A',
        'rofech-brass': '#FFED00',
        'rofech-brass-light': '#FFF45C',
        'rofech-canopy': '#4B5D45',
      },
      fontFamily: {
        // Body copy set in a technical, drafting-adjacent grotesk.
        'sans': ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        // Display face for headlines — a soft, characterful serif
        // used sparingly, the way a studio name appears on a plan stamp.
        'heading': ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        // Spec-sheet / title-block annotations.
        'mono': ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'widest2': '0.28em',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out both',
        'rise': 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'draw': 'draw 1.1s cubic-bezier(0.65, 0, 0.35, 1) both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        rise: {
          '0%': { transform: 'translateY(18px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        draw: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
