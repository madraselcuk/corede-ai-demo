'use client'

import { IGraphqlVariables } from '@common_package'
import { IWebinarResult } from '@corede_package'
import { useWebinarDetailQuery } from '@/domains/webinar/api'
import { useEffect, useState, JSX } from 'react'
import { useParams } from 'next/navigation'
import { useI18n } from '@/localization/hooks/useI18n'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface WebinarDetailInputs
  extends IGraphqlVariables<IWebinarResult> {}

export interface WebinarDetailContainerUIProps {
  webinarDetailData?: IWebinarResult
  webinarDetailIsLoading?: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface WebinarDetailContainerProps {
  children: (props: WebinarDetailContainerUIProps) => JSX.Element
  webinarId?: string
}

export const WebinarDetailContainer = (props: WebinarDetailContainerProps) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()
  const [webinarId, setWebinarId] = useState<string | undefined>(undefined)
  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: webinarDetailData,
    isLoading: webinarDetailIsLoading,
    error: webinarDetailError,
  } = useWebinarDetailQuery(
    {
      input: { _id: webinarId! },
    },
    {
      skip: !webinarId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setWebinarId(id)
    }
    if (props.webinarId) {
      setWebinarId(props.webinarId)
    }
    if (!id && !props.webinarId) {
      setNoDataError(true)
    }
  }, [id, props.webinarId])

  useEffect(() => {
    if (webinarDetailError) {
      setConnectionError(true)
      toast.push(
        <Notification title={t('common:error')} type="danger">
          {t('webinar:errorLoadingWebinarDetails')}
        </Notification>,
      )
    }
  }, [webinarDetailError, t])

  return (
    <>
      {props.children({
        webinarDetailData,
        webinarDetailIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default WebinarDetailContainer
