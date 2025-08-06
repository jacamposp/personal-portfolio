import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'

const NavigationDesktop = () => {
  return (
    <NavigationMenu className="fixed top-4 mobile-m:top-6 border border-gray-200 rounded-lg p-1.5 mobile-m:p-2 mx-auto left-1/2 transform -translate-x-1/2 bg-[#242424] z-50 max-w-[95vw] mobile-m:max-w-none">
      <NavigationMenuList className="flex flex-row justify-center items-center gap-1.5 mobile-m:gap-2 tablet:gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink href="#">
            <span className="text-white hover:text-gray-400 transition-colors duration-300 hover:scale-105">Home</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#about">
            <span className="text-white hover:text-gray-400 transition-colors duration-300 hover:scale-105">About</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#projects">
            <span className="text-white hover:text-gray-400 transition-colors duration-300 hover:scale-105">
              Projects
            </span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/Joel Campos CV.pdf" target="_blank" rel="noopener noreferrer" download="Joel Campos CV.pdf">
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer text-white border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 hover:scale-105"
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
