'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import AuthorUpdateFormContainer from "../author-update-form.container"
import AuthorUpdateFormUIBase from "./author-update-form.ui"
import { i18n } from "@/localization"

interface AuthorUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  authorId?: string
}

export const AuthorUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  authorId
}: AuthorUpdateDialogProps) => {
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
      <AuthorUpdateFormContainer authorId={authorId}>
        {(contentProps) => <AuthorUpdateFormUIBase {...contentProps} />}
      </AuthorUpdateFormContainer>
    </CoDialog>
  )
}

export default AuthorUpdateDialog
