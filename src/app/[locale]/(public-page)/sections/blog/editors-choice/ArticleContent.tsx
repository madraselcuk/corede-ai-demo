'use client'
import React from "react";
import ArticleMetadata from "./ArticleMetadata";
import NavigationControls from "./NavigationControls";
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { IBlogListItemPublicResult } from '@/@package/corede'
import { format } from 'date-fns'

interface ArticleContentProps {
  blog: IBlogListItemPublicResult
  showNavigation?: boolean
  onPrev?: () => void
  onNext?: () => void
}

const ArticleContent: React.FC<ArticleContentProps> = ({ 
  blog, 
  showNavigation = false,
  onPrev,
  onNext
}) => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK

  return (
    <article className="flex flex-col gap-6 w-full h-full max-md:items-center max-md:w-full max-sm:items-start">
      <div className="flex flex-col gap-5 overflow-hidden">
        <div className={`text-lg font-medium ${isDarkMode ? 'text-slate-100' : 'text-slate-700'}`}>
          {blog.author.name} · {format(blog.createdAt, 'dd MMM yyyy')}
        </div>
        <div className="flex flex-col gap-5">
          <h2 className={`text-4xl h-16 font-bold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            {blog.title}
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}
            dangerouslySetInnerHTML={{ __html: blog.content?.slice(0, 240) + '...' }}
          >
          </p>
        </div>
      </div>
      <ArticleMetadata categoryName={blog.category?.name} readingTime={blog.readingTime} />
      {showNavigation && <NavigationControls onPrev={onPrev} onNext={onNext} />}
    </article>
  );
};

export default ArticleContent;