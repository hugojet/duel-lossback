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

const advantages = [
  { icon: '⊕', title: 'Named line to the Duel VIP desk', desc: 'Hugo runs an authorised partner book and pings the Duel VIP team by name. Rate approvals, cashier escalations and event seeding all go through one trusted inbox.' },
  { icon: '⊗', title: 'Verified partner status', desc: 'This is not a recycled affiliate link. Hugo holds a formal partner account inside Duel\'s programme — the prerequisite for negotiating bespoke lossback structures on managed accounts.' },
  { icon: '↯', title: 'Same-week activation', desc: 'No XP grind through the public loyalty ladder. Once your volume is verified, the lossback goes live the very next Monday — most Champion sign-ups settle inside forty-eight hours.' },
  { icon: '◐', title: 'Structure shaped to your book', desc: 'A Cases-heavy player and a sportsbook-first player do not need identical lossback mechanics. Hugo negotiates the percentage, the included verticals and the cashier caps to fit your actual wager pattern.' },
  { icon: '↥', title: 'Cashier ceilings raised', desc: 'Default per-transaction withdrawal caps get lifted on request for verified Champion accounts. For players moving meaningful weekly capital, this is often the single biggest quality-of-life upgrade.' },
  { icon: '↻', title: 'Rate re-negotiation every quarter', desc: 'Volume grows, the rate grows with it. Every quarter Hugo re-opens rate discussions with the Duel VIP desk based on your sustained trajectory — long-term partners tend to climb beyond entry-Champion brackets.' },
]

export default function WhyHugo() {
  return (
    <section id="why-hugo" className="py-24 bg-duel-dark">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="orange-badge mb-4">The Partner</span>
            <h2 className="section-heading mt-2">
              Why The Lossback Goes Through <span className="text-duel-gradient">A Named Partner</span>,
              <br />Not A Public Sign-Up Funnel
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Public funnels are tuned for one job: converting depositors quickly. They are
              not designed to reward players who already produce serious volume. That is
              precisely what a partner channel exists to fix.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <Reveal className="lg:col-span-1">
            <div className="card lift-card border-2 border-duel-orange/40 text-center sticky top-8 shadow-orange-glow-sm">
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-duel-orange/30 to-duel-blue/25 border-2 border-duel-orange/40 flex items-center justify-center mx-auto mb-4">
                <svg className="w-14 h-14 text-duel-orange glow-orange" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-1 font-display">Hugo</h3>
              <div className="orange-badge mb-4 mx-auto w-fit">Duel VIP Host</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Authorised Duel.com partner with a direct working relationship to the VIP
                operations team. Specialises in onboarding Champion-volume players under
                bespoke weekly lossback and cashier-lift agreements.
              </p>
              <div className="space-y-3 text-sm text-left">
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-duel-orange-light">✓</span>
                  Authorised Duel partner book
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-duel-orange-light">✓</span>
                  80+ Champion players actively managed
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-duel-orange-light">✓</span>
                  Avg first-reply under 2 hours
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-duel-orange-light">✓</span>
                  English / French / Spanish / Italian
                </div>
              </div>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-6 justify-center"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
                </svg>
                Claim My Deal
              </a>
            </div>
          </Reveal>

          <div className="lg:col-span-2 space-y-6">
            <Reveal className="text-slate-300 leading-relaxed space-y-4">
              <p className="text-lg">
                A generic Duel sign-up link drops you into the public onboarding pipeline:
                whatever welcome incentive is live this month, the public loyalty ladder, the
                default cashier caps, and a support queue shared with everyone else. No human
                is looking at your behaviour. No one is negotiating on your behalf. The
                meaningful lossback percentages stay entirely out of reach.
              </p>
              <p>
                An <strong className="text-white">authorised partner</strong> sits one rung up
                the commercial stack. The partner programme is a B2B layer above standard
                referral — Hugo's relationship is directly with the Duel VIP operations desk,
                the same desk responsible for signing off rate ceilings, cashier-cap lifts,
                and discretionary event seeding. When Hugo presents your volume case to that
                desk, you are no longer one account in a queue; you are a named player in a
                managed book.
              </p>
              <p>
                For a player processing $120,000+ of monthly wager across Cases, Crash, slots
                and the sportsbook, the spread between the public top-tier lossback (around 6%
                effective at the very top of the public ladder) and a negotiated 20% Champion
                lossback works out to roughly{' '}
                <strong className="text-white">$1,400 to $2,200 of recovered net loss every
                single week</strong>. Annualised, that is a serious component of any
                Champion bankroll.
              </p>
              <p>
                What the partner channel really delivers, beyond the rate itself, is{' '}
                <strong className="text-white">operational continuity</strong>: a Monday
                statement appearing in your chat without you asking, cashier escalation
                handled before tickets even fire, rate reviews scheduled quarterly as your
                volume curve evolves. None of this is replicable through a referral link.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
                  viewport={{ once: true }}
                  className="card lift-card"
                >
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0 text-duel-orange-light" aria-hidden="true">{adv.icon}</span>
                    <div>
                      <h4 className="font-bold text-white mb-1 font-display">{adv.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{adv.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
