/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import LeftArrowButton from '../../../components/button/LeftArrowButton'
import RightArrowButton from '../../../components/button/RightArrowButton'
import { LayoutGrid } from 'lucide-react'
import { BlogCategoryListPublicContainerUIProps } from '@/domains/blog/views/blog-category/list-public'
import { useTranslations } from 'next-intl'
import CategoryCard from './CategoryCard'

interface CategoriesProps extends BlogCategoryListPublicContainerUIProps {}

const Categories: React.FC<CategoriesProps> = ({
  blogCategoryListResult,
  blogCategoryListIsLoading,
  pageCount,
  pageSize = 4,
  pageIndex,
  onPaginationChange,
}) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslations('pages.blog.categories')

  // Determine button visibility based on pagination state
  const showLeftButton = pageCount > 0 && pageIndex > 0
  const showRightButton = pageCount > 0 && pageIndex < pageCount - 1

  const handlePageChange = (direction: 'prev' | 'next') => {
    if (isAnimating) return

    setIsAnimating(true)

    const newPageIndex =
      direction === 'next'
        ? Math.min(pageCount - 1, pageIndex + 1)
        : Math.max(0, pageIndex - 1)

    // Only change page if it's different
    if (newPageIndex !== pageIndex) {
      onPaginationChange(newPageIndex, pageSize)
    }

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 400)
  }

  const prevSlide = () => {
    if (showLeftButton) {
      handlePageChange('prev')
    }
  }

  const nextSlide = () => {
    if (showRightButton) {
      handlePageChange('next')
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Show loading state or empty state if needed
  if (blogCategoryListIsLoading) {
    return (
      <section className="py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 bg-gray-200 dark:bg-gray-700 rounded"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!blogCategoryListResult?.data?.length) {
    return (
      <section className="py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('noCategories')}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Title and navigation */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 md:mb-8 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '50ms' }}
        >
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
              {t('title')}
            </h2>
            <LayoutGrid className="w-4 h-4 md:w-5 md:h-5 text-gray-900 dark:text-white" />
          </div>
          <div className="flex space-x-2">
            {showLeftButton && <LeftArrowButton prevSlide={prevSlide} />}
            {showRightButton && <RightArrowButton nextSlide={nextSlide} />}
          </div>
        </div>

        {/* Grid layout */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          {blogCategoryListResult.data.map((category, index) => (
            <div
              key={category._id}
              className={`transition-opacity duration-500 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CategoryCard
                title={category.name}
                imageUrl={`/img/others/categories/categories-${(index % 4) + 1}.png`}
                imageAlt={category.name}
                isReversed={index % 2 === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
