'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import BlogUpdateFormContainer from '../blog-update-form.container'
import BlogUpdateFormUI from './blog-update-form.ui'

interface BlogUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogId?: string
}

export const BlogUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  blogId,
}: BlogUpdateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogUpdateFormContainer blogId={blogId}>
        {(contentProps) => <BlogUpdateFormUI {...contentProps} />}
      </BlogUpdateFormContainer>
    </CoDrawer>
  )
}

export default BlogUpdateDrawer
