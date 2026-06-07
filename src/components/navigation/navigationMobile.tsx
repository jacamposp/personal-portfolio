import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navigationItems = [
  { href: '#home', label: 'Home', num: '01' },
  { href: '#about', label: 'About', num: '02' },
  { href: '#projects', label: 'Projects', num: '03' },
  { href: '#contact', label: 'Contact', num: '04' },
]

const NavigationMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <div className="fixed top-4 right-4 z-50 tablet:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-surface-elevated/90 backdrop-blur-xl border-border text-foreground hover:border-gold-accent/40 rounded-full w-10 h-10 p-0"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 tablet:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
              onClick={closeMenu}
            />

            <motion.div
              className="absolute inset-x-0 top-0 bg-card border-b border-border"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-[1px] glow-line" />
              <nav className="px-8 py-10 space-y-1">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-center gap-4 py-4 border-b border-border/50 group"
                  >
                    <span className="font-mono text-xs text-gold-accent">{item.num}</span>
                    <span className="font-display text-2xl text-foreground group-hover:text-gold-accent transition-colors">
                      {item.label}
                    </span>
                  </motion.a>
                ))}

                <div className="pt-6">
                  <a
                    href="/Joel Campos - Full-Stack Developer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Joel Campos CV.pdf"
                    onClick={closeMenu}
                  >
                    <Button
                      variant="outline"
                      className="w-full font-mono text-xs uppercase tracking-widest text-foreground border-gold-accent/40 hover:bg-gold-accent hover:text-primary-foreground rounded-full py-6"
                    >
                      Download CV
                    </Button>
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavigationMobile
