'use client'

import BlogCategoryCreateFormContainer from '../blog-category-create-form.container'
import BlogCategoryCreateFormUI from './blog-category-create-form.ui'

const BlogCategoryCreateUI = () => {
  return (
    <div>
      <BlogCategoryCreateFormContainer>
        {(props) => <BlogCategoryCreateFormUI {...props} />}
      </BlogCategoryCreateFormContainer>
    </div>
  )
}

export default BlogCategoryCreateUI
