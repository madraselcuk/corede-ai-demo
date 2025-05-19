'use client'
import { useState, useRef, useEffect } from 'react'
import NavList from './NavList'
import Drawer from '@/components/ui/Drawer'
import classNames from '@/utils/classNames'
import useScrollTop from '@/utils/hooks/useScrollTop'
import Image from 'next/image'
import { TbMenu2 } from 'react-icons/tb'
import Link from 'next/link'
import useTheme from '@/utils/hooks/useTheme'
import { IconType } from 'react-icons'
import ThemeButton from '../button/ThemeButton'
import GradientBorderButton from '../button/GradientBorderButton'
import { useTranslations, useLocale } from 'next-intl'
import { Mail, Phone, MapPin } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'

const animationStyles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`

type MegaMenuItem = {
  title: string
  icon: IconType
  href: string
  list?: { description: string }[]
}

type MegaMenu = {
  title: string
  items: MegaMenuItem[]
}

type NavigationProps = {
  navMenu: {
    title: string
    value: string
    to?: string
    href?: string
    megaMenu?: MegaMenu
  }[]
}

const Navigation = ({ navMenu }: NavigationProps) => {
  const mode = useTheme((state) => state.mode)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const t = useTranslations('navigation')
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()
  const [hasSession, setHasSession] = useState(false)
  const locale = useLocale()

  const { isSticky } = useScrollTop()

  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = () => {
    setIsOpen(true)
  }

  const onDrawerClose = () => {
    setIsOpen(false)
  }

  const handleMenuMouseEnter = (value: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
      menuTimeoutRef.current = null
    }
    console.log(value)
    setActiveMegaMenu(value)
  }

  const handleMenuMouseLeave = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 300) // 300ms gecikmeli kapatma
  }

  // Temizlik işlemi
  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current)
      }
    }
  }, [])

  // LocalStorage kontrolü için useEffect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const sessionUserString = localStorage.getItem('sessionUser')
        if (sessionUserString) {
          const sessionUserData = JSON.parse(sessionUserString)
          const isSignedIn = sessionUserData?.state?.session?.signedIn || false
          setHasSession(isSignedIn)
        } else {
          setHasSession(false)
        }
      } catch (error) {
        console.error('Session verisi çözümlenirken hata oluştu:', error)
        setHasSession(false)
      }
    }
  }, [])

  const handleButtonClick = () => {
    if (hasSession) {
      router.push(`/app/home`)
    } else {
      router.push(`/${locale}/sign-in`)
    }
  }

  return (
    <div
      style={{ transition: 'all 0.2s ease-in-out' }}
      className={classNames(
        'w-full fixed inset-x-0 z-[50]',
        isSticky ? 'top-4' : 'top-0',
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <div
        className={classNames(
          'flex flex-row self-start items-center justify-between py-3 max-w-7xl mx-auto px-3 sm:px-4 rounded-xl relative z-[60] w-full transition duration-200 backdrop-blur-md',
          isSticky
            ? 'bg-white/70 dark:bg-[#06061B]/70 shadow-lg dark:shadow-[0_4px_20px_rgba(132,132,255,0.1)] border border-white/20 dark:border-gray-700/20'
            : 'bg-transparent dark:bg-transparent',
        )}
      >
        <button
          onClick={openDrawer}
          className="flex lg:hidden items-center gap-4"
        >
          <TbMenu2 size={24} />
        </button>
        <Drawer
          isOpen={isOpen}
          onClose={onDrawerClose}
          onRequestClose={onDrawerClose}
          width={250}
          placement="left"
        >
          <div className="flex flex-col gap-6 p-2">
            <NavList
              onTabClick={onDrawerClose}
              tabs={navMenu.map((item) => ({
                ...item,
                to: item.to || '',
              }))}
            />
          </div>
        </Drawer>
        <div
          style={{ position: 'relative', zIndex: 70 }}
          className="mx-auto lg:mx-0"
        >
          <Link href={`/${locale}`} passHref legacyBehavior>
            <a style={{ display: 'block', cursor: 'pointer' }}>
              {mode === 'light' && (
                <Image
                  src="/img/logo/coredeai_logo.svg"
                  width={120}
                  height={40}
                  alt="corede"
                  style={{ pointerEvents: 'auto' }}
                />
              )}
              {mode === 'dark' && (
                <Image
                  src="/img/logo/coredeai_logo_light.svg"
                  width={120}
                  height={40}
                  alt="logo"
                  style={{ pointerEvents: 'auto' }}
                />
              )}
            </a>
          </Link>
        </div>
        <div
          className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center text-sm text-zinc-600 
        font-medium hover:text-zinc-800 transition duration-200 [perspective:1000px] overflow-auto sm:overflow-visible no-visible-scrollbar"
        >
          <div className="flex items-center">
            {navMenu.map((menuItem) => (
              <div
                key={menuItem.value}
                className="px-8 py-2 rounded-xl group"
                onMouseEnter={() => handleMenuMouseEnter(menuItem.value)}
                onMouseLeave={handleMenuMouseLeave}
              >
                {menuItem.href ? (
                  <Link href={menuItem.href} className="heading-text">
                    {menuItem.title}
                  </Link>
                ) : (
                  <span className="heading-text cursor-pointer">
                    {menuItem.title}
                  </span>
                )}

                {menuItem.megaMenu && activeMegaMenu === menuItem.value && (
                  <div
                    className="absolute top-full left-0 opacity-100 visible transition-all duration-300 transform translate-y-0 pt-2"
                    style={{
                      transformOrigin: 'top center',
                      width: '100%',
                    }}
                    onMouseEnter={() => handleMenuMouseEnter(menuItem.value)}
                    onMouseLeave={handleMenuMouseLeave}
                  >
                    <div
                      className="bg-white dark:bg-gradient-to-b dark:from-[#06071c] dark:to-[#062036]
                      rounded-2xl shadow-2xl p-6 w-full border border-gray-100 dark:border-gray-700/20 
                      transform transition-all duration-300 group-hover:scale-102 scale-100"
                      style={{
                        transformOrigin: 'top center',
                        animation: 'fadeIn 0.3s ease-out forwards',
                      }}
                    >
                      <div className="flex flex-row">
                        <div className="flex flex-col  w-full px-4 py-2 text-zinc-600 dark:text-white">
                          <h3 className="text-lg font-semibold mb-4 dark:text-white uppercase">
                            {menuItem.megaMenu.title}
                          </h3>
                          <div className="flex flex-row">
                            <div className="flex flex-col w-full gap-4 border-r mr-6 -pr-6 border-gray-100/50 dark:border-gray-700/50">
                              {menuItem.megaMenu.items
                                ?.slice(
                                  0,
                                  menuItem.value === 'ai-agents' ? 3 : 1,
                                )
                                .map((item, index) => (
                                  <div
                                    className="flex flex-row  items-start gap-2"
                                    key={index}
                                  >
                                    <div>{React.createElement(item.icon)}</div>
                                    <div className="flex flex-col w-full">
                                      <Link href={item.href} className="hover:underline">
                                        <h6 className="font-semibold dark:text-white -mt-1.5">
                                          {item.title}
                                        </h6>
                                      </Link>
                                      <ul className="list-disc list-inside ml-1">
                                        {item.list?.map((item, index) => (
                                          <li
                                            className="text-sm dark:text-white"
                                            key={index}
                                          >
                                            {item.description}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                            </div>
                            <div className="flex flex-col w-full gap-4 ">
                              {menuItem.megaMenu.items
                                ?.slice(
                                  menuItem.value === 'ai-agents' ? 3 : 1,
                                  menuItem.value === 'ai-agents' ? 5 : 3,
                                )
                                .map((item, index) => (
                                  <div
                                    className="flex flex-row  items-start gap-2"
                                    key={index}
                                  >
                                    <div>{React.createElement(item.icon)}</div>
                                    <div className="flex flex-col w-full">
                                      <Link href={item.href} className="hover:underline">
                                        <h6 className="font-semibold dark:text-white -mt-1.5">
                                          {item.title}
                                        </h6>
                                      </Link>
                                      <ul className="list-disc list-inside ml-1">
                                        {item.list?.map((item, index) => (
                                          <li
                                            className="text-sm dark:text-white"
                                            key={index}
                                          >
                                            {item.description}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col  w-full px-4 py-2 text-zinc-600 dark:text-white">
                          <h3 className="text-lg font-semibold mb-4 uppercase ">
                            {t('aboutUs')}
                          </h3>
                          <div className="flex  flex-row border-l -ml-6 pl-6 border-gray-100/50 dark:border-gray-700/50 gap-4">
                            <div className="flex flex-3 flex-col w-full">
                              <Image
                                src="/img/others/play-video.png"
                                alt="play-video"
                                width={300}
                                height={200}
                                className="w-full h-full object-cover rounded-2xl"
                              />
                            </div>
                            <div className="flex flex-2 flex-col w-full gap-4">
                              <div>{t('aboutUsDesc')}</div>
                              <div className="flex flex-row items-center gap-2">
                                <MapPin size={16} />
                                <span>Istanbul, Turkey</span>
                              </div>
                              <div className="flex flex-row items-center gap-2">
                                <Phone size={16} />
                                <span>+90 533 123 45 67</span>
                              </div>
                              <div className="flex flex-row items-center gap-2">
                                <Mail size={16} />
                                <span>info@corede.ai</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeButton />
          <GradientBorderButton
            text={hasSession ? t('goToDashboard') : t('getStarted')}
            className="h-[52px] hidden md:block"
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Navigation
