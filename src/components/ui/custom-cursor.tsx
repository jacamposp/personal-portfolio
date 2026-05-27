import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  // Synchronous check — no async state, no timing issues
  const isPointer = useRef(window.matchMedia('(pointer: fine)').matches)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const opacity = useMotionValue(0)

  // Dot — snappy
  const dotX = useSpring(mouseX, { stiffness: 600, damping: 35 })
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 35 })

  // Halo — lags behind
  const haloX = useSpring(mouseX, { stiffness: 100, damping: 18 })
  const haloY = useSpring(mouseY, { stiffness: 100, damping: 18 })

  useEffect(() => {
    if (!isPointer.current) return

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      opacity.set(1)
    }

    const hide = () => opacity.set(0)
    const show = () => opacity.set(1)

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseleave', hide)
    window.addEventListener('mouseenter', show)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', hide)
      window.removeEventListener('mouseenter', show)
    }
  }, [mouseX, mouseY, opacity])

  if (!isPointer.current) return null

  return (
    <>
      {/* Halo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-purple-accent/50"
        style={{
          x: haloX,
          y: haloY,
          opacity,
          translateX: '-50%',
          translateY: '-50%',
          width: 38,
          height: 38,
          boxShadow: '0 0 14px rgba(168, 85, 247, 0.25)',
        }}
      />
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          opacity,
          translateX: '-50%',
          translateY: '-50%',
          width: 7,
          height: 7,
          background: 'linear-gradient(135deg, #a855f7, #ec4899)',
        }}
      />
    </>
  )
}
