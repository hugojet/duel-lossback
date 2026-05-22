import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const splitRows: Array<{
  title: string
  rebate: string
  others: { kind: string; text: string }[]
}> = [
  {
    title: 'Withdrawability',
    rebate: 'Real cash, no lock-up',
    others: [
      { kind: 'Deposit bonus', text: 'Locked behind rollover' },
      { kind: 'Rakeback', text: 'Real cash' },
      { kind: 'Loyalty rewards', text: 'Mixed by tier' },
    ],
  },
  {
    title: 'Rollover obligation',
    rebate: 'Zero',
    others: [
      { kind: 'Deposit bonus', text: '30x to 50x of bonus' },
      { kind: 'Rakeback', text: 'Zero' },
      { kind: 'Loyalty rewards', text: 'Partial on top tier' },
    ],
  },
  {
    title: 'Calculation basis',
    rebate: 'Net loss across verticals',
    others: [
      { kind: 'Deposit bonus', text: 'Deposit amount' },
      { kind: 'Rakeback', text: 'Volume of bets' },
      { kind: 'Loyalty rewards', text: 'XP / level points' },
    ],
  },
  {
    title: 'Settlement timing',
    rebate: 'Monday morning auto',
    others: [
      { kind: 'Deposit bonus', text: 'Single shot on claim' },
      { kind: 'Rakeback', text: 'Daily / weekly drip' },
      { kind: 'Loyalty rewards', text: 'Monthly batch' },
    ],
  },
  {
    title: 'Practical ceiling',
    rebate: 'Up to 20% of net loss',
    others: [
      { kind: 'Deposit bonus', text: 'Fixed dollar cap' },
      { kind: 'Rakeback', text: '~1% to 4%' },
      { kind: 'Loyalty rewards', text: '4% to 7% on top tier' },
    ],
  },
]

