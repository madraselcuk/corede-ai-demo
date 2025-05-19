'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import ContactFormUpdateFormContainer from '../contact-form-update-form.container'
import ContactFormUpdateFormUIBase from './contact-form-update-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'

interface ContactFormUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  contactFormId?: string
}

export const ContactFormUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  contactFormId,
}: ContactFormUpdateDialogProps) => {
  const { t } = useI18n()

  return (
    <CoDialog
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t('form:contactFormUpdate'),
        },
      }}
    >
      <ContactFormUpdateFormContainer contactFormId={contactFormId}>
        {(contentProps) => (
          <ContactFormUpdateFormUIBase {...contentProps} uiType="dialog" />
        )}
      </ContactFormUpdateFormContainer>
    </CoDialog>
  )
}

export default ContactFormUpdateDialog
