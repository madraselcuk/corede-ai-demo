'use client'

import { useEffect } from 'react'

const ScrollToSection = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const id = hash.replace('#', '')
          const element = document.getElementById(id)
          if (element) {
            const navbarHeight = 80
            
            const elementPosition = element.getBoundingClientRect().top
            
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }

    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return null
}

export default ScrollToSection 