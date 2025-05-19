'use client'

import BlogTargetCategoryCreateFormContainer from "../blog-target-category-create-form.container"
import BlogTargetCategoryCreateFormUI from "./blog-target-category-create-form.ui"

const BlogTargetCategoryCreateUI = () => {
  return (
    <div>
      <BlogTargetCategoryCreateFormContainer>
        {(props) => <BlogTargetCategoryCreateFormUI {...props} />}
      </BlogTargetCategoryCreateFormContainer>
    </div>
  )
}

export default BlogTargetCategoryCreateUI
