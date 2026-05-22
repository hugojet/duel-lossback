import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { TELEGRAM_URL, TELEGRAM_HANDLE } from '../seo/siteMeta'

function ParallaxGrid() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    let targetX = 0
    let targetY = 0
    let curX = 0
    let curY = 0

    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth
      const h = window.innerHeight
      targetX = (e.clientX / w - 0.5) * 24
      targetY = (e.clientY / h - 0.5) * 24
    }
    const animate = () => {
      curX += (targetX - curX) * 0.06
      curY += (targetY - curY) * 0.06
      el.style.transform = `translate(${curX}px, ${curY}px)`
      raf = requestAnimationFrame(animate)
    }
    animate()
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="absolute inset-0 duel-grid-bg pointer-events-none will-change-transform"
      aria-hidden="true"
      style={{ scale: '1.08' }}
    />
  )
}

const trustBadges = [
  { icon: '⚔', label: 'Curacao Licensed' },
  { icon: '◆', label: '$5B+ Wagered' },
  { icon: '⚡', label: 'Crypto Cashier 24/7' },
  { icon: '🛡', label: 'Provably Fair Originals' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-duel-darker"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-duel-hero" />
      <ParallaxGrid />

      {/* Static gradient blobs (separate layer, no parallax) */}
      <div
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-50 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.45) 0%, rgba(249,115,22,0) 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0) 65%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 section-container py-24 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-6 flex justify-center"
        >
          <span className="orange-badge text-sm px-4 py-2">
            ⚔ Private Duel VIP Channel · Champion Whitelist Open
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] font-display"
        >
          Reclaim Up To{' '}
          <span className="text-duel-gradient">20% Of Every</span>
          <br />
          Losing Week You Run
          <br />
          On <span className="text-duel-gradient">Duel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Champion-volume players on Duel.com can plug into a private VIP rebate channel and
          recover up to{' '}
          <strong className="text-white">20% of their net weekly losses</strong> —
          settled in crypto every Monday, with zero rollover and no take-back clauses. The
          structure is off-menu and only opens through direct partner introduction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg animate-orange-pulse w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
            </svg>
            Claim My Champion Rebate
          </a>
          <a
            href="#calculator"
            className="btn-secondary text-lg w-full sm:w-auto justify-center"
          >
            Run The Numbers First ↓
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-duel-card/65 border border-duel-border px-4 py-2 rounded-md text-sm text-slate-300 backdrop-blur-sm"
            >
              <span className="text-duel-orange-light" aria-hidden="true">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.7 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden border border-duel-border shadow-[0_0_60px_rgba(249,115,22,0.18)]">
            <div className="aspect-video bg-duel-card flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/JtIY8mq3xZk?autoplay=0&mute=1&controls=1&rel=0"
                title="Duel Casino Walkthrough"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-500 text-center">
            Duel.com — streamer-favourite crypto casino, originals + sportsbook on one wallet
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 1.6, delay: 1.1, repeat: Infinity }}
          className="mt-16 flex justify-center"
          aria-hidden="true"
        >
          <svg className="w-6 h-6 text-duel-orange glow-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>

        <p className="sr-only">
          Contact Hugo, Duel VIP host, on Telegram: {TELEGRAM_HANDLE}
        </p>
      </div>
    </section>
  )
}
