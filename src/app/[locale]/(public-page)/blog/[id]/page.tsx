'use client'
import React from 'react'
import BlogHero from '../../sections/blog/detail/hero'
import BlogContent from '../../sections/blog/detail/content'
import SimilarBlogs from '../../sections/blog/detail/similar-blogs'
import BlogDetailPublicContainer from '@/domains/blog/views/blog/detail-public/blog-detail-public.func.container'

const BlogDetail = () => {
  // const params = useParams()
  // const blogId = params.id as string

  return (
    <BlogDetailPublicContainer>
      {({
        blogDetailResult,
        blogListResult,
        blogListIsLoading,
        blogDetailIsLoading,
      }) => (
        <main className="min-h-screen text-white">
          <BlogHero
            blogDetailResult={blogDetailResult}
            blogDetailIsLoading={blogDetailIsLoading}
            blogListResult={blogListResult}
            blogListIsLoading={blogListIsLoading}
          />
          <div className="container mx-auto">
            <BlogContent
              blogDetailResult={blogDetailResult}
              blogDetailIsLoading={blogDetailIsLoading}
              blogListResult={blogListResult}
              blogListIsLoading={blogListIsLoading}
            />
          </div>
          <SimilarBlogs
            blogDetailResult={blogDetailResult}
            blogDetailIsLoading={blogDetailIsLoading}
            blogListResult={blogListResult}
            blogListIsLoading={blogListIsLoading}
          />
        </main>
      )}
    </BlogDetailPublicContainer>
  )
}

export default BlogDetail
