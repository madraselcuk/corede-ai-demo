import React from 'react'
import AboutUsHero from '../sections/about-us/hero/AboutUsHero'
import OurMission from '../sections/about-us/our-mission/OurMission'
import CompanyHistory from '../sections/about-us/company-history/CompanyHistory'
import TheTeam from '../sections/about-us/the-team/TheTeam'
import MediaPress from '../sections/about-us/media-press'
import Testimonials from '../sections/home/testimonials'
import { Metadata } from 'next/types'
import { getTranslations } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: 'en' | 'tr' | 'de' }>
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  await params;
  const metaT = await getTranslations('meta.pages.aboutUs')

  return {
    title: metaT('title') || 'About Us',
    description: metaT('description') || 'Learn more about our company and team',
  }
}

const AboutUs = () => {
  return (
    <main className="min-h-screen text-white">
      <AboutUsHero />
      <div className="mx-auto">
        <OurMission />
        <CompanyHistory />
        <TheTeam />
        <MediaPress />
        <Testimonials />

      </div>
    </main>
  )
}

export default AboutUs
