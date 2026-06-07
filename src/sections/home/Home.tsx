import { useEffect, useState } from 'react'
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

const PHRASES = [
  'Full stack developer.',
  'React & Node.js enthusiast.',
  'Building scalable solutions.',
  'Turning ideas into products.',
]

const FLOATING_TAGS = ['React', 'TypeScript', 'Node.js', 'PostgreSQL']

function useTypewriter(phrases: string[]) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setPhraseIdx((i) => (i + 1) % phrases.length)
      return
    }

    const delay = deleting ? 35 : 68
    const t = setTimeout(() => {
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, phraseIdx, phrases])

  return text
}

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const Home = () => {
  const typewriterText = useTypewriter(PHRASES)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-4 mobile-m:px-6 tablet:px-8 laptop:px-12 pt-24 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(0.94 0.01 80) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.94 0.01 80) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 30% 50%, transparent 30%, var(--background) 85%)',
        }}
      />

      {/* Diagonal light beam */}
      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0, rotate: -25 }}
        animate={{ opacity: 1, rotate: -25 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{
          width: '2px',
          height: '140%',
          top: '-20%',
          left: '58%',
          background:
            'linear-gradient(to bottom, transparent, oklch(0.78 0.14 72 / 25%), oklch(0.68 0.12 195 / 15%), transparent)',
          filter: 'blur(1px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 laptop:grid-cols-12 gap-10 laptop:gap-8 items-center"
        >
          {/* Left — copy */}
          <div className="laptop:col-span-7 text-center laptop:text-left">
            <motion.p variants={fadeUp} className="section-label mb-6">
              <span>01</span> — Introduction
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 border border-gold-accent/25 bg-gold-accent/5 text-gold-accent text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-accent" />
              </span>
              Available for work
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground font-sans text-sm mobile-m:text-base tracking-wide mb-2"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl mobile-m:text-6xl tablet:text-7xl laptop:text-8xl text-foreground leading-[0.9] mb-2"
            >
              Joel
              <br />
              <span className="text-gradient-accent italic">Campos</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center laptop:justify-start gap-2 mt-6 mb-8 h-8"
            >
              <span className="font-mono text-sm mobile-m:text-base text-muted-foreground">
                {typewriterText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.85, repeat: Infinity }}
                className="inline-block w-[2px] h-[1.1em] bg-gold-accent"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center laptop:justify-start gap-5"
            >
              <a
                href="https://www.instagram.com/campos_j10"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icons p-2.5 border border-border rounded-full text-muted-foreground hover:text-teal-accent hover:border-teal-accent/40"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/joelcamposp/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icons p-2.5 border border-border rounded-full text-muted-foreground hover:text-gold-accent hover:border-gold-accent/40"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/jacamposp"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icons p-2.5 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/30"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.div
            variants={fadeUp}
            className="laptop:col-span-5 flex justify-center laptop:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 rounded-full border border-dashed border-gold-accent/15"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full border border-teal-accent/10"
              />

              {/* Portrait frame */}
              <div className="relative w-56 h-56 mobile-m:w-64 mobile-m:h-64 tablet:w-72 tablet:h-72 laptop:w-80 laptop:h-80 corner-brackets">
                <div className="absolute inset-0 rounded-lg overflow-hidden border border-border">
                  <img
                    src="/profilePicture.png"
                    alt="Joel Campos, Full Stack Developer"
                    width={320}
                    height={320}
                    fetchPriority="high"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating tech tags */}
              {FLOATING_TAGS.map((tag, i) => {
                const positions = [
                  'top-0 -left-4 -translate-x-full',
                  'top-1/4 -right-2 translate-x-full',
                  'bottom-1/4 -left-6 -translate-x-full',
                  'bottom-4 -right-4 translate-x-full',
                ]
                return (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                    className={`absolute hidden tablet:block font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 border border-border bg-card/80 backdrop-blur-sm text-muted-foreground ${positions[i]}`}
                  >
                    {tag}
                  </motion.span>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-gold-accent transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.a>
    </section>
  )
}

export default Home
