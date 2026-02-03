import { cn } from '../../utils/cn.js'

export default function SectionHeading({ eyebrow, title, subtitle, className }) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.22em] text-wine-muted/90">{eyebrow.toUpperCase()}</p>
      ) : null}
      <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm leading-6 text-wine-muted sm:text-[0.95rem]">{subtitle}</p> : null}
    </div>
  )
}

