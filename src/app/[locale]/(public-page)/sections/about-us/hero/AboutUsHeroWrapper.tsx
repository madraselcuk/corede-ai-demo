'use client'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import AboutUsHeroBackground from './AboutUsHeroBackground'

export interface AboutUsHeroProps {
  children: ReactNode
  fullHeight?: boolean
}

const AboutUsHeroWrapper = ({
  children,
  fullHeight = false,
}: AboutUsHeroProps) => {
  return (
    <div
      className={classNames('relative w-full overflow-hidden', {
        'min-h-screen': fullHeight,
        'py-16 md:py-24': !fullHeight,
      })}
    >
      <AboutUsHeroBackground />
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default AboutUsHeroWrapper 