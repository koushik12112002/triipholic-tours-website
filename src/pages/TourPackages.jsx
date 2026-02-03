import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import PackageCard from '../components/cards/PackageCard.jsx'
import PageShell from './_PageShell.jsx'
import { tourPackages } from '../data/packages.js'
import { cn } from '../utils/cn.js'
import { fadeUp, inViewProps, staggerContainer } from '../animations/motion.js'

export default function TourPackages() {
  const [query, setQuery] = useState('')

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

  return (
    <PageShell
      title="Tour Packages"
      subtitle="Browse premium tour packages with day-wise itineraries, inclusions, and a smooth enquiry experience."
    >
      <motion.div
        className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-soft"
        variants={fadeUp}
        {...inViewProps}
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

      <motion.div
        className={cn('grid gap-5 md:grid-cols-2 lg:grid-cols-3')}
        variants={staggerContainer}
        {...inViewProps}
      >
        {filtered.map((p, idx) => (
          <motion.div key={p.id} variants={fadeUp} custom={idx * 0.2}>
            <PackageCard pkg={p} />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 ? (
        <p className="text-sm text-wine-muted">No packages match your search.</p>
      ) : null}
    </PageShell>
  )
}

