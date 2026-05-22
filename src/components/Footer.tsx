import { TELEGRAM_URL, TELEGRAM_HANDLE } from '../seo/siteMeta'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#calculator', label: 'Rebate Calculator' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#about-duel', label: 'About Duel' },
  { href: '#the-math', label: 'The Maths' },
  { href: '#faq', label: 'FAQ' },
  { href: TELEGRAM_URL, label: 'Contact Hugo', external: true },
]

const cryptos = ['BTC', 'ETH', 'USDT', 'USDC', 'LTC', 'SOL', 'XRP', 'DOGE', 'POL']

export default function Footer() {
  return (
    <footer className="bg-duel-darker border-t border-duel-border" role="contentinfo">
      <div className="section-container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-duel-orange/25 to-duel-blue/25 border border-duel-orange/35 flex items-center justify-center">
                <span className="text-duel-gradient font-black text-base font-display" aria-hidden="true">D</span>
              </div>
              <span className="text-white font-extrabold text-lg font-display">duel-lossback.com</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Authorised-partner rebate channel for sustained Duel.com players. Up to 20% of
              weekly net losses returned in crypto, with zero rollover, brokered by Hugo —
              your Duel VIP host.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-duel-orange-light text-sm hover:text-duel-blue-light transition-colors font-semibold"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
              </svg>
              {TELEGRAM_HANDLE}
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-display tracking-wide uppercase">Sections</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-slate-400 hover:text-duel-orange-light text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-display tracking-wide uppercase">Crypto rails</h3>
            <div className="flex flex-wrap gap-2">
              {cryptos.map(c => (
                <span key={c} className="bg-duel-card border border-duel-border px-2.5 py-1 rounded text-xs text-slate-300 font-mono">
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <span className="orange-badge text-xs">Curacao Licensed Operator</span>
            </div>
          </div>
        </div>

        <div className="border-t border-duel-border pt-8">
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl mx-auto text-center">
            <strong className="text-slate-300">Legal notice:</strong> duel-lossback.com is an
            independent partner-referral resource and is not owned, operated or endorsed by
            Duel.com, Yolo Entertainment N.V., or any of their affiliated entities. This
            website facilitates introductions between sustained-volume players and an
            authorised independent Duel affiliate partner. Gambling carries genuine
            financial risk and is not appropriate for everyone. You must be of legal
            gambling age in your jurisdiction (18+ in most countries, 21+ where required)
            and you must act within the laws of your country of residence. If gambling
            stops feeling like entertainment, please seek help — organisations such as
            GamCare (gamcare.org.uk), Gambling Therapy (gamblingtherapy.org) and
            BeGambleAware (begambleaware.org) provide free and confidential support.
            duel-lossback.com accepts no liability for losses incurred through gambling
            activity on Duel.com or any other platform.
          </p>
          <p className="text-xs text-slate-600 text-center mt-4">
            © {new Date().getFullYear()} duel-lossback.com · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
