'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import BlogCreateFormContainer from '../blog-create-form.container'
import BlogCreateFormUIBase from './blog-create-form.ui'

interface BlogCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const BlogCreateDrawer = ({
  open,
  onOpenChange,
  onClose,
}: BlogCreateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogCreateFormContainer>
        {(contentProps) => <BlogCreateFormUIBase {...contentProps} />}
      </BlogCreateFormContainer>
    </CoDrawer>
  )
}

export default BlogCreateDrawer
