'use client'

import PermissionDetailContainer from "../permission-detail.container"
import PermissionDetailContent from "./permission-detail-container.ui"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface PermissionDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  permissionId?: string
}

export const PermissionDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  permissionId
}: PermissionDetailDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <div className="p-4">
        <PermissionDetailContainer permissionId={permissionId}>
          {(contentProps) => <PermissionDetailContent {...contentProps} />}
        </PermissionDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default PermissionDetailDrawer
