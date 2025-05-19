'use client'

import BlogCategoryDetailContainer from "../blog-category-detail.container"
import BlogCategoryDetailContent from "./blog-category-detail-container.ui"

const BlogCategoryDetailUIBase = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">Blog Category Details</h2>
        <BlogCategoryDetailContainer>
          {(props) => <BlogCategoryDetailContent {...props} />}
        </BlogCategoryDetailContainer>
      </div>
    </div>
  )
}

export default BlogCategoryDetailUIBase
