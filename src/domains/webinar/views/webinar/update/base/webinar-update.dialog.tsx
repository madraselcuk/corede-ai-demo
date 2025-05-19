'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import WebinarUpdateFormContainer from "../webinar-update-form.container"
import WebinarUpdateFormUI from "./webinar-update-form.ui"
import { useI18n } from "@/localization/hooks/useI18n"

interface WebinarUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  webinarId?: string
}

export const WebinarUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  webinarId
}: WebinarUpdateDialogProps) => {
  const { t } = useI18n()

  return (
    <CoDialog
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t("webinar:webinarUpdate")
        }
      }}
    >
      <WebinarUpdateFormContainer webinarId={webinarId}>
        {(contentProps) => <WebinarUpdateFormUI {...contentProps} />}
      </WebinarUpdateFormContainer>
    </CoDialog>
  )
}

export default WebinarUpdateDialog 