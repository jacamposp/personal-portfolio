import { motion } from 'framer-motion'
import { ScrollReveal, ScrollRevealItem } from '@/components/ui/scroll-reveal'

const STATS = [
  { value: '5+', label: 'Years of experience' },
  { value: '10+', label: 'Technologies mastered' },
  { value: '100%', label: 'Passion for code' },
]

const TECH_STACK = [
  { name: 'React', color: 'rgba(97,218,251,0.15)', border: 'rgba(97,218,251,0.35)' },
  { name: 'Next.js', color: 'rgba(255,255,255,0.08)', border: 'rgba(255,255,255,0.25)' },
  { name: 'TypeScript', color: 'rgba(49,120,198,0.15)', border: 'rgba(49,120,198,0.40)' },
  { name: 'Tailwind', color: 'rgba(56,189,248,0.15)', border: 'rgba(56,189,248,0.35)' },
  { name: 'Node.js', color: 'rgba(104,160,99,0.15)', border: 'rgba(104,160,99,0.40)' },
  { name: 'Express', color: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.20)' },
  { name: 'MySQL', color: 'rgba(0,117,143,0.15)', border: 'rgba(0,189,215,0.35)' },
  { name: 'PostgreSQL', color: 'rgba(77,179,61,0.15)', border: 'rgba(77,179,61,0.35)' },
  { name: 'Prisma', color: 'rgba(77,179,61,0.15)', border: 'rgba(77,179,61,0.35)' },
  { name: 'n8n', color: 'rgba(234,76,137,0.15)', border: 'rgba(234,76,137,0.35)' },
]

function GlowCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative rounded-xl bg-card border border-border overflow-hidden group ${className}`}
      whileHover="hover"
    >
      {/* Bright top-line on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
        style={{
          background: 'linear-gradient(90deg, #a855f7, #ec4899)',
        }}
        variants={{
          hover: { scaleX: 1, opacity: 1 },
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
      {/* Subtle glow behind top line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(168,85,247,0.07), transparent)',
        }}
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  )
}

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen pt-20 mobile-m:pt-24 tablet:pt-28 laptop:pt-32 pb-16 w-full justify-center px-4 mobile-m:px-6 tablet:px-8 laptop:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          {/* Heading */}
          <ScrollRevealItem>
            <h2 className="text-4xl mobile-m:text-3xl tablet:text-4xl laptop:text-5xl font-bold text-foreground text-center mobile-m:text-left mb-2 mobile-m:mb-3">
              About<span className="text-gradient-accent">.</span>
            </h2>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="text-sm mobile-m:text-base tablet:text-lg laptop:text-xl text-muted-foreground mb-8 mobile-m:mb-10 tablet:mb-12 text-center mobile-m:text-left">
              Passionate about creating digital solutions that make a difference.
            </p>
          </ScrollRevealItem>

          {/* Stats row */}
          <ScrollRevealItem>
            <div className="grid grid-cols-3 gap-3 mobile-m:gap-4 tablet:gap-6 mb-8 mobile-m:mb-10 tablet:mb-12">
              {STATS.map((s) => (
                <GlowCard key={s.label} className="p-4 mobile-m:p-5 tablet:p-7 text-center">
                  <p
                    className="text-3xl mobile-m:text-4xl tablet:text-5xl laptop:text-6xl font-bold leading-none mb-1 mobile-m:mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[10px] mobile-m:text-xs tablet:text-sm text-muted-foreground leading-snug">
                    {s.label}
                  </p>
                </GlowCard>
              ))}
            </div>
          </ScrollRevealItem>

          <div className="flex flex-col gap-6 mobile-m:gap-8 tablet:gap-10">
            {/* Journey card */}
            <ScrollRevealItem>
              <GlowCard className="p-4 mobile-m:p-6 tablet:p-8">
                <h3 className="text-lg mobile-m:text-xl tablet:text-2xl laptop:text-3xl font-bold text-left mb-3 mobile-m:mb-4">
                  My Journey<span className="text-purple-accent">.</span>
                </h3>
                <div className="text-sm mobile-m:text-base tablet:text-lg laptop:text-xl text-muted-foreground text-left leading-relaxed space-y-3 mobile-m:space-y-4">
                  <p>
                    Hey! I'm a Full‑Stack Developer with 5 years of experience turning ideas into scalable, high-impact
                    software. From sleek frontends to robust backend APIs, I build solutions that save time and deliver
                    real value—often enhanced with smart automation.
                  </p>
                  <p>
                    I've led and contributed to both client projects and personal builds, like{' '}
                    <strong className="text-foreground">SportBook</strong> (a sports field booking platform in
                    development), a <strong className="text-foreground">TechNews Scraper</strong> for automatic content
                    aggregation, and accounting integrations powered by{' '}
                    <strong className="text-foreground">QuickBooks</strong>.
                  </p>
                  <p>
                    Outside of coding, I'm always exploring new projects to sharpen my skills and stay aligned with
                    industry demands. I learn by building—constantly growing and creating solutions that matter.
                  </p>
                </div>
              </GlowCard>
            </ScrollRevealItem>

            {/* Tech Stack card */}
            <ScrollRevealItem>
              <GlowCard className="p-4 mobile-m:p-6 tablet:p-8">
                <h3 className="text-lg mobile-m:text-xl tablet:text-2xl laptop:text-3xl font-bold text-left mb-4 mobile-m:mb-6">
                  Tech Stack<span className="text-pink-accent">.</span>
                </h3>
                <div className="flex flex-wrap gap-2 mobile-m:gap-3">
                  {TECH_STACK.map((tech) => (
                    <motion.span
                      key={tech.name}
                      whileHover={{ y: -4, scale: 1.06 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 18 }}
                      className="font-mono text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-1.5 rounded-md text-foreground select-none"
                      style={{
                        backgroundColor: tech.color,
                        border: `1px solid ${tech.border}`,
                      }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </GlowCard>
            </ScrollRevealItem>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About
