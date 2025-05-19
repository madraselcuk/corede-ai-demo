'use client'

import { CoDrawer } from '@/components/molecules/drawer-v2/drawer'
import SubscriptionFormCreateFormUIBase from './subscription-form-create-form.ui'
import SubscriptionFormCreateFormContainer from '../subscription-form-create-form.container'
import { useI18n } from '@/localization/hooks/useI18n'

interface SubscriptionFormCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const SubscriptionFormCreateDrawer = ({
  open,
  onOpenChange,
  onClose,
}: SubscriptionFormCreateDrawerProps) => {
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
      <SubscriptionFormCreateFormContainer>
        {(contentProps) => (
          <SubscriptionFormCreateFormUIBase {...contentProps} uiType="drawer" />
        )}
      </SubscriptionFormCreateFormContainer>
    </CoDrawer>
  )
}

export default SubscriptionFormCreateDrawer
