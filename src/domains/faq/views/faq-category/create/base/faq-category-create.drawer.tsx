'use client'

import { EntityActionViewBaseProps } from '@/components/interface'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { useI18n } from '@/localization/hooks/useI18n'
import { FaqCategoryCreateFormContainer } from '..'
import FaqCategoryCreateFormUI from './faq-category-create-form.ui'

export const FaqCategoryCreateDrawer = (props: EntityActionViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer {...props} title={t('faq:faqCategoryCreateTitle')}>
      <FaqCategoryCreateFormContainer
        onCreateSuccess={() => {
          notifyOnSuccess({ entity: t('faq:faqCategory') })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <FaqCategoryCreateFormUI {...contentProps} uiType="drawer" />
        )}
      </FaqCategoryCreateFormContainer>
    </EntityActionDrawer>
  )
}
