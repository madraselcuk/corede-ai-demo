import React from 'react'
import ContactUsHero from '../sections/contact-us/hero'
import Content from '../sections/contact-us/content'
import { Metadata } from 'next/types'
import { getTranslations } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: 'en' | 'tr' | 'de' }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params
  const metaT = await getTranslations('meta.pages.contactUs')

  return {
    title: metaT('title') || 'Contact Us',
    description: metaT('description') || 'Contact us for more information',
  }
}
const ContactUs = () => {
  return (
    <main className="min-h-screen text-white">
      <ContactUsHero />
      <div className="container mx-auto px-4">
        <Content />
      </div>
    </main>
  )
}

export default ContactUs
