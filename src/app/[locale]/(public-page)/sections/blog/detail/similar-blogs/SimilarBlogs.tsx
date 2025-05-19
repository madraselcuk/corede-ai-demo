'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import BlogCard from '../../all-posts/BlogCard'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { useTranslations } from 'next-intl'
import { BlogDetailPublicContainerUIProps } from '@/domains/blog/views/blog/detail-public/blog-detail-public.func.container'
import LeftArrowButton from '@/app/[locale]/(public-page)/components/button/LeftArrowButton'
import RightArrowButton from '@/app/[locale]/(public-page)/components/button/RightArrowButton'
//TODO geçici olarak eklendi. BlogCard kullanılacak.

interface SimilarBlogsProps extends BlogDetailPublicContainerUIProps {}

const SimilarBlogs: React.FC<SimilarBlogsProps> = ({
  blogListResult,
  blogDetailResult,
}) => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK
  const scrollRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('blog')
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
    <section className={`py-16 ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <h2
              className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
            >
              {t('similarBlogs')}
            </h2>
            <div
              className={`w-8 h-8 grid place-items-center ${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-md shadow-md`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                  stroke={isDarkMode ? 'white' : 'black'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17"
                  stroke={isDarkMode ? 'white' : 'black'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 12H17"
                  stroke={isDarkMode ? 'white' : 'black'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 17H13"
                  stroke={isDarkMode ? 'white' : 'black'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex">
            <LeftArrowButton prevSlide={scrollLeft} />
            <RightArrowButton nextSlide={scrollRight} />
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {blogListResult?.data
            ?.filter((post) => post._id !== blogDetailResult?._id)
            .map((post) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="min-w-[350px] max-w-[400px] snap-start p-2"
              >
                <BlogCard blog={post} />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default SimilarBlogs
