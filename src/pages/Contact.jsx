import { motion } from 'framer-motion'
import EnquiryForm from '../components/forms/EnquiryForm.jsx'
import { site } from '../config/site.js'
import PageShell from './_PageShell.jsx'
import { fadeUp, inViewProps, staggerContainer } from '../animations/motion.js'

function InfoCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
      <p className="text-sm font-semibold">{title}</p>
      <div className="mt-2 text-sm leading-6 text-wine-muted">{children}</div>
    </div>
  )
}

export default function Contact() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Have questions? Our travel experts are ready to help you plan your next masterpiece."
    >
      <motion.div
        className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-12 lg:items-start"
        variants={staggerContainer}
        {...inViewProps}
      >
        <motion.div className="space-y-6 lg:col-span-5" variants={fadeUp}>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-wine-light">Get in touch</h3>
            <p className="text-sm text-wine-muted leading-relaxed">
              We're available to assist you with booking, customization, and any queries regarding our curated tour packages.
            </p>
          </div>

          <div className="grid gap-4">
            <InfoCard title="Email Address">
              <a className="hover:text-wine-accent transition-colors" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </InfoCard>
            <InfoCard title="Phone / WhatsApp">
              <a className="hover:text-wine-accent transition-colors" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                {site.phone}
              </a>
            </InfoCard>
            <InfoCard title="Our Location">
              <p>{site.address}</p>
            </InfoCard>
          </div>

          <InfoCard title="Direct Support">
            <p className="mb-4">
              Need immediate assistance? Chat with us directly on WhatsApp for a faster response.
            </p>
            <motion.a
              href={`https://wa.me/${site.phone.replace(/\D/g, '')}?text=Hi!%20I'm%20interested%20in%20booking%20a%20tour.`}
              target="_blank"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-wine-light transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#25D366]"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.54 1.932.835 3.034.836h.001c3.181 0 5.768-2.587 5.769-5.767.001-3.181-2.584-5.768-5.763-5.768h-.235zm7.394 13.155c-1.921 1.708-4.437 2.673-7.165 2.674-2.529-.001-4.908-.813-6.936-2.22l-6.173 1.621 1.649-6.027c-1.571-2.091-2.404-4.593-2.405-7.207.002-6.602 5.37-11.972 11.975-11.972 3.199.001 6.206 1.247 8.467 3.51 2.261 2.261 3.506 5.27 3.506 8.469-.001 4.776-2.738 8.879-2.918 11.152zm-3.051-7.069c-.394-.197-2.329-1.15-2.69-1.281-.36-.131-.623-.197-.885.197-.263.394-1.018 1.281-1.247 1.543-.23.263-.46.296-.853.099-1.895-.95-3.04-1.572-4.364-3.858-.164-.283.164-.262.471-.873.066-.131.033-.246-.016-.345-.05-.099-.444-1.067-.607-1.461-.159-.384-.321-.331-.443-.338h-.378c-.131 0-.344.049-.525.246-.181.197-.689.673-.689 1.642 0 .969.705 1.904.804 2.035.099.131 1.387 2.118 3.36 2.97 1.973.853 1.973.569 2.333.535.361-.033 1.164-.476 1.328-.936.164-.46.164-.853.115-.936-.049-.083-.181-.131-.394-.23z" />
              </svg>
              Chat on WhatsApp
            </motion.a>
          </InfoCard>
        </motion.div>

        <motion.div className="lg:col-span-7" variants={fadeUp} custom={0.5}>
          <EnquiryForm />
        </motion.div>
      </motion.div>
    </PageShell>
  )
}

