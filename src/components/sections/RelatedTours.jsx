import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { staggerContainer, fadeUp } from '../../animations/motion.js'
import { inViewProps } from '../../animations/motion.js'
import Button from '../ui/Button.jsx'
import { getRelatedPackages } from '../../data/packages.js'

export default function RelatedTours({ relatedPackageSlugs }) {
    const relatedPackages = getRelatedPackages(relatedPackageSlugs)

    if (!relatedPackages || relatedPackages.length === 0) return null

    return (
        <motion.section
            variants={staggerContainer}
            {...inViewProps}
            className="mt-12"
        >
            <motion.div variants={fadeUp} className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight">You may also Like</h2>
                <p className="mt-1 text-sm text-wine-muted">Explore more amazing destinations</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPackages.slice(0, 3).map((pkg) => {
                    const savings = pkg.priceOriginal - pkg.priceFrom
                    const savingsPercent = Math.round((savings / pkg.priceOriginal) * 100)

                    return (
                        <motion.article
                            key={pkg.slug}
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-card-gradient shadow-soft"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-wine-secondary/90 via-wine-secondary/20 to-transparent" />
                                <div className="absolute top-3 right-3">
                                    <span className="rounded-full bg-wine-accent px-3 py-1 text-xs font-semibold text-white">
                                        {savingsPercent}% OFF
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 space-y-3">
                                <div>
                                    <h3 className="font-semibold tracking-tight">{pkg.title}</h3>
                                    <p className="mt-1 text-sm text-wine-muted">{pkg.duration}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-wine-muted">Group</span>
                                    <span className="h-1 w-1 rounded-full bg-wine-muted" />
                                    <span className="text-xs text-wine-muted">{pkg.location}</span>
                                </div>

                                {pkg.tripDates && pkg.tripDates[0] && (
                                    <p className="text-xs text-wine-accent">
                                        {pkg.tripDates[0].availability} • Book now for this week
                                    </p>
                                )}

                                <div className="flex items-baseline gap-2">
                                    <span className="text-sm font-semibold">From ₹{pkg.priceFrom.toLocaleString()}/-</span>
                                    <span className="text-xs text-wine-muted line-through">₹{pkg.priceOriginal.toLocaleString()}</span>
                                </div>

                                <Button
                                    as={NavLink}
                                    to={`/packages/${pkg.slug}`}
                                    variant="secondary"
                                    className="w-full"
                                >
                                    Tour Details
                                </Button>
                            </div>
                        </motion.article>
                    )
                })}
            </div>
        </motion.section>
    )
}
