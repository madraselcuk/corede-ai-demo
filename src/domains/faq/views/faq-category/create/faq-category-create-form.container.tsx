'use client'

import { IEntity, IGraphqlVariables } from '@common_package'
import { IFaqCategoryCreateInput } from '@corede_package'
import { useFaqCategoryCreateMutation } from '@/domains/faq/api'
import { z } from 'zod'
import { useI18n } from '@/localization/hooks/useI18n'
import { BaseCreateFuncContainer } from '@/components/organisms/base-func-container/base-create.func.container'
import {
  CommonCreateFuncContainerProps,
  CommonCreateUIComponentProps,
} from '@/@types/common.func.containers'
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { TypedUseMutation } from '@reduxjs/toolkit/query/react'
import { createBaseTranslationSchema } from '@/components/atoms/input-translatable-text/base-translation-input.validation'

export interface FaqCategoryCreateFormInputs
  extends IGraphqlVariables<IFaqCategoryCreateInput> {}

export interface FaqCategoryCreateUIComponentProps
  extends CommonCreateUIComponentProps<FaqCategoryCreateFormInputs> {}

export const FaqCategoryCreateFormContainer = (
  props: CommonCreateFuncContainerProps<FaqCategoryCreateFormInputs>,
) => {
  const { t } = useI18n()

  return (
    <BaseCreateFuncContainer<FaqCategoryCreateFormInputs>
      entityName={{
        value: t('faq:faqCategory'),
      }}
      useEntityCreateMutation={
        useFaqCategoryCreateMutation as TypedUseMutation<
          IEntity,
          FaqCategoryCreateFormInputs,
          BaseQueryFn
        >
      }
      zodForm={{
        schema: z.object({
          input: z.object({
            name: z.string().min(1, t('common:invalidFormFieldMessage')),
            icon: z.string().optional(),
            parentCategoryId: z.string().optional(),
            nameTranslation: createBaseTranslationSchema(),
          }),
        }),
        defaultValues: {
          input: {
            name: '',
            icon: undefined,
            parentCategoryId: undefined,
            nameTranslation: undefined,
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

export default FaqCategoryCreateFormContainer
