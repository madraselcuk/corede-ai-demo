import { useCallback } from 'react'
import { EntityDeleteDialog } from '@/components/organisms/entity-delete/entity-delete.dialog'
import { i18n } from '@/localization'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useProjectMilestoneDeleteMutation } from '../../api'
interface MilestoneDeleteDialogProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  projectId?: string
  milestoneId?: string
}

export function MilestoneDeleteDialog({
  projectId,
  milestoneId,
  isOpen,
  onClose,
  onSuccess,
}: MilestoneDeleteDialogProps) {
  const [deleteProjectMilestone, { isLoading }] =
    useProjectMilestoneDeleteMutation()

  const handleDelete = useCallback(async () => {
    if (!milestoneId || !projectId) return

    try {
      await deleteProjectMilestone({ input: { projectId, milestoneId } })
      toast.push(
        // TODO: add error message translation
        <Notification title="Error deleting milestone" type="success">
          Error deleting milestone
        </Notification>,
      )
      onSuccess?.()
      onClose()
    } catch (error) {
      console.error(error)
      toast.push(
        // TODO: add error message translation
        <Notification title="Error deleting milestone" type="danger">
          Error deleting milestone
        </Notification>,
      )
    }
  }, [projectId, milestoneId, deleteProjectMilestone, onClose, onSuccess])

  return (
    <EntityDeleteDialog
      isOpen={isOpen}
      isLoading={isLoading}
      title={i18n.t('milestone:delete', '')}
      description={`${i18n.t('milestone:milestoneDeleteConfirm', '')} "${i18n.t(
        'milestone:thisProjectMilestone',
      )}"?`}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  )
}
