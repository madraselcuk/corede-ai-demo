'use client'

import React from "react"
import BlogListContainer from "../blog-list.container"
import BlogListContainerUI from "./blog-list-container.ui"

const BlogListUIBase = () => {
  return (
    <div className="container mx-auto py-10">
      <BlogListContainer>
        {(props) => <BlogListContainerUI {...props} />}
      </BlogListContainer>
    </div>
  )
}

export default BlogListUIBase
