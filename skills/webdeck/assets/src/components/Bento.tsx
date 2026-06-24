import type { CSSProperties, ReactNode } from 'react'
import Reveal from './Reveal'

/* A full-viewport section laid out as an asymmetric bento grid — one hero
   tile + supporting tiles, NOT a row of equal cards. Spans via c (columns,
   of 12) and r (rows). Collapses to a single column on narrow screens. */
export type BentoTile = {
  k?: string
  fig?: ReactNode
  title?: string
  body?: string
  c?: number
  r?: number
  variant?: 'accent' | 'glow'
}

export default function Bento({ kicker, title, tiles }: { kicker?: string; title?: string; tiles: BentoTile[] }) {
  return (
    <section className="section" data-nav={title || 'Bento'}>
      <div className="container">
        <Reveal>
          {kicker && <div className="kicker" style={{ marginBottom: 10 }}>{kicker}</div>}
          {title && <h2 className="headline" style={{ marginBottom: 'clamp(20px,3vh,34px)', maxWidth: '24ch' }}>{title}</h2>}
        </Reveal>
        <Reveal className="bento" y={36}>
          {tiles.map((t, i) => (
            <div
              key={i}
              className={'btile' + (t.variant ? ` ${t.variant}` : '')}
              style={{ '--c': t.c ?? 4, '--r': t.r ?? 1 } as CSSProperties}
            >
              {t.k && <div className="btile-k">{t.k}</div>}
              <div>
                {t.fig != null && <div className={'btile-fig' + (t.variant === 'accent' ? '' : ' grad')}>{t.fig}</div>}
                {t.title && <h3>{t.title}</h3>}
                {t.body && <p>{t.body}</p>}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
