import { CoDialog } from "@/components/molecules/dialog/dialog"
import MilestoneUpdateFormContainer from "../milestone-update-form.container"
import MilestoneUpdateFormUIBase from "./milestone-update-form.ui-base"
import { IMilestone } from "@/@package/corede"

interface MilestoneUpdateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  projectId: string
  milestone: IMilestone
}

export const MilestoneUpdateDialog = ({
  open,
  onOpenChange,
  onClose,
  projectId,
  milestone
}: MilestoneUpdateDialogProps) => {
  return (
    <CoDialog open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <MilestoneUpdateFormContainer
        projectId={projectId}
        milestone={milestone}
      >
        {(contentProps) => (
          <MilestoneUpdateFormUIBase {...contentProps} />
        )}
      </MilestoneUpdateFormContainer>
    </CoDialog>
  )
}

export default MilestoneUpdateDialog
