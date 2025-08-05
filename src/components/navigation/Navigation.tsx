import { useState, useEffect } from 'react'
import { useIsMobile } from '@/hooks/isMobile'
import NavigationDesktop from './navigationDesktop'
import NavigationMobile from './navigationMobile'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const isMobile = useIsMobile()
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    setShowMobileMenu(isMobile)
  }, [isMobile])

  return (
    <>
      {!showMobileMenu && <NavigationDesktop />}
      {showMobileMenu && <NavigationMobile />}

      {/* Mobile Navigation */}
      {/* <div className="tablet:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMobileMenu}
          className="bg-[#242424] border-gray-200 text-white hover:bg-gray-800"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div> */}

      {/* Mobile Menu Overlay */}
    </>
  )
}

export default Navigation
