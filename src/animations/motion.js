import { easeOut } from 'framer-motion'

// Base fade-up variant
export const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i ? 0.1 * i : 0,
    },
  }),
}

// Container with staggered children
export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Shared whileInView props for scroll-triggered sections
export const inViewProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.1 },
}

// Subtle parallax for images (y-only movement)
export const parallaxImage = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

