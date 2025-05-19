'use client'

import { IGraphqlVariables } from '@common_package'
import { INotificationDetailResult } from '@corede_package'
import { useNotificationDetailQuery } from '@/domains/notification/api'
import { useEffect, useState, JSX } from 'react'
import { useParams } from 'next/navigation'
import { useI18n } from '@/localization/hooks/useI18n'

export interface NotificationDetailInputs
  extends IGraphqlVariables<INotificationDetailResult> {}

export interface NotificationDetailContainerUIProps {
  notificationDetailData?: INotificationDetailResult
  notificationDetailIsLoading?: boolean

  connectionError?: boolean
  noDataError?: boolean
}

export interface NotificationDetailContainerProps {
  children: (props: NotificationDetailContainerUIProps) => JSX.Element
  notificationId?: string
}

export const NotificationDetailContainer = (
  props: NotificationDetailContainerProps,
) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentNotificationId, setCurrentNotificationId] = useState<
    string | undefined
  >(undefined)

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: notificationDetailData,
    isLoading: notificationDetailIsLoading,
    error: notificationDetailError,
  } = useNotificationDetailQuery(
    {
      input: { _id: currentNotificationId! },
    },
    {
      skip: !currentNotificationId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentNotificationId(id)
    }
    if (props.notificationId) {
      setCurrentNotificationId(props.notificationId)
    }
    if (!id && !props.notificationId) {
      setNoDataError(true)
    }
  }, [id, props.notificationId])

  useEffect(() => {
    if (notificationDetailError) {
      setConnectionError(true)
    }
  }, [notificationDetailError, t])

  return (
    <>
      {props.children({
        notificationDetailData,
        notificationDetailIsLoading,

        connectionError,
        noDataError,
      })}
    </>
  )
}

export default NotificationDetailContainer
