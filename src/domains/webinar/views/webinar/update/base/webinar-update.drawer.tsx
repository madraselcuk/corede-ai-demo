'use client'

import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import WebinarUpdateFormUI from "./webinar-update-form.ui"
import WebinarUpdateFormContainer from "../webinar-update-form.container"
import { useI18n } from "@/localization/hooks/useI18n"

interface WebinarUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  webinarId?: string
}

export const WebinarUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  webinarId
}: WebinarUpdateDrawerProps) => {
  const { t } = useI18n()

  return (
    <CoDrawer
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
    </CoDrawer>
  )
}

export default WebinarUpdateDrawer 