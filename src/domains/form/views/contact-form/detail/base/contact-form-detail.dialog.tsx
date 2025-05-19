'use client'

import { t } from 'i18next'
import ContactFormDetailContainer from '../contact-form-detail.container'
import ContactFormDetailContainerUIBase from './contact-form-detail-container.ui'
import { CoDialog } from '@/components/molecules/dialog/dialog'

interface ContactFormDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  contactFormId?: string
}

export const ContactFormDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  contactFormId,
}: ContactFormDetailDialogProps) => {
  return (
    <CoDialog
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t('form:contactFormDetail'),
        },
      }}
    >
      <ContactFormDetailContainer contactFormId={contactFormId}>
        {(contentProps) => (
          <ContactFormDetailContainerUIBase {...contentProps} />
        )}
      </ContactFormDetailContainer>
    </CoDialog>
  )
}

export default ContactFormDetailDialog
