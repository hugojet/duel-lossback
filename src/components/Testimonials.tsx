import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type Testimonial = {
  quote: string
  username: string
  location: string
  flag: string
  tier: 'Challenger' | 'Champion'
  game: string
  stars: number
  /** Approximate height/weight hint for masonry — short / medium / tall */
  height: 'short' | 'medium' | 'tall'
}

const testimonials: Testimonial[] = [
  {
    quote: `Cases is what I play 80% of the time. The single most useful thing Hugo did was confirm Cases drops fully feed the weekly net-loss tally — not all lossback structures cover loot-box mechanics cleanly. Three months in, the Monday wire shows up with the exact predicted amount in BTC every single week.`,
    username: 'N.M.',
    location: 'Cape Town, South Africa',
    flag: '🇿🇦',
    tier: 'Challenger',
    game: 'Cases-heavy',
    stars: 5,
    height: 'medium',
  },
  {
    quote: `I am almost exclusively sportsbook — football parlays, NBA live, tennis in-play. The vast majority of "VIP deals" exclude sportsbook losses, which is exactly the part of my book that produces the biggest weekly swings. Hugo's Champion structure folds it all into a single lossback calc at the full 20% headline. That detail alone is worth four-figures per month for me.`,
    username: 'T.N.',
    location: 'Hanoi, Vietnam',
    flag: '🇻🇳',
    tier: 'Champion',
    game: 'Sportsbook',
    stars: 5,
    height: 'tall',
  },
  {
    quote: `Discretion is what made me move. I never wanted my volume showing on a public leaderboard. Hugo runs a private partner book — no profile, no community channel, no creator content. Tier, rate and volume stay between us and the Duel desk. Has been exactly as promised for nine months now.`,
    username: 'K.H.',
    location: 'Bergen, Norway',
    flag: '🇳🇴',
    tier: 'Champion',
    game: 'Mixed (Crash + Slots)',
    stars: 5,
    height: 'short',
  },
  {
    quote: `The transparency is the underrated bit. Every Monday at roughly 10am UTC I receive a clean breakdown: total wagered, total returned, net loss broken out by casino vs sportsbook, applied rate, exact USDT amount, on-chain tx hash. Six months in, the cumulative recovered amount matches Hugo's day-one projection within about 1.5%. That is how a real partner relationship is supposed to look.`,
    username: 'L.C.',
    location: 'Porto, Portugal',
    flag: '🇵🇹',
    tier: 'Champion',
    game: 'Mixed book + sportsbook',
    stars: 5,
    height: 'tall',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-duel-orange-light' : 'text-slate-600'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-duel-darker">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="orange-badge mb-4">Field Reports</span>
            <h2 className="section-heading mt-2">
              What Active Champion And Challenger Players Say{' '}
              <span className="text-duel-gradient">After Six Months In The Channel</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Unedited extracts from active partner-channel clients. Names and precise wager
              figures abbreviated at each client's request — discretion is part of the deal.
            </p>
          </div>
        </Reveal>

        {/* Masonry grid (no carousel) — clearly different from sibling sites */}
        <div className="columns-1 md:columns-2 lg:columns-2 gap-6 [column-fill:balance] max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.username}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              className={`card lift-card mb-6 break-inside-avoid ${
                t.height === 'tall' ? 'lg:py-8' : t.height === 'short' ? 'lg:py-4' : ''
              }`}
            >
              <div className="text-5xl text-duel-orange/25 font-serif leading-none mb-2" aria-hidden="true">"</div>
              <blockquote className="text-slate-200 leading-relaxed mb-5">
                {t.quote}
              </blockquote>
              <div className="border-t border-duel-border/50 pt-4 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-md bg-duel-orange/10 border border-duel-orange/30 flex items-center justify-center text-2xl" aria-hidden="true">
                    {t.flag}
                  </div>
                  <div>
                    <div className="text-white font-bold font-display text-sm">{t.username}</div>
                    <div className="text-slate-500 text-xs">{t.location} · {t.game}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StarRating count={t.stars} />
                  <span className="text-[10px] uppercase tracking-wider font-display text-duel-orange-light">
                    {t.tier}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
