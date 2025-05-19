'use client'

import React, { useState } from 'react'
import EditorChoiceHeader from './EditorChoiceHeader'
import ArticleContent from './ArticleContent'
import FeaturedImage from './FeaturedImage'
import { IBlogListPublicResult } from '@/@package/corede'

interface EditorsChoiceProps {
  blogListResult: IBlogListPublicResult
  blogListIsLoading: boolean
}

const EditorsChoice: React.FC<EditorsChoiceProps> = ({
  blogListResult,
  blogListIsLoading,
}) => {
  // const mode = useTheme((state) => state.mode)
  // const isDarkMode = mode === MODE_DARK
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0)

  if (blogListIsLoading) {
    return
  }

  if (blogListResult.data.length === 0) {
    return
  }

  const currentBlog = blogListResult.data[currentBlogIndex]
  const hasManyBlogs = blogListResult.data.length > 1

  const handlePrevBlog = () => {
    if (currentBlogIndex > 0) {
      setCurrentBlogIndex(currentBlogIndex - 1)
    } else {
      // Eğer ilk blog'daysa, son blog'a git (döngüsel navigasyon)
      setCurrentBlogIndex(blogListResult.data.length - 1)
    }
  }

  const handleNextBlog = () => {
    if (currentBlogIndex < blogListResult.data.length - 1) {
      setCurrentBlogIndex(currentBlogIndex + 1)
    } else {
      // Eğer son blog'daysa, ilk blog'a git (döngüsel navigasyon)
      setCurrentBlogIndex(0)
    }
  }

  return (
    <>
      <section className="max-w-7xl mx-auto relative w-full">
        <EditorChoiceHeader />
        <div
          className={`flex justify-between items-start px-12 gap-8 max-md:flex-col max-md:items-center mt-8
          dark:bg-slate-900/30 rounded-3xl shadow-2xl p-8 dark:border dark:border-gray-700/50 relative overflow-hidden`}
        >
          <div className="w-1/2 h-full max-md:w-full z-10">
            <ArticleContent
              blog={currentBlog}
              showNavigation={hasManyBlogs}
              onPrev={handlePrevBlog}
              onNext={handleNextBlog}
            />
          </div>
          <div className="w-1/2 h-full max-md:w-full z-10 ">
            <FeaturedImage blog={currentBlog} />
          </div>

          <div className="z-0 absolute top-10 -left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="z-0 absolute -bottom-10 left-50 w-[340px] h-[340px] bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="z-0 absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </>
  )
}

export default EditorsChoice
