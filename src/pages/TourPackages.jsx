import { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import PackageCard from '../components/cards/PackageCard.jsx'
import PageShell from './_PageShell.jsx'
import { tourPackages } from '../data/packages.js'
import { cn } from '../utils/cn.js'
import { fadeUp, inViewProps, staggerContainer } from '../animations/motion.js'

export default function TourPackages() {
  const [query, setQuery] = useState('')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return tourPackages
    return tourPackages.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.highlights.some((h) => h.toLowerCase().includes(q))
      )
    })
  }, [query])

  const categories = ['Darjeeling', 'Sikkim', 'Kalimpong']

  const grouped = useMemo(() => {
    const groups = {}
    filtered.forEach(p => {
      const cat = p.category || 'Other'
      if (!groups[cat]) groups[cat] = []
      groups[cat].push(p)
    })
    return groups
  }, [filtered])

  return (
    <PageShell>
      <motion.header 
        className="mb-16 md:mb-24"
        variants={fadeUp}
      >
        <div className="flex flex-col gap-6">
          <span className="text-[10px] font-bold tracking-[0.5em] text-wine-accent uppercase">
            The Collection
          </span>
          <h1 className="text-6xl md:text-8xl font-cursive text-wine-accent leading-none">
            Tour Packages
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-wine-muted/80 font-light italic leading-relaxed">
            Browse premium tour packages with day-wise itineraries, inclusions, and a smooth enquiry experience.
          </p>
        </div>
      </motion.header>

      <motion.div
        className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-soft mb-20 backdrop-blur-md"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">Search packages</p>
            <p className="mt-1 text-sm text-wine-muted">Type a destination, city, or highlight.</p>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            className="h-11 w-full rounded-xl border border-white/10 bg-white/10 px-3 text-sm text-wine-light outline-none transition placeholder:text-wine-muted/70 focus:border-wine-accent/60 sm:max-w-sm"
          />
        </div>
      </motion.div>

      {query.trim() === '' ? (
        <div className="space-y-20">
          {categories.map((cat) => (
            grouped[cat] && grouped[cat].length > 0 && (
              <section key={cat} id={cat} className="scroll-mt-32">
                <div className="mb-8 border-l-4 border-wine-accent pl-6">
                  <h2 className="text-3xl font-serif font-medium text-white tracking-tight">{cat} Collections</h2>
                  <p className="text-wine-muted text-sm mt-1 italic">Discover our curated experiences in {cat}.</p>
                </div>
                <motion.div
                  className={cn('grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3')}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {grouped[cat].map((p, idx) => (
                    <motion.div key={p.id} variants={fadeUp} custom={idx * 0.05}>
                      <PackageCard pkg={p} />
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            )
          ))}
        </div>
      ) : (
        <>
          <motion.div
            className={cn('grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3')}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((p, idx) => (
              <motion.div key={p.id} variants={fadeUp} custom={idx * 0.05}>
                <PackageCard pkg={p} />
              </motion.div>
            ))}
          </motion.div>
          {filtered.length === 0 && (
            <p className="text-sm text-wine-muted">No packages match your search.</p>
          )}
        </>
      )}
    </PageShell>
  )
}

