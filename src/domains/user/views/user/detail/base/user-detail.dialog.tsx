'use client'

import UserDetailContainer from "../user-detail.container"
import UserDetailContent from "./user-detail-container.ui"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface UserDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  userId?: string
}

export const UserDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  userId
}: UserDetailDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <UserDetailContainer userId={userId}>
        {(contentProps) => <UserDetailContent {...contentProps} />}
      </UserDetailContainer>
    </CoDialog>
  )
}

export default UserDetailDialog
