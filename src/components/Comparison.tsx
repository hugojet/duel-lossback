import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TELEGRAM_URL } from '../seo/siteMeta'

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

type Row = {
  feature: string
  partnerLabel: string
  partnerValue: string
  publicLabel: string
  publicValue: string
}

const rows: Row[] = [
  {
    feature: 'Headline weekly lossback',
    partnerLabel: 'Champion via partner desk',
    partnerValue: 'Up to 20%',
    publicLabel: 'Top public loyalty tier',
    publicValue: '4% – 7%',
  },
  {
    feature: 'Time from intro to activation',
    partnerLabel: 'Hugo handles intake',
    partnerValue: '24 – 48 hours',
    publicLabel: 'XP-based progression',
    publicValue: '8 – 14 weeks',
  },
  {
    feature: 'Rollover applied to lossback',
    partnerLabel: 'Cash, withdrawable on credit',
    partnerValue: 'Zero',
    publicLabel: 'Standard tier bonuses',
    publicValue: '30x – 50x typical',
  },
  {
    feature: 'Sportsbook losses included',
    partnerLabel: 'Blended into weekly total',
    partnerValue: 'Yes, fully',
    publicLabel: 'Casino-only by default',
    publicValue: 'No / partial',
  },
  {
    feature: 'Cashier ceiling',
    partnerLabel: 'Negotiable per account',
    partnerValue: 'Lifted on request',
    publicLabel: 'Operator default caps',
    publicValue: 'Fixed',
  },
  {
    feature: 'Settlement cadence',
    partnerLabel: 'Auto every Monday',
    partnerValue: 'Weekly',
    publicLabel: 'Loyalty tier batch',
    publicValue: 'Monthly drip',
  },
  {
    feature: 'Issue escalation route',
    partnerLabel: 'Direct VIP desk line',
    partnerValue: 'Hours',
    publicLabel: 'Standard ticket queue',
    publicValue: 'Days',
  },
  {
    feature: 'Closed-event seeding',
    partnerLabel: 'Champion-only invitations',
    partnerValue: 'Included',
    publicLabel: 'Public leaderboards',
    publicValue: 'Public-only',
  },
  {
    feature: 'Account visibility',
    partnerLabel: 'Private partner book',
    partnerValue: 'Discreet',
    publicLabel: 'Loyalty leaderboard',
    publicValue: 'Visible',
  },
]

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-duel-dark">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="orange-badge mb-4">Channel Spread</span>
            <h2 className="section-heading mt-2">
              Same Casino, Same Cashier —{' '}
              <span className="text-duel-gradient">Two Radically Different Commercial Outcomes</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Below is the side-by-side between joining Duel through Hugo's partner channel
              and joining through any public path. Same platform, very different paperwork.
            </p>
          </div>
        </Reveal>

        {/* Split layout: each row uses a duel-style split with central vertical bar */}
        <div className="space-y-3 max-w-5xl mx-auto">
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.34, 1.56, 0.64, 1] }}
              viewport={{ once: true }}
              className="rounded-xl border border-duel-border bg-duel-card/40 overflow-hidden"
            >
              {/* Feature label header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-duel-darker/60 border-b border-duel-border/60">
                <div className="flex items-center gap-3">
                  <span className="num text-xs text-duel-orange-light/70 font-display tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-white font-bold font-display text-sm sm:text-base">{row.feature}</span>
                </div>
              </div>

              {/* Duel split row */}
              <div className="grid grid-cols-1 sm:grid-cols-11 items-stretch">
                {/* Left side — partner channel */}
                <div className="sm:col-span-5 p-4 sm:p-5 bg-duel-orange/8">
                  <div className="text-[10px] uppercase tracking-wider text-duel-orange-light font-display mb-1">
                    {row.partnerLabel}
                  </div>
                  <div className="text-duel-orange-light font-extrabold text-lg num">
                    {row.partnerValue}
                  </div>
                </div>

                {/* Central duel divider (vertical with "VS" badge) */}
                <div className="hidden sm:flex sm:col-span-1 items-center justify-center relative">
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-duel-border to-transparent" aria-hidden="true" />
                  <span className="relative bg-duel-card border border-duel-border text-slate-400 text-[10px] font-display font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                    vs
                  </span>
                </div>

                {/* Right side — public path */}
                <div className="sm:col-span-5 p-4 sm:p-5">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-display mb-1">
                    {row.publicLabel}
                  </div>
                  <div className="text-slate-300 font-semibold text-lg num">
                    {row.publicValue}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            The platform is identical. The commercial paperwork is not. For a Champion-volume
            player, the spread between the two columns is worth four-figure sums every single
            week of activity.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
            </svg>
            Claim My Deal
          </a>
        </Reveal>
      </div>
    </section>
  )
}
