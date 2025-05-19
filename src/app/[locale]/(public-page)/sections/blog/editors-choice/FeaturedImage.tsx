'use client'
import React from 'react'
import GradientBorderButton from '../../../components/button/GradientBorderButton'
import { ChevronRight } from 'lucide-react'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { useLocale } from 'next-intl'
import { IBlogListItemPublicResult } from '@/@package/corede'

interface FeaturedImageProps {
  blog: IBlogListItemPublicResult
}

const FeaturedImage: React.FC<FeaturedImageProps> = ({ blog }) => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK
  const locale = useLocale()

  return (
    <figure
      className={`relative h-full w-full max-md:w-full max-md:h-auto max-sm:hidden z-0 ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}
    >
      <img
        src={blog?.image?.publicUrl || ''}
        className={`rounded-xl h-full w-full max-md:h-auto object-cover ${isDarkMode ? 'shadow-xl shadow-slate-900/20' : 'shadow-md shadow-slate-300/30'}`}
        alt="Editor Choice Image"
      />
      <div className="absolute -left-20 top-4/5 w-[184px] max-md:left-2/4 max-md:-translate-x-2/4">
        <GradientBorderButton
          text="Read More"
          className="h-16 z-10"
          onClick={() =>
            (window.location.href = `/${locale}/blog/${blog?._id}`)
          }
          icon={
            <ChevronRight className="w-6 h-6 -mb-0.5 dark:text-white text-black" />
          }
        />
      </div>
    </figure>
  )
}

export default FeaturedImage
