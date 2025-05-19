'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import NotificationUpdateFormContainer from '../notification-update-form.container'
import NotificationUpdateFormUI from './notification-update-form.ui'

interface NotificationUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  notificationId?: string
}

export const NotificationUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  notificationId,
}: NotificationUpdateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <NotificationUpdateFormContainer notificationId={notificationId}>
        {(contentProps) => (
          <NotificationUpdateFormUI {...contentProps} uiType="drawer" />
        )}
      </NotificationUpdateFormContainer>
    </CoDrawer>
  )
}

export default NotificationUpdateDrawer
