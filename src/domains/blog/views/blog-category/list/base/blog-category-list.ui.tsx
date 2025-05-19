'use client'

import React from "react"
import BlogCategoryListContainer from "../blog-category-list.container"
import BlogCategoryListTableUI from "./blog-category-list-container.ui"

const BlogCategoryListUI = () => {
  return (
    <div className="container mx-auto py-10">
      <BlogCategoryListContainer>
        {(props) => <BlogCategoryListTableUI {...props} />}
      </BlogCategoryListContainer>
    </div>
  )
}

export default BlogCategoryListUI
