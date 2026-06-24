import { useEffect, useRef, useState, type ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'

/* The scroll container + navigation chrome. Wrap your sections in <Deck>.
   - full-viewport scroll-snap between sections
   - keyboard nav (↑/↓/←/→, space, PageUp/Down) advances section-to-section
   - a side dot-nav + a top progress bar track position
   This is the scroll-site equivalent of the Slidev dock. Copy verbatim. */
export default function Deck({ children }: { children: ReactNode }) {
  const deckRef = useRef<HTMLDivElement>(null)
  const [sections, setSections] = useState<HTMLElement[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const root = deckRef.current
    if (!root) return
    const els = Array.from(root.querySelectorAll<HTMLElement>(':scope > .section'))
    setSections(els)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(els.indexOf(e.target as HTMLElement)) }),
      { root, threshold: 0.5 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const fwd = ['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)
      const back = ['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)
      if (!fwd && !back) return
      e.preventDefault()
      const target = Math.min(sections.length - 1, Math.max(0, active + (fwd ? 1 : -1)))
      sections[target]?.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [sections, active])

  const pct = sections.length ? ((active + 1) / sections.length) * 100 : 0

  return (
    <MotionConfig reducedMotion="user">
      <div className="deck" ref={deckRef}>
        {children}
        <div className="deck-progress"><span style={{ width: `${pct}%` }} /></div>
        <nav className="deck-dots" aria-label="Sections">
          {sections.map((el, i) => (
            <button
              key={i}
              className={'deck-dot' + (i === active ? ' active' : '')}
              title={el.dataset.nav || `Section ${i + 1}`}
              aria-label={el.dataset.nav || `Go to section ${i + 1}`}
              onClick={() => sections[i].scrollIntoView({ behavior: 'smooth' })}
            />
          ))}
        </nav>
      </div>
    </MotionConfig>
  )
}
