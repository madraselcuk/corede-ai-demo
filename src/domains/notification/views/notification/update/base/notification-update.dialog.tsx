'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import NotificationUpdateFormContainer from "../notification-update-form.container"
import NotificationUpdateFormUI from "./notification-update-form.ui"

interface NotificationUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  notificationId?: string
}

export const NotificationUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  notificationId
}: NotificationUpdateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <NotificationUpdateFormContainer notificationId={notificationId}>
        {(contentProps) => <NotificationUpdateFormUI {...contentProps} uiType="dialog" />}
      </NotificationUpdateFormContainer>
    </CoDialog>
  )
}

export default NotificationUpdateDialog
