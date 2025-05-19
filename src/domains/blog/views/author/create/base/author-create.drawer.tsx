'use client'

import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import AuthorCreateFormUIBase from "./author-create-form.ui"
import AuthorCreateFormContainer from "../author-create-form.container"
import { i18n } from "@/localization"

interface AuthorCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const AuthorCreateDrawer = ({
  open,
  onOpenChange,
  onClose
}: AuthorCreateDrawerProps) => {
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
      <AuthorCreateFormContainer>
        {(contentProps) => <AuthorCreateFormUIBase {...contentProps} />}
      </AuthorCreateFormContainer>
    </CoDrawer>
  )
}

export default AuthorCreateDrawer
