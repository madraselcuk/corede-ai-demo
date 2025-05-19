'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import ContactFormUpdateFormUIBase from './contact-form-update-form.ui'
import ContactFormUpdateFormContainer from '../contact-form-update-form.container'
import { useI18n } from '@/localization/hooks/useI18n'

interface ContactFormUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  contactFormId?: string
}

export const ContactFormUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  contactFormId,
}: ContactFormUpdateDrawerProps) => {
  const { t } = useI18n()

  return (
    <CoDrawer
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
          <ContactFormUpdateFormUIBase {...contentProps} uiType="drawer" />
        )}
      </ContactFormUpdateFormContainer>
    </CoDrawer>
  )
}

export default ContactFormUpdateDrawer
