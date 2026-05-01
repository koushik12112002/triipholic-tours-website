import { motion } from 'framer-motion'
import { site } from '../../config/site.js'
import StatsCounter from '../ui/StatsCounter.jsx'
import CircleAccent from '../ui/CircleAccent.jsx'
import LogoOrbit from '../ui/LogoOrbit.jsx'
import { fadeUp, staggerContainer, inViewProps } from '../../animations/motion.js'
import { MapPin, BadgePercent, Settings2, Sparkles, Headphones } from 'lucide-react'

const valueIcons = [MapPin, BadgePercent, Settings2, Sparkles, Headphones]
export default function BrandSection() {
    return (
        <div className="space-y-20 py-20 lg:space-y-32 lg:py-32 overflow-hidden bg-wine-secondary/20">
            {/* 1. Centered Editorial Heading */}
            <motion.section
                variants={staggerContainer}
                {...inViewProps}
                className="relative text-center max-w-5xl mx-auto px-7"
            >
                <motion.p
                    variants={fadeUp}
                    className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-amber-500/90 uppercase mb-4 md:mb-6"
                >
                    About Us
                </motion.p>
                <motion.h2
                    variants={fadeUp}
                    className="text-4xl md:text-7xl lg:text-8xl font-serif font-medium text-white tracking-tight leading-[1.1]"
                >
                    START YOUR <br />
                    <span className="italic text-wine-accent">LEGACY</span> HERE
                </motion.h2>
                <motion.p
                    variants={fadeUp}
                    className="mt-6 md:mt-8 text-xs md:text-base font-light tracking-[0.2em] text-wine-muted uppercase"
                >
                    Redefining the art of travel
                </motion.p>
            </motion.section>

            {/* 2. Featured: Redefining Art (Image Left, Text Right) */}
            <motion.section
                variants={staggerContainer}
                {...inViewProps}
                className="max-w-8xl mx-auto px-7 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
                {/* Offset Image Frame */}
                <motion.div variants={fadeUp} className="relative px-4 lg:px-0">
                    <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border border-white/10 rounded-2xl -z-10 translate-x-4 translate-y-4" />
                    <div className="overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl">
                        <img 
                            src="/assets/darjelling3.jpg" 
                            alt="Serene Landscape" 
                            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                        />
                    </div>
                </motion.div>

                <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                    <motion.span variants={fadeUp} className="inline-block px-4 py-1 border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest">
                        Featured
                    </motion.span>
                    <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                        We craft legacies <br />
                        <span className="italic">of exploration</span>
                    </motion.h3>
                    <motion.div variants={fadeUp} className="flex items-center gap-4 lg:gap-6 justify-center lg:justify-start">
                        <div className="h-px w-12 md:w-24 bg-white/20" />
                        <p className="text-xs md:text-sm font-medium text-wine-muted uppercase tracking-wider">The master of your journey</p>
                    </motion.div>
                    <motion.p variants={fadeUp} className="text-base md:text-lg text-wine-muted/80 font-light leading-relaxed">
                        We don’t just book trips; we craft legacies of exploration. Every journey is a canvas, and every traveler is a masterpiece.
                    </motion.p>
                </div>
            </motion.section>

            {/* 3. Story: Restless Curiosity (Text Left, Image Right) */}
            <motion.section
                variants={staggerContainer}
                {...inViewProps}
                className="max-w-7xl mx-auto px-7 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
                <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-right flex flex-col items-center lg:items-end">
                    <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                        Our <span className="italic">Story</span>
                    </motion.h3>
                    <motion.div variants={fadeUp} className="flex items-center gap-4 lg:gap-6 justify-center lg:justify-end">
                        <p className="text-xs md:text-sm font-medium text-wine-muted uppercase tracking-wider text-center lg:text-right">It began with a restless heart</p>
                        <div className="h-px w-12 md:w-24 bg-white/20" />
                    </motion.div>
                    <motion.p variants={fadeUp} className="text-base md:text-lg text-wine-muted/80 font-light leading-relaxed max-w-lg">
                        It began with a single backpack and a restless heart. We believed that travel should be more than a checklist of monuments—it should be a profound connection to the soul of a place. Over a decade later, we remain committed to that same restless curiosity, curating experiences that linger in the memory long after the bags are unpacked.
                    </motion.p>
                </div>

                {/* Offset Image Frame (Opposite side) */}
                <motion.div variants={fadeUp} className="relative order-1 lg:order-2 px-4 lg:px-0">
                    <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border border-white/10 rounded-2xl -z-10 -translate-x-4 -translate-y-4" />
                    <div className="overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl">
                        <img 
                            src="/assets/darjelling4.jpg" 
                            alt="Coastal View" 
                            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* 4. Stats: Glassmorphism Bar */}
            <motion.section
                variants={staggerContainer}
                {...inViewProps}
                className="max-w-7xl mx-auto px-7"
            >
                <motion.div 
                    variants={fadeUp}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8 md:py-10 border-y border-white/10 backdrop-blur-sm bg-white/[0.02]"
                >
                    {site.stats.map((stat, idx) => (
                        <div key={idx} className="text-center group border-b border-white/5 last:border-0 sm:border-b-0 pb-4 sm:pb-0">
                            <h4 className="text-3xl md:text-4xl font-serif text-white mb-1 md:mb-2 group-hover:text-amber-500 transition-colors">{stat.value}{stat.suffix}</h4>
                            <p className="text-[10px] font-bold text-wine-muted uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.section>

            {/* 5. The Triipholic Difference (Reference-Inspired Design) */}
            <motion.section
                variants={staggerContainer}
                {...inViewProps}
                className="max-w-7xl mx-auto px-7 py-24 border-y border-white/10"
            >
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left: Branding & CTA */}
                    <div className="lg:col-span-5 space-y-10">
                        <motion.div variants={fadeUp} className="flex items-center gap-3 text-wine-accent">
                            <span className="text-xl font-light">/</span>
                            <span className="text-xs font-bold uppercase tracking-[0.4em]">Why Triipholic?</span>
                        </motion.div>
                        
                        <motion.h2 variants={fadeUp} className="text-5xl lg:text-7xl font-serif text-white leading-[1.05] tracking-tight">
                            The Triipholic <br />
                            <span className="text-wine-accent italic">Difference</span>
                        </motion.h2>

                        <motion.div variants={fadeUp} className="space-y-6">
                            <p className="text-lg text-wine-muted font-light leading-relaxed max-w-md">
                                We don’t just plan trips — we create memories that stay with you forever. Every journey is designed with care, passion, and local expertise.
                            </p>
                            
                            <div className="flex flex-wrap gap-8 pt-6">
                                <button className="group text-wine-accent font-bold uppercase tracking-widest text-[10px] hover:text-white transition-all duration-300 flex items-center gap-2">
                                    Call Now <span className="text-lg transition-transform group-hover:translate-x-1">›</span>
                                </button>
                                <button className="group text-wine-accent font-bold uppercase tracking-widest text-[10px] hover:text-white transition-all duration-300 flex items-center gap-2">
                                    Enquire Now <span className="text-lg transition-transform group-hover:translate-x-1">›</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Feature Grid with divider lines */}
                    <div className="lg:col-span-7 relative">
                        {/* Vertical line separator */}
                        <div className="absolute hidden lg:block -left-12 top-0 bottom-0 w-px bg-white/10" />
                        
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                            {site.values.map((val, idx) => (
                                <motion.div 
                                    key={idx} 
                                    variants={fadeUp}
                                    className={`space-y-6 group pb-8 border-b border-white/5 md:border-b-0 ${
                                        idx < 4 ? 'md:border-b md:border-white/5' : ''
                                    } ${
                                        idx % 2 === 0 ? 'md:pr-12 md:border-r md:border-white/5' : 'md:pl-4'
                                    }`}
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-white group-hover:bg-wine-accent/10 group-hover:border-wine-accent/30 transition-all duration-500">
                                            {(() => {
                                                const Icon = valueIcons[idx] || Sparkles
                                                return <Icon size={24} strokeWidth={1.5} />
                                            })()}
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-lg font-serif text-white group-hover:text-wine-accent transition-colors duration-300">
                                                {val.title}
                                            </h4>
                                            <p className="text-sm text-wine-muted/60 leading-relaxed font-light">
                                                {val.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 6. Our Services (Grid Layout) */}
            <motion.section
                variants={staggerContainer}
                {...inViewProps}
                className="relative max-w-7xl mx-auto px-7"
            >
                <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
                    <motion.div variants={fadeUp}>
                        <p className="text-xs font-bold tracking-[0.2em] text-amber-500/90 uppercase mb-4">Our Services</p>
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                            Crafting bespoke experiences <br />
                            <span className="italic">for the modern explorer.</span>
                        </h2>
                    </motion.div>
                    <motion.p variants={fadeUp} className="text-wine-muted text-lg font-light lg:max-w-md">
                        From secluded mountain retreats to deep-sea expeditions, our services are designed to satisfy the most demanding curiosities.
                    </motion.p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    {...inViewProps}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {site.services.map((svc, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative p-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.05] to-transparent backdrop-blur-2xl transition-all duration-500 shadow-2xl overflow-hidden min-h-[220px] flex flex-col justify-center"
                        >
                            {/* Animated Background Shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-wine-accent/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <h5 className="relative text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
                                {svc.title}
                            </h5>
                            <p className="relative text-sm text-wine-muted leading-relaxed font-light tracking-wide">
                                {svc.description}
                            </p>

                            {/* Subtle Glass Decoration */}
                            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/5 blur-3xl group-hover:bg-wine-accent/10 transition-colors duration-700" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    )
}
