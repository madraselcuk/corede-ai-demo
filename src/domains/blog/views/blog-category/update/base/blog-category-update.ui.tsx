'use client'

import BlogCategoryUpdateFormContainer from '../blog-category-update-form.container'
import BlogCategoryUpdateFormUI from './blog-category-update-form.ui'

const BlogCategoryUpdateUI = () => {
  return (
    <div>
      <BlogCategoryUpdateFormContainer>
        {(props) => <BlogCategoryUpdateFormUI {...props} />}
      </BlogCategoryUpdateFormContainer>
    </div>
  )
}

export default BlogCategoryUpdateUI
