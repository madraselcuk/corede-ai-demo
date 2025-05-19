'use client'

import BlogCategoryDetailContainer from "../blog-category-detail.container"
import BlogCategoryDetailContent from "./blog-category-detail-container.ui"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface BlogCategoryDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogCategoryId?: string
}

export const BlogCategoryDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  blogCategoryId
}: BlogCategoryDetailDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <div className="p-4">
        <BlogCategoryDetailContainer blogCategoryId={blogCategoryId}>
          {(contentProps) => <BlogCategoryDetailContent {...contentProps} />}
        </BlogCategoryDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default BlogCategoryDetailDrawer
