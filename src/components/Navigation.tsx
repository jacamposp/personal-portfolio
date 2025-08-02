import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'

const Navigation = () => {
  return (
    <NavigationMenu className="fixed top-6 border border-gray-200 rounded-lg p-2 mx-auto left-1/2 transform -translate-x-1/2 bg-[#242424] z-50">
      <NavigationMenuList className="flex flex-row justify-center items-center gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink href="#home" className="text-sm font-medium">
            <span className="text-white hover:text-gray-400 transition-colors duration-300 hover:scale-105">Home</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#about" className="text-sm font-medium">
            <span className="text-white hover:text-gray-400 transition-colors duration-300 hover:scale-105">About</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#projects" className="text-sm font-medium">
            <span className="text-white hover:text-gray-400 transition-colors duration-300 hover:scale-105">
              Projects
            </span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            variant="outline"
            size="sm"
            className="cursor-pointer text-white border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 hover:scale-105"
          >
            Download CV
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation
