'use client'

import BlogTargetCategoryDetailContainer from "../blog-target-category-detail.container"
import BlogTargetCategoryDetailContent from "./blog-target-category-detail-container.ui"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface BlogTargetCategoryDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogTargetCategoryId?: string
}

export const BlogTargetCategoryDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  blogTargetCategoryId
}: BlogTargetCategoryDetailDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <div className="p-4">
        <BlogTargetCategoryDetailContainer blogTargetCategoryId={blogTargetCategoryId}>
          {(contentProps) => <BlogTargetCategoryDetailContent {...contentProps} />}
        </BlogTargetCategoryDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default BlogTargetCategoryDetailDrawer
