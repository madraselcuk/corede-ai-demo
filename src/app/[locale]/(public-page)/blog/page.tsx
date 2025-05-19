'use client'

import React, { useState } from 'react'
import BlogHero from '../sections/blog/hero'
import BlogPosts from '../sections/blog/all-posts'
import FilteredPosts from '../sections/blog/filtered-posts/FilteredPosts'
import { BlogListWithSearchPublicContainer } from '@/domains/blog/views/blog/list-public-with-search'
import BlogListPublicContainer from '@/domains/blog/views/blog/list-public/blog-list-public.func.container'
import EditorsChoice from '../sections/blog/editors-choice'
import { BlogListEditorsChoicePublicContainer } from '@/domains/blog/views/blog/list-editors-choice-public'
import { BlogListPopularPublicContainer } from '@/domains/blog/views/blog/list-popular-public'
import PopularBlogs from '../sections/blog/popular-blogs'
import Categories from '../sections/blog/categories'
import { BlogCategoryListPublicContainer } from '@/domains/blog/views/blog-category/list-public'

const Blog = () => {

  const [visibilityFilteredPosts, setVisibilityFilteredPosts] = useState(false)

  const toggleVisibilityFilteredPosts = (toggleVisibilityFilteredPosts: boolean) => {
    setVisibilityFilteredPosts(toggleVisibilityFilteredPosts)
  }

  return (
    <main className="min-h-screen text-white">
      <BlogListWithSearchPublicContainer>
        {(props) => (<>
          <BlogHero
            {...props}
            toggleVisibilityFilteredPosts={toggleVisibilityFilteredPosts}
          />
          <div className="container mx-auto mt-12 px-4">
            {visibilityFilteredPosts && (
              <FilteredPosts
                {...props}
              />
            )}
          </div>
        </>)}
      </BlogListWithSearchPublicContainer>

      {
        !visibilityFilteredPosts &&
        <BlogListEditorsChoicePublicContainer>
          {(props) => props.blogListIsLoading || !props.blogListResult || props.blogListResult.data.length === 0 ? undefined : <EditorsChoice {...props} />}
        </BlogListEditorsChoicePublicContainer>
      }

      {
        !visibilityFilteredPosts &&
        <BlogListPublicContainer>
          {(props) => props.blogListIsLoading || !props.blogListResult || props.blogListResult.data.length === 0 ? undefined : <BlogPosts {...props} />}
        </BlogListPublicContainer>
      }

{
        !visibilityFilteredPosts &&
        <BlogCategoryListPublicContainer>
          {(props) => props.blogCategoryListIsLoading || !props.blogCategoryListResult || props.blogCategoryListResult.data.length === 0 ? undefined : <Categories {...props} />}
        </BlogCategoryListPublicContainer>
      }


      {
        !visibilityFilteredPosts &&
        <BlogListPopularPublicContainer>
          {(props) => props.blogListIsLoading || !props.blogListResult || props.blogListResult.data.length === 0 ? undefined : <PopularBlogs {...props} />}
        </BlogListPopularPublicContainer>
      }


    </main >
  )
}

export default Blog
