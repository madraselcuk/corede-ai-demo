'use client'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import AiAgentsHeroBackground from './AiAgentsHeroBackground'

export interface AiAgentsHeroProps {
  children: ReactNode
  fullHeight?: boolean
}

const AiAgentsHeroWrapper = ({
  children,
  fullHeight = false,
}: AiAgentsHeroProps) => {
  return (
    <div
      className={classNames('relative w-full overflow-hidden', {
        'min-h-screen': fullHeight,
        'py-16 md:py-24': !fullHeight,
      })}
    >
      <AiAgentsHeroBackground />
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default AiAgentsHeroWrapper 