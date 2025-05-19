/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect } from 'react'
import { DefaultValues, FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { CommonCreateFuncContainerProps } from '@/@types/common.func.containers'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { notifyOnError } from '@/components/organisms/query-result-toast/notify-on-error'
import { BaseQueryFn, TypedUseMutation } from '@reduxjs/toolkit/query/react'
import { useI18n } from '@/localization/hooks/useI18n'
import { AllTranslationKeys } from '@/localization/types'
import { IEntity } from '@common_package'

export interface BaseCreateFuncContainerProps<TInput extends FieldValues>
  extends CommonCreateFuncContainerProps<TInput> {
  entityName: {
    translationKey?: AllTranslationKeys
    value?: string
  }
  useEntityCreateMutation: TypedUseMutation<IEntity, TInput, BaseQueryFn>
  zodForm: {
    schema: z.ZodSchema<TInput>
    defaultValues: DefaultValues<TInput>
  }
}

export const BaseCreateFuncContainer = <TInput extends FieldValues>({
  entityName,
  useEntityCreateMutation,
  zodForm,
  onCreateSuccess,
  onCreateError,
  children,
}: BaseCreateFuncContainerProps<TInput>) => {
  const { t } = useI18n()

  const [
    createEntity,
    { isLoading, data: createEntityData, error: createEntityError, reset },
  ] = useEntityCreateMutation()

  const form = useForm<TInput>({
    mode: 'onChange',
    resolver: zodResolver(zodForm.schema),
    defaultValues: zodForm.defaultValues,
    reValidateMode: 'onChange',
  })

  const handleCreateEntity = useCallback(
    async (values: TInput) => {
      try {
        await createEntity(values)
      } catch (error) {
        console.error(error)
      }
    },
    [createEntity],
  )

  useEffect(() => {
    if (createEntityData?._id) {
      onCreateSuccess
        ? onCreateSuccess()
        : notifyOnSuccess({
            entity: entityName.translationKey
              ? t(entityName.translationKey)
              : entityName.value,
          })
      reset()
    }
  }, [createEntityData, onCreateSuccess])

  useEffect(() => {
    if (createEntityError) {
      onCreateError
        ? onCreateError({
            error: createEntityError as any,
          })
        : notifyOnError({
            entity: entityName.translationKey
              ? t(entityName.translationKey)
              : entityName.value,
          })
      // this is needed so that error state will be reset,
      // otherwise when this useEffect is triggered , error will not be empty and error notification will be sent
      reset()
    }
  }, [createEntityError, onCreateError])

  return children({
    form,
    handleCreate: handleCreateEntity,
    isLoading,
  })
}
