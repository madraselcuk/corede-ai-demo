'use client'

import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { FaqCategoryUpdateFormContainer } from '../faq-category-update-form.container'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { useI18n } from '@/localization/hooks/useI18n'
import FaqCategoryUpdateFormUI from './faq-category-update-form.ui'

export const FaqCategoryUpdateDialog = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog title={t('faq:faqCategoryUpdateTitle')} {...props}>
      <FaqCategoryUpdateFormContainer
        entityId={entityId}
        onUpdateSuccess={() => {
          notifyOnSuccess({
            entity: t('faq:faqCategory'),
            actionType: 'update',
          })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <FaqCategoryUpdateFormUI {...contentProps} uiType="dialog" />
        )}
      </FaqCategoryUpdateFormContainer>
    </EntityActionDialog>
  )
}
