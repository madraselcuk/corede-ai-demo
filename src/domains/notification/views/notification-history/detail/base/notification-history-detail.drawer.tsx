'use client'

import NotificationHistoryDetailContainer from "../notification-history-detail.container"
import NotificationHistoryDetailContent from "./notification-history-detail-container.ui"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface NotificationHistoryDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  notificationHistoryId?: string
}

export const NotificationHistoryDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  notificationHistoryId
}: NotificationHistoryDetailDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <div className="p-4">
        <NotificationHistoryDetailContainer notificationHistoryId={notificationHistoryId}>
          {(contentProps) => <NotificationHistoryDetailContent {...contentProps} />}
        </NotificationHistoryDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default NotificationHistoryDetailDrawer
