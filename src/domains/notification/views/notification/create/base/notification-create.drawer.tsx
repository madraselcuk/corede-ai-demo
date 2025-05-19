'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import NotificationCreateFormContainer from '../notification-create-form.container'
import NotificationCreateFormUI from './notification-create-form.ui'

interface NotificationCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const NotificationCreateDrawer = ({
  open,
  onOpenChange,
  onClose,
}: NotificationCreateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <NotificationCreateFormContainer>
        {(contentProps) => (
          <NotificationCreateFormUI {...contentProps} uiType="drawer" />
        )}
      </NotificationCreateFormContainer>
    </CoDrawer>
  )
}

export default NotificationCreateDrawer
