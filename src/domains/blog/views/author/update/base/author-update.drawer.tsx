'use client'

import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import AuthorUpdateFormUIBase from "./author-update-form.ui"
import AuthorUpdateFormContainer from "../author-update-form.container"
import { i18n } from "@/localization"

interface AuthorUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  authorId?: string
}

export const AuthorUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  authorId
}: AuthorUpdateDrawerProps) => {
  return (
    <CoDrawer
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
    </CoDrawer>
  )
}

export default AuthorUpdateDrawer
