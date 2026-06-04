import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { site } from '../../config/site.js'
import { cn } from '../../utils/cn.js'
import Button from '../ui/Button.jsx'

const navLinkBase =
  'relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300'

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-wine-secondary/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="group inline-flex items-center gap-2">
          <div className="relative">
            <img
              src="/logo.png"
              alt={site.name}
              className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-contain border-2 border-white/20 brightness-125 contrast-110 transition-all duration-500 group-hover:scale-110 group-hover:brightness-150"
              style={{ boxShadow: '0 0 20px 8px rgba(200,50,80,0.5), 0 0 60px 20px rgba(200,50,80,0.25)' }}
            />
          </div>
          <div className="leading-tight">
            <p className="text-xs sm:text-sm font-semibold tracking-tight text-white">Tours and Travel</p>
            <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold">{site.tagline}</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  navLinkBase,
                  isActive
                    ? 'bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 text-white shadow-lg'
                    : 'text-wine-muted hover:text-white hover:bg-white/5',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button as={NavLink} to="/contact" variant="wine" size="sm" className="rounded-xl px-6">
            Enquire Now
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-5 w-5">
            <span
              className={cn(
                'absolute left-0 top-1 block h-0.5 w-5 rounded bg-white transition',
                open && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-2.5 block h-0.5 w-5 rounded bg-white transition',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-4 block h-0.5 w-5 rounded bg-white transition',
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden"
          >
            <div className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-white/10 bg-wine-secondary/95 p-3 shadow-2xl backdrop-blur-xl">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-xl px-4 py-3 text-sm font-medium transition-all mb-1',
                        isActive
                          ? 'bg-gradient-to-r from-white/15 to-white/5 border border-white/20 text-white'
                          : 'text-wine-muted hover:bg-white/5',
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
                <div className="p-2 pt-4">
                  <Button as={NavLink} to="/contact" variant="wine" className="w-full" onClick={() => setOpen(false)}>
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

