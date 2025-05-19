'use client'
import SimilarBlogs from './SimilarBlogs'
import { BlogDetailPublicContainerUIProps } from '@/domains/blog/views/blog/detail-public/blog-detail-public.func.container'

interface ISimilarBlogsSectionProps extends BlogDetailPublicContainerUIProps {}

const SimilarBlogsSection = ({
  blogListResult,
  blogListIsLoading,
  blogDetailResult,
  blogDetailIsLoading,
}: ISimilarBlogsSectionProps) => {
  return (
    <SimilarBlogs
      blogListResult={blogListResult}
      blogListIsLoading={blogListIsLoading}
      blogDetailResult={blogDetailResult}
      blogDetailIsLoading={blogDetailIsLoading}
    />
  )
}

export default SimilarBlogsSection
