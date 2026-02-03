import { motion } from 'framer-motion'
import { site } from '../../config/site.js'
import StatsCounter from '../ui/StatsCounter.jsx'
import CircleAccent from '../ui/CircleAccent.jsx'
import LogoOrbit from '../ui/LogoOrbit.jsx'
import { fadeUp, staggerContainer, inViewProps } from '../../animations/motion.js'

export default function BrandSection() {
    return (
        <div className="space-y-24 py-20 overflow-hidden">
            {/* 1. About Us (Headline) */}
            <motion.section
                variants={staggerContainer}
                {...inViewProps}
                className="relative text-center max-w-3xl mx-auto px-4"
            >
                <CircleAccent className="-top-24 -left-24 opacity-30" size="400px" />
                <motion.p
                    variants={fadeUp}
                    className="text-xs font-bold tracking-[0.3em] text-wine-accent uppercase mb-4"
                >
                    About Us
                </motion.p>
                <motion.h2
                    variants={fadeUp}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-wine-light leading-[1.1]"
                >
                    {site.about.headline}
                </motion.h2>
                <motion.p
                    variants={fadeUp}
                    className="mt-6 text-lg md:text-xl text-wine-muted leading-relaxed"
                >
                    {site.about.description}
                </motion.p>
            </motion.section>

            {/* 2. Our Story & Vision */}
            <motion.section
                variants={staggerContainer}
                {...inViewProps}
                className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center"
            >
                <CircleAccent className="-bottom-48 -right-24 opacity-20" size="600px" rotateDuration={60} />
                <motion.div variants={fadeUp} className="lg:col-span-1">
                    <div className="h-px w-full bg-white/10 hidden lg:block" />
                </motion.div>

                <div className="lg:col-span-6 space-y-6">
                    <motion.h3 variants={fadeUp} className="text-2xl font-bold text-wine-light">
                        {site.story.title}
                    </motion.h3>
                    <motion.p variants={fadeUp} className="text-wine-muted leading-relaxed text-base md:text-lg">
                        {site.story.content}
                    </motion.p>
                </div>

                <motion.div variants={fadeUp} className="lg:col-span-12 xl:col-span-5 flex items-center justify-center py-10">
                    <LogoOrbit />
                </motion.div>
            </motion.section>

            {/* 3. Stats Section */}
            <motion.section
                variants={staggerContainer}
                {...inViewProps}
                className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            >
                {site.stats.map((stat, idx) => (
                    <motion.div key={idx} variants={fadeUp}>
                        <StatsCounter {...stat} />
                    </motion.div>
                ))}
            </motion.section>

            {/* 4. Why Choose Us (Icon Cards) */}
            <motion.section
                variants={staggerContainer}
                {...inViewProps}
                className="max-w-7xl mx-auto px-4"
            >
                <motion.div variants={fadeUp} className="text-center mb-12">
                    <p className="text-xs font-bold tracking-[0.2em] text-wine-accent uppercase mb-2">Philosophy</p>
                    <h2 className="text-3xl font-bold text-wine-light">Why Choose Us</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {site.values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            whileHover={{ y: -8 }}
                            className="p-8 rounded-3xl border border-white/10 bg-white/5 shadow-soft transition-colors hover:bg-white/[0.07]"
                        >
                            <div className="text-4xl mb-4">{val.icon}</div>
                            <h4 className="text-lg font-bold text-wine-light mb-2">{val.title}</h4>
                            <p className="text-sm text-wine-muted leading-relaxed">{val.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* 5. Our Services (Grid Layout) */}
            <section className="relative max-w-7xl mx-auto px-4">
                <CircleAccent className="top-0 left-1/2 -translate-x-1/2 opacity-40" size="800px" rotateDuration={80} />
                <motion.div
                    variants={staggerContainer}
                    {...inViewProps}
                    className="grid lg:grid-cols-2 gap-12 items-end mb-12"
                >
                    <motion.div variants={fadeUp}>
                        <p className="text-xs font-bold tracking-[0.2em] text-wine-accent uppercase mb-2">Our Services</p>
                        <h2 className="text-4xl font-bold text-wine-light tracking-tight">Crafting bespoke experiences for the modern explorer.</h2>
                    </motion.div>
                    <motion.p variants={fadeUp} className="text-wine-muted text-sm md:text-base lg:max-w-sm">
                        From secluded mountain retreats to deep-sea expeditions, our services are designed to satisfy the most demanding curiosities.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    {...inViewProps}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {site.services.map((svc, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl border border-white/10 bg-card-gradient shadow-soft"
                        >
                            <div className="text-3xl mb-4">{svc.icon}</div>
                            <h5 className="font-bold text-wine-light mb-2">{svc.title}</h5>
                            <p className="text-xs text-wine-muted leading-relaxed">{svc.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    )
}
