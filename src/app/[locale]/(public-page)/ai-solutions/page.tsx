import React from 'react'
import { Metadata } from 'next/types'
import { getTranslations } from 'next-intl/server'
import ScrollToSection from '../components/ScrollToSection'
import AiSolutionsHero from '../sections/ai-solutions/hero'
import WhyAiPowered from '../sections/ai-solutions/why-ai-powered'
import AiPoweredSolutions from '../sections/ai-solutions/ai-powered-solutions'
import WhyChoose from '../sections/ai-solutions/why-choose'
import SuccessStories from '../sections/ai-solutions/success-stories'
import TechnologiesUsed from '../sections/ai-solutions/technologies-used'

type Props = {
  params: Promise<{ locale: 'en' | 'tr' | 'de' }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params
  const metaT = await getTranslations('meta.pages.aiSolutions')

  return {
    title: metaT('title') || 'AI Solutions',
    description:
      metaT('description') || 'Intelligent AI solutions for automation',
  }
}

const sectionStyle = 'pt-24 mt-[-100px]'

const AiSolutions = () => {
  return (
    <main className="min-h-screen text-white">
      <ScrollToSection />
      <AiSolutionsHero />

      <div className="mx-auto">
        <div id="why-ai-powered" className={sectionStyle}>
          <WhyAiPowered />
        </div>
        <div id="ai-powered-solutions" className={sectionStyle}>
          <AiPoweredSolutions />
        </div>
        <div id="why-choose" className={sectionStyle}>
          <WhyChoose />
        </div>
        <div id="success-stories" className={sectionStyle}>
          <SuccessStories />
        </div>
        <div id="technologies-used" className={sectionStyle}>
          <TechnologiesUsed />
        </div>
      </div>
    </main>
  )
}

export default AiSolutions
