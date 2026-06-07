import { motion } from 'framer-motion'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
}

export function GlowCard({ children, className = '' }: GlowCardProps) {
  return (
    <motion.div
      className={`relative rounded-lg bg-card border border-border overflow-hidden group corner-brackets ${className}`}
      whileHover="hover"
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] glow-line"
        variants={{ hover: { scaleX: 1, opacity: 1 } }}
        initial={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, oklch(0.78 0.14 72 / 6%), transparent)',
        }}
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      />
      {children}
    </motion.div>
  )
}
