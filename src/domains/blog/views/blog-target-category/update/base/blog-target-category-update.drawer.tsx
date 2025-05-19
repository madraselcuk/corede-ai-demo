'use client'

import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import BlogTargetCategoryUpdateFormUI from "./blog-target-category-update-form.ui"
import BlogTargetCategoryUpdateFormContainer from "../blog-target-category-update-form.container"

interface BlogTargetCategoryUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogTargetCategoryId?: string
}

export const BlogTargetCategoryUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  blogTargetCategoryId
}: BlogTargetCategoryUpdateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogTargetCategoryUpdateFormContainer blogTargetCategoryId={blogTargetCategoryId}>
        {(contentProps) => <BlogTargetCategoryUpdateFormUI {...contentProps} />}
      </BlogTargetCategoryUpdateFormContainer>
    </CoDrawer>
  )
}

export default BlogTargetCategoryUpdateDrawer
