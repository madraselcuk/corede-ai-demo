/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from 'react'
import { CommonDetailFuncContainerProps } from '@/@types/common.func.containers'
import { BaseQueryFn, TypedUseQuery } from '@reduxjs/toolkit/query/react'
import { AllTranslationKeys } from '@/localization/types'
import { useParams } from 'next/navigation'
import { IEntity, IGraphqlVariables } from '@common_package'

export interface BaseDetailFuncContainerProps<TDetail>
  extends CommonDetailFuncContainerProps<TDetail> {
  entityName: {
    translationKey?: AllTranslationKeys
    value?: string
  }
  useEntityDetailQuery: TypedUseQuery<
    TDetail,
    IGraphqlVariables<IEntity>,
    BaseQueryFn
  >
}

export const BaseDetailFuncContainer = <TDetail,>({
  entityId,
  // entityName,
  useEntityDetailQuery,
  children,
}: BaseDetailFuncContainerProps<TDetail>) => {
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

  return children({
    detailQueryIsLoading: entityDetailIsLoading,
    detailResult: entityDetailData,
    connectionError,
    noDataError,
  })
}
