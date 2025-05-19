'use client'


import MilestoneAddFormContainer from "../milestone-add-form.container"
import MilestoneAddFormUIBase from "./milestone-add-form.ui-base"

const MilestoneAddUIBase = (projectId: string) => {
  return (
    <div>
      <MilestoneAddFormContainer projectId={projectId}>
        {(props) => <MilestoneAddFormUIBase {...props} />}
      </MilestoneAddFormContainer>
    </div>
  )
}

export default MilestoneAddUIBase
