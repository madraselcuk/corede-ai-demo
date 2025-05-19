'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import AuthorCreateFormContainer from "../author-create-form.container"
import AuthorCreateFormUIBase from "./author-create-form.ui"
import { i18n } from "@/localization"

interface AuthorCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const AuthorCreateDialog = ({
  open,
  onOpenChange,
  onClose
}: AuthorCreateDialogProps) => {
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
      <AuthorCreateFormContainer>
        {(contentProps) => <AuthorCreateFormUIBase {...contentProps} />}
      </AuthorCreateFormContainer>
    </CoDialog>
  )
}

export default AuthorCreateDialog
