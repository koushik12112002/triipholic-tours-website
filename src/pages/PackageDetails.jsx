import { NavLink, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import ItineraryAccordion from '../components/accordions/ItineraryAccordion.jsx'
import EnquiryForm from '../components/forms/EnquiryForm.jsx'
import PricingCard from '../components/cards/PricingCard.jsx'
import TabbedContent from '../components/ui/TabbedContent.jsx'
import RelatedTours from '../components/sections/RelatedTours.jsx'
import Button from '../components/ui/Button.jsx'
import { getPackageBySlug } from '../data/packages.js'
import PageShell from './_PageShell.jsx'
import { fadeUp, inViewProps, staggerContainer, parallaxImage } from '../animations/motion.js'

function List({ title, items }) {
  if (!items?.length) return null
  return (
    <div>
      <p className="text-sm font-semibold mb-3">{title}</p>
      <ul className="space-y-2 text-sm text-wine-muted">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-wine-accent" />
            <span className="leading-6">{x}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PackageDetails() {
  const { slug } = useParams()
  const pkg = getPackageBySlug(slug)

  if (!pkg) {
    return (
      <PageShell title="Package not found" subtitle="The package you're looking for doesn't exist (or the URL is wrong).">
        <Button as={NavLink} to="/packages" variant="secondary">
          Back to Packages
        </Button>
      </PageShell>
    )
  }

  // Prepare tab content
  const tabs = [
    {
      label: 'Itinerary',
      content: (
        <div>
          <p className="text-sm text-wine-muted mb-4">Tap a day to expand details.</p>
          <ItineraryAccordion items={pkg.itinerary} />
        </div>
      ),
    },
    {
      label: 'Inclusions',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <List title="What's Included" items={pkg.inclusions} />
          <List title="What's Excluded" items={pkg.exclusions} />
        </div>
      ),
    },
    {
      label: 'Date & Costing',
      content: (
        <div className="space-y-6">
          {pkg.tripDates && pkg.tripDates.length > 0 && (
            <div>
              <p className="text-sm font-semibold mb-3">Upcoming Trip Dates</p>
              <div className="space-y-2">
                {pkg.tripDates.map((trip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm">{trip.date}</span>
                    <span className="rounded-full bg-wine-accent/20 px-3 py-1 text-xs text-wine-accent">
                      {trip.availability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {pkg.hotelDetails && (
            <div>
              <p className="text-sm font-semibold mb-2">Hotel Details</p>
              <p className="text-sm text-wine-muted">{pkg.hotelDetails}</p>
            </div>
          )}

          {pkg.notes && pkg.notes.length > 0 && (
            <div>
              <p className="text-sm font-semibold mb-3">Important Notes</p>
              <ul className="space-y-2">
                {pkg.notes.map((note, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-wine-muted">
                    <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-wine-accent" />
                    <span className="leading-6">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-xl border border-wine-accent/30 bg-wine-accent/5 p-4">
            <p className="text-sm font-semibold text-wine-light">Final Price</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-wine-accent">₹{pkg.priceFrom.toLocaleString()}</span>
              {pkg.priceOriginal && (
                <span className="text-sm text-wine-muted line-through">₹{pkg.priceOriginal.toLocaleString()}</span>
              )}
            </div>
            <p className="mt-1 text-xs text-wine-muted">Per Person (All Inclusive)</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <PageShell
      title={pkg.title}
      subtitle={`${pkg.location} • ${pkg.duration} • ${pkg.pickupDrop || ''}`}
    >
      {/* Tagline */}
      {pkg.tagline && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-center"
        >
          <p className="text-lg font-semibold italic text-wine-accent">{pkg.tagline}</p>
        </motion.div>
      )}

      {/* Hero Image */}
      <motion.section
        className="overflow-hidden rounded-2xl border border-white/10 bg-card-gradient shadow-soft"
        variants={parallaxImage}
        {...inViewProps}
      >
        <div className="relative aspect-[16/7]">
          <img src={pkg.image} alt={pkg.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-secondary/95 via-wine-secondary/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-wine-muted">HIGHLIGHTS</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {pkg.highlights.map((h) => (
                <span key={h} className="rounded-full bg-white/10 px-3 py-1 text-xs text-wine-muted ring-1 ring-white/10">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="grid gap-6 lg:grid-cols-12 lg:items-start"
        variants={staggerContainer}
        {...inViewProps}
      >
        <div className="space-y-6 lg:col-span-7">
          {/* Tabbed Content */}
          <motion.div variants={fadeUp}>
            <TabbedContent tabs={tabs} />
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
          {/* Pricing Card */}
          {pkg.priceOriginal && (
            <PricingCard priceOriginal={pkg.priceOriginal} priceFrom={pkg.priceFrom} />
          )}

          {/* Enquiry Form */}
          <motion.div variants={fadeUp} custom={1}>
            <EnquiryForm defaultPackageSlug={pkg.slug} />
          </motion.div>

          {/* Help Text */}
          <motion.div
            variants={fadeUp}
            custom={1.5}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-wine-muted shadow-soft"
          >
            Prefer a callback? Share your number and ideal travel dates — we'll help you customize this package.
          </motion.div>
        </div>
      </motion.section>

      {/* Related Tours */}
      {pkg.relatedPackages && pkg.relatedPackages.length > 0 && (
        <RelatedTours relatedPackageSlugs={pkg.relatedPackages} />
      )}
    </PageShell>
  )
}

