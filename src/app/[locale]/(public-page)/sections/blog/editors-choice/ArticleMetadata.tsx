'use client'
import React from 'react'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { Clock } from 'lucide-react'

interface ArticleMetadataProps {
  categoryName: string
  readingTime: string
}

const ArticleMetadata: React.FC<ArticleMetadataProps> = ({ categoryName, readingTime }) => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK

  return (
    <div className="flex gap-3 items-center ">
      <span
        className={`px-4 py-1.5 text-xl font-medium  cursor-pointer text-center
        ${isDarkMode ? 'text-white bg-opacity-10 border-white border-opacity-10' : 'text-slate-800  border-slate-700 bg-opacity-10'} 
        rounded-md border-solid border-[0.5px] h-[42px] w-[124px]`}
      >
        {categoryName}
      </span>
      <div className="flex gap-1.5 items-center  dark:text-slate-200  text-slate-700">
        <Clock className="w-4 h-4" />
        <span className={`text-base font-medium`}>{readingTime}</span>
      </div>
    </div>
  )
}

export default ArticleMetadata
