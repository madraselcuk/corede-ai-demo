'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import RoleCreateFormContainer from '../role-create-form.container'
import RoleCreateFormUI from './role-create-form.ui'

interface RoleCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const RoleCreateDrawer = ({
  open,
  onOpenChange,
  onClose,
}: RoleCreateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <RoleCreateFormContainer>
        {(contentProps) => (
          <RoleCreateFormUI {...contentProps} uiType="drawer" />
        )}
      </RoleCreateFormContainer>
    </CoDrawer>
  )
}

export default RoleCreateDrawer
