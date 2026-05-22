import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, LabelList, ZAxis, Legend,
} from 'recharts'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
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

/* Scatter: sustained-vs-spike — each dot represents a real-world player profile
   x: monthly wager, y: weekly rebate at Champion rate */
type ScatterPoint = { wager: number; rebate: number; label: string; tier: 'Challenger' | 'Champion' }

const scatterData: ScatterPoint[] = [
  { wager: 25_000,  rebate: 25_000 * 0.032 * 0.10 / 4.33, label: 'Conservative Challenger', tier: 'Challenger' },
  { wager: 60_000,  rebate: 60_000 * 0.032 * 0.10 / 4.33, label: 'Mixed Challenger',        tier: 'Challenger' },
  { wager: 90_000,  rebate: 90_000 * 0.032 * 0.10 / 4.33, label: 'Aggressive Challenger',   tier: 'Challenger' },
  { wager: 140_000, rebate: 140_000 * 0.032 * 0.20 / 4.33, label: 'Entry Champion',         tier: 'Champion' },
  { wager: 200_000, rebate: 200_000 * 0.032 * 0.20 / 4.33, label: 'Mid Champion',           tier: 'Champion' },
  { wager: 320_000, rebate: 320_000 * 0.032 * 0.20 / 4.33, label: 'Upper Champion',         tier: 'Champion' },
]

const challengerScatter = scatterData.filter(d => d.tier === 'Challenger')
const championScatter = scatterData.filter(d => d.tier === 'Champion')

/* Horizontal bar: effective margin under different reward paths */
type MarginRow = { name: string; margin: number; fill: string; note: string }

const marginRows: MarginRow[] = [
  { name: 'No deal',                    margin: 3.20, fill: '#475569', note: 'Public sign-up, no rewards path' },
  { name: 'Public loyalty (mid tier)',  margin: 3.04, fill: '#64748b', note: '~5% effective rebate' },
  { name: 'Public loyalty (top tier)',  margin: 2.96, fill: '#94a3b8', note: '~7.5% effective rebate' },
  { name: 'Challenger (10%)',           margin: 2.88, fill: '#fb923c', note: 'Partner channel, 10% rebate' },
  { name: 'Champion (20%)',             margin: 2.56, fill: '#f97316', note: 'Partner channel, 20% rebate' },
]

const ScatterTooltip = ({ active, payload }: { active?: boolean; payload?: { payload: ScatterPoint }[] }) => {
  if (active && payload && payload.length) {
    const p = payload[0].payload
    return (
      <div className="bg-duel-card border border-duel-border rounded-lg p-4 shadow-card text-sm">
        <p className="text-white font-bold mb-1 font-display">{p.label}</p>
        <div className="space-y-0.5">
          <div className="text-slate-400">Monthly wager: <span className="text-white font-semibold num">${p.wager.toLocaleString()}</span></div>
          <div className="text-slate-400">Weekly rebate: <span className="text-duel-orange-light font-semibold num">${Math.round(p.rebate).toLocaleString()}</span></div>
          <div className="text-slate-500 text-xs mt-1">{p.tier} tier</div>
        </div>
      </div>
    )
  }
  return null
}

const MarginTooltip = ({ active, payload }: { active?: boolean; payload?: { payload: MarginRow }[] }) => {
  if (active && payload && payload.length) {
    const p = payload[0].payload
    return (
      <div className="bg-duel-card border border-duel-border rounded-lg p-3 shadow-card text-sm">
        <p className="text-white font-bold font-display">{p.name}</p>
        <p className="text-duel-orange-light num">{p.margin.toFixed(2)}% effective margin</p>
        <p className="text-slate-500 text-xs">{p.note}</p>
      </div>
    )
  }
  return null
}

