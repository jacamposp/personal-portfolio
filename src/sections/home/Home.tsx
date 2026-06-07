import { useEffect, useState } from 'react'
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

const PHRASES = [
  'Full stack developer.',
  'React & Node.js enthusiast.',
  'Building scalable solutions.',
  'Turning ideas into products.',
]

function useTypewriter(phrases: string[]) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setPhraseIdx((i) => (i + 1) % phrases.length)
      return
    }

    const delay = deleting ? 38 : 72
    const t = setTimeout(() => {
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, phraseIdx, phrases])

  return text
}

const Home = () => {
  const typewriterText = useTypewriter(PHRASES)

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen px-4 pt-16 pb-16 relative text-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />
      {/* Radial fade — hides grid toward edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, var(--background) 80%)',
        }}
      />

      {/* Orb — top-left purple */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 420,
          height: 420,
          top: '-10%',
          left: '-12%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Orb — bottom-right pink */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          width: 380,
          height: 380,
          bottom: '-8%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center justify-center max-w-4xl mx-auto z-10"
      >
        {/* Available for work badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium px-3 py-1.5 rounded-full mb-5 mobile-m:mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Available for work
        </motion.div>

        {/* Avatar with spinning conic-gradient border */}
        <div className="relative mb-5 mobile-m:mb-6 w-16 h-16 mobile-m:w-20 mobile-m:h-20 tablet:w-24 tablet:h-24 laptop:w-28 laptop:h-28">
          {/* Spinning gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, #a855f7 0%, #ec4899 40%, transparent 65%, #a855f7 100%)',
            }}
          />
          {/* Background mask — creates the border illusion */}
          <div className="absolute inset-[3px] rounded-full bg-background" />
          {/* Photo */}
          <div className="absolute inset-[3px] rounded-full overflow-hidden z-10">
            <img
              src="/profilePicture.png"
              alt="Joel Campos, Full Stack Developer"
              width={112}
              height={112}
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-xl mobile-m:text-2xl tablet:text-3xl laptop:text-4xl font-bold text-foreground leading-tight">
          Hi, I'm <span className="text-gradient-accent">Joel Campos</span>.
        </h1>

        {/* Typewriter */}
        <p className="text-sm mobile-m:text-base tablet:text-lg laptop:text-xl text-muted-foreground mt-2 mobile-m:mt-3 tablet:mt-4 h-7 flex items-center justify-center gap-px">
          {typewriterText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            className="inline-block w-[2px] h-[1em] bg-purple-accent ml-0.5 align-middle"
          />
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mobile-m:gap-6 tablet:gap-8 mt-6 mobile-m:mt-8 tablet:mt-10">
          <a
            href="https://www.instagram.com/campos_j10"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons p-2 mobile-m:p-3 hover:bg-primary/15 rounded-full transition-all duration-300 text-foreground hover:text-pink-accent"
          >
            <Instagram className="w-5 h-5 mobile-m:w-6 mobile-m:h-6 tablet:w-7 tablet:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/joelcamposp/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons p-2 mobile-m:p-3 hover:bg-primary/15 rounded-full transition-all duration-300 text-foreground hover:text-purple-accent"
          >
            <Linkedin className="w-5 h-5 mobile-m:w-6 mobile-m:h-6 tablet:w-7 tablet:h-7" />
          </a>
          <a
            href="https://github.com/jacamposp"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons p-2 mobile-m:p-3 hover:bg-primary/15 rounded-full transition-all duration-300 text-foreground hover:text-accent"
          >
            <Github className="w-5 h-5 mobile-m:w-6 mobile-m:h-6 tablet:w-7 tablet:h-7" />
          </a>
        </div>

      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 mobile-m:bottom-8 tablet:bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-4 h-4 mobile-m:w-5 mobile-m:h-5 tablet:w-6 tablet:h-6 text-purple-accent" />
      </motion.div>
    </section>
  )
}

export default Home
