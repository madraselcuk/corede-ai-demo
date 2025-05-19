'use client'

import SubscriptionFormDetailContainer from '../subscription-form-detail.container'
import SubscriptionFormDetailContainerUIBase from './subscription-form-detail-container.ui'
import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import { useI18n } from '@/localization/hooks/useI18n'
interface SubscriptionFormDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  subscriptionFormId?: string
}

export const SubscriptionFormDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  subscriptionFormId,
}: SubscriptionFormDetailDrawerProps) => {
  const { t } = useI18n()

  return (
    <CoDrawer
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t('form:subscriptionFormDetail'),
        },
      }}
    >
      <div className="p-4">
        <SubscriptionFormDetailContainer subscriptionFormId={subscriptionFormId}>
          {(contentProps) => (
            <SubscriptionFormDetailContainerUIBase {...contentProps} />
          )}
        </SubscriptionFormDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default SubscriptionFormDetailDrawer
