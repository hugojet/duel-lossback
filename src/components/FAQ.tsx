import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { faqs, type FaqItem } from '../data/faqs'

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

function FAQItem({ faq, index }: { faq: FaqItem; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      viewport={{ once: true }}
      className={`relative rounded-xl overflow-hidden transition-colors duration-300 border bg-duel-card/40 ${
        open ? 'border-duel-orange/50' : 'border-duel-border'
      }`}
    >
      {/* Left-side accent bar that grows when open */}
      <motion.div
        initial={false}
        animate={{ height: open ? '100%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute left-0 top-0 w-1 bg-gradient-to-b from-duel-orange to-duel-blue"
        aria-hidden="true"
      />
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 pl-7 text-left hover:bg-duel-card/70 transition-colors duration-200"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex items-baseline gap-4 flex-1">
          <span className="num text-xs text-duel-orange-light/70 font-display tracking-wider flex-shrink-0 mt-1">
            Q{String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-semibold text-white font-display">{faq.q}</span>
        </div>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center transition-colors ${
            open
              ? 'bg-duel-orange text-white shadow-orange-glow-sm'
              : 'border border-duel-border text-duel-orange-light'
          }`}
          aria-hidden="true"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="region"
          >
            <div className="px-6 pl-7 pb-6 text-slate-300 leading-relaxed border-t border-duel-border/50 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-duel-card/15">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="orange-badge mb-4">FAQ</span>
            <h2 className="section-heading mt-2">
              Eleven Questions{' '}
              <span className="text-duel-gradient">Champion Players Always Ask First</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              The exact questions Hugo's chat receives most weeks — rate-setting, eligibility,
              payout mechanics, sportsbook coverage, privacy. Pre-answered below so the first
              DM can skip straight to your specific situation.
            </p>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
