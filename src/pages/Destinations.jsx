import { motion } from 'framer-motion'
import PageShell from './_PageShell.jsx'
import { destinations } from '../data/destinations.js'
import { fadeUp, inViewProps, staggerContainer, parallaxImage } from '../animations/motion.js'

export default function Destinations() {
  return (
    <PageShell
      title="Destinations"
      subtitle="Browse inspiring places. Each destination can be mapped to custom packages later as your catalog expands."
    >
      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        {...inViewProps}
      >
        {destinations.map((d, idx) => (
          <motion.article
            key={d.id}
            variants={fadeUp}
            custom={idx * 0.2}
            className="overflow-hidden rounded-2xl border border-white/10 bg-card-gradient shadow-soft"
          >
            <motion.div
              className="relative aspect-[16/10]"
              variants={parallaxImage}
            >
              <img
                src={d.image}
                alt={d.name}
                className="h-full w-full object-cover transition duration-500 hover:-translate-y-1 hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-secondary/90 via-wine-secondary/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-lg font-semibold">{d.name}</p>
                <p className="mt-1 text-sm text-wine-muted">{d.subtitle}</p>
              </div>
            </motion.div>
            <div className="p-5">
              <p className="text-sm leading-6 text-wine-muted">{d.blurb}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </PageShell>
  )
}

