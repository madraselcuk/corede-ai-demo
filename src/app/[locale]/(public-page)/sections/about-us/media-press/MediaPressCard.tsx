'use client'
import React from 'react'
import Image from 'next/image'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'

interface BlogPostProps {
  post: {
    id: number
    title: string
    excerpt: string
    image: string
    author: string
    date: string
    readTime: string
    category: string
  }
}

const MediaPressCard: React.FC<BlogPostProps> = ({ post }) => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK

  return (
    // <Link href={`#`}>
    <article
      className={`${isDarkMode ? 'bg-slate-900 border-gray-800' : 'bg-white border-slate-200'} rounded-2xl overflow-hidden max-h-[500px] flex flex-col 
      h-full transition-transform duration-300 hover:scale-[1.02] hover:border-secondary border ${isDarkMode ? 'shadow-xl shadow-slate-900/20' : 'shadow-md shadow-slate-300/30'}`}
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={240}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span
            className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
          >
            {post.author} · {post.date}
          </span>
        </div>
        <h3
          className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-3`}
        >
          {post.title}
        </h3>
        <p
          className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 text-sm flex-grow`}
        >
          {post.excerpt}
        </p>
        <div className="flex justify-start gap-2 items-center mt-auto">
          <span
            className={`px-3 py-1 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} text-xs rounded-md`}
          >
            {post.category}
          </span>
          <span
            className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-xs flex items-center gap-1`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
    // </Link>
  )
}

export default MediaPressCard
