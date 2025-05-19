import React from 'react'
import AiAgentsHero from '../sections/ai-agents/hero'
import Overview from '../sections/ai-agents/overview'
import Faq from '../sections/home/faq'
import WhyAiAgents from '../sections/ai-agents/why-ai-agents'
import ContentAutomation from '../sections/ai-agents/content-automation'
import MessagingAutomation from '../sections/ai-agents/messaging-automation'
import VoiceAutomation from '../sections/ai-agents/voice-automation'
import GetOffer from '../sections/ai-agents/get-offer'
import FeaturedSectors from '../sections/ai-agents/featured-sectors'
import { Metadata } from 'next/types'
import { getTranslations } from 'next-intl/server'
import ScrollToSection from '../components/ScrollToSection'

type Props = {
  params: Promise<{ locale: 'en' | 'tr' | 'de' }>
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  await params;
  const metaT = await getTranslations('meta.pages.aiAgents')

  return {
    title: metaT('title') || 'AI Agents',
    description: metaT('description') || 'Intelligent AI agents for automation',
  }
}


const sectionStyle = "pt-24 mt-[-100px]" 

const AiAgents = () => {
  return (
    <main className="min-h-screen text-white">
      {/* Scroll işlemlerini yöneten client component */}
      <ScrollToSection />
      
      <AiAgentsHero />
      <div className="mx-auto">
        <div id="overview-and-benefits" className={sectionStyle}>
          <Overview />
        </div>
        <div id="why-ai-agents" className={sectionStyle}>
          <WhyAiAgents />
        </div>
        <div id="content-automation" className={sectionStyle}>
          <ContentAutomation />
        </div>
        <div id="messaging-automation" className={sectionStyle}>
          <MessagingAutomation />
        </div>
        <div id="voice-automation" className={sectionStyle}>
          <VoiceAutomation />
        </div>
        <div id="get-offer" className={sectionStyle}>
          <GetOffer />
        </div>
        <div id="industry-demos" className={sectionStyle}>
          <FeaturedSectors />
        </div>
        <Faq />
      </div>
    </main>
  )
}

export default AiAgents
