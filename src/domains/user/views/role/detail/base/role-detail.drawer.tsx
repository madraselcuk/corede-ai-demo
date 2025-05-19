'use client'

import RoleDetailContainer from "../role-detail.container"
import RoleDetailContent from "./role-detail-container.ui"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface RoleDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  roleId?: string
}

export const RoleDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  roleId
}: RoleDetailDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <div className="p-4">
        <RoleDetailContainer roleId={roleId}>
          {(contentProps) => <RoleDetailContent {...contentProps} />}
        </RoleDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default RoleDetailDrawer
