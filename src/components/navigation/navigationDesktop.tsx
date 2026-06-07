import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'

const navLinkWrapperClass =
  'bg-transparent hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent'

const navLinkClass =
  'relative font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold-accent after:transition-all after:duration-300 hover:after:w-full'

const NavigationDesktop = () => {
  return (
    <NavigationMenu
      aria-label="Primary"
      className="fixed top-5 mobile-m:top-6 border border-border/80 rounded-full px-2 py-1.5 mx-auto left-1/2 -translate-x-1/2 bg-surface-elevated/80 backdrop-blur-xl z-50 max-w-[95vw] shadow-lg"
      style={{ boxShadow: '0 8px 32px oklch(0.78 0.14 72 / 6%)' }}
    >
      <NavigationMenuList className="flex flex-row justify-center items-center gap-1 tablet:gap-2">
        <NavigationMenuItem>
          <NavigationMenuLink href="#home" className={navLinkWrapperClass}>
            <span className={navLinkClass}>Home</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#about" className={navLinkWrapperClass}>
            <span className={navLinkClass}>About</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#projects" className={navLinkWrapperClass}>
            <span className={navLinkClass}>Projects</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#contact" className={navLinkWrapperClass}>
            <span className={navLinkClass}>Contact</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            href="/Joel Campos - Full-Stack Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Joel Campos CV.pdf"
          >
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer font-mono text-xs uppercase tracking-wider text-foreground border-gold-accent/40 bg-transparent hover:bg-gold-accent hover:text-primary-foreground hover:border-gold-accent transition-all duration-300 rounded-full ml-1"
            >
              CV
            </Button>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationDesktop
