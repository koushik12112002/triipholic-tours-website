import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero.jsx'
import BrandSection from '../components/sections/BrandSection.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PackageCard from '../components/cards/PackageCard.jsx'
import { destinations } from '../data/destinations.js'
import { tourPackages } from '../data/packages.js'
import PageShell from './_PageShell.jsx'
import { fadeUp, inViewProps, staggerContainer, parallaxImage } from '../animations/motion.js'

export default function Home() {
  return (
    <PageShell>
      <Hero />

      <motion.section
        className="mt-10"
        variants={staggerContainer}
        {...inViewProps}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            eyebrow="Destinations"
            title="Handpicked places worth your time"
            subtitle="From beaches to backwaters, we curate destinations that feel premium, scenic, and travel-friendly."
          />
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, idx) => (
            <motion.article
              key={d.id}
              variants={fadeUp}
              custom={idx * 0.2}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-card-gradient shadow-soft"
            >
              <motion.div
                className="relative aspect-[4/3] overflow-hidden"
                variants={parallaxImage}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-secondary/90 via-wine-secondary/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-base font-semibold">{d.name}</p>
                  <p className="mt-1 text-sm text-wine-muted">{d.subtitle}</p>
                </div>
              </motion.div>
              <div className="p-4">
                <p className="text-sm leading-6 text-wine-muted">{d.blurb}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-12"
        variants={staggerContainer}
        {...inViewProps}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            eyebrow="Tour Packages"
            title="Premium packages with day-wise clarity"
            subtitle="Explore a few favorites. Each package comes with a clean itinerary, inclusions, and a simple enquiry flow."
          />
        </motion.div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tourPackages.slice(0, 3).map((p, idx) => (
            <motion.div key={p.id} variants={fadeUp} custom={idx * 0.2}>
              <PackageCard pkg={p} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <BrandSection />
    </PageShell>
  )
}

