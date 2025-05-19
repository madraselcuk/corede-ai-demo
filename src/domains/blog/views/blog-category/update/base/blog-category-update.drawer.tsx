'use client'

import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import BlogCategoryUpdateFormUI from "./blog-category-update-form.ui"
import BlogCategoryUpdateFormContainer from "../blog-category-update-form.container"

interface BlogCategoryUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogCategoryId?: string
}

export const BlogCategoryUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  blogCategoryId
}: BlogCategoryUpdateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogCategoryUpdateFormContainer blogCategoryId={blogCategoryId}>
        {(contentProps) => <BlogCategoryUpdateFormUI {...contentProps} />}
      </BlogCategoryUpdateFormContainer>
    </CoDrawer>
  )
}

export default BlogCategoryUpdateDrawer
