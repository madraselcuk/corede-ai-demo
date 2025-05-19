'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import OrganizationUpdateFormContainer from '../organization-update-form.container'
import OrganizationUpdateFormUI from './organization-update-form.ui'

interface OrganizationUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  organizationId?: string
}

export const OrganizationUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  organizationId,
}: OrganizationUpdateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <OrganizationUpdateFormContainer organizationId={organizationId}>
        {(contentProps) => (
          <OrganizationUpdateFormUI {...contentProps} uiType="drawer" />
        )}
      </OrganizationUpdateFormContainer>
    </CoDrawer>
  )
}

export default OrganizationUpdateDrawer
