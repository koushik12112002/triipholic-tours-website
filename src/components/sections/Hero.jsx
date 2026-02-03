import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { fadeUp, inViewProps, staggerContainer, parallaxImage } from '../../animations/motion.js'
import Button from '../ui/Button.jsx'
import BrandBackground from '../ui/BrandBackground.jsx'

export default function Hero() {
  return (
    <motion.section
      className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft"
      variants={staggerContainer}
      {...inViewProps}
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_20%,rgba(199,54,46,0.25),transparent_55%)]" />

      {/* Dynamic Brand Background Element - Layered behind everything */}
      <div className="absolute inset-0 z-0">
        <BrandBackground />
      </div>

      <div className="relative z-10 grid gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:items-center">
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
            className="mt-1 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Discover journeys that feel <span className="text-wine-light">tailored</span>, not templated.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-2 max-w-xl text-sm leading-6 text-wine-muted sm:text-[0.95rem]"
          >
            A premium tours & travel experience with handpicked destinations, thoughtfully designed itineraries, and an
            easy enquiry flow — all in a dark wine-red aesthetic.
          </motion.p>

          <motion.div variants={fadeUp} custom={1.5} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button as={NavLink} to="/packages" size="lg">
              Explore Packages
            </Button>
            <Button as={NavLink} to="/contact" variant="secondary" size="lg">
              Enquire Now
            </Button>
          </motion.div>

          {/* Classy Social Links Row with Drop Animation */}
          <div className="mt-10 flex items-center gap-6">
            {[
              {
                name: 'WhatsApp',
                icon: <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.54 1.932.835 3.034.836h.001c3.181 0 5.768-2.587 5.769-5.767.001-3.181-2.584-5.768-5.763-5.768h-.235zm7.394 13.155c-1.921 1.708-4.437 2.673-7.165 2.674-2.529-.001-4.908-.813-6.936-2.22l-6.173 1.621 1.649-6.027c-1.571-2.091-2.404-4.593-2.405-7.207.002-6.602 5.37-11.972 11.975-11.972 3.199.001 6.206 1.247 8.467 3.51 2.261 2.261 3.506 5.27 3.506 8.469-.001 4.776-2.738 8.879-2.918 11.152zm-3.051-7.069c-.394-.197-2.329-1.15-2.69-1.281-.36-.131-.623-.197-.885.197-.263.394-1.018 1.281-1.247 1.543-.23.263-.46.296-.853.099-1.895-.95-3.04-1.572-4.364-3.858-.164-.283.164-.262.471-.873.066-.131.033-.246-.016-.345-.05-.099-.444-1.067-.607-1.461-.159-.384-.321-.331-.443-.338h-.378c-.131 0-.344.049-.525.246-.181.197-.689.673-.689 1.642 0 .969.705 1.904.804 2.035.099.131 1.387 2.118 3.36 2.97 1.973.853 1.973.569 2.333.535.361-.033 1.164-.476 1.328-.936.164-.46.164-.853.115-.936-.049-.083-.181-.131-.394-.23z" />,
                url: 'https://wa.me/919641849372?text=Hi!%20I\'m%20interested%20in%20booking%20a%20tour.',
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

        <motion.div
          className="lg:col-span-5"
          variants={parallaxImage}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { k: 'Curated', v: 'Premium itineraries with clear day-wise plans.' },
              { k: 'Responsive', v: 'Mobile-first layout with subtle motion.' },
              { k: 'Fast Enquiry', v: 'Google Apps Script + Sheets storage.' },
              { k: 'Premium UI', v: 'Wine-red gradients, soft shadows, clean type.' },
            ].map((item, idx) => (
              <motion.div
                key={item.k}
                variants={fadeUp}
                custom={idx * 0.4}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-soft"
              >
                <p className="text-sm font-semibold">{item.k}</p>
                <p className="mt-1 text-sm leading-6 text-wine-muted">{item.v}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

