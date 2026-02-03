import { motion } from 'framer-motion'
import { cn } from '../../utils/cn.js'

export default function CircleAccent({ className, size = "500px", rotateDuration = 50 }) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute -z-10 select-none overflow-hidden",
                className
            )}
            style={{ width: size, height: size }}
        >
            <motion.svg
                viewBox="0 0 100 100"
                className="h-full w-full"
                animate={{ rotate: 360 }}
                transition={{
                    duration: rotateDuration,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="1 3"
                    className="text-white/40"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.2"
                    className="text-white/20"
                />
            </motion.svg>
        </div>
    )
}
