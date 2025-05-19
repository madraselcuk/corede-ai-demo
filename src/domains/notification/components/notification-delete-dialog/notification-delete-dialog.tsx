import { EntityDelete } from '@/components/organisms/entity-delete/entity-delete'
import { useNotificationDeleteMutation } from '@/domains/notification/api'

interface NotificationDeleteDialogProps {
  notificationId: string
  notificationName: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  onError?: () => void
}

export function NotificationDeleteDialog(props: NotificationDeleteDialogProps) {
  return (
    <EntityDelete
      useEntityDeleteMutation={useNotificationDeleteMutation}
      entityName={props.notificationName}
      entityId={props.notificationId}
      onSuccess={props.onSuccess}
      onError={props.onError}
      onClose={props.onClose}
      isOpen={props.isOpen}
    />
  )
}
