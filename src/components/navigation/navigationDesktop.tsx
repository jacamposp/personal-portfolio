import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'

// Quita el fondo rosa del NavigationMenuLink (focus/hover/active → bg-accent)
const navLinkWrapperClass =
  'bg-transparent hover:bg-gray-600 focus:bg-gray-800 data-[active=true]:bg-gray-800 data-[active=true]:hover:bg-gray-800 data-[active=true]:focus:bg-gray-800'

const navLinkClass =
  'text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105'

const NavigationDesktop = () => {
  return (
    <NavigationMenu className="fixed top-4 mobile-m:top-6 border border-border rounded-lg p-1.5 mobile-m:p-2 mx-auto left-1/2 transform -translate-x-1/2 bg-surface-elevated/90 backdrop-blur-md z-50 max-w-[95vw] mobile-m:max-w-none shadow-lg shadow-primary/5">
      <NavigationMenuList className="flex flex-row justify-center items-center gap-1.5 mobile-m:gap-2 tablet:gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navLinkWrapperClass}>
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
          <a
            href="/Joel Campos - Full-Stack Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Joel Campos CV.pdf"
          >
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer text-foreground border-primary/50 bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300 hover:scale-105"
            >
              Download CV
            </Button>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationDesktop
