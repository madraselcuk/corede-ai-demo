'use client'

import BlogTargetCategoryDetailContainer from "../blog-target-category-detail.container"
import BlogTargetCategoryDetailContent from "./blog-target-category-detail-container.ui"

const BlogTargetCategoryDetailUIBase = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">
          Blog Target Category Details
        </h2>
        <BlogTargetCategoryDetailContainer>
          {(props) => <BlogTargetCategoryDetailContent {...props} />}
        </BlogTargetCategoryDetailContainer>
      </div>
    </div>
  )
}

export default BlogTargetCategoryDetailUIBase
