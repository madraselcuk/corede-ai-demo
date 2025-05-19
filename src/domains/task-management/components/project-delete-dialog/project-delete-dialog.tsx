import { useCallback } from "react"
import { EntityDeleteDialog } from "@/components/organisms/entity-delete/entity-delete.dialog"
import { i18n } from '@/localization'
import toast from "@/components/ui/toast"
import Notification from "@/components/ui/Notification"
import { useProjectDeleteMutation } from "../../api"

interface ProjectDeleteDialogProps {
  projectId?: string
  projectQuestion?: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function ProjectDeleteDialog({
  projectId,
  projectQuestion,
  isOpen,
  onClose,
  onSuccess
}: ProjectDeleteDialogProps) {
  const [deleteProject, { isLoading }] = useProjectDeleteMutation()

  const handleDelete = useCallback(async () => {
    if (!projectId) return

    try {
      await deleteProject({ input: { _id: projectId } })
      toast.push(
        // TODO: add error message translation
        <Notification title="Error deleting project" type="success">
          Error deleting project
        </Notification>,
      )
      onSuccess?.()
      onClose()
    } catch (error) {
      console.error(error)
      toast.push(
        // TODO: add error message translation
        <Notification title="Error deleting project" type="danger">
          Error deleting project
        </Notification>,
      )
    }
  }, [projectId, deleteProject, onClose, onSuccess])

  return (
    <EntityDeleteDialog
      isOpen={isOpen}
      isLoading={isLoading}
      title={i18n.t("project:delete", "")}
      description={`${i18n.t("project:projectDeleteConfirm", "")} "${projectQuestion || i18n.t("project:thisProject")
        }"?`}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  )
}
