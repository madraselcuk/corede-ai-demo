'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import MediaPressCard from './MediaPressCard'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { useTranslations } from 'next-intl'

interface MediaPressProps {
  relatedPosts: {
    id: number
    title: string
    excerpt: string
    image: string
    author: string
    date: string
    readTime: string
    category: string
  }[]
}

const MediaPress: React.FC<MediaPressProps> = ({ relatedPosts }) => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK
  const scrollRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('pages.aboutUs.mediaPress')
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  return (
    <section
      className={`py-16 mt-16 ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-4 md:gap-8">
              <h2 className="text-3xl md:text-5xl font-bold">{t('title')}</h2>
              <p className="text-xs md:text-lg max-w-lg dark:text-white text-gray-900">
                {t('description')}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className={`w-12 h-12 rounded-lg flex items-center justify-center border ${
                isDarkMode
                  ? 'bg-slate-900 border-gray-800 text-white hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100'
              } transition-colors`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19L8 12L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className={`w-12 h-12 rounded-lg flex items-center justify-center border ${
                isDarkMode
                  ? 'bg-slate-900 border-gray-800 text-white hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100'
              } transition-colors`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {relatedPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="min-w-[350px] snap-start p-2"
            >
              <MediaPressCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaPress
