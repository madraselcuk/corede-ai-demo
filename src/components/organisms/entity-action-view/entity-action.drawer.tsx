'use client'

import { EntityActionViewProps } from '@/components/interface'
import Drawer from '@/components/ui/Drawer'
import { DialogDividerContainer } from './_shared/dialog-divider-container'
import { DialogContentContainer } from './_shared/dialog-content-container'

export const EntityActionDrawer = ({
  title,
  isOpen,
  onClose,
  children,
}: EntityActionViewProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DialogContentContainer>
        <h3>{title}</h3>
        <DialogDividerContainer />
        {children}
      </DialogContentContainer>
    </Drawer>
  )
}
