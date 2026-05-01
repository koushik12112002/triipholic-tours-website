import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, inViewProps, staggerContainer, parallaxImage } from '../../animations/motion.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import { Clock, Users, Star, StarHalf } from 'lucide-react'

export default function UpcomingGroups({ packages }) {
  const WhatsAppIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )

  // Find representative packages for each category
  const darjeelingGroup = packages.find(p => p.category === 'Darjeeling')
  const sikkimGroup = packages.find(p => p.category === 'Sikkim')
  const kalimpongGroup = packages.find(p => p.category === 'Kalimpong')
  const kashmirGroup = packages.find(p => p.category === 'Kashmir')
  const manaliGroup = packages.find(p => p.category === 'Manali')

  // Create the display array, overriding Darjeeling's image as requested
  const groups = [
    { ...darjeelingGroup, overrideImage: '/assets/darjelling5.jpg', overridePlace: 'Darjeeling' },
    { ...sikkimGroup, overridePlace: 'Sikkim' },
    { ...kalimpongGroup, overridePlace: 'Kalimpong' },
    { ...kashmirGroup, overridePlace: 'Kashmir' },
    { ...manaliGroup, overridePlace: 'Manali' }
  ].filter(g => g.id) // Filter out any undefined if not found

  const initialGroups = useMemo(() => groups.slice(0, 5), [groups])
  const [displayGroups, setDisplayGroups] = useState(initialGroups)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 4000)
    return () => clearInterval(timer)
  }, [displayGroups])

  const handleNext = () => {
    setDisplayGroups((prev) => {
      if (!prev || prev.length === 0) return prev;
      const [first, ...rest] = prev
      return [...rest, first]
    })
  }

  return (
    <motion.section
      className="mt-24 px-7 sm:px-10 max-w-7xl mx-auto"
      variants={staggerContainer}
      {...inViewProps}
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.4em] text-amber-500/90 uppercase mb-4 drop-shadow-sm">Group Travel</p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight">
            Upcoming <span className="text-wine-accent">Group Trips</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="lg:max-w-md lg:pb-2 border-l border-white/10 lg:pl-8">
          <p className="text-lg text-wine-muted/80 leading-relaxed italic font-light">
            Join a community of like-minded explorers. Hand-curated group departures with fixed dates and exclusive perks.
          </p>
        </motion.div>
      </div>

      <div className="relative mt-12 w-full overflow-hidden py-10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-center gap-4 px-10">
          <AnimatePresence mode="popLayout" initial={false}>
            {displayGroups.map((group, idx) => {
              let scale = 0.9
              let opacity = 0.8
              let zIndex = 10
              let xOffset = 0

              if (idx === 2) {
                scale = 1.15
                opacity = 1
                zIndex = 30
              } else if (idx === 0) {
                scale = 0.85
                opacity = 0.3
                zIndex = 5
                xOffset = 30
              } else if (idx === 4) {
                scale = 0.85
                opacity = 0.3
                zIndex = 5
                xOffset = -30
              }

              if (idx === 1 || idx === 3) {
                scale = 0.95
                opacity = 0.7
                zIndex = 20
              }

              // Stable random rating based on group slug/title
              const getRating = (str) => {
                let hash = 0;
                for (let i = 0; i < str.length; i++) {
                  hash = str.charCodeAt(i) + ((hash << 5) - hash);
                }
                const val = Math.abs(hash) % 3; // 0, 1, 2
                if (val === 0) return 4;
                if (val === 1) return 4.5;
                return 5;
              };
              const rating = getRating(group.slug || group.title || 'group');

              return (
                <motion.div
                    key={group.id || idx}
                    layout
                    initial={{ opacity: 0, x: 80, scale: 0.8 }}
                    animate={{
                      opacity,
                      x: xOffset,
                      scale,
                      zIndex
                    }}
                    exit={{
                      opacity: 0,
                      x: -80,
                      scale: 0.8,
                      transition: { duration: 0.6 }
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      mass: 1
                    }}
                    className={`relative flex-none transition-shadow duration-500 ${idx === 0 || idx === 4 ? 'hidden lg:block w-[200px]' :
                      idx === 1 || idx === 3 ? 'hidden sm:block w-[300px] lg:w-[280px]' :
                        'w-[75vw] sm:w-[420px] lg:w-[380px]'
                      }`}
                  >
                  <div className={`transition-all duration-500 ${idx === 2 ? 'shadow-2xl ring-2 ring-wine-accent/30 rounded-2xl' : ''}`}>
                    <motion.article
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      variants={fadeUp}
                      className="group relative flex flex-col bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl border border-white/20 overflow-hidden transition-shadow duration-300 transform-gpu will-change-transform"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {/* Image Section (Top Half) */}
                      <div className="relative h-[160px] w-full overflow-hidden">
                        <img
                          src={group.overrideImage || group.image}
                          alt={group.overridePlace || group.title}
                          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          loading="lazy"
                        />
                        {idx === 2 && (
                          <div className="absolute top-4 right-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-[10px] font-bold text-black uppercase tracking-widest shadow-lg backdrop-blur-sm">
                              Featured Group
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content Section (Bottom Half) */}
                      <div className="flex flex-col flex-grow p-4 space-y-1.5">

                        {/* Top Meta Row (Duration & Group) */}
                        <div className="flex items-center justify-between text-[11px] text-white/80 font-medium">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-wine-accent" />
                            <span>{group.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-4 h-4 text-wine-accent" />
                            <span>Group</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-white leading-tight line-clamp-2">
                          {group.overridePlace || group.title}
                        </h3>

                        {/* Subtitle / Urgency */}
                        <p className="text-[11px] text-white/60">
                          Limited slots • Book now for this week
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => {
                            if (star <= Math.floor(rating)) {
                              return <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
                              return <StarHalf key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            } else {
                              return <Star key={star} className="w-3.5 h-3.5 text-amber-400/30" />
                            }
                          })}
                          <span className="text-[10px] font-bold text-amber-400/80 ml-1">{rating}</span>
                        </div>

                        {/* Pricing Section (Price on Request) */}
                        <div className="pt-2 mt-auto">
                          <p className="text-sm font-bold text-white/80">From</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-extrabold text-white">
                              Price on Request
                            </span>
                          </div>
                        </div>

                        {/* Call to Action Button */}
                        <a
                          href={`https://wa.me/916294010263?text=Hi! I'm interested in the ${group.overridePlace || group.title} Group Trip.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 w-full bg-white/10 border border-white/20 hover:bg-gradient-to-r hover:from-wine-primary hover:to-wine-accent hover:border-transparent text-white transition-all duration-300 rounded-xl py-3 flex items-center justify-center gap-2 font-bold text-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                        >
                          <WhatsAppIcon />
                          Book on WhatsApp
                        </a>

                      </div>
                    </motion.article>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}
