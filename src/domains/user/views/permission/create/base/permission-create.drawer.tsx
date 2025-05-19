'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import PermissionCreateFormContainer from '../permission-create-form.container'
import PermissionCreateFormUI from './permission-create-form.ui'

interface PermissionCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const PermissionCreateDrawer = ({
  open,
  onOpenChange,
  onClose,
}: PermissionCreateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <PermissionCreateFormContainer>
        {(contentProps) => (
          <PermissionCreateFormUI {...contentProps} uiType="drawer" />
        )}
      </PermissionCreateFormContainer>
    </CoDrawer>
  )
}

export default PermissionCreateDrawer
