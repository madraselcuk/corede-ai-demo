'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import SubscriptionFormUpdateFormContainer from '../subscription-form-update-form.container'
import SubscriptionFormUpdateFormUIBase from './subscription-form-update-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'

interface SubscriptionFormUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  subscriptionFormId?: string
}

export const SubscriptionFormUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  subscriptionFormId,
}: SubscriptionFormUpdateDialogProps) => {
  const { t } = useI18n()

  return (
    <CoDialog
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t('form:subscriptionFormUpdate'),
        },
      }}
    >
      <SubscriptionFormUpdateFormContainer subscriptionFormId={subscriptionFormId}>
        {(contentProps) => <SubscriptionFormUpdateFormUIBase {...contentProps} />}
      </SubscriptionFormUpdateFormContainer>
    </CoDialog>
  )
}

export default SubscriptionFormUpdateDialog
