'use client'

import { i18n } from "@/localization"
import AuthorDetailContainer from "../author-detail.container"
import AuthorDetailContainerUIBase from "./author-detail-container.ui"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface AuthorDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  authorId?: string
}

export const AuthorDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  authorId
}: AuthorDetailDialogProps) => {
  return (
    <CoDialog
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: i18n.t("blog:authorCreate")
        }
      }}
    >
      <AuthorDetailContainer authorId={authorId}>
        {(contentProps) => <AuthorDetailContainerUIBase {...contentProps} />}
      </AuthorDetailContainer>
    </CoDialog>
  )
}

export default AuthorDetailDialog
