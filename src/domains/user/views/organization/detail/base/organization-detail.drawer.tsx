'use client'

import OrganizationDetailContainer from "../organization-detail.container"
import OrganizationDetailContent from "./organization-detail-container.ui"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface OrganizationDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  organizationId?: string
}

export const OrganizationDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  organizationId
}: OrganizationDetailDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <div className="p-4">
        <OrganizationDetailContainer organizationId={organizationId}>
          {(contentProps) => <OrganizationDetailContent {...contentProps} />}
        </OrganizationDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default OrganizationDetailDrawer
