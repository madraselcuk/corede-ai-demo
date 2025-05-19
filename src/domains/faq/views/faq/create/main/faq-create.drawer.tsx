'use client'

import { FaqCreateFormContainer } from '../faq-create-form.container'
import { FaqCreateFormUI } from './faq-create-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { EntityActionViewProps } from '@/components/interface'

export const FaqCreateDrawer = (props: EntityActionViewProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer
      title={t('faq:faqCreateTitle')}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <FaqCreateFormContainer
        onCreateSuccess={() => {
          notifyOnSuccess({ entity: t('faq:faq') })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <FaqCreateFormUI {...contentProps} uiType="drawer" />
        )}
      </FaqCreateFormContainer>
    </EntityActionDrawer>
  )
}
