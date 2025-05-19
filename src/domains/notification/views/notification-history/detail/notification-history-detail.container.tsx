'use client'

import { IGraphqlVariables } from '@common_package'
import { INotificationHistoryDetailResult } from '@corede_package'
import { useNotificationHistoryDetailQuery } from '@/domains/notification/api'
import { useEffect, useState, JSX } from 'react'
import { useParams } from 'next/navigation'
import { useI18n } from '@/localization/hooks/useI18n'

export interface NotificationHistoryDetailInputs extends IGraphqlVariables<INotificationHistoryDetailResult> { }

export interface NotificationHistoryDetailContainerUIProps {
  notificationHistoryDetailData?: INotificationHistoryDetailResult
  notificationHistoryDetailIsLoading?: boolean

  connectionError?: boolean
  noDataError?: boolean
}

export interface NotificationHistoryDetailContainerProps {
  children: (props: NotificationHistoryDetailContainerUIProps) => JSX.Element
  notificationHistoryId?: string
}

export const NotificationHistoryDetailContainer = (props: NotificationHistoryDetailContainerProps) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentNotificationHistoryId, setCurrentNotificationHistoryId] = useState<string | undefined>(
    undefined,
  )

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: notificationHistoryDetailData,
    isLoading: notificationHistoryDetailIsLoading,
    error: notificationHistoryDetailError,
  } = useNotificationHistoryDetailQuery(
    {
      input: { _id: currentNotificationHistoryId! },
    },
    {
      skip: !currentNotificationHistoryId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentNotificationHistoryId(id)
    }
    if (props.notificationHistoryId) {
      setCurrentNotificationHistoryId(props.notificationHistoryId)
    }
    if (!id && !props.notificationHistoryId) {
      setNoDataError(true)
    }
  }, [id, props.notificationHistoryId])

  useEffect(() => {
    if (notificationHistoryDetailError) {
      setConnectionError(true)
    }
  }, [notificationHistoryDetailError, t])

  return (
    <>
      {props.children({
        notificationHistoryDetailData,
        notificationHistoryDetailIsLoading,

        connectionError,
        noDataError,
      })}
    </>
  )
}

export default NotificationHistoryDetailContainer
