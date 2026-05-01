import { motion } from 'framer-motion'
import PageShell from './_PageShell.jsx'
import { fadeUp, inViewProps, staggerContainer } from '../animations/motion.js'
import { site } from '../config/site.js'
import { MapPin, ShieldCheck, Heart, Sparkles, Compass } from 'lucide-react'

export default function About() {
  return (
    <PageShell>
      <motion.div
        className="space-y-32 py-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* 1. Hero Section: The Soul of Triipholic */}
        <section className="relative text-center max-w-4xl mx-auto px-4">
          <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.5em] text-wine-accent uppercase mb-6 block">
            Our Identity
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight tracking-tighter mb-8">
            Crafting the Art of <br />
            <span className="italic text-wine-accent">Memorable Journeys</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-wine-muted/80 font-light leading-relaxed italic">
            "We don’t just plan trips — we create memories that stay with you forever."
          </motion.p>
        </section>

        {/* 2. Our Story: From Darjeeling with Love */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={fadeUp} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/darjelling1.jpeg" 
              alt="Darjeeling Landscapes" 
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine-secondary via-transparent to-transparent opacity-60" />
          </motion.div>

          <div className="space-y-8">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-white">
              Based in Darjeeling, <br />
              <span className="italic text-wine-accent">Inspired by the World.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-wine-muted text-lg leading-relaxed font-light">
              Triipholic was born from a simple belief: that travel should be profound, personal, and perfectly executed. Based in the heart of the hills in Darjeeling, we started with a local mission and grew into a premium travel partner for explorers across the globe.
            </motion.p>
            <motion.p variants={fadeUp} className="text-wine-muted text-lg leading-relaxed font-light">
              With 5 years of experience and over 7,000 happy travelers, we’ve mastered the balance between luxury and raw, authentic connection. Whether it's the hidden shortcuts in the Himalayas or the finest stays in the backwaters, we know the details that make a trip special.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-4 text-wine-accent">
              <MapPin size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">Coochbehar • Darjeeling • Beyond</span>
            </motion.div>
          </div>
        </section>

        {/* 3. Stats: The Triipholic Legacy */}
        <section className="bg-white/[0.02] border-y border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {site.stats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center group">
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-2 group-hover:text-wine-accent transition-colors">
                  {stat.value}{stat.suffix}
                </h3>
                <p className="text-[10px] font-bold text-wine-muted uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Philosophy: Why We Do What We Do */}
        <section className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-white">
              The Pillars of our <span className="italic text-wine-accent">Philosophy</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: 'Trust & Transparency', 
                desc: 'Honest pricing and zero hidden costs. We believe in building relationships, not just bookings.' 
              },
              { 
                icon: Heart, 
                title: 'Designed with Care', 
                desc: 'Every itinerary is hand-crafted. We treat your journey as if it were our own family’s trip.' 
              },
              { 
                icon: Sparkles, 
                title: 'Hassle-Free Magic', 
                desc: 'From the first enquiry to the final goodbye, we handle the complexity so you can enjoy the magic.' 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl space-y-6 hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-wine-accent/10 flex items-center justify-center text-wine-accent">
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-serif text-white">{item.title}</h4>
                <p className="text-wine-muted font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Final CTA */}
        <section className="max-w-4xl mx-auto px-6 text-center py-20 rounded-[3rem] border border-white/10 bg-gradient-to-br from-wine-accent/10 to-transparent">
          <motion.h2 variants={fadeUp} className="text-4xl font-serif text-white mb-8">
            Ready to start your <br />
            <span className="italic text-wine-accent">next legacy?</span>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <button className="px-10 py-4 bg-white text-wine-secondary font-bold uppercase tracking-widest text-xs rounded-full hover:bg-wine-accent hover:text-white transition-all duration-500 shadow-2xl">
              Plan Your Journey
            </button>
          </motion.div>
        </section>
      </motion.div>
    </PageShell>
  )
}

