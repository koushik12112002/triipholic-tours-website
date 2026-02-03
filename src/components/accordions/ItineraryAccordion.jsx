import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '../../utils/cn.js'

function Chevron({ open }) {
  return (
    <motion.span
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10"
      aria-hidden="true"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.span>
  )
}

export default function ItineraryAccordion({ items }) {
  const [openDay, setOpenDay] = useState(items?.[0]?.day ?? null)

  if (!items?.length) return null

  return (
    <div className="space-y-3">
      {items.map((it) => {
        const isOpen = openDay === it.day
        return (
          <div key={it.day} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft">
            <button
              type="button"
              onClick={() => setOpenDay((d) => (d === it.day ? null : it.day))}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
              aria-expanded={isOpen}
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-wine-muted">DAY {it.day}</p>
                <p className={cn('mt-1 text-sm sm:text-[0.95rem]', 'font-semibold')}>{it.title}</p>
              </div>
              <Chevron open={isOpen} />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-4 pb-4 sm:px-5"
                >
                  <p className="text-sm leading-6 text-wine-muted">{it.description}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

