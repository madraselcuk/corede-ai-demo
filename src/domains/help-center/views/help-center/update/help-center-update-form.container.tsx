'use client'

import { IEntity, IGraphqlVariables, Language } from '@common_package'
import {
  IHelpCenterDetailResult,
  IHelpCenterUpdateFilterInput,
  IHelpCenterUpdateInput,
} from '@corede_package'
import {
  useHelpCenterUpdateMutation,
  useHelpCenterDetailQuery,
} from '@/domains/help-center/api'
import { z } from 'zod'
import { useI18n } from '@/localization/hooks/useI18n'
import {
  CommonUpdateFuncContainerProps,
  CommonUpdateUIComponentProps,
} from '@/@types/common.func.containers'
import { BaseUpdateFuncContainer } from '@/components/organisms/base-func-container/base-update.func.container'
import { BaseQueryFn, TypedUseMutation } from '@reduxjs/toolkit/query/react'

export interface HelpCenterUpdateFormInputs
  extends IGraphqlVariables<
    IHelpCenterUpdateInput,
    IHelpCenterUpdateFilterInput
  > {}

export interface HelpCenterUpdateUIComponentProps
  extends CommonUpdateUIComponentProps<
    HelpCenterUpdateFormInputs,
    IHelpCenterDetailResult
  > {}

export const HelpCenterUpdateFormContainer = (
  props: CommonUpdateFuncContainerProps<
    HelpCenterUpdateFormInputs,
    IHelpCenterDetailResult
  >,
) => {
  const { t, currentLanguage } = useI18n()

  return (
    <BaseUpdateFuncContainer<
      IHelpCenterUpdateInput,
      HelpCenterUpdateFormInputs,
      IHelpCenterDetailResult
    >
      entityId={props.entityId}
      entityName={{
        value: t('helpCenter:helpCenter'),
      }}
      useEntityUpdateMutation={
        useHelpCenterUpdateMutation as TypedUseMutation<
          IEntity,
          HelpCenterUpdateFormInputs,
          BaseQueryFn
        >
      }
      useEntityDetailQuery={useHelpCenterDetailQuery}
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
            question: undefined,
            answer: undefined,
            readingTime: undefined,
            categoryId: undefined,
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
