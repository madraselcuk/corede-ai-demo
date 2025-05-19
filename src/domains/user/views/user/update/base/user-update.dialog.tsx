'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import UserUpdateFormContainer from "../user-update-form.container"
import UserUpdateFormUI from "./user-update-form.ui"

interface UserUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  userId?: string
}

export const UserUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  userId
}: UserUpdateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <UserUpdateFormContainer userId={userId}>
        {(contentProps) => <UserUpdateFormUI {...contentProps} uiType="dialog" />}
      </UserUpdateFormContainer>
    </CoDialog>
  )
}

export default UserUpdateDialog
