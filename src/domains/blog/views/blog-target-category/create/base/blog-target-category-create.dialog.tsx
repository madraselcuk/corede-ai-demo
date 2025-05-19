'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import BlogTargetCategoryCreateFormContainer from "../blog-target-category-create-form.container"
import BlogTargetCategoryCreateFormUI from "./blog-target-category-create-form.ui"

interface BlogTargetCategoryCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const BlogTargetCategoryCreateDialog = ({
  open,
  onOpenChange,
  onClose
}: BlogTargetCategoryCreateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogTargetCategoryCreateFormContainer>
        {(contentProps) => <BlogTargetCategoryCreateFormUI {...contentProps} />}
      </BlogTargetCategoryCreateFormContainer>
    </CoDialog>
  )
}

export default BlogTargetCategoryCreateDialog
