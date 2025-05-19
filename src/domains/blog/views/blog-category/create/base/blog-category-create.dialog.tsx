'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import BlogCategoryCreateFormContainer from '../blog-category-create-form.container'
import BlogCategoryCreateFormUI from './blog-category-create-form.ui'

interface BlogCategoryCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const BlogCategoryCreateDialog = ({
  open,
  onOpenChange,
  onClose
}: BlogCategoryCreateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogCategoryCreateFormContainer>
        {(contentProps) => <BlogCategoryCreateFormUI {...contentProps} />}
      </BlogCategoryCreateFormContainer>
    </CoDialog>
  )
}

export default BlogCategoryCreateDialog
