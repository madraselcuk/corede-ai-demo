'use client'

import UserDetailContainer from "../user-detail.container"
import UserDetailContent from "./user-detail-container.ui"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface UserDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  userId?: string
}

export const UserDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  userId
}: UserDetailDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <div className="p-4">
        <UserDetailContainer userId={userId}>
          {(contentProps) => <UserDetailContent {...contentProps} />}
        </UserDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default UserDetailDrawer
