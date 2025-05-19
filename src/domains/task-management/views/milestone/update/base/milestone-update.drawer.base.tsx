import { CoDrawer } from "@/components/molecules/drawer-v2/drawer"
import MilestoneUpdateFormContainer from "../milestone-update-form.container"
import MilestoneUpdateFormUIBase from "./milestone-update-form.ui-base"
import { IMilestone } from "@/@package/corede"

interface MilestoneUpdateDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  projectId?: string
  milestone?: IMilestone
}

export const MilestoneUpdateDrawer = ({
  open,
  onOpenChange,
  onClose,
  projectId,
  milestone
}: MilestoneUpdateDrawerProps) => {
  return (
    <CoDrawer open={open} onOpenChange={onOpenChange} onClose={onClose}>
      <MilestoneUpdateFormContainer
        projectId={projectId}
        milestone={milestone}
      >
        {(contentProps) => (
          <MilestoneUpdateFormUIBase {...contentProps} />
        )}
      </MilestoneUpdateFormContainer>
    </CoDrawer>
  )
}

export default MilestoneUpdateDrawer
