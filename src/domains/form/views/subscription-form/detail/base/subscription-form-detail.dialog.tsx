'use client'

import { t } from 'i18next'
import SubscriptionFormDetailContainer from '../subscription-form-detail.container'
import SubscriptionFormDetailContainerUIBase from './subscription-form-detail-container.ui'
import { CoDialog } from '@/components/molecules/dialog/dialog'

interface SubscriptionFormDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  subscriptionFormId?: string
}

export const SubscriptionFormDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  subscriptionFormId,
}: SubscriptionFormDetailDialogProps) => {
  return (
    <CoDialog
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t('form:subscriptionFormDetail'),
        },
      }}
    >
      <SubscriptionFormDetailContainer subscriptionFormId={subscriptionFormId}>
        {(contentProps) => (
          <SubscriptionFormDetailContainerUIBase {...contentProps} />
        )}
      </SubscriptionFormDetailContainer>
    </CoDialog>
  )
}

export default SubscriptionFormDetailDialog
