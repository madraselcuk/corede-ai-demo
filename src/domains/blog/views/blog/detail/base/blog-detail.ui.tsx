'use client'

import BlogDetailFormContainer from '../blog-detail.container'
import BlogDetailContainerUI from './blog-detail-container.ui'

const BlogDetailUI = () => {
  return (
    <div>
      <BlogDetailFormContainer>
        {(props) => <BlogDetailContainerUI { ...props} />}
      </BlogDetailFormContainer>
    </div>
  )
}

export default BlogDetailUI
