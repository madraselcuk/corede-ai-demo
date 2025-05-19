import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumnProps {
  title: string
  links: FooterLink[]
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  const locale = useLocale()
  
  return (
    <div className="flex flex-col items-center sm:items-start">
      <h4 className="mb-2 sm:mb-4 text-xs sm:text-sm tracking-wider leading-none uppercase font-semibold dark:text-white text-gray-900 text-center sm:text-left">
        {title}
      </h4>
      <nav className="flex flex-col space-y-2 sm:space-y-3 items-center sm:items-start">
        {links.map((link, index) => (
          <Link 
            key={index} 
            href={`/${locale}${link.href}`}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs sm:text-sm transition-colors duration-200 text-center sm:text-left"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default FooterColumn 