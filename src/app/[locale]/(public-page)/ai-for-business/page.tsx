import React from 'react'
import { Metadata } from 'next/types'
import { getTranslations } from 'next-intl/server'
import ScrollToSection from '../components/ScrollToSection'
import AiForBusinessHero from '../sections/ai-for-business/hero/AiForBusinessHero'
import OurSolutions from '../sections/ai-for-business/our-solutions'
import AiTransformation from '../sections/ai-for-business/ai-transformation'
import SuccessStories from '../sections/ai-for-business/success-stories'

type Props = {
  params: Promise<{ locale: 'en' | 'tr' | 'de' }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params
  const metaT = await getTranslations('meta.pages.aiForBusiness')

  return {
    title: metaT('title') || 'AI for Business',
    description: metaT('description') || 'AI-based solutions for your business',
  }
}

const sectionStyle = 'pt-24 mt-[-100px]'

export default async function AiForBusinessPage() {
  return (
    <main className="min-h-screen text-white">
      <ScrollToSection />
      <AiForBusinessHero />

      <div className="mx-auto">
        <div id="our-solutions" className={sectionStyle}>
          <OurSolutions />
        </div>
        <div id="ai-transformation" className={sectionStyle}>
          <AiTransformation />
        </div>
        <div id="success-stories" className={sectionStyle}>
          <SuccessStories />
        </div>
      </div>
    </main>
  )
}
