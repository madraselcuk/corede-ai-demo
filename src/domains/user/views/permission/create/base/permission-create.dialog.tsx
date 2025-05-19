'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import PermissionCreateFormContainer from '../permission-create-form.container'
import PermissionCreateFormUI from './permission-create-form.ui'

interface PermissionCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const PermissionCreateDialog = ({
  open,
  onOpenChange,
  onClose,
}: PermissionCreateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <PermissionCreateFormContainer>
        {(contentProps) => (
          <PermissionCreateFormUI {...contentProps} uiType="dialog" />
        )}
      </PermissionCreateFormContainer>
    </CoDialog>
  )
}

export default PermissionCreateDialog
