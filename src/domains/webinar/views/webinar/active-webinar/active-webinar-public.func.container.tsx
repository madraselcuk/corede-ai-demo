'use client'

import { IActiveWebinarResult } from "@corede_package"
import { useActiveWebinarPublicQuery } from "@/domains/webinar/api/webinar-api"
import { useEffect, useState, JSX } from "react"
import { useI18n } from "@/localization/hooks/useI18n"
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { IGraphqlVariables } from "@/@package/common"

export interface ActiveWebinarPublicInputs
  extends IGraphqlVariables<IActiveWebinarResult> { }

export interface ActiveWebinarPublicContainerUIProps {
  activeWebinarResult?: IActiveWebinarResult
  activeWebinarIsLoading?: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface ActiveWebinarPublicContainerProps {
  children: (props: ActiveWebinarPublicContainerUIProps) => JSX.Element
}

export const ActiveWebinarPublicContainer = (props: ActiveWebinarPublicContainerProps) => {
  const { t, currentLanguage } = useI18n()
  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)
  // queries
  const {
    data: activeWebinarData,
    isLoading: activeWebinarIsLoading,
    error: activeWebinarError
  } = useActiveWebinarPublicQuery(
    {
      input: { language: currentLanguage }
    },
  )

  // use effects

  useEffect(() => {
    if (activeWebinarError) {
      setConnectionError(true)
      toast.push(
        <Notification title={t("common:error")} type="danger">
          {t("webinar:errorLoadingActiveWebinars")}
        </Notification>
      )
    }
  }, [activeWebinarError, t])

  useEffect(() => {
    if (!activeWebinarData) {
      setNoDataError(true)
      toast.push(
        <Notification title={t("common:error")} type="danger">
          {t("webinar:errorLoadingActiveWebinars")}
        </Notification>
      )
    }
  }, [activeWebinarData, t])

  return (
    <>
      {props.children({
        activeWebinarResult: activeWebinarData,
        activeWebinarIsLoading: activeWebinarIsLoading,
        connectionError: connectionError,
        noDataError: noDataError,
      })}
    </>
  )
}

export default ActiveWebinarPublicContainer
