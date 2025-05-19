'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import UserUpdateFormContainer from '../user-update-form.container'
import UserUpdateFormUI from './user-update-form.ui'

interface UserUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  userId?: string
}

export const UserUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  userId,
}: UserUpdateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <UserUpdateFormContainer userId={userId}>
        {(contentProps) => (
          <UserUpdateFormUI {...contentProps} uiType="drawer" />
        )}
      </UserUpdateFormContainer>
    </CoDrawer>
  )
}

export default UserUpdateDrawer
