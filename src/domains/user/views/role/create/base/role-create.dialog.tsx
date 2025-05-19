'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import RoleCreateFormContainer from '../role-create-form.container'
import RoleCreateFormUI from './role-create-form.ui'

interface RoleCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const RoleCreateDialog = ({
  open,
  onOpenChange,
  onClose,
}: RoleCreateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <RoleCreateFormContainer>
        {(contentProps) => (
          <RoleCreateFormUI {...contentProps} uiType="dialog" />
        )}
      </RoleCreateFormContainer>
    </CoDialog>
  )
}

export default RoleCreateDialog
