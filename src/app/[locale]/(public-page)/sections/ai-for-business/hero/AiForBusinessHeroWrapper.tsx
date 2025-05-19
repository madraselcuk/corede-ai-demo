'use client'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import AiForBusinessHeroBackground from './AiForBusinessHeroBackground'

export interface AiForBusinessHeroProps {
  children: ReactNode
  fullHeight?: boolean
}

const AiForBusinessHeroWrapper = ({
  children,
  fullHeight = false,
}: AiForBusinessHeroProps) => {
  return (
    <div
      className={classNames('relative w-full overflow-hidden', {
        'min-h-screen': fullHeight,
        'py-16 md:py-24': !fullHeight,
      })}
    >
      <AiForBusinessHeroBackground />
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default AiForBusinessHeroWrapper 