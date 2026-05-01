import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { fadeUp, inViewProps, staggerContainer, parallaxImage } from '../../animations/motion.js'
import Button from '../ui/Button.jsx'
import BrandBackground from '../ui/BrandBackground.jsx'

export default function Hero() {
  const phrases = [
    "\"Travel is the only thing you buy that makes you richer, filling your soul with memories that never fade.\"",
    "\"Collect moments, not things. Explore the world's hidden gems and find the magic in every destination.\"",
    "\"To travel is to live. Discover journeys that change your soul and broaden your horizons beyond limits.\"",
    "\"The world is a book, and those who do not travel read only one page; start your next chapter today.\""
  ]

  const features = [
    { title: 'Personalized Journeys', desc: 'Every itinerary is tailored to match your preferences and travel style.', emoji: '✨' },
    { title: 'Trusted & Secure', desc: 'End-to-end safety, verified partners, and secure booking experience.', emoji: '🛡️' },
    { title: 'Time Optimized Travel', desc: 'Smart planning to help you explore more in less time, without the rush.', emoji: '⏱️' },
    { title: 'Premium Stays', desc: 'Handpicked accommodations that combine comfort, luxury, and authenticity.', emoji: '🏨' },
    { title: '24/7 Support', desc: 'Dedicated assistance anytime, anywhere during your journey.', emoji: '🤝' },
    { title: 'Hidden Gems', desc: 'Beyond tourist spots—discover places only locals truly know.', emoji: '📍' },
    { title: 'Hassle-Free Experience', desc: 'From booking to return, we handle everything so you just enjoy.', emoji: '🚀' },
    { title: 'Sustainable Impact', desc: 'Supporting local communities and eco-friendly travel initiatives.', emoji: '🌿' },
  ]

  const [index, setIndex] = useState(0)
  const [tickerIndex, setTickerIndex] = useState(0)

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, 5000)

    const tickerTimer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => {
      clearInterval(quoteTimer)
      clearInterval(tickerTimer)
    }
  }, [phrases.length, features.length])

  // Helper to get 4 visible items with wrap-around
  const visibleFeatures = [
    features[tickerIndex % features.length],
    features[(tickerIndex + 1) % features.length],
    features[(tickerIndex + 2) % features.length],
    features[(tickerIndex + 3) % features.length],
  ]

  return (
    <motion.section
      className="relative min-h-[500px] lg:h-[70vh] w-full overflow-hidden rounded-[2.5rem] bg-wine-secondary shadow-2xl flex items-center"
      variants={staggerContainer}
      {...inViewProps}
    >
      {/* Cinematic Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/assets/darjelling6.jpg"
          alt="Majestic Mountains"
          className="h-full w-full object-cover opacity-40 grayscale-[30%]"
        />
        {/* Deep Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-wine-secondary via-wine-secondary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-secondary via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 w-full grid gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:items-center">

        {/* Main Content: Left Column */}
        <div className="lg:col-span-7 space-y-4">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-xs font-semibold tracking-[0.22em] text-wine-muted"
          >
            PREMIUM TOURS • CURATED PACKAGES • SEAMLESS ENQUIRIES
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={0.5}
            className="mt-5 text-balance leading-[1.1]"
          >
            <span className="block text-xl font-medium tracking-[0.3em] text-wine-muted uppercase sm:text-2xl">
              Discover journeys
            </span>
            <span className="mt-2 block text-4xl font-extrabold tracking-tighter text-white sm:text-6xl lg:text-7xl">
              that feel <span className="relative inline-block">
                <span className="bg-gradient-to-br from-wine-accent via-[#ff7e79] to-wine-accent bg-clip-text text-transparent italic px-1">
                  tailored
                </span>
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-wine-accent to-transparent opacity-50" />
              </span>
            </span>
            <span className="mt-4 block text-3xl font-semibold tracking-tight text-white/70 sm:text-5xl">
              not templated.
            </span>
          </motion.h1>

          <div className="mt-14 h-[8rem] sm:h-[5rem]">
            <AnimatePresence mode="wait">
              <motion.h3
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl text-lg italic leading-relaxed text-wine-muted sm:text-xl"
              >
                {phrases[index]}
              </motion.h3>
            </AnimatePresence>
          </div>

          <motion.div variants={fadeUp} custom={1.5} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button as={NavLink} to="/packages" variant="wine" size="lg">
              Explore Packages
            </Button>
            <Button as={NavLink} to="/contact" variant="glass" size="lg">
              Enquire Now
            </Button>
          </motion.div>

          {/* Social Links Row */}
          <div className="mt-10 flex items-center gap-6">
            {[
              {
                name: 'WhatsApp',
                icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />,
                url: 'https://wa.me/916294010263?text=Hi!%20I\'m%20interested%20in%20booking%20a%20tour.',
                color: '#25D366'
              },
              {
                name: 'Instagram',
                icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
                url: 'https://www.instagram.com/triipholic?igsh=MXBwb21scmYwZTJtbA==',
                color: '#E4405F'
              },
              {
                name: 'Facebook',
                icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
                url: 'https://www.facebook.com/share/1BuAhiTqsa/',
                color: '#1877F2'
              }
            ].map((social, idx) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 2 + (idx * 0.2),
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 shadow-lg"
                whileHover={{ y: -6, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Dynamic Glow Effect */}
                <div
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-2xl blur-xl"
                  style={{ backgroundColor: social.color }}
                />

                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-white/80 transition-all duration-300 group-hover:fill-white group-hover:drop-shadow-[0_0_8px_white]"
                >
                  {social.icon}
                </svg>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Feature Ticker: Absolutely positioned in the bottom-right corner - hidden on mobile */}
        <motion.div
          className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-end gap-2 max-w-[280px]"
          variants={parallaxImage}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleFeatures.map((item, idx) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-xl border border-white/20 bg-gradient-to-br from-white/10 via-white/[0.05] to-transparent backdrop-blur-2xl p-2.5 shadow-xl inline-flex flex-col gap-1.5 text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-inner overflow-hidden">
                    <span className="text-xs filter grayscale-[100%] brightness-[200%] contrast-[150%] opacity-90">{item.emoji}</span>
                  </div>
                  <p className="text-[12px] font-bold text-white uppercase tracking-widest leading-none">{item.title}</p>
                </div>
                <p className="text-[10px] text-wine-muted leading-tight line-clamp-1 max-w-[250px] pl-9.5">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </motion.section>
  )
}
