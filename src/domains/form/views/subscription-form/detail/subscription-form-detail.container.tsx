'use client'

import { IGraphqlVariables } from '@common_package'
import { ISubscriptionFormDetailResult } from '@corede_package'
import { JSX, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSubscriptionFormDetailQuery } from '@/domains/form/api'

export interface SubscriptionFormDetailInputs
  extends IGraphqlVariables<ISubscriptionFormDetailResult> {}

export interface SubscriptionFormDetailContainerUIProps {
  subscriptionFormDetailData?: ISubscriptionFormDetailResult
  subscriptionFormDetailIsLoading?: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface SubscriptionFormDetailContainerProps {
  children: (props: SubscriptionFormDetailContainerUIProps) => JSX.Element
  subscriptionFormId?: string
}

export const SubscriptionFormDetailContainer = (
  props: SubscriptionFormDetailContainerProps,
) => {
  const { id } = useParams<{ id: string }>()

  const [subscriptionFormId, setSubscriptionFormId] = useState<string | undefined>(
    undefined,
  )
  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: subscriptionFormDetailData,
    isLoading: subscriptionFormDetailIsLoading,
    error: subscriptionFormDetailError,
  } = useSubscriptionFormDetailQuery(
    {
      input: { _id: subscriptionFormId! },
    },
    {
      skip: !subscriptionFormId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setSubscriptionFormId(id)
    }
    if (props.subscriptionFormId) {
      setSubscriptionFormId(props.subscriptionFormId)
    }
    if (!id && !props.subscriptionFormId) {
      setNoDataError(true)
    }
  }, [id, props.subscriptionFormId])

  useEffect(() => {
    if (subscriptionFormDetailError) {
      setConnectionError(true)
    }
  }, [subscriptionFormDetailError])

  return (
    <>
      {props.children({
        subscriptionFormDetailData,
        subscriptionFormDetailIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default SubscriptionFormDetailContainer
