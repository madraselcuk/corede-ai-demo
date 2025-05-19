'use client'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import FaqHeroBackground from './FaqHeroBackground'

export interface FaqHeroProps {
  children: ReactNode
  fullHeight?: boolean
}

const FaqHeroWrapper = ({
  children,
  fullHeight = false,
}: FaqHeroProps) => {
  return (
    <div
      className={classNames('relative w-full overflow-hidden', {
        'min-h-screen': fullHeight,
        'py-16 md:py-24': !fullHeight,
      })}
    >
      <FaqHeroBackground />
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default FaqHeroWrapper 