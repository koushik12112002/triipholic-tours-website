import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Clock, Users, Star, StarHalf, UserPlus } from 'lucide-react'
import { fadeUp } from '../../animations/motion.js'

export default function PackageCard({ pkg }) {
  // Determine pricing display
  const hasPrice = pkg.priceFrom > 0
  const displayPrice = hasPrice ? `₹${pkg.priceFrom.toLocaleString('en-IN')}` : 'Price on Request'
  const displayOriginalPrice = pkg.priceOriginal > 0 ? `₹${pkg.priceOriginal.toLocaleString('en-IN')}` : null

  // Stable random rating based on package slug/title
  const getRating = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const val = Math.abs(hash) % 3; // 0, 1, 2
    if (val === 0) return 4;
    if (val === 1) return 4.5;
    return 5;
  };
  const rating = getRating(pkg.slug || pkg.title || 'pkg');

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      variants={fadeUp}
      className="group relative flex flex-col bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl border border-white/20 overflow-hidden transition-shadow duration-300 transform-gpu will-change-transform"
      style={{ backfaceVisibility: 'hidden' }}
    >
      {/* Image Section (Top Half) */}
      <div className="relative h-[160px] w-full overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content Section (Bottom Half) */}
      <div className="flex flex-col flex-grow p-4 space-y-1.5">

        {/* Top Meta Row (Duration & Group) */}
        <div className="flex items-center justify-between text-[11px] text-white/80 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-wine-accent" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-wine-accent" />
            <span>Group</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white leading-tight line-clamp-2">
          {pkg.title}
        </h3>

        {/* Subtitle / Urgency */}
        <p className="text-[11px] text-white/60">
          Limited slots • Book now for this week
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => {
            if (star <= Math.floor(rating)) {
              return <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
              return <StarHalf key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            } else {
              return <Star key={star} className="w-3.5 h-3.5 text-amber-400/30" />
            }
          })}
          <span className="text-[10px] font-bold text-amber-400/80 ml-1">{rating}</span>
        </div>

        {/* Pricing Section */}
        <div className="pt-2 mt-auto">
          <p className="text-sm font-bold text-white/80">From</p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-white">
              {displayPrice}
            </span>
            {displayOriginalPrice && (
              <span className="text-sm font-medium text-white/50 line-through decoration-1">
                {displayOriginalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Call to Action Button */}
        <NavLink
          to={`/packages/${pkg.slug}`}
          className="mt-4 w-full bg-white/10 border border-wine-accent/50 hover:bg-gradient-to-r hover:from-wine-primary hover:to-wine-accent hover:border-transparent text-white transition-all duration-300 rounded-xl py-3 flex items-center justify-center gap-2 font-bold text-sm hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
        >
          <UserPlus className="w-4 h-4" />
          Tour Details
        </NavLink>

      </div>
    </motion.article>
  )
}
