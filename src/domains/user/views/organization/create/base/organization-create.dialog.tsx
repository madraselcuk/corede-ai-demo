'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import OrganizationCreateFormContainer from '../organization-create-form.container'
import OrganizationCreateFormUI from './organization-create-form.ui'

interface OrganizationCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const OrganizationCreateDialog = ({
  open,
  onOpenChange,
  onClose,
}: OrganizationCreateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <OrganizationCreateFormContainer>
        {(contentProps) => (
          <OrganizationCreateFormUI {...contentProps} uiType="dialog" />
        )}
      </OrganizationCreateFormContainer>
    </CoDialog>
  )
}

export default OrganizationCreateDialog
