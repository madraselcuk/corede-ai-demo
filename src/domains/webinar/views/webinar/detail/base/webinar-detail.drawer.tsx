'use client'

import { useI18n } from "@/localization/hooks/useI18n"
import WebinarDetailContainer from "../webinar-detail.container"
import WebinarDetailContainerUI from "./webinar-detail-container.ui"
import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"

interface WebinarDetailDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  webinarId?: string
}

export const WebinarDetailDrawer = ({
  open,
  onOpenChange,
  onClose,
  webinarId
}: WebinarDetailDrawerProps) => {
  const { t } = useI18n()

  return (
    <CoDrawer
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t("webinar:webinarDetail")
        }
      }}
    >
      <div className="p-4">
        <WebinarDetailContainer webinarId={webinarId}>
          {(contentProps) => <WebinarDetailContainerUI {...contentProps} />}
        </WebinarDetailContainer>
      </div>
    </CoDrawer>
  )
}

export default WebinarDetailDrawer 