'use client'

import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import BlogCategoryCreateFormContainer from "../blog-category-create-form.container"
import BlogCategoryCreateFormUI from "./blog-category-create-form.ui"

interface BlogCategoryCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const BlogCategoryCreateDrawer = ({
  open,
  onOpenChange,
  onClose
}: BlogCategoryCreateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogCategoryCreateFormContainer>
        {(contentProps) => <BlogCategoryCreateFormUI {...contentProps} />}
      </BlogCategoryCreateFormContainer>
    </CoDrawer>
  )
}

export default BlogCategoryCreateDrawer
