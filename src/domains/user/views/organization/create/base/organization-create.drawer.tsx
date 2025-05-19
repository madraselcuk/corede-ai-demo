'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import OrganizationCreateFormContainer from '../organization-create-form.container'
import OrganizationCreateFormUI from './organization-create-form.ui'

interface OrganizationCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const OrganizationCreateDrawer = ({
  open,
  onOpenChange,
  onClose,
}: OrganizationCreateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <OrganizationCreateFormContainer>
        {(contentProps) => (
          <OrganizationCreateFormUI {...contentProps} uiType="drawer" />
        )}
      </OrganizationCreateFormContainer>
    </CoDrawer>
  )
}

export default OrganizationCreateDrawer
