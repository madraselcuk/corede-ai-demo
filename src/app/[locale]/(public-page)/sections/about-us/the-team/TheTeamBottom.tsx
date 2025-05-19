/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Window nesnesini genişletmek için interface ekle
declare global {
  interface Window {
    slidePrevTeam: () => void
    slideNextTeam: () => void
  }
}

// Ekip üyeleri verisi
const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Backend Developer',
    image: '/img/others/about-us/the-team-1.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'UX Designer',
    image: '/img/others/about-us/the-team-2.png',
  },
  {
    id: 3,
    name: 'Michael Brown',
    position: 'Project Manager',
    image: '/img/others/about-us/the-team-3.png',
  },
  {
    id: 4,
    name: 'Emily Johnson',
    position: 'Frontend Developer',
    image: '/img/others/about-us/the-team-4.png',
  },
  {
    id: 5,
    name: 'David Wilson',
    position: 'Software Engineer',
    image: '/img/others/about-us/the-team-2.png',
  },
  {
    id: 6,
    name: 'Sarah Lee',
    position: 'Backend Developer',
    image: '/img/others/about-us/the-team-1.png',
  },
  {
    id: 7,
    name: 'Alex Chen',
    position: 'Data Scientist',
    image: '/img/others/about-us/the-team-4.png',
  },
  {
    id: 8,
    name: 'Jessica Taylor',
    position: 'Product Manager',
    image: '/img/others/about-us/the-team-3.png',
  },
]

const TheTeamBottom = () => {
  // const [ref, inView] = useInView({
  const [ref] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedMembers, setDisplayedMembers] = useState<typeof teamMembers>(
    [],
  )
  const [isMobile, setIsMobile] = useState(false)
  const [direction, setDirection] = useState(0) // 1: sağdan sola, -1: soldan sağa, 0: başlangıç

  // Ekran boyutu kontrolü
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileView = window.innerWidth < 768 // md breakpoint
      setIsMobile(isMobileView)

      // İlk yüklemede veya boyut değiştiğinde görünen üyeleri ayarla
      const visibleCount = isMobileView ? 2 : 4
      setDisplayedMembers(teamMembers.slice(0, visibleCount))
    }

    // İlk yükleme kontrolü
    checkIsMobile()

    // Ekran boyutu değiştiğinde kontrol et
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  // Ok butonları için yönlendirme işlevleri
  const slidePrev = () => {
    setDirection(-1)
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      // Son elemana dön (döngüsel slider)
      const maxIndex = teamMembers.length - (isMobile ? 2 : 4)
      setCurrentIndex(maxIndex > 0 ? maxIndex : 0)
    }
  }

  const slideNext = () => {
    setDirection(1)
    const maxIndex = teamMembers.length - (isMobile ? 2 : 4)
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // İlk elemana dön (döngüsel slider)
      setCurrentIndex(0)
    }
  }

  // currentIndex veya isMobile değiştiğinde gösterilen üyeleri güncelle
  useEffect(() => {
    const visibleCount = isMobile ? 2 : 4
    const endIndex = Math.min(currentIndex + visibleCount, teamMembers.length)

    if (endIndex === teamMembers.length && currentIndex > 0) {
      // Eğer son elemana ulaşıldıysa, kalan boşluklara baştan elemanlar ekle
      setDisplayedMembers([
        ...teamMembers.slice(currentIndex),
        ...teamMembers.slice(
          0,
          visibleCount - (teamMembers.length - currentIndex),
        ),
      ])
    } else {
      setDisplayedMembers(teamMembers.slice(currentIndex, endIndex))
    }
  }, [currentIndex, isMobile])

  // Ok tuşlarını global olarak erişilebilir yap
  useEffect(() => {
    // Window objesine referansları ekle
    window.slidePrevTeam = slidePrev
    window.slideNextTeam = slideNext

    // Temizleme fonksiyonu
    return () => {
      window.slidePrevTeam = () => {}
      window.slideNextTeam = () => {}
    }
  }, [currentIndex])

  return (
    <div className="w-full overflow-hidden" ref={ref}>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 justify-between gap-4 md:gap-8 w-full dark:text-white text-gray-900"
        initial={{ opacity: 1, x: direction * 10 }}
        animate={{ opacity: [0.9, 1], x: 0 }}
        key={currentIndex}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {displayedMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col gap-4 md:gap-8 rounded-2xl w-full h-96
            from-blue-500 to-blue-600 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${member.image})` }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black/50 to-black/0 rounded-2xl">
              <div className="flex flex-col gap-1 h-full items-center justify-end p-4">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <div className="w-full h-[1px] bg-white/50"></div>
                <p className="text-xl font-medium text-white">
                  {member.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default TheTeamBottom
