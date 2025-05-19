'use client'

import ContactFormDetailContainer from '../contact-form-detail.container'
import ContactFormDetailContainerUIBase from './contact-form-detail-container.ui'
import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import { useI18n } from '@/localization/hooks/useI18n'
interface ContactFormDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  contactFormId?: string
}

export const ContactFormDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  contactFormId,
}: ContactFormDetailDrawerProps) => {
  const { t } = useI18n()

  return (
    <CoDrawer
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t('form:contactFormDetail'),
        },
      }}
    >
      <div className="p-4">
        <ContactFormDetailContainer contactFormId={contactFormId}>
          {(contentProps) => (
            <ContactFormDetailContainerUIBase {...contentProps} />
          )}
        </ContactFormDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default ContactFormDetailDrawer
