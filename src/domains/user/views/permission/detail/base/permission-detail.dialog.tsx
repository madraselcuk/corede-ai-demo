'use client'

import PermissionDetailContainer from "../permission-detail.container"
import PermissionDetailContent from "./permission-detail-container.ui"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface PermissionDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  permissionId?: string
}

export const PermissionDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  permissionId
}: PermissionDetailDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <PermissionDetailContainer permissionId={permissionId}>
        {(contentProps) => <PermissionDetailContent {...contentProps} />}
      </PermissionDetailContainer>
    </CoDialog>
  )
}

export default PermissionDetailDialog
