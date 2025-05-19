import React from 'react'
import HelpCenterHero from '../sections/help-center/hero'
import { Metadata } from 'next/types'
import { getTranslations } from 'next-intl/server'
import HelpCenterContent from '../sections/help-center/content'

type Props = {
  params: Promise<{ locale: 'en' | 'tr' | 'de' }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params
  const metaT = await getTranslations('meta.pages.helpCenter')

  return {
    title: metaT('title') || 'Help Center',
    description: metaT('description') || 'Help Center',
  }
}
const HelpCenter = () => {
  return (
    <main className="min-h-screen text-white">
      <HelpCenterHero />
      <div className="container mx-auto px-4">
        <HelpCenterContent />
      </div>
    </main>
  )
}

export default HelpCenter
