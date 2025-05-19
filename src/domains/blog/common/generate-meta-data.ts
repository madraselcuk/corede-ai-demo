import { Metadata } from 'next/types'
import { getTranslations } from 'next-intl/server'

export type Props = {
  params: Promise<{ locale: 'en' | 'tr' | 'de' }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params
  const metaT = await getTranslations('meta.pages.blog')

  return {
    title: metaT('title') || 'Blog',
    description: metaT('description') || 'Blog',
  }
}
