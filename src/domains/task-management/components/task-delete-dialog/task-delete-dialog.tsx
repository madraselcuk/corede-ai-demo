import { useCallback } from 'react'
import { EntityDeleteDialog } from '@/components/organisms/entity-delete/entity-delete.dialog'
import { i18n } from '@/localization'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

interface TaskDeleteDialogProps {
  taskId?: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function TaskDeleteDialog({
  taskId,
  isOpen,
  onClose,
  onSuccess,
}: TaskDeleteDialogProps) {
  const [deleteTask, { isLoading }] = useTaskDeleteMutation()

  const handleDelete = useCallback(async () => {
    if (!taskId) return

    try {
      await deleteTask({ input: { _id: taskId } })
      toast.push(
        // TODO: add error message translation
        <Notification title="Error deleting task" type="success">
          Error deleting task
        </Notification>,
      )
      onSuccess?.()
      onClose()
    } catch (error) {
      console.error(error)
      toast.push(
        // TODO: add error message translation
        <Notification title="Error deleting task" type="danger">
          Error deleting task
        </Notification>,
      )
    }
  }, [taskId, deleteTask, onClose, onSuccess])

  return (
    <EntityDeleteDialog
      isOpen={isOpen}
      isLoading={isLoading}
      title={i18n.t('task:delete', '')}
      description={`${i18n.t('task:taskDeleteConfirm', '')} "${i18n.t(
        'task:thisTask',
      )}"?`}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  )
}
function useTaskDeleteMutation(): [any, { isLoading: any }] {
  throw new Error('Function not implemented.')
}
