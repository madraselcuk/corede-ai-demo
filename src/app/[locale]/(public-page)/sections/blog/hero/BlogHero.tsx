'use client'
import React from 'react'
import BlogHeroWrapper from './BlogHeroWrapper'
import BlogHeroContent from './BlogHeroContent'
import { BlogListWithSearchPublicContainerUIProps } from '@/domains/blog/views/blog/list-public-with-search'

interface BlogHeroProps extends BlogListWithSearchPublicContainerUIProps {
  toggleVisibilityFilteredPosts: (
    toggleVisibilityFilteredPosts: boolean,
  ) => void
}

const BlogHero: React.FC<BlogHeroProps> = ({
  blogCategoryList,
  blogCategoryListIsLoading,
  setFilters,
  toggleVisibilityFilteredPosts,
  handleCategorySelect
}) => {
  return (
    <BlogHeroWrapper>
      <BlogHeroContent
        blogCategoryList={blogCategoryList}
        blogCategoryListIsLoading={blogCategoryListIsLoading}
        setFilters={setFilters}
        toggleVisibilityFilteredPosts={toggleVisibilityFilteredPosts}
        handleCategorySelect={handleCategorySelect}
      />
    </BlogHeroWrapper>
  )
}

export default BlogHero
