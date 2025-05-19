'use client'

import { FaqUpdateFormContainer } from '../faq-update-form.container'
import { FaqUpdateFormUI } from './faq-update-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'

export const FaqUpdateDrawer = (props: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer {...props} title={t('faq:faqUpdateTitle')}>
      <FaqUpdateFormContainer
        entityId={props.entityId}
        onUpdateSuccess={() => {
          notifyOnSuccess({ entity: t('faq:faq'), actionType: 'update' })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <FaqUpdateFormUI {...contentProps} uiType="drawer" />
        )}
      </FaqUpdateFormContainer>
    </EntityActionDrawer>
  )
}
