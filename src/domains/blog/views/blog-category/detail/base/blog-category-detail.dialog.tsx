'use client'

import BlogCategoryDetailContainer from "../blog-category-detail.container"
import BlogCategoryDetailContent from "./blog-category-detail-container.ui"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface BlogCategoryDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogCategoryId?: string
}

export const BlogCategoryDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  blogCategoryId
}: BlogCategoryDetailDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogCategoryDetailContainer blogCategoryId={blogCategoryId}>
        {(contentProps) => <BlogCategoryDetailContent {...contentProps} />}
      </BlogCategoryDetailContainer>
    </CoDialog>
  )
}

export default BlogCategoryDetailDialog
