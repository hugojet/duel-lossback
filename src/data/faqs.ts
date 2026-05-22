/** Single source of truth: visible FAQ + JSON-LD must match. */
export const faqs = [
  {
    q: 'How does the Duel rebate rate actually get decided?',
    a: `Each rate is negotiated case-by-case between Hugo and the Duel VIP operations desk, based primarily on your sustained monthly wager and the playing-style mix (originals, slots, live tables and sportsbook each carry different blended playing margins). The Challenger tier sits at a 10% weekly rebate and corresponds to sustained monthly volume between $20,000 and $120,000. Above $120,000 of sustained monthly wager you enter the Champion conversation, where the rate is negotiable up to 20%. Hugo handles the rate case directly with the desk on your behalf — you never have to argue your own number.`,
  },
  {
    q: 'Does the rebate cover my Duel sportsbook activity too?',
    a: `Yes — this is one of the specific structural points Hugo negotiates upfront for managed Champion accounts. Duel runs casino and sportsbook on a unified wallet, which makes it operationally clean to blend losses from both verticals into a single weekly rebate calculation at the same headline percentage. Most public Duel reward structures keep these verticals on separate ledgers, so a single shared rebate rate is one of the meaningful upgrades the partner channel delivers — particularly for players running heavy parlay or live-betting volume.`,
  },
  {
    q: 'Are Cases, Crash and other Duel originals included?',
    a: `Yes. All Duel-proprietary originals count toward net-loss calculation by default — Cases, Coin Flip, Slime, Crash, Mines, Plinko, Towers and the rest. These tend to be where Champion clients concentrate the bulk of their volume because the playing margins are low and the round frequency is high, which produces an extremely clean net-loss curve over the weekly window. The provably-fair seed pairs Duel publishes after each round also mean the underlying numbers feeding the rebate calculation are independently auditable.`,
  },
  {
    q: 'What sustained volume does Champion tier really require?',
    a: `As a working threshold, sustained $120,000+ per month of wager opens the Champion conversation, with the negotiated rate scaling toward the 20% maximum based on consistency rather than raw size. Hugo is candid about borderline cases: a player closer to the $80k–$120k band with a strong sustained history can sometimes be onboarded on an entry-Champion rate slightly below the full headline ceiling. The fastest way to know is to send a brief volume snapshot through Telegram — Hugo replies with a clear yes/no within hours.`,
  },
  {
    q: 'Why is this called "lossback" rather than just rakeback?',
    a: `Rakeback and lossback are structurally different mechanics. Rakeback pays a small slice of the operator's playing margin on every individual bet — typically 1% to 4% — regardless of whether the session ends up or down. Lossback (the rebate) tracks net loss across the settlement window and returns a percentage of that figure as immediately-withdrawable balance. The practical effect is asymmetric: a winning week pays zero rebate, a losing week pays back a meaningful share of the damage. For Champion-volume players cycling six-figure monthly wager, that asymmetry is what makes the structure mathematically valuable over a multi-quarter horizon.`,
  },
  {
    q: 'Is Hugo officially recognised by Duel.com?',
    a: `Hugo operates an authorised partner account inside Duel's partner programme — a B2B partnership tier that sits above standard referral. Authorised partners have a direct working relationship with the Duel VIP operations desk and are formally permitted to negotiate bespoke rebate structures, cashier-cap lifts and event seeding on behalf of the players in their book. Hugo's authorisation can be verified directly: message @hugo_lossback_bot on Telegram and ask for partner confirmation details before sharing any account-level information.`,
  },
  {
    q: 'How and when does the rebate clear into my wallet?',
    a: `Settlement happens every Monday morning, covering the previous Monday-to-Sunday window. The rebate amount lands directly into your Duel.com wallet in the cryptocurrency you nominate — Duel settles Bitcoin, Ethereum, USDT (multi-chain), USDC, Litecoin, Solana, Ripple, Dogecoin and Polygon natively. Once it hits your Duel balance you can withdraw to any compatible external wallet immediately at standard Champion-tier cashier speeds, which typically clear external withdrawals within ten minutes for major coins.`,
  },
  {
    q: 'Is there any rollover, hold or clawback on the rebate amount?',
    a: `None. This is the core structural difference between a rebate deal and a public-tier promotional bonus. The rebate credit is treated as immediately-withdrawable cash balance — no rollover multiplier, no minimum-odds requirement, no eligible-games whitelist, no time decay, no take-back clauses against future weeks. The amount is yours from the moment it lands. You can withdraw it on Monday, redeploy it as new wager volume, or simply hold it in your wallet. The structure is engineered to be clean precisely because that is what makes it valuable to high-volume players.`,
  },
  {
    q: 'Is this available in my country?',
    a: `If you can legally hold a Duel.com account in your country, you can be onboarded into the partner rebate channel. Duel operates in most jurisdictions globally except a handful of restricted territories — notably the United States, the United Kingdom, France, Spain, the Netherlands and Australia, where local gambling licensing prevents Duel from accepting accounts. Hugo currently has active Champion clients across continental Europe, the Middle East, LATAM, parts of Asia, and across Sub-Saharan Africa. If your jurisdiction is on the borderline, mention it explicitly in your first Telegram message and Hugo will give a definitive answer.`,
  },
  {
    q: 'Does joining this channel make my account public in any way?',
    a: `No. The partner book operates with strict client confidentiality. Your Champion tier, your negotiated rate, your wagering history and your Monday-morning statements stay between you, Hugo and the Duel VIP operations desk. There is no leaderboard, no public profile, no community channel, no content-creator rotation. Many of Hugo's Champion clients specifically value the discretion of running a serious bankroll without their volume appearing on any public-facing dashboard — the partner channel is structurally designed to respect that.`,
  },
  {
    q: 'What happens if I have a strong winning week — do I owe anything?',
    a: `Nothing. The asymmetry is by design. If your week closes net-positive, your net loss is zero or negative, and the rebate for that week is simply zero. There is no clawback against your winnings, no offset rolled into the following week's calculation, and no penalty mechanism. The next Monday begins with a fresh net-loss tally starting at zero. The entire structure is built to soften losing weeks without ever taxing winning ones — which is precisely why it pencils out for sustained players over a multi-quarter horizon.`,
  },
]

export type FaqItem = { q: string; a: string }
