'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import UserCreateFormContainer from '../user-create-form.container'
import UserCreateFormUI from './user-create-form.ui'

interface UserCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const UserCreateDrawer = ({
  open,
  onOpenChange,
  onClose,
}: UserCreateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <UserCreateFormContainer>
        {(contentProps) => (
          <UserCreateFormUI {...contentProps} uiType="drawer" />
        )}
      </UserCreateFormContainer>
    </CoDrawer>
  )
}

export default UserCreateDrawer
