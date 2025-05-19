'use client'

import { EntityActionViewBaseProps } from '@/components/interface'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { useI18n } from '@/localization/hooks/useI18n'
import { FaqCategoryCreateFormContainer } from '../faq-category-create-form.container'
import FaqCategoryCreateFormUI from './faq-category-create-form.ui'

export const FaqCategoryCreateDialog = (props: EntityActionViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog title={t('faq:faqCategoryCreateTitle')} {...props}>
      <FaqCategoryCreateFormContainer
        onCreateSuccess={() => {
          notifyOnSuccess({ entity: t('faq:faqCategory') })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <FaqCategoryCreateFormUI {...contentProps} uiType="dialog" />
        )}
      </FaqCategoryCreateFormContainer>
    </EntityActionDialog>
  )
}
