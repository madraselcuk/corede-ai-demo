'use client'

import { useI18n } from "@/localization/hooks/useI18n"
import WebinarDetailContainer from "../webinar-detail.container"
import WebinarDetailContainerUI from "./webinar-detail-container.ui"
import { CoDialog } from "@/components/molecules/dialog/dialog"

interface WebinarDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  webinarId?: string
}

export const WebinarDetailDialog = ({
  open,
  onOpenChange,
  onClose,
  webinarId
}: WebinarDetailDialogProps) => {
  const { t } = useI18n()

  return (
    <CoDialog
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t("webinar:webinarDetail")
        }
      }}
    >
      <WebinarDetailContainer webinarId={webinarId}>
        {(contentProps) => <WebinarDetailContainerUI {...contentProps} />}
      </WebinarDetailContainer>
    </CoDialog>
  )
}

export default WebinarDetailDialog 