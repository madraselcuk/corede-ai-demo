'use client'
import React, { } from 'react'
import FilteredPostsHeader from './FilteredPostsHeader'
import BlogCard from '../all-posts/BlogCard'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { IBlogCategoriesItemPublicResult, IBlogListPublicResult } from '@/@package/corede'
import { BlogListWithSearchPublicContainerUIProps } from '@/domains/blog/views/blog/list-public-with-search'
import { useTranslations } from 'next-intl'


interface FilteredPostsProps extends BlogListWithSearchPublicContainerUIProps {
  selectedCategory?: IBlogCategoriesItemPublicResult;
  onClearFilter?: () => void;
  blogListResult: IBlogListPublicResult
  blogListIsLoading: boolean
}

const FilteredPosts: React.FC<FilteredPostsProps> = ({ selectedCategory, onClearFilter, blogListResult, blogListIsLoading }) => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK
  const t = useTranslations('pages.blog.filteredPosts')


  if (blogListResult?.data.length === 0 || blogListIsLoading) {
    return (
      <section className={`mt-20 mb-16 ${isDarkMode ? 'bg-slate-950/50' : 'bg-slate-50'} rounded-lg p-6`}>
        <FilteredPostsHeader
          categoryName={selectedCategory?.name}
          onClear={onClearFilter}
        />
        <div className="flex justify-center items-center py-20">
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t('noPosts')}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className={`mt-28 mb-16  rounded-lg`}>
      <FilteredPostsHeader
        categoryName={selectedCategory?.name}
        onClear={onClearFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogListResult.data.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </section>
  )
}

export default FilteredPosts 