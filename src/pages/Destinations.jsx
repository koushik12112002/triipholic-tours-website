import { motion } from 'framer-motion'
import PageShell from './_PageShell.jsx'
import { destinations } from '../data/destinations.js'
import { fadeUp, inViewProps, staggerContainer } from '../animations/motion.js'
import Button from '../components/ui/Button.jsx'
import { NavLink } from 'react-router-dom'

export default function Destinations() {
  // Show only Darjeeling, Sikkim, Kalimpong
  const displayDestinations = destinations.slice(0, 3)

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
          <h1 className="text-6xl md:text-8xl font-serif font-medium text-white tracking-tighter leading-none">
            Destinations
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-wine-muted/80 font-light italic leading-relaxed">
            Discover the soul of the Himalayas through our curated regions.
          </p>
        </div>
      </motion.header>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        {...inViewProps}
      >
        {displayDestinations.map((d, idx) => (
          <motion.article
            key={d.id}
            variants={fadeUp}
            custom={idx * 0.2}
            className="group relative overflow-hidden rounded-[2.5rem] bg-wine-secondary aspect-[4/5] shadow-2xl"
          >
            {/* Full Background Image */}
            <img
              src={d.image}
              alt={d.name}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <p className="text-[10px] font-bold tracking-[0.4em] text-amber-500 uppercase mb-2">
                  Destination
                </p>
                <h3 className="text-3xl font-serif font-medium text-white mb-2">{d.name}</h3>
                <p className="text-wine-muted text-sm line-clamp-2 mb-6 font-light italic">
                  {d.blurb}
                </p>
                
                <div className="flex items-center justify-between">
                  <Button 
                    as={NavLink} 
                    to={`/packages#${d.name}`} 
                    variant="glass" 
                    size="sm"
                    className="px-6"
                  >
                    Explore Now
                  </Button>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">
                    {d.subtitle.split(' • ')[0]}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </PageShell>
  )
}

