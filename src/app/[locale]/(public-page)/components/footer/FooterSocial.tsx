import React from 'react'
import Link from 'next/link'
import { FaDiscord, FaLinkedinIn } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import LanguageDropdown from './LanguageDropdown'

const socialLinks = [
  {
    icon: FaDiscord,
    href: 'https://discord.gg/',
    label: 'Discord',
  },
  {
    icon: RiTwitterXFill,
    href: 'https://twitter.com/',
    label: 'Twitter X',
  },
  {
    icon: FaLinkedinIn,
    href: 'https://linkedin.com/',
    label: 'LinkedIn',
  },
]

const FooterSocial: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-5">
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <social.icon size={16} className="sm:text-lg" />
        </Link>
      ))}
      <div className="ml-0 sm:ml-2">
        <LanguageDropdown />
      </div>
    </div>
  )
}

export default FooterSocial 