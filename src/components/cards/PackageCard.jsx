import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import { fadeUp, parallaxImage } from '../../animations/motion.js'

export default function PackageCard({ pkg }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      variants={fadeUp}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-card-gradient shadow-soft"
    >
      <motion.div
        className="relative aspect-[16/10] overflow-hidden"
        variants={parallaxImage}
      >
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-full w-full object-cover transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-secondary/90 via-wine-secondary/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-wine-muted">FROM ₹{pkg.priceFrom.toLocaleString()}</p>
          <p className="mt-1 text-lg font-semibold tracking-tight">{pkg.title}</p>
          <p className="mt-1 text-sm text-wine-muted">{pkg.location}</p>
        </div>
      </motion.div>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-wine-muted">{pkg.duration}</span>
          {pkg.highlights.slice(0, 2).map((h) => (
            <span key={h} className="rounded-full bg-white/10 px-3 py-1 text-xs text-wine-muted">
              {h}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3">
          <Button as={NavLink} to={`/packages/${pkg.slug}`} variant="secondary" className="flex-1">
            View Details
          </Button>
          <Button as={NavLink} to="/contact" className="flex-1">
            Enquire
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

