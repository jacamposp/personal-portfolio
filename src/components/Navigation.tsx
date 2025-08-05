import { useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu className="fixed top-4 mobile-m:top-6 border border-gray-200 rounded-lg p-1.5 mobile-m:p-2 mx-auto left-1/2 transform -translate-x-1/2 bg-[#242424] z-50 max-w-[95vw] mobile-m:max-w-none hidden tablet:block">
        <NavigationMenuList className="flex flex-row justify-center items-center gap-1.5 mobile-m:gap-2 tablet:gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="text-xs mobile-m:text-sm font-medium">
              <span className="text-white hover:text-gray-400 transition-colors duration-300 hover:scale-105">
                Home
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#about" className="text-xs mobile-m:text-sm font-medium">
              <span className="text-white hover:text-gray-400 transition-colors duration-300 hover:scale-105">
                About
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#projects" className="text-xs mobile-m:text-sm font-medium">
              <span className="text-white hover:text-gray-400 transition-colors duration-300 hover:scale-105">
                Projects
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer text-white border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 hover:scale-105 text-xs mobile-m:text-sm px-1.5 mobile-m:px-2 tablet:px-3"
            >
              Download CV
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <div className="tablet:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMobileMenu}
          className="bg-[#242424] border-gray-200 text-white hover:bg-gray-800"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="tablet:hidden fixed inset-0 bg-black/50 z-40" onClick={closeMobileMenu}>
          <div
            className="absolute top-16 left-4 bg-[#242424] border border-gray-200 rounded-lg p-4 min-w-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3">
              <a
                href="#home"
                className="text-white hover:text-gray-400 transition-colors duration-300 text-sm font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-gray-400 transition-colors duration-300 text-sm font-medium"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white hover:text-gray-400 transition-colors duration-300 text-sm font-medium"
                onClick={closeMobileMenu}
              >
                Projects
              </a>
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer text-white border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 text-sm"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
