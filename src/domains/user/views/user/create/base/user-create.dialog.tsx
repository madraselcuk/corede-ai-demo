'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import UserCreateFormContainer from '../user-create-form.container'
import UserCreateFormUI from './user-create-form.ui'

interface UserCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const UserCreateDialog = ({
  open,
  onOpenChange,
  onClose,
}: UserCreateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <UserCreateFormContainer>
        {(contentProps) => (
          <UserCreateFormUI {...contentProps} uiType="dialog" />
        )}
      </UserCreateFormContainer>
    </CoDialog>
  )
}

export default UserCreateDialog
