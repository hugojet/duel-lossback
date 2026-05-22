/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'duel-dark': '#0f172a',
        'duel-darker': '#020617',
        'duel-card': '#1e293b',
        'duel-card-light': '#293548',
        'duel-border': '#334155',
        'duel-orange': '#f97316',
        'duel-orange-light': '#fb923c',
        'duel-orange-dim': '#c2410c',
        'duel-blue': '#2563eb',
        'duel-blue-light': '#3b82f6',
        'duel-emerald': '#10b981',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Sora', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'duel-hero': 'radial-gradient(ellipse at 70% 10%, rgba(249,115,22,0.20) 0%, rgba(15,23,42,0) 55%), radial-gradient(ellipse at 20% 100%, rgba(37,99,235,0.15) 0%, rgba(15,23,42,0) 60%)',
        'duel-card-grad': 'linear-gradient(135deg, rgba(30,41,59,0.85) 0%, rgba(15,23,42,0.95) 100%)',
        'duel-orange-glow': 'radial-gradient(ellipse at center, rgba(249,115,22,0.40) 0%, transparent 65%)',
        'duel-grid': 'linear-gradient(rgba(249,115,22,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.18) 1px, transparent 1px)',
      },
      boxShadow: {
        'orange-glow': '0 0 32px rgba(249,115,22,0.50)',
        'orange-glow-sm': '0 0 16px rgba(249,115,22,0.30)',
        'blue-glow': '0 0 28px rgba(37,99,235,0.40)',
        'card': '0 6px 28px rgba(0,0,0,0.55)',
        'lift': '0 18px 40px -10px rgba(249,115,22,0.35), 0 0 0 1px rgba(249,115,22,0.20)',
      },
      animation: {
        'orange-pulse': 'orangePulse 2.6s ease-in-out infinite',
        'grid-drift': 'gridDrift 28s ease-in-out infinite',
        'ember-rise': 'emberRise linear infinite',
        'glow-sweep': 'glowSweep 12s ease-in-out infinite',
      },
      keyframes: {
        orangePulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(249,115,22,0.40)' },
          '50%': { boxShadow: '0 0 48px rgba(249,115,22,0.80)' },
        },
        gridDrift: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(8px, -6px)' },
        },
        emberRise: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-120vh) scale(0.6)', opacity: '0' },
        },
        glowSweep: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
