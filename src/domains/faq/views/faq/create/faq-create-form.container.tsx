/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { IEntity, IGraphqlVariables, Language } from '@common_package'
import { IFaqCreateInput } from '@corede_package'
import { useFaqCreateMutation } from '@/domains/faq/api'
import { z } from 'zod'
import { useI18n } from '@/localization/hooks/useI18n'
import {
  CommonCreateFuncContainerProps,
  CommonCreateUIComponentProps,
} from '@/@types/common.func.containers'
import { BaseCreateFuncContainer } from '@/components/organisms/base-func-container/base-create.func.container'
import { BaseQueryFn, TypedUseMutation } from '@reduxjs/toolkit/query/react'

export interface FaqCreateFormInputs
  extends IGraphqlVariables<IFaqCreateInput> {}

export interface FaqCreateUIComponentProps
  extends CommonCreateUIComponentProps<FaqCreateFormInputs> {}

export const FaqCreateFormContainer = (
  props: CommonCreateFuncContainerProps<FaqCreateFormInputs>,
) => {
  const { t, currentLanguage } = useI18n()

  return (
    <BaseCreateFuncContainer<FaqCreateFormInputs>
      entityName={{
        value: t('faq:faq'),
      }}
      useEntityCreateMutation={
        useFaqCreateMutation as TypedUseMutation<
          IEntity,
          FaqCreateFormInputs,
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
            popular: z.boolean().optional(),
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
            popular: false,
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

export default FaqCreateFormContainer
