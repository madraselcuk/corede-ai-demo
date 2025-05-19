import { TaskDetailContainerUIProps } from "../task-detail.container"
import { i18n } from '@/localization'

export const TaskDetailContent = ({
  taskDetailData,
  taskDetailIsLoading
}: TaskDetailContainerUIProps) => {
  console.log("taskDetailData: ", taskDetailData)
  if (taskDetailIsLoading) {
    return <div>Loading...</div>
  }

  if (!taskDetailData) {
    return <div>No task data found</div>
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <b>{i18n.t("task:title")}: </b>
        </div>
        <div>{taskDetailData.title}</div>

        <div>
          <b>{i18n.t("task:description")}: </b>
        </div>
        <div>{taskDetailData.description || "-"}</div>

        <div>
          <b>{i18n.t("task:status")}: </b>
        </div>
        <div>{taskDetailData.status}</div>

        <div>
          <b>{i18n.t("task:priority")}: </b>
        </div>
        <div>{taskDetailData.priority}</div>

        <div>
          <b>{i18n.t("task:progress")}: </b>
        </div>
        <div>{taskDetailData.progress}%</div>

        <div>
          <b>{i18n.t("task:isCompleted")}: </b>
        </div>
        <div>{taskDetailData.isCompleted ? "Yes" : "No"}</div>

        <div>
          <b>{i18n.t("task:startDate")}: </b>
        </div>
        <div>
          {taskDetailData.startDate
            ? taskDetailData.startDate.toString()
            : "-"}
        </div>

        <div>
          <b>{i18n.t("task:dueDate")}: </b>
        </div>
        <div>
          {taskDetailData.dueDate ? taskDetailData.dueDate.toString() : "-"}
        </div>


        <div>
          <b>{i18n.t("task:parentTask")}: </b>
        </div>
        <div>
          {taskDetailData.parentTask ? taskDetailData.parentTask.title : "-"}
        </div>

        <div>
          <b>{i18n.t("task:childTasks")}: </b>
        </div>
        <div>
          {taskDetailData.childTasks ? taskDetailData.childTasks.map(task => task.title + " ") : "-"}
        </div>

        <div>
          <b>{i18n.t("task:tags")}: </b>
        </div>
        <div>
          {taskDetailData.tags && taskDetailData.tags.length > 0
            ? taskDetailData.tags.join(", ")
            : "-"}
        </div>

        <div>
          <b>{i18n.t("task:assignees")}: </b>
        </div>
        <div>
          {taskDetailData.assignees && taskDetailData.assignees.length > 0
            ? taskDetailData.assignees
              .map((assignee) => assignee._id)
              .join(", ")
            : "-"}
        </div>

        <div>
          <b>{i18n.t("task:followers")}: </b>
        </div>
        <div>
          {taskDetailData.followers && taskDetailData.followers.length > 0
            ? taskDetailData.followers
              .map((follower) => follower._id)
              .join(", ")
            : "-"}
        </div>

        <div>
          <b>{i18n.t("task:department")}: </b>
        </div>
        <div>{taskDetailData.department?._id || "-"}</div>

        <div>
          <b>{i18n.t("task:organization")}: </b>
        </div>
        <div>{taskDetailData.organization?._id || "-"}</div>
      </div>
    </div>
  )
}

export default TaskDetailContent
