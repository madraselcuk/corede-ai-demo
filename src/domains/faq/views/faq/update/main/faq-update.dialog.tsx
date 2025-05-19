'use client'

import { FaqUpdateFormContainer } from '../faq-update-form.container'
import { FaqUpdateFormUI } from './faq-update-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'

export const FaqUpdateDialog = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog title={t('faq:faqUpdateTitle')} {...props}>
      <FaqUpdateFormContainer
        entityId={entityId}
        onUpdateSuccess={() => {
          notifyOnSuccess({ entity: t('faq:faq'), actionType: 'update' })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <FaqUpdateFormUI {...contentProps} uiType="dialog" />
        )}
      </FaqUpdateFormContainer>
    </EntityActionDialog>
  )
}
