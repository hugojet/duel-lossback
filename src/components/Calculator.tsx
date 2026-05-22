import { useState, useMemo, useEffect, useRef } from 'react'
import { motion, useInView, useSpring } from 'framer-motion'
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

function formatUSD(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}k`
  return `$${Math.round(n).toLocaleString()}`
}

/** Spring-driven counter with bouncy feel — distinct from the eased counters used elsewhere. */
function useSpringNumber(target: number) {
  const spring = useSpring(target, { stiffness: 120, damping: 18, mass: 0.6 })
  const [display, setDisplay] = useState(target)
  useEffect(() => {
    spring.set(target)
    const unsub = spring.on('change', (v) => setDisplay(v))
    return () => unsub()
  }, [target, spring])
  return display
}

type Tier = 'challenger' | 'champion'

type PlayStyle = {
  id: 'conservative' | 'mixed' | 'aggressive'
  label: string
  glyph: string
  marginPct: number
  description: string
}

const styles: PlayStyle[] = [
  { id: 'conservative', label: 'Conservative', glyph: '○', marginPct: 0.018, description: 'Mostly low-margin originals (Crash, Mines, Plinko). Smaller per-bet sizing, longer sessions.' },
  { id: 'mixed',        label: 'Mixed Book',  glyph: '◐', marginPct: 0.032, description: 'Balanced split across originals, slots, live tables and sportsbook. Most common Champion profile.' },
  { id: 'aggressive',   label: 'Aggressive',  glyph: '●', marginPct: 0.048, description: 'High-variance slots, Cases-heavy sessions, big sportsbook parlays. Bigger swings both ways.' },
]

export default function Calculator() {
  const [monthlyWager, setMonthlyWager] = useState(90_000)
  const [style, setStyle] = useState<PlayStyle>(styles[1])
  const [tier, setTier] = useState<Tier>('challenger')

  const rebatePct = tier === 'champion' ? 0.20 : 0.10

  const results = useMemo(() => {
    const monthlyLoss = monthlyWager * style.marginPct
    const monthlyRebate = monthlyLoss * rebatePct
    const weeklyRebate = monthlyRebate / 4.33
    const annualRebate = monthlyRebate * 12
    const effectiveMargin = style.marginPct * (1 - rebatePct) * 100
    return { monthlyLoss, monthlyRebate, weeklyRebate, annualRebate, effectiveMargin }
  }, [monthlyWager, style, rebatePct])

  const sWeekly = useSpringNumber(results.weeklyRebate)
  const sMonthly = useSpringNumber(results.monthlyRebate)
  const sAnnual = useSpringNumber(results.annualRebate)
  const sLoss = useSpringNumber(results.monthlyLoss)
  const sMargin = useSpringNumber(results.effectiveMargin)

  return (
    <section id="calculator" className="py-24 bg-duel-card/15">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="orange-badge mb-4">The Numbers First</span>
            <h2 className="section-heading mt-2">
              Duel Rebate Calculator —{' '}
              <span className="text-duel-gradient">What Your Monday Wire Actually Looks Like</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Drop in your real monthly volume, pick the wager style you actually run, choose
              the tier the desk would put you on. The figures below are statistical
              expectations of what the Monday-morning rebate clears.
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="card lift-card space-y-8">
              <h3 className="text-xl font-bold text-white font-display">Your wager profile</h3>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="wager-slider" className="text-slate-300 font-medium">Monthly wager volume</label>
                  <span className="text-duel-orange-light font-bold text-lg num">{formatUSD(monthlyWager)}</span>
                </div>
                <input
                  id="wager-slider"
                  className="duel-range w-full"
                  type="range"
                  min={5000}
                  max={400000}
                  step={5000}
                  value={monthlyWager}
                  onChange={e => setMonthlyWager(Number(e.target.value))}
                  aria-valuemin={5000}
                  aria-valuemax={400000}
                  aria-valuenow={monthlyWager}
                  aria-label="Monthly wager volume in US dollars"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1 num">
                  <span>$5k</span>
                  <span>$400k</span>
                </div>
              </div>

              <div>
                <p className="text-slate-300 font-medium mb-3">Playing style</p>
                <div className="grid grid-cols-3 gap-2">
                  {styles.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setStyle(s)}
                      className={`py-3 px-2 rounded-lg border font-bold text-sm transition-all duration-200 ${
                        style.id === s.id
                          ? 'border-duel-orange bg-duel-orange/10 text-duel-orange-light shadow-orange-glow-sm'
                          : 'border-duel-border text-slate-400 hover:border-slate-500'
                      }`}
                      aria-pressed={style.id === s.id}
                    >
                      <span className="text-xl block mb-1 text-duel-orange-light" aria-hidden="true">{s.glyph}</span>
                      <span className="font-display text-xs">{s.label}</span>
                      <div className="num text-[10px] font-normal mt-0.5 opacity-80">
                        ~{(s.marginPct * 100).toFixed(1)}% margin
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">{style.description}</p>
              </div>

              <div>
                <p className="text-slate-300 font-medium mb-3">Negotiated rebate tier</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTier('challenger')}
                    className={`py-3 px-4 rounded-lg border font-bold text-sm transition-all duration-200 font-display ${
                      tier === 'challenger'
                        ? 'border-duel-orange bg-duel-orange/10 text-duel-orange-light'
                        : 'border-duel-border text-slate-400 hover:border-slate-500'
                    }`}
                    aria-pressed={tier === 'challenger'}
                  >
                    Challenger
                    <div className="text-xs font-normal mt-0.5">10% rate</div>
                  </button>
                  <button
                    onClick={() => setTier('champion')}
                    className={`py-3 px-4 rounded-lg border font-bold text-sm transition-all duration-200 font-display ${
                      tier === 'champion'
                        ? 'border-duel-orange bg-duel-orange/10 text-duel-orange-light'
                        : 'border-duel-border text-slate-400 hover:border-slate-500'
                    }`}
                    aria-pressed={tier === 'champion'}
                  >
                    Champion ⚔
                    <div className="text-xs font-normal mt-0.5">20% rate</div>
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                * Numbers are statistical expectations using blended playing margins. Real
                weeks vary around the mean — that variance is exactly what a percentage-based
                rebate exists to soften.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-4">
              <div className="card lift-card border-2 border-duel-orange/50 bg-duel-orange/5">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-display">
                  <span className="w-8 h-8 rounded-md bg-duel-orange/20 flex items-center justify-center text-duel-orange-light">⚔</span>
                  Rebate projection
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-duel-border/40">
                    <span className="text-slate-400">Expected monthly net loss</span>
                    <span className="text-white font-bold text-lg num">{formatUSD(sLoss)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-duel-border/40">
                    <span className="text-slate-400">Weekly rebate ({(rebatePct * 100).toFixed(0)}%)</span>
                    <span className="text-duel-orange-light font-extrabold text-xl num">{formatUSD(sWeekly)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-duel-border/40">
                    <span className="text-slate-400">Monthly rebate total</span>
                    <span className="text-duel-blue-light font-extrabold text-xl num">{formatUSD(sMonthly)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-duel-border/40">
                    <span className="text-slate-400">Annual rebate projection</span>
                    <span className="text-duel-orange-light font-extrabold text-2xl num">{formatUSD(sAnnual)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-400">Effective playing margin</span>
                    <span className="text-white font-bold text-lg num">
                      {sMargin.toFixed(2)}%
                      <span className="text-xs text-duel-orange-light ml-1">(vs {(style.marginPct * 100).toFixed(1)}%)</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="card relative overflow-hidden text-center py-8">
                <div className="absolute inset-0 duel-sweep-bg opacity-35" aria-hidden="true" />
                <div className="relative">
                  <div className="num text-5xl font-extrabold text-duel-gradient mb-2">
                    {formatUSD(sAnnual)}
                  </div>
                  <div className="text-slate-200 font-medium font-display">Projected yearly reclaim</div>
                  <div className="mt-3 text-sm text-slate-300">
                    Roughly{' '}
                    <strong className="text-white num">{formatUSD(sMonthly)}/month</strong>{' '}
                    landing back in your Duel wallet — in crypto, withdrawable on credit, no
                    take-back clauses.
                  </div>
                </div>
              </div>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Send Hugo Your Volume Numbers ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

