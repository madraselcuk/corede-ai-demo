'use client'

import RoleDetailContainer from "../role-detail.container"
import RoleDetailContent from "./role-detail-container.ui"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface RoleDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  roleId?: string
}

export const RoleDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  roleId
}: RoleDetailDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <RoleDetailContainer roleId={roleId}>
        {(contentProps) => <RoleDetailContent {...contentProps} />}
      </RoleDetailContainer>
    </CoDialog>
  )
}

export default RoleDetailDialog
