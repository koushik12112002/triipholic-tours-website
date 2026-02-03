import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/motion.js'

export default function PricingCard({ priceOriginal, priceFrom, whatsappNumber = '919876543210' }) {
    const savings = priceOriginal - priceFrom
    const savingsPercent = Math.round((savings / priceOriginal) * 100)

    const whatsappMessage = encodeURIComponent(
        `Hi! I'm interested in booking this tour package. Can you provide more details?`
    )
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    return (
        <motion.div
            variants={fadeUp}
            className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-wine-accent/10 to-transparent p-6 shadow-soft"
        >
            <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-wine-muted">STARTING FROM</p>
                <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-wine-light">₹{priceFrom.toLocaleString()}</span>
                    <span className="text-sm text-wine-muted line-through">₹{priceOriginal.toLocaleString()}</span>
                </div>
                <p className="mt-1 text-xs text-wine-accent">
                    Save ₹{savings.toLocaleString()} ({savingsPercent}% off)
                </p>
                <p className="mt-1 text-xs text-wine-muted">Per Person</p>
            </div>

            <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-green-700 hover:shadow-xl"
            >
                📱 Book on WhatsApp
            </motion.a>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-wine-muted">
                <p className="font-semibold text-wine-light">Quick Booking</p>
                <p className="mt-1">Click above to connect with us instantly on WhatsApp for booking and queries.</p>
            </div>
        </motion.div>
    )
}
