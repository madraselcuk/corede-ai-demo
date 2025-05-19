'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import ContactFormCreateFormContainer from '../contact-form-create-form.container'
import ContactFormCreateFormUIBase from './contact-form-create-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'

interface ContactFormCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const ContactFormCreateDialog = ({
  open,
  onOpenChange,
  onClose,
}: ContactFormCreateDialogProps) => {
  const { t } = useI18n()

  return (
    <CoDialog
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t('form:contactFormCreate'),
        },
      }}
    >
      <ContactFormCreateFormContainer>
        {(contentProps) => (
          <ContactFormCreateFormUIBase {...contentProps} uiType="dialog" />
        )}
      </ContactFormCreateFormContainer>
    </CoDialog>
  )
}

export default ContactFormCreateDialog
