import React from 'react'
import FaqHero from '../sections/faq/hero'
import FaqContent from '../sections/faq/content'
import { Metadata } from 'next/types'
import { getTranslations } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: 'en' | 'tr' | 'de' }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params
  const metaT = await getTranslations('meta.pages.faq')

  return {
    title: metaT('title') || 'FAQ',
    description: metaT('description') || 'Frequently Asked Questions',
  }
}

const Faq = () => {
  return (
    <main className="min-h-screen text-white">
      <FaqHero />
      <div className="container mx-auto px-4">
        <FaqContent />
      </div>
    </main>
  )
}

export default Faq
