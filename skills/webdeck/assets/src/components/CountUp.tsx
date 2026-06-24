import { useEffect, useRef, useState } from 'react'

/* A number that animates from `from` to `to` when it scrolls into view.
   Inherits color, so inside a .figure / .stat-value it picks up the accent
   gradient. <CountUp to={230} suffix="%" /> */
export default function CountUp({
  to, from = 0, duration = 1500, decimals = 0, prefix = '', suffix = '',
}: {
  to: number
  from?: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(from)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const run = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVal(to); return }
      const t0 = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setVal(from + (to - from) * eased)
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting && !started.current) { started.current = true; run() } }),
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to, from, duration])

  const text = prefix + val.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix
  return <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>{text}</span>
}
