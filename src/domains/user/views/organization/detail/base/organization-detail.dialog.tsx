'use client'

import OrganizationDetailContainer from "../organization-detail.container"
import OrganizationDetailContent from "./organization-detail-container.ui"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface OrganizationDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  organizationId?: string
}

export const OrganizationDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  organizationId
}: OrganizationDetailDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <OrganizationDetailContainer organizationId={organizationId}>
        {(contentProps) => <OrganizationDetailContent {...contentProps} />}
      </OrganizationDetailContainer>
    </CoDialog>
  )
}

export default OrganizationDetailDialog
