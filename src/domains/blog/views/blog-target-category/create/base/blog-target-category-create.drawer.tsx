'use client'

import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import BlogTargetCategoryCreateFormContainer from "../blog-target-category-create-form.container"
import BlogTargetCategoryCreateFormUI from "./blog-target-category-create-form.ui"

interface BlogTargetCategoryCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const BlogTargetCategoryCreateDrawer = ({
  open,
  onOpenChange,
  onClose
}: BlogTargetCategoryCreateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogTargetCategoryCreateFormContainer>
        {(contentProps) => <BlogTargetCategoryCreateFormUI {...contentProps} />}
      </BlogTargetCategoryCreateFormContainer>
    </CoDrawer>
  )
}

export default BlogTargetCategoryCreateDrawer
