'use client'

import { IEntity, IGraphqlVariables } from '@common_package'
import { IHelpCenterCategoryCreateInput } from '@corede_package'
import { useHelpCenterCategoryCreateMutation } from '@/domains/help-center/api'
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

export interface HelpCenterCategoryCreateFormInputs
  extends IGraphqlVariables<IHelpCenterCategoryCreateInput> {}

export interface HelpCenterCategoryCreateUIComponentProps
  extends CommonCreateUIComponentProps<HelpCenterCategoryCreateFormInputs> {}

export const HelpCenterCategoryCreateFormContainer = (
  props: CommonCreateFuncContainerProps<HelpCenterCategoryCreateFormInputs>,
) => {
  const { t } = useI18n()

  return (
    <BaseCreateFuncContainer<HelpCenterCategoryCreateFormInputs>
      entityName={{
        value: t('helpCenter:helpCenterCategory'),
      }}
      useEntityCreateMutation={
        useHelpCenterCategoryCreateMutation as TypedUseMutation<
          IEntity,
          HelpCenterCategoryCreateFormInputs,
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

export default HelpCenterCategoryCreateFormContainer
