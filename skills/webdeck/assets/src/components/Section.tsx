import type { CSSProperties, ReactNode } from 'react'

/* One full-viewport section. Content REFLOWS (no fixed canvas, never clips).
   - center: centered + text-align center (hero, statement, quote, CTA)
   - full:   no padding, edge-to-edge (for split / full-bleed media)
   - nav:    label shown on the side dot-nav
   Non-full sections wrap content in a max-width .container. */
export default function Section({
  children, center, full, nav, className = '', style,
}: {
  children: ReactNode
  center?: boolean
  full?: boolean
  nav?: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <section
      className={`section${center ? ' center' : ''}${full ? ' full' : ''}${className ? ' ' + className : ''}`}
      data-nav={nav}
      style={style}
    >
      {full ? children : <div className="container">{children}</div>}
    </section>
  )
}
