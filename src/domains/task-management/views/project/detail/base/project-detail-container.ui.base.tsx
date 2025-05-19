import MilestoneListUI from "../../../milestone/list/base/milestone-list.ui"
import { ProjectDetailContainerUIProps } from "../project-detail.container"
import { i18n } from '@/localization'

export const ProjectDetailContent = ({
  projectId,
  projectDetailData,
  projectDetailIsLoading
}: ProjectDetailContainerUIProps) => {
  if (projectDetailIsLoading) {
    return <div>Loading...</div>
  }

  if (!projectDetailData) {
    return <div>No project data found</div>
  }

  console.log("projectDetailData: ", projectDetailData)

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <b>{i18n.t("project:title")}: </b>
        </div>
        <div>{projectDetailData.title}</div>

        <div>
          <b>{i18n.t("project:description")}: </b>
        </div>
        <div>{projectDetailData.description || "-"}</div>

        <div>
          <b>{i18n.t("project:status")}: </b>
        </div>
        <div>{projectDetailData.status}</div>

        <div>
          <b>{i18n.t("project:priority")}: </b>
        </div>
        <div>{projectDetailData.priority}</div>

        <div>
          <b>{i18n.t("project:progress")}: </b>
        </div>
        <div>{projectDetailData.progress}%</div>

        <div>
          <b>{i18n.t("project:isMain")}: </b>
        </div>
        <div>{projectDetailData.isMain ? "Yes" : "No"}</div>

        <div>
          <b>{i18n.t("project:startDate")}: </b>
        </div>
        <div>
          {projectDetailData.startDate
            ? projectDetailData.startDate.toISOString()
            : "-"}
        </div>

        <div>
          <b>{i18n.t("project:dueDate")}: </b>
        </div>
        <div>
          {projectDetailData.dueDate
            ? projectDetailData.dueDate.toISOString()
            : "-"}
        </div>

        <div>
          <b>{i18n.t("project:tags")}: </b>
        </div>
        <div>
          {projectDetailData.tags && projectDetailData.tags.length > 0
            ? projectDetailData.tags.join(", ")
            : "-"}
        </div>

        <div>
          <b>{i18n.t("project:assignees")}: </b>
        </div>
        <div>
          {projectDetailData.assignees && projectDetailData.assignees.length > 0
            ? projectDetailData.assignees
              .map((assignee) => assignee._id)
              .join(", ")
            : "-"}
        </div>

        <div>
          <b>{i18n.t("project:followers")}: </b>
        </div>
        <div>
          {projectDetailData.followers && projectDetailData.followers.length > 0
            ? projectDetailData.followers
              .map((follower) => follower._id)
              .join(", ")
            : "-"}
        </div>

        <div>
          <b>{i18n.t("project:mainProject")}: </b>
        </div>
        <div>{projectDetailData.mainProject?._id || "-"}</div>

        <div>
          <b>{i18n.t("project:parentProject")}: </b>
        </div>
        <div>{projectDetailData.parentProject?._id || "-"}</div>

        <div>
          <b>{i18n.t("project:childProjects")}: </b>
        </div>
        <div>
          {projectDetailData.childProjects &&
            projectDetailData.childProjects.length > 0
            ? projectDetailData.childProjects
              .map((child) => child._id)
              .join(", ")
            : "-"}
        </div>

        <div>
          <b>{i18n.t("project:clientOrganization")}: </b>
        </div>
        <div>{projectDetailData.clientOrganization?._id || "-"}</div>

        <div>
          <b>{i18n.t("project:department")}: </b>
        </div>
        <div>{projectDetailData.department?._id || "-"}</div>

        <div>
          <b>{i18n.t("project:organization")}: </b>
        </div>
        <div>{projectDetailData.organization?._id || "-"}</div>

        <div>
          <b>{i18n.t("project:milestones")}: </b>
        </div>
        <div>
          {projectDetailData.milestones &&
            projectDetailData.milestones.length > 0
            ? projectDetailData.milestones.length + " milestones"
            : "-"}
        </div>

        <div>
          <b>{i18n.t("project:createdAt")}: </b>
        </div>
        <div>
          {projectDetailData.createdAt
            ? projectDetailData.createdAt.toISOString()
            : "-"}
        </div>

        <div>
          <b>{i18n.t("project:updatedAt")}: </b>
        </div>
        <div>
          {projectDetailData.updatedAt
            ? projectDetailData.updatedAt.toISOString()
            : "-"}
        </div>
      </div>
      <MilestoneListUI projectId={projectId} milestones={projectDetailData.milestones} />
    </div>
  )
}

export default ProjectDetailContent
