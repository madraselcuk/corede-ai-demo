'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import RoleUpdateFormContainer from '../role-update-form.container'
import RoleUpdateFormUI from './role-update-form.ui'

interface RoleUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  roleId?: string
}

export const RoleUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  roleId,
}: RoleUpdateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <RoleUpdateFormContainer roleId={roleId}>
        {(contentProps) => (
          <RoleUpdateFormUI {...contentProps} uiType="drawer" />
        )}
      </RoleUpdateFormContainer>
    </CoDrawer>
  )
}

export default RoleUpdateDrawer
