'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import BlogCategoryUpdateFormContainer from "../blog-category-update-form.container"
import BlogCategoryUpdateFormUI from "./blog-category-update-form.ui"

interface BlogCategoryUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogCategoryId?: string
}

export const BlogCategoryUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  blogCategoryId
}: BlogCategoryUpdateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogCategoryUpdateFormContainer blogCategoryId={blogCategoryId}>
        {(contentProps) => <BlogCategoryUpdateFormUI {...contentProps} />}
      </BlogCategoryUpdateFormContainer>
    </CoDialog>
  )
}

export default BlogCategoryUpdateDialog
