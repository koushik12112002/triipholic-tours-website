import { motion } from 'framer-motion'

export default function BrandBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative flex items-center justify-center w-full h-full"
            >
                {/* Large Brand Logo with subtle base opacity */}
                <img
                    src="/logo.png"
                    alt="Brand Background"
                    className="h-[80vh] w-auto object-contain grayscale brightness-[2.5] opacity-[0.06] drop-shadow-[0_0_30px_rgba(199,54,46,0.2)]"
                />

                {/* Horizontal Wine-Red Light Sweep (Vibrant Lighting Design) */}
                <motion.div
                    className="absolute h-full w-[200%] pointer-events-none z-10"
                    animate={{
                        translateX: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 2
                    }}
                    style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(199,54,46,0.6) 50%, transparent 100%)',
                        mixBlendMode: 'screen',
                        filter: 'blur(80px)'
                    }}
                />

                {/* Glowing Aura Pulse */}
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,54,46,0.2)_0%,transparent_70%)] blur-[100px] z-0"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </div>
    )
}
