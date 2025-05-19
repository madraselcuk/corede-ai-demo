'use client'

import NotificationDetailContainer from "../notification-detail.container"
import NotificationDetailContent from "./notification-detail-container.ui"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface NotificationDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  notificationId?: string
}

export const NotificationDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  notificationId
}: NotificationDetailDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <div className="p-4">
        <NotificationDetailContainer notificationId={notificationId}>
          {(contentProps) => <NotificationDetailContent {...contentProps} />}
        </NotificationDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default NotificationDetailDrawer
