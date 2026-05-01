import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero.jsx'
import BrandSection from '../components/sections/BrandSection.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PackageCard from '../components/cards/PackageCard.jsx'
import { destinations } from '../data/destinations.js'
import { tourPackages } from '../data/packages.js'
import PageShell from './_PageShell.jsx'
import { fadeUp, inViewProps, staggerContainer, parallaxImage } from '../animations/motion.js'

import DestinationsLuxe from '../components/sections/DestinationsLuxe.jsx'
import PackagesCarousel from '../components/sections/PackagesCarousel.jsx'
import UpcomingGroups from '../components/sections/UpcomingGroups.jsx'

export default function Home() {
  return (
    <PageShell>
      <Hero />
 
      <motion.section
        className="mt-24"
        variants={staggerContainer}
        {...inViewProps}
      >
        <motion.div variants={fadeUp} className="px-7 sm:px-10">
          <SectionHeading
            eyebrow="Tour Packages"
            title="Refined Itineraries"
            subtitle="Explore a few favorites. Each package comes with a clean itinerary, inclusions, and a simple enquiry flow."
          />
        </motion.div>

        <PackagesCarousel packages={tourPackages} />
      </motion.section>
      <DestinationsLuxe />

      <UpcomingGroups packages={tourPackages} />

      <BrandSection />
    </PageShell>
  )
}

