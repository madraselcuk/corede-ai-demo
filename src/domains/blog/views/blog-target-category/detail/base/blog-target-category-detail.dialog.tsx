'use client'
import BlogTargetCategoryDetailContainer from "../blog-target-category-detail.container"
import BlogTargetCategoryDetailContent from "./blog-target-category-detail-container.ui"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface BlogTargetCategoryDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogTargetCategoryId?: string
}

export const BlogTargetCategoryDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  blogTargetCategoryId
}: BlogTargetCategoryDetailDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogTargetCategoryDetailContainer
        blogTargetCategoryId={blogTargetCategoryId}
      >
        {(contentProps) => (
          <BlogTargetCategoryDetailContent {...contentProps} />
        )}
      </BlogTargetCategoryDetailContainer>
    </CoDialog>
  )
}

export default BlogTargetCategoryDetailDialog
