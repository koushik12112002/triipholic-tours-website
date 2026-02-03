import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { site } from '../../config/site.js'
import { cn } from '../../utils/cn.js'
import Button from '../ui/Button.jsx'

const navLinkBase =
  'rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-white/10'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/destinations', label: 'Destinations' },
      { to: '/packages', label: 'Tour Packages' },
      { to: '/about', label: 'About Us' },
      { to: '/contact', label: 'Contact' },
    ],
    [],
  )

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-wine-secondary/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="group inline-flex items-center gap-2">
          <img
            src="/logo.png"
            alt={site.name}
            className="h-20 w-20 rounded-xl object-contain shadow-soft"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">{site.name}</p>
            <p className="text-xs text-wine-muted">{site.tagline}</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  navLinkBase,
                  isActive ? 'bg-white/10 text-wine-light' : 'text-wine-muted',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button as={NavLink} to="/contact" variant="primary" className="rounded-xl">
            Enquire Now
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-5 w-5">
            <span
              className={cn(
                'absolute left-0 top-1 block h-0.5 w-5 rounded bg-wine-light transition',
                open && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-2.5 block h-0.5 w-5 rounded bg-wine-light transition',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-4 block h-0.5 w-5 rounded bg-wine-light transition',
                open && '-translate-y-2 -rotate-45',
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <div className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-soft">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-xl px-3 py-2 text-sm font-medium transition',
                        isActive ? 'bg-white/10 text-wine-light' : 'text-wine-muted hover:bg-white/10',
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
                <div className="p-2">
                  <Button as={NavLink} to="/contact" className="w-full" onClick={() => setOpen(false)}>
                    Enquire Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

