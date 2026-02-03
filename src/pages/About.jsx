import { motion } from 'framer-motion'
import PageShell from './_PageShell.jsx'
import { fadeUp, inViewProps, staggerContainer } from '../animations/motion.js'

export default function About() {
  return (
    <PageShell
      title="About Us"
      subtitle="A premium, customer-first travel brand — built for clarity, comfort, and memorable experiences."
    >
      <motion.div
        className="grid gap-6 lg:grid-cols-12"
        variants={staggerContainer}
        {...inViewProps}
      >
        <motion.section
          className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft lg:col-span-7"
          variants={fadeUp}
        >
          <p className="text-sm leading-6 text-wine-muted">
            We design tours the way travellers actually want them: clean itineraries, honest inclusions, and a simple
            enquiry experience. Our focus is on premium planning and smooth execution — from the first message to the
            final day.
          </p>
          <p className="text-sm leading-6 text-wine-muted">
            This website is frontend-only by design. Enquiries are routed through Google Apps Script to a Google Sheet,
            with email notifications — keeping operations lightweight and fast.
          </p>
        </motion.section>

        <motion.section
          className="rounded-2xl border border-white/10 bg-card-gradient p-6 shadow-soft lg:col-span-5"
          variants={fadeUp}
          custom={0.5}
        >
          <p className="text-sm font-semibold">What we optimize for</p>
          <ul className="mt-4 space-y-2 text-sm text-wine-muted">
            {[
              'Premium dark theme with wine-red gradients',
              'Mobile-first responsiveness',
              'Clean information hierarchy',
              'Simple, reliable enquiry workflow',
              'Reusable components for future expansion',
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-wine-accent" />
                <span className="leading-6">{x}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      </motion.div>
    </PageShell>
  )
}

