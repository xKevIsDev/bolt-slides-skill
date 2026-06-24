import { motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'

/* Scroll-triggered entrance. Content rises + fades in the first time it
   enters the viewport. The scroll-site's core motion primitive — wrap any
   block (a headline, a grid, a card) to make the deck feel alive on scroll.
   Honors reduced-motion via the <MotionConfig> in Deck. */
export default function Reveal({
  children, y = 28, delay = 0, className, style,
}: {
  children: ReactNode
  y?: number
  delay?: number
  className?: string
  style?: CSSProperties
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
