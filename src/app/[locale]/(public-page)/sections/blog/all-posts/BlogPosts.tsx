'use client'
import React from 'react'
import BlogPostsHeader from './BlogPostsHeader'
import BlogCard from './BlogCard'
import BlogCard2 from './BlogCard2'
import { BlogListPublicContainerUIProps } from '@/domains/blog/views/blog/list-public/blog-list-public.func.container'

interface BlogPostsProps extends BlogListPublicContainerUIProps {}

const BlogPosts: React.FC<BlogPostsProps> = ({
  blogListResult,
  blogListIsLoading,
}) => {
  // const mode = useTheme((state) => state.mode)
  // const isDarkMode = mode === MODE_DARK

  if (blogListIsLoading) {
    return <div>Loading...</div>
  }

  const firstBlog = blogListResult.data[0]
  const secondBlog = blogListResult.data[1]
  const otherBlogs = blogListResult.data.slice(2)

  return (
    <section className={`max-w-7xl mx-auto mt-20 mb-16 `}>
      <BlogPostsHeader />

      {/* İlk satır: 1'e 2 oranında blog kartları */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-1">
          <BlogCard blog={firstBlog} />
        </div>
        <div className="lg:col-span-2">
          <BlogCard2 blog={secondBlog} />
        </div>
      </div>

      {/* Diğer blog kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {otherBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  )
}

export default BlogPosts
