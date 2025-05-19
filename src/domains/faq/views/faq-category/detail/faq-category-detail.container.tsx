'use client'

import { IFaqCategoryDetailResult } from '@corede_package'
import { useFaqCategoryDetailQuery } from '@/domains/faq/api'
import { useI18n } from '@/localization/hooks/useI18n'
import {
  CommonDetailUIComponentProps,
  CommonDetailFuncContainerProps,
} from '@/@types/common.func.containers'
import { BaseDetailFuncContainer } from '@/components/organisms/base-func-container/base-detail.func.container'

export interface FaqCategoryDetailUIComponentProps
  extends CommonDetailUIComponentProps<IFaqCategoryDetailResult> {}

export const FaqCategoryDetailContainer = (
  props: CommonDetailFuncContainerProps<IFaqCategoryDetailResult>,
) => {
  const { t } = useI18n()

  return (
    <BaseDetailFuncContainer
      entityId={props.entityId}
      entityName={{
        value: t('faq:faqCategory'),
      }}
      useEntityDetailQuery={useFaqCategoryDetailQuery}
    >
      {props.children}
    </BaseDetailFuncContainer>
  )
}
