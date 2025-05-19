'use client'

import BlogCreateFormContainer from '../blog-create-form.container'
import BlogCreateFormUIBase from './blog-create-form.ui'

const BlogCreateUIBase = () => {
  return (
    <div>
      <BlogCreateFormContainer>
        {(props) => <BlogCreateFormUIBase {...props} />}
      </BlogCreateFormContainer>
    </div>
  )
}

export default BlogCreateUIBase
