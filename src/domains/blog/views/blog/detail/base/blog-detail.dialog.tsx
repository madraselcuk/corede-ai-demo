'use client'

import BlogDetailContainer from '../blog-detail.container'
import BlogDetailContent from './blog-detail-container.ui'
import { CoDialog } from '@/components/molecules/dialog/dialog'

interface BlogDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogId?: string
}

export const BlogDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  blogId,
}: BlogDetailDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogDetailContainer blogId={blogId}>
        {(contentProps) => <BlogDetailContent {...contentProps} />}
      </BlogDetailContainer>
    </CoDialog>
  )
}

export default BlogDetailDialog
