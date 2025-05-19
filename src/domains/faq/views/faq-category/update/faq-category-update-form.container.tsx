'use client'

import {
  CommonUpdateUIComponentProps,
  CommonUpdateFuncContainerProps,
} from '@/@types/common.func.containers'
import { createBaseTranslationSchema } from '@/components/atoms/input-translatable-text/base-translation-input.validation'
import { BaseUpdateFuncContainer } from '@/components/organisms/base-func-container/base-update.func.container'
import {
  useFaqCategoryUpdateMutation,
  useFaqCategoryDetailQuery,
} from '@/domains/faq/api'
import { useI18n } from '@/localization/hooks/useI18n'
import { IGraphqlVariables, IEntity } from '@common_package'
import {
  IFaqCategoryUpdateInput,
  IFaqCategoryUpdateFilterInput,
  IFaqCategoryDetailResult,
} from '@corede_package'
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { TypedUseMutation } from '@reduxjs/toolkit/query/react'
import { z } from 'zod'

export interface FaqCategoryUpdateFormInputs
  extends IGraphqlVariables<
    IFaqCategoryUpdateInput,
    IFaqCategoryUpdateFilterInput
  > {}

export interface FaqCategoryUpdateUIComponentProps
  extends CommonUpdateUIComponentProps<
    FaqCategoryUpdateFormInputs,
    IFaqCategoryDetailResult
  > {}

export const FaqCategoryUpdateFormContainer = (
  props: CommonUpdateFuncContainerProps<
    FaqCategoryUpdateFormInputs,
    IFaqCategoryDetailResult
  >,
) => {
  const { t } = useI18n()

  return (
    <BaseUpdateFuncContainer<
      IFaqCategoryUpdateInput,
      FaqCategoryUpdateFormInputs,
      IFaqCategoryDetailResult
    >
      entityId={props.entityId}
      entityName={{
        value: t('faq:faqCategory'),
      }}
      useEntityUpdateMutation={
        useFaqCategoryUpdateMutation as TypedUseMutation<
          IEntity,
          FaqCategoryUpdateFormInputs,
          BaseQueryFn
        >
      }
      useEntityDetailQuery={useFaqCategoryDetailQuery}
      zodForm={{
        schema: z.object({
          input: z.object({
            name: z.string().min(1, t('common:invalidFormFieldMessage')),
            icon: z.string().optional(),
            nameTranslation: createBaseTranslationSchema(),
          }),
        }),
        defaultValues: {
          input: {
            name: undefined,
            icon: undefined,
            nameTranslation: undefined,
          },
        },
        getInitialValues: (detailData) => {
          return {
            input: {
              name: detailData.name,
              icon: detailData.icon,
              nameTranslation: detailData.nameTranslation,
            },
          }
        },
      }}
      onUpdateSuccess={props.onUpdateSuccess}
      onUpdateError={props.onUpdateError}
    >
      {props.children}
    </BaseUpdateFuncContainer>
  )
}
