import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function easeOutBack(t: number) {
  const c1 = 1.30
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}

function useCounter(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = Math.max(0, Math.min(1, easeOutBack(t)))
      setCount(Math.floor(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setCount(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])
  return count
}

function StatTile({ value, prefix = '', suffix, label }: { value: number; prefix?: string; suffix: string; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCounter(value, inView)
  return (
    <div ref={ref} className="card lift-card text-center py-8">
      <div className="num text-4xl font-extrabold text-duel-gradient">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-400 mt-2 font-medium">{label}</div>
    </div>
  )
}

const cryptos = [
  { name: 'Bitcoin', symbol: 'BTC', color: '#F7931A' },
  { name: 'Ethereum', symbol: 'ETH', color: '#627EEA' },
  { name: 'Tether', symbol: 'USDT', color: '#26A17B' },
  { name: 'USD Coin', symbol: 'USDC', color: '#2775CA' },
  { name: 'Litecoin', symbol: 'LTC', color: '#BFBBBB' },
  { name: 'Solana', symbol: 'SOL', color: '#9945FF' },
  { name: 'Ripple', symbol: 'XRP', color: '#00AAE4' },
  { name: 'Dogecoin', symbol: 'DOGE', color: '#C2A633' },
  { name: 'Polygon', symbol: 'POL', color: '#8247E5' },
]

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

export default function AboutDuel() {
  return (
    <section id="about-duel" className="py-24 bg-duel-darker">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="orange-badge mb-4">The Platform</span>
            <h2 className="section-heading mt-2">
              Duel.com Is The <span className="text-duel-gradient">Streamer-Forged Crypto Casino</span>
              <br />Built On Cases, Coin Flips & A Tight Sportsbook
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Duel didn't arrive quietly. It rode in on years of broadcast partnerships, an
              originals catalogue tuned for live content, and one of the largest VIP
              programmes in crypto gambling. Here is the platform context behind the rebate.
            </p>
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <StatTile value={2020} suffix="" label="Year Duel went live" />
          <StatTile value={5} prefix="$" suffix="B+" label="Wagered since launch" />
          <StatTile value={3000000} suffix="+" label="Registered players" />
          <StatTile value={3200} suffix="+" label="Games, originals & live tables" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <Reveal>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                <strong className="text-white">Duel.com</strong> launched in 2020 under Yolo
                Entertainment N.V. and became, within roughly eighteen months, the operator
                with the deepest streamer footprint in the crypto-gambling segment. While
                competitors leaned on sportsbook sponsorships, Duel doubled down on creator
                partnerships, leaderboard events and a marquee originals catalogue —{' '}
                <strong className="text-white">Cases, Coin Flip, Slime, Crash, Mines, Plinko,
                Towers</strong> — explicitly tuned for high-energy live broadcasts.
              </p>
              <p>
                Operationally, Duel runs on a Curacao licence and processes deposits and
                withdrawals entirely in crypto. Bitcoin, Ethereum, USDT (multi-chain), USDC,
                Litecoin, Solana, Ripple, Dogecoin and Polygon all settle on-chain through the
                cashier. For verified VIPs, withdrawals usually clear inside ten minutes for
                major coins — fast enough for active capital rotation between sessions and
                external wallets.
              </p>
              <p>
                The originals are where Duel really separates itself. The Cases mechanic is
                the platform's signature loot-box style game and remains one of the most
                streamable products in crypto gambling: variable EV-tuned drops, instant
                resolution, easy to narrate. Crash, Mines, Plinko and Coin Flip cover the
                low-margin grind. All originals are{' '}
                <strong className="text-white">provably fair</strong> — seed pairs published
                post-round, every outcome verifiable off-platform.
              </p>
              <p>
                The third-party catalogue layers slots from Pragmatic Play, Nolimit City,
                Hacksaw Gaming, Push Gaming and Relax over the originals, with Evolution and
                Pragmatic Live running the live-dealer side. The sportsbook brings the rest of
                the wallet to life: tight spreads on the majors, deep live-betting markets,
                generous parlay limits and a single shared balance with the casino — which is
                what makes the Champion rebate work cleanly across both verticals.
              </p>
              <p>
                For a high-volume player, Duel's combination of{' '}
                <strong className="text-white">a low-margin originals catalogue, streamer-grade
                content density, fast crypto rails and a unified casino + sportsbook wallet</strong>{' '}
                is exactly the kind of platform context where a negotiated rebate compounds
                cleanly month after month. The deal Hugo brokers takes an already-strong
                operator and makes the long-run economics tilt noticeably in the player's
                favour.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="space-y-6">
            {[
              { icon: '◇', title: 'Provably fair originals', desc: 'Cases, Coin Flip, Slime, Crash, Mines, Plinko, Towers — every round derives outcome from published server- and client-seed pairs.' },
              { icon: '◆', title: '10-minute crypto cashier', desc: 'BTC, ETH, USDT, USDC, LTC, SOL, XRP, DOGE, POL — most coins clear external withdrawal in under ten minutes on Champion-tier accounts.' },
              { icon: '◈', title: 'Casino + sportsbook unified', desc: 'Single shared balance across 3,200+ casino titles and a deep sportsbook. Losses net into one weekly rebate figure across both verticals.' },
              { icon: '◉', title: 'Curacao licensed operator', desc: 'Operated by Yolo Entertainment N.V. under Curacao gaming licence. Built-in responsible-play controls and session limits available across all accounts.' },
            ].map((feature) => (
              <div key={feature.title} className="card lift-card flex gap-4">
                <span className="text-3xl flex-shrink-0 text-duel-orange-light" aria-hidden="true">{feature.icon}</span>
                <div>
                  <h3 className="font-bold text-white mb-1 font-display">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}

            <div className="rounded-xl overflow-hidden border border-duel-border">
              <div className="aspect-video bg-duel-card">
                <iframe
                  src="https://www.youtube.com/embed/JtIY8mq3xZk?rel=0&modestbranding=1"
                  title="Duel Platform Walkthrough"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="bg-duel-card p-3 text-center text-sm text-slate-500">
                Duel.com — platform tour
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="text-center text-lg font-semibold text-slate-300 mb-6 font-display tracking-wide uppercase">
            Crypto rails settled in every rebate payout
          </h3>
          {/* Horizontal row with auto-snapping pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 snap-x snap-mandatory">
            {cryptos.map((crypto) => (
              <div
                key={crypto.symbol}
                className="snap-start flex-shrink-0 flex items-center gap-3 bg-duel-card border border-duel-border px-4 py-3 rounded-lg lift-card"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ backgroundColor: crypto.color + '33', color: crypto.color }}
                  aria-hidden="true"
                >
                  {crypto.symbol.slice(0, 2)}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{crypto.symbol}</div>
                  <div className="text-slate-500 text-xs">{crypto.name}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
