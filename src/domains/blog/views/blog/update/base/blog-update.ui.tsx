'use client'

import BlogUpdateFormContainer from '../blog-update-form.container'
import BlogUpdateFormUI from './blog-update-form.ui'

const BlogUpdateUI = ({ blogId }: { blogId: string }) => {
  return (
    <div>
      <BlogUpdateFormContainer blogId={blogId}>
        {(props) => <BlogUpdateFormUI entityId={blogId} {...props} />}
      </BlogUpdateFormContainer>
    </div>
  )
}

export default BlogUpdateUI
