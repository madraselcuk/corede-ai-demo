import React from 'react'
import { Metadata } from 'next/types'
import { getTranslations } from 'next-intl/server'
import Hero from './sections/home/hero';
import AboutUs from './sections/home/about-us'
import OurSolutions from './sections/home/our-solutions'
import WhyChoose from './sections/home/why-choose'
import Testimonials from './sections/home/testimonials'
import Faq from './sections/home/faq'

type Props = {
    params: Promise<{ locale: 'en' | 'tr' | 'de' }>
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    await params;
    const t = await getTranslations('pages.home')
    const metaT = await getTranslations('meta.pages.home')

    return {
        title: t('title'),
        description: metaT('description'),
    }
}

export default async function HomePage() {
    // const t = await getTranslations('pages.home')

    return (
        <div className='flex flex-col'>
           <Hero />
           <AboutUs />
           <OurSolutions />
           <WhyChoose />
           <Testimonials />
           <Faq />
        </div>
    )
}
