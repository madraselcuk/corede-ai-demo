'use client'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import ContactUsHeroBackground from './ContactUsHeroBackground'

export interface ContactUsHeroProps {
  children: ReactNode
  fullHeight?: boolean
}

const ContactUsHeroWrapper = ({
  children,
  fullHeight = false,
}: ContactUsHeroProps) => {
  return (
    <div
      className={classNames('relative w-full overflow-hidden', {
        'min-h-screen': fullHeight,
        'py-16 md:py-24': !fullHeight,
      })}
    >
      <ContactUsHeroBackground />
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default ContactUsHeroWrapper 