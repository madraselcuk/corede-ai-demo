'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import PermissionUpdateFormContainer from '../permission-update-form.container'
import PermissionUpdateFormUI from './permission-update-form.ui'

interface PermissionUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  permissionId?: string
}

export const PermissionUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  permissionId,
}: PermissionUpdateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <PermissionUpdateFormContainer permissionId={permissionId}>
        {(contentProps) => (
          <PermissionUpdateFormUI {...contentProps} uiType="drawer" />
        )}
      </PermissionUpdateFormContainer>
    </CoDrawer>
  )
}

export default PermissionUpdateDrawer
