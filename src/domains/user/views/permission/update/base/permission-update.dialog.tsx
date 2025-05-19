'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import PermissionUpdateFormContainer from '../permission-update-form.container'
import PermissionUpdateFormUI from './permission-update-form.ui'

interface PermissionUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  permissionId?: string
}

export const PermissionUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  permissionId,
}: PermissionUpdateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <PermissionUpdateFormContainer permissionId={permissionId}>
        {(contentProps) => (
          <PermissionUpdateFormUI {...contentProps} uiType="dialog" />
        )}
      </PermissionUpdateFormContainer>
    </CoDialog>
  )
}

export default PermissionUpdateDialog
