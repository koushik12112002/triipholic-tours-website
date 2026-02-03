import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useTransform, useInView } from 'framer-motion'

export default function StatsCounter({ value, label, suffix = '' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    const [displayValue, setDisplayValue] = useState(0)

    const spring = useSpring(0, {
        duration: 3000,
        bounce: 0,
    })

    const rounded = useTransform(spring, (latest) => Math.round(latest))

    useEffect(() => {
        if (isInView) {
            spring.set(value)
        }
    }, [isInView, value, spring])

    useEffect(() => {
        return rounded.onChange((latest) => {
            setDisplayValue(latest)
        })
    }, [rounded])

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-bold tracking-tight text-wine-light">
                {displayValue}{suffix}
            </div>
            <div className="mt-2 text-xs font-semibold tracking-[0.2em] text-wine-muted uppercase">
                {label}
            </div>
        </div>
    )
}
