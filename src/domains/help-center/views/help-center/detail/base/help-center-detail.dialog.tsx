'use client'

import HelpCenterDetailContainer from '../help-center-detail.container'
import HelpCenterDetailContent from './help-center-detail-container.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'

export const HelpCenterDetailDialog = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog title={t('helpCenter:helpCenterDetailTitle')} {...props}>
      <HelpCenterDetailContainer entityId={entityId}>
        {(contentProps) => <HelpCenterDetailContent {...contentProps} />}
      </HelpCenterDetailContainer>
    </EntityActionDialog>
  )
}
