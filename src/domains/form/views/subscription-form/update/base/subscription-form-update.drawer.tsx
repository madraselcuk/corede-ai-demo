'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import SubscriptionFormUpdateFormUIBase from './subscription-form-update-form.ui'
import SubscriptionFormUpdateFormContainer from '../subscription-form-update-form.container'
import { useI18n } from '@/localization/hooks/useI18n'

interface SubscriptionFormUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  subscriptionFormId?: string
}

export const SubscriptionFormUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  subscriptionFormId,
}: SubscriptionFormUpdateDrawerProps) => {
  const { t } = useI18n()

  return (
    <CoDrawer
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t('form:subscriptionFormCreate'),
        },
      }}
    >
      <SubscriptionFormUpdateFormContainer subscriptionFormId={subscriptionFormId}>
        {(contentProps) => (
          <SubscriptionFormUpdateFormUIBase {...contentProps} uiType="drawer" />
        )}
      </SubscriptionFormUpdateFormContainer>
    </CoDrawer>
  )
}

export default SubscriptionFormUpdateDrawer
