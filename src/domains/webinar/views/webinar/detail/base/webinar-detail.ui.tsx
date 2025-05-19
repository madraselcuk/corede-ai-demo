'use client'

import WebinarDetailContainer from "../webinar-detail.container"
import WebinarDetailContainerUI from "./webinar-detail-container.ui"
import { useI18n } from "@/localization/hooks/useI18n"

const WebinarDetailUI = () => {
  const { t } = useI18n()

  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">{t("webinar:webinarDetails")}</h2>
        <WebinarDetailContainer>
          {(props) => <WebinarDetailContainerUI {...props} />}
        </WebinarDetailContainer>
      </div>
    </div>
  )
}

export default WebinarDetailUI 