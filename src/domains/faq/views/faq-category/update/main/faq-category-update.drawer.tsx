'use client'

import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { FaqCategoryUpdateFormContainer } from '../faq-category-update-form.container'
import { FaqCategoryUpdateFormUI } from './faq-category-update-form.ui'

export const FaqCategoryUpdateDrawer = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()
  return (
    <EntityActionDrawer {...props} title={t('faq:faqCategoryUpdateTitle')}>
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
          <FaqCategoryUpdateFormUI {...contentProps} uiType="drawer" />
        )}
      </FaqCategoryUpdateFormContainer>
    </EntityActionDrawer>
  )
}
