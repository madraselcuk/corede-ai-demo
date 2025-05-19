'use client'

import NotificationHistoryDetailContainer from "../notification-history-detail.container"
import NotificationHistoryDetailContent from "./notification-history-detail-container.ui"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface NotificationHistoryDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  notificationHistoryId?: string
}

export const NotificationHistoryDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  notificationHistoryId
}: NotificationHistoryDetailDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <NotificationHistoryDetailContainer notificationHistoryId={notificationHistoryId}>
        {(contentProps) => <NotificationHistoryDetailContent {...contentProps} />}
      </NotificationHistoryDetailContainer>
    </CoDialog>
  )
}

export default NotificationHistoryDetailDialog
