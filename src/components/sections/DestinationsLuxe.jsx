import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { destinations } from '../../data/destinations.js'
import { fadeUp, inViewProps, staggerContainer } from '../../animations/motion.js'
import Button from '../ui/Button.jsx'
import { NavLink } from 'react-router-dom'

export default function DestinationsLuxe() {
  const [activeIndex, setActiveIndex] = useState(0)
  const displayDestinations = destinations.slice(0, 4)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayDestinations.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [displayDestinations.length])

  return (
    <motion.section
      className="relative mt-20 lg:mt-24 w-full px-4 sm:px-6 lg:px-10"
      variants={staggerContainer}
      {...inViewProps}
    >
      {/* The "Big Card" with Curved Corners */}
      <div className="relative min-h-[650px] sm:min-h-[500px] lg:h-[600px] w-full overflow-hidden rounded-[2.5rem] bg-wine-secondary shadow-2xl flex items-center justify-center">
        
        {/* Background Layer: Changes based on activeIndex */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={displayDestinations[activeIndex].id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={displayDestinations[activeIndex].image} 
              alt={displayDestinations[activeIndex].name}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </AnimatePresence>
          {/* Deep Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-wine-secondary via-wine-secondary/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-secondary via-transparent to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full px-6 py-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
            
            {/* Left Column: 4 Pictures Overlaid (Moved to Left) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
              {displayDestinations.map((d, idx) => (
                <motion.article
                  key={d.id}
                  variants={fadeUp}
                  custom={idx}
                  className="group relative"
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  <motion.div 
                    className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md shadow-xl transition-all duration-700"
                    animate={{ 
                      scale: activeIndex === idx ? 1.02 : 1,
                      borderColor: activeIndex === idx ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      src={d.image}
                      alt={d.name}
                      className="h-full w-full object-cover grayscale-[20%]"
                      loading="lazy"
                      decoding="async"
                      animate={{ 
                        scale: activeIndex === idx ? 1.05 : 1,
                        grayscale: activeIndex === idx ? 0 : '20%'
                      }}
                      transition={{ duration: 2 }}
                    />
                    <div className={`absolute inset-0 bg-wine-secondary/10 transition-opacity duration-500 ${activeIndex === idx ? 'opacity-0' : 'opacity-100'}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </motion.div>
                  
                  <div className="mt-3">
                    <h3 className={`font-serif text-sm lg:text-base transition-colors duration-500 ${activeIndex === idx ? 'text-wine-accent' : 'text-white'}`}>
                      {d.name}
                    </h3>
                    <motion.div 
                      className="h-[1px] bg-wine-accent mt-1"
                      initial={{ width: 0 }}
                      animate={{ width: activeIndex === idx ? '100%' : 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Right Column: Text Editorial (Moved to Right) */}
            <div className="lg:col-span-6 space-y-6 lg:pl-10">
              <motion.div variants={fadeUp}>
                <span className="text-[10px] font-semibold tracking-[0.5em] text-wine-accent uppercase mb-3 block">
                  The Collection
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-none tracking-tighter uppercase">
                  Destinations
                </h2>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-6">
                <p className="max-w-md text-sm sm:text-base text-wine-muted leading-relaxed font-light italic">
                  "Handpicked places worth your time. From beaches to backwaters, we curate destinations that feel premium, scenic, and travel-friendly."
                </p>
                <Button as={NavLink} to="/destinations" size="lg" className="rounded-none px-10 py-4 text-xs uppercase tracking-[0.3em] bg-white text-wine-secondary hover:bg-white hover:opacity-90 hover:text-wine-secondary transition-all duration-700 shadow-xl">
                  Explore &rarr;
                </Button>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  )
}
