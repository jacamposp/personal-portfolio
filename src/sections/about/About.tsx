import { motion } from 'framer-motion'
import { ScrollReveal, ScrollRevealItem } from '@/components/ui/scroll-reveal'
import { GlowCard } from '@/components/ui/glow-card'

const STATS = [
  { value: '5+', label: 'Years of experience' },
  { value: '10+', label: 'Technologies mastered' },
  { value: '100%', label: 'Passion for code' },
]

const TECH_STACK = [
  { name: 'React', color: 'rgba(97,218,251,0.12)', border: 'rgba(97,218,251,0.30)' },
  { name: 'Next.js', color: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.20)' },
  { name: 'TypeScript', color: 'rgba(49,120,198,0.12)', border: 'rgba(49,120,198,0.35)' },
  { name: 'Tailwind', color: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.30)' },
  { name: 'Node.js', color: 'rgba(104,160,99,0.12)', border: 'rgba(104,160,99,0.35)' },
  { name: 'Express', color: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.18)' },
  { name: 'MySQL', color: 'rgba(0,117,143,0.12)', border: 'rgba(0,189,215,0.30)' },
  { name: 'PostgreSQL', color: 'rgba(77,179,61,0.12)', border: 'rgba(77,179,61,0.30)' },
  { name: 'Prisma', color: 'rgba(77,179,61,0.12)', border: 'rgba(77,179,61,0.30)' },
  { name: 'n8n', color: 'rgba(234,76,137,0.12)', border: 'rgba(234,76,137,0.30)' },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-28 mobile-m:pt-32 tablet:pt-36 pb-20 px-4 mobile-m:px-6 tablet:px-8 laptop:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <ScrollRevealItem>
            <p className="section-label mb-4 text-center laptop:text-left">
              <span>02</span> — About
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <h2 className="font-display text-4xl mobile-m:text-5xl tablet:text-6xl text-foreground text-center laptop:text-left mb-3">
              Crafting digital
              <br className="hidden mobile-m:block" />
              <span className="text-gradient-accent italic"> experiences.</span>
            </h2>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <p className="text-sm mobile-m:text-base text-muted-foreground mb-12 max-w-xl text-center laptop:text-left mx-auto laptop:mx-0">
              Passionate about creating digital solutions that make a real difference.
            </p>
          </ScrollRevealItem>

          {/* Stats strip */}
          <ScrollRevealItem>
            <div className="grid grid-cols-3 gap-3 mobile-m:gap-4 mb-6">
              {STATS.map((s, i) => (
                <GlowCard key={s.label} className="p-4 mobile-m:p-6 text-center">
                  <p className="font-mono text-[10px] text-muted-foreground/60 mb-2">
                    0{i + 1}
                  </p>
                  <p className="text-3xl mobile-m:text-4xl tablet:text-5xl font-display text-gradient-gold leading-none mb-2">
                    {s.value}
                  </p>
                  <p className="text-[10px] mobile-m:text-xs text-muted-foreground leading-snug">
                    {s.label}
                  </p>
                </GlowCard>
              ))}
            </div>
          </ScrollRevealItem>

          {/* Bento grid */}
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4 mobile-m:gap-6">
            <ScrollRevealItem>
              <GlowCard className="p-6 mobile-m:p-8 laptop:row-span-1 h-full">
                <h3 className="font-display text-2xl mobile-m:text-3xl text-foreground mb-5">
                  My Journey<span className="text-gold-accent">.</span>
                </h3>
                <div className="text-sm mobile-m:text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Hey! I'm a Full‑Stack Developer with 5 years of experience turning ideas into
                    scalable, high-impact software. From sleek frontends to robust backend APIs, I
                    build solutions that save time and deliver real value—often enhanced with smart
                    automation.
                  </p>
                  <p>
                    I've led and contributed to both client projects and personal builds, like{' '}
                    <strong className="text-foreground font-medium">SportBook</strong> (a sports
                    field booking platform in development), a{' '}
                    <strong className="text-foreground font-medium">TechNews Scraper</strong> for
                    automatic content aggregation, and accounting integrations powered by{' '}
                    <strong className="text-foreground font-medium">QuickBooks</strong>.
                  </p>
                  <p>
                    Outside of coding, I'm always exploring new projects to sharpen my skills and
                    stay aligned with industry demands. I learn by building—constantly growing and
                    creating solutions that matter.
                  </p>
                </div>
              </GlowCard>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <GlowCard className="p-6 mobile-m:p-8 h-full">
                <h3 className="font-display text-2xl mobile-m:text-3xl text-foreground mb-6">
                  Tech Stack<span className="text-teal-accent">.</span>
                </h3>
                <div className="flex flex-wrap gap-2 mobile-m:gap-2.5">
                  {TECH_STACK.map((tech) => (
                    <motion.span
                      key={tech.name}
                      whileHover={{ y: -3, scale: 1.04 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      className="font-mono text-xs mobile-m:text-sm px-3 py-1.5 rounded text-foreground select-none"
                      style={{
                        backgroundColor: tech.color,
                        border: `1px solid ${tech.border}`,
                      }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
                    Currently exploring
                  </p>
                  <p className="text-sm text-muted-foreground">
                    AI-powered automation, edge computing, and design systems at scale.
                  </p>
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
