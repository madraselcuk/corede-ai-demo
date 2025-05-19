'use client'

import { IFaqDetailResult } from '@corede_package'
import { useFaqDetailQuery } from '@/domains/faq/api/'
import { useI18n } from '@/localization/hooks/useI18n'
import {
  CommonDetailFuncContainerProps,
  CommonDetailUIComponentProps,
} from '@/@types/common.func.containers'
import { BaseDetailFuncContainer } from '@/components/organisms/base-func-container/base-detail.func.container'

export interface FaqDetailUIComponentProps
  extends CommonDetailUIComponentProps<IFaqDetailResult> {}

export const FaqDetailContainer = (
  props: CommonDetailFuncContainerProps<IFaqDetailResult>,
) => {
  const { t } = useI18n()

  return (
    <BaseDetailFuncContainer
      entityId={props.entityId}
      entityName={{
        value: t('faq:faq'),
      }}
      useEntityDetailQuery={useFaqDetailQuery}
    >
      {props.children}
    </BaseDetailFuncContainer>
  )
}

export default FaqDetailContainer
