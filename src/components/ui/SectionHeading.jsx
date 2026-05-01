import { cn } from '../../utils/cn.js'

export default function SectionHeading({ eyebrow, title, subtitle, className }) {
  return (
    <div className={cn('max-w-3xl group', className)}>
      {eyebrow ? (
        <p className="text-sm font-bold tracking-[0.4em] text-amber-500/90 uppercase mb-4 drop-shadow-sm">{eyebrow}</p>
      ) : null}
      <h2 className="relative inline-block text-balance font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
        <span className="absolute -bottom-2 left-0 h-[3px] w-12 bg-gradient-to-r from-wine-accent to-transparent rounded-full opacity-60 group-hover:w-full transition-all duration-700 ease-out" />
      </h2>
      {subtitle ? (
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-wine-muted/80 italic font-light sm:text-xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

