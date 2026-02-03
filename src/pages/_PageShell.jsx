import { motion } from 'framer-motion'
import { fadeUp } from '../animations/motion.js'

export default function PageShell({ title, subtitle, children }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeOut' } }}
      variants={fadeUp}
      className="space-y-10"
    >
      {title ? (
        <header className="space-y-3">
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
          {subtitle ? <p className="max-w-2xl text-sm leading-6 text-wine-muted">{subtitle}</p> : null}
        </header>
      ) : null}
      {children}
    </motion.div>
  )
}

