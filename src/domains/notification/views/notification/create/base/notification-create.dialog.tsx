'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import NotificationCreateFormContainer from '../notification-create-form.container'
import NotificationCreateFormUI from './notification-create-form.ui'

interface NotificationCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const NotificationCreateDialog = ({
  open,
  onOpenChange,
  onClose,
}: NotificationCreateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <NotificationCreateFormContainer>
        {(contentProps) => (
          <NotificationCreateFormUI {...contentProps} uiType="dialog" />
        )}
      </NotificationCreateFormContainer>
    </CoDialog>
  )
}

export default NotificationCreateDialog
