import { useCallback } from "react"
import { EntityDeleteDialog } from "@/components/organisms/entity-delete/entity-delete.dialog"
import { i18n } from '@/localization'
import toast from "@/components/ui/toast"
import Notification from "@/components/ui/Notification"
import { useProjectMilestoneTaskDeleteMutation } from "../../api"
interface ProjectMilestoneTaskDeleteDialogProps {
  projectId: string
  milestoneId: string
  taskId: string
  projectMilestoneTaskQuestion?: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function ProjectMilestoneTaskDeleteDialog({
  projectId,
  milestoneId,
  taskId,
  projectMilestoneTaskQuestion,
  isOpen,
  onClose,
  onSuccess
}: ProjectMilestoneTaskDeleteDialogProps) {
  const [deleteProjectMilestoneTask, { isLoading }] =
    useProjectMilestoneTaskDeleteMutation()

  const handleDelete = useCallback(async () => {
    if (!milestoneId) return

    try {
      await deleteProjectMilestoneTask({
        input: { projectId, milestoneId, taskId }
      })
      toast.push(
        // TODO: add error message translation
        <Notification title="Error deleting milestone task" type="success">
          Error deleting milestone task
        </Notification>,
      )
      onSuccess?.()
      onClose()
    } catch (error) {
      console.error(error)
      toast.push(
        // TODO: add error message translation
        <Notification title="Error deleting milestone task" type="danger">
          Error deleting milestone task
        </Notification>,
      )
    }
  }, [
    projectId,
    milestoneId,
    taskId,
    deleteProjectMilestoneTask,
    onClose,
    onSuccess
  ])

  return (
    <EntityDeleteDialog
      isOpen={isOpen}
      isLoading={isLoading}
      title={i18n.t("milestone:delete", "")}
      description={`${i18n.t("milestone:milestoneDeleteConfirm", "")} "${projectMilestoneTaskQuestion ||
        i18n.t("milestone:thisProjectMilestoneTask")
        }"?`}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  )
}
