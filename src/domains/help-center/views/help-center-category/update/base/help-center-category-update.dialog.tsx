'use client'

import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { HelpCenterCategoryUpdateFormContainer } from '../help-center-category-update-form.container'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { useI18n } from '@/localization/hooks/useI18n'
import HelpCenterCategoryUpdateFormUI from './help-center-category-update-form.ui'

export const HelpCenterCategoryUpdateDialog = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog title={t('helpCenter:helpCenterCategoryUpdateTitle')} {...props}>
      <HelpCenterCategoryUpdateFormContainer
        entityId={entityId}
        onUpdateSuccess={() => {
          notifyOnSuccess({
            entity: t('helpCenter:helpCenterCategory'),
            actionType: 'update',
          })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <HelpCenterCategoryUpdateFormUI {...contentProps} uiType="dialog" />
        )}
      </HelpCenterCategoryUpdateFormContainer>
    </EntityActionDialog>
  )
}
