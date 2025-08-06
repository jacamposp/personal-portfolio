import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const NavigationMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navigationItems = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
  ]

  return (
    <>
      <div className="fixed top-4 left-4 z-50 tablet:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMenu}
          className="bg-[#242424] border-gray-200 text-white hover:bg-gray-800 transition-all duration-300"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 tablet:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeMenu} />

          <div className="absolute top-0 left-0 w-full bg-[#242424] border-b border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="px-6 py-8">
              <nav className="space-y-6">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-4">
                  <a
                    href="/Joel Campos CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Joel Campos CV.pdf"
                    onClick={closeMenu}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-white border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 text-base py-3"
                    >
                      Download CV
                    </Button>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NavigationMobile
