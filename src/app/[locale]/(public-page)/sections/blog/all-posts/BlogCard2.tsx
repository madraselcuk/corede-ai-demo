'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { IBlogListItemPublicResult } from '@/@package/corede'
import { format } from 'date-fns'
import { useParams } from 'next/navigation'

interface BlogPostProps {
  blog: IBlogListItemPublicResult
}

const BlogCard2: React.FC<BlogPostProps> = ({ blog }) => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK
  const params = useParams()
  const locale = params.locale as string

  return (
    <Link href={`/${locale}/blog/${blog._id}`}>
      <article
        className={`${isDarkMode ? 'bg-slate-900 border-gray-800' : 'bg-white border-slate-200'} rounded-lg overflow-hidden h-full flex flex-col md:flex-row transition-transform 
      duration-300 hover:scale-[1.02] hover:border-secondary border ${isDarkMode ? 'shadow-xl shadow-slate-900/20' : 'shadow-md shadow-slate-300/30'}`}
      >
        <div className="relative md:w-1/2 overflow-hidden">
          {blog.image?.publicUrl && (
            <Image
              src={blog.image?.publicUrl ?? ''}
              alt={blog.title}
              width={400}
              height={240}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow md:w-1/2">
          <div className="flex justify-between items-center mb-3">
            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {blog.author.name} · {blog.createdAt ? format(new Date(blog.createdAt), 'dd MMM yyyy') : ''}
            </span>
          </div>
          <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
            {blog.title}
          </h3>
          <div 
            className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 text-base flex-grow`}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <div className="flex justify-start gap-2 items-center mt-auto">
            <span className={`px-3 py-1 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} text-xs rounded-md`}>
              {blog.category.name}
            </span>
            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-xs flex items-center gap-1`}>
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
              {blog.readingTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard2
