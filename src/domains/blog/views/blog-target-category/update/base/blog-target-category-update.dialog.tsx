'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import BlogTargetCategoryUpdateFormContainer from "../blog-target-category-update-form.container"
import BlogTargetCategoryUpdateFormUI from "./blog-target-category-update-form.ui"

interface BlogTargetCategoryUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogTargetCategoryId?: string
}

export const BlogTargetCategoryUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  blogTargetCategoryId
}: BlogTargetCategoryUpdateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogTargetCategoryUpdateFormContainer blogTargetCategoryId={blogTargetCategoryId}>
        {(contentProps) => <BlogTargetCategoryUpdateFormUI {...contentProps} />}
      </BlogTargetCategoryUpdateFormContainer>
    </CoDialog>
  )
}

export default BlogTargetCategoryUpdateDialog
