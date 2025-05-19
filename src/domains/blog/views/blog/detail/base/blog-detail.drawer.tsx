'use client'

import BlogDetailContainer from '../blog-detail.container'
import BlogDetailContent from './blog-detail-container.ui'
import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'

interface BlogDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogId?: string
}

export const BlogDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  blogId,
}: BlogDetailDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <div className="p-4">
        <BlogDetailContainer blogId={blogId}>
          {(contentProps) => <BlogDetailContent {...contentProps} />}
        </BlogDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default BlogDetailDrawer
