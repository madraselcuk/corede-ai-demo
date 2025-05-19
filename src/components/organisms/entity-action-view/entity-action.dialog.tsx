'use client'

import { EntityActionViewProps } from '@/components/interface'
import Dialog from '@/components/ui/Dialog'
import { DialogContentContainer } from './_shared/dialog-content-container'
import { DialogDividerContainer } from './_shared/dialog-divider-container'

export const EntityActionDialog = ({
  title,
  isOpen,
  onClose,
  children,
}: EntityActionViewProps) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogContentContainer>
        <h3>{title}</h3>
        <DialogDividerContainer />
        {children}
      </DialogContentContainer>
    </Dialog>
  )
}
