'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import SubscriptionFormCreateFormContainer from '../subscription-form-create-form.container'
import SubscriptionFormCreateFormUIBase from './subscription-form-create-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'

interface SubscriptionFormCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const SubscriptionFormCreateDialog = ({
  open,
  onOpenChange,
  onClose,
}: SubscriptionFormCreateDialogProps) => {
  const { t } = useI18n()

  return (
    <CoDialog
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t('form:subscriptionFormCreate'),
        },
      }}
    >
      <SubscriptionFormCreateFormContainer>
        {(contentProps) => (
          <SubscriptionFormCreateFormUIBase uiType="dialog" {...contentProps} />
        )}
      </SubscriptionFormCreateFormContainer>
    </CoDialog>
  )
}

export default SubscriptionFormCreateDialog
