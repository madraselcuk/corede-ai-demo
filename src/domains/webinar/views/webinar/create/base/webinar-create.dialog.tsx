'use client'

import { CoDialog } from "@/components/molecules/dialog/dialog"
import WebinarCreateFormContainer from "../webinar-create-form.container"
import WebinarCreateFormUI from "./webinar-create-form.ui"
import { useI18n } from "@/localization/hooks/useI18n"

interface WebinarCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const WebinarCreateDialog = ({
  open,
  onOpenChange,
  onClose
}: WebinarCreateDialogProps) => {
  const { t } = useI18n()

  return (
    <CoDialog
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
    </CoDialog>
  )
}

export default WebinarCreateDialog 