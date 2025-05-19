'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import RoleUpdateFormContainer from '../role-update-form.container'
import RoleUpdateFormUI from './role-update-form.ui'

interface RoleUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  roleId?: string
}

export const RoleUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  roleId,
}: RoleUpdateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <RoleUpdateFormContainer roleId={roleId}>
        {(contentProps) => (
          <RoleUpdateFormUI {...contentProps} uiType="dialog" />
        )}
      </RoleUpdateFormContainer>
    </CoDialog>
  )
}

export default RoleUpdateDialog
