'use client'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import BlogHeroBackground from './BlogHeroBackground'

export interface BlogHeroProps {
  children: ReactNode
  fullHeight?: boolean
}

const BlogHeroWrapper = ({
  children,
  fullHeight = false,
}: BlogHeroProps) => {
  return (
    <div
      className={classNames('relative w-full overflow-hidden', {
        'min-h-screen': fullHeight,
        'pt-16 md:pt-24': !fullHeight,
      })}
    >
      <BlogHeroBackground />
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default BlogHeroWrapper 