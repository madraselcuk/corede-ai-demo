'use client'

import { FaqCreateFormContainer } from '../faq-create-form.container'
import { FaqCreateFormUI } from './faq-create-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { EntityActionViewBaseProps } from '@/components/interface'

export const FaqCreateDialog = (props: EntityActionViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog title={t('faq:faqCreateTitle')} {...props}>
      <FaqCreateFormContainer
        onCreateSuccess={() => {
          notifyOnSuccess({ entity: t('faq:faq') })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <FaqCreateFormUI {...contentProps} uiType="dialog" />
        )}
      </FaqCreateFormContainer>
    </EntityActionDialog>
  )
}
