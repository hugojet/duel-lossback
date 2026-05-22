import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TELEGRAM_URL } from '../seo/siteMeta'

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

const steps = [
  {
    number: 1,
    title: 'Ping Hugo on Telegram',
    desc: 'One direct message to @hugo_lossback_bot opens the channel. Hugo handles intake himself — typical first response inside two business hours, never more than a single working day.',
    glyph: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5L12 14L21 8.5M5 7H19A2 2 0 0 1 21 9V17A2 2 0 0 1 19 19H5A2 2 0 0 1 3 17V9A2 2 0 0 1 5 7Z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Light volume verification',
    desc: 'No KYC papers, no application form. Two or three screenshots of your Duel wagering panel confirm tier eligibility — that is the entire admin overhead before activation.',
    glyph: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21L16.5 16.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Rebate clears every Monday',
    desc: 'From the following Monday, your net losses are aggregated automatically. The negotiated percentage settles straight into your Duel wallet in the crypto you nominate — withdrawable on credit.',
    glyph: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 17L12 22L22 17" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12L12 17L22 12" />
      </svg>
    ),
  },
]

const perks = [
  { icon: '⚔', title: 'Cases & Crash priority access', desc: 'Champion accounts get unlocked access to high-stake Cases drops and elevated single-bet caps on Crash and Coin Flip — limits that the public catalogue throttles by default.' },
  { icon: '🏟', title: 'Sportsbook included in rebate', desc: 'Net losses on the sportsbook side (parlays, live, pre-match) blend into the same weekly rebate calculation as casino activity. Most public rebate structures exclude this entirely.' },
  { icon: '🎟', title: 'Closed-leaderboard seeding', desc: 'Direct seeding into Duel\'s invite-only leaderboard events and creator-collab Cases tournaments — content that never hits the public promo grid.' },
  { icon: '🛗', title: 'Cashier ceiling lifted', desc: 'Default per-transaction withdrawal caps are raised on request for Champion-tier accounts. Critical for players moving significant weekly capital between Duel and external wallets.' },
  { icon: '🧾', title: 'Monday breakdown statement', desc: 'Every Monday morning you receive a clean breakdown: wagered, returned, net loss by vertical, applied rate, exact crypto amount, on-chain tx hash. Full transparency, no follow-up needed.' },
  { icon: '🔒', title: 'Account-level discretion', desc: 'Your tier, your rate, your volume history stay between you, Hugo and the Duel VIP desk. Champion clients value privacy — there is no leaderboard, no content rotation, no public profile.' },
]

export default function TheDeal() {
  return (
    <section id="how-it-works" className="py-24 bg-duel-card/15">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="orange-badge mb-4">Mechanics</span>
            <h2 className="section-heading mt-2">
              Three Steps To <span className="text-duel-gradient">Champion Activation</span>
              <br />Then Automatic Weekly Settlement
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Activation is fast. The first conversation is the only friction; everything
              after is automated by the Duel VIP desk on the back end.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-20 relative">
          <div className="hidden md:block absolute top-20 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-duel-orange to-transparent opacity-40" aria-hidden="true" />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12}>
              <div className="card lift-card text-center relative">
                <div className="w-20 h-20 rounded-xl bg-duel-orange/10 border border-duel-orange/35 flex items-center justify-center mx-auto mb-4 text-duel-orange-light">
                  {step.glyph}
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-md bg-gradient-to-br from-duel-orange to-duel-blue text-white text-sm font-black flex items-center justify-center shadow-orange-glow-sm font-display">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
                {step.number < 3 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-duel-orange text-2xl z-10" aria-hidden="true">→</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-display">
            Two tiers, set by sustained monthly volume
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="card lift-card border border-duel-border relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-duel-orange/8 blur-2xl" aria-hidden="true" />
              <div className="orange-badge mb-4">Tier 1</div>
              <h4 className="text-2xl font-extrabold text-white mb-2 font-display">Challenger</h4>
              <div className="num text-3xl font-extrabold text-duel-gradient mb-1">10%</div>
              <div className="text-slate-400 text-sm mb-6">Weekly net-loss rebate</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-duel-border/50">
                  <span className="text-slate-400">Monthly wager band</span>
                  <span className="text-white font-semibold num">$20k – $120k</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-duel-border/50">
                  <span className="text-slate-400">Sample monthly net loss</span>
                  <span className="text-white font-semibold num">$3,840</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-duel-border/50">
                  <span className="text-slate-400">Weekly rebate (avg)</span>
                  <span className="text-duel-orange-light font-bold num">~$95</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Annualised rebate</span>
                  <span className="text-duel-orange-light font-bold num">~$4,600</span>
                </div>
              </div>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full mt-6 justify-center text-sm">
                Apply as Challenger
              </a>
            </div>

            <div className="card lift-card border-2 border-duel-orange/60 relative overflow-hidden shadow-orange-glow">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-duel-orange/12 blur-2xl" aria-hidden="true" />
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-duel-orange to-duel-blue text-white text-xs font-black px-2.5 py-1 rounded-md font-display tracking-wide uppercase">Champion</span>
              </div>
              <div className="orange-badge mb-4">Tier 2</div>
              <h4 className="text-2xl font-extrabold text-white mb-2 font-display">Champion ⚔</h4>
              <div className="num text-3xl font-extrabold text-duel-gradient mb-1">Up to 20%</div>
              <div className="text-slate-400 text-sm mb-6">Weekly net-loss rebate</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-duel-border/50">
                  <span className="text-slate-400">Monthly wager band</span>
                  <span className="text-white font-semibold num">$120k+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-duel-border/50">
                  <span className="text-slate-400">Sample monthly net loss</span>
                  <span className="text-white font-semibold num">$8,400</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-duel-border/50">
                  <span className="text-slate-400">Weekly rebate (avg)</span>
                  <span className="text-duel-orange-light font-bold num">~$390</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Annualised rebate</span>
                  <span className="text-duel-orange-light font-bold num">~$20,160</span>
                </div>
              </div>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full mt-6 justify-center text-sm animate-orange-pulse">
                Apply as Champion
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-display">
            What ships with every Champion deal alongside the percentage
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                viewport={{ once: true }}
                className="card lift-card flex gap-4"
              >
                <span className="text-2xl flex-shrink-0 text-duel-orange-light" aria-hidden="true">{perk.icon}</span>
                <div>
                  <h4 className="font-bold text-white mb-1 font-display">{perk.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
