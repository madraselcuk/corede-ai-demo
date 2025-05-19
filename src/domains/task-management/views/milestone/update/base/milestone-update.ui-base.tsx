import { IMilestone } from "@/@package/corede"
import MilestoneUpdateFormContainer from "../milestone-update-form.container"
import MilestoneUpdateFormUIBase from "./milestone-update-form.ui-base"

const MilestoneUpdateUIBase = (params: {
  projectId: string,
  milestone: IMilestone
}) => {
  return (
    <div>
      <MilestoneUpdateFormContainer projectId={params.projectId} milestone={params.milestone}>
        {(props) => <MilestoneUpdateFormUIBase {...props} />}
      </MilestoneUpdateFormContainer>
    </div>
  )
}

export default MilestoneUpdateUIBase