export default function Charts() {
  return (
    <section id="the-math" className="py-24 bg-duel-darker">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="orange-badge mb-4">The Maths</span>
            <h2 className="section-heading mt-2">
              The Long-Run Effect Of A Champion Rebate —{' '}
              <span className="text-duel-gradient">Two Visuals, Same Underlying Number</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Variance never disappears at the individual session level. What changes is the
              year-over-year expected playing margin. Below is that effect drawn two different
              ways.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Reveal>
            <div className="card lift-card h-full">
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Weekly rebate by sustained monthly volume
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Each dot is a representative player profile. Dot size scales with monthly
                wager; orange dots are Champion-tier (20% rebate), pale ones are Challenger
                (10%).
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis
                      type="number"
                      dataKey="wager"
                      name="Monthly wager"
                      tickFormatter={v => `$${(v / 1000).toFixed(0)}k`}
                      tick={{ fill: '#94a3b8', fontSize: 11 }}
                      domain={[0, 360_000]}
                    />
                    <YAxis
                      type="number"
                      dataKey="rebate"
                      name="Weekly rebate"
                      tickFormatter={v => `$${Math.round(v).toLocaleString()}`}
                      tick={{ fill: '#94a3b8', fontSize: 10 }}
                    />
                    <ZAxis type="number" dataKey="wager" range={[60, 360]} />
                    <Tooltip content={<ScatterTooltip />} cursor={{ strokeDasharray: '3 3', stroke: '#f97316' }} />
                    <Legend wrapperStyle={{ color: '#cbd5e1', fontSize: 11 }} />
                    <Scatter name="Challenger (10%)" data={challengerScatter} fill="#94a3b8" />
                    <Scatter name="Champion (20%)" data={championScatter} fill="#f97316" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card lift-card h-full">
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Effective playing margin after rebate, by reward path
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Lower is better for the player. Horizontal bars show what the operator's 3.2%
                playing margin actually translates to once each reward structure is applied.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={marginRows}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                    <XAxis
                      type="number"
                      domain={[2.0, 3.4]}
                      tick={{ fill: '#94a3b8', fontSize: 11 }}
                      tickFormatter={v => `${v.toFixed(2)}%`}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fill: '#cbd5e1', fontSize: 11 }}
                      width={150}
                    />
                    <Tooltip content={<MarginTooltip />} cursor={{ fill: 'rgba(249,115,22,0.05)' }} />
                    <Bar dataKey="margin" radius={[0, 6, 6, 0]}>
                      {marginRows.map((entry) => (
                        <Cell key={entry.name} fill={entry.fill} />
                      ))}
                      <LabelList
                        dataKey="margin"
                        position="right"
                        formatter={(value: number) => `${value.toFixed(2)}%`}
                        style={{ fill: '#ffffff', fontSize: 11, fontFamily: 'Space Mono, monospace' }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4 font-display">
              Why a Champion rebate beats every other Duel reward path mathematically
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Start with a public deposit bonus. A 100% match advertised at $1,000 attached
                to a 40x rollover requires you to wager $40,000 on eligible games before
                clearing the bonus. At a 3.2% blended playing margin, your statistical loss
                expectation across that rollover is $1,280 — more than the bonus is worth.
                Public bonuses are calibrated to convert depositors, not to retain players
                already producing sustained volume.
              </p>
              <p>
                A rebate inverts that architecture. Suppose your sustained monthly wager on
                Duel sits at $140,000 across a mixed book at ~3.2% playing margin: your
                statistical net loss expectation lands around $4,480 per month. A 20%
                Champion rebate returns roughly $896 of that figure, unconditionally and
                immediately withdrawable. The economic effect is a permanent shift from a
                3.20% playing margin down to a{' '}
                <strong className="text-white num">2.56% effective margin</strong>, applied to
                every dollar of wager you put through Duel month after month.
              </p>
              <p>
                Compounded across a full calendar year of sustained volume, the gap between
                "no rebate" and "20% Champion rebate" on a $200,000/month book accumulates to
                roughly{' '}
                <strong className="text-duel-orange-light num">$15,400 of recovered net loss</strong>.
                The scatter chart above shows the corresponding weekly figure; the horizontal
                bar chart shows the equivalent effect translated into effective margin space.
                Both visuals are projections of the exact same underlying mechanism.
              </p>
              <p>
                Variance is unchanged. A streamer-style Cases run is still going to do what
                it does. What the partner-channel rebate changes is the long-run expected
                value of every dollar of wager you put through Duel — and for players already
                operating at Champion volume, that expectancy shift is the only metric that
                actually matters at year-end.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
