'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import ContactFormCreateFormUIBase from './contact-form-create-form.ui'
import ContactFormCreateFormContainer from '../contact-form-create-form.container'
import { useI18n } from '@/localization/hooks/useI18n'

interface ContactFormCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const ContactFormCreateDrawer = ({
  open,
  onOpenChange,
  onClose,
}: ContactFormCreateDrawerProps) => {
  const { t } = useI18n()

  return (
    <CoDrawer
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
          <ContactFormCreateFormUIBase {...contentProps} uiType="drawer" />
        )}
      </ContactFormCreateFormContainer>
    </CoDrawer>
  )
}

export default ContactFormCreateDrawer
