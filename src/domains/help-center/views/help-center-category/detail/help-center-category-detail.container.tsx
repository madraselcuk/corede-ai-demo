'use client'

import { IHelpCenterCategoryDetailResult } from '@corede_package'
import { useHelpCenterCategoryDetailQuery } from '@/domains/help-center/api'
import { useI18n } from '@/localization/hooks/useI18n'
import {
  CommonDetailUIComponentProps,
  CommonDetailFuncContainerProps,
} from '@/@types/common.func.containers'
import { BaseDetailFuncContainer } from '@/components/organisms/base-func-container/base-detail.func.container'

export interface HelpCenterCategoryDetailUIComponentProps
  extends CommonDetailUIComponentProps<IHelpCenterCategoryDetailResult> {}

export const HelpCenterCategoryDetailContainer = (
  props: CommonDetailFuncContainerProps<IHelpCenterCategoryDetailResult>,
) => {
  const { t } = useI18n()

  return (
    <BaseDetailFuncContainer
      entityId={props.entityId}
      entityName={{
        value: t('helpCenter:helpCenterCategory'),
      }}
      useEntityDetailQuery={useHelpCenterCategoryDetailQuery}
    >
      {props.children}
    </BaseDetailFuncContainer>
  )
}
