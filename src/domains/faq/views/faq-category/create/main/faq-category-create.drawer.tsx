'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { EntityActionViewProps } from '@/components/interface'
import { FaqCategoryCreateFormUI } from './faq-category-create-form.ui'
import FaqCategoryCreateFormContainer from '../faq-category-create-form.container'

export const FaqCategoryCreateDrawer = (props: EntityActionViewProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer
      title={t('faq:faqCreateTitle')}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
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
