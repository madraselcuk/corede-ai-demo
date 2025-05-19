'use client'

import BlogTargetCategoryUpdateFormContainer from "../blog-target-category-update-form.container"
import BlogTargetCategoryUpdateFormUI from "./blog-target-category-update-form.ui"

const BlogTargetCategoryUpdateUI = () => {
  return (
    <div>
      <BlogTargetCategoryUpdateFormContainer>
        {(props) => <BlogTargetCategoryUpdateFormUI {...props} />}
      </BlogTargetCategoryUpdateFormContainer>
    </div>
  )
}

export default BlogTargetCategoryUpdateUI
