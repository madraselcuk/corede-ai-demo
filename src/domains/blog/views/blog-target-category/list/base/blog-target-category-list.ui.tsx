'use client'

import React from "react"
import BlogTargetCategoryListContainer from "../blog-target-category-list.container"
import BlogTargetCategoryListTableUI from "./blog-target-category-list-container.ui"

const BlogTargetCategoryListUI = () => {
  return (
    <div className="container mx-auto py-10">
      <BlogTargetCategoryListContainer>
        {(props) => <BlogTargetCategoryListTableUI {...props} />}
      </BlogTargetCategoryListContainer>
    </div>
  )
}

export default BlogTargetCategoryListUI
