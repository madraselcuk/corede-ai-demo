import { useCallback } from 'react'
import { useI18n } from '@/localization/hooks/useI18n'
import { EntityDeleteDialog } from '@/components/organisms/entity-delete/entity-delete.dialog'

interface WebinarDeleteDialogProps {
  webinarId?: string
  webinarName?: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function WebinarDeleteDialog({
  webinarId,
  webinarName,
  isOpen,
  onClose,
  onSuccess,
}: WebinarDeleteDialogProps) {
  const { t } = useI18n()
  const [deleteWebinar, { isLoading }] = useDeleteWebinarMutation()

  const handleDelete = useCallback(async () => {
    if (!webinarId) return

    try {
      await deleteWebinar({ input: { _id: webinarId } })

      onSuccess?.()
      onClose()
    } catch (error) {
      console.error(error)
    }
  }, [webinarId, deleteWebinar, onClose, onSuccess])

  return (
    <EntityDeleteDialog
      isOpen={isOpen}
      isLoading={isLoading}
      title={t('webinar:deleteWebinar')}
      description={t('webinar:deleteWebinarConfirmation', {
        name: webinarName || t('webinar:thisWebinar'),
      })}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  )
}
function useDeleteWebinarMutation(): [any, { isLoading: any }] {
  throw new Error('Function not implemented.')
}
