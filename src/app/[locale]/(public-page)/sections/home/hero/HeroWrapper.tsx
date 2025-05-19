'use client'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import HeroBackground from './HeroBackground'
// import useTheme from '@/utils/hooks/useTheme'
// import { MODE_DARK } from '@/constants/theme.constant'

export interface HeroProps {
  children: ReactNode
  backgroundVariant?: 'gradient' | 'default'
  fullHeight?: boolean
  withPattern?: boolean
}

const HeroComponent = ({
  children,
  // backgroundVariant = 'default',
  fullHeight = false,
}: HeroProps) => {
  // const mode = useTheme((state) => state.mode)
  // const isDarkMode = mode === MODE_DARK

  return (
    <div
      className={classNames('relative w-full overflow-hidden', {
        'min-h-screen': fullHeight,
        'py-16 md:py-24': !fullHeight,
      })}
    >
      <HeroBackground />
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default HeroComponent
