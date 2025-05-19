'use client'

import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import WebinarCreateFormUI from "./webinar-create-form.ui"
import WebinarCreateFormContainer from "../webinar-create-form.container"
import { useI18n } from "@/localization/hooks/useI18n"

interface WebinarCreateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const WebinarCreateDrawer = ({
  open,
  onOpenChange,
  onClose
}: WebinarCreateDrawerProps) => {
  const { t } = useI18n()

  return (
    <CoDrawer
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t("webinar:webinarCreate")
        }
      }}
    >
      <WebinarCreateFormContainer>
        {(contentProps) => <WebinarCreateFormUI {...contentProps} />}
      </WebinarCreateFormContainer>
    </CoDrawer>
  )
}

export default WebinarCreateDrawer 