export default function WhatIsLossback() {
  return (
    <section id="what-is-lossback" className="py-24 bg-duel-dark">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="orange-badge mb-4">Reclaim 101</span>
            <h2 className="section-heading mt-2">
              The Difference Between A Rebate Deal, A Bonus,{' '}
              <span className="text-duel-gradient">And A Loyalty Tier</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Four reward mechanics live on every crypto casino and only one of them genuinely
              rewards an existing high-volume player. Here is how the maths actually shakes out.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                A <strong className="text-white">Duel lossback</strong> — referred to inside
                the partner channel simply as "the rebate" — pays back a percentage of your
                net losses across a seven-day window. It settles in crypto with no rollover
                requirement, no game restrictions, and no time decay attached. The structure
                is the single highest-EV reward instrument on the platform and sits
                permanently outside the public promo grid.
              </p>
              <p>
                Four reward mechanics get blurred together in casino conversations. Each one
                has a genuinely different effect on your long-run expected value:
              </p>
              <div className="space-y-4">
                <div className="card border-l-4 border-l-duel-orange">
                  <h3 className="font-bold text-white text-lg mb-2 font-display">Rebate (the deal)</h3>
                  <p>
                    Tracks <em>net loss</em> — total wagered minus total returned — across the
                    settlement window and pays a fixed percentage of that figure back to your
                    wallet. If a week closes $30,000 wagered with $33,500 returned and a net
                    loss of $5,500, a 20% Champion rebate clears{' '}
                    <strong className="text-white">$1,100 on Monday morning</strong>. No
                    rollover, no withdrawal hold, no clawback against next week.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-bold text-white text-lg mb-2 font-display">Rakeback</h3>
                  <p>
                    Pays a slice of the operator's playing margin on every bet, win or lose.
                    Volume-linked and useful for fast-frequency grinders, but typically capped
                    1% to 4% of the actual margin — and crucially indifferent to whether your
                    session ended up or down.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-bold text-white text-lg mb-2 font-display">Deposit / reload bonuses</h3>
                  <p>
                    Headline number looks generous (100% match, free spins, Cases vouchers)
                    but every dollar is shackled to a rollover multiplier engineered so the
                    expected withdrawable value lands at or below zero. Acquisition tool, not
                    a retention reward for existing players.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-bold text-white text-lg mb-2 font-display">Public loyalty tiers</h3>
                  <p>
                    XP-based ladder paying out level-up bonuses, periodic rakeback bursts and
                    tournament entries. Fine for casual sessions, but the meaningful rebate
                    percentages cap out around 7%-ish even at the very top tier — and only
                    after months of climbing. The partner channel bypasses the entire ladder.
                  </p>
                </div>
              </div>
              <p>
                The <strong className="text-white">Champion rebate</strong> Hugo brokers
                short-circuits the public ladder. Authorised partners negotiate directly with
                the VIP operations desk, which means the percentage you land on is calibrated
                to your real volume — not to which loyalty colour you have ground out. For a
                player processing $120,000+ per month, the gap between a public top-tier 6%
                rebate and a negotiated 20% Champion rebate is roughly{' '}
                <strong className="text-white">$1,400 to $2,200 of recovered loss per week</strong>,
                applied directly to the bankroll.
              </p>
              <p>
                None of this changes single-session variance. A brutal Cases run is still a
                brutal Cases run. What changes is the long-run{' '}
                <strong className="text-white">effective playing margin</strong>: a 3.2%
                statistical margin combined with a 20% rebate behaves like a 2.56% effective
                margin across the year. That small absolute shift, compounded over annual
                volume, is the entire economic reason the partner channel exists.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="sticky top-8 space-y-8">
              <div className="card p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-6 text-center font-display">
                  One rebate cycle, drawn as a ring
                </h3>
                {/* 360-degree ring diagram — single circular flow */}
                <svg viewBox="0 0 360 360" className="w-full max-w-xs mx-auto" aria-label="Circular Duel rebate settlement diagram">
                  <defs>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="55%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="ringBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="100%" stopColor="#1e293b" />
                    </linearGradient>
                  </defs>

                  {/* Background track */}
                  <circle cx="180" cy="180" r="130" fill="none" stroke="url(#ringBg)" strokeWidth="22" />
                  {/* Coloured progress (almost full circle) */}
                  <circle
                    cx="180" cy="180" r="130"
                    fill="none"
                    stroke="url(#ringGrad)"
                    strokeWidth="22"
                    strokeDasharray={`${2 * Math.PI * 130 * 0.85} ${2 * Math.PI * 130}`}
                    strokeDashoffset={2 * Math.PI * 130 * 0.075}
                    strokeLinecap="round"
                    transform="rotate(-90 180 180)"
                  />

                  {/* Stage 1 — Player (top) */}
                  <circle cx="180" cy="50" r="20" fill="#1e293b" stroke="#f97316" strokeWidth="3" />
                  <text x="180" y="56" textAnchor="middle" fill="#fb923c" fontSize="13" fontWeight="800">1</text>
                  <text x="180" y="22" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">YOU · CHAMPION</text>

                  {/* Stage 2 — Duel (right) */}
                  <circle cx="310" cy="180" r="20" fill="#1e293b" stroke="#fb923c" strokeWidth="3" />
                  <text x="310" y="186" textAnchor="middle" fill="#fb923c" fontSize="13" fontWeight="800">2</text>
                  <text x="340" y="184" textAnchor="start" fill="#ffffff" fontSize="11" fontWeight="700" transform="rotate(0, 340, 184)">
                    <tspan x="338" dy="0">DUEL.COM</tspan>
                    <tspan x="338" dy="14" fill="#94a3b8" fontWeight="500" fontSize="10">~3.2% margin</tspan>
                  </text>

                  {/* Stage 3 — Hugo (bottom) */}
                  <circle cx="180" cy="310" r="20" fill="#1e293b" stroke="#3b82f6" strokeWidth="3" />
                  <text x="180" y="316" textAnchor="middle" fill="#3b82f6" fontSize="13" fontWeight="800">3</text>
                  <text x="180" y="346" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="700">HUGO · VIP DESK</text>

                  {/* Stage 4 — Wallet (left) */}
                  <circle cx="50" cy="180" r="20" fill="#f97316" stroke="#2563eb" strokeWidth="3" />
                  <text x="50" y="186" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800">4</text>
                  <text x="20" y="184" textAnchor="end" fill="#ffffff" fontSize="11" fontWeight="700">
                    <tspan x="22" dy="0">$1,100</tspan>
                    <tspan x="22" dy="14" fill="#94a3b8" fontWeight="500" fontSize="10">paid Monday</tspan>
                  </text>

                  {/* Centre callout */}
                  <text x="180" y="170" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Sora, sans-serif">7 DAYS</text>
                  <text x="180" y="192" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="600">net-loss tally</text>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '0x', label: 'Rollover on rebate' },
                  { value: '20%', label: 'Champion rate cap' },
                  { value: '7d', label: 'Settlement window' },
                  { value: 'Mon', label: 'Wire arrives' },
                ].map((stat) => (
                  <div key={stat.label} className="card text-center">
                    <div className="num text-2xl font-extrabold text-duel-gradient">{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Comparison split-screen — Rebate column on left, three other mechanics stacked vertically on right with a central divider */}
        <Reveal className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center font-display">
            Rebate vs. the rest — broken down by mechanic
          </h3>
          <div className="space-y-3">
            {splitRows.map((row, i) => (
              <motion.div
                key={row.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-3 rounded-xl border border-duel-border bg-duel-card/40 p-4 sm:p-5 relative overflow-hidden"
              >
                {/* Vertical centre divider (visible on lg+) */}
                <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-duel-orange/40 to-transparent" aria-hidden="true" />

                <div className="lg:col-span-2 px-2 flex items-center">
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-display">{String(i + 1).padStart(2, '0')}</div>
                  <div className="ml-3 text-white font-bold font-display text-sm">{row.title}</div>
                </div>

                {/* Left side: Rebate winner */}
                <div className="lg:col-span-4 rounded-lg bg-duel-orange/10 border border-duel-orange/35 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-wider text-duel-orange-light font-display mb-1">
                    Rebate (partner channel)
                  </div>
                  <div className="text-duel-orange-light font-bold text-sm">
                    {row.rebate}
                  </div>
                </div>

                {/* Right side: three stacked mini-rows */}
                <div className="lg:col-span-6 space-y-1.5">
                  {row.others.map((o) => (
                    <div key={o.kind} className="flex items-baseline justify-between rounded-md bg-duel-darker/50 border border-duel-border/60 px-3 py-1.5">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-display">{o.kind}</span>
                      <span className="text-slate-300 text-sm">{o.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
