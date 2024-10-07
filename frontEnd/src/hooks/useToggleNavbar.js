import { useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query'

export const useToggleNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const isMobile = useMediaQuery('(max-width: 768px)')

  const openNavbar = () => {
    if (isMobile) {
      setNavbarOpen(!navbarOpen)
    } else {
      setNavbarOpen(navbarOpen)
    }
  }

  return { navbarOpen, openNavbar }
}
