'use client'

import { FaqCreateFormContainer } from '../faq-create-form.container'
import { FaqCreateFormUI } from './faq-create-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { EntityActionViewBaseProps } from '@/components/interface'

export const FaqCreateDrawer = (props: EntityActionViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer {...props} title={t('faq:faqCreateTitle')}>
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
