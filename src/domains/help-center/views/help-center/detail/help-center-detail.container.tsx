'use client'

import { IHelpCenterDetailResult } from '@corede_package'
import { useHelpCenterDetailQuery } from '@/domains/help-center/api/'
import { useI18n } from '@/localization/hooks/useI18n'
import {
  CommonDetailFuncContainerProps,
  CommonDetailUIComponentProps,
} from '@/@types/common.func.containers'
import { BaseDetailFuncContainer } from '@/components/organisms/base-func-container/base-detail.func.container'

export interface HelpCenterDetailUIComponentProps
  extends CommonDetailUIComponentProps<IHelpCenterDetailResult> {}

export const HelpCenterDetailContainer = (
  props: CommonDetailFuncContainerProps<IHelpCenterDetailResult>,
) => {
  const { t } = useI18n()

  return (
    <BaseDetailFuncContainer
      entityId={props.entityId}
      entityName={{
        value: t('helpCenter:helpCenter'),
      }}
      useEntityDetailQuery={useHelpCenterDetailQuery}
    >
      {props.children}
    </BaseDetailFuncContainer>
  )
}

export default HelpCenterDetailContainer
