'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import BlogCreateFormContainer from '../blog-create-form.container'
import BlogCreateFormUIBase from './blog-create-form.ui'

interface BlogCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const BlogCreateDialog = ({
  open,
  onOpenChange,
  onClose
}: BlogCreateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogCreateFormContainer>
        {(contentProps) => <BlogCreateFormUIBase {...contentProps} />}
      </BlogCreateFormContainer>
    </CoDialog>
  )
}

export default BlogCreateDialog
