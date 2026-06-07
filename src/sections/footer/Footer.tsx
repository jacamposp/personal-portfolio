import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react'
import { ScrollReveal, ScrollRevealItem } from '@/components/ui/scroll-reveal'

const SOCIALS = [
  { href: 'https://github.com/jacamposp', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/joelcamposp/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/campos_j10', icon: Instagram, label: 'Instagram' },
]

const Footer = () => {
  return (
    <footer id="contact" className="relative px-4 mobile-m:px-6 tablet:px-8 laptop:px-12 pb-12 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="rule-gradient mb-16" />

        <ScrollReveal>
          <ScrollRevealItem>
            <p className="section-label mb-6">
              <span>04</span> — Contact
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="flex flex-col laptop:flex-row laptop:items-end laptop:justify-between gap-10 laptop:gap-16">
              <div>
                <h2 className="text-4xl mobile-m:text-5xl tablet:text-6xl laptop:text-7xl font-display text-foreground leading-[0.95] mb-4">
                  Let's build
                  <br />
                  <span className="text-gradient-accent italic">something great.</span>
                </h2>
                <p className="text-muted-foreground text-sm mobile-m:text-base max-w-md mt-4">
                  Open to freelance, full-time, and collaboration opportunities. Drop me a line — I
                  typically respond within 24 hours.
                </p>
              </div>

              <motion.a
                href="https://www.linkedin.com/in/joelcamposp/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="group inline-flex items-center gap-3 text-lg mobile-m:text-xl tablet:text-2xl font-display text-foreground hover:text-gold-accent transition-colors"
              >
                <Mail className="w-5 h-5 text-gold-accent" />
                Get in touch
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </motion.a>
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-border">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons flex items-center gap-2 text-sm text-muted-foreground hover:text-gold-accent font-mono uppercase tracking-wider"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
              <span className="ml-auto text-xs font-mono text-muted-foreground/60">
                © {new Date().getFullYear()} Joel Campos
              </span>
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </footer>
  )
}

export default Footer
