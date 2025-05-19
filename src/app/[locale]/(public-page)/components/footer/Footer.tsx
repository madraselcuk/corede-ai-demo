'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FooterColumn from './FooterColumn'
import FooterSocial from './FooterSocial'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_LIGHT } from '@/constants/theme.constant'
import { useTranslations } from 'next-intl'

const Footer: React.FC = () => {
  const mode = useTheme((state) => state.mode)
  const logoSrc =
    mode === MODE_LIGHT
      ? '/img/logo/coredeai_logo.svg'
      : '/img/logo/coredeai_logo_light.svg'

  const t = useTranslations('navigation')
  const tFooter = useTranslations('footer')

  return (
    <footer className="relative w-full bg-white dark:bg-[#06061B] text-gray-800 dark:text-white pt-8 sm:pt-12 md:pt-16 pb-0">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16">
          <div className="w-full md:w-5/12 mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block">
              <Image
                src={logoSrc}
                alt="Corede Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <div className="relative w-full max-w-xs mt-4 mx-auto md:mx-0">
              <Image
                src="/img/others/footer-symbol.svg"
                alt="Footer Symbol"
                width={100}
                height={100}
                className="w-full h-auto ml-[-25px] md:ml-[-70px]"
              />
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6 sm:gap-8 md:gap-4 lg:gap-8 mb-8 md:mb-12">
              <FooterColumn
                title={tFooter('links')}
                links={[
                  { label: t('home'), href: '/' },
                  { label: t('aboutUs'), href: '/about-us' },
                  {
                    label: t('aiAgents'),
                    href: '/ai-agents',
                  },
                  {
                    label: t('aiForBusiness'),
                    href: '/ai-for-business',
                  },
                  {
                    label: t('aiSolutions'),
                    href: '/ai-solutions',
                  },
                ]}
              />
              <FooterColumn
                title={tFooter('support')}
                links={[
                  { label: t('blog'), href: '/blog' },
                  { label: t('contactUs'), href: '/contact-us' },
                  { label: tFooter('faq'), href: '/faq' },
                  { label: t('help'), href: '/help-center' },
                ]}
              />
              <FooterColumn
                title={tFooter('legal')}
                links={[
                  {
                    label: tFooter('termsOfService'),
                    href: '/terms',
                  },
                  {
                    label: tFooter('privacyPolicy'),
                    href: '/privacy',
                  },
                  {
                    label: tFooter('cookiesPolicy'),
                    href: '/cookies',
                  },
                  {
                    label: tFooter('salesAgreement'),
                    href: '/sales',
                  },
                  {
                    label: tFooter('refundPolicy'),
                    href: '/refund',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} COREDE.AI. {tFooter('copyright')}
          </p>
          <FooterSocial />
        </div>
      </div>
    </footer>
  )
}

export default Footer
