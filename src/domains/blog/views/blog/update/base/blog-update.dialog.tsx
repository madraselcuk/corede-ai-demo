'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import BlogUpdateFormContainer from "../blog-update-form.container"
import BlogUpdateFormUIBase from "./blog-update-form.ui"

interface BlogUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  blogId?: string
}

export const BlogUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  blogId
}: BlogUpdateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <BlogUpdateFormContainer blogId={blogId}>
        {(contentProps) => <BlogUpdateFormUIBase {...contentProps} />}
      </BlogUpdateFormContainer>
    </CoDialog>
  )
}

export default BlogUpdateDialog
