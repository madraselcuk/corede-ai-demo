'use client'

import HelpCenterDetailContainer from '../help-center-detail.container'
import HelpCenterDetailContent from './help-center-detail-container.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'

export const HelpCenterDetailDrawer = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer {...props} title={t('helpCenter:helpCenterDetailTitle')}>
      <HelpCenterDetailContainer entityId={entityId}>
        {(contentProps) => <HelpCenterDetailContent {...contentProps} />}
      </HelpCenterDetailContainer>
    </EntityActionDrawer>
  )
}
