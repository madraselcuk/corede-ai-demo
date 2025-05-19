'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import OrganizationUpdateFormContainer from "../organization-update-form.container"
import OrganizationUpdateFormUI from "./organization-update-form.ui"

interface OrganizationUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  organizationId?: string
}

export const OrganizationUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  organizationId
}: OrganizationUpdateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <OrganizationUpdateFormContainer organizationId={organizationId}>
        {(contentProps) => <OrganizationUpdateFormUI {...contentProps} uiType="dialog" />}
      </OrganizationUpdateFormContainer>
    </CoDialog>
  )
}

export default OrganizationUpdateDialog
