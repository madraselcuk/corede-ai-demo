'use client'
import React from 'react'
import Link from 'next/link'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { useLocale, useTranslations } from 'next-intl'

const BlogPostsHeader: React.FC = () => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK
  const t = useTranslations('pages.blog.allBlogs')
  const locale = useLocale()
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <h2
          className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
        >
          {t('title')}
        </h2>
        <span className={`${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </span>
      </div>
      <Link
        href={`/${locale}/blog#all-blogs`}
        className={`${isDarkMode ? 'text-white' : 'text-slate-800'} flex items-center gap-1 hover:underline`}
      >
        {t('viewAll')}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </Link>
    </div>
  )
}

export default BlogPostsHeader
