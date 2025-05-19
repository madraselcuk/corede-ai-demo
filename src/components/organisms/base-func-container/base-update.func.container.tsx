/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useState } from 'react'
import { DefaultValues, FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { CommonUpdateFuncContainerProps } from '@/@types/common.func.containers'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { notifyOnError } from '@/components/organisms/query-result-toast/notify-on-error'
import {
  BaseQueryFn,
  TypedUseMutation,
  TypedUseQuery,
} from '@reduxjs/toolkit/query/react'
import { useI18n } from '@/localization/hooks/useI18n'
import { AllTranslationKeys } from '@/localization/types'
import { useParams } from 'next/navigation'
import { IEntity, IGraphqlVariables } from '@common_package'
import {
  objectIsChanged,
  removeEmptyAndExistingField,
} from '@/utils/zod.utilities'

export interface BaseUpdateFuncContainerProps<
  TVariable,
  TInput extends FieldValues & IGraphqlVariables<TVariable, IEntity>,
  TDetail,
> extends CommonUpdateFuncContainerProps<TInput, TDetail> {
  entityName: {
    translationKey?: AllTranslationKeys
    value?: string
  }
  useEntityUpdateMutation: TypedUseMutation<IEntity, TInput, BaseQueryFn>
  useEntityDetailQuery: TypedUseQuery<
    TDetail,
    IGraphqlVariables<IEntity>,
    BaseQueryFn
  >
  zodForm: {
    schema: z.ZodSchema<TInput>
    defaultValues: DefaultValues<TInput>
    getInitialValues?: (detailData: TDetail) => TInput
  }
}

export const BaseUpdateFuncContainer = <
  TVariable,
  TInput extends FieldValues & IGraphqlVariables<TVariable, IEntity>,
  TDetail,
>({
  entityId,
  entityName,
  useEntityUpdateMutation,
  useEntityDetailQuery,
  zodForm,
  onUpdateSuccess,
  onUpdateError,
  children,
}: BaseUpdateFuncContainerProps<TVariable, TInput, TDetail>) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentEntityId, setCurrentEntityId] = useState<string | undefined>(
    undefined,
  )

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: entityDetailData,
    isLoading: entityDetailIsLoading,
    error: entityDetailError,
  } = useEntityDetailQuery(
    {
      input: { _id: currentEntityId! },
    },
    {
      skip: !currentEntityId,
    },
  )

  const [
    updateEntity,
    { isLoading, data: updateEntityData, error: updateEntityError, reset },
  ] = useEntityUpdateMutation()

  const form = useForm<TInput>({
    mode: 'onChange',
    resolver: zodResolver(
      zodForm.schema.refine((data) => {
        const inputChanged = objectIsChanged(data.input, entityDetailData)
        return inputChanged
      }),
    ),
    defaultValues: zodForm.defaultValues,
    reValidateMode: 'onChange',
  })

  const handleUpdateEntity = useCallback(
    async (values: TInput) => {
      try {
        removeEmptyAndExistingField(values, entityDetailData)
        await updateEntity({
          filter: {
            _id: currentEntityId!,
          },
          input: values.input,
        } as TInput)
      } catch (error) {
        console.error(error)
      }
    },
    [entityDetailData, updateEntity, currentEntityId],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentEntityId(id)
    }
    if (entityId) {
      setCurrentEntityId(entityId)
    }
    if (!id && !entityId) {
      setNoDataError(true)
    }
  }, [id, entityId])

  useEffect(() => {
    if (entityDetailError) {
      setConnectionError(true)
    }
  }, [entityDetailError])

  // Populate form with detail data when available
  useEffect(() => {
    if (entityDetailData) {
      // Only reset form if we have initial values function and the data has actually changed
      if (zodForm.getInitialValues) {
        form.reset(zodForm.getInitialValues(entityDetailData))
      }
    }
  }, [entityDetailData])

  useEffect(() => {
    if (updateEntityData?._id) {
      onUpdateSuccess
        ? onUpdateSuccess()
        : notifyOnSuccess({
            entity: entityName.translationKey
              ? t(entityName.translationKey)
              : entityName.value,
          })
      reset()
    }
  }, [updateEntityData, onUpdateSuccess])

  useEffect(() => {
    if (updateEntityError) {
      onUpdateError
        ? onUpdateError({
            error: updateEntityError as any,
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
  }, [updateEntityError, onUpdateError])

  return children({
    detailQueryIsLoading: entityDetailIsLoading,
    detailResult: entityDetailData,
    form,
    handleUpdate: handleUpdateEntity,
    isUpdating: isLoading,
    connectionError,
    noDataError,
  })
}
