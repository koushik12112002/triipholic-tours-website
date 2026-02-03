import { motion } from 'framer-motion'
import { cn } from '../../utils/cn.js'

export default function Button({
  as: Comp = 'button',
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-wine-accent/60 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60'

  const variants = {
    primary:
      'bg-wine-accent text-wine-light shadow-glow hover:brightness-110 active:brightness-95',
    secondary:
      'bg-white/10 text-wine-light shadow-soft hover:bg-white/15 active:bg-white/10',
    ghost:
      'bg-transparent text-wine-light hover:bg-white/10 active:bg-white/5',
  }

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-4 text-sm sm:text-[0.95rem]',
    lg: 'h-12 px-5 text-base',
  }

  const MotionComp = motion(Comp)

  return (
    <MotionComp
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}

