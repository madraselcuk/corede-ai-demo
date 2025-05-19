'use client'

import NotificationDetailContainer from "../notification-detail.container"
import NotificationDetailContent from "./notification-detail-container.ui"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface NotificationDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  notificationId?: string
}

export const NotificationDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  notificationId
}: NotificationDetailDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <NotificationDetailContainer notificationId={notificationId}>
        {(contentProps) => <NotificationDetailContent {...contentProps} />}
      </NotificationDetailContainer>
    </CoDialog>
  )
}

export default NotificationDetailDialog
