'use client'

import { NoConnectionState } from "@/components/organisms/no-connection-state/no-connection-state"
import { useI18n } from "@/localization/hooks/useI18n"
import { NoDataState } from "@/components/organisms/no-data-state/no-data-state"
import { WebinarDetailContainerUIProps } from "../webinar-detail.container"


export const WebinarDetailContainerUI = ({
  webinarDetailData,
  webinarDetailIsLoading,
  connectionError,
  noDataError
}: WebinarDetailContainerUIProps) => {
  const { t } = useI18n()

  if (webinarDetailIsLoading) {
    return <div>Loading...</div>
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t("blog:noWebinarFound")} />
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <b>{t("webinar:status")}: </b>
        </div>
        <div>{webinarDetailData?.status}</div>
        <div>
          <b>{t("webinar:title")}: </b>
        </div>
        <div>{webinarDetailData?.title}</div>
        <div>
          <b>{t("webinar:description")}: </b>
        </div>
        <div>{webinarDetailData?.description}</div>
        <div>
          <b>{t("webinar:content")}: </b>
        </div>
        <div>{webinarDetailData?.content}</div>
        <div>
          <b>{t("webinar:language")}: </b>
        </div>
        <div>{webinarDetailData?.language}</div>
        <div>
          <b>{t("webinar:type")}: </b>
        </div>
        <div>{webinarDetailData?.type}</div>
        <div>
          <b>{t("webinar:quota")}: </b>
        </div>
        <div>{webinarDetailData?.quota}</div>
        <div>
          <b>{t("webinar:lastApplicationDate")}: </b>
        </div>
        <div>{webinarDetailData?.lastApplicationDate}</div>
        <div>
          <b>{t("webinar:startDate")}: </b>
        </div>
        <div>{webinarDetailData?.startDate}</div>
        <div>
          <b>{t("webinar:duration")}: </b>
        </div>
        <div>{webinarDetailData?.duration}</div>
        <div>
          <b>{t("webinar:participationLink")}: </b>
        </div>
        <div>{webinarDetailData?.participationLink}</div>
      </div>
    </div>
  )
}

export default WebinarDetailContainerUI 