'use client'

import { IEntity, IGraphqlVariables, Language } from '@common_package'
import {
  IFaqDetailResult,
  IFaqUpdateFilterInput,
  IFaqUpdateInput,
} from '@corede_package'
import { useFaqUpdateMutation, useFaqDetailQuery } from '@/domains/faq/api'
import { z } from 'zod'
import { useI18n } from '@/localization/hooks/useI18n'
import {
  CommonUpdateFuncContainerProps,
  CommonUpdateUIComponentProps,
} from '@/@types/common.func.containers'
import { BaseUpdateFuncContainer } from '@/components/organisms/base-func-container/base-update.func.container'
import { BaseQueryFn, TypedUseMutation } from '@reduxjs/toolkit/query/react'

export interface FaqUpdateFormInputs
  extends IGraphqlVariables<IFaqUpdateInput, IFaqUpdateFilterInput> {}

export interface FaqUpdateUIComponentProps
  extends CommonUpdateUIComponentProps<FaqUpdateFormInputs, IFaqDetailResult> {}

export const FaqUpdateFormContainer = (
  props: CommonUpdateFuncContainerProps<FaqUpdateFormInputs, IFaqDetailResult>,
) => {
  const { t, currentLanguage } = useI18n()

  return (
    <BaseUpdateFuncContainer<
      IFaqUpdateInput,
      FaqUpdateFormInputs,
      IFaqDetailResult
    >
      entityId={props.entityId}
      entityName={{
        value: t('faq:faq'),
      }}
      useEntityUpdateMutation={
        useFaqUpdateMutation as TypedUseMutation<
          IEntity,
          FaqUpdateFormInputs,
          BaseQueryFn
        >
      }
      useEntityDetailQuery={useFaqDetailQuery}
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
            question: undefined,
            answer: undefined,
            readingTime: undefined,
            categoryId: undefined,
            popular: false,
            language: currentLanguage,
          },
        },
        getInitialValues: (detailData) => {
          return {
            input: {
              question: detailData.question,
              answer: detailData.answer,
              readingTime: detailData.readingTime,
              categoryId: detailData.category._id,
              popular: detailData.popular,
              language: detailData.language,
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
