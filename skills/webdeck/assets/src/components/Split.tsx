import type { ReactNode } from 'react'
import Reveal from './Reveal'

/* A full-bleed feature section: text on one side, edge-to-edge media on the
   other. `flip` swaps sides. Stacks vertically on narrow screens.
   media can be an <img>, a color panel, or a <TiltCard><VisualX/></TiltCard>. */
export default function Split({
  kicker, title, body, media, flip, nav,
}: {
  kicker?: string
  title: ReactNode
  body?: ReactNode
  media: ReactNode
  flip?: boolean
  nav?: string
}) {
  return (
    <section className="section full" data-nav={nav || 'Split'}>
      <div className={'split' + (flip ? ' flip' : '')}>
        <div className="split-body">
          <Reveal>
            {kicker && <div className="kicker" style={{ marginBottom: 14 }}>{kicker}</div>}
            <h2 className="headline" style={{ fontSize: 'clamp(32px,4.6vw,54px)' }}>{title}</h2>
            {body && <div className="lead" style={{ marginTop: 16 }}>{body}</div>}
          </Reveal>
        </div>
        <div className="split-media">{media}</div>
      </div>
    </section>
  )
}
