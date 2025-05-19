/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { IEntity, IGraphqlVariables, Language } from '@common_package'
import { IHelpCenterCreateInput } from '@corede_package'
import { useHelpCenterCreateMutation } from '@/domains/help-center/api'
import { z } from 'zod'
import { useI18n } from '@/localization/hooks/useI18n'
import {
  CommonCreateFuncContainerProps,
  CommonCreateUIComponentProps,
} from '@/@types/common.func.containers'
import { BaseCreateFuncContainer } from '@/components/organisms/base-func-container/base-create.func.container'
import { BaseQueryFn, TypedUseMutation } from '@reduxjs/toolkit/query/react'

export interface HelpCenterCreateFormInputs
  extends IGraphqlVariables<IHelpCenterCreateInput> {}

export interface HelpCenterCreateUIComponentProps
  extends CommonCreateUIComponentProps<HelpCenterCreateFormInputs> {}

export const HelpCenterCreateFormContainer = (
  props: CommonCreateFuncContainerProps<HelpCenterCreateFormInputs>,
) => {
  const { t, currentLanguage } = useI18n()

  return (
    <BaseCreateFuncContainer<HelpCenterCreateFormInputs>
      entityName={{
        value: t('helpCenter:helpCenter'),
      }}
      useEntityCreateMutation={
        useHelpCenterCreateMutation as TypedUseMutation<
          IEntity,
          HelpCenterCreateFormInputs,
          BaseQueryFn
        >
      }
      zodForm={{
        schema: z.object({
          input: z.object({
            question: z.string().min(1, t('common:invalidFormFieldMessage')),
            answer: z.string().min(1, t('common:invalidFormFieldMessage')),
            readingTime: z.string().min(1, t('common:invalidFormFieldMessage')),
            categoryId: z.string().min(1, t('common:invalidFormFieldMessage')),
            language: z.nativeEnum(Language),
          }),
        }),
        defaultValues: {
          input: {
            question: '',
            answer: '',
            readingTime: '',
            categoryId: undefined,
            language: currentLanguage,
          },
        },
      }}
      onCreateSuccess={props.onCreateSuccess}
      onCreateError={props.onCreateError}
    >
      {props.children}
    </BaseCreateFuncContainer>
  )
}

export default HelpCenterCreateFormContainer
