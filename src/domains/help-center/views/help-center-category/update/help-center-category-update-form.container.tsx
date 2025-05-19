'use client'

import {
  CommonUpdateUIComponentProps,
  CommonUpdateFuncContainerProps,
} from '@/@types/common.func.containers'
import { createBaseTranslationSchema } from '@/components/atoms/input-translatable-text/base-translation-input.validation'
import { BaseUpdateFuncContainer } from '@/components/organisms/base-func-container/base-update.func.container'
import {
  useHelpCenterCategoryUpdateMutation,
  useHelpCenterCategoryDetailQuery,
} from '@/domains/help-center/api'
import { useI18n } from '@/localization/hooks/useI18n'
import { IGraphqlVariables, IEntity } from '@common_package'
import {
  IHelpCenterCategoryUpdateInput,
  IHelpCenterCategoryUpdateFilterInput,
  IHelpCenterCategoryDetailResult,
} from '@corede_package'
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { TypedUseMutation } from '@reduxjs/toolkit/query/react'
import { z } from 'zod'

export interface HelpCenterCategoryUpdateFormInputs
  extends IGraphqlVariables<
    IHelpCenterCategoryUpdateInput,
    IHelpCenterCategoryUpdateFilterInput
  > {}

export interface HelpCenterCategoryUpdateUIComponentProps
  extends CommonUpdateUIComponentProps<
    HelpCenterCategoryUpdateFormInputs,
    IHelpCenterCategoryDetailResult
  > {}

export const HelpCenterCategoryUpdateFormContainer = (
  props: CommonUpdateFuncContainerProps<
    HelpCenterCategoryUpdateFormInputs,
    IHelpCenterCategoryDetailResult
  >,
) => {
  const { t } = useI18n()

  return (
    <BaseUpdateFuncContainer<
      IHelpCenterCategoryUpdateInput,
      HelpCenterCategoryUpdateFormInputs,
      IHelpCenterCategoryDetailResult
    >
      entityId={props.entityId}
      entityName={{
        value: t('helpCenter:helpCenterCategory'),
      }}
      useEntityUpdateMutation={
        useHelpCenterCategoryUpdateMutation as TypedUseMutation<
          IEntity,
          HelpCenterCategoryUpdateFormInputs,
          BaseQueryFn
        >
      }
      useEntityDetailQuery={useHelpCenterCategoryDetailQuery}
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
