'use client'

import { i18n } from "@/localization"
import AuthorDetailContainer from "../author-detail.container"
import AuthorDetailContainerUIBase from "./author-detail-container.ui"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface AuthorDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  authorId?: string
}

export const AuthorDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  authorId
}: AuthorDetailDrawerProps) => {
  return (
    <CoDrawer
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: i18n.t("blog:authorDetail")
        }
      }}
    >
      <div className="p-4">
        <AuthorDetailContainer authorId={authorId}>
          {(contentProps) => <AuthorDetailContainerUIBase {...contentProps} />}
        </AuthorDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default AuthorDetailDrawer
